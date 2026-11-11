/* flow.js (곽두팔 2026-11-12 준보 「자동화는 네모박스로 해서 어디랑 어디랑 연결해야 하는데 끊어져 있다, 노드식으로. 줄글 말고」)
   「자동화·연결」 탭을 노드 그림으로: 들어오는 곳 → E-HR 자동 처리 → 나가는 곳. 선 색 = 연결 상태(연결됨·파일 직접·켜기 전·끊김).
   근거: link.html(자동화·연결 계획 v0.1, 김호철 2026-11-11) 3·4장. index.html 은 한 줄(<script src="flow.js">)만. */
(function(){const X=window.EHRX;if(!X)return;with(X){
const ST={on:['연결됨','#2f8a4e',''],part:['파일 직접 올림','#3b6fd1',''],off:['켜기 전','#d9731a','6 5'],cut:['끊김 · 정할 것','#c62828','3 5']};
/* 들어오는 곳 */
const IN=[
 ['clock','매일 07:00 예약','off','Power Automate 예약 흐름. 아무도 화면을 안 열어도 돌게 함','SharePoint 로 옮긴 뒤 켬 · 흐름 가질 인사팀 공용 계정 필요(IT)'],
 ['req','직원 신청·팀장 승인','on','휴가·교육·양식·티켓 신청','E-HR 화면에서 바로 반영'],
 ['hrok','인사 확정(사람)','on','발령 확정 · 공모 합격 · 휴넷 승인 — 사람이 누르는 버튼 3개','E-HR 화면'],
 ['hunet','휴넷 · 법정교육 협회','part','수료 명단 엑셀','지금은 「받은 명단 넣기」에 직접 올림 → 받는 폴더 자동 반영으로 바꿀 것'],
 ['shop','휴가샵','part','포인트 사용 명단','받는 폴더 → 11월 미사용자 알림'],
 ['nps','국민연금 기준표','part','기준소득월액','받는 폴더 → 공제 변동 계산'],
 ['caps','CAPS 출퇴근','cut','출퇴근 기록','CAPS가 하루 한 번 파일로 내보낼 수 있는지 IT 확인 필요'],
 ['gw','기존 그룹웨어 근태','cut','지난 연차·근태 기록','한 번만 엑셀로 옮길지 결정 필요(준보 님)']];
/* E-HR 안 자동 처리 */
const MID=[
 ['promote','연차촉진','시간','1차 통지, 마감 D-3·D-1 재알림, 기한 지나면 회사 지정안',['clock'],['tm','log'],'promote'],
 ['legal','법정의무교육','시간·파일','10/1 배정, 매주 월요일 미이수 재알림',['clock','hunet'],['tm','log'],'edu'],
 ['elearn','휴넷 이러닝','사건·파일','매월 10일 공지, 신청 → 팀장 의견 → 인사 승인, 미수료 50% 공제',['req','hunet','hrok'],['tm','erp'],'edu'],
 ['m365edu','M365 교육','사건','「듣고 싶어요」가 기준 인원이 되면 개설·등록·전날 알림',['req'],['tm'],'edu'],
 ['post','인사발령 게시','사건','발령 확정 → 공문 PDF 저장 → 공지 채널 게시',['hrok'],['tc','erp'],'move'],
 ['acct','입·퇴사 계정','사건','입사자 계정 발급 요청, 퇴사자 회수',['hrok'],['m365'],'onoff'],
 ['clk','출퇴근 누락 보정','시간·파일','매일 아침, 장애 날 자동 보정 · 본인 알림 · 52시간 계산',['clock','caps'],['tm'],'work'],
 ['pension','국민연금 변동','파일','기준표가 들어오면 사람마다 공제 변동액 계산',['nps'],['tm','erp'],'pay'],
 ['point','휴가샵 포인트','시간·파일','11월 미사용자에게만 알림',['clock','shop'],['tm'],'welfare'],
 ['offjt','일학습병행 OFF-JT','시간','훈련일 3일 전 본인·팀장 알림',['clock'],['tm'],'forms/offjt'],
 ['gong','사내공모 결과','사건','합격자를 고르면 나머지 지원자에게 결과 자동 안내',['hrok'],['tm'],'forms'],
 ['ticket','티켓 선착순','사건','신청 시각 순으로 당첨·대기',['req'],['tm'],'forms'],
 ['hist','지난 근태 옮기기','한 번','올해 연차·근태 기록 일괄 넣기',['gw'],[],'bulk']];
/* 나가는 곳 */
const OUT=[
 ['tm','Teams 개인 알림','off','통지·재알림·결재 요청을 1:1 채팅으로, 글에 E-HR 화면 링크','지금은 「발송 대기열」에 쌓이기만 함 → Power Automate 흐름 봇으로 보낼지 결정(준보 님)'],
 ['tc','Teams 공지_01_휴롬그룹','off','인사발령 게시 + 공문 PDF','옮기는 날 켬'],
 ['erp','ERP (영림원)','part','입·퇴사·발령, 급여 반영(휴넷 공제·연금 변동·수당·O/T)','1단계 「ERP 연동」 엑셀 내보내기를 급여 담당이 올림 · 2단계 API·DB 연계는 영림원 협의 필요'],
 ['m365','M365 계정·라이선스','cut','입사자 계정 발급, 퇴사자 회수','1단계: 체크리스트가 IT에 요청 · 자동 생성은 IT 권한 필요'],
 ['log','통지 기록(증빙)','on','누구에게·언제·무엇을 — 엑셀 내려받기','E-HR 안에 남음']];
const N={};IN.forEach(x=>N[x[0]]={k:'in',id:x[0],t:x[1],s:x[2],what:x[3],how:x[4]});OUT.forEach(x=>N[x[0]]={k:'out',id:x[0],t:x[1],s:x[2],what:x[3],how:x[4]});
MID.forEach(x=>N[x[0]]={k:'mid',id:x[0],t:x[1],trig:x[2],what:x[3],ins:x[4],outs:x[5],go:x[6]});
/* 자동 처리의 상태 = 들어오고 나가는 선 중 가장 나쁜 것 */
const RANK=['on','part','off','cut'];const worst=a=>a.reduce((w,s)=>RANK.indexOf(s)>RANK.indexOf(w)?s:w,'on');
MID.forEach(x=>{const n=N[x[0]];n.s=worst(x[4].concat(x[5]).map(k=>N[k].s))});
const EDGES=[];MID.forEach(x=>{x[4].forEach(a=>EDGES.push([a,x[0],N[a].s]));x[5].forEach(b=>EDGES.push([x[0],b,N[b].s]))});

const css=document.createElement('style');css.textContent=
'.fl-wrap{position:relative}.fl-grid{position:relative;display:grid;grid-template-columns:1fr 1.15fr 1fr;gap:0 70px;z-index:1}.fl-col{display:flex;flex-direction:column;gap:8px;justify-content:center}.fl-col h4{margin:0 0 4px;font-size:12px;color:#6b7075;text-align:center;font-weight:600}'+
'.fl-n{position:relative;background:#fff;border:1.5px solid #dfe3e0;border-left-width:5px;border-radius:12px;padding:8px 10px;cursor:pointer;transition:box-shadow .15s,transform .15s,opacity .15s}.fl-n:hover,.fl-n.sel{box-shadow:0 6px 18px -8px #0b221955;transform:translateY(-1px)}.fl-n b{display:block;font-size:13.5px;word-break:keep-all}.fl-n span{font-size:11px;color:#6b7075}.fl-n.dim{opacity:.28}'+
'.fl-n .dot{position:absolute;top:50%;width:9px;height:9px;border-radius:50%;background:#fff;border:2px solid currentColor;transform:translateY(-50%)}.fl-n .dot.l{left:-7px}.fl-n .dot.r{right:-6px}'+
'.fl-svg{position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;overflow:visible}.fl-svg path{fill:none;stroke-width:2;transition:opacity .15s,stroke-width .15s}.fl-svg path.dim{opacity:.1}.fl-svg path.hi{stroke-width:3.2}'+
'.fl-leg{display:flex;gap:14px;flex-wrap:wrap;font-size:12px;color:#5b5f63;margin-bottom:10px;align-items:center}.fl-leg i{display:inline-block;width:26px;height:0;border-top:3px solid;vertical-align:middle;margin-right:5px}.fl-leg i.d{border-top-style:dashed}'+
'.fl-det{margin-top:14px}.fl-det .row{display:flex;gap:8px;flex-wrap:wrap;margin-top:6px}.fl-tag{font-size:11px;padding:2px 8px;border-radius:999px;font-weight:600}'+
'@media(max-width:760px){.fl-grid{gap:0 26px}.fl-n{padding:6px 7px}.fl-n b{font-size:11.5px}.fl-n span{display:none}}';
document.head.appendChild(css);
let sel='',only='';
const tag=s=>'<span class="fl-tag" style="background:'+ST[s][1]+'1a;color:'+ST[s][1]+'">'+ST[s][0]+'</span>';
const box=(n,sides)=>'<div class="fl-n" data-fl="'+n.id+'" style="border-left-color:'+ST[n.s][1]+';color:'+ST[n.s][1]+'">'+(sides.includes('l')?'<i class="dot l"></i>':'')+(sides.includes('r')?'<i class="dot r"></i>':'')+'<b style="color:#1b1d1f">'+esc(n.t)+'</b><span>'+esc(n.k==='mid'?n.trig:ST[n.s][0])+'</span></div>';
V.link=function(){const cnt=s=>EDGES.filter(e=>e[2]===s).length,vis=n=>!only||n.s===only||n.k==='mid'&&[...n.ins,...n.outs].some(k=>N[k].s===only);
 return head('자동화·연결','선 '+EDGES.length+'개 중 끊김 '+cnt('cut')+' · 켜기 전 '+cnt('off'))+
 (()=>{const t=EDGES.length,c=cnt('on'),pct=Math.round(c/t*100);return '<div class="card" style="padding:12px 16px;margin-bottom:10px"><div style="display:flex;justify-content:space-between;font-size:13px"><b>최종 목표: 모든 선 연결</b><span>'+c+' / '+t+' 연결 ('+pct+'%) · 남은 '+(t-c)+'</span></div><div style="height:10px;background:#eceeed;border-radius:6px;margin-top:6px;overflow:hidden;display:flex">'+['on','part','off','cut'].map(k=>'<i style="width:'+(cnt(k)/t*100)+'%;background:'+ST[k][1]+'"></i>').join('')+'</div></div>'})()+
 '<div class="fl-leg">'+Object.entries(ST).map(([k,[l,c,d]])=>'<a href="#" data-flf="'+k+'" style="text-decoration:none;color:inherit;'+(only===k?'font-weight:700':'')+'"><i class="'+(d?'d':'')+'" style="border-top-color:'+c+'"></i>'+l+' '+cnt(k)+'</a>').join('')+(only?'<a href="#" data-flf="" class="btn sm">전체 보기</a>':'')+'<span style="margin-left:auto"><a class="btn sm" href="link.html" target="_blank" rel="noopener">계획 문서</a></span></div>'+
 '<section class="card"><div class="bd"><div class="fl-wrap"><svg class="fl-svg" id="fl_svg"></svg><div class="fl-grid">'+
  '<div class="fl-col"><h4>들어오는 곳</h4>'+IN.map(x=>N[x[0]]).filter(vis).map(n=>box(n,'r')).join('')+'</div>'+
  '<div class="fl-col"><h4>E-HR 자동 처리</h4>'+MID.map(x=>N[x[0]]).filter(vis).map(n=>box(n,'lr')).join('')+'</div>'+
  '<div class="fl-col"><h4>나가는 곳</h4>'+OUT.map(x=>N[x[0]]).filter(vis).map(n=>box(n,'l')).join('')+'</div>'+
 '</div></div><div class="fl-det" id="fl_det">'+det()+'</div></div></section>'};
function det(){const n=N[sel];if(!n)return '<div class="tag">상자를 누르면 무엇이 어디로 이어지는지, 끊긴 곳은 무엇을 정해야 하는지 나옵니다</div>';
 if(n.k==='mid')return '<b>'+esc(n.t)+'</b> '+tag(n.s)+' <span class="tag">'+esc(n.trig)+'</span><div style="margin-top:4px">'+esc(n.what)+'</div>'+
  '<div class="row">받는 곳: '+n.ins.map(k=>'<a href="#" data-fl="'+k+'">'+esc(N[k].t)+'</a> '+tag(N[k].s)).join(' · ')+'</div>'+
  '<div class="row">내보내는 곳: '+(n.outs.length?n.outs.map(k=>'<a href="#" data-fl="'+k+'">'+esc(N[k].t)+'</a> '+tag(N[k].s)).join(' · '):'E-HR 안')+'</div>'+
  (n.go?'<div class="row"><a class="btn p sm" href="#'+n.go+'">이 화면 열기</a></div>':'');
 const M=MID.filter(x=>(n.k==='in'?x[4]:x[5]).includes(n.id)).map(x=>N[x[0]]);
 return '<b>'+esc(n.t)+'</b> '+tag(n.s)+'<div style="margin-top:4px">'+esc(n.what)+'</div><div class="row"><span class="tag">'+esc(n.how)+'</span></div><div class="row">'+(n.k==='in'?'이어지는 자동 처리':'보내는 자동 처리')+': '+M.map(m=>'<a href="#" data-fl="'+m.id+'">'+esc(m.t)+'</a>').join(' · ')+'</div>'}
function draw(){const svg=document.getElementById('fl_svg');if(!svg)return;const W=svg.parentElement.getBoundingClientRect();let h='';
 const near=sel?new Set([sel].concat(EDGES.filter(e=>e[0]===sel||e[1]===sel).flatMap(e=>[e[0],e[1]]))):null;
 EDGES.forEach(([a,b,s])=>{const A=document.querySelector('[data-fl="'+a+'"].fl-n'),B=document.querySelector('[data-fl="'+b+'"].fl-n');if(!A||!B)return;const ra=A.getBoundingClientRect(),rb=B.getBoundingClientRect();
  const x1=ra.right-W.left,y1=ra.top+ra.height/2-W.top,x2=rb.left-W.left,y2=rb.top+rb.height/2-W.top,dx=Math.max(30,(x2-x1)/2),on=!sel||a===sel||b===sel;
  h+='<path class="'+(sel?(on?'hi':'dim'):'')+'" d="M'+x1+','+y1+' C'+(x1+dx)+','+y1+' '+(x2-dx)+','+y2+' '+x2+','+y2+'" stroke="'+ST[s][1]+'" stroke-dasharray="'+ST[s][2]+'"/>'});
 svg.innerHTML=h;document.querySelectorAll('.fl-n').forEach(e=>{e.classList.toggle('sel',e.dataset.fl===sel);e.classList.toggle('dim',!!near&&!near.has(e.dataset.fl))})}
function wireFlow(){if(!document.getElementById('fl_svg'))return;
 document.querySelectorAll('[data-fl]').forEach(e=>e.onclick=ev=>{ev.preventDefault();sel=sel===e.dataset.fl?'':e.dataset.fl;document.getElementById('fl_det').innerHTML=det();wireFlow();draw()});
 document.querySelectorAll('[data-flf]').forEach(e=>e.onclick=ev=>{ev.preventDefault();only=e.dataset.flf;sel='';render()});
 requestAnimationFrame(draw)}
window.addEventListener('resize',()=>requestAnimationFrame(draw));
const wire0=X.wire;X.wire=function(page){wire0(page);if(page==='link')wireFlow()};
if((location.hash||'').startsWith('#link'))render();
}})();
