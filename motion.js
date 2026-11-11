/* motion.js — E-HR 전체 움직임 층. index.html 은 건드리지 않고 여기서만 더한다.
   - 화면이 바뀔 때만 카드·줄이 차례로 떠오르고 숫자가 올라간다(같은 화면에서 다시 그릴 땐 가만히).
   - 버튼·메뉴·카드는 늘 hover/누름 반응, 누르면 물결.
   - 「움직임 줄이기」 설정이면 모두 끈다. */
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var css=`
nav a{transition:background .2s,color .2s,transform .2s cubic-bezier(.2,.8,.2,1);position:relative}
nav a:hover{transform:translateX(4px)}
nav a.on::before{content:"";position:absolute;left:-12px;top:6px;bottom:6px;width:3px;border-radius:2px;background:var(--brand);animation:moBar .35s cubic-bezier(.2,.8,.2,1)}
@keyframes moBar{from{transform:scaleY(0)}}
nav a .n,.tabs a .n{animation:moBeat 2.4s ease-in-out infinite}
@keyframes moBeat{0%,100%{transform:scale(1)}10%{transform:scale(1.25)}20%{transform:scale(1)}}
.logo{transition:transform .3s cubic-bezier(.3,1.6,.5,1)}.logo:hover{transform:scale(1.06) rotate(-2deg)}
.card{transition:box-shadow .25s,transform .25s cubic-bezier(.2,.8,.2,1),border-color .25s}
.card:hover{box-shadow:0 6px 22px rgba(60,40,10,.08)}
.kpi .card:hover,.g .card:hover,.g2 .card:hover,.hside .card:hover{transform:translateY(-3px);box-shadow:0 10px 26px rgba(60,40,10,.12)}
.btn,.seg button,.types button,.tabs a{transition:transform .15s,box-shadow .2s,background .2s,color .2s,border-color .2s;position:relative;overflow:hidden}
.btn:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(60,40,10,.12)}
.btn:active,.seg button:active,.types button:active{transform:scale(.95)}
.btn.p::after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.45),transparent);transform:skewX(-20deg);pointer-events:none}
.btn.p:hover::after{animation:moShine .7s ease}
@keyframes moShine{to{left:130%}}
.mo-rip{position:absolute;border-radius:50%;background:currentColor;opacity:.25;transform:scale(0);animation:moRip .55s ease-out forwards;pointer-events:none}
@keyframes moRip{to{transform:scale(2.6);opacity:0}}
tr.ck td{transition:background .2s}
tr.ck:hover td:first-child{box-shadow:inset 3px 0 0 var(--brand)}
.st{transition:transform .2s}.st:hover{transform:scale(1.08)}
.form input,.form select,.form textarea{transition:border-color .2s,box-shadow .2s}
.form input:focus,.form select:focus,.form textarea:focus{outline:0;border-color:var(--brand);box-shadow:0 0 0 3px var(--brand-50)}
.toast.show{animation:moToast .45s cubic-bezier(.3,1.5,.5,1)}
@keyframes moToast{from{transform:translateX(-50%) translateY(30px) scale(.9)}}
.mo-in{animation:moIn .5s cubic-bezier(.2,.8,.2,1) both;animation-delay:var(--d,0s)}
@keyframes moIn{from{opacity:0;transform:translateY(14px) scale(.98)}}
.mo-row{animation:moRow .4s ease both;animation-delay:var(--d,0s)}
@keyframes moRow{from{opacity:0;transform:translateX(-10px)}}
.mo-pop{animation:moPop .45s cubic-bezier(.3,1.6,.5,1) both;animation-delay:var(--d,0s)}
@keyframes moPop{from{opacity:0;transform:scale(.6)}}
h1.mo-h{animation:moH .5s cubic-bezier(.2,.8,.2,1)}
@keyframes moH{from{opacity:0;transform:translateX(-12px);letter-spacing:.06em}}
.msg>div{transition:transform .2s}.msg:hover>div{transform:translateY(-1px)}
.cal .c{transition:transform .2s,box-shadow .2s}.cal .c:hover{transform:scale(1.05);box-shadow:0 4px 12px rgba(60,40,10,.12);position:relative;z-index:1}
.cal .c.td{animation:moTd 2.6s ease-in-out infinite}
@keyframes moTd{50%{box-shadow:0 0 0 4px var(--brand-50)}}
.hb .tr i,.ck .tr i{transform-origin:left}
.mo-bar{animation:moGrow .9s cubic-bezier(.2,.8,.2,1) both;animation-delay:var(--d,0s)}
@keyframes moGrow{from{transform:scaleX(0)}}
`;
  var s=document.createElement('style');s.id='motion-css';s.textContent=css;document.head.appendChild(s);

  // 누르면 물결
  document.addEventListener('pointerdown',function(e){
    var b=e.target.closest&&e.target.closest('.btn,.seg button,.types button,nav a');if(!b||b.disabled)return;
    var r=b.getBoundingClientRect(),z=Math.max(r.width,r.height),i=document.createElement('span');
    i.className='mo-rip';i.style.cssText='width:'+z+'px;height:'+z+'px;left:'+(e.clientX-r.left-z/2)+'px;top:'+(e.clientY-r.top-z/2)+'px';
    b.appendChild(i);setTimeout(function(){i.remove()},600);
  },true);

  function countUp(el){
    var t=el.firstChild;if(!t||t.nodeType!==3)return;var raw=t.nodeValue.trim(),n=parseFloat(raw.replace(/,/g,''));
    if(!(n>0)||!/^[\d,.]+$/.test(raw))return;var dec=(raw.split('.')[1]||'').length,comma=raw.indexOf(',')>=0,t0=performance.now(),d=800;
    function f(x){var k=Math.min(1,(x-t0)/d),v=n*(1-Math.pow(1-k,3)),o=v.toFixed(dec);if(comma)o=Number(o).toLocaleString();t.nodeValue=o;if(k<1)requestAnimationFrame(f)}
    t.nodeValue='0';requestAnimationFrame(f);
  }
  function pageKey(){
    var h=document.querySelector('main h1'),a=document.querySelector('nav a.on'),tb=document.querySelector('.tabs a.on');
    return location.hash+'|'+(h?h.textContent:'')+'|'+(a?a.textContent:'')+'|'+(tb?tb.textContent:'');
  }
  function enter(){
    var m=document.querySelector('main');if(!m)return;
    var h=m.querySelector('h1');if(h){h.classList.remove('mo-h');void h.offsetWidth;h.classList.add('mo-h')}
    var home=!!m.querySelector('.hsplit');           // 첫 화면은 자기 움직임이 있다 — 겹치지 않게
    var k=0;
    m.querySelectorAll('.guide,.bar,.kpi .card,.g>.card,.g2>.card,.view>.card,.card:not(.kpi .card):not(.g>.card):not(.g2>.card)').forEach(function(c){
      if(home&&c.closest('.hsplit'))return;if(c.classList.contains('mo-in'))return;
      c.style.setProperty('--d',Math.min(k++,10)*0.06+'s');c.classList.add('mo-in');
    });
    m.querySelectorAll('tbody').forEach(function(tb){
      Array.prototype.slice.call(tb.rows,0,18).forEach(function(r,i){r.style.setProperty('--d',(0.15+i*0.03)+'s');r.classList.add('mo-row')});
    });
    m.querySelectorAll('.st,.step,.cal .c i').forEach(function(x,i){if(i<40){x.style.setProperty('--d',(0.2+i*0.02)+'s');x.classList.add('mo-pop')}});
    m.querySelectorAll('.hb .tr i,.ck .tr i').forEach(function(x,i){x.style.setProperty('--d',(0.2+i*0.05)+'s');x.classList.add('mo-bar')});
    if(home)m.querySelectorAll('.hlist>*,.hsug>*').forEach(function(x,i){if(i<12){x.style.setProperty('--d',(0.25+i*0.05)+'s');x.classList.add('mo-row')}});
    if(!home)m.querySelectorAll('.kpi b,.bal b').forEach(countUp);
  }
  var last='',q=0;
  function check(){q=0;var k=pageKey();if(k!==last){last=k;enter()}}
  function boot(){
    var m=document.querySelector('main');if(!m)return setTimeout(boot,100);
    new MutationObserver(function(){if(!q)q=requestAnimationFrame(check)}).observe(m,{childList:true,subtree:true});
    addEventListener('hashchange',function(){if(!q)q=requestAnimationFrame(check)});
    check();
  }
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',boot):boot();
})();
