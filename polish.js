/* polish.js — 삼성헬스 테마(shealth.js) 다듬기 (곽두팔 2026-11-12 준보 「전체적으로 다듬어 달라고」).
   하위 탭을 알약으로 통일, 달력 칸 너비 고르게, 파란 기본 링크·밑줄 정리, 메뉴 숫자 배지 색 통일, 숫자 자리 맞춤, 모바일 보는 사람 줄 정리. index.html 은 한 줄만. */
(function(){
  var css=`
html.sh a{color:inherit;text-decoration:none}
html.sh .view p a:not(.btn),html.sh .view td a:not(.btn),html.sh .view small a{color:var(--brand);font-weight:600}
html.sh .hsplit .tiles a,html.sh .hsplit .tiles button{color:var(--ink)!important;font-weight:500}
html.sh .card .hd b{word-break:keep-all;min-width:0}
html.sh .view a:not(.btn):not([class]):hover{text-decoration:underline}
html.sh #bell{text-decoration:none;display:inline-flex;align-items:center;gap:6px}
html.sh body{font-variant-numeric:tabular-nums}
html.sh nav a .n,html.sh .tabs a .n,html.sh .tabs2 a .n,html.sh #bell .n{background:#ff4b3e!important;color:#fff!important;font-size:11px;font-weight:700;min-width:18px;height:18px;line-height:18px;padding:0 5px;border-radius:999px;text-align:center;display:inline-block}
html.sh nav a{display:flex;align-items:center;justify-content:space-between}
html.sh .tabs2{border-bottom:0;gap:6px;margin:0 0 20px}
html.sh .tabs2 a{border:0!important;margin:0;border-radius:999px;padding:8px 16px;background:#fff;color:var(--sub);font-weight:600;font-size:14px;display:inline-flex;align-items:center;gap:6px}
html.sh .tabs2 a:hover{color:var(--ink);background:#fafafa}
html.sh .tabs2 a.on,html.sh .tabs2 a.on:hover{background:var(--ink)!important;color:#fff!important;font-weight:700}
html.sh .tabs2 a .n{margin-left:0}
html.sh .bar{margin-bottom:22px}
html.sh .bar .lb{font-size:13px;color:var(--sub);font-weight:600}
html.sh #roles small{color:var(--mute);font-size:11px}
html.sh #roles button.on small{color:var(--sub)}
html.sh .top h1+*,html.sh .top small{color:var(--mute)}
html.sh .cal{grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}
html.sh .cal .h{font-size:12px;font-weight:600;color:var(--mute);padding-bottom:2px}
html.sh .cal .h:first-child{color:#ff4b3e}html.sh .cal .h:nth-child(7){color:#3d8bfd}
html.sh .cal .c{min-height:64px;padding:6px 7px;font-size:12px;font-weight:600;color:var(--sub)}
html.sh .cal .c.td{outline:0;box-shadow:inset 0 0 0 2px var(--brand);background:#fff}
html.sh .cal .c i{font-size:11px;font-weight:600;padding:2px 7px;margin-top:4px}
html.sh .cal .c i.o{background:#e3f6ea;color:#0b7a3e}
html.sh .cal .c i.w{background:#fff1dd;color:#b45309}
html.sh .card .hd a,html.sh .card .hd button:not(.btn){color:var(--ink)!important;font-weight:800}
html.sh .hd .tag,html.sh .hd small{font-size:12px}
html.sh table{border-collapse:collapse}
html.sh table th{font-size:12px;padding-top:6px;padding-bottom:10px}
html.sh table td{padding-top:12px;padding-bottom:12px}
html.sh table tr:last-child td{border-bottom:0}
html.sh tbody tr:hover td{background:#fafafa}
html.sh .st{font-weight:700;padding:2px 9px}
html.sh .hsug .hlist{background:#f7f7f8!important}
html.sh .hsug .hlist>*:empty{display:none}
html.sh .toast{border-radius:16px;padding:12px 18px;box-shadow:0 8px 24px rgba(0,0,0,.18)}
html.sh .empty{color:var(--mute);font-size:14px;padding:22px 0;text-align:center}
@media(max-width:800px){
 html.sh .bar{flex-wrap:wrap;gap:10px;padding:12px}
 html.sh #roles{width:100%;display:flex}
 html.sh #roles button{flex:1;padding:8px 4px;white-space:nowrap}
 html.sh #roles small{display:none}
 html.sh #me{flex:1;min-width:0}
 html.sh .bar .lb{display:none}
 html.sh .tabs2{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none}
 html.sh .tabs2 a{white-space:nowrap;flex:none}
 html.sh .card .hd{flex-wrap:wrap;gap:4px 10px}
 html.sh table th{white-space:nowrap;font-size:11px}
 html.sh .hsplit .tiles{display:grid!important;grid-template-columns:1fr 1fr;gap:8px}
 html.sh .hsplit .tiles a,html.sh .hsplit .tiles button{font-size:13px;padding:10px 12px}
 html.sh .kpi .card small{font-size:13px;word-break:keep-all}
 html.sh .cal{gap:3px}
 html.sh .cal .c{min-height:54px;padding:4px;font-size:11px}
 html.sh .cal .c i{font-size:9.5px;padding:1px 4px}
 html.sh .toast{left:14px;right:14px;transform:translateY(20px);max-width:none}
 html.sh .toast.show{transform:none}
}
`;
  var s=document.createElement('style');s.id='polish-css';s.textContent=css;document.head.appendChild(s);
})();
