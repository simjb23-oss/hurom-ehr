/* smart.js — 스마트싱스 느낌 테마(곽두팔 2026-11-12 준보 「나는 진짜 스마트싱스 같은 느낌」).
   참고: Mobbin SmartThings iOS — 은은한 그라데이션 바탕, 반투명 유리 타일(둥근 22px·테두리 없음),
   타일 왼쪽 위 아이콘·오른쪽 위 둥근 버튼, 큰 굵은 제목, 알약 버튼. index.html 은 건드리지 않는다. */
(function(){
  document.documentElement.classList.add('smt');
  var css=`
html.smt body{background:linear-gradient(160deg,#eef6ee 0%,#f5f3ea 38%,#eceffa 75%,#e9e6f6 100%) fixed!important}
html.smt body::before,html.smt body::after{display:none}
html.smt nav{background:rgba(255,255,255,.55);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-right:0;box-shadow:1px 0 0 rgba(0,0,0,.04)}
html.smt nav a{border-radius:14px;padding:10px 12px;font-size:15px}
html.smt nav a.on{background:#fff;box-shadow:0 4px 14px rgba(30,60,40,.08)}
html.smt nav a.on::before{display:none}
html.smt main{padding:22px 28px 48px}
html.smt h1{font-size:28px;font-weight:800;letter-spacing:-.02em}
html.smt .card,html.smt .bar,html.smt .guide{border:0!important;border-radius:22px;background:rgba(255,255,255,.72);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 2px 10px rgba(30,40,60,.05)}
html.smt .card:hover{box-shadow:0 10px 30px rgba(30,40,60,.10)}
html.smt .hd{border-bottom:0;padding:16px 20px 6px}html.smt .hd b{font-size:16px;font-weight:700}
html.smt .card>.hd b::before{display:none}
html.smt .bd{padding:10px 20px 18px}
html.smt .kpi{gap:14px}
html.smt .kpi .card{border-top:0!important;position:relative;padding:16px 18px 18px;min-height:118px;display:flex;flex-direction:column;justify-content:flex-end}
html.smt .kpi .card .st-ic{position:absolute;left:16px;top:14px;width:34px;height:34px;border-radius:50%;background:var(--ic,#e8f4e4);display:flex;align-items:center;justify-content:center}
html.smt .kpi .card .st-ic svg{width:20px;height:20px}
html.smt .kpi .card .st-go{position:absolute;right:14px;top:14px;width:32px;height:32px;border-radius:50%;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.08);display:flex;align-items:center;justify-content:center;color:var(--brand);font-weight:700;transition:transform .25s cubic-bezier(.3,1.6,.5,1)}
html.smt .kpi .card:hover .st-go{transform:scale(1.12) rotate(-8deg)}
html.smt .kpi small{font-size:12.5px;color:#5b6470;margin-top:30px}
html.smt .kpi b{font-size:26px;font-weight:800}
html.smt .btn{border-radius:999px;padding:8px 16px;border:0;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.08)}
html.smt .btn.p{background:var(--brand);color:#fff}
html.smt .btn.sm{padding:5px 12px}
html.smt .seg{border:0;border-radius:999px;background:rgba(0,0,0,.05);padding:3px}
html.smt .seg button{border:0!important;border-radius:999px;background:transparent}
html.smt .seg button.on{background:#fff;color:var(--brand);box-shadow:0 2px 8px rgba(0,0,0,.10)}
html.smt .tabs{border-bottom:0;gap:8px}
html.smt .tabs a{border:0;border-radius:999px;padding:7px 15px;background:rgba(255,255,255,.55);margin:0}
html.smt .tabs a.on{background:#fff;box-shadow:0 2px 10px rgba(30,60,40,.10)}
html.smt .form input,html.smt .form select,html.smt .form textarea,html.smt .bar select{border-radius:12px;border:1px solid rgba(0,0,0,.08);background:rgba(255,255,255,.9)}
html.smt table th{border-bottom:0;color:#8a919c}html.smt td{border-bottom:1px solid rgba(0,0,0,.05)}
html.smt tr.ck:hover td{background:rgba(255,255,255,.7)}
html.smt .st{border-radius:999px}
html.smt .ogrid .oc{border:0;border-radius:22px;background:rgba(255,255,255,.75);box-shadow:0 2px 10px rgba(30,40,60,.05)}
html.smt .org summary,html.smt .org .leaf{border:0;border-radius:16px;background:rgba(255,255,255,.8);box-shadow:0 1px 6px rgba(30,40,60,.05)}
html.smt .hsplit .hq{border:0;border-radius:24px;box-shadow:0 6px 24px rgba(30,40,60,.08)}
html.smt .toast{border-radius:999px}
html.smt .hsug .hlist{border:0;border-radius:20px;background:rgba(255,255,255,.75);box-shadow:0 2px 10px rgba(30,40,60,.05);overflow:hidden}
html.smt .hsplit .tiles a,html.smt .hsplit .tiles button{border:0!important;border-radius:18px!important;background:rgba(255,255,255,.8)!important;box-shadow:0 2px 8px rgba(30,40,60,.06);transition:transform .2s,box-shadow .2s}
html.smt .hsplit .tiles a:hover,html.smt .hsplit .tiles button:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(30,40,60,.10)}
html.smt .hsplit .hm.first{background:rgba(255,255,255,.6)!important;border:0!important;border-radius:28px!important}
html.smt .cal .c{border-radius:12px;background:rgba(255,255,255,.7)}html.smt .cal .c.o{background:transparent}html.smt .cal .c i{border-radius:999px;padding:1px 6px}
html.smt .tabs a,html.smt .tabs a.on{border-bottom:0!important}
@media(max-width:800px){html.smt main{padding:16px 14px 40px}html.smt h1{font-size:24px}}
`;
  var s=document.createElement('style');s.id='smart-css';s.textContent=css;document.head.appendChild(s);
  var IC=[['할 일','#fff1d9','<svg viewBox="0 0 24 24"><path d="M5 12l4 4 10-10" stroke="#d9731a" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    ['결재','#e8f0fb','<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="3" fill="#2457a6"/><path d="M9 9h6M9 13h6" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>'],
    ['촉진','#fdecea','<svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6z" fill="#e0453a"/><circle cx="12" cy="19.5" r="2" fill="#e0453a"/></svg>'],
    ['부재','#f3eafb','<svg viewBox="0 0 24 24"><path d="M15 4a8 8 0 1 0 5 13A7 7 0 0 1 15 4z" fill="#8e5bb5"/></svg>'],
    ['연차','#e8f4e4','<svg viewBox="0 0 24 24"><path d="M4 20C4 9 11 4 21 4c0 10-6 16-17 16z" fill="#6fb54a"/></svg>'],
    ['인원','#fff1e6','<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="#f08a24"/><path d="M4 21c0-5 4-7 8-7s8 2 8 7z" fill="#f08a24"/></svg>'],
    ['','#e8f4e4','<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" fill="#6fb54a"/></svg>']];
  function tiles(){
    document.querySelectorAll('main .kpi .card').forEach(function(c){
      if(c.querySelector('.st-ic'))return;var t=(c.querySelector('small')||c).textContent,k=IC[IC.length-1];
      for(var i=0;i<IC.length-1;i++)if(t.indexOf(IC[i][0])>=0){k=IC[i];break}
      c.insertAdjacentHTML('afterbegin','<span class="st-ic" style="--ic:'+k[1]+'">'+k[2]+'</span>'+(c.classList.contains('go')||c.dataset.go?'<span class="st-go">›</span>':''));
    });
  }
  var q=0;function run(){q=0;try{tiles()}catch(e){console.warn('smart',e)}}
  function boot(){var m=document.querySelector('main');if(!m)return setTimeout(boot,100);
    new MutationObserver(function(){if(!q)q=requestAnimationFrame(run)}).observe(m,{childList:true,subtree:true});run()}
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',boot):boot();
})();
