/* deco.js — E-HR 꾸미기 층(곽두팔 2026-11-11 준보 「딱딱해 보인다, 꾸미는 거 계속해」 · 「휴롬 조직도 딱딱」).
   index.html 은 건드리지 않고 그려진 화면 위에 채소 색·아이콘·캐릭터·조직도 카드를 얹는다. */
(function(){
  var css=`
body::before,body::after{content:"";position:fixed;z-index:-1;border-radius:50%;filter:blur(70px);opacity:.35;pointer-events:none}
body::before{width:420px;height:420px;right:-120px;top:-120px;background:#c9e8a8;animation:dcFloat 18s ease-in-out infinite}
body::after{width:360px;height:360px;left:160px;bottom:-140px;background:#ffd2a8;animation:dcFloat 22s ease-in-out infinite reverse}
@keyframes dcFloat{50%{transform:translate(-40px,30px) scale(1.1)}}
nav a .lbw{display:flex;align-items:center}
nav a .mi{display:inline-flex;width:22px;height:22px;margin-right:9px;flex:none;transition:transform .3s cubic-bezier(.3,1.6,.5,1)}
nav a .mi svg{width:100%;height:100%}
nav a:hover .mi{transform:rotate(-12deg) scale(1.2)}nav a.on .mi{animation:dcWig 2.8s ease-in-out infinite}
@keyframes dcWig{0%,80%,100%{transform:rotate(0)}85%{transform:rotate(-14deg)}90%{transform:rotate(12deg)}95%{transform:rotate(-6deg)}}
.card>.hd b::before{content:"";display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:8px;vertical-align:1px;background:var(--vc,#6fb54a)}
.kpi .card{border-top:3px solid var(--vc,#6fb54a)}
.top .dc-deco{margin-left:auto;display:flex;gap:8px;align-items:flex-end}
.top .dc-deco svg{width:26px;height:26px;animation:dcBob 2.4s ease-in-out infinite}
.top .dc-deco svg:nth-child(2){animation-delay:.3s}.top .dc-deco svg:nth-child(3){animation-delay:.6s}
@keyframes dcBob{50%{transform:translateY(-6px) rotate(6deg)}}
.empty .dc-ch{display:block;margin:0 auto 8px;width:56px;height:56px;animation:dcBob 2.6s ease-in-out infinite}
.org summary{list-style:none}.org summary::-webkit-details-marker{display:none}
.org summary>.on,.org .leaf>.on{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.org summary,.org .leaf{display:block;background:#fff;border:1px solid var(--line);border-left:4px solid var(--vc,#6fb54a);border-radius:10px;padding:8px 12px;margin:6px 0;transition:transform .2s cubic-bezier(.2,.8,.2,1),box-shadow .2s}
.org .leaf{margin-left:0}
.org summary:hover,.org .leaf:hover{transform:translateX(4px);box-shadow:0 6px 16px rgba(60,40,10,.10)}
.org summary .on::before{content:"";width:7px;height:7px;border-right:2px solid var(--sub);border-bottom:2px solid var(--sub);transform:rotate(-45deg);transition:transform .25s;flex:none}
.org details[open]>summary .on::before{transform:rotate(45deg)}
.org details[open]>.sub{animation:dcSub .35s cubic-bezier(.2,.8,.2,1)}
@keyframes dcSub{from{opacity:0;transform:translateY(-6px)}}
.org .sub{border-left:2px dashed #d9e6d6;margin-left:14px;padding-left:12px}
.oav{width:30px;height:30px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:#fff;background:var(--vc,#6fb54a);flex:none;box-shadow:0 2px 6px rgba(0,0,0,.12)}
.obar{flex:1;min-width:60px;max-width:220px;height:6px;border-radius:3px;background:#f1ece2;overflow:hidden;margin-left:auto}
.obar i{display:block;height:100%;width:var(--w);background:var(--vc,#6fb54a);border-radius:3px;transform-origin:left;animation:dcGrow 1s cubic-bezier(.2,.8,.2,1) both}
@keyframes dcGrow{from{transform:scaleX(0)}}
.ogrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin:4px 0 18px}
.ogrid .oc{position:relative;overflow:hidden;background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px;cursor:pointer;transition:transform .25s cubic-bezier(.2,.8,.2,1),box-shadow .25s;animation:dcIn .5s cubic-bezier(.2,.8,.2,1) both;animation-delay:var(--d,0s)}
@keyframes dcIn{from{opacity:0;transform:translateY(14px) scale(.96)}}
.ogrid .oc:hover{transform:translateY(-4px) rotate(-.6deg);box-shadow:0 12px 26px rgba(60,40,10,.14)}
.ogrid .oc b{display:block;font-size:14px;margin-top:8px}.ogrid .oc small{color:var(--sub);font-size:12px}
.ogrid .oc .big{font-size:26px;font-weight:700;color:var(--vc)}
.ogrid .oc::after{content:"";position:absolute;right:-24px;bottom:-24px;width:80px;height:80px;border-radius:50%;background:var(--vc);opacity:.12;transition:transform .4s}
.ogrid .oc:hover::after{transform:scale(1.6)}
@media(prefers-reduced-motion:reduce){body::before,body::after,nav a .mi,.dc-deco svg,.dc-ch,.ogrid .oc,.obar i{animation:none!important}}
`;
  var s=document.createElement('style');s.id='deco-css';s.textContent=css;document.head.appendChild(s);

  var VC=['#6fb54a','#f08a24','#e0453a','#8e5bb5','#3f8f3a','#e8a92c','#c2185b','#2f8f9d'];
  var VEG={
    carrot:'<svg viewBox="0 0 24 24"><path d="M14 8L4 21l13-9z" fill="#f08a24"/><path d="M14 8l3-5M15 9l5-2M16 10l4 1" stroke="#4f9a3a" stroke-width="2" stroke-linecap="round"/></svg>',
    apple:'<svg viewBox="0 0 24 24"><circle cx="12" cy="14" r="8" fill="#e0453a"/><path d="M12 6q1-4 5-3" stroke="#4f9a3a" stroke-width="2" fill="none"/><circle cx="9" cy="12" r="1.6" fill="#fff" opacity=".6"/></svg>',
    leaf:'<svg viewBox="0 0 24 24"><path d="M4 20C4 9 11 4 21 4c0 10-6 16-17 16z" fill="#6fb54a"/><path d="M4 20L15 9" stroke="#3d7f2c" stroke-width="1.6"/></svg>',
    tomato:'<svg viewBox="0 0 24 24"><circle cx="12" cy="14" r="8" fill="#f26b3a"/><path d="M8 7l4 2 4-2-2 3h-4z" fill="#4f9a3a"/></svg>',
    grape:'<svg viewBox="0 0 24 24"><g fill="#8e5bb5"><circle cx="9" cy="9" r="3.3"/><circle cx="15" cy="9" r="3.3"/><circle cx="12" cy="14" r="3.3"/><circle cx="7" cy="14" r="3"/><circle cx="17" cy="14" r="3"/><circle cx="12" cy="19" r="3"/></g><path d="M12 6V2" stroke="#4f9a3a" stroke-width="2"/></svg>',
    lemon:'<svg viewBox="0 0 24 24"><ellipse cx="12" cy="13" rx="8" ry="6.5" fill="#f2c94c"/><path d="M12 6.5q2-3 5-2" stroke="#4f9a3a" stroke-width="2" fill="none"/></svg>'
  };
  var NAVI=[['홈','apple'],['사람','carrot'],['근태','leaf'],['급여','lemon'],['관리','grape'],['내 정보','tomato'],['팀','carrot'],['결재','tomato']];
  var CH='<svg class="dc-ch" viewBox="0 0 60 60" aria-hidden="true"><path d="M30 14L14 52h32z" fill="#f08a24"/><path d="M30 14l-4-9M30 14l0-11M30 14l4-9" stroke="#4f9a3a" stroke-width="3" stroke-linecap="round"/><circle cx="25" cy="32" r="2.4" fill="#2b2b2b"/><circle cx="35" cy="32" r="2.4" fill="#2b2b2b"/><path d="M25 39q5 4 10 0" stroke="#2b2b2b" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="21" cy="37" r="2" fill="#ff9d7a" opacity=".7"/><circle cx="39" cy="37" r="2" fill="#ff9d7a" opacity=".7"/></svg>';
  var still=matchMedia('(prefers-reduced-motion: reduce)').matches;

  function navIcons(){
    document.querySelectorAll('nav a:not(.logo)').forEach(function(a){
      if(a.querySelector('.mi'))return;var f=a.firstChild;if(!f||f.nodeType!==3)return;var t=f.nodeValue.trim(),k=null;
      NAVI.forEach(function(x){if(!k&&t.indexOf(x[0])===0)k=x[1]});if(!k)return;
      var w=document.createElement('span');w.className='lbw';w.innerHTML='<span class="mi" aria-hidden="true">'+VEG[k]+'</span>';
      w.appendChild(document.createTextNode(f.nodeValue));a.replaceChild(w,f);
    });
  }
  function cnt(r){var t=r.querySelector('.tag');return t?parseInt(t.textContent)||0:0}
  function decorOrg(org){
    var max=1;org.querySelectorAll('summary,.leaf').forEach(function(r){var n=cnt(r);if(n>max&&!(r.parentElement.parentElement===org))max=n});
    var tops=org.querySelector(':scope>details>.sub');
    org.querySelectorAll('summary,.leaf').forEach(function(r){
      var a=r.querySelector('a'),on=r.querySelector('.on');if(!a||!on||on.querySelector('.oav'))return;
      var c=VC[4];if(tops){var e=r;while(e&&e.parentElement!==tops)e=e.parentElement;if(e)c=VC[Array.prototype.indexOf.call(tops.children,e)%VC.length]}
      r.style.setProperty('--vc',c);
      on.insertAdjacentHTML('afterbegin','<span class="oav">'+a.textContent.trim().charAt(0)+'</span>');
      on.insertAdjacentHTML('beforeend','<span class="obar"><i style="--w:'+Math.max(3,Math.min(100,Math.round(cnt(r)/max*100)))+'%"></i></span>');
    });
    if(!tops||org.previousElementSibling&&org.previousElementSibling.classList.contains('ogrid'))return;
    var g=document.createElement('div');g.className='ogrid';
    Array.prototype.forEach.call(tops.children,function(ch,i){
      var r=ch.tagName==='DETAILS'?ch.querySelector('summary'):ch,a=r&&r.querySelector('a');if(!a)return;
      var t=r.querySelector('.tag').textContent.split('·'),c=VC[i%VC.length],d=document.createElement('div');d.className='oc';
      d.style.setProperty('--vc',c);d.style.setProperty('--d',Math.min(i,16)*0.04+'s');
      d.innerHTML='<span class="oav">'+a.textContent.trim().charAt(0)+'</span><b>'+a.textContent.trim()+'</b><span class="big">'+parseInt(t[0])+'</span><small> 명'+(t[1]?' · '+t[1].trim():'')+'</small>';
      d.onclick=function(){if(ch.tagName==='DETAILS')ch.open=true;r.scrollIntoView({behavior:'smooth',block:'center'});if(r.animate)r.animate([{boxShadow:'0 0 0 0 '+c},{boxShadow:'0 0 0 10px transparent'}],{duration:900,iterations:2})};
      g.appendChild(d);
    });
    org.parentElement.insertBefore(g,org);
  }
  function decorate(){
    navIcons();
    var m=document.querySelector('main');if(!m)return;var home=!!m.querySelector('.hsplit');
    m.querySelectorAll('.card').forEach(function(c,i){if(!c.style.getPropertyValue('--vc'))c.style.setProperty('--vc',VC[i%VC.length])});
    if(!home)m.querySelectorAll('.empty').forEach(function(e){if(!e.querySelector('.dc-ch'))e.insertAdjacentHTML('afterbegin',CH)});
    var top=m.querySelector('.top');
    if(top&&!home&&!top.querySelector('.dc-deco')){var ks=Object.keys(VEG),h=top.querySelector('h1'),o=(h?h.textContent.length:0)%ks.length;
      top.insertAdjacentHTML('beforeend','<span class="dc-deco" aria-hidden="true">'+VEG[ks[o]]+VEG[ks[(o+2)%ks.length]]+VEG[ks[(o+4)%ks.length]]+'</span>')}
    var org=m.querySelector('.org');if(org)decorOrg(org);
  }
  var q=0;function run(){q=0;try{decorate()}catch(e){console.warn('deco',e)}}
  function boot(){
    var m=document.querySelector('main');if(!m)return setTimeout(boot,100);
    var mo=new MutationObserver(function(){if(!q)q=requestAnimationFrame(run)});
    mo.observe(m,{childList:true,subtree:true});var nv=document.querySelector('nav');if(nv)mo.observe(nv,{childList:true,subtree:true});
    run();
  }
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',boot):boot();
})();
