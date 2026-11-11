/* 휴글 — E-HR 첫 화면 대화창 (곽두팔, 2026-11-11 준보 요청 「첫 메인화면을 휴글(구글)처럼 대화창으로」)
   - 지금 공개판은 AI 없이 문장 규칙으로 알아듣는다. 사내판으로 옮길 때 ask() 한 곳만 사내 AI 호출로 바꾸면 된다.
   - 신청은 화면을 채워 주기만 하고 [신청] 버튼은 사람이 누른다(내역은 E-HR 신청 이력에 그대로 남음).
   - 나눈 대화는 역할·사람별로 남긴다. AI 가 멈춰도 아래 바로가기와 「메뉴로 하기」로 손으로 다 할 수 있다. */
(function () {
  const E = window.EHR; if (!E) return;
  const HKEY = 'hurom-ehr-hugle-v1';
  const WD = '일월화수목금토';
  const pad = n => String(n).padStart(2, '0');
  const ymd = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const esc = E.esc;
  const st = () => E.st;
  const me = () => E.person(st().me);
  const who = () => st().role + ':' + (st().role === 'emp' ? st().me : st().role);
  const loadH = () => { try { return JSON.parse(localStorage.getItem(HKEY)) || {} } catch (e) { return {} } };
  const hist = () => loadH()[who()] || [];
  const push = (from, text, go) => { const a = loadH(); (a[who()] = a[who()] || []).push({ from, text, go: go || null, at: (d => ymd(d) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()))(new Date()) }); localStorage.setItem(HKEY, JSON.stringify(a)) };

  /* ---------- 날짜 알아듣기 ---------- */
  function base() { return new Date(E.today() + 'T00:00') }
  function parseDates(t) {
    const out = [], b = base();
    const add = d => out.push(ymd(d));
    let m;
    const re = /(\d{1,2})\s*[\/.월]\s*(\d{1,2})\s*일?/g;
    while ((m = re.exec(t))) { const d = new Date(b.getFullYear(), +m[1] - 1, +m[2]); if (d < b && b - d > 180 * 864e5) d.setFullYear(d.getFullYear() + 1); add(d) }
    if (/오늘/.test(t)) add(b);
    if (/내일/.test(t)) { const d = new Date(b); d.setDate(d.getDate() + 1); add(d) }
    if (/모레/.test(t)) { const d = new Date(b); d.setDate(d.getDate() + 2); add(d) }
    const wre = /(다음\s*주|담주|이번\s*주)?\s*([월화수목금토일])요일/g;
    while ((m = wre.exec(t))) {
      const want = WD.indexOf(m[2]), d = new Date(b);
      let diff = (want - d.getDay() + 7) % 7;
      if (m[1] && /다음|담/.test(m[1])) diff = (7 - d.getDay()) % 7 + want + (want === 0 ? 7 : 0) || 7;
      else if (diff === 0 && !/오늘/.test(t)) diff = 0;
      d.setDate(d.getDate() + diff); add(d)
    }
    return [...new Set(out)].sort();
  }
  const fmt = s => { const d = new Date(s + 'T00:00'); return (d.getMonth() + 1) + '/' + d.getDate() + '(' + WD[d.getDay()] + ')' };

  /* ---------- 할 일 알아듣기 ---------- */
  function ask(q) {
    const t = q.replace(/\s+/g, ' ').trim(), p = me(), role = st().role;
    if (!st().people.length) return { text: '아직 등록된 사람이 없어요. 「데이터 관리」에서 샘플을 넣어 주세요.', go: '#data' };
    // 연차·반차·외근 신청
    const ty = /오전\s*반차/.test(t) ? '오전반차' : /오후\s*반차/.test(t) ? '오후반차' : /반차/.test(t) ? '오전반차' : /대체\s*휴무/.test(t) ? '대체휴무' : /외근/.test(t) ? '외근' : /병가/.test(t) ? '병가' : /경조/.test(t) ? '경조휴가' : /(연차|휴가|쉴래|쉬고|쉰다)/.test(t) && !/(남은|잔여|몇|얼마|내역|사용)/.test(t) && !/누구/.test(t) ? '연차' : null;
    if (ty && E.TYPES[ty]) {
      const ds = parseDates(t);
      if (!ds.length) return { text: ty + ' 날짜를 알려 주세요. 예: 「금요일 ' + ty + '」, 「11/20~11/21 ' + ty + '」' };
      const from = ds[0], to = /[~\-부터까지]/.test(t) && ds.length > 1 ? ds[ds.length - 1] : (E.TYPES[ty].days === 0.5 ? from : ds[ds.length - 1]);
      const wkend = ds.filter(d => { const w = new Date(d + 'T00:00').getDay(); return w === 0 || w === 6 });
      if (wkend.length && wkend.length === ds.length) return { text: fmt(ds[0]) + '은 쉬는 날이라 ' + ty + '를 쓰지 않아도 돼요. 혹시 다른 날인가요?' };
      return { text: fmt(from) + (to !== from ? ' ~ ' + fmt(to) : '') + ' ' + ty + ' 신청서를 채워 두었어요. 내용 확인하고 [신청]만 누르세요.', go: '#leave/new', fill: { type: ty, from, to, reason: '' }, asEmp: true };
    }
    // 남은 연차 · 사용 내역
    if (/(남은|잔여|몇\s*개|몇\s*일|얼마)/.test(t) && /(연차|휴가)/.test(t) || /연차\s*(내역|사용)/.test(t)) {
      const no = role === 'emp' ? st().me : (p && p.no) || st().me, b = E.bal(no), pp = E.person(no) || {};
      return { text: esc(pp.name) + '님 연차: 발생 ' + b.grant + '일 · 사용 ' + b.used + '일 · 예약 ' + b.res + '일 · **남은 ' + b.rem + '일**', go: '#leave/mine', asEmp: true, btn: '사용 내역 보기' };
    }
    // 증명서
    if (/증명서|재직\s*증명|경력\s*증명/.test(t)) {
      const kind = /경력/.test(t) ? '경력증명서' : '재직증명서';
      return { text: kind + ' 신청 화면을 열었어요. 용도만 적고 [신청]을 누르세요.', go: '#cert', fill: { cert: kind }, asEmp: true };
    }
    // 팀 근태 · 누가 쉬나
    if (/(누구|누가|팀).*(쉬|부재|휴가|연차|없)/.test(t) || /부재|근태\s*현황/.test(t)) {
      const ds = parseDates(t), b = base(), days = [];
      if (ds.length) days.push(...ds); else if (/이번\s*주|주간/.test(t)) { const d = new Date(b); d.setDate(d.getDate() - d.getDay() + 1); for (let i = 0; i < 5; i++) { days.push(ymd(d)); d.setDate(d.getDate() + 1) } } else days.push(E.today());
      const dept = p && p.dept;
      const rows = [];
      days.forEach(d => E.absentOn(d).forEach(r => { const x = E.person(r.no) || {}; if (role === 'hr' || !dept || x.dept === dept) rows.push(fmt(d) + ' ' + esc(x.name) + ' · ' + r.type) }));
      return { text: rows.length ? rows.join('<br>') : (days.length > 1 ? '이번 주' : fmt(days[0])) + '에 ' + (role === 'hr' ? '' : '우리 팀 ') + '쉬는 사람이 없어요.', go: '#status', btn: '근태 현황 보기' };
    }
    // 바로 가기 말
    const jump = [[/급여|명세서|월급/, '#pay', '급여 화면을 열게요.'], [/연차\s*촉진/, '#promote', '연차 촉진 화면을 열게요.'], [/조직도/, '#org', '조직도를 열게요.'], [/규정|제도/, '#rules', '휴롬 규정을 열게요.'], [/경비/, '#exp', '경비 화면을 열게요.'], [/교육/, '#edu', '교육 화면을 열게요.'], [/시차|유연/, '#work/flex', '시차·유연근무 화면을 열게요.'], [/승인/, role === 'lead' ? '#leave/approve' : '#leave/hr', '승인할 것을 열게요.'], [/대시보드/, '#dash', '대시보드를 열게요.']];
    for (const [re, go, msg] of jump) if (re.test(t)) return { text: msg, go };
    return { text: '아직 그 말은 못 알아들었어요. 이렇게 말해 보세요: 「금요일 연차」, 「남은 연차」, 「재직증명서」, 「이번 주 누구 쉬어?」 — 아래 바로가기로 바로 가도 돼요.' };
  }

  /* ---------- 화면 ---------- */
  const QUICK = [['근태 신청', '#leave/new'], ['내 연차', '#leave/mine'], ['증명서', '#cert'], ['근태 현황', '#status'], ['급여', '#pay'], ['휴롬 규정', '#rules']];
  const CSS = '<style>.hg{max-width:760px;margin:24px auto 0}.hg h1{font-size:40px;letter-spacing:-1px;text-align:center;margin:18px 0 6px;color:var(--brand,#004123)}.hg .sub{text-align:center;color:#777;margin-bottom:18px}' +
    '.hg form{display:flex;gap:8px;border:1px solid #cfd8cf;border-radius:28px;padding:6px 6px 6px 18px;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.06)}.hg input{flex:1;border:0;outline:0;font-size:17px;background:transparent}.hg form button{border-radius:22px;padding:8px 18px}' +
    '.hg .chips{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin:12px 0}.hg .chips a{border:1px solid #dde3dd;border-radius:16px;padding:5px 12px;font-size:13px;color:#333;text-decoration:none;background:#fff;cursor:pointer}' +
    '.hg .log{margin-top:16px;display:flex;flex-direction:column;gap:8px}.hg .m{max-width:80%;padding:9px 13px;border-radius:14px;line-height:1.5;font-size:14px}.hg .u{align-self:flex-end;background:var(--brand,#004123);color:#fff}.hg .a{align-self:flex-start;background:#f1f4f0}.hg .m small{display:block;opacity:.6;font-size:11px;margin-top:3px}.hg .m .btn{margin-top:6px}' +
    '.hg .man{text-align:center;margin-top:16px;font-size:13px;color:#777}.hg .man a{color:inherit}</style>';
  function view() {
    const h = hist().slice(-30), p = me();
    return CSS + '<div class="hg"><h1>휴글</h1><div class="sub">' + (p ? esc(p.name) + '님, ' : '') + '무엇을 도와드릴까요? 말로 신청하고 물어보세요.</div>' +
      '<form id="hg_f"><input id="hg_q" autocomplete="off" placeholder="예: 금요일 연차 쓸래 · 남은 연차 · 재직증명서 · 이번 주 누구 쉬어?"><button class="btn p">보내기</button></form>' +
      '<div class="chips">' + ['금요일 연차 쓸래', '남은 연차', '재직증명서 뽑아줘', '이번 주 누구 쉬어?'].map(x => '<a data-hq="' + x + '">' + x + '</a>').join('') + '</div>' +
      '<div class="log" id="hg_log">' + h.map(m => '<div class="m ' + (m.from === 'u' ? 'u' : 'a') + '">' + (m.from === 'u' ? esc(m.text) : m.text.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')) + (m.go ? '<br><a class="btn sm" href="' + m.go + '">열기</a>' : '') + '<small>' + m.at + '</small></div>').join('') + '</div>' +
      '<div class="man">AI가 멈추거나 답이 이상하면 손으로 하세요 → ' + QUICK.map(([n, g]) => '<a href="' + g + '">' + n + '</a>').join(' · ') + ' · <a href="#' + (st().role === 'hr' ? 'dash' : 'inbox') + '">메뉴로 하기</a>' +
      (h.length ? ' · <a href="#" id="hg_clr">대화 지우기</a>' : '') + '</div></div>';
  }
  function fillLater(f) {
    setTimeout(() => {
      const $ = s => document.querySelector(s);
      if (f.type) { const b = document.querySelector('#types [data-t="' + f.type + '"]'); if (b) b.click() }
      setTimeout(() => {
        const set = (id, v) => { const el = $(id); if (el && v != null) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })) } };
        set('#f_from', f.from); set('#f_to', f.to); set('#f_reason', f.reason || null); set('#c_kind', f.cert);
        const go = $('#f_send') || $('#c_go'); if (go) { go.scrollIntoView({ block: 'center' }); go.style.outline = '3px solid #f0a020' }
      }, 80);
    }, 120);
  }
  function send(q) {
    if (!q.trim()) return;
    push('u', q);
    let r; try { r = ask(q) } catch (e) { r = { text: '답을 만들다 멈췄어요. 아래 바로가기로 손으로 해 주세요.' } }
    push('a', r.text, r.go && !r.fill ? r.go : null);
    if (r.fill || (r.go && r.asEmp && /신청|채워|열었/.test(r.text))) {
      if (r.asEmp && st().role !== 'emp') E.switchRole('emp', r.go); else location.hash = r.go;
      fillLater(r.fill || {});
    } else E.render();
  }
  function wire() {
    const f = document.getElementById('hg_f'); if (!f || f.dataset.w) return; f.dataset.w = 1;
    const q = document.getElementById('hg_q'); q.focus();
    f.onsubmit = e => { e.preventDefault(); send(q.value) };
    document.querySelectorAll('[data-hq]').forEach(a => a.onclick = () => send(a.dataset.hq));
    const c = document.getElementById('hg_clr'); if (c) c.onclick = e => { e.preventDefault(); const a = loadH(); delete a[who()]; localStorage.setItem(HKEY, JSON.stringify(a)); E.render() };
  }

  E.V.hugle = view;
  Object.keys(E.MENUS).forEach(r => { const g = E.MENUS[r][0]; if (g && !g[1].some(x => x[0] === 'hugle')) g[1].unshift(['hugle', '휴글']) });
  new MutationObserver(wire).observe(document.body, { childList: true, subtree: true });
  if (!location.hash || location.hash === '#') location.hash = '#hugle'; else E.render();
  window.HUGLE = { ask, parseDates };
})();
