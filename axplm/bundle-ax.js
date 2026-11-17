(function(){var __styles={"hub":"hub","top":"top","btn":"btn","btnPrimary":"btnPrimary","projSel":"projSel","storeTag":"storeTag","logo":"logo","spacer":"spacer","tabs":"tabs","tab":"tab","tabOn":"tabOn","body":"body","btnSm":"btnSm","grid":"grid","g4":"g4","g3":"g3","g2":"g2","card":"card","cardTitle":"cardTitle","count":"count","kpiLabel":"kpiLabel","kpiValue":"kpiValue","kpiSub":"kpiSub","good":"good","bad":"bad","warn":"warn","aiBadge":"aiBadge","stageBar":"stageBar","stageCell":"stageCell","stageDone":"stageDone","stageNow":"stageNow","list":"list","item":"item","itemMain":"itemMain","itemMeta":"itemMeta","empty":"empty","pill":"pill","p_todo":"p_todo","p_doing":"p_doing","p_done":"p_done","p_blocked":"p_blocked","p_na":"p_na","p_late":"p_late","sel":"sel","input":"input","gantt":"gantt","gRow":"gRow","gName":"gName","gTrack":"gTrack","barAs":"barAs","barTo":"barTo","barCrit":"barCrit","barDone":"barDone","barMs":"barMs","todayLine":"todayLine","gHead":"gHead","legend":"legend","sw":"sw","cmp":"cmp","cmpBox":"cmpBox","cmpArrow":"cmpArrow","change":"change","saved":"saved","matrix":"matrix","regionHead":"regionHead","regionBase":"regionBase","table":"table","chips":"chips","chip":"chip","chipOn":"chipOn","chipBase":"chipBase","stageGroup":"stageGroup","stageHead":"stageHead","dot":"dot","prog":"prog","progIn":"progIn","crit":"crit","folder":"folder","form":"form","formLabel":"formLabel","riskGrid":"riskGrid","riskCell":"riskCell","riskTag":"riskTag","note":"note","flowBtn":"flowBtn"};var s=document.createElement('style');s.textContent=".hub {\n  font-family: \"Pretendard Variable\", Pretendard, -apple-system, \"Segoe UI Variable Text\", \"Segoe UI\", \"Malgun Gothic\", sans-serif;\n  letter-spacing: -0.01em;\n  -webkit-font-smoothing: antialiased;\n  color: #1F2A24;\n  background: #F7F4EC;\n  font-size: 13px;\n  line-height: 1.45;\n  min-height: 600px;\n}\n.hub * {\n  box-sizing: border-box;\n}\n.hub button {\n  font-family: inherit;\n}\n\n.top {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  padding: 12px 24px;\n  background: linear-gradient(160deg, #2F8A4E, #1F6B45 60%, #174F34);\n  border-bottom: none;\n  color: #fff;\n}\n.top .btn {\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.3);\n  color: #fff;\n}\n.top .btn:hover {\n  background: rgba(255, 255, 255, 0.22);\n  border-color: rgba(255, 255, 255, 0.55);\n}\n.top .btnPrimary {\n  background: #fff;\n  border-color: #fff;\n  color: #1F6B45;\n  font-weight: 700;\n}\n.top .btnPrimary:hover {\n  background: #E6F1EA;\n}\n.top .projSel {\n  border-color: transparent;\n}\n.top .storeTag {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.logo {\n  font-weight: 800;\n  font-size: 17px;\n  color: #fff;\n  letter-spacing: 0.5px;\n  margin-right: 8px;\n  white-space: nowrap;\n}\n\n.logo small {\n  display: block;\n  font-weight: 400;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.projSel {\n  min-width: 300px;\n  padding: 8px 10px;\n  border: 1px solid #E4E8E5;\n  border-radius: 8px;\n  font-size: 13.5px;\n  background: #fff;\n}\n\n.spacer {\n  flex: 1;\n}\n\n.storeTag {\n  font-size: 11px;\n  color: #46524B;\n}\n\n.tabs {\n  display: flex;\n  gap: 4px;\n  padding: 0 24px;\n  background: #fff;\n  border-bottom: 1px solid #E4E8E5;\n  overflow-x: auto;\n}\n\n.tab {\n  border: none;\n  background: none;\n  padding: 12px 18px;\n  cursor: pointer;\n  font-size: 15px;\n  color: #46524B;\n  font-family: inherit;\n  border-bottom: 3px solid transparent;\n  white-space: nowrap;\n}\n.tab:hover {\n  color: #1F2A24;\n}\n\n.tabOn {\n  color: #1F6B45;\n  border-bottom-color: #1F6B45;\n  font-weight: 700;\n}\n\n.body {\n  padding: 24px;\n}\n\n.btn {\n  border: 1px solid #E4E8E5;\n  background: #fff;\n  border-radius: 8px;\n  padding: 7px 14px;\n  cursor: pointer;\n  font-size: 13px;\n  color: #1F2A24;\n}\n.btn:hover {\n  border-color: #8A948E;\n}\n\n.btnPrimary {\n  background: #1F6B45;\n  border-color: #1F6B45;\n  color: #fff;\n}\n.btnPrimary:hover {\n  background: #174F34;\n}\n\n.btnSm {\n  padding: 2px 8px;\n  font-size: 12px;\n}\n\n.grid {\n  display: grid;\n  gap: 16px;\n}\n\n.g4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.g3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.g2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n@media (max-width: 900px) {\n  .g4, .g3, .g2 {\n    grid-template-columns: 1fr;\n  }\n}\n.card {\n  background: #fff;\n  border: 1px solid #E4E8E5;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.cardTitle {\n  font-weight: 700;\n  font-size: 16px;\n  margin: 0 0 12px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.count {\n  font-size: 11px;\n  background: #F1F2F1;\n  color: #46524B;\n  padding: 1px 7px;\n  border-radius: 10px;\n  font-weight: 600;\n}\n\n.kpiLabel {\n  font-size: 12px;\n  color: #46524B;\n}\n\n.kpiValue {\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n\n.kpiSub {\n  font-size: 12px;\n  color: #46524B;\n}\n\n.good {\n  color: #2F8A4E;\n}\n\n.bad {\n  color: #C8344A;\n}\n\n.warn {\n  color: #D9731A;\n}\n\n.aiBadge {\n  display: inline-block;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fff;\n  padding: 1px 6px;\n  border-radius: 4px;\n  background: linear-gradient(90deg, #5B4BC4, #2F7FD1);\n}\n\n.stageBar {\n  display: flex;\n  gap: 3px;\n  margin: 4px 0 2px;\n}\n\n.stageCell {\n  flex: 1;\n  text-align: center;\n  font-size: 11px;\n  padding: 6px 2px;\n  border-radius: 4px;\n  background: #EEF0EE;\n  color: #46524B;\n  position: relative;\n}\n\n.stageDone {\n  background: #DCEBDF;\n  color: #2F8A4E;\n}\n\n.stageNow {\n  background: #1F6B45;\n  color: #fff;\n  font-weight: 700;\n}\n\n.list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.item {\n  padding: 7px 0;\n  border-top: 1px solid #F1F2F1;\n  display: flex;\n  gap: 8px;\n  align-items: flex-start;\n}\n.item:first-child {\n  border-top: none;\n}\n\n.itemMain {\n  flex: 1;\n  min-width: 0;\n}\n\n.itemMeta {\n  font-size: 11.5px;\n  color: #46524B;\n}\n\n.empty {\n  color: #46524B;\n  font-size: 12px;\n  padding: 8px 0;\n}\n\n.pill {\n  display: inline-block;\n  font-size: 11px;\n  padding: 1px 7px;\n  border-radius: 10px;\n  white-space: nowrap;\n  font-weight: 600;\n}\n\n.p_todo {\n  background: #F1F2F1;\n  color: #46524B;\n}\n\n.p_doing {\n  background: #E2ECF7;\n  color: #3B6EA8;\n}\n\n.p_done {\n  background: #DCEBDF;\n  color: #2F8A4E;\n}\n\n.p_blocked {\n  background: #F7DFDB;\n  color: #C8344A;\n}\n\n.p_na {\n  background: #F4F4F4;\n  color: #aaa;\n}\n\n.p_late {\n  background: #F7DFDB;\n  color: #C8344A;\n}\n\n.sel {\n  font-size: 12px;\n  padding: 2px 4px;\n  border: 1px solid #E4E8E5;\n  border-radius: 4px;\n  background: #fff;\n}\n\n.input {\n  font-size: 13px;\n  padding: 6px 8px;\n  border: 1px solid #E4E8E5;\n  border-radius: 6px;\n  width: 100%;\n  background: #fff;\n}\n\n.gantt {\n  overflow-x: auto;\n}\n\n.gRow {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  align-items: center;\n  border-top: 1px solid #F1F2F1;\n  min-height: 30px;\n}\n\n.gName {\n  font-size: 12px;\n  padding: 4px 8px 4px 0;\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n\n.gName span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.gTrack {\n  position: relative;\n  height: 30px;\n}\n\n.barAs {\n  position: absolute;\n  top: 5px;\n  height: 7px;\n  background: #CFCBC3;\n  border-radius: 3px;\n}\n\n.barTo {\n  position: absolute;\n  top: 14px;\n  height: 11px;\n  border-radius: 3px;\n  background: #3B6EA8;\n}\n\n.barCrit {\n  background: #1F6B45;\n}\n\n.barDone {\n  background: #2F8A4E;\n}\n\n.barMs {\n  position: absolute;\n  top: 12px;\n  width: 10px;\n  height: 10px;\n  transform: rotate(45deg);\n  background: #1F6B45;\n  margin-left: -5px;\n}\n\n.todayLine {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #C8344A;\n  opacity: 0.6;\n}\n\n.gHead {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  font-size: 11px;\n  color: #46524B;\n}\n\n.legend {\n  display: flex;\n  gap: 14px;\n  font-size: 11.5px;\n  color: #46524B;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.sw {\n  display: inline-block;\n  width: 18px;\n  height: 8px;\n  border-radius: 2px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n\n.cmp {\n  display: flex;\n  align-items: stretch;\n  gap: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #E4E8E5;\n}\n\n.cmpBox {\n  flex: 1;\n  padding: 12px 14px;\n  background: #fff;\n}\n\n.cmpArrow {\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n  background: #EEF0EE;\n  font-size: 18px;\n  color: #46524B;\n}\n\n.change {\n  border-left: 3px solid #5B4BC4;\n  padding: 6px 10px;\n  margin: 8px 0;\n  background: #F7F6FD;\n  border-radius: 0 6px 6px 0;\n}\n\n.saved {\n  font-weight: 700;\n  color: #2F8A4E;\n  white-space: nowrap;\n}\n\n.matrix {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n\n.matrix th, .matrix td {\n  border: 1px solid #E4E8E5;\n  padding: 6px 8px;\n  text-align: center;\n}\n\n.matrix th {\n  background: #EEF0EE;\n  font-weight: 600;\n}\n\n.matrix td:first-child, .matrix th:first-child {\n  text-align: left;\n}\n\n.regionHead {\n  cursor: pointer;\n}\n.regionHead:hover {\n  background: #EAE6DF;\n}\n\n.regionBase {\n  background: #1F6B45 !important;\n  color: #fff;\n}\n\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\n\n.table th {\n  text-align: left;\n  font-weight: 600;\n  color: #46524B;\n  font-size: 11.5px;\n  padding: 6px 8px;\n  border-bottom: 1px solid #E4E8E5;\n}\n\n.table td {\n  padding: 7px 8px;\n  border-bottom: 1px solid #F1F2F1;\n  vertical-align: top;\n}\n\n.chips {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n.chip {\n  border: 1px solid #E4E8E5;\n  background: #fff;\n  border-radius: 16px;\n  padding: 5px 12px;\n  cursor: pointer;\n  font-size: 12.5px;\n}\n.chip:hover {\n  border-color: #8A948E;\n}\n\n.chipOn {\n  background: #F3E6E8;\n  border-color: #1F6B45;\n  color: #1F6B45;\n  font-weight: 600;\n}\n\n.chipBase {\n  background: #1F6B45;\n  color: #fff;\n  border-color: #1F6B45;\n}\n\n.stageGroup {\n  margin-bottom: 14px;\n}\n\n.stageHead {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border-radius: 6px;\n  background: #EEF0EE;\n  cursor: pointer;\n}\n\n.dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.prog {\n  flex: 0 0 120px;\n  height: 6px;\n  background: #E6E3DD;\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.progIn {\n  height: 100%;\n  background: #2F8A4E;\n}\n\n.crit {\n  font-size: 10.5px;\n  color: #C8344A;\n  font-weight: 700;\n}\n\n.folder {\n  font-size: 11px;\n  color: #46524B;\n  background: #EEF0EE;\n  padding: 0 6px;\n  border-radius: 3px;\n}\n\n.form {\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  gap: 10px 14px;\n  align-items: center;\n  max-width: 860px;\n}\n\n.formLabel {\n  font-size: 12.5px;\n  color: #46524B;\n}\n\n.riskGrid {\n  display: grid;\n  grid-template-columns: 24px repeat(5, 1fr);\n  gap: 3px;\n  font-size: 11px;\n}\n\n.riskCell {\n  min-height: 38px;\n  border-radius: 4px;\n  padding: 3px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  align-content: flex-start;\n}\n\n.riskTag {\n  background: rgba(255, 255, 255, 0.85);\n  border-radius: 3px;\n  padding: 0 4px;\n  font-weight: 600;\n}\n\n.note {\n  font-size: 11.5px;\n  color: #46524B;\n  margin-top: 6px;\n}\n\n.flowBtn {\n  text-align: left;\n  cursor: pointer;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font: inherit;\n  color: inherit;\n  transition: transform 0.12s ease, box-shadow 0.12s ease;\n}\n\n.flowBtn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1) !important;\n}";document.head.appendChild(s);
var __m={},__c={};function require(n){if(n==="react")return window.React;if(n==="react-dom")return window.ReactDOM;if(__c[n])return __c[n].exports;var m=__c[n]={exports:{}};__m[n](m,m.exports,require);return m.exports;}
__m["preview/entry-ax.js"]=function(module,exports,require){"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// AX-PLM 로컬 미리보기 — 브라우저 저장소 + 예시 2개 (?reset=1 이면 비우고 다시)
const React = __importStar(require("react"));
const ReactDom = __importStar(require("react-dom"));
const AxPlm_1 = __importDefault(require("src/webparts/huromAxPlm/components/AxPlm.js"));
const store_1 = require("src/webparts/huromDevHub/model/store.js");
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const store = new store_1.LocalStore('hurom-axplm.projects.v1');
const params = new URLSearchParams(location.search);
if (params.get('reset'))
    window.localStorage.clear();
store.list()
    .then(ps => (ps.length || params.get('empty') ? undefined : (0, ax_1.axSamples)().reduce((acc, p) => acc.then(() => store.save(p)), Promise.resolve(undefined))))
    .then(() => ReactDom.render(React.createElement(AxPlm_1.default, { store, userDisplayName: params.get('user') || '심준보' }), document.getElementById('root')));

};
__m["src/webparts/huromAxPlm/components/AxPlm.js"]=function(module,exports,require){"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AxPlm;
const React = __importStar(require("react"));
const store_1 = require("src/webparts/huromDevHub/model/store.js");
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const Timeline_1 = __importDefault(require("src/webparts/huromAxPlm/components/Timeline.js"));
const RegRadar_1 = __importStar(require("src/webparts/huromAxPlm/components/RegRadar.js"));
const theme_1 = require("src/webparts/huromAxPlm/components/theme.js");
function aiEvents(items) {
    const out = [];
    const now = new Date().toISOString();
    items.forEach(p => {
        const st = (0, ax_1.stageOf)(p.stage);
        const sl = `${st.no} ${st.name}`;
        p.log.filter(l => l.ai).forEach(l => out.push({ at: l.at, who: l.who, project: p.name, pid: p.id, stage: sl, what: l.what }));
        (p.brief || []).forEach(b => out.push({ at: b.at, who: b.who, project: p.name, pid: p.id, stage: sl, what: `브리핑 — ${b.text}` }));
        (p.asks || []).forEach(a => {
            if (a.answer)
                out.push({ at: a.answeredAt || a.at, who: a.answeredBy || 'AI', project: p.name, pid: p.id, stage: `${(0, ax_1.stageOf)(a.stage).no} ${(0, ax_1.stageOf)(a.stage).name}`, what: `사전 검토 답 — ${a.text}` });
            else
                out.push({ at: a.at, who: 'AI 사전 검토', project: p.name, pid: p.id, stage: sl, what: `검토 중 — ${a.text}`, live: true });
        });
        const w = (0, ax_1.whereNow)(p);
        if (w.state === 'behind' || w.state === 'late')
            out.push({ at: now, who: 'AI 일정 감시', project: p.name, pid: p.id, stage: sl, what: `일정 경고 — ${w.label}`, live: true });
    });
    return out.sort((a, b) => (a.at < b.at ? 1 : a.at > b.at ? -1 : 0));
}
const REAL = () => new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const ago = (iso) => {
    if ((0, ax_1.today)() !== REAL())
        return (0, ax_1.fmt)(iso);
    const m = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
    return m < 1 ? '방금' : m < 60 ? `${m}분 전` : m < 1440 ? `${Math.round(m / 60)}시간 전` : (0, ax_1.fmt)(iso);
};
const initials = (s) => (s.replace(/^PC-/, '').replace(/\(.*\)/, '').trim().slice(0, 2) || 'AI');
function AxPlm(props) {
    const who = props.userDisplayName || '나';
    const [items, setItems] = React.useState(undefined);
    const [err, setErr] = React.useState('');
    const [sel, setSel] = React.useState(undefined);
    const [adding, setAdding] = React.useState(false);
    const [q, setQ] = React.useState('');
    const [mine, setMine] = React.useState(false);
    const [drag, setDrag] = React.useState(undefined);
    const [over, setOver] = React.useState(undefined);
    const [view, setView] = React.useState('board');
    const [reg, setReg] = React.useState([]);
    const [demo, setDemo] = React.useState(false);
    const [sim, setSim] = React.useState(undefined); // 시간 손잡이 날짜 (심준보 msg 10366339)
    const [playing, setPlaying] = React.useState(false); // 목록이 비면 예시로 화면을 보여 주고 저장은 안 함 (심준보 msg 10364460 '아무화면안뜨는데')
    (0, ax_1.setNow)(sim);
    const queue = React.useMemo(() => new store_1.SaveQueue(props.store), [props.store]);
    const tick = (0, theme_1.useTick)(3200);
    React.useEffect(() => {
        props.store.list().then(xs => { const open = xs.filter(x => !x.closed); if (!xs.length) {
            setDemo(true);
            setItems((0, ax_1.axSamples)());
        }
        else
            setItems(open); }, e => setErr(String((e && e.message) || e)));
        (0, RegRadar_1.loadReg)().then(setReg, () => undefined);
    }, [props.store]);
    const update = (id, fn) => {
        if (sim)
            return;
        const cur = (items || []).filter(x => x.id === id)[0];
        if (!cur)
            return;
        const stamp = (x) => (Object.assign(Object.assign({}, fn(x)), { updated: new Date().toISOString() }));
        const next = stamp(cur);
        setItems(xs => (xs || []).map(x => (x.id === id ? next : x)));
        if (demo)
            return;
        queue.save(next, stamp).then(r => setItems(xs => (xs || []).map(x => (x.id === id ? Object.assign(Object.assign(Object.assign({}, x), { spId: r.saved.spId, spVer: r.saved.spVer }), (r.merged ? r.saved : {})) : x))), e => setErr(`저장 못 했어요 — ${String((e && e.message) || e)}`));
    };
    const add = (name, owner, target, start) => {
        const p = (0, ax_1.newProject)(name, who, owner.trim() || who, target || undefined, start || undefined);
        setItems(xs => [p].concat(demo ? [] : (xs || [])));
        setDemo(false);
        setAdding(false);
        setSel(p.id);
        props.store.save(p).then(s => setItems(xs => (xs || []).map(x => (x.id === p.id ? Object.assign(Object.assign({}, x), { spId: s.spId, spVer: s.spVer }) : x))), e => setErr(`저장 못 했어요 — ${String((e && e.message) || e)}`));
    };
    const root = { minHeight: '100vh', fontFamily: '"Pretendard", "Malgun Gothic", "Segoe UI", sans-serif', color: theme_1.T.text, background: `radial-gradient(1200px 600px at 20% -10%, #0F2A20 0%, ${theme_1.T.bg} 60%)`, paddingBottom: 32 };
    if (!items)
        return React.createElement("div", { "data-axplm": true, className: "axp", style: Object.assign(Object.assign({}, root), { padding: 32 }) },
            React.createElement("style", null, theme_1.CSS),
            React.createElement("span", { className: "axp-blink", style: { color: theme_1.T.sub } }, err || 'AI가 프로젝트를 불러오는 중…'));
    const base = items.filter(p => !p.closed && (!q || (p.name + ' ' + (p.owner || '')).toLowerCase().indexOf(q.toLowerCase()) >= 0) && (!mine || p.owner === who));
    const shown = sim ? base.map(p => (0, ax_1.simulate)(p, sim)) : base;
    const cur = shown.filter(x => x.id === sel)[0] || (sim ? undefined : items.filter(x => x.id === sel)[0]);
    const realToday = REAL();
    const D = 86400000;
    const dms = (x) => new Date(x + 'T00:00:00').getTime();
    let lo = dms(realToday) - 60 * D;
    let hi = dms(realToday) + 240 * D;
    base.forEach(p => { if (p.start)
        lo = Math.min(lo, dms(p.start)); const e = (p.plan || {}).S7; if (e)
        hi = Math.max(hi, dms(e)); });
    const ymdOf = (t) => { const x = new Date(t); return `${x.getFullYear()}-${('0' + (x.getMonth() + 1)).slice(-2)}-${('0' + x.getDate()).slice(-2)}`; };
    const events = aiEvents(shown);
    const careN = shown.reduce((a, p) => a + (0, ax_1.careList)(p).length, 0);
    return (React.createElement("div", { "data-axplm": true, className: "axp", style: root },
        React.createElement("style", null, theme_1.CSS),
        React.createElement("div", { className: "axp-aurora" },
            React.createElement("i", null),
            React.createElement("i", null),
            React.createElement("i", null)),
        React.createElement("div", { className: "axp-grid" }),
        React.createElement("div", { className: "axp-z" },
            React.createElement(TopBar, { who: who, view: view, setView: setView, q: q, setQ: setQ, mine: mine, setMine: setMine, careN: careN, onNew: () => setAdding(true), aiLive: Object.keys(shown.reduce((m, p) => { m[p.aiHelper || 'AI 도우미'] = 1; return m; }, {})).length + 2 }),
            err && React.createElement("div", { "data-ax-err": true, style: { margin: '0 24px 12px', background: theme_1.T.redDim, color: theme_1.T.red, padding: '8px 14px', borderRadius: 10, fontSize: 13 } },
                err,
                " ",
                React.createElement("button", { onClick: () => setErr(''), style: Object.assign(Object.assign({}, theme_1.btn), { padding: '2px 10px', marginLeft: 8 }) }, "\uB2EB\uAE30")),
            demo && React.createElement("div", { "data-ax-demo": true, style: { margin: '0 24px 10px', padding: '8px 14px', borderRadius: 12, background: theme_1.T.aiDim, color: '#D7CCFF', fontSize: 12.5, fontWeight: 700 } }, "\u2726 \uC544\uC9C1 \uB4F1\uB85D\uB41C \uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC5B4\uC11C \uC608\uC2DC 2\uAC1C\uB85C \uBCF4\uC5EC \uB4DC\uB824\uC694 \u2014 \uC608\uC2DC\uB294 \uC800\uC7A5\uB418\uC9C0 \uC54A\uACE0, [+ \uC0C8 \uD504\uB85C\uC81D\uD2B8]\uB97C \uB9CC\uB4E4\uBA74 \uC0AC\uB77C\uC838\uC694."),
            React.createElement(Scrub, { lo: lo, hi: hi, value: dms(sim || realToday), today: dms(realToday), items: base, playing: playing, sim: sim, onChange: t => { setPlaying(false); setSim(Math.abs(t - dms(realToday)) < D / 2 ? undefined : ymdOf(t)); }, onPlay: () => { if (playing) {
                    setPlaying(false);
                    return;
                } if (!sim || dms(sim) >= hi)
                    setSim(ymdOf(lo)); setPlaying(true); }, onReset: () => { setPlaying(false); setSim(undefined); }, step: ymdOf, setSim: setSim, setPlaying: setPlaying }),
            events.length > 0 && React.createElement(Ticker, { events: events, onOpen: setSel }),
            adding && React.createElement(NewForm, { who: who, onCancel: () => setAdding(false), onAdd: add }),
            React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'minmax(0, 1.55fr) minmax(320px, 1fr)', gap: 16, padding: '16px 24px 0' } },
                React.createElement(Where, { items: shown, onOpen: setSel }),
                React.createElement(AiOps, { items: shown, events: events, reg: reg, tick: tick, onOpen: setSel })),
            React.createElement(Kpis, { items: shown, events: events, reg: reg, careN: careN }),
            view === 'plan' && React.createElement(Timeline_1.default, { items: shown, onOpen: id => setSel(id), sel: sel }),
            view === 'board' && React.createElement("div", { style: { display: 'flex', gap: 12, padding: '6px 24px 8px', overflowX: 'auto', alignItems: 'flex-start' } }, ax_1.AX_STAGES.map((s, si) => {
                const list = shown.filter(p => p.stage === s.id);
                const aiTask = (s.ai || [])[(tick + si) % Math.max(1, (s.ai || []).length)];
                const regN = reg.filter(x => x.stage === s.id).length;
                return (React.createElement("div", { key: s.id, "data-ax-col": s.id, className: "axp-in", onDragOver: e => { if (drag) {
                        e.preventDefault();
                        setOver(s.id);
                    } }, onDragLeave: () => setOver(o => (o === s.id ? undefined : o)), onDrop: e => { e.preventDefault(); const id = drag; setDrag(undefined); setOver(undefined); if (id)
                        update(id, p => (0, ax_1.moveTo)(p, s.id, who)); }, style: Object.assign(Object.assign({}, theme_1.glass), { animationDelay: `${si * 60}ms`, flex: '1 0 214px', minWidth: 214, maxWidth: 300, padding: 10, background: over === s.id ? theme_1.T.brandDim : 'rgba(255,255,255,.03)', outline: over === s.id ? `2px dashed ${theme_1.T.brand}` : 'none' }) },
                    React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, padding: '2px 4px 6px' } },
                        React.createElement("span", { style: { width: 24, height: 24, borderRadius: 8, background: list.length ? theme_1.T.brandDim : theme_1.T.glass2, color: list.length ? theme_1.T.brand : theme_1.T.faint, fontWeight: 900, fontSize: 13, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' } }, si + 1),
                        React.createElement("span", { style: { fontSize: 14, fontWeight: 800 } }, s.name),
                        React.createElement("span", { style: { flex: 1 } }),
                        React.createElement("span", { style: { fontSize: 12, color: theme_1.T.faint, fontWeight: 700 } }, list.length)),
                    React.createElement("div", { "data-ax-col-ai": true, title: (s.ai || []).join(' / '), style: { display: 'flex', alignItems: 'center', gap: 6, margin: '0 2px 8px', padding: '5px 8px', borderRadius: 9, background: theme_1.T.aiDim, fontSize: 11.5, color: '#D7CCFF', minHeight: 26 } },
                        React.createElement("span", { className: "axp-dot", style: { color: theme_1.T.ai, width: 6, height: 6, flex: '0 0 auto' } }),
                        React.createElement("span", { key: aiTask, className: "axp-in", style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
                            "AI \u00B7 ",
                            aiTask),
                        regN > 0 && React.createElement("span", { title: "\uC774 \uB2E8\uACC4\uC5D0\uC11C \uBBF8\uB9AC \uBCFC \uADDC\uC81C\u00B7\uB9AC\uCF5C\u00B7\uBD88\uB7C9", style: { marginLeft: 'auto', flex: '0 0 auto', fontWeight: 800, color: theme_1.T.amber } },
                            "\u2691",
                            regN)),
                    list.map(p => React.createElement(Card, { key: p.id, p: p, s: s, on: p.id === sel, onOpen: () => setSel(p.id), onDrag: () => setDrag(p.id), onDragEnd: () => { setDrag(undefined); setOver(undefined); } })),
                    !list.length && React.createElement("div", { style: { fontSize: 12, color: theme_1.T.faint, textAlign: 'center', padding: '14px 0', border: `1px dashed ${theme_1.T.line}`, borderRadius: 12 } }, "\uC5EC\uAE30\uB85C \uB04C\uC5B4 \uB193\uAE30"),
                    s.gate && React.createElement("div", { "data-ax-gate": s.gate, style: { marginTop: 8, display: 'flex', alignItems: 'center', gap: 8, color: theme_1.T.brand, fontSize: 12, fontWeight: 800 } },
                        React.createElement("span", { style: { flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${theme_1.T.brand})` } }),
                        React.createElement("span", { style: { width: 9, height: 9, transform: 'rotate(45deg)', background: theme_1.T.brand, boxShadow: `0 0 12px ${theme_1.T.brand}` } }),
                        s.gate,
                        React.createElement("span", { style: { flex: 1, height: 1, background: `linear-gradient(90deg, ${theme_1.T.brand}, transparent)` } }))));
            })),
            items.length === 0 && !adding && React.createElement("div", { style: { textAlign: 'center', color: theme_1.T.faint, fontSize: 14, padding: '20px 0 40px' } }, "\uC544\uC9C1 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC5B4\uC694. [+ \uC0C8 \uD504\uB85C\uC81D\uD2B8]\uB85C \uC2DC\uC791\uD558\uBA74 AI\uAC00 \uBC14\uB85C \uBD99\uC5B4\uC694.")),
        cur && React.createElement(Panel, { p: cur, who: who, tick: tick, sim: !!sim, onClose: () => setSel(undefined), update: fn => update(cur.id, fn) })));
}
function TopBar(props) {
    const d = new Date();
    const wd = '일월화수목금토'.charAt(d.getDay());
    return (React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 14, padding: '18px 24px 12px', flexWrap: 'wrap' } },
        React.createElement("span", { className: "axp-orb", style: { width: 34, height: 34 } },
            React.createElement("span", { style: { fontSize: 13, fontWeight: 900, color: theme_1.T.text } }, "AX")),
        React.createElement("div", null,
            React.createElement("div", { style: { fontSize: 22, fontWeight: 900, letterSpacing: '-.01em', lineHeight: 1.1 } },
                React.createElement("span", { className: "axp-grad" }, "AX-PLM"),
                " ",
                React.createElement("span", { style: { fontSize: 13, fontWeight: 700, color: theme_1.T.sub } }, "AI\uC640 \uAC19\uC774 \uB2EC\uB9AC\uB294 \uAC1C\uBC1C \uAD00\uC81C")),
            React.createElement("div", { style: { fontSize: 12, color: theme_1.T.faint, marginTop: 3 } },
                d.getMonth() + 1,
                "\uC6D4 ",
                d.getDate(),
                "\uC77C (",
                wd,
                ") \u00B7 ",
                props.who,
                " \uB2D8 \u00B7 \uB9C9\uC9C0 \uC54A\uACE0, \uC77C\uC815\uC774 \uAE30\uC900")),
        React.createElement("span", { "data-ax-live": true, style: { display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 11px', borderRadius: 999, background: theme_1.T.aiDim, color: '#D7CCFF', fontSize: 12, fontWeight: 800 } },
            React.createElement("span", { className: "axp-dot", style: { color: theme_1.T.ai } }),
            "LIVE \u00B7 AI ",
            props.aiLive,
            "\uBA85 \uC791\uC5C5 \uC911"),
        React.createElement("span", { style: { flex: 1 } }),
        React.createElement("span", { style: { display: 'flex', background: theme_1.T.glass, border: `1px solid ${theme_1.T.line}`, borderRadius: 999, padding: 3 } }, [['board', '보드'], ['plan', '일정']].map(v => React.createElement("button", { key: v[0], "data-ax-view": v[0], onClick: () => props.setView(v[0]), style: Object.assign(Object.assign({}, theme_1.btn), { border: 'none', padding: '5px 16px', background: props.view === v[0] ? theme_1.T.text : 'transparent', color: props.view === v[0] ? theme_1.T.bg : theme_1.T.sub }) }, v[1]))),
        props.careN > 0 && React.createElement("span", { "data-ax-care-total": true, title: "AI\uAC00 \uCC59\uAE38 \uAC83 \u2014 \uCE74\uB4DC\uB97C \uC5F4\uBA74 \uBCF4\uC5EC\uC694", style: { fontSize: 12.5, fontWeight: 800, background: theme_1.T.amberDim, color: theme_1.T.amber, borderRadius: 999, padding: '5px 12px' } },
            "\uCC59\uAE38 \uAC83 ",
            props.careN),
        React.createElement("input", { "data-ax-search": true, value: props.q, onChange: e => props.setQ(e.target.value), placeholder: "\uD504\uB85C\uC81D\uD2B8\u00B7PM \uCC3E\uAE30", style: Object.assign(Object.assign({}, theme_1.inp), { width: 190, borderRadius: 999 }) }),
        React.createElement("button", { "data-ax-mine": true, className: "axp-btn", onClick: () => props.setMine(!props.mine), style: Object.assign(Object.assign({}, theme_1.btn), { background: props.mine ? theme_1.T.brandDim : theme_1.T.glass, color: props.mine ? theme_1.T.brand : theme_1.T.sub }) }, "\uB0B4 \uAC83\uB9CC"),
        React.createElement("button", { "data-ax-new": true, onClick: props.onNew, style: theme_1.primary }, "+ \uC0C8 \uD504\uB85C\uC81D\uD2B8")));
}
function Ticker(props) {
    const xs = props.events.slice(0, 12);
    const loop = xs.concat(xs);
    return (React.createElement("div", { "data-ax-ticker": true, style: { margin: '0 24px', overflow: 'hidden', borderTop: `1px solid ${theme_1.T.line}`, borderBottom: `1px solid ${theme_1.T.line}`, padding: '7px 0', maskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)' } },
        React.createElement("div", { className: "axp-ticker" }, loop.map((e, k) => React.createElement("span", { key: k, onClick: () => props.onOpen(e.pid), style: { fontSize: 12, color: theme_1.T.sub, whiteSpace: 'nowrap', cursor: 'pointer' } },
            React.createElement("b", { style: { color: e.live ? theme_1.T.amber : '#D7CCFF' } },
                "\u2726 ",
                e.who),
            " ",
            React.createElement("span", { style: { color: theme_1.T.faint } },
                "@ ",
                e.project,
                " \u00B7 ",
                e.stage),
            " \u2014 ",
            e.what.length > 60 ? e.what.slice(0, 60) + '…' : e.what)))));
}
// 우리는 지금 어디쯤 — 프로젝트마다 7단계 길, 실제 위치(빛나는 점)와 오늘 있어야 할 곳(점선 고리)
function Where(props) {
    const rows = props.items.slice().sort((a, b) => (a.target || '9') < (b.target || '9') ? -1 : 1).slice(0, 6);
    return (React.createElement("div", { "data-ax-where": true, className: "axp-in", style: Object.assign(Object.assign({}, theme_1.glass), { padding: '16px 18px', position: 'relative', overflow: 'hidden' }) },
        React.createElement("span", { className: "axp-scan", style: { animationDelay: '-2s' } }),
        React.createElement("div", { style: { display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 } },
            React.createElement("span", { style: { fontSize: 16, fontWeight: 900 } }, "\uC6B0\uB9AC\uB294 \uC9C0\uAE08 \uC5B4\uB514\uCBE4"),
            React.createElement("span", { style: { fontSize: 12, color: theme_1.T.faint } }, "\u25CF \uC9C0\uAE08 \uC704\uCE58 \u00B7 \u25CC \uC624\uB298 \uB0A0\uC9DC\uB85C \uC788\uC5B4\uC57C \uD560 \uACF3 \u00B7 \u25C6 \uAD00\uBB38")),
        React.createElement("div", { style: { display: 'flex', gap: 10, fontSize: 10.5, color: theme_1.T.faint, marginBottom: 2 } },
            React.createElement("span", { style: { width: 180, flex: '0 0 180px' } }),
            React.createElement("div", { style: { position: 'relative', flex: 1, height: 14 } }, ax_1.AX_STAGES.map((s, k) => React.createElement("span", { key: s.id, style: { position: 'absolute', left: `${((k + 0.5) / ax_1.AX_STAGES.length) * 100}%`, transform: 'translateX(-50%)', whiteSpace: 'nowrap' } }, ['컨셉', '공동검토', '설계', '개발', '양산', '생산', '출시 후'][k]))),
            React.createElement("span", { style: { width: 82, flex: '0 0 82px' } })),
        rows.map((p, ri) => {
            const w = (0, ax_1.whereNow)(p);
            const col = theme_1.STATE_COLOR[w.state];
            const pos = (k) => `${((k + 0.5) / ax_1.AX_STAGES.length) * 100}%`;
            return (React.createElement("div", { key: p.id, "data-ax-where-row": p.id, onClick: () => props.onOpen(p.id), className: "axp-in", style: { animationDelay: `${ri * 80}ms`, display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderTop: `1px solid ${theme_1.T.line}`, cursor: 'pointer' } },
                React.createElement("div", { style: { width: 180, flex: '0 0 180px', minWidth: 0 } },
                    React.createElement("div", { style: { fontSize: 13.5, fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }, p.name),
                    React.createElement("div", { style: { fontSize: 11.5, color: col, fontWeight: 800, marginTop: 2 } }, w.label),
                    w.state !== 'none' && React.createElement("div", { title: "\uC2DC\uC791~\uCD9C\uC2DC \uBAA9\uD45C \uC911 \uC624\uB298 \uC704\uCE58", style: { display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 } },
                        React.createElement("span", { style: { flex: 1, height: 3, borderRadius: 3, background: theme_1.T.line, overflow: 'hidden' } },
                            React.createElement("span", { className: "axp-bar", style: { display: 'block', width: `${Math.round(w.pct * 100)}%`, height: '100%', background: theme_1.T.cyan } })),
                        React.createElement("span", { style: { fontSize: 10.5, color: theme_1.T.faint } },
                            "\uC77C\uC815 ",
                            Math.round(w.pct * 100),
                            "%"))),
                React.createElement("div", { style: { position: 'relative', flex: 1, height: 30 } },
                    React.createElement("div", { style: { position: 'absolute', left: pos(0), right: `${(0.5 / ax_1.AX_STAGES.length) * 100}%`, top: 14, height: 2, background: theme_1.T.line2, borderRadius: 2 } }),
                    React.createElement("div", { className: "axp-bar", style: { position: 'absolute', left: pos(0), width: `${(w.cur / ax_1.AX_STAGES.length) * 100}%`, top: 13, height: 4, borderRadius: 4, background: `linear-gradient(90deg, ${theme_1.T.brand}, ${col})`, boxShadow: `0 0 12px ${col}`, overflow: 'hidden' } },
                        React.createElement("span", { className: "axp-flow" })),
                    ax_1.AX_STAGES.map((s, k) => {
                        const done = k < w.cur;
                        const isCur = k === w.cur;
                        return (React.createElement(React.Fragment, { key: s.id },
                            s.gate && React.createElement("span", { title: s.gate, style: { position: 'absolute', left: `${((k + 1) / ax_1.AX_STAGES.length) * 100}%`, top: 11, width: 8, height: 8, marginLeft: -4, transform: 'rotate(45deg)', background: k < w.cur ? theme_1.T.brand : theme_1.T.bg2, border: `1.5px solid ${k < w.cur ? theme_1.T.brand : theme_1.T.line2}` } }),
                            !isCur && React.createElement("span", { title: `${s.no} ${s.name}${(p.plan || {})[s.id] ? ' ~ ' + (p.plan || {})[s.id] : ''}`, style: { position: 'absolute', left: pos(k), top: 10, width: 10, height: 10, marginLeft: -5, borderRadius: '50%', background: done ? theme_1.T.brand : theme_1.T.bg2, border: `2px solid ${done ? theme_1.T.brand : theme_1.T.line2}` } }),
                            k === w.exp && w.exp !== w.cur && React.createElement("span", { title: "\uC624\uB298 \uB0A0\uC9DC\uB85C \uC788\uC5B4\uC57C \uD560 \uB2E8\uACC4", style: { position: 'absolute', left: pos(k), top: 4, width: 22, height: 22, marginLeft: -11, borderRadius: '50%', border: `2px dashed ${theme_1.T.sub}` } })));
                    }),
                    React.createElement("span", { "data-ax-where-me": true, className: "axp-dot", title: `지금: ${(0, ax_1.stageOf)(p.stage).no} ${(0, ax_1.stageOf)(p.stage).name}`, style: { position: 'absolute', left: pos(w.cur), top: 7, width: 16, height: 16, marginLeft: -8, color: col, background: col, boxShadow: `0 0 18px ${col}` } })),
                React.createElement("div", { style: { width: 82, flex: '0 0 82px', textAlign: 'right' } },
                    React.createElement("div", { style: { fontSize: 15, fontWeight: 900, color: p.target ? theme_1.T.text : theme_1.T.faint } }, p.target ? (0, ax_1.dday)(p.target) : '—'),
                    React.createElement("div", { style: { fontSize: 10.5, color: theme_1.T.faint } }, p.target ? `출시 ${p.target.slice(2).replace(/-/g, '.')}` : '출시일 없음'))));
        }),
        !rows.length && React.createElement("div", { style: { fontSize: 13, color: theme_1.T.faint, padding: '14px 0' } }, "\uD504\uB85C\uC81D\uD2B8\uB97C \uB9CC\uB4E4\uBA74 \uC5EC\uAE30\uC11C 7\uB2E8\uACC4 \uC911 \uC9C0\uAE08 \uC5B4\uB514\uCBE4\uC778\uC9C0 \uBCF4\uC5EC\uC694.")));
}
// AI 관제 — AI 도우미별로 어느 프로젝트·단계에서 뭘 하는지 + 실시간 기록
function AiOps(props) {
    const { items, tick } = props;
    const agents = [];
    const helpers = {};
    items.forEach(p => {
        const s = (0, ax_1.stageOf)(p.stage);
        const name = p.aiHelper || 'AI 도우미';
        if (!helpers[name]) {
            helpers[name] = { name, role: p.aiHelper ? '프로젝트 담당 AI' : '배정 전 · 기본 AI', jobs: [] };
            agents.push(helpers[name]);
        }
        (s.ai || []).forEach(t => helpers[name].jobs.push({ pid: p.id, where: `${p.name} · ${s.no} ${s.name}`, what: t }));
    });
    const regJobs = items.map(p => { const n = props.reg.filter(x => x.stage === p.stage).length; const s = (0, ax_1.stageOf)(p.stage); return { pid: p.id, where: `${p.name} · ${s.no} ${s.name}`, what: n ? `규제·리콜·불량 ${n}건 미리 봄` : '이 단계 규제 없음 확인' }; });
    agents.push({ name: 'AI 규제 레이더', role: `해외 규제·리콜 ${props.reg.length}건 감시`, jobs: regJobs });
    const careJobs = [];
    items.forEach(p => (0, ax_1.careList)(p).forEach(c => careJobs.push({ pid: p.id, where: p.name, what: c.text })));
    agents.push({ name: 'AI 일정 감시', role: `일정·빈칸 ${careJobs.length}건 챙기는 중`, jobs: careJobs.length ? careJobs : [{ pid: '', where: '전체', what: '모든 일정 정상' }] });
    return (React.createElement("div", { "data-ax-aiops": true, className: "axp-in", style: Object.assign(Object.assign({}, theme_1.glass), { padding: '16px 16px 12px', animationDelay: '120ms', display: 'flex', flexDirection: 'column', minWidth: 0, position: 'relative', overflow: 'hidden' }) },
        React.createElement("span", { className: "axp-scan" }),
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 } },
            React.createElement("span", { style: { fontSize: 16, fontWeight: 900 } },
                React.createElement("span", { className: "axp-grad" }, "AI \uAD00\uC81C")),
            React.createElement("span", { style: { fontSize: 12, color: theme_1.T.faint } }, "AI\uAC00 \uC5B4\uB514\uC11C \uBB34\uC5C7\uC744 \uD558\uACE0 \uC788\uB098"),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement("span", { style: { fontSize: 11.5, color: '#D7CCFF', fontWeight: 800 } },
                "AI ",
                agents.length,
                "\uBA85 \uC791\uC5C5 \uC911")),
        agents.map((a, k) => {
            const j = a.jobs.length ? a.jobs[(tick + k) % a.jobs.length] : undefined;
            return (React.createElement("div", { key: a.name, "data-ax-agent": a.name, onClick: () => { if (j && j.pid)
                    props.onOpen(j.pid); }, style: { display: 'flex', gap: 10, alignItems: 'center', padding: '8px 4px', borderTop: k ? `1px solid ${theme_1.T.line}` : 'none', cursor: j && j.pid ? 'pointer' : 'default' } },
                React.createElement("span", { className: "axp-orb", style: { width: 32, height: 32, flex: '0 0 32px' } },
                    React.createElement("span", { style: { fontSize: 11, fontWeight: 900, color: '#D7CCFF' } }, initials(a.name))),
                React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                    React.createElement("div", { style: { display: 'flex', alignItems: 'baseline', gap: 6 } },
                        React.createElement("b", { style: { fontSize: 13 } }, a.name),
                        React.createElement("span", { style: { fontSize: 11, color: theme_1.T.faint, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }, a.role)),
                    j && React.createElement("div", { key: j.where + j.what, className: "axp-in", style: { fontSize: 12, color: theme_1.T.sub, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: 1 } },
                        React.createElement("span", { style: { color: theme_1.T.cyan } },
                            "@ ",
                            j.where),
                        " \u2014 ",
                        j.what)),
                React.createElement("span", { className: "axp-blink", style: { fontSize: 11, color: theme_1.T.brand, fontWeight: 800, flex: '0 0 auto' } }, "\uC791\uC5C5 \uC911")));
        }),
        React.createElement("div", { style: { fontSize: 12, fontWeight: 800, color: theme_1.T.sub, margin: '8px 4px 4px' } }, "AI \uD65C\uB3D9 \uAE30\uB85D"),
        React.createElement("div", { "data-ax-feed": true, style: { maxHeight: 150, overflowY: 'auto' } },
            props.events.slice(0, 8).map((e, k) => (React.createElement("div", { key: k, onClick: () => props.onOpen(e.pid), style: { display: 'flex', gap: 8, fontSize: 11.5, padding: '4px', cursor: 'pointer', borderRadius: 8 } },
                React.createElement("span", { style: { width: 6, height: 6, borderRadius: '50%', background: e.live ? theme_1.T.amber : theme_1.T.ai, marginTop: 5, flex: '0 0 6px' } }),
                React.createElement("span", { style: { flex: 1, minWidth: 0, color: theme_1.T.sub, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                    React.createElement("b", { style: { color: theme_1.T.text } }, e.who),
                    " \u00B7 ",
                    e.project,
                    " \u2014 ",
                    e.what),
                React.createElement("span", { style: { color: theme_1.T.faint, flex: '0 0 auto' } }, ago(e.at))))),
            !props.events.length && React.createElement("div", { style: { fontSize: 12, color: theme_1.T.faint, padding: 4 } }, "\uC544\uC9C1 AI \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694."))));
}
function Kpi(props) {
    const v = (0, theme_1.useCount)(props.n);
    return (React.createElement("div", { className: "axp-in", style: Object.assign(Object.assign({}, theme_1.glass), { padding: '12px 16px', animationDelay: `${200 + props.k * 70}ms`, position: 'relative', overflow: 'hidden' }) },
        React.createElement("div", { style: { position: 'absolute', right: -20, top: -20, width: 80, height: 80, borderRadius: '50%', background: props.color, opacity: 0.12, filter: 'blur(10px)' } }),
        React.createElement("div", { style: { fontSize: 12, color: theme_1.T.sub, fontWeight: 700 } }, props.label),
        React.createElement("div", { style: { fontSize: 28, fontWeight: 900, color: props.color, lineHeight: 1.15, marginTop: 2 } }, v),
        React.createElement("div", { style: { fontSize: 11, color: theme_1.T.faint } }, props.sub)));
}
function Kpis(props) {
    const ws = props.items.map(p => (0, ax_1.whereNow)(p));
    const ok = ws.filter(w => w.state === 'ok' || w.state === 'ahead').length;
    const bad = ws.filter(w => w.state === 'behind' || w.state === 'late').length;
    const k = [
        { label: '진행 중 프로젝트', n: props.items.length, color: theme_1.T.text, sub: 'PM 1명이 일정 기준으로' },
        { label: '일정대로', n: ok, color: theme_1.T.brand, sub: '오늘 기준 제자리 이상' },
        { label: '뒤처짐·늦음', n: bad, color: bad ? theme_1.T.red : theme_1.T.faint, sub: 'AI 일정 감시가 경고' },
        { label: 'AI 활동', n: props.events.length, color: theme_1.T.ai, sub: '브리핑·검토·기록' },
        { label: '미리 본 문제점', n: props.reg.length, color: theme_1.T.amber, sub: '규제·리콜·불량' },
    ];
    return React.createElement("div", { "data-ax-kpi": true, style: { display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 12, padding: '12px 24px 10px' } }, k.map((x, i) => React.createElement(Kpi, Object.assign({ key: x.label }, x, { k: i }))));
}
function Ring(props) {
    const sz = props.size || 26;
    const r = sz / 2 - 3;
    const c = 2 * Math.PI * r;
    const f = props.n ? props.v / props.n : 0;
    return (React.createElement("span", { title: "\uC774 \uB2E8\uACC4 \uD575\uC2EC \uC0B0\uCD9C\uBB3C", style: { position: 'relative', width: sz, height: sz, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' } },
        React.createElement("svg", { width: sz, height: sz, style: { position: 'absolute', inset: 0, transform: 'rotate(-90deg)' } },
            React.createElement("circle", { cx: sz / 2, cy: sz / 2, r: r, fill: "none", stroke: theme_1.T.line2, strokeWidth: 3 }),
            React.createElement("circle", { cx: sz / 2, cy: sz / 2, r: r, fill: "none", stroke: f >= 1 ? theme_1.T.brand : theme_1.T.cyan, strokeWidth: 3, strokeLinecap: "round", strokeDasharray: `${c * f} ${c}`, style: { transition: 'stroke-dasharray .6s ease' } })),
        React.createElement("span", { style: { fontSize: 9.5, fontWeight: 900, color: theme_1.T.sub } },
            props.v,
            "/",
            props.n)));
}
function Card(props) {
    const { p, s } = props;
    const done = (0, ax_1.docsDone)(p, s);
    const end = (p.plan || {})[s.id];
    const dd = (0, ax_1.dday)(end || p.target);
    const care = (0, ax_1.careList)(p);
    const red = care.some(c => c.level === 'red');
    const w = (0, ax_1.whereNow)(p);
    const col = theme_1.STATE_COLOR[w.state];
    const el = (0, ax_1.stageElapsed)(p);
    return (React.createElement("div", { "data-ax-card": p.id, className: "axp-card axp-in", draggable: true, onDragStart: e => { e.dataTransfer.setData('text/plain', p.id); props.onDrag(); }, onDragEnd: props.onDragEnd, onClick: props.onOpen, style: { background: 'linear-gradient(160deg, rgba(255,255,255,.075), rgba(255,255,255,.025))', borderRadius: 14, padding: '11px 12px', marginBottom: 8, cursor: 'pointer', border: `1px solid ${props.on ? theme_1.T.brand : theme_1.T.line}` } },
        React.createElement("div", { style: { display: 'flex', gap: 8, alignItems: 'flex-start' } },
            React.createElement("div", { style: { flex: 1, fontSize: 14, fontWeight: 800, lineHeight: 1.35 } }, p.name),
            p.aiHelper && React.createElement("span", { className: "axp-orb", title: `AI 도우미 ${p.aiHelper} 붙어 있음`, style: { width: 22, height: 22, flex: '0 0 22px' } },
                React.createElement("span", { style: { fontSize: 9, fontWeight: 900, color: '#D7CCFF' } }, "AI"))),
        p.next && React.createElement("div", { style: { fontSize: 12.5, color: theme_1.T.sub, marginTop: 4 } },
            "\u2192 ",
            p.next),
        care.length > 0 && React.createElement("div", { "data-ax-care-n": true, title: care.map(c => c.text).join(' / '), style: { fontSize: 11.5, fontWeight: 700, color: red ? theme_1.T.red : theme_1.T.amber, marginTop: 5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
            "\u2726 AI \uCC59\uAE38 \uAC83 ",
            care.length,
            " \u00B7 ",
            care[0].text),
        el !== undefined && React.createElement("div", { title: `이 단계 기간 중 ${Math.round(el * 100)}% 지남 · ${w.label}`, style: { marginTop: 8, height: 4, borderRadius: 4, background: theme_1.T.line, overflow: 'hidden' } },
            React.createElement("div", { className: "axp-bar", style: { width: `${Math.round(el * 100)}%`, height: '100%', borderRadius: 4, background: `linear-gradient(90deg, ${theme_1.T.brand}, ${col})` } })),
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 7, marginTop: 8, fontSize: 12 } },
            React.createElement("span", { style: { width: 20, height: 20, borderRadius: '50%', background: theme_1.T.glass2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: theme_1.T.sub, flex: '0 0 auto' } }, (p.owner || '?').slice(0, 1)),
            React.createElement("span", { style: { color: theme_1.T.faint, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 } }, p.owner || 'PM 없음'),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement(Ring, { v: done, n: s.docs.length }),
            dd && React.createElement("span", { title: end ? `${s.no} 단계 목표일 ${end}` : `출시 목표 ${p.target}`, style: { fontWeight: 800, whiteSpace: 'nowrap', borderRadius: 999, padding: '2px 8px', background: col === theme_1.T.red ? theme_1.T.redDim : theme_1.T.brandDim, color: col === theme_1.T.red ? theme_1.T.red : theme_1.T.brand } }, dd))));
}
function NewForm(props) {
    const [name, setName] = React.useState('');
    const [owner, setOwner] = React.useState(props.who);
    const [target, setTarget] = React.useState('');
    const [start, setStart] = React.useState((0, ax_1.today)());
    return (React.createElement("div", { "data-ax-newform": true, className: "axp-in", style: Object.assign(Object.assign({}, theme_1.glass), { margin: '14px 24px 0', border: `1px solid ${theme_1.T.brand}`, padding: 14, display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }) },
        React.createElement("input", { "data-ax-name": true, autoFocus: true, value: name, onChange: e => setName(e.target.value), onKeyDown: e => { if (e.key === 'Enter' && name.trim())
                props.onAdd(name.trim(), owner, target, start); }, placeholder: "\uD504\uB85C\uC81D\uD2B8 \uC774\uB984 (\uC608: \uC18C\uD615 \uCC29\uC999\uAE30 \uD574\uC678\uC6A9)", style: Object.assign(Object.assign({}, theme_1.inp), { flex: '2 1 260px', width: 'auto', fontWeight: 700 }) }),
        React.createElement("input", { "data-ax-owner": true, value: owner, onChange: e => setOwner(e.target.value), placeholder: "PM (1\uBA85)", title: "PM 1\uBA85\uC774 \uC77C\uC815\uC744 \uAE30\uC900\uC73C\uB85C \uB04C\uACE0 \uAC00\uC694", style: Object.assign(Object.assign({}, theme_1.inp), { flex: '1 1 120px', width: 'auto' }) }),
        React.createElement("label", { style: { fontSize: 12.5, color: theme_1.T.faint, display: 'flex', alignItems: 'center', gap: 6 } },
            "\uC2DC\uC791",
            React.createElement("input", { "data-ax-start": true, type: "date", value: start, onChange: e => setStart(e.target.value), style: Object.assign(Object.assign({}, theme_1.inp), { width: 150 }) })),
        React.createElement("label", { style: { fontSize: 12.5, color: theme_1.T.faint, display: 'flex', alignItems: 'center', gap: 6 } },
            "\uBAA9\uD45C \uCD9C\uC2DC",
            React.createElement("input", { "data-ax-target": true, type: "date", value: target, onChange: e => setTarget(e.target.value), style: Object.assign(Object.assign({}, theme_1.inp), { width: 150 }) })),
        React.createElement("span", { style: { fontSize: 12, color: '#D7CCFF' } }, "\u2726 \uB123\uC73C\uBA74 AI\uAC00 \uB2E8\uACC4 \uC77C\uC815\uC744 \uBC14\uB85C \uB098\uB220\uC694"),
        React.createElement("button", { onClick: props.onCancel, style: theme_1.btn }, "\uCDE8\uC18C"),
        React.createElement("button", { "data-ax-create": true, disabled: !name.trim(), onClick: () => props.onAdd(name.trim(), owner, target, start), style: Object.assign(Object.assign({}, theme_1.primary), { opacity: name.trim() ? 1 : 0.5 }) }, "\uC2DC\uC791")));
}
const H = (props) => (React.createElement("div", { style: { marginTop: 20, display: 'flex', alignItems: 'baseline', gap: 8 } },
    React.createElement("span", { style: { fontSize: 14, fontWeight: 900 } }, props.ai ? React.createElement("span", { className: "axp-grad" }, props.t) : props.t),
    props.sub && React.createElement("span", { style: { fontSize: 12, color: theme_1.T.faint } }, props.sub),
    React.createElement("span", { style: { flex: 1 } }),
    props.right));
const AiTag = () => React.createElement("span", { style: { fontSize: 10, fontWeight: 900, color: '#0A1311', background: theme_1.AI_GRAD, borderRadius: 4, padding: '0 5px', marginRight: 6 } }, "AI");
function Panel(props) {
    const { p, who, update } = props;
    const s = (0, ax_1.stageOf)(p.stage);
    const i = (0, ax_1.stageIdx)(p.stage);
    const nextS = ax_1.AX_STAGES[i + 1];
    const prevS = ax_1.AX_STAGES[i - 1];
    const missing = s.docs.length - (0, ax_1.docsDone)(p, s);
    const w = (0, ax_1.whereNow)(p);
    const col = theme_1.STATE_COLOR[w.state];
    const [note, setNote] = React.useState('');
    const [nextTxt, setNextTxt] = React.useState(p.next || '');
    React.useEffect(() => setNextTxt(p.next || ''), [p.id, p.next]);
    const at = () => new Date().toISOString();
    const toggle = (key, label) => update(x => {
        const st = x.docs[key] || {};
        const done = !st.done;
        return Object.assign(Object.assign({}, x), { docs: Object.assign(Object.assign({}, x.docs), { [key]: Object.assign(Object.assign({}, st), { done, by: who, at: at() }) }), log: x.log.concat([{ at: at(), who, kind: 'doc', what: `${label} ${done ? '완료' : '완료 취소'}` }]) });
    });
    const setLink = (key, label, link) => update(x => {
        const st = x.docs[key] || {};
        if ((st.link || '') === link)
            return x;
        return Object.assign(Object.assign({}, x), { docs: Object.assign(Object.assign({}, x.docs), { [key]: Object.assign(Object.assign({}, st), { link: link || undefined, done: st.done || !!link, by: who, at: at() }) }), log: x.log.concat([{ at: at(), who, kind: 'doc', what: `${label} 링크 ${link ? '넣음' : '뺌'}` }]) });
    });
    const field = (k, label, v) => update(x => {
        if ((x[k] || '') === v)
            return x;
        const y = Object.assign(Object.assign({}, x), { [k]: v || undefined, log: x.log.concat([{ at: at(), who, kind: 'edit', what: `${label}: ${v || '비움'}` }]) });
        if ((k === 'target' || k === 'start') && y.start && y.target && !Object.keys(y.plan || {}).length)
            return Object.assign(Object.assign({}, y), { plan: (0, ax_1.suggestPlan)(y.start, y.target) });
        return y;
    });
    const setPlan = (sid, v) => update(x => {
        const old = (x.plan || {})[sid] || '';
        if (old === v)
            return x;
        return Object.assign(Object.assign({}, x), { plan: Object.assign(Object.assign({}, (x.plan || {})), { [sid]: v }), log: x.log.concat([{ at: at(), who, kind: 'edit', what: `${(0, ax_1.stageOf)(sid).no} 목표일 ${old || '없음'} → ${v || '없음'}` }]) });
    });
    const care = (0, ax_1.careList)(p);
    const aiNow = (s.ai || [])[props.tick % Math.max(1, (s.ai || []).length)];
    const box = Object.assign(Object.assign({}, theme_1.glass), { borderRadius: 12, padding: '10px 12px' });
    return (React.createElement("div", { "data-ax-panel": true, className: "axp-panel", style: { position: 'fixed', top: 0, right: 0, bottom: 0, width: 480, maxWidth: '100%', background: 'rgba(8,14,12,.94)', backdropFilter: 'blur(18px)', borderLeft: `1px solid ${theme_1.T.line2}`, boxShadow: '-20px 0 60px rgba(0,0,0,.55)', zIndex: 20, display: 'flex', flexDirection: 'column', color: theme_1.T.text, fontFamily: '"Pretendard", "Malgun Gothic", "Segoe UI", sans-serif' } },
        React.createElement("div", { style: { padding: '16px 20px 12px', borderBottom: `1px solid ${theme_1.T.line}` } },
            React.createElement("div", { style: { display: 'flex', alignItems: 'flex-start', gap: 10 } },
                React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                    React.createElement("div", { style: { fontSize: 12, color: theme_1.T.brand, fontWeight: 800 } },
                        s.no,
                        " ",
                        s.name,
                        p.target ? ` · 출시 ${(0, ax_1.dday)(p.target)}` : ''),
                    React.createElement("input", { "data-ax-pname": true, defaultValue: p.name, key: p.id + 'n', onBlur: e => { const v = e.target.value.trim(); if (v)
                            field('name', '이름', v); }, style: Object.assign(Object.assign({}, theme_1.inp), { background: 'transparent', border: 'none', padding: '2px 0', fontSize: 20, fontWeight: 900 }) })),
                React.createElement("button", { "data-ax-close": true, className: "axp-btn", onClick: props.onClose, style: Object.assign(Object.assign({}, theme_1.btn), { padding: '5px 13px' }) }, "\uB2EB\uAE30")),
            React.createElement("div", { "data-ax-stepper": true, style: { display: 'flex', alignItems: 'center', marginTop: 8 } }, ax_1.AX_STAGES.map((st, k) => (React.createElement(React.Fragment, { key: st.id },
                k > 0 && React.createElement("span", { style: { flex: 1, height: 2, background: k <= i ? theme_1.T.brand : theme_1.T.line2 } }),
                React.createElement("span", { title: `${st.no} ${st.name}${k === w.exp && k !== i ? ' — 오늘 날짜로 있어야 할 곳' : ''}`, className: k === i ? 'axp-dot' : undefined, style: { width: k === i ? 14 : 9, height: k === i ? 14 : 9, borderRadius: '50%', background: k <= i ? (k === i ? col : theme_1.T.brand) : theme_1.T.bg2, color: col, border: k === w.exp && k !== i ? `2px dashed ${theme_1.T.sub}` : `1.5px solid ${k <= i ? theme_1.T.brand : theme_1.T.line2}`, flex: '0 0 auto' } }))))),
            React.createElement("div", { style: { fontSize: 12, color: col, fontWeight: 800, marginTop: 6 } },
                "\uC6B0\uB9AC\uB294 \uC9C0\uAE08 ",
                s.no,
                " ",
                s.name,
                " \u00B7 ",
                w.label,
                w.state !== 'none' ? ` · 전체 일정 ${Math.round(w.pct * 100)}% 지점` : '')),
        React.createElement("div", { style: { flex: 1, overflowY: 'auto', padding: '14px 20px 28px' } },
            props.sim && React.createElement("div", { "data-ax-sim-note": true, style: { marginBottom: 10, padding: '7px 12px', borderRadius: 10, background: 'rgba(34,211,238,.12)', color: theme_1.T.cyan, fontSize: 12.5, fontWeight: 700 } },
                "\u23F1 ",
                (0, ax_1.today)(),
                " \uC2DC\uC810 \uBBF8\uB9AC\uBCF4\uAE30\uC608\uC694 \u2014 \uC5EC\uAE30\uC11C \uBC14\uAFBC \uAC74 \uC800\uC7A5\uB418\uC9C0 \uC54A\uC544\uC694. \uC704 [\uC624\uB298\uB85C]\uB97C \uB204\uB974\uBA74 \uC2E4\uC81C \uD654\uBA74\uC774\uC5D0\uC694."),
            React.createElement("div", { className: "axp-aiborder", style: { marginBottom: 12 } },
                React.createElement("div", { style: { padding: '10px 12px' } },
                    React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8 } },
                        React.createElement("span", { className: "axp-orb", style: { width: 24, height: 24 } },
                            React.createElement("span", { style: { fontSize: 9, fontWeight: 900, color: '#D7CCFF' } }, "AI")),
                        React.createElement("b", { style: { fontSize: 13 } }, p.aiHelper || 'AI 도우미'),
                        React.createElement("span", { className: "axp-blink", style: { fontSize: 11.5, color: theme_1.T.brand, fontWeight: 800 } }, "\u25CF \uC9C0\uAE08 \uD558\uB294 \uC77C")),
                    React.createElement("div", { "data-ax-ai-now": true, key: aiNow, className: "axp-in", style: { fontSize: 13, color: '#D7CCFF', marginTop: 5 } },
                        s.no,
                        " ",
                        s.name,
                        " \u2014 ",
                        aiNow),
                    (p.brief || []).length > 0 && (() => {
                        const b = p.brief[p.brief.length - 1];
                        return (React.createElement("div", { "data-ax-brief": true, style: { marginTop: 8, paddingTop: 8, borderTop: `1px solid ${theme_1.T.line}` } },
                            React.createElement("div", { style: { fontSize: 11.5, fontWeight: 800, color: theme_1.T.sub, marginBottom: 3 } },
                                "AI \uBE0C\uB9AC\uD551 ",
                                React.createElement("span", { style: { fontWeight: 500, color: theme_1.T.faint } },
                                    b.who,
                                    " \u00B7 ",
                                    (0, ax_1.fmt)(b.at))),
                            React.createElement("div", { style: { fontSize: 13, lineHeight: 1.6, whiteSpace: 'pre-wrap' } }, b.text)));
                    })())),
            care.length > 0 && React.createElement("div", { "data-ax-care": true, style: Object.assign(Object.assign({}, box), { background: theme_1.T.amberDim, borderColor: 'rgba(251,191,36,.25)', marginBottom: 12 }) },
                React.createElement("div", { style: { fontSize: 12.5, fontWeight: 800, color: theme_1.T.amber, marginBottom: 4 } },
                    "\u2726 AI\uAC00 \uCC59\uAE38 \uAC83 ",
                    care.length),
                care.map((c, k) => React.createElement("div", { key: k, style: { fontSize: 12.5, color: c.level === 'red' ? theme_1.T.red : theme_1.T.text, padding: '2px 0' } },
                    "\u00B7 ",
                    c.text))),
            React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 } },
                React.createElement("label", { style: { fontSize: 12, color: theme_1.T.faint } },
                    "\uC2DC\uC791",
                    React.createElement("input", { "data-ax-pstart": true, type: "date", defaultValue: p.start || '', key: p.id + 's', onChange: e => field('start', '시작일', e.target.value), style: theme_1.inp })),
                React.createElement("label", { style: { fontSize: 12, color: theme_1.T.faint }, title: "PM 1\uBA85\uC774 \uC77C\uC815\uC744 \uAE30\uC900\uC73C\uB85C \uB04C\uACE0 \uAC00\uC694" },
                    "PM",
                    React.createElement("input", { "data-ax-powner": true, defaultValue: p.owner || '', key: p.id + 'o', onBlur: e => field('owner', 'PM', e.target.value.trim()), style: theme_1.inp })),
                React.createElement("label", { style: { fontSize: 12, color: theme_1.T.faint } },
                    "\uBAA9\uD45C \uCD9C\uC2DC",
                    React.createElement("input", { "data-ax-ptarget": true, type: "date", defaultValue: p.target || '', key: p.id + 't', onChange: e => field('target', '목표 출시', e.target.value), style: theme_1.inp }))),
            React.createElement("label", { style: { display: 'block', fontSize: 12, color: theme_1.T.faint, marginTop: 10 } },
                "\uB2E4\uC74C \uD560 \uC77C",
                React.createElement("input", { "data-ax-next": true, value: nextTxt, onChange: e => setNextTxt(e.target.value), onBlur: () => { if (nextTxt.trim() !== (p.next || ''))
                        update(x => (Object.assign(Object.assign({}, x), { next: nextTxt.trim() || undefined, log: x.log.concat([{ at: at(), who, kind: 'edit', what: `다음 할 일: ${nextTxt.trim() || '비움'}` }]) }))); }, placeholder: "\uD55C \uC904\uB85C (\uC608: \uC0AC\uC5C5\uC131 \uAC80\uD1A0\uC11C \uCD08\uC548)", style: theme_1.inp })),
            React.createElement("div", { "data-ax-roles": true, style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 14 } },
                React.createElement("div", { style: box },
                    React.createElement("div", { style: { fontSize: 12, fontWeight: 800, color: theme_1.T.sub, marginBottom: 4 } },
                        "\uC0AC\uB78C\uC774 \uD560 \uC77C \u00B7 ",
                        s.no),
                    (s.human || []).map((t, k) => React.createElement("div", { key: k, style: { fontSize: 12.5, padding: '2px 0' } },
                        "\u00B7 ",
                        t))),
                React.createElement("div", { style: Object.assign(Object.assign({}, box), { background: theme_1.T.aiDim, borderColor: 'rgba(167,139,250,.35)' }) },
                    React.createElement("div", { style: { fontSize: 12, fontWeight: 800, color: '#D7CCFF', marginBottom: 4 } },
                        "AI\uAC00 \uD560 \uC77C",
                        p.aiHelper ? ` · ${p.aiHelper}` : ''),
                    (s.ai || []).map((t, k) => React.createElement("div", { key: k, style: { fontSize: 12.5, padding: '2px 0', display: 'flex', gap: 6, alignItems: 'center' } },
                        React.createElement("span", { className: t === aiNow ? 'axp-dot' : undefined, style: { width: 6, height: 6, borderRadius: '50%', background: t === aiNow ? theme_1.T.ai : theme_1.T.line2, color: theme_1.T.ai, flex: '0 0 6px' } }),
                        t)))),
            React.createElement(H, { t: "\uB2E8\uACC4 \uC77C\uC815", sub: "\uB2E8\uACC4\uAC00 \uB05D\uB098\uC57C \uD558\uB294 \uB0A0 \u00B7 \uC77C\uC815\uC774 \uAE30\uC900", right: p.start && p.target ? React.createElement("button", { "data-ax-replan": true, className: "axp-btn", onClick: () => update(x => (Object.assign(Object.assign({}, x), { plan: (0, ax_1.suggestPlan)(x.start, x.target), log: x.log.concat([{ at: at(), who, kind: 'edit', what: '단계 일정 다시 나눔 (시작~출시 목표 기준)' }]) }))), style: Object.assign(Object.assign({}, theme_1.btn), { padding: '3px 10px', fontSize: 12 }), title: "\uC2DC\uC791\uC77C\uACFC \uCD9C\uC2DC \uBAA9\uD45C\uC77C\uB85C \uB2E8\uACC4 \uBAA9\uD45C\uC77C\uC744 \uB2E4\uC2DC \uB098\uB220\uC694" }, "\u2726 AI\uB85C \uB2E4\uC2DC \uB098\uB204\uAE30") : undefined }),
            React.createElement("div", { "data-ax-plan": true, style: { marginTop: 6 } }, ax_1.AX_STAGES.map((st, k) => {
                const v = (p.plan || {})[st.id] || '';
                const dl = (0, ax_1.daysTo)(v);
                const isCur = st.id === p.stage;
                const past = k < i;
                const late = !past && dl !== undefined && dl < 0;
                return (React.createElement("div", { key: st.id, "data-ax-plan-row": st.id, style: { display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px', borderRadius: 8, background: isCur ? theme_1.T.brandDim : 'transparent', fontSize: 12.5 } },
                    React.createElement("span", { style: { width: 8, height: 8, borderRadius: '50%', background: past ? theme_1.T.brand : isCur ? col : theme_1.T.line2, flex: '0 0 8px' } }),
                    React.createElement("span", { style: { flex: 1, fontWeight: isCur ? 800 : 500, color: past ? theme_1.T.faint : theme_1.T.text } },
                        st.no,
                        " ",
                        st.name,
                        st.gate ? React.createElement("span", { style: { color: theme_1.T.brand, fontSize: 11, fontWeight: 800 } },
                            " \u00B7 ",
                            st.gate.split(' ')[0]) : null),
                    late && React.createElement("span", { style: { color: theme_1.T.red, fontWeight: 800, fontSize: 11.5 } },
                        -dl,
                        "\uC77C \uC9C0\uB0A8"),
                    !late && !past && dl !== undefined && React.createElement("span", { style: { color: theme_1.T.faint, fontSize: 11.5 } },
                        "D-",
                        dl),
                    past && React.createElement("span", { style: { color: theme_1.T.faint, fontSize: 11.5 } }, "\uC9C0\uB0A8"),
                    React.createElement("input", { type: "date", "data-ax-plan-date": st.id, defaultValue: v, key: p.id + st.id + v, onChange: e => setPlan(st.id, e.target.value), style: Object.assign(Object.assign({}, theme_1.inp), { width: 140, padding: '3px 6px', fontSize: 12 }) })));
            })),
            React.createElement(H, { t: "\uD575\uC2EC \uC0B0\uCD9C\uBB3C", sub: `${(0, ax_1.docsDone)(p, s)}/${s.docs.length} · 비어도 넘어갈 수 있어요` }),
            s.docs.map(x => {
                const st = p.docs[x.key] || {};
                return (React.createElement("div", { key: x.key, "data-ax-doc": x.key, style: { borderTop: `1px solid ${theme_1.T.line}`, padding: '8px 0' } },
                    React.createElement("label", { style: { display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13.5 } },
                        React.createElement("input", { type: "checkbox", checked: !!st.done, onChange: () => toggle(x.key, x.label), style: { accentColor: theme_1.T.brand, width: 16, height: 16 } }),
                        React.createElement("span", { style: { flex: 1, fontWeight: 600, textDecoration: st.done ? 'line-through' : 'none', color: st.done ? theme_1.T.faint : theme_1.T.text } }, x.label),
                        React.createElement("span", { title: "\uC5D1\uC140 \uD504\uB85C\uC138\uC2A4\uC758 Task \uBC88\uD638", style: { fontSize: 11, color: theme_1.T.faint } }, x.proc)),
                    React.createElement("div", { style: { display: 'flex', gap: 6, marginTop: 4, paddingLeft: 24 } },
                        React.createElement("input", { "data-ax-link": x.key, defaultValue: st.link || '', key: p.id + x.key + (st.link || ''), onBlur: e => setLink(x.key, x.label, e.target.value.trim()), placeholder: "\uD30C\uC77C\u00B7\uD3F4\uB354 \uB9C1\uD06C \uBD99\uC5EC\uB123\uAE30", style: Object.assign(Object.assign({}, theme_1.inp), { fontSize: 12, padding: '4px 8px' }) }),
                        st.link && /^https?:\/\//.test(st.link) && React.createElement("a", { href: st.link, target: "_blank", rel: "noopener noreferrer", style: { fontSize: 12, color: theme_1.T.brand, fontWeight: 700, whiteSpace: 'nowrap', alignSelf: 'center' } }, "\uC5F4\uAE30"))));
            }),
            React.createElement("div", { style: { display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' } },
                prevS && React.createElement("button", { "data-ax-prev": true, className: "axp-btn", onClick: () => update(x => (0, ax_1.moveTo)(x, prevS.id, who)), style: theme_1.btn }, "\uC774\uC804 \uB2E8\uACC4"),
                React.createElement("span", { style: { flex: 1 } }),
                nextS && React.createElement("button", { "data-ax-forward": true, onClick: () => update(x => (0, ax_1.moveTo)(x, nextS.id, who)), style: theme_1.primary, title: missing ? `산출물 ${missing}개가 비어 있어요 — 넘어가도 되고, 빈 채로 넘긴 기록이 남아요` : '' }, s.gate ? `${s.gate.split(' ')[0]} 통과 → ${nextS.no} ${nextS.name}` : `다음 단계 → ${nextS.no} ${nextS.name}`),
                !nextS && !p.closed && React.createElement("button", { "data-ax-close-project": true, onClick: () => update(x => (Object.assign(Object.assign({}, x), { closed: true, log: x.log.concat([{ at: at(), who, kind: 'edit', what: '프로젝트 종료' }]) }))), style: theme_1.primary }, "\uD504\uB85C\uC81D\uD2B8 \uC885\uB8CC")),
            nextS && missing > 0 && React.createElement("div", { style: { fontSize: 12, color: theme_1.T.amber, marginTop: 6, textAlign: 'right' } },
                "\uC0B0\uCD9C\uBB3C ",
                missing,
                "\uAC1C \uBE44\uC5B4 \uC788\uC74C \u2014 \uADF8\uB798\uB3C4 \uB118\uC5B4\uAC08 \uC218 \uC788\uC5B4\uC694 (AI\uAC00 \uAE30\uB85D)"),
            React.createElement("div", { "data-ax-ask": true, style: Object.assign(Object.assign({}, box), { marginTop: 18, background: theme_1.T.aiDim, borderColor: 'rgba(167,139,250,.35)' }) },
                React.createElement("div", { style: { display: 'flex', alignItems: 'baseline', gap: 8 } },
                    React.createElement("span", { style: { fontSize: 14, fontWeight: 900 } },
                        React.createElement("span", { className: "axp-grad" }, "AI \uC0AC\uC804 \uAC80\uD1A0")),
                    React.createElement("span", { style: { fontSize: 12, color: theme_1.T.faint } }, "\uBB38\uC81C\uAC00 \uB420 \uAC83 \uAC19\uC73C\uBA74 \uBBF8\uB9AC \uBB3C\uC5B4\uBCF4\uC138\uC694")),
                React.createElement(AskBox, { onAsk: t => update(x => { const a = { id: 'q' + Date.now().toString(36), at: at(), who, stage: x.stage, text: t }; return Object.assign(Object.assign({}, x), { asks: (x.asks || []).concat([a]), log: x.log.concat([{ at: at(), who, kind: 'note', what: `AI 사전 검토 요청: ${t}` }]) }); }) }),
                (p.asks || []).slice().reverse().map(a => (React.createElement("div", { key: a.id, "data-ax-ask-item": a.id, style: { borderTop: `1px solid ${theme_1.T.line}`, padding: '8px 0', fontSize: 12.5 } },
                    React.createElement("div", null,
                        React.createElement("b", null, a.text),
                        " ",
                        React.createElement("span", { style: { color: theme_1.T.faint } },
                            "\u00B7 ",
                            a.who,
                            " \u00B7 ",
                            (0, ax_1.fmt)(a.at),
                            " \u00B7 ",
                            (0, ax_1.stageOf)(a.stage).no)),
                    a.answer ? React.createElement("div", { style: { marginTop: 5, background: 'rgba(0,0,0,.3)', borderRadius: 10, padding: '7px 9px', whiteSpace: 'pre-wrap', lineHeight: 1.55 } },
                        React.createElement(AiTag, null),
                        a.answer,
                        React.createElement("span", { style: { color: theme_1.T.faint } },
                            " \u2014 ",
                            a.answeredBy,
                            " \u00B7 ",
                            (0, ax_1.fmt)(a.answeredAt)))
                        : React.createElement("div", { style: { marginTop: 3, color: theme_1.T.amber, fontWeight: 700 } },
                            React.createElement("span", { className: "axp-blink" }, "\u25CF"),
                            " AI \uAC80\uD1A0 \uAE30\uB2E4\uB9AC\uB294 \uC911"))))),
            React.createElement(RegRadar_1.default, { stage: s.id, stageLabel: `${s.no} ${s.name}` }),
            React.createElement(H, { t: "\uD788\uC2A4\uD1A0\uB9AC", sub: "\uACB0\uC815\u00B7\uC774\uC288\u00B7AI \uAE30\uB85D\uC774 \uC790\uB3D9\uC73C\uB85C \uC313\uC5EC\uC694" }),
            React.createElement("div", { style: { display: 'flex', gap: 6, marginTop: 8 } },
                React.createElement("input", { "data-ax-note": true, value: note, onChange: e => setNote(e.target.value), onKeyDown: e => { if (e.key === 'Enter' && note.trim()) {
                        const t = note.trim();
                        setNote('');
                        update(x => (Object.assign(Object.assign({}, x), { log: x.log.concat([{ at: at(), who, kind: 'note', what: t }]) })));
                    } }, placeholder: "\uACB0\uC815\u00B7\uC774\uC288 \uD55C \uC904 \uB0A8\uAE30\uAE30 (Enter)", style: theme_1.inp })),
            React.createElement("div", { "data-ax-log": true, style: { marginTop: 8, borderLeft: `2px solid ${theme_1.T.line}`, marginLeft: 4, paddingLeft: 12 } }, p.log.slice().reverse().map((l, k) => (React.createElement("div", { key: k, style: { position: 'relative', display: 'flex', gap: 8, fontSize: 12.5, padding: '5px 0' } },
                React.createElement("span", { style: { position: 'absolute', left: -17, top: 10, width: 8, height: 8, borderRadius: '50%', background: l.ai ? theme_1.T.ai : l.kind === 'gate' ? theme_1.T.brand : theme_1.T.line2 } }),
                React.createElement("span", { style: { flex: '0 0 74px', color: theme_1.T.faint } }, (0, ax_1.fmt)(l.at)),
                React.createElement("span", { style: { flex: 1, color: l.kind === 'gate' ? theme_1.T.brand : theme_1.T.text, fontWeight: l.kind === 'gate' || l.kind === 'note' ? 700 : 400 } },
                    l.ai && React.createElement(AiTag, null),
                    l.what),
                React.createElement("span", { style: { color: theme_1.T.faint } }, l.who))))))));
}
function AskBox(props) {
    const [t, setT] = React.useState('');
    const go = () => { const v = t.trim(); if (v) {
        props.onAsk(v);
        setT('');
    } };
    return (React.createElement("div", { style: { display: 'flex', gap: 6, marginTop: 8 } },
        React.createElement("input", { "data-ax-ask-input": true, value: t, onChange: e => setT(e.target.value), onKeyDown: e => { if (e.key === 'Enter')
                go(); }, placeholder: "\uC608: \uC774 \uC7AC\uC9C8\uB85C \uC720\uB7FD \uC2DD\uD488 \uC811\uCD09 \uAD1C\uCC2E\uC744\uAE4C? \uBE44\uC2B7\uD55C \uBAA8\uB378 \uBD88\uB7C9 \uC788\uC5C8\uB098?", style: theme_1.inp }),
        React.createElement("button", { "data-ax-ask-send": true, onClick: go, disabled: !t.trim(), style: Object.assign(Object.assign({}, theme_1.primary), { opacity: t.trim() ? 1 : 0.5, whiteSpace: 'nowrap' }) }, "\uAC80\uD1A0 \uC694\uCCAD")));
}
// 시간 손잡이 — 끌면 그 날짜까지 계획대로 흘렀을 때 화면이 채워짐, ▶ 자동 재생, 끝까지 가면 전부 채워짐 (심준보 msg 10366339)
function Scrub(props) {
    const { lo, hi, value } = props;
    const D = 86400000;
    const span = Math.max(D, hi - lo);
    const pct = (t) => Math.max(0, Math.min(100, ((t - lo) / span) * 100));
    const valRef = React.useRef(value);
    valRef.current = value;
    React.useEffect(() => {
        if (!props.playing)
            return undefined;
        const h = window.setInterval(() => {
            const nx = valRef.current + 3 * D;
            if (nx >= hi) {
                props.setSim(props.step(hi));
                props.setPlaying(false);
            }
            else
                props.setSim(props.step(nx));
        }, 60);
        return () => window.clearInterval(h);
    }, [props.playing, hi]);
    const months = [];
    for (let d = new Date(new Date(lo).getFullYear(), new Date(lo).getMonth() + 1, 1); d.getTime() <= hi; d = new Date(d.getFullYear(), d.getMonth() + 1, 1))
        months.push({ t: d.getTime(), label: d.getMonth() === 0 ? `${d.getFullYear()}` : `${d.getMonth() + 1}월` });
    const v = new Date(value);
    const atEnd = value >= hi - D / 2;
    return (React.createElement("div", { "data-ax-scrubbar": true, className: "axp-in", style: Object.assign(Object.assign({}, theme_1.glass), { margin: '0 24px 12px', padding: '12px 18px 10px', background: props.sim ? 'rgba(34,211,238,.07)' : theme_1.T.glass, borderColor: props.sim ? 'rgba(34,211,238,.35)' : theme_1.T.line }) },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' } },
            React.createElement("button", { "data-ax-play": true, onClick: props.onPlay, title: "\uCC98\uC74C\uBD80\uD130 \uB05D\uAE4C\uC9C0 \uC790\uB3D9\uC73C\uB85C \uD758\uB824 \uBCF4\uAE30", style: Object.assign(Object.assign({}, theme_1.primary), { width: 40, height: 40, padding: 0, borderRadius: '50%', fontSize: 15 }) }, props.playing ? '❚❚' : '▶'),
            React.createElement("div", null,
                React.createElement("div", { style: { fontSize: 15, fontWeight: 900 } },
                    "\uC2DC\uAC04 \uC190\uC7A1\uC774 ",
                    React.createElement("span", { style: { fontSize: 12, fontWeight: 600, color: theme_1.T.faint } }, "\uB04C\uBA74 \uADF8 \uB0A0\uAE4C\uC9C0 \uC77C\uC815\uB300\uB85C \uD758\uB800\uC744 \uB54C \uB2E8\uACC4\u00B7\uC0B0\uCD9C\uBB3C\u00B7\uAD00\uBB38\u00B7AI \uAE30\uB85D\uC774 \uCC44\uC6CC\uC838\uC694")),
                React.createElement("div", { "data-ax-scrub-date": true, style: { fontSize: 13, fontWeight: 800, color: props.sim ? theme_1.T.cyan : theme_1.T.brand, marginTop: 2 } },
                    v.getFullYear(),
                    ".",
                    v.getMonth() + 1,
                    ".",
                    v.getDate(),
                    " ",
                    props.sim ? (atEnd ? '· 끝까지 — 모든 단계 완료' : value < props.today ? '· 지난 시점 미리보기' : '· 앞으로 미리보기') : '· 오늘 (실제 화면)')),
            React.createElement("span", { style: { flex: 1 } }),
            props.sim && React.createElement("button", { "data-ax-scrub-reset": true, className: "axp-btn", onClick: props.onReset, style: theme_1.btn }, "\uC624\uB298\uB85C")),
        React.createElement("div", { style: { position: 'relative', height: 48, marginTop: 6 } },
            React.createElement("div", { style: { position: 'absolute', left: 0, right: 0, top: 20, height: 6, borderRadius: 6, background: theme_1.T.line } }),
            React.createElement("div", { style: { position: 'absolute', left: 0, width: `${pct(value)}%`, top: 20, height: 6, borderRadius: 6, background: theme_1.AI_GRAD, boxShadow: '0 0 16px rgba(34,211,238,.6)', overflow: 'hidden' } },
                React.createElement("span", { className: "axp-flow" })),
            months.map(m => React.createElement("span", { key: m.t, style: { position: 'absolute', left: `${pct(m.t)}%`, top: 32, fontSize: 10, color: theme_1.T.faint, transform: 'translateX(-50%)', whiteSpace: 'nowrap' } }, m.label)),
            props.items.filter(p => p.target).map(p => React.createElement("span", { key: p.id, title: `${p.name} 출시 목표 ${p.target}`, style: { position: 'absolute', left: `${pct(new Date(p.target + 'T00:00:00').getTime())}%`, top: 2, transform: 'translateX(-50%)', fontSize: 10, color: theme_1.T.amber, whiteSpace: 'nowrap', fontWeight: 800 } },
                "\u25C6 ",
                p.name.split(' ')[0],
                " \uCD9C\uC2DC")),
            React.createElement("span", { title: "\uC624\uB298", style: { position: 'absolute', left: `${pct(props.today)}%`, top: 14, width: 2, height: 18, marginLeft: -1, background: theme_1.T.brand } }),
            React.createElement("span", { className: "axp-dot", style: { position: 'absolute', left: `${pct(value)}%`, top: 13, width: 20, height: 20, marginLeft: -10, color: theme_1.T.cyan, background: '#fff', border: `4px solid ${theme_1.T.cyan}`, boxShadow: `0 0 20px ${theme_1.T.cyan}`, pointerEvents: 'none' } }),
            React.createElement("input", { "data-ax-scrub": true, type: "range", min: 0, max: Math.round(span / D), step: 1, value: Math.round((value - lo) / D), onChange: e => props.onChange(lo + Number(e.target.value) * D), "aria-label": "\uC2DC\uAC04 \uC190\uC7A1\uC774", style: { position: 'absolute', left: 0, right: 0, top: 8, width: '100%', height: 30, margin: 0, opacity: 0, cursor: 'grab' } }))));
}

};
__m["src/webparts/huromDevHub/model/store.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStore = exports.SaveQueue = exports.ConflictError = exports.SAMPLE_REV = void 0;
exports.ctxOf = ctxOf;
exports.defsOf = defsOf;
exports.syncProject = syncProject;
exports.regenerateSchedules = regenerateSchedules;
exports.aiRisks = aiRisks;
exports.createProject = createProject;
exports.sampleProjects = sampleProjects;
exports.isSampleProject = isSampleProject;
exports.exportProjectJson = exportProjectJson;
exports.importProjectJson = importProjectJson;
exports.saveMerged = saveMerged;
exports.guardLeave = guardLeave;
const stages_1 = require("src/webparts/huromDevHub/model/stages.js");
const regions_1 = require("src/webparts/huromDevHub/model/regions.js");
const schedule_1 = require("src/webparts/huromDevHub/model/schedule.js");
const config_1 = require("src/webparts/huromDevHub/model/config.js");
const realSamples_1 = require("src/webparts/huromDevHub/model/realSamples.js");
const juicerLaunch_1 = require("src/webparts/huromDevHub/model/juicerLaunch.js");
function ctxOf(p) {
    return { devType: p.devType, features: p.features, regions: p.regions, baseRegion: p.baseRegion, grade: p.grade, category: p.category, factory: p.factory || 'CN',
        line: p.line, devBy: p.devBy, devKind: p.devKind };
}
// 이 프로젝트의 할 일 = 기본 할 일(템플릿) + 직접 추가한 할 일
function defsOf(p) {
    return (0, stages_1.checklistFor)(ctxOf(p)).concat((p.custom || []).map(c => ({ id: c.id, stage: c.stage, title: c.title, folder: '추가한 할 일', owner: '', custom: true })));
}
// 향지·특성 변경 시 체크리스트/인증 상태를 다시 맞춤 (기존 입력값 보존)
function syncProject(p) {
    p = (0, juicerLaunch_1.mergeOldLaunchIds)(p);
    const ctx = ctxOf(p);
    const cl = (0, stages_1.checklistFor)(ctx).concat(defsOf(p).filter(d => d.custom)).map(d => p.checklist.filter(s => s.id === d.id)[0] || { id: d.id, status: 'todo' });
    const certs = (0, regions_1.certsFor)(p.regions, p.features).map(c => p.certs.filter(s => s.id === c.id)[0] || { id: c.id, status: 'todo', outsourced: true });
    return Object.assign(Object.assign({}, p), { checklist: cl, certs });
}
// 일정 재생성 — 사용자가 입력한 진행상태(status/실적)는 같은 id 기준으로 보존
function regenerateSchedules(p, base = config_1.DEFAULT_CONFIG) {
    p = (0, juicerLaunch_1.mergeOldLaunchIds)(p); // 1.0.47 PROC-16B → 16A
    const ctx = ctxOf(p);
    // 프로젝트별 작업 기간이 있으면 기본값 대신 사용 (새 카테고리처럼 검증·설계가 긴 경우)
    const ov = p.durations || {};
    const cfg = Object.keys(ov).length
        ? Object.assign(Object.assign({}, base), { tasks: base.tasks.map(t => typeof ov[t.id] === 'number' ? Object.assign(Object.assign({}, t), { duration: ov[t.id], durationLite: ov[t.id] }) : t) }) : base;
    const keep = (src, dst) => {
        dst.tasks.forEach(t => {
            const o = src ? src.tasks.filter(x => x.id === t.id)[0] : undefined;
            if (o) {
                t.status = o.status;
                t.actualStart = o.actualStart;
                t.actualEnd = o.actualEnd;
                t.note = o.note;
            }
        });
        return (0, schedule_1.finalize)(dst);
    };
    if (ctx.line === 'juicer') {
        // 원액기군: 추천 일정 하나 (R12 표준 일정 + 상품전략 업무). 기존 방식 비교는 없음 — asIs·toBe 둘 다 같은 일정
        const plan = keep(p.toBe, (0, juicerLaunch_1.buildJuicerPlan)(ctx, p.start, p.durations));
        return Object.assign(Object.assign({}, p), { asIs: Object.assign(Object.assign({}, plan), { name: 'AS-IS' }), toBe: plan, useToBe: true, cfgRev: cfg.rev });
    }
    const asIs = keep(p.asIs, (0, schedule_1.buildAsIs)(ctx, p.start, cfg));
    const toBe = keep(p.toBe, (0, schedule_1.buildToBe)(asIs, ctx, cfg));
    return Object.assign(Object.assign({}, p), { asIs, toBe, cfgRev: cfg.rev });
}
function aiRisks(p) {
    if (p.line === 'juicer')
        return (0, juicerLaunch_1.juicerRisks)(p.features, p.regions.some(x => x !== 'KR'));
    const r = [];
    const add = (id, stage, category, title, l, i, response) => {
        r.push({ id, stage, category, title, likelihood: l, impact: i, response, status: 'open', source: 'AI' });
    };
    if (p.regions.some(x => ['JP', 'TW', 'US', 'CA'].indexOf(x) >= 0))
        add('AR01', 'S0', '사양', '100~120V 나라(일본·미국 등)에서 모터 회전수·소비전력이 모자라 착즙 성능이 떨어짐', 3, 4, '선행검토 때 그 나라 전압 시료로 회전수·성능 시험, 모터 권선 사양을 따로 확정');
    if (p.features.foodContact)
        add('AR02', 'S3', '인증', '식품이 닿는 부품의 재질을 바꾸면 식품 시험을 처음부터 다시 받아야 함', 3, 4, '설계 확정 때 재질 목록을 고정, 바꿀 땐 사전 승인(PCN) 받고 다시 시험할 기간을 일정에 넣기');
    add('AR03', 'S4', '금형', '금형 수정이 3번 넘게 반복되어 시료·인증 일정이 밀림', 3, 3, '첫 사출(T1) 전에 금형 제작성 검토(DFM), 외관 수정은 인증용 시료와 따로 관리');
    add('AR04', 'S6', '인증', '인증 시험 불합격으로 다시 시험 (전자파·온도 상승이 자주 걸림)', 2, 4, '시제품 단계에서 전자파 사전 측정(Pre-scan)과 온도 상승 미리 측정');
    if (p.devType === 'ODM' || p.devType === 'DERIV')
        add('AR05', 'S2', '계약', '같은 ODM 제품을 다른 회사도 팔거나, 금형이 누구 것인지 다툼', 2, 5, '계약서에 금형 소유·독점 판매·지식재산(IP) 조항 넣고, 금형 목록에 서명해 보관');
    add('AR06', 'S9', '품질', '양산 후 공장이 말없이 부품·공정을 바꿈(4M 변경)', 3, 4, '바꾸기 전에 알리고 승인받는 조항(PCN) + 1년에 한 번 공장 점검 + 들어오는 물량 표본 검사');
    add('AR07', 'S7', '공급', '모터·기판처럼 오래 걸리는 부품 때문에 양산이 늦어짐', 3, 3, '금형 승인 직후 미리 발주, 대체 부품(두 번째 공급처) 검토');
    if (p.regions.some(x => x !== 'KR'))
        add('AR08', 'S7', '표기', '수출용 인쇄물(언어·인증번호·수입사)을 잘못 적어 다시 인쇄', 2, 3, '나라별 인쇄물 점검표 + 인증번호 확정 후 최종 승인');
    add('AR09', 'S1', '환경', '개발 초기에 없던 나라를 해외영업이 나중에 추가 → 유해물질·대기전력·재활용 표시 때문에 재설계·재인증', 3, 4, '설계 단계부터 EU 환경 기준(RoHS·REACH·ErP·WEEE)으로 설계, 110/220V 겸용 여부를 개발 결재 때 결정');
    add('AR10', 'S7', '포장', '양산 시방서 없이 말로 합의한 구성품·포장·인쇄물이 양산에서 바뀜 (액세서리 누락, 박스 파손)', 3, 3, '양산 시방서에 구성품·포장·라벨 위치를 넣고 제조사와 서명, 포장 낙하 시험 통과 후 양산 승인');
    return r;
}
exports.SAMPLE_REV = 9; // 샘플 내용이 바뀌면 올림 (미리보기에서 오래된 샘플을 새것으로 교체)
function createProject(i, cfg = config_1.DEFAULT_CONFIG) {
    let p = Object.assign(Object.assign({ id: 'p' + Date.now().toString(36) }, i), { useToBe: true, asIs: undefined, toBe: undefined, checklist: [], certs: [], risks: [], molds: [], mpIssues: [], log: [{ at: new Date().toISOString(), who: 'AI', what: '프로젝트 생성 — 체크리스트·인증 트랙·AS-IS/TO-BE 일정 자동 생성', ai: true }], updated: new Date().toISOString() });
    p = syncProject(p);
    p = regenerateSchedules(p, cfg);
    p.risks = aiRisks(p);
    return p;
}
// 기본 예시 — 실제 개발 3건 (FD-B05 양산 직후 · TM-MB1 · CJ-B03 완료). 심준보 2026-10-26 "우리 기존 개발했던 샘플로 내용 채워줘"
// 휴롬 큐브 가상 예시는 이것으로 바뀜. 일정은 지금 기준 설정으로 다시 계산 (실적·상태는 그대로)
function sampleProjects(cfg = config_1.DEFAULT_CONFIG) {
    return realSamples_1.REAL_SAMPLES.map(x => {
        const p = JSON.parse(JSON.stringify(x));
        p.isSample = true;
        p.sampleRev = exports.SAMPLE_REV;
        return regenerateSchedules(p, cfg);
    });
}
function isSampleProject(p) {
    return !!p.isSample || (p.name || '').indexOf('[샘플]') === 0;
}
// ───────── JSON 내보내기 / 가져오기 (테스트 데이터 백업용)
function exportProjectJson(p) {
    const copy = Object.assign({}, p);
    delete copy.spId;
    delete copy.etag;
    return JSON.stringify({ format: 'hurom-devhub-project', version: 1, exportedAt: new Date().toISOString(), project: copy }, null, 2);
}
function importProjectJson(text, existingIds) {
    const parsed = JSON.parse(text);
    const p = parsed && parsed.format === 'hurom-devhub-project' ? parsed.project : parsed;
    if (!p || !p.id || !p.asIs || !p.toBe || !Array.isArray(p.checklist))
        throw new Error('Dev Hub 프로젝트 JSON 형식이 아닙니다.');
    const n = Object.assign({}, p);
    delete n.spId;
    delete n.etag;
    if (existingIds.indexOf(n.id) >= 0) {
        n.id = 'p' + Date.now().toString(36);
        n.name = n.name + ' (가져옴)';
    }
    n.log = [{ at: new Date().toISOString(), who: '가져오기', what: 'JSON 파일에서 프로젝트 가져옴' }].concat(n.log || []);
    return n;
}
// 동시 수정 보호 (심준보 2026-10-27 "1단계 긔긔"): 저장할 때 내가 읽은 버전(spVer)과 목록의 버전이 다르면 ConflictError.
// 그러면 최신본을 다시 읽어서 방금 한 변경(apply)만 그 위에 다시 적용하고 저장 — 남이 고친 내용을 덮어쓰지 않는다.
class ConflictError extends Error {
    constructor() {
        super(...arguments);
        this.conflict = true;
    }
}
exports.ConflictError = ConflictError;
// 412(남이 먼저 저장)면 최신본을 읽어 apply를 다시 적용 — 여러 번(tries)까지. 행이 지워졌으면 새 행으로
async function saveMerged(store, p, apply, tries = 4) {
    let cur = p;
    let latest;
    let merged = false;
    for (let i = 0;; i++) {
        try {
            const saved = await store.save(cur);
            return { saved, merged, latest };
        }
        catch (e) {
            const c = e;
            if (!c || !c.conflict || !apply || !store.get || !cur.spId || i >= tries)
                throw e;
            latest = await store.get(cur.spId);
            if (!latest) {
                cur = Object.assign(Object.assign({}, cur), { spId: undefined, spVer: undefined });
                continue;
            }
            cur = apply(latest);
            merged = true;
        }
    }
}
// 같은 프로젝트(제품)의 저장은 한 줄로 세워서 하나씩 — 빠르게 여러 번 눌러도 앞 저장 결과(최신 버전) 위에 다음 변경을 적용한다.
// (2026-10-27 실제 목록 시험에서 연달아 3번 저장 중 2개가 빠진 것을 고침)
class SaveQueue {
    constructor(store) {
        this.store = store;
        this.tail = {};
        this.base = {};
        this.waiting = {};
    }
    pending(id) { return this.waiting[id] || 0; }
    save(p, apply) {
        this.waiting[p.id] = (this.waiting[p.id] || 0) + 1;
        const run = (this.tail[p.id] || Promise.resolve()).catch(() => undefined).then(() => {
            const b = this.base[p.id];
            const target = b ? (apply ? apply(b) : Object.assign(Object.assign({}, p), { spId: b.spId, spVer: b.spVer })) : p;
            return saveMerged(this.store, target, apply);
        }).then(res => { this.base[p.id] = res.saved; return res; });
        const done = () => { this.waiting[p.id] = Math.max(0, (this.waiting[p.id] || 1) - 1); };
        run.then(done, done);
        this.tail[p.id] = run;
        return run;
    }
    forget(id) { delete this.base[id]; }
    // 목록을 새로 읽었으면 기다리는 저장이 없는 것들은 예전 기준을 버림 (다음 저장이 새로 읽은 버전에서 시작)
    forgetIdle() { Object.keys(this.base).forEach(id => { if (!this.pending(id))
        delete this.base[id]; }); }
    // 아직 안 끝난 저장이 있으면 true — 창을 닫으려 할 때 경고
    busy() { return Object.keys(this.waiting).some(id => this.waiting[id] > 0); }
}
exports.SaveQueue = SaveQueue;
// 저장이 끝나기 전에 창·탭을 닫으면 브라우저가 한 번 묻게 한다 (화면이 useEffect로 등록)
function guardLeave(busy) {
    const h = (e) => {
        if (!busy())
            return undefined;
        e.preventDefault();
        e.returnValue = '아직 저장 중이에요. 지금 닫으면 방금 바꾼 내용이 사라질 수 있어요.';
        return e.returnValue;
    };
    window.addEventListener('beforeunload', h);
    return () => window.removeEventListener('beforeunload', h);
}
class LocalStore {
    constructor(key = 'hurom-devhub.projects.v1') {
        this.key = key;
        this.kind = '이 브라우저 (로컬)';
    }
    list() {
        try {
            return Promise.resolve(JSON.parse(window.localStorage.getItem(this.key) || '[]'));
        }
        catch (_a) {
            return Promise.resolve([]);
        }
    }
    save(p) {
        return this.list().then(all => {
            const n = Object.assign(Object.assign({}, p), { updated: new Date().toISOString() });
            const rest = all.filter(x => x.id !== p.id);
            window.localStorage.setItem(this.key, JSON.stringify(rest.concat([n])));
            return n;
        });
    }
    remove(p) {
        return this.list().then(all => { window.localStorage.setItem(this.key, JSON.stringify(all.filter(x => x.id !== p.id))); });
    }
}
exports.LocalStore = LocalStore;

};
__m["src/webparts/huromDevHub/model/stages.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.has_ = exports.LAUNCH_CHECKLIST = exports.CHECKLIST = exports.QUALITY_CHECKS = exports.reviewGatesFor = exports.REVIEW_GATES = exports.lastStageId = exports.stagesFor = exports.isJuicerLine = exports.LAUNCH_STAGES = exports.STAGES = exports.approverLabel = void 0;
exports.stageOf = stageOf;
exports.checklistFor = checklistFor;
const launch_1 = require("src/webparts/huromPlm/model/launch.js");
const juicerLaunch_1 = require("src/webparts/huromDevHub/model/juicerLaunch.js");
const approverLabel = (g) => (g && g.approver === 'CEO' ? '대표 결재 필요' : 'PM 결정');
exports.approverLabel = approverLabel;
// 휴롬 표준 개발 단계 (승인원 폴더 체계 기준) + 단계 끝 점검
// 개발 점검(review) 7번 = 다른 회사의 설계 심의(DR0~DR5)·Stage-Gate(Gate 1~5)·EVT/DVT/PVT 를 휴롬 단계에 맞춘 것.
// 점검 결과는 통과 / 조건부 통과(조건·기한 기록) / 보류 세 가지로 남긴다 (Stage-Gate의 Go / Conditional Go / Hold).
exports.STAGES = [
    { id: 'S0', name: '선행검토', short: '선행', color: '#7A8B99',
        gate: { id: 'G0', name: '만들지 말지 결정', review: true, like: 'DR0 · Gate 1 (아이디어 심사)', ask: '성능·안전·원가가 되는 제품인지 확인하고 개발을 시작할지 정해요',
            criteria: ['선행검토 시험(성능·안전·내구·구조) 결과가 "개발 진행"', '판매 나라별 전압 사양 검토 끝', '목표 원가·공장 출고가(FOB) 범위 확인'] } },
    { id: 'S1', name: '개발 결재(발의)', short: '발의', color: '#5B7DB1',
        gate: { id: 'G1', name: '개발 시작 결재', review: true, approver: 'CEO', like: 'DR1 · Gate 2 (사업성 검토)', ask: '판매 나라·출시일·목표 원가를 확정하고 전자결재로 개발을 시작해요',
            criteria: ['개발발의서 전자결재 끝', '판매 나라·출시일·목표 원가 확정', '개발 방식(ODM/OEM/JDM/파생) 확정'] } },
    { id: 'S2', name: '업체 선정·계약', short: '계약', color: '#4F9A94',
        gate: { id: 'G1b', name: '계약 체결', ask: '업체를 정하고 계약서에 서명해요',
            criteria: ['비밀유지·개발·공급·품질 계약', '금형 소유권·지식재산(IP)·부품 변경 사전 통보(PCN) 조항', '공장 출고가(FOB)·최소 주문량(MOQ)·결제 조건 확정'] } },
    { id: 'S3', name: '디자인·설계', short: '설계', color: '#3E8E5E',
        gate: { id: 'G2', name: '설계 확정 · 금형 발주', review: true, approver: 'CEO', like: 'DR2 설계 심의 · EVT 종료', ask: '도면을 더 안 바꾸기로 하고 금형을 발주해요 (이 뒤로 바꾸면 돈과 시간이 많이 들어요)',
            criteria: ['제품 디자인·색/재질/마감(CMF) 확정', '3D/2D 도면·부품표(BOM)·회로도 확정', '설계 위험 분석(DFMEA)에서 큰 위험은 대책 세움', '목표 원가 안에 들어오는지 견적으로 확인'] } },
    { id: 'S4', name: '금형', short: '금형', color: '#8A9A3B',
        gate: { id: 'G3', name: '금형 승인', review: true, like: 'DR3 시작품 심의', ask: '첫 사출품을 보고 금형 수정을 끝낼지 정해요',
            criteria: ['금형 수정(T1~Tn) 끝', '금형 목록 등록(소유·캐비티·보관처)', '외관 한도 견본에 서명'] } },
    { id: 'S5', name: '시제품 시험', short: '시험', color: '#D9731A',
        gate: { id: 'G3b', name: '시제품 시험 통과', review: true, like: 'DR4 · DVT 종료', ask: '내구·실사용 시험을 통과했는지, 그대로 양산해도 되는 설계인지 정해요',
            criteria: ['품질 검토(시험 의뢰) 합격', '실사용 검토 끝', '제조사 신뢰성(낙하·내구) 성적서 받음', '시험에서 나온 문제의 대책이 양산품에 반영됨'] } },
    { id: 'S6', name: '인증', short: '인증', color: '#C9702E',
        gate: { id: 'G4a', name: '인증 완료', ask: '나라별 필수 인증을 다 받았는지 확인해요',
            criteria: ['판매 나라별 필수 인증 취득', '인증번호를 라벨·인쇄물에 반영'] } },
    { id: 'S7', name: '시험생산·양산 준비', short: '시험생산', color: '#B5533C',
        gate: { id: 'G4', name: '양산 승인', review: true, approver: 'CEO', like: 'DR5 · PVT 종료 · Gate 5 (출시 승인)', ask: '시험생산 결과를 보고 양산을 시작해도 되는지 정해요',
            criteria: ['시험생산(PVT) 불량률이 목표 안', '양산 관리 사양서(ERP) 등록', '인쇄물 최종 승인', '출하 검사 기준(AQL) 합의'] } },
    { id: 'S8', name: '양산·첫 출하', short: '출하', color: '#8E3B46',
        gate: { id: 'G5', name: '첫 출하', ask: '출하 검사에 합격한 첫 물량을 내보내요',
            criteria: ['출하 검사 성적서 합격', '최종 공장 출고가(FOB) 확정', '1차 생산분 사진·기록'] } },
    { id: 'S9', name: '양산 후 관리', short: '양산후', color: '#5A3D6B',
        gate: { id: 'G6', name: '개발 마무리 보고', review: true, like: '출시 후 리뷰 (Post-Launch Review)', ask: '출시 3개월쯤, 초기 불량과 시장 반응을 보고 배운 점을 남겨요',
            criteria: ['기술 사양서(TSG)·외관 검사 기준서·출하 검사 성적서 이관', '초기 시장 불량 검토', '개발 완료 보고서 결재', '다음 제품에 쓸 배운 점(잘된 것·고칠 것) 기록'] } },
];
// 원액기군 7단계 (기획·개발·런칭 프로세스 개정안 1028 '단계 정의' 시트). 결재 Gate는 G1·G2·G3 세 번 — 모두 경영진 결재
const L_COLORS = ['#5B7DB1', '#4F9A94', '#3E8E5E', '#D9731A', '#B5533C', '#8E3B46', '#5A3D6B'];
const L_SHORT = ['기획', '발의', '설계', '개발·검증', '출시준비', '생산', '출시 후'];
exports.LAUNCH_STAGES = launch_1.L_STAGE_DATA.map((d, i) => {
    const gt = launch_1.L_TASKS.filter(t => t.stage === d.id && t.gate)[0];
    return {
        id: d.id, name: d.label, short: L_SHORT[i] || d.label, color: L_COLORS[i] || '#7A8B99',
        gate: d.gate ? { id: d.gate, name: `${d.gate} ${d.gateName}`, review: true, approver: 'CEO', ask: gt ? gt.purpose : d.check,
            criteria: [d.check].concat(gt ? gt.done : []) } : undefined,
    };
});
const isJuicerLine = (x) => !!x && x.line === 'juicer';
exports.isJuicerLine = isJuicerLine;
const stagesFor = (x) => ((0, exports.isJuicerLine)(x) ? exports.LAUNCH_STAGES : exports.STAGES);
exports.stagesFor = stagesFor;
const lastStageId = (x) => { const ss = (0, exports.stagesFor)(x); return ss[ss.length - 1].id; };
exports.lastStageId = lastStageId;
exports.REVIEW_GATES = exports.STAGES.filter(s => s.gate && s.gate.review);
const reviewGatesFor = (x) => (0, exports.stagesFor)(x).filter(s => s.gate && s.gate.review);
exports.reviewGatesFor = reviewGatesFor;
// 품질 점검 6번의 체크리스트 — 이때 꼭 확인하고 넘어갈 것 (상품 출시 프로세스 매뉴얼의 품질 CFT 활동 + 다른 회사 EVT/DVT/PVT 종료 조건)
exports.QUALITY_CHECKS = {
    Q1: ['도면·부품표(BOM)·회로도를 품질이 검토함', 'KC 핵심 부품(전원코드·스위치·모터·히터·온도 퓨즈)이 인증 부품인지 확인', '비슷한 제품의 과거 불량·A/S 이력을 설계에 반영했는지 확인', '안전 요구사항(온도 상승·감전·끼임·기구 안전) 설계 반영 확인', '식품이 닿는 부품의 재질 목록과 시험 계획 확인', '환경 규제(유해물질·대기전력·재활용 표시) 부품·각인 반영 확인'],
    Q2: ['핵심 치수 측정 — 공차 안에 들어오는지(도면 대비)', '외관 한도 견본 대비 판정(색·광택·웰드라인·수축)', '조립성 확인(간섭·유격·체결 토크)', '재질·색상(CMF) 승인 샘플 대비 확인', '금형 수정 항목과 완료 기한을 목록으로 남김'],
    Q3: ['내구 시험(반복 동작·수명) 합격', '실사용 시험(성능·소음·세척 편의) 합격', '낙하·포장 낙하 시험 합격', '안전 시험(온도 상승·절연) 사전 측정 합격', '시험에서 나온 문제의 대책이 양산 도면에 반영됨', '인증 시험 접수에 쓸 시료와 같은 사양인지 확인'],
    Q4: ['시험생산 불량률이 목표 안(예: 1% 이하)', '공정 검사 기준·치공구·검사 장비 준비됨', '출하 검사 기준(AQL)과 외관 검사 기준서 합의', '불량 상위 5개 원인·대책 정리', '포장·액세서리·인쇄물이 양산 시방서대로 들어갔는지 확인', '작업 표준서·작업자 교육 완료'],
    Q5: ['출하 검사 성적서 합격(전수/표본 기준 명시)', '첫 양산 불량 원인·대책 7일 안에 정리', '포장·액세서리·인쇄물 동봉 확인(개봉 검사)', '1차 생산분 사진·기록 보관', 'A/S 부품·소모품 재고 입고 확인'],
    Q6: ['반품·A/S 불량률이 목표 안', '고객 의견(리뷰·상담) 분석 → 개선 항목 도출', '제조사와 재발 방지 대책 합의·기록', '다음 제품에 쓸 배운 점(잘된 것·고칠 것) 기록'],
};
function stageOf(id) {
    return exports.STAGES.filter(s => s.id === id)[0] || exports.LAUNCH_STAGES.filter(s => s.id === id)[0] || exports.STAGES[0];
}
const hasOverseas = (c) => c.regions.some(r => r !== 'KR');
const notDeriv = (c) => c.devType !== 'DERIV';
const odmLike = (c) => c.devType === 'ODM' || c.devType === 'DERIV';
const has = (r) => (c) => c.regions.indexOf(r) >= 0;
const devGrade = (c) => !c.grade || c.grade === 'A' || c.grade === 'B';
const kr = has('KR');
const krFood = (c) => kr(c) && c.features.foodContact;
const foodWaste = (c) => kr(c) && (c.category || '').indexOf('음식물') >= 0;
// 산출물 체크리스트 — 승인원 폴더 체계와 1:1
exports.CHECKLIST = [
    // S0 선행검토
    { id: 'C001', stage: 'S0', title: '소싱 후보 샘플 확보 및 기본 정보(FOB·MOQ·리드타임)', folder: '12. 선행검토', owner: '상품개발' },
    { id: 'C002', stage: 'S0', title: '선행검토 TR – 제품 성능(소비전력·RPM·성능·소음/진동·전자파)', folder: '6.1 선행검토', owner: '상품개발', critical: true },
    { id: 'C003', stage: 'S0', title: '선행검토 TR – 안전(평상온도상승·전기안전·코드이탈)', folder: '6.1 선행검토', owner: '상품개발', critical: true },
    { id: 'C004', stage: 'S0', title: '선행검토 TR – 내구·환경(고온고습·내냉열·염수분무·ELT·경사)', folder: '6.1 선행검토', owner: '품질', critical: true },
    { id: 'C005', stage: 'S0', title: '구조 문제점·권고사항 및 개선 조건 정리 (예: 바이메탈/TCO, 재질 변경)', folder: '6.1 선행검토', owner: '상품개발' },
    { id: 'C006', stage: 'S0', title: '향지 전압 사양 검증 (100V/110V/120V 향지 RPM·소비전력)', folder: '6.1 선행검토', owner: '상품개발', when: c => c.regions.some(r => ['JP', 'TW', 'US', 'CA'].indexOf(r) >= 0), critical: true },
    { id: 'C007', stage: 'S0', title: '경쟁품·USP / Technical Point 정리', folder: '0. USP_Technical Point', owner: '상품개발' },
    { id: 'C010', stage: 'S0', title: '[P1] 기획안 보고 — 라인업 전략·타겟가격·핵심성능·일정·목표 M/S (본부장→대표 구두보고)', folder: '0. USP_Technical Point', owner: 'PM', critical: true },
    { id: 'C011', stage: 'S0', title: '[P2] 구매 Pool 활용 및 신규 제조처 검토 (재무 건전성·R&D 능력·품질관리·거래조건)', folder: '12. 선행검토', owner: '구매' },
    { id: 'C012', stage: 'S0', title: '[P3] 도입 상품 검토 요청 품의 (Grade 검토 · 최초 단가/MOQ·스펙)', folder: '1. 개발발의서', owner: 'PM', critical: true },
    { id: 'C013', stage: 'S0', title: '[P4] 도입상품검토 요청 메일 → 휴롬 PM 지정 (A·B=개발PM / C·D=품질PM) · 시료 확보', folder: '1. 개발발의서', owner: 'PM', critical: true },
    { id: 'C014', stage: 'S0', title: '[P6] 도입 상품 품평 (진행·투자 여부 의사결정)', folder: '8. 기타/회의', owner: 'PM' },
    // S1 개발발의
    { id: 'C101', stage: 'S1', title: '[P7] 개발발의서(안)/변경개발발의 품의 — 투자비(금형·인증)·판매계획·손익분기 포함', folder: '1. 개발발의서', owner: 'PM', critical: true },
    { id: 'C106', stage: 'S1', title: '[P7] 금형비 지급 품의', folder: '2. 계약서', owner: '구매', critical: true, when: devGrade },
    { id: 'C107', stage: 'S1', title: '[P19] 인증 요청서 품의 (향지별 인증 목록·비용)', folder: '4. 인증서', owner: '품질', critical: true },
    { id: 'C102', stage: 'S1', title: '향지·출시일·판매수량·목표원가 확정', folder: '1. 개발발의서', owner: 'PM', critical: true },
    { id: 'C103', stage: 'S1', title: '향지 파생 개발 발의 (기준 모델 대비 변경점 명시)', folder: '1. 개발발의서', owner: 'PM', when: c => c.devType === 'DERIV', critical: true },
    { id: 'C104', stage: 'S1', title: '인증 전략 수립 (향지별 인증 목록·외부기관·CB 활용 여부)', folder: '4. 인증서', owner: '품질', critical: true, hint: 'AI가 향지·제품 특성으로 자동 생성한 인증 트랙 확인' },
    { id: 'C105', stage: 'S1', title: '걱정되는 일 목록(리스크) 초안 — 위험 관리 탭에 AI가 넣은 항목 확인·보완', folder: '8. 기타', owner: 'PM' },
    { id: 'C108', stage: 'S1', title: '나중에 팔 수 있는 나라까지 미리 정하기 — 전압(110/220V 겸용 여부)·환경 규제 기준 나라를 해외영업과 합의', folder: '1. 개발발의서', owner: '영업/해외', critical: true,
        hint: '개발 초기에 없던 나라가 나중에 추가되면 재설계·재인증. 지금 안 팔아도 EU 기준으로 설계해 두면 추가 비용이 거의 없음' },
    // S2 업체선정·계약
    { id: 'C201', stage: 'S2', title: 'RFQ 발송 및 견적 비교(동일 Incoterms·수량 구간)', folder: '8. 기타/최종 FOB', owner: '구매', when: notDeriv },
    { id: 'C202', stage: 'S2', title: '공장 실사 (ISO9001·IQC·추적성·하청 여부)', folder: '8. 기타', owner: '품질', when: notDeriv },
    { id: 'C203', stage: 'S2', title: 'NDA / 개발계약 / 공급계약 / 품질협약', folder: '2. 계약서', owner: '법무', critical: true, when: notDeriv },
    { id: 'C204', stage: 'S2', title: '금형 소유권·IP·독점 판매 금지 조항 (ODM 플랫폼 사용 범위)', folder: '2. 계약서', owner: '법무', critical: true, when: odmLike },
    { id: 'C205', stage: 'S2', title: 'PCN(부품·공정·장소 변경) 사전 승인 조항', folder: '2. 계약서', owner: '법무', critical: true },
    { id: 'C206', stage: 'S2', title: '제조사 개발 일정표(进度表) 수령 및 휴롬 표준 일정과 대조', folder: '3. 일정표', owner: 'PM', critical: true, hint: 'AS-IS로 등록 → AI가 TO-BE 제안' },
    { id: 'C207', stage: 'S2', title: '현지 수입사/법인 역할·인증 명의 확정', folder: '2. 계약서', owner: '영업/해외', when: hasOverseas },
    // S3 디자인·설계
    { id: 'C301', stage: 'S3', title: '제품디자인 / CMF / Print Specification', folder: '5. 제품사양서/3.1 제품디자인', owner: '디자인', critical: true },
    { id: 'C302', stage: 'S3', title: '3D(STP)·2D(DWG) 도면 확정', folder: '5. 제품사양서/3.5 3D 도면', owner: '연구소', critical: true },
    { id: 'C303', stage: 'S3', title: 'BOM·분해도 (단가 포함 price list)', folder: '5. 제품사양서/3.4 BOM,분해도', owner: '구매', critical: true },
    { id: 'C304', stage: 'S3', title: '회로도·중요부품 리스트 (인증용)', folder: '5. 제품사양서/3.7 회로도', owner: '연구소', critical: true, when: c => c.features.ac || c.features.adapter || c.features.battery },
    { id: 'C305', stage: 'S3', title: '식품접촉부 재질 리스트 확정', folder: '4. 인증서/식품접촉부', owner: '연구소', critical: true, when: c => c.features.foodContact },
    { id: 'C306', stage: 'S3', title: '설계 위험 분석(DFMEA) — 심각도 9~10 항목 대책', folder: '6. 제품검토서', owner: '연구소' },
    // 환경 규제 선제 설계 — 지금 팔 나라가 아니어도 가장 엄격한 기준(EU)으로 설계해 두면, 나중에 나라가 추가돼도 재설계·재시험이 없음
    { id: 'C311', stage: 'S3', title: '환경 규제 선제 설계 — 유해물질(RoHS 10종·REACH 고위험물질) 없는 부품·재질 선정, 공급사 적합 선언서 수집', folder: '4. 인증서', owner: '연구소', critical: true,
        hint: '지금 안 파는 나라(EU·미국)까지 기준으로. 납·카드뮴·프탈레이트 등. 나중에 수출이 생겨도 시험성적서만 받으면 됨' },
    { id: 'C312', stage: 'S3', title: '대기전력·에너지 — EU 에코디자인(ErP) 대기전력 0.5W 이하, 자동 꺼짐 설계', folder: '4. 인증서', owner: '연구소', critical: true, when: c => c.features.ac || c.features.adapter },
    { id: 'C313', stage: 'S3', title: '재활용·폐기 표시 설계 — 분리배출 표시(한국)·WEEE 쓰레기통 마크(EU) 자리, 플라스틱 재질 각인, 배터리 분리 구조', folder: '4. 인증서', owner: '디자인', critical: true,
        hint: '금형에 각인이 들어가므로 금형 발주 전에 확정해야 함' },
    { id: 'C314', stage: 'S3', title: '탄소발자국·재질 자료 — 부품표(BOM)에 재질·중량·원산지 열 추가, 포장재 포함 (제품 탄소발자국 산정, EU 디지털 제품 여권 대비)', folder: '5. 제품사양서/3.4 BOM,분해도', owner: '구매',
        hint: '지금은 계산 안 해도 자료만 모아 두면 나중에 바이어가 요구할 때 바로 산정 가능' },
    { id: 'C315', stage: 'S3', title: '수리 용이성 — 소모품·주요 부품(모터·스크류·패킹) 교체 구조, A/S 부품 공급 기간 확정 (EU 수리권·프랑스 수리 지수 대비)', folder: '6. 제품검토서', owner: '연구소' },
    { id: 'C316', stage: 'S3', title: '구성품·액세서리 목록 확정 — 본체 외 부속품(컵·브러시·전원코드·보증서 등), 나라별 차이 표', folder: '5. 제품사양서', owner: '상품개발', critical: true },
    { id: 'C317', stage: 'S3', title: '포장 사양 — 기프트박스·카톤 치수, 1카톤 수량, 팔레트 적재, 완충재(재활용 가능 재질·플라스틱 최소화·포장 공간비율)', folder: '5. 제품사양서/3.6 포장재재질증명', owner: '구매', critical: true,
        hint: '한국 자원재활용법 포장 공간비율·포장 횟수 + EU 포장재 규정(PPWR) 재활용 라벨 자리' },
    { id: 'C308', stage: 'S3', title: '[P5] 워킹 목업(W/M)·디자인 목업(D/M) 1~3차 → 프로토 샘플 → DR(검토·검증)', folder: '6. 제품검토서', owner: '연구소', when: devGrade },
    { id: 'C309', stage: 'S3', title: '[P5] 금형 전 품질 기준 정립 (Grade별) · 고객관점 Risk 검토 (고객경영본부)', folder: '6.2 품질검토', owner: '품질', critical: true },
    { id: 'C310', stage: 'S3', title: '[P5] 조립성·AS 구조 검토 / 성능·기능·스펙 기준서 / 디자인 시방서 (중간 견적)', folder: '5. 제품사양서', owner: '연구소', critical: true },
    { id: 'C307', stage: 'S3', title: '시각디자인 착수 – 매뉴얼·라벨·Gift Box·카톤·바코드 (향지별)', folder: '5. 제품사양서/3.2 시각디자인', owner: '디자인', hint: '금형 기간에 병행 — 인증번호만 후반 삽입' },
    // S4 금형
    { id: 'C401', stage: 'S4', title: '금형 발주 및 금형리스트 등록 (부품·캐비티·소유·보관처)', folder: '15. 금형관리', owner: '구매', critical: true },
    { id: 'C402', stage: 'S4', title: 'T1 사출 · 외관/치수 검토', folder: '8. 기타', owner: '연구소' },
    { id: 'C403', stage: 'S4', title: '금형 수정(T2~Tn) 및 금형 승인', folder: '15. 금형관리', owner: '연구소', critical: true },
    { id: 'C404', stage: 'S4', title: '외관 한도견본(골든샘플) 양측 서명', folder: '7. MP 관리/외관검사기준서', owner: '품질', critical: true },
    // S5 시제품 검증
    { id: 'C501', stage: 'S5', title: '품질검토 – 시험의뢰서 및 상품 시험 평가 보고서', folder: '6.2 품질검토', owner: '품질', critical: true },
    { id: 'C502', stage: 'S5', title: '실사용검토 (비교 테스트)', folder: '6.3 실사용검토', owner: '상품개발' },
    { id: 'C503', stage: 'S5', title: '제조사 검토 – 낙하·포장낙하·내구 성적서', folder: '6.4 제조사검토', owner: '제조사', critical: true },
    { id: 'C504', stage: 'S5', title: '세척용이성·식기세척기 사용 여부 검증', folder: '6.3 실사용검토', owner: '상품개발', when: c => c.features.foodContact },
    { id: 'C506', stage: 'S5', title: '[P8] 금형 이후 품질관리 CFT — EB → MB 빌드 검증, 시제품 성능/기능/스펙 기준서(최종)', folder: '6.2 품질검토', owner: '품질', critical: true },
    { id: 'C507', stage: 'S5', title: '[P9/10] 실사용 테스트 → 고객관점 품질 기준 협의서 (전사 협의체·제조처 공유) · 고객 대응방안', folder: '6.3 실사용검토', owner: '품질', critical: true },
    { id: 'C505', stage: 'S5', title: '선행검토 지적사항 개선 반영 확인', folder: '6.2 품질검토', owner: '품질', critical: true },
    // S6 인증 (향지별 개별 항목은 인증 트랙에서 관리)
    { id: 'C601', stage: 'S6', title: '인증 시료 확보 (T1/DVT 시료, 대수 확인)', folder: '4. 인증서', owner: '연구소', critical: true },
    { id: 'C602', stage: 'S6', title: '외부기관 접수·견적·인증비용 품의', folder: '4. 인증서/인증비용', owner: '품질' },
    { id: 'C603', stage: 'S6', title: '인증서·시험성적서 수령 및 승인원 등록', folder: '4. 인증서', owner: '품질', critical: true },
    // S7 양산준비·PVT
    { id: 'C701', stage: 'S7', title: '인쇄물 최종 승인 (향지 언어·인증마크·인증번호·수입사 표기)', folder: '8. 기타/인쇄물 의뢰관련', owner: '디자인', critical: true },
    { id: 'C702', stage: 'S7', title: '양산관리사양서(ERP) 등록 – REV 관리', folder: '5. 제품사양서/3.3 제품사양서(ERP)', owner: '상품개발', critical: true },
    { id: 'C703', stage: 'S7', title: '포장재 재질증명 (Packaging part list)', folder: '5. 제품사양서/3.6 포장재재질증명', owner: '구매', critical: true },
    { id: 'C704', stage: 'S7', title: '시험생산(PVT) 및 불량 Top5 대책', folder: '7. MP 관리', owner: '제조사', critical: true },
    { id: 'C705', stage: 'S7', title: '외관검사기준서 · 출하검사 기준(AQL) 합의', folder: '7. MP 관리/외관검사기준서', owner: '품질', critical: true },
    { id: 'C706', stage: 'S7', title: 'Trouble Shoot Guide (TSG) 작성', folder: '7. MP 관리/Trouble Shoot Guide', owner: '품질' },
    { id: 'C707', stage: 'S7', title: '양산 부품 준비 · 장납기 부품 선발주', folder: '8. 기타', owner: '생산관리' },
    { id: 'C708', stage: 'S7', title: 'A/S 부품·소모품 코드 및 초기 재고', folder: '8. 기타', owner: '상품개발' },
    { id: 'C710', stage: 'S7', title: '[P8] DPP → LPP 파일럿 생산 → 양산사양 확정', folder: '7. MP 관리', owner: '제조사', critical: true },
    { id: 'C711', stage: 'S7', title: '[P11] 거래조건 최종안 (도입단가 품의: 품번/품명·공급사·단가·결제조건·물량)', folder: '8. 기타/최종 FOB', owner: '구매', critical: true },
    { id: 'C712', stage: 'S7', title: '[P17] 인쇄물 검토 의뢰서 → 인쇄물 개발 발의 (커뮤니케이션디자인팀 일정 포함)', folder: '8. 기타/인쇄물 의뢰관련', owner: '디자인', critical: true },
    { id: 'C713', stage: 'S7', title: '[P18] 수출향 추가 인쇄물 제작 의뢰서 (사양 변경 없는 인쇄물 BOM 추가)', folder: '8. 기타/인쇄물 의뢰관련', owner: '영업/해외', when: hasOverseas },
    { id: 'C714', stage: 'S7', title: '코드 채번 — 품목명·품번(10자리)·자재코드·인쇄물 코드·물류코드', folder: '5. 제품사양서/3.3 제품사양서(ERP)', owner: '상품개발', critical: true },
    { id: 'C715', stage: 'S7', title: 'EAN(88) 코드 채번 요청 (물류팀) → 커뮤니케이션디자인팀 바코드 생성', folder: '5. 제품사양서/3.2 시각디자인', owner: '생산관리', critical: true },
    { id: 'C716', stage: 'S7', title: '최초 식검 — SGS 등 사전검증 · 구비서류·샘플 준비 (수입 정밀검사 대비)', folder: '4. 인증서/식품접촉부', owner: '품질', critical: true, when: krFood },
    { id: 'C717', stage: 'S7', title: '효율기자재 등록 (한국에너지공단, 유효 3년 · 매년 1월 실적 보고)', folder: '4. 인증서', owner: '품질', when: foodWaste },
    { id: 'C718', stage: 'S7', title: '환경표지인증 · 생활화학제품 안전기준 확인 (음식물처리기·필터)', folder: '4. 인증서', owner: '품질', when: foodWaste },
    { id: 'C709', stage: 'S7', title: '향지 전용 카톤·라벨 (예: 베트남 전용 카톤)', folder: '5. 제품사양서/3.2 시각디자인', owner: '디자인', when: hasOverseas },
    { id: 'C719', stage: 'S7', title: '양산 시방서(제조사와 서명) — 사양·구성품·포장·라벨 위치·검사 기준을 한 문서로 (한/영/중)', folder: '5. 제품사양서', owner: '상품개발', critical: true,
        hint: '이 문서가 없으면 "말로 합의한 사양"이 양산에서 바뀜. 변경은 REV 올려서 다시 서명' },
    { id: 'C720', stage: 'S7', title: '인쇄물 목록 확정 — 사용설명서·간편설명서·보증서·정격/경고/인증 라벨·에너지 라벨·분리배출 표시·박스 인쇄 (나라별 언어)', folder: '8. 기타/인쇄물 의뢰관련', owner: '디자인', critical: true },
    { id: 'C721', stage: 'S7', title: '액세서리·소모품 양산 준비 — 별도 업체 부품의 납기·검사·동봉 여부, 박스 안 배치도', folder: '8. 기타', owner: '구매', critical: true },
    { id: 'C722', stage: 'S7', title: '포장 낙하·운송 시험 통과 (ISTA 또는 제조사 기준) · 포장재 재질 증명서', folder: '6.4 제조사검토', owner: '제조사', critical: true },
    // S8 양산·초도출하
    { id: 'C801', stage: 'S8', title: '출하검사 성적서 (成品检验报告)', folder: '7. MP 관리/출하검사성적서', owner: '품질', critical: true },
    { id: 'C802', stage: 'S8', title: '최종 FOB 확정 · 견적서 보관', folder: '8. 기타/최종 FOB', owner: '구매', critical: true },
    { id: 'C803', stage: 'S8', title: '1차 Lot 생산사진·현장 입회 기록', folder: '8. 기타/1차 Lot 생산사진', owner: '상품개발' },
    { id: 'C804', stage: 'S8', title: '통관 필요서류 (세관 검역증·CI/PL·원산지)', folder: '4. 인증서/세관통관필요사항', owner: '영업/해외', when: hasOverseas },
    { id: 'C806', stage: 'S8', title: '[P15] 통관 / 식약처 최초 정밀검사 (구매2팀 포워딩, 상전2팀 서포트)', folder: '4. 인증서/세관통관필요사항', owner: '구매', critical: true, when: krFood },
    { id: 'C807', stage: 'S8', title: '[P16] AS 자재 발주 · AS 파츠 리스트 · CS 매뉴얼', folder: '8. 기타', owner: '상품개발', critical: true },
    { id: 'C805', stage: 'S8', title: '초도품 출하 ETD 확정', folder: '3. 일정표', owner: '생산관리', critical: true },
    // S9 MP 관리
    { id: 'C901', stage: 'S9', title: '[P14] 프로젝트 종료 보고서 품의 (검토요청서·발의서·금형비·거래조건·승인원 첨부)', folder: '(모델 루트)', owner: 'PM', critical: true },
    { id: 'C907', stage: 'S9', title: '[P13] 프로젝트 종료 회의 (상전2팀·개발·품질)', folder: '8. 기타/회의', owner: 'PM', critical: true },
    { id: 'C908', stage: 'S9', title: '[P12] 자가식검 — 통관 후 6개월 내 LOT당 (일정 공유시트·통합정보시스템 서류 업로드)', folder: '4. 인증서/식품접촉부', owner: '품질', critical: true, when: krFood },
    { id: 'C909', stage: 'S9', title: 'ECOAS 재질구조평가서·유해물질 함유기준 준수 (수입통관 후 6개월 내, RoHS·비사용증명서)', folder: '4. 인증서', owner: '품질', critical: true, when: kr },
    { id: 'C910', stage: 'S9', title: '폐기물 부담금 · 재활용 부과금(EPR) 연간 출고실적 등록 (출시: 상품전략팀 / 이후: ESG경영팀)', folder: '4. 인증서', owner: '품질', when: kr },
    { id: 'C911', stage: 'S9', title: '시장 품질·판매 모니터링 (고품 분석 프로세스: 국내/해외 특이건 접수 → 1·2차 분석)', folder: '7. MP 관리', owner: '품질' },
    { id: 'C912', stage: 'S9', title: '식품 공장심사 (출시 후 3년 주기)', folder: '7. MP 관리', owner: '품질', when: krFood },
    { id: 'C902', stage: 'S9', title: '초도 90일 필드불량·반품 사유 리뷰', folder: '7. MP 관리', owner: '품질', critical: true },
    { id: 'C903', stage: 'S9', title: '4M 변경/PCN 접수 체계 운영', folder: '7. MP 관리', owner: '품질' },
    { id: 'C904', stage: 'S9', title: '연 1회 공장 정기 감사', folder: '7. MP 관리', owner: '품질' },
    { id: 'C905', stage: 'S9', title: '부품 단종(EOL) 모니터링·라스트바이 판단', folder: '7. MP 관리', owner: '구매' },
    { id: 'C906', stage: 'S9', title: '인증 유효기간·규격 개정 모니터링', folder: '4. 인증서', owner: '품질' },
];
// 원액기군 할 일 = 업무 67개 그대로 (주관 부서·산출물·완료 기준·SOP는 launch.ts)
exports.LAUNCH_CHECKLIST = launch_1.L_TASKS.map(t => ({
    id: t.id, stage: t.stage, title: t.name, folder: (0, juicerLaunch_1.launchPath)(t).join('/'), owner: t.owner || '상품전략1팀',
    out: t.output || undefined, proc: t.id, critical: juicerLaunch_1.LAUNCH_CRITICAL.indexOf(t.id) >= 0,
}));
function checklistFor(ctx) {
    if (ctx.line === 'juicer')
        return exports.LAUNCH_CHECKLIST;
    return exports.CHECKLIST.filter(c => !c.when || c.when(ctx));
}
exports.has_ = has;

};
__m["src/webparts/huromPlm/model/launch.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withSides = exports.sideOf = exports.orgSides = exports.L_MERGED = exports.trackOf = exports.isMine = exports.myPms = exports.pmName = exports.pmLabel = exports.parallelOf = exports.L_TIMING = exports.L_TRACKS = exports.L_PMS = exports.L_OPEN = exports.L_LESSONS = exports.L_TERMS = exports.L_SOPS = exports.L_TASKS = exports.L_STAGE_DATA = exports.L_NOTICE = exports.L_SUB = exports.L_TITLE = exports.L_FILE = void 0;
exports.L_FILE = "기획개발런칭 프로세스 재정립_AI업로드용.xlsx";
exports.L_TITLE = "프로젝트 중심의 7단계";
exports.L_SUB = "두 PM이 기술 검토와 판매 준비를 병행합니다.";
exports.L_NOTICE = ["■ Task ID 순서대로 진행합니다. 같은 번호에 A·B·C가 붙은 Task(예: PROC-02A~02D)는 동시에 진행합니다.", "■ 실행 절차 번호 = 상세가이드(SOP) 절차 번호. 메인 시트는 '무엇을·어떤 순서로', SOP는 '어떻게(양식·시스템·기준)'를 적습니다.", "■ 검정 글씨 = 기존 내용 / 파란 글씨 = Claude 제안 초안 (팀 검토 후 확정 필요)", "■ 노란 행 = 의사결정 Gate (G1 기획 승인 · G2 개발발의 승인 · G3 출시 승인)"];
exports.L_STAGE_DATA = [{ "id": "L1", "no": 1, "label": "컨셉·기획", "check": "고객가치·차별점·기술 가능성을 병행 확인", "gate": "G1", "gateName": "기획 승인", "range": "PROC-01 ~ PROC-12 (19개)", "count": 19 }, { "id": "L2", "no": 2, "label": "공동검토·개발발의", "check": "요구사항·예산·일정·역할을 합의하고 착수", "gate": "G2", "gateName": "개발발의 승인", "range": "PROC-13 ~ PROC-19 (7개)", "count": 7 }, { "id": "L3", "no": 3, "label": "설계·시제품검증", "check": "금형 착수 전 설계 방향·평가 계획을 확정", "gate": "", "gateName": "", "range": "PROC-20A ~ PROC-22 (4개)", "count": 4 }, { "id": "L4", "no": 4, "label": "개발·검증", "check": "금형·T0~DPP~LPP 검증과 인쇄물·인증·LS CFT 출시 자료 준비", "gate": "", "gateName": "", "range": "PROC-23 ~ PROC-39B (31개)", "count": 31 }, { "id": "L5", "no": 5, "label": "양산·출시준비", "check": "MP 품질·자재·생산 준비와 영업·마케팅·CS 출시 지원 확인 후 승인", "gate": "G3", "gateName": "출시 승인", "range": "PROC-40 ~ PROC-41 (2개)", "count": 2 }, { "id": "L6", "no": 6, "label": "생산", "check": "초도 생산·출하·초도품 확인", "gate": "", "gateName": "", "range": "PROC-42 (1개)", "count": 1 }, { "id": "L7", "no": 7, "label": "출시 후 유통관리", "check": "시장 반응·VOC 대응, 미출시 권역 공유, 회고 결과를 다음 제품에 반영", "gate": "", "gateName": "", "range": "PROC-43A ~ PROC-44 (3개)", "count": 3 }];
exports.L_TASKS = [{ "id": "PROC-01", "stage": "L1", "when": "", "work": "시장·바이어 니즈 공동 정의", "name": "권역·채널별 영업 및 바이어 요구사항 취합", "purpose": "신규 과제·파생·ODM 요청과 권역·채널별 바이어 요구 사항 기반 기획 착수 범위와 일정을 정한다.", "steps": ["신규 과제 및 요청 접수 (신규/파생/ODM 구분)", "권역·채널별 영업·바이어 요구사항 취합", "요구 우선순위·희망 일정 정리", "담당자 지정 및 착수 범위 확정"], "output": "개발의뢰서(FORM) 접수 내역, 요구사항 취합표", "example": "", "owner": "상품전략1팀", "role": "요청 내용 구조화, 기한·범위 확인", "with": "요청 부서", "done": ["요청 내용·범위 확인 완료", "담당자 지정 완료"], "risk": [], "sop": "SOP-01", "prev": "", "pm": "product", "tracks": [] }, { "id": "PROC-02A", "stage": "L1", "when": "", "work": "시장조사 & 인사이트 도출", "name": "기존 모델 판매 History 분석", "purpose": "기존 모델의 판매·재고·CS 이력을 분석해, 신제품에서 유지할 강점과 개선할 약점의 근거를 확보한다.", "steps": ["판매·재고·CS 이력 데이터 요청", "유지할 강점 / 개선할 약점 정리", "차별화 포인트(POD) 후보 도출"], "output": "신제품 기획안", "example": "", "owner": "상품전략1팀", "role": "데이터 분석·POD 도출", "with": "고객경영본부", "done": ["강점·약점 정리", "POD 후보 도출"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": [] }, { "id": "PROC-02B", "stage": "L1", "when": "", "work": "시장조사 & 인사이트 도출", "name": "글로벌/주요 국가 시장조사", "purpose": "목표 권역의 시장 규모·성장세·채널·규제·기술 변화를 파악해, 제품 방향성의 시장 근거를 만든다.", "steps": [], "output": "", "example": "", "owner": "", "role": "", "with": "", "done": [], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": [], "same": "PROC-02C" }, { "id": "PROC-02C", "stage": "L1", "when": "", "work": "시장조사 & 인사이트 도출", "name": "경쟁 모델 벤치마킹 및 분석", "purpose": "경쟁 제품과 자사 제품의 사양·가격·사용성·디자인·소구점을 비교해 차별화 기회를 찾는다.", "steps": ["조사 범위 선정", "시장 규모·성장세·채널·규제 조사", "경쟁 제품 비교 분석", "해외 소비자 평가 조사", "시장조사 보고서 작성"], "output": "시장조사 보고서 (시장동향·경쟁 분석)", "example": "", "owner": "상품전략1팀", "role": "조사 수행 및 보고서 작성", "with": "-", "done": ["시장규모·CAGR·주요 브랜드·유통채널 정리 완료"], "risk": [], "sop": "SOP-02C", "prev": "기존 7행 + O8~O13", "pm": "product", "tracks": [] }, { "id": "PROC-02D", "stage": "L1", "when": "", "work": "시장조사 & 인사이트 도출", "name": "영업/고객 VOC·Pain Point 분석", "purpose": "자사·타사 고객의 불만과 요구를 분류해, 신제품에 반영할 개선 사항을 우선순위로 정리한다.", "steps": ["자사(국내/해외) VOC·현지 CS 이슈 수집", "영업 VOC 수집 (거래선 요구, 판매 현장 불만)", "온라인 리뷰 조사", "Pain Point 리스트 작성 및 우선순위 정리"], "output": "Pain Point 리스트 (VOC / 영업 VOC 구분)", "example": "", "owner": "상품전략1팀", "role": "VOC 취합·분석 Owner", "with": "고객경영본부, 영업본부·법인", "done": ["Pain Point 리스트 작성", "우선순위 정리"], "risk": [], "sop": "SOP-02D", "prev": "기존 9행", "pm": "product", "tracks": [] }, { "id": "PROC-03", "stage": "L1", "when": "", "work": "제품 아이디어 및 컨셉 기획", "name": "제품 방향성, 컨셉 설정 및 고객 가치 정의", "purpose": "조사 결과를 바탕으로 신제품의 방향성·타겟 고객·핵심 USP기반 신제품이 고객에게 줄 핵심 가치를 신제품기획안으로 정리한다.", "steps": ["조사 결과(02A~02D) 구조화", "핵심 고객·해결 과제 정의", "제공 가치·차별화 포인트 정리", "목표 가격대 설정"], "output": "제품 방향성 정리안 (신제품기획안 초안)", "example": "", "owner": "상품전략1팀", "role": "방향성 수립 Owner", "with": "-", "done": ["핵심 고객·제공 가치 정의", "목표 가격대 설정"], "risk": [], "sop": "", "prev": "기존 10행", "pm": "product", "tracks": [] }, { "id": "PROC-04", "stage": "L1", "when": "", "work": "제품 아이디어 및 컨셉 기획", "name": "컨셉 디자인/ 사양 기획", "purpose": "컨셉의 기능·성능·크기·소재·CMF·사용성 조건을 구체화하고 우선순위를 정한다.", "steps": ["기능·성능 요구 정의", "크기·소재·CMF 조건 정리", "사용성 조건 정리", "항목별 우선순위 설정 (Must / Want)"], "output": "컨셉 사양 리스트 (우선순위 포함)", "example": "", "owner": "상품전략1팀", "role": "사양 기획 Owner", "with": "상품디자인팀", "done": ["사양 조건 정의", "우선순위 설정"], "risk": [], "sop": "", "prev": "기존 11행", "pm": "product", "tracks": [] }, { "id": "PROC-05", "stage": "L1", "when": "", "work": "제품 아이디어 및 컨셉 기획", "name": "경영진 보고 및 컨펌", "purpose": "컨셉·시장성·사업성·핵심 리스크를 대표이사에게 보고해 방향을 확인받고, 승인·보완·보류 사항으로 정리한다.", "steps": ["보고자료 작성 (컨셉·시장성·사업성·리스크)", "대표이사 보고", "승인·보완·보류 사항 기록 및 공유"], "output": "컨셉 보고자료, 결정 사항 기록", "example": "", "owner": "상품전략1팀", "role": "보고 주관", "with": "상품전략본부", "done": ["보고 완료", "보완 사항 반영 계획 수립"], "risk": [], "sop": "", "prev": "기존 12행", "pm": "product", "tracks": [] }, { "id": "PROC-06A", "stage": "L1", "when": "", "work": "기술 조사 및 구현 가능성 검토", "name": "기술 옵션 및 개발 방식 검토", "purpose": "적용 가능한 기술안과 개발 방식(내재화·공동개발·ODM)을 비교해 최적의 방식을 고른다.", "steps": ["핵심 기술·적용안 조사", "개발 방식별(내재화·공동개발·ODM) 비용·일정·리스크 비교", "개발 방식 제안안 정리"], "output": "기술 옵션·개발 방식 비교표", "example": "", "owner": "개발본부", "role": "비교 검토 Owner", "with": "휴롬 개발본부", "done": ["개발 방식 비교 완료"], "risk": [], "sop": "", "prev": "", "pm": "dev", "tracks": [] }, { "id": "PROC-06B", "stage": "L1", "when": "", "work": "기술 조사 및 구현 가능성 검토", "name": "기술 가능성 확인", "purpose": "고객가치·차별점을 구현할 핵심 기술이 가능한지 컨셉 확정 전에 확인해, 개발 검토 단계의 USP 변경을 줄인다.", "steps": ["핵심 기능·성능 요구 정리", "개발본부 사전 기술 검토 요청", "구현 가능 여부·난이도·원가 영향 의견 수령", "어려운 항목 대안 기술·사양 검토"], "output": "기술 가능성 검토 의견", "example": "", "owner": "개발본부", "role": "검토 요청·결과 반영", "with": "", "done": ["검토 의견 수령", "대안 검토 완료"], "risk": ["사전 확인 수준으로 진행 — 상세 구현 방안 검토는 ② 단계"], "sop": "", "prev": "", "pm": "dev", "tracks": [] }, { "id": "PROC-07", "stage": "L1", "when": "", "work": "제품 컨셉 설정 및 신제품 기획", "name": "제품 컨셉 구체화 및 개발 방향성 수립", "purpose": "조사·기술 검토 결과로 타깃·핵심 USP와 목표 사양·구성을 확정해 신제품기획안으로 정리한다.", "steps": ["컨셉 가설 검증 (조사·기술 검토 결과 반영)", "타깃·포지셔닝·핵심 USP 확정", "목표 사양·구성 기획 (기능·성능, 구성품·컬러, 인쇄물 구성 초안)", "신제품기획안 작성"], "output": "신제품기획안 (v1 컨셉)", "example": "", "owner": "상품전략1팀", "role": "기획안 작성 Owner", "with": "상품전략본부 (검토)", "done": ["타깃·USP 정의 완료", "VOC 반영 항목 선별 완료"], "risk": [], "sop": "", "prev": "기존 10행 (+ O10)", "pm": "product", "tracks": [] }, { "id": "PROC-08", "stage": "L1", "when": "", "work": "컨셉·사업성 승인", "name": "컨셉·수익성·투자 타당성 검토", "purpose": "판매가·원가·투자비·수익성을 기준으로 사업 타당성을 심의해 개발 추진 여부를 판단한다.", "steps": ["사업성 자료 작성 (판매가·원가·MOQ·개발비·금형비)", "투자 회수 시점 산출", "일정·핵심 리스크 정리"], "output": "사업성 검토서", "example": "", "owner": "상품전략1팀", "role": "사업성 자료 작성·심의 상정", "with": "재무팀, 영업본부", "done": ["심의 완료", "결정 사항 기록"], "risk": [], "sop": "SOP-08", "prev": "", "pm": "product", "tracks": [] }, { "id": "PROC-09", "stage": "L1", "when": "", "work": "디자인 개발 (상품디자인팀 진행)", "name": "디자인 Direction 및 컨셉 수립", "purpose": "확정된 기획 컨셉에 맞는 디자인 방향을 세워 디자인안을 확보한다.", "steps": ["신제품기획안 전달 및 디자인 방향 요청", "디자인 컨셉 진행 (상품디자인팀)", "디자인안 검토 (컨셉·USP 부합 여부)", "디자인안 신제품기획안 반영"], "output": "디자인안", "example": "", "owner": "상품디자인팀", "role": "컨셉 전달, 디자인안 검토", "with": "-", "done": ["디자인안 확보"], "risk": [], "sop": "", "prev": "기존 13행", "pm": "product", "tracks": [] }, { "id": "PROC-10A", "stage": "L1", "when": "", "work": "디자인 개발 (상품디자인팀 진행)", "name": "제품 디자인 기반 개발·사용성 제약 검토", "purpose": "디자인안이 구조·생산·사용성 측면에서 구현 가능한지 미리 점검해 이후 디자인 변경을 줄인다.", "steps": ["디자인안 개발본부 공유", "구조·금형·생산 제약 검토", "조립·세척·조작 등 사용성 제약 검토", "수정 필요 사항 디자인 반영 요청"], "output": "제약 검토 의견", "example": "", "owner": "상품디자인팀", "role": "검토 요청·사용성 의견 제공", "with": "개발본부, 상품전략1팀", "done": ["제약 사항 확인", "수정 사항 반영 요청"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": [] }, { "id": "PROC-10B", "stage": "L1", "when": "", "work": "디자인 개발 (상품디자인팀 진행)", "name": "선행 IP(지식재산권) 검토", "purpose": "개발 착수 전 타사 지식재산권 침해 리스크를 확인해 사양·디자인에 반영한다.", "steps": ["컨셉안·사양 초안 지식재산본부 전달", "침해 리스크 검토 결과 수령", "리스크 항목 사양·디자인 수정 반영"], "output": "IP 검토 결과", "example": "", "owner": "상품전략본부, 개발본부", "role": "검토 요청 및 결과 반영", "with": "지식재산본부", "done": ["IP 검토 결과 수령", "수정 필요 사항 반영 완료"], "risk": [], "sop": "", "prev": "기존 14행 (기존 G열의 부서명 → 주관 열로 이동)", "pm": "both", "tracks": ["ip"] }, { "id": "PROC-10C", "stage": "L1", "when": "", "work": "디자인/기획 사양 영업 검토", "name": "영업 요구사항 반영 및 협의", "purpose": "권역·채널별 필수 사양·목표가·출시 시점·수량을 개발 검토 전에 확정해 이후 사양 변경을 줄인다.", "steps": ["기획안·디자인안 영업 공유", "권역·채널별 필수 사양·목표가·출시 시점·수량 취합", "적용 여부 협의 및 기획안 반영"], "output": "신제품 기획안 (영업 요구 반영)", "example": "", "owner": "상품전략1팀", "role": "요구사항 취합 Owner", "with": "영업본부", "done": ["권역별 요구·우선순위 취합 완료"], "risk": ["여기서 한 번만 취합하고, PROC-14·16B·17은 이 결과를 재사용 (중복 요청 방지)"], "sop": "", "prev": "기존 15행", "pm": "product", "tracks": [] }, { "id": "PROC-10D", "stage": "L1", "when": "", "work": "UI/UX 기획 및 개선 방향 수립", "name": "UI/UX 기획 및 개선 방향 수립", "purpose": "제품 사용 흐름과 기능별 UI/UX 기준을 세워 디자인·개발이 같은 기준으로 진행하게 한다.", "steps": ["사용 흐름(조립·작동·세척) 정의", "정보 구조·조작 방식 정의", "기존 모델 UI/UX 개선 요소 정리", "UI/UX 기획안 공유"], "output": "UI/UX 기획안", "example": "", "owner": "상품전략1팀", "role": "UI/UX 기준 수립", "with": "상품디자인팀, 개발본부", "done": ["사용 흐름·조작 방식 정의", "기획안 공유"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": [] }, { "id": "PROC-11", "stage": "L1", "when": "", "work": "디자인-개발 핸드오프 리뷰", "name": "디자인-개발 핸드오프 리뷰", "purpose": "완료된 디자인이 제조 가능한 설계 입력으로 정확히 전달되도록 확인한다.", "steps": ["디자인 산출물 정리 (도면·CMF·UI/UX)", "개발본부 이관 리뷰", "제조성 검토 의견 반영", "이관 완료 확인"], "output": "핸드오프 리뷰 결과", "example": "", "owner": "상품디자인팀", "role": "기획 사양 반영 여부 확인", "with": "개발본부, 상품전략1팀", "done": ["디자인 산출물 이관 완료"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": [] }, { "id": "PROC-12", "stage": "L1", "when": "", "work": "승인·보고", "name": "경영진 보고 및 컨펌", "purpose": "기획 방향·사양·일정·투자 규모를 경영진에 보고해 개발 검토 진행 여부를 결정받는다.", "steps": ["보고자료 작성 (방향·사양·일정·투자 규모)", "경영진 보고", "결정·보완 사항 기록"], "output": "경영진 보고자료, 결정 사항 기록", "example": "", "owner": "상품전략1팀", "role": "보고 주관", "with": "상품전략본부", "done": ["개발 검토 진행 여부 결정 완료"], "risk": [], "sop": "", "prev": "기존 12행", "pm": "product", "tracks": [], "gate": "G1" }, { "id": "PROC-13", "stage": "L2", "when": "", "work": "프로젝트 Pre-Kick Off", "name": "개발 검토 요청", "purpose": "개발본부가 개발 가능성·일정·원가를 검토할 수 있도록 기획 내용을 정해진 양식으로 전달한다.", "steps": ["개발 검토 요청서 작성 (제품 스펙 포함)", "기안 상신", "개발본부 발신"], "output": "개발검토요청서", "example": "", "owner": "상품전략1팀", "role": "요청서 작성·발신", "with": "휴롬 개발본부", "done": ["요청서 발신 완료"], "risk": [], "sop": "", "prev": "기존 16행", "pm": "product", "tracks": [] }, { "id": "PROC-14", "stage": "L2", "when": "", "work": "프로젝트 Pre-Kick Off", "name": "사전 검토 단계, 개발 일정 수립", "purpose": "개발 착수 전 부서별 반영 요구를 한 번에 취합하고 개발 일정·범위를 맞춘다.", "steps": ["부서별 요구사항 요청 (공통 양식)", "요구 취합·중복 정리", "개발 요청 사항 LIST 확정", "개발 일정·범위 사전 협의"], "output": "신제품기획안 (디자인 포함)\n개발 요청 사항 LIST", "example": "", "owner": "상품전략본부", "role": "요구 취합·정리 주관", "with": "개발본부", "done": ["부서별 요구 취합 완료", "개발 요청 사항 LIST 확정"], "risk": ["부서마다 요청 Format이 없어 걸러내는 작업이 안 됨 → 요청 양식 통일 필요"], "sop": "SOP-14", "prev": "기존 17행 + O18, O20", "pm": "product", "tracks": [] }, { "id": "PROC-15", "stage": "L2", "when": "", "work": "프로젝트 Pre-Kick Off", "name": "사양·디자인·재료비 검토, Pivoting", "purpose": "기획 사양·디자인의 개발 가능성과 목표 원가 충족 여부를 확인하고, 필요 시 조정한다.", "steps": ["개발본부 리뷰 (사양·디자인·재료비)", "목표 원가 초과·개발 불가 항목 확인", "사양·디자인 조정(Pivoting) 협의", "조정 사항 기획안 반영"], "output": "신제품 기획안 (조정 반영)", "example": "", "owner": "개발본부", "role": "조정안 협의·기획안 업데이트", "with": "상품디자인팀", "done": ["재료비 목표 원가 충족 확인", "조정 사항 기획안 반영"], "risk": [], "sop": "", "prev": "기존 18행 + 20행 (통합)", "pm": "dev", "tracks": [] }, { "id": "PROC-16A", "stage": "L2", "when": "", "work": "권역별 런칭 계획", "name": "권역별 FCST 취합 및 MOQ 조율 · 공용 및 개별 인쇄물 범위 정리", "purpose": "국가·SKU·컬러·전압별 FCST를 취합해 MOQ와 초도·추가 발주안을 맞춘다.\n국가·권역별 인쇄물 범위와 언어 구성을 미리 정의해 개발발의서에 반영하고, 번역 누락·재작업을 막는다.", "steps": ["국가·SKU·컬러·전압별 FCST 취합", "MOQ 대비 수량 검토", "MOQ 분할·초도·추가 발주안 협의", "권역별 런칭 계획 확정", "국가·권역별 필요 인쇄물·언어 범위 정리"], "output": "권역별 FCST·발주안", "example": "", "owner": "상품전략1팀", "role": "FCST 취합·MOQ 조율", "with": "영업본부·법인, 영업기획, 구매", "done": ["FCST 취합 완료", "초도 발주안 합의"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": ["print"] }, { "id": "PROC-17", "stage": "L2", "when": "", "work": "최종 사양 확정", "name": "최종 사양 확정 및 개발발의서 작성", "purpose": "개발발의 전에 사양(인쇄물 범위 포함)·구성·원가·일정·출시 권역을 하나로 확정한다.", "steps": ["국가·채널별 영업 계획 수립 요청", "예상 원가·전체 일정·출시 계획 정리", "최종 사양서 확정"], "output": "최종 사양서 (신제품 기획안 최종)", "example": "", "owner": "상품전략1팀", "role": "사양 확정 Owner", "with": "영업본부", "done": ["사양·원가·일정·출시 권역 확정"], "risk": [], "sop": "", "prev": "기존 21행", "pm": "product", "tracks": [] }, { "id": "PROC-18", "stage": "L2", "when": "", "work": "승인·보고", "name": "개발발의서 작성 및 상신", "purpose": "확정된 사양·투자·일정을 결재받아 개발본부·품질본부·생산본부에 개발을 의뢰한다.", "steps": ["개발발의서 작성 (사양, 구성품, 인쇄물 패키지, 도입 권역, 인증 계획)", "결재 상신", "휴롬 개발·품질·생산본부 개발 의뢰", "변경점 발생 시 변경 개발발의 기안"], "output": "개발발의서", "example": "", "owner": "상품전략1팀", "role": "발의서 작성·상신", "with": "개발본부, 영업본부, 커뮤니케이션디자인팀", "done": ["결재 완료", "개발 의뢰 메일 발송"], "risk": [], "sop": "SOP-18", "prev": "기존 22행 + 23행 (통합)", "pm": "product", "tracks": [], "gate": "G2" }, { "id": "PROC-19", "stage": "L2", "when": "", "work": "", "name": "개발 Kick-Off 및 개발 계약", "purpose": "(주)휴롬과 개발 계약을 체결하고 개발을 공식 착수한다.", "steps": ["개발 계약서 작성", "법무 검토 및 계약 체결", "개발 Kick-Off 진행"], "output": "개발 계약서", "example": "", "owner": "상품전략1팀", "role": "개발 계약 진행 및 착수 일정 관리", "with": "휴롬 개발본부", "done": ["개발 계약 체결", "Kick-Off 완료"], "risk": [], "sop": "", "prev": "기존 24행", "pm": "product", "tracks": [] }, { "id": "PROC-20A", "stage": "L3", "when": "설계", "work": "", "name": "구조 설계", "purpose": "확정 사양·디자인으로 구조설계를 진행하고, 설계 리스크(FMEA)를 사전에 검토한다.", "steps": ["개발 일정 모니터링", "기획 사양 반영 여부 확인", "FMEA 고객 관점 리스크 의견 제공", "T0 일정 확인"], "output": "-", "example": "", "owner": "개발본부", "role": "기획 요구사항 반영 확인 및 고객 관점 설계 리스크 검토", "with": "-", "done": ["T0 일정 확정"], "risk": [], "sop": "", "prev": "기존 27행", "pm": "dev", "tracks": [] }, { "id": "PROC-20B", "stage": "L3", "when": "설계", "work": "", "name": "시제품 품평 및 제품 사양 합의", "purpose": "목업을 기존 모델·레퍼런스와 비교 평가하고 유관부서 의견을 모아, 금형 착수 전 제품 사양을 합의한다.", "steps": ["평가 일정 수립", "성능 비교 테스트 진행", "품평 및 의견 취합", "개선 요구사항 도출 및 제품 사양 합의"], "output": "시제품 비교 평가 결과서, 개선사항 LIST, 제품 사양 합의 결과", "example": "", "owner": "개발본부/상품전략1팀", "role": "상품전략팀이 평가를 주관하고 제품 사양에 대한 부서 간 합의를 이끌어내는 Owner", "with": "영업본부, 고객경영본부", "done": ["비교 평가 완료", "개선사항 LIST 작성", "제품 사양 합의"], "risk": ["시제품 성능 미달 및 부서 간 사양 이견 발생 시 개선 방향과 후속 조치 합의 필요"], "sop": "SOP-20B", "prev": "", "pm": "both", "tracks": [] }, { "id": "PROC-21", "stage": "L3", "when": "설계", "work": "", "name": "DR 및 디자인·설계 사양 확정", "purpose": "합의된 사양을 기준으로 기술·품질·디자인 적합성을 검토해, 금형 착수용 최종 설계·디자인 사양을 확정한다.", "steps": ["시제품 평가 개선사항 반영 여부 확인", "DR 참여 및 주요 설계 검토", "구조·품질·디자인 리스크 협의", "최종 설계·디자인 사양 확정"], "output": "DR 결과서, 최종 디자인 승인본, 설계 사양 확정 자료", "example": "", "owner": "개발본부", "role": "기획 요구사항 및 합의 사양 반영 확인, 디자인·설계 사양 확정 협의", "with": "상품전략1팀, 품질본부, 상품디자인팀", "done": ["DR 완료", "최종 설계·디자인 사양 확정"], "risk": ["주요 개선사항 또는 설계 리스크 미해결 상태에서 금형 착수 시 설계 변경 및 개발 일정 지연 가능"], "sop": "", "prev": "", "pm": "dev", "tracks": [] }, { "id": "PROC-22", "stage": "L3", "when": "설계", "work": "", "name": "구성품 표준 명칭 확정", "purpose": "주요 부품 명칭을 한·영·중으로 통일해 BOM·기술문서·사용설명서·서비스 문서의 용어 혼용을 막는다.", "steps": ["주요 부품 LIST 확인 (개발본부)", "한·영·중 표준 명칭 정의", "유관부서 검토 및 명칭 확정", "표준 명칭 적용 기준 공유"], "output": "핵심 부품 표준 명칭 LIST (한·영·중)", "example": "", "owner": "상품전략1팀", "role": "주요 부품 명칭 표준화 주관 및 유관부서 합의·확정", "with": "개발본부, 고객경영본부, 법인", "done": ["표준 명칭 LIST 확정", "관련 부서 공유"], "risk": [], "sop": "SOP-22", "prev": "", "pm": "product", "tracks": ["print"] }, { "id": "PROC-23", "stage": "L4", "when": "금형 제작", "work": "", "name": "금형 제작 계약 체결", "purpose": "금형 제작업체와 계약을 맺어 금형 제작을 착수하고, 휴롬엘에스의 금형 소유권을 확보한다.", "steps": ["금형 투자 대상 확인", "업체 정보·견적 수령", "법무팀 계약서 검토 의뢰", "업체 검토·수정 협의", "계약 체결"], "output": "금형 및 구매거래계약서\n기안서 (계약 체결용)", "example": "", "owner": "상품전략1팀", "role": "금형 투자 Owner\n법무 의뢰, 계약 작성·체결", "with": "법무팀, 개발본부, 구매본부", "done": ["계약 체결 완료"], "risk": [], "sop": "SOP-23", "prev": "기존 25행", "pm": "product", "tracks": [] }, { "id": "PROC-24", "stage": "L4", "when": "금형 제작", "work": "", "name": "금형 투자비 집행 및 자산 등록", "purpose": "계약 조건에 따라 금형 투자비를 적기에 집행하고, 금형을 휴롬엘에스 자산으로 등록한다.", "steps": ["계약금 전자세금계산서 요청", "ERP 전표 등록", "지출결의서 상신", "지급 완료 확인·이체증 수령", "업체 송금 완료 안내"], "output": "계약금 세금계산서, ERP 전표, 지출결의서, 이체증", "example": "", "owner": "상품전략1팀", "role": "투자비 집행 Owner\nERP 전표 등록, 지출결의 기안, 지급 일정 관리", "with": "재무팀, 휴롬 개발본부", "done": ["세금계산서 수령", "ERP 전표 등록", "지출결의 결재", "계약금 지급", "송금 완료 안내 발송"], "risk": ["ERP 계정과목·세목 오등록 시 회계 오류 (SOP 참고)"], "sop": "SOP-24", "prev": "기존 26행", "pm": "product", "tracks": [] }, { "id": "PROC-25A", "stage": "L4", "when": "금형 제작", "work": "", "name": "금형 제작", "purpose": "개발본부 주관 금형 제작 일정을 확인해 T0와 후속 일정을 관리한다.", "steps": ["금형 제작 일정 확인", "진행 현황 모니터링", "T0 일정 확정·공유"], "output": "-", "example": "", "owner": "개발본부", "role": "일정 모니터링", "with": "금형 업체", "done": ["T0 일정 확정"], "risk": [], "sop": "", "prev": "", "pm": "dev", "tracks": [] }, { "id": "PROC-25B", "stage": "L4", "when": "금형 제작", "work": "", "name": "부서별 CFT 담당자 선정 및 역할 확정", "purpose": "런칭까지 함께할 휴롬엘에스 CFT를 구성하고, 부서별 담당자와 역할을 정한다.", "steps": ["참여 부서 확정", "부서별 담당자 지정", "역할·소통 채널 확정", "Kick-Off 회의 진행"], "output": "CFT 구성표, Kick-Off 회의록", "example": "", "owner": "상품전략1팀", "role": "CFT 운영 주관", "with": "커뮤니케이션디자인팀, 고객경영본부(CS), 영업, 마케팅", "done": ["CFT 구성표 공유", "Kick-Off 완료"], "risk": ["초기에는 디자인·CS 중심으로 운영하고, 제품 방향이 구체화되면 영업 추가 (Lesson Learned)", "※ CFT는 런칭까지 계속 운영"], "sop": "", "prev": "", "pm": "product", "tracks": [] }, { "id": "PROC-25C", "stage": "L4", "when": "금형 제작", "work": "", "name": "인증용 명판·사용설명서 사전 준비", "purpose": "DPP 샘플 확보 즉시 인증을 접수할 수 있도록 인증 자료를 미리 준비한다.", "steps": ["인증별 제품 명판 확정", "인증용 사용설명서 준비 (PROC-25D 초안 활용)", "인증 접수 담당자에게 전달"], "output": "인증용 사용설명서, 인증별 제품 명판", "example": "", "owner": "상품전략1팀", "role": "인증 자료 준비·전달", "with": "인증담당, 개발본부", "done": ["명판·사용설명서 전달 완료"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": ["cert", "print"] }, { "id": "PROC-25D", "stage": "L4", "when": "금형 제작", "work": "", "name": "인쇄물 목록 작성 및 사용설명서 초안 · (인증 사용 겸용) 제작", "purpose": "권역별 인쇄물 목록과 언어 범위를 확정하고, 인증에도 쓸 사용설명서 초안을 만든다. (T0·DPP 결과로 보완)", "steps": ["권역별 인쇄물·언어 범위 확정 (PROC-16B 기준)", "인쇄물 마스터 리스트 작성·자재코드 생성 요청", "사용설명서·명판 초안 작성", "인쇄물 제작 일정 협의"], "output": "권역별 인쇄물 적용 LIST (확정)\n인쇄물 마스터(공용) 리스트\n사용설명서 초안\n인쇄물 개발 일정표", "example": "", "owner": "상품전략1팀, 커뮤니케이션디자인팀", "role": "인쇄물·언어 범위 확정 / 초안 작성 / 제작 일정 관리", "with": "고객경영본부(CS), 영업기획, 인증담당, 개발본부, 마케팅", "done": ["국가별 인쇄물·언어 범위 확정", "사용설명서 초안 작성", "인쇄물 제작 일정 수립"], "risk": ["□ 추가 런칭 국가·언어 누락 여부", "□ 국가별 인증문구 반영 필요 여부", "□ 공용/국가별 전용 설명서 구분", "□ 디자인팀 인쇄물 리드타임 확보", "※ CFT는 이후 런칭까지 계속 운영"], "sop": "SOP-25D", "prev": "", "pm": "product", "tracks": ["cert", "print"] }, { "id": "PROC-26", "stage": "L4", "when": "T0", "work": "", "name": "T0 샘플 디자인 리뷰 및 사용성 테스트", "purpose": "T0 샘플이 기획안·개발발의서 사양을 반영했는지 확인하고, DPP 진행 가능 여부를 판단한다.", "steps": ["T0 디자인 리뷰 참석", "기획 사양 확인 (외관·핵심 기능·구성품)", "사용성 테스트 (조작·조립·세척)", "문제점 등록"], "output": "T0 검토 결과서\nT0 Issue List", "example": "", "owner": "개발본부", "role": "기획 사양 반영 여부 검토, 문제점 등록", "with": "상품디자인팀", "done": ["기획 사양 검토", "문제점 등록", "DPP 반영 요청"], "risk": ["□ 개발발의서 사양 반영 여부", "□ USP 구현 여부", "□ 고객 입장에서 이해 어려운 요소"], "sop": "", "prev": "기존 29행", "pm": "dev", "tracks": [] }, { "id": "PROC-27", "stage": "L4", "when": "T0", "work": "", "name": "테스트 결과 확인 및 개선 사항 수립", "purpose": "T0 리뷰·테스트 결과를 정리해 DPP에 반영할 개선 사항을 확정한다.", "steps": ["T0 Issue 정리·분류", "개선 우선순위 협의 (개발본부)", "DPP 반영 항목 확정·공유"], "output": "T0 개선 사항 LIST", "example": "", "owner": "상품전략1팀", "role": "개선 사항 정리·요청", "with": "개발본부, 상품디자인팀", "done": ["DPP 반영 항목 확정"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": [] }, { "id": "PROC-28A", "stage": "L4", "when": "T0", "work": "", "name": "PP 샘플 운영 계획 수립", "purpose": "DPP·LPP 샘플 수량·용도와 평가 계획을 미리 정해, 샘플 확보 즉시 평가한다.", "steps": ["평가 대상(법인·CS) 선정", "DPP/LPP 샘플 수량 확인 및 신청", "실사용 평가 양식·일정 수립"], "output": "PP 샘플 운영 계획 (수량·용도·평가 일정)", "example": "", "owner": "상품전략1팀", "role": "샘플 계획 Owner", "with": "법인, 고객경영본부(CS)", "done": ["샘플 수량 신청 완료", "평가 양식·일정 확정"], "risk": ["LPP 샘플: 디스플레이·버튼부 인쇄 언어에 따라 가이드 촬영용 샘플 확보"], "sop": "", "prev": "기존 32행 (N32 → 주의사항)", "pm": "product", "tracks": [] }, { "id": "PROC-28B", "stage": "L4", "when": "T0", "work": "", "name": "사용가이드 영상 기획", "purpose": "CS 고객 배포와 공용으로 쓸 사용가이드 영상을 기획하고 촬영 일정을 확보한다.", "steps": ["영상 촬영 기획안 작성", "CS 담당자와 내용 협의 → 최종 기획안", "촬영 미팅 및 일정 확보"], "output": "영상 촬영 기획안", "example": "", "owner": "고객경영본부(CS)\n상품전략1팀", "role": "기획안 작성", "with": "", "done": ["최종 기획안 확정", "촬영 일정 확보"], "risk": [], "sop": "", "prev": "기존 33행", "pm": "product", "tracks": [] }, { "id": "PROC-28C", "stage": "L4", "when": "T0", "work": "", "name": "제품 소개서 초안 (USP·POD)", "purpose": "고객 언어 중심의 소구점을 정리해, 설명회·영업·마케팅 자료의 기준 문서로 쓴다.", "steps": ["고객 언어 중심 소구점 정리", "비교·증빙 자료 정리", "사용 시나리오 정리", "제품 소개서 v0.5 작성"], "output": "제품 소개서 v0.5 (초안)", "example": "", "owner": "상품전략1팀", "role": "소개서 작성 Owner", "with": "마케팅", "done": ["소개서 초안 완료"], "risk": ["소개서는 하나의 문서로 버전 관리: v0.5(T0) → v1(DPP 설명회) → 최종(출시)"], "sop": "", "prev": "기존 34행", "pm": "product", "tracks": [] }, { "id": "PROC-28D", "stage": "L4", "when": "T0", "work": "", "name": "FAQ 초안 자료 작성", "purpose": "예상 고객 질문과 답변 초안을 만들어 설명회·CS·영업 자료의 기준으로 쓴다.", "steps": ["예상 질문 수집 (기존 모델 CS 문의, T0 이슈)", "핵심 Q&A 초안 작성", "CS 사전 검토"], "output": "FAQ 초안 (핵심 Q&A)", "example": "", "owner": "상품전략1팀", "role": "초안 작성", "with": "고객경영본부(CS)", "done": ["FAQ 초안 작성"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": [] }, { "id": "PROC-29A", "stage": "L4", "when": "DPP", "work": "", "name": "DPP 샘플 점검 및 실사용 평가", "purpose": "DPP 샘플로 기획 사양 구현 여부를 점검하고, 법인·CS·영업의 실사용 평가로 개선점을 찾는다.", "steps": ["샘플 점검 (상품전략1팀)", "법인·CS 실사용 평가", "영업·법인 합동 평가", "평가 결과 취합"], "output": "실사용 평가 결과서", "example": "", "owner": "상품전략1팀", "role": "평가 운영 주관", "with": "법인, 고객경영본부(CS), 영업본부", "done": ["평가 결과 취합 완료"], "risk": [], "sop": "SOP-29A", "prev": "기존 35행 + 36행 (통합)", "pm": "product", "tracks": [] }, { "id": "PROC-29B", "stage": "L4", "when": "DPP", "work": "", "name": "신상품 설명회 (DPP 기준) · 의견 취합 및 후속조치", "purpose": "DPP 샘플 시연으로 특장점·보완점을 공유하고, 마케팅·판매·CS 준비 사항을 도출한다.", "steps": ["신상품 소개자료 준비 (제품 소개서 v1)", "시연 및 설명회 진행", "질의·요청사항 취합", "후속조치 담당·일정 지정"], "output": "신상품 소개자료 (제품 소개서 v1)", "example": "", "owner": "상품전략1팀", "role": "설명회 주관", "with": "제품 관련 전부서", "done": ["설명회 완료", "질의·요청사항 기록"], "risk": [], "sop": "", "prev": "기존 38행 + M47 (목적으로 이동)", "pm": "product", "tracks": [] }, { "id": "PROC-29C", "stage": "L4", "when": "DPP", "work": "", "name": "샘플 테스트", "purpose": "DPP 샘플로 주요 기능·성능 테스트를 진행해 기획 목표 대비 달성 여부를 확인한다.", "steps": ["테스트 항목·기준 설정 (목표 사양 기준)", "기능·성능 테스트 진행", "결과 기록 및 이슈 등록"], "output": "샘플 테스트 결과", "example": "", "owner": "상품전략1팀", "role": "테스트 진행·결과 기록", "with": "개발본부, 품질본부", "done": ["테스트 결과 기록", "이슈 등록"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": [] }, { "id": "PROC-30", "stage": "L4", "when": "DPP", "work": "", "name": "테스트 결과 확인 및 개선 사항 수립", "purpose": "DPP 평가·설명회·테스트 피드백을 한 리스트로 모아, 개선이 필요한 항목을 개발에 요청한다.", "steps": ["피드백 통합 (체크리스트)", "개선 필요 항목 정리 및 개발 요청", "영업 FCST 업데이트 요청"], "output": "피드백·요청사항 체크리스트", "example": "", "owner": "상품전략1팀", "role": "피드백 통합 Owner", "with": "개발본부, 영업기획", "done": ["개선 요청 완료", "FCST 업데이트 요청"], "risk": [], "sop": "", "prev": "기존 37행 + 39행 + M47 (통합)", "pm": "product", "tracks": [] }, { "id": "PROC-31", "stage": "L4", "when": "DPP", "work": "", "name": "부서별 개선방안 작성 및 테스트 결과 피드백 회신", "purpose": "개선 요청에 대한 부서별 개선방안과 반영 결과를 받아 요청 부서에 회신한다.", "steps": ["부서별 개선방안 요청", "개선방안·반영 일정 취합", "요청 부서 피드백 회신", "미반영 항목 사유 기록"], "output": "개선방안 회신표", "example": "", "owner": "상품전략1팀", "role": "회신 취합·공유", "with": "개발본부, 요청 부서", "done": ["전 항목 회신 완료"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": [] }, { "id": "PROC-32A", "stage": "L4", "when": "DPP", "work": "", "name": "QR코드 생성 대상 정리 및 요청", "purpose": "인쇄물·제품에 넣을 QR 대상(영상·매뉴얼·지원 페이지)을 정리해 생성을 요청한다.", "steps": ["QR 적용 인쇄물·위치 정리", "국가·언어별 연결 콘텐츠·URL 정리", "QR 생성 요청 (마케팅)"], "output": "QR 대상 리스트", "example": "", "owner": "상품전략1팀", "role": "QR 대상 정리·요청", "with": "마케팅", "done": ["QR 생성 요청 완료"], "risk": ["인쇄 후에는 QR 변경 불가 — 링크 대상이 바뀌어도 되는 고정 URL(리다이렉트) 사용 권장"], "sop": "", "prev": "", "pm": "product", "tracks": ["print"] }, { "id": "PROC-32B", "stage": "L4", "when": "DPP", "work": "", "name": "법무, 고객경영 등 유관부서 검토", "purpose": "인쇄물의 법적 표기·경고 문구·고객 응대 내용을 디자인 의뢰 전에 검토받는다.", "steps": ["인쇄물 컨텐츠 검토 요청", "부서별 의견 취합", "수정 반영"], "output": "검토 의견 반영 컨텐츠", "example": "", "owner": "상품전략1팀", "role": "검토 요청·반영", "with": "법무팀, 고객경영본부, 해외영업본부", "done": ["부서별 검토 완료"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": ["ip"] }, { "id": "PROC-33", "stage": "L4", "when": "DPP", "work": "", "name": "인쇄물 디자인 의뢰", "purpose": "확정 컨텐츠와 자료를 디자인팀에 전달해, 양산 일정에 맞춰 인쇄물 디자인을 의뢰한다.", "steps": ["디자인 양산 인쇄물 신청서 작성·자재코드 생성 요청", "컨텐츠(PPT)·리스트·STP 파일 전달", "양산 일정별 우선순위 전달"], "output": "디자인 양산 인쇄물 신청서", "example": "", "owner": "상품전략1팀", "role": "디자인 의뢰·자료 전달", "with": "커뮤니케이션디자인팀, 개발본부(STP)", "done": ["디자인 의뢰 완료"], "risk": ["M-4 (출시 4개월 전) 의뢰 기준"], "sop": "SOP-33", "prev": "기존 41행 + 51~53행", "pm": "product", "tracks": ["print"] }, { "id": "PROC-34", "stage": "L4", "when": "DPP", "work": "", "name": "1차 인쇄물 검수", "purpose": "기준 향지(Master) 시안의 내용·사양·표기 오류를 검수한다.", "steps": ["Master 시안 수령", "내용·사양·표기 검수", "수정 요청 취합·전달"], "output": "1차 검수 의견", "example": "", "owner": "상품전략1팀", "role": "검수 주관", "with": "영업, 고객경영본부", "done": ["1차 검수 의견 전달"], "risk": ["Master 확정 이후 번역 진행"], "sop": "SOP-34", "prev": "", "pm": "product", "tracks": ["print"] }, { "id": "PROC-35", "stage": "L4", "when": "DPP", "work": "", "name": "인쇄물 수정", "purpose": "1차 검수 의견을 반영해 Master를 확정하고 국가별 번역본을 만든다.", "steps": ["수정 반영 확인", "Master 확정", "국가별 파생 번역 의뢰·적용"], "output": "수정 시안, 국가별 번역본", "example": "", "owner": "상품전략1팀", "role": "수정·번역 관리", "with": "커뮤니케이션디자인팀, 법인", "done": ["Master 확정", "번역본 적용"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": ["print"] }, { "id": "PROC-36", "stage": "L4", "when": "DPP", "work": "", "name": "2차 인쇄물 검수", "purpose": "수정·번역본 반영 여부와 국가별 표기를 최종 검수한다.", "steps": ["1차 수정 반영 여부 확인", "국가별 번역·인증 문구 검수", "최종 승인"], "output": "최종 검수 완료 파일", "example": "", "owner": "상품전략1팀", "role": "최종 검수", "with": "영업, 고객경영본부, 법인", "done": ["국가별 최종 승인"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": ["print"] }, { "id": "PROC-37A", "stage": "L4", "when": "DPP", "work": "", "name": "LPP 적용 인쇄물 배포", "purpose": "LPP에서 양산품과 같은 상태로 적용할 수 있도록 최종 인쇄물을 배포한다.", "steps": ["최종 인쇄 파일 확정", "생산·구매 배포", "LPP 적용 일정 확인"], "output": "최종 인쇄물 파일, 배포 내역", "example": "", "owner": "상품전략1팀", "role": "배포 관리", "with": "생산, 구매, 커뮤니케이션디자인팀", "done": ["배포 완료"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": ["print"] }, { "id": "PROC-37B", "stage": "L4", "when": "DPP", "work": "", "name": "스티커류 부착 위치 지정", "purpose": "양산 라인에서 스티커가 정확한 위치에 붙도록 기준을 문서로 정한다.", "steps": ["부착 위치 협의 (커뮤니케이션디자인팀, 생산)", "영업 요청 별도 스티커 협의", "부착 위치 지정서 작성·공유"], "output": "스티커류 부착위치 지정서", "example": "", "owner": "상품전략1팀", "role": "지정서 작성", "with": "커뮤니케이션디자인팀, 생산", "done": ["지정서 공유 완료"], "risk": [], "sop": "", "prev": "기존 42행 + 30행 F4 (통합)", "pm": "product", "tracks": ["print"] }, { "id": "PROC-37C", "stage": "L4", "when": "DPP", "work": "승인·보고", "name": "법무·지식재산·고객경영 등 유관부서 검토", "purpose": "출시 자료(USP, 웹기술서 등)의 표현·권리·고객 응대 이슈를 출시 전에 점검한다.", "steps": ["Material별 검토 일정 수립", "부서별 검토 요청", "수정 반영"], "output": "제품 USP, 웹기술서", "example": "", "owner": "마케팅팀", "role": "검토 요청·반영", "with": "법무팀, 지식재산팀, 고객경영본부, 해외영업본부, 상품전략1팀", "done": ["부서별 검토 완료"], "risk": [], "sop": "", "prev": "기존 49행 + 54행", "pm": "product", "tracks": ["ip"] }, { "id": "PROC-38A", "stage": "L4", "when": "LPP", "work": "샘플 평가", "name": "LPP 진행 및 참관", "purpose": "최종 사양 제품·패키지가 양산 라인에서 의도대로 생산되는지 확인한다.", "steps": ["라인 검수 (인쇄물·스티커 부착)", "최종 사양 제품·패키지 검토", "생산 공정도 확인", "이슈 개선 요청"], "output": "샘플 검토서", "example": "", "owner": "개발본부", "role": "인쇄물·패키지·부착 검수", "with": "생산", "done": ["검토서 작성", "이슈 개선 요청"], "risk": [], "sop": "SOP-38A", "prev": "기존 43행", "pm": "dev", "tracks": ["print"] }, { "id": "PROC-38B", "stage": "L4", "when": "LPP", "work": "샘플 평가", "name": "LPP 실사용 테스트 및 점검", "purpose": "LPP 양산품으로 실사용 테스트를 진행해 개선 사항 반영과 최종 품질을 확인한다.", "steps": ["테스트 항목 설정 (DPP 개선 항목 포함)", "실사용 테스트 진행", "결과 기록 및 이슈 요청"], "output": "LPP 점검 결과서", "example": "양식 신규 필요", "owner": "상품전략1팀", "role": "테스트 주관", "with": "고객경영본부(CS), 법인", "done": ["테스트 결과 기록", "이슈 요청 완료"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": [] }, { "id": "PROC-38C", "stage": "L4", "when": "LPP", "work": "영업·출시 지원", "name": "사용가이드 콘텐츠(영상) 제작", "purpose": "PROC-28B 기획안에 따라 LPP 샘플로 사용가이드 영상을 제작한다.", "steps": ["촬영 샘플·일정 확정", "촬영", "편집본 검수 (CS 협의)", "최종본 확정"], "output": "사용가이드 영상", "example": "", "owner": "상품전략1팀", "role": "촬영 진행", "with": "고객경영본부(CS)", "done": ["최종 영상 완료"], "risk": [], "sop": "", "prev": "기존 44행", "pm": "product", "tracks": [] }, { "id": "PROC-39A", "stage": "L4", "when": "LPP", "work": "영업·출시 지원", "name": "영상 업로드 및 국가·언어별 QR코드 연동", "purpose": "사용가이드 영상을 올리고 국가·언어별 QR에 연결해 고객이 바로 볼 수 있게 한다.", "steps": ["국가·언어별 영상 업로드", "QR 연결 URL 설정", "인쇄물 QR 연동 테스트"], "output": "영상 URL·QR 연동 리스트", "example": "", "owner": "상품전략1팀", "role": "업로드·연동 관리", "with": "마케팅, 고객경영본부(CS), 법인", "done": ["국가별 QR 연동 확인"], "risk": [], "sop": "", "prev": "", "pm": "product", "tracks": ["print"] }, { "id": "PROC-39B", "stage": "L4", "when": "LPP", "work": "영업·출시 지원", "name": "고객 대응 FAQ 작성 및 부서 검토", "purpose": "핵심 Q&A와 DPP·LPP 피드백으로 고객 응대용 FAQ를 확정한다.", "steps": ["FAQ 작성 (PROC-28D 초안 + DPP 질의 반영)", "CS·유관부서 검토", "확정·배포"], "output": "고객 FAQ", "example": "", "owner": "고객경영본부(CS)", "role": "FAQ 작성", "with": "상품전략1팀, 유관부서", "done": ["FAQ 배포 완료"], "risk": [], "sop": "", "prev": "기존 45행", "pm": "product", "tracks": [] }, { "id": "PROC-40", "stage": "L5", "when": "LPP", "work": "영업·출시 지원", "name": "런칭 필요 영업 서류 준비", "purpose": "권역·채널별 런칭에 필요한 인증서·리포트를 미리 확보해 입점·출시 지연을 막는다.", "steps": ["권역·채널별 필요 서류 리스트 확인", "추가 필요 서류 확인", "서류 확보 및 전달"], "output": "권역별 런칭 서류 패키지", "example": "", "owner": "상품전략1팀", "role": "서류 취합·전달", "with": "영업본부, 마케팅, 인증담당", "done": ["권역별 서류 전달 완료"], "risk": [], "sop": "SOP-40", "prev": "기존 40행", "pm": "product", "tracks": ["cert"] }, { "id": "PROC-41", "stage": "L5", "when": "양산", "work": "승인·보고", "name": "권역별 출시 준비 및 출시 보고", "purpose": "개발 완료 시점의 변경점·경쟁력·원가를 정리해 출시를 확정하고, 권역별 출시 자료를 배포한다.", "steps": ["출시 준비 문서 작성 (기획안 대비 변경점·POD·원가·경쟁사 MKT)", "출시 보고", "제품 소개서 최종본 배포"], "output": "출시 준비 보고서\n신제품 소개서 (최종)", "example": "", "owner": "상품전략1팀", "role": "보고서 작성·보고", "with": "개발본부, 재무팀", "done": ["출시 확정", "권역별 자료 배포"], "risk": [], "sop": "", "prev": "기존 46행 + 48행 + 55행 (통합)", "pm": "product", "tracks": [], "gate": "G3" }, { "id": "PROC-42", "stage": "L6", "when": "양산", "work": "생산·출시", "name": "초도 생산·출하 확인", "purpose": "초도 생산과 권역별 출하를 확인해 계획한 출시 일정을 지킨다.", "steps": ["초도 생산 일정·수량 확인 (생산)", "권역별 출하 일정 확인 (영업본부)", "초도품 인쇄물·패키지 최종 확인"], "output": "초도 생산·출하 현황", "example": "", "owner": "생산", "role": "출시 일정 관리", "with": "영업본부, 휴롬 개발본부", "done": ["초도 생산 완료", "권역별 출하 완료"], "risk": [], "sop": "", "prev": "기존 56행 (생산 및 출시)", "pm": "product", "tracks": [] }, { "id": "PROC-43A", "stage": "L7", "when": "출시 후", "work": "사후관리", "name": "초기 판매 모니터링", "purpose": "출시 후 주요 권역·채널 판매를 확인해 이상 징후를 빠르게 파악한다.", "steps": ["주요 권역·채널 판매 수량 검토", "계획 대비 차이·이상 징후 공유"], "output": "초기 판매 현황", "example": "", "owner": "상품전략1팀", "role": "모니터링", "with": "영업본부, 마케팅", "done": [], "risk": [], "sop": "", "prev": "기존 57행", "pm": "product", "tracks": [] }, { "id": "PROC-43B", "stage": "L7", "when": "출시 후", "work": "사후관리", "name": "VOC 수집·초기 품질 대응 및 피드백", "purpose": "초기 고객 불만·불량을 분류·대응하고, 미출시 권역에 미리 공유한다.", "steps": ["온라인 리뷰·CS 접수·글로벌 소비자 불만 모니터링", "불량·불편 사례 분류 및 대응", "초기 출시 권역 사례 미출시 권역 공유"], "output": "VOC 분석 리포트", "example": "", "owner": "상품전략1팀", "role": "VOC 분석·공유", "with": "개발본부, 고객경영본부", "done": [], "risk": [], "sop": "", "prev": "기존 58행", "pm": "product", "tracks": [] }, { "id": "PROC-44", "stage": "L7", "when": "출시 후", "work": "사후관리", "name": "반기 Post-Mortem 리뷰", "purpose": "반기 단위로 출시 제품의 목표 대비 결과를 돌아보고 프로세스를 개선한다.", "steps": ["목표 대비 결과 정리", "잘된 점·문제점 도출", "개선 액션 프로세스 반영"], "output": "반기 리뷰 자료", "example": "", "owner": "상품전략1팀", "role": "리뷰 주관", "with": "-", "done": ["개선 액션 프로세스 반영"], "risk": [], "sop": "", "prev": "기존 60행 (Post-Morterm → Post-Mortem 오타 수정)", "pm": "product", "tracks": [] }];
exports.L_SOPS = { "PROC-01": { "id": "SOP-01", "name": "권역·채널별 영업 및 바이어 요구사항 취합", "steps": [{ "no": 1, "title": "개발 요청 접수 (신규/파생/ODM 구분)", "detail": ["개발의뢰서(FORM)로 접수 (메일·구두 요청도 FORM 등록 요청)", "요청 유형 구분: 신규 / 파생 / ODM"], "check": ["□ 요청 부서·요청자·희망 일정 기재 여부"] }, { "no": 2, "title": "권역·채널별 영업·바이어 요구사항 취합", "detail": ["권역·채널·거래선별 요구 사양, 목표 가격, 예상 수량, 희망 출시 시점 취합", "바이어 요청 자료(메일·미팅록) 첨부"], "check": ["□ 근거 자료 첨부"] }, { "no": 3, "title": "요구 우선순위·희망 일정 정리", "detail": ["공통 요구 / 권역 전용 요구 구분", "수량·매출 영향 기준으로 우선순위 표시"], "check": [] }, { "no": 4, "title": "담당자 지정 및 착수 범위 확정", "detail": ["담당자 지정 후 요청 부서에 범위·일정 회신", "범위 밖 요청은 사유와 함께 회신"], "check": ["□ 요청 부서 회신 완료"] }] }, "PROC-02C": { "id": "SOP-02C", "name": "경쟁 모델 벤치마킹 및 분석", "steps": [{ "no": 1, "title": "조사 범위 선정", "detail": ["대상 제품군, 권역 국가, 조사 항목 설정 (시장규모, CAGR, 주요 브랜드, 유통채널, 소비자 트렌드)"], "check": [] }, { "no": 2, "title": "시장 규모·성장세·채널·규제 조사", "detail": ["AI 기반 1차 리서치: ChatGPT, Perplexity, Claude 등 생성형 AI로 초기 정보 수집", "2차 검증 및 정량 자료 확보: 시장조사 사이트, KOTRA, 무역협회, 이커머스 가격조사"], "check": ["AI 결과는 출처 확인 후 사용"] }, { "no": 3, "title": "경쟁 제품 비교 분석", "detail": ["비교 항목: 사양·가격·기능(차별화)·사용성·디자인·소구점·VOC", "비교 대상: 권역별 판매 상위 브랜드 + 직접 경쟁 모델"], "check": [] }, { "no": 4, "title": "해외 소비자 평가 조사", "detail": ["소비자 리뷰 및 VOC 리서치: Consumer Reports / Test.de / Choice / Wirecutter"], "check": ["PROC-02D와 함께 활용"] }, { "no": 5, "title": "시장조사 보고서 작성", "detail": ["구조화 및 가설 설정 → 최종 정리 및 보고서 제출"], "check": ["산출물: 시장조사 보고서", "시장규모·CAGR 근거 출처 명시"] }] }, "PROC-02D": { "id": "SOP-02D", "name": "영업/고객 VOC·Pain Point 분석", "steps": [{ "no": 1, "title": "자사(국내/해외) VOC·현지 CS 이슈 수집", "detail": ["고객경영본부에 기존 모델 VOC·CS 접수 데이터 요청", "법인 CS 이슈 수집"], "check": ["□ 조회 기간·권역 명시"] }, { "no": 2, "title": "영업 VOC 수집 (거래선 요구, 판매 현장 불만)", "detail": ["영업본부·법인에 거래선 요구, 판매 현장 불만·요청 수집", "구두 의견은 출처(거래선·담당자) 기록"], "check": [] }, { "no": 3, "title": "온라인 리뷰 조사", "detail": ["판매 사이트·커뮤니티 리뷰 (자사·경쟁 모델)", "반복 불만 키워드 정리"], "check": [] }, { "no": 4, "title": "Pain Point 리스트 작성 및 우선순위 정리", "detail": ["유형 분류: 성능 / 사용성 / 세척·관리 / 품질 / 가격", "빈도·심각도 기준 우선순위", "출처 구분 표기 (고객 VOC / 영업 VOC)"], "check": ["□ 상위 Pain Point 신제품기획안 반영"] }] }, "PROC-08": { "id": "SOP-08", "name": "컨셉·수익성·투자 타당성 검토", "steps": [{ "no": 1, "title": "사업성 자료 작성 (판매가·원가·MOQ·개발비·금형비)", "detail": ["권역별 판매가, 예상 원가(재료비), MOQ, 개발비, 금형비 정리"], "check": ["□ 판매가·원가 근거 출처 명시"] }, { "no": 2, "title": "매출·공헌이익·투자 회수 시점 산출", "detail": ["권역별 예상 판매 수량 × 판매가로 매출 산출", "공헌이익 = 매출 − 변동비", "금형·개발 투자비 회수 시점 계산"], "check": ["□ 산식 재무팀 확인"] }, { "no": 3, "title": "일정·핵심 리스크 정리", "detail": ["개발~출시 일정", "기술·원가·인증·공급 리스크와 대응안"], "check": [] }, { "no": 4, "title": "심의 및 결과 기록", "detail": ["승인 / 조건부 승인 / 보완 / 보류 중 결정 기록", "조건·보완 사항은 담당·기한 지정"], "check": ["□ 결정 사항 Teams 채널 공유"] }] }, "PROC-14": { "id": "SOP-14", "name": "사전 검토 단계, 개발 일정 수립", "steps": [{ "no": 1, "title": "부서별 요구사항 요청 (공통 양식)", "detail": ["대상: AS, 고객만족팀, 글로벌 고객만족팀, 품질본부, 구매자재팀, 생산팀", "공통 양식 항목: 요구 내용 / 근거(이슈·데이터) / 중요도 / 요청 부서"], "check": ["※ 부서마다 Format이 달라 최초 258건 취합 → 공통 양식 사용 (Lesson Learned)"] }, { "no": 2, "title": "요구 취합·중복 정리", "detail": ["중복·유사 요구 통합", "기존 모델 이슈 / 신규 요구 구분"], "check": [] }, { "no": 3, "title": "개발 요청 사항 LIST 확정", "detail": ["반영 / 검토 / 미반영 구분", "미반영 사유 기록 후 요청 부서 회신"], "check": ["□ 요청 부서 회신"] }, { "no": 4, "title": "개발 일정·범위 사전 협의", "detail": ["개발본부와 일정·범위 협의", "확정 내용 신제품기획안 반영"], "check": [] }] }, "PROC-18": { "id": "SOP-18", "name": "개발발의서 작성 및 상신", "steps": [{ "no": 1, "title": "개발발의서 작성 (사양, 구성품, 인쇄물 패키지(PROC-16B), 도입 권역, 인증 계획)", "detail": ["개발발의서 필수 포함 항목 작성:", "개발 일정", "개발 투자비 (금형비, 3자 평가·인증 비용 등)", "상세 요구 사양 (기능, 스펙, 컬러), 구성품", "필수 인증 및 3자 평가 계획", "패키지 구성 (국가 공용 여부 검토) 계획", "타깃 고객 및 포지셔닝, 차별화 포인트", "예상 가격대 및 판매 권역", "경쟁 제품 대비 차별점", "영업 계획 (국가/채널별 영업계획 수립 요청(법인 Default), 최초 출시 판매 계획 첨부)"], "check": [] }, { "no": 2, "title": "결재 상신", "detail": ["결재선: 담당자 → 팀장/본부장 → 대표이사", "공람: 휴롬엘에스 전부서"], "check": ["결재선 누락 여부 확인"] }, { "no": 3, "title": "휴롬 개발·품질·생산본부 개발 의뢰", "detail": ["결재 후 휴롬 개발본부, 품질본부, 생산본부에 개발 의뢰 (메일 접수)"], "check": [] }, { "no": 4, "title": "변경점 발생 시 변경 개발발의 기안", "detail": ["변경점 발생 시 변경 개발발의 기안"], "check": [] }] }, "PROC-20B": { "id": "SOP-20B", "name": "시제품 품평 및 제품 사양 합의", "steps": [{ "no": 1, "title": "평가 일정 수립", "detail": ["3D 프린팅 시제품(목업) 확보 수량·일정 확인", "비교 대상(기존 모델·레퍼런스 제품) 확보", "참석 부서(영업본부·고객경영본부) 일정 조율"], "check": [] }, { "no": 2, "title": "성능 비교 테스트 진행", "detail": ["착즙·소르베 등 주요 기능 성능 비교", "측정 항목 예: 착즙률, 소요 시간, 소음, 조립·분해·세척 시간"], "check": ["□ 같은 재료·조건으로 비교"] }, { "no": 3, "title": "품평 및 의견 취합", "detail": ["기존 모델·레퍼런스 대비 성능·사용성 평가", "부서별 관점: CS(예상 문의·오사용), AS(분해·수리성), 영업(소구점)"], "check": ["의견 취합표 사용"] }, { "no": 4, "title": "개선 요구사항 도출 및 제품 사양 합의", "detail": ["개선 항목 우선순위 정리", "개발본부와 반영 여부 협의", "합의 사양·미반영 사유 기록"], "check": ["※ 사양 이견 시 후속 조치·결정권자 지정"] }] }, "PROC-22": { "id": "SOP-22", "name": "구성품 표준 명칭 확정", "steps": [{ "no": 1, "title": "주요 부품 LIST 확인 (개발본부)", "detail": ["개발본부 BOM 기준 주요 부품 LIST 수령", "고객이 직접 만지는 부품(분리·세척·교체) 우선"], "check": [] }, { "no": 2, "title": "한·영·중 표준 명칭 정의", "detail": ["기존 모델 사용설명서·AS 부품명과 대조", "원칙: 같은 부품은 모든 문서에서 같은 이름", "영·중은 법인 사용 용어 확인"], "check": ["□ 기존 모델과 다른 명칭은 사유 기록"] }, { "no": 3, "title": "유관부서 검토 및 명칭 확정", "detail": ["검토: 개발본부(BOM), 고객경영본부(AS), 법인(현지 용어)"], "check": [] }, { "no": 4, "title": "표준 명칭 적용 기준 공유", "detail": ["사용설명서·명판·AS 문서·영업 자료에 적용", "변경 시 명칭 LIST 버전 관리"], "check": ["□ PROC-25D 인쇄물 초안에 적용"] }] }, "PROC-23": { "id": "SOP-23", "name": "금형 제작 계약 체결", "steps": [{ "no": 1, "title": "금형 투자 대상 확인", "detail": ["금형 투자 대상 여부 확인: 개발발의서 검토, 신규 제작 금형 항목 확인"], "check": [] }, { "no": 2, "title": "업체 정보·견적 수령", "detail": ["금형 업체 선정 결과 접수 및 업체 정보 수령", "휴롬 개발본부 또는 구매 담당에게 선정된 금형 업체 연락처 입수", "금형 업체 담당자에게 요청: 금형업체명, 사업자등록증, 대표자명, 업체 담당자 정보, 견적서, 금형 제작 일정"], "check": [] }, { "no": 3, "title": "법무팀 계약서 검토 의뢰", "detail": ["법무팀 업무 의뢰", "법무팀 요청 게시판 또는 메일 (위 자료 첨부)", "휴롬엘에스 금형 및 구매거래계약 양식 기준, 법무팀 수정사항 확인"], "check": ["기본 구매 거래계약서, 금형 제작 계약서"] }, { "no": 4, "title": "업체 검토·수정 협의", "detail": ["금형업체에 계약서 송부 → 회신 수령 후 수정 협의"], "check": [] }, { "no": 5, "title": "계약 체결", "detail": ["최종 협의된 사항으로 법무팀에 계약 체결 요청"], "check": ["산출물: 금형 및 구매거래계약서, 기안서(계약 체결용)"] }] }, "PROC-24": { "id": "SOP-24", "name": "금형 투자비 집행 및 자산 등록", "steps": [{ "no": 1, "title": "계약금 전자세금계산서 요청", "detail": ["금형업체에 계약금 전자세금계산서 요청 (계약서 명시 계약금 지급 비율 확인)"], "check": ["□ 계약서 기준 계약금 비율과 지급 금액 일치 여부"] }, { "no": 2, "title": "ERP 전표 등록", "detail": ["계정과목: 선급금 / 선급금 세목: 고정자산", "부가세 대급금 증빙: 세금계산서(일반과세)-전자"], "check": ["□ 계정과목 '선급금' 적용", "□ 세목 '고정자산' 적용", "※ 오등록 시 회계 처리 오류 발생 가능"] }, { "no": 3, "title": "지출결의서 상신", "detail": ["결재선: 담당자 → 팀장/본부장 → 대표이사", "첨부: 전자세금계산서, 금형리스트, 견적서, 관련문서(개발발의, 금형 제작 및 구매 계약서)"], "check": ["□ 결재선 누락 여부"] }, { "no": 4, "title": "지급 완료 확인·이체증 수령", "detail": ["재무팀 지급 완료 확인 및 이체증 수령"], "check": ["□ 이체 완료 여부"] }, { "no": 5, "title": "업체 송금 완료 안내", "detail": ["업체 송금 완료 메일 발송 (이체증 첨부, 개발 담당자 참조)"], "check": ["※ 이체증 미전달 시 업체 확인 요청 반복 발생"] }] }, "PROC-25D": { "id": "SOP-25D", "name": "인쇄물 목록 작성 및 사용설명서 초안\n(인증 사용 겸용) 제작", "steps": [{ "no": 1, "title": "권역별 인쇄물·언어 범위 확정 (PROC-16B 기준)", "detail": ["PROC-16B 초안 기준, 개발발의 후 변경 사항 반영", "공용 / 국가 전용 설명서 구분 확정"], "check": ["□ 추가 런칭 국가·언어 누락 여부"] }, { "no": 2, "title": "인쇄물 마스터 리스트 작성·자재코드 생성 요청", "detail": ["인쇄물 마스터(공용) 리스트 작성", "신규 자재코드 생성 요청"], "check": [] }, { "no": 3, "title": "사용설명서·명판 초안 작성", "detail": ["PROC-22 표준 명칭 적용", "인증 접수용으로 겸용 (PROC-25C)", "T0·DPP 결과로 보완"], "check": ["□ 국가별 인증 문구 반영"] }, { "no": 4, "title": "인쇄물 제작 일정 협의", "detail": ["컨텐츠 전달, 시안, 검수, 번역, LPP 적용 일정 협의", "디자인팀 리드타임 확보"], "check": [] }] }, "PROC-29A": { "id": "SOP-29A", "name": "DPP 샘플 점검 및 실사용 평가", "steps": [{ "no": 1, "title": "샘플 점검 (상품전략1팀)", "detail": ["기획 사양 대비 외관·핵심 기능·구성품 점검", "T0 개선 사항 반영 여부 확인"], "check": [] }, { "no": 2, "title": "법인·CS 실사용 평가", "detail": ["PROC-28A 평가 양식·일정 기준으로 진행", "실제 사용 환경에서 평가"], "check": ["실사용평가 FORMAT 참조"] }, { "no": 3, "title": "영업·법인 합동 평가", "detail": ["시연 및 합동 평가", "권역별 요구 사양 충족 여부 확인"], "check": [] }, { "no": 4, "title": "평가 결과 취합", "detail": ["항목별 점수·의견 취합", "사용설명서·가이드 추가 필요 내용 정리"], "check": ["→ PROC-30 개선 요청으로 연결"] }] }, "PROC-33": { "id": "SOP-33", "name": "인쇄물 디자인 의뢰", "steps": [{ "no": 1, "title": "디자인 양산 인쇄물 신청서 작성·자재코드 생성 요청", "detail": ["출시 우선순위 최종 확정 (영업팀 검토)", "디자인 양산 인쇄물 신청서 작성, 신규 자재코드 생성 요청, 영업에 배포"], "check": [] }, { "no": 2, "title": "컨텐츠(PPT)·리스트·STP 파일 전달", "detail": ["PPT 컨텐츠 정리, 리스트와 STP 파일(개발에서 수령) 디자인팀 전달"], "check": [] }, { "no": 3, "title": "양산 일정별 우선순위 전달", "detail": ["인쇄물 디자인 의뢰 (양산 일정별 우선순위 전달)"], "check": ["M-4 (출시 4개월 전) 의뢰 기준"] }] }, "PROC-34": { "id": "SOP-34", "name": "1차 인쇄물 검수", "steps": [{ "no": 1, "title": "Master 시안 수령", "detail": ["기준 향지로 Master 제작본 수령"], "check": [] }, { "no": 2, "title": "내용·사양·표기 검수", "detail": ["1차 마스터 인쇄물 검수 (상품전략, 각 영업, ChatGPT 활용)", "확인: 표준 명칭(PROC-22), 사양 수치, 경고·인증 문구, QR"], "check": [] }, { "no": 3, "title": "수정 요청 취합·전달", "detail": ["검수 의견 취합 후 디자인팀 전달"], "check": ["Master 확정 이후 번역 진행"] }] }, "PROC-38A": { "id": "SOP-38A", "name": "LPP 진행 및 참관", "steps": [{ "no": 1, "title": "라인 검수 (인쇄물·스티커 부착)", "detail": ["인쇄물·스티커 부착 위치 확인 (PROC-37B 지정서 기준)", "패키지 구성품 누락 여부"], "check": [] }, { "no": 2, "title": "최종 사양 제품·패키지 검토", "detail": ["개발발의서·최종 사양서 대비 외관·컬러·구성품 확인", "국가별 패키지·인쇄물 적용 확인"], "check": [] }, { "no": 3, "title": "생산 공정도 확인", "detail": ["조립·포장 공정 순서 확인", "고객 영향 공정(부착·포장) 중점"], "check": [] }, { "no": 4, "title": "이슈 개선 요청", "detail": ["샘플 검토서 작성", "양산 전 조치 필요 항목 개발·생산에 요청"], "check": ["□ 이슈 조치 일정 확인"] }] }, "PROC-40": { "id": "SOP-40", "name": "런칭 필요 영업 서류 준비", "steps": [{ "no": 1, "title": "권역·채널별 필요 서류 리스트 확인", "detail": ["권역 및 채널별 런칭 전 필요 서류 리스트 확인 (영업, 마케팅)", "권역별 기본 서류", "· 한국: KC 인증서, 식품접촉부 Test Report, 전자파적합등록인증서", "· 중국: CCC 인증서, RoHS", "· 유럽: CB Report, CE 인증서, PPWR 서류", "· 미국: (확인 필요)"], "check": ["권역 추가 시 이 목록에 계속 추가"] }, { "no": 2, "title": "추가 필요 서류 확인", "detail": ["추가 필요 서류 확인"], "check": [] }, { "no": 3, "title": "서류 확보 및 전달", "detail": ["서류 확보 후 영업·법인 전달", "전달 이력 기록"], "check": ["□ 권역별 전달 완료"] }] } };
exports.L_TERMS = [{ "term": "G1 / G2 / G3", "mean": "의사결정 Gate. G1 기획 승인, G2 개발발의 승인, G3 출시 승인. Gate를 통과해야 다음 단계로 넘어감", "where": "PROC-12, 18, 41" }, { "term": "T0", "mean": "금형 제작 후 처음 사출한 시제품 (첫 시사출). 외관·구조·기획 사양 반영 여부를 처음 확인하는 시점", "where": "PROC-26 (④ 개발·검증)" }, { "term": "PP", "mean": "Pilot Production. 양산 전 시험 생산. DPP·LPP로 구분", "where": "PROC-28A" }, { "term": "DPP", "mean": "Design Pilot Production(사내 정의 확인 필요). 설계 검증용 시험 생산 샘플로 실사용 평가·인증 접수에 사용", "where": "PROC-29A~31 (④ 개발·검증)" }, { "term": "LPP", "mean": "Line Pilot Production(사내 정의 확인 필요). 실제 양산 라인에서의 시험 생산. 최종 패키지·인쇄물 적용 확인", "where": "PROC-38A~38C (④ 개발·검증)" }, { "term": "CFT", "mean": "Cross Functional Team. 여러 부서가 함께 참여하는 협업 조직. 여기서는 인쇄물·런칭 준비를 위한 휴롬엘에스 내부 협의체", "where": "PROC-25B" }, { "term": "USP", "mean": "Unique Selling Point. 경쟁 제품과 구분되는 핵심 판매 소구점", "where": "PROC-07, 28C" }, { "term": "POD", "mean": "Point of Difference. 경쟁 제품 대비 차별점", "where": "PROC-02B, 41" }, { "term": "VOC", "mean": "Voice of Customer. 고객 리뷰·불만·요구", "where": "PROC-02D, 43B" }, { "term": "개발발의", "mean": "확정된 사양·투자·일정으로 개발 착수를 공식 결재받는 절차", "where": "PROC-18" }, { "term": "Pre-Kick Off", "mean": "개발 착수 전 사전 착수 회의. 부서별 요구를 미리 취합", "where": "PROC-14" }, { "term": "Pivoting", "mean": "검토 결과에 따른 사양·디자인 방향 조정", "where": "PROC-15" }, { "term": "명판", "mean": "제품에 부착되는 정격·인증 정보 라벨", "where": "PROC-25C, 25D" }, { "term": "향지 / Master", "mean": "번역 전 기준이 되는 원본 언어 인쇄물", "where": "PROC-34, 35" }, { "term": "M-4", "mean": "출시(Market) 4개월 전", "where": "PROC-33" }, { "term": "FCST", "mean": "Forecast. 영업 판매 예측 수량", "where": "PROC-16A, 30" }, { "term": "AAR", "mean": "After Action Review. 런칭 후 1회 실시하는 회고", "where": "(현재 개정안에서 제외)" }, { "term": "Post-Mortem", "mean": "반기 단위 정기 회고", "where": "PROC-44" }, { "term": "PPWR", "mean": "EU 포장 및 포장폐기물 규정 (Packaging and Packaging Waste Regulation)", "where": "SOP-40" }, { "term": "STP 파일", "mean": "3D CAD 표준 파일 형식. 인쇄물·패키지 디자인용으로 개발에서 수령", "where": "PROC-33" }];
exports.L_LESSONS = [{ "task": "PROC-14", "project": "", "date": "", "text": "부서마다 요청 Format이 없고, 걸러내는 작업이 안 됨. 최초 총 258건 취합됨", "fix": "부서 요구 취합 양식 통일 (PROC-14, SOP-14)", "by": "" }, { "task": "PROC-24", "project": "", "date": "", "text": "ERP 계정과목 또는 선급금 세목 오등록 시 회계 처리 오류 발생 가능", "fix": "SOP-24 확인 포인트에 반영", "by": "" }, { "task": "PROC-24", "project": "", "date": "", "text": "지급 완료 후 이체증 미전달 시 업체 확인 요청 반복 발생", "fix": "SOP-24 5단계에 반영", "by": "" }, { "task": "PROC-25B", "project": "", "date": "", "text": "초기에는 디자인 및 CS 중심으로 운영하고, 제품 방향이 구체화되면 영업부서 추가 참여", "fix": "PROC-25B 주의사항에 반영", "by": "" }, { "task": "PROC-28A", "project": "", "date": "", "text": "LPP 샘플의 경우 디스플레이, 버튼부 인쇄 언어에 따라 가이드 촬영용 샘플 확보", "fix": "PROC-28A 주의사항에 반영", "by": "" }];
exports.L_OPEN = ["PROC-02B (글로벌/주요 국가 시장조사): 새 엑셀에도 실행 절차·주관 부서가 비어 있습니다.", "인증 버튼: 이 엑셀엔 KC·CE 같은 실제 인증 시험 업무가 없습니다(개발 스케줄 '인증'에 있음). 지금은 인증 화면 아래에 개발 스케줄 인증 진행을 같이 보여 줍니다.", "DPP / LPP 의 사내 정식 정의 ('용어집')."];
exports.L_PMS = [{ key: 'product', label: '상품 PM', org: '상품전략1팀' }, { key: 'dev', label: '개발 PM', org: '개발본부' }];
exports.L_TRACKS = [{ "key": "cert", "label": "인증", "tasks": ["PROC-25C", "PROC-25D", "PROC-40"] }, { "key": "print", "label": "인쇄물", "tasks": ["PROC-16A", "PROC-22", "PROC-25C", "PROC-25D", "PROC-32A", "PROC-33", "PROC-34", "PROC-35", "PROC-36", "PROC-37A", "PROC-37B", "PROC-38A", "PROC-39A"] }, { "key": "ip", "label": "지재권", "tasks": ["PROC-10B", "PROC-32B", "PROC-37C"] }];
exports.L_TIMING = [{ "what": "패키지/인쇄물 구성 리스트업", "when": "M-4" }, { "what": "최종 확정 및 배포", "when": "양산 - 2M" }, { "what": "- 주요 권역 및 채널 판매 수량 검토", "when": "M+3M" }, { "what": "Post-Morterm Review", "when": "반기" }];
// 동시 진행 묶음: 같은 번호에 A·B·C가 붙은 업무(02A~02D 등)는 같이 진행 (봉구 정리 juicer-process.json parallelGroup, 2026-10-29)
const parallelOf = (id) => {
    const m = /^(PROC-\d+)[A-Z]$/.exec(id || '');
    if (!m)
        return undefined;
    const n = exports.L_TASKS.filter(t => t.id.indexOf(m[1]) === 0 && /^[A-Z]$/.test(t.id.slice(m[1].length))).length;
    return n > 1 ? m[1].replace('PROC-', '') : undefined;
};
exports.parallelOf = parallelOf;
// ── 1.0.47 PM 2명 · 인증/인쇄물/지재권 묶음 (심준보 2026-10-30 msg 8126341, 봉구 juicer-process-v2.json)
const pmLabel = (pm) => (pm === 'dev' ? '개발 PM' : pm === 'both' ? '상품·개발 PM' : '상품 PM');
exports.pmLabel = pmLabel;
// 프로젝트에 적힌 실명 — 같이(both)면 둘 다
const pmName = (pj, pm) => !pj ? '' : pm === 'dev' ? pj.pmDev || '' : pm === 'product' ? pj.pmProduct || '' : [pj.pmProduct, pj.pmDev].filter(Boolean).join('·');
exports.pmName = pmName;
// 로그인한 사람이 맡은 PM 쪽 (이름이 들어 있으면)
const myPms = (pj, who) => {
    const w = (who || '').replace(/\s+/g, '');
    if (!pj || !w)
        return [];
    const hit = (n) => { const x = (n || '').replace(/\s+/g, ''); return !!x && (x.indexOf(w) >= 0 || w.indexOf(x) >= 0); };
    return ['product', 'dev'].filter(k => hit(k === 'dev' ? pj.pmDev : pj.pmProduct));
};
exports.myPms = myPms;
const isMine = (t, mine) => mine.length > 0 && (t.pm === 'both' || mine.indexOf(t.pm) >= 0);
exports.isMine = isMine;
const trackOf = (key) => exports.L_TRACKS.filter(x => x.key === key)[0];
exports.trackOf = trackOf;
// 새 엑셀에서 합쳐진 업무 — 옛 id → 새 id (체크·담당·파일은 새 id로)
exports.L_MERGED = { 'PROC-16B': 'PROC-16A' };
const orgSides = (txt) => {
    const o = [];
    if (/개발본부|품질|생산|개발팀|금형|구매/.test(txt || ''))
        o.push('hurom');
    if (/상품전략|디자인|마케팅|고객경영|영업|커뮤니케이션|CS/.test(txt || ''))
        o.push('hls');
    return o;
};
exports.orgSides = orgSides;
const sideOf = (t) => (t.pm === 'both' ? ['hls', 'hurom'] : t.pm === 'dev' ? ['hurom'] : ((0, exports.orgSides)(t.owner).length ? (0, exports.orgSides)(t.owner) : ['hls']));
exports.sideOf = sideOf;
const withSides = (t) => (0, exports.orgSides)(t.with).filter(x => (0, exports.sideOf)(t).indexOf(x) < 0);
exports.withSides = withSides;

};
__m["src/webparts/huromDevHub/model/juicerLaunch.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LAUNCH_DAYS = exports.ENG_DONE_BY = exports.ENG_PHASES = exports.juicerFields = exports.GATE_SPAN = exports.LAUNCH_CRITICAL = exports.launchPath = exports.taskFolder = exports.stageFolder = exports.launchTask = exports.isJuicer = exports.hasOldLaunchIds = exports.LAUNCH_FOLDER = void 0;
exports.mergeOldLaunchIds = mergeOldLaunchIds;
exports.engPhasesFor = engPhasesFor;
exports.buildJuicerPlan = buildJuicerPlan;
exports.timingChecks = timingChecks;
exports.juicerRisks = juicerRisks;
const schedule_1 = require("src/webparts/huromDevHub/model/schedule.js");
const regions_1 = require("src/webparts/huromDevHub/model/regions.js");
const launch_1 = require("src/webparts/huromPlm/model/launch.js");
const juicer_1 = require("src/webparts/huromPlm/model/juicer.js");
// 원액기군 = 상품전략1팀 '기획·개발·런칭 프로세스 개정안 (1028)' 7단계 · G1~G3 · 업무 68개 (심준보 2026-10-29 msg 7987500 "꼼꼼히 전부 적용")
// 개발본부 일(설계·금형·T0·T(n)·PP·선행양산·양산)은 R12 표준 일정(개발 발의일 D+일)을 그대로 씀. DPP = R12 PP, LPP = R12 선행양산으로 맞춤
// 추천 일정 = 처음 등록할 때 바로 보임 (msg 7987745 "첨에 할 때 추천일정 뜨게")
exports.LAUNCH_FOLDER = '기획·런칭';
// 1.0.47 새 엑셀(AI업로드용)에서 PROC-16B가 16A에 다시 합쳐짐 — 16B에 있던 상태·체크·담당·기한을 16A로 옮기고 16B 줄은 뺌
const hasOldLaunchIds = (p) => (p.checklist || []).some(c => !!launch_1.L_MERGED[c.id]);
exports.hasOldLaunchIds = hasOldLaunchIds;
function mergeOldLaunchIds(p) {
    if (!(0, exports.hasOldLaunchIds)(p))
        return p;
    let cl = p.checklist.filter(c => !launch_1.L_MERGED[c.id]);
    const what = [];
    p.checklist.filter(c => !!launch_1.L_MERGED[c.id]).forEach(o => {
        const to = launch_1.L_MERGED[o.id];
        const cur = cl.filter(c => c.id === to)[0];
        what.push(`${o.id} → ${to}`);
        if (!cur) {
            cl = cl.concat([Object.assign(Object.assign({}, o), { id: to })]);
            return;
        }
        const rank = { todo: 0, blocked: 1, doing: 2, na: 3, done: 3 };
        // 16A가 안 끝났는데 16B는 진행·완료이면 16A는 '진행 중' (합쳐진 뒤 16A 일이 더 많아서 완료로 올리진 않음)
        const status = cur.status === 'todo' && rank[o.status] >= 2 ? 'doing' : cur.status;
        const checks = cur.checks && Object.keys(cur.checks).length ? cur.checks : o.checks;
        cl = cl.map(c => (c.id === to ? Object.assign(Object.assign({}, c), { status, owner: c.owner || o.owner, due: c.due || o.due, link: c.link || o.link, note: [c.note, o.note].filter(Boolean).join(' / ') || undefined, checks }) : c));
    });
    return Object.assign(Object.assign({}, p), { checklist: cl, log: [{ at: new Date().toISOString(), who: 'PLM', what: `업무 합침 (새 프로세스 엑셀): ${what.join(', ')}` }].concat(p.log || []) });
}
const isJuicer = (x) => x.line === 'juicer';
exports.isJuicer = isJuicer;
const launchTask = (id) => launch_1.L_TASKS.filter(t => t.id === id)[0];
exports.launchTask = launchTask;
const stageFolder = (stageId) => {
    const s = launch_1.L_STAGE_DATA.filter(x => x.id === stageId)[0];
    return s ? `${s.no} ${s.label}` : stageId;
};
exports.stageFolder = stageFolder;
// SharePoint 폴더 이름에 못 쓰는 글자 빼고 짧게: 'PROC-07 제품 컨셉 구체화 및 개발 방향성 수립'
// 1.0.104 업무 이름에서 [G1]·[G2]·[G3]를 뺐지만 SharePoint 폴더 이름은 그대로 (이미 올린 파일 경로 유지)
const OLD_FOLDER_NAME = { 'PROC-12': '[G1] 경영진 보고 및 컨펌', 'PROC-18': '[G2] 개발발의서 작성 및 상신', 'PROC-41': '[G3] 권역별 출시 준비 및 출시 보고' };
const taskFolder = (t) => `${t.id} ${(OLD_FOLDER_NAME[t.id] || t.name).replace(/["*:<>?/\\|#%~&{}]+/g, ' ').replace(/\s+/g, ' ').trim()}`.slice(0, 60).trim();
exports.taskFolder = taskFolder;
// PLM 자료 / 원액기군 / 모델 / 기획·런칭 / 1 컨셉·기획 / PROC-07 …
const launchPath = (t) => [exports.LAUNCH_FOLDER, (0, exports.stageFolder)(t.stage), (0, exports.taskFolder)(t)];
exports.launchPath = launchPath;
// 결재·계약·보고 문서 = 파일이 있어야 G1·G2·G3 통과 ('필수'). 나머지는 체크만
exports.LAUNCH_CRITICAL = ['PROC-07', 'PROC-08', 'PROC-12', 'PROC-13', 'PROC-14', 'PROC-17', 'PROC-18', 'PROC-19', 'PROC-21', 'PROC-23', 'PROC-24',
    'PROC-26', 'PROC-29A', 'PROC-36', 'PROC-38A', 'PROC-40', 'PROC-41'];
// G1은 ①, G2는 ②, G3는 ③④⑤ 를 모두 보고 결정 (③④에는 결재 Gate가 없음)
exports.GATE_SPAN = { G1: ['L1'], G2: ['L2'], G3: ['L3', 'L4', 'L5'] };
// R12 개발 구분(9개) → 등급. 원액기 프로젝트는 이걸로 R12 단계(T0 있음/없음 등)를 정함
const juicerFields = (ctx) => ({
    devKind: ctx.devKind || (juicer_1.DEV_KINDS.filter(k => k.grade === (ctx.grade || 'A'))[0] || juicer_1.DEV_KINDS[0]).id,
    devBy: ctx.devBy === 'oem' ? 'oem' : 'hurom',
});
exports.juicerFields = juicerFields;
exports.ENG_PHASES = [
    { id: 'J-ENG', r12: 'eng', name: '개발본부 · 제품설계·목업·설계 품평 (R12 제품설계)', from: 0, to: 18, stage: 'L3' },
    { id: 'J-MOLD', r12: 'mold', name: '개발본부 · 금형 설계·제작 (R12 금형개발)', from: 18, to: 63, stage: 'L4' },
    { id: 'J-T0', r12: 't0', name: '개발본부 · T0 시사출·평가·금형 수정 (R12 T0)', from: 63, to: 79, stage: 'L4' },
    { id: 'J-TN', r12: 'tn', name: '개발본부 · T(n) 시사출·평가·금형 수정 (R12 T(n))', from: 79, to: 115, stage: 'L4' },
    { id: 'J-PP', r12: 'pp', name: 'DPP · 개발시험생산·부품 승인 (R12 PP)', from: 116, to: 180, stage: 'L4' },
    { id: 'J-PRE', r12: 'premp', name: 'LPP · 선행양산·제품 승인 (R12 선행양산)', from: 181, to: 213, stage: 'L4' },
    { id: 'J-MP', r12: 'mp', name: '양산 발주·초도 생산·출하 인증회 (R12 양산)', from: 214, to: 233, stage: 'L6' },
    { id: 'J-FLOW', r12: 'mp', name: '초기 유동 관리 — 부품·제품 (R12, 출하 후)', from: 233, to: 320, stage: 'L7', post: true },
];
const wd = (cal) => Math.max(1, Math.round((cal * 5) / 7));
// 개발본부 일(R12)은 상품전략 쪽에서 체크하지 않으면, 바로 뒤 업무가 끝났을 때 끝난 것으로 봄 (예: T0 리뷰가 끝났으면 금형 제작은 끝)
exports.ENG_DONE_BY = { 'J-ENG': 'PROC-21', 'J-MOLD': 'PROC-26', 'J-T0': 'PROC-27', 'J-TN': 'PROC-29A', 'J-PP': 'PROC-31', 'J-PRE': 'PROC-38A', 'J-MP': 'PROC-42', 'J-FLOW': 'PROC-43B' };
// 업무별 추천 기간(영업일) — 엑셀에 기간이 없는 ①② 와 상품전략 업무는 기본값(프로젝트마다 '작업 기간'에서 바꿀 수 있음)
exports.LAUNCH_DAYS = {
    'PROC-01': 5, 'PROC-02A': 15, 'PROC-02B': 15, 'PROC-02C': 15, 'PROC-02D': 15, 'PROC-03': 5, 'PROC-04': 10, 'PROC-05': 3, 'PROC-06A': 10, 'PROC-06B': 10,
    'PROC-07': 5, 'PROC-08': 5, 'PROC-09': 20, 'PROC-10A': 10, 'PROC-10B': 10, 'PROC-10C': 10, 'PROC-10D': 10, 'PROC-11': 5, 'PROC-12': 3,
    'PROC-13': 3, 'PROC-14': 10, 'PROC-15': 10, 'PROC-16A': 10, 'PROC-17': 5, 'PROC-18': 5, 'PROC-19': 5,
    'PROC-20A': 5, 'PROC-20B': 5, 'PROC-21': 3, 'PROC-22': 10,
    'PROC-23': 5, 'PROC-24': 10, 'PROC-25A': 0, 'PROC-25B': 10, 'PROC-25C': 15, 'PROC-25D': 20,
    'PROC-26': 5, 'PROC-27': 5, 'PROC-28A': 5, 'PROC-28B': 10, 'PROC-28C': 10, 'PROC-28D': 10,
    'PROC-29A': 15, 'PROC-29B': 5, 'PROC-29C': 10, 'PROC-30': 5, 'PROC-31': 10, 'PROC-32A': 5, 'PROC-32B': 10,
    'PROC-33': 10, 'PROC-34': 4, 'PROC-35': 8, 'PROC-36': 4, 'PROC-37A': 3, 'PROC-37B': 5, 'PROC-37C': 10,
    'PROC-38A': 3, 'PROC-38B': 10, 'PROC-38C': 10, 'PROC-39A': 3, 'PROC-39B': 5, 'PROC-40': 5, 'PROC-41': 3, 'PROC-42': 3,
    'PROC-43A': 60, 'PROC-43B': 60, 'PROC-44': 3,
};
// 'PROC-02A' → 2 (같은 번호 + A·B·C = 동시 진행)
const numOf = (id) => Number((/PROC-(\d+)/.exec(id) || ['', '0'])[1]);
const group = (n) => launch_1.L_TASKS.filter(t => numOf(t.id) === n).map(t => t.id);
// 업무 선후행. 기본은 '앞 번호가 끝나면' (FS). 개발본부 일(R12)에 걸리는 것만 따로
//   T0 리뷰 = T0 시사출 2영업일 뒤 샘플 / DPP 평가 = PP 정규 생산(D+134) 쯤 / LPP 참관 = 선행양산 정규 생산(D+199) 쯤 / 초도 확인 = 초도 생산(D+230)
//   인쇄물(32~37)은 M-4(출시 4개월 전) 의뢰 · 양산 2개월 전 배포가 기준이라 T0 일이 끝나면 DPP 평가와 나란히 감
function depsOf(id, has, eng) {
    const n = numOf(id);
    const fs = (ids) => ids.filter(has).map(x => ({ id: x }));
    const ss = (phase, lag = 0) => { const p = eng(phase); return p ? [{ id: p, type: 'SS', lag }] : []; };
    // LPP = 선행양산. 등급에 선행양산이 없으면(C·D) DPP(PP)가 끝난 뒤
    const lpp = () => (eng('J-PRE') === 'J-PRE' ? ss('J-PRE', 13) : eng('J-PP') ? [{ id: eng('J-PP') }] : []);
    switch (id) {
        case 'PROC-20A': return ss('J-ENG').concat(fs(['PROC-19']));
        case 'PROC-23': return fs(['PROC-20B']);
        case 'PROC-25A': return ss('J-MOLD');
        case 'PROC-26': return ss('J-T0', 2).concat(fs(group(25)));
        case 'PROC-29A':
        case 'PROC-29B':
        case 'PROC-29C': return fs(group(28)).concat(ss('J-PP', 13));
        case 'PROC-32A':
        case 'PROC-32B': return fs(group(28));
        case 'PROC-33': return fs(['PROC-32A', 'PROC-32B', 'PROC-25D']);
        case 'PROC-37A':
        case 'PROC-37B': return fs(['PROC-36']);
        case 'PROC-37C': return fs(['PROC-29B']);
        case 'PROC-38A':
        case 'PROC-38B': return lpp().concat(fs(['PROC-37A', 'PROC-37B']));
        case 'PROC-38C': return lpp().concat(fs(['PROC-37A', 'PROC-37B', 'PROC-28B']));
        case 'PROC-39A': return fs(group(38).concat(['PROC-32A']));
        case 'PROC-39B': return fs(group(38));
        case 'PROC-40': return fs(group(39).concat(['CERTS']));
        case 'PROC-42': return fs(['PROC-41']).concat(ss('J-MP', 11));
        case 'PROC-43A':
        case 'PROC-43B': return fs(['T14']);
        case 'PROC-44': return [{ id: 'T14', lag: 125 }];
        default: {
            // 앞 번호 묶음이 끝나면 (32→33처럼 따로 정한 건 위에서)
            for (let k = n - 1; k >= 1; k--) {
                const g = group(k).filter(has);
                if (g.length)
                    return fs(g);
            }
            return [];
        }
    }
}
// 이 등급·개발 주체에 R12 단계가 있나 (예: C·D등급은 T0 없음, 선행양산은 A등급만) — 없으면 그다음 단계로 이어 붙임
function engPhasesFor(ctx) {
    const f = (0, exports.juicerFields)(ctx);
    return exports.ENG_PHASES.filter(ph => ph.id === 'J-FLOW' || ph.id === 'J-MP' || (0, juicer_1.tasksOf)(ph.r12, f).length > 0);
}
// 원액기 추천 일정 — 기획 착수일(start)부터. 개발 발의(G2) 다음 날이 R12 D day
function buildJuicerPlan(ctx, start, durations) {
    const ov = durations || {};
    const phases = engPhasesFor(ctx);
    const pid = phases.map(p => p.id);
    const eng = (want) => {
        // 없는 단계면 바로 다음 있는 단계 (T0 없음 → T(n) 또는 PP)
        const order = exports.ENG_PHASES.map(p => p.id);
        for (let i = order.indexOf(want); i >= 0 && i < order.length; i++)
            if (pid.indexOf(order[i]) >= 0)
                return order[i];
        return undefined;
    };
    const factoryCal = (0, schedule_1.calOf)('FACTORY', ctx.factory);
    const ids = launch_1.L_TASKS.map(t => t.id);
    const has = (x) => x === 'CERTS' || x === 'T14' || ids.indexOf(x) >= 0;
    const dur = (id, base) => (typeof ov[id] === 'number' ? ov[id] : base);
    const tasks = [];
    // R12 개발본부 일: 앞 단계가 끝나면 다음 단계. 설계는 개발 발의(PROC-18) 다음
    phases.forEach((ph, i) => {
        const prev = phases[i - 1];
        const deps = ph.id === 'J-ENG' ? [{ id: 'PROC-18' }] : ph.id === 'J-FLOW' ? [{ id: 'T14' }] : prev ? [{ id: prev.id }] : [{ id: 'PROC-18' }];
        if (ph.id === 'J-MOLD')
            deps.push({ id: 'PROC-21' }, { id: 'PROC-23' }); // DR·금형 계약이 끝나야 금형 발주
        if (ph.id === 'J-MP')
            deps.push({ id: 'PROC-37A', lag: 42 }); // 인쇄물 최종 배포는 양산 2개월 전 (엑셀 기존 시트 '양산 - 2M')
        tasks.push({ id: ph.id, name: ph.name, stage: ph.stage, owner: '개발본부', duration: dur(ph.id, wd(ph.to - ph.from)), deps,
            cal: ph.id === 'J-ENG' ? 'KR' : factoryCal, postLaunch: ph.post });
    });
    const moldDays = (tasks.filter(t => t.id === 'J-MOLD')[0] || { duration: 30 }).duration;
    launch_1.L_TASKS.forEach(t => {
        const base = t.id === 'PROC-25A' ? moldDays : exports.LAUNCH_DAYS[t.id] || 5;
        const deps = depsOf(t.id, has, eng);
        tasks.push({ id: t.id, name: `${t.id} ${t.name}`, stage: t.stage, owner: t.owner || '상품전략1팀', duration: dur(t.id, base), deps,
            gate: t.gate, postLaunch: t.stage === 'L7', cal: 'KR' });
    });
    // 인증: DPP 샘플이 나오면 바로 접수 (PROC-25C '인증용 명판·사용설명서 사전 준비' 기준). 전문기관 위탁 기간
    const certs = (0, regions_1.certsFor)(ctx.regions, ctx.features);
    const certTasks = certs.map(c => ({ id: 'C-' + c.id, name: c.name, stage: 'L4', owner: '외부기관', duration: c.outsourcedDays,
        deps: [{ id: 'PROC-25C' }].concat(eng('J-PP') ? [{ id: eng('J-PP'), type: 'SS', lag: 13 }] : []), certId: c.id, region: c.region, outsourced: true, cal: (0, schedule_1.calOf)('HQ', ctx.factory, c.region) }));
    const certIds = certTasks.map(x => ({ id: x.id }));
    tasks.forEach(t => { t.deps = t.deps.reduce((acc, d) => (d.id === 'CERTS' ? acc.concat(certIds) : acc.concat([d])), []); });
    // 첫 출하(출시) — 홈의 D-day·신호등이 이 작업을 봄
    const ship = { id: 'T14', name: '출시 (첫 출하)', stage: 'L6', owner: '생산', duration: 0, deps: [{ id: 'PROC-42' }].concat(eng('J-MP') ? [{ id: eng('J-MP') }] : []), milestone: true, cal: 'KR' };
    const all = tasks.concat(certTasks, [ship]);
    return (0, schedule_1.finalize)({ name: 'TO-BE', tasks: all, start });
}
function timingChecks(s) {
    const find = (id) => s.tasks.filter(t => t.id === id)[0];
    const ship = find('T14');
    const t33 = find('PROC-33');
    const t37 = find('PROC-37A');
    const mp = find('J-MP');
    const out = [];
    const months = (a, b) => (a && b ? (new Date(b + 'T00:00:00').getTime() - new Date(a + 'T00:00:00').getTime()) / (30.4 * 86400000) : 0);
    if (ship && t33) {
        const m = months(t33.startDate, ship.startDate);
        out.push({ label: '인쇄물 디자인 의뢰 M-4', ok: m >= 3.5, detail: `출시 ${m.toFixed(1)}개월 전 의뢰` });
    }
    if (mp && t37) {
        const m = months(t37.endDate, mp.startDate);
        out.push({ label: 'LPP 적용 인쇄물 배포 (양산 2개월 전)', ok: m >= 1.8, detail: `양산 ${m.toFixed(1)}개월 전 배포` });
    }
    return out;
}
// 원액기군 걱정되는 일(리스크) — 엑셀 '주의사항(Risk)' 칸과 Lesson Learned 에서. 위험 관리 탭에 AI 항목으로 들어감
function juicerRisks(f, overseas) {
    const r = [];
    const add = (id, stage, category, title, l, i, response) => {
        r.push({ id, stage, category, title, likelihood: l, impact: i, response, status: 'open', source: 'AI' });
    };
    add('JR01', 'L1', '사양', '영업 요구를 단계마다 따로 받아 사양이 계속 바뀜', 3, 4, 'PROC-10C에서 권역·채널 요구를 한 번만 취합하고, PROC-14·16A·17은 그 결과를 다시 씀');
    add('JR02', 'L2', '요구 취합', '부서마다 요청 양식이 달라 개발 요구가 걸러지지 않음 (예전 최초 258건 취합)', 3, 3, '공통 양식(요구 내용·근거·중요도·요청 부서)으로 받고 반영/검토/미반영으로 나눠 회신 (SOP-14)');
    add('JR03', 'L3', '사양', '시제품 성능 미달이나 부서 간 사양 이견으로 금형 착수 전 합의가 안 됨', 3, 4, '개선 방향·후속 조치·결정권자를 PROC-20B에서 정하고 기록 (SOP-20B 4단계)');
    add('JR04', 'L3', '설계', '주요 개선사항·설계 리스크를 못 푼 채 금형 착수 → 설계 변경·일정 지연', 3, 5, 'DR(PROC-21)에서 미해결 항목이 없는지 확인한 뒤 금형 발주');
    add('JR05', 'L4', '회계', '금형 투자비 ERP 계정과목·선급금 세목을 잘못 등록해 회계 처리 오류', 2, 3, '계정과목 선급금 · 세목 고정자산 · 부가세 증빙 전자세금계산서 확인 (SOP-24)');
    add('JR06', 'L4', '금형', '지급 후 이체증을 안 보내 업체가 송금 확인을 계속 요청', 3, 2, '지급 완료 확인 후 이체증 첨부해 송금 완료 메일 발송, 개발 담당 참조 (SOP-24 5단계)');
    add('JR07', 'L4', '인쇄물', '추가 런칭 국가·언어나 국가별 인증 문구가 인쇄물에서 빠짐', 3, 4, 'PROC-25D 점검: 런칭 국가·언어 누락, 인증 문구, 공용/국가 전용 설명서 구분, 디자인팀 리드타임');
    add('JR08', 'L4', '인쇄물', '인쇄물 디자인 의뢰가 M-4(출시 4개월 전)보다 늦어 LPP에 양산 인쇄물을 못 씀', 3, 4, 'PROC-33을 M-4에 의뢰, Master 확정 뒤 번역, 양산 2개월 전 최종 배포 (PROC-37A)');
    add('JR09', 'L4', '인쇄물', '인쇄 뒤에는 QR을 바꿀 수 없음', 2, 3, '링크 대상이 바뀌어도 되는 고정 URL(리다이렉트)로 QR 생성 (PROC-32A)');
    add('JR10', 'L4', '샘플', 'LPP 샘플의 디스플레이·버튼 인쇄 언어가 달라 사용가이드 촬영용 샘플이 모자람', 2, 3, 'PROC-28A에서 언어별 촬영용 샘플 수량까지 신청');
    add('JR11', 'L4', 'CFT', '처음부터 CFT를 크게 꾸려 결정이 늦어짐', 2, 2, '초기엔 디자인·CS 중심, 제품 방향이 구체화되면 영업 추가 (PROC-25B)');
    if (f.foodContact)
        add('JR12', 'L3', '인증', '식품이 닿는 부품 재질을 바꾸면 식품 시험을 다시 받아야 함', 3, 4, '설계 확정(PROC-21) 때 재질 목록 고정, 바꿀 땐 다시 시험할 기간을 일정에 넣기');
    add('JR13', 'L4', '금형', 'T(n) 금형 수정이 반복되어 DPP·인증 일정이 밀림', 3, 3, 'T0 개선 사항(PROC-27)을 DPP 반영 항목으로 확정하고 외관 수정은 인증 시료와 따로 관리');
    add('JR14', 'L4', '인증', '인증 시험 불합격으로 재시험 (전자파·온도 상승)', 2, 4, 'DPP 샘플 나오면 바로 접수할 수 있게 명판·설명서 미리 준비(PROC-25C), 시제품 때 사전 측정');
    if (overseas)
        add('JR15', 'L2', '환경', '개발발의 뒤 수출 나라가 추가되어 재설계·재인증', 3, 4, '개발발의서에 도입 권역·인증 계획을 넣고(SOP-18), EU 기준(RoHS·ErP·WEEE)으로 설계');
    add('JR16', 'L7', '품질', '초기 출시 권역의 불량·불편 사례가 미출시 권역에 늦게 전달됨', 3, 3, 'PROC-43B에서 사례를 분류해 미출시 권역에 바로 공유, 반기 Post-Mortem(PROC-44)에 반영');
    return r;
}

};
__m["src/webparts/huromDevHub/model/schedule.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDays = addDays;
exports.diffDays = diffDays;
exports.todayIso = todayIso;
exports.fmt = fmt;
exports.fmtRange = fmtRange;
exports.expandHolidays = expandHolidays;
exports.setCalendar = setCalendar;
exports.isWorkday = isWorkday;
exports.offsetDate = offsetDate;
exports.workSpan = workSpan;
exports.workDaysIncl = workDaysIncl;
exports.calOf = calOf;
exports.computeCpm = computeCpm;
exports.finalize = finalize;
exports.buildAsIs = buildAsIs;
exports.buildToBe = buildToBe;
exports.forecastWithActuals = forecastWithActuals;
exports.dated = dated;
exports.certLabel = certLabel;
exports.featuresSummary = featuresSummary;
const config_1 = require("src/webparts/huromDevHub/model/config.js");
const regions_1 = require("src/webparts/huromDevHub/model/regions.js");
// ───────── 날짜 유틸 (달력일 기준)
function addDays(iso, days) {
    const d = new Date(iso + 'T00:00:00');
    d.setDate(d.getDate() + Math.round(days));
    const m = d.getMonth() + 1;
    const day = d.getDate();
    return `${d.getFullYear()}-${m < 10 ? '0' : ''}${m}-${day < 10 ? '0' : ''}${day}`;
}
function diffDays(a, b) {
    return Math.round((new Date(b + 'T00:00:00').getTime() - new Date(a + 'T00:00:00').getTime()) / 86400000);
}
function todayIso() {
    const d = new Date();
    const m = d.getMonth() + 1;
    const day = d.getDate();
    return `${d.getFullYear()}-${m < 10 ? '0' : ''}${m}-${day < 10 ? '0' : ''}${day}`;
}
// 화면 날짜 표기: 2028-02-22 → 2028.2.22 (연도 네 자리, 월·일 앞 0 없음)
function fmt(iso) {
    if (!iso)
        return '-';
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
    return m ? `${m[1]}.${Number(m[2])}.${Number(m[3])}` : iso;
}
// 기간 표기: 같은 해면 끝 날짜의 연도를 뺌 (2027.2.19 ~ 7.15)
function fmtRange(a, b) {
    if (!a)
        return '-';
    if (!b || a === b)
        return fmt(a);
    return `${fmt(a)} ~ ${a.slice(0, 4) === b.slice(0, 4) ? fmt(b).slice(5) : fmt(b)}`;
}
const calendars = { workdays: true, days: { KR: {}, CN: {} } };
// '2026-02-09' 또는 '2026-02-09~2026-03-06' 형식을 날짜 목록으로 펼침
function expandHolidays(list) {
    const out = [];
    (list || []).forEach(raw => {
        const s = (raw || '').trim();
        const m = /^(\d{4}-\d{2}-\d{2})\s*~\s*(\d{4}-\d{2}-\d{2})$/.exec(s);
        if (m) {
            for (let d = m[1], g = 0; d <= m[2] && g < 400; d = addDays(d, 1), g++)
                out.push(d);
        }
        else if (/^\d{4}-\d{2}-\d{2}$/.test(s))
            out.push(s);
    });
    return out;
}
function setCalendar(workdays, holidaysKR, holidaysCN) {
    calendars.workdays = workdays;
    calendars.days = { KR: {}, CN: {} };
    expandHolidays(holidaysKR).forEach(d => { calendars.days.KR[d] = true; });
    expandHolidays(holidaysCN || []).forEach(d => { calendars.days.CN[d] = true; });
}
function isWorkday(iso, cal = 'KR') {
    if (!calendars.workdays)
        return true;
    const dow = new Date(iso + 'T00:00:00').getDay();
    return dow !== 0 && dow !== 6 && !(calendars.days[cal] || {})[iso];
}
// 기준일에서 n 영업일째 날짜 (0 = 기준일 당일 또는 이후 첫 영업일)
function offsetDate(start, n, cal = 'KR') {
    if (!calendars.workdays)
        return addDays(start, n);
    let d = start;
    let guard = 0;
    while (!isWorkday(d, cal) && guard++ < 60)
        d = addDays(d, 1);
    let left = Math.round(n);
    while (left > 0 && guard++ < 20000) {
        d = addDays(d, 1);
        if (isWorkday(d, cal))
            left--;
    }
    return d;
}
// a → b 사이 영업일 수 (a 포함, b 미포함). b < a 이면 음수
function workSpan(a, b, cal = 'KR') {
    if (!calendars.workdays)
        return diffDays(a, b);
    const sign = diffDays(a, b) < 0 ? -1 : 1;
    let from = sign > 0 ? a : b;
    const to = sign > 0 ? b : a;
    let n = 0;
    let guard = 0;
    while (diffDays(from, to) > 0 && guard++ < 20000) {
        if (isWorkday(from, cal))
            n++;
        from = addDays(from, 1);
    }
    return n * sign;
}
// 시작·종료일을 모두 포함한 영업일 수 (실적 입력용: 월~금 입력 → 5일)
function workDaysIncl(a, b, cal = 'KR') {
    return workSpan(a, addDays(b, 1), cal);
}
// 작업이 쓰는 달력: 공장 작업(site=FACTORY)은 제조국 달력, 중국 인증(CCC 등)은 중국 달력, 나머지는 한국
function calOf(site, factory, region) {
    if (region === 'CN')
        return 'CN';
    if (site === 'FACTORY' && factory === 'CN')
        return 'CN';
    return 'KR';
}
const clone = (x) => JSON.parse(JSON.stringify(x));
const findTask = (tasks, id) => tasks.filter(t => t.id === id)[0];
function computeCpm(tasks, start, actuals) {
    const byId = {};
    const after = {}; // 종료 다음날 (후행 FS 기준)
    const driver = {};
    tasks.forEach(t => { byId[t.id] = t; t.startDate = undefined; t.endDate = undefined; t.critical = false; });
    const visiting = {};
    const calc = (t) => {
        if (t.startDate)
            return;
        if (visiting[t.id])
            throw new Error('일정 순환 참조: ' + t.id);
        visiting[t.id] = true;
        const cal = t.cal || 'KR';
        let s = offsetDate(start, 0, cal);
        t.deps.forEach(d => {
            const p = byId[d.id];
            if (!p)
                return;
            calc(p);
            const base = d.type === 'SS' ? p.startDate : after[p.id];
            // lag 은 선행 작업 쪽 달력으로 셈 (예: 금형 종료 +10일 시료 = 공장 영업일 → 춘절이면 그만큼 늦게 나옴)
            const cand = d.lag ? offsetDate(offsetDate(base, d.lag, p.cal || 'KR'), 0, cal) : offsetDate(base, 0, cal);
            if (cand > s) {
                s = cand;
                driver[t.id] = p.id;
            }
        });
        const a = actuals ? actuals[t.id] : undefined;
        if (a && a.start) {
            s = a.start;
            driver[t.id] = undefined;
        }
        let last;
        if (a && a.end)
            last = a.end < s ? s : a.end;
        else if (t.duration <= 0)
            last = s;
        else
            last = offsetDate(s, t.duration - 1, cal);
        t.startDate = s;
        t.endDate = last;
        after[t.id] = t.duration <= 0 && !(a && a.end) ? s : addDays(last, 1);
        t.es = diffDays(start, s);
        t.ef = diffDays(start, after[t.id]);
        visiting[t.id] = false;
    };
    tasks.forEach(t => calc(t));
    // 크리티컬 패스 = 가장 늦게 끝나는 작업에서 "시작을 결정한 선행 작업"을 거슬러 올라간 경로
    let lastTask;
    tasks.forEach(t => { if (!t.postLaunch && (!lastTask || t.ef > lastTask.ef))
        lastTask = t; });
    let cur = lastTask ? lastTask.id : undefined;
    let guard = 0;
    while (cur && guard++ < 500) {
        byId[cur].critical = true;
        cur = driver[cur];
    }
    return { total: lastTask ? lastTask.ef : 0, end: lastTask ? lastTask.endDate : start };
}
function finalize(s) {
    const r = computeCpm(s.tasks, s.start);
    s.totalDays = r.total;
    s.end = r.end;
    return s;
}
// ───────── AS-IS 템플릿 (휴롬 기존 방식: 단계 직렬, 시험생산 후 인증, CB → KC 전환)
function buildAsIs(ctx, start, cfg = config_1.DEFAULT_CONFIG) {
    const certs = (0, regions_1.certsFor)(ctx.regions, ctx.features);
    // 파생개발 또는 Grade C/D(반소싱·소싱): 설계·금형 범위 축소 → durationLite / nameLite 사용
    const lite = ctx.devType === 'DERIV' || ctx.grade === 'C' || ctx.grade === 'D';
    const cb = certs.filter(c => c.id === 'GL-CB')[0];
    const certTasksAsIs = certs.map(c => {
        const deps = [{ id: cfg.certAnchor }];
        // AS-IS: CB 성적서 받은 뒤 KC/PSE/CE 등으로 전환 (직렬)
        if (cfg.asIsCbSerial && cb && c.reuseCB && c.id !== 'GL-CB')
            deps.push({ id: 'C-GL-CB' });
        // AS-IS: KC 공장심사는 제품시험 합격 후 심사원 출장 예약 → 공장에서 진행
        if (c.factoryAudit)
            deps.push({ id: 'C-KR-KC-SAFE' });
        return { id: 'C-' + c.id, name: `${c.name}`, stage: 'S6', owner: '외부기관', duration: c.leadDays, deps, certId: c.id, region: c.region, outsourced: false,
            cal: c.factoryAudit ? calOf('FACTORY', ctx.factory) : calOf('HQ', ctx.factory, c.region) };
    });
    const certIds = certTasksAsIs.map(x => ({ id: x.id }));
    // 조건부 작업: 제품 특성·판매 나라·생산국에 해당할 때만 넣음 (빠진 작업을 가리키는 선후행은 계산에서 무시됨)
    const feat = ctx.features;
    const cond = (key) => {
        if (key === 'overseas')
            return ctx.regions.some(r => r !== 'KR');
        if (key === 'importCN')
            return (ctx.factory || 'CN') === 'CN' && ctx.regions.indexOf('KR') >= 0;
        return !!feat[key];
    };
    const applies = (tt) => !tt.onlyIf || tt.onlyIf.split(',').some(k => cond(k.trim()));
    const base = cfg.tasks.filter(applies).map(tt => ({
        id: tt.id,
        name: lite && tt.nameLite ? tt.nameLite : tt.name,
        stage: tt.stage, owner: tt.owner,
        duration: lite && tt.durationLite !== undefined && tt.durationLite !== null ? tt.durationLite : tt.duration,
        deps: tt.deps.reduce((acc, d) => d.id === 'CERTS' ? acc.concat(certIds) : acc.concat([{ id: d.id, lag: d.lag, type: d.type }]), []),
        milestone: tt.milestone, gate: tt.gate, postLaunch: tt.postLaunch, cal: calOf(tt.site, ctx.factory),
    }));
    // 인증이 하나도 없으면 'CERTS' 는 빈 선행 → 무시됨
    const anchorIdx = base.map(t => t.id).indexOf(cfg.certAnchor);
    const t = base.slice(0, anchorIdx + 1).concat(certTasksAsIs, base.slice(anchorIdx + 1));
    return finalize({ name: 'AS-IS', tasks: t, start });
}
const certTasks = (tasks) => tasks.filter(t => !!t.certId);
const num = (v, d) => (typeof v === 'number' && !isNaN(v) ? v : d);
const RULES = [
    {
        id: 'R1',
        kind: 'shorter',
        applies: ts => certTasks(ts).length > 0,
        apply: (ts, _c, certs) => {
            const changed = [];
            let saved = 0;
            certTasks(ts).forEach(t => {
                const def = certs.filter(c => c.id === t.certId)[0];
                if (!def)
                    return;
                saved += t.duration - def.outsourcedDays;
                t.duration = def.outsourcedDays;
                t.outsourced = true;
                t.owner = '외부기관';
                changed.push(t.id);
            });
            return { detail: `인증 ${changed.length}건을 전문 인증기관(KTR·KTC·KTL·TÜV·Intertek 등)에 서류 대행까지 맡김. 시험 자체 기간은 그대로이고, 줄어드는 건 접수 전 서류 준비와 보완 서류 왕복 기간(건별 합계 ${saved}일, 기관 표준 소요 기준). 동시에 진행되는 인증이 많아 출시일에 주는 효과는 이보다 작음`, tasks: changed };
        },
    },
    {
        id: 'R2',
        kind: 'parallel',
        applies: ts => certTasks(ts).some(t => t.deps.some(d => d.id === 'C-GL-CB')),
        apply: ts => {
            const changed = [];
            certTasks(ts).forEach(t => {
                if (t.deps.some(d => d.id === 'C-GL-CB') && (t.region === 'KR' || t.certId === 'JP-PSE' || t.certId === 'EU-CE-LVD')) {
                    t.deps = t.deps.filter(d => d.id !== 'C-GL-CB');
                    changed.push(t.id);
                }
            });
            return { detail: '같은 T1 시료로 CB와 KC·PSE·CE-LVD를 동시에 접수 (CB 결과를 기다렸다가 전환하지 않음). CB 성적서는 SII·BSMI·RCM 등 서류 기반 나라에만 사용. 시험 일수는 그대로, 순서만 직렬 → 동시', tasks: changed };
        },
    },
    {
        id: 'R3',
        kind: 'parallel',
        applies: ts => certTasks(ts).length > 0 && !!findTask(ts, 'T06') && !!findTask(ts, 'T05'),
        apply: (ts, _c, certs, p) => {
            const lag = num(p.t1Lag, 5);
            const changed = [];
            certTasks(ts).forEach(t => {
                const def = certs.filter(c => c.id === t.certId)[0];
                if (!def)
                    return;
                const keep = t.deps.filter(d => d.id.indexOf('C-') === 0);
                // KC 공장심사: 제품시험 접수 후 심사원 예약, PVT(라인 가동) 시작에 맞춰 심사 → 시험과 병행
                if (def.factoryAudit)
                    t.deps = [{ id: 'C-KR-KC-SAFE', type: 'SS', lag: 10 }].concat(findTask(ts, 'T09') ? [{ id: 'T09', type: 'SS', lag: 0 }] : []);
                else if (def.sample === 'DOC')
                    t.deps = keep.length ? keep : [{ id: 'T05' }];
                else
                    t.deps = keep.concat([{ id: 'T06', lag }]);
                changed.push(t.id);
            });
            return { detail: `시험생산 후에 접수하던 인증을 첫 사출(T1) 시료(금형 제작 종료 +${lag}일)로 바로 접수해 시제품 시험과 동시에 진행. 서류 인증은 설계 확정 직후 시작. KC 공장심사는 시험 접수 후 심사원을 예약해 시험생산 시작에 맞춰 진행. 시험 일수는 그대로, 기다리는 시간만 없앰`, tasks: changed };
        },
    },
    {
        id: 'R4',
        kind: 'split',
        applies: ts => !!findTask(ts, 'T10') && !!findTask(ts, 'T11') && !!findTask(ts, 'T05'),
        apply: (ts, _c, _d, p) => {
            const t10 = findTask(ts, 'T10');
            t10.deps = [{ id: 'T05' }];
            const t11 = findTask(ts, 'T11');
            const total = t11.duration;
            const after = Math.min(num(p.printDays, 5), total);
            const before = total - after;
            if (before > 0) {
                ts.push({ id: 'T11a', name: '인쇄물 교정·사전 승인 (인증번호 자리만 비워 둠)', stage: 'S7', owner: '디자인', duration: before, deps: [{ id: 'T10' }], cal: t11.cal });
                t11.deps = t11.deps.filter(d => d.id !== 'T10').concat([{ id: 'T11a' }]);
            }
            t11.duration = after;
            t11.name = '인증번호·마크 삽입 · 인쇄물 최종 승인';
            return { detail: `매뉴얼·라벨·박스 디자인(${t10.duration}일)과 교정(${before}일)을 금형 만드는 동안 미리 끝내고, 인증이 나오면 인증번호 넣고 최종 승인(${after}일)만 남김. 인쇄물 일의 양(${t10.duration + total}일)은 그대로, 순서만 앞당김`, tasks: ['T10', 'T11a', 'T11'] };
        },
    },
    {
        id: 'R5',
        kind: 'parallel',
        applies: ts => !!findTask(ts, 'T09') && !!findTask(ts, 'T12'),
        apply: ts => {
            const t12 = findTask(ts, 'T12');
            if (t12.deps.every(d => d.id !== 'T09'))
                t12.deps.push({ id: 'T09' });
            return { detail: '시험생산을 인증 결과를 기다리는 동안 진행하고, 양산 승인은 "시험생산 합격 + 인증 완료" 두 조건이 다 되면 내림. 일수는 그대로, 기다리는 시간만 없앰', tasks: ['T09', 'T12'] };
        },
    },
    {
        id: 'R6',
        kind: 'split',
        applies: ts => !!findTask(ts, 'T13') && !!findTask(ts, 'T07'),
        apply: (ts, c, _d, p) => {
            const t13 = findTask(ts, 'T13');
            const before = t13.duration;
            t13.duration = Math.min(before, num(p.massDays, 18));
            const moved = before - t13.duration;
            t13.name = '양산 조립·검사 (부품은 미리 발주해 둔 상태)';
            ts.push({ id: 'T05b', name: '오래 걸리는 부품(모터·기판·IC) 미리 발주', stage: 'S7', owner: '구매', duration: num(p.preorderDays, 45), deps: [{ id: 'T07' }], cal: calOf('FACTORY', c.factory) });
            t13.deps.push({ id: 'T05b' });
            return { detail: `양산 ${before}일 중 부품 발주·입고 기다리는 ${moved}일을 금형 승인 직후로 앞당김(발주 리드타임 ${num(p.preorderDays, 45)}일은 금형·시험과 겹침). 조립·검사 ${t13.duration}일은 그대로. 공장 출고가(FOB) 계약에 미리 발주한 부품의 책임 범위를 적어야 함`, tasks: ['T05b', 'T13'] };
        },
    },
    {
        id: 'R7',
        kind: 'parallel',
        applies: (ts, ctx) => ctx.devType !== 'DERIV' && !!findTask(ts, 'T04') && !!findTask(ts, 'T03'),
        apply: (ts, _c, _d, p) => {
            const t04 = findTask(ts, 'T04');
            const lag = num(p.overlapLag, 10);
            t04.deps = [{ id: 'T03', type: 'SS', lag }];
            return { detail: `업체를 2곳으로 좁힌 뒤 비밀유지계약만 맺고 디자인·설계를 시작 (업체 선정 시작 +${lag}일, 계약 마무리와 동시에). 계약이 늦어질 때 설계 비용을 누가 부담할지 미리 합의. 금형 발주(설계 확정)는 계약 체결 뒤에만 가능`, tasks: ['T04'] };
        },
    },
    {
        id: 'R8',
        kind: 'split',
        applies: ts => !!findTask(ts, 'T15') && !!findTask(ts, 'T13'),
        apply: (ts, _c, _d, p) => {
            const t15 = findTask(ts, 'T15');
            const report = Math.min(t15.duration, num(p.reportDays, 4));
            const docDays = t15.duration - report;
            if (docDays <= 0)
                return { detail: '이관 문서 기간이 없어 적용할 것 없음', tasks: [] };
            ts.push({ id: 'T15a', name: '양산 후 관리 문서 작성 (고장 대응 가이드·외관 검사 기준서·A/S 부품 목록) — 양산 중에', stage: 'S9', owner: '품질', duration: docDays, deps: [{ id: 'T13', type: 'SS', lag: 0 }], cal: t15.cal });
            t15.duration = report;
            t15.name = '개발 마무리 보고 (이관 문서 확인·결재)';
            t15.deps = t15.deps.concat([{ id: 'T15a' }]);
            return { detail: `이관 문서 작성(${docDays}일)을 양산이 돌아가는 동안 미리 하고, 첫 출하 뒤엔 보고·결재(${report}일)만 남김. 일의 양은 그대로, 순서만 앞당김`, tasks: ['T15a', 'T15'] };
        },
    },
];
function buildToBe(asIs, ctx, cfg = config_1.DEFAULT_CONFIG) {
    const certs = (0, regions_1.certsFor)(ctx.regions, ctx.features);
    const tasks = clone(asIs.tasks);
    const changes = [];
    let prev = computeCpm(tasks, asIs.start).total;
    RULES.forEach(r => {
        const rc = cfg.rules.filter(x => x.id === r.id)[0];
        if (!rc || !rc.enabled)
            return;
        if (!r.applies(tasks, ctx, certs))
            return;
        const res = r.apply(tasks, ctx, certs, rc.params || {});
        const now = computeCpm(tasks, asIs.start).total;
        changes.push({ rule: r.id, title: rc.title, detail: res.detail, savedDays: prev - now, tasks: res.tasks, kind: r.kind });
        prev = now;
    });
    return finalize({ name: 'TO-BE', tasks, start: asIs.start, changes });
}
// ───────── 실적 반영 예측: 실제 시작일(착수 지연 포함)·종료일을 날짜 그대로 고정하고 나머지를 다시 계산
function forecastWithActuals(s, actuals) {
    const tasks = clone(s.tasks);
    const ids = tasks.map(t => t.id);
    const used = Object.keys(actuals || {}).filter(id => ids.indexOf(id) >= 0 && !!(actuals[id].start || actuals[id].end)).length;
    const r = computeCpm(tasks, s.start, actuals);
    return { total: r.total, end: r.end, used };
}
function dated(s, today) {
    return s.tasks.map(t => {
        const start = t.startDate || offsetDate(s.start, 0);
        const end = t.endDate || start;
        const done = t.status === 'done' || t.status === 'na';
        return Object.assign(Object.assign({}, t), { start, end, late: !done && diffDays(end, today) > 0 });
    });
}
function certLabel(t) {
    return t.region ? `${(0, regions_1.regionName)(t.region)} · ${t.name}` : t.name;
}
function featuresSummary(f) {
    const a = [];
    if (f.ac)
        a.push('AC전원');
    if (f.adapter)
        a.push('어댑터');
    if (f.battery)
        a.push('배터리');
    if (f.motor)
        a.push('모터');
    if (f.heater)
        a.push('히터');
    if (f.foodContact)
        a.push('식품접촉');
    if (f.wireless)
        a.push('무선');
    if (f.app)
        a.push('앱');
    return a.join(' · ');
}

};
__m["src/webparts/huromDevHub/model/config.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalConfigStore = exports.DEFAULT_CONFIG = exports.CONFIG_SCHEMA = void 0;
exports.normalizeConfig = normalizeConfig;
exports.validateConfig = validateConfig;
exports.CONFIG_SCHEMA = 3; // 3: 누락 작업 추가(특허·원가·펌웨어·액세서리·포장·양산 시방서·인쇄 입고·통관·A/S 재고·이관 문서) → 구버전 저장값은 일수만 유지
exports.DEFAULT_CONFIG = {
    schema: exports.CONFIG_SCHEMA,
    rev: 1,
    certAnchor: 'T09',
    asIsCbSerial: true,
    workdays: true,
    bufferUsual: 1.15,
    bufferSafe: 1.22,
    // 한국 공휴일·대체공휴일 (2026~2029). 2026.4.28 국무회의 의결로 노동절(5/1)·제헌절(7/17) 공휴일 포함. 화면에서 수정 가능
    // 2028~2029는 한국천문연구원 음력 기준 + 대체공휴일 규칙으로 계산 (2028.4.12 국회의원 선거 포함) — 정부 발표 후 확인
    holidays: [
        '2026-01-01', '2026-02-16', '2026-02-17', '2026-02-18', '2026-03-02', '2026-05-01', '2026-05-05', '2026-05-25', '2026-06-03',
        '2026-07-17', '2026-08-17', '2026-09-24', '2026-09-25', '2026-10-05', '2026-10-09', '2026-12-25',
        '2027-01-01', '2027-02-05', '2027-02-08', '2027-03-01', '2027-05-03', '2027-05-05', '2027-05-13', '2027-07-19', '2027-08-16',
        '2027-09-14', '2027-09-15', '2027-09-16', '2027-10-04', '2027-10-11', '2027-12-27',
        '2028-01-01', '2028-01-26', '2028-01-27', '2028-01-28', '2028-03-01', '2028-04-12', '2028-05-01', '2028-05-02', '2028-05-05',
        '2028-06-06', '2028-07-17', '2028-08-15', '2028-10-02', '2028-10-03', '2028-10-04', '2028-10-05', '2028-10-09', '2028-12-25',
        '2029-01-01', '2029-02-12', '2029-02-13', '2029-02-14', '2029-03-01', '2029-05-01', '2029-05-07', '2029-05-21', '2029-06-06',
        '2029-07-17', '2029-08-15', '2029-09-21', '2029-09-24', '2029-10-03', '2029-10-09', '2029-12-25',
    ],
    // 중국 공장 휴무 — 넉넉하게 잡음. 调休 보충 근무 토요일은 근무일로 보지 않음(실제 생산 거의 없음)
    // 춘절: 공식 휴무 앞 1주(귀향) + 뒤 약 2주(인력 복귀·라인 재가동)까지 공장 휴무로 봄
    // 2026 = 국무원 공식 발표(2025.11.4) 기준 + 여유, 2027~2029 = 음력 기준 추정 (국무원 그 해 발표 후 교체)
    holidaysCN: [
        '2026-01-01~2026-01-02', '2026-02-09~2026-03-06', '2026-04-06', '2026-05-01~2026-05-06', '2026-06-19',
        '2026-09-25', '2026-09-28~2026-10-09',
        '2027-01-01', '2027-01-29~2027-02-26', '2027-04-05', '2027-05-03~2027-05-07', '2027-06-09~2027-06-11',
        '2027-09-15~2027-09-17', '2027-10-01~2027-10-08',
        '2028-01-01~2028-01-03', '2028-01-19~2028-02-15', '2028-04-04', '2028-05-01~2028-05-05', '2028-05-27~2028-05-29', '2028-10-01~2028-10-08',
        '2029-01-01', '2029-02-06~2029-03-05', '2029-04-04', '2029-05-01~2029-05-05', '2029-06-16~2029-06-18', '2029-09-22~2029-09-24',
        '2029-10-01~2029-10-07',
    ],
    tasks: [
        { id: 'T01', name: '선행검토 (성능·안전·내구 시험 · 구조 검토)', stage: 'S0', owner: '상품개발', duration: 21, durationLite: 14, deps: [] },
        { id: 'T01b', name: '특허·디자인권 조사 (남의 권리 침해 여부 · 우리 출원 거리)', stage: 'S0', owner: '연구소', duration: 10, deps: [{ id: 'T01', type: 'SS', lag: 0 }] },
        { id: 'T02', name: '개발발의서 전자결재', stage: 'S1', owner: 'PM', duration: 7, deps: [{ id: 'T01' }, { id: 'T01b' }], gate: 'G1' },
        { id: 'T03', name: '업체 선정 · 견적 요청·비교 · 공장 실사', nameLite: '파생 사양 협의·견적', stage: 'S2', owner: '구매', duration: 21, durationLite: 10, deps: [{ id: 'T02' }] },
        { id: 'T03b', name: '계약 체결 (비밀유지·개발·금형·품질보증 계약)', nameLite: '파생 개발 계약·견적 확정', stage: 'S2', owner: '법무', duration: 5, durationLite: 3, deps: [{ id: 'T03' }], gate: 'G1b' },
        { id: 'T04', name: '제품 디자인·설계·부품표(BOM)', nameLite: '판매 나라 변경 설계(전압·플러그·표기)', stage: 'S3', owner: '연구소', duration: 30, durationLite: 14, deps: [{ id: 'T03b' }] },
        { id: 'T04b', name: '펌웨어·앱 개발·검증', stage: 'S3', owner: '연구소', duration: 30, deps: [{ id: 'T04', type: 'SS', lag: 10 }], onlyIf: 'app,wireless' },
        { id: 'T04c', name: '원가 검토 · 견적 확정 (목표 원가 대비, 원가 절감안 반영)', stage: 'S3', owner: '구매', duration: 5, deps: [{ id: 'T04', type: 'SS', lag: 20 }] },
        { id: 'Q1', name: '[품질분석] 설계 점검 (문제 생길 곳 미리 찾기 · KC 핵심 부품 확인)', stage: 'S3', owner: '품질', duration: 3, deps: [{ id: 'T04' }], gate: 'Q1' },
        { id: 'T05', name: '설계 확정 · 금형 발주', stage: 'S3', owner: 'PM', duration: 0, deps: [{ id: 'Q1' }, { id: 'T03b' }, { id: 'T04c' }], milestone: true, gate: 'G2' },
        { id: 'T06', name: '금형 제작', nameLite: '판매 나라 전용 부품 금형/수정', stage: 'S4', owner: '제조사', duration: 40, durationLite: 20, deps: [{ id: 'T05' }], site: 'FACTORY' },
        { id: 'T07', name: '첫 사출(T1) · 금형 수정(T2~Tn) · 금형 승인', stage: 'S4', owner: '연구소', duration: 21, durationLite: 10, deps: [{ id: 'T06' }], gate: 'G3', site: 'FACTORY' },
        { id: 'Q2', name: '[품질분석] 첫 사출품 점검 (치수 · 외관 · 조립)', stage: 'S4', owner: '품질', duration: 5, deps: [{ id: 'T07', type: 'SS', lag: 5 }], gate: 'Q2' },
        { id: 'T05c', name: '액세서리·소모품(컵·브러시·필터·전원코드) 개발·발주', stage: 'S4', owner: '구매', duration: 40, deps: [{ id: 'T05' }] },
        { id: 'T10b', name: '포장 설계 · 포장 낙하 시험 (기프트박스·카톤·완충재 구조)', stage: 'S4', owner: '제조사', duration: 20, deps: [{ id: 'T07' }], site: 'FACTORY' },
        { id: 'T08', name: '시제품 시험 (신뢰성·내구 · 실사용 테스트)', stage: 'S5', owner: '품질', duration: 21, deps: [{ id: 'T07' }] },
        { id: 'Q3', name: '[품질분석] 시험 결과 점검 · 합격 판정 (내구 · 실사용)', stage: 'S5', owner: '품질', duration: 3, deps: [{ id: 'T08' }], gate: 'G3b' },
        { id: 'T09', name: '시험생산 (PVT, 포장·액세서리 포함 완제품)', stage: 'S7', owner: '제조사', duration: 14, deps: [{ id: 'Q3' }, { id: 'T05c' }, { id: 'T10b' }], site: 'FACTORY' },
        { id: 'Q4', name: '[품질분석] 시험생산 점검 (불량률 · 공정 안정성 · 검사 기준)', stage: 'S7', owner: '품질', duration: 3, deps: [{ id: 'T09' }], gate: 'Q4' },
        { id: 'T12a', name: '양산 시방서 합의·서명 (사양·구성품·포장·라벨 위치·검사 기준)', stage: 'S7', owner: '상품개발', duration: 10, deps: [{ id: 'T09', type: 'SS', lag: 0 }] },
        { id: 'T10', name: '시각 디자인 (매뉴얼·라벨·기프트박스·카톤 인쇄 디자인)', stage: 'S3', owner: '디자인', duration: 20, deps: [{ id: 'T09' }] },
        { id: 'T11', name: '인쇄물 최종 승인 (인증번호·마크 반영)', stage: 'S7', owner: '디자인', duration: 10, deps: [{ id: 'CERTS' }, { id: 'T10' }], gate: 'G4a' },
        { id: 'T11b', name: '인쇄물·박스 인쇄 · 공장 입고', stage: 'S7', owner: '구매', duration: 10, deps: [{ id: 'T11' }], site: 'FACTORY' },
        { id: 'T12', name: '양산 승인 · 거래 조건(FOB) 확정 · 코드 채번', stage: 'S7', owner: '상품개발', duration: 7, deps: [{ id: 'T11' }, { id: 'Q4' }, { id: 'T12a' }], gate: 'G4' },
        { id: 'T13', name: '양산 (부품 발주 포함)', stage: 'S8', owner: '제조사', duration: 30, deps: [{ id: 'T12' }], site: 'FACTORY' },
        { id: 'T13b', name: 'A/S 부품·소모품 초기 재고 발주 · A/S 매뉴얼', stage: 'S8', owner: '상품개발', duration: 10, deps: [{ id: 'T13', type: 'SS', lag: 0 }] },
        { id: 'T14', name: '출하 검사 · 첫 출하', stage: 'S8', owner: '품질', duration: 3, deps: [{ id: 'T13' }, { id: 'T11b' }], gate: 'G5', site: 'FACTORY' },
        { id: 'T14b', name: '통관 · 수입 검사 (식품 접촉 정밀검사, 국내 판매 시작 전)', stage: 'S8', owner: '구매', duration: 10, deps: [{ id: 'T14' }], onlyIf: 'importCN' },
        { id: 'Q5', name: '[품질분석] 첫 양산품 점검 (출하검사 · 초기 불량 원인과 대책)', stage: 'S8', owner: '품질', duration: 5, deps: [{ id: 'T14' }], gate: 'Q5' },
        { id: 'T15', name: '양산 후 관리 이관 · 개발 마무리 보고', stage: 'S9', owner: 'PM', duration: 14, deps: [{ id: 'Q5' }], gate: 'G6' },
        { id: 'Q6', name: '[품질분석] 시장 반응 점검 (반품 · 고객 의견 · A/S, 출하 후 약 3개월)', stage: 'S9', owner: '품질', duration: 5, deps: [{ id: 'T14', lag: 60 }], gate: 'Q6', postLaunch: true },
    ],
    rules: [
        { id: 'R1', enabled: true, title: '인증 외부기관 위탁 (KC 포함)', params: {}, paramLabels: {} },
        { id: 'R2', enabled: true, title: 'KC 직접 의뢰 — CB→KC 직렬 전환 제거', params: {}, paramLabels: {} },
        { id: 'R3', enabled: true, title: '인증 착수를 T1 시료 시점으로 당김', params: { t1Lag: 10 }, paramLabels: { t1Lag: '금형 제작 종료 후 인증 시료 확보까지(영업일, T1 1차 수정분 기준 권장 10)' } },
        { id: 'R4', enabled: true, title: '시각디자인·인쇄물 금형 기간 병행', params: { printDays: 5 }, paramLabels: { printDays: '인쇄물 최종 승인 일수' } },
        { id: 'R5', enabled: true, title: '시험생산(PVT)과 인증 병행 · 양산 승인 조건부', params: {}, paramLabels: {} },
        { id: 'R6', enabled: true, title: '장납기 부품 선발주', params: { massDays: 18, preorderDays: 45 }, paramLabels: { massDays: '선발주 시 양산 일수', preorderDays: '장납기 부품 리드타임(일)' } },
        { id: 'R7', enabled: true, title: '계약·설계 오버랩', params: { overlapLag: 10 }, paramLabels: { overlapLag: '계약 착수 후 설계 착수까지(일, SS)' } },
        { id: 'R8', enabled: true, title: '양산 후 관리 문서를 양산 중에 작성', params: { reportDays: 4 }, paramLabels: { reportDays: '첫 출하 뒤 남는 보고·결재 일수' } },
    ],
};
// 저장된 설정에 빠진 작업·규칙·파라미터가 있으면 내장값으로 채움 (버전 업 대비)
function normalizeConfig(c) {
    const base = JSON.parse(JSON.stringify(exports.DEFAULT_CONFIG));
    if (!c)
        return base;
    const tasks = base.tasks.map(d => {
        const s = (c.tasks || []).filter(x => x.id === d.id)[0];
        if (!s)
            return d;
        // 구버전 구조(계약·품질분석 시점 추가 전)는 일수만 가져오고 이름·선후행은 새 기본값 사용
        if ((c.schema || 1) < exports.CONFIG_SCHEMA)
            return Object.assign(Object.assign({}, d), { duration: s.duration, durationLite: s.durationLite });
        return Object.assign(Object.assign(Object.assign({}, d), s), { deps: s.deps || d.deps, site: s.site || d.site, postLaunch: d.postLaunch });
    });
    const rules = base.rules.map(d => {
        const s = (c.rules || []).filter(x => x.id === d.id)[0];
        return s ? Object.assign(Object.assign({}, d), { enabled: s.enabled, title: s.title || d.title, params: Object.assign(Object.assign({}, d.params), (s.params || {})) }) : d;
    });
    return {
        schema: exports.CONFIG_SCHEMA, rev: c.rev || 1, updated: c.updated, updatedBy: c.updatedBy,
        certAnchor: c.certAnchor || base.certAnchor,
        asIsCbSerial: c.asIsCbSerial === undefined ? base.asIsCbSerial : c.asIsCbSerial,
        workdays: c.workdays === undefined ? base.workdays : c.workdays,
        // 중국 달력 도입 전 저장된 설정은 한국 공휴일도 새 기본값(노동절·제헌절, 2027 설 수정)으로 교체
        // 저장된 설정에 아예 없는 해는 내장값으로 채움 (2026-10-27: 저장본이 2027년까지라 2028년 설·추석이 근무일로 계산되던 것)
        holidays: addMissingYears(Array.isArray(c.holidays) && Array.isArray(c.holidaysCN) ? c.holidays : base.holidays, base.holidays),
        holidaysCN: addMissingYears(Array.isArray(c.holidaysCN) ? c.holidaysCN : base.holidaysCN, base.holidaysCN),
        bufferUsual: typeof c.bufferUsual === 'number' && c.bufferUsual >= 1 ? c.bufferUsual : base.bufferUsual,
        bufferSafe: typeof c.bufferSafe === 'number' && c.bufferSafe >= 1 ? c.bufferSafe : base.bufferSafe,
        tasks, rules,
    };
}
function addMissingYears(saved, builtIn) {
    const have = saved.map(h => String(h).slice(0, 4));
    return saved.concat(builtIn.filter(h => have.indexOf(h.slice(0, 4)) < 0));
}
// 순환 참조·없는 작업 참조 검사 → 저장 전 오류 메시지
function validateConfig(c) {
    const errs = [];
    const ids = c.tasks.map(t => t.id);
    c.tasks.forEach(t => {
        if (!(t.duration >= 0))
            errs.push(`${t.id} 기준 일수가 올바르지 않습니다.`);
        t.deps.forEach(d => { if (d.id !== 'CERTS' && ids.indexOf(d.id) < 0)
            errs.push(`${t.id}의 선행 작업 ${d.id}가 없습니다.`); if (d.id === t.id)
            errs.push(`${t.id}가 자기 자신을 선행으로 가집니다.`); });
    });
    const state = {};
    const visit = (id) => {
        if (state[id] === 1)
            return false;
        if (state[id] === 2)
            return true;
        state[id] = 1;
        const t = c.tasks.filter(x => x.id === id)[0];
        const ok = !t || t.deps.every(d => d.id === 'CERTS' || visit(d.id));
        state[id] = 2;
        return ok;
    };
    ids.forEach(id => { if (!visit(id))
        errs.push(`선후행 순환 참조가 있습니다 (${id} 부근).`); });
    if (ids.indexOf(c.certAnchor) < 0)
        errs.push('인증 착수 기준 작업이 없습니다.');
    return errs.filter((e, i) => errs.indexOf(e) === i);
}
class LocalConfigStore {
    constructor() {
        this.key = 'hurom-devhub.config.v1';
    }
    load() {
        const raw = window.localStorage.getItem(this.key);
        return Promise.resolve(raw ? JSON.parse(raw) : undefined);
    }
    save(c) {
        window.localStorage.setItem(this.key, JSON.stringify(c));
        return Promise.resolve();
    }
}
exports.LocalConfigStore = LocalConfigStore;

};
__m["src/webparts/huromDevHub/model/regions.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CERTS = exports.REGIONS = void 0;
exports.certsFor = certsFor;
exports.regionName = regionName;
// 향지 정의 — 전압/플러그/언어/현지 유의사항
exports.REGIONS = [
    { id: 'KR', name: '국내', flag: '🇰🇷', voltage: '220V/60Hz', plug: 'Type C/F', language: '한국어',
        notes: ['KC 마크·인증번호 라벨 표기', '분리배출 표시·포장재 재질구조 표기(자원재활용법)', '사용설명서 한국어, A/S 안내·품질보증서'] },
    { id: 'JP', name: '일본', flag: '🇯🇵', voltage: '100V/50·60Hz', plug: 'Type A', language: '일본어',
        notes: ['100V 사양 → 모터 RPM·소비전력 재검증(선행검토 필수)', 'PSE 마크·수입사업자명 표기', '식품위생법 식품접촉부 시험(JFRL 등) 제조사 날인 서류 3종'] },
    { id: 'CN', name: '중국', flag: '🇨🇳', voltage: '220V/50Hz', plug: 'Type I/A', language: '중국어(간체)',
        notes: ['CCC 강제인증(공장심사 포함)', 'GB 4806 식품접촉 재질', '중국어 라벨·에너지 라벨(해당 시)'] },
    { id: 'TW', name: '대만', flag: '🇹🇼', voltage: '110V/60Hz', plug: 'Type A/B', language: '중국어(번체)',
        notes: ['BSMI 상품검사', '110V 사양 검증'] },
    { id: 'VN', name: '베트남', flag: '🇻🇳', voltage: '220V/50Hz', plug: 'Type A/C', language: '베트남어',
        notes: ['CR 마크(QCVN) 적합성 신고', '베트남어 라벨·카톤 표기(전용 카톤 필요 여부 확인)'] },
    { id: 'US', name: '미국', flag: '🇺🇸', voltage: '120V/60Hz', plug: 'Type A/B', language: '영어',
        notes: ['NRTL(UL/ETL) 인증 — 유통사 요구', 'FCC Part 15', 'Prop 65 경고문(캘리포니아)', 'FDA 식품접촉 적합 선언'] },
    { id: 'CA', name: '캐나다', flag: '🇨🇦', voltage: '120V/60Hz', plug: 'Type A/B', language: '영어/불어',
        notes: ['cETL/cUL/CSA', 'ISED ICES-003', '영·불 이중 표기'] },
    { id: 'EU', name: '유럽(EU)', flag: '🇪🇺', voltage: '230V/50Hz', plug: 'Type C/F', language: '판매국 언어',
        notes: ['CE(LVD·EMC·RoHS·ErP) DoC 작성', 'FCM: EC 1935/2004, (EU) 10/2011 + 독일 LFGB', 'WEEE·포장재 EPR 등록(국가별)', '배터리 포함 시 EU 배터리 규정'] },
    { id: 'UK', name: '영국', flag: '🇬🇧', voltage: '230V/50Hz', plug: 'Type G', language: '영어',
        notes: ['UKCA(또는 CE 인정 범위 확인)', 'BS 1363 플러그', 'UK WEEE'] },
    { id: 'IL', name: '이스라엘', flag: '🇮🇱', voltage: '230V/50Hz', plug: 'Type H/C', language: '히브리어',
        notes: ['SII 수입 승인(SI 60335)', '히브리어 라벨·매뉴얼', 'Type H 플러그'] },
    { id: 'AU', name: '호주', flag: '🇦🇺', voltage: '230V/50Hz', plug: 'Type I', language: '영어',
        notes: ['RCM / EESS 등록', 'AS/NZS 60335'] },
    { id: 'EAEU', name: '러시아·EAEU', flag: '🇷🇺', voltage: '230V/50Hz', plug: 'Type C/F', language: '러시아어',
        notes: ['EAC 적합 선언/인증', '러시아어 라벨'] },
];
const always = () => true;
const ac = (f) => f.ac || f.adapter;
const elec = (f) => f.ac || f.adapter || f.battery || f.motor || f.heater;
// 인증 라이브러리 — 소요일은 표준 참고값(기관·품목별로 다름, 접수 전 기관 확인)
// leadDays: 제조사/자체 주도 직렬 진행 시, outsourcedDays: 외부 인증기관 위탁·서류 대행 시
exports.CERTS = [
    // ── 국내
    { id: 'KR-KC-SAFE', region: 'KR', name: 'KC 안전인증', law: '전기용품 및 생활용품 안전관리법 (KC 60335-1, -2-xx)',
        when: ac, leadDays: 60, outsourcedDays: 35, sample: 'T1', agencies: ['KTR', 'KTC', 'KTL', 'KCL'],
        docs: ['신청서', '부품 리스트(중요부품)', '회로도', '사용설명서', '라벨 시안', '시료 3~5대'],
        tip: 'CB 성적서가 있으면 KC로 전환 가능하지만, 외부기관에 KC를 직접 의뢰하고 CB와 같은 시료로 동시 진행하면 직렬 60일을 제거할 수 있음. 인증서는 제품시험 합격 + 최초 공장심사 적합 후 발급', reuseCB: true },
    { id: 'KR-KC-FA', region: 'KR', name: 'KC 안전인증 최초 공장심사', law: '전기용품 및 생활용품 안전관리법 (안전인증 공장심사)',
        when: ac, leadDays: 30, outsourcedDays: 15, sample: 'DOC', agencies: ['KTR', 'KTC', 'KTL', 'KCL'], factoryAudit: true,
        docs: ['품질관리 규정·QC 공정도', '수입·공정·출하 검사기준서', '중요부품(KC 인증부품) 관리대장', '시험·검사설비 교정성적서', '생산라인 가동(PVT 이상)'],
        tip: '해외공장은 인증기관 심사원 출장 일정(통상 2~4주 전 예약)이 필요. 라인이 돌아가는 PVT 기간에 맞춰 미리 예약하면 대기 없음. 인증 후 매년 정기 공장심사' },
    { id: 'KR-KC-EMC', region: 'KR', name: 'KC 전자파 적합등록', law: '전파법 (KN 14-1/14-2)',
        when: elec, leadDays: 30, outsourcedDays: 21, sample: 'T1', agencies: ['KTR', 'KTC', 'KTL', 'KCL', 'DT&C'],
        docs: ['회로도', '부품배치도', '외관사진', '사용설명서', '시료 2대'],
        tip: 'EVT 시료로 Pre-scan 먼저 → 본시험 재시험 리스크 제거' },
    { id: 'KR-RF', region: 'KR', name: 'KC 무선 적합인증', law: '전파법 (무선설비)',
        when: f => f.wireless, leadDays: 40, outsourcedDays: 28, sample: 'T1', agencies: ['DT&C', 'KTL', 'KTC'],
        docs: ['모듈 인증서(인증 모듈 사용 시 간소화)', '안테나 사양', '시료'] },
    { id: 'KR-BAT', region: 'KR', name: 'KC 배터리 안전확인', law: '전기용품안전관리법 (리튬2차전지)',
        when: f => f.battery, leadDays: 30, outsourcedDays: 21, sample: 'DOC', agencies: ['KTR', 'KTC', 'KTL'],
        docs: ['셀/팩 인증서', 'MSDS', 'UN38.3(운송)'] },
    { id: 'KR-FOOD', region: 'KR', name: '식품접촉부 시험 (기구·용기·포장)', law: '식품위생법 기구 및 용기·포장 기준 및 규격',
        when: f => f.foodContact, leadDays: 28, outsourcedDays: 14, sample: 'T1', agencies: ['KTR', 'KCL', 'KOTITI', 'SGS Korea'],
        docs: ['식품접촉부 재질 리스트', '부품별 시료(T1 사출품 가능)'],
        tip: '재질 확정 = 시험 가능. 금형 T1 사출품으로 즉시 의뢰하면 PVT 대기 불필요' },
    { id: 'KR-NONUSE', region: 'KR', name: '유해물질 비사용증명서', law: '자율(유통사·법인 요구)', when: always,
        leadDays: 7, outsourcedDays: 5, sample: 'DOC', agencies: ['제조사 날인'], docs: ['Declaration of Conformity'] },
    { id: 'KR-PKG', region: 'KR', name: '포장재 재질·구조 / 분리배출 표시', law: '자원의 절약과 재활용촉진에 관한 법률',
        when: always, leadDays: 14, outsourcedDays: 10, sample: 'DOC', agencies: ['포장재 검사기관'], docs: ['포장재 재질증명(Packaging part list)', '포장공간비율·포장횟수'] },
    // ── 공통 (CB)
    { id: 'GL-CB', region: 'GLOBAL', name: 'CB 성적서 (IECEE)', law: 'IEC 60335-1, -2-xx',
        when: ac, leadDays: 35, outsourcedDays: 30, sample: 'T1', agencies: ['TÜV', 'Intertek', 'SGS', 'KTC(NCB)'],
        docs: ['부품 리스트', '회로도', '라벨', '시료'], tip: 'KC/CE/PSE/SII 등 다수 향지 재활용. 해외 향지가 있을 때만 필요' },
    { id: 'GL-ROHS', region: 'GLOBAL', name: 'RoHS 시험성적서', law: 'IEC 62321', when: elec,
        leadDays: 14, outsourcedDays: 10, sample: 'T1', agencies: ['SGS', 'Intertek', 'KTR'], docs: ['BOM 재질 리스트', '부품 시료'] },
    // ── 일본
    { id: 'JP-PSE', region: 'JP', name: 'PSE (원형/마름모)', law: '전기용품안전법', when: ac,
        leadDays: 45, outsourcedDays: 30, sample: 'T1', agencies: ['JET', 'JQA', 'TÜV Rheinland Japan'],
        docs: ['위임장(Letter of Authorization)', '시험성적서', '라벨'], reuseCB: true },
    { id: 'JP-FOOD', region: 'JP', name: '일본 식품접촉부 시험', law: '식품위생법(일본)', when: f => f.foodContact,
        leadDays: 35, outsourcedDays: 21, sample: 'T1', agencies: ['JFRL(일본식품분석센터)', 'SGS Japan'],
        docs: ['CI(제조사 날인)', 'Material List(제조사 날인)', '동재질증명서(제조사 날인)', '제품사양서', '분해도'] },
    { id: 'JP-RF', region: 'JP', name: 'TELEC (무선)', law: '전파법(일본)', when: f => f.wireless,
        leadDays: 30, outsourcedDays: 21, sample: 'T1', agencies: ['TELEC', 'DSP Research'], docs: ['모듈 인증'] },
    // ── 중국 / 대만 / 베트남
    { id: 'CN-CCC', region: 'CN', name: 'CCC', law: '중국 강제인증', when: ac, leadDays: 75, outsourcedDays: 55, sample: 'T1',
        agencies: ['CQC'], docs: ['공장심사', '시료'], tip: '공장심사 일정이 병목 — 금형 승인 즉시 공장심사 예약' },
    { id: 'CN-FOOD', region: 'CN', name: 'GB 4806 식품접촉', law: 'GB 4806 시리즈', when: f => f.foodContact,
        leadDays: 21, outsourcedDays: 14, sample: 'T1', agencies: ['SGS', 'CTI'], docs: ['재질 리스트'] },
    { id: 'TW-BSMI', region: 'TW', name: 'BSMI', law: '상품검사법', when: elec, leadDays: 45, outsourcedDays: 30, sample: 'T1',
        agencies: ['BSMI 지정기관'], docs: ['CB 성적서', '시료'], reuseCB: true },
    { id: 'VN-CR', region: 'VN', name: 'CR 마크 (QCVN)', law: 'QCVN 4:2009/BKHCN 등', when: elec, leadDays: 30, outsourcedDays: 21, sample: 'DOC',
        agencies: ['QUATEST'], docs: ['CB/시험성적서', '수입 신고'] },
    // ── 미주
    { id: 'US-NRTL', region: 'US', name: 'UL / ETL (NRTL)', law: 'UL 1082 / UL 982 / UL 1026 등', when: ac,
        leadDays: 90, outsourcedDays: 60, sample: 'T1', agencies: ['UL', 'Intertek(ETL)', 'TÜV SÜD America'],
        docs: ['CDR(Critical Components)', '회로도', '라벨', '시료'], tip: '공장 초기 심사(IPI) 일정 포함' },
    { id: 'US-FCC', region: 'US', name: 'FCC Part 15B (SDoC)', law: '47 CFR Part 15', when: elec,
        leadDays: 21, outsourcedDays: 14, sample: 'T1', agencies: ['Intertek', 'SGS', 'DT&C'], docs: ['시험 보고서', 'SDoC'] },
    { id: 'US-FDA', region: 'US', name: 'FDA 식품접촉 적합 선언', law: '21 CFR 174-186', when: f => f.foodContact,
        leadDays: 21, outsourcedDays: 14, sample: 'T1', agencies: ['SGS', 'Intertek'], docs: ['재질 리스트', '시험 보고서'] },
    { id: 'US-P65', region: 'US', name: 'Prop 65 경고 검토', law: 'California Proposition 65', when: always,
        leadDays: 10, outsourcedDays: 7, sample: 'DOC', agencies: ['SGS'], docs: ['재질 리스트'] },
    { id: 'CA-CSA', region: 'CA', name: 'cETL / cUL / CSA', law: 'CSA C22.2', when: ac, leadDays: 60, outsourcedDays: 30, sample: 'T1',
        agencies: ['Intertek', 'UL', 'CSA'], docs: ['NRTL와 동시 신청'], tip: 'US NRTL과 같은 프로젝트로 묶으면 추가 30일 미만' },
    { id: 'CA-ICES', region: 'CA', name: 'ISED ICES-003', law: 'ICES-003', when: elec, leadDays: 14, outsourcedDays: 7, sample: 'DOC',
        agencies: ['FCC 시험소'], docs: ['FCC 보고서 활용'] },
    // ── 유럽 / 영국
    { id: 'EU-CE-LVD', region: 'EU', name: 'CE – LVD', law: '2014/35/EU (EN 60335-1, -2-xx, EN 62233)', when: ac,
        leadDays: 40, outsourcedDays: 25, sample: 'T1', agencies: ['TÜV', 'Intertek', 'SGS'], docs: ['CB 성적서 활용', 'DoC'], reuseCB: true },
    { id: 'EU-CE-EMC', region: 'EU', name: 'CE – EMC', law: '2014/30/EU (EN 55014-1/-2, EN 61000-3-2/-3)', when: elec,
        leadDays: 30, outsourcedDays: 21, sample: 'T1', agencies: ['TÜV', 'Intertek', 'SGS'], docs: ['시험 보고서'] },
    { id: 'EU-RED', region: 'EU', name: 'CE – RED (무선)', law: '2014/53/EU', when: f => f.wireless, leadDays: 45, outsourcedDays: 30, sample: 'T1',
        agencies: ['TÜV', 'Intertek'], docs: ['RF·EMC·SAR'] },
    { id: 'EU-ERP', region: 'EU', name: 'ErP (대기전력)', law: '(EU) 2023/826', when: ac, leadDays: 14, outsourcedDays: 10, sample: 'T1',
        agencies: ['TÜV', 'SGS'], docs: ['대기전력 측정'] },
    { id: 'EU-FCM', region: 'EU', name: 'FCM / LFGB', law: 'EC 1935/2004, (EU) 10/2011, LFGB §30/31', when: f => f.foodContact,
        leadDays: 35, outsourcedDays: 21, sample: 'T1', agencies: ['SGS', 'TÜV', 'Eurofins'], docs: ['재질 리스트', 'DoC'] },
    { id: 'EU-REACH', region: 'EU', name: 'REACH SVHC', law: 'EC 1907/2006', when: always, leadDays: 14, outsourcedDays: 10, sample: 'DOC',
        agencies: ['SGS'], docs: ['SVHC 선언'] },
    { id: 'EU-WEEE', region: 'EU', name: 'WEEE·포장 EPR 등록', law: '2012/19/EU + 국가별', when: elec, leadDays: 30, outsourcedDays: 14, sample: 'DOC',
        agencies: ['현지 대행사'], docs: ['판매국별 등록'] },
    { id: 'EU-BAT', region: 'EU', name: 'EU 배터리 규정', law: '(EU) 2023/1542', when: f => f.battery, leadDays: 30, outsourcedDays: 21, sample: 'DOC',
        agencies: ['TÜV', 'SGS'], docs: ['배터리 라벨·여권 대응'] },
    { id: 'UK-UKCA', region: 'UK', name: 'UKCA / UK 적합선언', law: 'UK EESR 2016, EMC Reg 2016', when: elec, leadDays: 21, outsourcedDays: 14, sample: 'DOC',
        agencies: ['TÜV UK', 'Intertek UK'], docs: ['CE 보고서 활용', 'UK DoC'] },
    { id: 'UK-PLUG', region: 'UK', name: 'BS 1363 플러그', law: 'Plugs & Sockets Regulations 1994', when: ac, leadDays: 14, outsourcedDays: 7, sample: 'DOC',
        agencies: ['ASTA', 'BSI'], docs: ['플러그 인증서'] },
    // ── 이스라엘 / 호주 / EAEU
    { id: 'IL-SII', region: 'IL', name: 'SII 수입 승인', law: 'SI 60335 / 수입 표준', when: elec, leadDays: 60, outsourcedDays: 40, sample: 'DOC',
        agencies: ['SII', '현지 수입사'], docs: ['CB 성적서', '히브리어 매뉴얼·라벨'], reuseCB: true, tip: '현지 수입사 명의 신청 — 계약 단계에서 책임 명시' },
    { id: 'AU-RCM', region: 'AU', name: 'RCM / EESS', law: 'AS/NZS 60335, AS/NZS CISPR 14', when: elec, leadDays: 45, outsourcedDays: 30, sample: 'DOC',
        agencies: ['SAA', 'EESS'], docs: ['CB 성적서'], reuseCB: true },
    { id: 'EAEU-EAC', region: 'EAEU', name: 'EAC', law: 'TR CU 004/2011, 020/2011', when: elec, leadDays: 45, outsourcedDays: 30, sample: 'DOC',
        agencies: ['현지 인증기관'], docs: ['CB 성적서', '러시아어 라벨'], reuseCB: true },
];
function certsFor(regions, f) {
    const list = exports.CERTS.filter(c => (c.region === 'GLOBAL' || regions.indexOf(c.region) >= 0) && c.when(f));
    // CB는 국내 외 향지가 있을 때만 필요
    const overseas = regions.some(r => r !== 'KR');
    return list.filter(c => c.id !== 'GL-CB' || overseas);
}
function regionName(id) {
    if (id === 'GLOBAL')
        return '공통';
    const r = exports.REGIONS.filter(x => x.id === id)[0];
    return r ? `${r.flag} ${r.name}` : id;
}

};
__m["src/webparts/huromPlm/model/juicer.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelFolder = exports.partFolder = exports.formSheets = exports.slotKey = exports.milestoneOn = exports.devByOf = exports.r12Started = exports.gradeOfProduct = exports.isMust = exports.appliesTo = exports.markOf = exports.stageLabel = exports.R12_FILE = exports.FORM_FOLDER = exports.GOODS_STAGE_FOLDER = exports.MOLD_DIR = exports.ECO_DIR = exports.PART_FOLDER = exports.STD_FOLDER = exports.MILESTONE_FOLDERS = exports.MILESTONES = exports.J_STAGES = exports.gradeOf = exports.GRADE_NOTE = exports.DEV_KINDS = exports.DEV_BY_LABEL = exports.lineLabel = exports.lineOf = exports.LINES = void 0;
exports.tasksOf = tasksOf;
exports.stagesOf = stagesOf;
exports.curStage = curStage;
exports.nextStage = nextStage;
exports.docsAt = docsAt;
exports.taskDue = taskDue;
exports.stageDue = stageDue;
exports.juicerChecks = juicerChecks;
const r12_1 = require("src/webparts/huromPlm/model/r12.js");
const schedule_1 = require("src/webparts/huromDevHub/model/schedule.js");
exports.LINES = [
    { id: 'juicer', label: '원액기군', desc: '휴롬 개발 단계 체계도 R12 기준 (등급 A~D)' },
    { id: 'goods', label: '상품군', desc: 'ODM 상품 · 개발 중 → 양산 중 → 단종' },
];
const lineOf = (p) => p.line || 'goods';
exports.lineOf = lineOf;
const lineLabel = (l) => exports.LINES.filter(x => x.id === l)[0].label;
exports.lineLabel = lineLabel;
exports.DEV_BY_LABEL = { hurom: '휴롬 개발', oem: '사외(OEM) 개발' };
// <표1 개발 제품군별 등급 구분표>
exports.DEV_KINDS = [
    { id: 'new-both', label: '신규 개발 — 드럼부 + 본체부', grade: 'A' },
    { id: 'new-drum', label: '신규 개발 — 드럼부', grade: 'A' },
    { id: 'new-body', label: '신규 개발 — 본체부', grade: 'B' },
    { id: 'chg-drum', label: '부분 변경 — 드럼부', grade: 'B' },
    { id: 'chg-body', label: '부분 변경 — 본체부 동작부', grade: 'B' },
    { id: 'chg-look', label: '부분 변경 — 본체부 외관(신작)', grade: 'C' },
    { id: 'spec', label: '기타 개발 — 사양', grade: 'D' },
    { id: 'acc', label: '기타 개발 — 액세서리', grade: 'D' },
    { id: 'etc', label: '기타 개발 — 기타', grade: 'D' },
];
exports.GRADE_NOTE = {
    A: '본체부·드럼부 신규 개발. 사내(휴롬)·사외(MIDEA 외) 개발 모두 포함, 사내/사외 업무 주관 구분 관리',
    B: 'T단계 평가 제외 · PP 단계 진행 · 시양산 단계 제외',
    C: '설계변경 프로세스 절차로 개발 진행 (예: H420 본체 개발, 3L 대용량 호퍼, 컵류) · CFT 실사용 평가 제외',
    D: '사양·액세서리·기타 개발',
};
const gradeOf = (devKind) => (exports.DEV_KINDS.filter(k => k.id === devKind)[0] || { grade: undefined }).grade;
exports.gradeOf = gradeOf;
exports.J_STAGES = [
    { id: 'design', group: '기획', label: '디자인', folder: '01 디자인' },
    { id: 'kickoff', group: '구조설계·금형제작', label: '개발 시작', folder: '02 개발 시작' },
    { id: 'eng', group: '구조설계·금형제작', label: '제품설계', folder: '03 제품설계', milestone: 0 },
    { id: 'mold', group: '구조설계·금형제작', label: '금형개발', folder: '04 금형개발' },
    { id: 't0', group: '제품 개발 (T단계)', label: 'T0', folder: '05 T0', milestone: 1 },
    { id: 'tn', group: '제품 개발 (T단계)', label: 'T(n)', folder: '06 T(n)', milestone: 2 },
    { id: 'pp', group: '개발시험생산 (PP)', label: 'PP·부품승인', folder: '07 PP·부품승인', milestone: 3 },
    { id: 'premp', group: '양산', label: '선행양산 (Pre MP)', folder: '08 선행양산' },
    { id: 'mp', group: '양산', label: '양산·초기유동', folder: '09 양산·초기유동' },
];
// SharePoint 폴더 이름은 '번호 + 띄어쓰기 + 이름'으로 (2026-10-29 준보님 '이쁘게, 복잡하면 싫어하실 것')
exports.MILESTONES = ['설계', 'T0', 'T(n)', 'PP·선행양산'];
exports.MILESTONE_FOLDERS = ['설계 완료', 'T0 완료', 'T(n) 완료', 'PP 완료'];
exports.STD_FOLDER = '10 표준 문서';
exports.PART_FOLDER = '부품';
exports.ECO_DIR = '설계 변경'; // 설계 변경 첨부: <군>/<코드>/설계 변경/ECO-001
exports.MOLD_DIR = '금형'; // 금형 첨부: <군>/<코드>/금형/<부품>
exports.GOODS_STAGE_FOLDER = '양산·단종 서류';
exports.FORM_FOLDER = '00 양식';
exports.R12_FILE = '개발 단계 체계도(프로세스)_R12_20240513.xlsx';
const stageLabel = (id) => (exports.J_STAGES.filter(s => s.id === id)[0] || { label: '-' }).label;
exports.stageLabel = stageLabel;
const gi = (g) => ['A', 'B', 'C', 'D'].indexOf(g);
const markOf = (x, g) => x.g.charAt(gi(g));
exports.markOf = markOf;
const appliesTo = (x, g, by) => (0, exports.markOf)(x, g) !== 'X' && (by === 'oem' ? x.o : x.h) !== 'X';
exports.appliesTo = appliesTo;
const isMust = (x, g, by) => (0, exports.appliesTo)(x, g, by) && (0, exports.markOf)(x, g) === '●';
exports.isMust = isMust;
const gradeOfProduct = (p) => (0, exports.gradeOf)(p.devKind) || 'A';
exports.gradeOfProduct = gradeOfProduct;
// R12 개발이 시작됐나 — 개발 발의일·단계·체크 중 하나라도 있으면. 그전(기획 중)엔 R12 할 일을 세지 않음 (1.0.39)
const r12Started = (p) => !!(p.jStart || p.jStage || Object.keys(p.jTasks || {}).length);
exports.r12Started = r12Started;
const devByOf = (p) => p.devBy || 'hurom';
exports.devByOf = devByOf;
function tasksOf(stage, p) {
    const g = (0, exports.gradeOfProduct)(p);
    const by = (0, exports.devByOf)(p);
    return r12_1.R12_TASKS.filter(t => t.stage === stage && (0, exports.appliesTo)(t, g, by));
}
// 이 등급·개발 주체에 해당하는 단계만 (예: C·D등급은 T0 없음, 선행양산은 A등급만)
function stagesOf(p) {
    return exports.J_STAGES.filter(s => tasksOf(s.id, p).length > 0);
}
// 등급을 바꿔서 지금 단계가 그 등급에 없으면 그다음 해당 단계로
function curStage(p) {
    const ss = stagesOf(p);
    const j = p.jStage;
    if (!j)
        return ss[0].id;
    if (ss.some(s => s.id === j))
        return j;
    const order = exports.J_STAGES.map(s => s.id);
    const k = order.indexOf(j);
    const nx = ss.filter(s => order.indexOf(s.id) > k)[0];
    return (nx || ss[ss.length - 1]).id;
}
function nextStage(p) {
    const ss = stagesOf(p);
    const i = ss.map(s => s.id).indexOf(curStage(p));
    return i >= 0 ? ss[i + 1] : undefined;
}
// 표준 문서(표준류): 이 단계(milestone) 완료 때 필요한 것
function docsAt(m, p) {
    const g = (0, exports.gradeOfProduct)(p);
    const by = (0, exports.devByOf)(p);
    return r12_1.R12_DOCS.filter(d => d.at.charAt(m) === '1' && (0, exports.appliesTo)(d, g, by));
}
// 그 milestone 단계가 이 등급에 없으면(예: C급 T0) 그 열은 안 봄
const milestoneOn = (m, p) => stagesOf(p).some(s => s.milestone === m);
exports.milestoneOn = milestoneOn;
const slotKey = (docId, m) => `${docId}@${m}`;
exports.slotKey = slotKey;
const formSheets = (form) => {
    if (!form)
        return [];
    const nos = form.split(/[,·\s]+/).filter(Boolean);
    return r12_1.R12_FORMS.filter(s => nos.some(n => s.indexOf(n + '.') === 0 || s.indexOf(n + '-') === 0));
};
exports.formSheets = formSheets;
// R12 표준 일정(D+일)으로 업무 예정일 — 개발 발의일을 넣으면 자동 계산 (달력 기준 일수)
function taskDue(p, t) {
    return p.jStart && /^\d+$/.test(t.std || '') ? (0, schedule_1.addDays)(p.jStart, Number(t.std)) : undefined;
}
function stageDue(p, stage) {
    const ds = tasksOf(stage, p).map(t => taskDue(p, t)).filter(Boolean);
    return ds.length ? ds.sort()[ds.length - 1] : undefined;
}
// 지금 단계를 끝내고 다음으로 넘어갈 준비: 필수(●) 업무 완료, 이 단계 완료 표준 문서, PP는 부품 승인까지
function juicerChecks(p) {
    const s = curStage(p);
    const st = exports.J_STAGES.filter(x => x.id === s)[0];
    const g = (0, exports.gradeOfProduct)(p);
    const by = (0, exports.devByOf)(p);
    const jt = p.jTasks || {};
    const must = tasksOf(s, p).filter(t => (0, exports.isMust)(t, g, by));
    const left = must.filter(t => !(jt[t.id] && (jt[t.id].done || jt[t.id].na)));
    const checks = [{ label: '필수 업무', ok: left.length === 0, detail: left.length ? `${must.length - left.length}/${must.length} 완료` : `${must.length}개 모두 완료` }];
    const noFile = must.filter(t => t.output && t.output !== '-' && !(jt[t.id] && (jt[t.id].url || jt[t.id].na)));
    checks.push({ label: '산출 문서', ok: noFile.length === 0, detail: noFile.length ? `파일 없는 것 ${noFile.length}개` : '파일 다 있음' });
    if (st && st.milestone !== undefined) {
        const docs = docsAt(st.milestone, p).filter(d => (0, exports.isMust)(d, g, by));
        const miss = docs.filter(d => { const v = (p.jDocs || {})[(0, exports.slotKey)(d.id, st.milestone)] || {}; return !v.na && !(v.url || '').trim(); });
        checks.push({ label: `표준 문서 (${exports.MILESTONES[st.milestone]} 완료본)`, ok: miss.length === 0, detail: miss.length ? `없는 것 ${miss.length}개` : `${docs.length}개 다 있음` });
    }
    if (s === 'pp') {
        const un = p.parts.filter(x => x.status !== 'approved').length;
        checks.push({ label: '부품 승인원 승인', ok: un === 0, detail: un ? `승인 안 된 부품 ${un}개` : '모두 승인' });
    }
    return { to: nextStage(p), checks, left };
}
// 부품 폴더 이름: '도번 부품명' (같은 이름 부품이 여럿이어도 안 섞이게)
const partFolder = (x) => [x.partNo, x.name].filter(s => (s || '').trim()).join(' ').trim() || '이름 없는 부품';
exports.partFolder = partFolder;
// SharePoint 폴더: PLM 자료 / 원액기군·상품군 / 모델 / 단계(또는 부품·표준문서)
const modelFolder = (p) => [(0, exports.lineLabel)((0, exports.lineOf)(p)), (p.code || p.name || '이름 없음').trim()];
exports.modelFolder = modelFolder;

};
__m["src/webparts/huromPlm/model/r12.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.R12_FORMS = exports.R12_DOCS = exports.R12_TASKS = void 0;
exports.R12_TASKS = [{ "id": "r5", "stage": "design", "name": "제품 디자인 컨셉", "g": "●●●●", "h": "●", "o": "●", "owner": "제품전략팀", "with": "개발,품기,생산, 구매자재팀", "input": "제품 기획서", "output": "Design Data (컨셉)" }, { "id": "r6", "stage": "design", "name": "제품 가설계", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "제품전략팀", "input": "Design Data (컨셉)", "output": "3D 설계 DATA (가설계)" }, { "id": "r7", "stage": "design", "name": "제품 가단가 투자비", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "구매자재팀,생산팀", "input": "3D 설계 DATA (가설계)", "output": "가단가리스트, 금형 견적서" }, { "id": "r8", "stage": "design", "name": "제품 디자인 확정 (3D 랜더링)", "g": "●●●◎", "h": "●", "o": "●", "owner": "제품전략팀", "with": "개발,품기,생산, 구매자재팀", "input": "3D 설계 DATA (가설계),단가", "output": "디자인 시방서(초안)" }, { "id": "r9", "stage": "kickoff", "name": "개발 발의", "g": "●●●●", "h": "●", "o": "●", "owner": "제품전략팀", "with": "개발팀", "input": "디자인 시방서(초안), 기획서", "output": "개발 발의서", "days": "0", "std": "D day" }, { "id": "r10", "stage": "kickoff", "name": "최종 견적 산출 (금형투자비 , 전용설비투자비 산출)", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "구매자재팀", "input": "가단가리스트, 금형 견적서", "output": "가단가리스트, 금형 견적서", "days": "2", "std": "2" }, { "id": "r11", "stage": "kickoff", "name": "최종 견적 확정 및 품의", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "개발팀", "input": "가단가리스트, 금형 견적서", "output": "기안서 (전자결재)", "days": "2", "std": "4" }, { "id": "r12", "stage": "kickoff", "name": "최종 계약 체결 (원액기 개발 및 생산 내용 반영)", "g": "●●●◎", "h": "X", "o": "●", "owner": "상품구매팀", "with": "CFT", "input": "기안서 (전자결재)", "output": "계약서", "days": "3", "std": "7" }, { "id": "r13", "stage": "eng", "name": "개발 일정 제정(대일정,개발일정,금형제작,Try일정외)", "g": "●●●●", "h": "●", "o": "●", "owner": "개발팀", "with": "품기팀", "input": "제품 기획서", "output": "개발일정표(마스터스케쥴)", "form": "1", "days": "1", "std": "8" }, { "id": "r14", "stage": "eng", "name": "제품설계(3D 모델링 : 개발팀 설계 DR)", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "개발팀", "input": "3D 설계 DATA (가설계)", "output": "3D 설계 DATA", "days": "7", "std": "7" }, { "id": "r15", "stage": "eng", "name": "설계 품평회(CFT D R 리뷰)", "g": "●●◎◎", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "3D 설계 DATA", "output": "설계 DR보고서", "form": "2", "days": "3", "std": "10" }, { "id": "r16", "stage": "eng", "name": "목업 제작", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "개발팀", "input": "설계 DR보고서", "output": "제품 Mock Up", "days": "5", "std": "15" }, { "id": "r17", "stage": "eng", "name": "목업 품평회 (FMEA Check Sheet 확인)", "g": "●●◎◎", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "제품 Mock Up", "output": "개발 PL Check Sheet", "form": "3", "days": "2", "std": "17" }, { "id": "r18", "stage": "eng", "name": "금형 배분회의", "g": "●●●◎", "h": "●", "o": "X", "owner": "구매자재팀", "with": "개발팀", "input": "금형 제작 사양서(P List)", "output": "금형배분 전결", "days": "별도 관리", "std": "별도 관리" }, { "id": "r19", "stage": "eng", "name": "금형 제작용 도면 출도 (3D 도면)", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "개발팀", "input": "개발 PL Check Sheet", "output": "2D, 3D 도면", "days": "1", "std": "18" }, { "id": "r20", "stage": "mold", "name": "금형 제작 발주", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "개발팀", "input": "2D, 3D 도면", "output": "금형 제작 사양서 (초안)", "form": "4", "days": "1", "std": "18" }, { "id": "r21", "stage": "mold", "name": "금형 설계", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "개발팀", "input": "2D, 3D 도면, 금형 제작 사양서", "output": "금형 설계도", "days": "3", "std": "21" }, { "id": "r22", "stage": "mold", "name": "금형 DR (사전 리뷰)", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "개발팀", "input": "금형 제작 사양서 (초안)", "output": "금형 DR 보고서", "form": "5", "days": "1", "std": "22" }, { "id": "r23", "stage": "mold", "name": "금형 제작 사양 확정", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "개발팀", "input": "DR 보고서", "output": "금형 제작 사양서", "days": "1", "std": "23" }, { "id": "r24", "stage": "mold", "name": "금형 제작 완료", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "개발팀", "input": "개발일정표(마스터스케쥴)", "output": "개발일정표(마스터스케쥴)", "days": "45", "std": "63" }, { "id": "r25", "stage": "t0", "name": "T(0) 시사출 일정표", "g": "●●XX", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "개발일정표(마스터스케쥴)", "output": "개발일정표(마스터스케쥴)", "days": "1", "std": "63" }, { "id": "r26", "stage": "t0", "name": "T(0) 시사출", "g": "●●XX", "h": "●", "o": "●", "owner": "개발팀", "with": "개발팀", "input": "개발일정표(마스터스케쥴)", "output": "시사출 결과 보고서", "form": "6", "days": "2", "std": "65" }, { "id": "r27", "stage": "t0", "name": "T(0) 샘플 제작", "g": "●●XX", "h": "●", "o": "●", "owner": "개발팀", "with": "개발팀", "input": "시사출 결과 보고서", "output": "T0 제품", "days": "1", "std": "66" }, { "id": "r28", "stage": "t0", "name": "T(0) 평가 (FMEA Check Sheet DR 반영 확인)", "g": "●●XX", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "output": "개발 PL Check Sheet", "days": "2", "std": "68" }, { "id": "r29", "stage": "t0", "name": "T(0) 금형 수정 (문제점 Debugging)", "g": "●●XX", "h": "●", "o": "●", "owner": "개발팀", "with": "개발팀", "input": "개발 PL Check Sheet", "output": "개발이슈관리대장 금형수정LIST", "form": "7,8", "days": "14", "std": "79" }, { "id": "r30", "stage": "tn", "name": "T(n) 시사출 일정표", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "품기팀", "input": "개발이슈관리대장 금형수정LIST", "output": "개발일정표(마스터스케쥴)", "days": "1", "std": "79" }, { "id": "r31", "stage": "tn", "name": "T(n) 평가 계획서", "g": "●●XX", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "T(n) 제품", "output": "제품평가 계획서", "form": "9", "days": "3", "std": "82" }, { "id": "r32", "stage": "tn", "name": "T(n) 시사출", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "품기팀", "input": "개발일정표(마스터스케쥴)", "output": "시사출 결과 보고서", "days": "5", "std": "84" }, { "id": "r33", "stage": "tn", "name": "T(n) 샘플 제작", "g": "●●◎◎", "h": "●", "o": "●", "owner": "개발팀", "with": "생산 품기팀", "input": "시사출 결과 보고서", "output": "T(n) 제품", "days": "2", "std": "86" }, { "id": "r34", "stage": "tn", "name": "T(n) 샘플 평가", "g": "●●◎◎", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "제품평가 계획서 제품", "output": "제품평가 결과서", "form": "10", "days": "3", "std": "89" }, { "id": "r35", "stage": "tn", "name": "T(n) 단계 문제점 등록 회의", "g": "●●XX", "h": "●", "o": "●", "owner": "품기팀", "with": "CFT", "input": "제품평가 결과서", "output": "개발이슈관리대장", "days": "1", "std": "90" }, { "id": "r36", "stage": "tn", "name": "T(n) 제품 부품 시험 평가", "g": "●●●◎", "h": "●", "o": "●", "owner": "품기팀", "with": "개발팀", "input": "시험 계획서", "output": "시험 결과서", "days": "5", "std": "91" }, { "id": "r37", "stage": "tn", "name": "T(n) 금형 수정 (문제점 Debugging)", "g": "●●◎◎", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "개발이슈관리대장", "output": "개발이슈관리대장 금형수정LIST", "days": "14", "std": "104" }, { "id": "r38", "stage": "tn", "name": "T(n) 문제점 개선 회의 (CFT)", "g": "●●XX", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "개발이슈관리대장 금형수정LIST", "output": "개발이슈관리대장 회의록", "days": "7", "std": "97" }, { "id": "r39", "stage": "tn", "name": "제품 인증 의뢰 (인증 촬영용 샘플)", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발기술팀", "with": "개발기술팀", "input": "T(n) 제품", "output": "인증 의뢰서", "days": "별도 관리", "std": "별도 관리" }, { "id": "r40", "stage": "tn", "name": "T 개선 부품 추가 확인(부품 PP)", "g": "●●●X", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "개발이슈관리대장 회의록", "output": "개발이슈관리대장", "days": "7", "std": "111" }, { "id": "r41", "stage": "tn", "name": "표준류(초안) 작성 완료", "g": "●●●●", "h": "●", "o": "●", "owner": "CFT", "with": "CFT", "input": "표준문서", "output": "표준문서", "days": "3", "std": "114" }, { "id": "r42", "stage": "tn", "name": "T 단계 개발 보고서 (Stage Gate)", "g": "●●XX", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "개발이슈관리대장외", "output": "개발 단계 Stage Gate 보고서", "form": "11", "days": "1", "std": "115", "note": "T단계 Stage Gate 요건 미충족시 추가 개선 진행" }, { "id": "r43", "stage": "pp", "name": "PP(n) 생산 등록 및 생산일정 공유", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "생산팀", "input": "개발 단계 Stage Gate 보고서", "output": "생산 의뢰 입력 (ERP)", "days": "1", "std": "116" }, { "id": "r44", "stage": "pp", "name": "PP(n) 부품 발주", "g": "●●XX", "h": "●", "o": "●", "owner": "개발 구매자재팀", "with": "구매자재팀", "input": "생산 의뢰 입력 (ERP)", "output": "부품 발주서", "days": "1", "std": "116" }, { "id": "r45", "stage": "pp", "name": "PP(n) 평가 계획서", "g": "●●XX", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "제품", "output": "제품평가 계획서", "days": "7", "std": "123" }, { "id": "r46", "stage": "pp", "name": "PP(n) 단계 시험 계획", "g": "●●●◎", "h": "●", "o": "●", "owner": "품기팀", "with": "개발팀", "input": "제품 규격서", "output": "시험 계획서", "form": "12", "days": "2", "std": "125" }, { "id": "r47", "stage": "pp", "name": "PP(n) 단계 부품 생산 완료(사출, 가공)", "g": "●●XX", "h": "●", "o": "●", "owner": "개발 구매자재팀", "with": "품기팀", "input": "부품 발주서", "output": "부품 조달 일정표", "days": "12", "std": "128" }, { "id": "r48", "stage": "pp", "name": "PP(n) 협력사 Fire Wall 사전 평가", "g": "●●XX", "h": "●", "o": "●", "owner": "개발팀", "with": "품기팀", "input": "부품 조달 일정표", "output": "Fire Wall 결과서", "form": "13", "days": "1", "std": "129" }, { "id": "r49", "stage": "pp", "name": "PP(n) 부품 입고", "g": "●●◎◎", "h": "●", "o": "●", "owner": "품관팀", "with": "개발팀", "input": "검사기준서,외관한도,포장사양", "output": "검사기준서,외관한도,포장사양", "days": "1", "std": "130" }, { "id": "r50", "stage": "pp", "name": "PP(n) 부품 입고 검사", "g": "●●◎X", "h": "●", "o": "●", "owner": "품관팀", "with": "개발팀", "input": "검사기준서,외관한도,포장사양", "output": "검사성적서", "days": "2", "std": "132" }, { "id": "r51", "stage": "pp", "name": "PP(n) 사전 사용성 검토(조립성,성능 : 2대 평가)", "g": "●●XX", "h": "●", "o": "●", "owner": "개발 품기팀", "with": "-", "input": "부품 검사 결과서", "output": "제품평가 결과서", "days": "2", "std": "132" }, { "id": "r52", "stage": "pp", "name": "PP(n) 부품 입고 리뷰 회의", "g": "●●XX", "h": "●", "o": "●", "owner": "품관팀", "with": "개발 품기팀", "input": "검사성적서", "output": "부품 검사 결과서", "form": "14", "days": "1", "std": "133" }, { "id": "r53", "stage": "pp", "name": "PP(n) 정규 생산(양산성평가)", "g": "●●●◎", "h": "●", "o": "●", "owner": "생산팀", "with": "CFT", "input": "부품 검사 결과서", "output": "제품평가 결과서", "days": "1", "std": "134" }, { "id": "r54", "stage": "pp", "name": "PP(n) 제품 출하 검사", "g": "●●XX", "h": "●", "o": "●", "owner": "품관팀", "with": "개발팀", "input": "제품", "output": "출하(입고) 검사성적서", "days": "1", "std": "135" }, { "id": "r55", "stage": "pp", "name": "PP 샘플 실사용(A,B) 사용성 검토(C급) 평가", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "제품평가 계획서", "output": "제품평가 결과서", "days": "7", "std": "141" }, { "id": "r56", "stage": "pp", "name": "PP(n) 제품 부품 시험 평가", "g": "●●●◎", "h": "●", "o": "●", "owner": "품기팀", "with": "개발팀", "input": "시험 계획서", "output": "시험 결과서", "days": "14", "std": "148" }, { "id": "r57", "stage": "pp", "name": "PP(n) 단계 문제점 등록 회의", "g": "●●●◎", "h": "●", "o": "●", "owner": "품기팀", "with": "CFT", "input": "제품평가 결과서", "output": "개발이슈관리대장", "days": "2", "std": "143" }, { "id": "r58", "stage": "pp", "name": "PP(n) 금형 수정 (문제점 Debugging)", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "개발이슈관리대장", "output": "개발이슈관리대장 금형수정LIST", "days": "14", "std": "157" }, { "id": "r59", "stage": "pp", "name": "PP(n) 단계 문제점 개선 회의 (CFT)", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "개발이슈관리대장 금형수정LIST", "output": "개발이슈관리대장 회의록", "days": "7", "std": "150" }, { "id": "r60", "stage": "pp", "name": "부품PP 사용성 검토 및 평가(전단계 문제점 개선 검증)", "g": "●●●◎", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "개발이슈관리대장 회의록", "output": "개발이슈관리대장", "days": "14", "std": "171" }, { "id": "r61", "stage": "pp", "name": "표준류(확정) 작성 완료", "g": "●●●●", "h": "●", "o": "●", "owner": "CFT", "with": "CFT", "input": "표준문서", "output": "표준문서", "days": "3", "std": "174" }, { "id": "r62", "stage": "pp", "name": "제품 인증 완료", "g": "●●●●", "h": "●", "o": "●", "owner": "개발기술팀", "input": "인증 의뢰서", "output": "인증서", "days": "별도 관리", "std": "별도 관리" }, { "id": "r63", "stage": "pp", "name": "부품승인(휴롬 개발)", "g": "●●●●", "h": "●", "o": "X", "owner": "품기팀 (A~B급) 개발팀 (C~D급)", "with": "구매자재팀", "input": "도면 외", "output": "부품승인서", "form": "15", "days": "7", "std": "178" }, { "id": "r64", "stage": "pp", "name": "부품승인(사외 개발)", "g": "●●●●", "h": "●", "o": "●", "owner": "개발팀", "with": "품기 구매자재팀", "input": "도면 외", "output": "부품승인서", "days": "7", "std": "178" }, { "id": "r65", "stage": "pp", "name": "개발종료 회의 (Stage Gate)", "g": "●●●X", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "개발이슈관리대장외", "output": "개발 단계 Stage Gate 보고서", "days": "2", "std": "180", "note": "PP단계 Stage Gate 요건 미충족시 추가 개선 진행" }, { "id": "r66", "stage": "premp", "name": "선행양산 생산 등록", "g": "●XXX", "h": "●", "o": "●", "owner": "생산팀", "with": "개발팀", "input": "개발 단계 Stage Gate 보고서", "output": "생산 일정표(POP 외)", "days": "1", "std": "181" }, { "id": "r67", "stage": "premp", "name": "선행양산 발주", "g": "●XXX", "h": "●", "o": "●", "owner": "구매자재팀", "with": "개발팀", "input": "생산 일정표(POP 외)", "output": "부품 발주서", "days": "1", "std": "181" }, { "id": "r68", "stage": "premp", "name": "부품 입고", "g": "●XXX", "h": "●", "o": "●", "owner": "품관팀", "with": "개발팀", "input": "부품 발주서", "output": "부품승인서", "days": "14", "std": "195" }, { "id": "r69", "stage": "premp", "name": "부품 입고 검사", "g": "●XXX", "h": "●", "o": "●", "owner": "품관팀", "with": "개발팀", "input": "부품승인서", "output": "검사성적서", "days": "2", "std": "197" }, { "id": "r70", "stage": "premp", "name": "선행양산 정규 생산", "g": "●XXX", "h": "●", "o": "●", "owner": "생산팀", "with": "CFT", "input": "부품", "output": "제품", "days": "2", "std": "199" }, { "id": "r71", "stage": "premp", "name": "제품 출하 검사", "g": "●XXX", "h": "●", "o": "●", "owner": "품관팀", "with": "개발팀", "input": "제품", "output": "출하 검사성적서", "days": "1", "std": "200" }, { "id": "r72", "stage": "premp", "name": "제품승인(제품 종료 회의)", "g": "●●XX", "h": "●", "o": "●", "owner": "개발팀", "with": "CFT", "input": "표준류 및 Stage Gate 보고서", "output": "제품승인서", "days": "14", "std": "213" }, { "id": "r73", "stage": "mp", "name": "양산 발주", "g": "●●●●", "h": "●", "o": "●", "owner": "구매자재팀", "with": "생산팀", "input": "생산 계획서(POP)", "output": "부품 발주서", "days": "1", "std": "214" }, { "id": "r74", "stage": "mp", "name": "부품 입고", "g": "●●●●", "h": "●", "o": "●", "owner": "구매자재팀", "with": "품관팀", "input": "부품 발주서", "output": "검사성적서", "days": "14", "std": "228" }, { "id": "r75", "stage": "mp", "name": "초도 생산", "g": "●●●●", "h": "●", "o": "●", "owner": "생산팀", "with": "CFT", "input": "부품", "output": "제품", "days": "2", "std": "230" }, { "id": "r76", "stage": "mp", "name": "초도 생산 제품 출하 검사", "g": "●●●●", "h": "●", "o": "●", "owner": "품관팀", "with": "품기 개발팀", "input": "초도 생산 제품 부품", "output": "출하성적서", "days": "1", "std": "231" }, { "id": "r77", "stage": "mp", "name": "출하 인증회", "g": "●●XX", "h": "●", "o": "●", "owner": "품관팀", "with": "CFT", "input": "초도 생산 제품 부품", "output": "출하인증회 보고서", "form": "16", "days": "3", "std": "233" }, { "id": "r78", "stage": "mp", "name": "초기 유동 관리(부품 제품)", "g": "●●XX", "h": "●", "o": "●", "owner": "품기팀", "with": "CFT", "input": "부품 공정 시장 이슈", "output": "초기유동관리대장", "form": "17", "days": "90", "std": "320" }, { "id": "r79", "stage": "oem", "name": "양산 발주 시스템", "g": "●●●●", "h": "X", "o": "●", "owner": "구매자재팀  상품구매팀", "with": "개발팀", "input": "-", "output": "-", "form": "-" }, { "id": "r80", "stage": "oem", "name": "AS 부품 발주 시스템", "g": "●●●●", "h": "X", "o": "●", "owner": "AS팀", "with": "구매자재팀", "input": "-", "output": "-", "form": "-" }, { "id": "r81", "stage": "oem", "name": "입고 시장 불량 처리 프로세스", "g": "●●●●", "h": "X", "o": "●", "owner": "품관팀", "with": "구매자재팀", "input": "-", "output": "-", "form": "-" }, { "id": "r82", "stage": "oem", "name": "설계변경(사양 추가 변경 포함) 처리 프로세스", "g": "●●●●", "h": "X", "o": "●", "owner": "개발팀", "with": "품관팀", "input": "-", "output": "-", "form": "-" }, { "id": "r83", "stage": "oem", "name": "4M변경 처리 프로세스", "g": "●●●●", "h": "X", "o": "●", "owner": "품관팀", "with": "구매자재팀", "input": "-", "output": "-", "form": "-" }, { "id": "r84", "stage": "oem", "name": "BOM 관리(변경) 프로세스", "g": "●●●●", "h": "X", "o": "●", "owner": "개발기술", "with": "생산팀", "input": "-", "output": "-", "form": "-" }, { "id": "r85", "stage": "oem", "name": "인증 관리(변경,추가)프로세스(공장심사,유지관리)", "g": "●●●●", "h": "X", "o": "●", "owner": "개발기술", "with": "개발팀", "input": "-", "output": "-", "form": "-" }];
exports.R12_DOCS = [{ "id": "d90", "name": "PART LIST(신규부품 List,원재료,후공정,협력사)", "g": "●●●●", "h": "●", "o": "●", "owner": "개발팀", "at": "1111", "form": "18" }, { "id": "d91", "name": "제품규격서", "g": "●●◎◎", "h": "●", "o": "●", "owner": "개발팀", "at": "1111", "form": "19" }, { "id": "d92", "name": "제어사양서", "g": "●◎◎◎", "h": "●", "o": "●", "owner": "개발기술팀", "at": "0111", "form": "20" }, { "id": "d93", "name": "제품디자인(제품 인쇄) 시방서", "g": "●●●●", "h": "●", "o": "●", "owner": "제품전략팀", "at": "1111", "form": "21" }, { "id": "d94", "name": "인쇄물디자인 시방서", "g": "●●◎◎", "h": "●", "o": "●", "owner": "디자인팀", "at": "0001", "form": "22" }, { "id": "d95", "name": "부품 도면", "g": "●●●●", "h": "●", "o": "●", "owner": "개발팀", "at": "1111", "form": "" }, { "id": "d96", "name": "조립 분해도", "g": "●●◎◎", "h": "●", "o": "●", "owner": "개발팀", "at": "0111", "form": "" }, { "id": "d97", "name": "포장박스 도면", "g": "●●◎◎", "h": "●", "o": "●", "owner": "개발기술팀", "at": "0011", "form": "" }, { "id": "d98", "name": "Process Flow Chart", "g": "●●◎◎", "h": "●", "o": "●", "owner": "생산팀", "at": "0111", "form": "23" }, { "id": "d99", "name": "관리계획서 (Control Plan)", "g": "●●●●", "h": "●", "o": "●", "owner": "개발팀", "at": "1111", "form": "24" }, { "id": "d100", "name": "작업 지도서", "g": "●●●●", "h": "●", "o": "●", "owner": "생산팀", "at": "0011", "form": "25" }, { "id": "d101", "name": "제품 포장 Box 사양서", "g": "●●◎◎", "h": "●", "o": "●", "owner": "개발기술팀", "at": "0011", "form": "26" }, { "id": "d102", "name": "검사 기준서(부품) : 검사협정", "g": "●●●●", "h": "●", "o": "●", "owner": "품질관리팀", "at": "0011", "form": "27" }, { "id": "d103", "name": "외관(Master Sample) 한도 승인서", "g": "●●●●", "h": "●", "o": "●", "owner": "개발팀", "at": "0011", "form": "28" }, { "id": "d104", "name": "부품 포장 사양서", "g": "●●◎◎", "h": "●", "o": "●", "owner": "구매자재팀", "at": "0011", "form": "29" }, { "id": "d105", "name": "부품승인(PPAP)", "g": "●●●●", "h": "●", "o": "●", "owner": "품질기술팀", "at": "0001", "form": "" }, { "id": "d106", "name": "제품 검사 기준서", "g": "●●●●", "h": "●", "o": "●", "owner": "품질관리팀", "at": "0011", "form": "30" }, { "id": "d107", "name": "신뢰성 시험 결과서", "g": "●●◎◎", "h": "●", "o": "●", "owner": "품질기술팀", "at": "0011", "form": "31" }, { "id": "d108", "name": "BOM", "g": "●●●●", "h": "●", "o": "●", "owner": "개발기술팀", "at": "0011", "form": "" }, { "id": "d109", "name": "공정설계도(Lay out)", "g": "●XXX", "h": "X", "o": "●", "owner": "생산팀", "at": "0111", "form": "32" }, { "id": "d110", "name": "치공구(생산,후공정,검사) 제작 List", "g": "●◎◎◎", "h": "●", "o": "●", "owner": "생산 개발 품기", "at": "0111", "form": "33" }];
exports.R12_FORMS = ["1-1. 개발일정표(Master schedule)", "1-2. 부품일정_Part schedule(신규금형품) ", "2. 설계 DR 보고서", "3. PL Check Sheet(원액기FMEA)", "4-1. 금형 제작 사양서", "4-2. 금형 제작 사양서", "5. 금형DR 보고서", "6-1. 시사출 결과 보고서", "6-2. 시사출 결과 보고서", "7. 개발단계이슈관리대장", "8. 금형수정LIST", "9. 신모델 개발단계 평가 계획서", "10-1. 신모델 개발단계 평가 결과서", "10-2. #1 신규 부품 결과서", "11. Stage Gate 평가 결과서", "12. 시험계획서", "15-1. Fire Wall 보고서", "15-2. 결재", "15-3. #1 부품유효성 검토", "15-4. #2 공정유효성 검토", "14. 부품입고검사 Review", "15-1-1. 부품보증승인서", "15-1-2. 부품승인 개정이력", "15-2-1. 관리계획서", "15-2-2. 개정이력", "15-3. 외관 승인서", "15-4-1. 검사기준서", "15-4-2. 검사기준서_개정이력", "15-5. 검사성적서", "15-6. 포장사양서", "15-7-1. 공정능력 계획 및 실적(Summary)", "15-7-2. 공정능력 관리 양식", "15-8. 연속양산성평가", "16. 출하인증회보고서", "17. 초기유동관리대장", "18-1. Part List", "18-2. Part List (신규부품 List)", "19. 제품 규격서", "20. 제어사양서", "21. 디자인시방서(제품)", "22-1. 디자인시방서(인쇄물)", "22-2. 디자인시방서(인쇄물)", "23. Process Flow Chart", "24. 관리계획서", "25. 작업지도서", "27-1. 검사기준서_(1)", "27-2. 검사기준서_(2) 개정이력", "27-3. 검사성적서", "28. 외관 승인서", "29. 포장사양서", "30-1. 제품검사기준서(갑)", "30-2. 제품검사기준서(을)", "30-3. 제품검사성적서", "31-1. 시험결과서", "31-2. 시험결과서(Report)", "32. 공정설계도", "33. 치공구(검사JIG,작업JIG외) 관리대장"];

};
__m["src/webparts/huromDevHub/model/realSamples.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REAL_SAMPLES = void 0;
/* eslint-disable */
// 기본 예시 — 실제 개발 3건 (승인원 폴더 기준, 노트북_차봉구 정리 2026-10-26 #odm-oem msg 7599564)
// 2L 음식물처리기 FD-B05(양산 직후) · 티마스터 TM-MB1(완료) · 전동스퀴저 CJ-B03(완료). 다시 만들 땐 work/devhub_deploy/make_samples.py
exports.REAL_SAMPLES = [
    { "id": "p-real-fdb05", "code": "DQ-PA-26-FD-B05", "model": "FD-B05 Series (제조사 KW1001-KC)", "name": "2L 음식물처리기 3세대 FD-B05", "category": "음식물처리기", "devType": "ODM", "grade": "B", "vendor": "Guangdong Xinbao (Donlim, 중국)", "factory": "CN", "pm": "심준보", "baseRegion": "KR", "regions": ["KR"], "features": { "ac": true, "adapter": false, "battery": false, "motor": true, "heater": true, "foodContact": false, "wireless": false, "app": false }, "start": "2025-03-27", "targetShip": "2026-03-02", "durations": { "T01": 30, "T02": 1, "T03": 10, "T04": 60, "T06": 40, "T07": 25, "T08": 30, "T09": 15, "T12": 3, "T13": 10, "T14b": 5 }, "useToBe": true, "asIs": { "name": "AS-IS", "tasks": [{ "id": "T01", "name": "선행검토 (성능·안전·내구 시험 · 구조 검토)", "stage": "S0", "owner": "상품개발", "duration": 30, "deps": [], "cal": "KR", "startDate": "2025-03-27", "endDate": "2025-05-07", "critical": true, "es": 0, "ef": 42, "actualStart": "2025-03-27", "actualEnd": "2025-05-22", "status": "done" }, { "id": "T01b", "name": "특허·디자인권 조사 (남의 권리 침해 여부 · 우리 출원 거리)", "stage": "S0", "owner": "연구소", "duration": 10, "deps": [{ "id": "T01", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2025-03-27", "endDate": "2025-04-09", "critical": false, "es": 0, "ef": 14, "status": "na" }, { "id": "T02", "name": "개발발의서 전자결재", "stage": "S1", "owner": "PM", "duration": 1, "deps": [{ "id": "T01" }, { "id": "T01b" }], "gate": "G1", "cal": "KR", "startDate": "2025-05-08", "endDate": "2025-05-08", "critical": true, "es": 42, "ef": 43, "actualStart": "2025-08-07", "actualEnd": "2025-08-07", "status": "done" }, { "id": "T03", "name": "업체 선정 · 견적 요청·비교 · 공장 실사", "stage": "S2", "owner": "구매", "duration": 10, "deps": [{ "id": "T02" }], "cal": "KR", "startDate": "2025-05-09", "endDate": "2025-05-22", "critical": true, "es": 43, "ef": 57, "actualStart": "2025-05-07", "actualEnd": "2025-07-25", "status": "done" }, { "id": "T03b", "name": "계약 체결 (비밀유지·개발·금형·품질보증 계약)", "stage": "S2", "owner": "법무", "duration": 5, "deps": [{ "id": "T03" }], "gate": "G1b", "cal": "KR", "startDate": "2025-05-23", "endDate": "2025-05-29", "critical": true, "es": 57, "ef": 64, "actualStart": "2026-06-18", "actualEnd": "2026-07-06", "status": "done" }, { "id": "T04", "name": "제품 디자인·설계·부품표(BOM)", "stage": "S3", "owner": "연구소", "duration": 60, "deps": [{ "id": "T03b" }], "cal": "KR", "startDate": "2025-05-30", "endDate": "2025-08-21", "critical": true, "es": 64, "ef": 148, "actualStart": "2025-05-19", "actualEnd": "2025-12-01", "status": "done" }, { "id": "T04c", "name": "원가 검토 · 견적 확정 (목표 원가 대비, 원가 절감안 반영)", "stage": "S3", "owner": "구매", "duration": 5, "deps": [{ "id": "T04", "lag": 20, "type": "SS" }], "cal": "KR", "startDate": "2025-06-27", "endDate": "2025-07-03", "critical": false, "es": 92, "ef": 99, "actualStart": "2025-05-21", "actualEnd": "2025-05-21", "status": "done" }, { "id": "Q1", "name": "[품질분석] 설계 점검 (문제 생길 곳 미리 찾기 · KC 핵심 부품 확인)", "stage": "S3", "owner": "품질", "duration": 3, "deps": [{ "id": "T04" }], "gate": "Q1", "cal": "KR", "startDate": "2025-08-22", "endDate": "2025-08-26", "critical": true, "es": 148, "ef": 153, "actualStart": "2025-11-12", "actualEnd": "2025-11-12", "status": "done" }, { "id": "T05", "name": "설계 확정 · 금형 발주", "stage": "S3", "owner": "PM", "duration": 0, "deps": [{ "id": "Q1" }, { "id": "T03b" }, { "id": "T04c" }], "milestone": true, "gate": "G2", "cal": "KR", "startDate": "2025-08-27", "endDate": "2025-08-27", "critical": true, "es": 153, "ef": 153, "actualStart": "2025-07-25", "actualEnd": "2025-07-25", "status": "done" }, { "id": "T06", "name": "금형 제작", "stage": "S4", "owner": "제조사", "duration": 40, "deps": [{ "id": "T05" }], "cal": "CN", "startDate": "2025-08-27", "endDate": "2025-10-21", "critical": true, "es": 153, "ef": 209, "actualStart": "2025-07-25", "actualEnd": "2025-10-13", "status": "done" }, { "id": "T07", "name": "첫 사출(T1) · 금형 수정(T2~Tn) · 금형 승인", "stage": "S4", "owner": "연구소", "duration": 25, "deps": [{ "id": "T06" }], "gate": "G3", "cal": "CN", "startDate": "2025-10-22", "endDate": "2025-11-25", "critical": true, "es": 209, "ef": 244, "actualStart": "2025-10-15", "actualEnd": "2025-12-23", "status": "done" }, { "id": "Q2", "name": "[품질분석] 첫 사출품 점검 (치수 · 외관 · 조립)", "stage": "S4", "owner": "품질", "duration": 5, "deps": [{ "id": "T07", "lag": 5, "type": "SS" }], "gate": "Q2", "cal": "KR", "startDate": "2025-10-29", "endDate": "2025-11-04", "critical": false, "es": 216, "ef": 223, "actualStart": "2025-10-15", "actualEnd": "2025-12-23", "status": "done" }, { "id": "T05c", "name": "액세서리·소모품(컵·브러시·필터·전원코드) 개발·발주", "stage": "S4", "owner": "구매", "duration": 40, "deps": [{ "id": "T05" }], "cal": "KR", "startDate": "2025-08-27", "endDate": "2025-10-21", "critical": false, "es": 153, "ef": 209, "actualStart": "2025-10-15", "actualEnd": "2026-03-12", "status": "done" }, { "id": "T10b", "name": "포장 설계 · 포장 낙하 시험 (기프트박스·카톤·완충재 구조)", "stage": "S4", "owner": "제조사", "duration": 20, "deps": [{ "id": "T07" }], "cal": "CN", "startDate": "2025-11-26", "endDate": "2025-12-23", "critical": false, "es": 244, "ef": 272, "actualStart": "2026-03-12", "actualEnd": "2026-05-19", "status": "done" }, { "id": "T08", "name": "시제품 시험 (신뢰성·내구 · 실사용 테스트)", "stage": "S5", "owner": "품질", "duration": 30, "deps": [{ "id": "T07" }], "cal": "KR", "startDate": "2025-11-26", "endDate": "2026-01-07", "critical": true, "es": 244, "ef": 287, "actualStart": "2025-09-29", "actualEnd": "2026-06-05", "status": "done" }, { "id": "Q3", "name": "[품질분석] 시험 결과 점검 · 합격 판정 (내구 · 실사용)", "stage": "S5", "owner": "품질", "duration": 3, "deps": [{ "id": "T08" }], "gate": "G3b", "cal": "KR", "startDate": "2026-01-08", "endDate": "2026-01-12", "critical": true, "es": 287, "ef": 292, "actualStart": "2026-03-12", "actualEnd": "2026-05-19", "status": "done" }, { "id": "T09", "name": "시험생산 (PVT, 포장·액세서리 포함 완제품)", "stage": "S7", "owner": "제조사", "duration": 15, "deps": [{ "id": "Q3" }, { "id": "T05c" }, { "id": "T10b" }], "cal": "CN", "startDate": "2026-01-13", "endDate": "2026-02-02", "critical": true, "es": 292, "ef": 313, "actualStart": "2026-05-19", "actualEnd": "2026-06-05", "status": "done" }, { "id": "C-KR-KC-SAFE", "name": "KC 안전인증", "stage": "S6", "owner": "외부기관", "duration": 60, "deps": [{ "id": "T09" }], "certId": "KR-KC-SAFE", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2026-02-03", "endDate": "2026-05-04", "critical": true, "es": 313, "ef": 404 }, { "id": "C-KR-KC-FA", "name": "KC 안전인증 최초 공장심사", "stage": "S6", "owner": "외부기관", "duration": 30, "deps": [{ "id": "T09" }, { "id": "C-KR-KC-SAFE" }], "certId": "KR-KC-FA", "region": "KR", "outsourced": false, "cal": "CN", "startDate": "2026-05-07", "endDate": "2026-06-17", "critical": true, "es": 406, "ef": 448 }, { "id": "C-KR-KC-EMC", "name": "KC 전자파 적합등록", "stage": "S6", "owner": "외부기관", "duration": 30, "deps": [{ "id": "T09" }], "certId": "KR-KC-EMC", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2026-02-03", "endDate": "2026-03-20", "critical": false, "es": 313, "ef": 359 }, { "id": "C-KR-NONUSE", "name": "유해물질 비사용증명서", "stage": "S6", "owner": "외부기관", "duration": 7, "deps": [{ "id": "T09" }], "certId": "KR-NONUSE", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2026-02-03", "endDate": "2026-02-11", "critical": false, "es": 313, "ef": 322 }, { "id": "C-KR-PKG", "name": "포장재 재질·구조 / 분리배출 표시", "stage": "S6", "owner": "외부기관", "duration": 14, "deps": [{ "id": "T09" }], "certId": "KR-PKG", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2026-02-03", "endDate": "2026-02-25", "critical": false, "es": 313, "ef": 336 }, { "id": "C-GL-ROHS", "name": "RoHS 시험성적서", "stage": "S6", "owner": "외부기관", "duration": 14, "deps": [{ "id": "T09" }], "certId": "GL-ROHS", "region": "GLOBAL", "outsourced": false, "cal": "KR", "startDate": "2026-02-03", "endDate": "2026-02-25", "critical": false, "es": 313, "ef": 336 }, { "id": "Q4", "name": "[품질분석] 시험생산 점검 (불량률 · 공정 안정성 · 검사 기준)", "stage": "S7", "owner": "품질", "duration": 3, "deps": [{ "id": "T09" }], "gate": "Q4", "cal": "KR", "startDate": "2026-02-03", "endDate": "2026-02-05", "critical": false, "es": 313, "ef": 316, "actualStart": "2026-06-22", "actualEnd": "2026-06-22", "status": "done" }, { "id": "T12a", "name": "양산 시방서 합의·서명 (사양·구성품·포장·라벨 위치·검사 기준)", "stage": "S7", "owner": "상품개발", "duration": 10, "deps": [{ "id": "T09", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2026-01-13", "endDate": "2026-01-26", "critical": false, "es": 292, "ef": 306, "actualStart": "2026-06-23", "actualEnd": "2026-06-23", "status": "done" }, { "id": "T10", "name": "시각 디자인 (매뉴얼·라벨·기프트박스·카톤 인쇄 디자인)", "stage": "S3", "owner": "디자인", "duration": 20, "deps": [{ "id": "T09" }], "cal": "KR", "startDate": "2026-02-03", "endDate": "2026-03-06", "critical": false, "es": 313, "ef": 345, "actualStart": "2025-07-03", "actualEnd": "2026-07-01", "status": "done" }, { "id": "T11", "name": "인쇄물 최종 승인 (인증번호·마크 반영)", "stage": "S7", "owner": "디자인", "duration": 10, "deps": [{ "id": "C-KR-KC-SAFE" }, { "id": "C-KR-KC-FA" }, { "id": "C-KR-KC-EMC" }, { "id": "C-KR-NONUSE" }, { "id": "C-KR-PKG" }, { "id": "C-GL-ROHS" }, { "id": "T10" }], "gate": "G4a", "cal": "KR", "startDate": "2026-06-18", "endDate": "2026-07-01", "critical": true, "es": 448, "ef": 462, "actualStart": "2026-07-01", "actualEnd": "2026-07-01", "status": "done" }, { "id": "T11b", "name": "인쇄물·박스 인쇄 · 공장 입고", "stage": "S7", "owner": "구매", "duration": 10, "deps": [{ "id": "T11" }], "cal": "CN", "startDate": "2026-07-02", "endDate": "2026-07-15", "critical": false, "es": 462, "ef": 476, "actualStart": "2026-07-01", "actualEnd": "2026-07-03", "status": "done" }, { "id": "T12", "name": "양산 승인 · 거래 조건(FOB) 확정 · 코드 채번", "stage": "S7", "owner": "상품개발", "duration": 3, "deps": [{ "id": "T11" }, { "id": "Q4" }, { "id": "T12a" }], "gate": "G4", "cal": "KR", "startDate": "2026-07-02", "endDate": "2026-07-06", "critical": true, "es": 462, "ef": 467, "actualStart": "2026-06-24", "actualEnd": "2026-06-24", "status": "done" }, { "id": "T13", "name": "양산 (부품 발주 포함)", "stage": "S8", "owner": "제조사", "duration": 10, "deps": [{ "id": "T12" }], "cal": "CN", "startDate": "2026-07-07", "endDate": "2026-07-20", "critical": true, "es": 467, "ef": 481, "actualStart": "2026-06-24", "actualEnd": "2026-07-03", "status": "done" }, { "id": "T13b", "name": "A/S 부품·소모품 초기 재고 발주 · A/S 매뉴얼", "stage": "S8", "owner": "상품개발", "duration": 10, "deps": [{ "id": "T13", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2026-07-07", "endDate": "2026-07-21", "critical": false, "es": 467, "ef": 482, "actualStart": "2026-07-03", "actualEnd": "2026-07-10", "status": "done" }, { "id": "T14", "name": "출하 검사 · 첫 출하", "stage": "S8", "owner": "품질", "duration": 3, "deps": [{ "id": "T13" }, { "id": "T11b" }], "gate": "G5", "cal": "CN", "startDate": "2026-07-21", "endDate": "2026-07-23", "critical": true, "es": 481, "ef": 484, "actualStart": "2026-07-03", "actualEnd": "2026-07-03", "status": "done" }, { "id": "T14b", "name": "통관 · 수입 검사 (식품 접촉 정밀검사, 국내 판매 시작 전)", "stage": "S8", "owner": "구매", "duration": 5, "deps": [{ "id": "T14" }], "cal": "KR", "startDate": "2026-07-24", "endDate": "2026-07-30", "critical": false, "es": 484, "ef": 491, "actualStart": "2026-07-07", "actualEnd": "2026-07-07", "status": "done" }, { "id": "Q5", "name": "[품질분석] 첫 양산품 점검 (출하검사 · 초기 불량 원인과 대책)", "stage": "S8", "owner": "품질", "duration": 5, "deps": [{ "id": "T14" }], "gate": "Q5", "cal": "KR", "startDate": "2026-07-24", "endDate": "2026-07-30", "critical": true, "es": 484, "ef": 491, "actualStart": "2026-07-07", "actualEnd": "2026-07-08", "status": "done" }, { "id": "T15", "name": "양산 후 관리 이관 · 개발 마무리 보고", "stage": "S9", "owner": "PM", "duration": 14, "deps": [{ "id": "Q5" }], "gate": "G6", "cal": "KR", "startDate": "2026-07-31", "endDate": "2026-08-20", "critical": true, "es": 491, "ef": 512, "actualStart": "2026-07-08", "status": "doing" }, { "id": "Q6", "name": "[품질분석] 시장 반응 점검 (반품 · 고객 의견 · A/S, 출하 후 약 3개월)", "stage": "S9", "owner": "품질", "duration": 5, "deps": [{ "id": "T14", "lag": 60 }], "gate": "Q6", "postLaunch": true, "cal": "KR", "startDate": "2026-11-02", "endDate": "2026-11-06", "critical": false, "es": 585, "ef": 590, "actualStart": "2026-10-05", "status": "doing" }], "start": "2025-03-27", "totalDays": 512, "end": "2026-08-20" }, "toBe": { "name": "TO-BE", "tasks": [{ "id": "T01", "name": "선행검토 (성능·안전·내구 시험 · 구조 검토)", "stage": "S0", "owner": "상품개발", "duration": 30, "deps": [], "cal": "KR", "startDate": "2025-03-27", "endDate": "2025-05-07", "critical": true, "es": 0, "ef": 42, "actualStart": "2025-03-27", "actualEnd": "2025-05-22", "status": "done" }, { "id": "T01b", "name": "특허·디자인권 조사 (남의 권리 침해 여부 · 우리 출원 거리)", "stage": "S0", "owner": "연구소", "duration": 10, "deps": [{ "id": "T01", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2025-03-27", "endDate": "2025-04-09", "critical": false, "es": 0, "ef": 14, "status": "na" }, { "id": "T02", "name": "개발발의서 전자결재", "stage": "S1", "owner": "PM", "duration": 1, "deps": [{ "id": "T01" }, { "id": "T01b" }], "gate": "G1", "cal": "KR", "startDate": "2025-05-08", "endDate": "2025-05-08", "critical": true, "es": 42, "ef": 43, "actualStart": "2025-08-07", "actualEnd": "2025-08-07", "status": "done" }, { "id": "T03", "name": "업체 선정 · 견적 요청·비교 · 공장 실사", "stage": "S2", "owner": "구매", "duration": 10, "deps": [{ "id": "T02" }], "cal": "KR", "startDate": "2025-05-09", "endDate": "2025-05-22", "critical": true, "es": 43, "ef": 57, "actualStart": "2025-05-07", "actualEnd": "2025-07-25", "status": "done" }, { "id": "T03b", "name": "계약 체결 (비밀유지·개발·금형·품질보증 계약)", "stage": "S2", "owner": "법무", "duration": 5, "deps": [{ "id": "T03" }], "gate": "G1b", "cal": "KR", "startDate": "2025-05-23", "endDate": "2025-05-29", "critical": false, "es": 57, "ef": 64, "actualStart": "2026-06-18", "actualEnd": "2026-07-06", "status": "done" }, { "id": "T04", "name": "제품 디자인·설계·부품표(BOM)", "stage": "S3", "owner": "연구소", "duration": 60, "deps": [{ "id": "T03", "type": "SS", "lag": 10 }], "cal": "KR", "startDate": "2025-05-23", "endDate": "2025-08-14", "critical": true, "es": 57, "ef": 141, "actualStart": "2025-05-19", "actualEnd": "2025-12-01", "status": "done" }, { "id": "T04c", "name": "원가 검토 · 견적 확정 (목표 원가 대비, 원가 절감안 반영)", "stage": "S3", "owner": "구매", "duration": 5, "deps": [{ "id": "T04", "lag": 20, "type": "SS" }], "cal": "KR", "startDate": "2025-06-20", "endDate": "2025-06-26", "critical": false, "es": 85, "ef": 92, "actualStart": "2025-05-21", "actualEnd": "2025-05-21", "status": "done" }, { "id": "Q1", "name": "[품질분석] 설계 점검 (문제 생길 곳 미리 찾기 · KC 핵심 부품 확인)", "stage": "S3", "owner": "품질", "duration": 3, "deps": [{ "id": "T04" }], "gate": "Q1", "cal": "KR", "startDate": "2025-08-15", "endDate": "2025-08-19", "critical": true, "es": 141, "ef": 146, "actualStart": "2025-11-12", "actualEnd": "2025-11-12", "status": "done" }, { "id": "T05", "name": "설계 확정 · 금형 발주", "stage": "S3", "owner": "PM", "duration": 0, "deps": [{ "id": "Q1" }, { "id": "T03b" }, { "id": "T04c" }], "milestone": true, "gate": "G2", "cal": "KR", "startDate": "2025-08-20", "endDate": "2025-08-20", "critical": true, "es": 146, "ef": 146, "actualStart": "2025-07-25", "actualEnd": "2025-07-25", "status": "done" }, { "id": "T06", "name": "금형 제작", "stage": "S4", "owner": "제조사", "duration": 40, "deps": [{ "id": "T05" }], "cal": "CN", "startDate": "2025-08-20", "endDate": "2025-10-14", "critical": true, "es": 146, "ef": 202, "actualStart": "2025-07-25", "actualEnd": "2025-10-13", "status": "done" }, { "id": "T07", "name": "첫 사출(T1) · 금형 수정(T2~Tn) · 금형 승인", "stage": "S4", "owner": "연구소", "duration": 25, "deps": [{ "id": "T06" }], "gate": "G3", "cal": "CN", "startDate": "2025-10-15", "endDate": "2025-11-18", "critical": true, "es": 202, "ef": 237, "actualStart": "2025-10-15", "actualEnd": "2025-12-23", "status": "done" }, { "id": "Q2", "name": "[품질분석] 첫 사출품 점검 (치수 · 외관 · 조립)", "stage": "S4", "owner": "품질", "duration": 5, "deps": [{ "id": "T07", "lag": 5, "type": "SS" }], "gate": "Q2", "cal": "KR", "startDate": "2025-10-22", "endDate": "2025-10-28", "critical": false, "es": 209, "ef": 216, "actualStart": "2025-10-15", "actualEnd": "2025-12-23", "status": "done" }, { "id": "T05c", "name": "액세서리·소모품(컵·브러시·필터·전원코드) 개발·발주", "stage": "S4", "owner": "구매", "duration": 40, "deps": [{ "id": "T05" }], "cal": "KR", "startDate": "2025-08-20", "endDate": "2025-10-14", "critical": false, "es": 146, "ef": 202, "actualStart": "2025-10-15", "actualEnd": "2026-03-12", "status": "done" }, { "id": "T10b", "name": "포장 설계 · 포장 낙하 시험 (기프트박스·카톤·완충재 구조)", "stage": "S4", "owner": "제조사", "duration": 20, "deps": [{ "id": "T07" }], "cal": "CN", "startDate": "2025-11-19", "endDate": "2025-12-16", "critical": false, "es": 237, "ef": 265, "actualStart": "2026-03-12", "actualEnd": "2026-05-19", "status": "done" }, { "id": "T08", "name": "시제품 시험 (신뢰성·내구 · 실사용 테스트)", "stage": "S5", "owner": "품질", "duration": 30, "deps": [{ "id": "T07" }], "cal": "KR", "startDate": "2025-11-19", "endDate": "2025-12-30", "critical": true, "es": 237, "ef": 279, "actualStart": "2025-09-29", "actualEnd": "2026-06-05", "status": "done" }, { "id": "Q3", "name": "[품질분석] 시험 결과 점검 · 합격 판정 (내구 · 실사용)", "stage": "S5", "owner": "품질", "duration": 3, "deps": [{ "id": "T08" }], "gate": "G3b", "cal": "KR", "startDate": "2025-12-31", "endDate": "2026-01-05", "critical": true, "es": 279, "ef": 285, "actualStart": "2026-03-12", "actualEnd": "2026-05-19", "status": "done" }, { "id": "T09", "name": "시험생산 (PVT, 포장·액세서리 포함 완제품)", "stage": "S7", "owner": "제조사", "duration": 15, "deps": [{ "id": "Q3" }, { "id": "T05c" }, { "id": "T10b" }], "cal": "CN", "startDate": "2026-01-06", "endDate": "2026-01-26", "critical": true, "es": 285, "ef": 306, "actualStart": "2026-05-19", "actualEnd": "2026-06-05", "status": "done" }, { "id": "C-KR-KC-SAFE", "name": "KC 안전인증", "stage": "S6", "owner": "외부기관", "duration": 35, "deps": [{ "id": "T06", "lag": 10 }], "certId": "KR-KC-SAFE", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2025-10-29", "endDate": "2025-12-16", "critical": false, "es": 216, "ef": 265 }, { "id": "C-KR-KC-FA", "name": "KC 안전인증 최초 공장심사", "stage": "S6", "owner": "외부기관", "duration": 15, "deps": [{ "id": "C-KR-KC-SAFE", "type": "SS", "lag": 10 }, { "id": "T09", "type": "SS", "lag": 0 }], "certId": "KR-KC-FA", "region": "KR", "outsourced": true, "cal": "CN", "startDate": "2026-01-06", "endDate": "2026-01-26", "critical": true, "es": 285, "ef": 306 }, { "id": "C-KR-KC-EMC", "name": "KC 전자파 적합등록", "stage": "S6", "owner": "외부기관", "duration": 21, "deps": [{ "id": "T06", "lag": 10 }], "certId": "KR-KC-EMC", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2025-10-29", "endDate": "2025-11-26", "critical": false, "es": 216, "ef": 245 }, { "id": "C-KR-NONUSE", "name": "유해물질 비사용증명서", "stage": "S6", "owner": "외부기관", "duration": 5, "deps": [{ "id": "T05" }], "certId": "KR-NONUSE", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2025-08-20", "endDate": "2025-08-26", "critical": false, "es": 146, "ef": 153 }, { "id": "C-KR-PKG", "name": "포장재 재질·구조 / 분리배출 표시", "stage": "S6", "owner": "외부기관", "duration": 10, "deps": [{ "id": "T05" }], "certId": "KR-PKG", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2025-08-20", "endDate": "2025-09-02", "critical": false, "es": 146, "ef": 160 }, { "id": "C-GL-ROHS", "name": "RoHS 시험성적서", "stage": "S6", "owner": "외부기관", "duration": 10, "deps": [{ "id": "T06", "lag": 10 }], "certId": "GL-ROHS", "region": "GLOBAL", "outsourced": true, "cal": "KR", "startDate": "2025-10-29", "endDate": "2025-11-11", "critical": false, "es": 216, "ef": 230 }, { "id": "Q4", "name": "[품질분석] 시험생산 점검 (불량률 · 공정 안정성 · 검사 기준)", "stage": "S7", "owner": "품질", "duration": 3, "deps": [{ "id": "T09" }], "gate": "Q4", "cal": "KR", "startDate": "2026-01-27", "endDate": "2026-01-29", "critical": false, "es": 306, "ef": 309, "actualStart": "2026-06-22", "actualEnd": "2026-06-22", "status": "done" }, { "id": "T12a", "name": "양산 시방서 합의·서명 (사양·구성품·포장·라벨 위치·검사 기준)", "stage": "S7", "owner": "상품개발", "duration": 10, "deps": [{ "id": "T09", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2026-01-06", "endDate": "2026-01-19", "critical": false, "es": 285, "ef": 299, "actualStart": "2026-06-23", "actualEnd": "2026-06-23", "status": "done" }, { "id": "T10", "name": "시각 디자인 (매뉴얼·라벨·기프트박스·카톤 인쇄 디자인)", "stage": "S3", "owner": "디자인", "duration": 20, "deps": [{ "id": "T05" }], "cal": "KR", "startDate": "2025-08-20", "endDate": "2025-09-16", "critical": false, "es": 146, "ef": 174, "actualStart": "2025-07-03", "actualEnd": "2026-07-01", "status": "done" }, { "id": "T11", "name": "인증번호·마크 삽입 · 인쇄물 최종 승인", "stage": "S7", "owner": "디자인", "duration": 5, "deps": [{ "id": "C-KR-KC-SAFE" }, { "id": "C-KR-KC-FA" }, { "id": "C-KR-KC-EMC" }, { "id": "C-KR-NONUSE" }, { "id": "C-KR-PKG" }, { "id": "C-GL-ROHS" }, { "id": "T11a" }], "gate": "G4a", "cal": "KR", "startDate": "2026-01-27", "endDate": "2026-02-02", "critical": true, "es": 306, "ef": 313, "actualStart": "2026-07-01", "actualEnd": "2026-07-01", "status": "done" }, { "id": "T11b", "name": "인쇄물·박스 인쇄 · 공장 입고", "stage": "S7", "owner": "구매", "duration": 10, "deps": [{ "id": "T11" }], "cal": "CN", "startDate": "2026-02-03", "endDate": "2026-03-16", "critical": false, "es": 313, "ef": 355, "actualStart": "2026-07-01", "actualEnd": "2026-07-03", "status": "done" }, { "id": "T12", "name": "양산 승인 · 거래 조건(FOB) 확정 · 코드 채번", "stage": "S7", "owner": "상품개발", "duration": 3, "deps": [{ "id": "T11" }, { "id": "Q4" }, { "id": "T12a" }, { "id": "T09" }], "gate": "G4", "cal": "KR", "startDate": "2026-02-03", "endDate": "2026-02-05", "critical": true, "es": 313, "ef": 316, "actualStart": "2026-06-24", "actualEnd": "2026-06-24", "status": "done" }, { "id": "T13", "name": "양산 조립·검사 (부품은 미리 발주해 둔 상태)", "stage": "S8", "owner": "제조사", "duration": 10, "deps": [{ "id": "T12" }, { "id": "T05b" }], "cal": "CN", "startDate": "2026-02-06", "endDate": "2026-03-19", "critical": true, "es": 316, "ef": 358, "actualStart": "2026-06-24", "actualEnd": "2026-07-03", "status": "done" }, { "id": "T13b", "name": "A/S 부품·소모품 초기 재고 발주 · A/S 매뉴얼", "stage": "S8", "owner": "상품개발", "duration": 10, "deps": [{ "id": "T13", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2026-02-06", "endDate": "2026-02-24", "critical": false, "es": 316, "ef": 335, "actualStart": "2026-07-03", "actualEnd": "2026-07-10", "status": "done" }, { "id": "T14", "name": "출하 검사 · 첫 출하", "stage": "S8", "owner": "품질", "duration": 3, "deps": [{ "id": "T13" }, { "id": "T11b" }], "gate": "G5", "cal": "CN", "startDate": "2026-03-20", "endDate": "2026-03-24", "critical": true, "es": 358, "ef": 363, "actualStart": "2026-07-03", "actualEnd": "2026-07-03", "status": "done" }, { "id": "T14b", "name": "통관 · 수입 검사 (식품 접촉 정밀검사, 국내 판매 시작 전)", "stage": "S8", "owner": "구매", "duration": 5, "deps": [{ "id": "T14" }], "cal": "KR", "startDate": "2026-03-25", "endDate": "2026-03-31", "critical": false, "es": 363, "ef": 370, "actualStart": "2026-07-07", "actualEnd": "2026-07-07", "status": "done" }, { "id": "Q5", "name": "[품질분석] 첫 양산품 점검 (출하검사 · 초기 불량 원인과 대책)", "stage": "S8", "owner": "품질", "duration": 5, "deps": [{ "id": "T14" }], "gate": "Q5", "cal": "KR", "startDate": "2026-03-25", "endDate": "2026-03-31", "critical": true, "es": 363, "ef": 370, "actualStart": "2026-07-07", "actualEnd": "2026-07-08", "status": "done" }, { "id": "T15", "name": "개발 마무리 보고 (이관 문서 확인·결재)", "stage": "S9", "owner": "PM", "duration": 4, "deps": [{ "id": "Q5" }, { "id": "T15a" }], "gate": "G6", "cal": "KR", "startDate": "2026-04-01", "endDate": "2026-04-06", "critical": true, "es": 370, "ef": 376, "actualStart": "2026-07-08", "status": "doing" }, { "id": "Q6", "name": "[품질분석] 시장 반응 점검 (반품 · 고객 의견 · A/S, 출하 후 약 3개월)", "stage": "S9", "owner": "품질", "duration": 5, "deps": [{ "id": "T14", "lag": 60 }], "gate": "Q6", "postLaunch": true, "cal": "KR", "startDate": "2026-06-25", "endDate": "2026-07-01", "critical": false, "es": 455, "ef": 462, "actualStart": "2026-10-05", "status": "doing" }, { "id": "T11a", "name": "인쇄물 교정·사전 승인 (인증번호 자리만 비워 둠)", "stage": "S7", "owner": "디자인", "duration": 5, "deps": [{ "id": "T10" }], "cal": "KR", "startDate": "2025-09-17", "endDate": "2025-09-23", "critical": false, "es": 174, "ef": 181, "actualStart": "2026-05-19", "actualEnd": "2026-06-23", "status": "done" }, { "id": "T05b", "name": "오래 걸리는 부품(모터·기판·IC) 미리 발주", "stage": "S7", "owner": "구매", "duration": 45, "deps": [{ "id": "T07" }], "cal": "CN", "startDate": "2025-11-19", "endDate": "2026-01-22", "critical": false, "es": 237, "ef": 302, "actualStart": "2026-05-19", "actualEnd": "2026-06-24", "status": "done" }, { "id": "T15a", "name": "양산 후 관리 문서 작성 (고장 대응 가이드·외관 검사 기준서·A/S 부품 목록) — 양산 중에", "stage": "S9", "owner": "품질", "duration": 10, "deps": [{ "id": "T13", "type": "SS", "lag": 0 }], "cal": "KR", "startDate": "2026-02-06", "endDate": "2026-02-24", "critical": false, "es": 316, "ef": 335, "actualStart": "2026-07-01", "actualEnd": "2026-07-08", "status": "done" }], "start": "2025-03-27", "changes": [{ "rule": "R1", "title": "인증 외부기관 위탁 (KC 포함)", "detail": "인증 6건을 전문 인증기관(KTR·KTC·KTL·TÜV·Intertek 등)에 서류 대행까지 맡김. 시험 자체 기간은 그대로이고, 줄어드는 건 접수 전 서류 준비와 보완 서류 왕복 기간(건별 합계 59일, 기관 표준 소요 기준). 동시에 진행되는 인증이 많아 출시일에 주는 효과는 이보다 작음", "savedDays": 56, "tasks": ["C-KR-KC-SAFE", "C-KR-KC-FA", "C-KR-KC-EMC", "C-KR-NONUSE", "C-KR-PKG", "C-GL-ROHS"], "kind": "shorter" }, { "rule": "R3", "title": "인증 착수를 T1 시료 시점으로 당김", "detail": "시험생산 후에 접수하던 인증을 첫 사출(T1) 시료(금형 제작 종료 +10일)로 바로 접수해 시제품 시험과 동시에 진행. 서류 인증은 설계 확정 직후 시작. KC 공장심사는 시험 접수 후 심사원을 예약해 시험생산 시작에 맞춰 진행. 시험 일수는 그대로, 기다리는 시간만 없앰", "savedDays": 43, "tasks": ["C-KR-KC-SAFE", "C-KR-KC-FA", "C-KR-KC-EMC", "C-KR-NONUSE", "C-KR-PKG", "C-GL-ROHS"], "kind": "parallel" }, { "rule": "R4", "title": "시각디자인·인쇄물 금형 기간 병행", "detail": "매뉴얼·라벨·박스 디자인(20일)과 교정(5일)을 금형 만드는 동안 미리 끝내고, 인증이 나오면 인증번호 넣고 최종 승인(5일)만 남김. 인쇄물 일의 양(30일)은 그대로, 순서만 앞당김", "savedDays": 22, "tasks": ["T10", "T11a", "T11"], "kind": "split" }, { "rule": "R5", "title": "시험생산(PVT)과 인증 병행 · 양산 승인 조건부", "detail": "시험생산을 인증 결과를 기다리는 동안 진행하고, 양산 승인은 \"시험생산 합격 + 인증 완료\" 두 조건이 다 되면 내림. 일수는 그대로, 기다리는 시간만 없앰", "savedDays": 0, "tasks": ["T09", "T12"], "kind": "parallel" }, { "rule": "R6", "title": "장납기 부품 선발주", "detail": "양산 10일 중 부품 발주·입고 기다리는 0일을 금형 승인 직후로 앞당김(발주 리드타임 45일은 금형·시험과 겹침). 조립·검사 10일은 그대로. 공장 출고가(FOB) 계약에 미리 발주한 부품의 책임 범위를 적어야 함", "savedDays": 0, "tasks": ["T05b", "T13"], "kind": "split" }, { "rule": "R7", "title": "계약·설계 오버랩", "detail": "업체를 2곳으로 좁힌 뒤 비밀유지계약만 맺고 디자인·설계를 시작 (업체 선정 시작 +10일, 계약 마무리와 동시에). 계약이 늦어질 때 설계 비용을 누가 부담할지 미리 합의. 금형 발주(설계 확정)는 계약 체결 뒤에만 가능", "savedDays": 1, "tasks": ["T04"], "kind": "parallel" }, { "rule": "R8", "title": "양산 후 관리 문서를 양산 중에 작성", "detail": "이관 문서 작성(10일)을 양산이 돌아가는 동안 미리 하고, 첫 출하 뒤엔 보고·결재(4일)만 남김. 일의 양은 그대로, 순서만 앞당김", "savedDays": 14, "tasks": ["T15a", "T15"], "kind": "split" }], "totalDays": 376, "end": "2026-04-06" }, "checklist": [{ "id": "C001", "status": "done", "doneAt": "2025-05-22" }, { "id": "C002", "status": "done", "doneAt": "2025-05-22" }, { "id": "C003", "status": "done", "doneAt": "2025-05-22" }, { "id": "C004", "status": "done", "doneAt": "2025-05-22" }, { "id": "C005", "status": "done", "doneAt": "2025-05-22" }, { "id": "C007", "status": "done", "doneAt": "2025-05-22" }, { "id": "C010", "status": "done", "doneAt": "2025-05-22" }, { "id": "C011", "status": "done", "doneAt": "2025-05-22" }, { "id": "C012", "status": "done", "doneAt": "2025-05-22" }, { "id": "C013", "status": "done", "doneAt": "2025-05-22" }, { "id": "C014", "status": "done", "doneAt": "2025-05-22" }, { "id": "C101", "status": "done", "doneAt": "2025-08-07" }, { "id": "C106", "status": "done", "doneAt": "2025-08-07" }, { "id": "C107", "status": "done", "doneAt": "2025-08-07" }, { "id": "C102", "status": "done", "doneAt": "2025-08-07" }, { "id": "C104", "status": "done", "doneAt": "2025-08-07" }, { "id": "C105", "status": "done", "doneAt": "2025-08-07" }, { "id": "C108", "status": "done", "doneAt": "2025-08-07" }, { "id": "C201", "status": "done", "doneAt": "2025-07-25" }, { "id": "C202", "status": "done", "doneAt": "2025-07-25" }, { "id": "C203", "status": "done", "doneAt": "2025-07-25" }, { "id": "C204", "status": "done", "doneAt": "2025-07-25" }, { "id": "C205", "status": "done", "doneAt": "2025-07-25" }, { "id": "C206", "status": "done", "doneAt": "2025-07-25" }, { "id": "C301", "status": "done", "doneAt": "2025-12-01" }, { "id": "C302", "status": "done", "doneAt": "2025-12-01" }, { "id": "C303", "status": "done", "doneAt": "2025-12-01" }, { "id": "C304", "status": "done", "doneAt": "2025-12-01" }, { "id": "C306", "status": "done", "doneAt": "2025-12-01" }, { "id": "C311", "status": "done", "doneAt": "2025-12-01" }, { "id": "C312", "status": "done", "doneAt": "2025-12-01" }, { "id": "C313", "status": "done", "doneAt": "2025-12-01" }, { "id": "C314", "status": "done", "doneAt": "2025-12-01" }, { "id": "C315", "status": "done", "doneAt": "2025-12-01" }, { "id": "C316", "status": "done", "doneAt": "2025-12-01" }, { "id": "C317", "status": "done", "doneAt": "2025-12-01" }, { "id": "C308", "status": "done", "doneAt": "2025-12-01" }, { "id": "C309", "status": "done", "doneAt": "2025-12-01" }, { "id": "C310", "status": "done", "doneAt": "2025-12-01" }, { "id": "C307", "status": "done", "doneAt": "2025-12-01" }, { "id": "C401", "status": "done", "doneAt": "2025-12-23" }, { "id": "C402", "status": "done", "doneAt": "2025-12-23" }, { "id": "C403", "status": "done", "doneAt": "2025-12-23" }, { "id": "C404", "status": "done", "doneAt": "2025-12-23" }, { "id": "C501", "status": "done", "doneAt": "2026-06-05" }, { "id": "C502", "status": "done", "doneAt": "2026-06-05" }, { "id": "C503", "status": "done", "doneAt": "2026-06-05" }, { "id": "C506", "status": "done", "doneAt": "2026-06-05" }, { "id": "C507", "status": "done", "doneAt": "2026-06-05" }, { "id": "C505", "status": "done", "doneAt": "2026-06-05" }, { "id": "C601", "status": "done", "doneAt": "2026-05-27" }, { "id": "C602", "status": "done", "doneAt": "2026-05-27" }, { "id": "C603", "status": "done", "doneAt": "2026-05-27" }, { "id": "C701", "status": "done", "doneAt": "2026-06-24" }, { "id": "C702", "status": "done", "doneAt": "2026-06-24" }, { "id": "C703", "status": "done", "doneAt": "2026-06-24" }, { "id": "C704", "status": "done", "doneAt": "2026-06-24" }, { "id": "C705", "status": "done", "doneAt": "2026-06-24" }, { "id": "C706", "status": "done", "doneAt": "2026-06-24" }, { "id": "C707", "status": "done", "doneAt": "2026-06-24" }, { "id": "C708", "status": "done", "doneAt": "2026-06-24" }, { "id": "C710", "status": "done", "doneAt": "2026-06-24" }, { "id": "C711", "status": "done", "doneAt": "2026-06-24" }, { "id": "C712", "status": "done", "doneAt": "2026-06-24" }, { "id": "C714", "status": "done", "doneAt": "2026-06-24" }, { "id": "C715", "status": "done", "doneAt": "2026-06-24" }, { "id": "C717", "status": "done", "doneAt": "2026-06-24" }, { "id": "C718", "status": "done", "doneAt": "2026-06-24" }, { "id": "C719", "status": "done", "doneAt": "2026-06-24" }, { "id": "C720", "status": "done", "doneAt": "2026-06-24" }, { "id": "C721", "status": "done", "doneAt": "2026-06-24" }, { "id": "C722", "status": "done", "doneAt": "2026-06-24" }, { "id": "C801", "status": "done", "doneAt": "2026-07-07" }, { "id": "C802", "status": "done", "doneAt": "2026-07-07" }, { "id": "C803", "status": "done", "doneAt": "2026-07-07" }, { "id": "C807", "status": "done", "doneAt": "2026-07-07" }, { "id": "C805", "status": "done", "doneAt": "2026-07-07" }, { "id": "C901", "status": "doing", "owner": "상품개발", "note": "개발 완료 보고서 작성 중" }, { "id": "C907", "status": "todo" }, { "id": "C909", "status": "todo" }, { "id": "C910", "status": "todo" }, { "id": "C911", "status": "todo" }, { "id": "C902", "status": "todo" }, { "id": "C903", "status": "todo" }, { "id": "C904", "status": "todo" }, { "id": "C905", "status": "todo" }, { "id": "C906", "status": "todo" }], "certs": [{ "id": "KR-KC-SAFE", "status": "done", "outsourced": true, "agency": "KTC", "submitted": "2026-04-01", "expected": "2026-05-21", "certNo": "XU070154-26023" }, { "id": "KR-KC-FA", "status": "na", "outsourced": true, "note": "Xinbao 기존 공장심사" }, { "id": "KR-KC-EMC", "status": "done", "outsourced": true, "agency": "KTC", "expected": "2026-05-21" }, { "id": "KR-NONUSE", "status": "done", "outsourced": false, "agency": "제조사 DoC", "expected": "2026-07-03", "note": "출하 시 제조사 적합 선언서 수령" }, { "id": "KR-PKG", "status": "done", "outsourced": false, "expected": "2026-07-01" }, { "id": "GL-ROHS", "status": "done", "outsourced": true, "agency": "SGS", "submitted": "2025-11-28", "expected": "2026-04-29", "certNo": "93253020959" }, { "id": "GL-CB", "status": "done", "outsourced": true, "agency": "SGS (DSS)", "submitted": "2025-12-16", "expected": "2026-05-27", "certNo": "085-250732701-000", "note": "2025-12 전장 문제점(安规) 대책 후 취득" }], "risks": [{ "id": "R01", "stage": "S5", "category": "인증", "title": "환경표지 인증 기준(감량율) 미달", "cause": "건조 알고리즘 감량율 74%", "likelihood": 4, "impact": 4, "response": "알고리즘 수정 → 78%, KCL 표준시료 시험 재진행", "owner": "상품개발", "due": "2026-04-28", "status": "closed", "source": "USER" }, { "id": "R02", "stage": "S6", "category": "인증", "title": "CB 안전 규격 전장 문제점(2025-12)", "likelihood": 3, "impact": 4, "response": "제조사 전장 대책 후 CB 2026-05-27 취득", "owner": "제조사", "due": "2026-05-27", "status": "closed", "source": "USER" }, { "id": "R03", "stage": "S4", "category": "품질", "title": "PP(시험생산) 3차 반복 — 건조통 핸들 간섭·필터 스티커·커넥터 탈거·마감 완성도", "likelihood": 4, "impact": 4, "response": "핸들 마감 공정, 리무버 스티커, 역회전 기능, 블랙 세라믹 코팅 적용 (품평회 이슈 11건 중 8건 반영)", "owner": "상품개발", "due": "2026-05-19", "status": "closed", "source": "USER" }, { "id": "R04", "stage": "S9", "category": "상품성", "title": "소음·필터 교환주기·건조통 외부 나사 돌출은 구조 변경 필요로 미반영", "likelihood": 3, "impact": 3, "response": "차기 모델 개발 시 반영 검토", "owner": "상품개발", "status": "watch", "source": "USER" }, { "id": "R05", "stage": "S8", "category": "일정", "title": "목표 2026-03 출시 대비 첫 출하 2026-07-03 (약 4개월 지연)", "likelihood": 5, "impact": 4, "response": "원인: PP 반복·인증 지연. 다음 제품은 품질 기준(감량율·외관)을 금형 전에 합의", "owner": "PM", "status": "closed", "source": "USER" }], "molds": [{ "id": "M1", "part": "본체·건조통·커버 일식 (KW1001-KC)", "maker": "Xinbao", "owner": "휴롬 (USD 170,000)", "t1": "2025-10-13", "t2": "2025-12-23", "approved": "2026-05-19", "status": "done", "note": "PP 1차 10/15 · 2차 12/23 · 3차 5/19" }], "mpIssues": [{ "id": "I1", "date": "2026-07-03", "type": "기타", "title": "1차 Lot 제조사 출하검사(QA成品检验报告) 합격 · 협력사 성적서 접수", "status": "closed" }], "log": [{ "at": "2025-03-27T09:00:00.000Z", "who": "상품개발", "what": "2L 음식물처리기 사양 v00 · 선행검토 착수" }, { "at": "2025-08-07T09:00:00.000Z", "who": "PM", "what": "개발 보고서 Rev.0 — 목표 2026-03 출시, 제조사 Xinbao" }, { "at": "2025-10-15T09:00:00.000Z", "who": "제조사", "what": "PP 1차 외관 사양 검토" }, { "at": "2025-12-23T09:00:00.000Z", "who": "제조사", "what": "PP 2차 외관 사양 검토" }, { "at": "2026-04-28T09:00:00.000Z", "who": "품질", "what": "품평회 이슈 11건 정리 — 감량율 74→78% 알고리즘 수정" }, { "at": "2026-05-21T09:00:00.000Z", "who": "품질", "what": "KC 안전인증 취득" }, { "at": "2026-06-24T09:00:00.000Z", "who": "PM", "what": "출장 결과 보고 · 양산 승인" }, { "at": "2026-07-03T09:00:00.000Z", "who": "제조사", "what": "1차 Lot 출하검사 합격 · 첫 출하" }, { "at": "2026-10-26T02:18:27.120Z", "who": "AI", "what": "프로젝트 생성 — 체크리스트·인증 트랙·AS-IS/TO-BE 일정 자동 생성", "ai": true }], "updated": "2026-10-26T03:00:03Z", "cfgRev": 1, "isSample": true, "memo": "저용량(2L) 3세대 음식물처리기. 금형비 USD 170,000, 인증비 USD 15,000, 도입가 약 USD 80, 국내 전용. 260×270×272mm, 처리모드 표준/채소과일 + 세척, 무드등.\n목표 2026-03 출시 → 실제 양산 2026-06-24, 첫 출하 2026-07-03 (약 4개월 지연). 지연 원인: PP(시험생산) 3차까지 반복(외관·마감·감량율), 품평회 이슈 11건.\n교훈 1: 환경표지 인증 기준(감량율) 미달 → 알고리즘 수정(74% → 78%). 인증 기준(EL416 표준 음식쓰레기 조성)을 설계 초기에 시험 조건에 넣어야 함.\n교훈 2: 품질협약서·검사협약이 양산 직전(2026-06)에 체결. 교훈 3: 소음·필터 교환주기·나사 돌출은 구조 변경이라 이번에 못 고침 → 차기 모델 반영.\n프로젝트 멤버(2025-08 보고서): 구매 박재영, 디자인 강영진(커뮤니케이션디자인)·김태진(상품디자인), 개발·품질 김병수·정윤서(상품개발팀), CS 김명지, AS 차문성. Dev Hub 예시용으로 PM 칸은 심준보로 둠.", "actuals": { "T01": { "start": "2025-03-27", "end": "2025-05-22" }, "T02": { "start": "2025-08-07", "end": "2025-08-07" }, "T03": { "start": "2025-05-07", "end": "2025-07-25" }, "T03b": { "start": "2026-06-18", "end": "2026-07-06" }, "T04": { "start": "2025-05-19", "end": "2025-12-01" }, "T04c": { "start": "2025-05-21", "end": "2025-05-21" }, "Q1": { "start": "2025-11-12", "end": "2025-11-12" }, "T05": { "start": "2025-07-25", "end": "2025-07-25" }, "T06": { "start": "2025-07-25", "end": "2025-10-13" }, "T07": { "start": "2025-10-15", "end": "2025-12-23" }, "Q2": { "start": "2025-10-15", "end": "2025-12-23" }, "T05c": { "start": "2025-10-15", "end": "2026-03-12" }, "T10b": { "start": "2026-03-12", "end": "2026-05-19" }, "T08": { "start": "2025-09-29", "end": "2026-06-05" }, "Q3": { "start": "2026-03-12", "end": "2026-05-19" }, "T09": { "start": "2026-05-19", "end": "2026-06-05" }, "Q4": { "start": "2026-06-22", "end": "2026-06-22" }, "T12a": { "start": "2026-06-23", "end": "2026-06-23" }, "T10": { "start": "2025-07-03", "end": "2026-07-01" }, "T11": { "start": "2026-07-01", "end": "2026-07-01" }, "T11b": { "start": "2026-07-01", "end": "2026-07-03" }, "T12": { "start": "2026-06-24", "end": "2026-06-24" }, "T13": { "start": "2026-06-24", "end": "2026-07-03" }, "T13b": { "start": "2026-07-03", "end": "2026-07-10" }, "T14": { "start": "2026-07-03", "end": "2026-07-03" }, "T14b": { "start": "2026-07-07", "end": "2026-07-07" }, "Q5": { "start": "2026-07-07", "end": "2026-07-08" }, "T15": { "start": "2026-07-08" }, "Q6": { "start": "2026-10-05" }, "T11a": { "start": "2026-05-19", "end": "2026-06-23" }, "T05b": { "start": "2026-05-19", "end": "2026-06-24" }, "T15a": { "start": "2026-07-01", "end": "2026-07-08" }, "T04b": { "start": "2026-04-07", "end": "2026-04-23" } }, "reviews": { "G0": { "decision": "pass", "date": "2025-05-22", "note": "제품 사양서 v00~, 3D CAD" }, "G1": { "decision": "pass", "date": "2025-08-07", "note": "개발 보고서 Rev.0 (목표 2026-03 출시)" }, "G2": { "decision": "pass", "date": "2025-07-25", "note": "금형 발주 (USD 170,000)" }, "G3": { "decision": "cond", "date": "2025-12-23", "note": "조건: 2차 PP 외관 사양 개선 후 승인" }, "G3b": { "decision": "cond", "date": "2026-05-19", "note": "조건: 감량율 78% 재시험 통과, 소음은 차기 모델" }, "G4": { "decision": "pass", "date": "2026-06-24", "note": "동림 출장 결과 보고 후 양산 승인" }, "G6": { "note": "개발 완료 보고 준비 중" } }, "squad": [{ "role": "PM", "name": "김병수·정윤서(상품개발팀)" }, { "role": "기구", "name": "Xinbao" }, { "role": "전장", "name": "Xinbao" }, { "role": "펌웨어", "name": "Xinbao(프로그램 Rev.12)" }, { "role": "품질", "name": "품질보증팀" }, { "role": "양산", "name": "박재영(상품구매팀)" }], "experts": [{ "id": "E1", "area": "전장", "issue": "CB 안전 규격 전장 문제점(2L) 대책", "stage": "S6", "expert": "연구소 전장", "opened": "2025-12-16", "closed": "2026-05-27", "status": "closed", "resolution": "제조사 회로 대책 반영 후 CB 취득" }], "sampleRev": 9 },
    { "id": "p-real-tmmb1", "code": "DQ-PA-26-MB1", "model": "TM-MB1FWH", "name": "티마스터 TM-MB1 (코스트코 전용, 2L)", "category": "티메이커", "devType": "ODM", "grade": "B", "vendor": "Midea (중국)", "factory": "CN", "pm": "심준보", "baseRegion": "KR", "regions": ["KR"], "features": { "ac": true, "adapter": false, "battery": false, "motor": false, "heater": true, "foodContact": true, "wireless": false, "app": false }, "start": "2025-06-30", "targetShip": "2025-12-10", "durations": { "T01": 10, "T02": 1, "T03": 3, "T04": 30, "T04b": 20, "T06": 20, "T07": 7, "T08": 10, "T09": 7, "T11": 3, "T12": 3, "T13": 4, "T14b": 5 }, "useToBe": true, "asIs": { "name": "AS-IS", "tasks": [{ "id": "T01", "name": "선행검토 (성능·안전·내구 시험 · 구조 검토)", "stage": "S0", "owner": "상품개발", "duration": 10, "deps": [], "cal": "KR", "startDate": "2025-06-30", "endDate": "2025-07-11", "critical": true, "es": 0, "ef": 12, "actualStart": "2025-06-30", "actualEnd": "2025-07-21", "status": "done" }, { "id": "T01b", "name": "특허·디자인권 조사 (남의 권리 침해 여부 · 우리 출원 거리)", "stage": "S0", "owner": "연구소", "duration": 10, "deps": [{ "id": "T01", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2025-06-30", "endDate": "2025-07-11", "critical": false, "es": 0, "ef": 12, "status": "na" }, { "id": "T02", "name": "개발발의서 전자결재", "stage": "S1", "owner": "PM", "duration": 1, "deps": [{ "id": "T01" }, { "id": "T01b" }], "gate": "G1", "cal": "KR", "startDate": "2025-07-14", "endDate": "2025-07-14", "critical": true, "es": 14, "ef": 15, "actualStart": "2025-07-02", "actualEnd": "2025-07-02", "status": "done" }, { "id": "T03", "name": "업체 선정 · 견적 요청·비교 · 공장 실사", "stage": "S2", "owner": "구매", "duration": 3, "deps": [{ "id": "T02" }], "cal": "KR", "startDate": "2025-07-15", "endDate": "2025-07-17", "critical": true, "es": 15, "ef": 18, "actualStart": "2025-06-30", "actualEnd": "2025-07-04", "status": "done" }, { "id": "T03b", "name": "계약 체결 (비밀유지·개발·금형·품질보증 계약)", "stage": "S2", "owner": "법무", "duration": 5, "deps": [{ "id": "T03" }], "gate": "G1b", "cal": "KR", "startDate": "2025-07-18", "endDate": "2025-07-24", "critical": true, "es": 18, "ef": 25, "actualStart": "2025-12-01", "actualEnd": "2025-12-26", "status": "done" }, { "id": "T04", "name": "제품 디자인·설계·부품표(BOM)", "stage": "S3", "owner": "연구소", "duration": 30, "deps": [{ "id": "T03b" }], "cal": "KR", "startDate": "2025-07-25", "endDate": "2025-09-04", "critical": true, "es": 25, "ef": 67, "actualStart": "2025-07-04", "actualEnd": "2025-11-27", "status": "done" }, { "id": "T04c", "name": "원가 검토 · 견적 확정 (목표 원가 대비, 원가 절감안 반영)", "stage": "S3", "owner": "구매", "duration": 5, "deps": [{ "id": "T04", "lag": 20, "type": "SS" }], "cal": "KR", "startDate": "2025-08-22", "endDate": "2025-08-28", "critical": false, "es": 53, "ef": 60, "actualStart": "2025-07-04", "actualEnd": "2025-07-04", "status": "done" }, { "id": "Q1", "name": "[품질분석] 설계 점검 (문제 생길 곳 미리 찾기 · KC 핵심 부품 확인)", "stage": "S3", "owner": "품질", "duration": 3, "deps": [{ "id": "T04" }], "gate": "Q1", "cal": "KR", "startDate": "2025-09-05", "endDate": "2025-09-09", "critical": true, "es": 67, "ef": 72, "actualStart": "2025-07-21", "actualEnd": "2025-07-21", "status": "done" }, { "id": "T05", "name": "설계 확정 · 금형 발주", "stage": "S3", "owner": "PM", "duration": 0, "deps": [{ "id": "Q1" }, { "id": "T03b" }, { "id": "T04c" }], "milestone": true, "gate": "G2", "cal": "KR", "startDate": "2025-09-10", "endDate": "2025-09-10", "critical": true, "es": 72, "ef": 72, "actualStart": "2025-08-20", "actualEnd": "2025-08-20", "status": "done" }, { "id": "T06", "name": "금형 제작", "stage": "S4", "owner": "제조사", "duration": 20, "deps": [{ "id": "T05" }], "cal": "CN", "startDate": "2025-09-10", "endDate": "2025-10-07", "critical": true, "es": 72, "ef": 100, "actualStart": "2025-08-20", "actualEnd": "2025-10-15", "status": "done" }, { "id": "T07", "name": "첫 사출(T1) · 금형 수정(T2~Tn) · 금형 승인", "stage": "S4", "owner": "연구소", "duration": 7, "deps": [{ "id": "T06" }], "gate": "G3", "cal": "CN", "startDate": "2025-10-08", "endDate": "2025-10-16", "critical": true, "es": 100, "ef": 109, "actualStart": "2025-10-15", "actualEnd": "2025-11-14", "status": "done" }, { "id": "Q2", "name": "[품질분석] 첫 사출품 점검 (치수 · 외관 · 조립)", "stage": "S4", "owner": "품질", "duration": 5, "deps": [{ "id": "T07", "lag": 5, "type": "SS" }], "gate": "Q2", "cal": "KR", "startDate": "2025-10-15", "endDate": "2025-10-21", "critical": false, "es": 107, "ef": 114, "actualStart": "2025-11-03", "actualEnd": "2025-11-03", "status": "done" }, { "id": "T05c", "name": "액세서리·소모품(컵·브러시·필터·전원코드) 개발·발주", "stage": "S4", "owner": "구매", "duration": 40, "deps": [{ "id": "T05" }], "cal": "KR", "startDate": "2025-09-10", "endDate": "2025-11-04", "critical": false, "es": 72, "ef": 128, "actualStart": "2025-10-15", "actualEnd": "2025-11-14", "status": "done" }, { "id": "T10b", "name": "포장 설계 · 포장 낙하 시험 (기프트박스·카톤·완충재 구조)", "stage": "S4", "owner": "제조사", "duration": 20, "deps": [{ "id": "T07" }], "cal": "CN", "startDate": "2025-10-17", "endDate": "2025-11-13", "critical": true, "es": 109, "ef": 137, "actualStart": "2025-11-14", "actualEnd": "2025-12-04", "status": "done" }, { "id": "T08", "name": "시제품 시험 (신뢰성·내구 · 실사용 테스트)", "stage": "S5", "owner": "품질", "duration": 10, "deps": [{ "id": "T07" }], "cal": "KR", "startDate": "2025-10-17", "endDate": "2025-10-30", "critical": false, "es": 109, "ef": 123, "actualStart": "2025-09-17", "actualEnd": "2025-11-20", "status": "done" }, { "id": "Q3", "name": "[품질분석] 시험 결과 점검 · 합격 판정 (내구 · 실사용)", "stage": "S5", "owner": "품질", "duration": 3, "deps": [{ "id": "T08" }], "gate": "G3b", "cal": "KR", "startDate": "2025-10-31", "endDate": "2025-11-04", "critical": false, "es": 123, "ef": 128, "actualStart": "2025-11-20", "actualEnd": "2025-11-20", "status": "done" }, { "id": "T09", "name": "시험생산 (PVT, 포장·액세서리 포함 완제품)", "stage": "S7", "owner": "제조사", "duration": 7, "deps": [{ "id": "Q3" }, { "id": "T05c" }, { "id": "T10b" }], "cal": "CN", "startDate": "2025-11-14", "endDate": "2025-11-24", "critical": true, "es": 137, "ef": 148, "actualStart": "2025-11-14", "actualEnd": "2025-11-28", "status": "done" }, { "id": "C-KR-KC-SAFE", "name": "KC 안전인증", "stage": "S6", "owner": "외부기관", "duration": 60, "deps": [{ "id": "T09" }], "certId": "KR-KC-SAFE", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2025-11-25", "endDate": "2026-02-20", "critical": true, "es": 148, "ef": 236 }, { "id": "C-KR-KC-FA", "name": "KC 안전인증 최초 공장심사", "stage": "S6", "owner": "외부기관", "duration": 30, "deps": [{ "id": "T09" }, { "id": "C-KR-KC-SAFE" }], "certId": "KR-KC-FA", "region": "KR", "outsourced": false, "cal": "CN", "startDate": "2026-03-09", "endDate": "2026-04-20", "critical": true, "es": 252, "ef": 295 }, { "id": "C-KR-KC-EMC", "name": "KC 전자파 적합등록", "stage": "S6", "owner": "외부기관", "duration": 30, "deps": [{ "id": "T09" }], "certId": "KR-KC-EMC", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2025-11-25", "endDate": "2026-01-06", "critical": false, "es": 148, "ef": 191 }, { "id": "C-KR-FOOD", "name": "식품접촉부 시험 (기구·용기·포장)", "stage": "S6", "owner": "외부기관", "duration": 28, "deps": [{ "id": "T09" }], "certId": "KR-FOOD", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2025-11-25", "endDate": "2026-01-02", "critical": false, "es": 148, "ef": 187 }, { "id": "C-KR-NONUSE", "name": "유해물질 비사용증명서", "stage": "S6", "owner": "외부기관", "duration": 7, "deps": [{ "id": "T09" }], "certId": "KR-NONUSE", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2025-11-25", "endDate": "2025-12-03", "critical": false, "es": 148, "ef": 157 }, { "id": "C-KR-PKG", "name": "포장재 재질·구조 / 분리배출 표시", "stage": "S6", "owner": "외부기관", "duration": 14, "deps": [{ "id": "T09" }], "certId": "KR-PKG", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2025-11-25", "endDate": "2025-12-12", "critical": false, "es": 148, "ef": 166 }, { "id": "C-GL-ROHS", "name": "RoHS 시험성적서", "stage": "S6", "owner": "외부기관", "duration": 14, "deps": [{ "id": "T09" }], "certId": "GL-ROHS", "region": "GLOBAL", "outsourced": false, "cal": "KR", "startDate": "2025-11-25", "endDate": "2025-12-12", "critical": false, "es": 148, "ef": 166 }, { "id": "Q4", "name": "[품질분석] 시험생산 점검 (불량률 · 공정 안정성 · 검사 기준)", "stage": "S7", "owner": "품질", "duration": 3, "deps": [{ "id": "T09" }], "gate": "Q4", "cal": "KR", "startDate": "2025-11-25", "endDate": "2025-11-27", "critical": false, "es": 148, "ef": 151, "actualStart": "2025-11-28", "actualEnd": "2025-11-28", "status": "done" }, { "id": "T12a", "name": "양산 시방서 합의·서명 (사양·구성품·포장·라벨 위치·검사 기준)", "stage": "S7", "owner": "상품개발", "duration": 10, "deps": [{ "id": "T09", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2025-11-14", "endDate": "2025-11-27", "critical": false, "es": 137, "ef": 151, "actualStart": "2025-11-06", "actualEnd": "2025-11-11", "status": "done" }, { "id": "T10", "name": "시각 디자인 (매뉴얼·라벨·기프트박스·카톤 인쇄 디자인)", "stage": "S3", "owner": "디자인", "duration": 20, "deps": [{ "id": "T09" }], "cal": "KR", "startDate": "2025-11-25", "endDate": "2025-12-22", "critical": false, "es": 148, "ef": 176, "actualStart": "2025-11-03", "actualEnd": "2025-11-28", "status": "done" }, { "id": "T11", "name": "인쇄물 최종 승인 (인증번호·마크 반영)", "stage": "S7", "owner": "디자인", "duration": 3, "deps": [{ "id": "C-KR-KC-SAFE" }, { "id": "C-KR-KC-FA" }, { "id": "C-KR-KC-EMC" }, { "id": "C-KR-FOOD" }, { "id": "C-KR-NONUSE" }, { "id": "C-KR-PKG" }, { "id": "C-GL-ROHS" }, { "id": "T10" }], "gate": "G4a", "cal": "KR", "startDate": "2026-04-21", "endDate": "2026-04-23", "critical": true, "es": 295, "ef": 298, "actualStart": "2025-11-28", "actualEnd": "2025-11-28", "status": "done" }, { "id": "T11b", "name": "인쇄물·박스 인쇄 · 공장 입고", "stage": "S7", "owner": "구매", "duration": 10, "deps": [{ "id": "T11" }], "cal": "CN", "startDate": "2026-04-24", "endDate": "2026-05-13", "critical": true, "es": 298, "ef": 318, "actualStart": "2025-11-14", "actualEnd": "2025-12-05", "status": "done" }, { "id": "T12", "name": "양산 승인 · 거래 조건(FOB) 확정 · 코드 채번", "stage": "S7", "owner": "상품개발", "duration": 3, "deps": [{ "id": "T11" }, { "id": "Q4" }, { "id": "T12a" }], "gate": "G4", "cal": "KR", "startDate": "2026-04-24", "endDate": "2026-04-28", "critical": false, "es": 298, "ef": 303, "actualStart": "2025-11-06", "actualEnd": "2025-12-01", "status": "done" }, { "id": "T13", "name": "양산 (부품 발주 포함)", "stage": "S8", "owner": "제조사", "duration": 4, "deps": [{ "id": "T12" }], "cal": "CN", "startDate": "2026-04-29", "endDate": "2026-05-08", "critical": false, "es": 303, "ef": 313, "actualStart": "2025-12-05", "actualEnd": "2025-12-11", "status": "done" }, { "id": "T13b", "name": "A/S 부품·소모품 초기 재고 발주 · A/S 매뉴얼", "stage": "S8", "owner": "상품개발", "duration": 10, "deps": [{ "id": "T13", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2026-04-29", "endDate": "2026-05-14", "critical": false, "es": 303, "ef": 319, "actualStart": "2026-01-06", "actualEnd": "2026-01-06", "status": "done" }, { "id": "T14", "name": "출하 검사 · 첫 출하", "stage": "S8", "owner": "품질", "duration": 3, "deps": [{ "id": "T13" }, { "id": "T11b" }], "gate": "G5", "cal": "CN", "startDate": "2026-05-14", "endDate": "2026-05-18", "critical": true, "es": 318, "ef": 323, "actualStart": "2025-12-10", "actualEnd": "2025-12-10", "status": "done" }, { "id": "T14b", "name": "통관 · 수입 검사 (식품 접촉 정밀검사, 국내 판매 시작 전)", "stage": "S8", "owner": "구매", "duration": 5, "deps": [{ "id": "T14" }], "cal": "KR", "startDate": "2026-05-19", "endDate": "2026-05-26", "critical": false, "es": 323, "ef": 331, "actualStart": "2025-12-16", "actualEnd": "2026-01-07", "status": "done" }, { "id": "Q5", "name": "[품질분석] 첫 양산품 점검 (출하검사 · 초기 불량 원인과 대책)", "stage": "S8", "owner": "품질", "duration": 5, "deps": [{ "id": "T14" }], "gate": "Q5", "cal": "KR", "startDate": "2026-05-19", "endDate": "2026-05-26", "critical": true, "es": 323, "ef": 331, "actualStart": "2026-01-07", "actualEnd": "2026-01-08", "status": "done" }, { "id": "T15", "name": "양산 후 관리 이관 · 개발 마무리 보고", "stage": "S9", "owner": "PM", "duration": 14, "deps": [{ "id": "Q5" }], "gate": "G6", "cal": "KR", "startDate": "2026-05-27", "endDate": "2026-06-16", "critical": true, "es": 331, "ef": 352, "actualStart": "2026-01-07", "actualEnd": "2026-01-07", "status": "done" }, { "id": "Q6", "name": "[품질분석] 시장 반응 점검 (반품 · 고객 의견 · A/S, 출하 후 약 3개월)", "stage": "S9", "owner": "품질", "duration": 5, "deps": [{ "id": "T14", "lag": 60 }], "gate": "Q6", "postLaunch": true, "cal": "KR", "startDate": "2026-08-12", "endDate": "2026-08-19", "critical": false, "es": 408, "ef": 416, "actualStart": "2026-03-10", "status": "doing" }], "start": "2025-06-30", "totalDays": 352, "end": "2026-06-16" }, "toBe": { "name": "TO-BE", "tasks": [{ "id": "T01", "name": "선행검토 (성능·안전·내구 시험 · 구조 검토)", "stage": "S0", "owner": "상품개발", "duration": 10, "deps": [], "cal": "KR", "startDate": "2025-06-30", "endDate": "2025-07-11", "critical": true, "es": 0, "ef": 12, "actualStart": "2025-06-30", "actualEnd": "2025-07-21", "status": "done" }, { "id": "T01b", "name": "특허·디자인권 조사 (남의 권리 침해 여부 · 우리 출원 거리)", "stage": "S0", "owner": "연구소", "duration": 10, "deps": [{ "id": "T01", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2025-06-30", "endDate": "2025-07-11", "critical": false, "es": 0, "ef": 12, "status": "na" }, { "id": "T02", "name": "개발발의서 전자결재", "stage": "S1", "owner": "PM", "duration": 1, "deps": [{ "id": "T01" }, { "id": "T01b" }], "gate": "G1", "cal": "KR", "startDate": "2025-07-14", "endDate": "2025-07-14", "critical": true, "es": 14, "ef": 15, "actualStart": "2025-07-02", "actualEnd": "2025-07-02", "status": "done" }, { "id": "T03", "name": "업체 선정 · 견적 요청·비교 · 공장 실사", "stage": "S2", "owner": "구매", "duration": 3, "deps": [{ "id": "T02" }], "cal": "KR", "startDate": "2025-07-15", "endDate": "2025-07-17", "critical": true, "es": 15, "ef": 18, "actualStart": "2025-06-30", "actualEnd": "2025-07-04", "status": "done" }, { "id": "T03b", "name": "계약 체결 (비밀유지·개발·금형·품질보증 계약)", "stage": "S2", "owner": "법무", "duration": 5, "deps": [{ "id": "T03" }], "gate": "G1b", "cal": "KR", "startDate": "2025-07-18", "endDate": "2025-07-24", "critical": false, "es": 18, "ef": 25, "actualStart": "2025-12-01", "actualEnd": "2025-12-26", "status": "done" }, { "id": "T04", "name": "제품 디자인·설계·부품표(BOM)", "stage": "S3", "owner": "연구소", "duration": 30, "deps": [{ "id": "T03", "type": "SS", "lag": 10 }], "cal": "KR", "startDate": "2025-07-29", "endDate": "2025-09-08", "critical": true, "es": 29, "ef": 71, "actualStart": "2025-07-04", "actualEnd": "2025-11-27", "status": "done" }, { "id": "T04c", "name": "원가 검토 · 견적 확정 (목표 원가 대비, 원가 절감안 반영)", "stage": "S3", "owner": "구매", "duration": 5, "deps": [{ "id": "T04", "lag": 20, "type": "SS" }], "cal": "KR", "startDate": "2025-08-26", "endDate": "2025-09-01", "critical": false, "es": 57, "ef": 64, "actualStart": "2025-07-04", "actualEnd": "2025-07-04", "status": "done" }, { "id": "Q1", "name": "[품질분석] 설계 점검 (문제 생길 곳 미리 찾기 · KC 핵심 부품 확인)", "stage": "S3", "owner": "품질", "duration": 3, "deps": [{ "id": "T04" }], "gate": "Q1", "cal": "KR", "startDate": "2025-09-09", "endDate": "2025-09-11", "critical": true, "es": 71, "ef": 74, "actualStart": "2025-07-21", "actualEnd": "2025-07-21", "status": "done" }, { "id": "T05", "name": "설계 확정 · 금형 발주", "stage": "S3", "owner": "PM", "duration": 0, "deps": [{ "id": "Q1" }, { "id": "T03b" }, { "id": "T04c" }], "milestone": true, "gate": "G2", "cal": "KR", "startDate": "2025-09-12", "endDate": "2025-09-12", "critical": true, "es": 74, "ef": 74, "actualStart": "2025-08-20", "actualEnd": "2025-08-20", "status": "done" }, { "id": "T06", "name": "금형 제작", "stage": "S4", "owner": "제조사", "duration": 20, "deps": [{ "id": "T05" }], "cal": "CN", "startDate": "2025-09-12", "endDate": "2025-10-09", "critical": true, "es": 74, "ef": 102, "actualStart": "2025-08-20", "actualEnd": "2025-10-15", "status": "done" }, { "id": "T07", "name": "첫 사출(T1) · 금형 수정(T2~Tn) · 금형 승인", "stage": "S4", "owner": "연구소", "duration": 7, "deps": [{ "id": "T06" }], "gate": "G3", "cal": "CN", "startDate": "2025-10-10", "endDate": "2025-10-20", "critical": false, "es": 102, "ef": 113, "actualStart": "2025-10-15", "actualEnd": "2025-11-14", "status": "done" }, { "id": "Q2", "name": "[품질분석] 첫 사출품 점검 (치수 · 외관 · 조립)", "stage": "S4", "owner": "품질", "duration": 5, "deps": [{ "id": "T07", "lag": 5, "type": "SS" }], "gate": "Q2", "cal": "KR", "startDate": "2025-10-17", "endDate": "2025-10-23", "critical": false, "es": 109, "ef": 116, "actualStart": "2025-11-03", "actualEnd": "2025-11-03", "status": "done" }, { "id": "T05c", "name": "액세서리·소모품(컵·브러시·필터·전원코드) 개발·발주", "stage": "S4", "owner": "구매", "duration": 40, "deps": [{ "id": "T05" }], "cal": "KR", "startDate": "2025-09-12", "endDate": "2025-11-06", "critical": false, "es": 74, "ef": 130, "actualStart": "2025-10-15", "actualEnd": "2025-11-14", "status": "done" }, { "id": "T10b", "name": "포장 설계 · 포장 낙하 시험 (기프트박스·카톤·완충재 구조)", "stage": "S4", "owner": "제조사", "duration": 20, "deps": [{ "id": "T07" }], "cal": "CN", "startDate": "2025-10-21", "endDate": "2025-11-17", "critical": false, "es": 113, "ef": 141, "actualStart": "2025-11-14", "actualEnd": "2025-12-04", "status": "done" }, { "id": "T08", "name": "시제품 시험 (신뢰성·내구 · 실사용 테스트)", "stage": "S5", "owner": "품질", "duration": 10, "deps": [{ "id": "T07" }], "cal": "KR", "startDate": "2025-10-21", "endDate": "2025-11-03", "critical": false, "es": 113, "ef": 127, "actualStart": "2025-09-17", "actualEnd": "2025-11-20", "status": "done" }, { "id": "Q3", "name": "[품질분석] 시험 결과 점검 · 합격 판정 (내구 · 실사용)", "stage": "S5", "owner": "품질", "duration": 3, "deps": [{ "id": "T08" }], "gate": "G3b", "cal": "KR", "startDate": "2025-11-04", "endDate": "2025-11-06", "critical": false, "es": 127, "ef": 130, "actualStart": "2025-11-20", "actualEnd": "2025-11-20", "status": "done" }, { "id": "T09", "name": "시험생산 (PVT, 포장·액세서리 포함 완제품)", "stage": "S7", "owner": "제조사", "duration": 7, "deps": [{ "id": "Q3" }, { "id": "T05c" }, { "id": "T10b" }], "cal": "CN", "startDate": "2025-11-18", "endDate": "2025-11-26", "critical": false, "es": 141, "ef": 150, "actualStart": "2025-11-14", "actualEnd": "2025-11-28", "status": "done" }, { "id": "C-KR-KC-SAFE", "name": "KC 안전인증", "stage": "S6", "owner": "외부기관", "duration": 35, "deps": [{ "id": "T06", "lag": 10 }], "certId": "KR-KC-SAFE", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2025-10-24", "endDate": "2025-12-11", "critical": true, "es": 116, "ef": 165 }, { "id": "C-KR-KC-FA", "name": "KC 안전인증 최초 공장심사", "stage": "S6", "owner": "외부기관", "duration": 15, "deps": [{ "id": "C-KR-KC-SAFE", "type": "SS", "lag": 10 }, { "id": "T09", "type": "SS", "lag": 0 }], "certId": "KR-KC-FA", "region": "KR", "outsourced": true, "cal": "CN", "startDate": "2025-11-18", "endDate": "2025-12-08", "critical": false, "es": 141, "ef": 162 }, { "id": "C-KR-KC-EMC", "name": "KC 전자파 적합등록", "stage": "S6", "owner": "외부기관", "duration": 21, "deps": [{ "id": "T06", "lag": 10 }], "certId": "KR-KC-EMC", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2025-10-24", "endDate": "2025-11-21", "critical": false, "es": 116, "ef": 145 }, { "id": "C-KR-FOOD", "name": "식품접촉부 시험 (기구·용기·포장)", "stage": "S6", "owner": "외부기관", "duration": 14, "deps": [{ "id": "T06", "lag": 10 }], "certId": "KR-FOOD", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2025-10-24", "endDate": "2025-11-12", "critical": false, "es": 116, "ef": 136 }, { "id": "C-KR-NONUSE", "name": "유해물질 비사용증명서", "stage": "S6", "owner": "외부기관", "duration": 5, "deps": [{ "id": "T05" }], "certId": "KR-NONUSE", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2025-09-12", "endDate": "2025-09-18", "critical": false, "es": 74, "ef": 81 }, { "id": "C-KR-PKG", "name": "포장재 재질·구조 / 분리배출 표시", "stage": "S6", "owner": "외부기관", "duration": 10, "deps": [{ "id": "T05" }], "certId": "KR-PKG", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2025-09-12", "endDate": "2025-09-25", "critical": false, "es": 74, "ef": 88 }, { "id": "C-GL-ROHS", "name": "RoHS 시험성적서", "stage": "S6", "owner": "외부기관", "duration": 10, "deps": [{ "id": "T06", "lag": 10 }], "certId": "GL-ROHS", "region": "GLOBAL", "outsourced": true, "cal": "KR", "startDate": "2025-10-24", "endDate": "2025-11-06", "critical": false, "es": 116, "ef": 130 }, { "id": "Q4", "name": "[품질분석] 시험생산 점검 (불량률 · 공정 안정성 · 검사 기준)", "stage": "S7", "owner": "품질", "duration": 3, "deps": [{ "id": "T09" }], "gate": "Q4", "cal": "KR", "startDate": "2025-11-27", "endDate": "2025-12-01", "critical": false, "es": 150, "ef": 155, "actualStart": "2025-11-28", "actualEnd": "2025-11-28", "status": "done" }, { "id": "T12a", "name": "양산 시방서 합의·서명 (사양·구성품·포장·라벨 위치·검사 기준)", "stage": "S7", "owner": "상품개발", "duration": 10, "deps": [{ "id": "T09", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2025-11-18", "endDate": "2025-12-01", "critical": false, "es": 141, "ef": 155, "actualStart": "2025-11-06", "actualEnd": "2025-11-11", "status": "done" }, { "id": "T10", "name": "시각 디자인 (매뉴얼·라벨·기프트박스·카톤 인쇄 디자인)", "stage": "S3", "owner": "디자인", "duration": 20, "deps": [{ "id": "T05" }], "cal": "KR", "startDate": "2025-09-12", "endDate": "2025-10-09", "critical": false, "es": 74, "ef": 102, "actualStart": "2025-11-03", "actualEnd": "2025-11-28", "status": "done" }, { "id": "T11", "name": "인증번호·마크 삽입 · 인쇄물 최종 승인", "stage": "S7", "owner": "디자인", "duration": 3, "deps": [{ "id": "C-KR-KC-SAFE" }, { "id": "C-KR-KC-FA" }, { "id": "C-KR-KC-EMC" }, { "id": "C-KR-FOOD" }, { "id": "C-KR-NONUSE" }, { "id": "C-KR-PKG" }, { "id": "C-GL-ROHS" }, { "id": "T10" }], "gate": "G4a", "cal": "KR", "startDate": "2025-12-12", "endDate": "2025-12-16", "critical": true, "es": 165, "ef": 170, "actualStart": "2025-11-28", "actualEnd": "2025-11-28", "status": "done" }, { "id": "T11b", "name": "인쇄물·박스 인쇄 · 공장 입고", "stage": "S7", "owner": "구매", "duration": 10, "deps": [{ "id": "T11" }], "cal": "CN", "startDate": "2025-12-17", "endDate": "2025-12-30", "critical": true, "es": 170, "ef": 184, "actualStart": "2025-11-14", "actualEnd": "2025-12-05", "status": "done" }, { "id": "T12", "name": "양산 승인 · 거래 조건(FOB) 확정 · 코드 채번", "stage": "S7", "owner": "상품개발", "duration": 3, "deps": [{ "id": "T11" }, { "id": "Q4" }, { "id": "T12a" }, { "id": "T09" }], "gate": "G4", "cal": "KR", "startDate": "2025-12-17", "endDate": "2025-12-19", "critical": false, "es": 170, "ef": 173, "actualStart": "2025-11-06", "actualEnd": "2025-12-01", "status": "done" }, { "id": "T13", "name": "양산 조립·검사 (부품은 미리 발주해 둔 상태)", "stage": "S8", "owner": "제조사", "duration": 4, "deps": [{ "id": "T12" }, { "id": "T05b" }], "cal": "CN", "startDate": "2025-12-23", "endDate": "2025-12-26", "critical": false, "es": 176, "ef": 180, "actualStart": "2025-12-05", "actualEnd": "2025-12-11", "status": "done" }, { "id": "T13b", "name": "A/S 부품·소모품 초기 재고 발주 · A/S 매뉴얼", "stage": "S8", "owner": "상품개발", "duration": 10, "deps": [{ "id": "T13", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2025-12-23", "endDate": "2026-01-06", "critical": false, "es": 176, "ef": 191, "actualStart": "2026-01-06", "actualEnd": "2026-01-06", "status": "done" }, { "id": "T14", "name": "출하 검사 · 첫 출하", "stage": "S8", "owner": "품질", "duration": 3, "deps": [{ "id": "T13" }, { "id": "T11b" }], "gate": "G5", "cal": "CN", "startDate": "2025-12-31", "endDate": "2026-01-06", "critical": true, "es": 184, "ef": 191, "actualStart": "2025-12-10", "actualEnd": "2025-12-10", "status": "done" }, { "id": "T14b", "name": "통관 · 수입 검사 (식품 접촉 정밀검사, 국내 판매 시작 전)", "stage": "S8", "owner": "구매", "duration": 5, "deps": [{ "id": "T14" }], "cal": "KR", "startDate": "2026-01-07", "endDate": "2026-01-13", "critical": false, "es": 191, "ef": 198, "actualStart": "2025-12-16", "actualEnd": "2026-01-07", "status": "done" }, { "id": "Q5", "name": "[품질분석] 첫 양산품 점검 (출하검사 · 초기 불량 원인과 대책)", "stage": "S8", "owner": "품질", "duration": 5, "deps": [{ "id": "T14" }], "gate": "Q5", "cal": "KR", "startDate": "2026-01-07", "endDate": "2026-01-13", "critical": true, "es": 191, "ef": 198, "actualStart": "2026-01-07", "actualEnd": "2026-01-08", "status": "done" }, { "id": "T15", "name": "개발 마무리 보고 (이관 문서 확인·결재)", "stage": "S9", "owner": "PM", "duration": 4, "deps": [{ "id": "Q5" }, { "id": "T15a" }], "gate": "G6", "cal": "KR", "startDate": "2026-01-14", "endDate": "2026-01-19", "critical": true, "es": 198, "ef": 204, "actualStart": "2026-01-07", "actualEnd": "2026-01-07", "status": "done" }, { "id": "Q6", "name": "[품질분석] 시장 반응 점검 (반품 · 고객 의견 · A/S, 출하 후 약 3개월)", "stage": "S9", "owner": "품질", "duration": 5, "deps": [{ "id": "T14", "lag": 60 }], "gate": "Q6", "postLaunch": true, "cal": "KR", "startDate": "2026-04-30", "endDate": "2026-05-08", "critical": false, "es": 304, "ef": 313, "actualStart": "2026-03-10", "status": "doing" }, { "id": "T05b", "name": "오래 걸리는 부품(모터·기판·IC) 미리 발주", "stage": "S7", "owner": "구매", "duration": 45, "deps": [{ "id": "T07" }], "cal": "CN", "startDate": "2025-10-21", "endDate": "2025-12-22", "critical": false, "es": 113, "ef": 176, "actualStart": "2025-11-14", "actualEnd": "2025-12-05", "status": "done" }, { "id": "T15a", "name": "양산 후 관리 문서 작성 (고장 대응 가이드·외관 검사 기준서·A/S 부품 목록) — 양산 중에", "stage": "S9", "owner": "품질", "duration": 10, "deps": [{ "id": "T13", "type": "SS", "lag": 0 }], "cal": "KR", "startDate": "2025-12-23", "endDate": "2026-01-06", "critical": false, "es": 176, "ef": 191, "actualStart": "2026-01-06", "actualEnd": "2026-01-07", "status": "done" }], "start": "2025-06-30", "changes": [{ "rule": "R1", "title": "인증 외부기관 위탁 (KC 포함)", "detail": "인증 7건을 전문 인증기관(KTR·KTC·KTL·TÜV·Intertek 등)에 서류 대행까지 맡김. 시험 자체 기간은 그대로이고, 줄어드는 건 접수 전 서류 준비와 보완 서류 왕복 기간(건별 합계 73일, 기관 표준 소요 기준). 동시에 진행되는 인증이 많아 출시일에 주는 효과는 이보다 작음", "savedDays": 56, "tasks": ["C-KR-KC-SAFE", "C-KR-KC-FA", "C-KR-KC-EMC", "C-KR-FOOD", "C-KR-NONUSE", "C-KR-PKG", "C-GL-ROHS"], "kind": "shorter" }, { "rule": "R3", "title": "인증 착수를 T1 시료 시점으로 당김", "detail": "시험생산 후에 접수하던 인증을 첫 사출(T1) 시료(금형 제작 종료 +10일)로 바로 접수해 시제품 시험과 동시에 진행. 서류 인증은 설계 확정 직후 시작. KC 공장심사는 시험 접수 후 심사원을 예약해 시험생산 시작에 맞춰 진행. 시험 일수는 그대로, 기다리는 시간만 없앰", "savedDays": 69, "tasks": ["C-KR-KC-SAFE", "C-KR-KC-FA", "C-KR-KC-EMC", "C-KR-FOOD", "C-KR-NONUSE", "C-KR-PKG", "C-GL-ROHS"], "kind": "parallel" }, { "rule": "R4", "title": "시각디자인·인쇄물 금형 기간 병행", "detail": "매뉴얼·라벨·박스 디자인(20일)과 교정(0일)을 금형 만드는 동안 미리 끝내고, 인증이 나오면 인증번호 넣고 최종 승인(3일)만 남김. 인쇄물 일의 양(23일)은 그대로, 순서만 앞당김", "savedDays": 14, "tasks": ["T10", "T11a", "T11"], "kind": "split" }, { "rule": "R5", "title": "시험생산(PVT)과 인증 병행 · 양산 승인 조건부", "detail": "시험생산을 인증 결과를 기다리는 동안 진행하고, 양산 승인은 \"시험생산 합격 + 인증 완료\" 두 조건이 다 되면 내림. 일수는 그대로, 기다리는 시간만 없앰", "savedDays": 0, "tasks": ["T09", "T12"], "kind": "parallel" }, { "rule": "R6", "title": "장납기 부품 선발주", "detail": "양산 4일 중 부품 발주·입고 기다리는 0일을 금형 승인 직후로 앞당김(발주 리드타임 45일은 금형·시험과 겹침). 조립·검사 4일은 그대로. 공장 출고가(FOB) 계약에 미리 발주한 부품의 책임 범위를 적어야 함", "savedDays": 0, "tasks": ["T05b", "T13"], "kind": "split" }, { "rule": "R7", "title": "계약·설계 오버랩", "detail": "업체를 2곳으로 좁힌 뒤 비밀유지계약만 맺고 디자인·설계를 시작 (업체 선정 시작 +10일, 계약 마무리와 동시에). 계약이 늦어질 때 설계 비용을 누가 부담할지 미리 합의. 금형 발주(설계 확정)는 계약 체결 뒤에만 가능", "savedDays": -5, "tasks": ["T04"], "kind": "parallel" }, { "rule": "R8", "title": "양산 후 관리 문서를 양산 중에 작성", "detail": "이관 문서 작성(10일)을 양산이 돌아가는 동안 미리 하고, 첫 출하 뒤엔 보고·결재(4일)만 남김. 일의 양은 그대로, 순서만 앞당김", "savedDays": 14, "tasks": ["T15a", "T15"], "kind": "split" }], "totalDays": 204, "end": "2026-01-19" }, "checklist": [{ "id": "C001", "status": "done", "doneAt": "2025-07-21" }, { "id": "C002", "status": "done", "doneAt": "2025-07-21" }, { "id": "C003", "status": "done", "doneAt": "2025-07-21" }, { "id": "C004", "status": "done", "doneAt": "2025-07-21" }, { "id": "C005", "status": "done", "doneAt": "2025-07-21" }, { "id": "C007", "status": "done", "doneAt": "2025-07-21" }, { "id": "C010", "status": "done", "doneAt": "2025-07-21" }, { "id": "C011", "status": "done", "doneAt": "2025-07-21" }, { "id": "C012", "status": "done", "doneAt": "2025-07-21" }, { "id": "C013", "status": "done", "doneAt": "2025-07-21" }, { "id": "C014", "status": "done", "doneAt": "2025-07-21" }, { "id": "C101", "status": "done", "doneAt": "2025-07-02" }, { "id": "C106", "status": "done", "doneAt": "2025-07-02" }, { "id": "C107", "status": "done", "doneAt": "2025-07-02" }, { "id": "C102", "status": "done", "doneAt": "2025-07-02" }, { "id": "C104", "status": "done", "doneAt": "2025-07-02" }, { "id": "C105", "status": "done", "doneAt": "2025-07-02" }, { "id": "C108", "status": "done", "doneAt": "2025-07-02" }, { "id": "C201", "status": "done", "doneAt": "2025-12-26" }, { "id": "C202", "status": "done", "doneAt": "2025-12-26" }, { "id": "C203", "status": "done", "doneAt": "2025-12-26" }, { "id": "C204", "status": "done", "doneAt": "2025-12-26" }, { "id": "C205", "status": "done", "doneAt": "2025-12-26" }, { "id": "C206", "status": "done", "doneAt": "2025-12-26" }, { "id": "C301", "status": "done", "doneAt": "2025-11-27" }, { "id": "C302", "status": "done", "doneAt": "2025-11-27" }, { "id": "C303", "status": "done", "doneAt": "2025-11-27" }, { "id": "C304", "status": "done", "doneAt": "2025-11-27" }, { "id": "C305", "status": "done", "doneAt": "2025-11-27" }, { "id": "C306", "status": "done", "doneAt": "2025-11-27" }, { "id": "C311", "status": "done", "doneAt": "2025-11-27" }, { "id": "C312", "status": "done", "doneAt": "2025-11-27" }, { "id": "C313", "status": "done", "doneAt": "2025-11-27" }, { "id": "C314", "status": "done", "doneAt": "2025-11-27" }, { "id": "C315", "status": "done", "doneAt": "2025-11-27" }, { "id": "C316", "status": "done", "doneAt": "2025-11-27" }, { "id": "C317", "status": "done", "doneAt": "2025-11-27" }, { "id": "C308", "status": "done", "doneAt": "2025-11-27" }, { "id": "C309", "status": "done", "doneAt": "2025-11-27" }, { "id": "C310", "status": "done", "doneAt": "2025-11-27" }, { "id": "C307", "status": "done", "doneAt": "2025-11-27" }, { "id": "C401", "status": "done", "doneAt": "2025-11-14" }, { "id": "C402", "status": "done", "doneAt": "2025-11-14" }, { "id": "C403", "status": "done", "doneAt": "2025-11-14" }, { "id": "C404", "status": "done", "doneAt": "2025-11-14" }, { "id": "C501", "status": "done", "doneAt": "2025-11-20" }, { "id": "C502", "status": "done", "doneAt": "2025-11-20" }, { "id": "C503", "status": "done", "doneAt": "2025-11-20" }, { "id": "C504", "status": "done", "doneAt": "2025-11-20" }, { "id": "C506", "status": "done", "doneAt": "2025-11-20" }, { "id": "C507", "status": "done", "doneAt": "2025-11-20" }, { "id": "C505", "status": "done", "doneAt": "2025-11-20" }, { "id": "C601", "status": "done", "doneAt": "2025-12-05" }, { "id": "C602", "status": "done", "doneAt": "2025-12-05" }, { "id": "C603", "status": "done", "doneAt": "2025-12-05" }, { "id": "C701", "status": "done", "doneAt": "2025-12-05" }, { "id": "C702", "status": "done", "doneAt": "2025-12-05" }, { "id": "C703", "status": "done", "doneAt": "2025-12-05" }, { "id": "C704", "status": "done", "doneAt": "2025-12-05" }, { "id": "C705", "status": "done", "doneAt": "2025-12-05" }, { "id": "C706", "status": "done", "doneAt": "2025-12-05" }, { "id": "C707", "status": "done", "doneAt": "2025-12-05" }, { "id": "C708", "status": "done", "doneAt": "2025-12-05" }, { "id": "C710", "status": "done", "doneAt": "2025-12-05" }, { "id": "C711", "status": "done", "doneAt": "2025-12-05" }, { "id": "C712", "status": "done", "doneAt": "2025-12-05" }, { "id": "C714", "status": "done", "doneAt": "2025-12-05" }, { "id": "C715", "status": "done", "doneAt": "2025-12-05" }, { "id": "C716", "status": "done", "doneAt": "2025-12-05" }, { "id": "C719", "status": "done", "doneAt": "2025-12-05" }, { "id": "C720", "status": "done", "doneAt": "2025-12-05" }, { "id": "C721", "status": "done", "doneAt": "2025-12-05" }, { "id": "C722", "status": "done", "doneAt": "2025-12-05" }, { "id": "C801", "status": "done", "doneAt": "2026-01-07" }, { "id": "C802", "status": "done", "doneAt": "2026-01-07" }, { "id": "C803", "status": "done", "doneAt": "2026-01-07" }, { "id": "C806", "status": "done", "doneAt": "2026-01-07" }, { "id": "C807", "status": "done", "doneAt": "2026-01-07" }, { "id": "C805", "status": "done", "doneAt": "2026-01-07" }, { "id": "C901", "status": "done", "doneAt": "2026-01-08" }, { "id": "C907", "status": "done", "doneAt": "2026-01-08" }, { "id": "C908", "status": "done", "doneAt": "2026-01-08" }, { "id": "C909", "status": "done", "doneAt": "2026-01-08" }, { "id": "C910", "status": "done", "doneAt": "2026-01-08" }, { "id": "C911", "status": "done", "doneAt": "2026-01-08" }, { "id": "C912", "status": "done", "doneAt": "2026-01-08" }, { "id": "C902", "status": "done", "doneAt": "2026-01-08" }, { "id": "C903", "status": "done", "doneAt": "2026-01-08" }, { "id": "C904", "status": "done", "doneAt": "2026-01-08" }, { "id": "C905", "status": "done", "doneAt": "2026-01-08" }, { "id": "C906", "status": "done", "doneAt": "2026-01-08" }], "certs": [{ "id": "KR-KC-SAFE", "status": "done", "outsourced": true, "agency": "KTC", "submitted": "2025-11-14", "expected": "2025-12-05", "certNo": "SU073221-25001", "note": "가열판 변경으로 CB 변경본 전환 후 취득 (양산 당일)" }, { "id": "KR-KC-FA", "status": "na", "outsourced": true, "note": "Midea 기존 공장심사" }, { "id": "KR-KC-EMC", "status": "done", "outsourced": true, "agency": "KTC", "expected": "2025-10-22", "certNo": "R-R-hLS-TM-MB1FWH" }, { "id": "KR-FOOD", "status": "done", "outsourced": true, "agency": "SGS", "submitted": "2025-10-01", "expected": "2025-10-31", "certNo": "AYAR25-02341 등 14종", "note": "PFA 코팅 FAIL → 재질 변경 후 재시험" }, { "id": "KR-NONUSE", "status": "done", "outsourced": false, "agency": "제조사 DoC", "expected": "2026-01-07" }, { "id": "KR-PKG", "status": "done", "outsourced": false, "expected": "2026-01-07" }, { "id": "GL-ROHS", "status": "done", "outsourced": true, "agency": "SGS", "expected": "2025-11-17", "certNo": "CANEC25025476001" }, { "id": "GL-CB", "status": "done", "outsourced": true, "agency": "SGS (DSS)", "submitted": "2025-09-17", "expected": "2025-11-27", "certNo": "FI-65910/M2 · GZES250701468101", "note": "Amendment 02 (가열판 변경)" }], "risks": [{ "id": "R01", "stage": "S3", "category": "인증", "title": "가열판 PFA 코팅 식품접촉부 시험 불합격", "cause": "코팅 용출", "likelihood": 4, "impact": 4, "response": "PFA 코팅 삭제(STS304 노출)로 재질 변경, 14종 재시험", "owner": "상품개발", "due": "2025-10-31", "status": "closed", "source": "USER" }, { "id": "R02", "stage": "S4", "category": "금형", "title": "뚜껑부 물 유입·손잡이 유동으로 신작 금형 3벌", "cause": "제조사 기존 구조(고정·밀폐형) 완성도 부족", "likelihood": 4, "impact": 3, "response": "분리형 단순 구조로 자사 설계 반영, 금형 3,407만 원", "owner": "상품개발", "due": "2025-11-14", "status": "closed", "source": "USER" }, { "id": "R03", "stage": "S6", "category": "인증", "title": "가열판 변경으로 KC 안전 재전환 — 양산 직전까지 인증 미확정", "likelihood": 4, "impact": 4, "response": "CB 변경본 11/27, KC 12/5 수령. KFDA·세관 샘플 54대 선제작, 1차 컨테이너 선출하", "owner": "상품개발", "due": "2025-12-05", "status": "closed", "source": "USER" }, { "id": "R04", "stage": "S2", "category": "계약", "title": "구매계약·품질협약이 양산 직전(12월) 체결", "likelihood": 3, "impact": 3, "response": "다음 제품은 금형 발주 전 계약. Master Purchase Agreement 템플릿 재사용", "owner": "법무", "status": "watch", "source": "USER" }], "molds": [{ "id": "M1", "part": "뚜껑 Assy (3벌)", "maker": "Midea", "cavity": "1", "owner": "휴롬", "t1": "2025-10-15", "t2": "2025-11-03", "approved": "2025-11-14", "status": "done", "note": "물 유입 개선 신작" }, { "id": "M2", "part": "손잡이", "maker": "Midea", "owner": "제조사", "t1": "2025-10-15", "approved": "2025-11-14", "status": "done", "note": "좌우 유동 개선 수정" }], "mpIssues": [], "log": [{ "at": "2025-06-30T09:00:00.000Z", "who": "제조사", "what": "Midea PDS(개발 일정) REV1 접수" }, { "at": "2025-07-02T09:00:00.000Z", "who": "PM", "what": "코스트코 전용 티마스터 개발 발의" }, { "at": "2025-10-31T09:00:00.000Z", "who": "품질", "what": "식품접촉부 재시험 통과 (PFA 코팅 삭제)" }, { "at": "2025-11-06T09:00:00.000Z", "who": "제조사", "what": "PDS REV3 — KC 전환·KFDA 샘플·MP 12/5 확정" }, { "at": "2025-12-10T09:00:00.000Z", "who": "제조사", "what": "1차 컨테이너 출하 (3,000대+)" }, { "at": "2026-01-07T09:00:00.000Z", "who": "PM", "what": "개발 완료 보고" }, { "at": "2026-10-26T02:18:27.102Z", "who": "AI", "what": "프로젝트 생성 — 체크리스트·인증 트랙·AS-IS/TO-BE 일정 자동 생성", "ai": true }], "updated": "2026-10-26T03:00:02Z", "cfgRev": 1, "isSample": true, "memo": "코스트코 전용 2L 티메이커. MOQ 3,500대(40HQ), FOB USD 23.97, 1,200W 시즈히터, TRIAC+PID 제어, 3-Way 정전식 터치, 조리 6종·보온 8종·안심분유.\n개발비 4,666만 원 = 신작 금형 3,407만 원(뚜껑부 3벌 + 손잡이 수정) + 인증 1,259만 원(CB·KC·RoHS·식품접촉부).\n교훈 1: 가열판 PFA 코팅이 식품접촉부 시험 FAIL → 코팅 삭제·재질 변경, 재시험(2025-10-31). 재질은 설계 확정 전에 먼저 시험.\n교훈 2: 가열판 변경으로 KC 안전을 CB 변경본으로 전환(11/14~11/27) — 양산(12/5) 직전까지 인증 미확정, KFDA·세관용 샘플 54대를 인증 전에 미리 제작.\n교훈 3: 구매계약서 초안이 2025-12-01, 품질협약서가 2025-12-26 — 양산 직전 체결. 계약은 금형 발주 전에.\n실제 담당: 상품개발팀. Dev Hub 예시용으로 PM 칸은 심준보로 둠.", "actuals": { "T01": { "start": "2025-06-30", "end": "2025-07-21" }, "T02": { "start": "2025-07-02", "end": "2025-07-02" }, "T03": { "start": "2025-06-30", "end": "2025-07-04" }, "T03b": { "start": "2025-12-01", "end": "2025-12-26" }, "T04": { "start": "2025-07-04", "end": "2025-11-27" }, "T04c": { "start": "2025-07-04", "end": "2025-07-04" }, "Q1": { "start": "2025-07-21", "end": "2025-07-21" }, "T05": { "start": "2025-08-20", "end": "2025-08-20" }, "T06": { "start": "2025-08-20", "end": "2025-10-15" }, "T07": { "start": "2025-10-15", "end": "2025-11-14" }, "Q2": { "start": "2025-11-03", "end": "2025-11-03" }, "T05c": { "start": "2025-10-15", "end": "2025-11-14" }, "T10b": { "start": "2025-11-14", "end": "2025-12-04" }, "T08": { "start": "2025-09-17", "end": "2025-11-20" }, "Q3": { "start": "2025-11-20", "end": "2025-11-20" }, "T09": { "start": "2025-11-14", "end": "2025-11-28" }, "Q4": { "start": "2025-11-28", "end": "2025-11-28" }, "T12a": { "start": "2025-11-06", "end": "2025-11-11" }, "T10": { "start": "2025-11-03", "end": "2025-11-28" }, "T11": { "start": "2025-11-28", "end": "2025-11-28" }, "T11b": { "start": "2025-11-14", "end": "2025-12-05" }, "T12": { "start": "2025-11-06", "end": "2025-12-01" }, "T13": { "start": "2025-12-05", "end": "2025-12-11" }, "T13b": { "start": "2026-01-06", "end": "2026-01-06" }, "T14": { "start": "2025-12-10", "end": "2025-12-10" }, "T14b": { "start": "2025-12-16", "end": "2026-01-07" }, "Q5": { "start": "2026-01-07", "end": "2026-01-08" }, "T15": { "start": "2026-01-07", "end": "2026-01-07" }, "Q6": { "start": "2026-03-10" }, "T05b": { "start": "2025-11-14", "end": "2025-12-05" }, "T15a": { "start": "2026-01-06", "end": "2026-01-07" }, "T04b": { "start": "2025-10-15", "end": "2025-11-03" }, "T11a": { "start": "2025-11-03", "end": "2025-11-27" } }, "reviews": { "G0": { "decision": "pass", "date": "2025-07-21", "note": "성능·전장 검토" }, "G1": { "decision": "pass", "date": "2025-07-02", "note": "코스트코 전용 개발 발의 (목표 2026 MP → 2025-12로 앞당김)" }, "G2": { "decision": "cond", "date": "2025-08-20", "note": "조건: 뚜껑부 분리형 구조 확정 후 금형 발주" }, "G3": { "decision": "pass", "date": "2025-11-14" }, "G3b": { "decision": "cond", "date": "2025-11-20", "note": "조건: 식품접촉부 재시험 통과(10/31 완료), CB 변경본 수령" }, "G4": { "decision": "cond", "date": "2025-12-01", "note": "조건: KC 안전 수령 전 출하 금지, 1차 컨테이너만 선출하" }, "G6": { "decision": "pass", "date": "2026-01-07", "note": "개발 완료 보고서" } }, "squad": [{ "role": "PM", "name": "상품개발팀" }, { "role": "기구", "name": "Midea" }, { "role": "전장", "name": "Midea" }, { "role": "펌웨어", "name": "상품전략팀(메뉴)" }, { "role": "품질", "name": "품질팀" }, { "role": "양산", "name": "상품구매팀" }], "experts": [], "sampleRev": 9 },
    { "id": "p-real-cjb03", "code": "DQ-PA-24_CJ-B03FWH", "model": "CJ-B03FWH (제조사 JE-675C)", "name": "전동스퀴저 CJ-B03 (내수 웜화이트)", "category": "스퀴저(시트러스 주서)", "devType": "ODM", "grade": "C", "vendor": "Yuyao Phelp Electric (중국 위야오)", "factory": "CN", "pm": "심준보", "baseRegion": "KR", "regions": ["KR", "JP", "VN"], "features": { "ac": true, "adapter": false, "battery": false, "motor": true, "heater": false, "foodContact": true, "wireless": false, "app": false }, "start": "2024-02-19", "targetShip": "2024-08-19", "durations": { "T01": 12, "T02": 1, "T03": 10, "T04": 30, "T06": 20, "T07": 5, "T08": 15, "T09": 5, "T12": 3, "T13": 5, "T14b": 5 }, "useToBe": true, "asIs": { "name": "AS-IS", "tasks": [{ "id": "T01", "name": "선행검토 (성능·안전·내구 시험 · 구조 검토)", "stage": "S0", "owner": "상품개발", "duration": 12, "deps": [], "cal": "KR", "startDate": "2024-02-19", "endDate": "2024-03-05", "critical": true, "es": 0, "ef": 16, "actualStart": "2024-02-19", "actualEnd": "2024-03-06", "status": "done" }, { "id": "T01b", "name": "특허·디자인권 조사 (남의 권리 침해 여부 · 우리 출원 거리)", "stage": "S0", "owner": "연구소", "duration": 10, "deps": [{ "id": "T01", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2024-02-19", "endDate": "2024-03-01", "critical": false, "es": 0, "ef": 12, "status": "na" }, { "id": "T02", "name": "개발발의서 전자결재", "stage": "S1", "owner": "PM", "duration": 1, "deps": [{ "id": "T01" }, { "id": "T01b" }], "gate": "G1", "cal": "KR", "startDate": "2024-03-06", "endDate": "2024-03-06", "critical": true, "es": 16, "ef": 17, "actualStart": "2024-03-15", "actualEnd": "2024-03-15", "status": "done" }, { "id": "T03", "name": "파생 사양 협의·견적", "stage": "S2", "owner": "구매", "duration": 10, "deps": [{ "id": "T02" }], "cal": "KR", "startDate": "2024-03-07", "endDate": "2024-03-20", "critical": true, "es": 17, "ef": 31, "actualStart": "2024-03-04", "actualEnd": "2024-04-12", "status": "done" }, { "id": "T03b", "name": "파생 개발 계약·견적 확정", "stage": "S2", "owner": "법무", "duration": 3, "deps": [{ "id": "T03" }], "gate": "G1b", "cal": "KR", "startDate": "2024-03-21", "endDate": "2024-03-25", "critical": true, "es": 31, "ef": 36, "actualStart": "2024-05-09", "actualEnd": "2024-05-09", "status": "done" }, { "id": "T04", "name": "판매 나라 변경 설계(전압·플러그·표기)", "stage": "S3", "owner": "연구소", "duration": 30, "deps": [{ "id": "T03b" }], "cal": "KR", "startDate": "2024-03-26", "endDate": "2024-05-06", "critical": true, "es": 36, "ef": 78, "actualStart": "2024-03-11", "actualEnd": "2024-06-14", "status": "done" }, { "id": "T04c", "name": "원가 검토 · 견적 확정 (목표 원가 대비, 원가 절감안 반영)", "stage": "S3", "owner": "구매", "duration": 5, "deps": [{ "id": "T04", "lag": 20, "type": "SS" }], "cal": "KR", "startDate": "2024-04-23", "endDate": "2024-04-29", "critical": false, "es": 64, "ef": 71, "actualStart": "2024-04-12", "actualEnd": "2024-04-17", "status": "done" }, { "id": "Q1", "name": "[품질분석] 설계 점검 (문제 생길 곳 미리 찾기 · KC 핵심 부품 확인)", "stage": "S3", "owner": "품질", "duration": 3, "deps": [{ "id": "T04" }], "gate": "Q1", "cal": "KR", "startDate": "2024-05-07", "endDate": "2024-05-09", "critical": true, "es": 78, "ef": 81, "actualStart": "2024-05-29", "actualEnd": "2024-05-29", "status": "done" }, { "id": "T05", "name": "설계 확정 · 금형 발주", "stage": "S3", "owner": "PM", "duration": 0, "deps": [{ "id": "Q1" }, { "id": "T03b" }, { "id": "T04c" }], "milestone": true, "gate": "G2", "cal": "KR", "startDate": "2024-05-10", "endDate": "2024-05-10", "critical": true, "es": 81, "ef": 81, "actualStart": "2024-03-11", "actualEnd": "2024-03-11", "status": "done" }, { "id": "T06", "name": "판매 나라 전용 부품 금형/수정", "stage": "S4", "owner": "제조사", "duration": 20, "deps": [{ "id": "T05" }], "cal": "CN", "startDate": "2024-05-10", "endDate": "2024-06-06", "critical": true, "es": 81, "ef": 109, "actualStart": "2024-03-11", "actualEnd": "2024-04-20", "status": "done" }, { "id": "T07", "name": "첫 사출(T1) · 금형 수정(T2~Tn) · 금형 승인", "stage": "S4", "owner": "연구소", "duration": 5, "deps": [{ "id": "T06" }], "gate": "G3", "cal": "CN", "startDate": "2024-06-07", "endDate": "2024-06-13", "critical": true, "es": 109, "ef": 116, "actualStart": "2024-04-20", "actualEnd": "2024-04-26", "status": "done" }, { "id": "Q2", "name": "[품질분석] 첫 사출품 점검 (치수 · 외관 · 조립)", "stage": "S4", "owner": "품질", "duration": 5, "deps": [{ "id": "T07", "lag": 5, "type": "SS" }], "gate": "Q2", "cal": "KR", "startDate": "2024-06-14", "endDate": "2024-06-20", "critical": false, "es": 116, "ef": 123, "actualStart": "2024-04-23", "actualEnd": "2024-04-26", "status": "done" }, { "id": "T05c", "name": "액세서리·소모품(컵·브러시·필터·전원코드) 개발·발주", "stage": "S4", "owner": "구매", "duration": 40, "deps": [{ "id": "T05" }], "cal": "KR", "startDate": "2024-05-10", "endDate": "2024-07-04", "critical": false, "es": 81, "ef": 137, "status": "na" }, { "id": "T10b", "name": "포장 설계 · 포장 낙하 시험 (기프트박스·카톤·완충재 구조)", "stage": "S4", "owner": "제조사", "duration": 20, "deps": [{ "id": "T07" }], "cal": "CN", "startDate": "2024-06-14", "endDate": "2024-07-11", "critical": true, "es": 116, "ef": 144, "actualStart": "2024-06-13", "actualEnd": "2024-07-23", "status": "done" }, { "id": "T08", "name": "시제품 시험 (신뢰성·내구 · 실사용 테스트)", "stage": "S5", "owner": "품질", "duration": 15, "deps": [{ "id": "T07" }], "cal": "KR", "startDate": "2024-06-14", "endDate": "2024-07-04", "critical": false, "es": 116, "ef": 137, "actualStart": "2024-05-29", "actualEnd": "2024-07-10", "status": "done" }, { "id": "Q3", "name": "[품질분석] 시험 결과 점검 · 합격 판정 (내구 · 실사용)", "stage": "S5", "owner": "품질", "duration": 3, "deps": [{ "id": "T08" }], "gate": "G3b", "cal": "KR", "startDate": "2024-07-05", "endDate": "2024-07-09", "critical": false, "es": 137, "ef": 142, "actualStart": "2024-07-10", "actualEnd": "2024-07-10", "status": "done" }, { "id": "T09", "name": "시험생산 (PVT, 포장·액세서리 포함 완제품)", "stage": "S7", "owner": "제조사", "duration": 5, "deps": [{ "id": "Q3" }, { "id": "T05c" }, { "id": "T10b" }], "cal": "CN", "startDate": "2024-07-12", "endDate": "2024-07-18", "critical": true, "es": 144, "ef": 151, "actualStart": "2024-04-26", "actualEnd": "2024-04-28", "status": "done" }, { "id": "C-KR-KC-SAFE", "name": "KC 안전인증", "stage": "S6", "owner": "외부기관", "duration": 60, "deps": [{ "id": "T09" }, { "id": "C-GL-CB" }], "certId": "KR-KC-SAFE", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2024-09-06", "endDate": "2024-11-28", "critical": true, "es": 200, "ef": 284 }, { "id": "C-KR-KC-FA", "name": "KC 안전인증 최초 공장심사", "stage": "S6", "owner": "외부기관", "duration": 30, "deps": [{ "id": "T09" }, { "id": "C-KR-KC-SAFE" }], "certId": "KR-KC-FA", "region": "KR", "outsourced": false, "cal": "CN", "startDate": "2024-11-29", "endDate": "2025-01-09", "critical": true, "es": 284, "ef": 326 }, { "id": "C-KR-KC-EMC", "name": "KC 전자파 적합등록", "stage": "S6", "owner": "외부기관", "duration": 30, "deps": [{ "id": "T09" }], "certId": "KR-KC-EMC", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2024-07-19", "endDate": "2024-08-29", "critical": false, "es": 151, "ef": 193 }, { "id": "C-KR-FOOD", "name": "식품접촉부 시험 (기구·용기·포장)", "stage": "S6", "owner": "외부기관", "duration": 28, "deps": [{ "id": "T09" }], "certId": "KR-FOOD", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2024-07-19", "endDate": "2024-08-27", "critical": false, "es": 151, "ef": 191 }, { "id": "C-KR-NONUSE", "name": "유해물질 비사용증명서", "stage": "S6", "owner": "외부기관", "duration": 7, "deps": [{ "id": "T09" }], "certId": "KR-NONUSE", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2024-07-19", "endDate": "2024-07-29", "critical": false, "es": 151, "ef": 162 }, { "id": "C-KR-PKG", "name": "포장재 재질·구조 / 분리배출 표시", "stage": "S6", "owner": "외부기관", "duration": 14, "deps": [{ "id": "T09" }], "certId": "KR-PKG", "region": "KR", "outsourced": false, "cal": "KR", "startDate": "2024-07-19", "endDate": "2024-08-07", "critical": false, "es": 151, "ef": 171 }, { "id": "C-GL-CB", "name": "CB 성적서 (IECEE)", "stage": "S6", "owner": "외부기관", "duration": 35, "deps": [{ "id": "T09" }], "certId": "GL-CB", "region": "GLOBAL", "outsourced": false, "cal": "KR", "startDate": "2024-07-19", "endDate": "2024-09-05", "critical": true, "es": 151, "ef": 200 }, { "id": "C-GL-ROHS", "name": "RoHS 시험성적서", "stage": "S6", "owner": "외부기관", "duration": 14, "deps": [{ "id": "T09" }], "certId": "GL-ROHS", "region": "GLOBAL", "outsourced": false, "cal": "KR", "startDate": "2024-07-19", "endDate": "2024-08-07", "critical": false, "es": 151, "ef": 171 }, { "id": "C-JP-PSE", "name": "PSE (원형/마름모)", "stage": "S6", "owner": "외부기관", "duration": 45, "deps": [{ "id": "T09" }, { "id": "C-GL-CB" }], "certId": "JP-PSE", "region": "JP", "outsourced": false, "cal": "KR", "startDate": "2024-09-06", "endDate": "2024-11-07", "critical": false, "es": 200, "ef": 263 }, { "id": "C-JP-FOOD", "name": "일본 식품접촉부 시험", "stage": "S6", "owner": "외부기관", "duration": 35, "deps": [{ "id": "T09" }], "certId": "JP-FOOD", "region": "JP", "outsourced": false, "cal": "KR", "startDate": "2024-07-19", "endDate": "2024-09-05", "critical": false, "es": 151, "ef": 200 }, { "id": "C-VN-CR", "name": "CR 마크 (QCVN)", "stage": "S6", "owner": "외부기관", "duration": 30, "deps": [{ "id": "T09" }], "certId": "VN-CR", "region": "VN", "outsourced": false, "cal": "KR", "startDate": "2024-07-19", "endDate": "2024-08-29", "critical": false, "es": 151, "ef": 193 }, { "id": "Q4", "name": "[품질분석] 시험생산 점검 (불량률 · 공정 안정성 · 검사 기준)", "stage": "S7", "owner": "품질", "duration": 3, "deps": [{ "id": "T09" }], "gate": "Q4", "cal": "KR", "startDate": "2024-07-19", "endDate": "2024-07-23", "critical": false, "es": 151, "ef": 156, "actualStart": "2024-04-28", "actualEnd": "2024-04-28", "status": "done" }, { "id": "T12a", "name": "양산 시방서 합의·서명 (사양·구성품·포장·라벨 위치·검사 기준)", "stage": "S7", "owner": "상품개발", "duration": 10, "deps": [{ "id": "T09", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2024-07-12", "endDate": "2024-07-25", "critical": false, "es": 144, "ef": 158, "actualStart": "2024-08-23", "actualEnd": "2024-08-23", "status": "done" }, { "id": "T10", "name": "시각 디자인 (매뉴얼·라벨·기프트박스·카톤 인쇄 디자인)", "stage": "S3", "owner": "디자인", "duration": 20, "deps": [{ "id": "T09" }], "cal": "KR", "startDate": "2024-07-19", "endDate": "2024-08-15", "critical": false, "es": 151, "ef": 179, "actualStart": "2024-04-19", "actualEnd": "2024-07-24", "status": "done" }, { "id": "T11", "name": "인쇄물 최종 승인 (인증번호·마크 반영)", "stage": "S7", "owner": "디자인", "duration": 10, "deps": [{ "id": "C-KR-KC-SAFE" }, { "id": "C-KR-KC-FA" }, { "id": "C-KR-KC-EMC" }, { "id": "C-KR-FOOD" }, { "id": "C-KR-NONUSE" }, { "id": "C-KR-PKG" }, { "id": "C-GL-CB" }, { "id": "C-GL-ROHS" }, { "id": "C-JP-PSE" }, { "id": "C-JP-FOOD" }, { "id": "C-VN-CR" }, { "id": "T10" }], "gate": "G4a", "cal": "KR", "startDate": "2025-01-10", "endDate": "2025-01-23", "critical": true, "es": 326, "ef": 340, "actualStart": "2024-08-07", "actualEnd": "2024-08-07", "status": "done" }, { "id": "T11b", "name": "인쇄물·박스 인쇄 · 공장 입고", "stage": "S7", "owner": "구매", "duration": 10, "deps": [{ "id": "T11" }], "cal": "CN", "startDate": "2025-01-24", "endDate": "2025-02-06", "critical": true, "es": 340, "ef": 354, "actualStart": "2024-08-07", "actualEnd": "2024-08-12", "status": "done" }, { "id": "T12", "name": "양산 승인 · 거래 조건(FOB) 확정 · 코드 채번", "stage": "S7", "owner": "상품개발", "duration": 3, "deps": [{ "id": "T11" }, { "id": "Q4" }, { "id": "T12a" }], "gate": "G4", "cal": "KR", "startDate": "2025-01-24", "endDate": "2025-01-28", "critical": false, "es": 340, "ef": 345, "actualStart": "2024-08-05", "actualEnd": "2024-08-06", "status": "done" }, { "id": "T13", "name": "양산 (부품 발주 포함)", "stage": "S8", "owner": "제조사", "duration": 5, "deps": [{ "id": "T12" }], "cal": "CN", "startDate": "2025-01-29", "endDate": "2025-02-04", "critical": false, "es": 345, "ef": 352, "actualStart": "2024-08-09", "actualEnd": "2024-08-14", "status": "done" }, { "id": "T13b", "name": "A/S 부품·소모품 초기 재고 발주 · A/S 매뉴얼", "stage": "S8", "owner": "상품개발", "duration": 10, "deps": [{ "id": "T13", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2025-01-29", "endDate": "2025-02-11", "critical": false, "es": 345, "ef": 359, "actualStart": "2024-08-26", "actualEnd": "2024-08-26", "status": "done" }, { "id": "T14", "name": "출하 검사 · 첫 출하", "stage": "S8", "owner": "품질", "duration": 3, "deps": [{ "id": "T13" }, { "id": "T11b" }], "gate": "G5", "cal": "CN", "startDate": "2025-02-07", "endDate": "2025-02-11", "critical": true, "es": 354, "ef": 359, "actualStart": "2024-08-14", "actualEnd": "2024-08-19", "status": "done" }, { "id": "T14b", "name": "통관 · 수입 검사 (식품 접촉 정밀검사, 국내 판매 시작 전)", "stage": "S8", "owner": "구매", "duration": 5, "deps": [{ "id": "T14" }], "cal": "KR", "startDate": "2025-02-12", "endDate": "2025-02-18", "critical": false, "es": 359, "ef": 366, "actualStart": "2024-08-19", "actualEnd": "2024-08-23", "status": "done" }, { "id": "Q5", "name": "[품질분석] 첫 양산품 점검 (출하검사 · 초기 불량 원인과 대책)", "stage": "S8", "owner": "품질", "duration": 5, "deps": [{ "id": "T14" }], "gate": "Q5", "cal": "KR", "startDate": "2025-02-12", "endDate": "2025-02-18", "critical": true, "es": 359, "ef": 366, "actualStart": "2024-08-23", "actualEnd": "2024-09-10", "status": "done" }, { "id": "T15", "name": "양산 후 관리 이관 · 개발 마무리 보고", "stage": "S9", "owner": "PM", "duration": 14, "deps": [{ "id": "Q5" }], "gate": "G6", "cal": "KR", "startDate": "2025-02-19", "endDate": "2025-03-10", "critical": true, "es": 366, "ef": 386, "actualStart": "2024-09-09", "actualEnd": "2024-09-09", "status": "done" }, { "id": "Q6", "name": "[품질분석] 시장 반응 점검 (반품 · 고객 의견 · A/S, 출하 후 약 3개월)", "stage": "S9", "owner": "품질", "duration": 5, "deps": [{ "id": "T14", "lag": 60 }], "gate": "Q6", "postLaunch": true, "cal": "KR", "startDate": "2025-05-07", "endDate": "2025-05-13", "critical": false, "es": 443, "ef": 450, "actualStart": "2025-02-11", "actualEnd": "2025-03-28", "status": "done" }], "start": "2024-02-19", "totalDays": 386, "end": "2025-03-10" }, "toBe": { "name": "TO-BE", "tasks": [{ "id": "T01", "name": "선행검토 (성능·안전·내구 시험 · 구조 검토)", "stage": "S0", "owner": "상품개발", "duration": 12, "deps": [], "cal": "KR", "startDate": "2024-02-19", "endDate": "2024-03-05", "critical": true, "es": 0, "ef": 16, "actualStart": "2024-02-19", "actualEnd": "2024-03-06", "status": "done" }, { "id": "T01b", "name": "특허·디자인권 조사 (남의 권리 침해 여부 · 우리 출원 거리)", "stage": "S0", "owner": "연구소", "duration": 10, "deps": [{ "id": "T01", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2024-02-19", "endDate": "2024-03-01", "critical": false, "es": 0, "ef": 12, "status": "na" }, { "id": "T02", "name": "개발발의서 전자결재", "stage": "S1", "owner": "PM", "duration": 1, "deps": [{ "id": "T01" }, { "id": "T01b" }], "gate": "G1", "cal": "KR", "startDate": "2024-03-06", "endDate": "2024-03-06", "critical": true, "es": 16, "ef": 17, "actualStart": "2024-03-15", "actualEnd": "2024-03-15", "status": "done" }, { "id": "T03", "name": "파생 사양 협의·견적", "stage": "S2", "owner": "구매", "duration": 10, "deps": [{ "id": "T02" }], "cal": "KR", "startDate": "2024-03-07", "endDate": "2024-03-20", "critical": true, "es": 17, "ef": 31, "actualStart": "2024-03-04", "actualEnd": "2024-04-12", "status": "done" }, { "id": "T03b", "name": "파생 개발 계약·견적 확정", "stage": "S2", "owner": "법무", "duration": 3, "deps": [{ "id": "T03" }], "gate": "G1b", "cal": "KR", "startDate": "2024-03-21", "endDate": "2024-03-25", "critical": false, "es": 31, "ef": 36, "actualStart": "2024-05-09", "actualEnd": "2024-05-09", "status": "done" }, { "id": "T04", "name": "판매 나라 변경 설계(전압·플러그·표기)", "stage": "S3", "owner": "연구소", "duration": 30, "deps": [{ "id": "T03", "type": "SS", "lag": 10 }], "cal": "KR", "startDate": "2024-03-21", "endDate": "2024-05-01", "critical": true, "es": 31, "ef": 73, "actualStart": "2024-03-11", "actualEnd": "2024-06-14", "status": "done" }, { "id": "T04c", "name": "원가 검토 · 견적 확정 (목표 원가 대비, 원가 절감안 반영)", "stage": "S3", "owner": "구매", "duration": 5, "deps": [{ "id": "T04", "lag": 20, "type": "SS" }], "cal": "KR", "startDate": "2024-04-18", "endDate": "2024-04-24", "critical": false, "es": 59, "ef": 66, "actualStart": "2024-04-12", "actualEnd": "2024-04-17", "status": "done" }, { "id": "Q1", "name": "[품질분석] 설계 점검 (문제 생길 곳 미리 찾기 · KC 핵심 부품 확인)", "stage": "S3", "owner": "품질", "duration": 3, "deps": [{ "id": "T04" }], "gate": "Q1", "cal": "KR", "startDate": "2024-05-02", "endDate": "2024-05-06", "critical": true, "es": 73, "ef": 78, "actualStart": "2024-05-29", "actualEnd": "2024-05-29", "status": "done" }, { "id": "T05", "name": "설계 확정 · 금형 발주", "stage": "S3", "owner": "PM", "duration": 0, "deps": [{ "id": "Q1" }, { "id": "T03b" }, { "id": "T04c" }], "milestone": true, "gate": "G2", "cal": "KR", "startDate": "2024-05-07", "endDate": "2024-05-07", "critical": true, "es": 78, "ef": 78, "actualStart": "2024-03-11", "actualEnd": "2024-03-11", "status": "done" }, { "id": "T06", "name": "판매 나라 전용 부품 금형/수정", "stage": "S4", "owner": "제조사", "duration": 20, "deps": [{ "id": "T05" }], "cal": "CN", "startDate": "2024-05-07", "endDate": "2024-06-03", "critical": true, "es": 78, "ef": 106, "actualStart": "2024-03-11", "actualEnd": "2024-04-20", "status": "done" }, { "id": "T07", "name": "첫 사출(T1) · 금형 수정(T2~Tn) · 금형 승인", "stage": "S4", "owner": "연구소", "duration": 5, "deps": [{ "id": "T06" }], "gate": "G3", "cal": "CN", "startDate": "2024-06-04", "endDate": "2024-06-10", "critical": false, "es": 106, "ef": 113, "actualStart": "2024-04-20", "actualEnd": "2024-04-26", "status": "done" }, { "id": "Q2", "name": "[품질분석] 첫 사출품 점검 (치수 · 외관 · 조립)", "stage": "S4", "owner": "품질", "duration": 5, "deps": [{ "id": "T07", "lag": 5, "type": "SS" }], "gate": "Q2", "cal": "KR", "startDate": "2024-06-11", "endDate": "2024-06-17", "critical": false, "es": 113, "ef": 120, "actualStart": "2024-04-23", "actualEnd": "2024-04-26", "status": "done" }, { "id": "T05c", "name": "액세서리·소모품(컵·브러시·필터·전원코드) 개발·발주", "stage": "S4", "owner": "구매", "duration": 40, "deps": [{ "id": "T05" }], "cal": "KR", "startDate": "2024-05-07", "endDate": "2024-07-01", "critical": false, "es": 78, "ef": 134, "status": "na" }, { "id": "T10b", "name": "포장 설계 · 포장 낙하 시험 (기프트박스·카톤·완충재 구조)", "stage": "S4", "owner": "제조사", "duration": 20, "deps": [{ "id": "T07" }], "cal": "CN", "startDate": "2024-06-11", "endDate": "2024-07-08", "critical": false, "es": 113, "ef": 141, "actualStart": "2024-06-13", "actualEnd": "2024-07-23", "status": "done" }, { "id": "T08", "name": "시제품 시험 (신뢰성·내구 · 실사용 테스트)", "stage": "S5", "owner": "품질", "duration": 15, "deps": [{ "id": "T07" }], "cal": "KR", "startDate": "2024-06-11", "endDate": "2024-07-01", "critical": false, "es": 113, "ef": 134, "actualStart": "2024-05-29", "actualEnd": "2024-07-10", "status": "done" }, { "id": "Q3", "name": "[품질분석] 시험 결과 점검 · 합격 판정 (내구 · 실사용)", "stage": "S5", "owner": "품질", "duration": 3, "deps": [{ "id": "T08" }], "gate": "G3b", "cal": "KR", "startDate": "2024-07-02", "endDate": "2024-07-04", "critical": false, "es": 134, "ef": 137, "actualStart": "2024-07-10", "actualEnd": "2024-07-10", "status": "done" }, { "id": "T09", "name": "시험생산 (PVT, 포장·액세서리 포함 완제품)", "stage": "S7", "owner": "제조사", "duration": 5, "deps": [{ "id": "Q3" }, { "id": "T05c" }, { "id": "T10b" }], "cal": "CN", "startDate": "2024-07-09", "endDate": "2024-07-15", "critical": false, "es": 141, "ef": 148, "actualStart": "2024-04-26", "actualEnd": "2024-04-28", "status": "done" }, { "id": "C-KR-KC-SAFE", "name": "KC 안전인증", "stage": "S6", "owner": "외부기관", "duration": 35, "deps": [{ "id": "T06", "lag": 10 }], "certId": "KR-KC-SAFE", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2024-06-18", "endDate": "2024-08-05", "critical": true, "es": 120, "ef": 169 }, { "id": "C-KR-KC-FA", "name": "KC 안전인증 최초 공장심사", "stage": "S6", "owner": "외부기관", "duration": 15, "deps": [{ "id": "C-KR-KC-SAFE", "type": "SS", "lag": 10 }, { "id": "T09", "type": "SS", "lag": 0 }], "certId": "KR-KC-FA", "region": "KR", "outsourced": true, "cal": "CN", "startDate": "2024-07-09", "endDate": "2024-07-29", "critical": false, "es": 141, "ef": 162 }, { "id": "C-KR-KC-EMC", "name": "KC 전자파 적합등록", "stage": "S6", "owner": "외부기관", "duration": 21, "deps": [{ "id": "T06", "lag": 10 }], "certId": "KR-KC-EMC", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2024-06-18", "endDate": "2024-07-16", "critical": false, "es": 120, "ef": 149 }, { "id": "C-KR-FOOD", "name": "식품접촉부 시험 (기구·용기·포장)", "stage": "S6", "owner": "외부기관", "duration": 14, "deps": [{ "id": "T06", "lag": 10 }], "certId": "KR-FOOD", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2024-06-18", "endDate": "2024-07-05", "critical": false, "es": 120, "ef": 138 }, { "id": "C-KR-NONUSE", "name": "유해물질 비사용증명서", "stage": "S6", "owner": "외부기관", "duration": 5, "deps": [{ "id": "T05" }], "certId": "KR-NONUSE", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2024-05-07", "endDate": "2024-05-13", "critical": false, "es": 78, "ef": 85 }, { "id": "C-KR-PKG", "name": "포장재 재질·구조 / 분리배출 표시", "stage": "S6", "owner": "외부기관", "duration": 10, "deps": [{ "id": "T05" }], "certId": "KR-PKG", "region": "KR", "outsourced": true, "cal": "KR", "startDate": "2024-05-07", "endDate": "2024-05-20", "critical": false, "es": 78, "ef": 92 }, { "id": "C-GL-CB", "name": "CB 성적서 (IECEE)", "stage": "S6", "owner": "외부기관", "duration": 30, "deps": [{ "id": "T06", "lag": 10 }], "certId": "GL-CB", "region": "GLOBAL", "outsourced": true, "cal": "KR", "startDate": "2024-06-18", "endDate": "2024-07-29", "critical": false, "es": 120, "ef": 162 }, { "id": "C-GL-ROHS", "name": "RoHS 시험성적서", "stage": "S6", "owner": "외부기관", "duration": 10, "deps": [{ "id": "T06", "lag": 10 }], "certId": "GL-ROHS", "region": "GLOBAL", "outsourced": true, "cal": "KR", "startDate": "2024-06-18", "endDate": "2024-07-01", "critical": false, "es": 120, "ef": 134 }, { "id": "C-JP-PSE", "name": "PSE (원형/마름모)", "stage": "S6", "owner": "외부기관", "duration": 30, "deps": [{ "id": "T06", "lag": 10 }], "certId": "JP-PSE", "region": "JP", "outsourced": true, "cal": "KR", "startDate": "2024-06-18", "endDate": "2024-07-29", "critical": false, "es": 120, "ef": 162 }, { "id": "C-JP-FOOD", "name": "일본 식품접촉부 시험", "stage": "S6", "owner": "외부기관", "duration": 21, "deps": [{ "id": "T06", "lag": 10 }], "certId": "JP-FOOD", "region": "JP", "outsourced": true, "cal": "KR", "startDate": "2024-06-18", "endDate": "2024-07-16", "critical": false, "es": 120, "ef": 149 }, { "id": "C-VN-CR", "name": "CR 마크 (QCVN)", "stage": "S6", "owner": "외부기관", "duration": 21, "deps": [{ "id": "T05" }], "certId": "VN-CR", "region": "VN", "outsourced": true, "cal": "KR", "startDate": "2024-05-07", "endDate": "2024-06-04", "critical": false, "es": 78, "ef": 107 }, { "id": "Q4", "name": "[품질분석] 시험생산 점검 (불량률 · 공정 안정성 · 검사 기준)", "stage": "S7", "owner": "품질", "duration": 3, "deps": [{ "id": "T09" }], "gate": "Q4", "cal": "KR", "startDate": "2024-07-16", "endDate": "2024-07-18", "critical": false, "es": 148, "ef": 151, "actualStart": "2024-04-28", "actualEnd": "2024-04-28", "status": "done" }, { "id": "T12a", "name": "양산 시방서 합의·서명 (사양·구성품·포장·라벨 위치·검사 기준)", "stage": "S7", "owner": "상품개발", "duration": 10, "deps": [{ "id": "T09", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2024-07-09", "endDate": "2024-07-22", "critical": false, "es": 141, "ef": 155, "actualStart": "2024-08-23", "actualEnd": "2024-08-23", "status": "done" }, { "id": "T10", "name": "시각 디자인 (매뉴얼·라벨·기프트박스·카톤 인쇄 디자인)", "stage": "S3", "owner": "디자인", "duration": 20, "deps": [{ "id": "T05" }], "cal": "KR", "startDate": "2024-05-07", "endDate": "2024-06-03", "critical": false, "es": 78, "ef": 106, "actualStart": "2024-04-19", "actualEnd": "2024-07-24", "status": "done" }, { "id": "T11", "name": "인증번호·마크 삽입 · 인쇄물 최종 승인", "stage": "S7", "owner": "디자인", "duration": 5, "deps": [{ "id": "C-KR-KC-SAFE" }, { "id": "C-KR-KC-FA" }, { "id": "C-KR-KC-EMC" }, { "id": "C-KR-FOOD" }, { "id": "C-KR-NONUSE" }, { "id": "C-KR-PKG" }, { "id": "C-GL-CB" }, { "id": "C-GL-ROHS" }, { "id": "C-JP-PSE" }, { "id": "C-JP-FOOD" }, { "id": "C-VN-CR" }, { "id": "T11a" }], "gate": "G4a", "cal": "KR", "startDate": "2024-08-06", "endDate": "2024-08-12", "critical": true, "es": 169, "ef": 176, "actualStart": "2024-08-07", "actualEnd": "2024-08-07", "status": "done" }, { "id": "T11b", "name": "인쇄물·박스 인쇄 · 공장 입고", "stage": "S7", "owner": "구매", "duration": 10, "deps": [{ "id": "T11" }], "cal": "CN", "startDate": "2024-08-13", "endDate": "2024-08-26", "critical": true, "es": 176, "ef": 190, "actualStart": "2024-08-07", "actualEnd": "2024-08-12", "status": "done" }, { "id": "T12", "name": "양산 승인 · 거래 조건(FOB) 확정 · 코드 채번", "stage": "S7", "owner": "상품개발", "duration": 3, "deps": [{ "id": "T11" }, { "id": "Q4" }, { "id": "T12a" }, { "id": "T09" }], "gate": "G4", "cal": "KR", "startDate": "2024-08-13", "endDate": "2024-08-15", "critical": false, "es": 176, "ef": 179, "actualStart": "2024-08-05", "actualEnd": "2024-08-06", "status": "done" }, { "id": "T13", "name": "양산 조립·검사 (부품은 미리 발주해 둔 상태)", "stage": "S8", "owner": "제조사", "duration": 5, "deps": [{ "id": "T12" }, { "id": "T05b" }], "cal": "CN", "startDate": "2024-08-16", "endDate": "2024-08-22", "critical": false, "es": 179, "ef": 186, "actualStart": "2024-08-09", "actualEnd": "2024-08-14", "status": "done" }, { "id": "T13b", "name": "A/S 부품·소모품 초기 재고 발주 · A/S 매뉴얼", "stage": "S8", "owner": "상품개발", "duration": 10, "deps": [{ "id": "T13", "lag": 0, "type": "SS" }], "cal": "KR", "startDate": "2024-08-16", "endDate": "2024-08-29", "critical": false, "es": 179, "ef": 193, "actualStart": "2024-08-26", "actualEnd": "2024-08-26", "status": "done" }, { "id": "T14", "name": "출하 검사 · 첫 출하", "stage": "S8", "owner": "품질", "duration": 3, "deps": [{ "id": "T13" }, { "id": "T11b" }], "gate": "G5", "cal": "CN", "startDate": "2024-08-27", "endDate": "2024-08-29", "critical": true, "es": 190, "ef": 193, "actualStart": "2024-08-14", "actualEnd": "2024-08-19", "status": "done" }, { "id": "T14b", "name": "통관 · 수입 검사 (식품 접촉 정밀검사, 국내 판매 시작 전)", "stage": "S8", "owner": "구매", "duration": 5, "deps": [{ "id": "T14" }], "cal": "KR", "startDate": "2024-08-30", "endDate": "2024-09-05", "critical": false, "es": 193, "ef": 200, "actualStart": "2024-08-19", "actualEnd": "2024-08-23", "status": "done" }, { "id": "Q5", "name": "[품질분석] 첫 양산품 점검 (출하검사 · 초기 불량 원인과 대책)", "stage": "S8", "owner": "품질", "duration": 5, "deps": [{ "id": "T14" }], "gate": "Q5", "cal": "KR", "startDate": "2024-08-30", "endDate": "2024-09-05", "critical": true, "es": 193, "ef": 200, "actualStart": "2024-08-23", "actualEnd": "2024-09-10", "status": "done" }, { "id": "T15", "name": "개발 마무리 보고 (이관 문서 확인·결재)", "stage": "S9", "owner": "PM", "duration": 4, "deps": [{ "id": "Q5" }, { "id": "T15a" }], "gate": "G6", "cal": "KR", "startDate": "2024-09-06", "endDate": "2024-09-11", "critical": true, "es": 200, "ef": 206, "actualStart": "2024-09-09", "actualEnd": "2024-09-09", "status": "done" }, { "id": "Q6", "name": "[품질분석] 시장 반응 점검 (반품 · 고객 의견 · A/S, 출하 후 약 3개월)", "stage": "S9", "owner": "품질", "duration": 5, "deps": [{ "id": "T14", "lag": 60 }], "gate": "Q6", "postLaunch": true, "cal": "KR", "startDate": "2024-11-22", "endDate": "2024-11-28", "critical": false, "es": 277, "ef": 284, "actualStart": "2025-02-11", "actualEnd": "2025-03-28", "status": "done" }, { "id": "T11a", "name": "인쇄물 교정·사전 승인 (인증번호 자리만 비워 둠)", "stage": "S7", "owner": "디자인", "duration": 5, "deps": [{ "id": "T10" }], "cal": "KR", "startDate": "2024-06-04", "endDate": "2024-06-10", "critical": false, "es": 106, "ef": 113, "actualStart": "2024-07-18", "actualEnd": "2024-07-24", "status": "done" }, { "id": "T05b", "name": "오래 걸리는 부품(모터·기판·IC) 미리 발주", "stage": "S7", "owner": "구매", "duration": 45, "deps": [{ "id": "T07" }], "cal": "CN", "startDate": "2024-06-11", "endDate": "2024-08-12", "critical": false, "es": 113, "ef": 176, "actualStart": "2024-07-20", "actualEnd": "2024-08-09", "status": "done" }, { "id": "T15a", "name": "양산 후 관리 문서 작성 (고장 대응 가이드·외관 검사 기준서·A/S 부품 목록) — 양산 중에", "stage": "S9", "owner": "품질", "duration": 10, "deps": [{ "id": "T13", "type": "SS", "lag": 0 }], "cal": "KR", "startDate": "2024-08-16", "endDate": "2024-08-29", "critical": false, "es": 179, "ef": 193, "actualStart": "2024-08-23", "actualEnd": "2024-08-30", "status": "done" }], "start": "2024-02-19", "changes": [{ "rule": "R1", "title": "인증 외부기관 위탁 (KC 포함)", "detail": "인증 11건을 전문 인증기관(KTR·KTC·KTL·TÜV·Intertek 등)에 서류 대행까지 맡김. 시험 자체 기간은 그대로이고, 줄어드는 건 접수 전 서류 준비와 보완 서류 왕복 기간(건별 합계 116일, 기관 표준 소요 기준). 동시에 진행되는 인증이 많아 출시일에 주는 효과는 이보다 작음", "savedDays": 63, "tasks": ["C-KR-KC-SAFE", "C-KR-KC-FA", "C-KR-KC-EMC", "C-KR-FOOD", "C-KR-NONUSE", "C-KR-PKG", "C-GL-CB", "C-GL-ROHS", "C-JP-PSE", "C-JP-FOOD", "C-VN-CR"], "kind": "shorter" }, { "rule": "R2", "title": "KC 직접 의뢰 — CB→KC 직렬 전환 제거", "detail": "같은 T1 시료로 CB와 KC·PSE·CE-LVD를 동시에 접수 (CB 결과를 기다렸다가 전환하지 않음). CB 성적서는 SII·BSMI·RCM 등 서류 기반 나라에만 사용. 시험 일수는 그대로, 순서만 직렬 → 동시", "savedDays": 42, "tasks": ["C-KR-KC-SAFE", "C-JP-PSE"], "kind": "parallel" }, { "rule": "R3", "title": "인증 착수를 T1 시료 시점으로 당김", "detail": "시험생산 후에 접수하던 인증을 첫 사출(T1) 시료(금형 제작 종료 +10일)로 바로 접수해 시제품 시험과 동시에 진행. 서류 인증은 설계 확정 직후 시작. KC 공장심사는 시험 접수 후 심사원을 예약해 시험생산 시작에 맞춰 진행. 시험 일수는 그대로, 기다리는 시간만 없앰", "savedDays": 42, "tasks": ["C-KR-KC-SAFE", "C-KR-KC-FA", "C-KR-KC-EMC", "C-KR-FOOD", "C-KR-NONUSE", "C-KR-PKG", "C-GL-CB", "C-GL-ROHS", "C-JP-PSE", "C-JP-FOOD", "C-VN-CR"], "kind": "parallel" }, { "rule": "R4", "title": "시각디자인·인쇄물 금형 기간 병행", "detail": "매뉴얼·라벨·박스 디자인(20일)과 교정(5일)을 금형 만드는 동안 미리 끝내고, 인증이 나오면 인증번호 넣고 최종 승인(5일)만 남김. 인쇄물 일의 양(30일)은 그대로, 순서만 앞당김", "savedDays": 14, "tasks": ["T10", "T11a", "T11"], "kind": "split" }, { "rule": "R5", "title": "시험생산(PVT)과 인증 병행 · 양산 승인 조건부", "detail": "시험생산을 인증 결과를 기다리는 동안 진행하고, 양산 승인은 \"시험생산 합격 + 인증 완료\" 두 조건이 다 되면 내림. 일수는 그대로, 기다리는 시간만 없앰", "savedDays": 0, "tasks": ["T09", "T12"], "kind": "parallel" }, { "rule": "R6", "title": "장납기 부품 선발주", "detail": "양산 5일 중 부품 발주·입고 기다리는 0일을 금형 승인 직후로 앞당김(발주 리드타임 45일은 금형·시험과 겹침). 조립·검사 5일은 그대로. 공장 출고가(FOB) 계약에 미리 발주한 부품의 책임 범위를 적어야 함", "savedDays": 0, "tasks": ["T05b", "T13"], "kind": "split" }, { "rule": "R7", "title": "계약·설계 오버랩", "detail": "업체를 2곳으로 좁힌 뒤 비밀유지계약만 맺고 디자인·설계를 시작 (업체 선정 시작 +10일, 계약 마무리와 동시에). 계약이 늦어질 때 설계 비용을 누가 부담할지 미리 합의. 금형 발주(설계 확정)는 계약 체결 뒤에만 가능", "savedDays": 5, "tasks": ["T04"], "kind": "parallel" }, { "rule": "R8", "title": "양산 후 관리 문서를 양산 중에 작성", "detail": "이관 문서 작성(10일)을 양산이 돌아가는 동안 미리 하고, 첫 출하 뒤엔 보고·결재(4일)만 남김. 일의 양은 그대로, 순서만 앞당김", "savedDays": 14, "tasks": ["T15a", "T15"], "kind": "split" }], "totalDays": 206, "end": "2024-09-11" }, "checklist": [{ "id": "C001", "status": "done", "doneAt": "2024-03-06" }, { "id": "C002", "status": "done", "doneAt": "2024-03-06" }, { "id": "C003", "status": "done", "doneAt": "2024-03-06" }, { "id": "C004", "status": "done", "doneAt": "2024-03-06" }, { "id": "C005", "status": "done", "doneAt": "2024-03-06" }, { "id": "C006", "status": "done", "doneAt": "2024-03-06" }, { "id": "C007", "status": "done", "doneAt": "2024-03-06" }, { "id": "C010", "status": "done", "doneAt": "2024-03-06" }, { "id": "C011", "status": "done", "doneAt": "2024-03-06" }, { "id": "C012", "status": "done", "doneAt": "2024-03-06" }, { "id": "C013", "status": "done", "doneAt": "2024-03-06" }, { "id": "C014", "status": "done", "doneAt": "2024-03-06" }, { "id": "C101", "status": "done", "doneAt": "2024-03-15" }, { "id": "C107", "status": "done", "doneAt": "2024-03-15" }, { "id": "C102", "status": "done", "doneAt": "2024-03-15" }, { "id": "C104", "status": "done", "doneAt": "2024-03-15" }, { "id": "C105", "status": "done", "doneAt": "2024-03-15" }, { "id": "C108", "status": "done", "doneAt": "2024-03-15" }, { "id": "C201", "status": "done", "doneAt": "2024-05-09" }, { "id": "C202", "status": "done", "doneAt": "2024-05-09" }, { "id": "C203", "status": "done", "doneAt": "2024-05-09" }, { "id": "C204", "status": "done", "doneAt": "2024-05-09" }, { "id": "C205", "status": "done", "doneAt": "2024-05-09" }, { "id": "C206", "status": "done", "doneAt": "2024-05-09" }, { "id": "C207", "status": "done", "doneAt": "2024-05-09" }, { "id": "C301", "status": "done", "doneAt": "2024-06-14" }, { "id": "C302", "status": "done", "doneAt": "2024-06-14" }, { "id": "C303", "status": "done", "doneAt": "2024-06-14" }, { "id": "C304", "status": "done", "doneAt": "2024-06-14" }, { "id": "C305", "status": "done", "doneAt": "2024-06-14" }, { "id": "C306", "status": "done", "doneAt": "2024-06-14" }, { "id": "C311", "status": "done", "doneAt": "2024-06-14" }, { "id": "C312", "status": "done", "doneAt": "2024-06-14" }, { "id": "C313", "status": "done", "doneAt": "2024-06-14" }, { "id": "C314", "status": "done", "doneAt": "2024-06-14" }, { "id": "C315", "status": "done", "doneAt": "2024-06-14" }, { "id": "C316", "status": "done", "doneAt": "2024-06-14" }, { "id": "C317", "status": "done", "doneAt": "2024-06-14" }, { "id": "C309", "status": "done", "doneAt": "2024-06-14" }, { "id": "C310", "status": "done", "doneAt": "2024-06-14" }, { "id": "C307", "status": "done", "doneAt": "2024-06-14" }, { "id": "C401", "status": "done", "doneAt": "2024-04-26" }, { "id": "C402", "status": "done", "doneAt": "2024-04-26" }, { "id": "C403", "status": "done", "doneAt": "2024-04-26" }, { "id": "C404", "status": "done", "doneAt": "2024-04-26" }, { "id": "C501", "status": "done", "doneAt": "2024-07-10" }, { "id": "C502", "status": "done", "doneAt": "2024-07-10" }, { "id": "C503", "status": "done", "doneAt": "2024-07-10" }, { "id": "C504", "status": "done", "doneAt": "2024-07-10" }, { "id": "C506", "status": "done", "doneAt": "2024-07-10" }, { "id": "C507", "status": "done", "doneAt": "2024-07-10" }, { "id": "C505", "status": "done", "doneAt": "2024-07-10" }, { "id": "C601", "status": "done", "doneAt": "2024-08-09" }, { "id": "C602", "status": "done", "doneAt": "2024-08-09" }, { "id": "C603", "status": "done", "doneAt": "2024-08-09" }, { "id": "C701", "status": "done", "doneAt": "2024-08-23" }, { "id": "C702", "status": "done", "doneAt": "2024-08-23" }, { "id": "C703", "status": "done", "doneAt": "2024-08-23" }, { "id": "C704", "status": "done", "doneAt": "2024-08-23" }, { "id": "C705", "status": "done", "doneAt": "2024-08-23" }, { "id": "C706", "status": "done", "doneAt": "2024-08-23" }, { "id": "C707", "status": "done", "doneAt": "2024-08-23" }, { "id": "C708", "status": "done", "doneAt": "2024-08-23" }, { "id": "C710", "status": "done", "doneAt": "2024-08-23" }, { "id": "C711", "status": "done", "doneAt": "2024-08-23" }, { "id": "C712", "status": "done", "doneAt": "2024-08-23" }, { "id": "C713", "status": "done", "doneAt": "2024-08-23" }, { "id": "C714", "status": "done", "doneAt": "2024-08-23" }, { "id": "C715", "status": "done", "doneAt": "2024-08-23" }, { "id": "C716", "status": "done", "doneAt": "2024-08-23" }, { "id": "C709", "status": "done", "doneAt": "2024-08-23" }, { "id": "C719", "status": "done", "doneAt": "2024-08-23" }, { "id": "C720", "status": "done", "doneAt": "2024-08-23" }, { "id": "C721", "status": "done", "doneAt": "2024-08-23" }, { "id": "C722", "status": "done", "doneAt": "2024-08-23" }, { "id": "C801", "status": "done", "doneAt": "2024-08-23" }, { "id": "C802", "status": "done", "doneAt": "2024-08-23" }, { "id": "C803", "status": "done", "doneAt": "2024-08-23" }, { "id": "C804", "status": "done", "doneAt": "2024-08-23" }, { "id": "C806", "status": "done", "doneAt": "2024-08-23" }, { "id": "C807", "status": "done", "doneAt": "2024-08-23" }, { "id": "C805", "status": "done", "doneAt": "2024-08-23" }, { "id": "C901", "status": "done", "doneAt": "2024-09-09" }, { "id": "C907", "status": "done", "doneAt": "2024-09-09" }, { "id": "C908", "status": "done", "doneAt": "2024-09-09" }, { "id": "C909", "status": "done", "doneAt": "2024-09-09" }, { "id": "C910", "status": "done", "doneAt": "2024-09-09" }, { "id": "C911", "status": "done", "doneAt": "2024-09-09" }, { "id": "C912", "status": "done", "doneAt": "2024-09-09" }, { "id": "C902", "status": "done", "doneAt": "2024-09-09" }, { "id": "C903", "status": "done", "doneAt": "2024-09-09" }, { "id": "C904", "status": "done", "doneAt": "2024-09-09" }, { "id": "C905", "status": "done", "doneAt": "2024-09-09" }, { "id": "C906", "status": "done", "doneAt": "2024-09-09" }], "certs": [{ "id": "KR-KC-SAFE", "status": "done", "outsourced": false, "agency": "한국기계전기전자시험연구원(KTC)", "submitted": "2024-05-30", "expected": "2024-08-09", "certNo": "SU071541-21001A", "note": "자체 진행으로 지연 → 양산 7일 밀림. 휴롬엘에스 압즙기(JE-613A) 인증서에 CJ-B03FWH 추가" }, { "id": "KR-KC-FA", "status": "na", "outsourced": false, "note": "기존 공장(Phelp) 공장심사 보유" }, { "id": "KR-KC-EMC", "status": "done", "outsourced": true, "agency": "KTC", "submitted": "2024-05-14", "expected": "2024-05-30", "certNo": "R-R-cRa-B21" }, { "id": "KR-FOOD", "status": "done", "outsourced": true, "agency": "SGS", "submitted": "2024-06-05", "expected": "2024-06-18", "certNo": "AYAR24-01493 등 5종", "cost": 1200000 }, { "id": "KR-NONUSE", "status": "done", "outsourced": false, "agency": "제조사 DoC", "expected": "2024-08-06" }, { "id": "KR-PKG", "status": "done", "outsourced": false, "expected": "2024-08-16", "note": "Packaging part list (포장재 재질 증명)" }, { "id": "GL-CB", "status": "done", "outsourced": true, "agency": "SGS (ITS)", "submitted": "2024-03-07", "expected": "2024-05-07", "certNo": "SG ITS-31133M1", "note": "바이메탈(TP) 추가로 CB 갱신" }, { "id": "GL-ROHS", "status": "done", "outsourced": true, "agency": "Intertek", "expected": "2024-03-07", "certNo": "230201271SHA-0001" }, { "id": "JP-PSE", "status": "done", "outsourced": true, "expected": "2025-04-10", "note": "일본향 파생 CJ-B03AWH (2024-11-15 발의)" }, { "id": "JP-FOOD", "status": "done", "outsourced": true, "agency": "JFRL", "expected": "2025-01-20" }, { "id": "VN-CR", "status": "done", "outsourced": true, "expected": "2025-11-06", "note": "베트남 전용 카톤(2025-10) 병행" }], "risks": [{ "id": "R01", "stage": "S7", "category": "포장", "title": "펄프 지기 완충재 낙하 시험 불합격", "cause": "본체 1.5kg 대비 완충 구조 약함", "likelihood": 4, "impact": 3, "response": "EPS 완충재 금형 신작(USD 830, 50:50), FOB 12.6 → 13.1", "owner": "상품개발", "due": "2024-07-23", "status": "closed", "source": "USER" }, { "id": "R02", "stage": "S6", "category": "인증", "title": "KC 안전 자체 진행 지연으로 양산 밀림", "cause": "구비 서류(직인·위임장) 미비로 접수 지연", "likelihood": 3, "impact": 3, "response": "양산 8월 1주 → 2주로 조정. 다음 제품은 첫 사출품 시점에 외부기관 위탁 접수", "owner": "상품개발", "due": "2024-08-09", "status": "closed", "source": "USER" }, { "id": "R03", "stage": "S3", "category": "안전", "title": "유니버설 모터 과사용 시 과열 고장", "cause": "감속기어 128rpm, 170W 고토크", "likelihood": 3, "impact": 4, "response": "바이메탈 TP(110℃ 차단/80℃ 복귀) 추가, CB 갱신", "owner": "제조사", "due": "2024-05-07", "status": "closed", "source": "USER" }, { "id": "R04", "stage": "MP", "category": "품질", "title": "손잡이(핸들) 클레임 — 각도 범위 넓은 구조에서 유격·파손", "likelihood": 3, "impact": 3, "response": "2025-02 제조사 개선안(Handle Claim) 협의, 2025-11 품질 개선 요청서 발행", "owner": "품질", "status": "watch", "source": "USER" }], "molds": [{ "id": "M1", "part": "EPS 완충재(상·하)", "maker": "TYCOON (Phelp 지정)", "cavity": "1", "owner": "휴롬·Phelp 50:50", "t1": "2024-08-06", "approved": "2024-08-12", "status": "done", "note": "낙하 시험 FAIL 대응 신작, USD 830" }, { "id": "M2", "part": "주스캡(주스콘)", "maker": "Phelp 자체", "cavity": "1", "owner": "제조사", "t1": "2024-04-20", "approved": "2024-04-26", "status": "done", "note": "제조사 부담" }], "mpIssues": [{ "id": "I1", "date": "2025-02-11", "type": "클레임", "title": "손잡이(Handle) 클레임 — 제조사 개선안 협의", "status": "closed", "note": "250211_CJ-B03 Handle Claim" }, { "id": "I2", "date": "2025-03-28", "type": "필드불량", "title": "고객 불만 개선 방안(JE-675C 客户投诉改进方案) 접수", "status": "closed" }, { "id": "I3", "date": "2025-11-26", "type": "필드불량", "title": "품질 개선 요청서(Quality Improvement Request) 발행", "status": "analysis" }], "log": [{ "at": "2024-02-19T09:00:00.000Z", "who": "상품개발", "what": "선행검토 TR(YUYAO Phelp 전동스퀴저) 착수" }, { "at": "2024-03-15T09:00:00.000Z", "who": "PM", "what": "개발 발의 전자결재 완료 (목표 2024-08 MP)" }, { "at": "2024-05-09T09:00:00.000Z", "who": "법무", "what": "Yuyao Phelp 물품구매계약 체결" }, { "at": "2024-06-13T09:00:00.000Z", "who": "제조사", "what": "포장 낙하 시험 FAIL → EPS 완충재로 변경 결정" }, { "at": "2024-08-19T09:00:00.000Z", "who": "제조사", "what": "1st Lot 출하검사 합격 · 첫 출하" }, { "at": "2024-09-09T09:00:00.000Z", "who": "PM", "what": "개발 완료 보고" }, { "at": "2024-11-15T09:00:00.000Z", "who": "PM", "what": "일본향 파생(CJ-B03AWH) 개발 발의" }, { "at": "2025-11-06T09:00:00.000Z", "who": "품질", "what": "베트남 CR 인증 취득" }, { "at": "2026-10-26T02:18:27.075Z", "who": "AI", "what": "프로젝트 생성 — 체크리스트·인증 트랙·AS-IS/TO-BE 일정 자동 생성", "ai": true }], "updated": "2026-10-26T03:00:01Z", "cfgRev": 1, "isSample": true, "memo": "기존 스퀴저 CJ-B02FSS(USD 30.6) 단종에 따른 저가 신규 라인업. FOB USD 15 → 13.1(EPS 완충재 반영), MOQ 2,118대, MSRP 69,000원, 연 4,000대 목표.\n개발비 570만 원 = EPS 완충재 금형 56만 원(제조사와 50:50) + 인증·시험 514만 원(CB·KC·식품접촉부). 주스캡 금형은 제조사 부담.\n170W 유니버설 모터 + 과열 방지(TP 110℃), 2종 스퀴저콘, 누름 손잡이 접힘. 215×198×310mm, 1.5kg.\n교훈 1: 펄프 지기 완충재가 낙하 시험 FAIL → EPS 금형 투자로 FOB 0.5달러 상승, 일정 영향 없음(금형 기간에 병행).\n교훈 2: KC 안전을 자체 진행하다 지연 → 양산이 계획보다 7일 밀림(8월 1주 → 2주). 다음 제품은 첫 사출품 시점에 KC 접수.\n파생: 2024-11-15 일본향(CJ-B03AWH) 개발 발의 — PSE·JFRL 식품접촉부·비사용증명서·RoHS·일본어 인쇄물. 2025-11 베트남 CR 인증 + 베트남 전용 카톤.\n실제 담당: 상품개발팀(개발 PM) · 상품구매팀 · 디자인팀. Dev Hub 예시용으로 PM 칸은 심준보로 둠.", "actuals": { "T01": { "start": "2024-02-19", "end": "2024-03-06" }, "T02": { "start": "2024-03-15", "end": "2024-03-15" }, "T03": { "start": "2024-03-04", "end": "2024-04-12" }, "T03b": { "start": "2024-05-09", "end": "2024-05-09" }, "T04": { "start": "2024-03-11", "end": "2024-06-14" }, "T04c": { "start": "2024-04-12", "end": "2024-04-17" }, "Q1": { "start": "2024-05-29", "end": "2024-05-29" }, "T05": { "start": "2024-03-11", "end": "2024-03-11" }, "T06": { "start": "2024-03-11", "end": "2024-04-20" }, "T07": { "start": "2024-04-20", "end": "2024-04-26" }, "Q2": { "start": "2024-04-23", "end": "2024-04-26" }, "T10b": { "start": "2024-06-13", "end": "2024-07-23" }, "T08": { "start": "2024-05-29", "end": "2024-07-10" }, "Q3": { "start": "2024-07-10", "end": "2024-07-10" }, "T09": { "start": "2024-04-26", "end": "2024-04-28" }, "Q4": { "start": "2024-04-28", "end": "2024-04-28" }, "T12a": { "start": "2024-08-23", "end": "2024-08-23" }, "T10": { "start": "2024-04-19", "end": "2024-07-24" }, "T11": { "start": "2024-08-07", "end": "2024-08-07" }, "T11b": { "start": "2024-08-07", "end": "2024-08-12" }, "T12": { "start": "2024-08-05", "end": "2024-08-06" }, "T13": { "start": "2024-08-09", "end": "2024-08-14" }, "T13b": { "start": "2024-08-26", "end": "2024-08-26" }, "T14": { "start": "2024-08-14", "end": "2024-08-19" }, "T14b": { "start": "2024-08-19", "end": "2024-08-23" }, "Q5": { "start": "2024-08-23", "end": "2024-09-10" }, "T15": { "start": "2024-09-09", "end": "2024-09-09" }, "Q6": { "start": "2025-02-11", "end": "2025-03-28" }, "T11a": { "start": "2024-07-18", "end": "2024-07-24" }, "T05b": { "start": "2024-07-20", "end": "2024-08-09" }, "T15a": { "start": "2024-08-23", "end": "2024-08-30" } }, "reviews": { "G0": { "decision": "pass", "date": "2024-03-06", "note": "선행검토 TR(2024-02-19)·3년 내구 Pass, Half-FOB" }, "G1": { "decision": "pass", "date": "2024-03-15", "note": "개발 발의 전자결재" }, "G2": { "decision": "pass", "date": "2024-04-12", "note": "제조사 금형 선행(주스캡), 2D 도면 6/14 확정" }, "G3": { "decision": "pass", "date": "2024-04-26" }, "G3b": { "decision": "pass", "date": "2024-07-10", "note": "품질검토 시험 평가 보고서 Reply" }, "G4": { "decision": "cond", "date": "2024-08-05", "note": "조건: EPS 완충재 낙하 재시험 통과, KC 안전인증서 수령 후 출하" }, "G6": { "decision": "pass", "date": "2024-09-09", "note": "개발 완료 보고서" } }, "squad": [{ "role": "PM", "name": "상품개발팀" }, { "role": "기구", "name": "제조사(Phelp)" }, { "role": "전장", "name": "제조사(Phelp)" }, { "role": "품질", "name": "품질팀" }, { "role": "양산", "name": "상품구매팀" }], "experts": [], "sampleRev": 9 }
];

};
__m["src/webparts/huromAxPlm/model/ax.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allDone = exports.daysTo = exports.today = exports.setNow = exports.docsDone = exports.stageIdx = exports.stageOf = exports.AX_STAGES = void 0;
exports.suggestPlan = suggestPlan;
exports.careList = careList;
exports.newProject = newProject;
exports.moveTo = moveTo;
exports.dday = dday;
exports.fmt = fmt;
exports.axSamples = axSamples;
exports.simulate = simulate;
exports.whereNow = whereNow;
exports.stageElapsed = stageElapsed;
const d = (key, label, proc) => ({ key, label, proc });
// 단계별 핵심 산출물만 (엑셀 Task 약 125줄 중 단계마다 꼭 남을 것)
exports.AX_STAGES = [
    { id: 'S1', no: '①', name: '컨셉·기획', focus: '고객가치·차별점·기술 가능성 확인', gate: 'G1 기획 승인', docs: [
            d('voc', 'Pain Point·VOC 근거', 'PROC-02D'), d('plan', '신제품 기획안 (컨셉)', 'PROC-11'), d('biz', '사업성 검토서', 'PROC-12'), d('g1rep', '경영진 보고·결정 기록', 'PROC-16')
        ] },
    { id: 'S2', no: '②', name: '공동검토·개발발의', focus: '요구사항·예산·일정·역할 합의', gate: 'G2 개발발의 승인', docs: [
            d('rr', 'PM 지정·R&R', 'PROC-17'), d('spec', '최종 사양서', 'PROC-22'), d('kickoff', '개발발의서', 'PROC-23')
        ] },
    { id: 'S3', no: '③', name: '설계·시제품검증', focus: '금형 착수 전 설계 방향·평가 계획 확정', docs: [
            d('sched', 'Kick off 회의록·대일정표', 'PROC-24'), d('cad', '3D 도면·Part list', 'PROC-26'), d('dr', '설계 DR 결과서', 'PROC-27A'), d('proto', '시제품 평가 결과서', 'PROC-28')
        ] },
    { id: 'S4', no: '④', name: '개발·검증', focus: '금형·T0~DPP~LPP 검증, 인쇄물·인증 준비', docs: [
            d('mold', '금형 계약서', 'PROC-35'), d('trial', '시사출 검토서', 'PROC-40'), d('ppap', '부품 승인원', 'PROC-61'), d('cert', '국가별 인증서', 'PROC-56A'),
            d('print', '최종 인쇄물 파일', 'PROC-77A'), d('issue', '문제점 관리대장', 'PROC-74')
        ] },
    { id: 'S5', no: '⑤', name: '양산·출시준비', focus: '양산 품질·생산 준비, 영업·마케팅·CS 출시 지원', gate: 'G3 출시 승인', docs: [
            d('faq', 'FAQ 초안', 'PROC-84A'), d('usp', '제품 USP·웹기술서', 'PROC-84B'), d('launch', '출시 준비 보고서·소개서', 'PROC-85')
        ] },
    { id: 'S6', no: '⑥', name: '생산', focus: '초도 생산·출하·초도품 확인', docs: [
            d('first', '초도 생산·출하 현황', 'PROC-86'), d('mpqa', '양산 검수 보고서', 'PROC-87')
        ] },
    { id: 'S7', no: '⑦', name: '출시 후 유통관리', focus: '시장 반응·VOC 대응, 회고를 다음 제품에', docs: [
            d('vocr', 'VOC 분석 리포트', 'PROC-88'), d('close', '프로젝트 종료·회고', 'PROC-90A')
        ] },
];
// 단계마다 사람이 하는 일 / AI가 하는 일 (심준보 msg 10342690 'AI들이 어디서 개입하고 사람이 무엇을 하고')
const ROLES = {
    S1: { human: ['컨셉·타깃 결정', 'G1 기획 승인 보고'], ai: ['시장·경쟁 제품 조사, VOC 정리', '사업성 계산 초안', '나라별 규제 미리 확인'] },
    S2: { human: ['요구사항·예산·일정 합의', 'G2 개발발의 승인'], ai: ['사양서·개발발의서 초안', '과거 비슷한 모델 불량·교훈 찾아 주기'] },
    S3: { human: ['설계 방향 결정, DR 주관', '시제품 평가'], ai: ['DR 체크리스트·과거 불량 미리 검토', '재질·부품 규제 확인(식품 접촉·RoHS 등)'] },
    S4: { human: ['금형·시사출 확인', '인증 접수·문제 해결'], ai: ['인증 일정·서류 빠짐 챙기기', '문제점 대장 정리·같은 불량 이력 찾기', '인쇄물 문구 규제 검토'] },
    S5: { human: ['양산 준비 점검', 'G3 출시 승인'], ai: ['FAQ·USP·출시 자료 초안', '나라별 표시사항 마지막 점검'] },
    S6: { human: ['초도 생산·출하 확인'], ai: ['초도품 검수 결과 요약', '출하 일정 지연 알림'] },
    S7: { human: ['VOC 대응 결정', '회고'], ai: ['VOC 분류·주간 요약', '회고 초안, 다음 제품에 넘길 교훈 정리'] },
};
exports.AX_STAGES.forEach(s => { const r = ROLES[s.id]; if (r) {
    s.human = r.human;
    s.ai = r.ai;
} });
const stageOf = (id) => exports.AX_STAGES.filter(s => s.id === id)[0] || exports.AX_STAGES[0];
exports.stageOf = stageOf;
const stageIdx = (id) => Math.max(0, exports.AX_STAGES.map(s => s.id).indexOf(id));
exports.stageIdx = stageIdx;
const docsDone = (p, s) => s.docs.filter(x => (p.docs[x.key] || {}).done).length;
exports.docsDone = docsDone;
// 시작일·출시 목표일로 단계별 목표일 나눠 주기 — 출시 = ⑥ 생산 끝(첫 출하), ⑦은 출시 뒤 90일
const W = { S1: 15, S2: 8, S3: 15, S4: 42, S5: 12, S6: 8 };
const ymd = (t) => `${t.getFullYear()}-${('0' + (t.getMonth() + 1)).slice(-2)}-${('0' + t.getDate()).slice(-2)}`;
const day = (s) => new Date(s + 'T00:00:00');
function suggestPlan(start, target) {
    const a = day(start).getTime();
    const z = day(target).getTime();
    const out = {};
    if (!(z > a))
        return out;
    let acc = 0;
    ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'].forEach(k => { acc += W[k]; out[k] = ymd(new Date(a + (z - a) * acc / 100)); });
    out.S6 = target;
    out.S7 = ymd(new Date(z + 90 * 86400000));
    return out;
}
// 시간 손잡이(시뮬레이션) 중에는 '오늘'을 그 날짜로 바꿔 모든 계산이 같이 움직임 (심준보 msg 10366339)
let NOW;
const setNow = (d) => { NOW = d; };
exports.setNow = setNow;
const today = () => NOW || ymd(new Date());
exports.today = today;
const daysTo = (s, now = (0, exports.today)()) => (s ? Math.round((day(s).getTime() - day(now).getTime()) / 86400000) : undefined);
exports.daysTo = daysTo;
// 마지막 단계 산출물까지 다 채우면 끝난 것으로 봄
const allDone = (p) => p.stage === exports.AX_STAGES[exports.AX_STAGES.length - 1].id && (0, exports.docsDone)(p, exports.AX_STAGES[exports.AX_STAGES.length - 1]) === exports.AX_STAGES[exports.AX_STAGES.length - 1].docs.length;
exports.allDone = allDone;
function careList(p, now = (0, exports.today)()) {
    const out = [];
    const s = (0, exports.stageOf)(p.stage);
    if ((0, exports.allDone)(p))
        return out;
    const end = (p.plan || {})[s.id];
    const left = s.docs.length - (0, exports.docsDone)(p, s);
    const dl = (0, exports.daysTo)(end, now);
    if (!p.owner)
        out.push({ level: 'amber', text: 'PM이 안 정해졌어요' });
    if (!end)
        out.push({ level: 'amber', text: '단계 목표일이 없어요 — 시작일·출시 목표일을 넣으면 자동으로 나눠요' });
    else if (dl !== undefined && dl < 0)
        out.push({ level: 'red', text: `${s.no} ${s.name} 목표일 ${-dl}일 지남` });
    else if (dl !== undefined && dl <= 7 && left > 0)
        out.push({ level: 'amber', text: `${s.no} 목표일까지 ${dl}일 — 산출물 ${left}개 남음` });
    if (s.gate && left > 0 && dl !== undefined && dl <= 14)
        out.push({ level: 'amber', text: `${s.gate.split(' ')[0]} 앞 — ${s.docs.filter(x => !(p.docs[x.key] || {}).done).map(x => x.label).join(', ')}` });
    const t = (0, exports.daysTo)(p.target, now);
    if (t !== undefined && t < 0 && (0, exports.stageIdx)(p.stage) < 5)
        out.push({ level: 'red', text: `출시 목표일 ${-t}일 지남` });
    const last = p.log.length ? p.log[p.log.length - 1].at.slice(0, 10) : p.created.slice(0, 10);
    const idle = -((0, exports.daysTo)(last, now) || 0);
    if (idle >= 7)
        out.push({ level: 'amber', text: `${idle}일째 기록 없음 — 진행 상황 한 줄 남겨 주세요` });
    if (!p.next)
        out.push({ level: 'amber', text: '다음 할 일이 비어 있어요' });
    const open = (p.asks || []).filter(x => !x.answer).length;
    if (open)
        out.push({ level: 'amber', text: `AI 사전 검토 ${open}건 답 기다리는 중` });
    return out;
}
function newProject(name, who, owner, target, start) {
    const now = new Date().toISOString();
    const st = start || now.slice(0, 10);
    const id = 'ax' + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36);
    return { id, code: id, name, updated: now, created: now, stage: 'S1', owner: owner || who, target, start: st, plan: target ? suggestPlan(st, target) : undefined, docs: {}, gates: {}, log: [{ at: now, who, what: `프로젝트 시작 — ${name}`, kind: 'edit' }] };
}
// 단계 옮기기 — 막지 않음. 관문 단계에서 앞으로 가면 관문 통과 기록(빠진 산출물 수와 함께)
function moveTo(p, to, who) {
    const from = (0, exports.stageOf)(p.stage);
    const dest = (0, exports.stageOf)(to);
    if (from.id === dest.id)
        return p;
    const at = new Date().toISOString();
    const fwd = (0, exports.stageIdx)(dest.id) > (0, exports.stageIdx)(from.id);
    const log = [];
    const gates = Object.assign({}, p.gates);
    if (fwd) {
        exports.AX_STAGES.slice((0, exports.stageIdx)(from.id), (0, exports.stageIdx)(dest.id)).forEach(s => {
            if (!s.gate)
                return;
            const missing = s.docs.length - (0, exports.docsDone)(p, s);
            gates[s.gate] = { at, by: who, missing };
            log.push({ at, who, kind: 'gate', what: `${s.gate} 통과${missing ? ` (산출물 ${missing}개 빈 채로)` : ''}` });
        });
    }
    log.push({ at, who, kind: 'move', what: `${from.no} ${from.name} → ${dest.no} ${dest.name}` });
    return Object.assign(Object.assign({}, p), { stage: dest.id, gates, log: p.log.concat(log) });
}
function dday(target, today = day(NOW || ymd(new Date()))) {
    if (!target)
        return '';
    const t = new Date(target + 'T00:00:00');
    const n = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const diff = Math.round((t.getTime() - n.getTime()) / 86400000);
    return diff === 0 ? 'D-day' : diff > 0 ? `D-${diff}` : `D+${-diff}`;
}
function fmt(iso) {
    if (!iso)
        return '';
    const x = new Date(iso);
    return `${x.getMonth() + 1}.${x.getDate()} ${('0' + x.getHours()).slice(-2)}:${('0' + x.getMinutes()).slice(-2)}`;
}
// 미리보기·처음 화면용 예시 — 음식물처리기·초음파 가습기 (심준보 msg 10366320 '이렇게 2개 샘플로'). 실제 목록이 비면 저장 없이 보여 줌
function axSamples() {
    const who = '심준보';
    const iso = (d, h = 10) => `${d}T${('0' + h).slice(-2)}:00:00.000Z`;
    const a = newProject('음식물처리기 (건조·분쇄형)', who, '심준보', '2027-03-31', '2026-06-01');
    a.id = 'ax-sample-food';
    a.code = a.id;
    a.aiHelper = 'PC-곽두팔';
    a.docs = { voc: { done: true }, plan: { done: true }, biz: { done: true }, g1rep: { done: true }, rr: { done: true }, spec: { done: true }, kickoff: { done: true }, sched: { done: true }, cad: { done: true }, dr: { done: true }, proto: { done: true }, mold: { done: true } };
    const a2 = moveTo(moveTo(moveTo(a, 'S2', who), 'S3', who), 'S4', who);
    a2.next = '시사출 검토 (T0) — 분쇄날 하우징 변형 확인';
    a2.log = a2.log.concat([
        { at: iso('2026-11-12', 1), who: 'PC-곽두팔', kind: 'doc', ai: true, what: '냄새 필터(활성탄) 교체 주기 VOC 212건 분류 — "3개월 전에 냄새남" 1순위, 인쇄물 문구에 반영 권고' },
        { at: iso('2026-11-15', 2), who: 'PC-곽두팔', kind: 'note', ai: true, what: '같은 품목 해외 리콜 4건(과열·분쇄날 노출) 찾아 문제점 관리대장에 넣음' }
    ]);
    a2.brief = [{ at: iso('2026-11-17', 0), who: 'PC-곽두팔', text: '④ 개발·검증 일정대로예요. 이번 주 T0 시사출에서 분쇄날 하우징 변형과 건조 히터 주변 온도를 같이 보세요. KC 전기안전·EMC 시험은 1월 둘째 주 접수해야 출시 3/31에 맞아요.' }];
    a2.asks = [{ id: 'q-food', at: iso('2026-11-14', 3), who: '심준보', stage: 'S4', text: '싱크대 분쇄기처럼 하수도로 흘려보내는 방식도 검토할까?', answer: '하수도로 흘려보내면 「주방용 오물분쇄기」라 환경부 인증(고형물 20% 미만 배출)이 따로 필요하고, 인증 없는 제품은 판매가 금지돼요. 지금 건조·분쇄형 그대로 가면 KC 전기안전·EMC로 충분해요.', answeredBy: 'PC-곽두팔', answeredAt: iso('2026-11-14', 5) }];
    a2.start = '2026-06-01';
    a2.plan = suggestPlan(a2.start, a2.target);
    const b = newProject('초음파 가습기 (UV 살균 물통)', who, '김호철', '2027-08-31', '2026-11-03');
    b.id = 'ax-sample-humid';
    b.code = b.id;
    b.aiHelper = 'PC-김호철(PLM)';
    b.next = '경쟁 3사 물통 세척 구조 비교';
    b.docs = { voc: { done: true } };
    b.log = b.log.concat([{ at: iso('2026-11-16', 6), who: 'PC-김호철(PLM)', kind: 'doc', ai: true, what: '가습기 VOC 1,340건 정리 — "물통 세척 어려움"·"하얀 가루" 상위 2개를 Pain Point로 붙임' }]);
    b.brief = [{ at: iso('2026-11-17', 0), who: 'PC-김호철(PLM)', text: 'G1까지 기획안·사업성 검토가 남았어요. 초음파 방식은 수돗물 미네랄이 "하얀 가루"로 퍼지는 불만이 많아 필터 카트리지를 기획에 넣길 권해요. 살균·항균을 광고하려면 시험 근거가 먼저 있어야 해요.' }];
    b.asks = [{ id: 'q-humid', at: iso('2026-11-16', 7), who: '심준보', stage: 'S1', text: 'UV 살균 넣으면 광고에 "세균 99.9% 제거" 써도 돼?', answer: '공인 시험성적서(시험 균주·조건 명시)가 있어야 쓸 수 있고, 문구에 시험 조건을 같이 적어야 해요. 물에 살균제를 넣는 방식은 쓰지 마세요 — 가습기 살균제는 별도 승인 대상이에요.', answeredBy: 'PC-김호철(PLM)', answeredAt: iso('2026-11-16', 8) }];
    b.plan = suggestPlan(b.start, b.target);
    return [b, a2];
}
// 시간 손잡이 — 그 날짜까지 계획대로 흘렀다면 화면이 어떻게 채워지는지 만들어 보여 줌 (저장 안 함, 심준보 msg 10366339 '끝까지 닿으면 모든 내용 채워지고')
function simulate(p, at) {
    const plan = p.plan || {};
    if (!p.start || !Object.keys(plan).length)
        return p;
    const who = p.aiHelper || 'AI 도우미';
    const pm = p.owner || 'PM';
    const t = day(at).getTime();
    const end7 = plan.S7 ? day(plan.S7).getTime() : 0;
    const all = end7 && t >= end7;
    let exp = exports.AX_STAGES.length - 1;
    if (!all)
        for (let k = 0; k < exports.AX_STAGES.length; k++) {
            const v = plan[exports.AX_STAGES[k].id];
            if (v && day(v).getTime() >= t) {
                exp = k;
                break;
            }
        }
    const docs = {};
    const gates = {};
    const log = [p.log[0]];
    let curFrac = 1;
    exports.AX_STAGES.forEach((s, k) => {
        if (k > exp)
            return;
        const end = plan[s.id];
        const beg = k === 0 ? p.start : plan[exports.AX_STAGES[k - 1].id];
        const a = beg ? day(beg).getTime() : t;
        const z = end ? day(end).getTime() : t;
        const frac = k < exp || all ? 1 : Math.max(0, Math.min(1, (t - a) / Math.max(1, z - a)));
        if (k === exp)
            curFrac = frac;
        const nd = Math.floor(s.docs.length * frac + 1e-9);
        s.docs.forEach((d, i) => { if (i < nd)
            docs[d.key] = { done: true, by: i % 2 ? who : pm, at: new Date(a + (z - a) * (i + 1) / (s.docs.length + 1)).toISOString() }; });
        (s.ai || []).forEach((task, i) => {
            const f = (i + 1) / ((s.ai || []).length + 1);
            if (frac >= f)
                log.push({ at: new Date(a + (z - a) * f).toISOString(), who, kind: 'doc', ai: true, what: `${s.no} ${task} — 끝냄` });
        });
        if (k < exp || all) {
            const at2 = new Date(z).toISOString();
            if (s.gate) {
                gates[s.gate] = { at: at2, by: pm, missing: 0 };
                log.push({ at: at2, who: pm, kind: 'gate', what: `${s.gate} 통과` });
            }
            if (k < exports.AX_STAGES.length - 1)
                log.push({ at: at2, who: pm, kind: 'move', what: `${s.no} ${s.name} → ${exports.AX_STAGES[k + 1].no} ${exports.AX_STAGES[k + 1].name}` });
        }
    });
    const st = exports.AX_STAGES[exp];
    const left = st.docs.filter(d => !(docs[d.key] || {}).done);
    const brief = { at: new Date(t).toISOString(), who, text: all
            ? `출시 후 90일까지 모두 끝났어요. 7단계 산출물 ${exports.AX_STAGES.reduce((n, s) => n + s.docs.length, 0)}개, 관문 3개 통과, AI 작업 ${exports.AX_STAGES.reduce((n, s) => n + (s.ai || []).length, 0)}건이 기록됐어요. 회고는 다음 제품에 넘겨요.`
            : `${st.no} ${st.name} ${Math.round(curFrac * 100)}% 지점이에요. 산출물 ${st.docs.length - left.length}/${st.docs.length}${left.length ? ` — 다음은 ${left[0].label}` : ' 다 채움'}. AI는 지금 「${(st.ai || [])[Math.min((st.ai || []).length - 1, Math.floor(curFrac * (st.ai || []).length))] || ''}」 하는 중.` };
    return Object.assign(Object.assign({}, p), { stage: st.id, docs, gates, log: log.sort((x, y) => (x.at < y.at ? -1 : 1)), brief: (p.brief || []).concat([brief]), next: all ? '회고를 다음 제품에' : left.length ? left[0].label : '다음 관문 준비', closed: false });
}
function whereNow(p, now = (0, exports.today)()) {
    const cur = (0, exports.stageIdx)(p.stage);
    const plan = p.plan || {};
    if ((0, exports.allDone)(p))
        return { cur, exp: cur, pct: 1, state: 'ok', lateDays: 0, label: '모든 단계 완료 ✓' };
    if (!p.start || !p.target || !Object.keys(plan).length)
        return { cur, exp: cur, pct: 0, state: 'none', lateDays: 0, label: '일정 없음' };
    const a = day(p.start).getTime();
    const z = day(p.target).getTime();
    const n = day(now).getTime();
    const pct = Math.max(0, Math.min(1, (n - a) / Math.max(1, z - a)));
    let exp = exports.AX_STAGES.length - 1;
    for (let k = 0; k < exports.AX_STAGES.length; k++) {
        const v = plan[exports.AX_STAGES[k].id];
        if (v && day(v).getTime() >= n) {
            exp = k;
            break;
        }
    }
    const end = plan[exports.AX_STAGES[cur].id];
    const dl = (0, exports.daysTo)(end, now);
    const lateDays = dl !== undefined && dl < 0 ? -dl : 0;
    if (cur < exp)
        return { cur, exp, pct, state: 'behind', lateDays, label: `${exp - cur}단계 뒤처짐${lateDays ? ` · ${lateDays}일 늦음` : ''}` };
    if (lateDays)
        return { cur, exp, pct, state: 'late', lateDays, label: `${lateDays}일 늦음` };
    if (cur > exp)
        return { cur, exp, pct, state: 'ahead', lateDays, label: `${cur - exp}단계 앞섬` };
    return { cur, exp, pct, state: 'ok', lateDays, label: dl !== undefined ? `일정대로 · 단계 마감 D-${dl}` : '일정대로' };
}
// 단계 안에서 시간이 얼마나 흘렀나 (0~1) — 카드의 작은 진행 막대
function stageElapsed(p, now = (0, exports.today)()) {
    const plan = p.plan || {};
    const i = (0, exports.stageIdx)(p.stage);
    const end = plan[exports.AX_STAGES[i].id];
    const beg = i === 0 ? p.start : plan[exports.AX_STAGES[i - 1].id];
    if (!end || !beg)
        return undefined;
    const a = day(beg).getTime();
    const z = day(end).getTime();
    const n = day(now).getTime();
    return Math.max(0, Math.min(1, (n - a) / Math.max(1, z - a)));
}

};
__m["src/webparts/huromAxPlm/components/Timeline.js"]=function(module,exports,require){"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Timeline;
const React = __importStar(require("react"));
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
// 일정 보기 — 프로젝트마다 한 줄, 단계별 목표일로 막대 7칸. 오늘 세로선, 지금 단계는 진하게, 늦은 단계는 빨강
const C = { brand: '#34D399', text: '#ECF3EF', faint: '#73857C', line: 'rgba(255,255,255,.09)', red: '#FB7185', amber: '#FBBF24', cyan: '#22D3EE' }; // 어두운 관제 화면 (1.0.126)
const SHADE = ['#6EE7B7', '#34D399', '#2DD4BF', '#22D3EE', '#38BDF8', '#818CF8', '#A78BFA'];
const day = (s) => new Date(s + 'T00:00:00').getTime();
const DAY = 86400000;
function Timeline(props) {
    const rows = props.items.filter(p => p.start && Object.keys(p.plan || {}).length);
    const none = props.items.filter(p => rows.indexOf(p) < 0);
    const now = day((0, ax_1.today)());
    let lo = now - 30 * DAY;
    let hi = now + 180 * DAY;
    rows.forEach(p => { lo = Math.min(lo, day(p.start)); ax_1.AX_STAGES.forEach(s => { const v = (p.plan || {})[s.id]; if (v)
        hi = Math.max(hi, day(v)); }); });
    lo = new Date(new Date(lo).getFullYear(), new Date(lo).getMonth(), 1).getTime();
    const W = 1100;
    const x = (t) => ((t - lo) / (hi - lo)) * W;
    const months = [];
    for (let d = new Date(lo); d.getTime() <= hi; d = new Date(d.getFullYear(), d.getMonth() + 1, 1))
        months.push({ t: d.getTime(), label: d.getMonth() === 0 ? `${d.getFullYear()}.1` : `${d.getMonth() + 1}월` });
    return (React.createElement("div", { "data-ax-timeline": true, style: { padding: '6px 24px 24px', overflowX: 'auto' } },
        React.createElement("div", { style: { background: 'rgba(255,255,255,.04)', border: `1px solid ${C.line}`, borderRadius: 16, padding: '12px 16px', minWidth: W + 260 } },
            React.createElement("div", { style: { display: 'flex', fontSize: 11.5, color: C.faint, marginLeft: 240, position: 'relative', height: 18 } }, months.map(m => React.createElement("span", { key: m.t, style: { position: 'absolute', left: x(m.t), borderLeft: `1px solid ${C.line}`, paddingLeft: 4 } }, m.label))),
            rows.map(p => {
                const cur = (0, ax_1.stageIdx)(p.stage);
                const care = (0, ax_1.careList)(p);
                let prev = day(p.start);
                return (React.createElement("div", { key: p.id, "data-ax-trow": p.id, onClick: () => props.onOpen(p.id), style: { display: 'flex', alignItems: 'center', height: 40, borderTop: `1px solid ${C.line}`, cursor: 'pointer', background: props.sel === p.id ? 'rgba(52,211,153,.10)' : 'transparent' } },
                    React.createElement("div", { style: { width: 240, flex: '0 0 240px', paddingRight: 10, overflow: 'hidden' } },
                        React.createElement("div", { style: { fontSize: 13, fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }, p.name),
                        React.createElement("div", { style: { fontSize: 11.5, color: C.faint, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
                            "PM ",
                            p.owner || '없음',
                            " \u00B7 ",
                            ax_1.AX_STAGES[cur].no,
                            " ",
                            ax_1.AX_STAGES[cur].name,
                            care.length ? React.createElement("span", { style: { color: care.some(c => c.level === 'red') ? C.red : C.amber, fontWeight: 800 } },
                                " \u00B7 \uCC59\uAE38 \uAC83 ",
                                care.length) : null)),
                    React.createElement("div", { style: { position: 'relative', width: W, height: 40 } },
                        ax_1.AX_STAGES.map((s, k) => {
                            const v = (p.plan || {})[s.id];
                            if (!v)
                                return null;
                            const a = prev;
                            const b = day(v);
                            prev = b;
                            const late = k >= cur && b < now;
                            return React.createElement("div", { key: s.id, className: "axp-bar", title: `${s.no} ${s.name} ~ ${v}${s.gate ? ' · ' + s.gate : ''}`, style: { position: 'absolute', top: 11, height: 18, left: x(a), width: Math.max(3, x(b) - x(a) - 2), background: late ? C.red : SHADE[k], opacity: k < cur ? 0.45 : 1, borderRadius: 4, outline: k === cur ? `2px solid #fff` : 'none', fontSize: 10.5, color: '#04110C', fontWeight: 800, lineHeight: '18px', animationDelay: `${k * 90}ms`, boxShadow: k === cur ? `0 0 14px ${SHADE[k]}` : 'none', paddingLeft: 3, overflow: 'hidden', whiteSpace: 'nowrap', boxSizing: 'border-box' } }, s.no);
                        }),
                        p.target && React.createElement("div", { title: `출시 목표 ${p.target}`, style: { position: 'absolute', left: x(day(p.target)) - 5, top: 6, width: 10, height: 10, background: C.amber, transform: 'rotate(45deg)', boxShadow: `0 0 10px ${C.amber}` } }))));
            }),
            React.createElement("div", { style: { position: 'relative', marginLeft: 240, height: 0 } },
                React.createElement("div", { title: "\uC624\uB298", style: { position: 'absolute', left: x(now), top: -(rows.length * 40) - 2, height: rows.length * 40 + 2, borderLeft: `2px solid ${C.cyan}`, boxShadow: `0 0 12px ${C.cyan}` } },
                    React.createElement("span", { className: "axp-dot", style: { position: 'absolute', top: -6, left: -6, width: 10, height: 10, color: C.cyan } }),
                    React.createElement("span", { style: { position: 'absolute', top: -22, left: -14, fontSize: 11, fontWeight: 800, color: C.cyan, whiteSpace: 'nowrap' } }, "\uC624\uB298"))),
            !rows.length && React.createElement("div", { style: { fontSize: 13, color: C.faint, padding: '12px 0' } }, "\uC77C\uC815\uC774 \uC788\uB294 \uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC5B4\uC694. \uCE74\uB4DC\uB97C \uC5F4\uC5B4 \uC2DC\uC791\uC77C\u00B7\uCD9C\uC2DC \uBAA9\uD45C\uB97C \uB123\uC73C\uBA74 \uB2E8\uACC4 \uC77C\uC815\uC774 \uC790\uB3D9\uC73C\uB85C \uC0DD\uACA8\uC694."),
            none.length > 0 && React.createElement("div", { style: { fontSize: 12, color: C.faint, paddingTop: 10 } },
                "\uC77C\uC815 \uC5C6\uC74C: ",
                none.map(p => React.createElement("a", { key: p.id, onClick: () => props.onOpen(p.id), style: { color: C.brand, cursor: 'pointer', marginRight: 8 } }, p.name))))));
}

};
__m["src/webparts/huromAxPlm/components/RegRadar.js"]=function(module,exports,require){"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.REG_SITE = void 0;
exports.loadReg = loadReg;
exports.default = RegRadar;
const React = __importStar(require("react"));
// 규제·리콜·불량 미리 보기 — 곽두팔이 만든 「휴롬 규제 리콜 사이트」(GitHub Pages)와 연동 (심준보 msg 10342690·10342743, 곽두팔 msg 10343124)
// 데이터: REG_SITE + 'axplm.json' = { updated, source, items: [{ stage:'S1'..'S7', kind:'규제'|'리콜'|'불량', title, region?, note?, url?, when?, pri?:'상'|'중'|'하' }] } — 곽두팔이 단계 안 순서(규제→불량→리콜, 우선순위)로 정렬해 올림 — 없으면 사이트 링크만
exports.REG_SITE = 'https://simjb23-oss.github.io/hurom-regradar/';
let cache;
function loadReg() {
    if (!cache)
        cache = fetch(exports.REG_SITE + 'axplm.json', { cache: 'no-cache' }).then(r => (r.ok ? r.json() : { items: [] })).then(d => (d && Array.isArray(d.items) ? d.items : []), () => []);
    return cache;
}
const C = { brand: '#34D399', text: '#ECF3EF', faint: '#73857C', line: 'rgba(255,255,255,.09)', red: '#FB7185', redBg: 'rgba(251,113,133,.14)', amber: '#FBBF24', amberBg: 'rgba(251,191,36,.13)' }; // 어두운 관제 화면 (1.0.126)
const TAG = { 규제: [C.brand, 'rgba(52,211,153,.14)'], 리콜: [C.red, C.redBg], 불량: [C.amber, C.amberBg] };
function RegRadar(props) {
    const [items, setItems] = React.useState(undefined);
    React.useEffect(() => { let live = true; loadReg().then(xs => { if (live)
        setItems(xs); }, () => { if (live)
        setItems([]); }); return () => { live = false; }; }, []);
    const mine = (items || []).filter(x => x.stage === props.stage);
    const [all, setAll] = React.useState(false);
    React.useEffect(() => { setAll(false); }, [props.stage]);
    const cnt = {};
    mine.forEach(x => { cnt[x.kind] = (cnt[x.kind] || 0) + 1; });
    const sum = ['규제', '리콜', '불량'].filter(k => cnt[k]).map(k => `${k} ${cnt[k]}`).join(' · ');
    const shown = all ? mine : mine.slice(0, 5);
    return (React.createElement("div", { "data-ax-reg": true, style: { marginTop: 18 } },
        React.createElement("div", { style: { display: 'flex', alignItems: 'baseline', gap: 8 } },
            React.createElement("span", { style: { fontSize: 14, fontWeight: 900 } }, "\u2726 AI \uADDC\uC81C \uB808\uC774\uB354 \u00B7 \uBBF8\uB9AC \uBCFC \uBB38\uC81C\uC810"),
            React.createElement("span", { style: { fontSize: 12, color: C.faint } },
                props.stageLabel,
                sum ? ` · ${sum}` : ''),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement("a", { href: exports.REG_SITE, target: "_blank", rel: "noopener noreferrer", style: { fontSize: 12, color: C.brand, fontWeight: 700 } }, "\uADDC\uC81C \uC0AC\uC774\uD2B8 \uC5F4\uAE30")),
        items === undefined && React.createElement("div", { style: { fontSize: 12.5, color: C.faint, padding: '6px 0' } }, "\uBD88\uB7EC\uC624\uB294 \uC911\u2026"),
        items !== undefined && mine.length === 0 && React.createElement("div", { style: { fontSize: 12.5, color: C.faint, padding: '6px 0' } }, "AI\uAC00 \uC774 \uB2E8\uACC4\uC5D0\uC11C \uBBF8\uB9AC \uBCFC \uADDC\uC81C\u00B7\uB9AC\uCF5C\u00B7\uBD88\uB7C9\uC744 \uCC44\uC6B0\uB294 \uC911\uC774\uC5D0\uC694. \uC9C0\uAE08\uC740 \uADDC\uC81C \uC0AC\uC774\uD2B8\uC5D0\uC11C \uBC95\uADDC\uBCC4 \uC810\uAC80\uD45C\u00B7\uB9AC\uCF5C \uC0AC\uB840\uB97C \uBCFC \uC218 \uC788\uC5B4\uC694."),
        shown.map((x, k) => {
            const t = TAG[x.kind] || [C.faint, 'rgba(255,255,255,.06)'];
            return (React.createElement("div", { key: k, "data-ax-reg-item": true, style: { display: 'flex', gap: 8, alignItems: 'flex-start', padding: '6px 0', borderTop: `1px solid ${C.line}`, fontSize: 12.5 } },
                React.createElement("span", { style: { flex: '0 0 auto', fontSize: 11, fontWeight: 800, color: t[0], background: t[1], borderRadius: 4, padding: '1px 6px' } }, x.kind),
                React.createElement("span", { style: { flex: 1, minWidth: 0 } },
                    x.url ? React.createElement("a", { href: x.url, target: "_blank", rel: "noopener noreferrer", style: { color: C.text, fontWeight: 700 } }, x.title) : React.createElement("b", null, x.title),
                    x.pri === '상' ? React.createElement("span", { "data-ax-reg-pri": true, style: { marginLeft: 6, fontSize: 10.5, fontWeight: 800, color: C.red, background: C.redBg, borderRadius: 4, padding: '0 5px' } }, "\uC911\uC694") : null,
                    x.region ? React.createElement("span", { style: { color: C.faint } },
                        " \u00B7 ",
                        x.region) : null,
                    x.when ? React.createElement("span", { style: { color: C.amber } },
                        " \u00B7 ",
                        x.when) : null,
                    x.note ? React.createElement("div", { title: x.note, style: { color: C.faint, marginTop: 1, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflowWrap: 'anywhere' } }, x.note) : null)));
        }),
        mine.length > 5 && React.createElement("button", { "data-ax-reg-more": true, onClick: () => setAll(!all), style: { marginTop: 4, border: `1px solid ${C.line}`, background: 'rgba(255,255,255,.05)', borderRadius: 999, padding: '4px 10px', fontSize: 12, fontWeight: 700, color: C.brand, cursor: 'pointer' } }, all ? '접기' : `${mine.length - 5}건 더 보기`)));
}

};
__m["src/webparts/huromAxPlm/components/theme.js"]=function(module,exports,require){"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSS = exports.glass = exports.inp = exports.primary = exports.btn = exports.STATE_COLOR = exports.AI_GRAD = exports.T = void 0;
exports.useCount = useCount;
exports.useTick = useTick;
const React = __importStar(require("react"));
// AX-PLM 어두운 관제 화면 테마 (심준보 2026-11-17 msg 10360848 '모빈 참고, 그래픽 엄청나게' · 10360869 '움직이는 html 느낌' · 10360889 '너무 구닥다리')
// Mobbin 참고: Plane·Gumloop(어두운 AI 홈, 에이전트 카드), Browserbase(에이전트 단계 기록), Mintlify(활동 목록)
exports.T = {
    bg: '#060A09', bg2: '#0B1210', glass: 'rgba(255,255,255,.045)', glass2: 'rgba(255,255,255,.075)', line: 'rgba(255,255,255,.09)', line2: 'rgba(255,255,255,.16)',
    text: '#ECF3EF', sub: '#B3C2BA', faint: '#73857C',
    brand: '#34D399', brandDim: 'rgba(52,211,153,.14)', cyan: '#22D3EE', ai: '#A78BFA', aiDim: 'rgba(167,139,250,.16)',
    amber: '#FBBF24', amberDim: 'rgba(251,191,36,.13)', red: '#FB7185', redDim: 'rgba(251,113,133,.14)',
};
exports.AI_GRAD = 'linear-gradient(120deg, #A78BFA, #22D3EE 55%, #34D399)';
exports.STATE_COLOR = { ok: exports.T.brand, ahead: exports.T.cyan, behind: exports.T.red, late: exports.T.red, none: exports.T.faint };
exports.btn = { border: `1px solid ${exports.T.line2}`, background: exports.T.glass, borderRadius: 999, padding: '7px 15px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', color: exports.T.sub };
exports.primary = Object.assign(Object.assign({}, exports.btn), { background: 'linear-gradient(120deg, #10B981, #22D3EE)', border: 'none', color: '#04110C', boxShadow: '0 6px 24px rgba(34,211,238,.25)' });
exports.inp = { border: `1px solid ${exports.T.line}`, background: 'rgba(0,0,0,.35)', color: exports.T.text, borderRadius: 10, padding: '8px 11px', fontSize: 13.5, fontFamily: 'inherit', boxSizing: 'border-box', width: '100%', minWidth: 0, outline: 'none', colorScheme: 'dark' };
exports.glass = { background: exports.T.glass, border: `1px solid ${exports.T.line}`, borderRadius: 16, backdropFilter: 'blur(14px)' };
exports.CSS = `
.axp{position:relative;overflow:hidden}
.axp *{box-sizing:border-box}
.axp input::placeholder{color:${exports.T.faint}}
.axp ::-webkit-scrollbar{height:8px;width:8px}.axp ::-webkit-scrollbar-thumb{background:rgba(255,255,255,.14);border-radius:8px}
.axp-aurora{position:absolute;inset:-20% -10% auto -10%;height:720px;pointer-events:none;z-index:0;filter:blur(60px);opacity:.55}
.axp-aurora i{position:absolute;border-radius:50%;mix-blend-mode:screen;animation:axpFloat 18s ease-in-out infinite alternate}
.axp-aurora i:nth-child(1){left:5%;top:0;width:520px;height:340px;background:radial-gradient(circle,#10B98199,transparent 70%)}
.axp-aurora i:nth-child(2){left:40%;top:-60px;width:600px;height:360px;background:radial-gradient(circle,#7C3AED88,transparent 70%);animation-duration:23s;animation-delay:-6s}
.axp-aurora i:nth-child(3){left:70%;top:40px;width:480px;height:320px;background:radial-gradient(circle,#06B6D488,transparent 70%);animation-duration:27s;animation-delay:-12s}
.axp-grid{position:absolute;inset:0;pointer-events:none;z-index:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:44px 44px;mask-image:linear-gradient(to bottom,#000,transparent 620px);-webkit-mask-image:linear-gradient(to bottom,#000,transparent 620px)}
.axp-z{position:relative;z-index:1}
@keyframes axpFloat{0%{transform:translate(0,0) scale(1)}50%{transform:translate(60px,40px) scale(1.15)}100%{transform:translate(-40px,20px) scale(.95)}}
@keyframes axpPulse{0%{box-shadow:0 0 0 0 currentColor}70%{box-shadow:0 0 0 9px transparent}100%{box-shadow:0 0 0 0 transparent}}
@keyframes axpSpin{to{transform:rotate(360deg)}}
@keyframes axpShine{0%{background-position:0% 50%}100%{background-position:200% 50%}}
@keyframes axpFlow{0%{left:-6%}100%{left:100%}}
@keyframes axpIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes axpGrow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes axpBlink{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes axpTicker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes axpSlide{from{transform:translateX(40px);opacity:0}to{transform:none;opacity:1}}
@keyframes axpDash{to{stroke-dashoffset:-24}}
.axp-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:currentColor;animation:axpPulse 1.8s infinite}
.axp-grad{background:${exports.AI_GRAD};background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:axpShine 6s linear infinite}
.axp-in{animation:axpIn .5s cubic-bezier(.2,.8,.2,1) both}
.axp-card{transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease}
.axp-card:hover{transform:translateY(-3px);border-color:rgba(52,211,153,.45)!important;box-shadow:0 14px 40px rgba(0,0,0,.45),0 0 0 1px rgba(52,211,153,.15)}
.axp-aiborder{position:relative;border-radius:16px;padding:1px;background:${exports.AI_GRAD};background-size:200% 100%;animation:axpShine 5s linear infinite}
.axp-aiborder>div{border-radius:15px;background:#0A1311}
.axp-orb{position:relative;display:inline-flex;align-items:center;justify-content:center;border-radius:50%}
.axp-orb:before{content:'';position:absolute;inset:-3px;border-radius:50%;background:conic-gradient(from 0deg,#A78BFA,#22D3EE,#34D399,transparent 70%);animation:axpSpin 2.6s linear infinite}
.axp-orb:after{content:'';position:absolute;inset:0;border-radius:50%;background:#0A1311}
.axp-orb>span{position:relative;z-index:1}
.axp-flow{position:absolute;top:50%;width:6%;height:2px;margin-top:-1px;background:linear-gradient(90deg,transparent,#22D3EE,transparent);animation:axpFlow 3.2s linear infinite}
.axp-bar{transform-origin:left center;animation:axpGrow .9s cubic-bezier(.2,.8,.2,1) both}
.axp-blink{animation:axpBlink 1.4s ease-in-out infinite}
.axp-ticker{display:flex;gap:28px;width:max-content;animation:axpTicker 60s linear infinite}
.axp-ticker:hover{animation-play-state:paused}
.axp-panel{animation:axpSlide .28s cubic-bezier(.2,.8,.2,1) both}
.axp-dash{stroke-dasharray:4 8;animation:axpDash 1.2s linear infinite}
.axp-scan{position:absolute;left:0;right:0;top:0;height:80px;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(34,211,238,.07),transparent);animation:axpScan 6s linear infinite}
@keyframes axpScan{0%{transform:translateY(-80px)}100%{transform:translateY(600px)}}
.axp-btn:hover{border-color:${exports.T.brand}!important;color:${exports.T.text}!important}
@media (prefers-reduced-motion:reduce){.axp *,.axp *:before,.axp *:after{animation:none!important;transition:none!important}}
`;
// 숫자 올라가는 효과
function useCount(n, ms = 900) {
    const [v, setV] = React.useState(0);
    React.useEffect(() => {
        let raf = 0;
        const t0 = Date.now();
        const from = 0;
        const step = () => { const k = Math.min(1, (Date.now() - t0) / ms); setV(Math.round(from + (n - from) * (1 - Math.pow(1 - k, 3)))); if (k < 1)
            raf = window.requestAnimationFrame(step); };
        raf = window.requestAnimationFrame(step);
        return () => window.cancelAnimationFrame(raf);
    }, [n]);
    return v;
}
// 몇 초마다 바뀌는 순번 (AI가 하는 일 돌려 보여주기)
function useTick(ms) {
    const [t, setT] = React.useState(0);
    React.useEffect(() => { const h = window.setInterval(() => setT(x => x + 1), ms); return () => window.clearInterval(h); }, [ms]);
    return t;
}

};
require("preview/entry-ax.js");})();