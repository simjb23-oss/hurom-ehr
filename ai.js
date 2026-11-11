/* 휴글 AI (곽두팔, 2026-11-11 준보 「첫 화면이 구글처럼 AI 넣어서 이야기하는 식」 · PRD 1.문제 「답만 하는 챗봇 말고 신청까지」)
   - AI(Claude)가 사람 말을 알아듣고, 일은 E-HR 규칙 엔진 X.chatAnswer() 와 규정(hurom_rules.json)으로 합니다. 신청 버튼은 사람이 누릅니다.
   - 열쇠는 이 브라우저(localStorage)에만 둡니다. 공개 repo 에는 열쇠가 없습니다. 사내판은 HAI.url 을 사내 AI 중계 주소로 바꾸면 됩니다.
   - AI가 안 되면(열쇠 없음 · 오류 · 시간 초과) 바로 규칙 엔진으로 답하고, 그래도 안 되면 「직접 하기」로 손으로 합니다. */
const X=new Proxy({},{get:(o,k)=>window.EHR[k]});
const HAI={url:'https://api.anthropic.com/v1/messages',model:'claude-haiku-5-5',KEY:'hurom-ehr-ai-key',
 relay:'',DEF:'hurom-b7f25d',key(){return localStorage.getItem(this.KEY)||(this.relay?this.DEF:'')},on(){return !!this.key()&&!X.st.aiOff},
 endpoint(){return this.relay&&!/^sk-ant/.test(this.key())?this.relay.replace(/\/$/,'')+'/v1/messages':this.url}};
fetch('relay.json?'+Date.now()).then(r=>r.ok?r.json():null).then(j=>{if(j&&j.url)HAI.relay=j.url}).catch(()=>{});
const aiText=h=>String(h||'').replace(/<br\s*\/?>/g,'\n').replace(/<\/(tr|div|p)>/g,'\n').replace(/<\/t[dh]>/g,' | ').replace(/<[^>]+>/g,'').replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/\n{2,}/g,'\n').trim();
const AI_TOOLS=[
 {name:'ehr',description:'E-HR 에 짧은 한국어 명령을 보내고 화면 결과를 받습니다. 신청은 초안만 채우고 사람이 [이대로 신청]을 누릅니다. 날짜는 YYYY-MM-DD 로 바꿔 넣으세요. 명령 예: "2026-11-20 오후 반차", "2026-11-20~2026-11-21 연차", "2026-11-14 외근", "2026-11-17 대체휴무", "남은 연차", "연차 사용 내역", "대체휴무 얼마", "재직증명서", "경력증명서", "유연근무", "우리 팀 휴가", "연차 촉진", "승인할 것", "할 일", "급여", "52시간"',
  input_schema:{type:'object',properties:{command:{type:'string'}},required:['command']}},
 {name:'rules',description:'휴롬 사내 규정(생활백서 43개)을 낱말로 찾아 본문을 돌려줍니다. 규정·제도·복지·경조·출장·경비 질문에 먼저 쓰세요.',
  input_schema:{type:'object',properties:{keyword:{type:'string'}},required:['keyword']}}];
function aiRules(k){if(!X.RULES)return '규정을 아직 불러오지 못했습니다';const ws=String(k).split(/\s+/).filter(w=>w.length>=2),hit=[];
 for(const g in X.RULES.groups)X.RULES.groups[g].forEach(x=>{const s=ws.filter(w=>(x.title+x.text).includes(w)).length;if(s)hit.push([s+(ws.some(w=>x.title.includes(w))?2:0),g,x])});
 hit.sort((a,b)=>b[0]-a[0]);return hit.length?hit.slice(0,3).map(([,g,x])=>'['+g+'] '+x.title+'\n'+x.text.slice(0,1200)).join('\n\n'):'맞는 규정이 없습니다'}
function aiSystem(){const r=X.st.role,no=r==='emp'?X.st.me:X.viewerNo(),p=X.person(no)||{},t=X.today();
 return '너는 휴롬 E-HR 첫 화면의 인사 대화 비서다. 오늘은 '+t+'('+X.WD[new Date(t+'T00:00').getDay()]+')이다. 지금 사용자는 '+(p.name||'')+' ('+(p.dept||'')+', 역할 '+({emp:'직원',lead:'팀장',hr:'인사'}[r]||r)+')이다.\n'+
 '- 사람 말을 알아듣고 ehr 도구로 일을 처리한다. 휴가·반차·외근·대체휴무 신청 말이면 날짜를 YYYY-MM-DD 로 풀어 ehr 에 넣는다(「다음 주 금요일」, 「모레」 등은 오늘 기준으로 계산). 반차인데 오전·오후가 없으면 묻는다.\n'+
 '- 규정·제도 질문은 rules 도구로 찾아 근거 규정 이름을 붙여 답한다. 규정에 없으면 모른다고 하고 인사팀(피플&컬처팀)에 물으라고 한다. 지어내지 않는다.\n'+
 '- 신청은 초안만 채운다. 「이대로 신청」 버튼은 화면에 따로 뜨니 「아래 버튼을 누르면 신청됩니다」라고만 말한다.\n'+
 '- 답은 한국어 존댓말 1~3문장, 결론부터. 마크다운 표·제목은 쓰지 않는다. 숫자는 도구 결과에 있는 것만 쓴다.'}
async function aiCall(msgs){const ac=new AbortController(),tm=setTimeout(()=>ac.abort(),60000);
 try{const r=await fetch(HAI.endpoint(),{method:'POST',signal:ac.signal,headers:{'content-type':'application/json','x-api-key':HAI.key(),'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
  body:JSON.stringify({model:HAI.model,max_tokens:700,system:aiSystem(),tools:AI_TOOLS,messages:msgs})});
  if(!r.ok)throw new Error('AI '+r.status+' '+(await r.text()).slice(0,120));return await r.json()}finally{clearTimeout(tm)}}
async function aiAnswer(q){const vn=X.viewerNo(),past=(X.st.chat||[]).filter(c=>c.no===vn&&c.role===X.st.role).slice(-4),msgs=[];
 past.forEach(c=>{msgs.push({role:'user',content:c.q});msgs.push({role:'assistant',content:aiText(c.a).slice(0,600)||'(답함)'})});
 msgs.push({role:'user',content:q});let card='';
 for(let i=0;i<4;i++){const res=await aiCall(msgs),tu=res.content.filter(b=>b.type==='tool_use');
  if(res.stop_reason!=='tool_use'||!tu.length){const txt=res.content.filter(b=>b.type==='text').map(b=>b.text).join('\n').trim();
   return X.esc(txt).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\n/g,'<br>')+(card?'<div class="aicard">'+card+'</div>':'')+'<div class="tag" style="margin-top:6px">✦ AI 답 · 숫자·신청은 E-HR 기록 기준</div>'}
  msgs.push({role:'assistant',content:res.content});
  let early='';msgs.push({role:'user',content:tu.map(b=>{let out;if(b.name==='ehr'){const h=X.chatAnswer(String(b.input.command||''));if(/data-chsend/.test(h)||(!/data-chsend/.test(card)&&/class="btn/.test(h)))card=h;out=aiText(h);if(b.input.say&&!/잘 알아듣지/.test(out))early=b.input.say}else out=aiRules(b.input.keyword||'');
   return {type:'tool_result',tool_use_id:b.id,content:out.slice(0,4000)}})});
  if(early)return X.esc(early)+(card?'<div class="aicard">'+card+'</div>':'')+'<div class="tag" style="margin-top:6px">✦ AI 답 · 숫자·신청은 E-HR 기록 기준</div>'}
 throw new Error('AI 답이 길어져 멈춤')}
/* 「AI 연결」 줄은 뺐습니다 (2026-11-11 준보) — 중계 주소가 있으면 휴글 열쇠로 저절로 연결, 없으면 규칙으로 답 */
document.head.insertAdjacentHTML('beforeend','<style>.aicard{margin-top:8px;padding-top:8px;border-top:1px dashed #cfd8cf}.aibar a{color:inherit}</style>');
