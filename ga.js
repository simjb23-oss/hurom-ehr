/* ga.js (곽두팔 2026-11-12 준보 「사내구매 이것도 넣고」「회의실현황 리스트 뭐 이런 것도 좋고」)
   총무 화면 두 개: 사내구매(신청 → 총무 접수 → 준비 → 수령, 급여 공제 합계) · 회의실 현황(Exchange 회의실 예약, rooms.json).
   index.html 은 한 줄(<script src="ga.js">)만. rooms.json 은 사내 SharePoint 판에만 둡니다(work/ehr/rooms_json.py 가 만듦). */
(function(){const X=window.EHRX;if(!X)return;with(X){
const css=document.createElement('style');css.textContent=
'.ga-flt{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:10px}.ga-chip{display:inline-flex;gap:4px;background:#eceeed;border-radius:999px;padding:3px}.ga-chip a{padding:5px 14px;border-radius:999px;color:#5b5f63;text-decoration:none;font-weight:600;white-space:nowrap}.ga-chip a.on{background:#fff;color:#1b1d1f;box-shadow:0 1px 3px #0002}'+
'.ga-kpi{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px;margin-bottom:12px}.ga-kpi div{background:#fff;border:1px solid #e6e8e6;border-radius:14px;padding:10px 14px}.ga-kpi b{display:block;font-size:22px}.ga-kpi span{color:#6b7075;font-size:12px}'+
'.ga-tl{position:relative;height:22px;min-width:220px;background:repeating-linear-gradient(90deg,#f1f3f2 0 calc(100%/12 - 1px),#e3e6e4 calc(100%/12 - 1px) calc(100%/12));border-radius:6px;overflow:hidden}.ga-tl i{position:absolute;top:2px;bottom:2px;background:#2f8a4e;border-radius:4px;opacity:.85}.ga-tl i.past{background:#9fb5a8}.ga-tl em{position:absolute;top:0;bottom:0;width:2px;background:#d9731a}'+
'.ga-hrs{display:flex;justify-content:space-between;font-size:10px;color:#9a9ea2;min-width:220px}.ga-free{color:#1f6b45;font-weight:700}.ga-busy{color:#b3261e;font-weight:700}'+
'.ga-form{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px}.ga-form label{display:flex;flex-direction:column;gap:4px;font-size:12px;color:#5b5f63}.ga-form input,.ga-form select{border:1px solid #d9dcda;border-radius:8px;padding:8px;font:inherit;color:#1b1d1f;background:#fff}.ga-sum{font-size:15px;font-weight:700;margin-top:8px}'+
'@media(max-width:600px){.ga-tl{min-width:150px}.ga-hrs{display:none}}';
document.head.appendChild(css);
const won=n=>(+n||0).toLocaleString('ko-KR')+'원';
const meNo=()=>st.role==='emp'||!(window.EHR&&EHR.viewerNo)?st.me:EHR.viewerNo();
const B=()=>{if(!st.buy)st.buy={items:[],reqs:[],seq:1};return st.buy};
const KIND={'제품':'자사 제품 (임직원가)','비품':'비품·소모품'};
const STEP=['신청','접수','준비 완료','수령 완료'];const stc=s=>s==='수령 완료'?'o':s==='반려'||s==='취소'?'n':'w';

/* ── 메뉴: 총무 묶음(인사), 회사 생활(직원·팀장) ── */
const addG=(r,g,tabs,at)=>{const M=MENUS[r];if(!M)return;let G=M.find(x=>x[0]===g);if(!G){G=[g,[]];M.splice(at==null?M.length:at,0,G)}tabs.forEach(t=>{if(!G[1].some(x=>x[0]===t[0]))G[1].push(t)})};
addG('hr','총무',[['buy','사내구매'],['rooms','회의실 현황']],MENUS.hr.length-1);
addG('emp','회사 생활',[['buy','사내구매'],['rooms','회의실']]);
addG('lead','회사 생활',[['buy','사내구매'],['rooms','회의실']],MENUS.lead.length-1);

/* ── 사내구매 ── */
V.buy=function(q){const b=B(),hr=st.role==='hr',me=person(meNo())||{};q=q||(hr?'all':'new');
 const tabs=hr?[['all','접수함'],['items','품목·가격표'],['pay','급여 공제']]:[['new','신청'],['mine','내 신청']];
 const mine=b.reqs.filter(r=>r.no===me.no);
 let h=head('사내구매',hr?'신청 '+b.reqs.filter(r=>r.status==='신청').length+'건 대기':'자사 제품 임직원가 구매 · 비품 요청')+
  '<div class="ga-flt"><div class="ga-chip">'+tabs.map(([k,l])=>'<a href="#buy/'+k+'" class="'+(k===q?'on':'')+'">'+l+(k==='mine'&&mine.length?' '+mine.length:'')+'</a>').join('')+'</div></div>';
 if(q==='new'){const it=b.items;
  h+=sec('구매 신청',me.name?esc(me.name)+' · '+esc(me.dept||''):'보는 사람을 고르세요',
   '<div class="ga-form"><label>구분<select id="gb_kind">'+Object.entries(KIND).map(([k,l])=>'<option value="'+k+'">'+l+'</option>').join('')+'</select></label>'+
   '<label>품목<select id="gb_item">'+(it.length?it.map((x,i)=>'<option value="'+i+'">'+esc(x.name)+(x.price?' · '+won(x.price):'')+'</option>').join(''):'')+'<option value="-1">직접 입력</option></select></label>'+
   '<label id="gb_free_l">품목 이름<input id="gb_free" placeholder="예: H400 주스기"></label>'+
   '<label>수량<input id="gb_qty" type="number" min="1" value="1"></label>'+
   '<label id="gb_pay_l">결제<select id="gb_pay"><option>급여 공제</option><option>계좌 이체</option><option>카드</option></select></label>'+
   '<label>받는 곳<select id="gb_recv"><option>사내 수령</option><option>택배</option></select></label>'+
   '<label id="gb_addr_l" style="display:none">택배 주소<input id="gb_addr" placeholder="받을 주소"></label>'+
   '<label>메모<input id="gb_memo" placeholder="색상·용도 등"></label></div>'+
   '<div class="ga-sum" id="gb_sum"></div><div class="err" id="gb_err"></div>'+
   '<div style="margin-top:10px"><button class="btn p" id="gb_send">신청하기</button> <span class="tag">'+(it.length?'가격은 총무가 올린 가격표 기준입니다':'가격표가 아직 없어 금액은 총무가 접수할 때 정합니다')+'</span></div>')}
 if(q==='mine')h+=sec('내 신청',mine.length+'건',mine.length?tbl(mine.slice().reverse(),false):'<div class="empty">아직 신청한 것이 없습니다 — [신청] 탭에서 넣으세요</div>');
 if(q==='all'&&hr){const L=b.reqs.slice().reverse(),w=L.filter(r=>r.status!=='수령 완료'&&r.status!=='반려'&&r.status!=='취소');
  h+='<div class="ga-kpi"><div><b>'+L.filter(r=>r.status==='신청').length+'</b><span>새 신청</span></div><div><b>'+L.filter(r=>r.status==='접수'||r.status==='준비 완료').length+'</b><span>처리 중</span></div><div><b>'+L.filter(r=>r.status==='수령 완료').length+'</b><span>수령 완료</span></div><div><b>'+won(w.reduce((s,r)=>s+(r.price||0)*r.qty,0))+'</b><span>처리 중 금액</span></div></div>'+
   sec('접수함','줄마다 다음 단계 버튼',L.length?tbl(L,true):'<div class="empty">아직 신청이 없습니다</div>')}
 if(q==='items'&&hr)h+=sec('품목·가격표','엑셀 양식에 채워 올리면 신청 화면 품목이 바뀝니다',
  '<div class="ox-tool"><button class="btn p" id="gb_tpl">가격표 엑셀 양식 내려받기</button><label class="btn">가격표 엑셀 올리기<input type="file" id="gb_up" accept=".xlsx,.xls,.csv" hidden></label><span class="err" id="gb_uerr"></span></div>'+
  (b.items.length?'<table><tr><th>품목코드</th><th>품목</th><th>구분</th><th>임직원가</th><th>1인 연 한도</th></tr>'+b.items.map(x=>'<tr><td>'+esc(x.code||'')+'</td><td>'+esc(x.name)+'</td><td>'+esc(KIND[x.kind]||x.kind||'')+'</td><td>'+(x.price?won(x.price):'')+'</td><td>'+(x.limit||'')+'</td></tr>').join('')+'</table>':'<div class="empty">가격표가 없습니다 — 양식을 내려받아 채워 올리세요</div>'));
 if(q==='pay'&&hr){const m=(new Date()).toISOString().slice(0,7),P={};
  b.reqs.filter(r=>r.pay==='급여 공제'&&r.status==='수령 완료'&&(r.done||'').slice(0,7)===m).forEach(r=>{const k=r.no;P[k]=P[k]||{no:k,n:0,sum:0,items:[]};P[k].n++;P[k].sum+=(r.price||0)*r.qty;P[k].items.push(r.item+'×'+r.qty)});
  const R=Object.values(P);
  h+=sec(m+' 급여 공제',R.length+'명 · '+won(R.reduce((s,x)=>s+x.sum,0)),(R.length?'<table><tr><th>사번</th><th>이름</th><th>부서</th><th>건수</th><th>공제액</th><th>품목</th></tr>'+R.map(x=>{const p=person(x.no)||{};return '<tr><td>'+x.no+'</td><td>'+esc(p.name||'')+'</td><td>'+esc(p.dept||'')+'</td><td>'+x.n+'</td><td>'+won(x.sum)+'</td><td>'+esc(x.items.join(', '))+'</td></tr>'}).join('')+'</table><div style="margin-top:10px"><button class="btn p" id="gb_payx">급여 공제 엑셀 내려받기</button> <span class="tag">급여작업 공제 칸에 붙여 넣습니다</span></div>':'<div class="empty">이번 달 수령 완료된 급여 공제 건이 없습니다</div>'))}
 return h};
function tbl(L,hr){return '<table><tr><th>신청일</th>'+(hr?'<th>신청자</th>':'')+'<th>구분</th><th>품목</th><th>수량</th><th>금액</th><th>결제</th><th>받는 곳</th><th>상태</th><th></th></tr>'+L.map(r=>{const p=person(r.no)||{},i=STEP.indexOf(r.status),nx=i>=0&&i<STEP.length-1?STEP[i+1]:'';
 return '<tr><td>'+esc((r.at||'').slice(0,10))+'</td>'+(hr?'<td>'+(window.EHRface?EHRface(p,24)+' ':'')+esc(p.name||r.no)+'<div class="tag">'+esc(p.dept||'')+'</div></td>':'')+'<td>'+esc(r.kind==='비품'?'비품':'제품')+'</td><td>'+esc(r.item)+(r.memo?'<div class="tag">'+esc(r.memo)+'</div>':'')+'</td><td>'+r.qty+'</td><td>'+(r.price?won(r.price*r.qty):(hr&&i>=0&&i<3?'<input class="fld" data-gbp="'+r.id+'" placeholder="단가" style="width:80px;border:1px solid #d9dcda;border-radius:6px;padding:3px 6px">':'-'))+'</td><td>'+esc(r.pay||'-')+'</td><td>'+esc(r.recv)+(r.addr?'<div class="tag">'+esc(r.addr)+'</div>':'')+'</td><td><span class="st '+stc(r.status)+'">'+r.status+'</span></td><td style="white-space:nowrap">'+
  (hr&&nx?'<button class="btn p sm" data-gbn="'+r.id+'">'+nx+'</button> ':'')+(hr&&r.status==='신청'?'<button class="btn no sm" data-gbx="'+r.id+'">반려</button>':'')+(!hr&&r.status==='신청'?'<button class="btn sm" data-gbc="'+r.id+'">취소</button>':'')+'</td></tr>'}).join('')+'</table>'}
function wireBuy(){const b=B(),k=$('#gb_kind');
 if(k){const it=$('#gb_item'),fr=$('#gb_free_l'),rv=$('#gb_recv'),pl=$('#gb_pay_l');
  const sync=()=>{const L=b.items.map((x,i)=>[x,i]).filter(([x])=>!x.kind||x.kind===k.value);it.innerHTML=L.map(([x,i])=>'<option value="'+i+'">'+esc(x.name)+(x.price?' · '+won(x.price):'')+'</option>').join('')+'<option value="-1">직접 입력</option>';upd()};
  const upd=()=>{fr.style.display=it.value==='-1'?'':'none';pl.style.display=k.value==='비품'?'none':'';$('#gb_addr_l').style.display=rv.value==='택배'?'':'none';const x=b.items[+it.value],n=Math.max(1,+$('#gb_qty').value||1);$('#gb_sum').textContent=x&&x.price?'합계 '+won(x.price*n)+(k.value==='비품'?' (회사 비용)':''):''};
  k.onchange=sync;[it,rv,$('#gb_qty')].forEach(e=>e.oninput=e.onchange=upd);sync();
  $('#gb_send').onclick=()=>{const me=person(meNo());if(!me){$('#gb_err').textContent='보는 사람을 먼저 고르세요';return}
   const x=b.items[+it.value],name=it.value==='-1'?$('#gb_free').value.trim():x&&x.name;if(!name){$('#gb_err').textContent='품목 이름을 넣으세요';return}
   const qty=Math.max(1,+$('#gb_qty').value||1);if(x&&x.limit&&qty>+x.limit){$('#gb_err').textContent='1인 한도는 '+x.limit+'개입니다';return}
   if(rv.value==='택배'&&!$('#gb_addr').value.trim()){$('#gb_err').textContent='택배 주소를 넣으세요';return}
   const r={id:b.seq++,no:me.no,kind:k.value,item:name,qty,price:x&&x.price||0,pay:k.value==='비품'?'':$('#gb_pay').value,recv:rv.value,addr:rv.value==='택배'?$('#gb_addr').value.trim():'',memo:$('#gb_memo').value.trim(),status:'신청',at:now(),hist:[]};
   act(r,me.name,'신청');b.reqs.push(r);save();location.hash='#buy/mine';render();toast(name+' '+qty+'개 신청했습니다 → 총무 접수 대기','총무로 접수하기',()=>switchRole('hr','#buy/all'))}}
 const f=id=>b.reqs.find(r=>r.id===+id);
 document.querySelectorAll('[data-gbp]').forEach(e=>e.onchange=()=>{const r=f(e.dataset.gbp);r.price=+e.value.replace(/[^\d]/g,'')||0;save();render()});
 document.querySelectorAll('[data-gbn]').forEach(e=>e.onclick=()=>{const r=f(e.dataset.gbn),i=STEP.indexOf(r.status);r.status=STEP[i+1];if(r.status==='수령 완료')r.done=now();act(r,'총무',r.status);save();render();toast(r.item+': '+r.status)});
 document.querySelectorAll('[data-gbx]').forEach(e=>e.onclick=()=>{const r=f(e.dataset.gbx);r.status='반려';act(r,'총무','반려');save();render();toast(r.item+' 반려했습니다')});
 document.querySelectorAll('[data-gbc]').forEach(e=>e.onclick=()=>{const r=f(e.dataset.gbc);r.status='취소';act(r,(person(r.no)||{}).name||'','취소');save();render();toast('취소했습니다')});
 const COLS=['품목코드','품목','구분(제품/비품)','임직원가','1인 연 한도'];
 const tp=$('#gb_tpl');if(tp)tp.onclick=()=>{if(typeof XLSX==='undefined'){toast('엑셀 도구를 불러오는 중입니다');return}const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet([COLS].concat(b.items.length?b.items.map(x=>[x.code||'',x.name,x.kind||'',x.price||'',x.limit||'']):[['(선택)','품목 이름','제품','숫자만','숫자만']])),'가격표');XLSX.writeFile(wb,'사내구매_가격표_양식.xlsx')};
 const up=$('#gb_up');if(up)up.onchange=()=>{const fl=up.files[0];if(!fl)return;const fr=new FileReader();fr.onload=()=>{try{const wb=XLSX.read(fr.result,{type:'array'}),rows=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]],{defval:''});
   const L=rows.map(o=>({code:String(o['품목코드']||'').replace(/^\(선택\)$/,''),name:String(o['품목']||'').trim(),kind:/비품/.test(o['구분(제품/비품)']||o['구분']||'')?'비품':'제품',price:+String(o['임직원가']||'').replace(/[^\d]/g,'')||0,limit:+String(o['1인 연 한도']||'').replace(/[^\d]/g,'')||0})).filter(x=>x.name&&x.name!=='품목 이름');
   if(!L.length){$('#gb_uerr').textContent='품목 칸이 비었습니다 — 양식 머리글을 그대로 두세요';return}b.items=L;save();render();toast('가격표 '+L.length+'개 품목을 넣었습니다')}catch(e){$('#gb_uerr').textContent='엑셀을 읽지 못했습니다: '+e.message}};fr.readAsArrayBuffer(fl)};
 const px=$('#gb_payx');if(px)px.onclick=()=>{const m=(new Date()).toISOString().slice(0,7),P={};b.reqs.filter(r=>r.pay==='급여 공제'&&r.status==='수령 완료'&&(r.done||'').slice(0,7)===m).forEach(r=>{P[r.no]=(P[r.no]||0)+(r.price||0)*r.qty});
  const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet([['사번','이름','부서','사내구매 공제액']].concat(Object.entries(P).map(([no,s])=>{const p=person(no)||{};return [no,p.name||'',p.dept||'',s]}))),'공제');XLSX.writeFile(wb,'사내구매_급여공제_'+m+'.xlsx')}}

/* ── 회의실 현황 ── */
let RM=null,RMerr='';
fetch('rooms.json',{cache:'no-store'}).then(r=>r.ok?r.json():Promise.reject(r.status)).then(j=>{RM=j;if((location.hash||'').startsWith('#rooms'))render()}).catch(e=>{RMerr=String(e);RM={days:[]}});
const hh=h=>Math.floor(h)+':'+String(Math.round((h%1)*60)).padStart(2,'0');
V.rooms=function(q){const [s0,d0]=(q||'').split('~'),site=decodeURIComponent(s0||''),di=+d0||0;
 if(!RM)return head('회의실 현황','불러오는 중…')+'<div class="empty">회의실 예약을 불러오는 중입니다</div>';
 const D=(RM.days||[])[di];
 if(!D)return head('회의실 현황','연결 전')+'<div class="empty">회의실 예약 자료(rooms.json)가 아직 없습니다 — 사내 SharePoint 판에서 보입니다</div>';
 const H0=RM.from||8,H1=RM.to||20,span=H1-H0,today=di===0,nh=today?RM.nowH:null;
 const sites=[...new Set(RM.days[0].rooms.map(r=>r.s))];
 const L=D.rooms.filter(r=>!site||r.s===site);
 const busy=r=>nh!=null&&r.ev.some(e=>e[0]<=nh&&nh<e[1]);
 const next=r=>r.ev.filter(e=>nh==null||e[0]>nh)[0];
 const link=r=>'https://outlook.office.com/calendar/deeplink/compose?subject='+encodeURIComponent('회의')+'&location='+encodeURIComponent(r.r)+(r.a?'&to='+encodeURIComponent(r.a):'');
 return head('회의실 현황',esc(RM.asof||'')+' 기준')+
  '<div class="ga-flt"><div class="ga-chip">'+[['','전체']].concat(sites.map(x=>[x,x])).map(([k,l])=>'<a href="#rooms/'+encodeURIComponent(k)+'~'+di+'" class="'+(k===site?'on':'')+'">'+l+'</a>').join('')+'</div>'+
  '<div class="ga-chip">'+RM.days.map((x,i)=>'<a href="#rooms/'+encodeURIComponent(site)+'~'+i+'" class="'+(i===di?'on':'')+'">'+(i===0?'오늘':i===1?'내일':'')+' '+x.d.slice(5).replace('-','/')+'</a>').join('')+'</div></div>'+
  '<div class="ga-kpi"><div><b>'+L.length+'</b><span>회의실</span></div>'+(today?'<div><b>'+L.filter(r=>!busy(r)).length+'</b><span>지금 빈 방</span></div>':'')+'<div><b>'+L.reduce((s,r)=>s+r.ev.length,0)+'</b><span>'+(today?'오늘':'내일')+' 예약</span></div><div><b>'+L.filter(r=>!r.ev.length).length+'</b><span>하루 종일 빈 방</span></div></div>'+
  sec('회의실 '+L.length+'개',H0+'시~'+H1+'시 · 초록=예약 · 주황 선=지금',
   '<table class="ga-rooms"><tr><th>회의실</th><th>사업장</th>'+(today?'<th>지금</th>':'')+'<th>다음 예약</th><th style="min-width:230px">'+H0+'시 ~ '+H1+'시</th><th></th></tr>'+
   L.map(r=>{const n=next(r),b=busy(r);return '<tr><td><b>'+esc(r.r)+'</b></td><td>'+esc(r.s)+'</td>'+(today?'<td>'+(b?'<span class="ga-busy">사용 중</span>':'<span class="ga-free">비어 있음</span>')+'</td>':'')+
    '<td>'+(n?hh(n[0])+'~'+hh(n[1])+' <span class="tag">'+esc(n[2])+'</span>':'<span class="tag">없음</span>')+'</td>'+
    '<td><div class="ga-tl">'+r.ev.map(e=>'<i class="'+(nh!=null&&e[1]<=nh?'past':'')+'" style="left:'+((e[0]-H0)/span*100)+'%;width:'+((e[1]-e[0])/span*100)+'%" title="'+hh(e[0])+'~'+hh(e[1])+' '+esc(e[2])+'"></i>').join('')+(nh!=null&&nh>=H0&&nh<=H1?'<em style="left:'+((nh-H0)/span*100)+'%"></em>':'')+'</div><div class="ga-hrs"><span>'+H0+'</span><span>'+((H0+H1)/2)+'</span><span>'+H1+'</span></div></td>'+
    '<td><a class="btn sm" target="_blank" rel="noopener" href="'+link(r)+'">예약</a></td></tr>'}).join('')+'</table>'+
   '<div class="tag" style="margin-top:8px">[예약]을 누르면 Outlook 새 일정에 회의실이 들어간 채로 열립니다. 자료는 Exchange 회의실 예약에서 가져옵니다.</div>')};

/* 화면이 그려진 뒤 버튼 잇기 */
const wire0=X.wire;X.wire=function(page){wire0(page);if(page==='buy')wireBuy()};
if((location.hash||'').match(/^#(buy|rooms)/))render();
}})();
