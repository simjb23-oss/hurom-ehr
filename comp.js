/* comp.js (곽두팔 2026-11-17 준보 「항목별 점수도 넣고 일용직 관리도 넣고 다 넣어」)
   index.html 은 한 줄(<script src="comp.js">)만.
   1) 평가: 역량 항목별 점수(1~5점) — 항목은 인사가 직군(항목 묶음)별로 정하고 부서에 붙임. 팀장 항목 평균으로 등급.
   2) 인사카드 프로필: 역량 막대(100점 만점, 지난 확정 평가와 차이). 점수는 확정 평가에서만 — 없으면 「평가 전」.
      보기: 인사·팀장은 점수, 본인은 등급만(준보 결정 전까지 추천안).
   3) 일용직 관리: 명부·출근 기록·이번 달 근로일/시간/지급액/세금(참고)·4대보험 확인 대상·근로내용확인신고 알림·얇은 카드(#daily/ID). */
(function(){const X=window.EHRX;if(!X||!X.tbl)return;with(X){
const DEF_ITEMS=['전문성','문제 해결','실행력','협업','리더십','소통'];
function ens(){const s=X.st;
 if(!s.compSets||!s.compSets.length)s.compSets=[{name:'공통',items:DEF_ITEMS.slice()}];
 s.compMap=s.compMap||{};
 s.daily=s.daily||{ws:[],days:[]};s.daily.ws=s.daily.ws||[];s.daily.days=s.daily.days||[];return s}
const setOf=no=>{const s=ens(),p=person(no)||{},n=s.compMap[p.dept];return s.compSets.find(c=>c.name===n)||s.compSets[0]};
const itemsOf=e=>e.items||setOf(e.no).items;
const avg=o=>{const v=Object.values(o||{}).map(Number).filter(n=>n>0);return v.length?Math.round(v.reduce((a,b)=>a+b,0)/v.length*10)/10:0};

/* ---------- CSS ---------- */
const css=document.createElement('style');css.textContent=
'.cp-it{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px 10px;margin:6px 0}.cp-it label{display:flex;justify-content:space-between;align-items:center;gap:6px;font-size:13px;border:1px solid var(--line);border-radius:8px;padding:4px 8px}.cp-it select{min-width:52px}'+
'.cp-bars{display:flex;flex-direction:column;gap:7px;margin-top:4px}.cp-bar{display:grid;grid-template-columns:72px 1fr 64px;gap:8px;align-items:center;font-size:13px}.cp-bar i{display:block;height:9px;border-radius:9px;background:var(--line,#e5e7eb);overflow:hidden}.cp-bar i s{display:block;height:100%;border-radius:9px;background:#2f8a4e}.cp-bar b{text-align:right}.cp-bar em{font-style:normal;font-size:11px;margin-left:3px}.cp-up{color:#2f8a4e}.cp-dn{color:#d9731a}'+
'.cp-sets textarea{width:100%;min-height:54px;font:inherit;padding:6px 8px;border:1px solid var(--line);border-radius:8px;box-sizing:border-box}'+
'.dw-k{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:12px 0}.dw-k>div{border:1px solid var(--line);border-radius:10px;padding:10px 12px}.dw-k small{display:block;font-size:12px;color:var(--sub)}.dw-k b{font-size:20px}'+
'.dw-warn{background:#fff6ec;border:1px solid #f3c99a;border-radius:10px;padding:8px 12px;margin:0 0 12px;font-size:13px}'+
'@media (max-width:700px){.dw-k{grid-template-columns:repeat(2,1fr)}.cp-bar{grid-template-columns:64px 1fr 58px}}';
document.head.appendChild(css);

/* ---------- 1) 평가 ---------- */
const sel=(k,v)=>'<select class="fld" data-ci="'+k+'">'+[5,4,3,2,1].map(n=>'<option'+(n===v?' selected':'')+'>'+n+'</option>').join('')+'</select>';
const itemForm=e=>'<div class="cp-it" data-ef="'+e.id+'">'+itemsOf(e).map(k=>'<label>'+esc(k)+sel(k,3)+'</label>').join('')+'</div><input class="fld" id="cm_'+e.id+'" placeholder="의견" style="width:100%">';
const itemTxt=o=>o&&o.items?Object.entries(o.items).map(([k,v])=>esc(k)+' '+v).join(' · '):'';
X.V.eval=()=>{const st=ens();
 if(!st.people.length)return head('평가')+'<div class="empty">직원을 먼저 넣으세요</div>';const r=st.role;let b='';
 const cycles=[...new Set(st.evals.map(e=>e.cycle))];
 if(r==='hr'){b+=sec('평가 시작','재직자 모두에게 자기평가가 열립니다','<div class="form"><label>평가 이름<input id="ev_name" value="'+new Date().getFullYear()+' '+(new Date().getMonth()<6?'상반기':'하반기')+'"></label></div><div class="err" id="ev_err"></div><button class="btn p" id="ev_go">평가 시작</button>');
  const depts=[...new Set(st.people.map(p=>p.dept).filter(Boolean))].sort();
  b+=sec('역량 항목','직군(묶음)마다 항목을 정하고 부서에 붙입니다 · 평가를 시작할 때 항목이 고정됩니다','<div class="cp-sets">'+st.compSets.map((c,i)=>'<div style="margin-bottom:10px"><div class="form"><label>묶음 이름<input data-csn="'+i+'" value="'+esc(c.name)+'"></label></div><textarea data-csi="'+i+'" placeholder="항목을 쉼표로">'+esc(c.items.join(', '))+'</textarea>'+(i?' <button class="btn sm" data-csd="'+i+'">묶음 지우기</button>':'')+'</div>').join('')+
  '<button class="btn sm" id="cs_add">+ 묶음 추가</button> <button class="btn p sm" id="cs_save">항목 저장</button></div>'+
  (depts.length?'<h4 style="margin:14px 0 6px;font-size:13px">부서별 묶음</h4>'+tbl(['부서','묶음'],depts.map(d=>'<tr><td>'+esc(d)+'</td><td><select class="fld" data-cmd="'+esc(d)+'">'+st.compSets.map(c=>'<option'+(st.compMap[d]===c.name?' selected':'')+'>'+esc(c.name)+'</option>').join('')+'</select></td></tr>')):''));}
 const q=evalQ();
 if(q.length)b+=sec(r==='emp'?'내 자기평가':r==='lead'?'팀장 평가할 것':'인사 확정할 것',q.length+'건 · 항목마다 1~5점',q.map(e=>{const p=person(e.no)||{};
  return '<div style="border:1px solid var(--line);border-radius:10px;padding:10px 12px;margin-bottom:10px"><b>'+esc(e.cycle)+' · '+esc(p.name)+'</b> <span class="tag">'+esc(p.dept)+'</span>'+
   (e.self?'<div style="font-size:13px;margin-top:4px">자기평가 '+e.self.s+'점 — '+itemTxt(e.self)+(e.self.c?' · '+esc(e.self.c):'')+'</div>':'')+
   (e.lead?'<div style="font-size:13px">팀장평가 '+e.lead.s+'점 — '+itemTxt(e.lead)+(e.lead.c?' · '+esc(e.lead.c):'')+'</div>':'')+
   (r==='hr'?'<div style="margin-top:6px">등급 <b>'+GR(e.lead.s)+'</b> (팀장 항목 평균 '+e.lead.s+')</div>':itemForm(e))+
   '<div class="right" style="margin-top:6px"><button class="btn p sm" data-ev="'+e.id+'">'+(r==='emp'?'제출':r==='lead'?'평가 완료':'확정')+'</button></div></div>'}).join(''));
 const list=(r==='emp'?st.evals.filter(e=>e.no===st.me):st.evals);
 return head('평가','인사가 시작 → 직원 자기평가 → 팀장 평가 → 인사 확정(등급) · 역량 항목별 점수')+b+sec('평가 현황',cycles.length+'회 · '+list.length+'건',tbl(['평가','대상','부서','상태','자기','팀장','등급'],list.map(e=>{const p=person(e.no)||{};
  return '<tr><td>'+esc(e.cycle)+'</td><td>'+esc(p.name)+'</td><td>'+esc(p.dept)+'</td><td>'+stB(e.status)+'</td><td>'+(e.self?e.self.s:'—')+'</td><td title="'+esc(r==='emp'?'':itemTxt(e.lead).replace(/&[a-z#0-9]+;/g,''))+'">'+(e.lead?e.lead.s:'—')+'</td><td><b>'+(e.grade||'—')+'</b></td></tr>'}),'평가가 없습니다'+(r!=='hr'?' (인사가 시작합니다)':'')))};
function readItems(e){const o={};document.querySelectorAll('[data-ef="'+e.id+'"] [data-ci]').forEach(s=>o[s.dataset.ci]=+s.value);return o}
function wireEval(){const st=ens(),on=(s,f)=>{const e=$(s);if(e)e.onclick=f};
 on('#ev_go',()=>{const n=$('#ev_name').value.trim();if(!n){$('#ev_err').textContent='이름을 넣으세요';return}if(st.evals.some(e=>e.cycle===n)){$('#ev_err').textContent='같은 이름의 평가가 있습니다';return}
  const ps=st.people.filter(p=>p.status==='재직');if(!ps.length){$('#ev_err').textContent='재직자가 없습니다';return}
  ps.forEach(p=>{const c=setOf(p.no);st.evals.push({id:nid(),cycle:n,no:p.no,status:'자기평가',set:c.name,items:c.items.slice()})});save();render();toast(n+' 평가를 열었습니다 ('+ps.length+'명)','직원으로 자기평가',()=>{st.me=ps[0].no;switchRole('emp','#eval')})});
 document.querySelectorAll('[data-ev]').forEach(b=>b.onclick=()=>{const e=st.evals.find(x=>String(x.id)===b.dataset.ev);if(!e)return;
  if(e.status==='자기평가'){const it=readItems(e);e.self={items:it,s:avg(it),c:($('#cm_'+e.id)||{}).value||''};e.status='팀장평가';save();render();toast('자기평가를 냈습니다','팀장으로 평가하기',()=>switchRole('lead','#eval'))}
  else if(e.status==='팀장평가'){const it=readItems(e);e.lead={items:it,s:avg(it),c:($('#cm_'+e.id)||{}).value||''};e.status='인사 확정 대기';save();render();toast('팀장 평가를 마쳤습니다','인사로 확정하기',()=>switchRole('hr','#eval'))}
  else{e.grade=GR(e.lead.s);if(e.lead.items){e.comp={};Object.entries(e.lead.items).forEach(([k,v])=>e.comp[k]=v*20)}e.status='확정';save();render();toast('확정했습니다 — 등급 '+e.grade)}});
 on('#cs_add',()=>{st.compSets.push({name:'새 묶음 '+st.compSets.length,items:DEF_ITEMS.slice()});save();render()});
 on('#cs_save',()=>{document.querySelectorAll('[data-csi]').forEach(t=>{const i=+t.dataset.csi,c=st.compSets[i],nm=($('[data-csn="'+i+'"]').value||'').trim()||c.name;
   Object.keys(st.compMap).forEach(d=>{if(st.compMap[d]===c.name)st.compMap[d]=nm});c.name=nm;c.items=t.value.split(/[,\n]/).map(x=>x.trim()).filter(Boolean).slice(0,12);if(!c.items.length)c.items=DEF_ITEMS.slice()});
  document.querySelectorAll('[data-cmd]').forEach(s=>st.compMap[s.dataset.cmd]=s.value);save();render();toast('역량 항목을 저장했습니다 — 다음에 시작하는 평가부터 씁니다')});
 document.querySelectorAll('[data-csd]').forEach(b=>b.onclick=()=>{const c=st.compSets[+b.dataset.csd];Object.keys(st.compMap).forEach(d=>{if(st.compMap[d]===c.name)delete st.compMap[d]});st.compSets.splice(+b.dataset.csd,1);save();render()});
 document.querySelectorAll('[data-cmd]').forEach(s=>s.onchange=()=>{st.compMap[s.dataset.cmd]=s.value;save()});}

/* ---------- 2) 인사카드 역량 막대 ---------- */
const EMPTY='<span class="tag">평가 결과로만 채워집니다 · 지금은 평가 전</span>';
function compBars(p){const st=ens(),done=st.evals.filter(e=>e.no===p.no&&e.status==='확정'&&e.comp);
 if(!done.length)return EMPTY;const cur=done[done.length-1],prev=done[done.length-2];
 if(st.role==='emp')return '<span class="tag">'+esc(cur.cycle)+' 등급 '+esc(cur.grade||'—')+' · 항목 점수는 인사·팀장만 봅니다</span>';
 return '<div class="tag" style="margin-bottom:4px">'+esc(cur.cycle)+' 확정 · 100점 만점'+(prev?' · 지난 '+esc(prev.cycle)+'과 차이':'')+'</div><div class="cp-bars">'+Object.entries(cur.comp).map(([k,v])=>{const d=prev&&prev.comp&&prev.comp[k]!=null?v-prev.comp[k]:null;
  return '<div class="cp-bar"><span>'+esc(k)+'</span><i><s style="width:'+v+'%"></s></i><b>'+v+(d?'<em class="'+(d>0?'cp-up':'cp-dn')+'">'+(d>0?'▲':'▼')+Math.abs(d)+'</em>':'')+'</b></div>'}).join('')+'</div>'}
const card0=X.V.card;X.V.card=function(no){const h=card0.apply(this,arguments),p=person(X.st.role==='emp'?X.st.me:(no||(X.st.people[0]||{}).no));return p&&h.includes(EMPTY)?h.replace(EMPTY,compBars(p)):h};

/* ---------- 3) 일용직 관리 ---------- */
const ym=()=>today().slice(0,7);
const dTax=w=>{const t=Math.max(0,w-150000)*0.06*0.45;const inc=t<1000?0:Math.floor(t/10)*10;return {inc,loc:Math.floor(inc*0.1/10)*10}}; // 일용근로소득: (일당−15만)×6%×(1−55%), 1천원 미만 소액부징수, 지방소득세 10% — 참고 계산
function spells(days){const ds=[...new Set(days.map(d=>d.date))].sort();let n=0,last=null;ds.forEach(d=>{if(!last||(new Date(d)-new Date(last))/864e5>7)n++;last=d});return n} // 7일 넘게 쉬고 다시 오면 새 묶음
function dwStat(w,m){const st=ens(),all=st.daily.days.filter(d=>d.wid===w.id),md=all.filter(d=>!m||d.date.slice(0,7)===m);
 const pay=md.reduce((a,d)=>a+(+d.wage||0),0),hrs=md.reduce((a,d)=>a+(+d.hours||0),0),days=new Set(md.map(d=>d.date)).size;
 const tx=md.reduce((a,d)=>{const t=dTax(+d.wage||0);a.inc+=t.inc;a.loc+=t.loc;return a},{inc:0,loc:0});
 return {all,md,pay,hrs,days,tx,back:Math.max(0,spells(all)-1),ins:days>=8||hrs>=60}}
X.V.daily=(id)=>{const st=ens();if(st.role!=='hr')return head('일용직 관리')+'<div class="empty">인사만 봅니다</div>';
 const D=st.daily;if(id){const w=D.ws.find(x=>String(x.id)===String(id));if(w)return dwCard(w)}
 const m=st.dwM||ym(),months=[...new Set(D.days.map(d=>d.date.slice(0,7)).concat([ym()]))].sort().reverse();
 const rows=D.ws.map(w=>[w,dwStat(w,m)]),act=rows.filter(([,s])=>s.days);
 const tot=act.reduce((a,[,s])=>({d:a.d+s.days,h:a.h+s.hrs,p:a.p+s.pay}),{d:0,h:0,p:0});
 const pm=new Date(m+'-01');pm.setMonth(pm.getMonth()-1);const pmS=pm.toISOString().slice(0,7),pmN=D.ws.filter(w=>dwStat(w,pmS).days).length;
 const nx=new Date(m+'-01');nx.setMonth(nx.getMonth()+1);
 let b='';
 if(pmN&&m===ym())b+='<div class="dw-warn">지난 달('+pmS+') 일한 일용직 '+pmN+'명 — 이번 달 15일까지 근로내용확인신고(고용·산재)를 내야 합니다.</div>';
 if(act.some(([,s])=>s.ins))b+='<div class="dw-warn">이번 달 8일 이상 또는 60시간 이상 일한 사람이 있습니다 — 국민연금·건강보험 가입 대상인지 확인하세요 (표의 「4대보험」 칸).</div>';
 b+='<div class="dw-k"><div><small>'+m+' 일한 사람</small><b>'+act.length+'</b>명</div><div><small>근로일 합</small><b>'+tot.d+'</b>일</div><div><small>시간 합</small><b>'+tot.h+'</b>시간</div><div><small>지급액 합</small><b>'+won(tot.p)+'</b>원</div></div>';
 b+=sec('출근 기록','하루 한 줄 · 일당은 사람 기본 일당이 들어갑니다',D.ws.length?'<div class="form"><label>날짜<input type="date" id="dw_d" value="'+today()+'"></label><label>사람<select id="dw_w">'+D.ws.map(w=>'<option value="'+w.id+'">'+esc(w.name)+'</option>').join('')+'</select></label><label>공정<input id="dw_p" placeholder="예: 포장"></label><label>시간<input id="dw_h" type="number" value="8" min="1" max="16"></label><label>일당(원)<input id="dw_g" type="number" placeholder="기본 일당"></label></div><div class="err" id="dw_err"></div><button class="btn p" id="dw_go">기록</button>':'<div class="empty">먼저 아래에서 일용직을 등록하세요</div>');
 b+=sec(m+' 일용직 현황','<select class="fld" id="dw_m">'+months.map(x=>'<option'+(x===m?' selected':'')+'>'+x+'</option>').join('')+'</select>',tbl(['이름','숙련 공정','근로일','시간','>지급액','>소득세','>지방세','다시 온 횟수','4대보험',''],rows.map(([w,s])=>'<tr><td><a href="#daily/'+w.id+'">'+esc(w.name)+'</a></td><td>'+esc((w.skills||[]).join(', '))+'</td><td>'+s.days+'</td><td>'+s.hrs+'</td><td class="right">'+won(s.pay)+'</td><td class="right">'+won(s.tx.inc)+'</td><td class="right">'+won(s.tx.loc)+'</td><td>'+s.back+'회</td><td>'+(s.ins?'<span class="st w">확인</span>':'—')+'</td><td class="right"><button class="btn sm" data-dwx="'+w.id+'">지우기</button></td></tr>'),'등록된 일용직이 없습니다')+
  (D.ws.length?'<p style="margin:8px 0 0"><button class="btn sm" id="dw_csv">'+m+' 엑셀(CSV)</button> <span class="tag">세금은 일당 15만원 공제 · 6% · 55% 세액공제로 계산한 참고값</span></p>':''));
 b+=sec('일용직 등록','실제 사람만 넣습니다','<div class="form"><label>이름<input id="dn_n"></label><label>연락처<input id="dn_t" placeholder="010-"></label><label>숙련 공정<input id="dn_s" placeholder="쉼표로: 포장, 조립"></label><label>기본 일당(원)<input id="dn_g" type="number"></label></div><div class="err" id="dn_err"></div><button class="btn p" id="dn_go">등록</button>');
 return head('일용직 관리','명부 · 출근 기록 · 근로일·시간 · 다시 온 횟수 · 4대보험 확인')+b};
function dwCard(w){const s=dwStat(w,''),m=dwStat(w,ym()),last=s.all.slice().sort((a,c)=>a.date<c.date?1:-1);
 const procs={};s.all.forEach(d=>{if(d.proc)procs[d.proc]=(procs[d.proc]||0)+1});
 return head('일용직 카드','<a href="#daily">일용직 관리로</a>')+'<section class="card"><div class="bd"><div class="pf"><div class="av">'+esc((w.name||'?').charAt(0))+'</div><div style="flex:1;min-width:200px"><div class="nm">'+esc(w.name)+' <span class="st c">일용</span></div><div class="ln"><span>'+esc(w.tel||'연락처 없음')+'</span><span>기본 일당 '+won(w.wage)+'원</span><span>처음 '+(last.length?last[last.length-1].date:'—')+'</span><span>최근 '+(last.length?last[0].date:'—')+'</span></div></div></div>'+
 '<div class="dw-k"><div><small>누적 근로일</small><b>'+s.days+'</b>일</div><div><small>누적 시간</small><b>'+s.hrs+'</b>시간</div><div><small>다시 온 횟수</small><b>'+s.back+'</b>회</div><div><small>이번 달</small><b>'+m.days+'</b>일 '+(m.ins?'<span class="st w">4대보험 확인</span>':'')+'</div></div>'+
 '<div class="pf-2"><div><h4>숙련 공정</h4>'+((w.skills||[]).length?w.skills.map(x=>'<span class="st c">'+esc(x)+'</span>').join(' '):'<span class="tag">없음</span>')+(Object.keys(procs).length?'<h4 style="margin-top:12px">일한 공정</h4>'+Object.entries(procs).map(([k,v])=>'<span class="st o">'+esc(k)+' '+v+'일</span>').join(' '):'')+'</div>'+
 '<div><h4>최근 근무</h4><div class="tl">'+(last.length?last.slice(0,10).map(d=>'<p><b>'+d.date+'</b> '+esc(d.proc||'')+' '+d.hours+'시간 · '+won(d.wage)+'원 <button class="btn sm" data-dwd="'+d.id+'">지우기</button></p>').join(''):'<p class="tag">기록 없음</p>')+'</div></div></div></div></section>'}
function wireDaily(){const st=ens(),D=st.daily,on=(s,f)=>{const e=$(s);if(e)e.onclick=f};
 on('#dn_go',()=>{const n=$('#dn_n').value.trim();if(!n){$('#dn_err').textContent='이름을 넣으세요';return}
  D.ws.push({id:nid(),name:n,tel:$('#dn_t').value.trim(),skills:$('#dn_s').value.split(',').map(x=>x.trim()).filter(Boolean),wage:+$('#dn_g').value||0,at:now()});save();render();toast(n+' 님을 일용직으로 등록했습니다')});
 on('#dw_go',()=>{const w=D.ws.find(x=>String(x.id)===$('#dw_w').value),d=$('#dw_d').value,h=+$('#dw_h').value;if(!w||!d){$('#dw_err').textContent='날짜와 사람을 고르세요';return}
  if(!(h>0&&h<=16)){$('#dw_err').textContent='시간은 1~16';return}if(D.days.some(x=>x.wid===w.id&&x.date===d)){$('#dw_err').textContent='그날 기록이 이미 있습니다';return}
  const g=+$('#dw_g').value||w.wage||0;if(!g){$('#dw_err').textContent='일당을 넣으세요';return}
  D.days.push({id:nid(),wid:w.id,date:d,proc:$('#dw_p').value.trim(),hours:h,wage:g});st.dwM=d.slice(0,7);save();render();toast(w.name+' '+d+' 기록했습니다')});
 const ms=$('#dw_m');if(ms)ms.onchange=()=>{st.dwM=ms.value;save();render()};
 on('#dw_csv',()=>{const m=st.dwM||ym();dl('일용직_'+m+'.csv',csv([['이름','연락처','날짜','공정','시간','일당','소득세','지방세']].concat(D.days.filter(d=>d.date.slice(0,7)===m).sort((a,c)=>a.date<c.date?-1:1).map(d=>{const w=D.ws.find(x=>x.id===d.wid)||{},t=dTax(+d.wage||0);return [w.name,w.tel,d.date,d.proc,d.hours,d.wage,t.inc,t.loc]}))),'text/csv')});
 document.querySelectorAll('[data-dwx]').forEach(b=>b.onclick=()=>{if(!twice(b))return;const id=+b.dataset.dwx;D.ws=D.ws.filter(x=>x.id!==id);D.days=D.days.filter(x=>x.wid!==id);save();render()});
 document.querySelectorAll('[data-dwd]').forEach(b=>b.onclick=()=>{if(!twice(b))return;D.days=D.days.filter(x=>x.id!==+b.dataset.dwd);save();render()});}

/* 메뉴: 인사 › 일용직 */
const G=(X.MENUS.hr||[]).find(g=>g[0]==='인사');if(G&&!G[1].some(i=>i[0]==='daily'))G[1].push(['daily','일용직']);
const w0=X.wire;X.wire=function(page){w0(page);if(page==='eval')wireEval();if(page==='daily')wireDaily()};
window.EHRCOMP={ens,compBars,dwStat,dTax,spells};
if(/^#(eval|daily|card)/.test(location.hash||''))render();
}})();
