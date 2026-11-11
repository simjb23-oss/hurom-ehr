/* shealth.js — 삼성헬스 느낌 테마(김호철 2026-11-12 준보 「삼성헬스 느낌으로 하자, 아이콘 이상한 거 없애고」).
   옅은 회색 바탕 · 흰 둥근 카드(테두리·그림자 거의 없음) · 굵은 검정 제목 · 큰 숫자 · 카드마다 한 가지 색(초록·파랑·주황·보라).
   채소 아이콘·통통 튀는 채소·당근 캐릭터·숫자 칸 그림 아이콘은 숨긴다(smart.js 는 더 불러오지 않음). index.html 은 한 줄만. */
(function(){
  document.documentElement.classList.add('sh');
  var css=`
html.sh{--brand:#0b7a3e;--ink:#1d1d1f;--sub:#6e6e73;--mute:#a1a1a6;--line:#ececee;--shg:#f2f2f4}
html.sh body{background:var(--shg)!important;font-family:"Samsung One","SamsungOne","Pretendard","Segoe UI","맑은 고딕","Malgun Gothic",sans-serif;letter-spacing:-.01em}
html.sh body::before,html.sh body::after{display:none!important}
html.sh nav a .mi,html.sh .top .dc-deco,html.sh .empty .dc-ch,html.sh .st-ic,html.sh .st-go,html.sh .card>.hd b::before{display:none!important}
html.sh nav{background:var(--shg);border-right:0;padding:22px 14px}
html.sh .logo{font-size:19px;font-weight:800;margin:0 10px 22px}
html.sh nav a{border-radius:14px;padding:10px 14px;font-size:15px;color:#3a3a3c;margin-bottom:3px}
html.sh nav a:hover{background:#e8e8ea;transform:none}
html.sh nav a.on{background:#fff;color:var(--ink);font-weight:700;box-shadow:none}
html.sh nav a.on::before{display:none}
html.sh nav .sec{font-size:12px;color:var(--mute);margin:18px 14px 6px}
html.sh nav a .n,html.sh .tabs a .n{animation:none}
html.sh main{padding:26px 32px 56px}
html.sh .top{margin-bottom:18px}
html.sh h1{font-size:30px;font-weight:800;letter-spacing:-.03em}
html.sh .card,html.sh .bar,html.sh .guide{border:0!important;border-radius:26px;background:#fff;box-shadow:none;backdrop-filter:none}
html.sh .card:hover,html.sh .kpi .card:hover,html.sh .g .card:hover,html.sh .g2 .card:hover,html.sh .hside .card:hover{transform:none;box-shadow:0 4px 18px rgba(0,0,0,.05)}
html.sh .card{margin-bottom:16px}
html.sh .hd{border-bottom:0;padding:20px 24px 4px}
html.sh .hd b{font-size:18px;font-weight:800;letter-spacing:-.02em}
html.sh .tag{color:var(--mute)}
html.sh .bd{padding:12px 24px 22px}
html.sh .bar{padding:10px 16px;border-radius:20px}
html.sh .kpi{gap:14px}
html.sh .kpi .card{border-top:0!important;padding:20px 22px;min-height:0;display:flex;flex-direction:column;gap:6px}
html.sh .kpi .card small{order:-1;font-size:15px;font-weight:700;color:var(--ink);margin:0}
html.sh .kpi .card b{font-size:32px;font-weight:800;letter-spacing:-.03em;color:var(--ink)}
html.sh .kpi .card::before{content:"";display:block;width:26px;height:5px;border-radius:3px;background:var(--ac);order:-2}
html.sh .kpi .alert b{color:#e8590c}
html.sh .kpi .card:nth-child(4n+1){--ac:#2fbf71}html.sh .kpi .card:nth-child(4n+2){--ac:#3d8bfd}
html.sh .kpi .card:nth-child(4n+3){--ac:#ff9f1c}html.sh .kpi .card:nth-child(4n+4){--ac:#8b5cf6}
html.sh .btn{border-radius:999px;padding:9px 18px;border:0;background:#f2f2f4;color:var(--ink);font-weight:600;box-shadow:none}
html.sh .btn:hover{background:#e8e8ea}
html.sh .btn.p{background:var(--brand);color:#fff}html.sh .btn.p:hover{background:#09682f}
html.sh .btn.sm{padding:6px 13px}
html.sh .seg{border:0;border-radius:999px;background:#f2f2f4;padding:3px}
html.sh .seg button{border:0!important;border-radius:999px;background:transparent;color:var(--sub)}
html.sh .seg button.on{background:#fff;color:var(--ink);box-shadow:0 1px 4px rgba(0,0,0,.08)}
html.sh .tabs{border-bottom:0;gap:8px}
html.sh .tabs a,html.sh .tabs a.on{border:0!important;border-radius:999px;padding:8px 16px;margin:0}
html.sh .tabs a{background:#fff;color:var(--sub)}html.sh .tabs a.on{background:var(--ink);color:#fff;font-weight:700}
html.sh .form input,html.sh .form select,html.sh .form textarea,html.sh .bar select{border-radius:14px;border:0;background:#f2f2f4;padding:9px 12px}
html.sh table th{border-bottom:0;color:var(--mute);font-weight:600}html.sh td{border-bottom:1px solid #f2f2f4}
html.sh .st{border-radius:999px}
html.sh .ogrid .oc{border:0;border-radius:22px;background:#f7f7f8;box-shadow:none}
html.sh .org summary,html.sh .org .leaf{border:0;border-radius:18px;background:#fff;box-shadow:none}
html.sh .org summary:hover,html.sh .org .leaf:hover{transform:none;background:#fafafa}
html.sh .org .sub{border-left:2px solid #e6e6e8}
html.sh .oav{box-shadow:none}
html.sh .hsplit .hq{border:0;border-radius:26px;box-shadow:none}
html.sh .hsug .hlist{border:0;border-radius:22px;background:#fff;box-shadow:none;overflow:hidden}
html.sh .hsplit .tiles a,html.sh .hsplit .tiles button{border:0!important;border-radius:20px!important;background:#fff!important;box-shadow:none}
html.sh .hsplit .tiles a:hover,html.sh .hsplit .tiles button:hover{transform:none;background:#fafafa!important}
html.sh .hsplit .hm.first{background:#fff!important;border:0!important;border-radius:28px!important}
html.sh .cal .c{border-radius:14px;background:#f7f7f8}html.sh .cal .c.o{background:transparent}html.sh .cal .c i{border-radius:999px;padding:1px 6px}
html.sh .toast{border-radius:999px}
html.sh .ogrid .oc::after{display:none}html.sh .ogrid .oc:hover{transform:none;background:#efeff1}
html.sh .hsplit .hm.first{box-shadow:none}html.sh .hsplit .hm.first::before{display:none}
html.sh .hsplit .hm.first .hsug .hlist,html.sh .hsplit .hm.first .tiles a,html.sh .hsplit .hm.first .tiles button{background:#f7f7f8!important}
html.sh .hsplit .hq{border:0;background:#f2f2f4;box-shadow:none}
html.sh .jfill>:not(div):not(.sh-ring),html.sh .jfill .vbask{display:none!important}
html.sh .jfill{display:flex;align-items:center;gap:22px;padding:20px 24px}
html.sh .sh-ring{width:96px;height:96px;flex:none}
html.sh .sh-ring circle{fill:none;stroke-width:10}html.sh .sh-ring .bg{stroke:#eeeef0}
html.sh .sh-ring .fg{stroke:#2fbf71;stroke-linecap:round;transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke-dashoffset .9s cubic-bezier(.2,.8,.2,1)}
html.sh .jfill small{font-size:15px;font-weight:700;color:var(--ink)}html.sh .jfill b{font-size:34px;font-weight:800}
@media(max-width:800px){html.sh main{padding:18px 14px 40px}html.sh h1{font-size:25px}}
`;
  var s=document.createElement('style');s.id='shealth-css';s.textContent=css;document.head.appendChild(s);
  function ring(){
    document.querySelectorAll('.jfill').forEach(function(c){
      if(c.querySelector('.sh-ring'))return;var n=c.querySelector('.cnt'),d=c.querySelector('.d');if(!n)return;
      var rem=parseFloat(n.dataset.n)||0,g=d&&/발생\s*([\d.]+)/.exec(d.textContent),tot=g?parseFloat(g[1]):0,r=tot?Math.max(0,Math.min(1,rem/tot)):0,C=2*Math.PI*40;
      c.insertAdjacentHTML('afterbegin','<svg class="sh-ring" viewBox="0 0 100 100" aria-hidden="true"><circle class="bg" cx="50" cy="50" r="40"/><circle class="fg" cx="50" cy="50" r="40" stroke-dasharray="'+C+'" stroke-dashoffset="'+C+'"/></svg>');
      var fg=c.querySelector('.sh-ring .fg');requestAnimationFrame(function(){requestAnimationFrame(function(){fg.style.strokeDashoffset=C*(1-r)})});
    });
  }
  var q=0;function run(){q=0;try{ring()}catch(e){console.warn('shealth',e)}}
  function boot(){var m=document.querySelector('main');if(!m)return setTimeout(boot,100);
    new MutationObserver(function(){if(!q)q=requestAnimationFrame(run)}).observe(m,{childList:true,subtree:true});run()}
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',boot):boot();
})();
