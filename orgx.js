/* orgx.js (곽두팔 2026-11-12 준보 「조직개편 휴롬엘에스·휴롬 2개 / 끌어다 놓아 조직 만들기 / 직원 조회 화면 / 엑셀 양식 내려받아 채워 올리기 / 샘플은 AX팀원 기준·얼굴」)
   index.html 은 한 줄(<script src="orgx.js">)만. 조직 개편은 회사마다 따로 조직도·초안·호수를 갖고, 발령 대장은 같이 씁니다. */
(function(){const X=window.EHRX;if(!X)return;with(X){
const CO={LS:'휴롬엘에스',H:'휴롬'};
const coOf=p=>p&&p.co==='H'?'H':'LS';
/* 휴롬 조직(M365 디렉터리 회사=휴롬 부서, 2026-11-12 수집 · 조직장 확인 필요) */
const H_BASE='대표\n  AX팀 #직속\n  전략과제운영팀 #직속\n  경영지원본부\n    재무팀\n    전산팀\n  법무본부\n    지식재산팀\n  R&D본부\n    개발기획팀\n    개발1팀\n    개발2팀\n    전장제어팀\n  구매본부\n    구매1팀\n    구매2팀\n  생산본부\n    생산팀\n    피플&컬처팀(H)\n  품질본부\n    품질관리팀\n    품질보증팀';
/* AX팀원(M365 AX팀 그룹, 2026-11-12) — 사진은 M365 프로필 사진이 있는 3명만 */
let AX=[];const PHOTO={};
/* AX팀원 명단·사진(ax.json, photo/)은 사내 SharePoint 판에만 둡니다 — 공개 GitHub 판에는 없음 */
fetch('ax.json',{cache:'no-store'}).then(r=>r.ok?r.json():[]).then(j=>{AX=j||[];AX.forEach(a=>{if(a.photo)PHOTO[a.name]='photo/'+a.photo+'.jpg'});if(AX.length)render()}).catch(()=>{});
const photoOf=p=>p&&(p.photo||PHOTO[p.name]);
const face=(p,sz)=>{sz=sz||32;const u=photoOf(p),n=(p&&p.name)||'?';return '<span class="ox-face" style="width:'+sz+'px;height:'+sz+'px;font-size:'+Math.round(sz*.42)+'px">'+(u?'<img src="'+u+'" alt="">':esc(n.replace(/^\d+번\s*/,'').charAt(0)))+'</span>'};
window.EHRface=face;

const css=document.createElement('style');css.textContent=
'.ox-face{display:inline-flex;align-items:center;justify-content:center;border-radius:50%;background:#e3efe8;color:#0f4c3a;font-weight:700;overflow:hidden;flex:none;vertical-align:middle}.ox-face img{width:100%;height:100%;object-fit:cover}'+
'.ox-co{display:inline-flex;gap:4px;background:#eceeed;border-radius:999px;padding:3px;margin:0 0 12px}.ox-co a{padding:6px 16px;border-radius:999px;color:#5b5f63;text-decoration:none;font-weight:600}.ox-co a.on{background:#fff;color:#1b1d1f;box-shadow:0 1px 3px #0002}'+
'.ox-dnd{display:flex;flex-direction:column;gap:10px}.ox-tool{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:8px}'+
'.ox-n{border:1px solid #e1e3e1;border-radius:12px;background:#fff;padding:6px 8px;transition:background .15s,outline-color .15s}.ox-n.root{background:#1f3a5f;color:#fff;max-width:260px;margin:0 auto}.ox-n.root .tag,.ox-n.root button{color:#cfd8e3}'+
'.ox-n.d1{background:#f4f7f5;border-color:#cfd8d3}.ox-n.d1>.ox-h b{font-size:15px}.ox-kids{display:flex;flex-direction:column;gap:5px;margin-top:6px}.ox-n.dragging{opacity:.4}'+
'.ox-topr{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}.ox-topr .ox-n{min-width:120px}.ox-cols{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(196px,1fr);gap:8px;overflow-x:auto;padding-bottom:6px;align-items:start}.ox-h .gr{color:#9a9ea2}.ox-h b{word-break:keep-all;line-height:1.3}.ox-h button{opacity:.25}.ox-n:hover>.ox-h button{opacity:1}@media(hover:none){.ox-h button{opacity:.8}}.ox-n.mvd{border-color:#b7791f;background:#fdf8ee}'+
'.ox-n.drop{outline:2px dashed #1f7a4d;background:#eef7f1}.ox-n.new{border-color:#1f7a4d}.ox-n.ren{border-color:#b7791f}'+
'.ox-h{display:flex;align-items:center;gap:6px;cursor:grab}.ox-h b{font-size:14px}.ox-h .tag{margin-left:2px}.ox-h .sp{flex:1}.ox-h button{border:0;background:none;color:#9a9ea2;cursor:pointer;font-size:13px;padding:2px 4px}.ox-h button:hover{color:#1b1d1f}'+
'.ox-ppl{display:flex;flex-wrap:wrap;gap:4px;margin-top:5px}.ox-p{display:inline-flex;align-items:center;gap:5px;background:#f4f4f2;border-radius:999px;padding:2px 9px 2px 2px;font-size:12px;cursor:grab}.ox-p.mv{background:#fdf3e1}'+
'.ox-trash{border:2px dashed #d9d9d6;border-radius:12px;padding:10px;text-align:center;color:#9a9ea2}.ox-trash.drop{border-color:#b4412f;color:#b4412f;background:#fbeeea}'+
'.ox-staff td{vertical-align:middle}.ox-nm{display:flex;align-items:center;gap:8px}.ox-flt{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:10px}.ox-flt input{min-width:200px}'+
'#nav .logo:hover,#nav .logo:focus{background:transparent!important;box-shadow:none!important;transform:none!important}.ox-tl{color:#1b1d1f;display:flex;flex-direction:column;gap:4px;padding:6px 4px 6px 40px;border-left:3px solid #1f7a4d;margin-left:14px}.ox-tl div{display:flex;gap:8px;align-items:center;font-size:13px}.ox-hr td{background:#fafbfa}.ox-raw{margin-top:10px}.ox-raw>summary{cursor:pointer;color:#5b5f63;padding:6px 0}'+
'.ox-full{position:fixed;right:16px;bottom:16px;z-index:50;background:#1b1d1f;color:#fff;border-radius:999px;padding:9px 16px;font-weight:600;text-decoration:none;box-shadow:0 4px 14px #0003}'+
'.tch .sh-av.ox-ph{padding:0;overflow:hidden}.tch .sh-av.ox-ph img{width:100%;height:100%;object-fit:cover;border-radius:50%}';
document.head.appendChild(css);

/* ---------- 회사별 조직 개편 ---------- */
function coSync(){
 orgInit0();if(!st.orgs)st.orgs={LS:{org:st.org,draft:st.orgDraft},H:{org:{text:H_BASE,date:'2026-11-12',no:1},draft:null}};
 if(st.orgActive&&st.orgs[st.orgActive])st.orgs[st.orgActive]={org:st.org,draft:st.orgDraft};
 const c=st.orgCo||'LS';st.org=st.orgs[c].org;st.orgDraft=st.orgs[c].draft;st.orgActive=c}
const orgInit0=orgInit;
const vReorg0=V.reorg,wire0=wireReorg,doc0=RG.doc,post0=RG.post,base0=RG.base;
const swapCo=s=>(st.orgCo==='H')?String(s).replace(/휴롬엘에스/g,'휴롬').replace(/HUROM\s*LS\.?/g,'HUROM'):s;
RG.doc=function(){return swapCo(doc0.apply(RG,arguments))};
RG.post=function(){return swapCo(post0.apply(RG,arguments))};
/* 조직장 채울 때 그 회사 사람만 */
RG.base=function(){const keep=st.people,c=st.orgCo||'LS';st.people=keep.filter(p=>coOf(p)===c);try{return base0.apply(RG,arguments)}finally{st.people=keep}};
V.reorg=function(tab){coSync();let h=vReorg0(tab);if(st.role!=='hr')return h;const c=st.orgCo||'LS';
 h=h.replace('<h1>조직 개편</h1>','<h1>조직도·개편</h1>');h=h.replace(/휴롬엘에스 (기존)?조직도/g,(m,o)=>CO[c]+' '+(o||'')+'조직도');
 const sw='<div class="ox-co">'+Object.keys(CO).map(k=>'<a href="#" data-oxco="'+k+'" class="'+(k===c?'on':'')+'">'+CO[k]+'</a>').join('')+'</div>';
 h=h.replace('<div class="tabs">',sw+'<div class="tabs">');
 if((tab||'chart')==='edit')h=h.replace('<div class="g2">',dndBox()+'<details class="ox-raw"><summary>글로 고치기 · 바뀐 것 · 팀원 발령 (끌어 놓으면 여기가 같이 바뀝니다)</summary><div class="g2">').replace(/<\/section><\/div>$/,'</section></div></details>');
 h=h.replace(/(<div class="tabs">[\s\S]*?)(<\/div>)/,(m,a,b)=>a+'<a href="#reorg/m365" class="'+(tab==='m365'?'on':'')+'">부서·인원 (M365)</a>'+b);
 if(tab==='m365'){const o=V.org();h=h.replace(/(<div class="tabs">[\s\S]*?<\/div>)[\s\S]*$/,'$1')+o.replace(/^<div class="top">[\s\S]*?<\/div>/,'')}
 return h};
wireReorg=function(){coSync();wire0();
 document.querySelectorAll('[data-oxco]').forEach(a=>a.onclick=e=>{e.preventDefault();coSync();st.orgCo=a.dataset.oxco;coSync();save();render()});
 wireDnd()};

/* ---------- 끌어다 놓는 조직 편집 ---------- */
const parseT=t=>RG.parse(t);
function toText(N){return N.map(n=>'  '.repeat(n.dep)+n.nm+(n.ld?' | '+n.ld:'')+(n.old?' <- '+n.old:'')+(n.dep===1&&n.tag?' #'+n.tag:'')).join('\n')}
function flat(root){const out=[];(function go(n,d){n.dep=d;out.push(n);n.kids.forEach(k=>go(k,d+1))})(root,0);return out}
function cur(){const s=$('#rg_src');return parseT(s?s.value:(st.orgDraft?st.orgDraft.text:RG.base()))}
function pplMap(){const m={};const c=st.orgCo||'LS';st.people.filter(p=>p.status!=='퇴직'&&coOf(p)===c).forEach(p=>(m[p.dept]=m[p.dept]||[]).push(p));return m}
function movesOf(){const r={};(($('#rg_ppl')||{}).value||'').split('\n').forEach(l=>{const p=l.split('|').map(x=>x.trim());if(p[0]==='전보'&&p.length>=4)r[p[1]]=p[p.length-1]});return r}
function dndBox(){
 const N=cur(),A=new Set(parseT(RG.base()).map(n=>n.nm)),M=pplMap(),MV=movesOf();
 const inOrg={};Object.entries(M).forEach(([d,ps])=>ps.forEach(p=>{const to=MV[p.name]||d;(inOrg[to]=inOrg[to]||[]).push(p)}));
 const pb=n=>(inOrg[n.nm]||[]).length?'<div class="ox-ppl">'+inOrg[n.nm].map(p=>'<span class="ox-p'+(MV[p.name]?' mv':'')+'" draggable="true" data-oxp="'+esc(p.name)+'" data-oxfrom="'+esc(p.dept)+'">'+face(p,22)+esc(p.name)+(p.pos&&p.pos!=='팀원'?' '+esc(p.pos):'')+'</span>').join('')+'</div>':'';
 const hd=n=>'<div class="ox-h"><span class="gr">'+(n.dep?'⠿':'🏢')+'</span><b>'+esc(n.nm)+'</b>'+(n.ld?'<span class="tag">'+esc(n.ld)+'</span>':'')+(n.old?'<span class="tag">← '+esc(n.old)+'</span>':'')+(!n.old&&!A.has(n.nm)?'<span class="st o">신설</span>':'')+(A.has(n.nm)&&n.parent&&AP[n.nm]&&AP[n.nm]!==n.parent?'<span class="st w">이관</span>':'')+
  '<span class="sp"></span><button data-oxadd="'+esc(n.nm)+'" title="아래에 새 조직">＋</button>'+(n.dep?'<button data-oxren="'+esc(n.nm)+'" title="이름 바꾸기">✎</button>':'')+'</div>';
 const AP={};parseT(RG.base()).forEach(n=>AP[n.nm]=n.parent);
 const cls=n=>'ox-n d'+Math.min(n.dep,3)+(n.old?' ren':!A.has(n.nm)?' new':AP[n.nm]!==n.parent?' mvd':'');
 const bx=n=>'<div class="'+cls(n)+'" data-ox="'+esc(n.nm)+'" draggable="true">'+hd(n)+pb(n)+(n.kids.length?'<div class="ox-kids">'+n.kids.map(bx).join('')+'</div>':'')+'</div>';
 const root=N[0]||{nm:'대표',kids:[],dep:0},top=root.kids.filter(k=>k.tag),cols=root.kids.filter(k=>!k.tag);
 return '<section class="card"><div class="hd"><b>조직 바꾸기 · '+CO[st.orgCo||'LS']+'</b><span class="tag">상자를 끌어 다른 상자에 놓으면 그 아래로</span></div><div class="bd">'+
 '<div class="ox-tool"><button class="btn p sm" data-oxadd="'+esc(root.nm)+'">＋ 새 조직</button><span class="tag">⠿ 조직 상자를 끌어 다른 조직에 놓기 = 이관 · 사람을 끌어 놓기 = 전보 · 🗑에 놓기 = 폐지 · ✎ 이름 변경 · ＋ 아래에 신설</span><span class="tag">초록 = 신설 · 주황 = 이름 변경/전보 예정</span></div>'+
 '<div class="ox-dnd"><div class="ox-n root" data-ox="'+esc(root.nm)+'">'+hd(root)+pb(root)+'</div>'+
 (top.length?'<div class="ox-topr">'+top.map(bx).join('')+'</div>':'')+
 '<div class="ox-cols">'+cols.map(bx).join('')+'</div><div class="ox-trash" data-oxtrash="1">🗑 여기에 놓으면 폐지 (아래 조직·사람은 위 조직으로)</div></div></div></section>'}
function commit(N){const s=$('#rg_src');if(!s)return;s.value=toText(N);$('#rg_apply').click()}
function wireDnd(){const box=document.querySelector('.ox-dnd');if(!box)return;let drag=null;
 box.querySelectorAll('[draggable="true"]').forEach(el=>el.addEventListener('dragstart',e=>{e.stopPropagation();drag=el.dataset.oxp?{p:el.dataset.oxp,from:el.dataset.oxfrom}:{o:el.dataset.ox};el.classList.add('dragging');el.addEventListener('dragend',()=>el.classList.remove('dragging'),{once:true});e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain','x')}));
 const tg=[...box.querySelectorAll('.ox-n'),box.querySelector('.ox-trash')];
 tg.forEach(t=>{t.addEventListener('dragover',e=>{if(!drag)return;e.preventDefault();e.stopPropagation();tg.forEach(x=>x.classList.remove('drop'));t.classList.add('drop')});
  t.addEventListener('dragleave',()=>t.classList.remove('drop'));
  t.addEventListener('drop',e=>{e.preventDefault();e.stopPropagation();t.classList.remove('drop');if(!drag)return;const d=drag;drag=null;
   if(d.p){if(t.dataset.oxtrash)return toast('사람은 휴지통에 놓을 수 없습니다 — 퇴사는 인원 명부에서');const to=t.dataset.ox;const pp=$('#rg_ppl');
    let L=pp.value.split('\n').filter(l=>l.trim()&&!(l.split('|')[0].trim()==='전보'&&(l.split('|')[1]||'').trim()===d.p));if(to!==d.from)L.push('전보 | '+d.p+' | '+d.from+' | '+to);pp.value=L.join('\n');
    const N=cur();commit(flat(N[0]));toast(d.p+' → '+to+' 전보를 넣었습니다');return}
   const N=cur(),root=N[0],me=N.find(n=>n.nm===d.o);if(!me)return;const par=N.find(n=>n.nm===me.parent);
   if(t.dataset.oxtrash){par.kids.splice(par.kids.indexOf(me),1,...me.kids);commit(flat(root));toast(me.nm+' 폐지 — 아래 조직은 '+par.nm+'(으)로');return}
   const to=N.find(n=>n.nm===t.dataset.ox);if(!to||to===me)return;
   for(let x=to;x;x=N.find(n=>n.nm===x.parent))if(x===me)return toast('자기 아래 조직으로는 옮길 수 없습니다');
   par.kids.splice(par.kids.indexOf(me),1);to.kids.push(me);if(to===root&&!me.tag)me.tag='';commit(flat(root));toast(me.nm+' → '+to.nm+' 아래로 옮겼습니다')})});
 /* 휴대폰(끌기 안 됨)·클릭: 상자나 사람을 한 번 누르고 → 옮길 곳을 누르기 */
 let pick=null;const fire=t=>t.dispatchEvent(new Event('drop',{cancelable:true}));
 box.querySelectorAll('.ox-p').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();if(pick)pick.el.classList.remove('dragging');pick={el,d:{p:el.dataset.oxp,from:el.dataset.oxfrom}};el.classList.add('dragging');toast(el.dataset.oxp+' — 옮길 조직을 누르세요')}));
 tg.forEach(t=>{const h=t.dataset.oxtrash?t:t.querySelector(':scope>.ox-h');if(!h)return;h.addEventListener('click',e=>{if(e.target.closest('button'))return;e.stopPropagation();
  if(pick){const P=pick;pick=null;P.el.classList.remove('dragging');if(P.el===t)return;drag=P.d;fire(t);return}
  if(t.dataset.oxtrash||!t.getAttribute('draggable'))return;pick={el:t,d:{o:t.dataset.ox}};t.classList.add('dragging');toast(t.dataset.ox+' — 옮길 곳(다른 조직 · 🗑)을 누르세요')})});
 box.querySelectorAll('[data-oxadd]').forEach(b=>b.onclick=e=>{e.stopPropagation();const nm=(prompt('새 조직 이름 ('+b.dataset.oxadd+' 아래)','')||'').trim();if(!nm)return;const N=cur();if(N.some(n=>n.nm===nm))return toast('같은 이름의 조직이 있습니다');
  const p=N.find(n=>n.nm===b.dataset.oxadd)||N[0];p.kids.push({nm,ld:'',tag:'',old:null,kids:[]});commit(flat(N[0]));toast(nm+' 신설 — 인사발령 초안에 들어갔습니다')});
 box.querySelectorAll('[data-oxren]').forEach(b=>b.onclick=e=>{e.stopPropagation();const N=cur(),n=N.find(x=>x.nm===b.dataset.oxren);const nm=(prompt('새 이름',n.nm)||'').trim();if(!nm||nm===n.nm)return;if(N.some(x=>x.nm===nm))return toast('같은 이름의 조직이 있습니다');
  if(!n.old)n.old=n.nm;else if(n.old===nm)n.old=null;n.nm=nm;commit(flat(N[0]));toast('이름을 바꿨습니다')})}

/* ---------- 직원 조회 ---------- */
const COLS=['사번','성명','회사','상위부서','부서명','직위','직책','입사일','퇴사일','메일'];
const coName=p=>CO[coOf(p)];
V.staff=function(q){q=q?decodeURIComponent(q):'';const [c,txt]=(q.includes('~')?q.split('~'):['',q]);
 const L=st.people.filter(p=>(!c||coOf(p)===c)&&(!txt||[p.name,p.dept,p.pos,p.grade,p.no,p.mail].join(' ').includes(txt)));
 const hr=st.role==='hr';
 return head('직원 조회','휴롬 · 휴롬엘에스 '+st.people.filter(p=>p.status!=='퇴직').length+'명')+
 (hr?sec('엑셀로 넣기','양식에 채워 올리면 사번(없으면 이름)으로 맞춰 넣고 바꿉니다',
  '<div class="ox-tool"><button class="btn p" id="ox_tpl">엑셀 양식 내려받기</button><label class="btn">엑셀 올리기<input type="file" id="ox_up" accept=".xlsx,.xls,.csv" hidden></label>'+
  ''+(AX.length?'<button class="btn" id="ox_ax" title="M365 AX팀 그룹 6명">AX팀원 6명 넣기</button>':'')+'<span class="tag">급여대장(Simple 시트)을 그대로 올려도 됩니다 — 사업장명으로 회사를 나눕니다</span></div><div class="err" id="ox_err"></div>'):'')+
 '<section class="card"><div class="hd"><b>직원</b><span class="tag">'+L.length+'명 · 줄을 누르면 인사카드</span></div><div class="bd" style="overflow-x:auto">'+
 '<div class="ox-flt"><div class="ox-co" style="margin:0">'+[['','전체'],['LS','휴롬엘에스'],['H','휴롬']].map(([k,l])=>'<a href="#staff/'+encodeURIComponent(k+'~'+txt)+'" class="'+(k===c?'on':'')+'">'+l+'</a>').join('')+'</div>'+
 '<input id="ox_q" placeholder="이름 · 부서 · 직책 · 사번 찾기" value="'+esc(txt)+'"></div>'+
 (L.length?'<table class="ox-staff"><tr><th>이름</th><th>회사</th><th>부서</th><th>직책</th><th class="hide-m">직위</th><th class="hide-m">사번</th><th class="hide-m">메일</th><th>상태</th><th>사내 이력</th></tr>'+
  L.map(p=>'<tr class="ck" data-go="#card/'+p.no+'"><td><div class="ox-nm">'+face(p,30)+'<b>'+esc(p.name)+'</b></div></td><td>'+coName(p)+'</td><td>'+esc(p.dept||'')+'</td><td>'+esc(p.pos||'')+'</td><td class="hide-m">'+esc(p.grade||'')+'</td><td class="hide-m">'+p.no+'</td><td class="hide-m">'+(p.mail?'<a href="mailto:'+esc(p.mail)+'">'+esc(p.mail)+'</a>':'')+'</td><td><span class="st '+(p.status==='재직'?'o':p.status==='휴직'?'w':'n')+'">'+p.status+'</span></td><td>'+hist(p)+'</td></tr>'+'<tr class="ox-hr" id="oxh_'+p.no+'" hidden><td colspan="9">'+histT(p)+'</td></tr>').join('')+'</table>'
  :'<div class="empty">'+(st.people.length?'찾는 직원이 없습니다':'아직 직원이 없습니다 — 엑셀 양식을 내려받아 채워 올리거나 [AX팀원 6명 넣기]')+'</div>')+'</div></section>'};
const mv=p=>st.moves.filter(m=>m.no===p.no).sort((a,b)=>(a.date+a.at)<(b.date+b.at)?-1:1);
const hist=p=>{const M=mv(p);if(!M.length)return '<span class="tag">없음</span>';const l=M[M.length-1];return '<button class="btn sm" data-oxh="'+p.no+'">'+M.length+'건 · '+esc(l.date)+' '+esc(l.kind)+'</button>'};
const histT=p=>'<div class="ox-tl">'+mv(p).map(m=>'<div><b>'+esc(m.date)+'</b><span class="st">'+esc(m.kind)+'</span>'+esc(m.chg||'')+(m.memo?' <span class="tag">'+esc(m.memo)+'</span>':'')+'</div>').join('')+'</div>';
function addAX(){const y=ymd(new Date());let n=0;if(!st.depts.includes('AX팀'))st.depts.push('AX팀');
 AX.forEach(a=>{if(st.people.some(p=>p.name===a.name&&p.status!=='퇴직'))return;const no='H'+String(st.pseq++).padStart(4,'0');
  st.people.push({no,name:a.name,co:a.co,dept:'AX팀',pos:a.pos,grade:a.grade,join:'2026-10-16',emp:'정규',status:'재직',cl:a.pos==='팀장'?'LV3':'LV2',base:0,allow:0,mail:a.mail+'@hurom.com',office:a.office,...(a.photo?{photo:'photo/'+a.photo+'.jpg'}:{}),...(a.hr?{hrRole:1,perm:{admin:true}}:{})});
  addMove(no,'입사','2026-10-16','AX팀원(M365) · 입사일은 AX팀 발령일로 임시');if(a.me)st.me=no;n++});
 const P=nm=>(st.people.find(p=>p.name===nm)||{}).no,ad=k=>{const d=new Date();d.setDate(d.getDate()+k);return ymd(d)};
 [['정원빈','연차',0,0,1],['김태진','오후반차',1,1,.5],['송재규','외근',2,2,1],['민선경','연차',3,4,2]].forEach(([nm,ty,f,t,dd])=>{const no=P(nm);if(!no||st.reqs.some(r=>r.no===no&&r.reason==='AX 샘플'))return;const r={id:st.seq++,no,type:ty,from:ad(f),to:ad(t),days:dd,reason:'AX 샘플',status:S.OK,at:now(),retro:false,hist:[]};act(r,nm,'신청','AX 샘플');st.reqs.push(r)});
 save();return n}
function readRows(file,cb){const fr=new FileReader();fr.onload=()=>{try{const wb=XLSX.read(fr.result,{type:'array',cellDates:true});const ws=wb.Sheets['Simple']||wb.Sheets['직원']||wb.Sheets[wb.SheetNames[0]];cb(XLSX.utils.sheet_to_json(ws,{defval:'',raw:false,dateNF:'yyyy-mm-dd'}))}catch(e){$('#ox_err').textContent='엑셀을 읽지 못했습니다: '+e.message}};fr.readAsArrayBuffer(file)}
function importRows(R){let add=0,upd=0,skip=0;const d10=v=>String(v||'').slice(0,10);
 R.forEach(r=>{const name=String(r['성명']||r['이름']||'').trim();if(!name){skip++;return}
  const cs=String(r['회사']||r['사업장명']||'');const co=/엘에스|LS/i.test(cs)?'LS':/휴롬/.test(cs)?'H':'LS';
  const o={name,co,dept:String(r['부서명']||r['부서']||'').trim(),pos:String(r['직책']||'').trim()||'팀원',grade:String(r['직위']||r['직급']||'').replace(/　/g,'').trim(),join:d10(r['입사일']),mail:String(r['메일']||'').trim()};
  const left=d10(r['퇴사일']);if(o.dept&&!st.depts.includes(o.dept))st.depts.push(o.dept);
  const no0=String(r['사번']||'').trim();let p=no0?st.people.find(x=>x.no===no0||x.eno===no0):null;if(!p)p=st.people.find(x=>x.name===name&&x.dept===o.dept)||st.people.find(x=>x.name===name&&!o.dept);
  Object.keys(o).forEach(k=>{if(!o[k])delete o[k]});
  if(p){Object.assign(p,o);if(no0)p.eno=no0;if(left){p.status='퇴직';p.leftAt=left}upd++}
  else{const no='H'+String(st.pseq++).padStart(4,'0');st.people.push({no,eno:no0,emp:'정규',status:left?'퇴직':'재직',cl:'LV1',base:+String(r['기본급']||0).replace(/,/g,'')||0,allow:0,dept:'',pos:'팀원',grade:'',join:o.join||ymd(new Date()),...o,...(left?{leftAt:left}:{})});addMove(no,'입사',o.join||ymd(new Date()),'엑셀 올리기');add++}});
 if(!st.me&&st.people.length)st.me=st.people[0].no;save();return [add,upd,skip]}
const wire1=wire;
wire=function(page){wire1(page);if(page!=='staff')return;
 const q=$('#ox_q');if(q){q.onkeydown=e=>{if(e.key==='Enter'){const c=(decodeURIComponent((location.hash.split('/')[1])||'').split('~')[0])||'';location.hash='#staff/'+encodeURIComponent(c+'~'+q.value.trim())}}}
 document.querySelectorAll('[data-oxh]').forEach(b=>b.onclick=e=>{e.stopPropagation();const r=$('#oxh_'+b.dataset.oxh);r.hidden=!r.hidden});
 const t=$('#ox_tpl');if(t)t.onclick=()=>{const ws=XLSX.utils.aoa_to_sheet([COLS,['(비우면 자동)','홍길동','휴롬엘에스','상품전략본부','상품전략1팀','대리','팀원','2026-01-02','','gildong@hurom.com']]);ws['!cols']=COLS.map(()=>({wch:14}));
  const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'직원');XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet([['칸','쓰는 법'],['사번','회사 사번. 비우면 E-HR이 붙입니다'],['회사','휴롬 또는 휴롬엘에스'],['직책','팀원 · 팀장 · 본부장 · 실장 · 센터장'],['퇴사일','적으면 퇴직으로 넣습니다'],['예시 줄','홍길동 줄은 지우고 채우세요']]),'쓰는 법');XLSX.writeFile(wb,'E-HR_직원_양식.xlsx')};
 const u=$('#ox_up');if(u)u.onchange=()=>{const f=u.files[0];if(!f)return;readRows(f,R=>{R=R.filter(r=>String(r['성명']||r['이름']||'')!=='홍길동');const [a,b,s]=importRows(R);render();toast('엑셀 반영 — 새로 '+a+'명 · 바꿈 '+b+'명'+(s?' · 이름 없는 줄 '+s+'개 건너뜀':''))})};
 const x=$('#ox_ax');if(x)x.onclick=()=>{if(!AX.length)return toast('AX팀원 명단은 사내(SharePoint) 판에만 있습니다');const n=addAX();render();toast(n?'AX팀원 '+n+'명을 넣었습니다 (심준보=직원 · 지재범=팀장 · 민선경=인사)':'AX팀원은 이미 들어 있습니다')}};

/* ---------- 메뉴 · 첫 화면 · 얼굴 ---------- */
const addTab=(r,g,item,at)=>{const G=(MENUS[r]||[]).find(x=>x[0]===g);if(G&&!G[1].some(x=>x[0]===item[0]))G[1].splice(at==null?G[1].length:at,0,item)};
addTab('hr','인사',['staff','직원 조회'],0);{const G=MENUS.hr.find(x=>x[0]==='인사');if(G){G[1]=G[1].filter(x=>x[0]!=='org');const r=G[1].find(x=>x[0]==='reorg');if(r)r[1]='조직도·개편'}}addTab('emp','내 정보',['staff','직원 조회'],2);addTab('lead','우리 팀',['staff','직원 조회'],0);
guide=function(){const g=$('#guide');if(!g)return;if(st.people.length){g.innerHTML='';return}
 if(!AX.length){g.innerHTML='<div class="start"><b>아직 등록된 직원이 없습니다</b><span>엑셀 양식을 내려받아 직원을 채워 올리면 바로 돌려 볼 수 있습니다.</span><div><a class="btn p" href="#staff" id="gxl">엑셀로 직원 넣기</a></div></div>';$('#gxl').onclick=e=>{e.preventDefault();switchRole('hr','#staff')};return}
 g.innerHTML='<div class="start"><b>아직 등록된 직원이 없습니다</b><span>AX팀원 6명(심준보=직원 · 지재범=팀장 · 민선경=인사)을 넣으면 신청 → 팀장 승인 → 인사 확정을 바로 돌려 볼 수 있습니다. 전 직원은 엑셀 양식으로 넣습니다.</span><div><button class="btn p" id="gax">AX팀원 6명 넣기</button> <a class="btn" href="#staff" id="gxl">엑셀로 넣기</a></div></div>';
 $('#gax').onclick=()=>{addAX();const me=person(st.me);toast('AX팀원 6명을 넣었습니다 — 지금은 '+(me?me.name:'')+'(직원) 화면입니다');switchRole('emp','#home')};
 $('#gxl').onclick=e=>{e.preventDefault();switchRole('hr','#staff')}};
function faces(){document.querySelectorAll('.tch').forEach(t=>{const b=t.querySelector('b'),av=t.querySelector('.sh-av');if(!b||!av||av.dataset.ox)return;av.dataset.ox=1;const nm=b.textContent.trim(),p=st.people.find(x=>x.name===nm);
  if(photoOf(p)){av.classList.add('ox-ph');av.innerHTML='<img src="'+photoOf(p)+'" alt="">'}else if(p)av.textContent=p.name.replace(/^\d+번\s*/,'').charAt(0)})}
function fullBtn(){try{const F=window.frameElement&&window.frameElement.dataset.full;if(!F||document.querySelector('.ox-full'))return;const a=document.createElement('a');a.href=F;a.target='_blank';a.rel='noopener';a.className='ox-full';a.textContent='↗ 새 창으로 열기';document.body.appendChild(a)}catch(e){}}
let q=0;function boot(){fullBtn();const m=document.querySelector('main')||document.body;new MutationObserver(()=>{if(!q)q=requestAnimationFrame(()=>{q=0;faces()})}).observe(m,{childList:true,subtree:true});faces();render()}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',boot):boot();
}})();
