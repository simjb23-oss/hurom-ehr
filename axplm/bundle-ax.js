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
// AX-PLM 로컬 미리보기 — 브라우저 저장소 + 예시 5개(개발 유형별) (?reset=1 이면 비우고 다시)
const React = __importStar(require("react"));
const ReactDom = __importStar(require("react-dom"));
const AxWork_1 = __importDefault(require("src/webparts/huromAxPlm/components/AxWork.js"));
const store_1 = require("src/webparts/huromDevHub/model/store.js");
const notes_1 = require("src/webparts/huromPlm/model/notes.js");
const history_1 = require("src/webparts/huromAxPlm/model/history.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const aiSamples_1 = require("src/webparts/huromAxPlm/model/aiSamples.js");
// 1.0.139 예시마다 AI가 해 놓은 일까지 (저장소 v5 — 옛 미리보기 데이터는 새로)
const axSamples = () => (0, work_1.workSamples)().map(aiSamples_1.withAi);
const store = new store_1.LocalStore('hurom-axplm.projects.v6');
const params = new URLSearchParams(location.search);
if (params.get('reset'))
    window.localStorage.clear();
store.list()
    .then(ps => (ps.length || params.get('empty') ? undefined : axSamples().reduce((acc, p) => acc.then(() => store.save(p)), Promise.resolve(undefined))))
    .then(() => ReactDom.render(React.createElement(AxWork_1.default, { store, settings: new store_1.LocalStore('hurom-axplm.settings.v1'), notes: new notes_1.FakeNoteStore(), ver: '미리보기', loadHistory: () => Promise.resolve(history_1.SAMPLE_HISTORY), userDisplayName: params.get('user') || '심준보' }), document.getElementById('root')));

};
__m["src/webparts/huromAxPlm/components/AxWork.js"]=function(module,exports,require){"use strict";
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
exports.default = AxWork;
const React = __importStar(require("react"));
const Guide_1 = require("src/webparts/huromAxPlm/components/Guide.js");
const ItemDash_1 = require("src/webparts/huromAxPlm/components/ItemDash.js");
const store_1 = require("src/webparts/huromDevHub/model/store.js");
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const item_1 = require("src/webparts/huromAxPlm/model/item.js");
const Vendors_1 = require("src/webparts/huromAxPlm/components/Vendors.js");
const Overview_1 = require("src/webparts/huromAxPlm/components/Overview.js"); // 1.0.144 개요 다시 짬 (AiFloor 컨베이어·책상 연출은 뺌)
const Items_1 = require("src/webparts/huromAxPlm/components/Items.js");
const aiSamples_1 = require("src/webparts/huromAxPlm/model/aiSamples.js");
const Work139_1 = require("src/webparts/huromAxPlm/components/Work139.js");
const Today_1 = require("src/webparts/huromAxPlm/components/Today.js");
const Dash_1 = require("src/webparts/huromAxPlm/components/Dash.js");
const ai_1 = require("src/webparts/huromAxPlm/model/ai.js");
const auto_1 = require("src/webparts/huromAxPlm/model/auto.js");
const Dash_2 = require("src/webparts/huromAxPlm/components/Dash.js");
const sched_1 = require("src/webparts/huromAxPlm/model/sched.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
const Shell_1 = require("src/webparts/huromAxPlm/components/Shell.js"); // 1.0.147
const team_1 = require("src/webparts/huromAxPlm/model/team.js");
const history_1 = require("src/webparts/huromAxPlm/model/history.js"); // 1.0.148 경험 창고
const Mates_1 = require("src/webparts/huromAxPlm/components/Mates.js");
const Gate_1 = require("src/webparts/huromAxPlm/components/Gate.js");
const Sticky_1 = __importDefault(require("src/webparts/huromPlm/components/Sticky.js"));
const LAST = 'axplm-last-item';
function AxWork(props) {
    const who = props.userDisplayName || '나';
    const [items, setItems] = React.useState(undefined);
    const [demo, setDemo] = React.useState(false);
    const [err, setErr] = React.useState('');
    const [view, setView] = React.useState('project'); // 1.0.141 아이템 하나가 메인 (1.0.147 위 탭 대신 왼쪽 메뉴 + 아이템 선택 칸)
    const [menu, setMenu] = React.useState('item');
    const [sub0, setSub0] = React.useState(undefined); // 메뉴 BOM·설계 변경 → 부품·협력사 탭 안 칸
    const [fold, setFold0] = React.useState(() => { try {
        return window.localStorage.getItem('axplm-fold') === '1';
    }
    catch (e) {
        return false;
    } });
    const setFold = (f) => { setFold0(f); try {
        window.localStorage.setItem('axplm-fold', f ? '1' : '0');
    }
    catch (e) { /* 안 돼도 됨 */ } };
    const [sideOpen, setSideOpen] = React.useState(false);
    const [noteList, setNoteList] = React.useState(0);
    const [dock, setDock] = React.useState(false); // 1.0.148 옆창 AI 도우미
    const [hist, setHist] = React.useState(0);
    const [sel, setSel0] = React.useState(() => { try {
        return window.localStorage.getItem(LAST) || undefined;
    }
    catch (e) {
        return undefined;
    } });
    const setSel = (id) => { setSel0(id); (0, Shell_1.pushRecent)(id); try {
        window.localStorage.setItem(LAST, id);
    }
    catch (e) { /* 저장 안 돼도 됨 */ } };
    const [ptab, setPtab] = React.useState('over');
    const [focus, setFocus] = React.useState(undefined);
    const [pick, setPick] = React.useState(undefined); // 오른쪽 패널에 연 산출물 키 또는 'gate'
    const [adding, setAdding] = React.useState(false);
    const [itemSel, setItemSel] = React.useState(undefined); // 품목 상세로 연 프로젝트 id (없으면 품목 목록)
    const itemsRef = React.useRef(undefined);
    itemsRef.current = items;
    const [online, setOnline] = React.useState(undefined);
    const [aiOpen, setAiOpen] = React.useState(undefined);
    React.useEffect(() => { const chk = () => { (0, ai_1.aiOnline)().then(setOnline, () => setOnline(false)); }; chk(); const t = setInterval(chk, 30000); return () => clearInterval(t); }, []);
    const onlineRef = React.useRef(undefined);
    onlineRef.current = online;
    const busy = React.useRef(false);
    const [tick, setTick] = React.useState(0);
    const queue = React.useMemo(() => new store_1.SaveQueue(props.store), [props.store]);
    const sets = (0, Shell_1.useSettings)(props.settings, who, m => setErr(m)); // 1.0.147 설정
    const setsRef = React.useRef(sets);
    setsRef.current = sets;
    const firstDone = React.useRef(false);
    React.useEffect(() => { if (firstDone.current || !sets.me.spId)
        return; firstDone.current = true; if (sets.me.first === 'home') {
        setView('today');
        setMenu('home');
    } }, [sets.me.spId]);
    React.useEffect(() => {
        props.store.list().then(xs => {
            const open = xs.filter(x => !x.closed);
            const done = xs.filter(x => x.closed).map(history_1.fromItem).filter(Boolean);
            (props.loadHistory ? props.loadHistory() : Promise.resolve([])).then(h => { (0, history_1.setHistory)(h.concat(done)); setHist(h.length + done.length); }, () => { (0, history_1.setHistory)(done); setHist(done.length); });
            if (!xs.length) {
                setDemo(true);
                setItems((0, work_1.workSamples)().map(aiSamples_1.withAi)); /* 1.0.139 예시마다 AI가 해 놓은 일 */
            }
            else
                setItems(open);
        }, e => setErr(String((e && e.message) || e)));
    }, [props.store]);
    React.useEffect(() => (0, store_1.guardLeave)(() => queue.busy()), [queue]);
    const update = (id, fn) => {
        const cur = (itemsRef.current || []).filter(x => x.id === id)[0]; // 1.0.134 AI 답이 늦게 와도 최신 행에 붙도록 ref에서 읽음
        if (!cur)
            return;
        const apply = (x) => { const y = Object.assign(Object.assign({}, (0, work_1.settle)(fn(x), who)), { updated: (0, ui_1.nowIso)() }); const ts = setsRef.current.org.auto === 'confirm' ? [] : (0, auto_1.eventTasks)(x, y); return ts.length ? (0, auto_1.addJobs)(y, ts, who, onlineRef.current) : y; };
        const next = apply(cur);
        itemsRef.current = (itemsRef.current || []).map(x => (x.id === id ? next : x));
        setItems(xs => (xs || []).map(x => (x.id === id ? next : x)));
        if (demo)
            return;
        queue.save(next, apply).then(r => setItems(xs => (xs || []).map(x => (x.id === id ? Object.assign(Object.assign(Object.assign({}, x), { spId: r.saved.spId, spVer: r.saved.spVer }), (r.merged ? r.saved : {})) : x))), e => setErr(`저장 못 했어요 — ${String((e && e.message) || e)}`));
    };
    const add = (name, owner, approver, start, target, t, code, base) => {
        const bp = target ? (0, sched_1.backPlan)(target, t) : undefined; // 1.0.134 출시 목표일에서 유형별 표준 일수로 거꾸로
        const p0 = Object.assign(Object.assign(Object.assign({}, (0, ax_1.newProject)(name, who, owner.trim() || who, target || undefined, bp ? bp.start : start || undefined)), { approver: approver.trim() || undefined }), (bp ? { start: bp.start, plan: bp.plan } : {}));
        const p = (0, item_1.startItem)(p0, t, code, (items || []).filter(x => x.id === base)[0], who);
        setItems(xs => [p].concat(demo ? [] : (xs || [])));
        setDemo(false);
        setAdding(false);
        setSel(p.id);
        setFocus(0);
        setPick(undefined);
        setView('project');
        props.store.save(p).then(s => setItems(xs => (xs || []).map(x => (x.id === p.id ? Object.assign(Object.assign({}, x), { spId: s.spId, spVer: s.spVer }) : x))), e => setErr(`저장 못 했어요 — ${String((e && e.message) || e)}`));
    };
    const open = (id, k, key) => { setSel(id); setFocus(k); setPick(key); if (k !== undefined || key)
        setPtab('work'); setView('project'); window.scrollTo(0, 0); };
    // 1.0.134 AI에게 맡기기 — 진행 중 → 확인 대기(또는 AI 연결 전), 반영은 사람이
    const setJob = (pid, id, patch) => update(pid, p => (Object.assign(Object.assign({}, p), { aiJobs: (p.aiJobs || []).map(j => (j.id === id ? Object.assign(Object.assign({}, j), patch) : j)) })));
    // 1.0.135 자동 실행 — 줄 선 일(queued)을 오래된 것부터 하나씩. 중계가 꺼지면 'AI 연결 전'으로 두고, 다시 켜지면 그것부터
    const enqueue = (pid, kind, input, why) => update(pid, p => (0, auto_1.addJobs)(p, [{ kind, input, why: why || '', owner: why ? undefined : who }], who, onlineRef.current));
    const runAi = (pid, kind, input, reuse) => {
        if (reuse)
            setJob(pid, reuse, { state: onlineRef.current === false ? 'offline' : 'queued', at: (0, ui_1.nowIso)(), result: undefined, note: undefined });
        else
            enqueue(pid, kind, input);
    };
    React.useEffect(() => {
        if (busy.current || online === false || !items)
            return;
        const all = [];
        const offM = sets.org.aiOff || {};
        const lim = sets.org.limit || 0;
        const day = new Date().toISOString().slice(0, 10);
        let started = 0;
        items.forEach(p => (p.aiJobs || []).forEach(j => { if (j.state !== 'queued' && j.state !== 'offline' && (j.at || '').slice(0, 10) === day)
            started++; }));
        if (lim && started >= lim)
            return; // 1.0.147 하루 사용 한도 — 넘으면 다음 날까지 줄 서 있음
        items.forEach(p => (p.aiJobs || []).forEach(j => { if ((j.state === 'queued' || (j.state === 'offline' && online)) && !offM[(team_1.TEAM[(0, team_1.mateOf)(j)] || team_1.TEAM[0]).id])
            all.push({ p: p, j }); }));
        if (!all.length)
            return;
        all.sort((a, b) => (a.j.at < b.j.at ? -1 : 1));
        const { p, j } = all[0];
        busy.current = true;
        const done = (patch) => { setJob(p.id, j.id, patch); busy.current = false; setTimeout(() => setTick(x => x + 1), 2500); };
        setJob(p.id, j.id, { state: 'running', at: j.state === 'offline' ? (0, ui_1.nowIso)() : j.at });
        if (j.kind === 'j_back') { // 출시 목표에서 거꾸로 — 계산은 규칙, 반영은 사람이
            if (!p.target) {
                done({ state: 'error', note: '출시 목표일이 없어요 — 설정에서 넣어 주세요' });
                return;
            }
            const bp = (0, sched_1.backPlan)(p.target, (0, devtype_1.typeOf)(p));
            done({ state: 'review', doneAt: (0, ui_1.nowIso)(), result: [`출시 목표 ${p.target} · ${(0, devtype_1.typeInfo)((0, devtype_1.typeOf)(p)).tag} 표준 ${(0, sched_1.stdTotal)((0, devtype_1.typeOf)(p))}일 기준 단계 계획 (시작 ${bp.start})`].concat((0, work_1.stagesOf)(p).map(s => `- ${s.no} ${s.name}: ${bp.plan[s.id]}`)).concat(['근거: 개발 유형별 표준 일수(①~⑥)와 출시 후 90일']).join('\n') });
            return;
        }
        (0, ai_1.askAi)(ai_1.SYSTEM, (0, ai_1.buildAsk)(j.kind, p, items, j.input)).then(t => { setOnline(true); done({ state: 'review', result: t, doneAt: (0, ui_1.nowIso)() }); }, e => { const m = String((e && e.message) || e); if (m === 'offline') {
            setOnline(false);
            done({ state: 'offline' });
        }
        else
            done({ state: 'error', note: m }); });
    }, [items, online, tick, sets.org]);
    // 매일 아침·금요일·지금 단계 AI 일 — 처음 열 때 밀린 것부터 (예시만 있을 땐 프로젝트를 열 때 그 프로젝트만)
    const autoDone = React.useRef({});
    const runDaily = (p) => {
        if (autoDone.current[p.id] || setsRef.current.org.auto === 'confirm')
            return;
        autoDone.current[p.id] = true;
        const r = (0, auto_1.dailyTasks)(p, (0, Dash_2.vendorWaits)([p], '*').length > 0);
        if ((0, work_1.projLate)(p) > 0 && !(p.aiJobs || []).some(j => j.kind === 's_catchup' && Date.now() - new Date(j.at).getTime() < 7 * 86400000))
            r.tasks.push({ kind: 's_catchup', why: `${(0, work_1.projLate)(p)}일 늦어짐 — 만회안` }); // 1.0.148
        if (r.tasks.length)
            update(p.id, x => (0, auto_1.addJobs)(Object.assign(Object.assign({}, x), { aiAuto: r.mark }), r.tasks, who, onlineRef.current));
    };
    React.useEffect(() => { if (items && !demo)
        items.forEach(runDaily); }, [items && items.length, demo]);
    React.useEffect(() => { if (items && demo && view === 'project') {
        const c = items.filter(x => x.id === sel)[0] || items[0];
        if (c)
            runDaily(c);
    } }, [view, sel, demo, items && items.length]);
    const aiApi = { run: (pid, kind, input) => runAi(pid, kind, input), open: (pid, id) => setAiOpen({ pid, id }), online,
        kinds: (pid) => { const p = (items || []).filter(x => x.id === pid)[0]; return p ? (0, ai_1.kindsFor)((0, ai_1.branchOf)((0, devtype_1.typeOf)(p))) : []; } };
    const aiP = aiOpen ? (items || []).filter(x => x.id === aiOpen.pid)[0] : undefined;
    const aiJ = aiP && aiOpen ? (aiP.aiJobs || []).filter(j => j.id === aiOpen.id)[0] : undefined;
    if (!items)
        return React.createElement("div", { "data-axplm": true, className: "axw", style: { padding: 32, color: ui_1.C.sub } },
            React.createElement("style", null, ui_1.CSS),
            err || '불러오는 중…');
    const mine = (0, work_1.todos)(items, who);
    const cur = items.filter(x => x.id === sel)[0] || items[0];
    const reviewAll = items.reduce((n, p) => n + (p.aiJobs || []).filter(j => (0, ai_1.jobState)(j) === 'review').length, 0);
    // 1.0.140 메뉴 2개 — 오늘 · 아이템 (현황표·AI 일함은 「오늘」 한 화면으로 합침)
    // 1.0.141 위 탭 = 마스터(전체 아이템·AI 확인) + 아이템마다 한 탭 (심준보 2026-11-19 #ax-plm msg 10751313)
    const goItem = (id) => { setSel(id); setFocus(undefined); setPick(undefined); setPtab('over'); setView('project'); window.scrollTo(0, 0); };
    void mine;
    const aiAct = {
        apply: (pid, j) => update(pid, x => { const y = (0, ai_1.applyJob)(x, j, who); const ch = (0, auto_1.chainTasks)(j); return ch.length && setsRef.current.org.auto !== 'confirm' ? (0, auto_1.addJobs)(y, ch, who, onlineRef.current) : y; }),
        reject: (pid, j, why) => setJob(pid, j.id, { state: 'dismissed', by: who, note: why }),
        edit: (pid, j, text) => setJob(pid, j.id, { result: text, edited: who }),
        retry: (pid, j) => runAi(pid, j.kind, j.input, j.id)
    };
    // 1.0.147 왼쪽 메뉴 → 화면
    const gatesWait = items.reduce((n, p) => n + (0, work_1.stagesOf)(p).filter(x => x.gate && (0, work_1.gateState)(p, x) === 'requested').length, 0);
    const go = (m) => {
        setSideOpen(false);
        if (m === 'notes') {
            setNoteList(x => x + 1);
            return;
        }
        setMenu(m);
        setPick(undefined);
        window.scrollTo(0, 0);
        if (m === 'home')
            setView('today');
        else if (m === 'item') {
            setView('project');
            setPtab('over');
        }
        else if (m === 'bom' || m === 'ecr') {
            setView('project');
            setPtab('parts');
            setSub0({ s: m, n: Date.now() });
        }
        else if (m === 'gate')
            setView('gates');
        else if (m === 'team')
            setView('team');
        else if (m === 'set')
            setView('set');
    };
    const toItem = (id) => { goItem(id); setMenu('item'); };
    const toPart = (id, sb) => { setSel(id); setFocus(undefined); setPick(undefined); setView('project'); setPtab('parts'); setSub0({ s: sb, n: Date.now() }); setMenu(sb); window.scrollTo(0, 0); };
    const recent = (0, Shell_1.readRecent)().filter(id => id !== (cur && cur.id)).map(id => items.filter(x => x.id === id)[0]).filter(Boolean).slice(0, 3);
    const size = sets.me.size === 's' ? 0.92 : sets.me.size === 'l' ? 1.1 : 1;
    const screen = cur ? { product: cur.id, code: cur.itemCode || '', name: cur.name, line: '', tab: String(view === 'project' ? ptab : view), tabLabel: menu, stage: '', stageLabel: '' } : undefined;
    return (React.createElement(Shell_1.SetCtx.Provider, { value: sets },
        React.createElement(Dash_1.AiCtx.Provider, { value: aiApi },
            React.createElement("div", { "data-axplm": true, "data-ax-v": "147", "data-ax-menu-on": menu, className: 'axw' + (sets.me.light ? ' axw-light' : ''), style: size !== 1 ? { zoom: size } : undefined },
                React.createElement("style", null, ui_1.CSS + Overview_1.OV_CSS + ui_1.TIP_CSS + Shell_1.SHELL_CSS),
                React.createElement(Sticky_1.default, { store: props.notes, who: who, ver: props.ver || '미리보기', off: demo && !props.notes, screen: screen, listNonce: noteList, linkOf: sc => { const u = window.location.href.split('?')[0]; return sc ? `${u}?item=${encodeURIComponent(sc.product)}` : u; }, go: sc => { if (items.filter(x => x.id === sc.product).length)
                        toItem(sc.product); } },
                    React.createElement("div", { className: "axs" },
                        React.createElement(Shell_1.Side, { menu: menu, go: go, fold: fold, setFold: setFold, open: sideOpen, counts: { home: reviewAll, gate: gatesWait } }),
                        sideOpen && React.createElement("div", { onClick: () => setSideOpen(false), style: { position: 'fixed', inset: 0, zIndex: 19, background: 'rgba(0,0,0,.45)' } }),
                        React.createElement("div", { className: "axs-body" },
                            React.createElement("div", { className: "axs-top axw-top", "data-ax-topbar": true },
                                React.createElement("button", { className: "axs-burger", "data-ax-burger": true, onClick: () => setSideOpen(true), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '5px 9px' }), "aria-label": "\uBA54\uB274" }, "\u2630"),
                                React.createElement(Shell_1.ItemSelect, { items: items, cur: view === 'project' ? cur : undefined, onPick: toItem }),
                                React.createElement("div", { className: "axs-recent", "data-ax-recent-row": true, style: { display: 'flex', gap: 5, minWidth: 0 } }, recent.map(x => React.createElement("button", { key: x.id, "data-ax-recent": x.id, className: "axs-chip", title: x.name, onClick: () => toItem(x.id) }, x.name))),
                                React.createElement(Shell_1.SearchBox, { items: items, onItem: toItem, onPart: toPart, onMenu: go, cur: cur, onCmd: (k, key) => { if (!cur)
                                        return; if (key === 'lanes' || key === 'log') {
                                        goItem(cur.id);
                                        setPtab(key);
                                        setMenu('item');
                                    }
                                    else {
                                        open(cur.id, k, key);
                                        setMenu(key === 'gate' ? 'gate' : 'item');
                                    } } }),
                                React.createElement("span", { style: { flex: 1 } }),
                                React.createElement("button", { "data-ax-dock-btn": true, onClick: () => setDock(!dock), style: Object.assign(Object.assign({}, ui_1.btn), { borderColor: ui_1.C.accent, color: ui_1.C.accent, padding: '5px 11px' }) },
                                    "\u2726",
                                    React.createElement("span", { className: "axw-cnt" }, " AI \uB3C4\uC6B0\uBBF8")),
                                React.createElement("button", { "data-ax-bell": true, onClick: () => go('home'), title: "\uD655\uC778\uD560 \uAC83", style: Object.assign(Object.assign({}, ui_1.btn), { position: 'relative', padding: '5px 9px', border: 'none', background: 'transparent' }) },
                                    React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" },
                                        React.createElement("path", { d: "M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 20a2 2 0 0 0 4 0" })),
                                    reviewAll + gatesWait > 0 && React.createElement("span", { "data-ax-bell-n": true, style: { position: 'absolute', top: 0, right: 2, background: ui_1.C.soon, color: '#111', fontSize: 10.5, fontWeight: 800, borderRadius: 8, padding: '0 5px', lineHeight: '15px' } }, reviewAll + gatesWait)),
                                React.createElement("span", { className: "axs-me", style: { fontSize: 13, color: ui_1.C.sub, whiteSpace: 'nowrap' } }, who),
                                React.createElement("button", { "data-ax-new": true, onClick: () => setAdding(true), style: ui_1.primary },
                                    "+ \uC0C8",
                                    React.createElement("span", { className: "axw-cnt" }, " \uD504\uB85C\uC81D\uD2B8"))),
                            React.createElement("div", { className: "axw-pad", style: { padding: '20px 24px 48px', maxWidth: 1360, margin: '0 auto' } },
                                err && React.createElement("div", { "data-ax-err": true, style: Object.assign(Object.assign({}, ui_1.card), { marginBottom: 12, padding: '9px 14px', fontSize: 13, color: ui_1.C.late, display: 'flex', gap: 8, alignItems: 'center' }) },
                                    React.createElement(ui_1.Dot, { s: "late" }),
                                    err,
                                    React.createElement("span", { style: { flex: 1 } }),
                                    React.createElement("button", { onClick: () => setErr(''), style: ui_1.btn }, "\uB2EB\uAE30")),
                                demo && React.createElement("div", { "data-ax-demo": true, style: Object.assign(Object.assign({}, ui_1.card), { marginBottom: 12, padding: '7px 14px', fontSize: 13, color: ui_1.C.sub, display: 'inline-flex', alignItems: 'center' }) },
                                    "\uC608\uC2DC 5\uAC1C",
                                    React.createElement(ui_1.Tip, { t: "\uB4F1\uB85D\uB41C \uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC5B4 \uAC1C\uBC1C \uC720\uD615\uB9C8\uB2E4 \uC608\uC2DC \uD558\uB098\uC529 \uBCF4\uC5EC \uB4DC\uB824\uC694. \uC608\uC2DC\uB294 \uC800\uC7A5\uB418\uC9C0 \uC54A\uACE0, \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB97C \uB9CC\uB4E4\uBA74 \uC0AC\uB77C\uC838\uC694." })),
                                adding && React.createElement(NewForm, { who: who, items: items, onCancel: () => setAdding(false), onAdd: add }),
                                view === 'today' && React.createElement(Mates_1.Brief, { items: items, onItem: toItem, onGates: () => go('gate') }),
                                view === 'today' && React.createElement(Today_1.Today, { items: items, who: who, act: aiAct, onItem: toItem }),
                                view === 'gates' && React.createElement(Shell_1.GatesView, { items: items, who: who, onOpen: (id, k) => { open(id, k, 'gate'); setMenu('gate'); } }),
                                view === 'team' && React.createElement(Shell_1.TeamView, { p: cur, items: items }),
                                view === 'set' && React.createElement(Shell_1.SettingsView, { who: who, ver: props.ver || '미리보기', items: items }),
                                view === 'status' && React.createElement(Work139_1.StatusBoard, { items: items, onOpen: open, onAi: () => setView('ai') }),
                                view === 'ai' && React.createElement(Work139_1.AiInbox, { items: items, who: who, act: aiAct, onItem: (id, k) => open(id, k) }),
                                view === 'home' && React.createElement(ItemDash_1.ItemDash, { items: items, who: who, onOpen: open, onItem: id => { setItemSel(id); setView('item'); }, onVendor: () => setView('vendor'), onIssues: id => open(id) }),
                                view === 'dash' && React.createElement(Dash_1.Dashboard, { items: items, who: who, onOpen: open, onVendor: () => setView('vendor') }),
                                view === 'sched' && React.createElement(Dash_1.AllSchedule, { items: items, onOpen: open }),
                                view === 'todo' && React.createElement(TodoView, { list: mine, items: items, who: who, onOpen: open }),
                                view === 'all' && React.createElement(AllView, { items: items, onOpen: open }),
                                view === 'guide' && React.createElement(Guide_1.Guidebook, { items: items }),
                                view === 'vendor' && React.createElement(Vendors_1.VendorsView, { items: items, who: who, update: update, onItem: id => { setItemSel(id); setView('item'); } }),
                                view === 'item' && !items.filter(x => x.id === itemSel).length && React.createElement(Items_1.ItemsList, { items: items, onOpen: setItemSel }),
                                view === 'item' && items.filter(x => x.id === itemSel).map(x => React.createElement(Items_1.ItemDetail, { key: x.id, p: x, items: items, who: who, update: fn => update(x.id, fn), onPick: setItemSel, onProject: () => open(x.id) })),
                                view === 'project' && cur && React.createElement(ProjectView, { key: cur.id + (sub0 ? sub0.n : ''), initSub: sub0 && sub0.s, p: cur, items: items, who: who, tab: ptab, setTab: setPtab, act: aiAct, focus: focus, setFocus: k => { setFocus(k); setPick(undefined); }, pick: pick, setPick: setPick, onPick: id => { setSel(id); setFocus(undefined); setPick(undefined); }, update: fn => update(cur.id, fn), onItem: () => { setItemSel(cur.id); setView('item'); } }),
                                view === 'project' && !cur && React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { padding: 32, color: ui_1.C.faint, textAlign: 'center' }) }, "\uD504\uB85C\uC81D\uD2B8\uAC00 \uC5C6\uC5B4\uC694. \uC0C8 \uD504\uB85C\uC81D\uD2B8\uB85C \uC2DC\uC791\uD558\uC138\uC694.")),
                            dock && React.createElement(Mates_1.Dock, { p: cur, where: `${cur ? cur.name : ''} · ${{ over: '개요', work: '진행', parts: '부품·협력사', lanes: '일정', log: '기록' }[ptab] || String(view)}${pick ? ` · 고른 줄 ${pick}` : ''}`, onClose: () => setDock(false) }),
                            React.createElement("span", { "data-ax-hist": hist, style: { display: 'none' } }),
                            aiP && aiJ && React.createElement(Dash_1.AiResult, { p: aiP, job: aiJ, onClose: () => setAiOpen(undefined), onApply: () => { update(aiP.id, x => (0, ai_1.applyJob)(x, aiJ, who)); setAiOpen(undefined); }, onDismiss: () => { setJob(aiP.id, aiJ.id, { state: 'dismissed', by: who }); setAiOpen(undefined); }, onRetry: () => runAi(aiP.id, aiJ.kind, aiJ.input, aiJ.id) }))))))));
}
// 내 할 일 — 결론 한 줄 → 숫자 4칸 → 목록, 오른쪽은 프로젝트별 진행 막대
function TodoView(props) {
    const late = props.list.filter(t => t.left !== undefined && t.left < 0);
    const week = props.list.filter(t => t.left !== undefined && t.left >= 0 && t.left <= 7);
    const appr = props.list.filter(t => t.kind === '승인');
    const risk = props.items.reduce((n, p) => n + (p.issues || []).filter(i => !i.done && i.kind === '리스크').length, 0);
    const first = late[0] || week[0] || props.list[0];
    const head = !props.list.length ? '지금 내 앞으로 된 할 일이 없어요.'
        : `이번 주 마감 ${week.length}건, 지연 ${late.length}건 — ${first ? `「${first.text}」부터` : ''}`;
    const groups = [['지연', late], ['이번 주', week], ['그 뒤', props.list.filter(t => t.left === undefined || t.left > 7)]];
    const stat = (k, n, s, tip) => (React.createElement("div", { "data-ax-stat": k, title: tip, style: Object.assign(Object.assign({}, ui_1.card), { padding: '14px 16px' }) },
        React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { display: 'flex', alignItems: 'center', gap: 6 }) },
            n > 0 && React.createElement(ui_1.Dot, { s: s, size: 7 }),
            k),
        React.createElement("div", { style: { fontSize: 26, fontWeight: 700, marginTop: 4, fontVariantNumeric: 'tabular-nums', color: ui_1.C.text } }, n)));
    return (React.createElement("div", { "data-ax-todo": true },
        React.createElement("h1", { "data-ax-headline": true, style: { fontSize: 20, fontWeight: 700, letterSpacing: '-.01em', margin: '0 0 14px' } }, head),
        React.createElement("div", { className: "axw-stats", style: { marginBottom: 16 } },
            stat('이번 주 마감', week.length, 'soon', '7일 안에 마감인 내 할 일'),
            stat('지연', late.length, 'late', '마감이 지난 내 할 일'),
            stat('승인 대기', appr.length, 'wait', '내가 승인할 관문'),
            stat('열린 리스크', risk, 'soon', '전체 프로젝트의 해결 안 된 리스크')),
        React.createElement("div", { className: "axw-todo" },
            React.createElement("div", { style: ui_1.card },
                !props.list.length && React.createElement("div", { style: { padding: 24, color: ui_1.C.faint, fontSize: 13 } }, "\uC0B0\uCD9C\uBB3C\uC5D0\uC11C \uB2F4\uB2F9\uC744 \uC815\uD558\uBA74 \uC5EC\uAE30\uC5D0 \uBAA8\uC5EC\uC694."),
                groups.filter(g => g[1].length).map(g => (React.createElement("div", { key: g[0] },
                    React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { padding: '10px 14px 6px', borderTop: g[0] === groups.filter(x => x[1].length)[0][0] ? 'none' : `1px solid ${ui_1.C.line}`, background: ui_1.C.bg }) },
                        g[0],
                        " ",
                        g[1].length),
                    g[1].map((t, i) => (React.createElement("div", { key: i, className: "axw-row", "data-ax-todo-row": true, onClick: () => props.onOpen(t.pid, t.stage, t.key || (t.kind === '승인' ? 'gate' : undefined)) },
                        React.createElement(ui_1.Dot, { s: t.left !== undefined && t.left < 0 ? 'late' : t.left !== undefined && t.left <= 7 ? 'soon' : 'open' }),
                        React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                            React.createElement("div", { style: { fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, t.text),
                            React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                                t.kind,
                                " \u00B7 ",
                                t.project,
                                " \u00B7 ",
                                (0, work_1.stagesOf)(props.items.filter(x => x.id === t.pid)[0])[t.stage].no,
                                " ",
                                (0, work_1.stagesOf)(props.items.filter(x => x.id === t.pid)[0])[t.stage].short)),
                        React.createElement(ui_1.Due, { due: t.due })))))))),
            React.createElement("div", { "data-ax-progress": true, style: Object.assign(Object.assign({}, ui_1.card), { padding: '14px 16px' }) },
                React.createElement("div", { style: { fontWeight: 700, marginBottom: 4 } }, "\uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589"),
                props.items.map(p => {
                    const total = (0, work_1.stagesOf)(p).reduce((n, s) => n + s.docs.length, 0);
                    const done = (0, work_1.stagesOf)(p).reduce((n, s) => n + (0, work_1.stageDocsOk)(p, s), 0);
                    const k = (0, work_1.curIdx)(p);
                    const lt = (0, work_1.projLate)(p);
                    return (React.createElement("div", { key: p.id, "data-ax-progress-row": p.id, onClick: () => props.onOpen(p.id), style: { padding: '12px 0', borderTop: `1px solid ${ui_1.C.line}`, cursor: 'pointer' } },
                        React.createElement("div", { style: { display: 'flex', alignItems: 'baseline', gap: 8 } },
                            React.createElement("span", { style: { fontWeight: 600, flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, p.name),
                            React.createElement("span", { style: { fontSize: 12, color: ui_1.C.faint, fontVariantNumeric: 'tabular-nums' } },
                                Math.round(done / total * 100),
                                "%")),
                        React.createElement("div", { style: { display: 'flex', gap: 2, margin: '7px 0 6px' } }, (0, work_1.stagesOf)(p).map((s, i) => { const f = (0, work_1.perf)(p, i); return React.createElement("span", { key: s.id, style: { flex: 1, height: 6, borderRadius: 2, background: f.state === 'done' ? ui_1.C.text : f.state === 'doing' ? (f.late ? ui_1.C.late : ui_1.C.accent) : ui_1.C.line } }); })),
                        React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint, display: 'flex', alignItems: 'center', gap: 6 } },
                            lt > 0 && React.createElement(ui_1.Dot, { s: "late", size: 6 }),
                            (0, work_1.stagesOf)(p)[k].no,
                            " ",
                            (0, work_1.stagesOf)(p)[k].short,
                            " \u00B7 PM ",
                            p.owner || '없음',
                            lt > 0 ? ` · ${lt}일 지연` : '',
                            " \u00B7 \uCD9C\uC2DC ",
                            (0, ui_1.md)(p.target))));
                })))));
}
// 전체 현황 — 프로젝트마다 7단계와 지연
function AllView(props) {
    const th = { padding: '10px 12px', fontSize: 12, fontWeight: 600, color: ui_1.C.faint, textAlign: 'left', whiteSpace: 'nowrap', borderBottom: `1px solid ${ui_1.C.line}` };
    const td = { padding: '11px 12px', borderBottom: `1px solid ${ui_1.C.line}`, whiteSpace: 'nowrap' };
    return (React.createElement("div", { "data-ax-all": true, style: Object.assign(Object.assign({}, ui_1.card), { overflowX: 'auto' }) },
        React.createElement("table", { style: { width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 860 } },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", { style: th }, "\uD504\uB85C\uC81D\uD2B8"),
                    React.createElement("th", { style: th }, "PM"),
                    React.createElement("th", { style: Object.assign(Object.assign({}, th), { width: 280 }) }, "\uB2E8\uACC4"),
                    React.createElement("th", { style: th }, "\uD604\uC7AC"),
                    React.createElement("th", { style: th }, "\uCD9C\uC2DC \uBAA9\uD45C"),
                    React.createElement("th", { style: th }, "\uC9C0\uC5F0"),
                    React.createElement("th", { style: th }, "\uC5F4\uB9B0 \uC774\uC288"),
                    React.createElement("th", { style: th }, "\uC2B9\uC778 \uB300\uAE30"))),
            React.createElement("tbody", null, props.items.map(p => {
                const lt = (0, work_1.projLate)(p);
                const k = (0, work_1.curIdx)(p);
                const iss = (p.issues || []).filter(i => !i.done).length;
                const req = (0, work_1.stagesOf)(p).filter(s => s.gate && (0, work_1.gateState)(p, s) === 'requested').length;
                return (React.createElement("tr", { key: p.id, "data-ax-all-row": p.id, onClick: () => props.onOpen(p.id), style: { cursor: 'pointer' } },
                    React.createElement("td", { style: Object.assign(Object.assign({}, td), { fontWeight: 600 }) }, p.name),
                    React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub }) }, p.owner || '—'),
                    React.createElement("td", { style: td },
                        React.createElement("div", { style: { display: 'flex', gap: 2 } }, (0, work_1.stagesOf)(p).map((s, i) => { const f = (0, work_1.perf)(p, i); return React.createElement("span", { key: s.id, title: `${s.no} ${s.name} · 계획 ${(0, ui_1.md)(f.plan)} · 실제 ${(0, ui_1.md)(f.actual)}${f.late ? ` · ${f.late}일 지연` : ''}`, onClick: e => { e.stopPropagation(); props.onOpen(p.id, i); }, style: { flex: 1, height: 8, borderRadius: 2, background: f.state === 'done' ? ui_1.C.text : f.state === 'doing' ? (f.late ? ui_1.C.late : ui_1.C.accent) : ui_1.C.line } }); }))),
                    React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub }) },
                        (0, work_1.stagesOf)(p)[k].no,
                        " ",
                        (0, work_1.stagesOf)(p)[k].short,
                        " ",
                        React.createElement("span", { style: { color: ui_1.C.faint } },
                            (0, work_1.stageDocsOk)(p, (0, work_1.stagesOf)(p)[k]),
                            "/",
                            (0, work_1.stagesOf)(p)[k].docs.length)),
                    React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub, fontVariantNumeric: 'tabular-nums' }) },
                        (0, ui_1.md)(p.target),
                        " ",
                        React.createElement("span", { style: { color: ui_1.C.faint } }, (0, ax_1.dday)(p.target))),
                    React.createElement("td", { style: td }, lt ? React.createElement("span", { style: { color: ui_1.C.late, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 } },
                        React.createElement(ui_1.Dot, { s: "late", size: 7 }),
                        lt,
                        "\uC77C") : React.createElement("span", { style: { color: ui_1.C.faint } }, "\u2014")),
                    React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: iss ? ui_1.C.text : ui_1.C.faint }) }, iss || '—'),
                    React.createElement("td", { style: td }, req ? React.createElement("span", { style: { color: ui_1.C.soon, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 } },
                        React.createElement(ui_1.Dot, { s: "wait", size: 7 }),
                        req) : React.createElement("span", { style: { color: ui_1.C.faint } }, "\u2014"))));
            })))));
}
// 1.0.139 아이템 화면 — 숨기지 않는 탭: 산출물 · 관문 기준 · BOM · 협력사 · 일정 판 · 일정표 · 도면·문서 · 금형 · 설계 변경 · 인증 · 이슈 · AI 일 · 기록
function ProjectView(props) {
    const { p, who, update, tab } = props;
    const ck = (0, work_1.curIdx)(p);
    const k = props.focus === undefined ? ck : props.focus;
    const s = (0, work_1.stagesOf)(p)[k];
    const [setting, setSetting] = React.useState(false);
    const brief = (p.brief || []).slice(-1)[0];
    const lt = (0, work_1.projLate)(p);
    const px = p;
    const ti = (0, devtype_1.typeInfo)((0, devtype_1.typeOf)(p));
    const review = (px.aiJobs || []).filter(j => (0, ai_1.jobState)(j) === 'review').length;
    const go = (t) => { props.setTab(t); props.setPick(undefined); };
    const toWork = (k2, key) => { props.setTab('work'); props.setFocus(k2); props.setPick(key); };
    const left = (0, work_1.stagesOf)(p)[ck].docs.length - (0, work_1.stageDocsOk)(p, (0, work_1.stagesOf)(p)[ck]);
    // 1.0.140 탭 4개 — 진행(이번 단계 할 일·담당 AI/사람·관문) · 부품·협력사 · 일정 · 기록
    const tabs = [['over', '개요', review || undefined], ['work', '진행', left || undefined], ['parts', '부품·협력사', undefined], ['lanes', '일정', undefined], ['log', '기록', (p.issues || []).filter(i => !i.done).length || undefined]];
    const [sub, setSub] = React.useState(props.initSub || 'bom');
    const subs = [['bom', 'BOM', (px.parts || []).length], ['vendor', '협력사', (px.vendors || []).length], ['doc', ti.id === 'odm' || ti.id === 'sourcing' ? '사양·규격서' : '도면·문서', (px.docs2 || []).length]];
    if (ti.mold)
        subs.push(['mold', '금형', (px.molds || []).length]);
    subs.push(['ecr', '설계 변경', (px.ecrs || []).length], ['cert', '인증', (px.certs || []).length]);
    void Work139_1.GateBoard;
    void Work139_1.AiInbox;
    return (React.createElement("div", { "data-ax-project": p.id, "data-ax-ptab": tab },
        React.createElement("div", { style: { display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap', marginBottom: 6 } },
            React.createElement("div", { style: { flex: '1 1 260px', minWidth: 0 } },
                React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.faint } },
                    ti.label,
                    p.itemCode ? ` · 품번 ${p.itemCode}` : ''),
                React.createElement("h1", { style: { fontSize: 22, fontWeight: 700, letterSpacing: '-.01em', margin: 0 } },
                    React.createElement(ui_1.TypeTag, { p: p }),
                    p.name),
                React.createElement("div", { style: { fontSize: 13, color: ui_1.C.sub, marginTop: 4, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' } },
                    React.createElement("span", null,
                        "PM ",
                        p.owner || '없음'),
                    React.createElement("span", null,
                        "\uC2B9\uC778\uC790 ",
                        p.approver || '없음'),
                    React.createElement("span", null,
                        "\uCD9C\uC2DC \uBAA9\uD45C ",
                        (0, ui_1.md)(p.target),
                        " ",
                        React.createElement("span", { style: { color: ui_1.C.faint } }, (0, ax_1.dday)(p.target))),
                    lt > 0 && React.createElement("span", { style: { color: ui_1.C.late, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 } },
                        React.createElement(ui_1.Dot, { s: "late", size: 7 }),
                        lt,
                        "\uC77C \uC9C0\uC5F0"))),
            React.createElement(Dash_1.AiButton, { pid: p.id }),
            React.createElement("button", { "data-ax-setting": true, onClick: () => setSetting(!setting), style: ui_1.btn }, setting ? '닫기' : '아이템 설정')),
        React.createElement("div", { "data-ax-brief": true, style: { fontSize: 13, color: ui_1.C.sub, margin: '10px 0 0', paddingLeft: 10, borderLeft: `2px solid ${ui_1.C.accent}` } },
            React.createElement("b", { style: { color: ui_1.C.text, fontWeight: 600 } }, "\uC774\uBC88 \uC8FC \uC694\uC57D"),
            " ",
            brief ? brief.text : React.createElement("span", { style: { color: ui_1.C.faint } },
                "\uC544\uC9C1 \uC5C6\uC74C",
                React.createElement(ui_1.Tip, { t: "\uAE08\uC694\uC77C 08:30 KST\uC5D0 \uBD80PM AI\uAC00 \uC368\uC11C \uD655\uC778 \uB300\uAE30\uB85C \uC62C\uB824\uC694." }))),
        setting && React.createElement(Settings, { p: p, who: who, update: update }),
        React.createElement(Rail, { p: p, k: k, onPick: k2 => toWork(k2) }),
        React.createElement("div", { "data-ax-ptabs": true, style: { display: 'flex', gap: 2, marginTop: 14, borderBottom: `1px solid ${ui_1.C.line}`, overflowX: 'auto', scrollbarWidth: 'thin' } }, tabs.map(t => React.createElement("button", { key: t[0], "data-ax-ptab-btn": t[0], onClick: () => go(t[0]), style: { border: 'none', background: 'transparent', padding: '9px 11px', fontSize: 14, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', color: tab === t[0] ? ui_1.C.text : ui_1.C.faint, boxShadow: tab === t[0] ? `inset 0 -2px 0 ${ui_1.C.text}` : 'none' } },
            t[1],
            t[2] ? React.createElement("span", { style: { marginLeft: 5, fontSize: 12, color: t[0] === 'ai' ? ui_1.C.soon : ui_1.C.faint } }, t[2]) : null))),
        React.createElement("div", { style: { marginTop: 16 } },
            tab === 'over' && React.createElement(Overview_1.Overview, { p: p, who: who, act: props.act, nav: { work: (k2, key) => toWork(k2 === undefined ? ck : k2, key), parts: sb => { setSub(sb); go('parts'); }, lanes: () => go('lanes'), log: () => go('log'), pull: (t, pl) => update(p => (Object.assign(Object.assign({}, p), { target: t, plan: Object.assign(Object.assign({}, (p.plan || {})), pl) }))) } }),
            tab !== 'over' && React.createElement(Mates_1.MateStrip, { p: p, tab: tab === 'parts' ? sub : props.pick === 'gate' ? 'gate' : tab, act: props.act }),
            tab === 'work' && React.createElement("div", { className: "axw-main" },
                React.createElement("div", { style: { minWidth: 0 } },
                    React.createElement(StageList, { p: p, k: k, pick: props.pick, setPick: props.setPick })),
                React.createElement("div", { className: 'axw-panel' + (props.pick ? ' sheet' : ''), style: Object.assign({}, ui_1.card) }, props.pick === 'gate' && s.gate ? React.createElement(GatePanel, { key: 'g' + s.id, p: p, s: s, open: (0, work_1.unlocked)(p, k), who: who, update: update, onClose: () => props.setPick(undefined) })
                    : props.pick && s.docs.filter(d => d.key === props.pick).length ? React.createElement(ItemPanel, { key: props.pick, p: p, s: s, k: k, dkey: props.pick, who: who, update: update, onClose: () => props.setPick(undefined) })
                        : React.createElement(StageSummary, { p: p, k: k }))),
            tab === 'parts' && React.createElement(React.Fragment, null,
                React.createElement("div", { "data-ax-subs": true, style: { display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 } }, subs.map(t => React.createElement("button", { key: t[0], "data-ax-sub": t[0], onClick: () => setSub(t[0]), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '5px 12px', background: sub === t[0] ? ui_1.C.text : ui_1.C.card, color: sub === t[0] ? ui_1.C.inv : ui_1.C.sub, borderColor: sub === t[0] ? ui_1.C.text : ui_1.C.line2 }) },
                    t[1],
                    " ",
                    React.createElement("span", { style: { opacity: 0.6 } }, t[2])))),
                React.createElement(Items_1.ItemDetail, { key: sub, p: p, items: props.items, who: who, update: update, onPick: props.onPick, onProject: () => go('work'), only: sub })),
            tab === 'lanes' && React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: 14 } },
                React.createElement(Work139_1.LaneBoard, { p: p, onOpen: toWork }),
                React.createElement(Dash_1.ProjectSchedule, { p: p, who: who, update: update, onOpen: toWork })),
            tab === 'log' && React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
                React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { padding: 14 }) },
                    React.createElement("div", { style: { fontWeight: 700, marginBottom: 8 } }, "\uC774\uC288\u00B7\uB9AC\uC2A4\uD06C"),
                    props.pick === 'issue-new' && React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { marginBottom: 12 }) },
                        React.createElement(IssueForm, { p: p, who: who, update: update, onClose: () => props.setPick(undefined) })),
                    React.createElement(Issues, { p: p, who: who, update: update, onNew: () => props.setPick('issue-new') })),
                React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { padding: 14 }) },
                    React.createElement("div", { style: { fontWeight: 700, marginBottom: 8 } }, "\uC0AC\uC591 \uBCC0\uACBD"),
                    React.createElement(Changes, { p: p, who: who, update: update })),
                React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { padding: 14 }) },
                    React.createElement("div", { style: { fontWeight: 700, marginBottom: 8 } }, "\uC0AC\uC804 \uAC80\uD1A0 \uC9C8\uBB38"),
                    React.createElement(Asks, { p: p, who: who, update: update })),
                React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { padding: 14 }) },
                    React.createElement("div", { style: { fontWeight: 700, marginBottom: 8 } }, "\uAE30\uB85D"),
                    React.createElement(Log, { p: p, who: who, update: update }))))));
}
// 일정 바 하나 — 단계마다 계획·실제·지연, 관문 G1~G3는 단계 끝에 작은 표시. 누르면 그 단계로
function Rail(props) {
    const { p } = props;
    return (React.createElement("div", { "data-ax-rail": true, className: "axw-rail", style: Object.assign(Object.assign({}, ui_1.card), { marginTop: 16, padding: 4 }) }, (0, work_1.stagesOf)(p).map((s, i) => {
        const f = (0, work_1.perf)(p, i);
        const on = i === props.k;
        const op = (0, work_1.unlocked)(p, i);
        const bar = f.state === 'done' ? ui_1.C.text : f.state === 'doing' ? (f.late ? ui_1.C.late : ui_1.C.accent) : ui_1.C.line;
        const g = s.gate ? (0, work_1.gateState)(p, s) : 'none';
        return (React.createElement("button", { key: s.id, "data-ax-rail-stage": s.id, onClick: () => props.onPick(i), style: { flex: 1, minWidth: 0, textAlign: 'left', border: 'none', background: on ? ui_1.C.hover : 'transparent', borderRadius: 7, padding: '10px 10px 9px', cursor: 'pointer', position: 'relative', boxShadow: on ? `inset 0 0 0 1px ${ui_1.C.line2}` : 'none' } },
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 4 } },
                React.createElement("span", { style: { flex: 1, height: 4, borderRadius: 2, background: bar } }),
                s.gate && React.createElement("span", { "data-ax-gate-mark": (0, work_1.gateKey)(s.gate), "data-ax-gate-state": g, title: `${s.gate} · ${g === 'approved' ? '승인됨' : g === 'requested' ? '승인 대기' : g === 'rejected' ? '반려됨' : '승인 전'}`, style: { fontSize: 10, fontWeight: 700, lineHeight: '14px', padding: '0 4px', borderRadius: 3, border: `1px solid ${g === 'approved' ? ui_1.C.text : g === 'requested' ? ui_1.C.soon : g === 'rejected' ? ui_1.C.late : ui_1.C.line2}`, color: g === 'approved' ? ui_1.C.inv : g === 'requested' ? ui_1.C.soon : g === 'rejected' ? ui_1.C.late : ui_1.C.faint, background: g === 'approved' ? ui_1.C.text : 'transparent' } }, (0, work_1.gateKey)(s.gate).toUpperCase())),
            React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: op ? ui_1.C.text : ui_1.C.lock, marginTop: 8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
                s.no,
                " ",
                (0, work_1.stagesOf)(p)[i].short),
            React.createElement("div", { style: { fontSize: 11.5, color: ui_1.C.faint, whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums', marginTop: 1 } },
                "\uACC4\uD68D ",
                (0, ui_1.md)(f.plan),
                f.actual ? ` · 실제 ${(0, ui_1.md)(f.actual)}` : ''),
            React.createElement("div", { style: { fontSize: 11.5, fontWeight: 600, marginTop: 1, whiteSpace: 'nowrap', color: f.late ? ui_1.C.late : f.state === 'done' ? ui_1.C.ok : f.state === 'doing' ? ui_1.C.accent : ui_1.C.lock } }, f.state === 'done' ? (f.late ? `완료 · ${f.late}일 늦음` : '완료') : f.state === 'doing' ? (f.late ? `${f.late}일 지연` : '진행 중') : '잠김')));
    })));
}
// 산출물 한 줄 행 — 이름 · 담당 · 마감 · 상태 점 · 파일
function StageList(props) {
    const { p, k } = props;
    const s = (0, work_1.stagesOf)(p)[k];
    const op = (0, work_1.unlocked)(p, k);
    const n = (0, work_1.stageDocsOk)(p, s);
    const end = (p.plan || {})[s.id];
    const api = React.useContext(Dash_1.AiCtx);
    return (React.createElement("div", { "data-ax-stage": s.id, style: ui_1.card },
        React.createElement("div", { style: { display: 'flex', alignItems: 'baseline', gap: 10, padding: '12px 14px', borderBottom: `1px solid ${ui_1.C.line}`, flexWrap: 'wrap' } },
            React.createElement("span", { style: { fontSize: 15, fontWeight: 700 } },
                s.no,
                " ",
                s.name),
            React.createElement("span", { style: { fontSize: 12.5, color: ui_1.C.faint } },
                "\uC0B0\uCD9C\uBB3C ",
                n,
                "/",
                s.docs.length),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement(ui_1.Tip, { t: s.focus })),
        !op && React.createElement("div", { "data-ax-locked": true, style: { padding: '9px 14px', fontSize: 12.5, color: ui_1.C.sub, borderBottom: `1px solid ${ui_1.C.line}`, display: 'flex', gap: 8, alignItems: 'center', background: ui_1.C.bg } },
            React.createElement(ui_1.Dot, { s: "lock", size: 7 }),
            "\uC7A0\uAE34 \uB2E8\uACC4",
            React.createElement(ui_1.Tip, { t: "\uC55E \uB2E8\uACC4 \uC0B0\uCD9C\uBB3C\uACFC \uAD00\uBB38 \uC2B9\uC778\uC774 \uB05D\uB098\uBA74 \uC5F4\uB824\uC694. \uB2F4\uB2F9\u00B7\uB9C8\uAC10\uC740 \uBBF8\uB9AC \uC815\uD560 \uC218 \uC788\uC5B4\uC694." })),
        React.createElement("div", { className: "axw-hide-sm", style: { display: 'flex', gap: 12, padding: '7px 14px', fontSize: 11.5, color: ui_1.C.faint, fontWeight: 600, borderBottom: `1px solid ${ui_1.C.line}` } },
            React.createElement("span", { style: { width: 8 } }),
            React.createElement("span", { style: { flex: 1 } }, "\uC0B0\uCD9C\uBB3C"),
            React.createElement("span", { style: { width: 84 } }, "\uB2F4\uB2F9"),
            React.createElement("span", { style: { width: 118 } }, "\uB9C8\uAC10"),
            React.createElement("span", { style: { width: 14 } })),
        React.createElement("div", null,
            s.docs.map(d => {
                const st = p.docs[d.key] || {};
                const ok = (0, work_1.docOk)(st);
                const due = st.due || end;
                const left = (0, ax_1.daysTo)(due);
                const aj = ((p.aiJobs || []).filter(j => j.doc === d.key && j.state !== 'dismissed').slice(-1))[0];
                const dot = st.done ? 'done' : st.skip ? 'skip' : !op ? 'lock' : left !== undefined && left < 0 ? 'late' : left !== undefined && left <= 7 ? 'soon' : 'open';
                return (React.createElement("div", { key: d.key, className: 'axw-row' + (props.pick === d.key ? ' on' : ''), "data-ax-item": d.key, "data-ax-item-state": st.done ? 'done' : st.skip ? 'skip' : 'todo', onClick: () => props.setPick(d.key) },
                    React.createElement(ui_1.Dot, { s: dot }),
                    React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 500, color: ok ? ui_1.C.faint : ui_1.C.text, textDecoration: st.skip ? 'line-through' : 'none' } }, d.label),
                    React.createElement("span", { "data-ax-doc-owner": st.ai ? 'ai' : 'human', style: { width: 84, fontSize: 13, color: st.who ? ui_1.C.sub : ui_1.C.faint, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, st.ai ? React.createElement("span", { style: { background: ui_1.C.accentBg, color: ui_1.C.accent, fontWeight: 800, fontSize: 11, borderRadius: 5, padding: '2px 6px' } }, "AI") : st.who || '미정'),
                    React.createElement("span", { style: { width: 118, flex: '0 0 auto', textAlign: 'right' } }, st.done ? React.createElement("span", { style: { fontSize: 12.5, color: ui_1.C.ok, fontWeight: 600 } }, "\uC644\uB8CC") : st.skip ? React.createElement("span", { style: { fontSize: 12.5, color: ui_1.C.faint } }, "\uD544\uC694 \uC5C6\uC74C")
                        : aj && (0, ai_1.jobState)(aj) === 'review' ? React.createElement("button", { "data-ax-doc-review": true, onClick: e => { e.stopPropagation(); if (api)
                                api.open(p.id, aj.id); }, style: Object.assign(Object.assign({}, ui_1.primary), { padding: '3px 10px', fontSize: 12.5 }) }, "\uD655\uC778\uD558\uAE30")
                            : aj && ['running', 'queued', 'offline'].indexOf((0, ai_1.jobState)(aj)) >= 0 ? React.createElement("span", { style: { fontSize: 12.5, color: ui_1.C.accent, fontWeight: 600 } }, "AI \uC4F0\uB294 \uC911") : React.createElement(ui_1.Due, { due: due })),
                    React.createElement(ui_1.FileIcon, { on: !!st.link })));
            }),
            s.gate && (() => {
                const g = (0, work_1.gateState)(p, s);
                return (React.createElement("div", { className: 'axw-row' + (props.pick === 'gate' ? ' on' : ''), "data-ax-gate-row": (0, work_1.gateKey)(s.gate), onClick: () => props.setPick('gate'), style: { background: props.pick === 'gate' ? undefined : ui_1.C.bg } },
                    React.createElement(ui_1.Dot, { s: g === 'approved' ? 'done' : g === 'requested' ? 'wait' : g === 'rejected' ? 'late' : 'open' }),
                    React.createElement("span", { style: { flex: 1, minWidth: 0, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                        s.gate,
                        s.gateRule && React.createElement(ui_1.Tip, { t: s.gateRule })),
                    React.createElement(Gate_1.GatePill, { p: p, s: s }),
                    React.createElement("span", { style: { fontSize: 12.5, color: g === 'approved' ? ui_1.C.ok : g === 'requested' ? ui_1.C.soon : g === 'rejected' ? ui_1.C.late : ui_1.C.faint, fontWeight: 600 } }, g === 'approved' ? '승인됨' : g === 'requested' ? '승인 대기' : g === 'rejected' ? '반려됨' : n < s.docs.length ? `산출물 ${s.docs.length - n}개 남음` : (0, item_1.gateChecks)(p, s).every(c => c.ok) ? '승인 요청 가능' : `기준 ${(0, item_1.gateChecks)(p, s).filter(c => !c.ok).length}개 남음`)));
            })())));
}
// 오른쪽 패널 — 산출물 하나 고치기 (입력·버튼은 여기에만)
function ItemPanel(props) {
    const { p, s, dkey, who, update } = props;
    const d = s.docs.filter(x => x.key === dkey)[0];
    const st = p.docs[dkey] || {};
    const op = (0, work_1.unlocked)(p, props.k);
    const [owner, setOwner] = React.useState(st.who || '');
    const [link, setLink] = React.useState(st.link || '');
    const [skipping, setSkipping] = React.useState(false);
    const [why, setWhy] = React.useState('');
    const set = (patch, what) => update(x => (Object.assign(Object.assign({}, x), { docs: Object.assign(Object.assign({}, x.docs), { [dkey]: Object.assign(Object.assign({}, (x.docs[dkey] || {})), patch) }), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'doc', what: `${d.label} — ${what}` }]) })));
    const hist = p.log.filter(l => l.what.indexOf(d.label + ' — ') === 0).slice(-5).reverse();
    return (React.createElement("div", { "data-ax-item-panel": dkey },
        React.createElement("div", { style: { padding: '10px 16px 0', display: 'flex', justifyContent: 'flex-end' } },
            React.createElement(Dash_1.AiButton, { pid: p.id, kinds: ['draft'], label: "AI \uCD08\uC548", preset: s.docs.filter(x => x.key === dkey).map(x => x.label)[0], small: true })),
        React.createElement(ui_1.PanelHead, { title: d.label, sub: `${s.no} ${s.name} · ${d.proc}`, onClose: props.onClose }),
        React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 14 } },
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600 } },
                React.createElement(ui_1.Dot, { s: st.done ? 'done' : st.skip ? 'skip' : op ? 'open' : 'lock' }),
                st.done ? `완료 · ${st.by || ''} ${(0, ax_1.fmt)(st.at)}` : st.skip ? `필요 없음 — ${st.skip}` : op ? '진행 전' : '잠긴 단계'),
            React.createElement("div", { "data-ax-doc-who": true, style: { display: 'flex', gap: 6, alignItems: 'center' } },
                React.createElement("span", { style: Object.assign(Object.assign({}, ui_1.label), { marginRight: 4 }) }, "\uB204\uAC00 \uD558\uB098\uC694"),
                React.createElement("button", { "data-ax-doc-human": true, onClick: () => set({ ai: undefined }, '담당 사람으로'), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '4px 10px', background: !st.ai ? ui_1.C.text : ui_1.C.card, color: !st.ai ? ui_1.C.inv : ui_1.C.sub }) }, "\uC0AC\uB78C"),
                React.createElement("button", { "data-ax-doc-ai": true, onClick: () => { if (st.ai)
                        return; update(x => { const y = Object.assign(Object.assign({}, x), { docs: Object.assign(Object.assign({}, x.docs), { [dkey]: Object.assign(Object.assign({}, (x.docs[dkey] || {})), { ai: true }) }), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'doc', what: `${d.label} — AI에게 맡김` }]) }); return op ? (0, auto_1.addJobs)(y, (0, auto_1.aiDocTasks)(y, props.k, dkey), who) : y; }); }, style: Object.assign(Object.assign({}, ui_1.btn), { padding: '4px 10px', background: st.ai ? ui_1.C.accent : ui_1.C.card, color: st.ai ? ui_1.C.inv : ui_1.C.accent, borderColor: ui_1.C.accent }) }, "AI\uC5D0\uAC8C \uB9E1\uAE30\uAE30")),
            st.ai && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.sub } }, op ? 'AI가 초안을 쓰고, 다 되면 「오늘」과 이 줄의 「확인하기」로 올라와요. 확인하고 승인하면 완료돼요.' : '이 단계가 열리면 AI가 바로 초안을 써요.'),
            React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } },
                React.createElement(ui_1.Field, { l: "\uB2F4\uB2F9" },
                    React.createElement("input", { "data-ax-item-who": true, value: owner, placeholder: "\uC774\uB984", onChange: e => setOwner(e.target.value), onBlur: () => { const v = owner.trim(); if (v !== (st.who || ''))
                            set({ who: v || undefined }, `담당 ${v || '비움'}`); }, style: ui_1.inp })),
                React.createElement(ui_1.Field, { l: "\uB9C8\uAC10" },
                    React.createElement("input", { "data-ax-item-due": true, type: "date", value: st.due || '', onChange: e => set({ due: e.target.value || undefined }, `마감 ${e.target.value || '비움'}`), style: ui_1.inp }))),
            React.createElement(ui_1.Field, { l: "\uD30C\uC77C (SharePoint \uB9C1\uD06C)" },
                React.createElement("div", { style: { display: 'flex', gap: 6 } },
                    React.createElement("input", { "data-ax-item-link": true, value: link, placeholder: "\uB9C1\uD06C \uBD99\uC5EC\uB123\uAE30", onChange: e => setLink(e.target.value), onBlur: () => { const v = link.trim(); if (v !== (st.link || ''))
                            set({ link: v || undefined, by: v ? who : undefined, at: v ? (0, ui_1.nowIso)() : undefined }, v ? '파일 링크 붙임' : '파일 링크 뺌'); }, style: ui_1.inp }),
                    st.link && React.createElement("a", { "data-ax-item-open": true, href: st.link, target: "_blank", rel: "noopener noreferrer", style: Object.assign(Object.assign({}, ui_1.btn), { textDecoration: 'none' }) }, "\uC5F4\uAE30")),
                st.link && st.by && React.createElement("span", { style: { fontSize: 12, color: ui_1.C.faint } },
                    "\uC62C\uB9B0 \uC0AC\uB78C ",
                    st.by,
                    " \u00B7 ",
                    (0, ax_1.fmt)(st.at))),
            !skipping ? React.createElement("div", { style: { display: 'flex', gap: 8 } },
                React.createElement("button", { "data-ax-item-done": true, disabled: !op || !!st.skip, onClick: () => set({ done: !st.done, by: st.by || who, at: st.at || (0, ui_1.nowIso)() }, st.done ? '완료 취소' : '완료'), style: Object.assign(Object.assign({}, (st.done ? ui_1.btn : ui_1.primary)), { flex: 1, opacity: !op || st.skip ? 0.4 : 1, cursor: !op || st.skip ? 'not-allowed' : 'pointer' }) }, st.done ? '완료 취소' : '완료로 표시'),
                React.createElement("button", { "data-ax-item-skip": true, disabled: !op || !!st.done, onClick: () => (st.skip ? set({ skip: undefined }, '필요 없음 취소') : setSkipping(true)), style: Object.assign(Object.assign({}, ui_1.btn), { opacity: !op || st.done ? 0.4 : 1 }) }, st.skip ? '되돌리기' : '필요 없음')) : React.createElement("div", { style: { display: 'flex', gap: 6 } },
                React.createElement("input", { "data-ax-item-why": true, autoFocus: true, placeholder: "\uD544\uC694 \uC5C6\uB294 \uC774\uC720", value: why, onChange: e => setWhy(e.target.value), style: ui_1.inp }),
                React.createElement("button", { "data-ax-item-why-ok": true, disabled: !why.trim(), onClick: () => { set({ skip: why.trim() }, `필요 없음 — ${why.trim()}`); setSkipping(false); setWhy(''); }, style: Object.assign(Object.assign({}, ui_1.primary), { opacity: why.trim() ? 1 : 0.4 }) }, "\uD655\uC778"),
                React.createElement("button", { onClick: () => setSkipping(false), style: ui_1.btn }, "\uCDE8\uC18C")),
            hist.length > 0 && React.createElement("div", null,
                React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { marginBottom: 4 }) }, "\uAE30\uB85D"),
                hist.map((l, i) => React.createElement("div", { key: i, style: { fontSize: 12, color: ui_1.C.sub, padding: '3px 0' } },
                    React.createElement("span", { style: { color: ui_1.C.faint } }, (0, ax_1.fmt)(l.at)),
                    " ",
                    l.who,
                    " \u00B7 ",
                    l.what.slice(d.label.length + 3)))))));
}
// 오른쪽 패널 — 관문 승인 요청 → 승인/반려, 누가 언제 했는지 쌓임
function GatePanel(props) {
    const { p, s, who, update } = props;
    const gate = s.gate;
    const g = (0, work_1.gateState)(p, s);
    const checks = (0, item_1.gateChecks)(p, s);
    const docsReady = (0, work_1.stageDocsOk)(p, s) === s.docs.length;
    const ready = docsReady && checks.every(c => c.ok);
    const [note, setNote] = React.useState('');
    const sx = React.useContext(Shell_1.SetCtx);
    const extra = sx && props.s.gate ? (sx.org.approvers || {})[props.s.gate.split(' ')[0].toUpperCase()] : undefined;
    const isApprover = !p.approver || p.approver.replace(/\s/g, '') === who.replace(/\s/g, '') || (!!extra && extra.replace(/\s/g, '') === who.replace(/\s/g, '')); // 1.0.147 관문 승인자도
    const held = (0, work_1.isHeld)(p, gate);
    const act = (kind) => {
        update(x => (Object.assign(Object.assign({}, x), { approvals: (x.approvals || []).concat([{ gate, kind, at: (0, ui_1.nowIso)(), who, note: note.trim() || undefined }]), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'gate', what: `${gate} ${kind === 'request' ? '승인 요청' : kind === 'approve' ? '승인' : kind === 'hold' ? '보류' : '반려'}${note.trim() ? ` — ${note.trim()}` : ''}` }]) })));
        setNote('');
    };
    const hist = (p.approvals || []).filter(a => (0, work_1.sameGate)(a.gate, gate));
    const la = (0, work_1.lastApproval)(p, gate);
    const msg = `[AX-PLM] ${p.name} ${gate} 승인 부탁드려요. ${(0, ui_1.pageUrl)()}`;
    return (React.createElement("div", { "data-ax-boss-card": (0, work_1.gateKey)(gate), "data-ax-boss": (0, work_1.gateKey)(gate), "data-ax-boss-state": g },
        React.createElement(ui_1.PanelHead, { title: gate, sub: `승인자 ${p.approver || '없음 — 설정에서 지정'}`, onClose: props.onClose }),
        React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 } },
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600 } },
                React.createElement(ui_1.Dot, { s: g === 'approved' ? 'done' : g === 'requested' ? 'wait' : g === 'rejected' ? 'late' : 'open' }),
                g === 'approved' ? `승인됨${la ? ` · ${la.who} ${(0, ax_1.fmt)(la.at)}` : ''}` : g === 'requested' ? (held ? `보류 — ${la && la.note ? la.note : '사유 없음'} · ${la ? la.who : ''}` : `승인 대기${la ? ` · ${la.who} ${(0, ax_1.fmt)(la.at)} 요청` : ''}`) : g === 'rejected' ? `반려됨 — ${la && la.note ? la.note : '사유 없음'}` : ready ? '승인 요청할 수 있어요' : !docsReady ? `산출물 ${s.docs.length - (0, work_1.stageDocsOk)(p, s)}개를 채우면 요청할 수 있어요` : '아래 승인 기준을 채우면 요청할 수 있어요'),
            React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end' } },
                React.createElement(Dash_1.AiButton, { pid: p.id, kinds: ['gate'], label: "AI \uAE30\uC900 \uC810\uAC80\u00B7\uC694\uCCAD \uAE00", small: true })),
            React.createElement("div", { "data-ax-gate-rule": true, style: { fontSize: 12.5, color: ui_1.C.sub } },
                React.createElement("span", { style: Object.assign({}, ui_1.label) },
                    (0, devtype_1.typeInfo)((0, devtype_1.typeOf)(p)).tag,
                    " \uC2B9\uC778 \uAE30\uC900"),
                React.createElement("div", { style: { marginTop: 3 } }, s.gateRule || '단계 산출물 모두 채움')),
            checks.length > 0 && React.createElement("div", { "data-ax-gate-checks": true }, checks.map((c, i) => React.createElement("div", { key: i, "data-ax-gate-check": c.ok ? 'ok' : 'no', style: { display: 'flex', gap: 8, alignItems: 'center', fontSize: 12.5, padding: '3px 0', color: c.ok ? ui_1.C.sub : ui_1.C.text } },
                React.createElement(ui_1.Dot, { s: c.ok ? 'done' : 'open', size: 7 }),
                c.label))),
            props.open && g !== 'approved' && React.createElement(React.Fragment, null,
                React.createElement("input", { "data-ax-gate-note": true, placeholder: g === 'requested' ? '의견 (보류·반려는 필수)' : '요청 메모', value: note, onChange: e => setNote(e.target.value), style: ui_1.inp }),
                React.createElement("div", { style: { display: 'flex', gap: 8, flexWrap: 'wrap' } },
                    (g === 'wait' || g === 'rejected') && React.createElement("button", { "data-ax-gate-request": true, disabled: !ready, onClick: () => act('request'), style: Object.assign(Object.assign({}, ui_1.primary), { flex: 1, opacity: ready ? 1 : 0.4 }) }, "\uC2B9\uC778 \uC694\uCCAD"),
                    g === 'requested' && React.createElement("button", { "data-ax-gate-approve": true, disabled: !isApprover, title: isApprover ? '' : `승인자(${p.approver})만 승인할 수 있어요`, onClick: () => act('approve'), style: Object.assign(Object.assign({}, ui_1.primary), { flex: 1, opacity: isApprover ? 1 : 0.4 }) }, "\uC2B9\uC778"),
                    g === 'requested' && !held && React.createElement("button", { "data-ax-gate-hold": true, disabled: !isApprover || !note.trim(), title: "\uACB0\uC815\uC744 \uBBF8\uB8F8 \u2014 \uC0AC\uC720\uB97C \uC801\uC5B4 \uC8FC\uC138\uC694", onClick: () => act('hold'), style: Object.assign(Object.assign({}, ui_1.btn), { opacity: isApprover && note.trim() ? 1 : 0.4 }) }, "\uBCF4\uB958"),
                    g === 'requested' && held && React.createElement("button", { "data-ax-gate-rerequest": true, disabled: !ready, onClick: () => act('request'), style: Object.assign(Object.assign({}, ui_1.btn), { opacity: ready ? 1 : 0.4 }) }, "\uBCF4\uC644\uD574\uC11C \uB2E4\uC2DC \uC694\uCCAD"),
                    g === 'requested' && React.createElement("button", { "data-ax-gate-reject": true, disabled: !isApprover || !note.trim(), onClick: () => act('reject'), style: Object.assign(Object.assign({}, ui_1.btn), { color: ui_1.C.late, opacity: isApprover && note.trim() ? 1 : 0.4 }) }, "\uBC18\uB824")),
                g === 'requested' && (p.approverMail ? React.createElement("a", { "data-ax-gate-teams": true, href: (0, ui_1.teamsChat)(p.approverMail, msg), target: "_blank", rel: "noopener noreferrer", style: Object.assign(Object.assign({}, ui_1.btn), { textDecoration: 'none', textAlign: 'center' }) }, "Teams\uB85C \uC2B9\uC778\uC790\uC5D0\uAC8C \uC54C\uB9AC\uAE30") : React.createElement("span", { style: { fontSize: 12, color: ui_1.C.faint } }, "\uC124\uC815\uC5D0 \uC2B9\uC778\uC790 \uBA54\uC77C\uC744 \uB123\uC73C\uBA74 Teams\uB85C \uC54C\uB9B4 \uC218 \uC788\uC5B4\uC694."))),
            g === 'approved' && props.open && React.createElement("button", { "data-ax-gate-undo": true, disabled: !isApprover, onClick: () => act('reject'), style: Object.assign(Object.assign({}, ui_1.btn), { alignSelf: 'flex-start', opacity: isApprover ? 1 : 0.4 }) }, "\uC2B9\uC778 \uCDE8\uC18C"),
            hist.length > 0 && React.createElement("div", null,
                React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { marginBottom: 4 }) }, "\uC2B9\uC778 \uAE30\uB85D"),
                hist.slice().reverse().map((a, i) => React.createElement("div", { key: i, style: { fontSize: 12.5, color: ui_1.C.sub, padding: '4px 0', borderTop: i ? `1px solid ${ui_1.C.line}` : 'none' } },
                    React.createElement("span", { style: { color: ui_1.C.faint, fontVariantNumeric: 'tabular-nums' } }, (0, ax_1.fmt)(a.at)),
                    " ",
                    a.who,
                    " \u00B7 ",
                    a.kind === 'request' ? '요청' : a.kind === 'approve' ? '승인' : '반려',
                    a.note ? ` — ${a.note}` : ''))))));
}
// 패널 기본 — 이 단계 요약(계획 대비 실적·사람/AI 할 일·규제)
function StageSummary(props) {
    const { p, k } = props;
    const s = (0, work_1.stagesOf)(p)[k];
    const f = (0, work_1.perf)(p, k);
    const row = (a, b) => React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', gap: 10, fontSize: 13, padding: '5px 0' } },
        React.createElement("span", { style: { color: ui_1.C.faint } }, a),
        React.createElement("span", { style: { fontVariantNumeric: 'tabular-nums', textAlign: 'right' } }, b));
    return (React.createElement("div", { "data-ax-summary": true },
        React.createElement("div", { style: { padding: '14px 16px', borderBottom: `1px solid ${ui_1.C.line}` } },
            React.createElement("div", { style: { fontWeight: 700, fontSize: 15 } },
                s.no,
                " ",
                s.name,
                React.createElement(ui_1.Tip, { t: "\uC0B0\uCD9C\uBB3C \uD589\uC744 \uB204\uB974\uBA74 \uC5EC\uAE30\uC11C \uACE0\uCCD0\uC694" }))),
        React.createElement("div", { style: { padding: '10px 16px 14px' } },
            row('계획 완료일', (0, ui_1.md)(f.plan)),
            row('실제 완료일', (0, ui_1.md)(f.actual)),
            row('지연', f.late ? React.createElement("span", { style: { color: ui_1.C.late, fontWeight: 700 } },
                f.late,
                "\uC77C") : '—'),
            row('산출물', `${(0, work_1.stageDocsOk)(p, s)} / ${s.docs.length}`),
            React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { margin: '12px 0 4px' }) }, "\uC0AC\uB78C\uC774 \uD560 \uC77C"),
            React.createElement("div", { style: { fontSize: 13, color: ui_1.C.sub } }, (s.human || []).join(' · ')),
            React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.faint, marginTop: 12, display: 'flex', alignItems: 'center' } },
                "\uB2F4\uB2F9 AI",
                React.createElement(ui_1.Tip, { t: "\uB2F4\uB2F9\uC774 \u300CAI\u300D\uC778 \uC904\uC740 AI\uAC00 \uCD08\uC548\uC744 \uC4F0\uACE0, \uB2E4 \uB418\uBA74 \u300C\uD655\uC778\uD558\uAE30\u300D\uAC00 \uB5A0\uC694. \uADDC\uC81C\u00B7\uC778\uC99D \uC810\uAC80\uB3C4 AI\uAC00 \uCC59\uACA8\uC11C \uD648\uC73C\uB85C \uC62C\uB824\uC694." })))));
}
function Settings(props) {
    const { p } = props;
    const [v, setV] = React.useState({ name: p.name, owner: p.owner || '', approver: p.approver || '', approverMail: p.approverMail || '', start: p.start || '', target: p.target || '' });
    const f = (k, l, type = 'text', w = 150) => React.createElement("label", { style: { display: 'flex', flexDirection: 'column', gap: 5, width: w } },
        React.createElement("span", { style: ui_1.label }, l),
        React.createElement("input", { "data-ax-set": k, type: type, value: v[k], onChange: e => setV(Object.assign(Object.assign({}, v), { [k]: e.target.value })), style: ui_1.inp }));
    const save = () => props.update(x => {
        const ch = [];
        Object.keys(v).forEach(k => { if ((x[k] || '') !== v[k])
            ch.push(k); });
        const plan = (v.start && v.target && (v.start !== x.start || v.target !== x.target)) ? (0, ax_1.suggestPlan)(v.start, v.target) : x.plan;
        return Object.assign(Object.assign({}, x), { name: v.name || x.name, owner: v.owner || undefined, approver: v.approver || undefined, approverMail: v.approverMail || undefined, start: v.start || undefined, target: v.target || undefined, plan, log: ch.length ? x.log.concat([{ at: (0, ui_1.nowIso)(), who: props.who, kind: 'edit', what: `프로젝트 정보 바꿈 (${ch.join(', ')})` }]) : x.log });
    });
    const setPlan = (sid, d) => props.update(x => (Object.assign(Object.assign({}, x), { plan: Object.assign(Object.assign({}, (x.plan || {})), { [sid]: d }), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who: props.who, kind: 'edit', what: `${(0, work_1.stagesOf)(p).filter(s => s.id === sid)[0].name} 계획일 ${d}` }]) })));
    return (React.createElement("div", { "data-ax-settings": true, style: Object.assign(Object.assign({}, ui_1.card), { marginTop: 14, padding: 16 }) },
        React.createElement("div", { style: { display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-end' } },
            f('name', '프로젝트 이름', 'text', 220),
            f('owner', 'PM'),
            f('approver', '관문 승인자'),
            f('approverMail', '승인자 메일 (Teams 알림)', 'email', 210),
            f('start', '시작일', 'date'),
            f('target', '출시 목표일', 'date'),
            React.createElement("button", { "data-ax-set-save": true, onClick: save, style: ui_1.primary }, "\uC800\uC7A5")),
        React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { margin: '16px 0 6px' }) },
            "\uB2E8\uACC4\uBCC4 \uACC4\uD68D \uC644\uB8CC\uC77C",
            React.createElement(ui_1.Tip, { t: "\uC2DC\uC791\uC77C\u00B7\uCD9C\uC2DC \uBAA9\uD45C\uC77C\uC744 \uBC14\uAFB8\uBA74 \uC790\uB3D9\uC73C\uB85C \uB2E4\uC2DC \uB098\uB220\uC694" })),
        React.createElement("div", { style: { display: 'flex', gap: 10, flexWrap: 'wrap' } }, (0, work_1.stagesOf)(p).map((s, i) => React.createElement("label", { key: s.id, style: { display: 'flex', flexDirection: 'column', gap: 4, width: 140 } },
            React.createElement("span", { style: { fontSize: 11.5, color: ui_1.C.faint } },
                s.no,
                " ",
                (0, work_1.stagesOf)(p)[i].short),
            React.createElement("input", { "data-ax-plan": s.id, type: "date", value: (p.plan || {})[s.id] || '', onChange: e => e.target.value && setPlan(s.id, e.target.value), style: ui_1.inp }))))));
}
function IssueForm(props) {
    const { p, who, update } = props;
    const [v, setV] = React.useState({ kind: '이슈', text: '', owner: '', due: '' });
    const addI = () => {
        if (!v.text.trim())
            return;
        const i = { id: (0, ui_1.uid)('i'), kind: v.kind, text: v.text.trim(), owner: v.owner.trim() || undefined, due: v.due || undefined, at: (0, ui_1.nowIso)(), who, stage: (0, work_1.stagesOf)(p)[(0, work_1.curIdx)(p)].id };
        update(x => (Object.assign(Object.assign({}, x), { issues: (x.issues || []).concat([i]), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'note', what: `${i.kind} 등록 — ${i.text}` }]) })));
        props.onClose();
    };
    return (React.createElement("div", { "data-ax-issue-form": true },
        React.createElement(ui_1.PanelHead, { title: "\uC774\uC288\u00B7\uB9AC\uC2A4\uD06C \uB4F1\uB85D", tip: `${(0, work_1.stagesOf)(p)[(0, work_1.curIdx)(p)].no} ${(0, work_1.stagesOf)(p)[(0, work_1.curIdx)(p)].name} 단계로 기록돼요`, onClose: props.onClose }),
        React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 } },
            React.createElement(ui_1.Field, { l: "\uC885\uB958" },
                React.createElement("select", { "data-ax-issue-kind": true, value: v.kind, onChange: e => setV(Object.assign(Object.assign({}, v), { kind: e.target.value })), style: ui_1.inp },
                    React.createElement("option", null, "\uC774\uC288"),
                    React.createElement("option", null, "\uB9AC\uC2A4\uD06C"))),
            React.createElement(ui_1.Field, { l: "\uB0B4\uC6A9" },
                React.createElement("input", { "data-ax-issue-text": true, autoFocus: true, placeholder: "\uBB34\uC2A8 \uBB38\uC81C\uC778\uC9C0", value: v.text, onChange: e => setV(Object.assign(Object.assign({}, v), { text: e.target.value })), onKeyDown: e => { if (e.key === 'Enter')
                        addI(); }, style: ui_1.inp })),
            React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } },
                React.createElement(ui_1.Field, { l: "\uB2F4\uB2F9" },
                    React.createElement("input", { "data-ax-issue-owner": true, placeholder: "\uC774\uB984", value: v.owner, onChange: e => setV(Object.assign(Object.assign({}, v), { owner: e.target.value })), style: ui_1.inp })),
                React.createElement(ui_1.Field, { l: "\uAE30\uD55C" },
                    React.createElement("input", { "data-ax-issue-due": true, type: "date", value: v.due, onChange: e => setV(Object.assign(Object.assign({}, v), { due: e.target.value })), style: ui_1.inp }))),
            React.createElement("button", { "data-ax-issue-add": true, disabled: !v.text.trim(), onClick: addI, style: Object.assign(Object.assign({}, ui_1.primary), { opacity: v.text.trim() ? 1 : 0.4 }) }, "\uB4F1\uB85D"))));
}
function Issues(props) {
    const { p, who, update } = props;
    const [showDone, setShowDone] = React.useState(false);
    const list = (p.issues || []).filter(i => showDone || !i.done);
    const toggle = (id) => update(x => {
        const it = (x.issues || []).filter(i => i.id === id)[0];
        return Object.assign(Object.assign({}, x), { issues: (x.issues || []).map(i => (i.id === id ? Object.assign(Object.assign({}, i), { done: !i.done, doneAt: i.done ? undefined : (0, ui_1.nowIso)() }) : i)), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'note', what: `${it ? it.text : ''} — ${it && it.done ? '다시 열림' : '해결'}` }]) });
    });
    return (React.createElement("div", { "data-ax-issues": true },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 } },
            React.createElement("button", { "data-ax-issue-new": true, onClick: props.onNew, style: ui_1.btn }, "+ \uC774\uC288 \uB4F1\uB85D"),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement("label", { style: { fontSize: 12, color: ui_1.C.faint, display: 'inline-flex', gap: 5, alignItems: 'center' } },
                React.createElement("input", { type: "checkbox", checked: showDone, onChange: e => setShowDone(e.target.checked) }),
                "\uD574\uACB0\uB41C \uAC83\uB3C4 \uBCF4\uAE30")),
        !list.length && React.createElement("div", { style: { color: ui_1.C.faint, fontSize: 13, padding: '8px 0' } }, "\uC5F4\uB9B0 \uC774\uC288\u00B7\uB9AC\uC2A4\uD06C\uAC00 \uC5C6\uC5B4\uC694."),
        list.map(i => (React.createElement("div", { key: i.id, "data-ax-issue": i.id, style: { display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderTop: `1px solid ${ui_1.C.line}`, opacity: i.done ? 0.5 : 1 } },
            React.createElement("input", { "data-ax-issue-done": true, type: "checkbox", checked: !!i.done, onChange: () => toggle(i.id) }),
            React.createElement("span", { style: { fontSize: 12, color: ui_1.C.faint, width: 38 } }, i.kind),
            React.createElement("span", { style: { flex: 1, minWidth: 0, textDecoration: i.done ? 'line-through' : 'none' } }, i.text),
            React.createElement("span", { className: "axw-hide-sm", style: { fontSize: 12.5, color: ui_1.C.sub, width: 70, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, i.owner || '미정'),
            !i.done && React.createElement(ui_1.Due, { due: i.due }))))));
}
function Changes(props) {
    const { p, who, update } = props;
    const [what, setWhat] = React.useState('');
    const [why, setWhy] = React.useState('');
    const addC = () => {
        if (!what.trim() || !why.trim())
            return;
        const c = { id: (0, ui_1.uid)('c'), at: (0, ui_1.nowIso)(), who, what: what.trim(), why: why.trim(), stage: (0, work_1.stagesOf)(p)[(0, work_1.curIdx)(p)].id };
        update(x => (Object.assign(Object.assign({}, x), { changes: (x.changes || []).concat([c]), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'edit', what: `사양 변경 — ${c.what} (${c.why})` }]) })));
        setWhat('');
        setWhy('');
    };
    return (React.createElement("div", { "data-ax-changes": true },
        React.createElement("div", { style: { display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 } },
            React.createElement("input", { "data-ax-change-what": true, placeholder: "\uBB34\uC5C7\uC744 \uBC14\uAFE8\uB098 (\uC608: \uC6A9\uB7C9 2L \u2192 2.5L)", value: what, onChange: e => setWhat(e.target.value), style: Object.assign(Object.assign({}, ui_1.inp), { flex: 1, minWidth: 200, width: 'auto' }) }),
            React.createElement("input", { "data-ax-change-why": true, placeholder: "\uC65C", value: why, onChange: e => setWhy(e.target.value), style: Object.assign(Object.assign({}, ui_1.inp), { flex: 1, minWidth: 160, width: 'auto' }) }),
            React.createElement("button", { "data-ax-change-add": true, disabled: !what.trim() || !why.trim(), onClick: addC, style: Object.assign(Object.assign({}, ui_1.primary), { opacity: what.trim() && why.trim() ? 1 : 0.4 }) }, "\uAE30\uB85D")),
        !(p.changes || []).length && React.createElement("div", { style: { color: ui_1.C.faint, fontSize: 13, padding: '8px 0' } }, "\uC0AC\uC591 \uBCC0\uACBD \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694."),
        (p.changes || []).slice().reverse().map(c => (React.createElement("div", { key: c.id, "data-ax-change": c.id, style: { padding: '9px 0', borderTop: `1px solid ${ui_1.C.line}` } },
            React.createElement("div", { style: { fontWeight: 600 } }, c.what),
            React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.faint } },
                c.why,
                " \u00B7 ",
                (0, work_1.stagesOf)(p).filter(s => s.id === c.stage).map(s => s.no)[0],
                " \u00B7 ",
                c.who,
                " \u00B7 ",
                (0, ax_1.fmt)(c.at)))))));
}
function Asks(props) {
    const { p, who, update } = props;
    const [t, setT] = React.useState('');
    const ask = () => {
        if (!t.trim())
            return;
        const a = { id: (0, ui_1.uid)('q'), at: (0, ui_1.nowIso)(), who, stage: (0, work_1.stagesOf)(p)[(0, work_1.curIdx)(p)].id, text: t.trim() };
        update(x => (Object.assign(Object.assign({}, x), { asks: (x.asks || []).concat([a]), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'note', what: `사전 검토 요청 — ${a.text}` }]) })));
        setT('');
    };
    return (React.createElement("div", { "data-ax-asks": true },
        React.createElement("div", { style: { display: 'flex', gap: 6, marginBottom: 8 } },
            React.createElement("input", { "data-ax-ask": true, placeholder: "\uBBF8\uB9AC \uD655\uC778\uD560 \uAC83 (\uC608: UV \uC0B4\uADE0 \uB123\uC73C\uBA74 \uAD11\uACE0\uC5D0 99.9% \uC368\uB3C4 \uB3FC?)", value: t, onChange: e => setT(e.target.value), onKeyDown: e => { if (e.key === 'Enter')
                    ask(); }, style: ui_1.inp }),
            React.createElement("button", { "data-ax-ask-send": true, onClick: ask, style: ui_1.primary }, "\uC694\uCCAD")),
        (p.asks || []).slice().reverse().map(a => (React.createElement("div", { key: a.id, style: { padding: '9px 0', borderTop: `1px solid ${ui_1.C.line}` } },
            React.createElement("div", { style: { fontWeight: 600 } },
                a.text,
                " ",
                React.createElement("span", { style: { fontSize: 12, color: ui_1.C.faint, fontWeight: 400 } },
                    "\u00B7 ",
                    a.who,
                    " \u00B7 ",
                    (0, ax_1.fmt)(a.at))),
            React.createElement("div", { style: { fontSize: 13, color: a.answer ? ui_1.C.sub : ui_1.C.soon, marginTop: 3 } }, a.answer ? `${a.answeredBy || 'AI'} — ${a.answer}` : '답 기다리는 중'))))));
}
function Log(props) {
    const [t, setT] = React.useState('');
    const addL = () => { if (!t.trim())
        return; const v = t.trim(); props.update(x => (Object.assign(Object.assign({}, x), { next: v, log: x.log.concat([{ at: (0, ui_1.nowIso)(), who: props.who, kind: 'note', what: v }]) }))); setT(''); };
    return (React.createElement("div", { "data-ax-log": true },
        React.createElement("div", { style: { display: 'flex', gap: 6, marginBottom: 8 } },
            React.createElement("input", { "data-ax-note": true, placeholder: "\uC9C4\uD589 \uC0C1\uD669 \uD55C \uC904", value: t, onChange: e => setT(e.target.value), onKeyDown: e => { if (e.key === 'Enter')
                    addL(); }, style: ui_1.inp }),
            React.createElement("button", { "data-ax-note-add": true, onClick: addL, style: ui_1.primary }, "\uB0A8\uAE30\uAE30")),
        props.p.log.slice().sort((x, y) => (x.at < y.at ? 1 : x.at > y.at ? -1 : 0)).slice(0, 80).map((l, i) => (React.createElement("div", { key: i, style: { display: 'flex', gap: 10, padding: '7px 0', borderTop: `1px solid ${ui_1.C.line}`, fontSize: 13 } },
            React.createElement("span", { style: { color: ui_1.C.faint, width: 78, flex: '0 0 78px', fontVariantNumeric: 'tabular-nums' } }, (0, ax_1.fmt)(l.at)),
            React.createElement("span", { className: "axw-hide-sm", style: { width: 100, flex: '0 0 100px', fontWeight: 600, color: l.ai ? ui_1.C.accent : ui_1.C.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, l.who),
            React.createElement("span", { style: { flex: 1, minWidth: 0, color: ui_1.C.sub } }, l.what))))));
}
// 새 프로젝트 — 첫 선택은 개발 유형 (곽두팔 msg 10425015)
function NewForm(props) {
    const [t, setT] = React.useState(undefined);
    const [v, setV] = React.useState({ name: '', code: '', owner: props.who, approver: '', start: (0, ax_1.today)(), target: '', base: '' });
    const f = (k, l, type = 'text', w = 150) => React.createElement("label", { style: { display: 'flex', flexDirection: 'column', gap: 5, width: w } },
        React.createElement("span", { style: ui_1.label }, l),
        React.createElement("input", { "data-ax-new-f": k, type: type, value: v[k], onChange: e => setV(Object.assign(Object.assign({}, v), { [k]: e.target.value })), style: ui_1.inp }));
    const ok = !!t && !!v.name.trim() && (t !== 'derive' || !!v.base);
    const info = t ? (0, devtype_1.typeInfo)(t) : undefined;
    return (React.createElement("div", { "data-ax-newform": true, style: Object.assign(Object.assign({}, ui_1.card), { marginBottom: 16, padding: 16 }) },
        React.createElement("div", { style: { fontWeight: 700, marginBottom: 4 } }, "\uC0C8 \uD504\uB85C\uC81D\uD2B8"),
        React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { margin: '8px 0 6px' }) },
            "1. \uAC1C\uBC1C \uC720\uD615",
            React.createElement(ui_1.Tip, { t: "\uC720\uD615\uC5D0 \uB530\uB77C \uB2E8\uACC4 \uC0B0\uCD9C\uBB3C\u00B7\uAD00\uBB38 \uAE30\uC900\u00B7BOM \uBC94\uC704\uAC00 \uC815\uD574\uC838\uC694" })),
        React.createElement("div", { "data-ax-type-pick": true, style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 } }, devtype_1.DEV_TYPES.map(x => React.createElement("button", { key: x.id, "data-ax-new-type": x.id, onClick: () => setT(x.id), style: { textAlign: 'left', padding: '10px 12px', borderRadius: 6, cursor: 'pointer', background: t === x.id ? ui_1.C.text : ui_1.C.card, color: t === x.id ? ui_1.C.inv : ui_1.C.text, border: `1px solid ${t === x.id ? ui_1.C.text : ui_1.C.line2}` } },
            React.createElement("div", { style: { fontSize: 13.5, fontWeight: 700 } }, x.label),
            React.createElement("div", { style: { fontSize: 12, marginTop: 3, color: t === x.id ? '#3F3F46' : ui_1.C.faint, lineHeight: 1.4 } }, x.desc)))),
        info && React.createElement("div", { "data-ax-type-info": true, style: { fontSize: 12.5, color: ui_1.C.sub, marginTop: 10, display: 'flex', gap: 16, flexWrap: 'wrap' } },
            React.createElement("span", null,
                "\uB3C4\uBA74\u00B7BOM: ",
                info.drawing),
            React.createElement("span", null,
                "BOM \uBC94\uC704: ",
                info.bomNote)),
        t && React.createElement(React.Fragment, null,
            React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { margin: '14px 0 6px' }) }, "2. \uAE30\uBCF8 \uC815\uBCF4"),
            React.createElement("div", { style: { display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-end' } },
                t === 'derive' && React.createElement("label", { style: { display: 'flex', flexDirection: 'column', gap: 5, width: 220 } },
                    React.createElement("span", { style: ui_1.label }, "\uAE30\uBC18 \uD488\uBAA9 (\uBCF5\uC0AC\uD574\uC11C \uC2DC\uC791)"),
                    React.createElement("select", { "data-ax-new-f": "base", value: v.base, onChange: e => setV(Object.assign(Object.assign({}, v), { base: e.target.value })), style: ui_1.inp },
                        React.createElement("option", { value: "" }, "\uACE0\uB974\uAE30"),
                        props.items.filter(x => (x.parts || []).length).map(x => React.createElement("option", { key: x.id, value: x.id },
                            x.itemCode || '',
                            " ",
                            x.name)))),
                f('name', '제품·프로젝트 이름', 'text', 240),
                f('code', '품번', 'text', 120),
                f('owner', 'PM'),
                f('approver', '관문 승인자'),
                f('start', '시작일', 'date'),
                f('target', '출시 목표일', 'date'),
                React.createElement("button", { "data-ax-new-ok": true, disabled: !ok, onClick: () => t && props.onAdd(v.name.trim(), v.owner, v.approver, v.start, v.target, t, v.code, v.base || undefined), style: Object.assign(Object.assign({}, ui_1.primary), { opacity: ok ? 1 : 0.4 }) }, "\uB9CC\uB4E4\uAE30"),
                React.createElement("button", { onClick: props.onCancel, style: ui_1.btn }, "\uCDE8\uC18C")),
            v.target && React.createElement("div", { "data-ax-new-back": true, style: { fontSize: 12.5, color: ui_1.C.accent, marginTop: 10, fontWeight: 600 } },
                (0, devtype_1.typeInfo)(t).tag,
                " \uD45C\uC900 ",
                (0, sched_1.stdTotal)(t),
                "\uC77C \u2192 \uC2DC\uC791 ",
                (0, sched_1.backPlan)(v.target, t).start,
                " \u00B7 \uCD9C\uC2DC ",
                v.target,
                " \u00B7 \uCD9C\uC2DC \uD6C4 \uAD00\uB9AC ",
                (0, sched_1.addDays)(v.target, 90),
                "\uAE4C\uC9C0 (\uC2DC\uC791\uC77C \uCE78 \uB300\uC2E0 \uC774 \uB0A0\uC9DC\uB85C \uC7A1\uD600\uC694)"),
            React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint, marginTop: 10 } },
                "\uCD9C\uC2DC \uBAA9\uD45C\uC77C\uC744 \uB123\uC73C\uBA74 \uAC1C\uBC1C \uC720\uD615\uBCC4 \uD45C\uC900 \uC77C\uC218\uB85C \uB2E8\uACC4 \uACC4\uD68D\uC77C\uC744 \uAC70\uAFB8\uB85C \uCC44\uC6CC\uC694.",
                t === 'derive' ? ' 기반 품목의 BOM·도면·인증이 복사되고, 바뀐 부품만 설계 변경으로 Rev를 올려요.' : '')),
        !t && React.createElement("div", { style: { marginTop: 10 } },
            React.createElement("button", { onClick: props.onCancel, style: ui_1.btn }, "\uCDE8\uC18C"))));
}

};
__m["src/webparts/huromAxPlm/components/Guide.js"]=function(module,exports,require){"use strict";
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
exports.HATCH = void 0;
exports.Guidebook = Guidebook;
exports.BaseList = BaseList;
const React = __importStar(require("react"));
const base_1 = require("src/webparts/huromAxPlm/model/base.js");
const hatch_1 = require("src/webparts/huromAxPlm/model/hatch.js");
const ai_1 = require("src/webparts/huromAxPlm/model/ai.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const sched_1 = require("src/webparts/huromAxPlm/model/sched.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
const NO = ['①', '②', '③', '④', '⑤', '⑥', '⑦'];
const ST_COL = { screen: ui_1.C.ok, auto: ui_1.C.accent, none: ui_1.C.line2 };
exports.HATCH = `repeating-linear-gradient(135deg, #1B1B1E 0 6px, #2B2B30 6px 7px)`;
function Bar3(props) {
    const n = props.list.length || 1;
    const c = (s) => props.list.filter(b => (0, hatch_1.baseState)(b) === s).length;
    return (React.createElement("div", { style: { display: 'flex', height: props.h || 8, borderRadius: 99, overflow: 'hidden', background: ui_1.C.hover } }, ['screen', 'auto', 'none'].map(s => React.createElement("div", { key: s, "data-ax-bar": s, style: { width: `${c(s) / n * 100}%`, background: ST_COL[s] } }))));
}
function Count(props) {
    return (React.createElement("span", { style: { display: 'inline-flex', gap: 12, fontSize: 12.5, color: ui_1.C.sub, fontVariantNumeric: 'tabular-nums', flexWrap: 'wrap' } }, ['screen', 'auto', 'none'].map(s => React.createElement("span", { key: s, "data-ax-cnt": s, style: { display: 'inline-flex', alignItems: 'center', gap: 5 } },
        React.createElement("span", { style: { width: 8, height: 8, borderRadius: 2, background: ST_COL[s], display: 'inline-block' } }),
        hatch_1.BASE_STATE_LABEL[s],
        " ",
        React.createElement("b", { style: { color: ui_1.C.text } }, props.list.filter(b => (0, hatch_1.baseState)(b) === s).length)))));
}
const Line = (props) => (React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '64px minmax(0,1fr)', gap: 8, fontSize: 12.5, lineHeight: 1.5 } },
    React.createElement("span", { style: { color: ui_1.C.faint, fontWeight: 600 } }, props.l),
    React.createElement("div", { style: { minWidth: 0, color: ui_1.C.sub } }, props.children)));
function Quest(props) {
    const { b } = props;
    const [open, setOpen] = React.useState(false);
    const st = (0, hatch_1.baseState)(b);
    const off = props.t ? (0, hatch_1.taskOff)(props.t, b) : undefined;
    return (React.createElement("div", { "data-ax-quest": b.id, "data-ax-quest-state": st, "data-ax-off": off ? '1' : '', title: off, style: Object.assign(Object.assign({}, ui_1.card), { padding: 14, display: 'flex', flexDirection: 'column', gap: 8, background: off ? exports.HATCH : ui_1.C.card, opacity: off ? 0.75 : 1, borderLeft: `3px solid ${ST_COL[st]}` }) },
        React.createElement("div", { style: { display: 'flex', gap: 8, alignItems: 'baseline' } },
            React.createElement("span", { style: { fontSize: 11, fontWeight: 700, color: ui_1.C.faint, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' } }, b.id),
            React.createElement("span", { style: { fontSize: 11, color: ui_1.C.faint, flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, b.grp),
            React.createElement("span", { "data-ax-quest-badge": true, style: { fontSize: 11, fontWeight: 700, color: st === 'none' ? ui_1.C.faint : ST_COL[st], whiteSpace: 'nowrap' } }, b.soon ? `${b.soon}에 생김` : hatch_1.BASE_STATE_LABEL[st])),
        React.createElement("div", { style: { fontSize: 14.5, fontWeight: 700, lineHeight: 1.35 } }, b.t),
        off && React.createElement("div", { "data-ax-off-why": true, style: { fontSize: 12, color: ui_1.C.sub, fontWeight: 600 } },
            "\uD574\uB2F9 \uC5C6\uC74C \u00B7 ",
            off),
        React.createElement(Line, { l: "\uBAA9\uD45C" }, b.goal || '—'),
        React.createElement(Line, { l: "\uD544\uC694\uD55C \uAC83" }, props.prev && props.prev.out.length ? `${props.prev.id} ${props.prev.out.slice(0, 2).join(', ')}` : '이 챕터 시작'),
        React.createElement(Line, { l: "\uC5BB\uB294 \uAC83" },
            React.createElement("b", { style: { color: ui_1.C.text, fontWeight: 600 } }, b.out.length ? b.out.join(' · ') : '—')),
        React.createElement(Line, { l: "\uB2F4\uB2F9" },
            b.own || '—',
            " ",
            React.createElement("span", { style: { color: ui_1.C.faint } },
                "\u00B7 ",
                sched_1.LANES[b.lane])),
        (b.scr || b.ai.length > 0) && React.createElement(Line, { l: "\uB3C4\uAD6C" },
            b.scr && React.createElement("span", { "data-ax-quest-scr": true, style: { marginRight: 8 } },
                "\u25B8 ",
                b.scr),
            b.ai.map(k => React.createElement("span", { key: k, "data-ax-quest-ai": k, style: { marginRight: 8, color: ui_1.C.accent } },
                "AI ",
                (0, ai_1.kindInfo)(k).label.split(' — ')[0]))),
        open && b.chk.length > 0 && React.createElement(Line, { l: "\uACF5\uB7B5 \uD301" },
            React.createElement("ul", { style: { margin: 0, paddingLeft: 16 } }, b.chk.map((x, i) => React.createElement("li", { key: i }, x)))),
        open && b.how.length > 0 && React.createElement(Line, { l: "\uC21C\uC11C" },
            React.createElement("ol", { style: { margin: 0, paddingLeft: 16 } }, b.how.map((x, i) => React.createElement("li", { key: i }, x)))),
        open && React.createElement(Line, { l: "\uAC1C\uBC1C \uC720\uD615" },
            React.createElement("span", { style: { display: 'inline-flex', gap: 4, flexWrap: 'wrap' } }, hatch_1.HTYPES.map(h => {
                const w = (0, hatch_1.taskOff)(h[0], b);
                return React.createElement("span", { key: h[0], "data-ax-quest-type": h[0], "data-ax-on": w ? '0' : '1', title: w || '해당', style: { fontSize: 11.5, padding: '1px 7px', borderRadius: 4, border: `1px solid ${ui_1.C.line2}`, background: w ? exports.HATCH : ui_1.C.card, color: w ? ui_1.C.faint : ui_1.C.text, textDecoration: w ? 'line-through' : 'none' } }, h[1]);
            }))),
        (b.chk.length > 0 || b.how.length > 0 || !open) && React.createElement("button", { "data-ax-quest-more": true, onClick: () => setOpen(!open), style: Object.assign(Object.assign({}, ui_1.btn), { alignSelf: 'flex-start', padding: '3px 10px', fontSize: 12 }) }, open ? '접기' : '공략 보기')));
}
function Guidebook(props) {
    const [t, setT] = React.useState('');
    const [q, setQ] = React.useState('');
    const [only, setOnly] = React.useState('');
    const [openCh, setOpenCh] = React.useState({ 0: true });
    const hit = (b) => (!only || (0, hatch_1.baseState)(b) === only) && (!q || `${b.id} ${b.grp} ${b.t} ${b.out.join(' ')} ${b.own}`.indexOf(q) >= 0);
    const extra = base_1.BASE_TASKS.filter(b => b.x).length;
    return (React.createElement("div", { "data-ax-guide": true },
        React.createElement("div", { style: { display: 'flex', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap', marginBottom: 14 } },
            React.createElement("div", { style: { flex: '1 1 320px', minWidth: 0 } },
                React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { letterSpacing: '.08em' }) }, "AX-PLM \uACF5\uB7B5\uC9D1"),
                React.createElement("h1", { style: { fontSize: 22, fontWeight: 800, margin: '2px 0 4px', letterSpacing: '-.01em' } }, "\uAE30\uBCF8 \uC5C5\uBB34 \uC810\uAC80\uD45C"),
                React.createElement("div", { style: { fontSize: 13, color: ui_1.C.sub } },
                    "\uD504\uB85C\uC138\uC2A4 \uD45C ",
                    base_1.BASE_TASKS.length - extra,
                    "\uC5C5\uBB34 + \uD45C\uC5D0 \uC5C6\uB294 \uAE30\uBCF8 ",
                    extra,
                    "\uAC1C = ",
                    React.createElement("b", { "data-ax-guide-total": true, style: { color: ui_1.C.text } }, base_1.BASE_TASKS.length),
                    "\uAC1C. \uB2E8\uACC4\uAC00 \uCC55\uD130, \uC5C5\uBB34 \uD558\uB098\uAC00 \uACF5\uB7B5 \uCE74\uB4DC\uC608\uC694.")),
            React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { padding: '12px 14px', flex: '1 1 340px', minWidth: 0 }) },
                React.createElement("div", { style: { marginBottom: 8 } },
                    React.createElement(Count, { list: base_1.BASE_TASKS })),
                React.createElement(Bar3, { list: base_1.BASE_TASKS, h: 10 }),
                React.createElement("div", { style: { fontSize: 11.5, color: ui_1.C.faint, marginTop: 6 } }, "\uD654\uBA74\uC5D0 \uC788\uC74C = \uC804\uC6A9 \uD654\uBA74\uC5D0\uC11C \uCC98\uB9AC \u00B7 \uC790\uB3D9\uD654\uB428 = AI\uAC00 \uCD08\uC548\u00B7\uC810\uAC80 \u00B7 \uC5C6\uC74C = \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uCCB4\uD06C\uB9CC"))),
        React.createElement("div", { style: { display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 } },
            React.createElement("span", { style: Object.assign(Object.assign({}, ui_1.label), { marginRight: 2 }) }, "\uAC1C\uBC1C \uC720\uD615"),
            ([['', '전체']].concat(hatch_1.HTYPES)).map(h => React.createElement("button", { key: h[0] || 'all', "data-ax-guide-type": h[0] || 'all', onClick: () => setT(h[0]), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '4px 10px', background: t === h[0] ? ui_1.C.text : ui_1.C.card, color: t === h[0] ? '#fff' : ui_1.C.sub, borderColor: t === h[0] ? ui_1.C.text : ui_1.C.line2 }) }, h[1])),
            React.createElement("span", { style: { width: 10 } }),
            ['', 'screen', 'auto', 'none'].map(s => React.createElement("button", { key: s || 'all', "data-ax-guide-only": s || 'all', onClick: () => setOnly(s), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '4px 10px', background: only === s ? ui_1.C.accentBg : ui_1.C.card, borderColor: only === s ? ui_1.C.accent : ui_1.C.line2, color: only === s ? ui_1.C.accent : ui_1.C.sub }) }, s ? hatch_1.BASE_STATE_LABEL[s] : '상태 전체')),
            React.createElement("input", { "data-ax-guide-q": true, placeholder: "\uC5C5\uBB34 \u00B7 \uC0B0\uCD9C\uBB3C \uCC3E\uAE30", value: q, onChange: e => setQ(e.target.value), style: { border: `1px solid ${ui_1.C.line2}`, borderRadius: 6, padding: '5px 9px', fontSize: 13, width: 180 } }),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement("button", { "data-ax-guide-all": true, onClick: () => { const o = {}; NO.forEach((_, i) => { o[i] = true; }); setOpenCh(o); }, style: ui_1.btn }, "\uBAA8\uB450 \uD3BC\uCE58\uAE30")),
        t && React.createElement("div", { "data-ax-guide-hatch": true, style: { fontSize: 12.5, color: ui_1.C.sub, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 } },
            React.createElement("span", { style: { width: 22, height: 12, background: exports.HATCH, border: `1px solid ${ui_1.C.line2}`, display: 'inline-block' } }),
            "\uBE57\uAE08 \uCE74\uB4DC = \uC774 \uC720\uD615\uC5D0\uC120 \uD574\uB2F9 \uC5C6\uC74C (\uC9C4\uCC99\uB960 \u00B7 \uC9C0\uC5F0\uC5D0\uC11C \uBE60\uC9D0). \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB9AC\uBA74 \uC774\uC720\uAC00 \uBCF4\uC5EC\uC694."),
        NO.map((no, k) => {
            const all = (0, hatch_1.baseOfStage)(k);
            const list = all.filter(hit);
            const on = !!openCh[k] || !!q;
            const offN = t ? all.filter(b => (0, hatch_1.taskOff)(t, b)).length : 0;
            return (React.createElement("section", { key: k, "data-ax-chapter": k, style: Object.assign(Object.assign({}, ui_1.card), { marginBottom: 12, overflow: 'hidden' }) },
                React.createElement("button", { "data-ax-chapter-head": k, onClick: () => setOpenCh(Object.assign(Object.assign({}, openCh), { [k]: !on })), style: { width: '100%', border: 'none', background: 'transparent', textAlign: 'left', cursor: 'pointer', padding: '14px 16px', display: 'grid', gridTemplateColumns: '56px minmax(0,1fr) auto', gap: 14, alignItems: 'center' } },
                    React.createElement("span", { style: { fontSize: 11, fontWeight: 800, color: ui_1.C.faint, lineHeight: 1.1 } },
                        "CHAPTER",
                        React.createElement("br", null),
                        React.createElement("span", { style: { fontSize: 24, color: ui_1.C.text } }, k + 1)),
                    React.createElement("span", { style: { minWidth: 0 } },
                        React.createElement("span", { style: { display: 'flex', gap: 10, alignItems: 'baseline', flexWrap: 'wrap', marginBottom: 6 } },
                            React.createElement("b", { style: { fontSize: 16 } },
                                no,
                                " ",
                                ui_1.SHORT[k]),
                            React.createElement("span", { style: { fontSize: 12.5, color: ui_1.C.faint } },
                                "\uC5C5\uBB34 ",
                                all.length,
                                "\uAC1C",
                                offN ? ` · 빗금 ${offN}` : ''),
                            React.createElement(Count, { list: all })),
                        React.createElement(Bar3, { list: all })),
                    React.createElement("span", { style: { fontSize: 13, color: ui_1.C.faint } }, on ? '접기 ▴' : '펼치기 ▾')),
                on && React.createElement("div", { style: { padding: '0 16px 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 10 } },
                    list.map(b => React.createElement(Quest, { key: b.id, b: b, t: t || undefined, prev: all[all.indexOf(b) - 1] })),
                    !list.length && React.createElement("div", { style: { fontSize: 13, color: ui_1.C.faint } }, "\uB9DE\uB294 \uC5C5\uBB34\uAC00 \uC5C6\uC5B4\uC694."))));
        }),
        React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint } },
            "\uB2E8\uACC4 \uCE78\uC774 \uBE48 \uC5C5\uBB34 ",
            base_1.BASE_TASKS.filter(b => b.g).length,
            "\uAC1C\uB294 \uD45C\uC758 \uC55E \uC5C5\uBB34 \uB2E8\uACC4\uB97C \uB530\uB77C \uB123\uC5C8\uC5B4\uC694. \uD504\uB85C\uC81D\uD2B8\uB9C8\uB2E4 \uCCB4\uD06C\uB294 \u300C\uD504\uB85C\uC81D\uD2B8 \u2192 \uB2E8\uACC4\u00B7\uC0B0\uCD9C\uBB3C \u2192 \uAE30\uBCF8 \uC5C5\uBB34\u300D\uC5D0\uC11C \uD574\uC694. \uB4F1\uB85D\uB41C \uD504\uB85C\uC81D\uD2B8 ",
            props.items.length,
            "\uAC1C.")));
}
function BaseList(props) {
    const { p, k } = props;
    const [open, setOpen] = React.useState(false);
    const t = (0, hatch_1.htypeOf)(p);
    const list = (0, hatch_1.baseOfStage)(k);
    const pr = (0, hatch_1.baseProgress)(p, k);
    const toggle = (b) => props.update(x => {
        const key = (0, hatch_1.baseKey)(b);
        const cur = x.docs[key] || {};
        const done = !cur.done;
        return Object.assign(Object.assign({}, x), { docs: Object.assign(Object.assign({}, x.docs), { [key]: Object.assign(Object.assign({}, cur), { done, by: props.who, at: (0, ui_1.nowIso)() }) }), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who: props.who, kind: 'doc', what: `기본 업무 ${b.id} ${b.t} ${done ? '완료' : '완료 취소'}` }]) });
    });
    const setOdm = (m) => props.update(x => (Object.assign(Object.assign({}, x), { odmMold: m, log: x.log.concat([{ at: (0, ui_1.nowIso)(), who: props.who, kind: 'edit', what: `ODM ${hatch_1.ODM_LABEL[m]}` }]) })));
    return (React.createElement("div", { "data-ax-base": k, style: Object.assign(Object.assign({}, ui_1.card), { marginTop: 16 }) },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', flexWrap: 'wrap' } },
            React.createElement("b", { style: { fontSize: 14 } }, "\uAE30\uBCF8 \uC5C5\uBB34"),
            React.createElement("span", { "data-ax-base-cnt": true, style: { fontSize: 12.5, color: ui_1.C.sub, fontVariantNumeric: 'tabular-nums' } },
                "\uD504\uB85C\uC138\uC2A4 \uD45C ",
                pr.done,
                "/",
                pr.total,
                " \uC644\uB8CC",
                pr.off ? ` · 빗금 ${pr.off}개 제외` : ''),
            (0, devtype_1.typeOf)(p) === 'odm' && React.createElement("select", { "data-ax-odm": true, value: (0, hatch_1.odmOf)(p), onChange: e => setOdm(e.target.value), style: { border: `1px solid ${ui_1.C.line2}`, borderRadius: 6, padding: '3px 6px', fontSize: 12.5 } }, ['public', 'private'].map(m => React.createElement("option", { key: m, value: m },
                "ODM ",
                hatch_1.ODM_LABEL[m]))),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement("button", { "data-ax-base-open": true, onClick: () => setOpen(!open), style: ui_1.btn }, open ? '접기' : `펼치기 (${list.length})`)),
        open && React.createElement("div", { style: { borderTop: `1px solid ${ui_1.C.line}` } }, list.map(b => {
            const off = (0, hatch_1.taskOff)(t, b);
            const s = p.docs[(0, hatch_1.baseKey)(b)] || {};
            return (React.createElement("div", { key: b.id, "data-ax-base-row": b.id, "data-ax-off": off ? '1' : '', title: off, style: { display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px', borderTop: `1px solid ${ui_1.C.line}`, background: off ? exports.HATCH : 'transparent', color: off ? ui_1.C.faint : ui_1.C.text, minHeight: 40 } },
                React.createElement("input", { type: "checkbox", "data-ax-base-chk": b.id, disabled: !!off || props.demo, checked: !!s.done, onChange: () => toggle(b), style: { width: 16, height: 16, flex: '0 0 16px' } }),
                React.createElement("span", { style: { fontSize: 11.5, color: ui_1.C.faint, width: 66, flex: '0 0 66px', fontVariantNumeric: 'tabular-nums' } }, b.id),
                React.createElement("span", { style: { flex: 1, minWidth: 0, fontSize: 13.5, textDecoration: off ? 'line-through' : 'none' } },
                    b.t,
                    React.createElement("span", { className: "axw-hide-sm", style: { color: ui_1.C.faint, fontSize: 12 } },
                        " \u00B7 ",
                        b.out.slice(0, 2).join(', '))),
                React.createElement("span", { className: "axw-hide-sm", style: { fontSize: 12, color: ui_1.C.faint, whiteSpace: 'nowrap' } }, off ? '해당 없음' : sched_1.LANES[b.lane])));
        }))));
}

};
__m["src/webparts/huromAxPlm/model/base.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_TASKS = void 0;
exports.BASE_TASKS = [{ "id": "PROC-01", "st": 0, "g": false, "grp": "요구사항 접수·분석", "t": "권역·채널별 요구사항 분류·분석 및 기획 Input 정리", "goal": "신규·파생·ODM 요청과 권역·채널별 바이어 요구를 분류·분석해, 기획 초기 데이터와 착수 범위·일정을 확정한다.", "own": "상품전략팀", "out": ["요구사항 분석표", "도입 요청 정리표", "시장성 검토 결과서", "의결 기록"], "chk": ["휴롬 PM 구분 : 개발 등급 A~D", "운영 상품도 대상 권역의 시장성 사전 검토"], "how": ["신규 과제, 요청 접수 및 유형 구분 (신규 / 파생 / ODM)", "요구사항 분류 및 분석 (공통 / 권역 전용, 사양·가격·수량·출시 시점)", "기획 Input 정리 및 착수 범위·일정 확정", "해영과 합의된 상품도입 프로세스 기준"], "lane": 0, "ai": ["g_market"], "scr": "" }, { "id": "PROC-02A", "st": 0, "g": false, "grp": "시장조사 & 인사이트 도출", "t": "기존 모델 판매 History 분석", "goal": "기존 모델의 판매·재고·CS 이력을 분석해, 신제품에서 유지할 강점과 개선할 약점의 근거를 확보한다.", "own": "상품전략팀", "out": ["신제품 기획안"], "chk": ["강점·약점 정리", "POD 후보 도출"], "how": ["판매·재고·CS 이력 데이터 요청", "유지할 강점 / 개선할 약점 정리", "차별화 포인트(POD) 후보 도출"], "lane": 0, "ai": ["g_market", "j_plan"], "scr": "" }, { "id": "PROC-02B", "st": 0, "g": false, "grp": "시장조사 & 인사이트 도출", "t": "글로벌/주요 국가 시장조사", "goal": "목표 권역의 시장 규모·성장세·채널·규제·기술 변화를 파악해, 제품 방향성의 시장 근거를 만든다.", "own": "상품디자인팀", "out": ["시장·전시 동향 보고서 (조사 근거·주요 인사이트·기획 및 디자인 적용 "], "chk": [], "how": ["상품디자인팀이 조사 대상·범위를 설정하고 글로벌 시장·주요 전시 동향 리서치", "시장·소비·제품 트렌드 분석 및 기획·디자인 인사이트 도출", "상품전략1팀의 타깃·권역 정보와 의견을 참고해 적용 방향 정리·공유"], "lane": 0, "ai": ["g_market", "weekly"], "scr": "" }, { "id": "PROC-02C", "st": 0, "g": false, "grp": "시장조사 & 인사이트 도출", "t": "권역별 시장 동향", "goal": "주력 권역의 주요 채널 판매 상위 모델을 비교해 시장 동향을 파악하고, 가격·사양 기준이 될 레퍼런스 모델을 정한다.", "own": "상품전략팀 상품디자인팀", "out": ["권역별 동향·레퍼런스 모델 비교표 (판매 상위 모델", "가격대", "사양·소구점", "레퍼런스 모델"], "chk": ["PROC-02C(경쟁 모델 벤치마킹)를 이 Task로 통합"], "how": ["주력 출시 권역 설정", "권역별 주요 채널 판매 상위 모델·가격대 확인", "상위 모델 사양·가격·구성품·소구점 비교", "법인 현지 동향 의견 확인"], "lane": 1, "ai": ["g_market"], "scr": "" }, { "id": "PROC-02D", "st": 0, "g": false, "grp": "시장조사 & 인사이트 도출", "t": "영업/고객 VOC·Pain Point 분석 및 기획 Input 정리", "goal": "자사·타사 고객의 불만과 요구를 분류해, 신제품에 반영할 개선 사항을 우선순위로 정리한다.", "own": "상품전략팀 상품디자인팀", "out": ["Pain Point 리스트 (VOC", "영업 VOC 구분"], "chk": ["Pain Point 리스트 작성", "우선순위 정리"], "how": ["자사(국내/해외) VOC·현지 CS 이슈 수집", "영업 VOC 수집 (거래선 요구, 판매 현장 불만)", "온라인 리뷰 조사", "Pain Point 리스트 작성 및 우선순위 정리"], "lane": 0, "ai": ["j_voc", "g_market"], "scr": "" }, { "id": "PROC-02E", "st": 0, "g": false, "grp": "시장조사 & 인사이트 도출", "t": "디자인 트렌드 조사 및 적용 방향 도출", "goal": "목표 고객·권역의 디자인 트렌드를 조사해 제품의 형태·CMF·사용 경험 방향에 반영한다.", "own": "상품디자인팀", "out": ["디자인 트렌드 리포트 (출처·무드보드·적용 방향"], "chk": [], "how": ["목표 고객·권역 및 조사 범위 설정", "제품·인접 분야의 형태·CMF·UI 트렌드 조사", "브랜드 적합성·차별성·구현 가능성 검토", "컨셉 적용 방향 정리·공유"], "lane": 0, "ai": ["g_market"], "scr": "" }, { "id": "PROC-03", "st": 0, "g": false, "grp": "제품 아이디어 및 컨셉 기획", "t": "제품 방향성, 컨셉 설정 및 고객 가치 정의", "goal": "시장·고객 조사에서 발견한 기회를 바탕으로 타깃 고객과 해결할 문제를 정의하고, 제품이 제공할 핵심 가치와 차별화 방향을 설정한다.", "own": "상품전략팀", "out": ["신제품기획안 초안 (레퍼런스 모델 기반 공급가 제안 포함", "가격 제안표 (권역", "레퍼런스 모델", "판매가", "역산 공급가", "영업 협의 결과"], "chk": ["공급가 역산 시 권역별 마진 구조(법인·채널) 반영", "영업 협의 결과·차이 사유 기록"], "how": ["02A~02D 결과 1장 요약 (기존 모델 강점·약점, 경쟁 대비 차이, 주요 VOC Top 5)", "타깃 고객·사용 상황 정의 및 핵심 USP 1~3개 선정", "레퍼런스 모델(02B) 권역별 판매가 확인", "판매가 역산 → 휴롬→휴롬엘에스 공급가(안) 권역별 산출"], "lane": 0, "ai": ["j_plan"], "scr": "" }, { "id": "PROC-04A", "st": 0, "g": false, "grp": "제품 아이디어 및 컨셉 기획", "t": "컨셉 디자인 및 개념 방향 탐색", "goal": "핵심 고객가치를 사용 경험과 디자인 개념으로 전환하고, 제품의 인상·형태·기능·CMF가 지향할 컨셉 방향을 탐색한다.", "own": "상품디자인팀", "out": ["컨셉 방향안·개념 보드 (핵심 경험·디자인 키워드·대안 비교"], "chk": [], "how": ["핵심 고객가치에 따른 사용 경험·디자인 키워드 도출", "형태·기능·CMF의 개념을 이미지·스케치·무드보드로 표현", "컨셉 대안의 고객가치·브랜드 적합성·차별성 비교", "컨셉 방향과 후속 검토 과제 정리"], "lane": 0, "ai": ["j_plan"], "scr": "" }, { "id": "PROC-04B", "st": 0, "g": false, "grp": "제품 아이디어 및 컨셉 기획", "t": "컨셉 사양 기획", "goal": "컨셉의 기능·성능·UX 사용성 조건을 구체화하고 우선순위를 정한다.", "own": "상품전략팀", "out": ["컨셉 사양 리스트 (목표 조건·우선순위·디자인 검토 의견 반영"], "chk": [], "how": ["신제품기획안 초안의 타깃·핵심 고객가치·USP·목표 가격 확인", "앞 단계의 컨셉 디자인과 크기·소재·CMF·사용성 조건 검토", "고객가치·USP 구현에 필요한 기능·성능·UX 목표 조건 구체화", "디자인 반영 가능성·사용성 제약을 검토하고 상품전략팀과 조정"], "lane": 1, "ai": ["j_plan"], "scr": "" }, { "id": "PROC-05", "st": 0, "g": false, "grp": "제품 아이디어 및 컨셉 기획", "t": "컨셉 기획 경영진 보고 및 컨펌", "goal": "컨셉의 고객가치·차별성과 시장·사업성 검토 내용을 경영진에 보고하고, 추진 방향 및 보완 과제에 대한 의사결정을 받는다.", "own": "상품전략팀, 상품디자인팀", "out": ["컨셉 보고자료·결정 사항 기록·후속 검토 과제"], "chk": ["보고 완료", "보완 사항 반영 계획 수립"], "how": ["컨셉·고객가치·시장성·사업성 및 주요 리스크 정리", "대표이사 보고 및 추진 방향 협의", "승인·보완·보류 사항 기록", "후속 검토 과제·담당·일정 정리 및 공유"], "lane": 0, "ai": ["j_plan", "weekly"], "scr": "" }, { "id": "PROC-06A", "st": 0, "g": false, "grp": "기술 조사 및 구현 가능성 검토", "t": "기술 옵션 및 개발 방식 검토", "goal": "적용 가능한 기술안과 개발 방식(내재화·공동개발·ODM)을 비교해 최적의 방식을 고른다.", "own": "개발본부", "out": ["기술 옵션·개발 방식 비교표"], "chk": ["개발 방식 비교 완료"], "how": ["핵심 기술·적용안 조사", "개발 방식별(내재화·공동개발·ODM) 비용·일정·리스크 비교", "개발 방식 제안안 정리"], "lane": 0, "ai": [], "scr": "" }, { "id": "PROC-06B", "st": 0, "g": false, "grp": "기술·소싱 검토", "t": "구매 Pool 활용 후보 상품·제조처 비교 및 선정", "goal": "기존 업체 Pool을 먼저 활용하고 신규 업체의 개발·품질·거래 위험을 확인해 기획 구현 가능한 제조처를 선정한다.", "own": "상품전략2팀", "out": ["업체 비교·선정표", "초기 견적서", "제조처 정보", "샘플 확보 내역"], "chk": ["구매 사전 협의·담당 지정 완료", "선정 근거와 견적 조건 확보"], "how": ["구매 담당자와 기존 Pool 후보를 확인", "신규 후보의 재무 건전성·R&D·고객 대응·품질관리·거래조건을 검토.", "스펙·초기단가·MOQ 및 선정 사유를 기록하고 검토용 샘플을 확보"], "lane": 3, "ai": ["g_quote", "g_vendor"], "scr": "협력사 · 샘플" }, { "id": "PROC-07", "st": 0, "g": false, "grp": "기술·소싱 검토", "t": "RFP 정의 (목표가·스펙·주요 기술·기능·디자인 특징)", "goal": "목적에 맞는 상품을 런칭하기 위한 스펙 및 특징을 정의한다.", "own": "상품전략팀", "out": ["상품 요구사항 정의서 (RFP: 타깃·고객가치·차별화 포인트", "목표가·스펙·주요 기술·기능·디자인 요구조건", "필수·선택 구분 및 평가 기준"], "chk": [], "how": ["시장·고객 조사 및 선행 검토 결과를 바탕으로 타깃·고객가치·차별화 포인트 정리", "목표가·스펙·주요 기술·기능·디자인 특징을 RFP 초안으로 작성", "개발·디자인·구매·품질부서와 필수·선택 요구사항 및 평가 기준 협의·조율", "협의 결과를 반영한 RFP를 공유하고 제조처 제안 요청·비교 평가에 활용"], "lane": 3, "ai": [], "scr": "" }, { "id": "PROC-08", "st": 0, "g": false, "grp": "기술·소싱 검토", "t": "제조처 후보군 선정", "goal": "경쟁력 있는 상품 및 원할한 운영을 위한 제조처 비교를 통한 제조처 선정", "own": "상품전략팀", "out": ["제조처 비교·평가표 (RFP 충족 여부", "기술·품질·가격·MOQ·납기·거래 위험", "최종 제조처 선정 보고서 (선정 근거 및 추가 확인사항"], "chk": [], "how": ["RFP 기준으로 구매 Pool·신규 업체 후보 및 제안·견적 확보", "개발·구매·품질부서와 기술·품질·가격·납기·거래 위험 비교 평가", "선정 근거를 정리하여 최종 제조처 선정 및 보고"], "lane": 3, "ai": ["g_vendor", "weekly"], "scr": "협력사" }, { "id": "PROC-09", "st": 0, "g": false, "grp": "기술·소싱 검토", "t": "기술 검토를 위한 개발 계약", "goal": "제조처의 프로젝트 범위를 확정하고 리스크관리를 위해 제조처와 개발 계약을 체결하고 개발을 공식 착수한다.", "own": "상품전략1팀 상품전략2팀", "out": ["개발계약서"], "chk": ["개발 계약 진행 및 착수 일정 관리"], "how": ["제조처와 개발 범위·일정·비용·역할 및 권리·검수·종료 조건 협의", "계약서 작성 후 법무 검토·내부 결재 및 계약 체결", "계약 내용·역할·일정을 공유하고 개발 Kick-Off 진행"], "lane": 3, "ai": [], "scr": "" }, { "id": "PROC-10A", "st": 0, "g": false, "grp": "기술·소싱 검토", "t": "기술 가능성 확인 및 적용 기술 협의 결과 도출", "goal": "고객가치·차별점을 구현할 핵심 기술이 가능한지 컨셉 확정 전에 확인해, 개발 검토 단계의 USP 변경을 줄인다.", "own": "상품전략본부, 개발본부", "out": ["개발 요구사항서 (성능 기준", "개발 요구사항 적용 결과서"], "chk": ["사전 확인 수준으로 진행 — 상세 구현 방안 검토는 ② 단계"], "how": ["핵심 기능·성능 기준 정리", "개발본부 사전 기술 검토 요청 (개발검토 요청서 상신)", "구현 가능 여부·난이도·원가 영향 의견 수렴", "어려운 항목 대안 기술·사양 검토"], "lane": 3, "ai": [], "scr": "" }, { "id": "PROC-10B", "st": 0, "g": false, "grp": "컨셉 기획", "t": "UI/UX 기획 및 개선 방향 수립", "goal": "제품 사용 흐름과 기능별 UI/UX 기준을 세워 디자인·개발이 같은 기준으로 진행하게 한다.", "own": "상품전략팀", "out": ["UI", "UX 기획안"], "chk": ["사용 흐름·조작 방식 정의", "기획안 공유"], "how": ["사용 흐름(조립·작동·세척) 정의", "정보 구조·조작 방식 정의", "기존 모델 UI/UX 개선 요소 정리", "UI/UX 기획안 공유"], "lane": 0, "ai": ["j_plan"], "scr": "" }, { "id": "PROC-11", "st": 0, "g": false, "grp": "컨셉 기획", "t": "제품 컨셉 구체화 및 개발 방향성 수립", "goal": "조사·기술 검토 결과로 타깃·핵심 USP와 목표 사양·구성을 확정해 신제품기획안으로 정리한다.", "own": "상품전략팀", "out": ["신제품기획안 (v1 컨셉"], "chk": ["타깃·USP 정의 완료", "VOC 반영 항목 선별 완료"], "how": ["컨셉 가설 검증 (조사·기술 검토 결과 반영)", "타깃·포지셔닝·핵심 USP 확정", "목표 사양·구성 기획 (기능·성능, 구성품·컬러, 인쇄물 구성 초안)", "신제품기획안 작성"], "lane": 0, "ai": ["j_plan"], "scr": "" }, { "id": "PROC-12", "st": 0, "g": false, "grp": "컨셉·사업성 승인 검토", "t": "컨셉·수익성·투자 타당성 검토", "goal": "판매가·원가·투자비·수익성을 기준으로 사업 타당성을 심의해 개발 추진 여부를 판단한다.", "own": "상품전략팀", "out": ["사업성 검토서"], "chk": ["기준 MOQ 확인·영업 공유", "심의 완료", "결정 사항 기록"], "how": ["사업성 자료 작성 (판매가·원가·개발비·금형비)", "기준 MOQ 확인 (개발·구매 제시) → 영업 공유 (추후 FCST 설정 시 참고용)", "투자 회수 시점 산출", "일정·핵심 리스크 정리"], "lane": 0, "ai": ["j_plan", "g_cost"], "scr": "" }, { "id": "PROC-13", "st": 0, "g": false, "grp": "디자인 개발·검증", "t": "형태·CMF·조작부 상세 디자인 및 실행 기준 수립", "goal": "확정된 제품 방향과 시장·고객 인사이트를 구체적인 디자인으로 구현하고, 휴롬의 디자인 아이덴티티가 반영된 실행 기준과 디자인안을 마련한다.", "own": "상품디자인팀", "out": ["상세 디자인안 (외관 3D·주요 치수·CMF·조작", "표시부·로고", "인쇄 위치", "디자인 아이덴티티·조사 인사이트 반영표", "목업 검증 결과"], "chk": ["컨셉 재수립이 아닌 확정 방향의 디자인 실행에 집중", "아이덴티티 적용 근거 및 조사 결과별 반영 내용·미반영 사유 기록", "구조·제조 협의가 필요한 항목은 후속 검토 사항으로 구분"], "how": ["시장·전시·경쟁 제품·사용 관찰·디자인 트렌드 조사(02A~02E)의 적용 항목 정리", "휴롬 디자인 아이덴티티 기준·승인 제품을 검토해 적용 원칙 설정", "형태·비례·주요 치수·부품 구성 및 외관 3D 구체화", "소재·색상·표면처리·질감·광택 등 CMF와 로고·인쇄 위치 구체화"], "lane": 7, "ai": [], "scr": "품목 · 도면 판" }, { "id": "PROC-14A", "st": 0, "g": false, "grp": "디자인 개발·검증", "t": "상세 디자인 구현성·사용성 검토 및 수정안 반영", "goal": "구체화된 디자인의 구조·금형·생산·사용성 적합성을 검증하고, 휴롬 디자인 아이덴티티와 조사에서 도출한 핵심 고객가치를 유지하며 수정안을 반영한다.", "own": "상품디자인팀", "out": ["디자인 구현성·사용성 검토 결과", "수정 디자인안·변경 내역·잔여 이슈 목록"], "chk": ["수정 전후 아이덴티티·핵심 고객가치 유지 여부 확인", "디자인 실행 기준과 변경 내역 일치 확인", "미해결 항목의 영향·후속 확인 시점 명시"], "how": ["상세 디자인안·실행 기준 및 인사이트 반영 항목 개발본부 공유", "구조·금형·생산 제약과 형태·CMF 구현 가능성 공동 검토", "목업으로 조립·조작·그립·세척·보관 사용성 검증", "제약·문제별 대안을 비교하고 디자인 아이덴티티·고객가치 영향 확인"], "lane": 7, "ai": [], "scr": "프로젝트 · 이슈·리스크" }, { "id": "PROC-14B", "st": 0, "g": false, "grp": "디자인/기획 사양 검토", "t": "선행 IP(지식재산권) 검토", "goal": "개발 착수 전 타사 지식재산권 침해 리스크를 확인해 사양·디자인에 반영한다.", "own": "지식재산본부", "out": ["IP 검토 결과"], "chk": ["IP 검토 결과 수령", "수정 필요 사항 반영 완료"], "how": ["컨셉안·사양 초안 지식재산본부 전달", "침해 리스크 검토 결과 수령", "리스크 항목 사양·디자인 수정 반영"], "lane": 1, "ai": [], "scr": "" }, { "id": "PROC-14C", "st": 0, "g": false, "grp": "디자인/기획 사양 검토", "t": "영업 요구사항 반영 및 협의", "goal": "PROC-03에서 협의한 가격을 기준으로 권역·채널별 필수 사양·목표가·출시 시점을 개발 검토 전에 확정해 이후 사양 변경을 줄인다.", "own": "상품전략팀", "out": ["신제품 기획안 (영업 요구 반영"], "chk": ["여기서 한 번만 취합하고, PROC-14·16A·17은 이 결과를 재사용 (중복 요청 방지)"], "how": ["기획안·디자인안 영업 공유 (PROC-03 가격 제안표 포함)", "권역·채널별 필수 사양·출시 시점 확인", "PROC-03 협의 가격 기준 목표가 확정", "적용 여부 협의 및 기획안 반영"], "lane": 1, "ai": ["j_plan"], "scr": "" }, { "id": "PROC-15", "st": 0, "g": false, "grp": "디자인 개발·검증", "t": "디자인-개발 핸드오프 리뷰", "goal": "디자인 목업·이미지 프레젠테이션으로 디자인 의도와 주요 특징을 공유하고, 개발에 필요한 설계 입력이 정확히 전달되도록 확인한다.", "own": "상품디자인팀", "out": ["핸드오프 리뷰 결과", "디자인 프레젠테이션 자료 (목업·이미지"], "chk": ["검토용 기준본 이관: 3D·주요 치수·CMF·표시 위치·미해결 이슈 및 버전 명시"], "how": ["디자인 산출물 및 프레젠테이션 자료 준비 (목업·이미지·도면·CMF·UI/UX)", "목업·이미지를 활용한 디자인 의도·주요 특징 프레젠테이션 및 개발본부 이관 리뷰", "질의·제조성 검토 의견 정리 및 반영", "이관 완료 확인"], "lane": 0, "ai": ["j_voc"], "scr": "" }, { "id": "PROC-16", "st": 0, "g": false, "grp": "승인·보고", "t": "[G1] 경영진 보고 및 컨펌", "goal": "기획 방향·사양·일정·투자 규모를 경영진에 보고해 개발 검토 진행 여부를 결정받는다.", "own": "상품전략팀", "out": ["경영진 보고자료", "결정 사항 기록"], "chk": ["개발 검토 진행 여부 결정 완료"], "how": ["보고자료 작성 (방향·사양·일정·투자 규모)", "경영진 보고", "결정·보완 사항 기록"], "lane": 0, "ai": ["weekly"], "scr": "" }, { "id": "PROC-17", "st": 1, "g": false, "grp": "프로젝트 Pre-Kick Off", "t": "PM 선정", "goal": "프로젝트 유형, 개발 난이도 및 추진 범위에 적합한 PM을 지정하여 개발 일정 및 부서 간 협업을 통합 관리할 책임자를 확정한다.", "own": "상품전략본부, 개발본부, 품질본부", "out": ["PM 지정 결과", "프로젝트 조직도 및 업무 R&R"], "chk": [], "how": ["프로젝트 유형·개발 난이도·추진 범위 확인", "PM 선정 기준에 따라 담당 PM 지정", "PM 역할·책임과 프로젝트 조직도 정리·공유"], "lane": 0, "ai": ["minutes"], "scr": "" }, { "id": "PROC-18", "st": 1, "g": false, "grp": "프로젝트 Pre-Kick Off", "t": "개발 검토 요청", "goal": "개발본부가 개발 가능성·일정·원가를 검토할 수 있도록 기획 내용을 정해진 양식으로 전달한다.", "own": "휴롬/엘에스 PM", "out": ["개발검토요청서"], "chk": ["요청서 발신 완료"], "how": ["개발 검토 요청서 작성 (제품 스펙 포함)", "기안 상신", "개발본부 발신"], "lane": 0, "ai": ["minutes"], "scr": "" }, { "id": "PROC-19", "st": 1, "g": false, "grp": "프로젝트 Pre-Kick Off", "t": "사전 검토 단계, 개발 일정 수립", "goal": "개발 착수 전 부서별 반영 요구를 한 번에 취합하고 개발 일정·범위를 맞춘다.", "own": "휴롬/엘에스 PM", "out": ["신제품기획안 (디자인 포함", "개발 요청 사항 LIST"], "chk": ["부서마다 요청 Format이 없어 걸러내는 작업이 안 됨 → 요청 양식 통일 필요"], "how": ["부서별 요구사항 요청 (공통 양식)", "요구 취합·중복 정리", "개발 요청 사항 LIST 확정", "개발 일정·범위 사전 협의"], "lane": 0, "ai": ["j_plan", "replan"], "scr": "일정표" }, { "id": "PROC-20", "st": 1, "g": false, "grp": "프로젝트 Pre-Kick Off", "t": "사양·디자인·재료비 검토, Pivoting", "goal": "기획 사양·디자인의 개발 가능성과 목표 원가 충족 여부를 확인하고, 필요 시 조정한다.", "own": "휴롬/엘에스 PM", "out": ["신제품 기획안 (조정 반영"], "chk": ["재료비 목표 원가 충족 확인", "조정 사항 기획안 반영"], "how": ["개발본부 리뷰 (사양·디자인·재료비)", "목표 원가 초과·개발 불가 항목 확인", "사양·디자인 조정(Pivoting) 협의", "조정 사항 기획안 반영"], "lane": 1, "ai": ["j_plan", "minutes"], "scr": "" }, { "id": "PROC-21", "st": 1, "g": false, "grp": "최종 사양·출시 계획 확정", "t": "권역별 런칭 계획", "goal": "재료비 검토(PROC-20)로 사양·원가가 확정되면 공급가를 영업에 공유하고 최초 출시 국가를 취합해, 공용·개별 인쇄물 범위와 언어 구성을 개발발의서에 반영한다.", "own": "상품전략팀", "out": ["최초 출시 국가 리스트", "공용·개별 인쇄물 범위표 (국가", "언어", "공용·개별 구분"], "chk": ["이 시점에는 FCST·MOQ 취합 불가 (출시 국가만 취합) → FCST·MOQ·초도 발주안은 DPP 샘플 배포 후, MP 가…"], "how": ["확정 사양·공급가 영업 공유 (PROC-15 결과 기준)", "최초 출시 국가 취합(희망) — 기본: 법인, 한국, 중국, 미국, 유럽 / 그 외 국가는 계획 있을 때만 추가 (없으면 이후…", "출시 국가 기준 공용 / 국가별 개별 인쇄물 구분", "국가별 필요 언어·인증 문구 범위 정리"], "lane": 7, "ai": ["j_manual"], "scr": "" }, { "id": "PROC-22", "st": 1, "g": false, "grp": "최종 사양·출시 계획 확정", "t": "최종 사양 확정 및 개발발의서 작성", "goal": "개발발의 전에 사양(인쇄물 범위 포함)·구성·원가·일정·출시 권역을 하나로 확정한다.", "own": "상품전략팀", "out": ["최종 사양서 (신제품 기획안 최종"], "chk": ["사양·원가·일정·출시 권역 확정"], "how": ["국가·채널별 영업 계획 수립 요청", "예상 원가·전체 일정·출시 계획 정리", "최종 사양서 확정"], "lane": 1, "ai": ["j_plan", "j_req"], "scr": "" }, { "id": "PROC-23", "st": 1, "g": false, "grp": "승인·보고", "t": "[G2] 개발발의서 작성 및 상신", "goal": "확정된 사양·투자·일정을 결재받아 개발본부·품질본부·생산본부에 개발을 의뢰한다.", "own": "상품전략팀", "out": ["개발발의서"], "chk": ["결재 완료", "개발 의뢰 메일 발송"], "how": ["확정 사양·구성·인쇄물 범위·출시 권역·인증 계획·투자비·일정을 개발발의서에 정리", "유관부서 검토·합의 의견을 반영해 개발발의서 상신 및 결재 완료", "승인된 개발발의서를 개발·품질·생산본부에 공유하고 개발 의뢰 메일 발송"], "lane": 0, "ai": ["weekly"], "scr": "" }, { "id": "X-02", "st": 1, "g": false, "grp": "1차 → 2차 → PP → 봉인", "t": "샘플 요청", "goal": "협력사에 차수별 샘플을 요청하고 평가해 다음 차수나 봉인 샘플로 넘긴다.", "own": "AX팀", "out": ["샘플 요청서", "샘플 평가표"], "chk": [], "how": [], "lane": 3, "ai": ["g_sample", "chase"], "scr": "협력사 · 샘플", "x": true, "soon": "" }, { "id": "PROC-24", "st": 2, "g": false, "grp": "개발 착수", "t": "개발 Kick-Off 및 CFT 구성", "goal": "프로젝트 개발 착수를 공식화하고,  ", "own": "상품전략팀 PM", "out": ["Kick off 회의록", "대일정표"], "chk": ["프로젝트 대일정표 전산화 관리 필요", "초기에는 디자인·CS 중심으로 운영하고, 제품 방향이 구체화되면 영업 추가 (Lesson Learned)", "※ CFT는 런칭까지 계속 운영"], "how": ["제품 기획,컨셉,사양 정리", "개발 대일정 수립", "부서별 담당자 지정", "Kick-Off 회의 진행"], "lane": 0, "ai": ["replan", "minutes"], "scr": "일정표" }, { "id": "PROC-25", "st": 2, "g": false, "grp": "설계·DR", "t": "설계 FMEA 실시 (실패 사례·고객 VOC·기능·사용환경 기반 설계 리스크 도출 및 설계 반영)", "goal": "제품의 기능 및 요구사항을 기반으로 잠재적 설계 실패 요인을 사전에 분석하고, 과거 실패사례 및 품질 리스크를 반영하여 설계 초기 단계의 예방 대책과 개선 요구사항을 도출한다.", "own": "개발본부(설계) 품질본부", "out": ["FMEA(설계표준화", "유관부서 제품반영 요청사항 LIST", "신규 구조 잠재적 고장 형태 및 과거 실패사례 분석"], "chk": ["※FMEA 진행 절차 방법 기준수립 필요", "작성 및 관리 포멧 자동화 필요"], "how": ["제품 기능 및 요구사항 분석", "기존 모델 및 유사 제품의 실패사례 수집", "CFT 참여 부서별 잠재 설계 실패 유형 도출", "설계 위험도 및 개선 우선순위 평가"], "lane": 1, "ai": ["j_voc", "j_risk"], "scr": "" }, { "id": "PROC-26", "st": 2, "g": false, "grp": "설계·DR", "t": "상세 구조 설계 및 목업(설계 검증용) 제작", "goal": "확정 사양·디자인 및 FMEA 결과반영 상세 구조 설계 실시", "own": "개발본부(설계)", "out": ["3D도면", "Part list 초안", "제품규격서 초안", "구조해석 결과서"], "chk": ["Part List 포멧 자동화 필요", "제품 규격서 전산화 필요"], "how": ["FMEA 결과반영 상세 구조 설계", "3D 도면 작도 및 설계 검증용 목업 제작"], "lane": 7, "ai": ["j_bom", "j_dr"], "scr": "품목 · BOM" }, { "id": "PROC-27A", "st": 2, "g": false, "grp": "설계·DR", "t": "설계, 목업(설계 검증용)DR 실시 및 설계 보완", "goal": "고객 요구사항의 설계 반영 여부 확인.", "own": "개발본부(설계)", "out": ["설계", "목업 DR 결과서", "설계 가단가(R&D 기준"], "chk": ["설계/목업DR 이슈List 전산화 필요"], "how": ["회의 소집 및 설계DR 주관", "부서별 발의 의견 List UP 및 설계 보완", "설계 보완 반영 결과 합의"], "lane": 3, "ai": ["j_dr"], "scr": "" }, { "id": "PROC-27B", "st": 2, "g": false, "grp": "시제품 평가·사양 합의", "t": "구성품 표준 명칭 확정", "goal": "주요 부품 명칭을 한·영·중으로 통일해 BOM·기술문서·사용설명서·서비스 문서의 용어 혼용을 막는다.", "own": "상품전략1팀", "out": ["핵심 부품 표준 명칭 LIST (한·영·중"], "chk": ["표준 명칭 LIST 확정", "관련 부서 공유"], "how": ["주요 부품 LIST 확인 (개발본부)", "한·영·중 표준 명칭 정의", "유관부서 검토 및 명칭 확정", "표준 명칭 적용 기준 공유"], "lane": 5, "ai": [], "scr": "" }, { "id": "PROC-28", "st": 2, "g": false, "grp": "시제품 평가·사양 합의", "t": "설계/목업DR 결과 반영 워킹 목업 제작", "goal": "Working 목업을 제작, 기존 모델·레퍼런스와 비교 평가하고 유관부서 의견을 모아, 금형 착수 전 제품 사양을 합의한다.", "own": "개발본부/상품전략팀", "out": ["시제품 비교 평가 결과서", "개선사항 LIST", "제품 사양 합의 결과"], "chk": ["시제품 성능 미달 및 부서 간 사양 이견 발생 시 개선 방향과 후속 조치 합의 필요"], "how": ["평가 일정 수립", "성능 비교 테스트 진행", "품평 및 의견 취합", "개선 요구사항 도출 및 제품 사양 합의"], "lane": 5, "ai": ["j_dr"], "scr": "" }, { "id": "PROC-29A", "st": 2, "g": true, "grp": "인쇄물 기획·콘텐츠", "t": "사용설명서 초안 작성 안내서 작성", "goal": "제품 사용설명서 제작을 위한 구조, 작동, 조작법 기초 data를 개발한다.", "own": "PM", "out": ["본체 조작부", "작동법", "전장 사양서 Draft"], "chk": ["DPP 3M 전 완료", "DPP 이벤트 3M 전 완료"], "how": ["사용설명서 초안 작성에 필요한 기술자료 항목·제공 일정 확인", "기구설계·전장제어 담당자가 제품 구조·작동 원리·조작 방법 및 전장 사양 초안 정리", "PM이 자료를 취합하고 누락·불명확 사항 보완 요청", "사용설명서 초안 작성용 안내자료를 상품전략팀에 전달"], "lane": 7, "ai": ["j_req", "j_manual"], "scr": "" }, { "id": "PROC-29B", "st": 2, "g": true, "grp": "협력사·설비 검토", "t": "부품 제조 협력사 평가 및 최종 선정", "goal": "제품 개발 사양에 적합한 제조 역량, 품질 수준, 원가 및 납기 대응 능력을", "own": "구매1팀", "out": ["신규부품 Part List", "업체선정(금형배분 외) 기안서"], "chk": ["금형·사출 협력사 간 개발 수행 체계 및 업무 관계 정립 필요", "협력사 운영 유형", "금형처 ↔ 휴롬 ↔ 사출처", "(금형·사출 분리 운영)"], "how": ["협력사 발굴 및 견적 비교", "생산 CAPA 및 생산 대응 능력 검토", "유관부서 의견 취합, 업체선정 기안 상신"], "lane": 2, "ai": ["g_vendor"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-29C", "st": 2, "g": true, "grp": "협력사·설비 검토", "t": "신규 설비·치공구 제작 필요성 검토 및", "goal": "제품 및 부품 생산에 필요한 신규 설비·치공구를 사전 검토하여 요구상항 및", "own": "PM(개발,생산.공정 기술)", "out": ["신규 설비 치공구 제작 관리대장"], "chk": ["신규 치공구/설비 제작 관리 주관처 명확화 필요 개발관리List 전산화 필요"], "how": ["개발·생산·품질부서별 신규 설비·치공구·검사구 필요 항목 및 요구사항 취합", "기존 설비·치공구 활용 가능 여부와 신규 제작 필요성 검토", "제작 대상·요구 사양·담당 부서·예상 비용·완료 목표일 정리", "제작 관리대장 초안을 확정·공유하고 제작 진행사항 관리"], "lane": 3, "ai": ["g_vendor"], "scr": "협력사" }, { "id": "PROC-30", "st": 2, "g": true, "grp": "승인·보고", "t": "개발 검토단계 Stage Gate (개발검토단계 → T단계)", "goal": "개발 요구사항과 관계부서 개선 요구사항에 준하여 개발 검토가 되었는지", "own": "PM", "out": ["Stage Gate 결과서", "LS개발발의서(개발요구사양서", "제품디자인시방서", "FMEA 검토 결과서.", "설계", "목업 DR결과서"], "chk": ["Stage Gate 결과 승인"], "how": ["회의 소집 및 주관", "검토 자료,결과 공유", "CFT 부서별 검토 의견, 미해결 이슈 및 추가 개선사항 취합", "검토 결과 종합 및 차기 단계 진행 여부 협의"], "lane": 0, "ai": ["j_req", "j_dr"], "scr": "프로젝트 · 관문 승인" }, { "id": "PROC-31", "st": 2, "g": true, "grp": "승인·보고", "t": "휴롬 개발발의서 작성 및 상신", "goal": "확정된 사양·투자비·일정을 승인 받아 정식 개발을 착수 한다", "own": "PM", "out": ["휴롬 개발 발의서"], "chk": ["투자비 산정을 위한 협력사 빠른 확정", "필요"], "how": ["개발발의서 작성(확정 개발 사양,투자비,개발 일정 외)", "경영진 보고 및 개발 승인 후 정식 개발 착수"], "lane": 0, "ai": ["weekly"], "scr": "" }, { "id": "PROC-32", "st": 2, "g": true, "grp": "설계·DR", "t": "제작용 도면 및 기술자료 확정·출도", "goal": "확정된 제품 설계 사양을 기반으로 금형 제작 및 부품 제조에 필요한", "own": "개발본부(설계,전장설계)", "out": ["부품도면(2D", "조립", "분해도(2D"], "chk": ["협력사 및 사내 도면 공유 룰,시스템정비 필요", "자사 CATIA ENOVIA 접근 권한 한정.", "설계담당자 도면 수정 후 PDF로 전환하여 업체,사내 개별 공유중"], "how": ["제품도면 작도", "내부 검도 및 승인", "협력사, 유관부서 도면 배포"], "lane": 1, "ai": ["j_dr"], "scr": "품목 · 도면 판" }, { "id": "PROC-33", "st": 2, "g": true, "grp": "제조처 확정", "t": "개발 계약 종료·잔금 지급 및 최종 제조처 선정", "goal": "개발만 하고 양산으로 진행하지 않을 시, 개발비 지급하고 개발 계약을 종료한다.", "own": "상품전략2팀", "out": ["개발 샘플", "개발 완료 보고서", "개발비 견적서"], "chk": [], "how": ["최종 개발 샘플 확보", "개발 완료 보고서 작성", "개발비 산출 및 지급"], "lane": 3, "ai": ["g_quote", "g_vendor"], "scr": "협력사 · 샘플" }, { "id": "PROC-34", "st": 2, "g": true, "grp": "제조처 확정", "t": "가견적 확인 (개발 사양 확정 → 제조처 가견적 회신 → 내부 공유·의사결정)", "goal": "금형전 도입시 견적을 제조처와 확인 하고, 가격경쟁력을 내부적으로 합의 한다.", "own": "상품전략2팀", "out": ["개발 샘플", "제품 사양", "BOM", "제품 단가"], "chk": [], "how": ["최종 개발 샘플을 확보", "최종 개발 제품의 사양을 확정", "제조처를 통해 BOM과 제품 단가 초안을 확보", "내부 영업본부와 합의 및 의사결정을 통해 진행여부 확인"], "lane": 3, "ai": ["j_bom", "g_quote"], "scr": "품목 · BOM" }, { "id": "X-01", "st": 2, "g": false, "grp": "가품목 → 정식 품번", "t": "품목 생성 요청", "goal": "설계 초기에 품목 코드를 먼저 받아 금형 발주·샘플·구매가 막히지 않게 한다.", "own": "AX팀", "out": ["품목 생성 요청서", "ERP 엑셀"], "chk": [], "how": [], "lane": 1, "ai": [], "scr": "", "x": true, "soon": "1.0.137" }, { "id": "PROC-35", "st": 3, "g": false, "grp": "금형 계약·투자", "t": "금형 제작 계약 협의", "goal": "금형 제작업체와 계약을 맺어 금형 제작을 착수하고, 휴롬엘에스의 금형 소유권을 확보한다.", "own": "상품전략팀", "out": ["금형 및 구매거래계약서", "기안서 (계약 체결용"], "chk": ["계약 체결 완료"], "how": ["금형 투자 대상 확인", "업체 정보·견적 수령", "법무팀 계약서 검토 의뢰", "업체 검토·수정 협의"], "lane": 2, "ai": [], "scr": "품목 · 금형·시사출" }, { "id": "PROC-36", "st": 3, "g": false, "grp": "금형 계약·투자", "t": "금형 투자비 집행 및 자산 등록", "goal": "계약 조건에 따라 금형 투자비를 적기에 집행하고, 금형을 휴롬엘에스 자산으로 등록한다.", "own": "상품전략팀", "out": ["계약금 세금계산서", "ERP 전표", "지출결의서", "이체증"], "chk": ["ERP 계정과목·세목 오등록 시 회계 오류 (SOP 참고)"], "how": ["계약금 전자세금계산서 요청", "ERP 전표 등록", "지출결의서 상신", "지급 완료 확인·이체증 수령"], "lane": 2, "ai": [], "scr": "품목 · 금형·시사출" }, { "id": "PROC-37", "st": 3, "g": false, "grp": "금형 제작·시사출", "t": "제품 설계 의도 및 구조 설명회 및", "goal": "업체(금형처) 설계사양/구조 설명", "own": "개발본부(설계)", "out": ["금형 설계  반영  요구사항 List", "회의록 및 검토 의견"], "chk": ["금형 설계  반영  요구사항 협의 완료"], "how": [], "lane": 2, "ai": ["j_trial", "minutes"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-38", "st": 3, "g": false, "grp": "금형 제작·시사출", "t": "금형 설계 검토 및 DR 실시", "goal": "제품 설계 사양을 기반으로 금형 구조 및 성형 방안을 검토하고, 제작 전 금형 설계의 적합성 및 제조 가능성을 검증하여 금형 수정 및 양산 리스크를 최소화한다.", "own": "개발본부/생산본부 (금형,사출)", "out": ["금형설계 DR 결과서"], "chk": ["※사내 금형제작.사출try 진행 업무에 대한 오너쉽을", "가지고 업무를 할 수 있는 전담 부서 또는 인원 지정 필요", "금형설계DR 체크리스트에 준하여 금형DR 실시"], "how": ["금형 제작처 금형 정보, 설계 자료 제출", "유관부서 및 양산 사출처 자료 공유", "회의 소집 및 주관(금형 설계 개선사항 취합 및 반영 협의)", "금형 설계 확정 및 제작 승인"], "lane": 2, "ai": ["j_dr", "j_trial"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-39", "st": 3, "g": false, "grp": "금형 제작·시사출", "t": "금형 제작", "goal": "금형 제작 일정을 확인하고 후속 일정 계획 수립한다", "own": "개발본부/생산본부 (금형,사출)", "out": ["금형제작 사양서"], "chk": ["부품별 try 일정 및 개선 진척사항 관리", "전산화 하여 공유 필요"], "how": ["금형 제작 일정 확인", "진행 현황 모니터링", "T0 Try일정 확정·공유"], "lane": 2, "ai": ["j_req", "j_trial"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-40", "st": 3, "g": false, "grp": "금형 제작·시사출", "t": "금형 제작처 시사출 Try (금형 동작·성형성 검증)", "goal": "금형 제작 완료 후 최초 시사출을 통해 금형 작동 상태 및 제품 성형성을 확인하고, 금형 및 부품의 개선사항을 도출한다.", "own": "개발본부/생산본부 (금형,사출)", "out": ["시사출 검토서", "치수검토서"], "chk": ["시사출 완료 및 금형 작동·", "성형 상태 확인", "주요 문제점 도출 및", "개선 조치 완료"], "how": ["금형 제작 완료 및 시사출 준비 상태 확인", "외관·치수 및 주요 품질 문제점 도출", "개선사항 정리, 후속 일정 수립"], "lane": 2, "ai": ["j_trial"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-41", "st": 3, "g": false, "grp": "금형 제작·시사출", "t": "금형처 시사출 문제점 개선 재검증 및 결과 확인", "goal": "시사출 과정에서 도출된 금형 및 부품 문제점을 개선하고, 재시사출을 통해 개선 효과와 금형 작동 및 제품 성형 품질의 적합성을 검증한다.", "own": "개발본부/생산본부 (금형,사출)", "out": ["시사출 검토서", "치수 검토서"], "chk": ["주요 문제점 개선 조치 완료"], "how": [], "lane": 2, "ai": ["j_trial", "minutes"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-42A", "st": 3, "g": false, "grp": "패키징 개발", "t": "제품 패키징 사양(박스 및 포장재) 개발", "goal": "제품 보호 및 유통 안정성을 확보하고, 물류 요구사항을 반영한 포장 박스를 개발한다.", "own": "개발본부(포장설계)", "out": ["제품 포장박스 조립 공정도", "제품 포장박스 도면", "포장재 사양 및 수량"], "chk": ["인쇄물 사양(종류, 수량, 사이즈 확인 반영)", "DPP 이벤트 3M 전 완료"], "how": ["제품·구성품의 크기·중량 및 목업·시제품 확인", "동봉 인쇄물의 종류·수량·사이즈와 물류 요구사항 확인", "포장 구조·완충재·배치 및 포장재 사양·수량 설계", "포장 샘플 제작 후 제품 보호성·수납성·포장 작업성 검토 및 보완"], "lane": 7, "ai": ["g_pack"], "scr": "품목 · 도면 판" }, { "id": "PROC-42B", "st": 3, "g": false, "grp": "인쇄물 기획·콘텐츠", "t": "인쇄물 목록 작성", "goal": "권역별 인쇄물 목록과 언어 범위를 확정하고,", "own": "상품전략팀, 커뮤니케이션디자인팀", "out": ["권역별 인쇄물 적용 LIST (확정", "인쇄물 마스터(공용) 리스트", "사용설명서 초안", "인쇄물 개발 일정표"], "chk": ["추가 런칭 국가·언어 누락 여부", "국가별 인증문구 반영 필요 여부", "공용/국가별 전용 설명서 구분", "디자인팀 인쇄물 리드타임 확보"], "how": ["권역별 인쇄물·언어 범위 확정 (PROC-16A 기준)", "인쇄물 마스터 리스트 작성·자재코드 생성 요청", "사용설명서·명판 초안 작성", "인쇄물 제작 일정 협의"], "lane": 7, "ai": ["replan", "j_manual"], "scr": "일정표" }, { "id": "PROC-43A", "st": 3, "g": false, "grp": "제품 인증", "t": "인증용 사용설명서 사전 준비", "goal": "T 샘플 확보 즉시 인증을 접수할 수 있도록 인증 자료를 미리 준비한다.", "own": "상품전략팀", "out": ["인증용 사용설명서"], "chk": ["명판·사용설명서 전달 완료"], "how": ["인증용 사용설명서 준비 (PROC-25D 초안 활용)", "사용설명서 등록"], "lane": 4, "ai": ["certlist", "j_manual"], "scr": "품목 · 인증" }, { "id": "PROC-43B", "st": 3, "g": false, "grp": "제품 인증", "t": "인증용 명판 준비", "goal": "T 샘플 확보 즉시 인증을 접수할 수 있도록 인증 자료를 미리 준비한다.", "own": "상품디자인팀", "out": ["인증별 제품 명판"], "chk": [], "how": ["인증별 제품 명판 확정", "명판 마스터 등록"], "lane": 4, "ai": ["certlist"], "scr": "품목 · 인증" }, { "id": "PROC-44A", "st": 3, "g": false, "grp": "인쇄물 기획·콘텐츠", "t": "QR코드 생성 대상 정리 및 요청", "goal": "인쇄물·제품에 넣을 QR 대상(영상·매뉴얼·지원 페이지)을 정리해 생성을 요청한다.", "own": "상품전략팀", "out": ["QR 대상 리스트"], "chk": ["인쇄 후에는 QR 변경 불가 — 링크 대상이 바뀌어도 되는 고정 URL(리다이렉트) 사용 권장"], "how": ["QR 적용 인쇄물·위치 정리", "국가·언어별 연결 콘텐츠·URL 정리", "QR 생성 요청 (마케팅)"], "lane": 7, "ai": ["j_manual"], "scr": "" }, { "id": "PROC-44B", "st": 3, "g": false, "grp": "인쇄물 기획·콘텐츠", "t": "법무, 고객경영 등 유관부서 검토", "goal": "인쇄물의 법적 표기·경고 문구·고객 응대 내용을 디자인 의뢰 전에 검토받는다.", "own": "상품전략팀", "out": ["검토 의견 반영 콘텐츠"], "chk": ["부서별 검토 완료"], "how": ["인쇄물 콘텐츠 검토 요청", "부서별 의견 취합", "수정 반영"], "lane": 7, "ai": ["j_manual"], "scr": "" }, { "id": "PROC-45", "st": 3, "g": false, "grp": "인쇄물 디자인·검수", "t": "인쇄물 디자인 의뢰", "goal": "확정 콘텐츠와 자료를 디자인팀에 전달해, DPP 일정에 맞춰 인쇄물 디자인을 의뢰한다.", "own": "상품전략팀", "out": ["디자인 양산 인쇄물 신청서"], "chk": ["M-4 (출시 4개월 전) 의뢰 기준"], "how": ["디자인 양산 인쇄물 신청서 작성·자재코드 생성 요청", "콘텐츠(PPT)·리스트·STP 파일 전달", "양산 일정별 우선순위 전달"], "lane": 7, "ai": ["j_manual"], "scr": "" }, { "id": "PROC-46", "st": 3, "g": false, "grp": "인쇄물 디자인·검수", "t": "1차 인쇄물 검수", "goal": "기준 향지(Master) 시안의 내용·사양·표기 오류를 검수한다.", "own": "상품전략팀", "out": ["1차 검수 의견"], "chk": ["Master 확정 이후 번역 진행"], "how": ["Master 시안 수령", "내용·사양·표기 검수", "수정 요청 취합·전달"], "lane": 7, "ai": ["j_manual"], "scr": "" }, { "id": "PROC-47", "st": 3, "g": true, "grp": "인쇄물 디자인·검수", "t": "인쇄물 시방서·스티커류 부착 위치 지정서 완료", "goal": "인쇄물 제작 사양과 스티커류 부착 위치·방법을 문서로 확정해, 권역별 요구사항이 발주·생산에 일관되게 적용되도록 한다.", "own": "상품전략팀 커뮤니케이션팀", "out": ["인쇄물 시방서 (자재코드·규격·재질·인쇄 사양·적용 권역", "스티커류 부착 위치 지정서 (적용 권역·위치·방향·부착 방법", "유관부서 배포 내역"], "chk": ["DPP 생산 수립 계획 전 완료", "DPP 생산 3주전"], "how": ["인쇄물별 자재코드·규격·재질·인쇄 사양·적용 권역 정리", "영업의 권역별 별도 부착 위치 요구사항 확인", "제품·포장 도면을 기준으로 스티커별 부착 위치·방향·방법 지정", "개발·생산부서의 기술적 제약·작업성 검토 및 구매부서의 제작 사양·납기 확인 의견 반영"], "lane": 7, "ai": ["j_manual"], "scr": "" }, { "id": "PROC-48", "st": 3, "g": false, "grp": "사양·BOM 확정", "t": "개발 Master BOM 생성 및 ERP 등록", "goal": "제품 구성 부품 및 자재 정보를 체계적으로 등록하여 개발 사양과 양산 사양의 일관성을 확보하고 자재 조달 및 생산 관리의 기준 정보를 구축한다.", "own": "개발본부(설계)", "out": ["ERP BOM"], "chk": ["ERP BOM 등록 완료"], "how": ["확정 Part List 및 제품·부품별 자재코드 확인", "조립 구조에 따라 상·하위 품목과 소요 수량 정리", "구성품·포장재·인쇄물의 누락 및 사양별 적용 여부 확인", "개발 Master BOM 작성 및 ERP 등록"], "lane": 1, "ai": ["j_bom"], "scr": "품목 · BOM" }, { "id": "PROC-49", "st": 3, "g": false, "grp": "금형 제작·시사출", "t": "금형 이관 및 양산 사출처 인수·인계 관리", "goal": "금형 제작처에서 제작 완료된 금형을 양산 사출처로 이관", "own": "개발본부/생산본부 (금형,사출)", "out": ["금형이관 합의서"], "chk": ["양산 사출처 금형이관 완료"], "how": [], "lane": 2, "ai": ["j_trial"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-50", "st": 3, "g": false, "grp": "금형 제작·시사출", "t": "양산 사출처 시사출 및 양산성 검증", "goal": "실제 양산 사출처의 설비 및 생산환경에서 시사출을 진행하여 금형 작동 상태, 사출 조건 및 부품 품질을 검증하고 양산 적용 가능성을 확인한다.", "own": "개발본부/생산본부 (금형,사출)", "out": ["시사출 검토서", "양산성평가 보고서(협력사"], "chk": ["양산 초도 시사출 완료", "사출 양산성 확보"], "how": [], "lane": 2, "ai": ["j_trial", "g_vendor"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-51", "st": 3, "g": false, "grp": "금형 제작·시사출", "t": "양산 사출처 시사출 문제점 개선 재검증 및 결과 확인", "goal": "시사출 과정에서 도출된 금형 및 부품 문제점을 개선하고, 재시사출을 통해 개선 효과와", "own": "개발본부/생산본부 (금형,사출)", "out": ["시사출 검토서", "치수 검토서", "문제점관리대장(Issue List"], "chk": ["문제점관리대장(Issue List) 양식 및 관리 전산화 필요"], "how": [], "lane": 2, "ai": ["j_trial", "minutes"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-52A", "st": 3, "g": true, "grp": "사양·BOM 확정", "t": "디스플레이 디자인 · 컨텐츠 · 언어 검수", "goal": "디스플레이의 화면 구성·표시 내용·언어별 디자인 사양을 확정해, 고객이 정보를 쉽게 이해하고 개발본부가 동일한 기준으로 구현하도록 한다.", "own": "상품전략팀/상품디자인팀", "out": ["디스플레이 디자인 사양서 (화면별 구성·문구·아이콘·글자 크기·색상", "국가·언어별 표시 문구 및 적용표", "현지 언어 검수 결과·최종 확정본"], "chk": [], "how": ["디스플레이 화면별 표시 항목·문구·아이콘 및 언어별 적용 범위 정리", "상품디자인팀이 화면 구성·글자 크기·색상 등 디자인 사양 구체화", "해외영업·법인이 현지 언어 표현·표기 적합성 검수 및 수정 의견 회신", "개발본부와 표시 영역·해상도·문자 지원 등 구현 제약 확인 및 수정 반영"], "lane": 5, "ai": ["j_req", "j_bom"], "scr": "품목 · BOM" }, { "id": "PROC-52B", "st": 3, "g": false, "grp": "사양·BOM 확정", "t": "도면 SPEC(치수,재질, 관리SPEC) 및", "goal": "사출  완료된 부품의 치수, 외관 및 기능 요구사항을 확인 하고", "own": "개발본부(설계)", "out": ["부품도면(2D", "조립", "분해도(2D", "제품 디자인시방서(후공정 시방"], "chk": ["T1생산 확정도면 출도 및 배포"], "how": ["시사출 부품과 도면의 치수·재질·외관·조립 적합성 확인", "품질관리팀과 기능·성능 및 중점 관리 항목 점검", "상품디자인팀과 도장·인쇄 등 후공정 사양 확인", "점검 결과를 반영해 도면·후공정 사양·관리 기준 확정"], "lane": 7, "ai": ["j_bom"], "scr": "품목 · BOM" }, { "id": "PROC-53A", "st": 3, "g": false, "grp": "부품 패키징 개발", "t": "부품 입고 포장 사양 확정", "goal": "부품의 운송 및 보관 과정에서 발생할 수 있는 파손과 외관 손상을 방지하고, 입고·보관·생산 투입에 적합한 포장 기준을 확정한다.", "own": "구매1팀", "out": ["부품 포장사양서"], "chk": ["포장 단위 및 포장 방법 확정"], "how": [], "lane": 7, "ai": ["j_req", "g_pack"], "scr": "" }, { "id": "PROC-53B", "st": 3, "g": false, "grp": "출시 자료 준비", "t": "제품 소개서 초안 (USP·POD)", "goal": "고객 언어 중심의 소구점을 정리해, 설명회·영업·마케팅 자료의 기준 문서로 쓴다.", "own": "상품전략팀", "out": ["제품 소개서 v0.5 (초안"], "chk": ["3D, AR 시각자료 최종사양 반영​"], "how": ["타깃·사용 상황과 제품 특장점·USP·POD를 고객 언어로 정리하고 소개서 구성안 작성", "기능·성능 평가결과 및 기존·경쟁 모델 비교 등 소구점별 증빙자료 정리", "상품디자인팀에 렌더링·제품 사용 씬·디스플레이 UI 씬 등 필요한 이미지와 표현 의도 전달 및 제작 요청", "개발팀에 모터·주요 기능의 작동 원리·기술적 특징에 대한 보충자료 작성 및 기술 내용 확인 요청"], "lane": 7, "ai": [], "scr": "" }, { "id": "PROC-53C", "st": 3, "g": false, "grp": "T단계 준비·생산", "t": "제조·조립 공정 설계 및 생산 작업표준 수립", "goal": "확정된 제품 및 부품 사양을 기반으로 제조·조립 공정 흐름과 작업 조건을 수립하여 안정적인 생산 및 양산 운영 기반을 확보한다.", "own": "생산팀", "out": ["공정설계도(Lay out", "Process Flow Chart", "작업지도서"], "chk": ["T1 생산 제조·조립 공정 확정"], "how": [], "lane": 2, "ai": [], "scr": "품목 · 금형·시사출" }, { "id": "PROC-53D", "st": 3, "g": false, "grp": "T단계 준비·생산", "t": "제품 신뢰성 시험평가 항목 설정", "goal": "개발 모델의 특성에 적합한 시험평가 항목 및 기준을 수립하여 제품의 성능, 안전성 및 신뢰성을 검증한다.", "own": "품질보증팀", "out": ["시험규격서"], "chk": ["시험항목 확정"], "how": [], "lane": 2, "ai": [], "scr": "품목 · 금형·시사출" }, { "id": "PROC-53E", "st": 3, "g": false, "grp": "T단계 준비·생산", "t": "제품 유효성평가 계획 수립", "goal": "개발 모델의 특성에 적합한 시험평가 항목 및 기준을 수립하여 제품의 성능, 안전성 및 신뢰성을 검증한다.", "own": "개발본부(설계)", "out": ["제품 휴효성 평가서"], "chk": ["평가항목 수립"], "how": [], "lane": 2, "ai": [], "scr": "품목 · 금형·시사출" }, { "id": "PROC-54", "st": 3, "g": false, "grp": "T단계 준비·생산", "t": "T1 생산계획 수립 및 생산 준비 일정 관리", "goal": "T1 시제품 생산수량, 자재 입고 준비, 생산 일정을 사전에 계획 수립한다.", "own": "PM", "out": ["생산계획협의회의록"], "chk": ["T1생산 수량,사양,일정 확정", "향휴계획 합의"], "how": ["휴롬 개발 검토·평가·인증용 샘플 수량·사양·필요 일정 정리", "휴롬엘에스 영업·AS·고객만족·FnB·마케팅이 팀별 샘플 수요를 제출하고 상품전략이 취합·전달", "PM이 휴롬·휴롬엘에스 요청을 종합해 총 생산수량·사양 및 용도별 배정안 정리", "휴롬 개발·생산이 부품·자재 입고 및 생산 준비 상태·생산 가능 일정 확인"], "lane": 2, "ai": ["replan", "j_trial"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-55", "st": 3, "g": false, "grp": "T단계 준비·생산", "t": "T1 이벤트 생산 및 생산 실적 관리", "goal": "T1 생산계획에 따라 제품을 생산하며 제조공정의 적합성 및 제품 이슈사항을 점검한다.", "own": "개발본부 생산팀", "out": ["T1 생산 제품"], "chk": [], "how": [], "lane": 2, "ai": ["j_trial"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-56A", "st": 3, "g": true, "grp": "제품 인증", "t": "국가별 인증(전기안전·식검) 요구사항 확인", "goal": "출시 대상 국가 및 권역별 법규·인증 요구사항에 따라 전기안전 및 식품 접촉 관련 인증을 취득하여 제품의 판매·유통 요건을 확보한다.", "own": "개발본부(인증)", "out": ["국가·권역별 인증서", "시험성적서", "인증 진행 현황 및 미결사항 목록"], "chk": [], "how": ["출시 국가·권역 및 대상 모델·사양별 전기안전·식품 접촉 관련 인증 요구사항 확인", "인증별 제출 기술자료·명판·사용설명서 및 시료 준비", "시험기관 접수 후 시험·심사 일정 및 진행 현황 관리", "보완 요청·부적합 사항을 담당 부서에 전달하고 수정자료·개선 시료 제출"], "lane": 4, "ai": ["certlist"], "scr": "품목 · 인증" }, { "id": "PROC-56B", "st": 3, "g": true, "grp": "출시 자료 준비", "t": "제품 소개서 기반 영업·마케팅 설명회 진행", "goal": "실사용 테스트 전 - 영업에 특장점과 제품 설명을 진행(소개서로)", "own": "상품전략팀", "out": ["제품소개서·설명회 자료", "질의응답 및 추가 요청사항 목록"], "chk": [], "how": ["제품소개서와 제품 특장점·USP 설명자료 준비", "국내영업·해외영업·마케팅팀 대상 설명회 일정 안내 및 참석 요청", "제품소개서를 활용해 타깃·사용 상황·주요 기능·특장점·USP 및 차별화 근거 설명", "참석 부서의 질의에 답변하고 추가 설명·자료 요청사항 정리"], "lane": 7, "ai": [], "scr": "" }, { "id": "PROC-56C", "st": 3, "g": false, "grp": "T단계 평가·개선", "t": "제품 유효성평가", "goal": "개발 모델이 제품 규격에 적합하게 제작 되었는지 검증한다.", "own": "개발본부(설계) 품질본부", "out": ["제품 휴효성 평가 결과서"], "chk": ["제품유효성평가 완료", "문제점 도출"], "how": [], "lane": 2, "ai": [], "scr": "품목 · 금형·시사출" }, { "id": "PROC-56D", "st": 3, "g": false, "grp": "T단계 평가·개선", "t": "실사용평가 실시, 샘플 디자인 리뷰 및 사용성 테스트", "goal": "T 샘플이 기획안·개발발의서 사양을 반영했는지 확인하고, DPP 진행 가능 여부를 판단한다.", "own": "상품전략", "out": ["T0 실사용 테스트 평가서"], "chk": ["개발발의서 사양 반영 여부", "USP 구현 여부", "고객 입장에서 이해 어려운 요소"], "how": ["T0 디자인 리뷰 참석", "기획 사양 확인 (외관·핵심 기능·구성품)", "사용성 테스트 (조작·조립·세척)", "문제점 등록"], "lane": 2, "ai": ["j_voc", "j_trial"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-57", "st": 3, "g": false, "grp": "T단계 평가·개선", "t": "실사용 결과 취합", "goal": "T 리뷰·테스트 결과를 취합하여 정리한다", "own": "상품전략팀, 개발본부", "out": ["T0 개선 사항 LIST"], "chk": ["DPP 반영 항목 확정"], "how": ["T0 Issue 정리·분류", "개선 우선순위 협의 (개발본부)", "DPP 반영 항목 확정·공유"], "lane": 2, "ai": ["j_trial"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-58", "st": 3, "g": false, "grp": "T단계 평가·개선", "t": "문제점 통합 관리 및 개선 대책 수립·진척 관리", "goal": "T단계 샘플 제작 및 평가 과정에서 발생한 문제점을 체계적으로 취합·분석하고,", "own": "PM", "out": ["문제점관리대장(Issue List", "문제점 원인 분석 검토서", "개선 대책서"], "chk": ["발생 문제점의 등록 및", "담당 부서, 담당자 지정 완료", "문제점의 원인 분석 및", "개선 대책 수립 완료"], "how": ["평가 항목별 문제점취합", "(생산이슈,시험평가 결과,제품유효성평가,LS실사용평가)", "문제점 등록회의 및 개선대책회의 주관", "문제점별 발생 원인 및 심각도 등급 설정"], "lane": 2, "ai": ["minutes"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-59", "st": 3, "g": false, "grp": "T단계 평가·개선", "t": "개선 검증 일정 및 부서별 진행 현황 관리,", "goal": "T단계 샘플 문제점에 대한 개선 조치의 적용 여부 및 개선 효과를 검증하여 제품 완성도와 양산 품질 확보", "own": "PM", "out": ["문제점관리대장(Issue List"], "chk": ["개선 미흡 항목 재개선 및 재검증", "개선 효과가 미흡한 항목은 원인 재분석 및 검증 재실시", "즉시개선항목과 지속 관리항목 구분 다음단계 진행 여부 판단", "※필요시 T2(T단계 2차 생산) 생산검증 진행."], "how": [], "lane": 2, "ai": ["replan", "minutes"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-60A", "st": 3, "g": false, "grp": "검사 기준·부품 승인", "t": "부품 입고검사 기준 수립 및 검사 협정 체결", "goal": "입고 부품의 품질 적합성을 확보하기 위해 부품별 검사 항목, 검사 기준 및 판정 방법을 사전에 정의하여 수입검사 기준을 수립한다.", "own": "품질관리팀", "out": ["검사기준서", "검사성적서", "외관승인서", "Master Sample"], "chk": ["부품 검사협정 완료"], "how": [], "lane": 5, "ai": ["g_fai"], "scr": "" }, { "id": "PROC-60B", "st": 3, "g": false, "grp": "검사 기준·부품 승인", "t": "완제품 출하검사(OQC) 기준 수립", "goal": "완제품의 출하 품질을 확보하기 위해 제품 성능, 외관, 기능 및 안전성에 대한 최종 검사 항목과 판정 기준을 수립한다.", "own": "품질관리팀", "out": ["제품검사기준서"], "chk": ["완제품 검사 항목, 검사 방법,", "판정 기준 확정"], "how": [], "lane": 5, "ai": ["g_fai"], "scr": "" }, { "id": "PROC-61", "st": 3, "g": false, "grp": "검사 기준·부품 승인", "t": "신규 부품 부품 승인", "goal": "신규 개발 부품 협력사 양산 승인", "own": "PM", "out": ["부품 승인원(PPAP"], "chk": ["부품별 승인 검토서류 승인 전산화 필요", "(현재 방식: 협력사 제출 서류 수기 사인 승인 후 스캔본 전자결재 진행)"], "how": [], "lane": 3, "ai": ["g_aprv", "g_fai"], "scr": "협력사 · 승인원" }, { "id": "PROC-62", "st": 3, "g": false, "grp": "승인·보고", "t": "개발단계 Stage Gate (Tn단계 -> DPP단계)", "goal": "T단계 개발 및 검증 결과를 종합적으로 검토하여 개발 요구사항 충족 여부와 양산 준비 수준을 확인하고,  DPP 단계 진입 여부를 결정한다.", "own": "PM", "out": ["Stage Gate 결과서", "[첨부]", "'-PM:부품승인원", "문제점관리대장", "신규 설비 치공구 제작 관리대장", "개발1팀:제품규격서"], "chk": ["※다음단계 진행 여부에 대한 명확한 기준 수립 필요"], "how": ["T1 개발 및 검증 및 문제점 개선 결과 자료 취합", "부서별 검토 자료 및 완료 실적 공유", "개발 요구사항 및 품질·생산 준비 상태 검토", "미결 문제점 및 잔여 리스크 확인"], "lane": 0, "ai": ["j_req", "j_bom"], "scr": "프로젝트 · 관문 승인" }, { "id": "PROC-63", "st": 3, "g": true, "grp": "도입단가 품의 및 발주", "t": "최종 도입조건 확인", "goal": "상품의 최종 도입조건과 단가를 확인하고 내부 확정한다.", "own": "상품전략2팀", "out": ["도입단가품의"], "chk": [], "how": ["스펙 확정", "FOC등 도입조건 최종 합의 (제조처, 영업본부)", "도입단가 품의"], "lane": 3, "ai": [], "scr": "" }, { "id": "PROC-64", "st": 3, "g": true, "grp": "AS파트리스트 선정 및 확정", "t": "AS가능 범위 확정", "goal": "상품 : AS가능 범위를 확정하고 범위별 필요한 부품을 재고로 등록가능 하도록 시스템화 한다.", "own": "AS팀 상품전략팀 개발본부", "out": ["AS 파트리스트 (수리 가능 범위·교체 및 공급 단위 포함", "AS 부품코드 및 시스템 등록 내역"], "chk": [], "how": ["개발 Part List·도면 및 제품 구성 확인", "AS팀·개발본부와 수리 가능 범위 및 부품별 교체·공급 단위 협의", "구매와 AS 부품 조달 가능 여부·공급조건 확인", "협의 결과를 반영하여 AS 파트리스트 확정"], "lane": 1, "ai": ["j_as"], "scr": "" }, { "id": "PROC-65", "st": 3, "g": false, "grp": "FCST·발주 계획", "t": "최종 도입조건 확인", "goal": "상품의 최종 도입조건과 단가를 확인하고 내부 확정한다.", "own": "영업기획", "out": ["권역별 FCST·초도 발주안"], "chk": ["신규 Task (PROC-16A에서 이동) — Task ID는 통합 시 부여"], "how": ["FCST 요청 (DPP 샘플 배포 후, MP 가능일 M-3 기한)", "국가·SKU·컬러·전압별 FCST 취합", "기준 MOQ(PROC-08) 대비 수량 검토", "MOQ 분할·초도·추가 발주안 협의"], "lane": 3, "ai": ["j_iqc", "j_as"], "scr": "" }, { "id": "PROC-66", "st": 3, "g": false, "grp": "출시 자료 준비", "t": "사용가이드 영상 기획", "goal": "CS 고객 배포와 공용으로 쓸 사용가이드 영상을 기획하고 촬영 일정을 확보한다.", "own": "고객경영본부(CS) 상품전략팀", "out": ["영상 촬영 기획안"], "chk": ["DPP 샘플"], "how": ["영상 촬영 기획안 작성", "CS 담당자와 내용 협의 → 최종 기획안", "촬영 미팅 및 일정 확보"], "lane": 0, "ai": ["j_plan", "j_as"], "scr": "" }, { "id": "PROC-67", "st": 3, "g": true, "grp": "DPP 준비·생산", "t": "DPP 적용 사양 및 샘플 구성 확정", "goal": "DPP 적용 사용 확정 점검", "own": "PM", "out": ["제품", "부품 규격 확정", "제품규격서", "도면", "부품승인원", "관리계획서"], "chk": ["인쇄물 디자인 시방서 3주전 확정 필요"], "how": ["PM이 CFT에 DPP 적용 사양 및 준비 완료 여부 확인 요청", "CFT 각 부서가 담당 항목의 확정 여부와 기준 자료 간 일치 여부 점검", "미확정·불일치 항목의 보완 내용과 완료 일정 협의", "PM이 점검 결과를 종합해 DPP 적용 사양·샘플 구성을 확정하고 적용 범위 공유"], "lane": 7, "ai": ["j_req", "j_bom"], "scr": "협력사 · 승인원" }, { "id": "PROC-68", "st": 3, "g": false, "grp": "DPP 준비·생산", "t": "DPP 제품 권역·사양 및 샘플 수량 확정", "goal": "DPP 제품 생산수량, 자재 입고 준비, 생산 일정을 사전에 계획 수립한다.", "own": "PM", "out": ["생산계획협의서"], "chk": ["영업용 Default 수량 확인", "중국영업 10대", "국내영업/마케팅 : 20대"], "how": ["상품전략1팀이 영업팀/바이어 배포용 LS 제공 수량·사양을 확정해 PM에게 공유", "개발팀이 검토 샘플 수량을, 품질보증팀이 시험 시료의 제품·부품별 수량을 확정·공유", "CFT 각 부서가 담당 부품의 입고 일정을 점검하고 생산 준비 가능 시점 공유", "PM이 부서별 요청과 입고 일정을 종합해 DPP 생산계획 협의"], "lane": 6, "ai": ["g_sample"], "scr": "협력사 · 샘플" }, { "id": "PROC-69", "st": 3, "g": true, "grp": "DPP 준비·생산", "t": "DPP 생산 자재 소요량 산출 및 발주·입고 관리", "goal": "DPP 생산을 위한 자재수량을 확인하고 발주 진행", "own": "구매본부", "out": ["DPP 자재 소요량 산출표"], "chk": ["※장납기 자재 선행 양산발주 진행을 위한 부품 사양 확정 협의 필요"], "how": [], "lane": 3, "ai": [], "scr": "" }, { "id": "PROC-70", "st": 3, "g": false, "grp": "DPP 준비·생산", "t": "DPP 이벤트 생산 및 생산 실적 관리", "goal": "DPP 생산계획에 따라 제품을 생산하며 제조공정의 적합성 및 제품 이슈사항을 점검한다.", "own": "생산팀", "out": ["DPP 생산 제품 및 생산 실적", "공정 점검 결과서", "생산 문제점 관리대장(Issue List"], "chk": [], "how": ["확정 생산계획 기준 사양별 작업 지시 및 자재·라인 준비 상태 확인", "DPP 생산 진행 및 제조·조립·포장 공정 점검", "생산품의 품질·사양 적합성 확인 및 발생 문제점 기록", "생산 실적과 공정 점검 결과를 정리하고 후속 개선 필요사항 공유"], "lane": 5, "ai": ["minutes"], "scr": "프로젝트 · 이슈·리스크" }, { "id": "PROC-71A", "st": 3, "g": false, "grp": "DPP 평가·개선", "t": "제품 신뢰성 시험평가 실시", "goal": "개발 모델의 신뢰성 시험을 통해 제품의 내구성 및 사용환경에서의 성능 유지 여부를 검증한다.", "own": "품질보증팀", "out": ["시험계획서", "시험결과서"], "chk": ["시험평가 완료", "Fail항목 재시험 완료"], "how": [], "lane": 4, "ai": [], "scr": "" }, { "id": "PROC-71B", "st": 3, "g": false, "grp": "DPP 평가·개선", "t": "제품 유효성평가", "goal": "개발 모델이 제품 규격(패키지/인쇄물 포함)에 적합하게 제작 되었는지 검증한다.", "own": "개발본부(설계) 개발본부(포장) 품질본부", "out": ["제품 휴효성 평가 결과서", "패키징 (도면", "공정도)시방서"], "chk": ["제품유효성평가 완료", "문제점 도출"], "how": [], "lane": 5, "ai": ["g_pack"], "scr": "품목 · 도면 판" }, { "id": "PROC-71C", "st": 3, "g": true, "grp": "출시 자료 준비", "t": "출시 자료 영상 촬영", "goal": "출시 국가별 사용 가이드 영상 촬영을 진행한다.", "own": "커뮤니케이션디자인팀", "out": ["기획안 영상 리스트 전체의 출시 국가·언어별 최종 사용가이드 영상"], "chk": [], "how": ["기획안의 영상 리스트와 출시 국가·언어별 제작 범위 확인", "DPP 샘플의 조작부·레이저 각인·디스플레이 언어를 확인하고 국가별 촬영 대상 구분", "국가별 언어가 적용된 샘플로 해당 장면을 각각 별도 촬영하고 영상별 편집·타이틀·자막 반영", "기획안 부합 여부와 촬영 내용·타이틀·자막에 대한 공동 검수 진행"], "lane": 0, "ai": ["j_plan"], "scr": "" }, { "id": "PROC-71D", "st": 3, "g": false, "grp": "DPP 평가·개선", "t": "DPP 샘플 점검 및 실사용 평가 (엘에스)", "goal": "DPP 샘플로 개선/기획 사양 구현 여부를 점검하고 검증한다", "own": "상품전략팀", "out": ["실사용 평가 결과서"], "chk": ["평가 결과 취합 완료"], "how": ["샘플 점검 (상품전략팀)", "법인·CS 실사용 평가", "영업·법인 합동 평가", "평가 결과 취합"], "lane": 5, "ai": ["g_sample"], "scr": "협력사 · 샘플" }, { "id": "PROC-71E", "st": 3, "g": false, "grp": "DPP 평가·개선", "t": "개선 검증사항 확인", "goal": "DPP 평가·설명회·테스트 피드백을 한 리스트로 모아, 개선이 검증 결과를 개발에 전달한다.", "own": "상품전략팀", "out": ["피드백·요청사항 체크리스트"], "chk": ["개선 요청 완료"], "how": ["피드백 통합 (체크리스트)", "개선 필요 항목 정리 및 개발 요청"], "lane": 5, "ai": [], "scr": "" }, { "id": "PROC-71F", "st": 3, "g": false, "grp": "FCST·발주 계획", "t": "권역별 FCST 취합 및 MOQ·초도 발주안 조율", "goal": "DPP 샘플 배포·평가 후 영업이 실물을 보고 판단한 FCST를 받아, MOQ 기준 초도·추가 발주안을 확정한다.", "own": "영업기획", "out": ["권역별 FCST·초도 발주안"], "chk": ["신규 Task (PROC-16A에서 이동) — Task ID는 통합 시 부여"], "how": ["FCST 요청 (DPP 샘플 배포 후, MP 가능일 M-3 기한)", "국가·SKU·컬러·전압별 FCST 취합", "기준 MOQ(PROC-08) 대비 수량 검토", "MOQ 분할·초도·추가 발주안 협의"], "lane": 3, "ai": ["j_iqc", "j_as"], "scr": "" }, { "id": "PROC-74", "st": 3, "g": false, "grp": "DPP 평가·개선", "t": "개선 검증 일정 및 부서별 진행 현황 관리,", "goal": "DPP단계 샘플 문제점에 대한 개선 조치의 적용 여부 및 개선 효과를 검증하여 제품 완성도와 양산 품질 확보", "own": "PM", "out": ["문제점관리대장(Issue List"], "chk": ["개선 미흡 항목 재개선 및 재검증", "개선 효과가 미흡한 항목은 '즉시개선항목'과 '지속 관리", "(초기유동 개선 진행)항목'으로 구분 하여 개선 또는", "차기 단계 진행 여부 판단"], "how": [], "lane": 5, "ai": ["replan", "minutes"], "scr": "프로젝트 · 이슈·리스크" }, { "id": "PROC-75", "st": 3, "g": false, "grp": "인쇄물 디자인·검수", "t": "인쇄물 수정", "goal": "Master를 확정하고 국가별 번역본을 만든다.", "own": "상품전략팀", "out": ["수정 시안", "국가별 번역본"], "chk": ["Master 확정", "번역본 적용"], "how": ["수정 반영 확인", "Master 확정", "국가별 파생 번역 의뢰·적용"], "lane": 7, "ai": ["j_manual"], "scr": "" }, { "id": "PROC-76", "st": 3, "g": false, "grp": "인쇄물 디자인·검수", "t": "2차 인쇄물 검수", "goal": "수정·번역본 반영 여부와 국가별 표기를 최종 검수한다.", "own": "상품전략팀", "out": ["최종 검수 완료 파일"], "chk": ["국가별 최종 승인"], "how": ["1차 수정 반영 여부 확인", "국가별 번역·인증 문구 검수", "최종 승인"], "lane": 7, "ai": ["j_manual"], "scr": "" }, { "id": "PROC-77A", "st": 3, "g": false, "grp": "인쇄물 디자인·확정", "t": "LPP 적용 인쇄물 배포", "goal": "LPP에서 양산품과 같은 상태로 적용할 수 있도록 최종 인쇄물을 배포한다.", "own": "상품전략팀", "out": ["최종 인쇄물 파일", "배포 내역"], "chk": ["배포 완료"], "how": ["최종 인쇄 파일 확정", "생산·구매 배포", "LPP 적용 일정 확인"], "lane": 7, "ai": ["j_manual"], "scr": "" }, { "id": "PROC-77B", "st": 3, "g": false, "grp": "인쇄물 디자인·확정", "t": "스티커류 부착 위치 지정", "goal": "양산 라인에서 스티커가 정확한 위치에 붙도록 기준을 문서로 정한다.", "own": "상품전략팀", "out": ["스티커류 부착 위치 지정서"], "chk": ["지정서 공유 완료"], "how": ["부착 위치 협의 (커뮤니케이션디자인팀, 생산)", "영업 요청 별도 스티커 협의", "부착 위치 지정서 작성·공유"], "lane": 7, "ai": ["j_manual"], "scr": "" }, { "id": "PROC-78", "st": 3, "g": false, "grp": "승인·보고", "t": "개발단계 Stage Gate  (DPP단계 → LPP)", "goal": "T1 개발 및 검증 결과를 종합적으로 검토하여 개발 요구사항 충족 여부와 양산 준비 수준을 확인하고, PP 단계 진입 여부를 결정한다.", "own": "PM", "out": ["Stage Gate 결과서", "[첨부]", "'-PM:부품승인원", "문제점관리대장", "신규 설비 치공구 제작 관리대장", "개발1팀:제품규격서"], "chk": ["Stage Gate 평가 기준 만족", "Stage Gate 결과 기안 합의/승인"], "how": [], "lane": 0, "ai": ["j_req", "j_bom"], "scr": "프로젝트 · 관문 승인" }, { "id": "PROC-79", "st": 3, "g": true, "grp": "BOM 생성", "t": "품목코드·BOM 등록 요청 및 자재코드 생성", "goal": "생산 확정된 국가 법인(기본) 향지의 품목코드와 BOM 등록 요청", "own": "상품전략팀", "out": ["모델명", "품목명(자재명", "품번(자재코드"], "chk": [], "how": ["모델명 채번", "품목명/자재명 채번", "품번 채번", "자재코드 채번"], "lane": 1, "ai": ["j_bom"], "scr": "품목 · BOM" }, { "id": "PROC-80", "st": 3, "g": true, "grp": "LPP 준비·생산", "t": "LPP 사양 확정", "goal": "LPP 적용 사용 확정 점검", "own": "PM,상품전략팀", "out": ["리스트업 필요", "표준류"], "chk": [], "how": [], "lane": 6, "ai": [], "scr": "" }, { "id": "PROC-81", "st": 3, "g": true, "grp": "LPP 준비·생산", "t": "양산 검증용 디자인 시방서 사전 배포 및 한도 합의 (LPP 외관·CMF·명판·인쇄 사양 검증 → 양산용 최…", "goal": "LPP 전 양산 검증용 디자인 시방서를 사전 배포하고, LPP에서 최종 사양·외관·CMF 재현성을 검증한 뒤 양산용 최종본을 확정·배포한다.", "own": "상품디자인팀", "out": [], "chk": [], "how": [], "lane": 7, "ai": [], "scr": "" }, { "id": "PROC-82", "st": 3, "g": false, "grp": "LPP 준비·생산", "t": "LPP 생산계획 수립 및 생산 준비 일정 관리", "goal": "LPP 시제품 생산수량, 자재 입고일정, 생산 일정을 사전에 계획 수립한다.", "own": "PM", "out": ["생산계획협의서"], "chk": ["LPP 샘플의 경우 향지별 디자인 시방서 3주전 완료 필요"], "how": [], "lane": 6, "ai": ["replan"], "scr": "일정표" }, { "id": "PROC-83", "st": 3, "g": true, "grp": "LPP 준비·생산", "t": "LPP 생산 자재 소요량 산출 및 발주·입고 관리", "goal": "LPP 및 양산 계획에 따른 자재 소요량을 산출하고 발주·입고 일정을 관리하여 계획된 생산 일정과 수량을 확보한다.", "own": "구매본부", "out": [], "chk": [], "how": [], "lane": 3, "ai": [], "scr": "" }, { "id": "PROC-83", "st": 3, "g": false, "grp": "LPP 준비·생산", "t": "LPP 이벤트 생산 및 생산 실적 관리", "goal": "LPP 생산계획에 따라 제품을 생산하며 제조공정의 적합성 및 제품 이슈사항을 점검한다.", "own": "생산팀", "out": ["T1 생산 제품"], "chk": [], "how": [], "lane": 2, "ai": ["j_trial"], "scr": "품목 · 금형·시사출" }, { "id": "PROC-83", "st": 3, "g": false, "grp": "승인·보고", "t": "개발단계 Stage Gate (LPP단계 → MP)", "goal": "LPP 생산 결과를 종합적으로 검토하여 양산 진행 여부를 최종 결정한다.", "own": "PM", "out": ["Stage Gate 결과서", "[첨부]", "'-PM:부품승인원", "문제점관리대장", "신규 설비 치공구 제작 관리대장", "개발1팀:제품규격서"], "chk": ["개발단계 문제점 개선 완료", "양산 준비 완료"], "how": [], "lane": 0, "ai": ["j_req", "j_bom"], "scr": "프로젝트 · 관문 승인" }, { "id": "X-03", "st": 3, "g": false, "grp": "시방서 Rev · 공장에 나간 판", "t": "디자인 시방서 판 관리", "goal": "회사 양식(카톤·기프트 박스·명판·사용 가이드·주의 라벨·자사 바코드)으로 시방서를 만들고 판을 관리한다.", "own": "AX팀", "out": ["디자인 시방서", "양산 시방서"], "chk": [], "how": [], "lane": 7, "ai": [], "scr": "", "x": true, "soon": "1.0.138" }, { "id": "PROC-84A", "st": 4, "g": false, "grp": "출시 자료 준비", "t": "FAQ 초안 자료 작성", "goal": "예상 고객 질문과 답변 초안을 만들어 설명회·CS·영업 자료의 기준으로 쓴다.", "own": "고객경영본부", "out": ["FAQ 초안 (핵심 Q&A"], "chk": ["FAQ 초안 작성"], "how": ["예상 질문 수집 (기존 모델 CS 문의, T0 이슈)", "핵심 Q&A 초안 작성", "CS 사전 검토"], "lane": 7, "ai": [], "scr": "" }, { "id": "PROC-84B", "st": 4, "g": false, "grp": "출시 자료 준비", "t": "법무·지식재산·고객경영 등 유관부서 검토", "goal": "출시 자료(USP, 웹기술서 등)의 표현·권리·고객 응대 이슈를 출시 전에 점검한다.", "own": "마케팅팀", "out": ["제품 USP", "웹기술서"], "chk": ["부서별 검토 완료"], "how": ["Material별 검토 일정 수립", "부서별 검토 요청", "수정 반영"], "lane": 7, "ai": [], "scr": "" }, { "id": "PROC-84C", "st": 4, "g": false, "grp": "출시 자료 준비", "t": "영상 업로드 및 국가·언어별 QR코드 연동", "goal": "사용가이드 영상을 올리고 국가·언어별 QR에 연결해 고객이 바로 볼 수 있게 한다.", "own": "상품전략팀", "out": ["영상 URL·QR 연동 리스트"], "chk": ["국가별 QR 연동 확인"], "how": ["국가·언어별 영상 업로드", "QR 연결 URL 설정", "인쇄물 QR 연동 테스트"], "lane": 0, "ai": [], "scr": "" }, { "id": "PROC-84D", "st": 4, "g": false, "grp": "출시 자료 준비", "t": "런칭 필요 서류 확보 및 PLM 업로드", "goal": "권역·채널별 런칭에 필요한 인증서·리포트를 확보 즉시 PLM에 업로드해, 필요한 부서가 언제든 찾아 쓰고 입점·출시 지연을 막는다.", "own": "상품전략팀", "out": ["각권역 : 안전 인증서", "유럽 : PPWR 서류"], "chk": ["권역별 필요 서류 PLM 업로드 완료"], "how": ["권역·채널별 필요 서류 리스트 확인", "추가 필요 서류 확인", "서류 확보되는 대로 PLM 업로드 (완료 시점마다 수시)"], "lane": 4, "ai": ["certlist"], "scr": "품목 · 인증" }, { "id": "PROC-85", "st": 4, "g": false, "grp": "승인·보고", "t": "권역별 출시 준비 및 출시 보고", "goal": "개발 완료 시점의 변경점·경쟁력·원가를 정리해 출시를 확정하고, 권역별 출시 자료를 배포한다.", "own": "상품전략팀/개발", "out": ["출시 준비 보고서", "신제품 소개서 (최종"], "chk": ["출시 확정", "권역별 자료 배포"], "how": ["출시 준비 문서 작성 (기획안 대비 변경점·POD·원가·경쟁사 MKT)", "출시 보고", "제품 소개서 최종본 배포"], "lane": 0, "ai": ["j_launch", "weekly"], "scr": "" }, { "id": "X-04", "st": 4, "g": false, "grp": "다음 번호 · 체크 숫자 · 중복 확인", "t": "88 바코드 발급", "goal": "제품 88 바코드를 발급하고 시방서 라벨에 넣는다.", "own": "AX팀", "out": ["88 바코드 번호"], "chk": [], "how": [], "lane": 7, "ai": [], "scr": "", "x": true, "soon": "1.0.138" }, { "id": "PROC-86", "st": 5, "g": false, "grp": "초도 양산·출하 검사", "t": "초도 생산·출하 확인", "goal": "초도 생산과 권역별 출하를 확인해 계획한 출시 일정을 지킨다.", "own": "생산", "out": ["초도 생산·출하 현황"], "chk": ["초도 생산 완료", "권역별 출하 완료"], "how": ["초도 생산 일정·수량 확인 (생산)", "권역별 출하 일정 확인 (영업본부)", "초도품 인쇄물·패키지 최종 확인"], "lane": 5, "ai": ["j_iqc"], "scr": "" }, { "id": "PROC-87", "st": 5, "g": false, "grp": "초도 양산·출하 검사", "t": "양산 검수", "goal": "품질 기준에 맞게 양산이 되는지 배송전 현지 검수를 통해 입고 후 품질 이슈가 없도록 사전 점검 한다.", "own": "품질본부 개발본부 구매본부 상품전략팀", "out": ["양산 검수 보고서"], "chk": ["양산 검수 결과 : PASS"], "how": ["양산 일정 확정", "양산 검수 계획", "양산 검수 진행 및 보고서 작성"], "lane": 5, "ai": ["j_iqc", "weekly"], "scr": "" }, { "id": "PROC-88", "st": 6, "g": false, "grp": "초기 품질·VOC 관리", "t": "출시 후 VOC·초기 품질 모니터링 및 대응", "goal": "출시 후 초기 고객 불만·불량을 분류·대응하고, 영업·법인이 공유한 판매 이상 징후와 연계해 원인을 파악하며, 미출시 권역에 미리 공유한다.", "own": "상품전략팀", "out": ["VOC 분석 리포트"], "chk": ["PROC-43A(초기 판매 모니터링)를 이 Task로 통합 — 판매 수량 검토는 영업 소관, 상품전략은 이상 징후만 공유받음"], "how": ["온라인 리뷰·CS 접수·글로벌 소비자 불만 모니터링", "불량·불편 사례 분류 및 대응", "영업·법인 공유 판매 이상 징후(반품·판매 급감 등) VOC와 연계 확인", "초기 출시 권역 사례 미출시 권역 공유"], "lane": 5, "ai": ["j_voc"], "scr": "" }, { "id": "PROC-89", "st": 6, "g": false, "grp": "초기 유동 관리", "t": "초기유동관리 CFT 이슈 회의 주관", "goal": "양산 초기 일정 기간 동안 생산 및 시장 품질을 집중 모니터링하고, 잔여 개선사항의 조치 완료 여부를 확인하여 안정적인 양산 체계를 확보한다.", "own": "PM", "out": ["초기유동 관리대장"], "chk": ["초기유동관리 3개월 끝나는 시점", "초기 유동 관리 기간 10 Lot 생산 완료 시점", "문제점 등록 개선 완료 시점", "※ 상기 3항 중 늦은 적용 시점으로 해제함."], "how": [], "lane": 0, "ai": [], "scr": "프로젝트 · 이슈·리스크" }, { "id": "PROC-90A", "st": 6, "g": false, "grp": "프로젝트 종료·회고", "t": "프로젝트 완료 검토 및 종료 승인", "goal": "개발 목표 및 주요 산출물의 완료 여부를 확인하고, 미결 사항과 운영 인계 항목을 정리하여 프로젝트를 공식 종료한다.", "own": "PM", "out": ["프로젝트종료협의서"], "chk": ["프로젝트종료 기안 합의/승인"], "how": [], "lane": 0, "ai": [], "scr": "" }, { "id": "PROC-90B", "st": 6, "g": true, "grp": "프로젝트 종료·회고", "t": "프로젝트 완료보고(품의)", "goal": "프로젝트를 공식적으로 종료하고 잔금 지급을 목적으로 한다.", "own": "PM(CFT)", "out": [], "chk": [], "how": [], "lane": 0, "ai": ["weekly"], "scr": "" }, { "id": "PROC-91", "st": 6, "g": false, "grp": "프로젝트 종료·회고", "t": "반기 Post-Mortem 리뷰", "goal": "반기 단위로 출시 제품의 목표 대비 결과를 돌아보고 프로세스를 개선한다.", "own": "상품전략팀", "out": ["반기 리뷰 자료"], "chk": ["개선 액션 프로세스 반영"], "how": ["목표 대비 결과 정리", "잘된 점·문제점 도출", "개선 액션 프로세스 반영"], "lane": 0, "ai": ["j_voc"], "scr": "" }];

};
__m["src/webparts/huromAxPlm/model/hatch.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseOfStage = exports.baseKey = exports.BASE_STATE_LABEL = exports.baseState = exports.taskOff = exports.laneOff = exports.htypeOf = exports.HTYPES = exports.ODM_LABEL = exports.odmOf = void 0;
exports.offWhy = offWhy;
exports.baseProgress = baseProgress;
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const base_1 = require("src/webparts/huromAxPlm/model/base.js");
const odmOf = (p) => p.odmMold || 'public';
exports.odmOf = odmOf;
exports.ODM_LABEL = { public: '공모 — 공장 기존 금형', private: '사모 — 우리 전용 새 금형' };
exports.HTYPES = [['own', '자체'], ['derive', '파생'], ['oem', '중국 OEM'], ['odm', 'ODM 공모'], ['odm-private', 'ODM 사모'], ['sourcing', '소싱']];
const htypeOf = (p) => { const t = (0, devtype_1.typeOf)(p); return t === 'odm' && (0, exports.odmOf)(p) === 'private' ? 'odm-private' : t; };
exports.htypeOf = htypeOf;
const KEEP_DESIGN = /외관|CMF|로고|디자인|인쇄|명판|컬러|색/;
const KEEP_SPEC = /사양|승인|규격|명칭|요구/;
// lane: sched.LANES 순서 (0 상품기획 1 설계 2 금형/시사출 3 구매/협력사 4 인증 5 품질 6 생산 7 인쇄물/마케팅)
function offWhy(t, lane, text = '') {
    if (lane === 1) {
        if (t === 'odm' && !KEEP_DESIGN.test(text))
            return 'ODM 공모 — 설계는 공장 것, 외관·CMF·로고만 우리가 정함';
        if (t === 'odm-private' && !KEEP_SPEC.test(text) && !KEEP_DESIGN.test(text))
            return 'ODM 사모 — 설계는 공장이 하고 우리는 사양·승인만';
        if (t === 'sourcing')
            return '소싱 — 완제품을 사 오므로 설계 없음';
    }
    if (lane === 2) {
        if (t === 'odm')
            return 'ODM 공모 — 금형은 공장 기존 것';
        if (t === 'sourcing')
            return '소싱 — 금형 없음';
    }
    if (lane === 6 && t === 'sourcing')
        return '소싱 — 생산 대신 입고 검사로';
    return undefined;
}
const laneOff = (p, lane) => offWhy((0, exports.htypeOf)(p), lane);
exports.laneOff = laneOff;
const taskOff = (t, b) => offWhy(t, b.lane, `${b.grp} ${b.t} ${b.out.join(' ')}`);
exports.taskOff = taskOff;
const baseState = (b) => (b.scr ? 'screen' : b.ai.length ? 'auto' : 'none');
exports.baseState = baseState;
exports.BASE_STATE_LABEL = { screen: '화면에 있음', auto: '자동화됨', none: '없음' };
const baseKey = (b) => 'b:' + b.id;
exports.baseKey = baseKey;
const baseOfStage = (k) => base_1.BASE_TASKS.filter(b => b.st === k);
exports.baseOfStage = baseOfStage;
// 프로젝트의 기본 업무 진행 — 빗금 칸은 뺌
function baseProgress(p, k) {
    const t = (0, exports.htypeOf)(p);
    let done = 0, total = 0, off = 0;
    base_1.BASE_TASKS.forEach(b => { if (k !== undefined && b.st !== k)
        return; if ((0, exports.taskOff)(t, b)) {
        off++;
        return;
    } total++; const s = p.docs[(0, exports.baseKey)(b)]; if (s && (s.done || s.skip))
        done++; });
    return { done, total, off };
}

};
__m["src/webparts/huromAxPlm/model/devtype.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stagesOf = exports.SOURCING_KINDS = exports.typeInfo = exports.typeOf = exports.DEV_TYPES = void 0;
exports.stagesFor = stagesFor;
// AX-PLM 1.0.132 — 개발 유형 5가지 (심준보 2026-11-17 #ax-plm msg 10424760 '소싱·금형개발·ODM·OEM 종합적으로 반영', 곽두팔 msg 10425015)
// 품목·프로젝트를 만들 때 유형부터 고르고, 그에 따라 단계 산출물·관문 승인 기준·BOM 범위·관리할 기록(금형·도면 배포·샘플·승인원)이 바뀜
// 단계 7개(S1~S7)와 계획일 칸은 모든 유형이 같음 — 이름·하는 일·산출물·관문 위치만 유형별
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
exports.DEV_TYPES = [
    { id: 'own', label: '자체 개발 (신규 금형)', tag: '자체', desc: '우리가 설계하고 금형을 새로 팜', drawing: '우리 도면 · 전체 BOM',
        bomNote: '전체 BOM — 상하위 제한 없음, 금형 부품은 금형 번호와 연결', bomDepth: 9, mold: true, release: false, sample: false, price: false, food: false },
    { id: 'derive', label: '파생 개발', tag: '파생', desc: '기존 품목을 복사해 색상·일부 부품만 바꿈', drawing: '기반 모델 도면 · 바뀐 부품만 설계 변경',
        bomNote: '기반 모델 BOM을 그대로 복사 — 바뀐 부품만 설계 변경으로 Rev 올림', bomDepth: 9, mold: false, release: false, sample: false, price: false, food: false },
    { id: 'oem', label: 'OEM (우리 설계 · 업체 생산)', tag: 'OEM', desc: '도면은 우리 것, 중국 제조사가 생산', drawing: '우리 도면 · 업체에 나간 판 관리',
        bomNote: '전체 BOM — 업체에 나간 도면 판과 초도품·수입검사 기준이 핵심', bomDepth: 9, mold: true, release: true, sample: false, price: true, food: false },
    { id: 'odm', label: 'ODM (업체 설계 · 생산)', tag: 'ODM', desc: '업체가 설계·생산, 우리는 사양·샘플 평가·승인원·우리 명의 인증', drawing: '업체 도면 · 우리는 승인원',
        bomNote: '주요 부품·재질·식품(물) 접촉부만 — 완제품 아래 한 층', bomDepth: 1, mold: false, release: false, sample: true, price: true, food: true },
    { id: 'sourcing', label: '소싱 (완제품·부자재 구매)', tag: '소싱', desc: '만들어진 제품을 사 옴 — 업체 선정·샘플·규격서·인증서·단가·MOQ', drawing: '업체 규격서',
        bomNote: '완제품 한 줄 + 포장·매뉴얼·라벨만', bomDepth: 1, mold: false, release: false, sample: true, price: true, food: true },
];
const typeOf = (p) => ((p && p.devType) || 'own');
exports.typeOf = typeOf;
const typeInfo = (t) => exports.DEV_TYPES.filter(x => x.id === t)[0] || exports.DEV_TYPES[0];
exports.typeInfo = typeInfo;
exports.SOURCING_KINDS = ['완제품', '포장', '매뉴얼', '라벨'];
const d = (key, label, proc = '') => ({ key, label, proc });
// 공통으로 쓰는 산출물
const VOC = d('voc', 'Pain Point·VOC 근거', 'PROC-02D');
const G1REP = d('g1rep', '경영진 보고·결정 기록', 'PROC-16');
const RR = d('rr', 'PM 지정·R&R', 'PROC-17');
const CERT = d('cert', '국가별 인증서 (우리 명의)', 'PROC-56A');
const PRINT = d('print', '최종 인쇄물 파일', 'PROC-77A');
const ISSUE = d('issue', '문제점 관리대장', 'PROC-74');
const FAQ = d('faq', 'FAQ 초안', 'PROC-84A');
const LAUNCH = d('launch', '출시 준비 보고서·소개서', 'PROC-85');
const VOCR = d('vocr', 'VOC 분석 리포트', 'PROC-88');
const CLOSE = d('close', '프로젝트 종료·회고', 'PROC-90A');
const S7 = { name: '출시 후 유통관리', short: '출시 후', focus: '시장 반응·VOC 대응, 회고를 다음 제품에', docs: [VOCR, CLOSE] };
const TPL = {
    own: {
        S1: { name: '컨셉·기획', short: '컨셉·기획', focus: '고객가치·차별점·기술 가능성 확인', gate: 'G1 기획 승인', rule: '기획안·사업성 검토 끝, 경영진 결정 기록', docs: [VOC, d('plan', '신제품 기획안 (컨셉)', 'PROC-11'), d('biz', '사업성 검토서', 'PROC-12'), G1REP] },
        S2: { gate: 'G2 개발발의 승인', rule: 'PM·R&R 정함, 사양·개발발의서 끝', name: '공동검토·개발발의', short: '공동검토', focus: '요구사항·예산·일정·역할 합의', docs: [RR, d('spec', '최종 사양서', 'PROC-22'), d('kickoff', '개발발의서', 'PROC-23')] },
        S3: { name: '설계·시제품검증', short: '설계·시제품', focus: '금형 착수 전 설계 방향·평가 계획 확정', docs: [d('sched', 'Kick off 회의록·대일정표', 'PROC-24'), d('cad', '3D 도면·Part list', 'PROC-26'), d('dr', '설계 DR 결과서', 'PROC-27A'), d('proto', '시제품 평가 결과서', 'PROC-28')] },
        S4: { name: '금형·시사출 (T0~T2)', short: '금형·시사출', focus: '금형 발주 → T0·T1·T2 시사출 → 부품 승인, 인증·인쇄물 준비', gate: 'G3 금형 T1 합격', rule: '모든 금형이 T1 이상 시사출 합격 (금형 탭)',
            docs: [d('mold', '금형 발주·계약서 (금형 번호·업체)', 'PROC-35'), d('t0', 'T0 시사출 검토서', 'PROC-40'), d('t1', 'T1 시사출 검토서', 'PROC-40'), d('t2', 'T2 수정·최종 승인', 'PROC-40'), d('ppap', '부품 승인원', 'PROC-61'), CERT, PRINT, ISSUE] },
        S5: { name: '양산·출시준비', short: '양산준비', focus: '양산 품질·생산 준비, 영업·마케팅·CS 출시 지원', gate: 'G4 출시 승인', rule: '인증 모두 취득, 출시 자료 끝', docs: [FAQ, d('usp', '제품 USP·웹기술서', 'PROC-84B'), LAUNCH] },
        S6: { gate: 'G5 양산 전환 승인', rule: '초도 생산·검수 끝, 진행 중 설계 변경 없음', name: '생산', short: '생산', focus: '초도 생산·출하·초도품 확인', docs: [d('first', '초도 생산·출하 현황', 'PROC-86'), d('mpqa', '양산 검수 보고서', 'PROC-87')] },
        S7,
    },
    derive: {
        S1: { name: '파생 기획', short: '파생 기획', focus: '기반 모델과 무엇이 다른지(색상·부품·사양) 정함', gate: 'G1 파생 기획 승인', rule: '기반 모델·바뀌는 부품 목록 확정', docs: [d('base', '기반 모델·바뀌는 부품 목록'), d('plan', '파생 기획안 (색상·사양 차이)', 'PROC-11'), G1REP] },
        S2: { gate: 'G2 개발발의 승인', rule: 'PM·R&R 정함, 사양·개발발의서 끝', name: '변경 사양 합의', short: '변경 합의', focus: '바뀌는 것만 사양·원가·일정 합의', docs: [RR, d('spec', '변경 사양서', 'PROC-22')] },
        S3: { name: '변경 설계', short: '변경 설계', focus: '바뀐 부품만 설계 변경(ECR→ECO), 색상 샘플 승인', gate: 'G3 변경 부품 승인', rule: '진행 중 설계 변경 없음, 바뀐 부품 모두 ECO 승인',
            docs: [d('ecr', '설계 변경 요청·ECO'), d('cmf', '색상·CMF 승인 샘플'), d('dr', '변경 부품 DR', 'PROC-27A')] },
        S4: { name: '변경 검증', short: '변경 검증', focus: '바뀐 부품 승인원, 인증 변경 신고, 인쇄물 변경분', docs: [d('ppap', '변경 부품 승인원', 'PROC-61'), d('certchg', '인증 변경·추가 신고'), d('print', '인쇄물·라벨 변경분', 'PROC-77A'), ISSUE] },
        S5: { name: '양산·출시준비', short: '양산준비', focus: '파생 모델 출시 자료', gate: 'G4 출시 승인', rule: '인증 변경 끝, 출시 자료 끝', docs: [d('usp', '파생 모델 소개·상세페이지', 'PROC-84B'), LAUNCH] },
        S6: { gate: 'G5 양산 전환 승인', rule: '초도 생산·검수 끝, 진행 중 설계 변경 없음', name: '생산', short: '생산', focus: '초도 생산·색상 확인', docs: [d('first', '초도 생산·출하 현황', 'PROC-86'), d('mpqa', '양산 검수 보고서', 'PROC-87')] },
        S7,
    },
    oem: {
        S1: { name: '컨셉·기획', short: '컨셉·기획', focus: '고객가치·차별점, 생산 업체 후보', gate: 'G1 기획 승인', rule: '기획안·사업성 검토 끝, 경영진 결정 기록', docs: [VOC, d('plan', '신제품 기획안 (컨셉)', 'PROC-11'), d('biz', '사업성 검토서 (업체 단가 포함)', 'PROC-12'), G1REP] },
        S2: { gate: 'G2 착수 승인', rule: 'PM·R&R 정함, 업체·계약 확정', name: '공동검토·생산 업체 선정', short: '업체 선정', focus: '사양 확정, 생산 업체 선정·계약', docs: [RR, d('spec', '최종 사양서', 'PROC-22'), d('vendor', '생산 업체 선정·계약서')] },
        S3: { name: '설계·도면 배포', short: '설계·배포', focus: '우리 도면 확정, 업체에 나간 판 기록', docs: [d('cad', '3D 도면·Part list', 'PROC-26'), d('dr', '설계 DR 결과서', 'PROC-27A'), d('release', '업체 배포 도면 판 기록'), d('proto', '시제품 평가 결과서', 'PROC-28')] },
        S4: { name: '업체 생산·초도품 검사', short: '초도품 검사', focus: '업체 금형·시사출 확인, 초도품 검사·수입검사 기준', gate: 'G3 초도품 검사 합격', rule: '업체에 나간 도면이 최신 판, 초도품 검사 성적서 합격',
            docs: [d('mold', '업체 금형·시사출 확인', 'PROC-40'), d('fai', '초도품 검사 성적서'), d('iqc', '수입검사 기준서'), CERT, PRINT, ISSUE] },
        S5: { name: '양산·출시준비', short: '양산준비', focus: '양산 품질·출시 자료', gate: 'G4 출시 승인', rule: '인증 모두 취득, 출시 자료 끝', docs: [FAQ, LAUNCH] },
        S6: { gate: 'G5 양산 전환 승인', rule: '초도 생산·검수 끝, 진행 중 설계 변경 없음', name: '생산·수입검사', short: '수입검사', focus: '초도 입고·수입검사', docs: [d('first', '초도 입고·출하 현황', 'PROC-86'), d('mpqa', '수입검사 결과', 'PROC-87')] },
        S7,
    },
    odm: {
        S1: { name: '요구 사양·업체 선정', short: '요구 사양', focus: '무엇을 원하는지 사양서로, ODM 업체 후보 평가', gate: 'G1 요구 사양 승인', rule: '요구 사양서 확정, ODM 업체 선정', docs: [VOC, d('req', '요구 사양서'), d('vendor', 'ODM 업체 후보 평가·선정'), G1REP] },
        S2: { gate: 'G2 착수 승인', rule: 'PM·R&R 정함, 업체·계약 확정', name: '견적·개발 계약', short: '개발 계약', focus: '단가·MOQ·일정·금형비 합의', docs: [RR, d('quote', '견적·개발 계약서')] },
        S3: { name: '샘플 차수 평가', short: '샘플 평가', focus: '1차·2차 샘플 평가, 주요 부품·재질·식품(물) 접촉부 확인', docs: [d('s1', '1차 샘플 평가서'), d('s2', '2차 샘플 평가서'), d('keyparts', '주요 부품·재질·접촉부 목록')] },
        S4: { name: '승인원·인증', short: '승인원·인증', focus: '최종 샘플 합격 → 업체 승인원 승인 → 우리 명의 인증', gate: 'G3 승인원 승인', rule: 'ODM 업체 승인원 승인 (협력사 탭)',
            docs: [d('s3', '최종 샘플 평가서'), d('aprv', '업체 승인원'), CERT, PRINT, ISSUE] },
        S5: { name: '출시준비', short: '출시준비', focus: '출시 자료·CS', gate: 'G4 출시 승인', rule: '우리 명의 인증 모두 취득', docs: [FAQ, LAUNCH] },
        S6: { gate: 'G5 양산 전환 승인', rule: '초도 생산·검수 끝, 진행 중 설계 변경 없음', name: '초도 입고', short: '초도 입고', focus: '초도 입고·수입검사', docs: [d('iqc', '초도 수입검사 결과'), d('first', '입고·출하 현황', 'PROC-86')] },
        S7,
    },
    sourcing: {
        S1: { name: '구매 기획', short: '구매 기획', focus: '팔 제품·판매가·목표 마진', gate: 'G1 구매 기획 승인', rule: '단가·MOQ 견적 비교 끝', docs: [d('plan', '구매 기획 (판매가·목표 마진)'), d('price', '단가·MOQ 견적 비교'), G1REP] },
        S2: { gate: 'G2 착수 승인', rule: 'PM·R&R 정함, 업체·계약 확정', name: '업체 선정', short: '업체 선정', focus: '공급 업체 선정, 업체 인증서 확인', docs: [RR, d('vendor', '공급 업체 선정')] },
        S3: { name: '샘플·규격 확인', short: '샘플·규격', focus: '샘플 평가, 구매 규격서, 업체 인증서·성적서', gate: 'G3 샘플 승인', rule: '샘플 합격 + 업체 인증서 확인 (협력사 탭)',
            docs: [d('sample', '샘플 평가서'), d('specsheet', '구매 규격서'), d('vcert', '업체 인증서·시험성적서 확인')] },
        S4: { name: '포장·인증·발주', short: '포장·발주', focus: '포장·매뉴얼·라벨, 수입 신고·필요 인증, 발주', docs: [d('pack', '포장·매뉴얼·라벨 파일'), d('cert', '수입 신고·필요 인증'), d('po', '발주서')] },
        S5: { name: '판매 준비', short: '판매 준비', focus: '상세페이지·판매 채널', gate: 'G4 판매 승인', rule: '인증·라벨 끝, 첫 입고 일정 확정', docs: [LAUNCH] },
        S6: { gate: 'G5 첫 입고 승인', rule: '입고 검사 끝, 출하 시작', name: '입고', short: '입고', focus: '입고 검사·출하', docs: [d('iqc', '입고 검사 결과'), d('first', '입고·출하 현황', 'PROC-86')] },
        S7,
    },
};
// 1.0.144 관문 G1~G5 (새 기획개발런칭 프로세스 — 곽두팔 msg 11182987·준보 msg 11184535 '응3개넣자'): G1 ① 기획 · G2 ② 개발 착수 · G3 유형별 확인(옛 G2) · G4 출시(옛 G3) · G5 ⑥ 양산 전환
// 유형별 단계 — 같은 id(S1~S7)·번호, 사람/AI 역할은 기본 단계 것을 씀
const CACHE = {};
function stagesFor(t) {
    if (CACHE[t])
        return CACHE[t];
    const tpl = TPL[t] || TPL.own;
    CACHE[t] = ax_1.AX_STAGES.map(s => { const x = tpl[s.id]; return Object.assign(Object.assign({}, s), { name: x.name, short: x.short, focus: x.focus, gate: x.gate, gateRule: x.rule, docs: x.docs }); });
    return CACHE[t];
}
const stagesOf = (p) => stagesFor((0, exports.typeOf)(p));
exports.stagesOf = stagesOf;

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
    { id: 'S5', no: '⑤', name: '양산·출시준비', focus: '양산 품질·생산 준비, 영업·마케팅·CS 출시 지원', gate: 'G4 출시 승인', docs: [
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
    S5: { human: ['양산 준비 점검', 'G4 출시 승인'], ai: ['FAQ·USP·출시 자료 초안', '나라별 표시사항 마지막 점검'] },
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
__m["src/webparts/huromAxPlm/model/ai.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APPLY_NOTE = exports.SYSTEM = exports.jobState = exports.AI_STATE_LABEL = exports.kindInfo = exports.kindsFor = exports.BRANCH_LABEL = exports.branchOf = exports.AI_KINDS = void 0;
exports.aiOnline = aiOnline;
exports.askAi = askAi;
exports.buildAsk = buildAsk;
exports.applyJob = applyJob;
// AX-PLM 1.0.134 — 「AI에게 맡기기」 (심준보 2026-11-18 #ax-plm msg 10483498 'ai가 할꺼 할 수 있는 거 다 반영', 곽두팔 msg 10483554 4·5번)
// 연결: E-HR 휴글과 같은 중계 (곽두팔 PC의 relay.py → Claude). 주소는 hurom-ehr 저장소 relay.json 에서 읽음
// 규칙: AI 결과는 「확인 대기」로만 들어오고 사람이 「반영」을 눌러야 데이터가 바뀜. 연결이 안 되면 결과를 만들지 않고 「AI 연결 전」
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const item_1 = require("src/webparts/huromAxPlm/model/item.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const sched_1 = require("src/webparts/huromAxPlm/model/sched.js");
const history_1 = require("src/webparts/huromAxPlm/model/history.js");
const K = (id, label, branch, stage, x = {}) => (Object.assign({ id, label, branch, stage, group: stage ? `${'①②③④⑤⑥⑦'[stage - 1]} 단계` : '공통' }, x));
exports.AI_KINDS = [
    // ── 원액기 (23)
    K('j_voc', 'VOC·리뷰 분석 — 불만 TOP·원하는 기능', 'juicer', 1, { ask: 'VOC·리뷰 내용을 붙여 넣어 주세요', do: '붙여 넣은 VOC·리뷰를 분류해 불만 TOP5와 원하는 기능 TOP5를 건수와 함께 정리하고, 기획에 넣을 것 3가지를 제안해라.' }),
    K('j_comp', '경쟁 스펙 비교표', 'juicer', 1, { ask: '비교할 경쟁 제품 (모델명·알고 있는 스펙)', autoInput: '데이터에 있는 경쟁 정보만', do: '경쟁 원액기 스펙(착즙 방식·RPM·모터 W·용량·소음·가격)을 비교표처럼 목록으로 정리하고 우리 차별점을 3줄로. 모르는 수치는 「확인 필요」.' }),
    K('j_plan', '기획서 초안', 'juicer', 1, { do: '신제품 기획서 초안: 배경·타깃·핵심 가치(USP)·주요 사양 목표·목표 원가/판가·일정·리스크. 데이터에 없는 수치는 「확인 필요」.' }),
    K('j_dup', '중복 확인 — 휴롬 개발승인원에 이미 한 것', 'juicer', 1, { nodata: '휴롬 개발승인원 데이터 연결 전' }),
    K('j_req', '요구 사양서 초안 — 착즙률·소음·RPM 목표', 'juicer', 2, { do: '요구 사양서 초안: 착즙률·소음(dB)·RPM·모터·용량·재질·안전·인증 목표를 항목별로. 목표 수치가 데이터에 없으면 「확인 필요」와 함께 일반적 범위를 참고로.' }),
    K('j_back', '일정 거꾸로 채우기 — 출시일 → 단계', 'juicer', 2, { local: true }),
    K('j_risk', '리스크 목록 — 과거 이슈 기반', 'juicer', 2, { others: true, do: '이 프로젝트와 다른 프로젝트의 이슈·설계 변경 이력을 근거로 이 제품에서 생길 리스크 목록(리스크·근거·미리 할 일)을 써라.' }),
    K('j_juice', '착즙 성능 DB 비교 — 스크류·드럼 사양별 착즙률', 'juicer', 3, { nodata: '착즙 성능 데이터(정경임 님) 연결 전' }),
    K('j_food', '식품 접촉 재질 점검 — 재질·용출 기준', 'juicer', 3, { item: true, do: 'BOM에서 식품(즙·물) 접촉 가능 부품을 골라 재질별 식품용 기구 기준(국내 식품위생법 기구·용기 규격, 유럽 10/2011·LFGB, 미국 FDA 21 CFR) 확인 항목과 빠진 재질 정보를 정리해라.' }),
    K('j_bom', 'BOM 초안·원가 합산', 'juicer', 3, { item: true, do: 'BOM을 보고 빠진 구성(체결·포장·라벨 등)을 짚고, 단가 정보가 있으면 원가를 합산해라. 단가가 없으면 「확인 필요」 목록.' }),
    K('j_dr', 'DR 체크리스트', 'juicer', 3, { item: true, others: true, do: '설계 DR 체크리스트를 이 제품(원액기 구조: 스크류·드럼·브러시·모터·하우징)에 맞춰 만들고, 과거 이슈에서 반드시 볼 항목을 표시해라.' }),
    K('ecr', '설계 변경 영향 — 바뀌는 부품·도면', 'juicer', 3, { item: true }),
    K('j_trial', '시사출 결과 요약 — 결함·수정 LIST 분류', 'juicer', 4, { item: true, do: '금형별 시사출 기록을 요약하고 결함을 수정 LIST(치수·외관·변형·기타)로 분류, 다음 차수에서 볼 것을 적어라.' }),
    K('j_t1', 'T1 합격 점검 — 금형별', 'juicer', 4, { item: true, do: '금형마다 T1 이상 합격 여부를 점검해 합격/미합격/기록 없음으로 나누고, G2(모든 금형 T1 합격)까지 남은 것을 적어라.' }),
    K('j_aprv', '승인원 대조 — 도면 판 vs 승인원', 'juicer', 4, { item: true, do: '도면·문서의 현재 판과 협력사 승인원 Rev를 대조해 어긋난 것과 승인원이 없는 부품을 찾아라.' }),
    K('bomdiff', '파생: BOM 차이 — 기반 모델 대비', 'juicer', 4, { item: true }),
    K('certlist', '나라별 필요 인증 — KC·CE·UL·FDA·LFGB', 'both', 5, { item: true, ask: '어느 나라에 팔아요? (예: 한국, 유럽, 미국, 독일)', autoInput: '한국, 유럽, 미국' }),
    K('j_manual', '매뉴얼·인쇄물 다국어 초안', 'juicer', 5, { ask: '어느 언어로? (예: 영어, 독일어, 일본어)', autoInput: '한국어, 영어', do: '사용설명서·인쇄물에 들어갈 핵심 문구(안전 경고·사용법·세척·보증)를 요청 언어로 초안 작성. 규제 문구는 「확인 필요」 표시.' }),
    K('j_launch', '출시 준비 보고서 초안', 'juicer', 5, { item: true, do: '출시 준비 보고서 초안: 제품 개요·USP·인증 현황·생산 준비·출시 일정·남은 리스크.' }),
    K('j_iqc', '초도·수입검사 불량 분석 — 부품·업체별', 'juicer', 6, { item: true, do: '초도품·수입검사 관련 기록(이슈·승인원·샘플)을 부품·업체별로 묶어 불량 경향과 조치 우선순위를 정리해라. 검사 데이터가 없으면 무엇을 받아야 하는지 적어라.' }),
    K('j_late', '납기 지연 감지 → 독촉 메일 초안', 'juicer', 6, { item: true, mail: true, do: '마감이 지났거나 임박한 협력사 일을 찾아 업체별 독촉 메일 초안(제목 1줄 + 본문 4~6문장)을 써라. 첫 줄은 "제목: ..."' }),
    K('j_as', 'AS·VOC 원인 분류 — 스크류 파손·누수 등', 'juicer', 7, { ask: 'AS 이력·상담 내용을 붙여 넣어 주세요', do: '붙여 넣은 AS·VOC를 원인(스크류 파손·누수·모터·소음·사용 미숙 등)별로 분류해 건수·대표 사례·설계 개선 후보를 정리해라.' }),
    K('j_next', '다음 파생 제안 — 개선 부품 목록', 'juicer', 7, { item: true, others: true, do: '이 제품의 이슈·설계 변경·VOC 기록을 근거로 다음 파생 모델 제안(바꿀 부품·이유·예상 효과)을 써라.' }),
    // ── 상품 (18)
    K('g_market', '시장·리뷰 분석', 'goods', 1, { ask: '시장·리뷰 내용을 붙여 넣어 주세요', do: '붙여 넣은 시장·리뷰 자료를 정리해 고객 불만 TOP5·원하는 기능·가격대를 요약하고 상품 정의에 넣을 것 3가지를 제안해라.' }),
    K('g_def', '상품 정의서 초안', 'goods', 1, { do: '상품 정의서 초안: 대상 고객·핵심 기능·필수 사양·가격대·판매 채널·인증 범위·출시 시점.' }),
    K('g_cost', '목표 원가 추정', 'goods', 1, { item: true, do: '판가·협력사 단가·MOQ 정보로 목표 원가(제품·포장·물류·관세·인증비) 구조를 추정해라. 없는 값은 「확인 필요」와 계산식만.' }),
    K('g_vendor', '업체 후보 추천 — 협력사 DB·평가', 'goods', 2, { item: true, others: true, do: '이 프로젝트와 다른 프로젝트의 협력사 기록(역할·나라·평가 점수·샘플 결과)을 근거로 업체 후보 순위와 이유를 써라.' }),
    K('g_quote', '견적 비교표 — 단가·MOQ·납기', 'goods', 2, { item: true, do: '협력사별 단가·MOQ·납기·금형비를 비교표처럼 목록으로 정리하고 추천 1곳과 협상 포인트를 적어라. 없는 값은 「확인 필요」.' }),
    K('g_req', '요구 사양서 초안 (ODM)', 'goods', 2, { do: 'ODM 업체에 보낼 요구 사양서 초안(기능·성능·재질·식품 접촉부·안전·인증·포장·검사 기준)을 써라. 영어 업체면 영어 병기.' }),
    K('g_sample', '샘플 평가표 초안', 'goods', 3, { item: true, do: '샘플 평가표 초안: 평가 항목(외관·치수·기능·성능·안전·식품 접촉·포장)·판정 기준·지난 차수 지적 사항 재확인 칸.' }),
    K('vendor', '업체 인증서 점검 — 만료·누락', 'goods', 3, { item: true }),
    K('chase', '보완 요청·독촉 메일 초안', 'goods', 3, { item: true, mail: true }),
    K('g_aprv', '승인원 대조 — 사양서 vs 승인원', 'goods', 4, { item: true, do: '요구 사양서·샘플 평가 결과와 업체 승인원(제목·Rev·상태)을 대조해 어긋나거나 빠진 항목을 찾아라.' }),
    K('oldrev', '옛 도면 판 감지 (OEM)', 'goods', 4, { item: true }),
    K('g_fai', '초도품 검사 기준 초안', 'goods', 4, { item: true, do: '초도품 검사 기준서 초안: 검사 항목·방법·기준·샘플링·불합격 처리. 주요 부품·식품 접촉부는 꼭 포함.' }),
    K('g_pack', '포장·매뉴얼·라벨 문구 초안', 'goods', 5, { ask: '판매 나라·언어 (예: 한국, 미국)', autoInput: '한국', do: '포장·매뉴얼·라벨 필수 표시 문구(제품명·모델·정격·제조원/수입원·KC 등 인증 표시·주의 문구·분리배출)를 초안으로. 규제 문구는 「확인 필요」.' }),
    K('g_iqc', '수입검사 불량 경향 — 업체별', 'goods', 6, { item: true, do: '업체별 샘플·승인원·이슈 기록에서 불량 경향을 정리하고 수입검사에서 강화할 항목을 적어라.' }),
    K('g_late', '입고 지연 감지', 'goods', 6, { item: true, mail: true, do: '입고·발주 일정 대비 늦어지는 것을 찾고 업체별 확인 메일 초안을 써라. 첫 줄은 "제목: ..."' }),
    K('g_review', '리뷰·AS 분석', 'goods', 7, { ask: '리뷰·AS 내용을 붙여 넣어 주세요', do: '붙여 넣은 리뷰·AS를 원인별로 분류해 건수·대표 사례·업체에 요구할 개선을 정리해라.' }),
    K('g_rescore', '업체 재평가 점수 — 품질·납기', 'goods', 7, { item: true, do: '협력사별 품질(샘플 결과·이슈)·납기·대응 기록으로 재평가 점수(5점)와 근거를 써라.' }),
    // ── 공통 (6) — 항상 도는 AI
    K('delay', '일정: 지연 예측·뒤 단계 영향', 'common', 0),
    K('replan', '일정: 다시 짠 계획 제안', 'common', 0),
    K('gate', '관문: 승인 기준 점검·요청 글 초안', 'common', 0, { item: true }),
    K('minutes', '회의록 → 이슈·할 일 등록', 'common', 0, { ask: '회의록을 붙여 넣어 주세요' }),
    K('weekly', '주간 보고 작성', 'common', 0),
    K('similar', '비슷한 과거 이슈 찾기', 'common', 0, { ask: '어떤 문제와 비슷한 걸 찾을까요?', others: true }),
    K('ask', '질문 — 근거와 함께 답', 'common', 0, { ask: '무엇이 궁금해요? (예: G2 왜 막혔어?)', item: true, others: true, do: '아래 질문에 이 데이터만 근거로 답하고, 근거가 된 줄을 「근거:」로 적어라.' }),
    K('draft', '산출물 초안·점검', 'common', 0, { ask: '어떤 산출물? (예: 요구 사양서, 시사출 결과 보고서)', item: true }),
    K('regchk', '규제·리콜 사전 점검 — 이 제품에 걸리는 것', 'common', 0, { item: true, do: '이 제품(유형·재질·전원·식품 접촉·판매 나라)에 걸릴 수 있는 국내외 규제와 비슷한 제품의 최근 리콜 사례 유형을 짚고, 지금 단계에서 미리 할 일을 3~6줄로 적어라. 확실하지 않은 것은 「확인 필요」.' }),
    K('do', '맡긴 일 — 말로 맡긴 요청 처리', 'common', 0, { ask: '무엇을 맡길까요?', item: true, others: true, do: '아래 요청을 이 프로젝트 데이터로 처리해 바로 쓸 수 있는 결과물(초안·메일·표·목록)을 만들어라. 메일이면 첫 줄은 "제목: ...". 데이터에 없는 값은 「확인 필요」.' }),
    K('docchk', '산출물 점검·요약 (올라오면 자동)', 'common', 0, { ask: '어떤 산출물?', item: true, do: '방금 완료된 아래 산출물을 이 단계 목표·관문 기준·남은 산출물과 대조해 ① 요약 3줄 ② 빠졌거나 확인할 것 ③ 다음 할 일을 써라. 파일 내용은 볼 수 없으니 이름·링크·기록만 근거로.' }),
    // ── 1.0.148 출시일 당기기·만회안 (원칙: 출시일은 당기는 쪽만, 늦추는 안은 맨 마지막)
    K('s_pull', '출시일 당기기 방법 — 줄어드는 일수', 'common', 0, { item: true, ask: '얼마나 당기고 싶어요? (예: 30일 당기기)', do: '출시일을 요청만큼 당기는 방법 3가지(병행 진행·금형 동시 발주·인증 선행 등)를 이 프로젝트 데이터와 과거 경험 근거로 쓰고, 방법마다 줄어드는 일수·필요한 결정·위험을 적어라. 출시일을 늦추는 안은 쓰지 마라.' }),
    K('s_catchup', '지연 만회안 — 출시일 지키기', 'common', 0, { item: true, do: '지금 늦어진 단계·산출물을 짚고, 출시일을 지키는 만회안 3가지(누가·무엇을·언제까지, 줄어드는 일수)를 써라. 늦추는 안은 맨 마지막에 한 줄만.' }),
    // ── 1.0.147 직무 스킬 (곽두팔 스킬표 v3 msg 11192860) — 결과는 모두 초안, 사람 확인 뒤에만 반영
    K('s_price', '출시 가격 시뮬레이션 — 판매가 3안', 'both', 1, { do: '원가·채널 마진을 근거로 판매가 3안(공격·기준·프리미엄)과 채널별 마진을 계산해라. 없는 값은 「확인 필요」와 계산식만.', item: true }),
    K('s_holiday', '나라별 휴일 반영 — 제조국 달력', 'common', 0, { do: '제조국(중국 춘절·국경절·调休 근무일, 한국 명절) 휴일이 단계 계획·마감과 겹치는지 보고, 겹치는 단계와 밀어야 할 날짜를 적어라.', item: true }),
    K('s_chase', '부서 간 할 일 독촉 — 담당자별 알림', 'common', 0, { do: '마감이 지났거나 3일 안에 마감인 산출물·이슈를 담당자별로 묶어 짧은 알림 글(담당자·할 일·마감)을 써라.', item: true }),
    K('s_gatepack', '관문 회의 자료 준비', 'common', 0, { do: '다음 관문 회의 자료 초안: 단계 산출물 현황·기준 충족 여부·열린 이슈·결정할 것.', item: true }),
    K('s_issues', '이슈 목록 정리', 'common', 0, { do: '열린 이슈·리스크를 중요도·담당·기한 순으로 정리하고 기한 없는 것·담당 없는 것을 표시해라.', item: true }),
    K('s_dbrief', '디자인 브리프 — 형태·사용성 요구', 'both', 1, { do: '컨셉·타깃·사양으로 디자인 브리프(형태 방향·사용성 요구·크기 제약·필수 표시부)를 써라.', item: true }),
    K('s_ddr', '디자인 DR 체크리스트', 'both', 3, { do: '디자인 DR 체크리스트(외관·사용성·분할선·세척성·표시부·CMF)를 이 제품에 맞춰 만들어라.', item: true }),
    K('s_cmf', 'CMF 3안 — 색·소재·마감', 'both', 2, { do: '컨셉에 맞춘 색·소재·마감 3안을 쓰고, 식품 접촉 부품은 재질을 따로 표시해라.', item: true }),
    K('s_chip', '컬러칩 관리표', 'both', 4, { do: 'BOM 외관 부품별 색상·재질·마감·컬러칩 번호·한도 견본 상태 표 초안을 만들어라. 없는 값은 「확인 필요」.', item: true }),
    K('s_mlayout', '설명서 구성·삽화 지시서', 'both', 5, { do: '사양·조립 순서로 사용설명서 페이지 구성과 페이지별 삽화 지시(무엇을 어느 각도로)를 써라.', item: true }),
    K('s_ux', '버튼·표시부 문구 점검', 'both', 4, { do: '버튼·표시부 문구와 아이콘이 이해하기 쉬운지, 나라별 표기 문제가 없는지 점검해라.', item: true }),
    K('s_warn', '경고 문구·심볼 배치', 'both', 5, { do: '제품·설명서·박스에 들어갈 경고 문구와 안전 심볼(나라별)을 위치와 함께 정리해라.', item: true }),
    K('s_mlang', '다국어 판 레이아웃', 'both', 5, { do: '요청 언어별 설명서 판 구성(언어 묶음·쪽수·글자 늘어남 대비)을 정리해라.', ask: '어느 언어들로 만들어요?' }),
    K('s_tol', '공차 검토 요약', 'juicer', 3, { do: 'BOM·도면 기록으로 공차 누적이 걱정되는 조립부(스크류-드럼, 뚜껑 체결 등)와 확인할 치수를 정리해라.', item: true }),
    K('s_screw', '스크류·드럼 사양 비교', 'juicer', 3, { do: '스크류·드럼 사양(재질·리브·간극·RPM)과 착즙률·찌꺼기 결과를 비교해 개선 포인트 3가지를 써라.', ask: '비교할 스크류·드럼 사양이나 시험값을 붙여 넣어 주세요', item: true }),
    K('s_motor', '모터 사양 비교 — 토크·소음·발열', 'juicer', 2, { do: '후보 모터의 토크·RPM·소음·발열·정격을 비교해 추천 1개와 이유를 써라.', ask: '후보 모터 사양을 붙여 넣어 주세요' }),
    K('s_gear', '기어 수명 계산 검토', 'juicer', 3, { do: '감속기·기어 사양으로 수명 계산에서 확인할 항목(하중·재질·윤활·시험 시간)을 정리해라.', item: true }),
    K('s_eol', '전자부품 단종·대체품 확인', 'both', 3, { do: 'BOM 전자부품 중 단종·수급 위험이 있는 것과 대체 후보를 찾아라. 품번이 없으면 「확인 필요」.', item: true }),
    K('s_safe', '안전 회로 체크 — 과열·과전류', 'both', 3, { do: '과열·과전류·모터 잠김 보호 회로 체크리스트를 이 제품 전원·모터에 맞춰 만들어라.', item: true }),
    K('s_seq', '동작 시퀀스 명세 초안 — 상태도', 'both', 2, { do: '기능 사양으로 동작 상태(대기·동작·역회전·정지·에러)와 전환 조건을 명세 초안으로 써라.', item: true }),
    K('s_err', '에러코드표 초안', 'both', 3, { do: '에러코드표 초안(코드·원인·표시·사용자 조치·AS 조치)을 써라.', item: true }),
    K('s_fwlog', '펌웨어 변경 이력 요약', 'both', 4, { do: '붙여 넣은 펌웨어 변경 내역을 버전별로 요약하고 시험이 필요한 변경을 표시해라.', ask: '펌웨어 변경 내역을 붙여 넣어 주세요' }),
    K('s_moldsch', '금형 일정표 T0~T2', 'juicer', 3, { do: '금형 목록으로 T0~T2 일정표 초안을 만들고 출시 일정과 겹치는 위험을 적어라.', item: true }),
    K('s_defect', '외관 불량 분류 — 유형·위치', 'juicer', 4, { do: '붙여 넣은 외관 불량을 유형(웰드·싱크·버·긁힘·색차)과 위치로 분류하고 금형·사출 조치 후보를 적어라.', ask: '불량 내용(사진 설명·위치)을 붙여 넣어 주세요' }),
    K('s_moldmove', '금형 이관 체크', 'juicer', 5, { do: '금형 이관 체크리스트(소유권·보관·도면·이관 후 시사출)를 써라.', item: true }),
    K('s_rfp', 'RFP 초안', 'goods', 2, { do: '업체에 보낼 RFP 초안(제품 개요·사양·수량·일정·인증·견적 항목)을 한·영으로 써라.', item: true }),
    K('s_audit', '공장 실사 체크리스트', 'goods', 2, { do: '공장 실사 체크리스트(설비·품질 체계·인증·식품 접촉 관리·노동·생산 능력)를 써라.' }),
    K('s_mail3', '협력사 메일 초안 — 한·중·영', 'common', 0, { do: '요청 내용으로 협력사 메일 초안을 한국어·중국어·영어로 써라. 첫 줄은 "제목: ..."', ask: '무슨 내용의 메일인가요? (업체·요청)', item: true, mail: true }),
    K('s_cny', '중국 공장 휴무 반영 — 춘절·调休', 'common', 0, { do: '중국 협력사 일정이 춘절·국경절·调休 근무일과 겹치는지 보고 납기 영향을 적어라.', item: true }),
    K('s_bomcost', 'BOM 원가 합계·변동', 'both', 3, { do: 'BOM 단가로 원가 합계와 지난 판 대비 변동 부품을 정리해라. 단가 없는 부품은 「확인 필요」.', item: true }),
    K('s_intro', '도입단가 품의 초안', 'both', 5, { do: '견적·원가 기록으로 도입단가 품의 초안(품목·단가·근거·비교)을 써라.', item: true }),
    K('s_testlist', '시험 항목표 — 신뢰성·안전', 'both', 3, { do: '제품 유형으로 신뢰성·안전 시험 목록(항목·기준·시료 수·기간)을 만들어라.', item: true }),
    K('s_n', '시료 수량 계산', 'both', 3, { do: '시험 항목별 필요한 시료 수와 계산 근거를 써라.', item: true }),
    K('s_life', '수명 시험 결과 분석', 'both', 4, { do: '붙여 넣은 수명 시험 데이터로 합격·위험 판정과 근거를 써라.', ask: '시험 데이터를 붙여 넣어 주세요' }),
    K('s_noise', '소음·진동 측정값 비교', 'both', 4, { do: '소음·진동 측정값을 기준과 비교하고 개선 아이디어 3개를 써라.', ask: '측정값을 붙여 넣어 주세요' }),
    K('s_fta', '고장 원인 추정 — FTA 초안', 'both', 4, { do: '고장 현상으로 FTA 초안(현상 → 원인 가지 → 확인 시험)을 써라.', ask: '고장 현상을 적어 주세요', item: true }),
    K('s_dfmea', '설계 FMEA 초안 — 고장 모드·대책', 'both', 3, { do: 'BOM·기능으로 설계 FMEA 초안(부품·고장 모드·영향·원인·대책·심각도)을 써라.', item: true }),
    K('s_drtrack', 'DR 품질 지적 추적', 'both', 3, { do: 'DR·이슈 기록에서 품질 지적 사항을 모아 조치됨/안 됨/담당·기한을 정리해라.', item: true }),
    K('s_recur', '과거 불량 재발 방지 체크', 'both', 3, { do: '다른 프로젝트의 이슈·AS 기록으로 이번 설계에서 다시 볼 점검표를 만들어라.', item: true }),
    K('s_pfmea', '공정 FMEA·공정 품질 체크시트', 'both', 5, { do: '조립 공정 기준 공정 FMEA 초안과 공정별 품질 체크시트(항목·방법·주기)를 써라.', item: true }),
    K('s_early', '초기유동 불량 집계', 'both', 6, { do: '붙여 넣은 초기유동 불량을 유형·공정·부품별로 집계하고 조치 우선순위를 써라.', ask: '초기 생산·판매 불량 기록을 붙여 넣어 주세요' }),
    K('s_aql', 'AQL 샘플 수 계산', 'both', 5, { do: '로트 크기·검사 수준으로 AQL 샘플 수와 합격 판정 개수를 계산해라.', ask: '로트 크기·검사 수준을 적어 주세요' }),
    K('s_8d', '협력사 불량 통보·시정조치(8D) 초안', 'both', 6, { do: '불량 내용으로 협력사 불량 통보와 8D 시정조치 요청 초안을 써라.', ask: '불량 내용과 업체를 적어 주세요', item: true, mail: true }),
    K('s_psi', '선적 전 검사(PSI) 체크리스트', 'both', 5, { do: '선적 전 검사 체크리스트(외관·기능·포장·라벨·수량)를 써라.', item: true }),
    K('s_recall', '리콜 위험 조기 경고', 'both', 7, { do: 'AS·CS 기록에서 안전 관련(발열·파손·누전) 건을 찾아 리콜 위험을 판정해라.', ask: 'AS·CS 기록을 붙여 넣어 주세요', item: true }),
    K('s_certdoc', '인증 서류 점검', 'both', 5, { do: '인증 기록으로 빠진 서류와 만료 임박을 찾아라.', item: true }),
    K('s_certsch', '인증 일정', 'both', 4, { do: '나라별 인증 소요 기간으로 인증 일정 초안과 출시일 위험을 적어라.', item: true }),
    K('s_tr', '시험성적서 점검', 'both', 4, { do: '붙여 넣은 시험성적서가 재질·나라 기준을 만족하는지와 빠진 항목을 적어라.', ask: '성적서 내용을 붙여 넣어 주세요', item: true }),
    K('s_tm', '상표 유사 검색 후보', 'both', 2, { do: '이름 후보별로 KIPRIS에서 찾아볼 검색어·류(7·11류 등)와 유사 위험을 정리해라. 실제 검색 결과는 「확인 필요」.', ask: '이름 후보를 적어 주세요' }),
    K('s_pat', '선행 특허 요약·침해 위험 메모', 'both', 2, { do: '핵심 기술의 선행 특허 검색어와 회피 설계 메모를 써라.', ask: '핵심 기술을 적어 주세요', item: true }),
    K('s_sop', '작업표준서 초안 — 공정별', 'juicer', 5, { do: 'BOM·조립 순서로 공정별 작업표준서 초안과 공정 설계에서 볼 점을 써라.', item: true }),
    K('s_jig', '치공구 목록', 'juicer', 5, { do: '조립·검사에 필요한 치공구 목록을 써라.', item: true }),
    K('s_pp', 'T1·DPP·LPP 생산 계획', 'both', 5, { do: '수량·자재·일정으로 T1·DPP·LPP 생산 계획 초안을 써라.', item: true }),
    K('s_short', '자재 부족 경고', 'both', 6, { do: 'BOM·발주 기록으로 생산 전에 부족할 자재를 찾아라.', item: true }),
    K('s_edu', '채널별 영업 교육 1장', 'both', 5, { do: '사양·USP로 채널별(국내몰·홈쇼핑·해외) 영업 교육 1장 자료를 써라.', item: true }),
    K('s_forecast', '판매 예측 초안 — 월별 수량', 'both', 5, { do: '붙여 넣은 과거 판매·채널 자료로 출시 후 6개월 월별 판매 수량 예측과 근거를 써라.', ask: '과거 판매·채널 자료를 붙여 넣어 주세요' }),
    K('s_detail', '상세페이지 핵심 문구·출시 FAQ', 'both', 5, { do: 'USP·사양으로 상세페이지 핵심 문구(헤드라인·장점 3개)와 출시 FAQ 10개를 써라.', item: true }),
    K('s_load', '포장 단위·적재 계산', 'both', 5, { do: '박스 치수·무게로 팔레트·컨테이너(20ft·40ft) 적재 수를 계산해라. 치수가 없으면 「확인 필요」.', item: true }),
    K('s_hs', '수입 통관 서류 체크 — HS코드·원산지', 'both', 5, { do: '제품 HS 코드 후보와 통관 서류(인보이스·패킹·원산지) 체크리스트를 써라. 코드는 「확인 필요」.', item: true }),
    K('s_wh', '창고 입고 일정', 'both', 6, { do: '생산·선적 계획으로 창고 입고 일정 초안을 써라.', item: true }),
    K('s_shipchk', '출하 검사 체크리스트', 'both', 6, { do: '출하 검사 체크리스트(수량·외관·라벨·포장·서류)를 써라.', item: true }),
    K('s_shipplan', '출하 일정·수량 대조', 'both', 6, { do: '생산 계획과 출하 계획의 일정·수량이 맞는지 대조하고 어긋난 것을 적어라.', item: true }),
    K('s_hold', '출하 보류 알림 — 품질 미승인', 'both', 6, { do: '품질 승인(승인원·초도품·관문)이 안 된 상태에서 출하 예정인 것을 찾아 보류 알림 글을 써라.', item: true }),
    K('s_packspec', '포장 사양 초안 — 박스·완충재', 'both', 4, { do: '제품 치수·무게·구성으로 박스·완충재·적재 사양 초안을 써라. 없는 치수는 「확인 필요」.', item: true }),
    K('s_drop', '낙하 시험 항목', 'both', 4, { do: '포장 낙하·진동·압축 시험 항목과 기준(높이·면·횟수)을 정리해라.', item: true }),
    K('s_printsch', '인쇄물 일정 — M-4 의뢰', 'both', 5, { do: '출시일 기준 인쇄물(설명서·박스·라벨) 의뢰·검수·인쇄 일정을 거꾸로 짜라.', item: true }),
    K('s_trans', '다국어 번역 초안', 'both', 5, { do: '요청 문구를 요청 언어로 번역 초안을 쓰고 규제 문구는 「확인 필요」로 표시해라.', ask: '번역할 문구와 언어를 적어 주세요' }),
    K('s_aspart', 'AS 파트리스트 — 교체 부품', 'both', 6, { do: 'BOM으로 AS 교체 부품 목록을 정리해라.', item: true }),
    K('s_svc', '서비스 매뉴얼 초안', 'both', 6, { do: '서비스 매뉴얼 초안(분해 순서·점검·에러코드별 조치)을 써라.', item: true }),
    K('s_consum', '소모품 목록', 'both', 6, { do: 'BOM으로 소모품(브러시·패킹·필터 등) 목록과 교체 주기 후보를 써라.', item: true }),
];
const branchOf = (t) => (t === 'own' || t === 'derive' ? 'juicer' : 'goods');
exports.branchOf = branchOf;
exports.BRANCH_LABEL = { juicer: '원액기', goods: '상품' };
const kindsFor = (b, stage) => exports.AI_KINDS.filter(k => (k.branch === b || k.branch === 'both' || k.branch === 'common') && (stage === undefined || k.stage === stage));
exports.kindsFor = kindsFor;
const kindInfo = (k) => exports.AI_KINDS.filter(x => x.id === k)[0] || { id: k, label: k, group: '', branch: 'common' };
exports.kindInfo = kindInfo;
exports.AI_STATE_LABEL = { running: '진행 중', review: '확인 대기', applied: '승인됨', dismissed: '반려됨', offline: 'AI 연결 전', error: '실패', nodata: '데이터 연결 전', queued: '대기 중' };
// 페이지를 닫아 '진행 중'으로 남은 것은 3분 지나면 중단으로 봄
const jobState = (j) => (j.state === 'running' && Date.now() - new Date(j.at).getTime() > 180000 ? 'error' : j.state);
exports.jobState = jobState;
// ───────── 중계 연결
const RELAY_JSON = 'https://simjb23-oss.github.io/hurom-ehr/relay.json';
const RELAY_KEY = 'hurom-b7f25d'; // E-HR ai.js 와 같은 중계 열쇠 (중계는 분당 20회 제한)
let relayUrl;
async function relay() {
    if (relayUrl)
        return relayUrl;
    const r = await fetch(RELAY_JSON + '?' + Date.now(), { cache: 'no-store' });
    if (!r.ok)
        throw new Error('offline');
    const j = await r.json();
    if (!j || !j.url)
        throw new Error('offline');
    const u = String(j.url).replace(/\/$/, '');
    relayUrl = relayUrl || u; // eslint require-atomic-updates
    return u;
}
async function aiOnline() {
    // 중계 주소가 바뀌면(PC 재시작 등) 옛 주소가 죽음 → relay.json을 새로 읽어 한 번 더 (곽두팔 msg 10533574)
    for (let i = 0; i < 2; i++) {
        try {
            const u = await relay();
            const r = await fetch(u, { method: 'GET' });
            if (r.ok)
                return true;
        }
        catch (e) { /* 아래에서 다시 */ }
        relayUrl = undefined;
    }
    return false;
}
async function askAi(system, user) {
    let u;
    try {
        u = await relay();
    }
    catch (e) {
        throw new Error('offline');
    }
    const ac = typeof AbortController !== 'undefined' ? new AbortController() : undefined;
    const tm = setTimeout(() => ac && ac.abort(), 110000);
    try {
        const r = await fetch(u + '/v1/messages', { method: 'POST', signal: ac && ac.signal,
            headers: { 'content-type': 'application/json', 'x-api-key': RELAY_KEY, 'anthropic-version': '2023-06-01' },
            body: JSON.stringify({ model: 'claude-haiku-5-5', max_tokens: 1500, system, messages: [{ role: 'user', content: user }] }) });
        if (!r.ok) {
            relayUrl = undefined;
            throw new Error(r.status === 429 ? '잠시 뒤에 다시 (분당 20회)' : 'offline');
        }
        const j = await r.json();
        const t = ((j && j.content) || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
        if (!t)
            throw new Error('빈 답');
        return t;
    }
    catch (e) {
        const m = String((e && e.message) || e);
        if (m.indexOf('잠시') === 0 || m === '빈 답')
            throw e;
        relayUrl = undefined;
        throw new Error('offline');
    }
    finally {
        clearTimeout(tm);
    }
}
// ───────── 프롬프트 — 화면에 있는 사실만 넘기고, 없는 건 지어내지 말라고 함
const ST_KO = { done: '완료', doing: '진행 중', late: '지연', wait: '대기' };
const SYS = '너는 휴롬 AX팀 PLM(AX-PLM)의 업무 도우미다. 아래 「프로젝트 데이터」에 있는 사실만 근거로 한국어로 짧고 바로 쓸 수 있게 답한다. 데이터에 없는 숫자·날짜·업체명은 지어내지 말고 「확인 필요」라고 적는다. 머리말·인사 없이 본문만. 목록은 "- "로 시작한다. 마지막 줄에 「근거: 」로 어느 데이터 줄(단계·산출물·BOM·협력사·이슈 등)을 봤는지 적는다.';
function facts(p, now) {
    const ss = (0, work_1.stagesOf)(p);
    const ck = (0, work_1.curIdx)(p);
    const st = ss.map((s, k) => {
        const sp = (0, sched_1.planSpan)(p, k);
        const left = s.docs.filter(d => !(0, work_1.docOk)(p.docs[d.key])).map(d => `${d.label}${(p.docs[d.key] || {}).due ? `(마감 ${(p.docs[d.key] || {}).due})` : ''}`);
        return `${s.no} ${s.name}${s.gate ? ` [관문 ${s.gate}]` : ''}: 계획 ${sp ? sp.a + '~' + sp.b : '없음'}, 실제 끝 ${(p.actual || {})[s.id] || '-'}, 상태 ${ST_KO[(0, sched_1.stageState)(p, k, now)]}${left.length ? `, 남은 산출물 ${left.join(', ')}` : ''}`;
    });
    const lines = [`프로젝트 ${p.name} (품번 ${p.itemCode || '-'}, 개발 유형 ${(0, devtype_1.typeInfo)((0, devtype_1.typeOf)(p)).label}, PM ${p.owner || '-'}, 승인자 ${p.approver || '-'})`,
        `오늘 ${now}, 출시 목표 ${p.target || '-'}, 지금 단계 ${ss[ck].no} ${ss[ck].name}, 지연 ${(0, sched_1.lateDays)(p, now)}일`, '단계:', ...st];
    const iss = (p.issues || []).filter(i => !i.done);
    if (iss.length)
        lines.push('열린 이슈·리스크: ' + iss.map(i => `${i.kind} ${i.text}(담당 ${i.owner || '-'}, 기한 ${i.due || '-'})`).join(' / '));
    return lines.join('\n');
}
function itemFacts(p, now) {
    const out = [];
    if ((p.parts || []).length)
        out.push('BOM: ' + (0, item_1.bomTree)(p.parts || []).map(x => `${'  '.repeat(x.depth)}${x.part.no} ${x.part.name} Rev${x.part.rev}${x.part.baseRev ? ` (기반 Rev${x.part.baseRev})` : ''}${x.part.material ? ' ' + x.part.material : ''}${x.part.supplier ? ' / ' + x.part.supplier : ''}`).join('\n'));
    if ((p.docs2 || []).length)
        out.push('도면·문서: ' + (p.docs2 || []).map(d => `${d.title}${d.part ? `(${d.part})` : ''} 현재 Rev${d.rev}`).join(', '));
    if ((p.releases || []).length)
        out.push('업체 배포 기록: ' + (p.releases || []).map(r => `${r.doc} Rev${r.rev} → ${r.vendor} (${r.at.slice(0, 10)})`).join(', '));
    if ((p.ecrs || []).length)
        out.push('설계 변경: ' + (p.ecrs || []).map(e => `${e.no} ${e.title} [${e.status}] 부품 ${e.parts.join(',')}${e.eco ? ' ' + e.eco : ''}`).join(' / '));
    if ((p.certs || []).length)
        out.push('인증: ' + (p.certs || []).map(c => `${c.name} ${c.status}${c.until ? ' ~' + c.until : ''}(${(0, item_1.certState)(c, now)})`).join(', '));
    if ((p.vendors || []).length)
        out.push('협력사: ' + (p.vendors || []).map(v => `${v.name}(${v.role}${v.contact ? ', ' + v.contact : ''}) 샘플 ${v.samples.map(s => `${s.round} ${s.result} ${s.at.slice(0, 10)}`).join('·') || '없음'}, 승인원 ${v.aprvs.map(a => `${a.title} Rev${a.rev} ${a.status}`).join('·') || '없음'}, 업체 인증서 ${(v.vcerts || []).map(c => `${c.name}${c.until ? ' ~' + c.until : ''}`).join('·') || '없음'}`).join(' / '));
    return out.join('\n');
}
const ASK = {
    delay: '지금 진행 속도와 남은 산출물을 보고 ① 어느 단계가 며칠 늦어질지 예측 ② 그게 뒤 단계·관문·출시 목표에 주는 영향을 정리해라. 근거가 된 줄을 같이 적어라.',
    replan: '지연을 반영해 단계별 새 계획 끝 날짜(YYYY-MM-DD)를 제안해라. 형식: "- ① 컨셉·기획: 2026-12-01 (이유)". 출시 목표를 지킬 수 있는지와 줄일 수 있는 단계를 마지막에 한 줄.',
    draft: '아래 요청한 산출물의 초안을 써라. 제목·목적·항목별 내용(표 대신 목록)·확인 필요한 것 순서. 데이터에 없는 수치는 「확인 필요」.',
    gate: '지금 단계 관문의 승인 기준을 남은 산출물과 비교해 충족/미충족을 "- [충족] …" "- [미충족] …"으로 점검하고, 마지막에 승인자에게 보낼 승인 요청 글 초안(3~5문장)을 써라.',
    ecr: '진행 중이거나 최근 설계 변경마다 영향 받는 부품(BOM 상하위 포함)·도면·인증·업체 배포 판을 찾아 정리해라.',
    bomdiff: '기반 모델 대비 이 파생 모델의 BOM 차이(Rev가 기반과 다른 부품, 새 부품)를 목록으로 정리해라.',
    oldrev: '업체 배포 기록의 Rev와 도면·문서의 현재 Rev를 비교해 업체가 옛 판을 갖고 있는 경우를 모두 찾고, 다시 보낼 판을 적어라.',
    vendor: '협력사별 샘플·승인원·업체 인증서를 보고 만료됐거나 90일 안에 만료되는 것, 회신이 늦은 것을 정리해라.',
    chase: '회신이 필요한 협력사마다 독촉 메일 초안을 써라(제목 한 줄 + 본문 4~6문장, 정중하게). 영어 업체면 영어로.',
    certlist: '이 제품을 아래 나라에 팔 때 필요한 인증·신고(예: KC 전기안전·EMC·전파, CE LVD·EMC·RED, FCC, UL/ETL, FDA 식품접촉, LFGB, PSE 등)를 나라별 목록으로, 지금 인증 현황과 비교해 빠진 것 표시.',
    minutes: '아래 회의록에서 이슈와 할 일만 뽑아라. 한 줄에 하나, 형식 "- [이슈] 내용 / 담당 이름 / 기한 YYYY-MM-DD" 또는 "- [할 일] …". 회의록에 없는 담당·기한은 비워라.',
    weekly: '이번 주 주간 보고를 써라: 진행 한 줄, 이번 주 한 것, 다음 주 할 것, 지연·리스크, 도움 필요. 5~8줄.',
    similar: '아래 문제와 비슷한 과거 이슈·사양 변경·설계 변경을 이 데이터(다른 프로젝트 포함)에서 찾고, 그때 어떻게 했는지 적어라. 없으면 없다고.',
};
function buildAsk(kind, p, items, input, now = (0, ax_1.today)()) {
    const parts = ['프로젝트 데이터:', facts(p, now)];
    const info = (0, exports.kindInfo)(kind);
    if (info.item || ['ecr', 'bomdiff', 'oldrev', 'vendor', 'chase', 'certlist', 'draft', 'gate'].indexOf(kind) >= 0)
        parts.push(itemFacts(p, now));
    if (info.others || kind === 'similar')
        parts.push('다른 프로젝트 이슈·변경: ' + items.filter(x => x.id !== p.id).map(x => `${x.name}: ` + (x.issues || []).map(i => `${i.kind} ${i.text}${i.done ? '(해결)' : ''}`).concat((x.changes || []).map(c => `변경 ${c.what}(${c.why})`)).concat((x.ecrs || []).map(e => `${e.no} ${e.title}`)).join(' / ')).join('\n'));
    if (kind === 'bomdiff' && p.baseItem)
        parts.push('기반 모델: ' + p.baseItem);
    const past = (0, history_1.pastFacts)(p);
    if (past)
        parts.push(past); // 1.0.148 경험 창고
    parts.push('', '할 일: ' + (info.do || ASK[kind] || info.label));
    if (input)
        parts.push('', '요청 내용:', input);
    return parts.join('\n');
}
exports.SYSTEM = SYS;
// ───────── 반영 — 사람이 「반영」을 눌렀을 때만
function applyJob(p, j, who) {
    const at = new Date().toISOString();
    const text = j.result || '';
    let next = Object.assign({}, p);
    if (j.kind === 'weekly')
        next.brief = (p.brief || []).concat([{ at, who: `${who} (AI 초안 반영)`, text: text.replace(/\n+/g, ' ').slice(0, 600) }]);
    if (j.kind === 'minutes') {
        const add = [];
        text.split('\n').forEach((ln, i) => {
            const m = ln.match(/^\s*-\s*\[(이슈|할 일|할일|리스크)\]\s*(.+)$/);
            if (!m)
                return;
            const f = m[2].split('/').map(x => x.trim());
            const owner = (f.filter(x => /^담당/.test(x))[0] || '').replace(/^담당\s*/, '') || undefined;
            const due = ((f.filter(x => /^기한/.test(x))[0] || '').match(/\d{4}-\d{2}-\d{2}/) || [])[0];
            add.push({ id: 'ai' + Date.now().toString(36) + i, kind: m[1] === '리스크' ? '리스크' : '이슈', text: (m[1].indexOf('할') === 0 ? '[할 일] ' : '') + f[0], owner, due, at, who, stage: (0, work_1.stagesOf)(p)[(0, work_1.curIdx)(p)].id });
        });
        next.issues = (p.issues || []).concat(add);
    }
    if (j.kind === 'replan' || j.kind === 'j_back') {
        const plan = Object.assign({}, (p.plan || {}));
        const ss = (0, work_1.stagesOf)(p);
        text.split('\n').forEach(ln => { ss.forEach(s => { if (ln.indexOf(s.no) >= 0) {
            const d = (ln.match(/\d{4}-\d{2}-\d{2}/) || [])[0];
            if (d)
                plan[s.id] = d;
        } }); });
        next.plan = plan;
    }
    if (j.doc)
        next.docs = Object.assign(Object.assign({}, p.docs), { [j.doc]: Object.assign(Object.assign({}, (p.docs[j.doc] || {})), { done: true, by: `${who} (AI 초안 확인)`, at }) }); // 1.0.140
    next.aiJobs = (p.aiJobs || []).map(x => (x.id === j.id ? Object.assign(Object.assign({}, x), { state: 'applied', by: who, doneAt: x.doneAt || at, appliedAt: at }) : x));
    next.log = (p.log || []).concat([{ at, who, kind: 'note', ai: true, what: `AI 결과 반영 — ${j.label}: ${text.split('\n')[0].slice(0, 120)}` }]);
    return next;
}
exports.APPLY_NOTE = { weekly: '「이번 주 요약」에 들어가요', minutes: '이슈·할 일로 등록돼요', replan: '단계 계획일이 바뀌어요', j_back: '단계 계획일이 바뀌어요' };

};
__m["src/webparts/huromAxPlm/model/item.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleOk = exports.bomNote = exports.roleFor = exports.VENDOR_ROLES = exports.mainVendor = exports.avgScore = exports.lastSample = exports.lastAprv = exports.changedParts = exports.moldT1ok = exports.lastTrial = exports.docsOfPart = exports.certsOfPart = exports.ecrsOfPart = exports.children = exports.needMark = exports.uid = void 0;
exports.nextRev = nextRev;
exports.bomTree = bomTree;
exports.certState = certState;
exports.newDocVersion = newDocVersion;
exports.moveEcr = moveEcr;
exports.itemSamples = itemSamples;
exports.releaseState = releaseState;
exports.gateChecks = gateChecks;
exports.startItem = startItem;
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const nowIso = () => new Date().toISOString();
const uid = (p) => p + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36);
exports.uid = uid;
// A → B, 01 → 02, Z → AA
function nextRev(r) {
    if (/^\d+$/.test(r)) {
        const n = String(Number(r) + 1);
        return r.length > n.length ? ('000' + n).slice(-r.length) : n;
    }
    const t = (r || 'A').toUpperCase();
    if (t[t.length - 1] === 'Z')
        return t + 'A';
    return t.slice(0, -1) + String.fromCharCode(t.charCodeAt(t.length - 1) + 1);
}
// 플라스틱 25 g 이상은 재질 표기 대상 (자원재활용법 분리배출 표시·재질구조 — 사내 점검 기준)
const PLASTIC = /\b(PP|PE|HDPE|LDPE|ABS|PC|POM|PA|PET|PBT|PS|SAN|Tritan|트라이탄|TPE|PMMA)\b/i;
const needMark = (x) => !!x.material && PLASTIC.test(x.material) && (x.weight || 0) >= 25;
exports.needMark = needMark;
const children = (parts, parent) => parts.filter(x => (x.parent || '') === (parent || ''));
exports.children = children;
function bomTree(parts) {
    const out = [];
    const seen = {};
    const walk = (parent, depth) => (0, exports.children)(parts, parent).forEach(x => { if (seen[x.no])
        return; seen[x.no] = true; out.push({ part: x, depth }); walk(x.no, depth + 1); });
    walk(undefined, 0);
    parts.forEach(x => { if (!seen[x.no])
        out.push({ part: x, depth: 0 }); }); // 부모가 없는 번호를 가리키는 줄도 빠지지 않게
    return out;
}
const ecrsOfPart = (p, no) => (p.ecrs || []).filter(e => e.parts.indexOf(no) >= 0);
exports.ecrsOfPart = ecrsOfPart;
const certsOfPart = (p, no) => (p.certs || []).filter(c => c.part === no);
exports.certsOfPart = certsOfPart;
const docsOfPart = (p, no) => (p.docs2 || []).filter(d => d.part === no);
exports.docsOfPart = docsOfPart;
function certState(c, today) {
    if (c.status === '만료')
        return 'late';
    if (c.status !== '취득')
        return 'open';
    if (!c.until)
        return 'ok';
    const d = Math.round((new Date(c.until + 'T00:00:00').getTime() - new Date(today + 'T00:00:00').getTime()) / 86400000);
    return d < 0 ? 'late' : d <= 90 ? 'soon' : 'ok';
}
// 도면·문서 새 판 — 지금 판은 prev에 쌓고 Rev 올림
function newDocVersion(p, id, link, who, note) {
    const at = nowIso();
    const d = (p.docs2 || []).filter(x => x.id === id)[0];
    if (!d)
        return p;
    const rev = nextRev(d.rev);
    return Object.assign(Object.assign({}, p), { docs2: (p.docs2 || []).map(x => (x.id === id ? Object.assign(Object.assign({}, x), { prev: x.prev.concat([{ rev: x.rev, link: x.link, by: x.by, at: x.at, note: x.note }]), rev, link: link || undefined, by: who, at, note: note || undefined }) : x)), log: p.log.concat([{ at, who, kind: 'doc', what: `${d.kind} 「${d.title}」 Rev ${d.rev} → ${rev}${note ? ` — ${note}` : ''}` }]) });
}
// 설계 변경 상태 바꾸기 — 승인되면 ECO 번호를 붙이고 영향 부품 Rev를 한 단계 올리고, 사양 변경 이력에도 남김
function moveEcr(p, id, to, who, note) {
    const at = nowIso();
    const e = (p.ecrs || []).filter(x => x.id === id)[0];
    if (!e)
        return p;
    let parts = p.parts || [];
    let eco = e.eco;
    let revs = e.revs;
    let changes = p.changes || [];
    if (to === '승인') {
        const n = (p.ecrs || []).filter(x => x.eco).length + 1;
        eco = `ECO-${('00' + n).slice(-3)}`;
        revs = {};
        parts = parts.map(x => { if (e.parts.indexOf(x.no) < 0)
            return x; const r = nextRev(x.rev); revs[x.no] = `${x.rev}→${r}`; return Object.assign(Object.assign({}, x), { rev: r }); });
        changes = changes.concat([{ id: (0, exports.uid)('c'), at, who, what: `${eco} ${e.title}`, why: e.why, stage: p.stage }]);
    }
    const bomRev = to === '승인' ? nextRev(p.bomRev || 'A') : p.bomRev;
    const bomLog = to === '승인' ? (p.bomLog || []).concat([{ rev: bomRev, at, who, what: `${eco} ${e.title}` }]) : p.bomLog;
    const what = `${e.no} ${to}${to === '승인' ? ` → ${eco} (부품 ${e.parts.length}개 Rev 올림)` : ''}${note ? ` — ${note}` : ''}`;
    return Object.assign(Object.assign({}, p), { parts, changes, bomRev, bomLog, ecrs: (p.ecrs || []).map(x => (x.id === id ? Object.assign(Object.assign({}, x), { status: to, eco, revs, log: x.log.concat([{ at, who, what: `${to}${note ? ` — ${note}` : ''}` }]) }) : x)), log: p.log.concat([{ at, who, kind: 'edit', what }]) });
}
// 예시 품목 데이터 — 음식물처리기·초음파 가습기 (저장 안 함)
function itemSamples(id) {
    const t = (d, h = 10) => `${d}T${('0' + h).slice(-2)}:00:00.000Z`;
    if (id === 'ax-sample-food')
        return {
            itemCode: 'HFD-100',
            parts: [
                { no: 'HFD-100', name: '음식물처리기 완제품', rev: 'C', qty: 1 },
                { no: 'HFD-110', name: '본체 하우징 ASSY', rev: 'B', parent: 'HFD-100', qty: 1 },
                { no: 'HFD-111', name: '외관 커버', material: 'ABS (V-0)', weight: 412, supplier: '대성정밀', rev: 'B', parent: 'HFD-110', qty: 1 },
                { no: 'HFD-112', name: '분쇄날 하우징', material: 'PBT GF30', weight: 138, supplier: '대성정밀', rev: 'C', parent: 'HFD-110', qty: 1 },
                { no: 'HFD-113', name: '건조 히터 (450W)', material: '니크롬·운모', weight: 64, supplier: '한일히터', rev: 'A', parent: 'HFD-110', qty: 1 },
                { no: 'HFD-120', name: '분쇄 모듈 ASSY', rev: 'B', parent: 'HFD-100', qty: 1 },
                { no: 'HFD-121', name: '분쇄날', material: 'STS420J2', weight: 46, supplier: '세진금속', rev: 'B', parent: 'HFD-120', qty: 1 },
                { no: 'HFD-122', name: 'BLDC 모터 24V', material: '—', weight: 310, supplier: '동양모터(중국)', rev: 'A', parent: 'HFD-120', qty: 1 },
                { no: 'HFD-130', name: '음식물 통 (2.5 L)', material: 'PP', weight: 186, supplier: '대성정밀', rev: 'B', parent: 'HFD-100', qty: 1 },
                { no: 'HFD-140', name: '활성탄 필터', material: 'PP 프레임·활성탄', weight: 22, supplier: '에코필', rev: 'A', parent: 'HFD-100', qty: 1 },
                { no: 'HFD-150', name: '메인 PCB', material: 'FR-4', weight: 38, supplier: '성우전자', rev: 'B', parent: 'HFD-100', qty: 1 }
            ],
            docs2: [
                { id: 'd1', kind: '도면', title: '외관 커버 2D·3D', part: 'HFD-111', rev: 'B', link: 'https://hurom.sharepoint.com/sites/AX/doc/HFD-111_B.pdf', by: '김호철', at: t('2026-09-02'), note: '배기구 위치 이동', prev: [{ rev: 'A', by: '김호철', at: t('2026-07-21'), note: '최초' }] },
                { id: 'd2', kind: '도면', title: '분쇄날 하우징', part: 'HFD-112', rev: 'C', link: 'https://hurom.sharepoint.com/sites/AX/doc/HFD-112_C.pdf', by: '김호철', at: t('2026-11-05'), note: 'T0 전 리브 두께 1.8→2.4', prev: [{ rev: 'A', by: '김호철', at: t('2026-07-21') }, { rev: 'B', by: '김호철', at: t('2026-09-02'), note: '체결 보스 추가' }] },
                { id: 'd3', kind: '사양서', title: '제품 사양서', rev: '03', link: 'https://hurom.sharepoint.com/sites/AX/doc/HFD-100_spec_03.docx', by: '심준보', at: t('2026-08-20'), note: '용량 2.5 L', prev: [{ rev: '01', by: '심준보', at: t('2026-06-28') }, { rev: '02', by: '심준보', at: t('2026-07-08') }] },
                { id: 'd4', kind: '시험성적서', title: '건조 히터 온도 상승 시험', part: 'HFD-113', rev: 'A', link: 'https://hurom.sharepoint.com/sites/AX/doc/HFD-113_temp.pdf', by: '김호철', at: t('2026-10-14'), prev: [] }
            ],
            ecrs: [
                { id: 'e1', no: 'ECR-001', title: '음식물 통 용량 2 L → 2.5 L', why: '4인 가족 하루 양 부족 (VOC 38건)', parts: ['HFD-130', 'HFD-111'], status: '승인', by: '심준보', at: t('2026-08-18'), eco: 'ECO-001', revs: { 'HFD-130': 'A→B', 'HFD-111': 'A→B' },
                    log: [{ at: t('2026-08-18'), who: '심준보', what: '요청' }, { at: t('2026-08-19'), who: '김호철', what: '검토' }, { at: t('2026-08-20'), who: '김현숙', what: '승인' }] },
                { id: 'e2', no: 'ECR-002', title: '분쇄날 하우징 리브 보강', why: '시제품 낙하 시험에서 하우징 변형', parts: ['HFD-112'], status: '승인', by: '김호철', at: t('2026-11-03'), eco: 'ECO-002', revs: { 'HFD-112': 'B→C' },
                    log: [{ at: t('2026-11-03'), who: '김호철', what: '요청' }, { at: t('2026-11-04'), who: '김현숙', what: '승인' }] },
                { id: 'e3', no: 'ECR-003', title: '필터 프레임 재질 PP → 생분해 PLA 검토', why: '친환경 마케팅 포인트, 원가 +320원', parts: ['HFD-140'], status: '검토', by: '심준보', at: t('2026-11-14'),
                    log: [{ at: t('2026-11-14'), who: '심준보', what: '요청' }, { at: t('2026-11-15'), who: '김호철', what: '검토 — 내열 시험 필요' }] }
            ],
            certs: [
                { id: 'c1', name: 'KC 전기안전 (안전인증)', part: 'HFD-100', status: '시험 중', region: '한국', link: 'https://hurom.sharepoint.com/sites/AX/doc/KC_apply.pdf' },
                { id: 'c2', name: 'KC 전자파 적합성 (EMC)', part: 'HFD-150', status: '준비', region: '한국' },
                { id: 'c3', name: '재질·구조 개선 평가 (포장재)', part: 'HFD-100', status: '준비', region: '한국' },
                { id: 'c4', name: '식품용 기구 (음식물 통 PP)', part: 'HFD-130', status: '취득', no: 'FS-2026-1182', until: '2027-01-31', region: '한국' }
            ],
        };
    if (id === 'ax-sample-humid')
        return {
            itemCode: 'HUH-200',
            parts: [
                { no: 'HUH-200', name: '초음파 가습기 완제품', rev: 'A', qty: 1 },
                { no: 'HUH-210', name: '물통 (4 L)', material: 'Tritan', weight: 240, supplier: '미정', rev: 'A', parent: 'HUH-200', qty: 1 },
                { no: 'HUH-220', name: '초음파 진동자 모듈', material: '세라믹', weight: 18, supplier: '미정', rev: 'A', parent: 'HUH-200', qty: 1 },
                { no: 'HUH-230', name: 'UV-C LED 모듈', material: 'FR-4·석영', weight: 9, supplier: '미정', rev: 'A', parent: 'HUH-200', qty: 1 },
                { no: 'HUH-240', name: '미네랄 필터 카트리지', material: 'PP 프레임·이온교환수지', weight: 55, supplier: '미정', rev: 'A', parent: 'HUH-200', qty: 1 }
            ],
            docs2: [{ id: 'd1', kind: '사양서', title: '컨셉 사양서', rev: '01', link: 'https://hurom.sharepoint.com/sites/AX/doc/HUH-200_concept.docx', by: '김호철', at: t('2026-11-12'), prev: [] }],
            ecrs: [],
            certs: [
                { id: 'c1', name: 'KC 전기안전', part: 'HUH-200', status: '준비', region: '한국' },
                { id: 'c2', name: '항균·살균 표시 근거 시험 (공인 성적서)', part: 'HUH-230', status: '준비', region: '한국' }
            ],
        };
    return {};
}
// ---- 1.0.132 개발 유형별 규칙 ----
const lastTrial = (m) => m.trials.slice(-1)[0];
exports.lastTrial = lastTrial;
// T1 이상 합격했나 (T0만 합격은 아님)
const moldT1ok = (m) => m.trials.some(t => t.result === '합격' && /^T[1-9]/.test(t.round));
exports.moldT1ok = moldT1ok;
const changedParts = (p) => (p.parts || []).filter(x => !!x.baseRev && x.baseRev !== x.rev);
exports.changedParts = changedParts;
// OEM: 업체에 나간 판이 최신인가
function releaseState(p, d) {
    const by = {};
    (p.releases || []).filter(r => r.doc === d.id).forEach(r => { by[r.vendor] = r; });
    return Object.keys(by).map(v => ({ vendor: v, rev: by[v].rev, old: by[v].rev !== d.rev }));
}
const lastAprv = (v) => v.aprvs.slice(-1)[0];
exports.lastAprv = lastAprv;
const lastSample = (v) => v.samples.slice(-1)[0];
exports.lastSample = lastSample;
const avgScore = (v) => (v.evals.length ? Math.round(v.evals.reduce((n, e) => n + e.score, 0) / v.evals.length * 10) / 10 : undefined);
exports.avgScore = avgScore;
const mainVendor = (p, role) => (p.vendors || []).filter(v => v.role === role)[0];
exports.mainVendor = mainVendor;
exports.VENDOR_ROLES = ['금형', '부품', 'OEM 생산', 'ODM', '완제품 공급', '포장·인쇄'];
const roleFor = (p) => { const t = (0, devtype_1.typeOf)(p); return t === 'odm' ? 'ODM' : t === 'sourcing' ? '완제품 공급' : t === 'oem' ? 'OEM 생산' : '금형'; };
exports.roleFor = roleFor;
function gateChecks(p0, s) {
    const p = p0;
    const t = (0, devtype_1.typeOf)(p);
    const g = (s.gate || '').split(' ')[0];
    const out = [];
    if (t === 'own' && g === 'G3') {
        const ms = p.molds || [];
        out.push({ label: `금형 ${ms.length}벌 모두 T1 이상 합격 (${ms.filter(exports.moldT1ok).length}/${ms.length})`, ok: ms.length > 0 && ms.every(exports.moldT1ok) });
    }
    if (t === 'derive' && g === 'G3') {
        const open = (p.ecrs || []).filter(e => e.status === '요청' || e.status === '검토').length;
        out.push({ label: `진행 중 설계 변경 없음 (${open}건 남음)`, ok: open === 0 });
        out.push({ label: `바뀐 부품 ${(0, exports.changedParts)(p).length}개 — ECO로 Rev 올라감`, ok: (0, exports.changedParts)(p).length > 0 });
    }
    if (t === 'oem' && g === 'G3') {
        const old = (p.docs2 || []).filter(d => d.kind === '도면').reduce((n, d) => n + releaseState(p, d).filter(r => r.old).length, 0);
        const sent = (p.docs2 || []).filter(d => d.kind === '도면' && releaseState(p, d).length).length;
        out.push({ label: `업체에 나간 도면이 모두 최신 판 (옛 판 ${old}건)`, ok: sent > 0 && old === 0 });
        const v = (0, exports.mainVendor)(p, 'OEM 생산');
        const sm = v && (0, exports.lastSample)(v);
        out.push({ label: `생산 업체 초도품 검사 합격${sm ? ` (${sm.round} ${sm.result})` : ''}`, ok: !!sm && sm.result === '합격' });
    }
    if (t === 'odm' && g === 'G3') { // 1.0.133 순서: 최종 샘플 합격 → 승인원 승인 (곽두팔 msg 10430179)
        const v = (p.vendors || []).filter(x => x.role === 'ODM' && x.aprvs.length)[0] || (0, exports.mainVendor)(p, 'ODM');
        const sm = v && (0, exports.lastSample)(v);
        const a = v && (0, exports.lastAprv)(v);
        out.push({ label: `최종 샘플 합격${sm ? ` (${sm.round} ${sm.result})` : ' — 아직 없음'}`, ok: !!sm && sm.result === '합격' });
        out.push({ label: `ODM 업체 승인원 승인${a ? ` (${a.title} Rev ${a.rev} ${a.status})` : ' — 아직 없음'}`, ok: !!a && a.status === '승인' && !!sm && sm.result === '합격' });
    }
    if (t === 'sourcing' && g === 'G3') {
        const v = (0, exports.mainVendor)(p, '완제품 공급');
        const sm = v && (0, exports.lastSample)(v);
        out.push({ label: `샘플 합격${sm ? ` (${sm.round} ${sm.result})` : ' — 아직 없음'}`, ok: !!sm && sm.result === '합격' });
        const vc = (v && v.vcerts) || [];
        out.push({ label: `업체 인증서 확인 (${vc.filter(c => c.ok).length}/${vc.length})`, ok: vc.length > 0 && vc.every(c => c.ok) });
    }
    // 1.0.144 G1·G2·G5 기본 체크 (새 프로세스 관문)
    if (g === 'G1')
        out.push({ label: `PM 정함${p.owner ? ` (${p.owner})` : ''}`, ok: !!p.owner }, { label: `출시 목표일 정함${p.target ? ` (${p.target})` : ''}`, ok: !!p.target });
    if (g === 'G2') {
        out.push({ label: `승인자 정함${p.approver ? ` (${p.approver})` : ''}`, ok: !!p.approver });
        out.push({ label: `BOM 초안 (부품 ${(p.parts || []).length}개)`, ok: (p.parts || []).length > 0 });
    }
    if (g === 'G4' || g === 'G5') {
        const open = (p.ecrs || []).filter(e => e.status === '요청' || e.status === '검토').length;
        out.push({ label: `진행 중 설계 변경 없음 (${open}건)`, ok: open === 0 });
    }
    if (g === 'G5') {
        const nf = (p.parts || []).filter(x => !x.fixed).length;
        out.push({ label: `BOM 모두 확정 (미확정 ${nf}개)`, ok: nf === 0 && (p.parts || []).length > 0 });
    }
    if (g === 'G4' && t !== 'sourcing') {
        const cs = p.certs || [];
        out.push({ label: `인증 모두 취득 (${cs.filter(c => c.status === '취득').length}/${cs.length})`, ok: cs.every(c => c.status === '취득') });
    }
    return out;
}
const bomNote = (p) => (0, devtype_1.typeInfo)((0, devtype_1.typeOf)(p)).bomNote;
exports.bomNote = bomNote;
// 새 품목 시작 — 유형을 붙이고, 파생이면 기반 품목의 BOM·도면·인증을 복사 (바뀐 부품만 나중에 설계 변경으로)
function startItem(p, t, code, base, who) {
    const c = code.trim() || undefined;
    const at = new Date().toISOString();
    const x = Object.assign(Object.assign({}, p), { devType: t, itemCode: c });
    if (t === 'derive' && base) {
        const b = base;
        const bc = b.itemCode || '';
        const ren = (no) => (c && no === bc ? c : no); // 완제품 품번만 새로, 같이 쓰는 부품은 같은 품번 그대로 (바뀌면 설계 변경)
        x.baseItem = bc || base.name;
        x.parts = (b.parts || []).map(y => (Object.assign(Object.assign({}, y), { no: ren(y.no), parent: y.parent ? ren(y.parent) : undefined, baseRev: y.rev })));
        x.docs2 = (b.docs2 || []).map(d => (Object.assign(Object.assign({}, d), { part: d.part ? ren(d.part) : undefined, note: `기반 모델 ${bc} 판`, prev: [] })));
        x.certs = (b.certs || []).map(y => (Object.assign(Object.assign({}, y), { id: (0, exports.uid)('c'), part: y.part ? ren(y.part) : undefined, status: y.status === '취득' ? '취득' : y.status, name: y.name })));
        x.log = p.log.concat([{ at, who, kind: 'edit', what: `파생 개발 — 기반 ${x.baseItem}에서 부품 ${(x.parts || []).length}개·도면 ${(x.docs2 || []).length}개·인증 ${(x.certs || []).length}개 복사` }]);
    }
    else if (c) {
        x.parts = [{ no: c, name: p.name + (t === 'sourcing' ? '' : ' 완제품'), rev: 'A', qty: 1, kind: t === 'sourcing' ? '완제품' : undefined }];
        x.log = p.log.concat([{ at, who, kind: 'edit', what: `개발 유형 ${(0, devtype_1.typeInfo)(t).label}` }]);
    }
    return x;
}
// 승인원은 마지막 샘플이 합격이어야 제출·승인 가능
const sampleOk = (v) => { const x = (0, exports.lastSample)(v); return !!x && x.result === '합격'; };
exports.sampleOk = sampleOk;

};
__m["src/webparts/huromAxPlm/model/work.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docLate = exports.projLate = exports.stageClear = exports.isHeld = exports.lastApproval = exports.sameGate = exports.oldGate = exports.stageDocsOk = exports.docOk = exports.gateKey = exports.ITEM_IMG = exports.stagesOf = void 0;
exports.gateState = gateState;
exports.unlocked = unlocked;
exports.curIdx = curIdx;
exports.settle = settle;
exports.perf = perf;
exports.lateItems = lateItems;
exports.todos = todos;
exports.workSamples = workSamples;
// AX-PLM 1.0.128 — PM이 매일 쓰는 기능 (심준보 2026-11-17 #ax-plm msg 10389967 '실제 사용에도 문제없게 AX팀용 PLM' · 10389890/10389907 '게임 스킬 트리처럼 단계별로')
// 스킬 트리 규칙: 단계 산출물을 다 채우면(또는 '필요 없음' + 사유) 다음 단계가 열림. 관문(G1~G3)은 보스 — 승인받아야 넘어감
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const item_1 = require("src/webparts/huromAxPlm/model/item.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
Object.defineProperty(exports, "stagesOf", { enumerable: true, get: function () { return devtype_1.stagesOf; } });
const samples_1 = require("src/webparts/huromAxPlm/model/samples.js");
exports.ITEM_IMG = 'https://simjb23-oss.github.io/hurom-ehr/axplm/items/'; // 곽두팔이 피그마로 만든 아이템 그림 (<키>.png). 없으면 기본 카드
const gateKey = (gate) => (gate ? gate.split(' ')[0].toLowerCase() : '');
exports.gateKey = gateKey;
const docOk = (d) => !!d && (!!d.done || !!d.skip);
exports.docOk = docOk;
const stageDocsOk = (p, s) => s.docs.filter(x => (0, exports.docOk)(p.docs[x.key])).length;
exports.stageDocsOk = stageDocsOk;
// 1.0.144 관문 번호가 G3·G4로 바뀐 것(옛 G2·G3)도 같은 관문으로 읽음
const oldGate = (gate) => { const m = /^G([34]) (.*)$/.exec(gate); return m ? `G${Number(m[1]) - 1} ${m[2]}` : ''; };
exports.oldGate = oldGate;
const sameGate = (a, gate) => a === gate || (!!(0, exports.oldGate)(gate) && a === (0, exports.oldGate)(gate));
exports.sameGate = sameGate;
const lastApproval = (p, gate) => (p.approvals || []).filter(a => (0, exports.sameGate)(a.gate, gate)).slice(-1)[0];
exports.lastApproval = lastApproval;
// 보류 = 승인자가 결정을 미룸 (상태는 '승인 대기' 그대로, 보류 표시만)
const isHeld = (p, gate) => { const a = gate ? (0, exports.lastApproval)(p, gate) : undefined; return !!a && a.kind === 'hold'; };
exports.isHeld = isHeld;
function gateState(p, s) {
    if (!s.gate)
        return 'none';
    const a = (0, exports.lastApproval)(p, s.gate);
    if (a)
        return a.kind === 'approve' ? 'approved' : a.kind === 'reject' ? 'rejected' : 'requested';
    if (p.gates && (p.gates[s.gate] || p.gates[(0, exports.oldGate)(s.gate)]))
        return 'approved'; // 1.0.127 이전에 넘긴 관문은 통과로 봄
    return 'wait';
}
const stageClear = (p, s) => (0, exports.stageDocsOk)(p, s) === s.docs.length && (!s.gate || gateState(p, s) === 'approved');
exports.stageClear = stageClear;
// 그 단계가 열렸나 — 앞 단계가 모두 끝나야 열림
function unlocked(p, k) {
    for (let i = 0; i < k; i++)
        if (!(0, exports.stageClear)(p, (0, devtype_1.stagesOf)(p)[i]))
            return false;
    return true;
}
// 지금 단계 = 처음으로 안 끝난 단계
function curIdx(p) {
    for (let i = 0; i < (0, devtype_1.stagesOf)(p).length; i++)
        if (!(0, exports.stageClear)(p, (0, devtype_1.stagesOf)(p)[i]))
            return i;
    return (0, devtype_1.stagesOf)(p).length - 1;
}
// 바꾼 뒤 단계를 다시 맞춤 — 앞으로 가면 끝난 날(actual) 기록, 이력에 남김
function settle(p, who) {
    const k = curIdx(p);
    const before = (0, ax_1.stageIdx)(p.stage);
    if (k === before)
        return p;
    const at = new Date().toISOString();
    const actual = Object.assign({}, (p.actual || {}));
    const log = p.log.slice();
    if (k > before)
        for (let i = before; i < k; i++) {
            actual[(0, devtype_1.stagesOf)(p)[i].id] = actual[(0, devtype_1.stagesOf)(p)[i].id] || (0, ax_1.today)();
            log.push({ at, who, kind: 'move', what: `${(0, devtype_1.stagesOf)(p)[i].no} ${(0, devtype_1.stagesOf)(p)[i].name} 완료 → ${(0, devtype_1.stagesOf)(p)[i + 1].no} ${(0, devtype_1.stagesOf)(p)[i + 1].name} 열림` });
        }
    else {
        for (let i = k; i < before; i++)
            delete actual[(0, devtype_1.stagesOf)(p)[i].id];
        log.push({ at, who, kind: 'move', what: `${(0, devtype_1.stagesOf)(p)[k].no} ${(0, devtype_1.stagesOf)(p)[k].name}(으)로 되돌아감` });
    }
    return Object.assign(Object.assign({}, p), { stage: (0, devtype_1.stagesOf)(p)[k].id, actual, log });
}
function perf(p, k, now = (0, ax_1.today)()) {
    const s = (0, devtype_1.stagesOf)(p)[k];
    const plan = (p.plan || {})[s.id];
    const actual = (p.actual || {})[s.id];
    const ck = curIdx(p);
    const allClear = (0, exports.stageClear)(p, s);
    const state = allClear && k < ck ? 'done' : allClear && k === (0, devtype_1.stagesOf)(p).length - 1 ? 'done' : k === ck ? 'doing' : 'todo';
    let late = 0;
    if (plan) {
        const ref = state === 'done' ? (actual || plan) : now;
        const d = (0, ax_1.daysTo)(plan, ref);
        late = d !== undefined && d < 0 ? -d : 0;
        if (state === 'todo')
            late = 0;
    }
    return { plan, actual, late, state };
}
// 1.0.135 지연은 한 규칙 (곽두팔 msg 10484801): 계획일이 지났는데 안 끝난 것 — 단계 끝 계획일 또는 산출물 마감. 대시보드 문구·일정 판 색·지금 해야 할 것·전체 일정이 모두 이 값을 씀
function lateItems(p, now = (0, ax_1.today)()) {
    const out = [];
    (0, devtype_1.stagesOf)(p).forEach((s, k) => {
        if ((0, exports.stageClear)(p, s))
            return;
        const pl = (p.plan || {})[s.id];
        const d0 = (0, ax_1.daysTo)(pl, now);
        if (d0 !== undefined && d0 < 0)
            out.push({ k, days: -d0 });
        s.docs.forEach(x => { const st = p.docs[x.key] || {}; if ((0, exports.docOk)(st))
            return; const d = (0, ax_1.daysTo)(st.due, now); if (d !== undefined && d < 0)
            out.push({ k, key: x.key, days: -d }); });
    });
    return out;
}
const projLate = (p, now = (0, ax_1.today)()) => lateItems(p, now).reduce((a, x) => Math.max(a, x.days), 0);
exports.projLate = projLate;
const docLate = (p, key, now = (0, ax_1.today)()) => { const st = p.docs[key] || {}; const d = (0, ax_1.daysTo)(st.due, now); return !(0, exports.docOk)(st) && d !== undefined && d < 0; };
exports.docLate = docLate;
function todos(items, who, now = (0, ax_1.today)()) {
    const out = [];
    const me = (n) => who === '*' || (!!n && !!who && n.replace(/\s/g, '') === who.replace(/\s/g, '')); // 1.0.134 '*' = 팀 전체
    items.forEach(p => {
        const k = curIdx(p);
        const s = (0, devtype_1.stagesOf)(p)[k];
        const pm = me(p.owner);
        (0, devtype_1.stagesOf)(p).forEach((s2, k2) => {
            if (k2 < k)
                return;
            s2.docs.forEach(d => {
                const st = p.docs[d.key] || {};
                if ((0, exports.docOk)(st))
                    return;
                const due = st.due || (p.plan || {})[s2.id];
                const left = (0, ax_1.daysTo)(due, now);
                if (k2 !== k && !(left !== undefined && left < 0))
                    return;
                if (me(st.who) || (pm && !st.who))
                    out.push({ pid: p.id, project: p.name, kind: '산출물', text: d.label, stage: k2, due, left, key: d.key });
            });
        });
        if (s.gate && gateState(p, s) === 'requested' && me(p.approver))
            out.push({ pid: p.id, project: p.name, kind: '승인', text: `${s.gate} 승인 요청`, stage: k, due: (p.plan || {})[s.id], left: (0, ax_1.daysTo)((p.plan || {})[s.id], now) });
        (p.issues || []).filter(i => !i.done && (me(i.owner) || (pm && !i.owner))).forEach(i => out.push({ pid: p.id, project: p.name, kind: i.kind, text: i.text, stage: (0, ax_1.stageIdx)(i.stage), due: i.due, left: (0, ax_1.daysTo)(i.due, now) }));
    });
    return out.sort((a, b) => (a.left === undefined ? 9999 : a.left) - (b.left === undefined ? 9999 : b.left));
}
// 예시 — 1.0.127 예시에 담당·기한·승인·이슈·변경 이력을 채움 (저장 안 함)
function workSamples0() {
    const xs = (0, ax_1.axSamples)();
    const iso = (d, h = 10) => `${d}T${('0' + h).slice(-2)}:00:00.000Z`;
    return xs.map(p => {
        if (p.id === 'ax-sample-food') {
            const ap = [
                { gate: 'G1 기획 승인', kind: 'request', at: iso('2026-06-13'), who: '심준보' }, { gate: 'G1 기획 승인', kind: 'approve', at: iso('2026-06-15'), who: '김현숙', note: '건조·분쇄형으로 진행' },
                { gate: 'G2 개발발의 승인', kind: 'request', at: iso('2026-07-02'), who: '심준보' }, { gate: 'G2 개발발의 승인', kind: 'reject', at: iso('2026-07-03'), who: '김현숙', note: '원가 목표 다시' },
                { gate: 'G2 개발발의 승인', kind: 'request', at: iso('2026-07-08'), who: '심준보' }, { gate: 'G2 개발발의 승인', kind: 'approve', at: iso('2026-07-09'), who: '김현숙' }
            ];
            const docs = Object.assign(Object.assign({}, p.docs), { trial: { who: '김호철', due: '2026-11-21' }, ppap: { who: '심준보', due: '2026-12-05' }, cert: { who: '김호철', due: '2027-01-15' }, print: { who: '심준보', due: '2026-12-20' }, issue: { done: true, by: 'PC-곽두팔', at: iso('2026-11-15') } });
            return Object.assign(Object.assign({}, p), { docs, approver: '김현숙', approvals: ap, actual: { S1: '2026-06-15', S2: '2026-07-09', S3: '2026-09-04' }, issues: [{ id: 'i1', kind: '이슈', text: '분쇄날 하우징 변형 (T0 전 확인)', owner: '김호철', due: '2026-11-21', at: iso('2026-11-12'), who: '심준보', stage: 'S4' },
                    { id: 'i2', kind: '리스크', text: 'KC EMC 시험 일정 밀리면 출시 지연', owner: '심준보', due: '2027-01-10', at: iso('2026-11-14'), who: 'PC-곽두팔', stage: 'S4' },
                    { id: 'i3', kind: '이슈', text: '활성탄 필터 공급처 2곳 견적', owner: '심준보', due: '2026-10-30', done: true, doneAt: iso('2026-10-29'), at: iso('2026-10-20'), who: '심준보', stage: 'S4' }], changes: [{ id: 'c1', at: iso('2026-08-20'), who: '심준보', what: '용량 2L → 2.5L', why: 'VOC 4인 가족 하루 양 부족', stage: 'S3' }] });
        }
        return Object.assign(Object.assign({}, p), { approver: '김현숙', docs: Object.assign(Object.assign({}, p.docs), { plan: { who: '김호철', due: '2026-11-20' }, biz: { who: '심준보', due: '2026-11-24' }, g1rep: { who: '심준보' } }), issues: [{ id: 'i4', kind: '리스크', text: '"세균 99.9%" 광고는 공인 시험성적서 먼저', owner: '김호철', due: '2026-12-15', at: iso('2026-11-16'), who: 'PC-김호철(PLM)', stage: 'S1' }], changes: [] });
    });
}
// 1.0.130 — 예시에 품목·BOM·도면 판·설계 변경·인증 데이터까지
// 1.0.132 — 유형별 기록을 붙이고 파생·OEM·소싱 예시 추가 (5개)
function workSamples() { return workSamples0().map(p => (0, samples_1.typeTheTwo)(Object.assign(Object.assign({}, p), (0, item_1.itemSamples)(p.id)))).concat((0, samples_1.moreSamples)()).map(passGates); }
// 1.0.144 예시: 관문이 G1~G5로 늘어서, 예시가 이미 지난 단계의 새 관문(G2·G5)은 승인된 걸로 채움
function passGates(p) {
    const k0 = (0, ax_1.stageIdx)(p.stage);
    const add = [];
    (0, devtype_1.stagesOf)(p).forEach((s, i) => { if (i < k0 && s.gate && gateState(p, s) !== 'approved') {
        const at = ((p.actual || {})[s.id] || (p.plan || {})[s.id] || p.created.slice(0, 10)) + 'T09:00:00.000Z';
        add.push({ gate: s.gate, kind: 'request', at, who: p.owner || '심준보' }, { gate: s.gate, kind: 'approve', at, who: p.approver || '김현숙' });
    } });
    return add.length ? Object.assign(Object.assign({}, p), { approvals: (p.approvals || []).concat(add) }) : p;
}

};
__m["src/webparts/huromAxPlm/model/samples.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeTheTwo = typeTheTwo;
exports.moreSamples = moreSamples;
// AX-PLM 1.0.132 — 개발 유형마다 예시 하나씩 (저장 안 함). HFD-100 = 자체 개발, HUH-200 = ODM (곽두팔 msg 10425015)
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const iso = (d, h = 10) => `${d}T${('0' + h).slice(-2)}:00:00.000Z`;
const V = (id, name, role, country, x = {}) => (Object.assign({ id, name, role, country, samples: [], aprvs: [], evals: [], vcerts: [] }, x));
const done = (keys, by = '심준보', at = '2026-10-01') => {
    const o = {};
    keys.forEach(k => { o[k] = { done: true, by, at: iso(at) }; });
    return o;
};
const g1 = (gate, d) => [{ gate, kind: 'request', at: iso(d), who: '심준보' }, { gate, kind: 'approve', at: iso(d, 15), who: '김현숙' }];
// 기존 예시 두 개(음식물처리기·가습기)에 유형별 기록을 붙임
function typeTheTwo(p0) {
    const p = p0;
    if (p.id === 'ax-sample-food') {
        const docs = Object.assign(Object.assign(Object.assign({}, p.docs), done(['t0'], '김호철', '2026-10-28')), { t1: { who: '김호철', due: '2026-11-21' }, t2: { who: '김호철', due: '2026-12-05' }, ppap: { who: '심준보', due: '2026-12-12' } });
        delete docs.trial;
        return Object.assign(Object.assign({}, p), { devType: 'own', docs, approvals: (p.approvals || []).filter(a => a.gate.indexOf('G1') === 0), parts: (p.parts || []).map(x => (x.no === 'HFD-111' ? Object.assign(Object.assign({}, x), { mold: 'M-111' }) : x.no === 'HFD-112' ? Object.assign(Object.assign({}, x), { mold: 'M-112' }) : x.no === 'HFD-130' ? Object.assign(Object.assign({}, x), { mold: 'M-130' }) : x)), molds: [
                { id: 'm1', no: 'M-111', part: 'HFD-111', vendor: '대성정밀', cavity: 1, trials: [{ round: 'T0', at: iso('2026-10-24'), result: '수정', note: '배기구 주변 웰드라인', who: '김호철' }, { round: 'T1', at: iso('2026-11-13'), result: '합격', note: '치수 46/46 OK', who: '김호철' }] },
                { id: 'm2', no: 'M-112', part: 'HFD-112', vendor: '대성정밀', cavity: 2, trials: [{ round: 'T0', at: iso('2026-10-24'), result: '수정', note: '리브 변형 → ECO-002로 리브 2.4 mm', who: '김호철' }] },
                { id: 'm3', no: 'M-130', part: 'HFD-130', vendor: '대성정밀', cavity: 1, trials: [{ round: 'T0', at: iso('2026-10-24'), result: '합격', who: '김호철' }, { round: 'T1', at: iso('2026-11-13'), result: '합격', who: '김호철' }] }
            ], vendors: [
                V('v1', '대성정밀', '금형', '한국', { contact: '박영수 부장', evals: [{ at: iso('2026-11-13'), who: '김호철', score: 4, note: 'T1 수정 빠름, 리브 금형 수정 1주' }] }),
                V('v2', '동양모터(중국)', '부품', '중국', { unit: 'USD 6.80', moq: 3000, vcerts: [{ name: 'ISO 9001', until: '2027-06-30', ok: true }], samples: [{ id: 's1', round: '1차', at: iso('2026-09-20'), result: '합격', note: '소음 42 dB', who: '김호철' }], aprvs: [{ id: 'a1', title: 'BLDC 모터 승인원', rev: '01', at: iso('2026-10-02'), status: '승인', who: '김호철' }] }),
                V('v3', '한일히터', '부품', '한국', { samples: [{ id: 's2', round: '1차', at: iso('2026-10-14'), result: '합격', note: '온도 상승 시험 통과', who: '김호철' }] })
            ] });
    }
    if (p.id === 'ax-sample-humid') {
        const docs = { voc: { done: true }, req: { who: '김호철', due: '2026-11-20' }, vendor: { who: '심준보', due: '2026-11-24' }, g1rep: { who: '심준보' } };
        const odm = '선전 아쿠아미스트(중국)';
        return Object.assign(Object.assign({}, p), { devType: 'odm', docs, next: 'ODM 후보 2곳 비교 — 물통 세척 구조·UV-C 자체 시험 여부', parts: (p.parts || []).map(x => (Object.assign(Object.assign({}, x), { supplier: x.parent ? `${odm} (후보)` : x.supplier, food: x.no === 'HUH-210' || x.no === 'HUH-220' || x.no === 'HUH-240' || undefined }))), vendors: [
                V('v1', odm, 'ODM', '중국', { contact: 'Ms. Lin', unit: 'USD 18.40', moq: 2000, vcerts: [{ name: 'ISO 9001', until: '2027-03-31', ok: true }, { name: 'UV-C 살균 시험성적서 (자체)', ok: false }], evals: [{ at: iso('2026-11-14'), who: '김호철', score: 4, note: 'UV-C 물통 구조 있음, 금형 보유' }] }),
                V('v2', '닝보 쿨브리즈(중국)', 'ODM', '중국', { unit: 'USD 15.90', moq: 5000, evals: [{ at: iso('2026-11-14'), who: '김호철', score: 3, note: '단가 낮지만 MOQ 큼, 살균 근거 없음' }] })
            ] });
    }
    return p0;
}
// 새 예시 3개 — 파생·OEM·소싱
function moreSamples() {
    // 파생 개발 — 기존 원액기 색상 모델
    const d = (0, ax_1.newProject)('원액기 H-AI 세이지 그린 (파생)', '심준보', '심준보', '2027-02-27', '2026-10-06');
    d.id = 'ax-sample-derive';
    d.code = d.id;
    d.devType = 'derive';
    d.itemCode = 'HZA-SG';
    d.baseItem = 'HZA-100 원액기 H-AI';
    d.approver = '김현숙';
    d.docs = Object.assign(Object.assign(Object.assign({}, done(['base', 'plan', 'g1rep', 'rr', 'spec'], '심준보', '2026-10-20')), done(['ecr'], '김호철', '2026-11-10')), { cmf: { who: '심준보', due: '2026-11-25' }, dr: { who: '김호철', due: '2026-11-28' } });
    d.approvals = g1('G1 파생 기획 승인', '2026-10-15');
    d.parts = [
        { no: 'HZA-SG', name: '원액기 H-AI 세이지 그린', rev: 'B', baseRev: 'A', qty: 1 },
        { no: 'HZA-SG-10', name: '외관 하우징 ASSY', rev: 'B', baseRev: 'A', parent: 'HZA-SG', qty: 1 },
        { no: 'HZA-SG-11', name: '컬러 커버 (세이지 그린)', material: 'ABS', weight: 268, supplier: '대성정밀', rev: 'B', baseRev: 'A', parent: 'HZA-SG-10', qty: 1 },
        { no: 'HZA-SG-12', name: '본체 베이스', material: 'PC', weight: 410, supplier: '대성정밀', rev: 'A', baseRev: 'A', parent: 'HZA-SG-10', qty: 1 },
        { no: 'HZA-SG-20', name: '착즙 모듈 ASSY', rev: 'A', baseRev: 'A', parent: 'HZA-SG', qty: 1 },
        { no: 'HZA-SG-21', name: '스크류', material: 'Ultem', weight: 96, supplier: '세진정밀', rev: 'A', baseRev: 'A', parent: 'HZA-SG-20', qty: 1 },
        { no: 'HZA-SG-22', name: '드럼', material: 'Tritan', weight: 152, supplier: '세진정밀', rev: 'A', baseRev: 'A', parent: 'HZA-SG-20', qty: 1 },
        { no: 'HZA-SG-23', name: '스마트 호퍼 뚜껑 (그린 틴트)', material: 'Tritan', weight: 118, supplier: '세진정밀', rev: 'B', baseRev: 'A', parent: 'HZA-SG-20', qty: 1 },
        { no: 'HZA-SG-30', name: 'BLDC 모터', material: '—', weight: 1180, supplier: '동양모터(중국)', rev: 'A', baseRev: 'A', parent: 'HZA-SG', qty: 1 },
        { no: 'HZA-SG-40', name: '컬러 박스·매뉴얼', material: '종이', weight: 640, supplier: '한솔인쇄', rev: 'A', baseRev: 'A', parent: 'HZA-SG', qty: 1 }
    ];
    d.docs2 = [
        { id: 'd1', kind: '도면', title: '컬러 커버', part: 'HZA-SG-11', rev: 'B', by: '김호철', at: iso('2026-11-08'), note: '색상 세이지 그린 (Pantone 5625C)', prev: [{ rev: 'A', by: '김호철', at: iso('2026-10-06'), note: '기반 모델 HZA-100 판' }] },
        { id: 'd2', kind: '사양서', title: '변경 사양서 (색상·호퍼 틴트)', rev: '01', by: '심준보', at: iso('2026-10-20'), prev: [] }
    ];
    d.ecrs = [
        { id: 'e1', no: 'ECR-001', title: '컬러 커버·호퍼 뚜껑 색상 변경', why: '세이지 그린 파생 모델', parts: ['HZA-SG-11', 'HZA-SG-23'], status: '승인', by: '심준보', at: iso('2026-11-06'), eco: 'ECO-001', revs: { 'HZA-SG-11': 'A→B', 'HZA-SG-23': 'A→B' },
            log: [{ at: iso('2026-11-06'), who: '심준보', what: '요청' }, { at: iso('2026-11-08'), who: '김현숙', what: '승인' }] },
        { id: 'e2', no: 'ECR-002', title: '컬러 박스 인쇄 색상 맞춤', why: '본체 색과 박스 색 차이 (샘플 비교)', parts: ['HZA-SG-40'], status: '검토', by: '심준보', at: iso('2026-11-14'), log: [{ at: iso('2026-11-14'), who: '심준보', what: '요청' }] }
    ];
    d.certs = [
        { id: 'c1', name: 'KC 전기안전 (기반 모델 인증 — 색상 변경 신고)', part: 'HZA-SG', status: '준비', region: '한국' },
        { id: 'c2', name: '식품용 기구 (드럼·스크류)', part: 'HZA-SG-22', status: '취득', no: 'FS-2025-0412', until: '2028-03-31', region: '한국' }
    ];
    d.vendors = [V('v1', '대성정밀', '부품', '한국', { samples: [{ id: 's1', round: '1차', at: iso('2026-11-12'), result: '보완', note: '색차 ΔE 2.1 — 1.0 이하로', who: '심준보' }] }), V('v2', '한솔인쇄', '포장·인쇄', '한국')];
    d.next = '색상 샘플 2차 (ΔE 1.0 이하) 확인';
    d.issues = [{ id: 'i1', kind: '이슈', text: '컬러 커버 색차 ΔE 2.1 — 대성정밀 2차 샘플', owner: '심준보', due: '2026-11-25', at: iso('2026-11-12'), who: '심준보', stage: 'S3' }];
    d.changes = [];
    d.plan = (0, ax_1.suggestPlan)(d.start, d.target);
    d.stage = 'S3';
    d.actual = { S1: '2026-10-15', S2: '2026-10-30' };
    // OEM — 우리 도면, 중국 제조사 생산
    const o = (0, ax_1.newProject)('진공 블렌더 (OEM)', '심준보', '김호철', '2027-04-30', '2026-07-01');
    const fab = '포산 리화전기(중국)';
    o.id = 'ax-sample-oem';
    o.code = o.id;
    o.devType = 'oem';
    o.itemCode = 'HVB-300';
    o.approver = '김현숙';
    o.docs = Object.assign(Object.assign(Object.assign({}, done(['voc', 'plan', 'biz', 'g1rep', 'rr', 'spec', 'vendor', 'cad', 'dr', 'release', 'proto'], '김호철', '2026-09-30')), done(['mold'], '김호철', '2026-11-10')), { fai: { who: '김호철', due: '2026-11-27' }, iqc: { who: '심준보', due: '2026-12-04' }, cert: { who: '김호철', due: '2027-01-20' }, print: { who: '심준보', due: '2027-01-10' } });
    o.approvals = g1('G1 기획 승인', '2026-07-20');
    o.parts = [
        { no: 'HVB-300', name: '진공 블렌더 완제품', rev: 'B', qty: 1 },
        { no: 'HVB-310', name: '용기 ASSY (1.5 L)', rev: 'C', parent: 'HVB-300', qty: 1 },
        { no: 'HVB-311', name: '용기', material: 'Tritan', weight: 520, supplier: fab, rev: 'C', parent: 'HVB-310', qty: 1, mold: 'M-V01' },
        { no: 'HVB-312', name: '칼날 ASSY', material: 'STS304', weight: 88, supplier: fab, rev: 'A', parent: 'HVB-310', qty: 1 },
        { no: 'HVB-320', name: '진공 펌프 모듈', material: '—', weight: 210, supplier: fab, rev: 'A', parent: 'HVB-300', qty: 1 },
        { no: 'HVB-330', name: '본체 하우징', material: 'ABS', weight: 860, supplier: fab, rev: 'B', parent: 'HVB-300', qty: 1, mold: 'M-V02' },
        { no: 'HVB-340', name: '메인 PCB', material: 'FR-4', weight: 46, supplier: fab, rev: 'B', parent: 'HVB-300', qty: 1 }
    ];
    o.docs2 = [
        { id: 'd1', kind: '도면', title: '용기', part: 'HVB-311', rev: 'C', by: '김호철', at: iso('2026-11-11'), note: '눈금 인쇄 위치 5 mm 내림', prev: [{ rev: 'A', by: '김호철', at: iso('2026-08-12') }, { rev: 'B', by: '김호철', at: iso('2026-09-25'), note: '진공 씰 홈 깊이' }] },
        { id: 'd2', kind: '도면', title: '칼날 ASSY', part: 'HVB-312', rev: 'A', by: '김호철', at: iso('2026-08-12'), prev: [] },
        { id: 'd3', kind: '도면', title: '본체 하우징', part: 'HVB-330', rev: 'B', by: '김호철', at: iso('2026-09-25'), prev: [{ rev: 'A', by: '김호철', at: iso('2026-08-12') }] }
    ];
    o.releases = [
        { id: 'r1', doc: 'd1', rev: 'A', vendor: fab, at: iso('2026-08-13'), who: '김호철' }, { id: 'r2', doc: 'd1', rev: 'B', vendor: fab, at: iso('2026-09-26'), who: '김호철' },
        { id: 'r3', doc: 'd2', rev: 'A', vendor: fab, at: iso('2026-08-13'), who: '김호철' }, { id: 'r4', doc: 'd3', rev: 'B', vendor: fab, at: iso('2026-09-26'), who: '김호철' }
    ];
    o.molds = [
        { id: 'm1', no: 'M-V01', part: 'HVB-311', vendor: fab, cavity: 1, trials: [{ round: 'T0', at: iso('2026-10-20'), result: '수정', note: '씰 홈 버', who: '김호철' }, { round: 'T1', at: iso('2026-11-09'), result: '합격', who: '김호철' }] },
        { id: 'm2', no: 'M-V02', part: 'HVB-330', vendor: fab, cavity: 1, trials: [{ round: 'T0', at: iso('2026-10-20'), result: '합격', who: '김호철' }] }
    ];
    o.vendors = [V('v1', fab, 'OEM 생산', '중국', { contact: 'Mr. Chen (QA)', unit: 'USD 41.20', moq: 2000, vcerts: [{ name: 'ISO 9001', until: '2027-09-30', ok: true }, { name: 'BSCI 감사', until: '2027-02-28', ok: true }],
            samples: [{ id: 's1', round: '1차', at: iso('2026-11-12'), result: '보완', note: '초도품 진공 유지 30초 → 기준 60초', who: '김호철' }], evals: [{ at: iso('2026-11-12'), who: '김호철', score: 3, note: '대응 빠름, 진공 품질 보완 필요' }] })];
    o.certs = [
        { id: 'c1', name: 'KC 전기안전', part: 'HVB-300', status: '시험 중', region: '한국' },
        { id: 'c2', name: '식품용 기구 (용기 Tritan)', part: 'HVB-311', status: '취득', no: 'FS-2026-0933', until: '2029-10-31', region: '한국' }
    ];
    o.issues = [{ id: 'i1', kind: '이슈', text: '용기 도면 Rev C가 업체에 안 나감 — 초도품은 Rev B로 만들어짐', owner: '김호철', due: '2026-11-20', at: iso('2026-11-12'), who: '김호철', stage: 'S4' }];
    o.changes = [];
    o.next = '용기 도면 Rev C 업체 배포 → 초도품 2차 검사';
    o.plan = (0, ax_1.suggestPlan)(o.start, o.target);
    o.stage = 'S4';
    o.actual = { S1: '2026-07-20', S2: '2026-08-05', S3: '2026-09-30' };
    // 소싱 — 완제품 구매
    const s = (0, ax_1.newProject)('원액기 전용 세척솔 세트 (소싱)', '심준보', '심준보', '2027-01-15', '2026-10-13');
    const sup = '이우 클린웨어(중국)';
    s.id = 'ax-sample-sourcing';
    s.code = s.id;
    s.devType = 'sourcing';
    s.itemCode = 'HCB-01';
    s.approver = '김현숙';
    s.docs = Object.assign(Object.assign({}, done(['plan', 'price', 'g1rep', 'rr', 'vendor', 'sample'], '심준보', '2026-11-05')), { specsheet: { who: '심준보', due: '2026-11-21' }, vcert: { who: '김호철', due: '2026-11-24' } });
    s.approvals = g1('G1 구매 기획 승인', '2026-10-24');
    s.parts = [
        { no: 'HCB-01', name: '세척솔 세트 (3종)', material: 'PP 손잡이·PBT 솔모', weight: 64, supplier: sup, rev: 'A', qty: 1, kind: '완제품', food: true },
        { no: 'HCB-01-P', name: '크라프트 박스', material: '종이', weight: 38, supplier: sup, rev: 'A', parent: 'HCB-01', qty: 1, kind: '포장' },
        { no: 'HCB-01-M', name: '사용 안내 (한/영)', material: '종이', weight: 6, supplier: '한솔인쇄', rev: 'A', parent: 'HCB-01', qty: 1, kind: '매뉴얼' },
        { no: 'HCB-01-L', name: '표시 라벨 (재질·원산지·수입원)', material: '아트지', weight: 1, supplier: '한솔인쇄', rev: 'A', parent: 'HCB-01', qty: 1, kind: '라벨' }
    ];
    s.docs2 = [{ id: 'd1', kind: '사양서', title: '구매 규격서', rev: '02', by: '심준보', at: iso('2026-11-10'), note: '솔모 지름 0.2 mm, 손잡이 길이 180 mm', prev: [{ rev: '01', by: '심준보', at: iso('2026-10-27') }] }];
    s.ecrs = [];
    s.certs = [{ id: 'c1', name: '식품용 기구 수입 신고 (솔모 PBT)', part: 'HCB-01', status: '준비', region: '한국' }];
    s.vendors = [
        V('v1', sup, '완제품 공급', '중국', { contact: 'Ms. Zhou', unit: 'USD 1.35', moq: 5000, vcerts: [{ name: 'ISO 9001', until: '2027-05-31', ok: true }, { name: 'LFGB 성적서 (솔모 PBT)', ok: false }],
            samples: [{ id: 's1', round: '1차', at: iso('2026-11-03'), result: '보완', note: '솔모 빠짐 3/20개', who: '심준보' }, { id: 's2', round: '2차', at: iso('2026-11-12'), result: '합격', note: '빠짐 0/20', who: '심준보' }],
            evals: [{ at: iso('2026-11-12'), who: '심준보', score: 4, note: '2차에 바로 고침' }] }),
        V('v2', '광저우 브러시팩토리(중국)', '완제품 공급', '중국', { unit: 'USD 1.12', moq: 10000, evals: [{ at: iso('2026-10-28'), who: '심준보', score: 2, note: 'MOQ 1만, 샘플 2주 지연' }] })
    ];
    s.issues = [{ id: 'i1', kind: '리스크', text: 'LFGB 성적서 안 오면 식품용 기구 수입 신고 못 함', owner: '김호철', due: '2026-11-24', at: iso('2026-11-13'), who: '김호철', stage: 'S3' }];
    s.changes = [];
    s.next = '업체 LFGB 성적서 받기 → G2 샘플 승인';
    s.plan = (0, ax_1.suggestPlan)(s.start, s.target);
    s.stage = 'S3';
    s.actual = { S1: '2026-10-24', S2: '2026-11-04' };
    return [d, o, s];
}

};
__m["src/webparts/huromAxPlm/model/sched.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDays = exports.lateDays = exports.laneOf = exports.LANES = exports.stdTotal = exports.AFTER_DAYS = exports.STD_DAYS = exports.diffDays = exports.addDays = void 0;
exports.backPlan = backPlan;
exports.planSpan = planSpan;
exports.stageState = stageState;
exports.actualSpan = actualSpan;
exports.shiftFrom = shiftFrom;
exports.docSpan = docSpan;
exports.gems = gems;
exports.laneCells = laneCells;
exports.projRange = projRange;
// AX-PLM 1.0.134 — 일정표(간트)·메인 대시보드 계산 (심준보 2026-11-18 #ax-plm msg 10483430 '스케쥴링표가 없냐' · 10483498 '메인대시보드, 업무구분 세로·일정 단계 가로'; 곽두팔 msg 10483490·10483554)
// 단계 계획 = plan[S1..S7] (단계 끝 날짜), 단계 시작 = 앞 단계 끝(첫 단계는 start). 실제 = actual[...] 같은 방식
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const ymd = (t) => `${t.getFullYear()}-${('0' + (t.getMonth() + 1)).slice(-2)}-${('0' + t.getDate()).slice(-2)}`;
const day = (s) => new Date(s + 'T00:00:00');
const addDays = (s, n) => { const t = day(s); t.setDate(t.getDate() + n); return ymd(t); };
exports.addDays = addDays;
const diffDays = (a, b) => Math.round((day(b).getTime() - day(a).getTime()) / 86400000);
exports.diffDays = diffDays;
// 개발 유형별 표준 일수 (단계 ①~⑥, 달력 일수) — ⑥ 생산 끝 = 출시(첫 출하), ⑦은 출시 뒤 90일
// 자체 금형 개발은 휴롬 R12 체계도 일정(설계 45일·금형 T0~T2 약 120일)을, ODM·소싱은 샘플 차수 기준으로 잡음
exports.STD_DAYS = {
    own: [30, 20, 45, 120, 30, 20],
    derive: [15, 10, 30, 45, 20, 15],
    oem: [30, 25, 40, 90, 25, 20],
    odm: [20, 20, 60, 60, 20, 15],
    sourcing: [10, 15, 25, 30, 15, 10],
};
exports.AFTER_DAYS = 90;
const stdTotal = (t) => exports.STD_DAYS[t].reduce((a, b) => a + b, 0);
exports.stdTotal = stdTotal;
// 출시 목표일에서 거꾸로 — 시작일과 단계 끝 날짜를 채움
function backPlan(target, t) {
    const ds = exports.STD_DAYS[t] || exports.STD_DAYS.own;
    const plan = {};
    let end = target;
    for (let i = 5; i >= 0; i--) {
        plan['S' + (i + 1)] = end;
        end = (0, exports.addDays)(end, -ds[i]);
    }
    plan.S7 = (0, exports.addDays)(target, exports.AFTER_DAYS);
    return { start: end, plan };
}
function planSpan(p, k) {
    const ids = (0, work_1.stagesOf)(p).map(s => s.id);
    const plan = p.plan || {};
    const b = plan[ids[k]];
    const a = k === 0 ? p.start : plan[ids[k - 1]];
    return a && b ? { a, b: b < a ? a : b } : undefined;
}
function stageState(p, k, now = (0, ax_1.today)()) {
    const s = (0, work_1.stagesOf)(p)[k];
    const ck = (0, work_1.curIdx)(p);
    if ((0, work_1.stageClear)(p, s) && (k < ck || k === (0, work_1.stagesOf)(p).length - 1))
        return 'done';
    const sp = planSpan(p, k);
    const late = (sp && sp.b < now) || s.docs.some(d => (0, work_1.docLate)(p, d.key, now));
    if (late)
        return 'late';
    return k === ck ? 'doing' : 'wait';
}
function actualSpan(p, k, now = (0, ax_1.today)()) {
    const ids = (0, work_1.stagesOf)(p).map(s => s.id);
    const act = p.actual || {};
    const a = k === 0 ? p.start : act[ids[k - 1]];
    if (!a)
        return undefined;
    const b = act[ids[k]] || (k === (0, work_1.curIdx)(p) ? now : undefined);
    return b ? { a, b: b < a ? a : b } : undefined;
}
// 단계 계획 끌기 — 그 단계 끝과 뒤 단계 전부를 같은 날수만큼 밈
function shiftFrom(p, k, n) {
    const ids = (0, work_1.stagesOf)(p).map(s => s.id);
    const plan = Object.assign({}, (p.plan || {}));
    for (let i = k; i < ids.length; i++)
        if (plan[ids[i]])
            plan[ids[i]] = (0, exports.addDays)(plan[ids[i]], n);
    return plan;
}
// 산출물 줄 — 단계 시작 ~ 마감(없으면 단계 끝), 끝낸 날은 실제
function docSpan(p, k, key) {
    const sp = planSpan(p, k);
    const st = p.docs[key] || {};
    const due = st.due || (sp && sp.b);
    const plan = sp && due ? { a: sp.a, b: due < sp.a ? sp.a : due } : undefined;
    const at = st.at ? st.at.slice(0, 10) : undefined;
    const actual = (0, work_1.docOk)(st) && sp && at ? { a: sp.a < at ? sp.a : at, b: at } : undefined;
    const now = (0, ax_1.today)();
    const ck = (0, work_1.curIdx)(p);
    const state = (0, work_1.docOk)(st) ? 'done' : due && due < now && k <= ck ? 'late' : k === ck ? 'doing' : 'wait';
    return { plan, actual, state };
}
function gems(p, now = (0, ax_1.today)()) {
    const out = [];
    (0, work_1.stagesOf)(p).forEach((s, k) => {
        if (!s.gate)
            return;
        const g = (0, work_1.gateState)(p, s);
        const plan = (p.plan || {})[s.id];
        const ap = (p.approvals || []).filter(a => (0, work_1.sameGate)(a.gate, s.gate) && a.kind === 'approve').slice(-1)[0];
        const date = g === 'approved' && ap ? ap.at.slice(0, 10) : plan;
        if (!date)
            return;
        out.push({ date, label: s.gate.split(' ')[0], k, state: g === 'approved' ? 'done' : g === 'requested' ? 'req' : plan && plan < now ? 'late' : 'wait' });
    });
    return out;
}
// 업무 구분 — 메인 대시보드 세로줄 (곽두팔 msg 10483554)
exports.LANES = ['상품기획', '설계', '금형/시사출', '구매/협력사', '인증', '품질', '생산', '인쇄물/마케팅'];
const LANE_OF = {
    voc: 0, plan: 0, biz: 0, g1rep: 0, base: 0, req: 0, rr: 0, spec: 0, kickoff: 0, sched: 0, price: 0, close: 0, vocr: 0,
    cad: 1, dr: 1, proto: 1, ecr: 1, cmf: 1, keyparts: 1, release: 1,
    mold: 2, trial: 2, t0: 2, t1: 2, t2: 2,
    vendor: 3, quote: 3, s1: 3, s2: 3, s3: 3, aprv: 3, sample: 3, specsheet: 3, vcert: 3, po: 3,
    cert: 4, certchg: 4,
    ppap: 5, fai: 5, iqc: 5, issue: 5, mpqa: 5,
    first: 6,
    print: 7, pack: 7, faq: 7, usp: 7, launch: 7,
};
const laneOf = (key) => (LANE_OF[key] === undefined ? 0 : LANE_OF[key]);
exports.laneOf = laneOf;
// 한 업무 구분에서 단계마다 칸 하나 — 산출물이 있는 단계만
function laneCells(p, lane, now = (0, ax_1.today)()) {
    const out = [];
    const ck = (0, work_1.curIdx)(p);
    (0, work_1.stagesOf)(p).forEach((s, k) => {
        const ks = s.docs.filter(d => (0, exports.laneOf)(d.key) === lane).map(d => d.key);
        if (!ks.length)
            return;
        const sp = planSpan(p, k);
        if (!sp)
            return;
        const done = ks.filter(x => (0, work_1.docOk)(p.docs[x])).length;
        const late = ks.some(x => { const st = p.docs[x] || {}; const due = st.due || sp.b; return !(0, work_1.docOk)(st) && due < now; });
        const state = done === ks.length ? 'done' : late ? 'late' : k <= ck ? 'doing' : 'wait';
        out.push({ k, span: sp, state, done, total: ks.length, keys: ks });
    });
    return out;
}
// 전체 일정 한 줄 — 현재 단계·지연 일수·출시 목표
function projRange(p) {
    const plan = p.plan || {};
    const ids = (0, work_1.stagesOf)(p).map(s => s.id);
    const b = plan[ids[5]] || plan[ids[ids.length - 1]];
    return p.start && b ? { a: p.start, b } : undefined;
}
const lateDays = (p, now = (0, ax_1.today)()) => (0, work_1.projLate)(p, now);
exports.lateDays = lateDays;
const typeDays = (p) => (0, exports.stdTotal)((0, devtype_1.typeOf)(p));
exports.typeDays = typeDays;

};
__m["src/webparts/huromAxPlm/model/history.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAMPLE_HISTORY = exports.avgMonths = exports.catOf = exports.history = exports.setHistory = void 0;
exports.fromItem = fromItem;
exports.similar = similar;
exports.causes = causes;
exports.pastFacts = pastFacts;
exports.pastRatio = pastRatio;
const branchOf = (t) => (t === 'own' || t === 'derive' ? 'juicer' : 'goods'); // ai.ts와 같은 규칙 (서로 불러오면 돌아서 따로)
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const sched_1 = require("src/webparts/huromAxPlm/model/sched.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
let PAST = [];
const setHistory = (xs) => { PAST = xs.slice(); };
exports.setHistory = setHistory;
const history = () => PAST;
exports.history = history;
// 상품군 낱말 — 아이템 이름에서 찾음
const CATS = [['착즙기', /착즙|원액|주스|juic/i], ['복합기', /복합|VM/i], ['티마스터', /티마스터|티 ?메이커|TM-|차/i], ['블렌더', /블렌더|블랜더|믹서|BL-/i],
    ['음식물처리기', /음식물|음처|FD-/i], ['주방소형', /에어프라이어|스퀴저|건조기|두유|오븐/i], ['세척기·정수기', /세척|정수|살균|WP-/i], ['가습기', /가습/i], ['전기포트', /포트|케틀/i], ['악세사리', /용기|청소솔|착즙망|스크루/i]];
const catOf = (name) => { const c = CATS.filter(x => x[1].test(name))[0]; return c ? c[0] : '기타'; };
exports.catOf = catOf;
// 끝난 아이템 → 창고 한 줄
function fromItem(p) {
    const st = (0, work_1.stagesOf)(p);
    const s6 = st[5];
    const end = s6 ? (p.actual || {})[s6.id] : undefined;
    if (!p.start || !end)
        return undefined;
    const plan6 = s6 ? (p.plan || {})[s6.id] : undefined;
    return { name: p.name, cat: (0, exports.catOf)(p.name), branch: branchOf((0, devtype_1.typeOf)(p)), start: p.start.slice(0, 7), months: Math.round((0, sched_1.diffDays)(p.start, end) / 30.4 * 10) / 10,
        delayDays: plan6 ? Math.max(0, (0, sched_1.diffDays)(plan6, end)) : undefined, issues: (p.issues || []).map(i => ({ type: i.kind, text: i.text })), src: 'AX-PLM 끝난 아이템' };
}
// 비슷한 과거 모델 — 같은 상품군 먼저, 그다음 같은 갈래(원액기/상품), 최근 것 먼저
function similar(p, n = 3, all = PAST) {
    const c = (0, exports.catOf)(p.name);
    const b = branchOf((0, devtype_1.typeOf)(p));
    const score = (m) => (m.cat === c ? 10 : 0) + (m.branch === b ? 3 : 0) + (m.months ? 1 : 0);
    return all.filter(m => m.name !== p.name).slice().sort((x, y) => (score(y) - score(x)) || String(y.start || '').localeCompare(String(x.start || ''))).slice(0, n);
}
const avgMonths = (xs) => { const v = xs.filter(x => x.months).map(x => x.months); return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length * 10) / 10 : undefined; };
exports.avgMonths = avgMonths;
// 지연 원인 순위 (이슈 유형별 건수)
function causes(xs = PAST) {
    const o = {};
    xs.forEach(m => m.issues.forEach(i => { o[i.type] = (o[i.type] || 0) + 1; }));
    return Object.keys(o).map(k => ({ type: k, n: o[k] })).sort((a, b) => b.n - a.n);
}
// AI에게 붙이는 과거 경험 몇 줄
function pastFacts(p) {
    if (!PAST.length)
        return '';
    const sim = similar(p, 3);
    const cs = causes().slice(0, 3);
    return ['과거 경험(경험 창고):'].concat(sim.map(m => `- ${m.name}(${m.cat}${m.start ? ', ' + m.start + ' 착수' : ''}): ${m.months ? m.months + '개월' : '기간 모름'}${m.delayDays ? `, ${m.delayDays}일 지연` : ''}${m.issues.length ? ' · ' + m.issues.map(i => `${i.type}: ${i.text}`).join(' / ') : ''}`))
        .concat(cs.length ? [`- 지연 원인 많은 순: ${cs.map(c => `${c.type} ${c.n}건`).join(', ')}`] : []).join('\n');
}
// 과거 평균으로 본 표준 일수 보정 비율 (같은 상품군 평균 개월 / 표준)
function pastRatio(p) {
    const a = (0, exports.avgMonths)(similar(p, 3));
    if (!a)
        return undefined;
    const std = sched_1.STD_DAYS[(0, devtype_1.typeOf)(p)].reduce((x, y) => x + y, 0) / 30.4;
    return Math.round(a / std * 100) / 100;
}
// 미리보기용 — 이름 없는 예시 (회사 판은 SharePoint 파일)
exports.SAMPLE_HISTORY = [
    { name: '예시 원액기 A', cat: '착즙기', branch: 'juicer', start: '2024-03', months: 13.3, delayDays: 120, issues: [{ type: '인증', text: '전자파 재시험' }, { type: '구조', text: 'DPP 뒤 금형 추가' }] },
    { name: '예시 원액기 B', cat: '착즙기', branch: 'juicer', start: '2025-02', months: 12.4, delayDays: 210, issues: [{ type: '부품', text: '스크류 성형 불량' }] },
    { name: '예시 원액기 C', cat: '착즙기', branch: 'juicer', start: '2026-01', months: 6.9, delayDays: 0, issues: [] },
    { name: '예시 음식물처리기 A', cat: '음식물처리기', branch: 'goods', start: '2022-04', months: 3.0, issues: [{ type: '시장불량', text: '출시 한 달 AS 집중(악취·누수)' }] },
    { name: '예시 가습기 A', cat: '가습기', branch: 'goods', start: '2021-05', months: 13.0, delayDays: 240, issues: [{ type: '구조', text: '개선 확인 6차 반복' }] },
    { name: '예시 블렌더 A', cat: '블렌더', branch: 'goods', start: '2023-03', months: 6.1, issues: [{ type: '초도양산', text: '1st MP 외관 재작업' }] },
    { name: '예시 세척기 A', cat: '세척기·정수기', branch: 'goods', start: '2022-01', months: 14.3, delayDays: 270, issues: [{ type: '인증', text: 'CB EMC 6차 Fail' }] },
    { name: '예시 티메이커 A', cat: '티마스터', branch: 'goods', start: '2021-04', months: 6.6, delayDays: 42, issues: [{ type: '인증', text: '1st 샘플 KC 불가 → PBA 개선' }] },
];

};
__m["src/webparts/huromAxPlm/components/ui.js"]=function(module,exports,require){"use strict";
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
exports.TIP_CSS = exports.Field = exports.FileIcon = exports.ST_COLOR = exports.SHORT = exports.TypeTag = exports.pageUrl = exports.teamsChat = exports.uid = exports.md = exports.nowIso = exports.label = exports.card = exports.inp = exports.primary = exports.btn = exports.CSS = exports.font = exports.C = void 0;
exports.Dot = Dot;
exports.Due = Due;
exports.PanelHead = PanelHead;
exports.Tip = Tip;
const React = __importStar(require("react"));
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
// AX-PLM 공통 화면 조각 (1.0.130에서 AxWork.tsx에서 떼어 냄 — 품목 화면과 같이 씀)
// 1.0.141 「휴롬 AX 미래그림」 색 — 검정 바탕 · 초록 하나 (심준보 2026-11-20 #ax-plm msg 10873351). inv = 밝은 바탕(선택된 알약·초록 버튼) 위 글자
exports.C = { bg: '#000000', card: '#111113', line: '#26262A', line2: '#34343A', hover: '#1B1B1E', text: '#F4F4F5', sub: '#B0B0B6', faint: '#85858C',
    accent: '#4FD16B', accentBg: 'rgba(79,209,107,.12)', ok: '#4FD16B', soon: '#F59E0B', late: '#F87171', lock: '#5F5F66', inv: '#04130A' };
exports.font = '"Noto Sans KR", "Pretendard", "Malgun Gothic", "Segoe UI", -apple-system, sans-serif';
exports.CSS = `
.axw{font-family:${exports.font};color:${exports.C.text};background:${exports.C.bg};font-size:14px;line-height:1.45;min-height:100vh;-webkit-font-smoothing:antialiased}
.axw *{box-sizing:border-box}
.axw button{font-family:inherit}
.axw input,.axw select,.axw textarea{color-scheme:dark}
.axw ::selection{background:rgba(79,209,107,.35)}
.axw-row{display:flex;align-items:center;gap:12px;padding:10px 14px;border-top:1px solid ${exports.C.line};cursor:pointer;min-height:44px}
.axw-row:first-child{border-top:none}
.axw-row:hover{background:${exports.C.hover}}
.axw-row.on{background:${exports.C.accentBg}}
.axw-tr:hover td{background:${exports.C.hover}}
.axw-main{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:16px;align-items:start}
.axw-todo{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:16px;align-items:start}
.axw-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
.axw-panel{position:sticky;top:72px}
.axw-idash{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;align-items:start}
.axw-idash-wide{grid-column:span 2}
.axw-x{display:none}
.axw-show-sm{display:none}
.axw-rail{display:flex;gap:2px}
@media (max-width:820px){
  .axw-main,.axw-todo,.axw-idash{grid-template-columns:minmax(0,1fr)}
  .axw-idash-wide{grid-column:auto}
  .axw-stats{grid-template-columns:repeat(2,minmax(0,1fr))}
  .axw-panel{position:static}
  .axw-panel.sheet{position:fixed;left:0;right:0;bottom:0;top:auto;max-height:80vh;overflow:auto;z-index:30;border-radius:14px 14px 0 0 !important;box-shadow:0 -8px 30px rgba(0,0,0,.15)}
  .axw-x{display:inline-block}
  .axw-hide-sm{display:none !important}
  .axw-show-sm{display:block}
  .axw-rail{overflow-x:auto}
  .axw-irow{flex-wrap:wrap;row-gap:4px}
  .axw-irow .axw-iname{width:auto !important;flex:1 1 100% !important}
  .axw-irow .axw-inow{flex:1 1 100% !important;order:5}
  .axw-tcard{flex-wrap:wrap}
  .axw-tbtns{width:100%;padding-left:34px}
  .axw-askrow{flex-wrap:wrap}
  .axw-askrow input{flex:1 1 100% !important}
  .axw-rail > button{min-width:108px !important;flex:0 0 108px !important}
  .axw-pad{padding-left:14px !important;padding-right:14px !important}
  .axw-top{gap:8px !important}
  .axw-top nav button{padding:0 6px !important;font-size:13px !important}
  .axw-top nav{flex:1 1 0;min-width:0;overflow-x:auto;scrollbar-width:none}
  .axw-top nav::-webkit-scrollbar{display:none}
  .axw-top > span[data-flex]{display:none}
  .axw-cnt{display:none}
  .axw-dash2{grid-template-columns:minmax(0,1fr) !important}
}`;
exports.btn = { border: `1px solid ${exports.C.line2}`, background: exports.C.card, color: exports.C.text, borderRadius: 999, padding: '6px 13px', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: exports.font, whiteSpace: 'nowrap' };
exports.primary = Object.assign(Object.assign({}, exports.btn), { background: exports.C.accent, borderColor: exports.C.accent, color: exports.C.inv, borderRadius: 999, fontWeight: 800 });
exports.inp = { border: `1px solid ${exports.C.line2}`, borderRadius: 6, padding: '7px 9px', fontSize: 13, fontFamily: exports.font, color: exports.C.text, background: exports.C.hover, minWidth: 0, width: '100%' };
exports.card = { background: exports.C.card, border: `1px solid ${exports.C.line}`, borderRadius: 14 };
exports.label = { fontSize: 12, color: exports.C.faint, fontWeight: 600 };
const nowIso = () => new Date().toISOString();
exports.nowIso = nowIso;
const md = (s) => (s ? `${Number(s.slice(5, 7))}/${Number(s.slice(8, 10))}` : '—');
exports.md = md;
const uid = (p) => p + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36);
exports.uid = uid;
const teamsChat = (mail, msg) => `https://teams.microsoft.com/l/chat/0/0?users=${encodeURIComponent(mail)}&message=${encodeURIComponent(msg)}`;
exports.teamsChat = teamsChat;
const pageUrl = () => window.location.href.split('#')[0];
exports.pageUrl = pageUrl;
// 1.0.132
// 유형 표시 — 회색 테두리 작은 글자 (상태색 안 씀)
const TypeTag = (props) => React.createElement("span", { "data-ax-type": (0, devtype_1.typeOf)(props.p), title: (0, devtype_1.typeInfo)((0, devtype_1.typeOf)(props.p)).label, style: { display: 'inline-block', verticalAlign: 'middle', marginRight: 8, fontSize: 11.5, fontWeight: 700, lineHeight: '18px', padding: '0 6px', borderRadius: 4, border: `1px solid ${exports.C.line2}`, color: exports.C.sub, background: exports.C.card } }, (0, devtype_1.typeInfo)((0, devtype_1.typeOf)(props.p)).tag);
exports.TypeTag = TypeTag;
exports.SHORT = ['컨셉·기획', '공동검토', '설계·시제품', '개발·검증', '양산준비', '생산', '출시 후'];
exports.ST_COLOR = { done: exports.C.ok, skip: exports.C.lock, late: exports.C.late, soon: exports.C.soon, open: exports.C.line2, lock: exports.C.lock, wait: exports.C.soon };
function Dot(props) {
    const z = props.size || 8;
    return React.createElement("span", { style: { display: 'inline-block', width: z, height: z, borderRadius: '50%', flex: `0 0 ${z}px`, background: props.s === 'open' ? 'transparent' : exports.ST_COLOR[props.s], border: props.s === 'open' ? `1.5px solid ${exports.C.line2}` : 'none' } });
}
function Due(props) {
    const left = (0, ax_1.daysTo)(props.due);
    if (props.done)
        return React.createElement("span", { style: { fontSize: 12.5, color: exports.C.faint } }, (0, exports.md)(props.due));
    if (left === undefined)
        return React.createElement("span", { style: { fontSize: 12.5, color: exports.C.faint } }, "\uAE30\uD55C \uC5C6\uC74C");
    const col = left < 0 ? exports.C.late : left <= 7 ? exports.C.soon : exports.C.sub;
    return React.createElement("span", { style: { fontSize: 12.5, color: col, fontWeight: left <= 7 ? 700 : 500, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' } },
        left < 0 ? `${-left}일 지연` : left === 0 ? '오늘' : `D-${left}`,
        " ",
        React.createElement("span", { style: { color: exports.C.faint, fontWeight: 500 } }, (0, exports.md)(props.due)));
}
const FileIcon = (props) => (React.createElement("svg", { width: "14", height: "16", viewBox: "0 0 14 16", style: { flex: '0 0 14px', opacity: props.on ? 1 : 0.25 }, "aria-label": props.on ? '파일 있음' : '파일 없음' },
    React.createElement("path", { d: "M2 1h6l4 4v10H2z", fill: "none", stroke: props.on ? exports.C.text : exports.C.faint, strokeWidth: "1.3" }),
    React.createElement("path", { d: "M8 1v4h4", fill: "none", stroke: props.on ? exports.C.text : exports.C.faint, strokeWidth: "1.3" })));
exports.FileIcon = FileIcon;
function PanelHead(props) {
    return (React.createElement("div", { style: { display: 'flex', alignItems: 'flex-start', gap: 8, padding: '14px 16px', borderBottom: `1px solid ${exports.C.line}` } },
        React.createElement("div", { style: { flex: 1, minWidth: 0 } },
            React.createElement("div", { style: { fontWeight: 700, fontSize: 15 } },
                props.title,
                props.tip && React.createElement(Tip, { t: props.tip })),
            props.sub && React.createElement("div", { style: { fontSize: 12, color: exports.C.faint, marginTop: 2 } }, props.sub)),
        React.createElement("button", { "data-ax-panel-close": true, onClick: props.onClose, style: Object.assign(Object.assign({}, exports.btn), { padding: '3px 9px' }) }, "\uB2EB\uAE30")));
}
const Field = (props) => React.createElement("label", { style: { display: 'flex', flexDirection: 'column', gap: 5 } },
    React.createElement("span", { style: exports.label }, props.l),
    props.children);
exports.Field = Field;
// 1.0.147 설명 글 → 작은 ⓘ 버튼 툴팁 (심준보 2026-11-21 #ax-plm msg 11191282 '설명 빼서 툴팁으로, 마우스오버, 작은 버튼')
//   PC는 마우스 올리면, 폰은 누르면 뜨고 다른 데 누르면 닫힘. 화면 밖으로 안 나가게 가로 위치를 맞춤
exports.TIP_CSS = `
.axw-tip{position:relative;display:inline-flex;vertical-align:middle;margin-left:5px;flex:0 0 auto}
.axw-tipb{width:15px;height:15px;border-radius:50%;border:1px solid #55555C;background:transparent;color:#9C9CA3;font:700 10px/13px Georgia,serif;padding:0;cursor:help;display:inline-flex;align-items:center;justify-content:center}
.axw-tipb:hover,.axw-tip.on .axw-tipb{border-color:${exports.C.accent};color:${exports.C.accent}}
.axw-tipt{position:absolute;top:calc(100% + 7px);left:50%;z-index:80;width:max-content;max-width:260px;background:#F4F4F5;color:#151518;font-size:12.5px;font-weight:500;line-height:1.45;padding:7px 10px;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.45);white-space:normal;text-align:left;letter-spacing:0;pointer-events:none}
`;
function Tip(props) {
    const [on, setOn] = React.useState(false);
    const [pin, setPin] = React.useState(false);
    const [dx, setDx] = React.useState(-130);
    const ref = React.useRef(null);
    const place = () => { const el = ref.current; if (!el)
        return; const r = el.getBoundingClientRect(); const w = Math.min(260, window.innerWidth - 16); const left = Math.max(8, Math.min(r.left + r.width / 2 - w / 2, window.innerWidth - w - 8)); setDx(left - r.left); };
    React.useEffect(() => { if (!pin)
        return undefined; const f = (e) => { if (ref.current && !ref.current.contains(e.target)) {
        setPin(false);
        setOn(false);
    } }; document.addEventListener('pointerdown', f); return () => document.removeEventListener('pointerdown', f); }, [pin]);
    const show = on || pin;
    return (React.createElement("span", { ref: ref, className: 'axw-tip' + (show ? ' on' : ''), "data-ax-tip": props.k || '', onClick: e => { e.stopPropagation(); place(); setPin(!pin); }, onMouseEnter: () => { place(); setOn(true); }, onMouseLeave: () => setOn(false) },
        React.createElement("button", { type: "button", className: "axw-tipb", "aria-label": props.t }, "i"),
        show && React.createElement("span", { role: "tooltip", className: "axw-tipt", "data-ax-tip-text": true, style: { left: dx, maxWidth: Math.min(260, window.innerWidth - 16) } }, props.t)));
}

};
__m["src/webparts/huromAxPlm/components/ItemDash.js"]=function(module,exports,require){"use strict";
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
exports.ItemDash = ItemDash;
const React = __importStar(require("react"));
// 1.0.137 아이템 대시보드 — 첫 화면 (심준보 2026-11-18 #ax-plm 스레드 msg 10527487 '메인 대시보드는 잘 안 볼 것 같고 아이템 대시보드가 중요', 10527700 '해봐봐')
// 아이템(프로젝트 = 제품) 하나를 고르면 한 장에: 출시 목표·지금 단계·지연 / 지금 해야 할 것 / 협력사·샘플 / 품목 요약 / 일정 판(빗금) / 이슈·AI
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const item_1 = require("src/webparts/huromAxPlm/model/item.js");
const sched_1 = require("src/webparts/huromAxPlm/model/sched.js");
const ai_1 = require("src/webparts/huromAxPlm/model/ai.js");
const hatch_1 = require("src/webparts/huromAxPlm/model/hatch.js");
const Dash_1 = require("src/webparts/huromAxPlm/components/Dash.js");
const Gantt_1 = require("src/webparts/huromAxPlm/components/Gantt.js");
const Guide_1 = require("src/webparts/huromAxPlm/components/Guide.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
const LAST = 'axplm-last-item';
const head = { display: 'flex', alignItems: 'baseline', gap: 8, padding: '12px 14px 8px', fontWeight: 700, fontSize: 14 };
const Row = (props) => (React.createElement("div", { "data-ax-idash-row": props.data || '', onClick: props.onClick, className: props.onClick ? 'axw-row' : undefined, style: { display: 'flex', gap: 10, alignItems: 'center', padding: '8px 14px', borderTop: `1px solid ${ui_1.C.line}`, fontSize: 13, cursor: props.onClick ? 'pointer' : 'default', minHeight: 38 } },
    React.createElement("span", { style: { flex: 1, minWidth: 0 } }, props.l),
    props.r !== undefined && React.createElement("span", { style: { fontSize: 12.5, color: props.col || ui_1.C.faint, fontWeight: props.col ? 700 : 500, whiteSpace: 'nowrap', maxWidth: '62%', overflow: 'hidden', textOverflow: 'ellipsis' }, title: typeof props.r === 'string' ? props.r : undefined }, props.r)));
const Empty = (props) => React.createElement("div", { style: { padding: '10px 14px', fontSize: 13, color: ui_1.C.faint, borderTop: `1px solid ${ui_1.C.line}` } }, props.t);
const leftCol = (n) => (n === undefined ? undefined : n < 0 ? ui_1.C.late : n <= 7 ? ui_1.C.soon : undefined);
const leftTxt = (n) => (n === undefined ? '' : n < 0 ? `${-n}일 지남` : n === 0 ? '오늘' : `D-${n}`);
function ItemDash(props) {
    const { items } = props;
    const [sel, setSel0] = React.useState(() => { try {
        return window.localStorage.getItem(LAST) || '';
    }
    catch (e) {
        return '';
    } });
    const setSel = (id) => { setSel0(id); try {
        window.localStorage.setItem(LAST, id);
    }
    catch (e) { /* 저장 안 돼도 됨 */ } };
    const laneBox = React.useRef(null);
    const p0 = items.filter(x => x.id === sel)[0] || items[0];
    // 폰: 일정 판을 지금 단계 바로 앞부터 보이게 밀어 둠 (곽두팔 msg 10533574 '④에서 잘림')
    React.useEffect(() => { const el = laneBox.current; if (!p0 || !el || el.scrollWidth <= el.clientWidth + 4)
        return; const cw = (el.scrollWidth - 14 - 110) / 7; el.scrollLeft = Math.max(0, cw * ((0, work_1.curIdx)(p0) - 1)); }, [p0 && p0.id]);
    if (!p0)
        return React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { padding: 24, color: ui_1.C.sub }) }, "\uC544\uC774\uD15C\uC774 \uC5C6\uC5B4\uC694. \u300C+ \uC0C8 \uD504\uB85C\uC81D\uD2B8\u300D\uB85C \uB9CC\uB4E4\uC5B4 \uC8FC\uC138\uC694.");
    const p = p0;
    const ck = (0, work_1.curIdx)(p);
    const st = (0, work_1.stagesOf)(p);
    const lt = (0, work_1.projLate)(p);
    const now = (0, ax_1.today)();
    const bp = (0, hatch_1.baseProgress)(p);
    const todo = (0, work_1.todos)([p], '*').slice(0, 6);
    const waits = (0, Dash_1.vendorWaits)([p], '*');
    const jobs = (p.aiJobs || []);
    const review = jobs.filter(j => (0, ai_1.jobState)(j) === 'review').length;
    const running = jobs.filter(j => ['running', 'queued'].indexOf((0, ai_1.jobState)(j)) >= 0).length;
    const parts = p.parts || [];
    const docs2 = p.docs2 || [];
    const ecrs = (p.ecrs || []).filter(e => e.status === '요청' || e.status === '검토');
    const oldRel = docs2.reduce((n, d) => n + (0, item_1.releaseState)(p, d).filter(r => r.old).length, 0);
    const certs = p.certs || [];
    const iss = (p.issues || []).filter(i => !i.done);
    const issLate = iss.filter(i => i.due && i.due < now).length;
    const brief = (p.brief || []).slice(-1)[0];
    return (React.createElement("div", { "data-ax-idash": p.id },
        React.createElement("select", { "data-ax-idash-select": true, className: "axw-show-sm", value: p.id, onChange: e => setSel(e.target.value), style: { width: '100%', border: `1px solid ${ui_1.C.line2}`, borderRadius: 8, padding: '9px 10px', fontSize: 14, fontWeight: 700, marginBottom: 12, background: ui_1.C.card } }, items.map(x => { const l = (0, work_1.projLate)(x); return React.createElement("option", { key: x.id, value: x.id },
            x.name,
            l > 0 ? ` · ${l}일 지연` : ''); })),
        React.createElement("div", { className: "axw-hide-sm", style: { display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 } }, items.map(x => {
            const l = (0, work_1.projLate)(x);
            const on = x.id === p.id;
            return React.createElement("button", { key: x.id, "data-ax-idash-pick": x.id, onClick: () => setSel(x.id), style: Object.assign(Object.assign({}, ui_1.btn), { background: on ? ui_1.C.text : ui_1.C.card, color: on ? ui_1.C.inv : ui_1.C.sub, borderColor: on ? ui_1.C.text : ui_1.C.line2 }) },
                x.name,
                l > 0 && React.createElement("span", { style: { marginLeft: 6, color: on ? '#B91C1C' : ui_1.C.late } },
                    l,
                    "\uC77C \uC9C0\uC5F0"));
        })),
        React.createElement("div", { "data-ax-idash-head": true, style: Object.assign(Object.assign({}, ui_1.card), { padding: '14px 16px', marginBottom: 12 }) },
            React.createElement("div", { style: { display: 'flex', gap: 20, alignItems: 'flex-end', flexWrap: 'wrap' } },
                React.createElement("div", { style: { flex: '1 1 260px', minWidth: 0 } },
                    React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.faint } },
                        (0, devtype_1.typeInfo)((0, devtype_1.typeOf)(p)).label,
                        " \u00B7 PM ",
                        p.owner || '없음',
                        p.itemCode ? ` · 품번 ${p.itemCode}` : ''),
                    React.createElement("div", { style: { fontSize: 22, fontWeight: 800, letterSpacing: '-.01em' } }, p.name)),
                React.createElement("div", null,
                    React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint } }, "\uCD9C\uC2DC \uBAA9\uD45C"),
                    React.createElement("div", { style: { fontSize: 20, fontWeight: 800 } },
                        (0, ui_1.md)(p.target),
                        " ",
                        React.createElement("span", { style: { fontSize: 12.5, color: ui_1.C.faint, fontWeight: 600 } }, (0, ax_1.dday)(p.target)))),
                React.createElement("div", null,
                    React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint } }, "\uC9C0\uAE08"),
                    React.createElement("div", { "data-ax-idash-now": true, style: { fontSize: 20, fontWeight: 800, color: lt ? ui_1.C.late : ui_1.C.text } },
                        st[ck].no,
                        " ",
                        st[ck].short || st[ck].name,
                        lt ? ` · ${lt}일 지연` : '')),
                React.createElement("div", null,
                    React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint } }, "\uAE30\uBCF8 \uC5C5\uBB34"),
                    React.createElement("div", { "data-ax-idash-base": true, style: { fontSize: 20, fontWeight: 800 } },
                        bp.done,
                        React.createElement("span", { style: { fontSize: 12.5, color: ui_1.C.faint, fontWeight: 600 } },
                            "/",
                            bp.total,
                            bp.off ? ` · 빗금 ${bp.off}` : ''))),
                React.createElement(Dash_1.AiButton, { pid: p.id })),
            React.createElement("div", { className: "axw-rail", style: { marginTop: 12 } }, st.map((s, k) => {
                const ss = (0, sched_1.stageState)(p, k);
                return React.createElement("button", { key: s.id, "data-ax-idash-stage": k, "data-ax-idash-stage-state": ss, onClick: () => props.onOpen(p.id, k), title: `${s.no} ${s.name} · ${Gantt_1.BAR[ss].label}`, "data-ax-idash-stage-name": s.short || s.name, style: { flex: 1, minWidth: 0, border: 'none', borderRadius: 5, height: 30, cursor: 'pointer', fontSize: 12, fontWeight: 700, background: ss === 'wait' ? ui_1.C.line : Gantt_1.BAR[ss].act, color: ss === 'wait' ? ui_1.C.sub : '#fff', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', padding: '0 6px' } },
                    s.no,
                    " ",
                    s.short || s.name);
            })),
            React.createElement("div", { "data-ax-idash-brief": true, style: { fontSize: 13, color: ui_1.C.sub, marginTop: 10, paddingLeft: 10, borderLeft: `2px solid ${ui_1.C.accent}` } },
                React.createElement("b", { style: { color: ui_1.C.text } }, "\uC774\uBC88 \uC8FC \uC694\uC57D"),
                " ",
                brief ? brief.text : React.createElement("span", { style: { color: ui_1.C.faint } }, "\uC544\uC9C1 \uC5C6\uC5B4\uC694 \u2014 \uAE08\uC694\uC77C 08:30 KST\uC5D0 AI\uAC00 \uC790\uB3D9\uC73C\uB85C \uC368\uC694"))),
        React.createElement("div", { className: "axw-idash" },
            React.createElement("section", { "data-ax-idash-card": "todo", style: ui_1.card },
                React.createElement("div", { style: head },
                    "\uC9C0\uAE08 \uD574\uC57C \uD560 \uAC83",
                    React.createElement("span", { style: { fontSize: 12, color: ui_1.C.faint, fontWeight: 500 } }, "\uC774 \uC544\uC774\uD15C\uB9CC")),
                todo.map((t, i) => React.createElement(Row, { key: i, data: "todo", l: React.createElement("span", null,
                        t.text,
                        React.createElement("span", { style: { color: ui_1.C.faint, fontSize: 12 } },
                            " \u00B7 ",
                            t.kind)), r: leftTxt(t.left) || '기한 없음', col: leftCol(t.left), onClick: () => props.onOpen(p.id, t.stage, t.key) })),
                review > 0 && React.createElement(Row, { data: "ai", l: `AI 결과 확인 ${review}건`, r: "\uD655\uC778 \uB300\uAE30", col: ui_1.C.soon, onClick: () => props.onOpen(p.id) }),
                !todo.length && !review && React.createElement(Empty, { t: "\uC9C0\uAE08 \uAE09\uD55C \uC77C\uC740 \uC5C6\uC5B4\uC694." })),
            React.createElement("section", { "data-ax-idash-card": "vendor", style: ui_1.card },
                React.createElement("div", { style: head },
                    "\uD611\uB825\uC0AC \u00B7 \uC0D8\uD50C",
                    React.createElement("span", { style: { flex: 1 } }),
                    React.createElement("button", { onClick: props.onVendor, style: Object.assign(Object.assign({}, ui_1.btn), { padding: '2px 8px', fontSize: 12 }) }, "\uD611\uB825\uC0AC")),
                (p.vendors || []).slice(0, 4).map(v => {
                    const s = (0, item_1.lastSample)(v);
                    const a = (0, item_1.lastAprv)(v);
                    return React.createElement(Row, { key: v.id, data: "vendor", l: React.createElement("span", null,
                            React.createElement("b", { style: { fontWeight: 600 } }, v.name),
                            React.createElement("span", { style: { color: ui_1.C.faint, fontSize: 12 } },
                                " \u00B7 ",
                                v.role,
                                v.country ? ` · ${v.country}` : '',
                                a ? ` · 승인원 ${a.rev} ${a.status}` : '')), r: s ? `${s.round} ${s.result}` : '샘플 없음', col: s ? (s.result === '합격' ? ui_1.C.ok : s.result === '보완' ? ui_1.C.soon : ui_1.C.late) : undefined, onClick: props.onVendor });
                }),
                waits.slice(0, 3).map((w, i) => React.createElement(Row, { key: 'w' + i, data: "wait", l: React.createElement("span", { style: { color: ui_1.C.sub } },
                        w.vendor,
                        " \u2014 ",
                        w.text), r: w.left !== undefined ? leftTxt(w.left) : '회신 대기', col: ui_1.C.soon })),
                !(p.vendors || []).length && React.createElement(Empty, { t: "\uB4F1\uB85D\uB41C \uD611\uB825\uC0AC\uAC00 \uC5C6\uC5B4\uC694." })),
            React.createElement("section", { "data-ax-idash-card": "item", style: ui_1.card },
                React.createElement("div", { style: head },
                    "\uD488\uBAA9 \uC694\uC57D",
                    React.createElement("span", { style: { flex: 1 } }),
                    React.createElement("button", { "data-ax-idash-to-item": true, onClick: () => props.onItem(p.id), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '2px 8px', fontSize: 12 }) }, "\uD488\uBAA9 \u00B7 BOM")),
                React.createElement(Row, { data: "bom", l: "BOM", r: parts.length ? `${parts.length}부품 · 재질 표기 ${parts.filter(item_1.needMark).length}` : '없음', onClick: () => props.onItem(p.id) }),
                React.createElement(Row, { data: "docs", l: "\uB3C4\uBA74 \u00B7 \uBB38\uC11C \uD310", r: `${docs2.length}${oldRel ? ` · 옛 판 공장 ${oldRel}건` : ''}`, col: oldRel ? ui_1.C.late : undefined, onClick: () => props.onItem(p.id) }),
                React.createElement(Row, { data: "ecr", l: "\uC124\uACC4 \uBCC0\uACBD", r: ecrs.length ? `진행 ${ecrs.length}` : '없음', col: ecrs.length ? ui_1.C.soon : undefined, onClick: () => props.onItem(p.id) }),
                React.createElement(Row, { data: "cert", l: "\uC778\uC99D", r: certs.length ? certs.slice(0, 3).map(c => `${c.name} ${c.status}`).join(' · ') : '없음', col: certs.some(c => (0, item_1.certState)(c, now) === 'late') ? ui_1.C.late : certs.some(c => (0, item_1.certState)(c, now) === 'soon') ? ui_1.C.soon : undefined, onClick: () => props.onItem(p.id) })),
            React.createElement("section", { "data-ax-idash-card": "lanes", className: "axw-idash-wide", style: ui_1.card },
                React.createElement("div", { style: Object.assign(Object.assign({}, head), { whiteSpace: 'nowrap' }) },
                    "\uC77C\uC815 \uD310",
                    React.createElement("span", { className: "axw-hide-sm", style: { fontSize: 12, color: ui_1.C.faint, fontWeight: 500 } }, "\uC5C5\uBB34 \uAD6C\uBD84 \u00D7 \uB2E8\uACC4 \u00B7 \uBE57\uAE08 = \uD574\uB2F9 \uC5C6\uC74C \u00B7 \uB204\uB974\uBA74 \uADF8 \uC0B0\uCD9C\uBB3C\uB85C"),
                    React.createElement("span", { className: "axw-show-sm", "data-ax-idash-swipe": true, style: { fontSize: 12, color: ui_1.C.accent, fontWeight: 600, marginLeft: 'auto' } }, "\uC606\uC73C\uB85C \uBC00\uBA74 \u2464~\u2466 \u203A")),
                React.createElement("div", { ref: laneBox, "data-ax-idash-lanebox": true, style: { padding: '0 14px 14px 0', overflowX: 'auto' } },
                    React.createElement("div", { style: { minWidth: 560 } },
                        React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '110px repeat(7,minmax(0,1fr))', gap: 3, fontSize: 11.5, color: ui_1.C.faint, fontWeight: 700, marginBottom: 3 } },
                            React.createElement("span", { style: { position: 'sticky', left: 0, background: ui_1.C.card, zIndex: 1 } }),
                            st.map((s, k) => React.createElement("span", { key: k, style: { textAlign: 'center', color: k === ck ? ui_1.C.text : ui_1.C.faint } }, s.no))),
                        sched_1.LANES.map((l, i) => {
                            const off = (0, hatch_1.laneOff)(p, i);
                            const cs = (0, sched_1.laneCells)(p, i);
                            return (React.createElement("div", { key: i, "data-ax-idash-lane": i, "data-ax-off": off ? '1' : '', title: off, style: { display: 'grid', gridTemplateColumns: '110px repeat(7,minmax(0,1fr))', gap: 3, marginBottom: 3, fontSize: 11.5 } },
                                React.createElement("span", { style: { fontSize: 12.5, color: off ? ui_1.C.faint : ui_1.C.text, alignSelf: 'stretch', position: 'sticky', left: 0, background: ui_1.C.card, zIndex: 1, display: 'flex', alignItems: 'center', paddingLeft: 14 } }, l),
                                st.map((s, k) => {
                                    const c = cs.filter(x => x.k === k)[0];
                                    const bg = off ? Guide_1.HATCH : !c ? ui_1.C.hover : c.state === 'wait' ? ui_1.C.line : Gantt_1.BAR[c.state].act;
                                    return React.createElement("div", { key: k, "data-ax-idash-cell": `${i}-${k}`, "data-ax-hatch": off ? '1' : undefined, onClick: c && !off ? () => props.onOpen(p.id, k, c.keys.filter(x => !(p.docs[x] || {}).done && !(p.docs[x] || {}).skip)[0]) : undefined, style: { height: 22, borderRadius: 4, background: bg, color: c && !off && c.state !== 'wait' ? '#fff' : ui_1.C.sub, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, cursor: c && !off ? 'pointer' : 'default' } }, c && !off ? `${c.done}/${c.total}` : '');
                                })));
                        })))),
            React.createElement("section", { "data-ax-idash-card": "issue", style: ui_1.card },
                React.createElement("div", { style: head }, "\uC774\uC288 \u00B7 AI"),
                React.createElement(Row, { data: "issue", l: `열린 이슈 ${iss.filter(i => i.kind === '이슈').length} · 리스크 ${iss.filter(i => i.kind === '리스크').length}`, r: issLate ? `${issLate} 지연` : '', col: issLate ? ui_1.C.late : undefined, onClick: () => props.onIssues(p.id) }),
                iss.slice(0, 3).map(i => React.createElement(Row, { key: i.id, data: "issue-item", l: React.createElement("span", { style: { color: ui_1.C.sub } }, i.text), r: i.due ? (0, ui_1.md)(i.due) : '', onClick: () => props.onIssues(p.id) })),
                React.createElement(Row, { data: "ai-run", l: `AI 진행 중 ${running}`, r: review ? `확인 대기 ${review}` : '', col: review ? ui_1.C.soon : undefined, onClick: () => props.onOpen(p.id) })))));
}

};
__m["src/webparts/huromAxPlm/components/Dash.js"]=function(module,exports,require){"use strict";
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
exports.AiCtx = void 0;
exports.AiButton = AiButton;
exports.AiJobs = AiJobs;
exports.AiResult = AiResult;
exports.vendorWaits = vendorWaits;
exports.Dashboard = Dashboard;
exports.AiStatus = AiStatus;
exports.AllSchedule = AllSchedule;
exports.ProjectSchedule = ProjectSchedule;
exports.StageAi = StageAi;
const React = __importStar(require("react"));
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const ai_1 = require("src/webparts/huromAxPlm/model/ai.js");
const auto_1 = require("src/webparts/huromAxPlm/model/auto.js");
const hatch_1 = require("src/webparts/huromAxPlm/model/hatch.js");
const sched_1 = require("src/webparts/huromAxPlm/model/sched.js");
const Gantt_1 = require("src/webparts/huromAxPlm/components/Gantt.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
exports.AiCtx = React.createContext(undefined);
const fmtAt = (iso) => { if (!iso)
    return ''; const t = new Date(iso); return `${t.getMonth() + 1}/${t.getDate()} ${('0' + t.getHours()).slice(-2)}:${('0' + t.getMinutes()).slice(-2)}`; };
// 「AI에게 맡기기」 — 누르면 할 수 있는 일 목록, 고르면 확인 대기로 들어감
function AiButton(props) {
    const api = React.useContext(exports.AiCtx);
    const [open, setOpen] = React.useState(false);
    const [ask, setAsk] = React.useState(undefined);
    const [text, setText] = React.useState('');
    if (!api || !props.pid)
        return null;
    const list = props.kinds ? ai_1.AI_KINDS.filter(k => props.kinds.indexOf(k.id) >= 0) : api.kinds ? api.kinds(props.pid) : ai_1.AI_KINDS;
    const go = (k, input) => { api.run(props.pid, k, input); setOpen(false); setAsk(undefined); setText(''); };
    const pick = (k) => { const info = (0, ai_1.kindInfo)(k); if (info.ask) {
        setAsk(k);
        setText(props.preset || '');
    }
    else
        go(k); };
    return (React.createElement("span", { style: { position: 'relative', display: 'inline-block' } },
        React.createElement("button", { "data-ax-ai-btn": props.kinds ? props.kinds.join(',') : 'all', onClick: () => (list.length === 1 && !(0, ai_1.kindInfo)(list[0].id).ask ? go(list[0].id) : setOpen(!open)), style: Object.assign(Object.assign({}, ui_1.btn), { borderColor: ui_1.C.accent, color: ui_1.C.accent, padding: props.small ? '3px 9px' : ui_1.btn.padding, fontSize: props.small ? 12 : 13 }) },
            "\u2726 ",
            props.label || 'AI에게 맡기기',
            api.online === false && React.createElement("span", { style: { marginLeft: 6, color: ui_1.C.faint, fontWeight: 500 } }, "(\uC5F0\uACB0 \uC804)")),
        open && React.createElement("div", { "data-ax-ai-menu": true, style: Object.assign(Object.assign({}, ui_1.card), { position: 'absolute', right: 0, top: '110%', zIndex: 40, width: 320, maxWidth: '86vw', maxHeight: '62vh', overflowY: 'auto', boxShadow: '0 12px 30px rgba(0,0,0,.14)', padding: 6 }) },
            !ask && list.map((k, i) => React.createElement("div", { key: k.id },
                (i === 0 || list[i - 1].group !== k.group) && React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { padding: '8px 8px 4px', fontSize: 11 }) }, k.group),
                React.createElement("button", { "data-ax-ai-kind": k.id, disabled: !!k.nodata, title: k.nodata || '', onClick: () => pick(k.id), style: { display: 'block', width: '100%', textAlign: 'left', border: 'none', background: 'transparent', padding: '7px 8px', fontSize: 13, borderRadius: 6, cursor: k.nodata ? 'default' : 'pointer', color: k.nodata ? ui_1.C.faint : ui_1.C.text } },
                    k.label,
                    k.nodata ? ` · ${k.nodata}` : ''))),
            ask && React.createElement("div", { style: { padding: 6, display: 'flex', flexDirection: 'column', gap: 8 } },
                React.createElement("div", { style: { fontSize: 13, fontWeight: 700 } }, (0, ai_1.kindInfo)(ask).label),
                React.createElement("textarea", { "data-ax-ai-input": true, autoFocus: true, rows: ask === 'minutes' ? 6 : 2, placeholder: (0, ai_1.kindInfo)(ask).ask, value: text, onChange: e => setText(e.target.value), style: Object.assign(Object.assign({}, ui_1.inp), { resize: 'vertical' }) }),
                React.createElement("div", { style: { display: 'flex', gap: 6 } },
                    React.createElement("button", { "data-ax-ai-go": true, disabled: !text.trim(), onClick: () => go(ask, text.trim()), style: Object.assign(Object.assign({}, ui_1.primary), { flex: 1, opacity: text.trim() ? 1 : 0.4 }) }, "\uB9E1\uAE30\uAE30"),
                    React.createElement("button", { onClick: () => setAsk(undefined), style: ui_1.btn }, "\uB4A4\uB85C"))),
            React.createElement("div", { style: { fontSize: 11.5, color: ui_1.C.faint, padding: '6px 8px 4px', borderTop: `1px solid ${ui_1.C.line}`, marginTop: 4 } },
                "\uACB0\uACFC\uB294 \uD655\uC778 \uB300\uAE30\uB85C",
                React.createElement(ui_1.Tip, { t: "\uACB0\uACFC\uB294 \u300C\uD655\uC778 \uB300\uAE30\u300D\uB85C \uB4E4\uC5B4\uC624\uACE0, \uBC18\uC601\uC744 \uB20C\uB7EC\uC57C \uB370\uC774\uD130\uC5D0 \uB4E4\uC5B4\uAC00\uC694." })))));
}
const STATE_DOT = { running: 'soon', queued: 'open', review: 'soon', applied: 'done', dismissed: 'lock', offline: 'lock', error: 'late', nodata: 'lock' };
function AiJobs(props) {
    const api = React.useContext(exports.AiCtx);
    const rows = [];
    props.items.filter(p => !props.pid || p.id === props.pid).forEach(p => (p.aiJobs || []).forEach(j => rows.push({ p: p, j })));
    rows.sort((a, b) => (a.j.at < b.j.at ? 1 : -1));
    const live = rows.filter(r => ['running', 'queued', 'review', 'offline', 'error'].indexOf((0, ai_1.jobState)(r.j)) >= 0);
    const past = rows.filter(r => live.indexOf(r) < 0);
    const show = live.concat(past.slice(0, 3)).slice(0, props.limit || 20);
    return (React.createElement("div", { "data-ax-ai-jobs": true },
        !show.length && React.createElement("div", { style: { padding: '18px 14px', fontSize: 13, color: ui_1.C.faint } },
            "\uB9E1\uAE34 \uC77C\uC774 \uC5C6\uC5B4\uC694. \uD504\uB85C\uC81D\uD2B8\u00B7\uAD00\uBB38\u00B7\uC0B0\uCD9C\uBB3C\u00B7\uD488\uBAA9\u00B7\uD611\uB825\uC0AC \uD654\uBA74\uC758 \u300C\u2726 AI\uC5D0\uAC8C \uB9E1\uAE30\uAE30\u300D\uB85C \uB9E1\uACA8 \uBCF4\uC138\uC694.",
            api && api.online === false ? ' (지금은 AI 연결 전이에요)' : ''),
        show.map(({ p, j }) => {
            const s = (0, ai_1.jobState)(j);
            return (React.createElement("div", { key: j.id, className: "axw-row", "data-ax-ai-job": j.kind, "data-ax-ai-state": s, onClick: () => api && api.open(p.id, j.id), style: { opacity: s === 'applied' || s === 'dismissed' ? 0.55 : 1 } },
                React.createElement(ui_1.Dot, { s: STATE_DOT[s] }),
                React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                    React.createElement("div", { style: { fontSize: 13.5, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                        j.label,
                        j.input ? React.createElement("span", { style: { color: ui_1.C.faint, fontWeight: 500 } },
                            " \u2014 ",
                            j.input.slice(0, 40)) : null),
                    React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                        j.auto ? React.createElement("b", { style: { color: ui_1.C.accent, fontWeight: 600 } },
                            "\uC790\uB3D9 \u00B7 ",
                            j.auto) : `${j.who} 맡김`,
                        " \u00B7 ",
                        p.name.split(' (')[0],
                        " \u00B7 ",
                        fmtAt(j.at),
                        j.owner ? ` · 확인 ${j.owner}` : '')),
                React.createElement("span", { style: { fontSize: 12.5, fontWeight: 700, color: s === 'review' ? ui_1.C.soon : s === 'error' ? ui_1.C.late : s === 'running' ? ui_1.C.accent : ui_1.C.faint, whiteSpace: 'nowrap' } }, s === 'running' ? '진행 중…' : ai_1.AI_STATE_LABEL[s]),
                React.createElement("button", { "data-ax-ai-see": true, onClick: e => { e.stopPropagation(); if (api)
                        api.open(p.id, j.id); }, style: Object.assign(Object.assign({}, ui_1.btn), { padding: '3px 9px' }) }, "\uACB0\uACFC \uD655\uC778")));
        })));
}
const mailto = (t) => { const ls = t.split('\n'); const sub = (ls.filter(l => /^\s*(-\s*)?제목\s*[:：]/.test(l))[0] || ls[0] || '').replace(/^\s*(-\s*)?제목\s*[:：]\s*/, ''); return `mailto:?subject=${encodeURIComponent(sub.slice(0, 120))}&body=${encodeURIComponent(t.slice(0, 1800))}`; };
// 결과 확인 창 — 반영 / 버리기 / 다시
function AiResult(props) {
    const { job } = props;
    const s = (0, ai_1.jobState)(job);
    return (React.createElement("div", { "data-ax-ai-result": job.kind, "data-ax-ai-result-state": s, style: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,.28)', zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12 }, onClick: props.onClose },
        React.createElement("div", { onClick: e => e.stopPropagation(), style: Object.assign(Object.assign({}, ui_1.card), { width: 640, maxWidth: '100%', maxHeight: '86vh', display: 'flex', flexDirection: 'column' }) },
            React.createElement(ui_1.PanelHead, { title: job.label, sub: `${props.p.name} · ${fmtAt(job.at)} · ${ai_1.AI_STATE_LABEL[s]}`, onClose: props.onClose }),
            React.createElement("div", { style: { padding: 16, overflow: 'auto', flex: 1 } },
                job.input && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.sub, marginBottom: 10, whiteSpace: 'pre-wrap' } },
                    React.createElement("span", { style: ui_1.label }, "\uC694\uCCAD "),
                    job.input),
                job.auto && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.accent, marginBottom: 8, fontWeight: 600 } },
                    "\uC790\uB3D9 \uC2E4\uD589 \u2014 ",
                    job.auto),
                s === 'running' && React.createElement("div", { style: { fontSize: 13.5, color: ui_1.C.sub } },
                    "AI \uC791\uC5C5 \uC911",
                    React.createElement(ui_1.Tip, { t: "\uBCF4\uD1B5 10~40\uCD08 \uAC78\uB824\uC694. \uCC3D\uC744 \uB2EB\uC544\uB3C4 \uACC4\uC18D\uB3FC\uC694." })),
                s === 'queued' && React.createElement("div", { style: { fontSize: 13.5, color: ui_1.C.sub } }, "\uCC28\uB840\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911\uC774\uC5D0\uC694. \uC55E\uC758 \uC77C\uC774 \uB05D\uB098\uBA74 \uBC14\uB85C \uC2DC\uC791\uD574\uC694."),
                s === 'nodata' && React.createElement("div", { "data-ax-ai-nodata": true, style: { fontSize: 13.5, color: ui_1.C.sub } },
                    React.createElement("b", null, "\uB370\uC774\uD130 \uC5F0\uACB0 \uC804"),
                    " \u2014 ",
                    job.note || '필요한 데이터가 아직 연결되지 않았어요',
                    ". \uACB0\uACFC\uB97C \uB9CC\uB4E4\uC9C0 \uC54A\uC558\uC5B4\uC694."),
                s === 'offline' && React.createElement("div", { "data-ax-ai-offline": true, style: { fontSize: 13.5, color: ui_1.C.sub } },
                    React.createElement("b", null, "AI \uC5F0\uACB0 \uC804"),
                    " \u2014 AI \uC911\uACC4\uC5D0 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uACB0\uACFC\uB97C \uB9CC\uB4E4\uC9C0 \uC54A\uC558\uC5B4\uC694. \uC5F0\uACB0\uB418\uBA74 \u300C\uB2E4\uC2DC\u300D\uB97C \uB20C\uB7EC \uC8FC\uC138\uC694."),
                s === 'error' && React.createElement("div", { style: { fontSize: 13.5, color: ui_1.C.late } }, job.note || '중간에 끊겼어요. 다시 맡겨 주세요.'),
                job.result && React.createElement("div", { "data-ax-ai-text": true, style: { fontSize: 13.5, lineHeight: 1.6, whiteSpace: 'pre-wrap', background: ui_1.C.bg, border: `1px solid ${ui_1.C.line}`, borderRadius: 8, padding: 12 } }, job.result),
                s === 'applied' && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.ok, marginTop: 8 } },
                    job.by,
                    "\uB2D8\uC774 \uBC18\uC601\uD588\uC5B4\uC694.")),
            React.createElement("div", { style: { display: 'flex', gap: 8, padding: 12, borderTop: `1px solid ${ui_1.C.line}`, flexWrap: 'wrap', alignItems: 'center' } },
                s === 'review' && React.createElement("button", { "data-ax-ai-apply": true, onClick: props.onApply, style: ui_1.primary }, "\uC2B9\uC778"),
                s === 'review' && React.createElement("button", { "data-ax-ai-dismiss": true, onClick: props.onDismiss, style: ui_1.btn }, "\uBC18\uB824"),
                (s === 'offline' || s === 'error' || s === 'dismissed') && React.createElement("button", { "data-ax-ai-retry": true, onClick: props.onRetry, style: ui_1.primary }, "\uB2E4\uC2DC"),
                s === 'review' && job.result && (0, ai_1.kindInfo)(job.kind).mail && React.createElement("a", { "data-ax-ai-mail": true, href: mailto(job.result), style: Object.assign(Object.assign({}, ui_1.btn), { textDecoration: 'none' }) }, "\uBA54\uC77C \uC571\uC73C\uB85C \uC5F4\uAE30"),
                s === 'review' && job.result && React.createElement("button", { onClick: () => { navigator.clipboard.writeText(job.result || '').then(() => undefined, () => undefined); }, style: ui_1.btn }, "\uBCF5\uC0AC"),
                React.createElement("span", { style: { fontSize: 12, color: ui_1.C.faint, flex: 1, minWidth: 160 } }, s === 'review' ? (ai_1.APPLY_NOTE[job.kind] || '프로젝트 기록에 남아요') + ((0, ai_1.kindInfo)(job.kind).mail ? ' · 메일은 초안만, 보내기는 사람이' : '') + ' · AI가 직접 고치지 않아요' : '')))));
}
// ───────── 일정 줄 만들기
function stageSegs(p, onOpen, short) {
    return (0, work_1.stagesOf)(p).map((s, k) => {
        const sp = (0, sched_1.planSpan)(p, k);
        if (!sp)
            return undefined;
        const st = (0, sched_1.stageState)(p, k);
        return { span: sp, state: st, label: short ? s.no : `${s.no} ${s.short || s.name}`, title: `${s.no} ${s.name} · ${sp.a} ~ ${sp.b} · ${Gantt_1.BAR[st].label}`, onClick: onOpen ? () => onOpen(k) : undefined };
    })
        .filter(x => !!x);
}
function laneRows(p, depth, onOpen) {
    return sched_1.LANES.map((l, i) => {
        const cs = (0, sched_1.laneCells)(p, i);
        const off = (0, hatch_1.laneOff)(p, i);
        const late = cs.filter(c => c.state === 'late').length;
        const done = cs.reduce((a, c) => a + c.done, 0);
        const tot = cs.reduce((a, c) => a + c.total, 0);
        return { id: `${p.id}-lane${i}`, label: l, depth, sub: off ? '빗금' : tot ? `${done}/${tot}` : '—', state: late && !off ? 'late' : undefined, data: { 'data-ax-lane': String(i) },
            segs: cs.map(c => ({ hatch: !!off, span: c.span, state: off ? 'wait' : c.state, label: `${(0, work_1.stagesOf)(p)[c.k].no} ${c.done}/${c.total}`, title: off ? `${l} · 해당 없음 — ${off}` : `${l} · ${(0, work_1.stagesOf)(p)[c.k].no} ${(0, work_1.stagesOf)(p)[c.k].name} · 산출물 ${c.done}/${c.total} · ${Gantt_1.BAR[c.state].label}`, onClick: () => onOpen(c.k, c.keys.filter(x => !(p.docs[x] || {}).done && !(p.docs[x] || {}).skip)[0]) })) };
    });
}
function vendorWaits(items, who, now = (0, ax_1.today)()) {
    const out = [];
    const all = who === '*';
    items.forEach(p0 => {
        const p = p0;
        if (!all && (p.owner || '').replace(/\s/g, '') !== who.replace(/\s/g, ''))
            return;
        (p.vendors || []).forEach(v => {
            const last = v.samples.slice(-1)[0];
            if (last && last.result !== '합격')
                out.push({ pid: p.id, project: p.name, vendor: v.name, text: `${last.round} 샘플 ${last.result} — 보완품 회신 대기` });
            if (!last && ['odm', 'sourcing'].indexOf((0, devtype_1.typeOf)(p)) >= 0 && (0, work_1.curIdx)(p) >= 2)
                out.push({ pid: p.id, project: p.name, vendor: v.name, text: '샘플 회신 대기' });
            v.aprvs.filter(a => a.status === '제출').forEach(a => out.push({ pid: p.id, project: p.name, vendor: v.name, text: `승인원 「${a.title}」 검토 대기` }));
            (v.vcerts || []).forEach(c => {
                if (!c.until)
                    return;
                const d = Math.round((new Date(c.until + 'T00:00:00').getTime() - new Date(now + 'T00:00:00').getTime()) / 86400000);
                if (d <= 60)
                    out.push({ pid: p.id, project: p.name, vendor: v.name, text: `업체 인증서 ${c.name} ${d < 0 ? '만료' : '만료 임박'} — 새 인증서 요청`, left: d });
            });
        });
    });
    return out;
}
// ───────── 메인 대시보드
function Dashboard(props) {
    const { items, who } = props;
    const [sel, setSel] = React.useState('all');
    const [scale, setScale] = React.useState('month');
    const [openIds, setOpenIds] = React.useState(() => (items[0] ? { [items[0].id]: true } : {}));
    const [whose, setWhose] = React.useState('me');
    const p1 = items.filter(x => x.id === sel)[0];
    const rows = [];
    const add = (p, group) => {
        const op = !group || !!openIds[p.id];
        const lt = (0, sched_1.lateDays)(p);
        rows.push({ id: p.id, label: group ? p.name : '단계', strong: true, toggle: group, open: op, sub: lt ? `${lt}일 지연` : `${(0, work_1.stagesOf)(p)[(0, work_1.curIdx)(p)].no} 진행`, state: lt ? 'late' : undefined, data: { 'data-ax-dash-proj': p.id },
            onLabel: group ? () => setOpenIds(Object.assign(Object.assign({}, openIds), { [p.id]: !openIds[p.id] })) : undefined, segs: stageSegs(p, k => props.onOpen(p.id, k), group), gems: (0, sched_1.gems)(p) });
        if (op)
            laneRows(p, group ? 1 : 0, (k, key) => props.onOpen(p.id, k, key)).forEach(r => rows.push(r));
    };
    if (p1)
        add(p1, false);
    else
        items.forEach(p => add(p, true));
    const meWho = whose === 'all' ? '*' : who;
    const list = (0, work_1.todos)(items, meWho).filter(t => t.kind === '승인' || t.left === undefined || t.left <= 14);
    const vw = vendorWaits(items, meWho);
    const api = React.useContext(exports.AiCtx);
    const nm = (n) => (n || '').replace(/\s/g, '');
    const rv = [];
    const stale = [];
    items.forEach(p => {
        (p.aiJobs || []).forEach(j => { if ((0, ai_1.jobState)(j) === 'review' && (meWho === '*' || nm(j.owner || p.owner) === nm(who)))
            rv.push({ p: p, j }); });
        const st = (0, auto_1.staleReviews)(p);
        if (st.length && (meWho === '*' || nm(p.owner) === nm(who)))
            stale.push({ p: p, n: st.length });
    });
    const late = list.filter(t => t.left !== undefined && t.left < 0).length;
    const live = items.reduce((a, p) => a + (p.aiJobs || []).filter(j => ['running', 'queued', 'review'].indexOf((0, ai_1.jobState)(j)) >= 0).length, 0);
    const lateP = items.filter(p => (0, sched_1.lateDays)(p) > 0);
    const head = lateP.length ? `${lateP.length}개 프로젝트가 늦어지고 있어요 — ${lateP.map(p => `${p.name.split(' (')[0]} ${(0, sched_1.lateDays)(p)}일`).join(', ')}` : '모든 프로젝트가 계획대로예요';
    return (React.createElement("div", { "data-ax-dash": true },
        React.createElement("div", { style: { display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap', marginBottom: 12 } },
            React.createElement("div", { style: { flex: 1, minWidth: 220 } },
                React.createElement("h1", { "data-ax-dash-head": true, style: { fontSize: 20, fontWeight: 700, margin: 0, letterSpacing: '-.01em' } }, "\uBA54\uC778 \uB300\uC2DC\uBCF4\uB4DC"),
                React.createElement("div", { style: { fontSize: 13, color: lateP.length ? ui_1.C.late : ui_1.C.sub, marginTop: 4, fontWeight: lateP.length ? 600 : 500 } }, head)),
            React.createElement(AiButton, { pid: p1 ? p1.id : items[0] && items[0].id, kinds: ['weekly', 'minutes', 'similar', 'delay'], label: p1 ? 'AI에게 맡기기' : `AI에게 맡기기 (${items[0] ? items[0].name.split(' (')[0] : ''})` })),
        React.createElement("div", { style: Object.assign({}, ui_1.card) },
            React.createElement("div", { style: { display: 'flex', gap: 8, padding: '10px 12px', alignItems: 'center', flexWrap: 'wrap' } },
                React.createElement("div", { "data-ax-dash-pick": true, style: { display: 'flex', gap: 4, flexWrap: 'nowrap', overflowX: 'auto', flex: '1 1 260px', minWidth: 0 } }, [{ id: 'all', name: '전체' }].concat(items).map(x => React.createElement("button", { key: x.id, "data-ax-dash-sel": x.id, onClick: () => setSel(x.id), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '4px 10px', background: sel === x.id ? ui_1.C.text : ui_1.C.card, color: sel === x.id ? ui_1.C.inv : ui_1.C.sub, borderColor: sel === x.id ? ui_1.C.text : ui_1.C.line2 }) }, x.id === 'all' ? '전체' : x.name.split(' (')[0]))),
                React.createElement(Gantt_1.ScalePick, { v: scale, set: setScale })),
            React.createElement("div", { style: { padding: '0 12px 10px' } },
                React.createElement(Gantt_1.Legend, null)),
            React.createElement(Gantt_1.Gantt, { name: "dash", rows: rows, scale: scale, labelW: 190 })),
        React.createElement("div", { className: "axw-dash2", style: { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 16, marginTop: 16 } },
            React.createElement("div", { "data-ax-now": true, style: Object.assign({}, ui_1.card) },
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, padding: '12px 14px', borderBottom: `1px solid ${ui_1.C.line}` } },
                    React.createElement("b", { style: { fontSize: 15 } }, "\uC9C0\uAE08 \uD574\uC57C \uD560 \uAC83"),
                    React.createElement("span", { style: { fontSize: 12.5, color: late ? ui_1.C.late : ui_1.C.faint, fontWeight: 600 } },
                        list.length + vw.length + rv.length + stale.length,
                        "\uAC74",
                        late ? ` · 지연 ${late}` : ''),
                    React.createElement("span", { style: { flex: 1 } }),
                    React.createElement("span", { style: { display: 'inline-flex', border: `1px solid ${ui_1.C.line2}`, borderRadius: 6, overflow: 'hidden' } }, ['me', 'all'].map(w => React.createElement("button", { key: w, "data-ax-now-whose": w, onClick: () => setWhose(w), style: Object.assign(Object.assign({}, ui_1.btn), { border: 'none', borderRadius: 0, padding: '3px 9px', fontSize: 12, background: whose === w ? ui_1.C.text : ui_1.C.card, color: whose === w ? ui_1.C.inv : ui_1.C.sub }) }, w === 'me' ? '내 담당' : '전체')))),
                !list.length && !vw.length && !rv.length && React.createElement("div", { style: { padding: '18px 14px', fontSize: 13, color: ui_1.C.faint } },
                    "2\uC8FC \uC548\uC5D0 \uB9C8\uAC10\uB418\uB294 \uAC83\uC774 \uC5C6\uC5B4\uC694.",
                    whose === 'me' ? ' 「전체」로 팀 전체를 볼 수 있어요.' : ''),
                stale.map(x => React.createElement("div", { key: 's' + x.p.id, className: "axw-row", "data-ax-now-row": "AI 2\uC77C", onClick: () => props.onOpen(x.p.id) },
                    React.createElement(ui_1.Dot, { s: "late" }),
                    React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                        React.createElement("div", { style: { fontSize: 13.5, fontWeight: 700, color: ui_1.C.late } },
                            "AI \uD655\uC778 \uB300\uAE30 ",
                            x.n,
                            "\uAC74\uC774 2\uC77C \uB118\uAC8C \uC313\uC600\uC5B4\uC694"),
                        React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint } },
                            x.p.name.split(' (')[0],
                            " \u00B7 PM \uD655\uC778 \uD544\uC694")))),
                rv.map(({ p, j }) => React.createElement("div", { key: 'r' + j.id, className: "axw-row", "data-ax-now-row": "AI \uD655\uC778", onClick: () => api && api.open(p.id, j.id) },
                    React.createElement(ui_1.Dot, { s: "soon" }),
                    React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                        React.createElement("div", { style: { fontSize: 13.5, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                            "AI \uD655\uC778 \uB300\uAE30 \u2014 ",
                            j.label),
                        React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                            p.name.split(' (')[0],
                            " \u00B7 ",
                            j.auto ? `자동 · ${j.auto}` : `${j.who} 맡김`)),
                    React.createElement("span", { style: { fontSize: 12.5, fontWeight: 700, color: ui_1.C.soon, whiteSpace: 'nowrap' } }, "\uD655\uC778"))),
                list.map((t, i) => React.createElement("div", { key: 't' + i, className: "axw-row", "data-ax-now-row": t.kind, onClick: () => props.onOpen(t.pid, t.stage, t.key || (t.kind === '승인' ? 'gate' : undefined)) },
                    React.createElement(ui_1.Dot, { s: t.left !== undefined && t.left < 0 ? 'late' : t.kind === '승인' || (t.left !== undefined && t.left <= 7) ? 'soon' : 'open' }),
                    React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                        React.createElement("div", { style: { fontSize: 13.5, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                            t.kind === '승인' ? '관문 승인 대기 — ' : '',
                            t.text),
                        React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint } },
                            t.project.split(' (')[0],
                            " \u00B7 ",
                            (0, work_1.stagesOf)(items.filter(x => x.id === t.pid)[0])[t.stage].no,
                            " ",
                            t.kind)),
                    React.createElement("span", { style: { fontSize: 12.5, fontWeight: 700, whiteSpace: 'nowrap', color: t.left !== undefined && t.left < 0 ? ui_1.C.late : t.left !== undefined && t.left <= 7 ? ui_1.C.soon : ui_1.C.sub } }, t.left === undefined ? '' : t.left < 0 ? `${-t.left}일 지연` : t.left === 0 ? '오늘' : `D-${t.left}`))),
                vw.map((v, i) => React.createElement("div", { key: 'v' + i, className: "axw-row", "data-ax-now-row": "\uD611\uB825\uC0AC", onClick: () => props.onVendor(v.pid) },
                    React.createElement(ui_1.Dot, { s: v.left !== undefined && v.left < 0 ? 'late' : 'soon' }),
                    React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                        React.createElement("div", { style: { fontSize: 13.5, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                            v.vendor,
                            " \u2014 ",
                            v.text),
                        React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint } },
                            v.project.split(' (')[0],
                            " \u00B7 \uD611\uB825\uC0AC \uD68C\uC2E0")),
                    React.createElement(AiButton, { pid: v.pid, kinds: ['chase'], label: "\uB3C5\uCD09 \uBA54\uC77C", small: true })))),
            React.createElement("div", { "data-ax-ai-now": true, style: Object.assign({}, ui_1.card) },
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, padding: '12px 14px', borderBottom: `1px solid ${ui_1.C.line}` } },
                    React.createElement("b", { style: { fontSize: 15 } }, "AI\uAC00 \uC9C4\uD589 \uC911\uC778 \uAC83"),
                    React.createElement("span", { style: { fontSize: 12.5, color: ui_1.C.faint, fontWeight: 600 } },
                        live,
                        "\uAC74"),
                    React.createElement("span", { style: { flex: 1 } }),
                    React.createElement(AiStatus, null)),
                React.createElement(AiJobs, { items: items })))));
}
function AiStatus() {
    const api = React.useContext(exports.AiCtx);
    const on = api && api.online;
    return React.createElement("span", { "data-ax-ai-online": on === undefined ? 'checking' : on ? 'on' : 'off', style: { fontSize: 12, color: on ? ui_1.C.ok : ui_1.C.faint, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 5 } },
        React.createElement(ui_1.Dot, { s: on ? 'done' : 'lock', size: 7 }),
        on === undefined ? '연결 확인 중' : on ? 'AI 연결됨' : 'AI 연결 전');
}
// ───────── 전체 일정 — 프로젝트마다 한 줄
function AllSchedule(props) {
    const [scale, setScale] = React.useState('quarter');
    const rows = props.items.map(p => {
        const lt = (0, sched_1.lateDays)(p);
        const ck = (0, work_1.curIdx)(p);
        const r = (0, sched_1.projRange)(p);
        return { id: p.id, label: p.name.split(' (')[0], sub: lt ? `${lt}일 지연` : ui_1.SHORT[ck], state: lt ? 'late' : undefined, data: { 'data-ax-all-proj': p.id }, onLabel: () => props.onOpen(p.id),
            segs: stageSegs(p, k => props.onOpen(p.id, k), true), gems: (0, sched_1.gems)(p),
            flag: r && p.target ? { date: p.target, label: `출시 ${(0, ui_1.md)(p.target)}` } : undefined };
    });
    return (React.createElement("div", { "data-ax-allsched": true },
        React.createElement("div", { style: { display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap', marginBottom: 12 } },
            React.createElement("div", { style: { flex: 1, minWidth: 200 } },
                React.createElement("h1", { style: { fontSize: 20, fontWeight: 700, margin: 0 } }, "\uC804\uCCB4 \uC77C\uC815"),
                React.createElement("div", { style: { fontSize: 13, color: ui_1.C.sub, marginTop: 4 } },
                    "\uD504\uB85C\uC81D\uD2B8 ",
                    props.items.length,
                    "\uAC1C",
                    React.createElement(ui_1.Tip, { t: "\uB9C9\uB300\uB97C \uB204\uB974\uBA74 \uADF8 \uB2E8\uACC4\uB85C \uAC00\uC694" }))),
            React.createElement(Gantt_1.ScalePick, { v: scale, set: setScale })),
        React.createElement("div", { style: Object.assign({}, ui_1.card) },
            React.createElement("div", { style: { padding: '10px 12px' } },
                React.createElement(Gantt_1.Legend, null)),
            React.createElement(Gantt_1.Gantt, { name: "all", rows: rows, scale: scale, labelW: 170 })),
        React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { marginTop: 16, overflowX: 'auto' }) },
            React.createElement("table", { "data-ax-allsched-table": true, style: { width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 520 } },
                React.createElement("thead", null,
                    React.createElement("tr", { style: { textAlign: 'left', color: ui_1.C.faint, fontSize: 12 } }, ['프로젝트', '현재 단계', '지연', '출시 목표', '남은 날'].map(h => React.createElement("th", { key: h, style: { padding: '10px 12px', borderBottom: `1px solid ${ui_1.C.line}`, fontWeight: 600 } }, h)))),
                React.createElement("tbody", null, props.items.map(p => {
                    const lt = (0, sched_1.lateDays)(p);
                    const ck = (0, work_1.curIdx)(p);
                    const s = (0, work_1.stagesOf)(p)[ck];
                    return React.createElement("tr", { key: p.id, "data-ax-allsched-row": p.id, onClick: () => props.onOpen(p.id), style: { cursor: 'pointer' } },
                        React.createElement("td", { style: { padding: '10px 12px', borderTop: `1px solid ${ui_1.C.line}`, fontWeight: 600 } },
                            React.createElement(ui_1.TypeTag, { p: p }),
                            p.name),
                        React.createElement("td", { style: { padding: '10px 12px', borderTop: `1px solid ${ui_1.C.line}` } },
                            s.no,
                            " ",
                            s.name),
                        React.createElement("td", { style: { padding: '10px 12px', borderTop: `1px solid ${ui_1.C.line}`, color: lt ? ui_1.C.late : ui_1.C.faint, fontWeight: lt ? 700 : 500 } }, lt ? `${lt}일` : '—'),
                        React.createElement("td", { style: { padding: '10px 12px', borderTop: `1px solid ${ui_1.C.line}` } }, (0, ui_1.md)(p.target)),
                        React.createElement("td", { style: { padding: '10px 12px', borderTop: `1px solid ${ui_1.C.line}`, color: ui_1.C.sub } }, (0, ax_1.dday)(p.target)));
                }))))));
}
// ───────── 프로젝트 일정표 — 단계 줄 + 산출물 줄, 단계 막대 끌어서 계획 바꾸기
function ProjectSchedule(props) {
    const { p } = props;
    const [scale, setScale] = React.useState('month');
    const [docs, setDocs] = React.useState(true);
    const rows = [];
    const gm = (0, sched_1.gems)(p);
    (0, work_1.stagesOf)(p).forEach((s, k) => {
        const st = (0, sched_1.stageState)(p, k);
        const sp = (0, sched_1.planSpan)(p, k);
        rows.push({ id: `st-${s.id}`, label: `${s.no} ${s.name}`, strong: true, plan: sp, actual: (0, sched_1.actualSpan)(p, k), state: st, sub: st === 'late' ? '지연' : Gantt_1.BAR[st].label, gems: gm.filter(g => g.k === k), data: { 'data-ax-gs-stage': s.id },
            onLabel: () => props.onOpen(k),
            drag: sp ? (n) => props.update(x => (Object.assign(Object.assign({}, x), { plan: (0, sched_1.shiftFrom)(x, k, n), log: x.log.concat([{ at: new Date().toISOString(), who: props.who, kind: 'edit', what: `일정표에서 ${s.no} ${s.name} 계획 ${n > 0 ? '+' : ''}${n}일 — 뒤 단계 같이 밈` }]) }))) : undefined });
        if (docs)
            s.docs.forEach(d => {
                const ds = (0, sched_1.docSpan)(p, k, d.key);
                const st2 = p.docs[d.key] || {};
                rows.push({ id: `doc-${d.key}`, label: d.label, depth: 1, plan: ds.plan, actual: ds.actual, state: ds.state, sub: st2.skip ? '필요 없음' : ds.state === 'done' ? '완료' : st2.due ? (0, ui_1.md)(st2.due) : '', data: { 'data-ax-gs-doc': d.key }, onLabel: () => props.onOpen(k, d.key) });
            });
    });
    const noPlan = !Object.keys(p.plan || {}).length;
    const refill = () => { if (!p.target)
        return; const b = (0, sched_1.backPlan)(p.target, (0, devtype_1.typeOf)(p)); props.update(x => (Object.assign(Object.assign({}, x), { start: b.start, plan: b.plan, log: x.log.concat([{ at: new Date().toISOString(), who: props.who, kind: 'edit', what: `출시 목표 ${p.target} 기준으로 표준 일정 다시 채움 (시작 ${b.start})` }]) }))); };
    return (React.createElement("div", { "data-ax-psched": true, style: Object.assign(Object.assign({}, ui_1.card), { marginTop: 16 }) },
        React.createElement("div", { style: { display: 'flex', gap: 8, padding: '10px 12px', alignItems: 'center', flexWrap: 'wrap' } },
            React.createElement("b", { style: { fontSize: 14 } }, "\uC77C\uC815\uD45C"),
            React.createElement(ui_1.Tip, { t: "\uB2E8\uACC4 \uB9C9\uB300\uB97C \uC88C\uC6B0\uB85C \uB04C\uBA74 \uACC4\uD68D\uC774 \uBC14\uB00C\uACE0 \uB4A4 \uB2E8\uACC4\uAC00 \uAC19\uC774 \uBC00\uB824\uC694" }),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement("label", { style: { fontSize: 12.5, color: ui_1.C.sub, display: 'inline-flex', gap: 5, alignItems: 'center' } },
                React.createElement("input", { "data-ax-gs-docs": true, type: "checkbox", checked: docs, onChange: () => setDocs(!docs) }),
                "\uC0B0\uCD9C\uBB3C"),
            React.createElement("button", { "data-ax-gs-refill": true, disabled: !p.target, title: p.target ? '' : '설정에서 출시 목표일을 넣어 주세요', onClick: refill, style: Object.assign(Object.assign({}, ui_1.btn), { opacity: p.target ? 1 : 0.4 }) }, "\uCD9C\uC2DC \uBAA9\uD45C\uB85C \uB2E4\uC2DC \uCC44\uC6B0\uAE30"),
            React.createElement(AiButton, { pid: p.id, kinds: ['delay', 'replan'], label: "AI \uC77C\uC815 \uC810\uAC80" }),
            React.createElement(Gantt_1.ScalePick, { v: scale, set: setScale })),
        React.createElement("div", { style: { padding: '0 12px 10px' } },
            React.createElement(Gantt_1.Legend, null)),
        noPlan ? React.createElement("div", { style: { padding: 24, fontSize: 13, color: ui_1.C.faint, borderTop: `1px solid ${ui_1.C.line}` } },
            "\uACC4\uD68D\uC77C \uC5C6\uC74C",
            React.createElement(ui_1.Tip, { t: "\u300C\uCD9C\uC2DC \uBAA9\uD45C\uB85C \uB2E4\uC2DC \uCC44\uC6B0\uAE30\u300D\uB97C \uB204\uB974\uAC70\uB098 \uC544\uC774\uD15C \uC124\uC815\uC5D0\uC11C \uB0A0\uC9DC\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694." }))
            : React.createElement(Gantt_1.Gantt, { name: "project", rows: rows, scale: scale, labelW: 210 })));
}
// 이 단계 AI 일 — 갈래(원액기/상품)·단계별로 AI가 무엇을 하는지, 어디까지 했는지 (설계 맵 곽두팔 msg 10485552)
function StageAi(props) {
    const api = React.useContext(exports.AiCtx);
    const { p, k } = props;
    const br = (0, ai_1.branchOf)((0, devtype_1.typeOf)(p));
    const ks = (0, ai_1.kindsFor)(br, k + 1);
    const common = (0, ai_1.kindsFor)(br, 0).filter(x => x.id !== 'docchk');
    const jobs = p.aiJobs || [];
    const last = (id) => jobs.filter(j => j.kind === id).slice(-1)[0];
    const row = (x) => {
        const j = last(x.id);
        const s = j ? (0, ai_1.jobState)(j) : undefined;
        return React.createElement("div", { key: x.id, className: "axw-row", "data-ax-stage-ai": x.id, "data-ax-stage-ai-state": s || 'none', onClick: () => { if (j && api)
                api.open(p.id, j.id); }, style: { cursor: j ? 'pointer' : 'default' } },
            React.createElement(ui_1.Dot, { s: s ? STATE_DOT[s] : 'open' }),
            React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                React.createElement("div", { style: { fontSize: 13, fontWeight: 600 } }, x.label),
                React.createElement("div", { style: { fontSize: 11.5, color: ui_1.C.faint } }, x.nodata ? x.nodata : s ? `${ai_1.AI_STATE_LABEL[s]}${j && j.auto ? ` · 자동 · ${j.auto}` : ''}` : x.ask && !x.autoInput ? '입력이 있어야 해요 — 맡기기' : '아직 안 돌았어요')),
            !x.nodata && React.createElement("span", { onClick: e => e.stopPropagation() },
                React.createElement(AiButton, { pid: p.id, kinds: [x.id], label: j ? '다시' : '맡기기', small: true })));
    };
    return (React.createElement("div", { "data-ax-stage-ai-card": true, style: Object.assign(Object.assign({}, ui_1.card), { marginTop: 16 }) },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, padding: '12px 14px', borderBottom: `1px solid ${ui_1.C.line}`, flexWrap: 'wrap' } },
            React.createElement("b", { style: { fontSize: 14 } }, "\uC774 \uB2E8\uACC4 AI \uC77C"),
            React.createElement("span", { style: { fontSize: 12, color: ui_1.C.faint } },
                ai_1.BRANCH_LABEL[br],
                " \u00B7 ",
                (0, work_1.stagesOf)(p)[k].no,
                " \u00B7 ",
                ks.length,
                "\uAC1C",
                React.createElement(ui_1.Tip, { t: "\uB2E8\uACC4\uAC00 \uC5F4\uB9AC\uBA74 \uC790\uB3D9\uC73C\uB85C \uB3CC\uC544\uC694(\uC124\uC815 \u203A AI \u203A \uC790\uB3D9 \uC2E4\uD589)" })),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement(AiStatus, null)),
        ks.map(row),
        React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { padding: '10px 14px 4px', fontSize: 11 }) }, "\uD56D\uC0C1 \uB3C4\uB294 AI"),
        common.map(row)));
}

};
__m["src/webparts/huromAxPlm/model/auto.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainTasks = exports.CHAIN = exports.staleReviews = void 0;
exports.stageTasks = stageTasks;
exports.aiDocTasks = aiDocTasks;
exports.eventTasks = eventTasks;
exports.kstNow = kstNow;
exports.dailyTasks = dailyTasks;
exports.addJobs = addJobs;
// AX-PLM 1.0.135 — AI 자동 실행 (곽두팔 msg 10485780 '버튼 말고 저희가 알아서 돌리는 방식', 심준보 msg 10485749 '웬만한 거 다 자동화')
// 일이 생기면 바로 / 매일 아침(평일 08:30) / 금요일 주간 보고 / 단계가 열리면 그 단계 AI 일. 결과는 확인 대기 → 사람이 반영
// 사람만 하는 것: 관문 승인, 업체 결정, 샘플·시사출 합격 판정, 메일 발송 (메일은 초안까지)
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const ai_1 = require("src/webparts/huromAxPlm/model/ai.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const len = (x) => (x ? x.length : 0);
const sum = (xs) => xs.reduce((a, b) => a + b, 0);
// 단계가 열리면 — 그 단계의 AI 일 (입력이 꼭 필요한 것은 빼고, 데이터 연결 전인 것은 표시만)
function stageTasks(p, k) {
    const b = (0, ai_1.branchOf)((0, devtype_1.typeOf)(p));
    const s = (0, work_1.stagesOf)(p)[k];
    return (0, ai_1.kindsFor)(b, k + 1).filter(x => (!x.ask || x.autoInput) && !(x.id === 'j_back' && Object.keys(p.plan || {}).length))
        .map(x => ({ kind: x.id, why: `${s.no} ${s.short || s.name} 단계 열림`, input: x.autoInput }))
        .concat(aiDocTasks(p, k));
}
// 1.0.140 AI 담당 산출물 — 단계가 열리면(또는 AI에게 맡기면) 초안부터
function aiDocTasks(p, k, only) {
    const s = (0, work_1.stagesOf)(p)[k];
    return s.docs.filter(d => (only ? d.key === only : (p.docs[d.key] || {}).ai) && !(0, work_1.docOk)(p.docs[d.key]))
        .map(d => ({ kind: 'draft', why: `AI 담당 — ${d.label}`, input: d.label, doc: d.key, owner: p.owner }));
}
// 일이 생기면 바로 — 바뀐 것을 비교해서
function eventTasks(a, b) {
    const out = [];
    const pa = a;
    const pb = b;
    const br = (0, ai_1.branchOf)((0, devtype_1.typeOf)(b));
    const ka = (0, work_1.curIdx)(a);
    const kb = (0, work_1.curIdx)(b);
    if (kb > ka)
        stageTasks(b, kb).forEach(t => out.push(t));
    (0, work_1.stagesOf)(b).forEach((s, k) => {
        s.docs.forEach(d => { if (!(0, work_1.docOk)(a.docs[d.key]) && (b.docs[d.key] || {}).done)
            out.push({ kind: 'docchk', why: `산출물 올라옴 — ${d.label}`, input: d.label, owner: (b.docs[d.key] || {}).who || b.owner }); });
        if (s.gate && k === kb && (0, work_1.gateState)(b, s) === 'wait' && s.docs.every(d => (0, work_1.docOk)(b.docs[d.key])) && !s.docs.every(d => (0, work_1.docOk)(a.docs[d.key])))
            out.push({ kind: 'gate', why: `${s.gate.split(' ')[0]} 기준 채워짐 — 승인 요청 글 초안`, owner: b.owner });
    });
    if (JSON.stringify(pa.parts || []) !== JSON.stringify(pb.parts || [])) {
        if (br === 'juicer')
            out.push({ kind: 'j_food', why: 'BOM 바뀜 — 식품 접촉 재질 점검' }, { kind: 'j_bom', why: 'BOM 바뀜 — 원가 합산' });
        else
            out.push({ kind: 'g_cost', why: 'BOM 바뀜 — 목표 원가 다시' });
    }
    if (len(pb.ecrs) > len(pa.ecrs))
        out.push({ kind: 'ecr', why: '설계 변경 등록 — 영향 부품·도면' });
    const smp = (p) => sum((p.vendors || []).map(v => v.samples.length));
    const apr = (p) => sum((p.vendors || []).map(v => v.aprvs.length));
    if (smp(pb) > smp(pa))
        out.push(br === 'goods' ? { kind: 'g_sample', why: '샘플 결과 올라옴 — 평가 요약' } : { kind: 'j_iqc', why: '샘플 결과 올라옴 — 불량 경향' });
    if (apr(pb) > apr(pa))
        out.push({ kind: br === 'goods' ? 'g_aprv' : 'j_aprv', why: '승인원 올라옴 — 대조' });
    if (len(pb.releases) > len(pa.releases))
        out.push({ kind: 'oldrev', why: '업체에 도면 배포 — 옛 판 감지' });
    const tr = (p) => sum((p.molds || []).map(m => m.trials.length));
    if (tr(pb) > tr(pa))
        out.push({ kind: 'j_trial', why: '시사출 결과 올라옴 — 요약' }, { kind: 'j_t1', why: '시사출 결과 올라옴 — T1 점검' });
    return out;
}
// 매일 아침(평일 08:30 한국 시간) · 금요일 주간 보고 — 페이지가 열려 있거나 그 뒤 처음 열 때 밀린 것부터
function kstNow() {
    const t = new Date(Date.now() + 9 * 3600000);
    return { ymd: `${t.getUTCFullYear()}-${('0' + (t.getUTCMonth() + 1)).slice(-2)}-${('0' + t.getUTCDate()).slice(-2)}`, dow: t.getUTCDay(), hm: t.getUTCHours() * 100 + t.getUTCMinutes() };
}
function dailyTasks(p, hasWaits) {
    const m = Object.assign({}, (p.aiAuto || {}));
    const n = kstNow();
    const out = [];
    const work = n.dow >= 1 && n.dow <= 5 && n.hm >= 830;
    if (work && m.daily !== n.ymd) {
        out.push({ kind: 'delay', why: '매일 아침 08:30 — 일정 지연 예측' });
        if ((p.vendors || []).length)
            out.push({ kind: 'vendor', why: '매일 아침 — 업체 인증서 만료 점검' });
        if (hasWaits)
            out.push({ kind: 'chase', why: '매일 아침 — 회신 없는 협력사 독촉 메일 초안' });
        m.daily = n.ymd;
    }
    if (n.dow === 5 && n.hm >= 830 && m.weekly !== n.ymd) {
        out.push({ kind: 'weekly', why: '금요일 — 주간 보고' });
        m.weekly = n.ymd;
    }
    const k = (0, work_1.curIdx)(p);
    const sid = (0, work_1.stagesOf)(p)[k].id;
    if (!(m.st || {})[sid]) {
        stageTasks(p, k).forEach(t => out.push(t));
        m.st = Object.assign(Object.assign({}, (m.st || {})), { [sid]: n.ymd });
    }
    return { tasks: out, mark: m };
}
// 같은 일이 이미 줄 서 있거나 오늘 확인 대기면 또 만들지 않음
function addJobs(p, tasks, who, online) {
    const jobs = (p.aiJobs || []).slice();
    const td = (0, ax_1.today)();
    let n = 0;
    tasks.forEach(t => {
        if (jobs.some(j => j.kind === t.kind && (j.input || '') === (t.input || '') && (['queued', 'running'].indexOf((0, ai_1.jobState)(j)) >= 0 || (j.at.slice(0, 10) === td && ['review', 'nodata', 'offline'].indexOf((0, ai_1.jobState)(j)) >= 0))))
            return;
        const info = (0, ai_1.kindInfo)(t.kind);
        const job = { id: 'ai' + Date.now().toString(36) + (n++) + Math.floor(Math.random() * 1e4).toString(36), kind: t.kind, label: info.label, input: t.input, at: new Date().toISOString(), who: t.why ? 'AI 자동' : who, auto: t.why || undefined, from: t.from, owner: t.owner || p.owner, stage: info.stage ? info.stage - 1 : (0, work_1.curIdx)(p), doc: t.doc,
            state: info.nodata ? 'nodata' : online === false ? 'offline' : 'queued', note: info.nodata };
        jobs.push(job);
    });
    return n ? Object.assign(Object.assign({}, p), { aiJobs: jobs }) : p;
}
// 확인 대기가 2일 넘게 쌓인 것 — PM에게
const staleReviews = (p, now = Date.now()) => (p.aiJobs || []).filter(j => (0, ai_1.jobState)(j) === 'review' && now - new Date(j.doneAt || j.at).getTime() > 2 * 86400000);
exports.staleReviews = staleReviews;
// 1.0.148 일 넘겨주기 — AI 결과를 사람이 반영하면 이어지는 직무 AI 일 (실제로 이어진 일만 사무실에 서류로 보임)
exports.CHAIN = {
    ecr: [{ kind: 's_bomcost', why: '설계 변경 반영 → 원가 다시' }, { kind: 'delay', why: '설계 변경 반영 → 일정 영향' }],
    j_bom: [{ kind: 's_bomcost', why: 'BOM 초안 반영 → 원가 합계' }, { kind: 's_eol', why: 'BOM 초안 반영 → 전자부품 단종 확인' }],
    s_dfmea: [{ kind: 's_testlist', why: '설계 FMEA 반영 → 시험 항목' }],
    certlist: [{ kind: 's_certsch', why: '인증 목록 반영 → 인증 일정' }],
    j_trial: [{ kind: 's_moldsch', why: '시사출 요약 반영 → 금형 일정' }],
    g_quote: [{ kind: 's_intro', why: '견적 비교 반영 → 도입단가 품의' }],
    s_pp: [{ kind: 's_short', why: '생산 계획 반영 → 자재 부족' }, { kind: 's_shipplan', why: '생산 계획 반영 → 출하 계획 대조' }],
    s_packspec: [{ kind: 's_load', why: '포장 사양 반영 → 적재 계산' }],
    delay: [{ kind: 's_catchup', why: '지연 예측 반영 → 만회안' }],
};
const chainTasks = (j) => (exports.CHAIN[j.kind] || []).map(c => (Object.assign(Object.assign({}, c), { from: j.id })));
exports.chainTasks = chainTasks;

};
__m["src/webparts/huromAxPlm/components/Gantt.js"]=function(module,exports,require){"use strict";
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
exports.BAR = exports.SCALE_LABEL = exports.PPD = void 0;
exports.ScalePick = ScalePick;
exports.Legend = Legend;
exports.Gantt = Gantt;
const React = __importStar(require("react"));
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const sched_1 = require("src/webparts/huromAxPlm/model/sched.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
exports.PPD = { week: 16, month: 4.2, quarter: 1.6 };
exports.SCALE_LABEL = { week: '주', month: '월', quarter: '분기' };
exports.BAR = {
    done: { plan: '#12311C', act: '#2FA84F', text: '#B6F5A8', label: '완료' },
    doing: { plan: '#0F2416', act: '#4FD16B', text: '#04130A', label: '진행' },
    late: { plan: '#3B1515', act: '#EF4444', text: '#FECACA', label: '지연' },
    wait: { plan: '#1B1B1E', act: '#52525B', text: '#B0B0B6', label: '대기' },
};
function ScalePick(props) {
    return React.createElement("span", { "data-ax-scale": props.v, style: { display: 'inline-flex', border: `1px solid ${ui_1.C.line2}`, borderRadius: 6, overflow: 'hidden' } }, ['week', 'month', 'quarter'].map(s => React.createElement("button", { key: s, "data-ax-scale-btn": s, onClick: () => props.set(s), style: Object.assign(Object.assign({}, ui_1.btn), { border: 'none', borderRadius: 0, padding: '5px 11px', background: props.v === s ? ui_1.C.text : ui_1.C.card, color: props.v === s ? ui_1.C.inv : ui_1.C.sub }) }, exports.SCALE_LABEL[s])));
}
function Legend() {
    return React.createElement("div", { "data-ax-legend": true, style: { display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 12, color: ui_1.C.sub, alignItems: 'center' } },
        ['done', 'doing', 'late', 'wait'].map(s => React.createElement("span", { key: s, style: { display: 'inline-flex', gap: 5, alignItems: 'center' } },
            React.createElement("span", { style: { width: 14, height: 8, borderRadius: 2, background: exports.BAR[s].act } }),
            exports.BAR[s].label)),
        React.createElement("span", { style: { display: 'inline-flex', gap: 5, alignItems: 'center' } },
            React.createElement("span", { style: { width: 14, height: 8, borderRadius: 2, background: '#0F2416', border: '1px solid #2FA84F' } }),
            "\uACC4\uD68D"),
        React.createElement("span", { style: { display: 'inline-flex', gap: 5, alignItems: 'center' } },
            React.createElement("span", { style: { color: ui_1.C.text } }, "\u25C6"),
            "\uAD00\uBB38"),
        React.createElement("span", { style: { display: 'inline-flex', gap: 5, alignItems: 'center' } },
            React.createElement("span", { style: { width: 2, height: 12, background: ui_1.C.late } }),
            "\uC624\uB298"));
}
function ticks(a, b, scale) {
    const out = [];
    const t = new Date(a + 'T00:00:00');
    if (scale === 'week') {
        while (t.getDay() !== 1)
            t.setDate(t.getDate() + 1);
    }
    else
        t.setDate(1);
    const ymd = (x) => `${x.getFullYear()}-${('0' + (x.getMonth() + 1)).slice(-2)}-${('0' + x.getDate()).slice(-2)}`;
    for (let i = 0; i < 400; i++) {
        const s = ymd(t);
        if (s > b)
            break;
        if (scale === 'week') {
            out.push({ at: s, label: `${t.getMonth() + 1}/${t.getDate()}`, major: t.getDate() <= 7 });
            t.setDate(t.getDate() + 7);
        }
        else if (scale === 'month') {
            out.push({ at: s, label: t.getMonth() === 0 ? `${t.getFullYear()}.1` : `${t.getMonth() + 1}월`, major: t.getMonth() === 0 });
            t.setMonth(t.getMonth() + 1);
        }
        else {
            if (t.getMonth() % 3 === 0)
                out.push({ at: s, label: `${String(t.getFullYear()).slice(2)}년 ${t.getMonth() / 3 + 1}Q`, major: t.getMonth() === 0 });
            t.setMonth(t.getMonth() + 1);
        }
    }
    return out;
}
function Gantt(props) {
    const ppd = exports.PPD[props.scale];
    const now = (0, ax_1.today)();
    const all = [now];
    props.rows.forEach(r => { [r.plan, r.actual].concat((r.segs || []).map(s => s.span)).forEach(s => { if (s) {
        all.push(s.a);
        all.push(s.b);
    } }); (r.gems || []).forEach(g => all.push(g.date)); if (r.flag)
        all.push(r.flag.date); });
    all.sort();
    const pad = props.scale === 'week' ? 7 : props.scale === 'month' ? 20 : 45;
    const a0 = (0, sched_1.addDays)(props.minDate || all[0], -pad);
    const b0 = (0, sched_1.addDays)(props.maxDate || all[all.length - 1], pad);
    const W = Math.max(320, Math.round((0, sched_1.diffDays)(a0, b0) * ppd));
    const x = (d) => Math.round((0, sched_1.diffDays)(a0, d) * ppd);
    const LW = typeof window !== 'undefined' && window.innerWidth < 600 ? Math.min(props.labelW || 220, 128) : props.labelW || 220;
    const [drag, setDrag] = React.useState(undefined);
    const scroller = React.useRef(null);
    const dragRef = React.useRef(undefined);
    React.useEffect(() => { const el = scroller.current; if (el)
        el.scrollLeft = Math.max(0, x(now) - (el.clientWidth - LW) * 2 / 3); }, [props.scale]);
    const tk = ticks(a0, b0, props.scale);
    const rowH = (r) => (r.depth ? 30 : 38);
    const bar = (s, st, kind, extra = {}) => {
        const l = x(s.a);
        const w = Math.max(4, x((0, sched_1.addDays)(s.b, 1)) - l);
        return kind === 'plan'
            ? Object.assign({ position: 'absolute', left: l, width: w, top: '50%', height: 16, marginTop: -8, borderRadius: 4, background: exports.BAR[st].plan, border: `1px solid ${st === 'late' ? '#EF4444' : '#34343A'}` }, extra) : Object.assign({ position: 'absolute', left: l, width: w, top: '50%', height: 8, marginTop: -4, borderRadius: 3, background: exports.BAR[st].act }, extra);
    };
    return (React.createElement("div", { ref: scroller, "data-ax-gantt": props.name || '', "data-ax-scale-now": props.scale, style: { overflowX: 'auto', overflowY: 'hidden', position: 'relative', WebkitOverflowScrolling: 'touch', borderTop: `1px solid ${ui_1.C.line}` } },
        React.createElement("div", { style: { width: LW + W, position: 'relative' } },
            React.createElement("div", { style: { display: 'flex', position: 'sticky', top: 0, zIndex: 3, background: ui_1.C.card, borderBottom: `1px solid ${ui_1.C.line}`, height: 30 } },
                React.createElement("div", { style: { width: LW, flex: `0 0 ${LW}px`, position: 'sticky', left: 0, background: ui_1.C.card, zIndex: 4, borderRight: `1px solid ${ui_1.C.line}` } }),
                React.createElement("div", { style: { position: 'relative', width: W, flex: `0 0 ${W}px` } }, tk.map(t => React.createElement("span", { key: t.at, style: { position: 'absolute', left: x(t.at) + 4, top: 7, fontSize: 11.5, color: t.major ? ui_1.C.text : ui_1.C.faint, fontWeight: t.major ? 700 : 500, whiteSpace: 'nowrap' } }, t.label)))),
            React.createElement("div", { style: { position: 'relative' } },
                React.createElement("div", { style: { position: 'absolute', left: LW, top: 0, bottom: 0, width: W, pointerEvents: 'none' } },
                    tk.map(t => React.createElement("span", { key: t.at, style: { position: 'absolute', left: x(t.at), top: 0, bottom: 0, width: 1, background: t.major ? ui_1.C.line2 : ui_1.C.line } })),
                    React.createElement("span", { "data-ax-today": true, style: { position: 'absolute', left: x(now), top: 0, bottom: 0, width: 2, background: ui_1.C.late, zIndex: 2 } })),
                props.rows.map(r => {
                    const dx = drag && drag.id === r.id ? drag.dx : 0;
                    const dd = Math.round(dx / ppd);
                    const shift = (s) => (s && dd ? { a: s.a, b: (0, sched_1.addDays)(s.b, dd) } : s);
                    const st = r.state || 'wait';
                    return (React.createElement("div", Object.assign({ key: r.id, "data-ax-grow": r.id, "data-ax-grow-state": r.state || '' }, (r.data || {}), { style: { display: 'flex', height: rowH(r), borderBottom: `1px solid ${ui_1.C.line}`, background: r.strong ? ui_1.C.hover : 'transparent' } }),
                        React.createElement("div", { onClick: r.onLabel, title: r.title || r.label, style: { width: LW, flex: `0 0 ${LW}px`, position: 'sticky', left: 0, zIndex: 2, background: r.strong ? ui_1.C.hover : ui_1.C.card, borderRight: `1px solid ${ui_1.C.line}`, padding: `0 10px 0 ${10 + (r.depth || 0) * 14}px`, display: 'flex', alignItems: 'center', gap: 6, cursor: r.onLabel ? 'pointer' : 'default', minWidth: 0 } },
                            r.toggle && React.createElement("span", { style: { fontSize: 10, color: ui_1.C.faint, width: 10 } }, r.open ? '▼' : '▶'),
                            React.createElement("span", { style: { fontSize: r.depth ? 12.5 : 13, fontWeight: r.strong || !r.depth ? 700 : 500, color: r.depth ? ui_1.C.sub : ui_1.C.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 } }, r.label),
                            r.sub && React.createElement("span", { style: { fontSize: 11.5, color: st === 'late' ? ui_1.C.late : ui_1.C.faint, fontWeight: st === 'late' ? 700 : 500, whiteSpace: 'nowrap' } }, r.sub)),
                        React.createElement("div", { style: { position: 'relative', width: W, flex: `0 0 ${W}px` } },
                            r.plan && React.createElement("div", { "data-ax-bar-plan": r.id, title: `계획 ${r.plan.a} ~ ${shift(r.plan).b}${dd ? ` (${dd > 0 ? '+' : ''}${dd}일)` : ''}`, onPointerDown: r.drag ? (e => { try {
                                    e.currentTarget.setPointerCapture(e.pointerId);
                                }
                                catch (er) { /* 무시 */ } dragRef.current = { id: r.id, x0: e.clientX }; setDrag({ id: r.id, x0: e.clientX, dx: 0 }); }) : undefined, onPointerMove: r.drag ? (e => { const d0 = dragRef.current; if (d0 && d0.id === r.id)
                                    setDrag({ id: d0.id, x0: d0.x0, dx: e.clientX - d0.x0 }); }) : undefined, onPointerUp: r.drag ? (e => { const d0 = dragRef.current; dragRef.current = undefined; setDrag(undefined); if (d0 && d0.id === r.id) {
                                    const n = Math.round((e.clientX - d0.x0) / ppd);
                                    if (n)
                                        r.drag(n);
                                } }) : undefined, onPointerCancel: () => { dragRef.current = undefined; setDrag(undefined); }, style: bar(shift(r.plan), st, 'plan', { cursor: r.drag ? 'ew-resize' : 'default', touchAction: r.drag ? 'none' : 'auto', outline: dd ? `2px dashed ${ui_1.C.accent}` : 'none' }) }),
                            r.actual && React.createElement("div", { "data-ax-bar-act": r.id, style: bar(r.actual, st, 'act', { pointerEvents: 'none' }) }),
                            dd !== 0 && r.plan && React.createElement("span", { style: { position: 'absolute', left: x((0, sched_1.addDays)(r.plan.b, dd)) + 8, top: 2, fontSize: 11, fontWeight: 700, color: ui_1.C.accent, background: ui_1.C.card, padding: '0 4px', borderRadius: 3 } },
                                dd > 0 ? '+' : '',
                                dd,
                                "\uC77C \u00B7 \uB4A4 \uB2E8\uACC4 \uAC19\uC774"),
                            (r.segs || []).map((s, i) => React.createElement("div", { key: i, "data-ax-seg": s.state, "data-ax-hatch": s.hatch ? '1' : undefined, title: s.title, onClick: s.onClick, style: Object.assign({}, bar(s.span, s.state, 'plan', { background: s.hatch ? 'repeating-linear-gradient(135deg, #EDEDED 0 5px, #CFCFCF 5px 6px)' : s.state === 'wait' ? exports.BAR.wait.plan : exports.BAR[s.state].act, border: 'none', height: 18, marginTop: -9, cursor: s.onClick ? 'pointer' : 'default', overflow: 'hidden', color: s.hatch ? '#737373' : s.state === 'wait' ? exports.BAR.wait.text : '#fff', fontSize: 10.5, fontWeight: 700, lineHeight: '18px', padding: '0 4px', whiteSpace: 'nowrap', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.6)' })) }, s.label)),
                            (r.gems || []).map((g, i) => React.createElement("span", { key: i, "data-ax-gem": g.label, "data-ax-gem-state": g.state, title: `${g.label} ${g.date} · ${g.state === 'done' ? '승인됨' : g.state === 'req' ? '승인 대기' : g.state === 'late' ? '계획일 지남' : '예정'}`, style: { position: 'absolute', left: x(g.date) - 6, top: '50%', marginTop: -8, fontSize: 14, lineHeight: '16px', color: g.state === 'done' ? ui_1.C.ok : g.state === 'late' ? ui_1.C.late : g.state === 'req' ? ui_1.C.soon : ui_1.C.text, zIndex: 1, textShadow: '0 0 2px #fff', pointerEvents: 'none' } }, "\u25C6")),
                            r.flag && React.createElement("span", { "data-ax-flag": r.flag.date, title: r.flag.label, style: { position: 'absolute', left: x(r.flag.date), top: 4, bottom: 4, borderLeft: `2px solid ${ui_1.C.text}`, paddingLeft: 4, fontSize: 10.5, fontWeight: 700, color: ui_1.C.text, whiteSpace: 'nowrap', lineHeight: '12px' } },
                                "\u2691 ",
                                r.flag.label),
                            r.right)));
                })))));
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
__m["src/webparts/huromAxPlm/components/Vendors.js"]=function(module,exports,require){"use strict";
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
exports.VendorsView = VendorsView;
exports.ItemVendors = ItemVendors;
exports.VendorPanel = VendorPanel;
const React = __importStar(require("react"));
const Dash_1 = require("src/webparts/huromAxPlm/components/Dash.js");
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const item_1 = require("src/webparts/huromAxPlm/model/item.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
const asP = (p) => p;
const norm = (s) => s.replace(/\s/g, '').toLowerCase();
function groups(items) {
    const by = {};
    items.forEach(p0 => { const p = asP(p0); (p.vendors || []).forEach(v => { const k = norm(v.name); (by[k] = by[k] || { key: k, name: v.name, rows: [] }).rows.push({ p, v }); }); });
    return Object.keys(by).map(k => by[k]).sort((a, b) => (a.name < b.name ? -1 : 1));
}
const SAMPLE_COL = { 합격: ui_1.C.ok, 보완: ui_1.C.soon, 불합격: ui_1.C.late };
const APRV_COL = { 승인: ui_1.C.ok, 제출: ui_1.C.soon, 반려: ui_1.C.late };
// 위쪽 메뉴 「협력사」 — 업체 목록 + 오른쪽 패널
function VendorsView(props) {
    const gs = groups(props.items);
    const [sel, setSel] = React.useState(undefined);
    const [row, setRow] = React.useState(0);
    const g = gs.filter(x => x.key === sel)[0];
    const th = { padding: '10px 12px', fontSize: 12, fontWeight: 600, color: ui_1.C.faint, textAlign: 'left', whiteSpace: 'nowrap', borderBottom: `1px solid ${ui_1.C.line}` };
    const td = { padding: '11px 12px', borderBottom: `1px solid ${ui_1.C.line}`, whiteSpace: 'nowrap', fontSize: 13 };
    const r = g && g.rows[Math.min(row, g.rows.length - 1)];
    const aiPid = r ? r.p.id : (props.items.filter(x => (x.vendors || []).length)[0] || props.items[0] || { id: '' }).id;
    return (React.createElement("div", { "data-ax-vendors": true, className: "axw-main" },
        React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { overflowX: 'auto', minWidth: 0 }) },
            React.createElement("div", { style: { padding: '10px 14px', borderBottom: `1px solid ${ui_1.C.line}`, display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' } },
                React.createElement("span", { style: { order: 9, marginLeft: 'auto' } },
                    React.createElement(Dash_1.AiButton, { pid: aiPid, kinds: ['vendor', 'chase'], small: true })),
                React.createElement("span", { style: { fontWeight: 700 } }, "\uD611\uB825\uC0AC"),
                React.createElement("span", { style: { fontSize: 12.5, color: ui_1.C.faint } },
                    "\uC5C5\uCCB4 ",
                    gs.length,
                    "\uACF3 \u00B7 \uC5C5\uCCB4 \uCD94\uAC00\uB294 \uD488\uBAA9 \uD654\uBA74 \u300C\uD611\uB825\uC0AC\u300D \uD0ED\uC5D0\uC11C")),
            React.createElement("table", { style: { width: '100%', borderCollapse: 'collapse', minWidth: 720 } },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { style: th }, "\uC5C5\uCCB4"),
                        React.createElement("th", { style: th }, "\uC5ED\uD560"),
                        React.createElement("th", { style: th }, "\uB098\uB77C"),
                        React.createElement("th", { style: th }, "\uD488\uBAA9"),
                        React.createElement("th", { style: th }, "\uB9C8\uC9C0\uB9C9 \uC0D8\uD50C"),
                        React.createElement("th", { style: th }, "\uC2B9\uC778\uC6D0"),
                        React.createElement("th", { style: th }, "\uD3C9\uAC00"))),
                React.createElement("tbody", null, gs.map(x => {
                    const vs = x.rows.map(y => y.v);
                    const sm = vs.map(item_1.lastSample).filter(Boolean).slice(-1)[0];
                    const ap = vs.map(item_1.lastAprv).filter(Boolean).slice(-1)[0];
                    const ev = vs.reduce((a, v) => a.concat(v.evals), []);
                    const sc = ev.length ? Math.round(ev.reduce((n, e) => n + e.score, 0) / ev.length * 10) / 10 : undefined;
                    return (React.createElement("tr", { key: x.key, "data-ax-vendor-row": x.name, onClick: () => { setSel(x.key); setRow(0); }, style: { cursor: 'pointer', background: sel === x.key ? ui_1.C.accentBg : undefined } },
                        React.createElement("td", { style: Object.assign(Object.assign({}, td), { fontWeight: 700 }) }, x.name),
                        React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub }) }, vs.map(v => v.role).filter((v, i, a) => a.indexOf(v) === i).join(', ')),
                        React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub }) }, vs[0].country || '—'),
                        React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub }) }, x.rows.map(y => y.p.itemCode || y.p.name).join(', ')),
                        React.createElement("td", { style: td }, sm ? React.createElement("span", { style: { color: SAMPLE_COL[sm.result], fontWeight: 600 } },
                            sm.round,
                            " ",
                            sm.result) : React.createElement("span", { style: { color: ui_1.C.faint } }, "\u2014")),
                        React.createElement("td", { style: td }, ap ? React.createElement("span", { style: { color: APRV_COL[ap.status], fontWeight: 600 } },
                            "Rev ",
                            ap.rev,
                            " ",
                            ap.status) : React.createElement("span", { style: { color: ui_1.C.faint } }, "\u2014")),
                        React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub }) }, sc !== undefined ? `${sc} / 5` : '—')));
                }))),
            !gs.length && React.createElement("div", { style: { padding: 18, fontSize: 13, color: ui_1.C.faint } }, "\uB4F1\uB85D\uB41C \uD611\uB825\uC0AC\uAC00 \uC5C6\uC5B4\uC694.")),
        React.createElement("div", { className: 'axw-panel' + (r ? ' sheet' : ''), style: ui_1.card }, r ? React.createElement(React.Fragment, null,
            g && g.rows.length > 1 && React.createElement("div", { style: { display: 'flex', gap: 6, flexWrap: 'wrap', padding: '10px 16px 0' } }, g.rows.map((y, i) => React.createElement("button", { key: i, "data-ax-vendor-item": y.p.id, onClick: () => setRow(i), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '3px 9px', background: i === row ? ui_1.C.text : ui_1.C.card, color: i === row ? ui_1.C.inv : ui_1.C.sub }) }, y.p.itemCode || y.p.name))),
            React.createElement(VendorPanel, { key: r.p.id + r.v.id, p: r.p, id: r.v.id, who: props.who, update: fn => props.update(r.p.id, fn), onClose: () => setSel(undefined), onItem: () => props.onItem(r.p.id) })) : React.createElement("div", { style: { padding: 16, fontSize: 13, color: ui_1.C.faint } },
            "\uC5C5\uCCB4\uB97C \uACE0\uB974\uC138\uC694",
            React.createElement(ui_1.Tip, { t: "\uC5C5\uCCB4\uB97C \uB204\uB974\uBA74 \uC815\uBCF4\u00B7\uC778\uC99D\uC11C\u00B7\uC0D8\uD50C \uC774\uB825\u00B7\uC2B9\uC778\uC6D0\u00B7\uD3C9\uAC00\uAC00 \uC5EC\uAE30 \uB098\uC640\uC694." })))));
}
// 품목 화면 안 「협력사」 탭 목록
function ItemVendors(props) {
    const vs = props.p.vendors || [];
    return (React.createElement("div", { "data-ax-item-vendors": true, style: ui_1.card },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: `1px solid ${ui_1.C.line}` } },
            React.createElement("span", { style: { fontWeight: 700 } }, "\uD611\uB825\uC0AC"),
            React.createElement("span", { style: { fontSize: 12.5, color: ui_1.C.faint } }, "\uC5C5\uCCB4 \uC815\uBCF4 \u00B7 \uC778\uC99D\uC11C \u00B7 \uC0D8\uD50C \uC774\uB825 \u00B7 \uC2B9\uC778\uC6D0 \u00B7 \uD3C9\uAC00"),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement("button", { "data-ax-add": true, onClick: () => props.setPick('new'), style: ui_1.btn }, "+ \uD611\uB825\uC0AC \uCD94\uAC00")),
        !vs.length && React.createElement("div", { style: { padding: '18px 14px', fontSize: 13, color: ui_1.C.faint } }, "\uB4F1\uB85D\uB41C \uD611\uB825\uC0AC\uAC00 \uC5C6\uC5B4\uC694."),
        vs.map(v => {
            const sm = (0, item_1.lastSample)(v);
            const ap = (0, item_1.lastAprv)(v);
            const sc = (0, item_1.avgScore)(v);
            return (React.createElement("div", { key: v.id, className: 'axw-row' + (props.pick === v.id ? ' on' : ''), "data-ax-ivendor": v.name, onClick: () => props.setPick(v.id) },
                React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 600 } },
                    v.name,
                    React.createElement("span", { style: { fontWeight: 400, fontSize: 12.5, color: ui_1.C.faint, marginLeft: 8 } },
                        v.role,
                        v.country ? ` · ${v.country}` : '')),
                React.createElement("span", { className: "axw-hide-sm", style: { width: 90, fontSize: 12.5, color: sm ? SAMPLE_COL[sm.result] : ui_1.C.faint, fontWeight: 600 } }, sm ? `${sm.round} ${sm.result}` : '샘플 —'),
                React.createElement("span", { style: { width: 96, fontSize: 12.5, color: ap ? APRV_COL[ap.status] : ui_1.C.faint, fontWeight: 600, textAlign: 'right' } }, ap ? `승인원 ${ap.status}` : '승인원 —'),
                React.createElement("span", { className: "axw-hide-sm", style: { width: 44, fontSize: 12.5, color: ui_1.C.sub, textAlign: 'right' } }, sc !== undefined ? sc : '—')));
        })));
}
const Sec = (props) => React.createElement("div", { style: { borderTop: `1px solid ${ui_1.C.line}`, paddingTop: 10 } },
    React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { marginBottom: 6 }) }, props.t),
    props.children);
const Line = (props) => React.createElement("div", { style: { display: 'flex', gap: 8, alignItems: 'center', fontSize: 12.5, color: ui_1.C.sub, padding: '3px 0' } }, props.children);
// 업체 하나 — 새로 넣기 / 정보·인증서·샘플·승인원·평가 쌓기 (지우지 않음)
function VendorPanel(props) {
    const { p, who } = props;
    const v = (p.vendors || []).filter(x => x.id === props.id)[0];
    const [nv, setNv] = React.useState({ name: '', role: (0, item_1.roleFor)(p), country: '', contact: '', unit: '', moq: '' });
    const [sm, setSm] = React.useState({ result: '합격', note: '' });
    const [ap, setAp] = React.useState({ title: '승인원', rev: '01', link: '' });
    const [ev, setEv] = React.useState({ score: '4', note: '' });
    const [vc, setVc] = React.useState({ name: '', until: '' });
    const isApprover = !p.approver || p.approver.replace(/\s/g, '') === who.replace(/\s/g, '');
    const put = (fn, what) => props.update(x0 => { const x = asP(x0); return Object.assign(Object.assign({}, x), { vendors: (x.vendors || []).map(y => (y.id === props.id ? fn(y) : y)), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'edit', what: `협력사 ${v.name} — ${what}` }]) }); });
    if (!v) {
        const ok = !!nv.name.trim();
        const add = () => {
            const x = { id: (0, item_1.uid)('v'), name: nv.name.trim(), role: nv.role, country: nv.country.trim() || undefined, contact: nv.contact.trim() || undefined, unit: nv.unit.trim() || undefined, moq: Number(nv.moq) || undefined, vcerts: [], samples: [], aprvs: [], evals: [] };
            props.update(y0 => { const y = asP(y0); return Object.assign(Object.assign({}, y), { vendors: (y.vendors || []).concat([x]), log: y.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'edit', what: `협력사 ${x.name} (${x.role}) 추가` }]) }); });
            props.onClose();
        };
        const f = (k, l, ph) => React.createElement(ui_1.Field, { l: l },
            React.createElement("input", { "data-ax-vendor-f": k, value: nv[k], placeholder: ph, onChange: e => setNv(Object.assign(Object.assign({}, nv), { [k]: e.target.value })), style: ui_1.inp }));
        return (React.createElement("div", { "data-ax-vendor-panel": "new" },
            React.createElement(ui_1.PanelHead, { title: "\uD611\uB825\uC0AC \uCD94\uAC00", sub: `${p.itemCode || p.name}에 붙어요`, onClose: props.onClose }),
            React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 } },
                f('name', '업체 이름'),
                React.createElement(ui_1.Field, { l: "\uC5ED\uD560" },
                    React.createElement("select", { "data-ax-vendor-f": "role", value: nv.role, onChange: e => setNv(Object.assign(Object.assign({}, nv), { role: e.target.value })), style: ui_1.inp }, item_1.VENDOR_ROLES.map(r => React.createElement("option", { key: r }, r)))),
                React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } },
                    f('country', '나라', '중국'),
                    f('contact', '담당·연락처')),
                React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } },
                    f('unit', '단가', 'USD 18.40'),
                    f('moq', 'MOQ', '1000')),
                React.createElement("button", { "data-ax-vendor-add": true, disabled: !ok, onClick: add, style: Object.assign(Object.assign({}, ui_1.primary), { opacity: ok ? 1 : 0.4 }) }, "\uCD94\uAC00"))));
    }
    const vcs = v.vcerts || [];
    const t = (0, ax_1.today)();
    return (React.createElement("div", { "data-ax-vendor-panel": v.name },
        React.createElement(ui_1.PanelHead, { title: v.name, sub: `${v.role}${v.country ? ` · ${v.country}` : ''} · ${p.itemCode || ''} ${p.name}`, onClose: props.onClose }),
        React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 } },
            React.createElement("div", { style: { display: 'flex', gap: 8, alignItems: 'center', fontSize: 12.5, color: ui_1.C.sub, flexWrap: 'wrap' } },
                React.createElement(ui_1.TypeTag, { p: p }),
                v.contact || '담당 —',
                " \u00B7 \uB2E8\uAC00 ",
                v.unit || '—',
                " \u00B7 MOQ ",
                v.moq ? v.moq.toLocaleString() : '—',
                props.onItem && React.createElement(React.Fragment, null,
                    React.createElement("span", { style: { flex: 1 } }),
                    React.createElement("button", { "data-ax-vendor-to-item": true, onClick: props.onItem, style: Object.assign(Object.assign({}, ui_1.btn), { padding: '3px 9px' }) }, "\uD488\uBAA9 \uBCF4\uAE30"))),
            React.createElement(Sec, { t: `업체 인증서·성적서 ${vcs.filter(c => c.ok).length}/${vcs.length} 확인` },
                vcs.map((c, i) => React.createElement(Line, { key: i },
                    React.createElement("input", { type: "checkbox", "data-ax-vcert": c.name, checked: !!c.ok, onChange: () => put(y => (Object.assign(Object.assign({}, y), { vcerts: (y.vcerts || []).map((z, j) => (j === i ? Object.assign(Object.assign({}, z), { ok: !z.ok }) : z)) })), `인증서 ${c.name} ${c.ok ? '확인 취소' : '확인'}`) }),
                    React.createElement("span", { style: { flex: 1 } }, c.name),
                    React.createElement("span", { style: { color: c.until && c.until < t ? ui_1.C.late : ui_1.C.faint } }, c.until ? `~${(0, ui_1.md)(c.until)}` : ''))),
                React.createElement("div", { style: { display: 'flex', gap: 6, marginTop: 4 } },
                    React.createElement("input", { "data-ax-vcert-name": true, placeholder: "\uC778\uC99D\uC11C (ISO 9001, LFGB \u2026)", value: vc.name, onChange: e => setVc(Object.assign(Object.assign({}, vc), { name: e.target.value })), style: ui_1.inp }),
                    React.createElement("input", { type: "date", value: vc.until, onChange: e => setVc(Object.assign(Object.assign({}, vc), { until: e.target.value })), style: Object.assign(Object.assign({}, ui_1.inp), { width: 140, flex: '0 0 140px' }) }),
                    React.createElement("button", { "data-ax-vcert-add": true, disabled: !vc.name.trim(), onClick: () => { put(y => (Object.assign(Object.assign({}, y), { vcerts: (y.vcerts || []).concat([{ name: vc.name.trim(), until: vc.until || undefined }]) })), `인증서 ${vc.name.trim()} 추가`); setVc({ name: '', until: '' }); }, style: Object.assign(Object.assign({}, ui_1.btn), { opacity: vc.name.trim() ? 1 : 0.4 }) }, "\uCD94\uAC00"))),
            React.createElement(Sec, { t: `샘플 이력 ${v.samples.length}차` },
                v.samples.map(x => React.createElement(Line, { key: x.id },
                    React.createElement(ui_1.Dot, { s: x.result === '합격' ? 'done' : x.result === '보완' ? 'soon' : 'late', size: 7 }),
                    React.createElement("b", { style: { color: ui_1.C.text, width: 34 } }, x.round),
                    React.createElement("span", { style: { flex: 1 } },
                        x.result,
                        x.note ? ` — ${x.note}` : ''),
                    React.createElement("span", { style: { color: ui_1.C.faint } },
                        x.who,
                        " ",
                        (0, ui_1.md)(x.at.slice(0, 10))))),
                React.createElement("div", { style: { display: 'flex', gap: 6, marginTop: 4 } },
                    React.createElement("select", { "data-ax-sample-result": true, value: sm.result, onChange: e => setSm(Object.assign(Object.assign({}, sm), { result: e.target.value })), style: Object.assign(Object.assign({}, ui_1.inp), { width: 84, flex: '0 0 84px' }) }, ['합격', '보완', '불합격'].map(r => React.createElement("option", { key: r }, r))),
                    React.createElement("input", { "data-ax-sample-note": true, placeholder: `${v.samples.length + 1}차 평가 메모`, value: sm.note, onChange: e => setSm(Object.assign(Object.assign({}, sm), { note: e.target.value })), style: ui_1.inp }),
                    React.createElement("button", { "data-ax-sample-add": true, onClick: () => { const x = { id: (0, item_1.uid)('s'), round: `${v.samples.length + 1}차`, at: (0, ui_1.nowIso)(), result: sm.result, note: sm.note.trim() || undefined, who }; put(y => (Object.assign(Object.assign({}, y), { samples: y.samples.concat([x]) })), `${x.round} 샘플 ${x.result}`); setSm({ result: '합격', note: '' }); }, style: ui_1.btn }, "\uAE30\uB85D"))),
            React.createElement(Sec, { t: "\uC2B9\uC778\uC6D0" },
                !(0, item_1.sampleOk)(v) && React.createElement("div", { "data-ax-aprv-lock": true, style: { fontSize: 12, color: ui_1.C.faint, marginBottom: 4 } },
                    "\uC0D8\uD50C \uD569\uACA9 \uC804",
                    React.createElement(ui_1.Tip, { t: "\uB9C8\uC9C0\uB9C9 \uC0D8\uD50C\uC774 \uD569\uACA9\uD574\uC57C \uC2B9\uC778\uC6D0\uC744 \uBC1B\uACE0 \uC2B9\uC778\uD560 \uC218 \uC788\uC5B4\uC694." })),
                v.aprvs.map(x => React.createElement(Line, { key: x.id },
                    React.createElement(ui_1.Dot, { s: x.status === '승인' ? 'done' : x.status === '제출' ? 'wait' : 'late', size: 7 }),
                    React.createElement("span", { style: { flex: 1, color: ui_1.C.text } },
                        x.title,
                        " Rev ",
                        x.rev,
                        " \u00B7 ",
                        React.createElement("b", { style: { color: APRV_COL[x.status] } }, x.status),
                        x.note ? ` — ${x.note}` : ''),
                    x.link && React.createElement("a", { href: x.link, target: "_blank", rel: "noopener noreferrer", style: { color: ui_1.C.accent } }, "\uC5F4\uAE30"),
                    x.status === '제출' && React.createElement(React.Fragment, null,
                        React.createElement("button", { "data-ax-aprv-ok": true, disabled: !isApprover || !(0, item_1.sampleOk)(v), title: isApprover ? '' : `승인자(${p.approver})만`, onClick: () => put(y => (Object.assign(Object.assign({}, y), { aprvs: y.aprvs.map(z => (z.id === x.id ? Object.assign(Object.assign({}, z), { status: '승인', note: `${who} 승인 ${(0, ax_1.fmt)((0, ui_1.nowIso)())}` }) : z)) })), `${x.title} Rev ${x.rev} 승인`), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '2px 8px', opacity: isApprover && (0, item_1.sampleOk)(v) ? 1 : 0.4 }) }, "\uC2B9\uC778"),
                        React.createElement("button", { "data-ax-aprv-no": true, disabled: !isApprover, onClick: () => put(y => (Object.assign(Object.assign({}, y), { aprvs: y.aprvs.map(z => (z.id === x.id ? Object.assign(Object.assign({}, z), { status: '반려', note: `${who} 반려 ${(0, ax_1.fmt)((0, ui_1.nowIso)())}` }) : z)) })), `${x.title} Rev ${x.rev} 반려`), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '2px 8px', color: ui_1.C.late, opacity: isApprover ? 1 : 0.4 }) }, "\uBC18\uB824")))),
                React.createElement("div", { style: { display: 'flex', gap: 6, marginTop: 4 } },
                    React.createElement("input", { "data-ax-aprv-title": true, value: ap.title, onChange: e => setAp(Object.assign(Object.assign({}, ap), { title: e.target.value })), style: ui_1.inp }),
                    React.createElement("input", { "data-ax-aprv-rev": true, value: ap.rev, onChange: e => setAp(Object.assign(Object.assign({}, ap), { rev: e.target.value })), style: Object.assign(Object.assign({}, ui_1.inp), { width: 64, flex: '0 0 64px' }) }),
                    React.createElement("input", { "data-ax-aprv-link": true, placeholder: "\uB9C1\uD06C", value: ap.link, onChange: e => setAp(Object.assign(Object.assign({}, ap), { link: e.target.value })), style: ui_1.inp }),
                    React.createElement("button", { "data-ax-aprv-add": true, disabled: !ap.title.trim() || !(0, item_1.sampleOk)(v), onClick: () => { const x = { id: (0, item_1.uid)('a'), title: ap.title.trim(), rev: ap.rev.trim() || '01', at: (0, ui_1.nowIso)(), status: '제출', who, link: ap.link.trim() || undefined }; put(y => (Object.assign(Object.assign({}, y), { aprvs: y.aprvs.concat([x]) })), `${x.title} Rev ${x.rev} 제출받음`); setAp({ title: '승인원', rev: ('0' + (Number(ap.rev) + 1)).slice(-2), link: '' }); }, style: Object.assign(Object.assign({}, ui_1.btn), { opacity: ap.title.trim() && (0, item_1.sampleOk)(v) ? 1 : 0.4 }) }, "\uC81C\uCD9C\uBC1B\uC74C"))),
            React.createElement(Sec, { t: `평가 ${(0, item_1.avgScore)(v) !== undefined ? `평균 ${(0, item_1.avgScore)(v)} / 5` : ''}` },
                v.evals.map((x, i) => React.createElement(Line, { key: i },
                    React.createElement("b", { style: { color: ui_1.C.text, width: 24 } }, x.score),
                    React.createElement("span", { style: { flex: 1 } }, x.note || ''),
                    React.createElement("span", { style: { color: ui_1.C.faint } },
                        x.who,
                        " ",
                        (0, ui_1.md)(x.at.slice(0, 10))))),
                React.createElement("div", { style: { display: 'flex', gap: 6, marginTop: 4 } },
                    React.createElement("select", { "data-ax-eval-score": true, value: ev.score, onChange: e => setEv(Object.assign(Object.assign({}, ev), { score: e.target.value })), style: Object.assign(Object.assign({}, ui_1.inp), { width: 64, flex: '0 0 64px' }) }, ['5', '4', '3', '2', '1'].map(n => React.createElement("option", { key: n }, n))),
                    React.createElement("input", { "data-ax-eval-note": true, placeholder: "\uD488\uC9C8\u00B7\uB0A9\uAE30\u00B7\uB300\uC751", value: ev.note, onChange: e => setEv(Object.assign(Object.assign({}, ev), { note: e.target.value })), style: ui_1.inp }),
                    React.createElement("button", { "data-ax-eval-add": true, onClick: () => { put(y => (Object.assign(Object.assign({}, y), { evals: y.evals.concat([{ at: (0, ui_1.nowIso)(), who, score: Number(ev.score), note: ev.note.trim() || undefined }]) })), `평가 ${ev.score}점`); setEv({ score: '4', note: '' }); }, style: ui_1.btn }, "\uAE30\uB85D"))))));
}

};
__m["src/webparts/huromAxPlm/components/Overview.js"]=function(module,exports,require){"use strict";
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
exports.OV_CSS = void 0;
exports.Overview = Overview;
const React = __importStar(require("react"));
// AX-PLM 1.0.144 아이템 「개요」 다시 짬 (심준보 2026-11-21 #ax-plm msg 11182395 '업무컨베이어 없애고 AI 구분 더 늘려줘' · 11185388 '개요 부족, 진짜 AI 동작하는지, 보기 불편한지' · 11186923 'AI 특화 PLM',
//   곽두팔 msg 11182566·11182987·11185814): 맨 위 한 줄 상태 → 내가 할 일 → 요약 카드 4개(일정·BOM·설계 변경·이슈) → AI 팀원 16명(접힘, 실제로 한 일만) · AI 연결 상태
//   1.0.141 컨베이어·책상 연출(AiFloor)은 뺌 — 움직임은 AI가 실제로 돌고 있을 때만
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const ai_1 = require("src/webparts/huromAxPlm/model/ai.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const ai_2 = require("src/webparts/huromAxPlm/model/ai.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const team_1 = require("src/webparts/huromAxPlm/model/team.js");
const Today_1 = require("src/webparts/huromAxPlm/components/Today.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
const Office_1 = require("src/webparts/huromAxPlm/components/Office.js"); // 1.0.148
const Pull_1 = require("src/webparts/huromAxPlm/components/Pull.js");
const K = { card: '#141416', line: '#2C2C31', text: '#F4F4F5', sub: '#CFCFD4', faint: '#9C9CA3', ok: '#4FD16B', okBg: 'rgba(79,209,107,.14)', soon: '#FBBF24', soonBg: 'rgba(251,191,36,.14)', late: '#F87171', lateBg: 'rgba(248,113,113,.14)', ink: '#04130A' };
exports.OV_CSS = Office_1.OFFICE_CSS + `
.axo{font-size:15px;line-height:1.5;color:${K.text}}
.axo-card{background:${K.card};border:1px solid ${K.line};border-radius:14px;padding:16px 18px}
.axo-h{font-size:16px;font-weight:800;margin:0 0 8px;display:flex;align-items:center;gap:8px}
.axo-sub{font-size:14px;color:${K.faint}}
.axo-status{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-bottom:14px}
.axo-st{background:${K.card};border:1px solid ${K.line};border-radius:14px;padding:12px 14px;min-width:0}
.axo-st small{display:block;font-size:13px;color:${K.faint};font-weight:700}
.axo-st b{display:block;font-size:18px;font-weight:800;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.axo-st span{font-size:14px;color:${K.sub}}
.axo-row{display:flex;align-items:center;gap:10px;padding:10px 0;border-top:1px solid ${K.line};font-size:15px}
.axo-row:first-of-type{border-top:none}
.axo-pill{font-size:13px;font-weight:800;border-radius:999px;padding:2px 9px;white-space:nowrap;flex:0 0 auto}
.axo-b{border:none;border-radius:999px;padding:6px 13px;font-size:14px;font-weight:800;cursor:pointer;white-space:nowrap;font-family:inherit}
.axo-b.g{background:${K.ok};color:${K.ink}}.axo-b.q{background:#2C2C31;color:${K.sub}}
.axo-four{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:14px 0}
.axo-four .axo-card{cursor:pointer}.axo-four .axo-card:hover{border-color:#4A4A52}
.axo-big{font-size:26px;font-weight:800;letter-spacing:-.02em}
.axo-li{font-size:14px;color:${K.sub};padding:3px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.axo-team{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:12px}
.axo-mate{background:#19191C;border:1px solid ${K.line};border-radius:12px;padding:11px 12px;min-width:0}
.axo-mate.off{opacity:.35}
.axo-mate.run{border-color:rgba(79,209,107,.55)}.axo-mate.review{border-color:rgba(251,191,36,.55)}
.axo-mate .n{font-weight:800;font-size:15px;display:flex;align-items:center;gap:6px}
.axo-mate .d{font-size:13px;color:${K.faint};margin-top:2px}
.axo-mate .w{font-size:14px;color:${K.sub};margin-top:6px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.axo-dot{width:8px;height:8px;border-radius:50%;flex:0 0 auto;display:inline-block}
.axo-dot.run{background:${K.ok};animation:axoBlink 1.2s infinite}.axo-dot.review{background:${K.soon}}.axo-dot.idle{background:#55555C}.axo-dot.off{background:#3A3A40}
.axo-ai{display:flex;align-items:center;gap:10px;border-radius:12px;padding:10px 14px;margin-bottom:14px;font-size:15px;font-weight:700}
.axo-ai.on{background:${K.okBg};color:${K.ok}}.axo-ai.off{background:${K.lateBg};color:${K.late}}.axo-ai.wait{background:#1C1C20;color:${K.faint}}
@keyframes axoBlink{50%{opacity:.35}}
@media (max-width:900px){.axo-status,.axo-four{grid-template-columns:repeat(2,minmax(0,1fr))}.axo-team{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:480px){.axo-team{grid-template-columns:minmax(0,1fr)}.axo-st b{font-size:16px}}
@media (prefers-reduced-motion:reduce){.axo *{animation:none !important}}
`;
const tone = (n) => (n >= 7 ? K.late : n > 0 ? K.soon : K.ok);
const cut = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s);
function Overview(props) {
    const { p, act, nav, who } = props;
    const px = p;
    const st = (0, work_1.stagesOf)(p);
    const ck = (0, work_1.curIdx)(p);
    const s = st[ck];
    const [ai, setAi] = React.useState('wait');
    const [pull, setPull] = React.useState(false);
    React.useEffect(() => { let live = true; (0, ai_1.aiOnline)().then(ok => { if (live)
        setAi(ok ? 'on' : 'off'); }, () => { if (live)
        setAi('off'); }); return () => { live = false; }; }, []);
    const now = (0, ax_1.today)();
    const lt = (0, work_1.projLate)(p);
    // 다음 관문
    let gk = -1;
    for (let i = ck; i < st.length; i++)
        if (st[i].gate && (0, work_1.gateState)(p, st[i]) !== 'approved') {
            gk = i;
            break;
        }
    const gs = gk >= 0 ? st[gk] : undefined;
    const gst = gs ? (0, work_1.gateState)(p, gs) : 'none';
    const held = gs ? (0, work_1.isHeld)(p, gs.gate) : false;
    const gWord = !gs ? '모두 승인됨' : held ? '보류' : gst === 'requested' ? '승인 대기' : gst === 'rejected' ? '반려됨' : '아직 요청 전';
    const gCol = !gs ? K.ok : held || gst === 'rejected' ? K.late : gst === 'requested' ? K.soon : K.faint;
    // 내가 할 일 (사람 확인 대기)
    const me = (n) => !n || n.replace(/\s/g, '') === who.replace(/\s/g, '');
    const reviews = (px.aiJobs || []).filter(j => (0, ai_1.jobState)(j) === 'review');
    const gatesForMe = st.map((x, k) => ({ x, k })).filter(o => o.x.gate && (0, work_1.gateState)(p, o.x) === 'requested' && !(0, work_1.isHeld)(p, o.x.gate) && me(p.approver));
    const ecrForMe = (px.ecrs || []).filter(e => e.status === '검토' && me(p.approver));
    const human = s.docs.filter(d => { const x = p.docs[d.key] || {}; return !(0, work_1.docOk)(x) && !x.ai; });
    const myCount = reviews.length + gatesForMe.length + ecrForMe.length + human.length;
    // 요약 카드
    const dues = [];
    st.forEach((x, k) => { if (k >= ck) {
        x.docs.forEach(d => { const v = p.docs[d.key] || {}; if (v.due && !(0, work_1.docOk)(v))
            dues.push({ date: v.due, label: d.label }); });
        const pl = (p.plan || {})[x.id];
        if (pl && !(p.actual || {})[x.id])
            dues.push({ date: pl, label: `${x.no} ${x.short || x.name} 끝${x.gate ? ` · ${x.gate.split(' ')[0]}` : ''}` });
    } });
    dues.sort((a, b) => a.date.localeCompare(b.date));
    const parts = px.parts || [];
    const unfixed = parts.filter(x => !x.fixed).length;
    const ecrs = px.ecrs || [];
    const ecrOpen = ecrs.filter(e => e.status === '요청' || e.status === '검토' || e.status === '승인');
    const ecrLast = ecrs.slice(-1)[0];
    const issues = (p.issues || []).filter(i => !i.done);
    const b = (0, ai_2.branchOf)((0, devtype_1.typeOf)(p));
    return (React.createElement("div", { className: "axo", "data-axo": true },
        React.createElement("div", { "data-axo-ai": ai, className: `axo-ai ${ai}` },
            React.createElement("span", { className: "axo-dot", style: { background: 'currentColor' } }),
            ai === 'on' ? 'AI 연결됨' : ai === 'off' ? 'AI 꺼짐' : 'AI 연결 확인 중…',
            ai !== 'wait' && React.createElement(ui_1.Tip, { t: ai === 'on' ? '「AI에게 맡기기」로 맡기는 일이 실제 AI(Claude)로 돌아가요.' : '중계 PC가 꺼져 있거나 연결이 끊겼어요. 지금은 AI에게 일을 맡길 수 없어요.' })),
        React.createElement(Office_1.Office, { p: p, online: ai, act: act }),
        React.createElement("div", { className: "axo-status", "data-axo-status": true },
            React.createElement("div", { className: "axo-st" },
                React.createElement("small", null, "\uC9C0\uAE08 \uB2E8\uACC4"),
                React.createElement("b", null,
                    s.no,
                    " ",
                    s.short || s.name),
                React.createElement("span", null,
                    ai_2.BRANCH_LABEL[b],
                    "\uAD70 \u00B7 ",
                    s.docs.filter(d => (0, work_1.docOk)(p.docs[d.key])).length,
                    "/",
                    s.docs.length,
                    " \uC0B0\uCD9C\uBB3C")),
            React.createElement("div", { className: "axo-st", "data-axo-gate": gs ? gs.gate : 'done', style: { cursor: gs ? 'pointer' : 'default' }, onClick: () => gs && nav.work(gk, 'gate') },
                React.createElement("small", null, "\uB2E4\uC74C \uAD00\uBB38"),
                React.createElement("b", null, gs ? gs.gate : 'G1~G5 끝'),
                React.createElement("span", { style: { color: gCol, fontWeight: 800 } },
                    gWord,
                    gs && (0, work_1.lastApproval)(p, gs.gate) && (held || gst === 'rejected') ? ` — ${cut(((0, work_1.lastApproval)(p, gs.gate) || { note: '' }).note || '', 18)}` : '')),
            React.createElement("div", { className: "axo-st", "data-axo-pull-open": true, onClick: () => setPull(!pull), style: { cursor: 'pointer', borderColor: pull ? K.ok : undefined } },
                React.createElement("small", null,
                    "\uCD9C\uC2DC \uBAA9\uD45C ",
                    React.createElement("span", { style: { color: K.ok } }, "\u21E0 \uB2F9\uAE30\uAE30")),
                React.createElement("b", null, p.target ? (0, ui_1.md)(p.target) : '없음'),
                React.createElement("span", null, (0, ax_1.dday)(p.target))),
            React.createElement("div", { className: "axo-st", "data-axo-late": lt },
                React.createElement("small", null, "\uC77C\uC815"),
                React.createElement("b", { style: { color: tone(lt) } }, lt > 0 ? `${lt}일 늦음` : '제때'),
                React.createElement("span", { style: { color: tone(lt) } },
                    lt >= 7 ? '빨강' : lt > 0 ? '노랑' : '초록',
                    React.createElement(ui_1.Tip, { t: "7\uC77C \uC774\uC0C1 \uB2A6\uC73C\uBA74 \uBE68\uAC15(\uBC14\uB85C \uC870\uCE58), 1~6\uC77C \uB178\uB791(\uB530\uB77C\uC7A1\uAE30), \uC81C\uB54C\uBA74 \uCD08\uB85D" })))),
        pull && React.createElement(Pull_1.PullSim, { p: p, onClose: () => setPull(false), onApply: (t, pl) => { if (nav.pull)
                nav.pull(t, pl); setPull(false); } }),
        React.createElement("div", { className: "axo-card", "data-axo-mine": true },
            React.createElement("div", { className: "axo-h" },
                "\uB0B4\uAC00 \uD560 \uC77C ",
                React.createElement("span", { style: { color: myCount ? K.soon : K.faint } }, myCount),
                React.createElement(ui_1.Tip, { t: "\uC0AC\uB78C\uC774 \uD655\uC778\uD558\uAC70\uB098 \uACB0\uC815\uD560 \uAC83" })),
            !myCount && React.createElement("div", { className: "axo-sub" }, "\uC9C0\uAE08 \uC0AC\uB78C\uC774 \uD560 \uC77C\uC774 \uC5C6\uC5B4\uC694."),
            gatesForMe.map(o => React.createElement("div", { key: o.x.id, className: "axo-row", "data-axo-my": "gate" },
                React.createElement("span", { className: "axo-pill", style: { background: K.soonBg, color: K.soon } }, "\uAD00\uBB38 \uC2B9\uC778"),
                React.createElement("span", { style: { flex: 1, minWidth: 0 } },
                    o.x.gate,
                    " \u2014 \uC2B9\uC778 \uC694\uCCAD \uB4E4\uC5B4\uC634"),
                React.createElement("button", { className: "axo-b g", onClick: () => nav.work(o.k, 'gate') }, "\uC2B9\uC778\uD558\uB7EC \uAC00\uAE30"))),
            ecrForMe.map(e => React.createElement("div", { key: e.id, className: "axo-row", "data-axo-my": "ecr" },
                React.createElement("span", { className: "axo-pill", style: { background: K.soonBg, color: K.soon } }, "\uC124\uACC4 \uBCC0\uACBD"),
                React.createElement("span", { style: { flex: 1, minWidth: 0 } },
                    e.no,
                    " ",
                    e.title,
                    " \u2014 \uC2B9\uC778 \uD310\uB2E8"),
                React.createElement("button", { className: "axo-b g", onClick: () => nav.parts('ecr') }, "\uBCF4\uB7EC \uAC00\uAE30"))),
            reviews.slice(0, 6).map(j => {
                const f = (0, Today_1.friendly)(j);
                return React.createElement("div", { key: j.id, className: "axo-row", "data-axo-my": "ai", "data-axo-rv": j.id },
                    React.createElement("span", { className: "axo-pill", style: { background: K.okBg, color: K.ok } }, team_1.TEAM[(0, team_1.mateOf)(j)].name),
                    React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, title: j.result }, f.title),
                    React.createElement("button", { className: "axo-b g", "data-axo-ok": true, onClick: () => act.apply(p.id, j) }, f.go),
                    React.createElement("button", { className: "axo-b q", "data-axo-no": true, onClick: () => act.reject(p.id, j, '안 함') }, "\uC548 \uD568"));
            }),
            human.slice(0, 6).map(d => {
                const x = p.docs[d.key] || {};
                const left = (0, ax_1.daysTo)(x.due, now);
                return React.createElement("div", { key: d.key, className: "axo-row", "data-axo-my": "doc", style: { cursor: 'pointer' }, onClick: () => nav.work(ck, d.key) },
                    React.createElement("span", { className: "axo-pill", style: { background: '#2C2C31', color: K.sub } }, x.who || '담당 없음'),
                    React.createElement("span", { style: { flex: 1, minWidth: 0 } }, d.label),
                    x.due && React.createElement("span", { style: { fontSize: 14, fontWeight: 800, color: left !== undefined && left < 0 ? K.late : K.faint } }, (0, ax_1.dday)(x.due)));
            })),
        React.createElement("div", { className: "axo-four" },
            React.createElement("div", { className: "axo-card", "data-axo-card": "sched", onClick: nav.lanes },
                React.createElement("div", { className: "axo-h" }, "\uC77C\uC815"),
                !dues.length && React.createElement("div", { className: "axo-sub" }, "\uC815\uD55C \uB9C8\uAC10\uC774 \uC5C6\uC5B4\uC694."),
                dues.slice(0, 3).map((x, i) => { const l = (0, ax_1.daysTo)(x.date, now); return React.createElement("div", { key: i, className: "axo-li" },
                    React.createElement("b", { style: { color: l !== undefined && l < 0 ? K.late : K.text } }, (0, ui_1.md)(x.date)),
                    " ",
                    x.label); })),
            React.createElement("div", { className: "axo-card", "data-axo-card": "bom", onClick: () => nav.parts('bom') },
                React.createElement("div", { className: "axo-h" },
                    "BOM ",
                    React.createElement("span", { className: "axo-sub" },
                        "\uD310 ",
                        px.bomRev || 'A')),
                React.createElement("div", { className: "axo-big" },
                    parts.length,
                    React.createElement("span", { style: { fontSize: 15, color: K.faint, fontWeight: 700 } }, " \uBD80\uD488")),
                React.createElement("div", { className: "axo-li", style: { color: unfixed ? K.soon : K.ok } },
                    "\uBBF8\uD655\uC815 ",
                    unfixed,
                    "\uAC1C"),
                React.createElement("div", { className: "axo-li" }, (px.bomLog || []).length ? `최근 판 ${(0, ax_1.fmt)((px.bomLog || []).slice(-1)[0].at)} · ${cut((px.bomLog || []).slice(-1)[0].what, 16)}` : '판 기록 없음')),
            React.createElement("div", { className: "axo-card", "data-axo-card": "ecr", onClick: () => nav.parts('ecr') },
                React.createElement("div", { className: "axo-h" }, "\uC124\uACC4 \uBCC0\uACBD"),
                React.createElement("div", { className: "axo-big", style: { color: ecrOpen.length ? K.soon : K.text } },
                    ecrOpen.length,
                    React.createElement("span", { style: { fontSize: 15, color: K.faint, fontWeight: 700 } }, " \uC9C4\uD589 \uC911")),
                React.createElement("div", { className: "axo-li" }, ecrLast ? `${ecrLast.eco || ecrLast.no} ${ecrLast.title} · ${ecrLast.status}` : '설계 변경 없음')),
            React.createElement("div", { className: "axo-card", "data-axo-card": "issue", onClick: nav.log },
                React.createElement("div", { className: "axo-h" }, "\uC774\uC288"),
                React.createElement("div", { className: "axo-big", style: { color: issues.length ? K.late : K.text } },
                    issues.length,
                    React.createElement("span", { style: { fontSize: 15, color: K.faint, fontWeight: 700 } }, " \uC5F4\uB9BC")),
                issues.slice(0, 2).map(i => React.createElement("div", { key: i.id, className: "axo-li" },
                    i.kind,
                    " \u00B7 ",
                    i.text)))),
        React.createElement("div", { className: "axo-two", style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 12 } },
            React.createElement(Pull_1.Bottleneck, { p: p, onGo: () => nav.work(ck) }),
            React.createElement(Pull_1.PastCard, { p: p }))));
}

};
__m["src/webparts/huromAxPlm/model/team.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mateOf = exports.TEAM = exports.DEPTS = void 0;
exports.inboxOf = inboxOf;
exports.teamOf = teamOf;
const ai_1 = require("src/webparts/huromAxPlm/model/ai.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
// 1.0.147 직무별 32명 · 11개 부문 (심준보 2026-11-21 #ax-plm msg 11192341·11192379·11192538·11192676, 곽두팔 스킬표 v3 msg 11192860)
exports.DEPTS = ['기획·PM', '디자인', '설계', '금형·부품', '소싱·구매', '시험·신뢰성', '품질', '인증·법규', '생산', '영업·물류', '출시·사후'];
exports.TEAM = [
    { id: 'plan', dept: '기획·PM', name: '상품기획 AI', does: '컨셉서·경쟁 비교·리뷰 불만·판매가 시뮬레이션', kinds: ['j_plan', 'g_def', 'j_comp', 'j_voc', 'g_market', 'g_review', 'j_dup', 'j_req', 'g_req', 'j_launch', 'j_next', 'draft', 'docchk', 'ask', 'do', 'similar', 's_price'] },
    { id: 'sched', dept: '기획·PM', name: '일정관리 AI', does: '추천 일정·지연 위험 TOP3·나라별 휴일 보정·출시일 당기기', kinds: ['s_pull', 'j_back', 'replan', 'delay', 'j_risk', 's_holiday'] },
    { id: 'subpm', dept: '기획·PM', name: '부PM AI', does: '주간 보고·회의록·부서 간 독촉·관문 회의 자료·이슈 목록·지연 만회안', kinds: ['s_catchup', 'weekly', 'minutes', 'gate', 's_chase', 's_gatepack', 's_issues'] },
    { id: 'design', dept: '디자인', name: '산업디자인 AI', does: '디자인 브리프·디자인 DR', kinds: ['s_dbrief', 's_ddr'] },
    { id: 'cmf', dept: '디자인', name: 'CMF AI', does: 'CMF 3안·컬러칩 관리', kinds: ['s_cmf', 's_chip'] },
    { id: 'manual', dept: '디자인', name: '설명서 디자이너 AI', does: '설명서 구성·삽화 지시·표시부 문구·경고 심볼·다국어 판', kinds: ['j_manual', 's_mlayout', 's_ux', 's_warn', 's_mlang'] },
    { id: 'mech', dept: '설계', name: '기구설계 AI', does: '설계 DR·공차 검토·설계 변경 영향', kinds: ['j_dr', 'ecr', 'j_bom', 'bomdiff', 's_tol'], only: 'juicer' },
    { id: 'drum', dept: '설계', name: '착즙·드럼 설계 AI', does: '착즙률·찌꺼기 비교·스크류 사양', kinds: ['j_juice', 's_screw'], only: 'juicer' },
    { id: 'motor', dept: '설계', name: '모터·구동 AI', does: '모터 토크·소음·발열·기어 수명', kinds: ['s_motor', 's_gear'], only: 'juicer' },
    { id: 'elec', dept: '설계', name: '전기·회로 AI', does: '전자부품 단종·대체·안전 회로', kinds: ['s_eol', 's_safe'] },
    { id: 'sw', dept: '설계', name: '소프트웨어 AI', does: '동작 시퀀스·에러코드·펌웨어 이력', kinds: ['s_seq', 's_err', 's_fwlog'] },
    { id: 'mold', dept: '금형·부품', name: '금형 AI', does: '금형 일정·시사출 문제·외관 불량·이관', kinds: ['j_trial', 'j_t1', 's_moldsch', 's_defect', 's_moldmove'], only: 'juicer' },
    { id: 'papr', dept: '금형·부품', name: '부품승인 AI', does: '승인원 서류 점검·초도품 결과', kinds: ['j_aprv', 'g_aprv', 'oldrev', 'g_fai'] },
    { id: 'src', dept: '소싱·구매', name: '소싱·제조처 AI', does: '후보 업체 비교·RFP·공장 실사', kinds: ['g_vendor', 's_rfp', 's_audit'], only: 'goods' },
    { id: 'buy', dept: '소싱·구매', name: '구매 AI', does: '발주·납기 추적·협력사 메일(한·중·영)·평가·중국 휴무', kinds: ['j_late', 'g_late', 'chase', 'vendor', 'g_rescore', 's_mail3', 's_cny'] },
    { id: 'cost', dept: '소싱·구매', name: '원가·견적 AI', does: '가견적 비교·BOM 원가·도입단가 품의', kinds: ['g_cost', 'g_quote', 's_bomcost', 's_intro'] },
    { id: 'tplan', dept: '시험·신뢰성', name: '시험계획 AI', does: '시험 항목표·시료 수량·샘플 평가', kinds: ['g_sample', 's_testlist', 's_n'] },
    { id: 'rel', dept: '시험·신뢰성', name: '신뢰성 AI', does: '수명 시험 분석·소음·진동·고장 원인(FTA)', kinds: ['s_life', 's_noise', 's_fta'] },
    { id: 'dq', dept: '품질', name: '설계품질 AI', does: '설계 FMEA·DR 지적 추적·재발 방지', kinds: ['s_dfmea', 's_drtrack', 's_recur'] },
    { id: 'pq', dept: '품질', name: '공정품질 AI', does: '공정 FMEA·공정 체크시트·초기유동 불량', kinds: ['s_pfmea', 's_early'] },
    { id: 'iqc', dept: '품질', name: '수입품질 AI', does: '수입검사 기준·AQL·8D·선적 전 검사', kinds: ['j_iqc', 'g_iqc', 's_aql', 's_8d', 's_psi'] },
    { id: 'field', dept: '품질', name: '시장품질 AI', does: 'AS·CS 불량 분석·리콜 위험 경고', kinds: ['j_as', 's_recall'] },
    { id: 'cert', dept: '인증·법규', name: '인증 AI', does: '나라별 인증표·인증 서류·인증 일정', kinds: ['certlist', 'regchk', 's_certdoc', 's_certsch'] },
    { id: 'food', dept: '인증·법규', name: '식품위생 AI', does: '식품 접촉 재질 규제·시험성적서', kinds: ['j_food', 's_tr'] },
    { id: 'ip', dept: '인증·법규', name: '특허·상표 AI', does: '상표 유사 검색·선행 특허·침해 위험', kinds: ['s_tm', 's_pat'] },
    { id: 'pe', dept: '생산', name: '생산기술 AI', does: '작업표준서·공정 설계·치공구', kinds: ['s_sop', 's_jig'], only: 'juicer' },
    { id: 'pplan', dept: '생산', name: '생산계획 AI', does: 'T1·DPP·LPP 생산 계획·자재 부족', kinds: ['s_pp', 's_short'] },
    { id: 'sales', dept: '영업·물류', name: '영업 AI', does: '영업 교육 자료·판매 예측·상세페이지·FAQ', kinds: ['s_edu', 's_forecast', 's_detail'] },
    { id: 'logi', dept: '영업·물류', name: '물류 AI', does: '적재 수 계산·통관 서류·창고 입고', kinds: ['s_load', 's_hs', 's_wh'] },
    { id: 'ship', dept: '영업·물류', name: '출하 AI', does: '출하 검사·출하 계획 대조·출하 보류', kinds: ['s_shipchk', 's_shipplan', 's_hold'] },
    { id: 'printpack', dept: '출시·사후', name: '인쇄물·포장 AI', does: '포장 사양·낙하 시험·박스 문구·인쇄물 일정·번역', kinds: ['g_pack', 's_packspec', 's_drop', 's_printsch', 's_trans'] },
    { id: 'as', dept: '출시·사후', name: 'AS 준비 AI', does: 'AS 파트리스트·서비스 매뉴얼·소모품', kinds: ['s_aspart', 's_svc', 's_consum'] },
];
const BY_KIND = {};
exports.TEAM.forEach((m, i) => m.kinds.forEach(k => { BY_KIND[k] = i; }));
const mateOf = (j) => (BY_KIND[j.kind] !== undefined ? BY_KIND[j.kind] : 0);
exports.mateOf = mateOf;
// 실제 데이터에서 들어온 일 — 설계 변경 요청·검토는 기구설계 AI, 관문 승인 대기는 일정관리 AI
// 1.0.147 관문 승인 대기는 부PM AI
function inboxOf(p) {
    const o = {};
    const add = (id, t) => { (o[id] = o[id] || []).push(t); };
    (p.ecrs || []).filter(e => e.status === '요청' || e.status === '검토').forEach(e => add('mech', `${e.no} ${e.title} — 설계 변경 ${e.status} (영향 부품 ${e.parts.length}개)`));
    (0, work_1.stagesOf)(p).forEach(s => { if (s.gate && (0, work_1.gateState)(p, s) === 'requested')
        add('subpm', `${s.gate} 승인 대기`); });
    return o;
}
function teamOf(p) {
    const b = (0, ai_1.branchOf)((0, devtype_1.typeOf)(p));
    const jobs = p.aiJobs || [];
    const inbox = inboxOf(p);
    return exports.TEAM.map((m, i) => {
        const mine = jobs.filter(j => (0, exports.mateOf)(j) === i);
        const review = mine.filter(j => (0, ai_1.jobState)(j) === 'review');
        const running = mine.filter(j => ['running', 'queued'].indexOf((0, ai_1.jobState)(j)) >= 0);
        const off = !!m.only && m.only !== b;
        const state = off ? 'off' : running.length ? 'run' : review.length ? 'review' : 'idle';
        return { m, i, state, jobs: mine, review, running, done: mine.filter(j => (0, ai_1.jobState)(j) === 'applied').length, inbox: off ? [] : inbox[m.id] || [], last: mine.slice().sort((a, c) => (c.doneAt || c.at).localeCompare(a.doneAt || a.at))[0] };
    });
}

};
__m["src/webparts/huromAxPlm/components/Today.js"]=function(module,exports,require){"use strict";
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
exports.mailHref = void 0;
exports.friendly = friendly;
exports.Today = Today;
const React = __importStar(require("react"));
// AX-PLM 1.0.140 「오늘」 — 첫 화면 하나로 끝 (심준보 2026-11-19 #ax-plm msg 10738686~10738864 '단순·진짜 필요한 일만·AI한테 맡길 구조·휴롬 PLM과 차별점', 설계도 msg 10739074 → '네' 10739566)
// 맨 위 AI에게 말로 맡기기 → AI가 해 놓은 일(확인해 주세요) → 아이템 한 줄씩(늦은 것부터, 지금 누가 뭘 하는지)
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const ai_1 = require("src/webparts/huromAxPlm/model/ai.js");
const Dash_1 = require("src/webparts/huromAxPlm/components/Dash.js");
const Work139_1 = require("src/webparts/huromAxPlm/components/Work139.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
const AiTag = () => React.createElement("span", { "data-ax-ai-tag": true, style: { background: ui_1.C.accentBg, color: ui_1.C.accent, fontWeight: 800, fontSize: 11, borderRadius: 5, padding: '2px 6px', whiteSpace: 'nowrap', flex: '0 0 auto' } }, "AI");
const Who = (props) => React.createElement("span", { style: { background: ui_1.C.line, color: ui_1.C.sub, fontWeight: 700, fontSize: 11.5, borderRadius: 5, padding: '1px 6px', whiteSpace: 'nowrap', flex: '0 0 auto' } }, props.n);
const short = (n) => n.split(' (')[0];
const first = (t) => (t || '').split('\n').map(x => x.replace(/^\s*(-|\d+\.|제목\s*[:：])\s*/, '').trim()).filter(x => x)[0] || '';
const subj = (t) => { const l = (t || '').split('\n').filter(x => /^\s*제목\s*[:：]/.test(x))[0]; return l ? l.replace(/^\s*제목\s*[:：]\s*/, '') : ''; };
const isMail = (j) => !!(0, ai_1.kindInfo)(j.kind).mail || /^\s*제목\s*[:：]/m.test(j.result || '');
const mailHref = (t) => `mailto:?subject=${encodeURIComponent(subj(t).slice(0, 120))}&body=${encodeURIComponent(t.slice(0, 1800))}`;
exports.mailHref = mailHref;
// AI 결과를 사람 말로 — 무엇을 해 놨고, 누르면 무엇이 되는지
function friendly(j) {
    if (isMail(j))
        return { title: '메일 써 놨어요', go: '메일 열기' };
    if (j.kind === 'replan' || j.kind === 'j_back')
        return { title: '일정을 다시 짰어요', go: '적용' };
    if (j.kind === 'gate')
        return { title: '관문 승인 요청 글 준비했어요', go: '확인' };
    if (j.kind === 'weekly')
        return { title: '이번 주 요약 써 놨어요', go: '올리기' };
    if (j.kind === 'draft' && j.doc)
        return { title: `「${j.input || '산출물'}」 초안 써 놨어요`, go: '확인 끝' };
    if (j.kind === 'regchk')
        return { title: '규제·리콜 미리 점검했어요', go: '확인' };
    if (j.kind === 'do')
        return { title: `맡긴 일 끝났어요 — ${(j.input || '').slice(0, 30)}`, go: '확인' };
    const T = { g_sample: '샘플 평가를 정리했어요', oldrev: '업체에 나간 옛 도면을 찾았어요', bomdiff: '기반 모델과 BOM 차이를 정리했어요', vendor: '업체 인증서를 점검했어요', docchk: `「${j.input || '산출물'}」을 점검했어요`, j_food: '식품 접촉 재질을 점검했어요', j_bom: 'BOM 원가를 합산했어요', g_cost: '목표 원가를 다시 계산했어요', ecr: '설계 변경 영향을 정리했어요', certlist: '나라별 필요 인증을 정리했어요', delay: '지연 영향을 점검했어요', minutes: '회의록에서 할 일을 뽑았어요' };
    return { title: T[j.kind] || `${(0, ai_1.kindInfo)(j.kind).label.split(' — ')[0]} — 해 놨어요`, go: '확인' };
}
const DOING = { delay: '일정 점검하는 중', replan: '일정 다시 짜는 중', weekly: '주간 요약 쓰는 중', gate: '관문 요청 글 쓰는 중' };
const doing = (j) => (j.kind === 'draft' && j.input ? `「${j.input}」 쓰는 중` : DOING[j.kind] || `${(0, ai_1.kindInfo)(j.kind).label.split(' — ')[0]} 하는 중`);
function Today(props) {
    const api = React.useContext(Dash_1.AiCtx);
    const [more, setMore] = React.useState(false);
    const [open, setOpen] = React.useState(undefined);
    const now = (0, ax_1.today)();
    const rows = [];
    props.items.forEach(p => (p.aiJobs || []).forEach(j => rows.push({ p: p, j })));
    const review = rows.filter(r => (0, ai_1.jobState)(r.j) === 'review').sort((a, b) => ((a.j.doneAt || a.j.at) < (b.j.doneAt || b.j.at) ? 1 : -1));
    const doneToday = rows.filter(r => (r.j.doneAt || '').slice(0, 10) === now).length;
    const shown = more ? review : review.slice(0, 5);
    const items = props.items.slice().sort((a, b) => ((0, work_1.projLate)(b) - (0, work_1.projLate)(a)) || ((a.target || '9') < (b.target || '9') ? -1 : 1));
    const cur = open ? rows.filter(r => r.j.id === open.id)[0] : undefined;
    const go = (p, j) => { if (isMail(j) && j.result)
        window.location.href = (0, exports.mailHref)(j.result); props.act.apply(p.id, j); };
    return (React.createElement("div", { "data-ax-today": true },
        React.createElement(AskBox, { items: props.items, api: api }),
        React.createElement("section", { "data-ax-today-review": true, style: { marginTop: 22 } },
            React.createElement("div", { style: { display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap', marginBottom: 10 } },
                React.createElement("h2", { style: { fontSize: 18, fontWeight: 800, margin: 0 } },
                    "AI\uAC00 \uD55C \uC77C",
                    React.createElement(ui_1.Tip, { t: "\uD655\uC778\uD558\uACE0 \uBC18\uC601\uD574\uC57C \uB370\uC774\uD130\uC5D0 \uB4E4\uC5B4\uAC00\uC694" }),
                    " ",
                    React.createElement("span", { "data-ax-today-n": true, style: { color: review.length ? ui_1.C.soon : ui_1.C.faint } }, review.length)),
                React.createElement("span", { style: { fontSize: 13, color: ui_1.C.faint } },
                    "\uC624\uB298 AI\uAC00 \uD55C \uC77C ",
                    doneToday,
                    "\uAC74")),
            !review.length && React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { padding: '18px 16px', color: ui_1.C.faint, fontSize: 14 }) },
                "\uD655\uC778\uD560 \uAC83 \uC5C6\uC74C",
                React.createElement(ui_1.Tip, { t: "AI\uAC00 \uC77C\uC744 \uB05D\uB0B4\uBA74 \uC5EC\uAE30\uC5D0 \uC62C\uB77C\uC640\uC694" })),
            shown.map(({ p, j }) => {
                const f = friendly(j);
                return (React.createElement("div", { key: j.id, "data-ax-today-card": j.kind, className: "axw-tcard", style: Object.assign(Object.assign({}, ui_1.card), { display: 'flex', gap: 12, alignItems: 'center', padding: '12px 14px', marginBottom: 8 }) },
                    React.createElement(AiTag, null),
                    React.createElement("div", { style: { flex: 1, minWidth: 0, cursor: 'pointer' }, onClick: () => setOpen({ pid: p.id, id: j.id }) },
                        React.createElement("div", { style: { fontWeight: 700, fontSize: 14.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, f.title),
                        React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.faint, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: 2 } },
                            short(p.name),
                            " \u00B7 ",
                            subj(j.result) || first(j.result))),
                    React.createElement("div", { className: "axw-tbtns", style: { display: 'flex', gap: 6, flex: '0 0 auto' } },
                        React.createElement("button", { "data-ax-today-go": true, onClick: () => go(p, j), style: Object.assign(Object.assign({}, ui_1.primary), { padding: '5px 12px' }) }, f.go),
                        React.createElement("button", { "data-ax-today-fix": true, onClick: () => setOpen({ pid: p.id, id: j.id }), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '5px 10px' }) }, "\uACE0\uCE58\uAE30"),
                        React.createElement("button", { "data-ax-today-no": true, onClick: () => props.act.reject(p.id, j, '안 함'), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '5px 10px', color: ui_1.C.sub }) }, "\uC548 \uD568"))));
            }),
            review.length > 5 && React.createElement("button", { "data-ax-today-more": true, onClick: () => setMore(!more), style: Object.assign(Object.assign({}, ui_1.btn), { border: 'none', background: 'transparent', color: ui_1.C.accent }) }, more ? '접기' : `+ ${review.length - 5}건 더`)),
        React.createElement("section", { "data-ax-today-items": true, style: { marginTop: 22 } },
            React.createElement("h2", { style: { fontSize: 18, fontWeight: 800, margin: '0 0 10px' } },
                "\uC544\uC774\uD15C ",
                items.length,
                "\uAC1C ",
                React.createElement("span", { style: { fontSize: 13, color: ui_1.C.faint, fontWeight: 500 } }, "\uB2A6\uC740 \uAC83\uBD80\uD130")),
            React.createElement("div", { style: ui_1.card }, items.map(p => {
                const lt = (0, work_1.projLate)(p);
                const k = (0, work_1.curIdx)(p);
                const pa = p;
                const runs = (pa.aiJobs || []).filter(j => ['running', 'queued', 'offline'].indexOf((0, ai_1.jobState)(j)) >= 0);
                const t = (0, work_1.todos)([p], '*').filter(x => x.kind === '산출물' && !(p.docs[x.key || ''] || {}).ai)[0];
                const run = runs.filter(j => j.doc)[0] || (t ? undefined : runs[0]); // 산출물 쓰는 AI → 사람 할 일 → 그 밖의 AI 순
                const who = t ? ((p.docs[t.key || ''] || {}).who || p.owner || '') : '';
                return (React.createElement("div", { key: p.id, "data-ax-today-item": p.id, "data-ax-late": lt || '', className: "axw-row axw-irow", onClick: () => props.onItem(p.id) },
                    React.createElement("b", { className: "axw-iname", style: { width: 170, flex: '0 0 auto', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, short(p.name)),
                    React.createElement("span", { className: "axw-ibar", title: `${(0, work_1.stagesOf)(p)[k].no} ${(0, work_1.stagesOf)(p)[k].name}`, style: { display: 'flex', gap: 2, width: 112, flex: '0 0 auto' } }, (0, work_1.stagesOf)(p).map((s, i) => { const f = (0, work_1.perf)(p, i); return React.createElement("i", { key: s.id, style: { flex: 1, height: 7, borderRadius: 2, background: f.state === 'done' ? ui_1.C.text : f.state === 'doing' ? (lt ? ui_1.C.late : ui_1.C.accent) : ui_1.C.line } }); })),
                    React.createElement("span", { style: { width: 66, flex: '0 0 auto', fontWeight: 700, fontSize: 13, color: lt ? ui_1.C.late : ui_1.C.ok } }, lt ? `${lt}일 늦음` : '정상'),
                    React.createElement("span", { className: "axw-inow", style: { flex: 1, minWidth: 0, display: 'flex', gap: 6, alignItems: 'center', fontSize: 13, color: ui_1.C.sub, overflow: 'hidden' } }, run ? React.createElement(React.Fragment, null,
                        React.createElement(AiTag, null),
                        React.createElement("span", { style: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, doing(run)))
                        : t ? React.createElement(React.Fragment, null,
                            React.createElement(Who, { n: who || '담당 없음' }),
                            React.createElement("span", { style: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                                t.text,
                                " ",
                                t.left !== undefined && t.left < 0 ? '— 마감 지남' : '하는 중')) : React.createElement("span", { style: { color: ui_1.C.faint } },
                            (0, work_1.stagesOf)(p)[k].no,
                            " ",
                            (0, work_1.stagesOf)(p)[k].short)),
                    React.createElement("span", { style: { fontSize: 12.5, color: ui_1.C.faint, whiteSpace: 'nowrap', flex: '0 0 auto' } }, (0, ax_1.dday)(p.target))));
            }))),
        cur && React.createElement("div", { "data-ax-today-sheet": true, onClick: () => setOpen(undefined), style: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,.28)', zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12 } },
            React.createElement("div", { className: "axw-sheetbox", onClick: e => e.stopPropagation(), style: Object.assign(Object.assign({}, ui_1.card), { width: 620, maxWidth: '100%', maxHeight: '88vh', overflow: 'auto' }) },
                React.createElement(Work139_1.JobPanel, { p: cur.p, j: cur.j, k: cur.j.stage !== undefined ? cur.j.stage : (0, work_1.curIdx)(cur.p), who: props.who, act: Object.assign(Object.assign({}, props.act), { apply: (pid, j) => { go(cur.p, j); setOpen(undefined); }, reject: (pid, j, w) => { props.act.reject(pid, j, w); setOpen(undefined); } }), onClose: () => setOpen(undefined), onItem: () => { setOpen(undefined); props.onItem(cur.p.id); } })))));
}
// AI에게 말로 맡기기 — 아이템 이름이 글에 있으면 그 아이템, 없으면 고른 아이템
function AskBox(props) {
    const [t, setT] = React.useState('');
    const [pid, setPid] = React.useState('');
    const [sent, setSent] = React.useState('');
    const guess = (s) => { const hit = props.items.filter(p => short(p.name).split(/\s+/).some(w => w.length >= 2 && s.indexOf(w) >= 0))[0]; return hit ? hit.id : ''; };
    const target = pid || guess(t) || (props.items[0] ? props.items[0].id : '');
    const send = () => { if (!t.trim() || !props.api || !target)
        return; props.api.run(target, 'do', t.trim()); setSent(`${short((props.items.filter(p => p.id === target)[0] || { name: '' }).name)}에 맡겼어요 — 끝나면 아래 「확인해 주세요」에 올라와요`); setT(''); };
    return (React.createElement("div", { "data-ax-ask": true, style: Object.assign(Object.assign({}, ui_1.card), { border: `2px solid ${ui_1.C.accent}`, padding: '10px 12px' }) },
        React.createElement("div", { className: "axw-askrow", style: { display: 'flex', gap: 8, alignItems: 'center' } },
            React.createElement("input", { "data-ax-ask-input": true, value: t, onChange: e => { setT(e.target.value); setSent(''); }, onKeyDown: e => { if (e.key === 'Enter')
                    send(); }, placeholder: "AI\uC5D0\uAC8C \uC77C \uB9E1\uAE30\uAE30 \u2014 \uC608: \uAC00\uC2B5\uAE30 G2 \uC2B9\uC778 \uC694\uCCAD \uAE00 \uC368\uC918", style: Object.assign(Object.assign({}, ui_1.inp), { border: 'none', fontSize: 15, padding: '8px 4px', flex: 1 }) }),
            React.createElement("select", { "data-ax-ask-item": true, value: pid, onChange: e => setPid(e.target.value), style: Object.assign(Object.assign({}, ui_1.inp), { width: 'auto', maxWidth: 170, flex: '0 1 auto' }) },
                React.createElement("option", { value: "" }, t && guess(t) ? `${short((props.items.filter(p => p.id === guess(t))[0] || { name: '' }).name)} (자동)` : '아이템 고르기'),
                props.items.map(p => React.createElement("option", { key: p.id, value: p.id }, short(p.name)))),
            React.createElement("button", { "data-ax-ask-go": true, disabled: !t.trim(), onClick: send, style: Object.assign(Object.assign({}, ui_1.primary), { padding: '8px 16px', opacity: t.trim() ? 1 : 0.45 }) }, "\uB9E1\uAE30\uAE30")),
        sent && React.createElement("div", { "data-ax-ask-sent": true, style: { fontSize: 12.5, color: ui_1.C.accent, fontWeight: 600, padding: '4px 4px 0' } }, sent)));
}

};
__m["src/webparts/huromAxPlm/components/Work139.js"]=function(module,exports,require){"use strict";
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
exports.blocks = blocks;
exports.StatusBoard = StatusBoard;
exports.AiInbox = AiInbox;
exports.JobPanel = JobPanel;
exports.GateBoard = GateBoard;
exports.LaneBoard = LaneBoard;
exports.ItemPick = ItemPick;
const React = __importStar(require("react"));
// AX-PLM 1.0.139 — 「진짜 업무용」 (심준보 기준, 곽두팔 2026-11-18 #ax-plm msg 10583671)
// 개발팀·팀장이 매일 쓰는 업무 도구: AI가 먼저 일하고 사람은 확인·승인만
// 현황 = 전체 아이템 현황표 / AI 일함 = AI가 만든 결과 결재함 / 아이템 = 숨기지 않는 탭 화면
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const item_1 = require("src/webparts/huromAxPlm/model/item.js");
const ai_1 = require("src/webparts/huromAxPlm/model/ai.js");
const hatch_1 = require("src/webparts/huromAxPlm/model/hatch.js");
const sched_1 = require("src/webparts/huromAxPlm/model/sched.js");
const Dash_1 = require("src/webparts/huromAxPlm/components/Dash.js");
const Gantt_1 = require("src/webparts/huromAxPlm/components/Gantt.js");
const Guide_1 = require("src/webparts/huromAxPlm/components/Guide.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
const fmtAt = (iso) => { if (!iso)
    return ''; const t = new Date(iso); return `${t.getMonth() + 1}/${t.getDate()} ${('0' + t.getHours()).slice(-2)}:${('0' + t.getMinutes()).slice(-2)}`; };
function blocks(p, now = (0, ax_1.today)()) {
    const out = [];
    const st = (0, work_1.stagesOf)(p);
    st.forEach((s, k) => {
        if (!s.gate)
            return;
        const g = (0, work_1.gateState)(p, s);
        if (g === 'requested') {
            const la = (0, work_1.lastApproval)(p, s.gate);
            const d = la ? (0, ax_1.daysTo)(la.at.slice(0, 10), now) : undefined;
            out.push({ kind: '승인', text: `${(0, work_1.gateKey)(s.gate).toUpperCase()} 승인 기다림`, who: p.approver, days: d !== undefined ? -d : undefined, k, key: 'gate' });
        }
        if (g === 'rejected') {
            const la = (0, work_1.lastApproval)(p, s.gate);
            out.push({ kind: '반려', text: `${(0, work_1.gateKey)(s.gate).toUpperCase()} 반려${la && la.note ? ` — ${la.note}` : ''}`, who: p.owner, k, key: 'gate' });
        }
    });
    (0, work_1.todos)([p], '*', now).filter(t => t.kind === '산출물' && t.left !== undefined && t.left < 0)
        .forEach(t => out.push({ kind: '산출물', text: `${t.text} 마감 지남`, who: (p.docs[t.key || ''] || {}).who || p.owner, days: -t.left, k: t.stage, key: t.key }));
    (p.issues || []).filter(i => !i.done && i.due && i.due < now)
        .forEach(i => out.push({ kind: i.kind, text: i.text, who: i.owner || p.owner, days: -(0, ax_1.daysTo)(i.due, now), k: (0, work_1.curIdx)(p) }));
    (0, Dash_1.vendorWaits)([p], '*', now).forEach(w => out.push({ kind: '협력사', text: `${w.vendor} — ${w.text}`, who: p.owner, days: w.left !== undefined && w.left < 0 ? -w.left : undefined, k: (0, work_1.curIdx)(p) }));
    const rank = { 승인: 0, 반려: 1, 산출물: 2, 리스크: 3, 이슈: 3, 협력사: 4 };
    return out.sort((a, b) => (rank[a.kind] - rank[b.kind]) || ((b.days || 0) - (a.days || 0)));
}
const reviewN = (p) => (p.aiJobs || []).filter(j => (0, ai_1.jobState)(j) === 'review').length;
// ───────── 1. 현황 — 전체 아이템 현황표 (지연·막힘이 위로)
function StatusBoard(props) {
    const rows = props.items.map(p => ({ p, lt: (0, work_1.projLate)(p), bl: blocks(p), ai: reviewN(p), k: (0, work_1.curIdx)(p) }));
    rows.sort((a, b) => (b.lt - a.lt) || ((b.bl.length ? 1 : 0) - (a.bl.length ? 1 : 0)) || ((a.p.target || '9') < (b.p.target || '9') ? -1 : 1));
    const late = rows.filter(r => r.lt > 0).length;
    const stuck = rows.filter(r => r.bl.length).length;
    const ai = rows.reduce((n, r) => n + r.ai, 0);
    const th = { padding: '10px 12px', fontSize: 12, fontWeight: 600, color: ui_1.C.faint, textAlign: 'left', whiteSpace: 'nowrap', borderBottom: `1px solid ${ui_1.C.line}`, background: ui_1.C.bg };
    const td = { padding: '12px 12px', borderBottom: `1px solid ${ui_1.C.line}`, verticalAlign: 'top' };
    const Blk = (r) => !r.bl.length ? React.createElement("span", { style: { color: ui_1.C.faint } }, "\uC5C6\uC74C") : (React.createElement("span", { style: { display: 'block', minWidth: 0 } },
        React.createElement("span", { style: { fontWeight: 600, color: r.bl[0].kind === '승인' ? ui_1.C.soon : ui_1.C.late } }, r.bl[0].text),
        r.bl[0].days ? React.createElement("span", { style: { color: ui_1.C.late, fontSize: 12 } },
            " \u00B7 ",
            r.bl[0].days,
            "\uC77C") : null,
        React.createElement("span", { style: { color: ui_1.C.faint, fontSize: 12 } },
            r.bl[0].who ? ` · ${r.bl[0].who}` : '',
            r.bl.length > 1 ? ` · 외 ${r.bl.length - 1}건` : '')));
    return (React.createElement("div", { "data-ax-status": true },
        React.createElement("div", { style: { display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', marginBottom: 12 } },
            React.createElement("h1", { "data-ax-headline": true, style: { fontSize: 20, fontWeight: 700, letterSpacing: '-.01em', margin: 0 } }, "\uC544\uC774\uD15C \uD604\uD669"),
            React.createElement("span", { style: { fontSize: 13, color: ui_1.C.sub } },
                "\uC544\uC774\uD15C ",
                rows.length,
                " \u00B7 ",
                React.createElement("b", { "data-ax-status-late": true, style: { color: late ? ui_1.C.late : ui_1.C.sub } },
                    "\uC9C0\uC5F0 ",
                    late),
                " \u00B7 ",
                React.createElement("b", { "data-ax-status-stuck": true, style: { color: stuck ? ui_1.C.soon : ui_1.C.sub } },
                    "\uB9C9\uD798 ",
                    stuck)),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement("button", { "data-ax-status-ai": true, onClick: props.onAi, style: Object.assign(Object.assign({}, ui_1.btn), { borderColor: ai ? ui_1.C.accent : ui_1.C.line2, color: ai ? ui_1.C.accent : ui_1.C.sub }) },
                "AI \uACB0\uACFC \uD655\uC778 \uB300\uAE30 ",
                ai,
                "\uAC74")),
        React.createElement("div", { className: "axw-hide-sm", style: Object.assign(Object.assign({}, ui_1.card), { overflow: 'hidden' }) },
            React.createElement("table", { style: { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, tableLayout: 'fixed' } },
                React.createElement("colgroup", null,
                    React.createElement("col", { style: { width: '22%' } }),
                    React.createElement("col", { style: { width: 92 } }),
                    React.createElement("col", { style: { width: '14%' } }),
                    React.createElement("col", { style: { width: 108 } }),
                    React.createElement("col", { style: { width: 70 } }),
                    React.createElement("col", null),
                    React.createElement("col", { style: { width: 84 } }),
                    React.createElement("col", { style: { width: 68 } })),
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { style: th }, "\uC544\uC774\uD15C"),
                        React.createElement("th", { style: th }, "\uAC1C\uBC1C \uC720\uD615"),
                        React.createElement("th", { style: th }, "\uC9C0\uAE08 \uB2E8\uACC4"),
                        React.createElement("th", { style: th }, "\uCD9C\uC2DC\uC77C"),
                        React.createElement("th", { style: th }, "\uC9C0\uC5F0"),
                        React.createElement("th", { style: th }, "\uB9C9\uD78C \uAC83"),
                        React.createElement("th", { style: th }, "\uB2F4\uB2F9"),
                        React.createElement("th", { style: th }, "AI \uD655\uC778"))),
                React.createElement("tbody", null, rows.map(r => {
                    const s = (0, work_1.stagesOf)(r.p)[r.k];
                    return (React.createElement("tr", { key: r.p.id, "data-ax-status-row": r.p.id, "data-ax-status-late": r.lt || '', className: "axw-tr", onClick: () => props.onOpen(r.p.id), style: { cursor: 'pointer' } },
                        React.createElement("td", { style: td },
                            React.createElement("div", { style: { fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, r.p.name),
                            React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint } }, r.p.itemCode || '')),
                        React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub }) }, (0, devtype_1.typeInfo)((0, devtype_1.typeOf)(r.p)).tag),
                        React.createElement("td", { style: td, onClick: e => { e.stopPropagation(); props.onOpen(r.p.id, r.k); } },
                            React.createElement("div", { style: { fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
                                s.no,
                                " ",
                                s.short || s.name),
                            React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint } },
                                "\uC0B0\uCD9C\uBB3C ",
                                (0, work_1.stageDocsOk)(r.p, s),
                                "/",
                                s.docs.length)),
                        React.createElement("td", { style: Object.assign(Object.assign({}, td), { fontVariantNumeric: 'tabular-nums' }) },
                            (0, ui_1.md)(r.p.target),
                            " ",
                            React.createElement("span", { style: { color: ui_1.C.faint, fontSize: 12 } }, (0, ax_1.dday)(r.p.target))),
                        React.createElement("td", { style: td }, r.lt ? React.createElement("span", { style: { color: ui_1.C.late, fontWeight: 700 } },
                            r.lt,
                            "\uC77C") : React.createElement("span", { style: { color: ui_1.C.faint } }, "\u2014")),
                        React.createElement("td", { style: td, onClick: r.bl.length ? e => { e.stopPropagation(); props.onOpen(r.p.id, r.bl[0].k, r.bl[0].key); } : undefined },
                            React.createElement(Blk, { bl: r.bl })),
                        React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub }) }, r.p.owner || '—'),
                        React.createElement("td", { style: td }, r.ai ? React.createElement("span", { style: { color: ui_1.C.soon, fontWeight: 700 } },
                            r.ai,
                            "\uAC74") : React.createElement("span", { style: { color: ui_1.C.faint } }, "\u2014"))));
                })))),
        React.createElement("div", { className: "axw-show-sm", "data-ax-status-cards": true }, rows.map(r => {
            const s = (0, work_1.stagesOf)(r.p)[r.k];
            return (React.createElement("div", { key: r.p.id, "data-ax-status-card": r.p.id, onClick: () => props.onOpen(r.p.id), style: Object.assign(Object.assign({}, ui_1.card), { padding: '12px 14px', marginBottom: 8, cursor: 'pointer', borderLeft: `3px solid ${r.lt ? ui_1.C.late : r.bl.length ? ui_1.C.soon : ui_1.C.line}` }) },
                React.createElement("div", { style: { display: 'flex', gap: 8, alignItems: 'baseline' } },
                    React.createElement("span", { style: { fontWeight: 700, flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, r.p.name),
                    r.lt > 0 && React.createElement("span", { style: { color: ui_1.C.late, fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap' } },
                        r.lt,
                        "\uC77C \uC9C0\uC5F0")),
                React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.sub, marginTop: 3 } },
                    (0, devtype_1.typeInfo)((0, devtype_1.typeOf)(r.p)).tag,
                    " \u00B7 ",
                    s.no,
                    " ",
                    s.short || s.name,
                    " \u00B7 \uCD9C\uC2DC ",
                    (0, ui_1.md)(r.p.target),
                    " ",
                    (0, ax_1.dday)(r.p.target),
                    " \u00B7 ",
                    r.p.owner || '담당 없음'),
                r.bl.length > 0 && React.createElement("div", { style: { fontSize: 13, marginTop: 6, lineHeight: 1.4 } },
                    React.createElement(Blk, { bl: r.bl })),
                r.ai > 0 && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.soon, fontWeight: 700, marginTop: 4 } },
                    "AI \uACB0\uACFC \uD655\uC778 ",
                    r.ai,
                    "\uAC74")));
        })),
        !rows.length && React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { padding: 24, color: ui_1.C.faint }) }, "\uC544\uC774\uD15C\uC774 \uC5C6\uC5B4\uC694. \u300C+ \uC0C8 \uD504\uB85C\uC81D\uD2B8\u300D\uB85C \uB9CC\uB4E4\uC5B4 \uC8FC\uC138\uC694.")));
}
const BOX_OF = (s) => (s === 'review' ? 'review' : ['running', 'queued', 'offline', 'error', 'nodata'].indexOf(s) >= 0 ? 'run' : 'done');
const DOT = { review: 'soon', running: 'wait', queued: 'open', offline: 'lock', error: 'late', nodata: 'lock', applied: 'done', dismissed: 'skip' };
function AiInbox(props) {
    const [box, setBox] = React.useState('review');
    const [pf, setPf] = React.useState('');
    const [sf, setSf] = React.useState('');
    const [sel, setSel] = React.useState(undefined);
    const all = [];
    props.items.filter(p => !props.pid || p.id === props.pid).forEach(p => (p.aiJobs || []).forEach(j => all.push({ p: p, j, s: (0, ai_1.jobState)(j), k: j.stage !== undefined ? j.stage : ((0, ai_1.kindInfo)(j.kind).stage ? (0, ai_1.kindInfo)(j.kind).stage - 1 : (0, work_1.curIdx)(p)) })));
    all.sort((a, b) => ((a.j.doneAt || a.j.at) < (b.j.doneAt || b.j.at) ? 1 : -1));
    const f1 = all.filter(r => (!pf || r.p.id === pf) && (sf === '' || String(r.k) === sf));
    const cnt = (b) => f1.filter(r => b === 'all' || BOX_OF(r.s) === b).length;
    const list = f1.filter(r => box === 'all' || BOX_OF(r.s) === box);
    const cur = all.filter(r => r.j.id === sel)[0];
    const tab = (b, t) => React.createElement("button", { key: b, "data-ax-inbox-box": b, onClick: () => { setBox(b); setSel(undefined); }, style: { border: 'none', background: 'transparent', padding: '9px 10px', fontSize: 13.5, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', color: box === b ? ui_1.C.text : ui_1.C.faint, boxShadow: box === b ? `inset 0 -2px 0 ${ui_1.C.text}` : 'none' } },
        t,
        " ",
        React.createElement("span", { style: { color: b === 'review' && cnt(b) ? ui_1.C.soon : ui_1.C.faint } }, cnt(b)));
    const sel1 = Object.assign(Object.assign({}, ui_1.inp), { width: 'auto', minWidth: 0, maxWidth: 220, flex: '1 1 130px', padding: '6px 8px' });
    return (React.createElement("div", { "data-ax-inbox": props.pid || 'all' },
        !props.pid && React.createElement("div", { style: { display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 10 } },
            React.createElement("h1", { style: { fontSize: 20, fontWeight: 700, letterSpacing: '-.01em', margin: 0 } }, "AI\uAC00 \uD574 \uB193\uC740 \uC77C"),
            React.createElement(ui_1.Tip, { t: "\uAC80\uD1A0\uC11C \uCD08\uC548 \u00B7 \uD611\uB825\uC0AC \uBA54\uC77C \u00B7 \uC77C\uC815 \uC870\uC815\uC548 \u00B7 \uADDC\uC81C\u00B7\uB9AC\uCF5C \uC810\uAC80 \u00B7 \uC8FC\uAC04 \uC694\uC57D \u2014 \uD655\uC778\uD558\uACE0 \uC2B9\uC778\uD558\uBA74 \uBC18\uC601\uB3FC\uC694" })),
        React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', padding: '0 8px', marginBottom: 12 }) },
            React.createElement("div", { style: { display: 'flex', gap: 2, overflowX: 'auto' } },
                tab('review', '확인 대기'),
                tab('run', '진행 중'),
                tab('done', '처리됨'),
                tab('all', '전체')),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement("div", { style: { display: 'flex', gap: 6, padding: '6px 0', flex: '1 1 260px', justifyContent: 'flex-end' } },
                !props.pid && React.createElement("select", { "data-ax-inbox-item": true, value: pf, onChange: e => { setPf(e.target.value); setSel(undefined); }, style: sel1 },
                    React.createElement("option", { value: "" }, "\uC544\uC774\uD15C \uC804\uCCB4"),
                    props.items.map(p => React.createElement("option", { key: p.id, value: p.id }, p.name))),
                React.createElement("select", { "data-ax-inbox-stage": true, value: sf, onChange: e => { setSf(e.target.value); setSel(undefined); }, style: sel1 },
                    React.createElement("option", { value: "" }, "\uB2E8\uACC4 \uC804\uCCB4"),
                    ['①', '②', '③', '④', '⑤', '⑥', '⑦'].map((n, i) => React.createElement("option", { key: i, value: String(i) },
                        n,
                        " ",
                        (0, work_1.stagesOf)(props.items.filter(x => x.id === (pf || props.pid))[0] || props.items[0])[i].short))))),
        React.createElement("div", { className: "axw-main" },
            React.createElement("div", { "data-ax-inbox-list": true, style: ui_1.card },
                !list.length && React.createElement("div", { style: { padding: '22px 16px', fontSize: 13, color: ui_1.C.faint } }, box === 'review' ? '확인할 AI 결과가 없어요.' : '없어요.'),
                list.map(({ p, j, s, k }) => (React.createElement("div", { key: j.id, className: 'axw-row' + (sel === j.id ? ' on' : ''), "data-ax-inbox-row": j.kind, "data-ax-inbox-state": s, onClick: () => setSel(j.id), style: { alignItems: 'flex-start' } },
                    React.createElement("span", { style: { marginTop: 5 } },
                        React.createElement(ui_1.Dot, { s: DOT[s] || 'open' })),
                    React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                        React.createElement("div", { style: { fontWeight: 600, fontSize: 13.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                            j.label,
                            j.input ? React.createElement("span", { style: { color: ui_1.C.faint, fontWeight: 500 } },
                                " \u2014 ",
                                j.input.slice(0, 30)) : null),
                        React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.sub, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: 1 } }, (j.result || j.note || '').split('\n').filter(x => x.trim())[0] || ''),
                        React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                            props.pid ? '' : `${p.name.split(' (')[0]} · `,
                            (0, work_1.stagesOf)(p)[k] ? `${(0, work_1.stagesOf)(p)[k].no} ${(0, work_1.stagesOf)(p)[k].short}` : '',
                            " \u00B7 ",
                            j.auto ? `자동 · ${j.auto}` : `${j.who} 맡김`,
                            " \u00B7 ",
                            fmtAt(j.doneAt || j.at))),
                    React.createElement("span", { className: box === 'review' ? 'axw-hide-sm' : undefined, style: { fontSize: 12.5, fontWeight: 700, whiteSpace: 'nowrap', color: s === 'review' ? ui_1.C.soon : s === 'applied' ? ui_1.C.ok : s === 'error' ? ui_1.C.late : ui_1.C.faint } }, ai_1.AI_STATE_LABEL[s] || s))))),
            React.createElement("div", { className: 'axw-panel' + (cur ? ' sheet' : ' axw-hide-sm'), style: ui_1.card }, cur ? React.createElement(JobPanel, { key: cur.j.id, p: cur.p, j: cur.j, k: cur.k, who: props.who, act: props.act, onClose: () => setSel(undefined), onItem: props.onItem && !props.pid ? () => props.onItem(cur.p.id, cur.k) : undefined })
                : React.createElement("div", { className: "axw-hide-sm", style: { padding: '16px', fontSize: 13, color: ui_1.C.sub, lineHeight: 1.6 } },
                    React.createElement("div", { style: { fontWeight: 700, color: ui_1.C.text, marginBottom: 4 } },
                        "\uAC74\uC744 \uACE0\uB974\uC138\uC694",
                        React.createElement(ui_1.Tip, { t: "\uB0B4\uC6A9\uC744 \uC77D\uACE0 \uC2B9\uC778\uD558\uBA74 \uC544\uC774\uD15C\uC5D0 \uBC18\uC601\uB418\uACE0, \uACE0\uCE60 \uAC8C \uC788\uC73C\uBA74 \uC218\uC815 \uB4A4 \uC2B9\uC778, \uC4F8 \uC218 \uC5C6\uC73C\uBA74 \uC0AC\uC720\uB97C \uC801\uC5B4 \uBC18\uB824\uD574\uC694. AI\uAC00 \uC9C1\uC811 \uACE0\uCE58\uAC70\uB098 \uBCF4\uB0B4\uC9C0 \uC54A\uC544\uC694." })))))));
}
function JobPanel(props) {
    const { p, j } = props;
    const s = (0, ai_1.jobState)(j);
    const [editing, setEditing] = React.useState(false);
    const [text, setText] = React.useState(j.result || '');
    const [rej, setRej] = React.useState(false);
    const [why, setWhy] = React.useState('');
    const mail = (0, ai_1.kindInfo)(j.kind).mail;
    const mailto = () => { const ls = (j.result || '').split('\n'); const sub = (ls.filter(l => /^\s*제목\s*[:：]/.test(l))[0] || ls[0] || '').replace(/^\s*제목\s*[:：]\s*/, ''); return `mailto:?subject=${encodeURIComponent(sub.slice(0, 120))}&body=${encodeURIComponent((j.result || '').slice(0, 1800))}`; };
    return (React.createElement("div", { "data-ax-job-panel": j.kind, "data-ax-job-state": s },
        React.createElement("div", { style: { display: 'flex', alignItems: 'flex-start', gap: 8, padding: '14px 16px 10px', borderBottom: `1px solid ${ui_1.C.line}` } },
            React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                React.createElement("div", { style: { fontWeight: 700, fontSize: 15 } }, j.label),
                React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint, marginTop: 2 } },
                    p.name,
                    " \u00B7 ",
                    (0, work_1.stagesOf)(p)[props.k] ? `${(0, work_1.stagesOf)(p)[props.k].no} ${(0, work_1.stagesOf)(p)[props.k].short}` : '',
                    " \u00B7 ",
                    fmtAt(j.doneAt || j.at),
                    j.owner ? ` · 확인 ${j.owner}` : '')),
            React.createElement("button", { onClick: props.onClose, style: Object.assign(Object.assign({}, ui_1.btn), { padding: '2px 8px' }) }, "\uB2EB\uAE30")),
        React.createElement("div", { style: { padding: 14, display: 'flex', flexDirection: 'column', gap: 10 } },
            j.auto && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.accent, fontWeight: 600 } },
                "AI\uAC00 \uBA3C\uC800 \uD55C \uC77C \u2014 ",
                j.auto),
            j.input && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.sub } },
                React.createElement("span", { style: ui_1.label }, "\uC694\uCCAD "),
                j.input),
            s === 'running' && React.createElement("div", { style: { fontSize: 13, color: ui_1.C.sub } },
                "AI \uC791\uC5C5 \uC911",
                React.createElement(ui_1.Tip, { t: "\uBCF4\uD1B5 10~40\uCD08 \uAC78\uB824\uC694" })),
            s === 'queued' && React.createElement("div", { style: { fontSize: 13, color: ui_1.C.sub } }, "\uCC28\uB840\uB97C \uAE30\uB2E4\uB9AC\uB294 \uC911\uC774\uC5D0\uC694."),
            s === 'offline' && React.createElement("div", { style: { fontSize: 13, color: ui_1.C.sub } },
                React.createElement("b", null, "AI \uC5F0\uACB0 \uC804"),
                " \u2014 \uC5F0\uACB0\uB418\uBA74 \uB2E4\uC2DC \uB9E1\uACA8 \uC8FC\uC138\uC694."),
            s === 'nodata' && React.createElement("div", { style: { fontSize: 13, color: ui_1.C.sub } },
                React.createElement("b", null, "\uB370\uC774\uD130 \uC5F0\uACB0 \uC804"),
                " \u2014 ",
                j.note),
            s === 'error' && React.createElement("div", { style: { fontSize: 13, color: ui_1.C.late } }, j.note || '중간에 끊겼어요.'),
            editing ? React.createElement("textarea", { "data-ax-job-edit": true, value: text, onChange: e => setText(e.target.value), rows: 12, style: Object.assign(Object.assign({}, ui_1.inp), { resize: 'vertical', lineHeight: 1.55 }) })
                : j.result ? React.createElement("div", { "data-ax-job-text": true, style: { fontSize: 13.5, lineHeight: 1.6, whiteSpace: 'pre-wrap', background: ui_1.C.bg, border: `1px solid ${ui_1.C.line}`, borderRadius: 8, padding: 12, maxHeight: '46vh', overflow: 'auto' } }, j.result) : null,
            j.edited && !editing && React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint } },
                j.edited,
                "\uB2D8\uC774 \uACE0\uCE68"),
            s === 'applied' && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.ok, fontWeight: 600 } },
                j.by,
                "\uB2D8\uC774 \uC2B9\uC778 \u2014 \uC544\uC774\uD15C\uC5D0 \uBC18\uC601\uB428"),
            s === 'dismissed' && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.sub } },
                j.by || '',
                "\uB2D8\uC774 \uBC18\uB824",
                j.note ? ` — ${j.note}` : ''),
            s === 'review' && !rej && (editing
                ? React.createElement("div", { style: { display: 'flex', gap: 8 } },
                    React.createElement("button", { "data-ax-job-save": true, onClick: () => { props.act.edit(p.id, j, text); setEditing(false); }, style: Object.assign(Object.assign({}, ui_1.primary), { flex: 1 }) }, "\uACE0\uCE5C \uB0B4\uC6A9 \uC800\uC7A5"),
                    React.createElement("button", { onClick: () => { setEditing(false); setText(j.result || ''); }, style: ui_1.btn }, "\uCDE8\uC18C"))
                : React.createElement("div", { style: { display: 'flex', gap: 8, flexWrap: 'wrap' } },
                    React.createElement("button", { "data-ax-job-approve": true, onClick: () => props.act.apply(p.id, j), style: Object.assign(Object.assign({}, ui_1.primary), { flex: '1 1 90px' }) }, "\uC2B9\uC778"),
                    React.createElement("button", { "data-ax-job-editbtn": true, onClick: () => setEditing(true), style: ui_1.btn }, "\uC218\uC815"),
                    React.createElement("button", { "data-ax-job-reject": true, onClick: () => setRej(true), style: Object.assign(Object.assign({}, ui_1.btn), { color: ui_1.C.late }) }, "\uBC18\uB824"))),
            rej && React.createElement("div", { style: { display: 'flex', gap: 6 } },
                React.createElement("input", { "data-ax-job-why": true, autoFocus: true, placeholder: "\uBC18\uB824 \uC0AC\uC720", value: why, onChange: e => setWhy(e.target.value), style: ui_1.inp }),
                React.createElement("button", { "data-ax-job-why-ok": true, disabled: !why.trim(), onClick: () => { props.act.reject(p.id, j, why.trim()); setRej(false); }, style: Object.assign(Object.assign({}, ui_1.primary), { opacity: why.trim() ? 1 : 0.4 }) }, "\uBC18\uB824"),
                React.createElement("button", { onClick: () => setRej(false), style: ui_1.btn }, "\uCDE8\uC18C")),
            (s === 'offline' || s === 'error' || s === 'dismissed') && React.createElement("button", { "data-ax-job-retry": true, onClick: () => props.act.retry(p.id, j), style: Object.assign(Object.assign({}, ui_1.btn), { alignSelf: 'flex-start' }) }, "AI\uC5D0\uAC8C \uB2E4\uC2DC \uB9E1\uAE30\uAE30"),
            React.createElement("div", { style: { display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' } },
                j.result && mail && s === 'review' && React.createElement("a", { "data-ax-job-mail": true, href: mailto(), style: Object.assign(Object.assign({}, ui_1.btn), { textDecoration: 'none' }) }, "\uBA54\uC77C \uC571\uC73C\uB85C \uC5F4\uAE30"),
                j.result && React.createElement("button", { onClick: () => { navigator.clipboard.writeText(j.result || '').then(() => undefined, () => undefined); }, style: ui_1.btn }, "\uBCF5\uC0AC"),
                props.onItem && React.createElement("button", { "data-ax-job-item": true, onClick: props.onItem, style: ui_1.btn }, "\uC544\uC774\uD15C \uBCF4\uAE30")),
            s === 'review' && React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint } },
                "\uC2B9\uC778\uD558\uBA74 ",
                ai_1.APPLY_NOTE[j.kind] || '아이템 기록에 남아요',
                mail ? ' · 메일은 초안만, 보내기는 사람이' : ''))));
}
// ───────── 3. 아이템 화면 조각 — 관문 기준 · 일정 판
function GateBoard(props) {
    const { p } = props;
    const st = (0, work_1.stagesOf)(p);
    const ck = (0, work_1.curIdx)(p);
    return (React.createElement("div", { "data-ax-gates": true, style: ui_1.card }, st.map((s, k) => {
        if (!s.gate)
            return null;
        const g = (0, work_1.gateState)(p, s);
        const left = s.docs.length - (0, work_1.stageDocsOk)(p, s);
        const ch = (0, item_1.gateChecks)(p, s);
        const la = (0, work_1.lastApproval)(p, s.gate);
        const col = g === 'approved' ? ui_1.C.ok : g === 'requested' ? ui_1.C.soon : g === 'rejected' ? ui_1.C.late : ui_1.C.faint;
        return (React.createElement("div", { key: s.id, "data-ax-gate-card": (0, work_1.gateKey)(s.gate), "data-ax-gate-state": g, onClick: () => props.onPick(k), className: "axw-row", style: { alignItems: 'flex-start', padding: '14px 16px' } },
            React.createElement("span", { style: { marginTop: 4 } },
                React.createElement(ui_1.Dot, { s: g === 'approved' ? 'done' : g === 'requested' ? 'wait' : g === 'rejected' ? 'late' : k <= ck ? 'open' : 'lock' })),
            React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                React.createElement("div", { style: { display: 'flex', gap: 8, alignItems: 'baseline', flexWrap: 'wrap' } },
                    React.createElement("b", { style: { fontSize: 14.5 } }, s.gate),
                    React.createElement("span", { style: { fontSize: 12.5, color: ui_1.C.faint } },
                        s.no,
                        " ",
                        s.name,
                        " \uB05D")),
                React.createElement("div", { style: { fontSize: 13, color: ui_1.C.sub, marginTop: 3 } },
                    (0, devtype_1.typeInfo)((0, devtype_1.typeOf)(p)).tag,
                    " \uAE30\uC900 \u2014 ",
                    s.gateRule || '단계 산출물 모두 채움'),
                React.createElement("div", { style: { display: 'flex', flexWrap: 'wrap', gap: '2px 14px', marginTop: 6, fontSize: 12.5 } },
                    React.createElement("span", { style: { color: left ? ui_1.C.text : ui_1.C.ok } }, left ? `산출물 ${left}개 남음` : '산출물 다 채움'),
                    ch.map((c, i) => React.createElement("span", { key: i, "data-ax-gate-check": c.ok ? 'ok' : 'no', style: { color: c.ok ? ui_1.C.ok : ui_1.C.text } },
                        c.ok ? '✓' : '○',
                        " ",
                        c.label)))),
            React.createElement("span", { style: { fontSize: 13, fontWeight: 700, color: col, whiteSpace: 'nowrap', textAlign: 'right' } },
                g === 'approved' ? '승인됨' : g === 'requested' ? '승인 대기' : g === 'rejected' ? '반려됨' : '승인 전',
                la ? React.createElement("div", { style: { fontSize: 11.5, color: ui_1.C.faint, fontWeight: 500 } },
                    la.who,
                    " ",
                    (0, ui_1.md)(la.at.slice(0, 10))) : null)));
    })));
}
function LaneBoard(props) {
    const { p } = props;
    const st = (0, work_1.stagesOf)(p);
    const ck = (0, work_1.curIdx)(p);
    return (React.createElement("div", { "data-ax-lanes": true, style: Object.assign(Object.assign({}, ui_1.card), { padding: '12px 14px 14px 0', overflowX: 'auto' }) },
        React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint, padding: '0 0 8px 14px' } }, "\uC5C5\uBB34 \uAD6C\uBD84 \u00D7 \uB2E8\uACC4 \u00B7 \uCE78 \uC22B\uC790 = \uC0B0\uCD9C\uBB3C \uB05D\uB09C \uAC83/\uC804\uCCB4 \u00B7 \uBE57\uAE08 = \uC774 \uC720\uD615\uC5D4 \uD574\uB2F9 \uC5C6\uC74C \u00B7 \uB204\uB974\uBA74 \uADF8 \uC0B0\uCD9C\uBB3C\uB85C"),
        React.createElement("div", { style: { minWidth: 600 } },
            React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '120px repeat(7,minmax(0,1fr))', gap: 3, fontSize: 12, color: ui_1.C.faint, fontWeight: 700, marginBottom: 3 } },
                React.createElement("span", null),
                st.map((s, k) => React.createElement("span", { key: k, style: { textAlign: 'center', color: k === ck ? ui_1.C.text : ui_1.C.faint, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
                    s.no,
                    " ",
                    s.short || ''))),
            sched_1.LANES.map((l, i) => {
                const off = (0, hatch_1.laneOff)(p, i);
                const cs = (0, sched_1.laneCells)(p, i);
                return (React.createElement("div", { key: i, "data-ax-lane": i, "data-ax-off": off ? '1' : '', title: off, style: { display: 'grid', gridTemplateColumns: '120px repeat(7,minmax(0,1fr))', gap: 3, marginBottom: 3, fontSize: 12 } },
                    React.createElement("span", { style: { fontSize: 13, color: off ? ui_1.C.faint : ui_1.C.text, position: 'sticky', left: 0, background: ui_1.C.card, zIndex: 1, display: 'flex', alignItems: 'center', paddingLeft: 14 } }, l),
                    st.map((s, k) => {
                        const c = cs.filter(x => x.k === k)[0];
                        const bg = off ? Guide_1.HATCH : !c ? ui_1.C.hover : c.state === 'wait' ? ui_1.C.line : Gantt_1.BAR[c.state].act;
                        return React.createElement("div", { key: k, "data-ax-lane-cell": `${i}-${k}`, onClick: c && !off ? () => props.onOpen(k, c.keys.filter(x => !(p.docs[x] || {}).done && !(p.docs[x] || {}).skip)[0]) : undefined, style: { height: 26, borderRadius: 4, background: bg, color: c && !off && c.state !== 'wait' ? '#fff' : ui_1.C.sub, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, cursor: c && !off ? 'pointer' : 'default' } }, c && !off ? `${c.done}/${c.total}` : '');
                    })));
            }))));
}
// 아이템 고르기 — PC는 버튼, 폰은 목록 (지연 표시)
function ItemPick(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("select", { "data-ax-pick-select": true, className: "axw-show-sm", value: props.sel, onChange: e => props.onPick(e.target.value), style: { width: '100%', border: `1px solid ${ui_1.C.line2}`, borderRadius: 8, padding: '9px 10px', fontSize: 14, fontWeight: 700, marginBottom: 12, background: ui_1.C.card } }, props.items.map(x => { const l = (0, work_1.projLate)(x); return React.createElement("option", { key: x.id, value: x.id },
            x.name,
            l > 0 ? ` · ${l}일 지연` : ''); })),
        React.createElement("div", { className: "axw-hide-sm", style: { display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 } }, props.items.map(x => {
            const l = (0, work_1.projLate)(x);
            const on = x.id === props.sel;
            return React.createElement("button", { key: x.id, "data-ax-pick": x.id, onClick: () => props.onPick(x.id), style: Object.assign(Object.assign({}, ui_1.btn), { background: on ? ui_1.C.text : ui_1.C.card, color: on ? ui_1.C.inv : ui_1.C.sub, borderColor: on ? ui_1.C.text : ui_1.C.line2 }) },
                x.name,
                l > 0 && React.createElement("span", { style: { marginLeft: 6, color: on ? '#B91C1C' : ui_1.C.late } },
                    l,
                    "\uC77C \uC9C0\uC5F0"));
        }))));
}

};
__m["src/webparts/huromAxPlm/components/Office.js"]=function(module,exports,require){"use strict";
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
exports.OFFICE_CSS = exports.POP = exports.FACE = void 0;
exports.moodOf = moodOf;
exports.Office = Office;
const React = __importStar(require("react"));
const ai_1 = require("src/webparts/huromAxPlm/model/ai.js");
const team_1 = require("src/webparts/huromAxPlm/model/team.js");
const Today_1 = require("src/webparts/huromAxPlm/components/Today.js");
const Dash_1 = require("src/webparts/huromAxPlm/components/Dash.js");
const Shell_1 = require("src/webparts/huromAxPlm/components/Shell.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
exports.FACE = { run: '😤', review: '😏', cool: '😎', err: '😵‍💫', idle: '😪', off: '😶' };
exports.POP = { run: '😤🔥', review: '😏', cool: '😎', err: '😵‍💫', idle: '😪', off: '💤' };
const WORD = { run: '일하는 중', review: '확인 대기', cool: '방금 끝냄', err: '막힘', idle: '쉬는 중', off: '해당 없음' };
function moodOf(t, off, now = Date.now()) {
    if (off || t.state === 'off')
        return 'off';
    if (t.running.length)
        return 'run';
    if (t.review.length)
        return 'review';
    const last = t.last;
    const age = last ? now - new Date(last.doneAt || last.at).getTime() : Infinity;
    if (last && (0, ai_1.jobState)(last) === 'error' && age < 86400000)
        return 'err';
    if (t.jobs.some(j => (0, ai_1.jobState)(j) === 'applied' && !!j.appliedAt && now - new Date(j.appliedAt).getTime() < 30 * 60000))
        return 'cool';
    return 'idle';
}
// 아이소메트릭 — 구역 4열 × 3행, 구역 안 책상 3 × 2
const TW = 58, TH = 29;
const iso = (x, y) => [(x - y) * TW / 2, (x + y) * TH / 2];
const pts = (xs) => xs.map(p => p.join(',')).join(' ');
const ZW = 3.7, ZH = 2.7;
const zoneXY = (z) => [(z % 4) * 4.1, Math.floor(z / 4) * 3.1];
exports.OFFICE_CSS = `
.axf2{position:relative;border-radius:14px;overflow:hidden;background:radial-gradient(ellipse at 50% 30%,#17201A 0%,#0B0D0C 70%);border:1px solid ${ui_1.C.line};margin-bottom:14px}
.axf2 svg{display:block;width:100%;height:auto;max-height:430px}
.axf2-dark .axf2-room{filter:brightness(.55) saturate(.5)}
.axf2-m{cursor:pointer}
.axf2-m:hover .axf2-head{stroke:${ui_1.C.accent};stroke-width:2}
.axf2-run .axf2-body{animation:axfType .28s ease-in-out infinite alternate}
.axf2-run .axf2-scr{fill:${ui_1.C.accent};filter:drop-shadow(0 0 5px rgba(79,209,107,.9))}
.axf2-review .axf2-hand{animation:axfWave .5s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:50% 100%}
.axf2-idle .axf2-body{animation:axfDoze 3s ease-in-out infinite}
.axf2-idle .axf2-z{animation:axfZ 2.4s ease-in infinite}
.axf2-off{opacity:.33}
.axf2-pop{animation:axfPop 3s ease-out forwards}
.axf2-fly{animation:axfFly 1.6s ease-in-out infinite}
@keyframes axfType{from{transform:translateY(0)}to{transform:translateY(-1.6px)}}
@keyframes axfWave{from{transform:rotate(-22deg)}to{transform:rotate(22deg)}}
@keyframes axfDoze{0%,100%{transform:translateY(0)}50%{transform:translateY(1.4px)}}
@keyframes axfZ{0%{opacity:0;transform:translate(0,0)}30%{opacity:.9}100%{opacity:0;transform:translate(6px,-14px)}}
@keyframes axfPop{0%{opacity:0;transform:translateY(6px) scale(.6)}12%{opacity:1;transform:translateY(0) scale(1.15)}20%{transform:scale(1)}85%{opacity:1}100%{opacity:0;transform:translateY(-6px)}}
@keyframes axfFly{0%{offset-distance:0%;opacity:0}10%{opacity:1}90%{opacity:1}100%{offset-distance:100%;opacity:0}}
@media (prefers-reduced-motion:reduce){.axf2 *{animation:none !important}}
`;
function Office(props) {
    const set = React.useContext(Shell_1.SetCtx);
    const aiOff = (set && set.org.aiOff) || {};
    const team = (0, team_1.teamOf)(props.p);
    const dark = props.online === 'off';
    const moods = {};
    team.forEach(t => { moods[t.m.id] = moodOf(t, !!aiOff[t.m.id]); });
    // 상태가 바뀔 때만 3초 말풍선
    const prev = React.useRef(undefined);
    const born = React.useRef(Date.now()); // 처음 2초는 데이터 불러오며 바뀌는 것이라 안 띄움
    const [pops, setPops] = React.useState({});
    const key = team.map(t => t.m.id + ':' + moods[t.m.id]).join('|') + (dark ? '|dark' : '');
    React.useEffect(() => {
        const old = prev.current;
        prev.current = Object.assign({}, moods);
        if (!old || Date.now() - born.current < 2000)
            return;
        const ch = {};
        Object.keys(moods).forEach(id => { if (old[id] !== moods[id])
            ch[id] = { e: exports.POP[moods[id]], k: Date.now() }; });
        if (!Object.keys(ch).length)
            return;
        setPops(x => (Object.assign(Object.assign({}, x), ch)));
        const t = setTimeout(() => setPops(x => { const y = Object.assign({}, x); Object.keys(ch).forEach(id => { if (y[id] && y[id].k === ch[id].k)
            delete y[id]; }); return y; }), 3000);
        return () => clearTimeout(t);
    }, [key]);
    const [sel, setSel] = React.useState(undefined);
    const [fold, setFold] = React.useState(() => typeof window !== 'undefined' && window.innerWidth < 600);
    // 자리
    const seat = {};
    team_1.DEPTS.forEach((d, z) => { const [zx, zy] = zoneXY(z); team_1.TEAM.filter(m => m.dept === d).forEach((m, i) => { seat[m.id] = [zx + 0.55 + (i % 3) * 1.15, zy + 0.6 + Math.floor(i / 3) * 1.2]; }); });
    // 일 넘겨주기 — 이어진 일(job.from)이 대기·진행 중일 때만
    const jobs = props.p.aiJobs || [];
    const flies = [];
    jobs.forEach(j => {
        if (!j.from || ['queued', 'running'].indexOf((0, ai_1.jobState)(j)) < 0)
            return;
        const src = jobs.filter(x => x.id === j.from)[0];
        if (!src)
            return;
        const a = team_1.TEAM[(0, team_1.mateOf)(src)].id, b = team_1.TEAM[(0, team_1.mateOf)(j)].id;
        if (a !== b)
            flies.push({ a, b, id: j.id });
    });
    const busy = team.filter(t => moods[t.m.id] === 'run').length, wait = team.filter(t => moods[t.m.id] === 'review').length;
    const mate = sel ? team.filter(t => t.m.id === sel)[0] : undefined;
    const vb = '-280 -62 760 432';
    return (React.createElement("div", { "data-axf2": true, "data-axf2-ai": props.online, className: 'axf2' + (dark ? ' axf2-dark' : '') },
        React.createElement("div", { style: { position: 'absolute', left: 14, top: 10, zIndex: 2, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', right: 14 } },
            React.createElement("b", { style: { fontSize: 15 } }, "AI \uC0AC\uBB34\uC2E4"),
            React.createElement("span", { style: { fontSize: 13, color: ui_1.C.sub } },
                "\uC77C\uD558\uB294 \uC911 ",
                React.createElement("b", { style: { color: ui_1.C.ok } }, busy),
                " \u00B7 \uD655\uC778 \uB300\uAE30 ",
                React.createElement("b", { style: { color: ui_1.C.soon } }, wait),
                " \u00B7 ",
                team_1.TEAM.length,
                "\uBA85"),
            React.createElement(ui_1.Tip, { t: "\uC2E4\uC81C AI \uC77C \uC0C1\uD0DC\uB9CC \uBCF4\uC5EC\uC694. \uD83D\uDE24\uD83D\uDD25 \uC77C\uD558\uB294 \uC911 \u00B7 \uD83D\uDE0F \uD655\uC778 \uB300\uAE30 \u00B7 \uD83D\uDE0E \uBC29\uAE08 \uB05D\uB0C4 \u00B7 \uD83D\uDE35\u200D\uD83D\uDCAB \uB9C9\uD798 \u00B7 \uD83D\uDE2A \uC26C\uB294 \uC911. \uC774\uBAA8\uD2F0\uCF58\uC740 \uC0C1\uD0DC\uAC00 \uBC14\uB014 \uB54C\uB9CC 3\uCD08 \uB5A0\uC694. \uB0A0\uC544\uAC00\uB294 \uC11C\uB958\uB294 \uC55E AI \uACB0\uACFC\uB97C \uBC18\uC601\uD574 \uC774\uC5B4\uC9C4 \uC77C\uC774\uC5D0\uC694. \uBBF8\uB2C8\uBBF8\uB97C \uB204\uB974\uBA74 \uADF8 AI \uC77C\uC774 \uC606\uC5D0 \uC5F4\uB824\uC694." }),
            dark && React.createElement("span", { "data-axf2-off": true, style: { fontSize: 13, fontWeight: 800, color: ui_1.C.late } }, "\uD83D\uDCA4 AI \uAEBC\uC9D0"),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement("button", { "data-axf2-fold": true, onClick: () => setFold(!fold), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '3px 10px', fontSize: 12 }) }, fold ? '사무실 보기' : '접기')),
        fold ? React.createElement("div", { style: { height: 44 } }) : React.createElement("svg", { viewBox: vb, role: "img", "aria-label": "AI \uC0AC\uBB34\uC2E4", style: { marginTop: 26 } },
            React.createElement("g", { className: "axf2-room" },
                team_1.DEPTS.map((d, z) => {
                    const [zx, zy] = zoneXY(z);
                    const c = [iso(zx, zy), iso(zx + ZW, zy), iso(zx + ZW, zy + ZH), iso(zx, zy + ZH)];
                    const lb = iso(zx + 0.1, zy + 0.05);
                    return React.createElement("g", { key: d, "data-axf2-zone": d },
                        React.createElement("polygon", { points: pts(c), fill: z % 2 ? '#141A16' : '#121614', stroke: "#26302A", strokeWidth: 1 }),
                        React.createElement("text", { x: lb[0] - 4, y: lb[1] - 4, fill: "#9AA69E", fontSize: 12, fontWeight: 700, textAnchor: "middle" }, d));
                }),
                team_1.TEAM.map(m => {
                    const t = team.filter(x => x.m.id === m.id)[0];
                    const md = moods[m.id];
                    const [x, y] = seat[m.id];
                    const [sx, sy] = iso(x, y);
                    const n = t.running.length + t.review.length;
                    return (React.createElement("g", { key: m.id, "data-axf2-mate": m.id, "data-axf2-mood": md, className: `axf2-m axf2-${md}`, transform: `translate(${sx},${sy})`, onClick: () => setSel(m.id) },
                        React.createElement("title", null, `${m.name} — ${WORD[md]}`),
                        React.createElement("polygon", { points: "0,-6 20,4 0,14 -20,4", fill: "#2A2F2C" }),
                        React.createElement("polygon", { points: "-20,4 0,14 0,20 -20,10", fill: "#1E2220" }),
                        React.createElement("polygon", { points: "0,14 20,4 20,10 0,20", fill: "#252A27" }),
                        React.createElement("polygon", { className: "axf2-scr", points: "-10,-20 4,-13 4,-3 -10,-10", fill: md === 'off' ? '#1A1C1B' : '#33413A', stroke: "#0C0E0D", strokeWidth: 1 }),
                        React.createElement("g", { className: "axf2-body" },
                            React.createElement("rect", { x: 4, y: -6, width: 13, height: 15, rx: 5, fill: md === 'run' ? '#3E7F52' : md === 'review' ? '#8A6A24' : '#3A3F3C' }),
                            React.createElement("circle", { className: "axf2-head", cx: 10.5, cy: -14, r: 9, fill: "#E9DCC8", stroke: "#0C0E0D", strokeWidth: 1 }),
                            React.createElement("text", { x: 10.5, y: -10, fontSize: 13, textAnchor: "middle" }, dark ? '😴' : exports.FACE[md]),
                            md === 'review' && !dark && React.createElement("text", { className: "axf2-hand", x: 22, y: -14, fontSize: 11 }, "\u270B"),
                            md === 'idle' && !dark && React.createElement("text", { className: "axf2-z", x: 18, y: -22, fontSize: 9, fill: "#9C9CA3" }, "z")),
                        n > 0 && React.createElement("g", { "data-axf2-n": n },
                            React.createElement("circle", { cx: -16, cy: -12, r: 7, fill: md === 'run' ? ui_1.C.accent : ui_1.C.soon }),
                            React.createElement("text", { x: -16, y: -8.5, fontSize: 9.5, fontWeight: 800, textAnchor: "middle", fill: "#0B0D0C" }, n)),
                        pops[m.id] && React.createElement("text", { key: pops[m.id].k, "data-axf2-pop": true, className: "axf2-pop", x: 10, y: -30, fontSize: 15, textAnchor: "middle" }, pops[m.id].e)));
                }),
                flies.map(f => {
                    const [ax, ay] = iso(seat[f.a][0], seat[f.a][1]);
                    const [bx, by] = iso(seat[f.b][0], seat[f.b][1]);
                    const mx = (ax + bx) / 2, my = Math.min(ay, by) - 60;
                    const path = `M${ax},${ay - 20} Q${mx},${my} ${bx},${by - 20}`;
                    return React.createElement("g", { key: f.id, "data-axf2-fly": f.a + '>' + f.b },
                        React.createElement("path", { d: path, fill: "none", stroke: "rgba(79,209,107,.35)", strokeDasharray: "3 4" }),
                        React.createElement("text", { className: "axf2-fly", fontSize: 13, style: { offsetPath: `path('${path}')` } }, "\uD83D\uDCC4"));
                }))),
        mate && React.createElement(MatePanel, { t: mate, mood: moods[mate.m.id], p: props.p, act: props.act, onClose: () => setSel(undefined) })));
}
function MatePanel(props) {
    const { t, p, act } = props;
    const row = (j, btns) => {
        const f = (0, Today_1.friendly)(j);
        return (React.createElement("div", { key: j.id, className: "axw-row", "data-axf2-job": (0, ai_1.jobState)(j), style: { cursor: 'default', flexWrap: 'wrap' } },
            React.createElement("span", { style: { flex: '1 1 160px', minWidth: 0 } },
                f.title,
                j.auto && React.createElement("span", { style: { fontSize: 12, color: ui_1.C.faint } },
                    " \u00B7 ",
                    j.auto)),
            btns && React.createElement(React.Fragment, null,
                React.createElement("button", { onClick: () => act.apply(p.id, j), style: Object.assign(Object.assign({}, ui_1.btn), { background: ui_1.C.accent, color: ui_1.C.inv, borderColor: ui_1.C.accent }) }, f.go),
                React.createElement("button", { onClick: () => act.reject(p.id, j, '안 함'), style: ui_1.btn }, "\uC548 \uD568"))));
    };
    const done = t.jobs.filter(j => (0, ai_1.jobState)(j) === 'applied').slice(-5).reverse();
    return (React.createElement("div", { "data-axf2-panel": t.m.id, style: Object.assign(Object.assign({}, ui_1.card), { position: 'fixed', right: 12, top: 70, bottom: 12, width: 360, maxWidth: 'calc(100vw - 24px)', zIndex: 60, overflowY: 'auto', boxShadow: '0 16px 40px rgba(0,0,0,.6)' }) },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, padding: '14px 16px', borderBottom: `1px solid ${ui_1.C.line}` } },
            React.createElement("span", { style: { fontSize: 22 } }, exports.FACE[props.mood]),
            React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                React.createElement("div", { style: { fontWeight: 800 } },
                    t.m.name,
                    React.createElement(ui_1.Tip, { t: t.m.does })),
                React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.faint } },
                    t.m.dept,
                    " \u00B7 ",
                    WORD[props.mood])),
            React.createElement("button", { "data-axf2-close": true, onClick: props.onClose, style: ui_1.btn }, "\uB2EB\uAE30")),
        React.createElement("div", { style: { padding: '10px 16px' } },
            React.createElement(Dash_1.AiButton, { pid: p.id, kinds: t.m.kinds, label: "\uC774 AI\uC5D0\uAC8C \uB9E1\uAE30\uAE30" })),
        React.createElement("div", { style: { padding: '0 0 6px' } },
            React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: ui_1.C.faint, padding: '6px 16px' } },
                "\uC9C0\uAE08 \uD558\uB294 \uC77C ",
                t.running.length),
            t.running.map(j => row(j, false)),
            React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: ui_1.C.faint, padding: '10px 16px 6px' } },
                "\uD655\uC778 \uB300\uAE30 ",
                t.review.length),
            t.review.map(j => row(j, true)),
            React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: ui_1.C.faint, padding: '10px 16px 6px' } }, "\uB05D\uB0B8 \uC77C"),
            !done.length && React.createElement("div", { style: { fontSize: 13, color: ui_1.C.faint, padding: '0 16px 10px' } }, "\uC544\uC9C1 \uC5C6\uC74C"),
            done.map(j => row(j, false)))));
}

};
__m["src/webparts/huromAxPlm/components/Shell.js"]=function(module,exports,require){"use strict";
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
exports.CHANGES = exports.pushRecent = exports.readRecent = exports.SHELL_CSS = exports.MENUS = exports.isAdmin = exports.SetCtx = exports.meId = exports.ORG_ID = exports.ROLE_LABEL = void 0;
exports.useSettings = useSettings;
exports.Side = Side;
exports.ItemSelect = ItemSelect;
exports.cmdHits = cmdHits;
exports.SearchBox = SearchBox;
exports.GatesView = GatesView;
exports.TeamView = TeamView;
exports.SettingsView = SettingsView;
const React = __importStar(require("react"));
const ai_1 = require("src/webparts/huromAxPlm/model/ai.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const team_1 = require("src/webparts/huromAxPlm/model/team.js");
const Gate_1 = require("src/webparts/huromAxPlm/components/Gate.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
exports.ROLE_LABEL = { view: '보기', edit: '편집', approve: '승인', admin: '관리자' };
exports.ORG_ID = 'org';
const meId = (who) => 'me:' + who.replace(/\s/g, '');
exports.meId = meId;
const blank = (id, name) => ({ id, code: id, name, updated: new Date().toISOString() });
exports.SetCtx = React.createContext(undefined);
const same = (a, b) => !!a && !!b && a.replace(/\s/g, '') === b.replace(/\s/g, '');
const isAdmin = (org, who) => { const r = org.roles || {}; const admins = Object.keys(r).filter(k => r[k] === 'admin'); return !admins.length || admins.some(k => same(k, who)); };
exports.isAdmin = isAdmin;
function useSettings(store, who, onErr) {
    const [org, setOrg] = React.useState(() => blank(exports.ORG_ID, '회사 설정'));
    const [me, setMe] = React.useState(() => blank((0, exports.meId)(who), who + ' 설정'));
    React.useEffect(() => {
        if (!store)
            return;
        store.list().then(rows => { const o = rows.filter(r => r.id === exports.ORG_ID)[0]; const m = rows.filter(r => r.id === (0, exports.meId)(who))[0]; if (o)
            setOrg(o); if (m)
            setMe(m); }, e => onErr('설정을 못 읽었어요 — ' + String((e && e.message) || e)));
    }, [store, who]);
    const save = (cur, p, set) => {
        const next = Object.assign(Object.assign(Object.assign({}, cur), p), { updated: new Date().toISOString() });
        set(next);
        if (store)
            store.save(next).then(r => set(Object.assign(Object.assign({}, next), { spId: r.spId, spVer: r.spVer })), e => onErr('설정을 저장 못 했어요 — ' + String((e && e.message) || e)));
    };
    return { org, me, admin: (0, exports.isAdmin)(org, who), saveOrg: p => save(org, p, setOrg), saveMe: p => save(me, p, setMe) };
}
const ICON = {
    home: 'M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z', item: 'M4 4h16v16H4zM4 9h16M9 9v11',
    bom: 'M5 5h4v4H5zM15 5h4v4h-4zM10 15h4v4h-4zM7 9v3h10V9M12 12v3', ecr: 'M4 8h13l-3-3M20 16H7l3 3',
    gate: 'M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7zM9 12l2 2 4-4', team: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3 3-5 6-5s6 2 6 5M17 11a2.5 2.5 0 1 0 0-5M21 19c0-2.4-1.6-4-4-4.5',
    notes: 'M5 4h14v11l-5 5H5zM14 20v-5h5', set: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z'
};
exports.MENUS = [['home', '홈'], ['item', '아이템'], ['bom', 'BOM'], ['ecr', '설계 변경'], ['gate', '관문 승인'], ['team', 'AI 팀원'], ['notes', '포스트잇'], ['set', '설정']];
exports.SHELL_CSS = `
.axs{display:flex;min-height:100vh}
.axs-side{width:208px;flex:0 0 208px;background:#0A0A0B;border-right:1px solid ${ui_1.C.line};position:sticky;top:0;height:100vh;display:flex;flex-direction:column;padding:12px 8px;z-index:20;transition:width .18s,flex-basis .18s}
.axs-side.fold{width:60px;flex-basis:60px}
.axs-side.fold .axs-t{display:none}
.axs-logo{display:flex;align-items:center;gap:8px;padding:6px 10px 16px;font-weight:800;font-size:15px;white-space:nowrap}
.axs-m{display:flex;align-items:center;gap:11px;width:100%;border:none;background:transparent;color:${ui_1.C.sub};padding:9px 11px;border-radius:9px;font-size:14px;font-weight:600;cursor:pointer;text-align:left;white-space:nowrap;margin-bottom:2px;position:relative}
.axs-m:hover{background:${ui_1.C.hover};color:${ui_1.C.text}}
.axs-m.on{background:${ui_1.C.accentBg};color:${ui_1.C.accent}}
.axs-m svg{flex:0 0 18px}
.axs-n{margin-left:auto;font-size:11.5px;font-weight:800;color:${ui_1.C.soon}}
.axs-side.fold .axs-n{position:absolute;top:3px;right:5px;margin:0}
.axs-body{flex:1;min-width:0}
.axs-top{height:54px;display:flex;align-items:center;gap:10px;padding:0 20px;border-bottom:1px solid ${ui_1.C.line};background:${ui_1.C.card};position:sticky;top:0;z-index:15}
.axs-pop{position:absolute;top:calc(100% + 6px);left:0;z-index:40;background:${ui_1.C.card};border:1px solid ${ui_1.C.line2};border-radius:12px;box-shadow:0 14px 40px rgba(0,0,0,.55);padding:8px;width:340px;max-width:calc(100vw - 24px)}
.axs-opt{display:flex;align-items:center;gap:8px;width:100%;border:none;background:transparent;color:${ui_1.C.text};padding:8px 9px;border-radius:7px;font-size:13.5px;cursor:pointer;text-align:left}
.axs-opt:hover,.axs-opt.on{background:${ui_1.C.hover}}
.axs-chip{border:1px solid ${ui_1.C.line2};background:transparent;color:${ui_1.C.sub};border-radius:999px;padding:3px 10px;font-size:12.5px;font-weight:600;cursor:pointer;white-space:nowrap;max-width:140px;overflow:hidden;text-overflow:ellipsis}
.axs-chip:hover{color:${ui_1.C.text};border-color:${ui_1.C.faint}}
.axs-burger{display:none}
.axs-set{display:grid;grid-template-columns:180px minmax(0,1fr);gap:16px;align-items:start}
.axs-tog{width:38px;height:22px;border-radius:11px;border:none;cursor:pointer;position:relative;flex:0 0 auto;transition:background .15s}
.axs-tog::after{content:'';position:absolute;top:3px;width:16px;height:16px;border-radius:50%;background:#fff;transition:left .15s}
.axs-tog.on{background:${ui_1.C.accent}}.axs-tog.on::after{left:19px}
.axs-tog.off{background:#3A3A40}.axs-tog.off::after{left:3px}
.axs-line{display:flex;align-items:center;gap:12px;padding:12px 0;border-top:1px solid ${ui_1.C.line};flex-wrap:wrap}
.axs-line:first-child{border-top:none}
.axs-office{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px}
.axw-light{filter:invert(1) hue-rotate(180deg)}
.axw-light img{filter:invert(1) hue-rotate(180deg)}
@media (max-width:820px){
  .axs-side{position:fixed;left:0;top:0;bottom:0;transform:translateX(-100%);transition:transform .18s;width:230px !important;flex-basis:230px !important;box-shadow:8px 0 30px rgba(0,0,0,.5)}
  .axs-side.open{transform:none}
  .axs-side .axs-t{display:inline !important}
  .axs-burger{display:inline-flex}
  .axs-top{padding:0 10px;gap:6px}
  .axs-recent,.axs-me{display:none !important}
  .axs-set{grid-template-columns:minmax(0,1fr)}
}
@media (max-width:520px){
  .axs-isel{flex:1 1 auto !important}
  .axs-grp{display:none}
  .axs-srch{flex:0 0 38px !important}
  .axs-srch input{color:transparent;padding-right:0}
  .axs-srch input::placeholder{color:transparent}
  .axs-srch:focus-within{position:absolute !important;left:8px;right:8px;max-width:none !important;z-index:30}
  .axs-srch:focus-within input{color:inherit}
  .axs-srch:focus-within input::placeholder{color:#85858C}
}`;
const Ico = (props) => React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: props.d }));
function Side(props) {
    return (React.createElement("aside", { "data-ax-side": true, className: 'axs-side' + (props.fold ? ' fold' : '') + (props.open ? ' open' : '') },
        React.createElement("div", { className: "axs-logo" },
            React.createElement("span", { style: { width: 26, height: 26, borderRadius: 8, background: ui_1.C.accent, color: ui_1.C.inv, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900 } }, "AX"),
            React.createElement("span", { className: "axs-t" }, "AX-PLM")),
        exports.MENUS.map(m => React.createElement("button", { key: m[0], "data-ax-menu": m[0], title: m[1], className: 'axs-m' + (props.menu === m[0] ? ' on' : ''), onClick: () => props.go(m[0]), style: m[0] === 'set' ? { marginTop: 'auto' } : undefined },
            React.createElement(Ico, { d: ICON[m[0]] }),
            React.createElement("span", { className: "axs-t" }, m[1]),
            props.counts[m[0]] ? React.createElement("span", { className: "axs-n" }, props.counts[m[0]]) : null)),
        React.createElement("button", { "data-ax-fold": true, className: "axs-m axw-hide-sm", title: props.fold ? '메뉴 펼치기' : '메뉴 접기', onClick: () => props.setFold(!props.fold) },
            React.createElement(Ico, { d: props.fold ? 'M9 6l6 6-6 6' : 'M15 6l-6 6 6 6' }),
            React.createElement("span", { className: "axs-t" }, "\uC811\uAE30"))));
}
// ───────── 위쪽 바 — 아이템 선택 칸(이름·모델명 검색, 원액기군/상품군) · 최근 본 3개 · 검색 · 알림 종
const RECENT = 'axplm-recent';
const readRecent = () => { try {
    return JSON.parse(window.localStorage.getItem(RECENT) || '[]');
}
catch (e) {
    return [];
} };
exports.readRecent = readRecent;
const pushRecent = (id) => { try {
    window.localStorage.setItem(RECENT, JSON.stringify([id].concat((0, exports.readRecent)().filter(x => x !== id)).slice(0, 4)));
}
catch (e) { /* 안 돼도 됨 */ } };
exports.pushRecent = pushRecent;
const codeOf = (p) => p.itemCode || '';
const groupOf = (p) => ai_1.BRANCH_LABEL[(0, ai_1.branchOf)((0, devtype_1.typeOf)(p))] + '군';
function ItemSelect(props) {
    const [open, setOpen] = React.useState(false);
    const [q, setQ] = React.useState('');
    const ref = React.useRef(null);
    React.useEffect(() => { if (!open)
        return undefined; const f = (e) => { if (ref.current && !ref.current.contains(e.target))
        setOpen(false); }; document.addEventListener('pointerdown', f); return () => document.removeEventListener('pointerdown', f); }, [open]);
    const k = q.trim().toLowerCase();
    const hit = props.items.filter(p => !k || (p.name + ' ' + codeOf(p)).toLowerCase().indexOf(k) >= 0);
    const groups = ['원액기군', '상품군'].map(g => [g, hit.filter(p => groupOf(p) === g)]).filter(g => g[1].length);
    const pick = (id) => { props.onPick(id); setOpen(false); setQ(''); };
    const c = props.cur;
    return (React.createElement("div", { ref: ref, className: "axs-isel", style: { position: 'relative', minWidth: 0, flex: '0 1 300px' } },
        React.createElement("button", { "data-ax-isel": true, onClick: () => setOpen(!open), style: Object.assign(Object.assign({}, ui_1.btn), { borderRadius: 9, width: '100%', display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', background: ui_1.C.hover }) },
            c ? React.createElement(React.Fragment, null,
                React.createElement("span", { className: "axs-grp", style: { fontSize: 11, color: ui_1.C.faint, fontWeight: 700 } }, groupOf(c)),
                React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'left' } }, c.name),
                (0, work_1.projLate)(c) > 0 && React.createElement(ui_1.Dot, { s: "late", size: 6 })) : React.createElement("span", { style: { flex: 1, textAlign: 'left', color: ui_1.C.faint } }, "\uC544\uC774\uD15C \uACE0\uB974\uAE30"),
            React.createElement("span", { style: { color: ui_1.C.faint } }, "\u25BE")),
        open && React.createElement("div", { className: "axs-pop", "data-ax-isel-pop": true },
            React.createElement("input", { "data-ax-isel-q": true, autoFocus: true, value: q, onChange: e => setQ(e.target.value), placeholder: "\uC774\uB984\u00B7\uBAA8\uB378\uBA85\uC73C\uB85C \uCC3E\uAE30", style: Object.assign(Object.assign({}, ui_1.inp), { marginBottom: 6 }), onKeyDown: e => { if (e.key === 'Enter' && hit[0])
                    pick(hit[0].id); if (e.key === 'Escape')
                    setOpen(false); } }),
            React.createElement("div", { style: { maxHeight: 360, overflowY: 'auto' } },
                !hit.length && React.createElement("div", { style: { padding: 10, fontSize: 13, color: ui_1.C.faint } }, "\uC5C6\uC5B4\uC694"),
                groups.map(g => React.createElement("div", { key: g[0] },
                    React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { padding: '8px 9px 4px' }) },
                        g[0],
                        " ",
                        g[1].length),
                    g[1].map(p => React.createElement("button", { key: p.id, "data-ax-isel-opt": p.id, className: 'axs-opt' + (c && c.id === p.id ? ' on' : ''), onClick: () => pick(p.id) },
                        React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, p.name),
                        codeOf(p) && React.createElement("span", { style: { fontSize: 12, color: ui_1.C.faint } }, codeOf(p)),
                        (0, work_1.projLate)(p) > 0 && React.createElement(ui_1.Dot, { s: "late", size: 6 })))))))));
}
// 1.0.148 말로 찾기 — 「G3 체크리스트 보여줘」「BOM 미확정만」「이슈」「일정」 (지금 아이템 기준)
function cmdHits(q, cur, onCmd, onPart) {
    if (!cur)
        return [];
    const out = [];
    const st = (0, work_1.stagesOf)(cur);
    const g = q.match(/g\s*([1-5])/i);
    if (g) {
        const k = st.map((s, i) => ({ s, i })).filter(o => (o.s.gate || '').toUpperCase().indexOf('G' + g[1]) === 0)[0];
        if (k)
            out.push({ kind: '메뉴', text: `${cur.name} ${k.s.gate} 체크리스트`, sub: '관문', go: () => onCmd(k.i, 'gate') });
    }
    if (/bom|부품|미확정/i.test(q))
        out.push({ kind: '메뉴', text: `${cur.name} BOM${/미확정/.test(q) ? ' (미확정 표시)' : ''}`, sub: 'BOM', go: () => onPart(cur.id, 'bom') });
    if (/설계\s*변경|ecr|eco/i.test(q))
        out.push({ kind: '메뉴', text: `${cur.name} 설계 변경`, sub: '설계 변경', go: () => onPart(cur.id, 'ecr') });
    if (/이슈|리스크|기록/.test(q))
        out.push({ kind: '메뉴', text: `${cur.name} 이슈·기록`, sub: '기록', go: () => onCmd(0, 'log') });
    if (/일정|간트|스케줄/.test(q))
        out.push({ kind: '메뉴', text: `${cur.name} 일정`, sub: '일정', go: () => onCmd(0, 'lanes') });
    return out;
}
function SearchBox(props) {
    const [q, setQ] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const ref = React.useRef(null);
    React.useEffect(() => { if (!open)
        return undefined; const f = (e) => { if (ref.current && !ref.current.contains(e.target))
        setOpen(false); }; document.addEventListener('pointerdown', f); return () => document.removeEventListener('pointerdown', f); }, [open]);
    const k = q.trim().toLowerCase();
    const hits = [];
    if (k) {
        if (props.onCmd)
            cmdHits(q, props.cur, props.onCmd, props.onPart).forEach(h => hits.push(h));
        exports.MENUS.forEach(m => { if (m[1].toLowerCase().indexOf(k) >= 0)
            hits.push({ kind: '메뉴', text: m[1], sub: '', go: () => props.onMenu(m[0]) }); });
        props.items.forEach(p => {
            if ((p.name + ' ' + codeOf(p)).toLowerCase().indexOf(k) >= 0)
                hits.push({ kind: '아이템', text: p.name, sub: codeOf(p) || groupOf(p), go: () => props.onItem(p.id) });
            (p.parts || []).forEach(x => { if ((x.no + ' ' + x.name).toLowerCase().indexOf(k) >= 0)
                hits.push({ kind: '부품', text: `${x.no} ${x.name}`, sub: p.name, go: () => props.onPart(p.id, 'bom') }); });
            (p.ecrs || []).forEach(e => { if ((e.no + ' ' + e.title).toLowerCase().indexOf(k) >= 0)
                hits.push({ kind: '설계 변경', text: `${e.no} ${e.title}`, sub: `${p.name} · ${e.status}`, go: () => props.onPart(p.id, 'ecr') }); });
        });
    }
    return (React.createElement("div", { ref: ref, className: "axs-srch", style: { position: 'relative', flex: '1 1 220px', minWidth: 0, maxWidth: 380 } },
        React.createElement("input", { "data-ax-search": true, value: q, onChange: e => { setQ(e.target.value); setOpen(true); }, onFocus: () => setOpen(true), placeholder: "\uCC3E\uAE30\u00B7\uBA85\uB839 \u2014 \uC608: G3 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8, BOM \uBBF8\uD655\uC815", onKeyDown: e => { if (e.key === 'Enter' && hits[0]) {
                hits[0].go();
                setOpen(false);
                setQ('');
            } if (e.key === 'Escape')
                setOpen(false); }, style: Object.assign(Object.assign({}, ui_1.inp), { borderRadius: 9, paddingLeft: 30, background: ui_1.C.hover }) }),
        React.createElement("span", { style: { position: 'absolute', left: 10, top: 7, color: ui_1.C.faint, pointerEvents: 'none' } },
            React.createElement(Ico, { d: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4" })),
        open && k && React.createElement("div", { className: "axs-pop", "data-ax-search-pop": true, style: { width: '100%', minWidth: 280 } },
            !hits.length && React.createElement("div", { style: { padding: 10, fontSize: 13, color: ui_1.C.faint } }, "\uCC3E\uC740 \uAC83 \uC5C6\uC74C"),
            hits.slice(0, 10).map((h, i) => React.createElement("button", { key: i, "data-ax-search-hit": h.kind, className: "axs-opt", onClick: () => { h.go(); setOpen(false); setQ(''); } },
                React.createElement("span", { style: { fontSize: 11, color: ui_1.C.faint, fontWeight: 700, width: 54, flex: '0 0 auto' } }, h.kind),
                React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, h.text),
                React.createElement("span", { style: { fontSize: 12, color: ui_1.C.faint, whiteSpace: 'nowrap' } }, h.sub))))));
}
// ───────── 관문 승인 — 전체 아이템의 관문을 한 화면에 (승인 대기 먼저)
function GatesView(props) {
    const rows = [];
    props.items.forEach(p => (0, work_1.stagesOf)(p).forEach((s, k) => { if (s.gate)
        rows.push({ p, k, gate: s.gate, st: (0, work_1.gateState)(p, s) }); }));
    const order = { requested: 0, rejected: 1, none: 2, approved: 3 };
    rows.sort((a, b) => (order[a.st] - order[b.st]) || a.p.name.localeCompare(b.p.name));
    const word = { requested: '승인 대기', rejected: '반려됨', none: '요청 전', approved: '승인됨' };
    const [f, setF] = React.useState('open');
    const list = rows.filter(r => f === 'all' || r.st !== 'approved');
    return (React.createElement("div", { "data-ax-gates-all": true },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 } },
            React.createElement("h1", { style: { fontSize: 20, fontWeight: 700, margin: 0 } }, "\uAD00\uBB38 \uC2B9\uC778"),
            React.createElement(ui_1.Tip, { t: "\uBAA8\uB4E0 \uC544\uC774\uD15C\uC758 G1~G5 \uAD00\uBB38\uC774\uC5D0\uC694. \uC2B9\uC778 \uB300\uAE30\uAC00 \uB9E8 \uC704, \uB204\uB974\uBA74 \uADF8 \uAD00\uBB38 \uD654\uBA74\uC73C\uB85C \uAC00\uC694." }),
            React.createElement("span", { style: { flex: 1 } }),
            ['open', 'all'].map(x => React.createElement("button", { key: x, "data-ax-gates-f": x, onClick: () => setF(x), style: Object.assign(Object.assign({}, ui_1.btn), { background: f === x ? ui_1.C.text : ui_1.C.card, color: f === x ? ui_1.C.inv : ui_1.C.sub }) }, x === 'open' ? '남은 것' : '전체'))),
        React.createElement("div", { style: ui_1.card },
            !list.length && React.createElement("div", { style: { padding: 20, color: ui_1.C.faint } }, "\uB0A8\uC740 \uAD00\uBB38 \uC5C6\uC74C"),
            list.map((r, i) => React.createElement("div", { key: i, className: "axw-row", "data-ax-gates-row": r.st, onClick: () => props.onOpen(r.p.id, r.k) },
                React.createElement(ui_1.Dot, { s: r.st === 'approved' ? 'done' : r.st === 'requested' ? 'wait' : r.st === 'rejected' ? 'late' : 'open' }),
                React.createElement("span", { style: { width: 120, flex: '0 0 auto', fontWeight: 700 } }, r.gate.split(' ')[0]),
                React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                    r.p.name,
                    " ",
                    React.createElement("span", { style: { color: ui_1.C.faint } },
                        "\u00B7 ",
                        r.gate.split(' ').slice(1).join(' '))),
                React.createElement("span", { style: { fontSize: 12.5, fontWeight: 700, color: r.st === 'requested' ? ui_1.C.soon : r.st === 'rejected' ? ui_1.C.late : r.st === 'approved' ? ui_1.C.ok : ui_1.C.faint } }, word[r.st]),
                r.st !== 'approved' && React.createElement(Gate_1.GatePill, { p: r.p, s: (0, work_1.stagesOf)(r.p)[r.k] }),
                React.createElement("span", { className: "axw-hide-sm", style: { fontSize: 12.5, color: ui_1.C.faint, width: 90, textAlign: 'right' } },
                    "\uC2B9\uC778\uC790 ",
                    (props.items.filter(x => x.id === r.p.id)[0] || r.p).approver || '없음'))))));
}
// ───────── AI 팀원 — 부문별 32명, 지금 아이템 기준 실제 상태 (연출 없음)
function TeamView(props) {
    const set = React.useContext(exports.SetCtx);
    const p = props.p;
    if (!p)
        return React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { padding: 24, color: ui_1.C.faint }) }, "\uC544\uC774\uD15C\uC774 \uC5C6\uC5B4\uC694");
    const team = (0, team_1.teamOf)(p);
    const off = (set && set.org.aiOff) || {};
    const W = { run: '일하는 중', review: '확인 대기', idle: '대기', off: '해당 없음' };
    const allJobs = props.items.reduce((n, x) => n + (x.aiJobs || []).filter(j => ['running', 'queued', 'review'].indexOf((0, ai_1.jobState)(j)) >= 0).length, 0);
    return (React.createElement("div", { "data-ax-team": true },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, flexWrap: 'wrap' } },
            React.createElement("h1", { style: { fontSize: 20, fontWeight: 700, margin: 0 } },
                "AI \uD300\uC6D0 ",
                team_1.TEAM.length,
                "\uBA85"),
            React.createElement(ui_1.Tip, { t: `${p.name} 기준 상태예요. 실제로 맡은 일·확인 대기만 보여요. 전체 아이템에서 지금 돌거나 확인을 기다리는 AI 일은 ${allJobs}건이에요. 켜기·끄기는 설정 › AI에서.` }),
            React.createElement("span", { style: { fontSize: 13, color: ui_1.C.sub } }, p.name)),
        team_1.DEPTS.map(d => {
            const ms = team.filter(t => t.m.dept === d);
            if (!ms.length)
                return null;
            return (React.createElement("div", { key: d, "data-ax-team-dept": d, style: { marginBottom: 14 } },
                React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { marginBottom: 6 }) },
                    d,
                    " ",
                    ms.length),
                React.createElement("div", { className: "axs-office" }, ms.map(t => {
                    const st = off[t.m.id] ? 'off' : t.state;
                    return (React.createElement("div", { key: t.m.id, "data-ax-mate": t.m.id, "data-ax-mate-state": st, style: Object.assign(Object.assign({}, ui_1.card), { padding: '11px 12px', opacity: st === 'off' ? 0.4 : 1, borderColor: st === 'run' ? 'rgba(79,209,107,.55)' : st === 'review' ? 'rgba(245,158,11,.55)' : ui_1.C.line }) },
                        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 6, fontWeight: 800 } },
                            t.m.name,
                            React.createElement(ui_1.Tip, { t: t.m.does + (t.m.only ? ` · ${ai_1.BRANCH_LABEL[t.m.only]}군만` : '') }),
                            React.createElement("span", { style: { marginLeft: 'auto', fontSize: 12, fontWeight: 700, color: st === 'run' ? ui_1.C.ok : st === 'review' ? ui_1.C.soon : ui_1.C.faint } }, off[t.m.id] ? '꺼짐' : W[st])),
                        React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.sub, marginTop: 4 } },
                            "\uB9E1\uC740 \uC77C ",
                            t.m.kinds.length,
                            "\uAC00\uC9C0 \u00B7 \uBC18\uC601 ",
                            t.done,
                            "\uAC74",
                            t.review.length ? ` · 확인 ${t.review.length}` : '',
                            t.running.length ? ` · 하는 중 ${t.running.length}` : '')));
                }))));
        })));
}
exports.CHANGES = [
    ['1.0.148', '2.5D AI 사무실(이모티콘·일 넘겨주기), 출시일 당기기, 병목 지도, 경험 창고(과거 모델), 홈 오늘 볼 것 3개, AI 도우미 옆창, 검색 명령, 관문 통과 가능/부족, 탭 안 AI'],
    ['1.0.147', '왼쪽 메뉴·위쪽 아이템 선택 칸·검색, 설명은 ⓘ 툴팁, 설정 화면, AI 팀원 32명(11개 부문)'],
    ['1.0.144', '개요 다시 짬(상태 4칸·내가 할 일·카드 4개), 관문 G1~G5, BOM 판·붙여넣기'],
    ['1.0.141', '아이템 하나가 메인, 검정·초록 색'],
    ['1.0.140', '오늘·아이템 2개 메뉴, 산출물 담당 AI'],
];
const Tog = (props) => React.createElement("button", { "data-ax-tog": props.k, "data-on": props.on ? '1' : '0', disabled: props.dis, className: 'axs-tog ' + (props.on ? 'on' : 'off'), onClick: props.onClick, style: { opacity: props.dis ? 0.4 : 1 }, "aria-label": props.k });
const Line = (props) => React.createElement("div", { className: "axs-line" },
    React.createElement("span", { style: { flex: '1 1 200px', fontWeight: 600 } },
        props.t,
        props.tip && React.createElement(ui_1.Tip, { t: props.tip })),
    props.children);
function SettingsView(props) {
    const set = React.useContext(exports.SetCtx);
    const [tab, setTab] = React.useState('me');
    const [ai, setAi] = React.useState('');
    const [ty, setTy] = React.useState('own');
    if (!set)
        return React.createElement("div", null);
    const { org, me, admin, saveOrg, saveMe } = set;
    const tabs = [['me', '내 설정', true], ['ai', 'AI', true], ['rule', '업무 기준', admin], ['perm', '권한', admin], ['info', '정보', true]];
    const chip = (on) => (Object.assign(Object.assign({}, ui_1.btn), { background: on ? ui_1.C.text : ui_1.C.card, color: on ? ui_1.C.inv : ui_1.C.sub, borderColor: on ? ui_1.C.text : ui_1.C.line2 }));
    const sample = (0, work_1.workSamples)().filter(p => (0, devtype_1.typeOf)(p) === ty)[0];
    const roles = org.roles || {};
    const dep = org.depts || [];
    const hol = (org.holidays || []).join('\n');
    return (React.createElement("div", { "data-ax-settings": true, "data-ax-stab": tab },
        React.createElement("h1", { style: { fontSize: 20, fontWeight: 700, margin: '0 0 14px' } }, "\uC124\uC815"),
        React.createElement("div", { className: "axs-set" },
            React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { padding: 6 }) },
                tabs.filter(t => t[2]).map(t => React.createElement("button", { key: t[0], "data-ax-stab-btn": t[0], className: 'axs-m' + (tab === t[0] ? ' on' : ''), onClick: () => setTab(t[0]) }, t[1])),
                !admin && React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint, padding: '8px 11px' } },
                    "\uC5C5\uBB34 \uAE30\uC900\u00B7\uAD8C\uD55C\uC740 \uAD00\uB9AC\uC790\uB9CC",
                    React.createElement(ui_1.Tip, { t: "\uAD00\uB9AC\uC790\uAC00 \uAD8C\uD55C \uD0ED\uC5D0\uC11C \uC815\uD574\uC694." }))),
            React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.card), { padding: '6px 18px 10px', minWidth: 0 }) },
                tab === 'me' && React.createElement(React.Fragment, null,
                    React.createElement(Line, { t: "Teams \uC54C\uB9BC", tip: "\uC2B9\uC778 \uC694\uCCAD\u00B7\uD655\uC778 \uB300\uAE30\uAC00 \uC0DD\uAE30\uBA74 Teams\uB85C \uC54C\uB824\uC694. \uC9C0\uAE08\uC740 \uC2B9\uC778 \uC694\uCCAD \uB9C1\uD06C\uBD80\uD130 \uC5F0\uACB0\uB3FC \uC788\uC5B4\uC694." },
                        React.createElement(Tog, { k: "teams", on: me.teams !== false, onClick: () => saveMe({ teams: me.teams === false }) })),
                    React.createElement(Line, { t: "\uBA54\uC77C \uC54C\uB9BC", tip: "\uAC19\uC740 \uC54C\uB9BC\uC744 \uBA54\uC77C\uB85C\uB3C4 \uBC1B\uC544\uC694." },
                        React.createElement(Tog, { k: "mail", on: !!me.mail, onClick: () => saveMe({ mail: !me.mail }) })),
                    React.createElement(Line, { t: "\uCCAB \uD654\uBA74", tip: "AX-PLM\uC744 \uC5F4\uC5C8\uC744 \uB54C \uCC98\uC74C \uBCF4\uC774\uB294 \uD654\uBA74" }, ['home', 'item'].map(x => React.createElement("button", { key: x, "data-ax-first": x, onClick: () => saveMe({ first: x }), style: chip((me.first || 'item') === x) }, x === 'home' ? '홈' : '마지막에 본 아이템'))),
                    React.createElement(Line, { t: "\uAE00\uC528 \uD06C\uAE30" }, ['s', 'm', 'l'].map(x => React.createElement("button", { key: x, "data-ax-size": x, onClick: () => saveMe({ size: x }), style: chip((me.size || 'm') === x) }, x === 's' ? '작게' : x === 'm' ? '보통' : '크게'))),
                    React.createElement(Line, { t: "\uD654\uBA74 \uBC1D\uAE30" }, ([false, true]).map(x => React.createElement("button", { key: String(x), "data-ax-light": x ? '1' : '0', onClick: () => saveMe({ light: x }), style: chip(!!me.light === x) }, x ? '밝게' : '어둡게')))),
                tab === 'ai' && React.createElement(React.Fragment, null,
                    React.createElement(Line, { t: "AI \uC5F0\uACB0", tip: "AI \uC911\uACC4 PC\uC5D0 \uB2FF\uB294\uC9C0 \uBC14\uB85C \uD655\uC778\uD574\uC694." },
                        React.createElement("span", { "data-ax-ai-test": ai, style: { fontSize: 13, fontWeight: 700, color: ai === 'on' ? ui_1.C.ok : ai === 'off' ? ui_1.C.late : ui_1.C.faint } }, ai === 'on' ? '연결됨' : ai === 'off' ? '꺼짐' : ai === 'wait' ? '확인 중…' : '확인 전'),
                        React.createElement("button", { "data-ax-ai-test-btn": true, onClick: () => { setAi('wait'); (0, ai_1.aiOnline)().then(ok => setAi(ok ? 'on' : 'off'), () => setAi('off')); }, style: ui_1.btn }, "\uC5F0\uACB0 \uC2DC\uD5D8")),
                    React.createElement(Line, { t: "\uC790\uB3D9 \uC2E4\uD589", tip: "\uC790\uB3D9: \uB2E8\uACC4\uAC00 \uC5F4\uB9AC\uAC70\uB098 \uB9E4\uC77C \uC544\uCE68\uC5D0 AI\uAC00 \uC54C\uC544\uC11C \uC77C\uC744 \uC2DC\uC791\uD574\uC694. \uC0AC\uB78C \uD655\uC778 \uD6C4\uC5D0\uB9CC: \uC0AC\uB78C\uC774 \u300CAI\uC5D0\uAC8C \uB9E1\uAE30\uAE30\u300D\uB97C \uB20C\uB7EC\uC57C \uC2DC\uC791\uD574\uC694. \uC5B4\uB290 \uCABD\uC774\uB4E0 \uACB0\uACFC \uBC18\uC601\uC740 \uC0AC\uB78C\uC774 \uD574\uC694." }, ['auto', 'confirm'].map(x => React.createElement("button", { key: x, "data-ax-auto": x, disabled: !admin, onClick: () => saveOrg({ auto: x }), style: Object.assign(Object.assign({}, chip((org.auto || 'auto') === x)), { opacity: admin ? 1 : 0.5 }) }, x === 'auto' ? '자동' : '사람 확인 후에만'))),
                    React.createElement(Line, { t: "\uD558\uB8E8 \uC0AC\uC6A9 \uD55C\uB3C4", tip: "\uD558\uB8E8\uC5D0 AI\uAC00 \uC2DC\uC791\uD558\uB294 \uC77C \uC218. \uB118\uC73C\uBA74 \uB2E4\uC74C \uB0A0\uAE4C\uC9C0 \uC904 \uC11C\uC11C \uAE30\uB2E4\uB824\uC694. 0\uC774\uBA74 \uC81C\uD55C \uC5C6\uC74C." },
                        React.createElement("input", { "data-ax-limit": true, type: "number", min: 0, disabled: !admin, value: org.limit || 0, onChange: e => saveOrg({ limit: Math.max(0, Number(e.target.value) || 0) }), style: Object.assign(Object.assign({}, ui_1.inp), { width: 90 }) }),
                        React.createElement("span", { style: { fontSize: 13, color: ui_1.C.faint } }, "\uAC74")),
                    React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { margin: '14px 0 4px' }) },
                        "AI \uD300\uC6D0 \uCF1C\uAE30\u00B7\uB044\uAE30",
                        React.createElement(ui_1.Tip, { t: "\uB048 \uD300\uC6D0\uC758 \uC77C\uC740 \uC2DC\uC791\uD558\uC9C0 \uC54A\uC544\uC694(\uC774\uBBF8 \uB05D\uB09C \uACB0\uACFC\uB294 \uADF8\uB300\uB85C)." })),
                    team_1.DEPTS.map(d => React.createElement("div", { key: d, style: { marginBottom: 6 } },
                        React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint, fontWeight: 700, margin: '8px 0 2px' } }, d),
                        React.createElement("div", { style: { display: 'flex', flexWrap: 'wrap', gap: '6px 18px' } }, team_1.TEAM.filter(m => m.dept === d).map(m => {
                            const on = !(org.aiOff || {})[m.id];
                            return (React.createElement("span", { key: m.id, style: { display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, minWidth: 190 } },
                                React.createElement(Tog, { k: 'mate-' + m.id, dis: !admin, on: on, onClick: () => saveOrg({ aiOff: Object.assign(Object.assign({}, (org.aiOff || {})), { [m.id]: on }) }) }),
                                m.name));
                        }))))),
                tab === 'rule' && admin && React.createElement(React.Fragment, null,
                    React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { margin: '12px 0 6px' }) }, "\uAC1C\uBC1C \uC720\uD615\u00B7\uB2E8\uACC4 \uD15C\uD50C\uB9BF"),
                    React.createElement("div", { style: { display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 } },
                        devtype_1.DEV_TYPES.map(t => React.createElement("button", { key: t.id, "data-ax-rule-type": t.id, onClick: () => setTy(t.id), style: chip(ty === t.id) }, t.tag)),
                        React.createElement(ui_1.Tip, { t: (devtype_1.DEV_TYPES.filter(t => t.id === ty)[0] || devtype_1.DEV_TYPES[0]).desc })),
                    sample && (0, work_1.stagesOf)(sample).map(s => React.createElement("div", { key: s.id, className: "axs-line", style: { alignItems: 'flex-start' } },
                        React.createElement("span", { style: { width: 150, flex: '0 0 auto', fontWeight: 700 } },
                            s.no,
                            " ",
                            s.short || s.name),
                        React.createElement("span", { style: { flex: 1, minWidth: 0, fontSize: 13, color: ui_1.C.sub } }, s.docs.map(x => x.label).join(' · ')),
                        s.gate && React.createElement("span", { style: { fontSize: 12.5, fontWeight: 700, color: ui_1.C.accent } },
                            s.gate.split(' ')[0],
                            s.gateRule && React.createElement(ui_1.Tip, { t: s.gateRule })))),
                    React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { margin: '16px 0 6px' }) },
                        "\uAD00\uBB38 \uC2B9\uC778\uC790",
                        React.createElement(ui_1.Tip, { t: "\uC544\uC774\uD15C \uC2B9\uC778\uC790 \uC678\uC5D0 \uC774 \uC0AC\uB78C\uB3C4 \uADF8 \uAD00\uBB38\uC744 \uC2B9\uC778\uD560 \uC218 \uC788\uC5B4\uC694." })),
                    ['G1', 'G2', 'G3', 'G4', 'G5'].map(g => React.createElement(Line, { key: g, t: g },
                        React.createElement("input", { "data-ax-appr": g, value: (org.approvers || {})[g] || '', placeholder: "\uC774\uB984", onChange: e => saveOrg({ approvers: Object.assign(Object.assign({}, (org.approvers || {})), { [g]: e.target.value }) }), style: Object.assign(Object.assign({}, ui_1.inp), { width: 200 }) }))),
                    React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { margin: '16px 0 6px' }) }, "\uBD80\uC11C\u00B7\uB2F4\uB2F9\uC790"),
                    dep.map((x, i) => React.createElement("div", { key: i, className: "axs-line" },
                        React.createElement("input", { "data-ax-dept": i, value: x.dept, placeholder: "\uBD80\uC11C", onChange: e => saveOrg({ depts: dep.map((y, j) => (j === i ? Object.assign(Object.assign({}, y), { dept: e.target.value }) : y)) }), style: Object.assign(Object.assign({}, ui_1.inp), { width: 160 }) }),
                        React.createElement("input", { value: x.who, placeholder: "\uB2F4\uB2F9\uC790", onChange: e => saveOrg({ depts: dep.map((y, j) => (j === i ? Object.assign(Object.assign({}, y), { who: e.target.value }) : y)) }), style: Object.assign(Object.assign({}, ui_1.inp), { width: 160 }) }),
                        React.createElement("button", { onClick: () => saveOrg({ depts: dep.filter((y, j) => j !== i) }), style: ui_1.btn }, "\uBE7C\uAE30"))),
                    React.createElement("button", { "data-ax-dept-add": true, onClick: () => saveOrg({ depts: dep.concat([{ dept: '', who: '' }]) }), style: Object.assign(Object.assign({}, ui_1.btn), { marginTop: 6 }) }, "+ \uBD80\uC11C"),
                    React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { margin: '16px 0 6px' }) },
                        "\uB098\uB77C\uBCC4 \uD734\uC77C \uB2EC\uB825",
                        React.createElement(ui_1.Tip, { t: "\uD55C \uC904\uC5D0 \uD558\uB098: \uB0A0\uC9DC \uB098\uB77C \uC774\uB984 (\uC608: 2027-02-06 \uC911\uAD6D \uCD98\uC808). \uC77C\uC815\uAD00\uB9AC AI\uAC00 \uC77C\uC815 \uBCFC \uB54C \uAC19\uC774 \uBD10\uC694." })),
                    React.createElement("textarea", { "data-ax-holidays": true, defaultValue: hol, onBlur: e => saveOrg({ holidays: e.target.value.split('\n').map(x => x.trim()).filter(Boolean) }), rows: 6, style: Object.assign(Object.assign({}, ui_1.inp), { fontFamily: 'inherit', resize: 'vertical' }), placeholder: "2027-02-06 \uC911\uAD6D \uCD98\uC808" })),
                tab === 'perm' && admin && React.createElement(React.Fragment, null,
                    React.createElement("div", { style: { fontSize: 13, color: ui_1.C.sub, padding: '12px 0 4px', display: 'flex', alignItems: 'center' } },
                        "\uC5ED\uD560",
                        React.createElement(ui_1.Tip, { t: "\uBCF4\uAE30: \uC77D\uAE30\uB9CC \u00B7 \uD3B8\uC9D1: \uC0B0\uCD9C\uBB3C\u00B7BOM \uACE0\uCE58\uAE30 \u00B7 \uC2B9\uC778: \uAD00\uBB38\u00B7\uC124\uACC4 \uBCC0\uACBD \uC2B9\uC778 \u00B7 \uAD00\uB9AC\uC790: \uC5C5\uBB34 \uAE30\uC900\u00B7\uAD8C\uD55C\uAE4C\uC9C0. \uAD00\uB9AC\uC790\uAC00 \uD55C \uBA85\uB3C4 \uC5C6\uC73C\uBA74 \uBAA8\uB450 \uAD00\uB9AC\uC790\uB85C \uBD10\uC694." })),
                    Object.keys(roles).map(n => React.createElement("div", { key: n, className: "axs-line", "data-ax-role-row": n },
                        React.createElement("span", { style: { flex: '1 1 160px', fontWeight: 600 } }, n),
                        ['view', 'edit', 'approve', 'admin'].map(r => React.createElement("button", { key: r, "data-ax-role": r, onClick: () => saveOrg({ roles: Object.assign(Object.assign({}, roles), { [n]: r }) }), style: chip(roles[n] === r) }, exports.ROLE_LABEL[r])),
                        React.createElement("button", { onClick: () => { const x = Object.assign({}, roles); delete x[n]; saveOrg({ roles: x }); }, style: ui_1.btn }, "\uBE7C\uAE30"))),
                    React.createElement(RoleAdd, { onAdd: n => saveOrg({ roles: Object.assign(Object.assign({}, roles), { [n]: Object.keys(roles).length ? 'edit' : 'admin' }) }) })),
                tab === 'info' && React.createElement(React.Fragment, null,
                    React.createElement(Line, { t: "\uD310 \uBC88\uD638" },
                        React.createElement("b", { "data-ax-ver": true }, props.ver)),
                    React.createElement(Line, { t: "\uC544\uC774\uD15C" },
                        props.items.length,
                        "\uAC1C"),
                    React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { margin: '12px 0 4px' }) }, "\uBC14\uB010 \uB0B4\uC5ED"),
                    exports.CHANGES.map(c => React.createElement("div", { key: c[0], className: "axs-line" },
                        React.createElement("b", { style: { width: 70 } }, c[0]),
                        React.createElement("span", { style: { flex: 1, fontSize: 13, color: ui_1.C.sub } }, c[1]))))))));
}
function RoleAdd(props) {
    const [n, setN] = React.useState('');
    return React.createElement("div", { className: "axs-line" },
        React.createElement("input", { "data-ax-role-new": true, value: n, onChange: e => setN(e.target.value), placeholder: "\uC774\uB984", style: Object.assign(Object.assign({}, ui_1.inp), { width: 180 }), onKeyDown: e => { if (e.key === 'Enter' && n.trim()) {
                props.onAdd(n.trim());
                setN('');
            } } }),
        React.createElement("button", { "data-ax-role-add": true, onClick: () => { if (n.trim()) {
                props.onAdd(n.trim());
                setN('');
            } }, style: ui_1.primary }, "+ \uC0AC\uB78C"));
}

};
__m["src/webparts/huromAxPlm/components/Gate.js"]=function(module,exports,require){"use strict";
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
exports.gateGap = void 0;
exports.GatePill = GatePill;
const React = __importStar(require("react"));
const item_1 = require("src/webparts/huromAxPlm/model/item.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
// 관문 — 산출물 남은 것 + 기준 못 채운 것
const gateGap = (p, s) => s.docs.filter(d => !(0, work_1.docOk)(p.docs[d.key])).length + (0, item_1.gateChecks)(p, s).filter(c => !c.ok).length;
exports.gateGap = gateGap;
function GatePill(props) {
    const g = (0, exports.gateGap)(props.p, props.s);
    const st = (0, work_1.gateState)(props.p, props.s);
    if (st === 'approved')
        return React.createElement("span", { "data-ax-gate-pill": "done", style: { fontSize: 12, fontWeight: 800, color: ui_1.C.ok } }, "\uC2B9\uC778\uB428");
    return React.createElement("span", { "data-ax-gate-pill": g ? 'gap' : 'ok', title: g ? '산출물·기준 중 안 채운 것' : '산출물·기준 다 채움', style: { fontSize: 12, fontWeight: 800, borderRadius: 999, padding: '2px 9px', background: g ? 'rgba(248,113,113,.14)' : 'rgba(79,209,107,.14)', color: g ? ui_1.C.late : ui_1.C.ok, whiteSpace: 'nowrap' } }, g ? `부족 ${g}건` : '통과 가능');
}

};
__m["src/webparts/huromAxPlm/components/Pull.js"]=function(module,exports,require){"use strict";
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
exports.earliest = earliest;
exports.simulate = simulate;
exports.PullSim = PullSim;
exports.blocks = blocks;
exports.Bottleneck = Bottleneck;
exports.PastCard = PastCard;
const React = __importStar(require("react"));
// AX-PLM 1.0.148 출시일 당기기 · 병목 지도 · 비슷한 과거 모델 (심준보 2026-11-21 #ax-plm msg 11192967 '출시일은 무조건 당겨야 하고 과거 기반 학습' · 11193018 '1·2·3 좋네', 곽두팔 msg 11193197)
//   원칙: 출시일은 당기는 쪽만(늦추는 안 없음). 못 맞추는 단계·금형·업체·인증을 빨갛게 + 당기는 방법 3개와 줄어드는 일수. 과거 경험 창고 숫자로 근거
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const item_1 = require("src/webparts/huromAxPlm/model/item.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const sched_1 = require("src/webparts/huromAxPlm/model/sched.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const history_1 = require("src/webparts/huromAxPlm/model/history.js");
const Dash_1 = require("src/webparts/huromAxPlm/components/Dash.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
// 남은 단계를 지금부터 표준 일수로 하면 언제 끝나나 (지금 단계는 남은 산출물 비율만큼)
function earliest(p, now = (0, ax_1.today)()) {
    const st = (0, work_1.stagesOf)(p);
    const ck = (0, work_1.curIdx)(p);
    const ds = sched_1.STD_DAYS[(0, devtype_1.typeOf)(p)] || sched_1.STD_DAYS.own;
    const o = {};
    let d = now;
    st.forEach((s, k) => {
        if (k > 5)
            return;
        if (k < ck) {
            o[s.id] = (p.actual || {})[s.id] || now;
            return;
        }
        const left = k === ck ? s.docs.filter(x => !(0, work_1.docOk)(p.docs[x.key])).length / Math.max(1, s.docs.length) : 1;
        d = (0, sched_1.addDays)(d, Math.ceil(ds[k] * left));
        o[s.id] = d;
    });
    return o;
}
function simulate(p, pull, now = (0, ax_1.today)()) {
    const px = p;
    const t = (0, devtype_1.typeOf)(p);
    const ti = (0, devtype_1.typeInfo)(t);
    const target = (0, sched_1.addDays)(p.target || (0, sched_1.addDays)(now, 300), -pull);
    const plan = (0, sched_1.backPlan)(target, t).plan;
    const ea = earliest(p, now);
    const st = (0, work_1.stagesOf)(p);
    const ck = (0, work_1.curIdx)(p);
    const miss = [];
    st.forEach((s, k) => { if (k < ck || k > 5)
        return; const short = (0, sched_1.diffDays)(plan[s.id], ea[s.id]); if (short > 0)
        miss.push({ what: `${s.no} ${s.short || s.name}`, need: plan[s.id], short }); });
    const s4 = st[3];
    const moldEnd = s4 ? plan[s4.id] : target;
    (px.molds || []).filter(m => !(0, item_1.moldT1ok)(m)).forEach(m => { const short = (0, sched_1.diffDays)(moldEnd, (0, sched_1.addDays)(now, 45)); if (short > 0)
        miss.push({ what: `금형 ${m.no} (${m.vendor}) T1`, need: moldEnd, short }); });
    (px.vendors || []).forEach(v => { const last = v.samples.slice(-1)[0]; if (last && last.result === '합격')
        return; const s3 = st[2]; const end = s3 ? plan[s3.id] : target; const short = (0, sched_1.diffDays)(end, (0, sched_1.addDays)(now, 30)); if (short > 0)
        miss.push({ what: `${v.name} 샘플 합격`, need: end, short }); });
    (px.certs || []).filter(c => c.status !== '취득').forEach(c => { const short = (0, sched_1.diffDays)((0, sched_1.addDays)(target, -14), (0, sched_1.addDays)(now, 60)); if (short > 0)
        miss.push({ what: `인증 ${c.name}`, need: (0, sched_1.addDays)(target, -14), short }); });
    miss.sort((a, b) => b.short - a.short);
    // 당기는 방법 — 과거 경험(지연 1순위 인증 등)으로 근거
    const ds = sched_1.STD_DAYS[t] || sched_1.STD_DAYS.own;
    const cs = (0, history_1.causes)();
    const certRank = cs.map(c => c.type).indexOf('인증');
    const ways = [];
    if (ck < 5)
        ways.push({ id: 'overlap', what: `${st[ck].no}·${st[ck + 1].no} 단계 겹쳐 진행`, days: Math.round(ds[Math.min(ck + 1, 5)] * 0.3), why: '다음 단계 산출물(사양·견적·일정)을 지금 단계 관문 전에 미리 시작' });
    if (ti.mold && ck <= 3)
        ways.push({ id: 'mold', what: '금형 동시 발주', days: 21, why: '부품별 순차 발주 대신 T0를 한 번에 — 시사출 차수 겹치기' });
    if (ck <= 4)
        ways.push({ id: 'cert', what: '인증 선행(1st 샘플 Pre-test)', days: 42, why: certRank === 0 ? `과거 지연 원인 1순위가 인증(${cs[0].n}건) — 샘플 단계에서 KC·전자파 미리 시험` : 'KC·전자파 Pre-test를 샘플 단계에서' });
    if (!ti.mold && ck <= 2)
        ways.push({ id: 'dual', what: '업체 2곳 동시 샘플', days: 14, why: '샘플 불합격 때 다시 고르는 시간 없앰' });
    ways.sort((a, b) => b.days - a.days);
    return { target, plan, miss, ways: ways.slice(0, 3) };
}
function PullSim(props) {
    const { p } = props;
    const [n, setN] = React.useState(30);
    const r = simulate(p, n);
    const save = r.ways.reduce((a, w) => a + w.days, 0);
    const pastAvg = (0, history_1.avgMonths)((0, history_1.similar)(p, 3));
    return (React.createElement("div", { "data-ax-pull": true, style: Object.assign(Object.assign({}, ui_1.card), { padding: '14px 16px', margin: '0 0 14px', borderColor: 'rgba(79,209,107,.45)' }) },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' } },
            React.createElement("b", { style: { fontSize: 16 } }, "\uCD9C\uC2DC\uC77C \uB2F9\uAE30\uAE30"),
            React.createElement(ui_1.Tip, { t: "\uCD9C\uC2DC\uC77C\uC740 \uB2F9\uAE30\uB294 \uCABD\uB9CC \uBD10\uC694. \uB2F9\uAE30\uBA74 \uBABB \uB9DE\uCD94\uB294 \uB2E8\uACC4\u00B7\uAE08\uD615\u00B7\uC5C5\uCCB4\u00B7\uC778\uC99D\uC774 \uBE68\uAC1B\uAC8C \uB728\uACE0, \uB2F9\uAE30\uB294 \uBC29\uBC95\uACFC \uC904\uC5B4\uB4DC\uB294 \uC77C\uC218\uAC00 \uB098\uC640\uC694. \u300C\uC774 \uB0A0\uC9DC\uB85C\u300D\uB97C \uB204\uB974\uBA74 \uCD9C\uC2DC \uBAA9\uD45C\uC640 \uB2E8\uACC4 \uACC4\uD68D\uC774 \uBC14\uB00C\uC5B4\uC694." }),
            React.createElement("span", { style: { fontSize: 13, color: ui_1.C.sub } },
                "\uC9C0\uAE08 ",
                (0, ui_1.md)(p.target),
                " \u2192 ",
                React.createElement("b", { "data-ax-pull-target": true, style: { color: ui_1.C.accent } }, (0, ui_1.md)(r.target)),
                " (",
                n,
                "\uC77C \uB2F9\uAE40)"),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement("button", { onClick: props.onClose, style: ui_1.btn }, "\uB2EB\uAE30")),
        React.createElement("input", { "data-ax-pull-n": true, type: "range", min: 0, max: 180, step: 7, value: n, onChange: e => setN(Number(e.target.value)), style: { width: '100%', margin: '12px 0 4px', accentColor: ui_1.C.accent } }),
        React.createElement("div", { className: "axw-main", style: { gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', marginTop: 8 } },
            React.createElement("div", null,
                React.createElement("div", { style: { fontSize: 13, fontWeight: 800, marginBottom: 6, color: r.miss.length ? ui_1.C.late : ui_1.C.ok } }, r.miss.length ? `못 맞추는 것 ${r.miss.length}` : '다 맞출 수 있어요'),
                r.miss.slice(0, 6).map((m, i) => React.createElement("div", { key: i, "data-ax-pull-miss": true, style: { fontSize: 13.5, padding: '4px 0', display: 'flex', gap: 8 } },
                    React.createElement("span", { style: { color: ui_1.C.late, fontWeight: 800, width: 54, flex: '0 0 auto' } },
                        "-",
                        m.short,
                        "\uC77C"),
                    React.createElement("span", { style: { flex: 1, minWidth: 0 } }, m.what),
                    React.createElement("span", { style: { color: ui_1.C.faint, fontSize: 12.5 } },
                        (0, ui_1.md)(m.need),
                        "\uAE4C\uC9C0")))),
            React.createElement("div", null,
                React.createElement("div", { style: { fontSize: 13, fontWeight: 800, marginBottom: 6 } },
                    "\uB2F9\uAE30\uB294 \uBC29\uBC95 ",
                    r.ways.length,
                    " \u00B7 \uB2E4 \uD558\uBA74 \uC57D ",
                    React.createElement("span", { style: { color: ui_1.C.accent } },
                        save,
                        "\uC77C")),
                r.ways.map(w => React.createElement("div", { key: w.id, "data-ax-pull-way": w.id, style: { fontSize: 13.5, padding: '4px 0', display: 'flex', gap: 8 } },
                    React.createElement("span", { style: { color: ui_1.C.accent, fontWeight: 800, width: 54, flex: '0 0 auto' } },
                        "+",
                        w.days,
                        "\uC77C"),
                    React.createElement("span", { style: { flex: 1, minWidth: 0 } },
                        w.what,
                        React.createElement(ui_1.Tip, { t: w.why })))),
                pastAvg && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.faint, marginTop: 6 } },
                    "\uBE44\uC2B7\uD55C \uACFC\uAC70 \uBAA8\uB378 \uD3C9\uADE0 ",
                    pastAvg,
                    "\uAC1C\uC6D4"))),
        React.createElement("div", { style: { display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' } },
            React.createElement("button", { "data-ax-pull-apply": true, disabled: !n, onClick: () => props.onApply(r.target, r.plan), style: Object.assign(Object.assign({}, ui_1.primary), { opacity: n ? 1 : 0.4 }) },
                "\uC774 \uB0A0\uC9DC\uB85C (",
                (0, ui_1.md)(r.target),
                ")"),
            React.createElement(Dash_1.AiButton, { pid: p.id, kinds: ['s_pull'], label: "AI\uC5D0\uAC8C \uB2F9\uAE30\uB294 \uBC29\uBC95 \uB354 \uBB3B\uAE30", preset: `${n}일 당기기 — 출시 ${r.target}` }))));
}
function blocks(p, now = (0, ax_1.today)()) {
    const st = (0, work_1.stagesOf)(p);
    const ck = (0, work_1.curIdx)(p);
    const o = {};
    st.forEach((s, k) => {
        if (k < ck || k > ck + 1)
            return;
        s.docs.forEach(d => {
            const v = p.docs[d.key] || {};
            if ((0, work_1.docOk)(v))
                return;
            const due = v.due || (p.plan || {})[s.id];
            const late = due ? Math.max(0, (0, sched_1.diffDays)(due, now)) : 0;
            const who = v.ai ? 'AI' : v.who || '담당 없음';
            const b = o[who] = o[who] || { who, items: [], late: 0 };
            b.items.push(d.label);
            b.late = Math.max(b.late, late);
        });
    });
    return Object.keys(o).map(k => o[k]).sort((a, b) => (b.late - a.late) || (b.items.length - a.items.length));
}
function Bottleneck(props) {
    const bs = blocks(props.p).slice(0, 5);
    const top = bs[0] ? bs[0].late : 0;
    return (React.createElement("div", { className: "axo-card", "data-axo-block": true, style: { cursor: 'pointer' }, onClick: props.onGo },
        React.createElement("div", { className: "axo-h" },
            "\uBCD1\uBAA9",
            React.createElement(ui_1.Tip, { t: "\uC9C0\uAE08 \uB2E8\uACC4\uC640 \uB2E4\uC74C \uB2E8\uACC4\uC5D0\uC11C \uC548 \uB05D\uB09C \uC0B0\uCD9C\uBB3C\uC744 \uB2F4\uB2F9\uBCC4\uB85C \uBB36\uC5C8\uC5B4\uC694. \uCD9C\uC2DC\uC77C\uC744 \uAC00\uC7A5 \uB9CE\uC774 \uB2A6\uCD94\uB294(\uAC00\uC7A5 \uB2A6\uC740) \uB9C9\uD798\uC774 \uB9E8 \uC704\uC608\uC694." })),
        !bs.length && React.createElement("div", { className: "axo-sub" }, "\uB9C9\uD78C \uACF3 \uC5C6\uC74C"),
        bs.map(b => React.createElement("div", { key: b.who, className: "axo-li", "data-axo-block-row": b.who, style: { display: 'flex', gap: 8 } },
            React.createElement("span", { style: { width: 70, flex: '0 0 auto', fontWeight: 800, color: b.late ? ui_1.C.late : ui_1.C.sub } }, b.late ? `${b.late}일` : '제때'),
            React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' } },
                React.createElement("b", { style: { color: ui_1.C.text } }, b.who),
                " \u00B7 ",
                b.items.length,
                "\uAC1C \u2014 ",
                b.items.join(', ')))),
        top > 0 && React.createElement("div", { className: "axo-li", style: { color: ui_1.C.late } },
            "\uC774\uB300\uB85C\uBA74 \uCD9C\uC2DC \uC57D ",
            top,
            "\uC77C \uBC00\uB9BC")));
}
function PastCard(props) {
    const sim = (0, history_1.similar)(props.p, 3);
    const all = (0, history_1.history)();
    const warn = sim.reduce((a, m) => a.concat(m.issues.filter(i => /구조|부품|시장불량|인증|전장|초도/.test(i.type)).map(i => `${m.name}: ${i.text}`)), []).slice(0, 3);
    return (React.createElement("div", { className: "axo-card", "data-axo-past": true },
        React.createElement("div", { className: "axo-h" },
            "\uBE44\uC2B7\uD55C \uACFC\uAC70 \uBAA8\uB378",
            React.createElement(ui_1.Tip, { t: `경험 창고 ${all.length}개 모델에서 같은 상품군·갈래를 골랐어요. AI가 일정·DR·리스크를 쓸 때 이 기록을 같이 봐요. 끝난 아이템은 자동으로 쌓여요.` })),
        !sim.length && React.createElement("div", { className: "axo-sub" }, "\uACBD\uD5D8 \uCC3D\uACE0\uAC00 \uBE44\uC5B4 \uC788\uC5B4\uC694"),
        sim.map(m => React.createElement("div", { key: m.name, className: "axo-li", "data-axo-past-row": true },
            React.createElement("b", { style: { color: ui_1.C.text } }, m.name),
            " \u00B7 ",
            m.months ? `${m.months}개월` : '기간 모름',
            m.delayDays ? React.createElement("span", { style: { color: ui_1.C.late } },
                " \u00B7 ",
                m.delayDays,
                "\uC77C \uC9C0\uC5F0") : '')),
        warn.map((w, i) => React.createElement("div", { key: i, className: "axo-li", "data-axo-past-warn": true, style: { color: ui_1.C.soon } },
            "\u26A0 ",
            w))));
}

};
__m["src/webparts/huromAxPlm/components/Items.js"]=function(module,exports,require){"use strict";
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
exports.ItemsList = ItemsList;
exports.ItemDetail = ItemDetail;
exports.parsePaste = parsePaste;
const React = __importStar(require("react"));
const Dash_1 = require("src/webparts/huromAxPlm/components/Dash.js");
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const Vendors_1 = require("src/webparts/huromAxPlm/components/Vendors.js");
const item_1 = require("src/webparts/huromAxPlm/model/item.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
const asP = (p) => p;
const codeOf = (p) => asP(p).itemCode || '품번 없음';
function ItemsList(props) {
    const th = { padding: '10px 12px', fontSize: 12, fontWeight: 600, color: ui_1.C.faint, textAlign: 'left', whiteSpace: 'nowrap', borderBottom: `1px solid ${ui_1.C.line}` };
    const td = { padding: '11px 12px', borderBottom: `1px solid ${ui_1.C.line}`, whiteSpace: 'nowrap' };
    const t = (0, ax_1.today)();
    return (React.createElement("div", { "data-ax-items": true, style: Object.assign(Object.assign({}, ui_1.card), { overflowX: 'auto' }) },
        React.createElement("table", { style: { width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 820 } },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", { style: th }, "\uC720\uD615"),
                    React.createElement("th", { style: th }, "\uD488\uBC88"),
                    React.createElement("th", { style: th }, "\uD488\uBA85"),
                    React.createElement("th", { style: th }, "Rev"),
                    React.createElement("th", { style: th }, "\uBD80\uD488"),
                    React.createElement("th", { style: th }, "\uB3C4\uBA74\u00B7\uBB38\uC11C"),
                    React.createElement("th", { style: th }, "\uC9C4\uD589 \uC911 \uC124\uACC4 \uBCC0\uACBD"),
                    React.createElement("th", { style: th }, "\uC778\uC99D"),
                    React.createElement("th", { style: th }, "\uB2E8\uACC4"))),
            React.createElement("tbody", null, props.items.map(p0 => {
                const p = asP(p0);
                const parts = p.parts || [];
                const top = parts.filter(x => !x.parent)[0];
                const openEcr = (p.ecrs || []).filter(e => e.status === '요청' || e.status === '검토').length;
                const certs = p.certs || [];
                const got = certs.filter(c => c.status === '취득').length;
                const bad = certs.filter(c => (0, item_1.certState)(c, t) === 'late' || (0, item_1.certState)(c, t) === 'soon').length;
                const k = (0, work_1.curIdx)(p);
                return (React.createElement("tr", { key: p.id, "data-ax-item-row": p.id, onClick: () => props.onOpen(p.id), style: { cursor: 'pointer' } },
                    React.createElement("td", { style: td },
                        React.createElement(ui_1.TypeTag, { p: p })),
                    React.createElement("td", { style: Object.assign(Object.assign({}, td), { fontWeight: 700, fontVariantNumeric: 'tabular-nums' }) }, codeOf(p)),
                    React.createElement("td", { style: td }, p.name),
                    React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub }) }, top ? top.rev : '—'),
                    React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub }) }, parts.length || '—'),
                    React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub }) }, (p.docs2 || []).length || '—'),
                    React.createElement("td", { style: td }, openEcr ? React.createElement("span", { style: { display: 'inline-flex', alignItems: 'center', gap: 6, color: ui_1.C.soon, fontWeight: 700 } },
                        React.createElement(ui_1.Dot, { s: "wait", size: 7 }),
                        openEcr,
                        "\uAC74") : React.createElement("span", { style: { color: ui_1.C.faint } }, "\u2014")),
                    React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub }) }, certs.length ? React.createElement("span", { style: { display: 'inline-flex', alignItems: 'center', gap: 6 } },
                        bad > 0 && React.createElement(ui_1.Dot, { s: "soon", size: 7 }),
                        got,
                        "/",
                        certs.length,
                        " \uCDE8\uB4DD") : '—'),
                    React.createElement("td", { style: Object.assign(Object.assign({}, td), { color: ui_1.C.sub }) },
                        (0, work_1.stagesOf)(p)[k].no,
                        " ",
                        (0, work_1.stagesOf)(p)[k].short)));
            })))));
}
function ItemDetail(props) {
    const p = asP(props.p);
    const { who, update } = props;
    const [tab0, setTab] = React.useState('bom');
    const tab = props.only || tab0;
    const [pick, setPick] = React.useState(undefined);
    const go = (t) => { setTab(t); setPick(undefined); };
    const isApprover = !p.approver || p.approver.replace(/\s/g, '') === who.replace(/\s/g, '');
    const ti = (0, devtype_1.typeInfo)((0, devtype_1.typeOf)(p));
    const tabs = [['bom', ti.bomDepth < 9 ? 'BOM (주요 부품)' : 'BOM', (p.parts || []).length], ['doc', ti.id === 'odm' || ti.id === 'sourcing' ? '사양·규격서' : '도면·문서', (p.docs2 || []).length]];
    if (ti.mold)
        tabs.push(['mold', ti.id === 'oem' ? '금형 (업체)' : '금형·시사출', (p.molds || []).length]);
    tabs.push(['vendor', '협력사', (p.vendors || []).length], ['ecr', '설계 변경', (p.ecrs || []).length], ['cert', '인증', (p.certs || []).length]);
    const top = (p.parts || []).filter(x => !x.parent)[0];
    let panel;
    if (pick) {
        const close = () => setPick(undefined);
        if (tab === 'bom' && pick === 'paste')
            panel = React.createElement(BomPaste, { key: "paste", p: p, who: who, update: update, onClose: close });
        else if (tab === 'bom')
            panel = React.createElement(PartPanel, { key: pick, p: p, no: pick === 'new' ? undefined : pick, who: who, update: update, onClose: close });
        if (tab === 'doc')
            panel = React.createElement(DocPanel, { key: pick, p: p, id: pick === 'new' ? undefined : pick, who: who, update: update, onClose: close });
        if (tab === 'ecr')
            panel = React.createElement(EcrPanel, { key: pick, p: p, id: pick === 'new' ? undefined : pick, who: who, isApprover: isApprover, update: update, onClose: close });
        if (tab === 'mold')
            panel = React.createElement(MoldPanel, { key: pick, p: p, id: pick === 'new' ? undefined : pick, who: who, update: update, onClose: close });
        if (tab === 'vendor')
            panel = React.createElement(Vendors_1.VendorPanel, { key: pick, p: p, id: pick === 'new' ? undefined : pick, who: who, update: update, onClose: close });
        if (tab === 'cert')
            panel = React.createElement(CertPanel, { key: pick, p: p, id: pick === 'new' ? undefined : pick, who: who, update: update, onClose: close });
    }
    if (props.only)
        return (React.createElement("div", { "data-ax-item-detail": p.id, "data-ax-item-only": props.only, className: "axw-main" },
            React.createElement("div", { style: { minWidth: 0 } },
                tab === 'bom' && React.createElement(Bom, { p: p, pick: pick, setPick: setPick }),
                tab === 'doc' && React.createElement(Docs, { p: p, pick: pick, setPick: setPick }),
                tab === 'ecr' && React.createElement(Ecrs, { p: p, pick: pick, setPick: setPick }),
                tab === 'cert' && React.createElement(Certs, { p: p, pick: pick, setPick: setPick }),
                tab === 'mold' && React.createElement(Molds, { p: p, pick: pick, setPick: setPick }),
                tab === 'vendor' && React.createElement(Vendors_1.ItemVendors, { p: p, pick: pick, setPick: setPick })),
            React.createElement("div", { className: 'axw-panel' + (pick ? ' sheet' : ''), style: ui_1.card }, panel || React.createElement(ItemSummary, { p: p }))));
    return (React.createElement("div", { "data-ax-item-detail": p.id },
        React.createElement("div", { style: { display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 } }, props.items.map(x => React.createElement("button", { key: x.id, "data-ax-item-pick": x.id, onClick: () => { props.onPick(x.id); setPick(undefined); }, style: Object.assign(Object.assign({}, ui_1.btn), { background: x.id === p.id ? ui_1.C.text : ui_1.C.card, color: x.id === p.id ? ui_1.C.inv : ui_1.C.sub, borderColor: x.id === p.id ? ui_1.C.text : ui_1.C.line2 }) }, codeOf(x)))),
        React.createElement("div", { style: { display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' } },
            React.createElement("div", { style: { flex: '1 1 260px', minWidth: 0 } },
                React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.faint, fontWeight: 600, fontVariantNumeric: 'tabular-nums' } },
                    codeOf(p),
                    top ? ` · Rev ${top.rev}` : ''),
                React.createElement("h1", { style: { fontSize: 22, fontWeight: 700, letterSpacing: '-.01em', margin: '2px 0 0' } },
                    React.createElement(ui_1.TypeTag, { p: p }),
                    p.name),
                React.createElement("div", { "data-ax-item-type": true, style: { fontSize: 12.5, color: ui_1.C.sub, marginTop: 4 } },
                    ti.label,
                    " \u00B7 ",
                    ti.drawing,
                    p.baseItem ? ` · 기반 모델 ${p.baseItem}` : '')),
            React.createElement(Dash_1.AiButton, { pid: p.id, kinds: ['ecr', 'bomdiff', 'oldrev', 'vendor', 'chase', 'certlist'] }),
            React.createElement("button", { "data-ax-to-project": true, onClick: props.onProject, style: ui_1.btn }, "\uD504\uB85C\uC81D\uD2B8 \uC77C\uC815 \uBCF4\uAE30")),
        React.createElement("div", { style: { display: 'flex', gap: 2, borderBottom: `1px solid ${ui_1.C.line}`, margin: '14px 0 16px', overflowX: 'auto' } }, tabs.map(t => React.createElement("button", { key: t[0], "data-ax-item-tab": t[0], onClick: () => go(t[0]), style: { border: 'none', background: 'transparent', padding: '10px 12px', fontSize: 14, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', color: tab === t[0] ? ui_1.C.text : ui_1.C.faint, boxShadow: tab === t[0] ? `inset 0 -2px 0 ${ui_1.C.text}` : 'none' } },
            t[1],
            React.createElement("span", { style: { marginLeft: 5, color: ui_1.C.faint, fontSize: 12 } }, t[2])))),
        React.createElement("div", { className: "axw-main" },
            React.createElement("div", { style: { minWidth: 0 } },
                tab === 'bom' && React.createElement(Bom, { p: p, pick: pick, setPick: setPick }),
                tab === 'doc' && React.createElement(Docs, { p: p, pick: pick, setPick: setPick }),
                tab === 'ecr' && React.createElement(Ecrs, { p: p, pick: pick, setPick: setPick }),
                tab === 'cert' && React.createElement(Certs, { p: p, pick: pick, setPick: setPick }),
                tab === 'mold' && React.createElement(Molds, { p: p, pick: pick, setPick: setPick }),
                tab === 'vendor' && React.createElement(Vendors_1.ItemVendors, { p: p, pick: pick, setPick: setPick })),
            React.createElement("div", { className: 'axw-panel' + (pick ? ' sheet' : ''), style: ui_1.card }, panel || React.createElement(ItemSummary, { p: p })))));
}
function ListHead(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: `1px solid ${ui_1.C.line}` } },
            React.createElement("span", { style: { fontWeight: 700 } }, props.title),
            props.sub && React.createElement("span", { style: { fontSize: 12.5, color: ui_1.C.faint } }, props.sub),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement("button", { "data-ax-add": true, onClick: props.onAdd, style: ui_1.btn }, props.add)),
        props.cols && React.createElement("div", { className: "axw-hide-sm", style: { display: 'flex', gap: 12, padding: '7px 14px', fontSize: 11.5, color: ui_1.C.faint, fontWeight: 600, borderBottom: `1px solid ${ui_1.C.line}` } }, props.cols)));
}
const Empty = (props) => React.createElement("div", { style: { padding: '18px 14px', fontSize: 13, color: ui_1.C.faint } }, props.t);
// 재질 표기 대상 — 상태색이 아닌 회색 테두리 작은 표시 (곽두팔 msg 10413522: 주황은 지연·만료 임박에만)
const SmallTag = (props) => React.createElement("span", { "data-ax-tag": props.t, title: props.title, style: { marginLeft: 6, fontSize: 10.5, fontWeight: 600, lineHeight: '15px', padding: '0 5px', borderRadius: 4, border: `1px solid ${ui_1.C.line2}`, color: ui_1.C.sub, background: ui_1.C.card, display: 'inline-block' } }, props.t);
const MarkTag = () => React.createElement("span", { "data-ax-mark": true, title: "\uD50C\uB77C\uC2A4\uD2F1 25 g \uC774\uC0C1 \u2014 \uC7AC\uC9C8 \uD45C\uAE30 \uB300\uC0C1", style: { marginLeft: 6, flex: '0 0 auto', fontSize: 10.5, fontWeight: 600, lineHeight: '15px', padding: '0 5px', borderRadius: 4, border: `1px solid ${ui_1.C.line2}`, color: ui_1.C.sub, background: ui_1.C.card } }, "\uD45C\uAE30");
function Bom(props) {
    const rows = (0, item_1.bomTree)(props.p.parts || []);
    const mark = (props.p.parts || []).filter(item_1.needMark).length;
    const t = (0, devtype_1.typeOf)(props.p);
    const derive = t === 'derive';
    const food = (0, devtype_1.typeInfo)(t).food;
    const chg = (0, item_1.changedParts)(props.p);
    return (React.createElement("div", { "data-ax-bom": true, style: ui_1.card },
        React.createElement("div", { "data-ax-bom-scope": true, style: { padding: '7px 14px', fontSize: 12, color: ui_1.C.sub, background: ui_1.C.bg, borderBottom: `1px solid ${ui_1.C.line}`, borderRadius: '10px 10px 0 0' } },
            "BOM \uBC94\uC704 \u2014 ",
            (0, item_1.bomNote)(props.p),
            React.createElement("button", { "data-ax-bom-paste": true, onClick: e => { e.stopPropagation(); props.setPick('paste'); }, style: Object.assign(Object.assign({}, ui_1.btn), { marginLeft: 10, padding: '3px 10px', fontSize: 12.5 }) }, "\uC5D1\uC140 \uBD99\uC5EC\uB123\uAE30")),
        React.createElement(ListHead, { title: `BOM · 판 ${props.p.bomRev || 'A'}`, sub: `부품 ${rows.length}개 · 미확정 ${(props.p.parts || []).filter(x => !x.fixed).length}개${mark ? ` · 재질 표기 대상 ${mark}개` : ''}${derive ? ` · 바뀐 부품 ${chg.length}개` : ''}${food ? ` · 식품(물) 접촉 ${(props.p.parts || []).filter(x => x.food).length}개` : ''}`, add: "+ \uBD80\uD488 \uCD94\uAC00", onAdd: () => props.setPick('new'), cols: React.createElement(React.Fragment, null,
                React.createElement("span", { style: { width: 92 } }, "\uD488\uBC88"),
                React.createElement("span", { style: { flex: 1 } }, "\uD488\uBA85"),
                React.createElement("span", { style: { width: 120 } }, "\uC7AC\uC9C8"),
                React.createElement("span", { style: { width: 56, textAlign: 'right' } }, "\uBB34\uAC8C"),
                React.createElement("span", { style: { width: 110 } }, "\uD611\uB825\uC0AC"),
                React.createElement("span", { style: { width: 80, textAlign: 'right' } }, "\uB2E8\uAC00"),
                React.createElement("span", { style: { width: 44 } }, "\uD655\uC815"),
                React.createElement("span", { style: { width: 34 } }, "Rev")) }),
        !rows.length && React.createElement(Empty, { t: "\uBD80\uD488\uC774 \uC5C6\uC5B4\uC694. + \uBD80\uD488 \uCD94\uAC00\uB85C \uC2DC\uC791\uD558\uC138\uC694." }),
        rows.map(r => {
            const x = r.part;
            return (React.createElement("div", { key: x.no, className: 'axw-row' + (props.pick === x.no ? ' on' : ''), "data-ax-part": x.no, onClick: () => props.setPick(x.no) },
                React.createElement("span", { style: { width: 92, fontVariantNumeric: 'tabular-nums', fontSize: 13, color: ui_1.C.sub, flex: '0 0 92px' } }, x.no),
                React.createElement("span", { style: { flex: 1, minWidth: 0, textAlign: 'left', paddingLeft: r.depth * 14 } },
                    React.createElement("span", { style: { display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: r.depth ? 500 : 700 } },
                        r.depth ? React.createElement("span", { style: { color: ui_1.C.lock } }, "\u2514 ") : '',
                        x.kind && x.kind !== '완제품' ? React.createElement("span", { style: { color: ui_1.C.faint, fontWeight: 500 } },
                            "[",
                            x.kind,
                            "] ") : '',
                        x.name,
                        x.qty && x.qty > 1 ? ` ×${x.qty}` : '',
                        derive && x.baseRev && x.baseRev !== x.rev && React.createElement(SmallTag, { t: "\uBCC0\uACBD", title: `기반 Rev ${x.baseRev} → ${x.rev}` }),
                        food && x.food && React.createElement(SmallTag, { t: "\uC811\uCD09", title: "\uC2DD\uD488(\uBB3C) \uC811\uCD09\uBD80" }),
                        x.mold && React.createElement(SmallTag, { t: x.mold, title: "\uAE08\uD615 \uBC88\uD638" })),
                    (x.material || x.weight) && React.createElement("span", { className: "axw-show-sm", "data-ax-part-sub": true, style: { fontSize: 12, color: ui_1.C.faint, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingLeft: r.depth ? 14 : 0 } },
                        x.material || '재질 —',
                        " \u00B7 ",
                        x.weight ? `${x.weight} g` : '무게 —',
                        (0, item_1.needMark)(x) && React.createElement(MarkTag, null))),
                React.createElement("span", { className: "axw-hide-sm", style: { width: 120, fontSize: 13, color: ui_1.C.sub, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center' } },
                    React.createElement("span", { style: { overflow: 'hidden', textOverflow: 'ellipsis' } }, x.material || '—'),
                    (0, item_1.needMark)(x) && React.createElement(MarkTag, null)),
                React.createElement("span", { className: "axw-hide-sm", style: { width: 56, fontSize: 13, color: ui_1.C.sub, textAlign: 'right', fontVariantNumeric: 'tabular-nums' } }, x.weight ? `${x.weight} g` : '—'),
                React.createElement("span", { className: "axw-hide-sm", style: { width: 110, fontSize: 13, color: ui_1.C.sub, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, x.supplier || '—'),
                React.createElement("span", { className: "axw-hide-sm", style: { width: 80, fontSize: 13, color: ui_1.C.sub, textAlign: 'right', fontVariantNumeric: 'tabular-nums' } }, x.price ? x.price.toLocaleString() : '—'),
                React.createElement("span", { "data-ax-part-fixed": x.fixed ? '1' : '0', style: { width: 44, fontSize: 12.5, fontWeight: 700, color: x.fixed ? ui_1.C.ok : ui_1.C.soon } }, x.fixed ? '확정' : '미확정'),
                React.createElement("span", { style: { width: 34, fontSize: 13, fontWeight: 700 } }, x.rev)));
        })));
}
function Docs(props) {
    const ds = props.p.docs2 || [];
    return (React.createElement("div", { "data-ax-docs": true, style: ui_1.card },
        React.createElement(ListHead, { title: "\uB3C4\uBA74\u00B7\uBB38\uC11C", sub: "\uCD5C\uC2E0\uD310\uB9CC \uBCF4\uC774\uACE0, \uC774\uC804 \uD310\uC740 \uD589\uC744 \uB204\uB974\uBA74 \uB098\uC640\uC694", add: "+ \uBB38\uC11C \uB4F1\uB85D", onAdd: () => props.setPick('new'), cols: React.createElement(React.Fragment, null,
                React.createElement("span", { style: { width: 70 } }, "\uC885\uB958"),
                React.createElement("span", { style: { flex: 1 } }, "\uC81C\uBAA9"),
                React.createElement("span", { style: { width: 80 } }, "\uBD80\uD488"),
                React.createElement("span", { style: { width: 40 } }, "Rev"),
                React.createElement("span", { style: { width: 110 } }, "\uC62C\uB9B0 \uC0AC\uB78C"),
                React.createElement("span", { style: { width: 14 } })) }),
        !ds.length && React.createElement(Empty, { t: "\uB4F1\uB85D\uB41C \uB3C4\uBA74\u00B7\uBB38\uC11C\uAC00 \uC5C6\uC5B4\uC694." }),
        ds.map(d => (React.createElement("div", { key: d.id, className: 'axw-row' + (props.pick === d.id ? ' on' : ''), "data-ax-doc2": d.id, onClick: () => props.setPick(d.id) },
            React.createElement("span", { style: { width: 70, fontSize: 12.5, color: ui_1.C.faint } }, d.kind),
            React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 600 } },
                d.title,
                (0, item_1.releaseState)(props.p, d).map(r => React.createElement("span", { key: r.vendor, "data-ax-release": r.old ? 'old' : 'ok', title: `${r.vendor}에 Rev ${r.rev} 나감`, style: { marginLeft: 6, fontSize: 11, fontWeight: 600, color: r.old ? ui_1.C.soon : ui_1.C.faint } }, r.old ? `업체엔 옛 판 ${r.rev}` : '업체 배포 최신'))),
            React.createElement("span", { className: "axw-hide-sm", style: { width: 80, fontSize: 13, color: ui_1.C.sub } }, d.part || '—'),
            React.createElement("span", { style: { width: 40, fontWeight: 700, fontSize: 13 } }, d.rev),
            React.createElement("span", { className: "axw-hide-sm", style: { width: 110, fontSize: 12.5, color: ui_1.C.faint } },
                d.by,
                " \u00B7 ",
                (0, ui_1.md)(d.at.slice(0, 10))),
            React.createElement(ui_1.FileIcon, { on: !!d.link }))))));
}
const ECR_DOT = { 요청: 'open', 검토: 'wait', 승인: 'done', 반영: 'done', 반려: 'late' };
function Ecrs(props) {
    const es = (props.p.ecrs || []).slice().reverse();
    return (React.createElement("div", { "data-ax-ecrs": true, style: ui_1.card },
        React.createElement(ListHead, { title: "\uC124\uACC4 \uBCC0\uACBD", sub: "\uC694\uCCAD \u2192 \uAC80\uD1A0 \u2192 \uC2B9\uC778(ECO \uBC88\uD638\u00B7\uBD80\uD488 Rev\u00B7BOM \uD310 \uC62C\uB77C\uAC10) \u2192 \uBC18\uC601", add: "+ \uBCC0\uACBD \uC694\uCCAD", onAdd: () => props.setPick('new'), cols: React.createElement(React.Fragment, null,
                React.createElement("span", { style: { width: 8 } }),
                React.createElement("span", { style: { width: 70 } }, "\uBC88\uD638"),
                React.createElement("span", { style: { flex: 1 } }, "\uB0B4\uC6A9"),
                React.createElement("span", { style: { width: 120 } }, "\uC601\uD5A5 \uBD80\uD488"),
                React.createElement("span", { style: { width: 70 } }, "\uC0C1\uD0DC")) }),
        !es.length && React.createElement(Empty, { t: "\uC124\uACC4 \uBCC0\uACBD\uC774 \uC5C6\uC5B4\uC694." }),
        es.map(e => (React.createElement("div", { key: e.id, className: 'axw-row' + (props.pick === e.id ? ' on' : ''), "data-ax-ecr": e.id, "data-ax-ecr-status": e.status, onClick: () => props.setPick(e.id) },
            React.createElement(ui_1.Dot, { s: ECR_DOT[e.status] }),
            React.createElement("span", { style: { width: 70, fontSize: 13, color: ui_1.C.sub, fontVariantNumeric: 'tabular-nums' } }, e.eco || e.no),
            React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 600 } }, e.title),
            React.createElement("span", { className: "axw-hide-sm", style: { width: 120, fontSize: 12.5, color: ui_1.C.faint, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, e.parts.join(', ')),
            React.createElement("span", { style: { width: 70, fontSize: 12.5, fontWeight: 700, color: e.status === '승인' || e.status === '반영' ? ui_1.C.ok : e.status === '반려' ? ui_1.C.late : e.status === '검토' ? ui_1.C.soon : ui_1.C.sub } }, e.status))))));
}
const CERT_LABEL = { ok: '유효', soon: '만료 임박', late: '만료', open: '' };
function Certs(props) {
    const cs = props.p.certs || [];
    const t = (0, ax_1.today)();
    return (React.createElement("div", { "data-ax-certs": true, style: ui_1.card },
        React.createElement(ListHead, { title: "\uC778\uC99D\u00B7\uADDC\uC81C", add: "+ \uC778\uC99D \uCD94\uAC00", onAdd: () => props.setPick('new'), cols: React.createElement(React.Fragment, null,
                React.createElement("span", { style: { width: 8 } }),
                React.createElement("span", { style: { flex: 1 } }, "\uC778\uC99D"),
                React.createElement("span", { style: { width: 80 } }, "\uBD80\uD488"),
                React.createElement("span", { style: { width: 120 } }, "\uBC88\uD638"),
                React.createElement("span", { style: { width: 110 } }, "\uC0C1\uD0DC")) }),
        !cs.length && React.createElement(Empty, { t: "\uC778\uC99D \uD56D\uBAA9\uC774 \uC5C6\uC5B4\uC694." }),
        cs.map(c => {
            const st = (0, item_1.certState)(c, t);
            return (React.createElement("div", { key: c.id, className: 'axw-row' + (props.pick === c.id ? ' on' : ''), "data-ax-cert": c.id, onClick: () => props.setPick(c.id) },
                React.createElement(ui_1.Dot, { s: st === 'ok' ? 'done' : st === 'soon' ? 'soon' : st === 'late' ? 'late' : c.status === '시험 중' ? 'wait' : 'open' }),
                React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 600 } }, c.name),
                React.createElement("span", { className: "axw-hide-sm", style: { width: 80, fontSize: 13, color: ui_1.C.sub } }, c.part || '—'),
                React.createElement("span", { className: "axw-hide-sm", style: { width: 120, fontSize: 12.5, color: ui_1.C.faint } }, c.no || '—'),
                React.createElement("span", { style: { width: 110, fontSize: 12.5, fontWeight: 600, color: st === 'late' ? ui_1.C.late : st === 'soon' ? ui_1.C.soon : st === 'ok' ? ui_1.C.ok : ui_1.C.sub } },
                    c.status,
                    c.until ? ` · ~${(0, ui_1.md)(c.until)}` : '',
                    CERT_LABEL[st] && st !== 'ok' ? ` (${CERT_LABEL[st]})` : '')));
        })));
}
function ItemSummary(props) {
    const p = props.p;
    const t = (0, ax_1.today)();
    const row = (a, b) => React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', gap: 10, fontSize: 13, padding: '5px 0' } },
        React.createElement("span", { style: { color: ui_1.C.faint } }, a),
        React.createElement("span", { style: { textAlign: 'right' } }, b));
    const parts = p.parts || [];
    const w = parts.filter(x => x.parent).reduce((n, x) => n + (x.weight || 0) * (x.qty || 1), 0);
    const lastEco = (p.ecrs || []).filter(e => e.eco).slice(-1)[0];
    return (React.createElement("div", { "data-ax-item-summary": true },
        React.createElement("div", { style: { padding: '14px 16px', borderBottom: `1px solid ${ui_1.C.line}` } },
            React.createElement("div", { style: { fontWeight: 700, fontSize: 15 } },
                "\uD488\uBAA9 \uC694\uC57D",
                React.createElement(ui_1.Tip, { t: "\uD589\uC744 \uB204\uB974\uBA74 \uC5EC\uAE30\uC11C \uBCF4\uACE0 \uACE0\uCCD0\uC694" }))),
        React.createElement("div", { style: { padding: '10px 16px 14px' } },
            row('PM', p.owner || '—'),
            row('승인자', p.approver || '—'),
            row('부품 무게 합', w ? `${w.toLocaleString()} g` : '—'),
            row('재질 표기 대상', `${parts.filter(item_1.needMark).length}개`),
            row('마지막 ECO', lastEco ? `${lastEco.eco} · ${(0, ui_1.md)((lastEco.log.slice(-1)[0] || { at: lastEco.at }).at.slice(0, 10))}` : '—'),
            row('진행 중 설계 변경', `${(p.ecrs || []).filter(e => e.status === '요청' || e.status === '검토').length}건`),
            row('인증 취득', `${(p.certs || []).filter(c => c.status === '취득').length} / ${(p.certs || []).length}`),
            (p.certs || []).filter(c => (0, item_1.certState)(c, t) === 'soon' || (0, item_1.certState)(c, t) === 'late').map(c => React.createElement("div", { key: c.id, style: { fontSize: 12.5, color: ui_1.C.soon, display: 'flex', gap: 6, alignItems: 'center', marginTop: 4 } },
                React.createElement(ui_1.Dot, { s: "soon", size: 6 }),
                c.name,
                " \uC720\uD6A8\uAE30\uAC04 ",
                (0, ui_1.md)(c.until))))));
}
// 부품 — 정보 고치기 + 이 부품의 도면·설계 변경·인증 이력
function PartPanel(props) {
    const { p, who, update } = props;
    const cur = (p.parts || []).filter(x => x.no === props.no)[0];
    const ti = (0, devtype_1.typeInfo)((0, devtype_1.typeOf)(p));
    const [v, setV] = React.useState({ no: cur ? cur.no : '', name: cur ? cur.name : '', material: (cur && cur.material) || '', weight: cur && cur.weight ? String(cur.weight) : '', supplier: (cur && cur.supplier) || '', parent: (cur && cur.parent) || ((p.parts || []).filter(x => !x.parent)[0] || { no: '' }).no, qty: cur && cur.qty ? String(cur.qty) : '1', price: cur && cur.price ? String(cur.price) : '', fixed: !!(cur && cur.fixed),
        food: !!(cur && cur.food), kind: (cur && cur.kind) || (ti.id === 'sourcing' ? '포장' : ''), mold: (cur && cur.mold) || '' });
    // BOM 범위 — ODM·소싱은 완제품 아래 한 층만 (상위 부품으로 고를 수 있는 건 깊이가 한도보다 얕은 줄)
    const depthOf = (no) => { let n = 0; let x = (p.parts || []).filter(y => y.no === no)[0]; while (x && x.parent && n < 20) {
        n++;
        const par = x.parent;
        x = (p.parts || []).filter(y => y.no === par)[0];
    } return n; };
    const parents = (p.parts || []).filter(x => x.no !== v.no && depthOf(x.no) < ti.bomDepth);
    const f = (k, l, ph) => React.createElement(ui_1.Field, { l: l },
        React.createElement("input", { "data-ax-part-f": k, value: v[k], placeholder: ph, disabled: k === 'no' && !!cur, onChange: e => setV(Object.assign(Object.assign({}, v), { [k]: e.target.value })), style: ui_1.inp }));
    const dup = !cur && (p.parts || []).some(x => x.no === v.no.trim());
    const ok = !!v.no.trim() && !!v.name.trim() && !dup;
    const save = () => {
        const part = Object.assign(Object.assign({}, (cur || {})), { no: v.no.trim(), name: v.name.trim(), material: v.material.trim() || undefined, weight: Number(v.weight) || undefined, supplier: v.supplier.trim() || undefined, parent: v.parent && v.parent !== v.no.trim() ? v.parent : undefined, qty: Number(v.qty) || 1, rev: cur ? cur.rev : 'A', food: ti.food ? v.food || undefined : cur && cur.food, kind: ti.id === 'sourcing' ? v.kind || undefined : cur && cur.kind, mold: v.mold.trim() || undefined, price: Number(String(v.price).replace(/,/g, '')) || undefined, fixed: v.fixed || undefined });
        update(x0 => {
            const x = asP(x0);
            const parts = x.parts || [];
            return Object.assign(Object.assign({}, x), { parts: cur ? parts.map(y => (y.no === cur.no ? part : y)) : parts.concat([part]), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'edit', what: cur ? `부품 ${part.no} 정보 바꿈` : `부품 ${part.no} ${part.name} 추가 (Rev A)` }]) });
        });
        if (!cur)
            props.onClose();
    };
    const ecrs = cur ? (0, item_1.ecrsOfPart)(p, cur.no) : [];
    const docs = cur ? (0, item_1.docsOfPart)(p, cur.no) : [];
    const certs = cur ? (0, item_1.certsOfPart)(p, cur.no) : [];
    return (React.createElement("div", { "data-ax-part-panel": props.no || 'new' },
        React.createElement(ui_1.PanelHead, { title: cur ? `${cur.no} ${cur.name}` : '부품 추가', sub: cur ? `Rev ${cur.rev}${cur.baseRev && cur.baseRev !== cur.rev ? ` (기반 모델 Rev ${cur.baseRev}에서 바뀜)` : ''} · Rev는 설계 변경 승인으로만 올라가요` : '처음 Rev는 A', onClose: props.onClose }),
        React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 } },
            React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } },
                f('no', '품번', 'HFD-160'),
                f('qty', '수량')),
            f('name', '품명'),
            React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } },
                f('material', '재질', 'PP, ABS …'),
                f('weight', '무게 (g)')),
            React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } },
                f('supplier', '협력사'),
                f('price', '단가 (원)')),
            React.createElement("label", { style: { display: 'flex', gap: 8, alignItems: 'center', fontSize: 13.5 } },
                React.createElement("input", { type: "checkbox", "data-ax-part-f": "fixed", checked: v.fixed, onChange: e => setV(Object.assign(Object.assign({}, v), { fixed: e.target.checked })) }),
                "\uD655\uC815 \uBD80\uD488 (G5 \uC591\uC0B0 \uC804\uD658 \uC804\uC5D0 \uBAA8\uB450 \uD655\uC815)"),
            React.createElement(ui_1.Field, { l: "\uC0C1\uC704 \uBD80\uD488" },
                React.createElement("select", { "data-ax-part-f": "parent", value: v.parent, onChange: e => setV(Object.assign(Object.assign({}, v), { parent: e.target.value })), style: ui_1.inp },
                    React.createElement("option", { value: "" }, "(\uCD5C\uC0C1\uC704)"),
                    parents.map(x => React.createElement("option", { key: x.no, value: x.no },
                        x.no,
                        " ",
                        x.name)))),
            ti.bomDepth < 9 && React.createElement("div", { "data-ax-bom-limit": true, style: { fontSize: 12, color: ui_1.C.faint } },
                ti.tag,
                ": ",
                ti.bomNote),
            ti.id === 'sourcing' && React.createElement(ui_1.Field, { l: "\uAD6C\uBD84" },
                React.createElement("select", { "data-ax-part-f": "kind", value: v.kind, onChange: e => setV(Object.assign(Object.assign({}, v), { kind: e.target.value })), style: ui_1.inp }, devtype_1.SOURCING_KINDS.map(k => React.createElement("option", { key: k }, k)))),
            ti.food && React.createElement("label", { style: { display: 'flex', gap: 8, alignItems: 'center', fontSize: 13 } },
                React.createElement("input", { type: "checkbox", "data-ax-part-f": "food", checked: v.food, onChange: e => setV(Object.assign(Object.assign({}, v), { food: e.target.checked })) }),
                "\uC2DD\uD488(\uBB3C) \uC811\uCD09\uBD80 \u2014 \uC7AC\uC9C8 \uC131\uC801\uC11C \uD544\uC694"),
            ti.mold && React.createElement(ui_1.Field, { l: "\uAE08\uD615 \uBC88\uD638" },
                React.createElement("input", { "data-ax-part-f": "mold", value: v.mold, placeholder: "M-111", onChange: e => setV(Object.assign(Object.assign({}, v), { mold: e.target.value })), style: ui_1.inp })),
            Number(v.weight) >= 25 && /PP|PE|ABS|PC|POM|PA|PET|PBT|PS|SAN|Tritan|트라이탄|TPE|PMMA/i.test(v.material) && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.sub, display: 'flex', gap: 6, alignItems: 'center' } },
                React.createElement(MarkTag, null),
                "\uD50C\uB77C\uC2A4\uD2F1 25 g \uC774\uC0C1 \u2014 \uC7AC\uC9C8 \uD45C\uAE30 \uB300\uC0C1\uC774\uC5D0\uC694"),
            dup && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.late } }, "\uAC19\uC740 \uD488\uBC88\uC774 \uC774\uBBF8 \uC788\uC5B4\uC694."),
            React.createElement("button", { "data-ax-part-save": true, disabled: !ok, onClick: save, style: Object.assign(Object.assign({}, ui_1.primary), { opacity: ok ? 1 : 0.4 }) }, cur ? '저장' : '추가'),
            cur && React.createElement("div", null,
                React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { margin: '6px 0 4px' }) }, "\uC774 \uBD80\uD488\uC758 \uC774\uB825"),
                !ecrs.length && !docs.length && !certs.length && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.faint } }, "\uC544\uC9C1 \uC5C6\uC5B4\uC694."),
                ecrs.map(e => React.createElement("div", { key: e.id, style: { fontSize: 12.5, color: ui_1.C.sub, padding: '3px 0' } },
                    e.eco || e.no,
                    " \u00B7 ",
                    e.title,
                    " \u00B7 ",
                    e.status,
                    e.revs && e.revs[cur.no] ? ` (Rev ${e.revs[cur.no]})` : '')),
                docs.map(d => React.createElement("div", { key: d.id, style: { fontSize: 12.5, color: ui_1.C.sub, padding: '3px 0' } },
                    d.kind,
                    " \u00B7 ",
                    d.title,
                    " Rev ",
                    d.rev)),
                certs.map(c => React.createElement("div", { key: c.id, style: { fontSize: 12.5, color: ui_1.C.sub, padding: '3px 0' } },
                    "\uC778\uC99D \u00B7 ",
                    c.name,
                    " \u00B7 ",
                    c.status))))));
}
// 도면·문서 — 새 판 올리기(이전 판은 쌓임)
const KINDS = ['도면', '사양서', '시험성적서', '기타'];
function DocPanel(props) {
    const { p, who, update } = props;
    const d = (p.docs2 || []).filter(x => x.id === props.id)[0];
    const [v, setV] = React.useState({ kind: '도면', title: '', part: '', rev: 'A', link: '', note: '' });
    const [nv, setNv] = React.useState({ link: '', note: '' });
    if (!d) {
        const ok = !!v.title.trim();
        const add = () => {
            const doc = { id: (0, item_1.uid)('d'), kind: v.kind, title: v.title.trim(), part: v.part || undefined, rev: v.rev.trim() || 'A', link: v.link.trim() || undefined, by: who, at: (0, ui_1.nowIso)(), note: v.note.trim() || undefined, prev: [] };
            update(x0 => { const x = asP(x0); return Object.assign(Object.assign({}, x), { docs2: (x.docs2 || []).concat([doc]), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'doc', what: `${doc.kind} 「${doc.title}」 Rev ${doc.rev} 등록` }]) }); });
            props.onClose();
        };
        return (React.createElement("div", { "data-ax-doc-panel": "new" },
            React.createElement(ui_1.PanelHead, { title: "\uB3C4\uBA74\u00B7\uBB38\uC11C \uB4F1\uB85D", onClose: props.onClose }),
            React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 } },
                React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } },
                    React.createElement(ui_1.Field, { l: "\uC885\uB958" },
                        React.createElement("select", { "data-ax-doc-f": "kind", value: v.kind, onChange: e => setV(Object.assign(Object.assign({}, v), { kind: e.target.value })), style: ui_1.inp }, KINDS.map(k => React.createElement("option", { key: k }, k)))),
                    React.createElement(ui_1.Field, { l: "\uCC98\uC74C Rev" },
                        React.createElement("input", { "data-ax-doc-f": "rev", value: v.rev, onChange: e => setV(Object.assign(Object.assign({}, v), { rev: e.target.value })), style: ui_1.inp }))),
                React.createElement(ui_1.Field, { l: "\uC81C\uBAA9" },
                    React.createElement("input", { "data-ax-doc-f": "title", value: v.title, onChange: e => setV(Object.assign(Object.assign({}, v), { title: e.target.value })), style: ui_1.inp })),
                React.createElement(ui_1.Field, { l: "\uBD80\uD488" },
                    React.createElement("select", { "data-ax-doc-f": "part", value: v.part, onChange: e => setV(Object.assign(Object.assign({}, v), { part: e.target.value })), style: ui_1.inp },
                        React.createElement("option", { value: "" }, "(\uC81C\uD488 \uC804\uCCB4)"),
                        (p.parts || []).map(x => React.createElement("option", { key: x.no, value: x.no },
                            x.no,
                            " ",
                            x.name)))),
                React.createElement(ui_1.Field, { l: "\uD30C\uC77C (SharePoint \uB9C1\uD06C)" },
                    React.createElement("input", { "data-ax-doc-f": "link", value: v.link, onChange: e => setV(Object.assign(Object.assign({}, v), { link: e.target.value })), style: ui_1.inp })),
                React.createElement(ui_1.Field, { l: "\uBA54\uBAA8" },
                    React.createElement("input", { "data-ax-doc-f": "note", value: v.note, onChange: e => setV(Object.assign(Object.assign({}, v), { note: e.target.value })), style: ui_1.inp })),
                React.createElement("button", { "data-ax-doc-add": true, disabled: !ok, onClick: add, style: Object.assign(Object.assign({}, ui_1.primary), { opacity: ok ? 1 : 0.4 }) }, "\uB4F1\uB85D"))));
    }
    const all = [{ rev: d.rev, link: d.link, by: d.by, at: d.at, note: d.note }].concat(d.prev.slice().reverse());
    return (React.createElement("div", { "data-ax-doc-panel": d.id },
        React.createElement(ui_1.PanelHead, { title: d.title, sub: `${d.kind}${d.part ? ` · ${d.part}` : ''} · 최신 Rev ${d.rev}`, onClose: props.onClose }),
        React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 } },
            React.createElement("div", null,
                React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { marginBottom: 4 }) }, "\uD310 \uC774\uB825"),
                all.map((x, i) => (React.createElement("div", { key: i, "data-ax-doc-ver": x.rev, style: { display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, padding: '6px 0', borderTop: i ? `1px solid ${ui_1.C.line}` : 'none' } },
                    React.createElement("span", { style: { width: 34, fontWeight: 700 } }, x.rev),
                    React.createElement("span", { style: { flex: 1, minWidth: 0, color: i ? ui_1.C.faint : ui_1.C.text } },
                        x.by,
                        " \u00B7 ",
                        (0, ax_1.fmt)(x.at),
                        x.note ? ` — ${x.note}` : '',
                        i === 0 ? ' (최신)' : ''),
                    x.link ? React.createElement("a", { href: x.link, target: "_blank", rel: "noopener noreferrer", style: { fontSize: 12.5, color: ui_1.C.accent } }, "\uC5F4\uAE30") : React.createElement("span", { style: { fontSize: 12, color: ui_1.C.faint } }, "\uD30C\uC77C \uC5C6\uC74C"))))),
            (0, devtype_1.typeInfo)((0, devtype_1.typeOf)(p)).release && React.createElement(Release, { p: p, d: d, who: who, update: update }),
            React.createElement("div", { style: Object.assign({}, ui_1.label) },
                "\uC0C8 \uD310 \uC62C\uB9AC\uAE30 \u2014 Rev ",
                d.rev,
                " \u2192 ",
                (0, item_1.nextRev)(d.rev)),
            React.createElement("input", { "data-ax-doc-newlink": true, placeholder: "\uC0C8 \uD310 SharePoint \uB9C1\uD06C", value: nv.link, onChange: e => setNv(Object.assign(Object.assign({}, nv), { link: e.target.value })), style: ui_1.inp }),
            React.createElement("input", { "data-ax-doc-newnote": true, placeholder: "\uBB34\uC5C7\uC774 \uBC14\uB00C\uC5C8\uB098", value: nv.note, onChange: e => setNv(Object.assign(Object.assign({}, nv), { note: e.target.value })), style: ui_1.inp }),
            React.createElement("button", { "data-ax-doc-newver": true, disabled: !nv.link.trim() || !nv.note.trim(), onClick: () => { update(x => (0, item_1.newDocVersion)(asP(x), d.id, nv.link.trim(), who, nv.note.trim())); setNv({ link: '', note: '' }); }, style: Object.assign(Object.assign({}, ui_1.primary), { opacity: nv.link.trim() && nv.note.trim() ? 1 : 0.4 }) }, "\uC0C8 \uD310 \uC62C\uB9AC\uAE30"))));
}
// 설계 변경 — 요청 → 검토 → 승인(승인자만)/반려(사유)
function EcrPanel(props) {
    const { p, who, update } = props;
    const e = (p.ecrs || []).filter(x => x.id === props.id)[0];
    const [v, setV] = React.useState({ title: '', why: '', parts: [] });
    const [note, setNote] = React.useState('');
    if (!e) {
        const ok = !!v.title.trim() && !!v.why.trim() && v.parts.length > 0;
        const add = () => {
            const n = (p.ecrs || []).length + 1;
            const at = (0, ui_1.nowIso)();
            const ecr = { id: (0, item_1.uid)('e'), no: `ECR-${('00' + n).slice(-3)}`, title: v.title.trim(), why: v.why.trim(), parts: v.parts, status: '요청', by: who, at, log: [{ at, who, what: '요청' }] };
            update(x0 => { const x = asP(x0); return Object.assign(Object.assign({}, x), { ecrs: (x.ecrs || []).concat([ecr]), log: x.log.concat([{ at, who, kind: 'edit', what: `${ecr.no} 설계 변경 요청 — ${ecr.title}` }]) }); });
            props.onClose();
        };
        return (React.createElement("div", { "data-ax-ecr-panel": "new" },
            React.createElement(ui_1.PanelHead, { title: "\uC124\uACC4 \uBCC0\uACBD \uC694\uCCAD", sub: "\uC2B9\uC778\uB418\uBA74 \uACE0\uB978 \uBD80\uD488\uC758 Rev\uAC00 \uD55C \uB2E8\uACC4 \uC62C\uB77C\uAC00\uC694", onClose: props.onClose }),
            React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 } },
                React.createElement(ui_1.Field, { l: "\uBB34\uC5C7\uC744 \uBC14\uAFB8\uB098" },
                    React.createElement("input", { "data-ax-ecr-f": "title", value: v.title, onChange: x => setV(Object.assign(Object.assign({}, v), { title: x.target.value })), style: ui_1.inp })),
                React.createElement(ui_1.Field, { l: "\uC65C" },
                    React.createElement("input", { "data-ax-ecr-f": "why", value: v.why, onChange: x => setV(Object.assign(Object.assign({}, v), { why: x.target.value })), style: ui_1.inp })),
                React.createElement("div", null,
                    React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { marginBottom: 4 }) }, "\uC601\uD5A5 \uBD80\uD488"),
                    React.createElement("div", { style: { maxHeight: 200, overflow: 'auto', border: `1px solid ${ui_1.C.line}`, borderRadius: 6 } }, (p.parts || []).map(x => React.createElement("label", { key: x.no, style: { display: 'flex', gap: 8, alignItems: 'center', padding: '6px 10px', fontSize: 13, borderTop: `1px solid ${ui_1.C.line}` } },
                        React.createElement("input", { type: "checkbox", "data-ax-ecr-part": x.no, checked: v.parts.indexOf(x.no) >= 0, onChange: () => setV(Object.assign(Object.assign({}, v), { parts: v.parts.indexOf(x.no) >= 0 ? v.parts.filter(y => y !== x.no) : v.parts.concat([x.no]) })) }),
                        React.createElement("span", { style: { color: ui_1.C.sub, width: 74 } }, x.no),
                        React.createElement("span", { style: { flex: 1 } }, x.name),
                        React.createElement("span", { style: { color: ui_1.C.faint } },
                            "Rev ",
                            x.rev))))),
                React.createElement("button", { "data-ax-ecr-add": true, disabled: !ok, onClick: add, style: Object.assign(Object.assign({}, ui_1.primary), { opacity: ok ? 1 : 0.4 }) }, "\uC694\uCCAD"))));
    }
    const act = (to) => { update(x => (0, item_1.moveEcr)(asP(x), e.id, to, who, note.trim() || undefined)); setNote(''); };
    const parts = p.parts || [];
    const open = e.status === '요청' || e.status === '검토';
    return (React.createElement("div", { "data-ax-ecr-panel": e.id },
        React.createElement(ui_1.PanelHead, { title: `${e.eco ? `${e.eco} · ` : ''}${e.no}`, sub: `${e.by} 요청 · ${(0, ax_1.fmt)(e.at)}`, onClose: props.onClose }),
        React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 } },
            React.createElement("div", { style: { fontWeight: 700 } }, e.title),
            React.createElement("div", { style: { fontSize: 13, color: ui_1.C.sub } },
                "\uC774\uC720: ",
                e.why),
            React.createElement("div", { style: { display: 'flex', gap: 4 } }, ['요청', '검토', '승인', '반영'].map((s, i) => { const at = ['요청', '검토', '승인', '반영'].indexOf(e.status); const done = e.status !== '반려' && i <= at; return React.createElement("span", { key: s, style: { flex: 1, textAlign: 'center', fontSize: 12, fontWeight: 600, padding: '5px 0', borderRadius: 5, border: `1px solid ${done ? ui_1.C.text : ui_1.C.line2}`, background: done ? ui_1.C.text : 'transparent', color: done ? ui_1.C.inv : ui_1.C.faint } }, s); })),
            e.status === '반려' && React.createElement("div", { style: { fontSize: 13, color: ui_1.C.late, fontWeight: 600 } }, "\uBC18\uB824\uB428"),
            React.createElement("div", null,
                React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { marginBottom: 4 }) }, "\uC601\uD5A5 \uBD80\uD488"),
                e.parts.map(no => { const x = parts.filter(y => y.no === no)[0]; return React.createElement("div", { key: no, style: { display: 'flex', gap: 8, fontSize: 13, padding: '4px 0' } },
                    React.createElement("span", { style: { color: ui_1.C.sub, width: 74 } }, no),
                    React.createElement("span", { style: { flex: 1 } }, x ? x.name : '(삭제된 부품)'),
                    React.createElement("span", { style: { fontWeight: 700 } }, e.revs && e.revs[no] ? `Rev ${e.revs[no]}` : x ? `Rev ${x.rev} → ${(0, item_1.nextRev)(x.rev)}` : '')); })),
            open && React.createElement(React.Fragment, null,
                React.createElement("input", { "data-ax-ecr-note": true, placeholder: e.status === '검토' ? '의견 (반려는 필수)' : '검토 의견', value: note, onChange: x => setNote(x.target.value), style: ui_1.inp }),
                React.createElement("div", { style: { display: 'flex', gap: 8 } },
                    e.status === '요청' && React.createElement("button", { "data-ax-ecr-review": true, onClick: () => act('검토'), style: Object.assign(Object.assign({}, ui_1.primary), { flex: 1 }) }, "\uAC80\uD1A0 \uC2DC\uC791"),
                    e.status === '검토' && React.createElement("button", { "data-ax-ecr-approve": true, disabled: !props.isApprover, title: props.isApprover ? '' : `승인자(${p.approver})만 승인할 수 있어요`, onClick: () => act('승인'), style: Object.assign(Object.assign({}, ui_1.primary), { flex: 1, opacity: props.isApprover ? 1 : 0.4 }) }, "\uC2B9\uC778 \u2192 ECO \uBC1C\uD589"),
                    React.createElement("button", { "data-ax-ecr-reject": true, disabled: !note.trim() || (e.status === '검토' && !props.isApprover), onClick: () => act('반려'), style: Object.assign(Object.assign({}, ui_1.btn), { color: ui_1.C.late, opacity: note.trim() && (e.status !== '검토' || props.isApprover) ? 1 : 0.4 }) }, "\uBC18\uB824"))),
            e.status === '승인' && React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
                React.createElement("div", { style: { fontSize: 13, color: ui_1.C.sub } },
                    "\uC2B9\uC778\uB428",
                    React.createElement(ui_1.Tip, { t: "\uB3C4\uBA74\u00B7\uC0DD\uC0B0\uC5D0 \uC2E4\uC81C\uB85C \uC801\uC6A9\uD558\uBA74 \u300C\uBC18\uC601 \uC644\uB8CC\u300D\uB97C \uB20C\uB7EC \uC8FC\uC138\uC694." })),
                React.createElement("input", { "data-ax-ecr-note": true, placeholder: "\uBC18\uC601 \uBA54\uBAA8 (\uC608: \uAE08\uD615 \uC218\uC815 \uC644\uB8CC, 3\uC6D4 \uC0DD\uC0B0\uBD84\uBD80\uD130)", value: note, onChange: x => setNote(x.target.value), style: ui_1.inp }),
                React.createElement("button", { "data-ax-ecr-apply": true, onClick: () => act('반영'), style: ui_1.primary }, "\uBC18\uC601 \uC644\uB8CC")),
            React.createElement("div", null,
                React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { marginBottom: 4 }) }, "\uAE30\uB85D"),
                e.log.slice().reverse().map((l, i) => React.createElement("div", { key: i, style: { fontSize: 12.5, color: ui_1.C.sub, padding: '3px 0' } },
                    React.createElement("span", { style: { color: ui_1.C.faint } }, (0, ax_1.fmt)(l.at)),
                    " ",
                    l.who,
                    " \u00B7 ",
                    l.what))))));
}
const CSTAT = ['준비', '시험 중', '취득', '만료'];
function CertPanel(props) {
    const { p, who, update } = props;
    const c = (p.certs || []).filter(x => x.id === props.id)[0];
    const [v, setV] = React.useState({ name: c ? c.name : '', part: (c && c.part) || '', status: (c ? c.status : '준비'), no: (c && c.no) || '', until: (c && c.until) || '', link: (c && c.link) || '', region: (c && c.region) || '한국' });
    const ok = !!v.name.trim();
    const save = () => {
        const nc = { id: c ? c.id : (0, item_1.uid)('c'), name: v.name.trim(), part: v.part || undefined, status: v.status, no: v.no.trim() || undefined, until: v.until || undefined, link: v.link.trim() || undefined, region: v.region.trim() || undefined };
        update(x0 => {
            const x = asP(x0);
            const cs = x.certs || [];
            return Object.assign(Object.assign({}, x), { certs: c ? cs.map(y => (y.id === c.id ? nc : y)) : cs.concat([nc]), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'edit', what: c ? `인증 「${nc.name}」 ${c.status !== nc.status ? `${c.status} → ${nc.status}` : '정보 바꿈'}` : `인증 「${nc.name}」 추가` }]) });
        });
        if (!c)
            props.onClose();
    };
    const f = (k, l) => React.createElement(ui_1.Field, { l: l },
        React.createElement("input", { "data-ax-cert-f": k, value: v[k], onChange: e => setV(Object.assign(Object.assign({}, v), { [k]: e.target.value })), style: ui_1.inp }));
    return (React.createElement("div", { "data-ax-cert-panel": props.id || 'new' },
        React.createElement(ui_1.PanelHead, { title: c ? c.name : '인증 추가', sub: c ? `${c.region || ''} · ${c.status}` : undefined, onClose: props.onClose }),
        React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 } },
            f('name', '인증 이름'),
            React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } },
                React.createElement(ui_1.Field, { l: "\uC0C1\uD0DC" },
                    React.createElement("select", { "data-ax-cert-f": "status", value: v.status, onChange: e => setV(Object.assign(Object.assign({}, v), { status: e.target.value })), style: ui_1.inp }, CSTAT.map(s => React.createElement("option", { key: s }, s)))),
                f('region', '나라')),
            React.createElement(ui_1.Field, { l: "\uBD80\uD488" },
                React.createElement("select", { "data-ax-cert-f": "part", value: v.part, onChange: e => setV(Object.assign(Object.assign({}, v), { part: e.target.value })), style: ui_1.inp },
                    React.createElement("option", { value: "" }, "(\uC81C\uD488 \uC804\uCCB4)"),
                    (p.parts || []).map(x => React.createElement("option", { key: x.no, value: x.no },
                        x.no,
                        " ",
                        x.name)))),
            React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } },
                f('no', '인증 번호'),
                React.createElement(ui_1.Field, { l: "\uC720\uD6A8\uAE30\uAC04" },
                    React.createElement("input", { "data-ax-cert-f": "until", type: "date", value: v.until, onChange: e => setV(Object.assign(Object.assign({}, v), { until: e.target.value })), style: ui_1.inp }))),
            f('link', '인증서·성적서 링크'),
            React.createElement("button", { "data-ax-cert-save": true, disabled: !ok, onClick: save, style: Object.assign(Object.assign({}, ui_1.primary), { opacity: ok ? 1 : 0.4 }) }, c ? '저장' : '추가'))));
}
// OEM — 업체에 나간 도면 판 기록 (곽두팔: '업체에 나간 도면 판 관리')
function Release(props) {
    const { p, d, who } = props;
    const vs = (p.vendors || []).map(v => v.name);
    const [to, setTo] = React.useState(vs[0] || '');
    const st = (0, item_1.releaseState)(p, d);
    return (React.createElement("div", { "data-ax-release-box": true },
        React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { marginBottom: 4 }) }, "\uC5C5\uCCB4\uC5D0 \uB098\uAC04 \uD310"),
        !st.length && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.faint } }, "\uC544\uC9C1 \uC548 \uB098\uAC14\uC5B4\uC694."),
        st.map(r => React.createElement("div", { key: r.vendor, style: { fontSize: 12.5, padding: '3px 0', color: r.old ? ui_1.C.soon : ui_1.C.sub, display: 'flex', gap: 6, alignItems: 'center' } },
            React.createElement(ui_1.Dot, { s: r.old ? 'soon' : 'done', size: 6 }),
            r.vendor,
            " \u00B7 Rev ",
            r.rev,
            r.old ? ` — 최신 ${d.rev} 다시 보내야 해요` : ' (최신)')),
        vs.length > 0 ? React.createElement("div", { style: { display: 'flex', gap: 6, marginTop: 6 } },
            React.createElement("select", { "data-ax-release-to": true, value: to, onChange: e => setTo(e.target.value), style: ui_1.inp }, vs.map(n => React.createElement("option", { key: n }, n))),
            React.createElement("button", { "data-ax-release-send": true, onClick: () => props.update(x0 => { const x = asP(x0); return Object.assign(Object.assign({}, x), { releases: (x.releases || []).concat([{ id: (0, item_1.uid)('r'), doc: d.id, rev: d.rev, vendor: to, at: (0, ui_1.nowIso)(), who }]), log: x.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'doc', what: `${d.title} Rev ${d.rev} → ${to} 배포` }]) }); }), style: ui_1.btn },
                "Rev ",
                d.rev,
                " \uBCF4\uB0C4 \uAE30\uB85D")) : React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint, marginTop: 4 } },
            "\uC0DD\uC0B0 \uC5C5\uCCB4 \uC5C6\uC74C",
            React.createElement(ui_1.Tip, { t: "\uD611\uB825\uC0AC \uD0ED\uC5D0 \uC0DD\uC0B0 \uC5C5\uCCB4\uB97C \uBA3C\uC800 \uB123\uC73C\uC138\uC694." }))));
}
// 금형·시사출 — 금형 번호·업체·차수(T0/T1/T2…)별 결과 (자체 개발 G3 = 모든 금형 T1 이상 합격)
const TRIAL_COL = { 합격: ui_1.C.ok, 수정: ui_1.C.soon, 불합격: ui_1.C.late };
function Molds(props) {
    const ms = props.p.molds || [];
    return (React.createElement("div", { "data-ax-molds": true, style: ui_1.card },
        React.createElement(ListHead, { title: "\uAE08\uD615\u00B7\uC2DC\uC0AC\uCD9C", sub: `${ms.length}벌 · T1 이상 합격 ${ms.filter(item_1.moldT1ok).length}벌`, add: "+ \uAE08\uD615 \uCD94\uAC00", onAdd: () => props.setPick('new'), cols: React.createElement(React.Fragment, null,
                React.createElement("span", { style: { width: 8 } }),
                React.createElement("span", { style: { width: 70 } }, "\uAE08\uD615 \uBC88\uD638"),
                React.createElement("span", { style: { flex: 1 } }, "\uBD80\uD488"),
                React.createElement("span", { style: { width: 110 } }, "\uAE08\uD615 \uC5C5\uCCB4"),
                React.createElement("span", { style: { width: 120 } }, "\uB9C8\uC9C0\uB9C9 \uC2DC\uC0AC\uCD9C")) }),
        !ms.length && React.createElement(Empty, { t: "\uB4F1\uB85D\uB41C \uAE08\uD615\uC774 \uC5C6\uC5B4\uC694." }),
        ms.map(m => {
            const lt = (0, item_1.lastTrial)(m);
            const part = (props.p.parts || []).filter(x => x.no === m.part)[0];
            return (React.createElement("div", { key: m.id, className: 'axw-row' + (props.pick === m.id ? ' on' : ''), "data-ax-mold": m.no, "data-ax-mold-t1": (0, item_1.moldT1ok)(m) ? 'ok' : 'no', onClick: () => props.setPick(m.id) },
                React.createElement(ui_1.Dot, { s: (0, item_1.moldT1ok)(m) ? 'done' : lt ? 'soon' : 'open' }),
                React.createElement("span", { style: { width: 70, fontSize: 13, fontWeight: 700, fontVariantNumeric: 'tabular-nums' } }, m.no),
                React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },
                    m.part,
                    " ",
                    part ? part.name : '',
                    m.cavity ? React.createElement("span", { style: { color: ui_1.C.faint } },
                        " \u00B7 ",
                        m.cavity,
                        "\uCE90\uBE44\uD2F0") : ''),
                React.createElement("span", { className: "axw-hide-sm", style: { width: 110, fontSize: 13, color: ui_1.C.sub, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, m.vendor),
                React.createElement("span", { style: { width: 120, fontSize: 12.5, fontWeight: 600, color: lt ? TRIAL_COL[lt.result] : ui_1.C.faint, textAlign: 'right' } }, lt ? `${lt.round} ${lt.result}` : '시사출 전')));
        })));
}
function MoldPanel(props) {
    const { p, who, update } = props;
    const m = (p.molds || []).filter(x => x.id === props.id)[0];
    const [v, setV] = React.useState({ no: '', part: ((p.parts || []).filter(x => x.parent)[0] || { no: '' }).no, vendor: '', cavity: '1' });
    const nextRound = m ? `T${m.trials.length}` : 'T0';
    const [tr, setTr] = React.useState({ result: '수정', note: '' });
    if (!m) {
        const ok = !!v.no.trim() && !!v.part && !!v.vendor.trim();
        const add = () => {
            const x = { id: (0, item_1.uid)('m'), no: v.no.trim(), part: v.part, vendor: v.vendor.trim(), cavity: Number(v.cavity) || undefined, trials: [] };
            update(y0 => { const y = asP(y0); return Object.assign(Object.assign({}, y), { molds: (y.molds || []).concat([x]), parts: (y.parts || []).map(z => (z.no === x.part ? Object.assign(Object.assign({}, z), { mold: x.no }) : z)), log: y.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'edit', what: `금형 ${x.no} (${x.part}, ${x.vendor}) 발주 등록` }]) }); });
            props.onClose();
        };
        return (React.createElement("div", { "data-ax-mold-panel": "new" },
            React.createElement(ui_1.PanelHead, { title: "\uAE08\uD615 \uCD94\uAC00", sub: "\uBD80\uD488\uACFC \uC5F0\uACB0\uB3FC BOM\uC5D0 \uAE08\uD615 \uBC88\uD638\uAC00 \uBCF4\uC5EC\uC694", onClose: props.onClose }),
            React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 } },
                React.createElement("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 } },
                    React.createElement(ui_1.Field, { l: "\uAE08\uD615 \uBC88\uD638" },
                        React.createElement("input", { "data-ax-mold-f": "no", value: v.no, placeholder: "M-140", onChange: e => setV(Object.assign(Object.assign({}, v), { no: e.target.value })), style: ui_1.inp })),
                    React.createElement(ui_1.Field, { l: "\uCE90\uBE44\uD2F0" },
                        React.createElement("input", { "data-ax-mold-f": "cavity", value: v.cavity, onChange: e => setV(Object.assign(Object.assign({}, v), { cavity: e.target.value })), style: ui_1.inp }))),
                React.createElement(ui_1.Field, { l: "\uBD80\uD488" },
                    React.createElement("select", { "data-ax-mold-f": "part", value: v.part, onChange: e => setV(Object.assign(Object.assign({}, v), { part: e.target.value })), style: ui_1.inp }, (p.parts || []).map(x => React.createElement("option", { key: x.no, value: x.no },
                        x.no,
                        " ",
                        x.name)))),
                React.createElement(ui_1.Field, { l: "\uAE08\uD615 \uC5C5\uCCB4" },
                    React.createElement("input", { "data-ax-mold-f": "vendor", value: v.vendor, list: "ax-vendor-names", onChange: e => setV(Object.assign(Object.assign({}, v), { vendor: e.target.value })), style: ui_1.inp })),
                React.createElement("datalist", { id: "ax-vendor-names" }, (p.vendors || []).map(x => React.createElement("option", { key: x.id, value: x.name }))),
                React.createElement("button", { "data-ax-mold-add": true, disabled: !ok, onClick: add, style: Object.assign(Object.assign({}, ui_1.primary), { opacity: ok ? 1 : 0.4 }) }, "\uCD94\uAC00"))));
    }
    return (React.createElement("div", { "data-ax-mold-panel": m.no },
        React.createElement(ui_1.PanelHead, { title: `금형 ${m.no}`, sub: `${m.part} · ${m.vendor}${m.cavity ? ` · ${m.cavity}캐비티` : ''}`, onClose: props.onClose }),
        React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 } },
            React.createElement("div", null,
                React.createElement("div", { style: Object.assign(Object.assign({}, ui_1.label), { marginBottom: 4 }) }, "\uC2DC\uC0AC\uCD9C \uCC28\uC218"),
                !m.trials.length && React.createElement("div", { style: { fontSize: 12.5, color: ui_1.C.faint } }, "\uC544\uC9C1 \uC2DC\uC0AC\uCD9C \uC804\uC774\uC5D0\uC694."),
                m.trials.map((t, i) => React.createElement("div", { key: i, "data-ax-trial": t.round, style: { display: 'flex', gap: 8, fontSize: 13, padding: '5px 0', borderTop: i ? `1px solid ${ui_1.C.line}` : 'none' } },
                    React.createElement("b", { style: { width: 28 } }, t.round),
                    React.createElement("span", { style: { width: 44, color: TRIAL_COL[t.result], fontWeight: 700 } }, t.result),
                    React.createElement("span", { style: { flex: 1, color: ui_1.C.sub } }, t.note || ''),
                    React.createElement("span", { style: { color: ui_1.C.faint, fontSize: 12 } },
                        t.who,
                        " ",
                        (0, ui_1.md)(t.at.slice(0, 10)))))),
            React.createElement("div", { style: Object.assign({}, ui_1.label) },
                nextRound,
                " \uACB0\uACFC \uAE30\uB85D"),
            React.createElement("div", { style: { display: 'flex', gap: 6 } },
                React.createElement("select", { "data-ax-trial-result": true, value: tr.result, onChange: e => setTr(Object.assign(Object.assign({}, tr), { result: e.target.value })), style: Object.assign(Object.assign({}, ui_1.inp), { width: 90, flex: '0 0 90px' }) }, ['합격', '수정', '불합격'].map(r => React.createElement("option", { key: r }, r))),
                React.createElement("input", { "data-ax-trial-note": true, placeholder: "\uCE58\uC218\u00B7\uC678\uAD00\u00B7\uC218\uC815 \uB0B4\uC6A9", value: tr.note, onChange: e => setTr(Object.assign(Object.assign({}, tr), { note: e.target.value })), style: ui_1.inp })),
            React.createElement("button", { "data-ax-trial-add": true, onClick: () => { update(y0 => { const y = asP(y0); return Object.assign(Object.assign({}, y), { molds: (y.molds || []).map(z => (z.id === m.id ? Object.assign(Object.assign({}, z), { trials: z.trials.concat([{ round: nextRound, at: (0, ui_1.nowIso)(), result: tr.result, note: tr.note.trim() || undefined, who }]) }) : z)), log: y.log.concat([{ at: (0, ui_1.nowIso)(), who, kind: 'edit', what: `금형 ${m.no} ${nextRound} 시사출 ${tr.result}${tr.note.trim() ? ` — ${tr.note.trim()}` : ''}` }]) }); }); setTr({ result: '수정', note: '' }); }, style: ui_1.primary },
                nextRound,
                " \uAE30\uB85D"),
            React.createElement("div", { style: { fontSize: 12, color: ui_1.C.faint } },
                "T1 \uD569\uACA9 \uAE30\uC900",
                React.createElement(ui_1.Tip, { t: "T1 \uC774\uC0C1 \uD569\uACA9\uC774 \uBAA8\uB4E0 \uAE08\uD615\uC5D0 \uC788\uC5B4\uC57C G3 \uAE08\uD615 T1 \uD569\uACA9\uC744 \uC694\uCCAD\uD560 \uC218 \uC788\uC5B4\uC694." })))));
}
// 1.0.144 엑셀 붙여넣기 — 품번·품명·수량·재질·협력사·단가 (곽두팔 msg 11182987). 같은 품번은 고치고 새 품번은 추가, BOM 판 한 단계 올림
const PASTE_COLS = ['품번', '품명', '수량', '재질', '협력사', '단가'];
function parsePaste(t) {
    return t.split(String.fromCharCode(10)).map(l => l.split(String.fromCharCode(9)).map(x => x.trim())).filter(c => c.length >= 2 && c[0] && c[1] && c[0] !== '품번')
        .map(c => ({ no: c[0], name: c[1], qty: Number(c[2]) || 1, material: c[3] || undefined, supplier: c[4] || undefined, price: Number((c[5] || '').replace(/[,원\s]/g, '')) || undefined, rev: 'A' }));
}
function BomPaste(props) {
    const [t, setT] = React.useState('');
    const rows = parsePaste(t);
    const old = props.p.parts || [];
    const upd = rows.filter(r => old.some(x => x.no === r.no)).length;
    const save = () => {
        const at = (0, ui_1.nowIso)();
        props.update(x0 => {
            const x = asP(x0);
            let parts = (x.parts || []).slice();
            rows.forEach(r => {
                const o = parts.filter(y => y.no === r.no)[0];
                parts = o ? parts.map(y => (y.no === r.no ? Object.assign(Object.assign({}, y), { name: r.name, qty: r.qty, material: r.material || y.material, supplier: r.supplier || y.supplier, price: r.price || y.price }) : y)) : parts.concat([r]);
            });
            const rev = (0, item_1.nextRev)(x.bomRev || 'A');
            return Object.assign(Object.assign({}, x), { parts, bomRev: rev, bomLog: (x.bomLog || []).concat([{ rev, at, who: props.who, what: `엑셀 붙여넣기 ${rows.length}줄 (새 ${rows.length - upd} · 고침 ${upd})` }]), log: x.log.concat([{ at, who: props.who, kind: 'edit', what: `BOM 엑셀 붙여넣기 ${rows.length}줄 → BOM 판 ${rev}` }]) });
        });
        props.onClose();
    };
    return (React.createElement("div", { "data-ax-bom-paste-panel": true },
        React.createElement(ui_1.PanelHead, { title: "BOM \uC5D1\uC140 \uBD99\uC5EC\uB123\uAE30", tip: `엑셀에서 ${PASTE_COLS.join(' · ')} 순서로 복사해 붙여 넣으세요`, onClose: props.onClose }),
        React.createElement("div", { style: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 } },
            React.createElement("textarea", { "data-ax-bom-paste-text": true, value: t, onChange: e => setT(e.target.value), rows: 9, placeholder: 'HFD-111 / 본체 케이스 / 1 / PP / 대성정밀 / 3200 (엑셀 칸 그대로)', style: Object.assign(Object.assign({}, ui_1.inp), { fontFamily: 'Consolas, monospace', fontSize: 13, resize: 'vertical' }) }),
            React.createElement("div", { "data-ax-bom-paste-count": true, style: { fontSize: 13.5, color: ui_1.C.sub } }, rows.length ? `${rows.length}줄 읽음 — 새 부품 ${rows.length - upd}개, 고칠 부품 ${upd}개 · BOM 판 ${props.p.bomRev || 'A'} → ${(0, item_1.nextRev)(props.p.bomRev || 'A')}` : '아직 읽은 줄이 없어요.'),
            React.createElement("button", { "data-ax-bom-paste-save": true, disabled: !rows.length, onClick: save, style: Object.assign(Object.assign({}, ui_1.primary), { opacity: rows.length ? 1 : 0.4 }) }, "BOM\uC5D0 \uB123\uAE30"))));
}

};
__m["src/webparts/huromAxPlm/model/aiSamples.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiSamples = aiSamples;
exports.withAi = withAi;
// AX-PLM 1.0.139 — 예시 아이템에 「AI가 해 놓은 일」 (저장 안 함)
// 심준보 기준(곽두팔 2026-11-18 #ax-plm msg 10583671): AI가 먼저 일하고 사람은 확인·승인만 — 예시에서도 결재함이 비어 보이지 않게
const ai_1 = require("src/webparts/huromAxPlm/model/ai.js");
const ax_1 = require("src/webparts/huromAxPlm/model/ax.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const addDays = (a, k) => { const x = new Date(a + 'T00:00:00'); x.setDate(x.getDate() + k); return `${x.getFullYear()}-${('0' + (x.getMonth() + 1)).slice(-2)}-${('0' + x.getDate()).slice(-2)}`; };
const ago = (h) => new Date(Date.now() - h * 3600000).toISOString();
let n = 0;
const J = (kind, stage, h, result, x = {}) => (Object.assign({ id: 'smp-ai-' + (n++), kind, label: (0, ai_1.kindInfo)(kind).label, at: ago(h + 0.1), doneAt: ago(h), who: 'AI 자동', state: 'review', result, stage }, x));
function aiSamples(id, owner, k) {
    return aiSamples0(id, owner).map(j => (k === undefined || j.kind === 'weekly' ? j : Object.assign(Object.assign({}, j), { stage: k }))); // 단계는 예시 아이템의 지금 단계로
}
function aiSamples0(id, owner) {
    const t = (0, ax_1.today)();
    const d = (k) => addDays(t, k);
    const o = { owner };
    if (id === 'ax-sample-food')
        return [
            J('docchk', 2, 1.5, '3D 설계 1차안 점검 — 보완 2가지\n① 요약\n- 3D 설계 1차안: 분쇄 날·건조 히터·탈취 필터 배치 확정, 용량 2 L\n- 히터 소비전력 600 W 기준, 1회 처리 6시간 가정\n- 소음 목표 38 dB 이하로 적음\n② 빠졌거나 확인할 것\n- 탈취 필터 교체 주기와 원가가 빠져 있어요 (확인 필요)\n- 투입구 끼임 방지 구조(뚜껑 열면 정지) 표시 없음\n③ 관문 G2 기준 대비: 산출물 2개 남음 — 시제품 평가, DR 회의록', Object.assign({ auto: '산출물 올라옴 — 3D 설계', input: '3D 설계' }, o)),
            J('j_late', 3, 3, `제목: [휴롬] 분쇄 모터 샘플 납기 확인 요청\n\n안녕하세요, 휴롬 AX팀입니다.\n분쇄 모터 2차 샘플 납기가 ${d(-2)}였는데 아직 받지 못했습니다.\n시제품 조립 일정 때문에 이번 주 금요일까지 받을 수 있는지 확인 부탁드립니다.\n어려우면 가능한 날짜와 이유를 회신해 주세요.\n감사합니다.`, Object.assign({ auto: '매일 아침 — 납기 지난 협력사 일' }, o)),
            J('regchk', 2, 5, '- 국내: 전기용품 안전인증(KC, 가정용 음식물처리기) 대상, 전자파 적합성(KC EMC) 필요\n- 광고: 「악취 99% 제거」 같은 문구는 공인 시험성적서 먼저 (표시광고법)\n- 리콜 사례 유형: 건조 히터 과열·배선 소손, 뚜껑 잠금 고장으로 끼임\n- 지금 할 일: 히터 온도 퓨즈 2중화 검토, 뚜껑 열림 정지 스위치를 DR 항목에 넣기, KC 시험소 일정 미리 잡기\n- 확인 필요: 해외 판매 나라', Object.assign({ auto: '③ 설계·시제품 단계 열림' }, o)),
            J('weekly', 2, 26, '진행: ③ 설계·시제품, 계획 대비 3일 늦음\n이번 주: 3D 설계 1차 완료, 분쇄 모터 업체 2곳 견적 받음\n다음 주: 시제품 조립, DR 회의\n지연·리스크: 모터 2차 샘플 납기 지남 — 시제품 조립이 밀릴 수 있음\n도움 필요: 모터 업체 독촉 (구매)', { auto: '금요일 주간 보고', state: 'applied', by: '심준보' }),
        ];
    if (id === 'ax-sample-humid')
        return [
            J('replan', 1, 2, `물통 세척 구조 비교가 4일 늦어 뒤 단계를 이렇게 다시 짰어요.\n- ② 공동검토: ${d(5)}\n- ③ 설계·시제품: ${d(40)}\n- ④ 개발·검증: ${d(85)}\n- ⑤ 양산준비: ${d(115)}\n근거: 남은 산출물 4개 × 표준 일수, 출시 목표는 그대로 두고 ⑤ 여유 6일을 씀`, Object.assign({ auto: '매일 아침 — 지연 감지' }, o)),
            J('draft', 1, 4, '공동검토 검토서 초안\n1. 목적: 초음파 가습기 물통 구조 확정 전 연구소·품질 공동 검토\n2. 검토 항목: 물통 입구 지름(손 세척 가능 여부), 진동자 위치, 물 없음 감지, 세균 번식 구간\n3. 결론 초안: 상부 급수 + 넓은 입구(90 mm 이상) 안으로 진행\n4. 남은 확인: 진동자 교체 주기, 「세균 99.9%」 문구 근거 시험\n※ 수치는 확인 필요', Object.assign({ input: '공동검토 검토서', who: '김호철' }, o)),
            J('regchk', 1, 7, '- 가습기는 국내 전기용품 안전인증 + 생활화학제품(살균 표방 시) 확인 필요\n- 「세균 99.9%」 등 항균 표시는 공인 시험성적서 없이 쓸 수 없음 (리스크 이슈로 이미 등록됨)\n- 리콜 사례 유형: 물통 누수로 전원부 침수, 진동자 과열\n- 지금 할 일: 전원부와 물길 분리 구조를 요구 사양에 넣기', { auto: '② 공동검토 단계 열림', state: 'dismissed', by: '심준보', note: '이미 리스크로 등록돼 있음 — 중복' }),
        ];
    if (id === 'ax-sample-derive')
        return [
            J('bomdiff', 3, 2.5, '기반 모델 HZA-100 대비 바뀌는 부품 3개\n- 하우징 상부: 색상만 (세이지 그린), 금형 그대로\n- 드럼 커버: 색상 + 투명도 변경 — 시사출 1회 필요\n- 포장 상자: 인쇄 새로\n안 바뀌는 것: 스크류·모터·전원부 → 인증은 변경 신고로 충분할 가능성 (확인 필요)', Object.assign({ auto: 'BOM 바뀜' }, o)),
            J('gate', 3, 6, `G3 승인 요청 글 초안\n「원액기 H-AI 세이지 그린」 G3 승인 부탁드립니다.\n- 산출물: 5/6 완료 (남은 것: 색상 시사출 결과)\n- 기준: 모든 금형 T1 합격 — 드럼 커버 T1 결과 ${d(3)} 예정\n- 리스크: 없음\n결과 나오면 바로 요청 드리겠습니다.`, Object.assign({ auto: 'G2 기준 거의 채워짐' }, o)),
        ];
    if (id === 'ax-sample-oem')
        return [
            J('oldrev', 3, 1, '업체에 나간 도면 중 옛 판 1건\n- 「본체 하우징 도면」 업체 배포본 Rev B, 최신 Rev C (11/12 설계 변경)\n- 지금 할 일: 업체에 Rev C 다시 보내고, Rev B로 만든 시사출품은 쓰지 않게 알리기', Object.assign({ auto: '업체에 도면 배포 — 옛 판 감지' }, o)),
            J('chase', 3, 8, `제목: [Hurom] Request for revised approval drawing (Rev C)\n\nHello,\nWe updated the main housing drawing to Rev C on 11/12.\nPlease send the revised approval drawing by ${d(4)}.\nPlease do not use Rev B parts for the next trial.\nThank you.\n\n(한국어) 본체 하우징 Rev C 기준 승인원을 ${d(4)}까지 다시 보내 달라는 메일이에요.`, Object.assign(Object.assign({}, o), { who: '심준보' })),
            J('weekly', 3, 30, '진행: ④ 개발·검증\n이번 주: 하우징 설계 변경 Rev C 승인\n다음 주: 업체 승인원 Rev C 받기\n지연·리스크: 업체에 옛 판 도면이 남아 있음', { auto: '금요일 주간 보고', state: 'applied', by: '심준보' }),
        ];
    if (id === 'ax-sample-sourcing')
        return [
            J('g_sample', 2, 1, '2차 샘플 평가 요약\n- 외관: 합격 / 치수: 합격 / 소음: 보완 (52 dB, 목표 48 dB)\n- 식품 접촉부(블레이드·용기) 재질 성적서 없음 → 요청 필요\n- 다음 차수에서 볼 것: 소음, 용기 눈금 인쇄 번짐', Object.assign({ auto: '샘플 결과 올라옴 — 평가 요약' }, o)),
            J('chase', 2, 2, `제목: [Hurom] 2nd sample — noise and food-contact certificate\n\nHello,\nThank you for the 2nd samples. Noise was 52 dB (target 48 dB).\nPlease send an improved sample and the food-contact material test report (LFGB or FDA) by ${d(7)}.\nThank you.`, Object.assign({ auto: '샘플 보완 — 회신 요청' }, o)),
            J('vendor', 2, 9, '업체 인증서 점검\n- ISO 9001: 2027-03 만료 — 유효\n- 공장 BSCI 감사: 2026-12 만료 임박 → 새 감사 보고서 요청 필요', Object.assign({ auto: '매일 아침 — 업체 인증서 만료' }, o)),
        ];
    return [];
}
// 1.0.140 예시: 지금 단계에서 담당이 안 정해진 산출물은 AI 담당 — 하나는 초안이 확인 대기, 나머지는 작성 중으로 보이게
function withAi(p0) {
    const k = (0, work_1.curIdx)(p0);
    const s = (0, work_1.stagesOf)(p0)[k];
    const docs = Object.assign({}, p0.docs);
    const jobs = aiSamples(p0.id, p0.owner, k);
    let first = true;
    s.docs.forEach(d => {
        const st = docs[d.key] || {};
        if ((0, work_1.docOk)(st) || (st.who && !/검토서|보고서|정리|계획|사양서|요약|대장|평가/.test(d.label)))
            return;
        docs[d.key] = Object.assign(Object.assign({}, st), { ai: true });
        jobs.unshift(first
            ? J('draft', k, 0.7, `${d.label} 초안\n1. 목적: ${p0.name} ${s.no} ${s.name} 단계 산출물\n2. 내용: 지금까지 기록(BOM·협력사·이슈)으로 채움 — 수치는 확인 필요 표시\n3. 남은 확인: 담당 PM 검토 후 승인하면 완료 처리`, { auto: `AI 담당 — ${d.label}`, input: d.label, doc: d.key, owner: p0.owner })
            : J('draft', k, 0, '', { auto: `AI 담당 — ${d.label}`, input: d.label, doc: d.key, owner: p0.owner, state: 'queued', doneAt: undefined }));
        first = false;
    });
    return Object.assign(Object.assign({}, p0), { docs, aiJobs: jobs });
}

};
__m["src/webparts/huromAxPlm/components/Mates.js"]=function(module,exports,require){"use strict";
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
exports.TAB_MATES = exports.gateGap = exports.GatePill = void 0;
exports.MateStrip = MateStrip;
exports.Brief = Brief;
exports.Dock = Dock;
const React = __importStar(require("react"));
const ai_1 = require("src/webparts/huromAxPlm/model/ai.js");
const devtype_1 = require("src/webparts/huromAxPlm/model/devtype.js");
const work_1 = require("src/webparts/huromAxPlm/model/work.js");
const team_1 = require("src/webparts/huromAxPlm/model/team.js");
const Dash_1 = require("src/webparts/huromAxPlm/components/Dash.js");
const Today_1 = require("src/webparts/huromAxPlm/components/Today.js");
const Office_1 = require("src/webparts/huromAxPlm/components/Office.js");
const Shell_1 = require("src/webparts/huromAxPlm/components/Shell.js");
const ui_1 = require("src/webparts/huromAxPlm/components/ui.js");
var Gate_1 = require("src/webparts/huromAxPlm/components/Gate.js");
Object.defineProperty(exports, "GatePill", { enumerable: true, get: function () { return Gate_1.GatePill; } });
Object.defineProperty(exports, "gateGap", { enumerable: true, get: function () { return Gate_1.gateGap; } });
// 탭마다 붙는 AI (BOM 탭 = 원가·구매, 설계 변경 = 기구설계·원가 …)
exports.TAB_MATES = {
    work: ['subpm', 'sched'], bom: ['cost', 'buy', 'mech'], vendor: ['buy', 'src'], doc: ['papr', 'mech'], mold: ['mold'], ecr: ['mech', 'cost'], cert: ['cert', 'food'],
    lanes: ['sched', 'subpm'], log: ['subpm', 'field'], gate: ['subpm', 'sched']
};
function MateStrip(props) {
    const set = React.useContext(Shell_1.SetCtx);
    const off = (set && set.org.aiOff) || {};
    const b = (0, ai_1.branchOf)((0, devtype_1.typeOf)(props.p));
    const team = (0, team_1.teamOf)(props.p).filter(t => (exports.TAB_MATES[props.tab] || []).indexOf(t.m.id) >= 0 && (!t.m.only || t.m.only === b));
    if (!team.length)
        return null;
    const rv = [];
    team.forEach(t => t.review.forEach(j => rv.push({ j, name: t.m.name })));
    return (React.createElement("div", { "data-ax-matestrip": props.tab, style: Object.assign(Object.assign({}, ui_1.card), { padding: '9px 12px', marginBottom: 12, display: 'flex', flexDirection: 'column', gap: 6 }) },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' } },
            React.createElement("span", { style: { fontSize: 12, fontWeight: 800, color: ui_1.C.faint } },
                "\uC774 \uD0ED AI",
                React.createElement(ui_1.Tip, { t: "\uC774 \uD0ED \uC77C\uC744 \uB9E1\uB294 \uC9C1\uBB34 AI\uC608\uC694. \u300C\uB9E1\uAE30\uAE30\u300D\uB85C \uC77C\uC744 \uC8FC\uBA74 \uACB0\uACFC\uAC00 \uD655\uC778 \uB300\uAE30\uB85C \uC640\uC694." })),
            team.map(t => {
                const md = (0, Office_1.moodOf)(t, !!off[t.m.id]);
                return (React.createElement("span", { key: t.m.id, "data-ax-matestrip-mate": t.m.id, "data-mood": md, style: { display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13 } },
                    React.createElement("span", null, Office_1.FACE[md]),
                    React.createElement("b", null, t.m.name),
                    t.running.length ? React.createElement("span", { style: { color: ui_1.C.ok, fontSize: 12 } },
                        "\uD558\uB294 \uC911 ",
                        t.running.length) : null,
                    t.review.length ? React.createElement("span", { style: { color: ui_1.C.soon, fontSize: 12 } },
                        "\uD655\uC778 ",
                        t.review.length) : null,
                    !off[t.m.id] && React.createElement(Dash_1.AiButton, { pid: props.p.id, kinds: t.m.kinds, label: "\uB9E1\uAE30\uAE30", small: true })));
            })),
        rv.slice(0, 3).map(r => {
            const f = (0, Today_1.friendly)(r.j);
            return (React.createElement("div", { key: r.j.id, "data-ax-matestrip-review": true, style: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, borderTop: `1px solid ${ui_1.C.line}`, paddingTop: 6, flexWrap: 'wrap' } },
                React.createElement("span", { style: { color: ui_1.C.soon, fontWeight: 700 } }, r.name),
                React.createElement("span", { style: { flex: '1 1 160px', minWidth: 0 }, title: r.j.result }, f.title),
                React.createElement("button", { onClick: () => props.act.apply(props.p.id, r.j), style: Object.assign(Object.assign({}, ui_1.primary), { padding: '3px 10px', fontSize: 12 }) }, f.go),
                React.createElement("button", { onClick: () => props.act.reject(props.p.id, r.j, '안 함'), style: Object.assign(Object.assign({}, ui_1.btn), { padding: '3px 10px', fontSize: 12 }) }, "\uC548 \uD568")));
        })));
}
// 홈 맨 위 — 오늘 볼 것 3개 (지연 위험 · 승인 대기 · AI가 끝낸 일), 데이터 그대로
function Brief(props) {
    const late = props.items.slice().sort((a, b) => (0, work_1.projLate)(b) - (0, work_1.projLate)(a))[0];
    const lt = late ? (0, work_1.projLate)(late) : 0;
    const gates = [];
    props.items.forEach(p => (0, work_1.stagesOf)(p).forEach(s => { if (s.gate && (0, work_1.gateState)(p, s) === 'requested')
        gates.push({ p, g: s.gate.split(' ')[0] }); }));
    const rv = [];
    props.items.forEach(p => (p.aiJobs || []).forEach(j => { if ((0, ai_1.jobState)(j) === 'review')
        rv.push({ p, j }); }));
    const row = (k, n, text, col, go) => (React.createElement("div", { "data-ax-brief3": k, className: "axw-row", onClick: go, style: { cursor: go ? 'pointer' : 'default' } },
        React.createElement("span", { style: { width: 84, flex: '0 0 auto', fontSize: 12.5, fontWeight: 800, color: col } }, n),
        React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, text)));
    const ls = late ? (0, work_1.stagesOf)(late)[(0, work_1.curIdx)(late)] : undefined;
    return (React.createElement("section", { "data-ax-brief3-box": true, style: Object.assign(Object.assign({}, ui_1.card), { marginBottom: 18 }) },
        React.createElement("div", { style: { padding: '12px 14px 4px', fontWeight: 800, fontSize: 16 } },
            "\uC624\uB298 \uBCFC \uAC83 3\uAC1C",
            React.createElement(ui_1.Tip, { t: "\uC9C0\uC5F0 \uC704\uD5D8\u00B7\uC2B9\uC778 \uB300\uAE30\u00B7AI\uAC00 \uB05D\uB0B8 \uC77C\uC744 \uB370\uC774\uD130 \uADF8\uB300\uB85C \uD55C \uC904\uC529 \uC815\uB9AC\uD574\uC694. \uB204\uB974\uBA74 \uADF8 \uD654\uBA74\uC73C\uB85C \uAC00\uC694." })),
        row('late', '지연 위험', lt > 0 && late && ls ? `${late.name} — ${lt}일 늦음 · ${ls.no} ${ls.short || ls.name}` : '늦은 아이템 없음', lt >= 7 ? ui_1.C.late : lt > 0 ? ui_1.C.soon : ui_1.C.ok, late && lt > 0 ? () => props.onItem(late.id) : undefined),
        row('gate', '승인 대기', gates.length ? `관문 ${gates.length}건 — ${gates[0].p.name} ${gates[0].g}${gates.length > 1 ? ` 외 ${gates.length - 1}` : ''}` : '승인 기다리는 관문 없음', gates.length ? ui_1.C.soon : ui_1.C.faint, gates.length ? props.onGates : undefined),
        row('ai', 'AI가 끝낸 일', rv.length ? `${rv.length}건 확인 대기 — ${(0, Today_1.friendly)(rv[0].j).title} (${rv[0].p.name})` : '확인할 것 없음', rv.length ? ui_1.C.accent : ui_1.C.faint, rv.length ? () => props.onItem(rv[0].p.id) : undefined)));
}
// 오른쪽 옆창 AI 도우미 — 지금 보는 아이템·탭·고른 줄을 붙여서 질문
const ASK_STATE = { queued: '차례 기다리는 중', running: 'AI가 답 쓰는 중', offline: 'AI 연결 전 — 연결되면 다시', error: '실패' };
function Dock(props) {
    const api = React.useContext(Dash_1.AiCtx);
    const [q, setQ] = React.useState('');
    const p = props.p;
    const asks = p ? (p.aiJobs || []).filter(j => j.kind === 'ask').slice(-6).reverse() : [];
    const send = () => { if (!api || !p || !q.trim())
        return; api.run(p.id, 'ask', `[지금 보는 곳: ${props.where}]\n${q.trim()}`); setQ(''); };
    return (React.createElement("aside", { "data-ax-dock": true, style: Object.assign(Object.assign({}, ui_1.card), { position: 'fixed', right: 12, top: 64, bottom: 12, width: 380, maxWidth: 'calc(100vw - 24px)', zIndex: 55, display: 'flex', flexDirection: 'column', boxShadow: '0 16px 40px rgba(0,0,0,.6)' }) },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 8, padding: '12px 14px', borderBottom: `1px solid ${ui_1.C.line}` } },
            React.createElement("b", { style: { fontSize: 15 } }, "\u2726 AI \uB3C4\uC6B0\uBBF8"),
            React.createElement(ui_1.Tip, { t: "\uC9C0\uAE08 \uBCF4\uB294 \uC544\uC774\uD15C\u00B7\uD0ED\u00B7\uACE0\uB978 \uC904\uC744 \uAC19\uC774 \uBCF4\uB0B4\uC694. \uB2F5\uC740 \uD655\uC778 \uB300\uAE30\uB85C \uC640\uC11C \uC5EC\uAE30\uC640 \uD648\uC5D0 \uB5A0\uC694." }),
            React.createElement("span", { style: { flex: 1 } }),
            React.createElement("button", { "data-ax-dock-close": true, onClick: props.onClose, style: ui_1.btn }, "\uB2EB\uAE30")),
        React.createElement("div", { "data-ax-dock-where": true, style: { fontSize: 12.5, color: ui_1.C.faint, padding: '8px 14px' } }, p ? props.where : '아이템을 먼저 고르세요'),
        React.createElement("div", { style: { padding: '0 14px 10px', display: 'flex', flexDirection: 'column', gap: 6 } },
            React.createElement("textarea", { "data-ax-dock-q": true, rows: 3, value: q, onChange: e => setQ(e.target.value), placeholder: "\uC608: \uC774 \uBD80\uD488 \uBC14\uAFB8\uBA74 \uC601\uD5A5\uC740? \u00B7 G3 \uC65C \uB9C9\uD614\uC5B4?", style: Object.assign(Object.assign({}, ui_1.inp), { resize: 'vertical' }), onKeyDown: e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey))
                    send(); } }),
            React.createElement("button", { "data-ax-dock-send": true, disabled: !p || !q.trim(), onClick: send, style: Object.assign(Object.assign({}, ui_1.primary), { opacity: p && q.trim() ? 1 : 0.4 }) },
                "\uBB3B\uAE30",
                api && api.online === false ? ' (AI 연결 전)' : '')),
        React.createElement("div", { style: { flex: 1, overflowY: 'auto', borderTop: `1px solid ${ui_1.C.line}` } },
            !asks.length && React.createElement("div", { style: { padding: 14, fontSize: 13, color: ui_1.C.faint } }, "\uC544\uC9C1 \uBB3C\uC5B4\uBCF8 \uAC83 \uC5C6\uC74C"),
            asks.map(j => React.createElement("div", { key: j.id, "data-ax-dock-ans": (0, ai_1.jobState)(j), style: { padding: '10px 14px', borderBottom: `1px solid ${ui_1.C.line}` } },
                React.createElement("div", { style: { fontSize: 13, fontWeight: 700 } }, (j.input || '').replace(/^\[지금 보는 곳:[^\]]*\]\n/, '')),
                React.createElement("div", { style: { fontSize: 13, color: ui_1.C.sub, whiteSpace: 'pre-wrap', marginTop: 4 } }, j.result || ASK_STATE[(0, ai_1.jobState)(j)] || ''))))));
}

};
__m["src/webparts/huromPlm/components/Sticky.js"]=function(module,exports,require){"use strict";
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
exports.default = Sticky;
const React = __importStar(require("react"));
const notes_1 = require("src/webparts/huromPlm/model/notes.js");
// 1.0.142 화면 안 우클릭(폰은 길게 누르기) 메뉴 + 포스트잇·버그 신고 (심준보 msg 10873244, 곽두팔 msg 11174005)
//   메뉴: 📌 포스트잇 붙이기 / 🐞 버그 신고 / 링크 복사 / 새 창 / 모아보기
//   입력칸·글자 고른 상태·Shift 누르고 우클릭은 브라우저 기본 메뉴 그대로 (붙여 넣기·복사 쓰게)
const C = { brand: '#1F6B45', text: '#1F2A24', sub: '#46524B', faint: '#7A867F', line: '#E4E8E5', note: '#FFF4B8', noteLine: '#E8CF5A', bug: '#FDE4E8', bugLine: '#E7A0AC', red: '#C8344A' };
const font = '"Segoe UI", "Malgun Gothic", sans-serif';
const btn = { border: 'none', background: 'none', fontFamily: 'inherit', cursor: 'pointer', padding: 0 };
const when = (iso) => { const d = new Date(iso); return `${d.getMonth() + 1}/${d.getDate()} ${('0' + d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}`; };
const newId = () => 'n' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const stLabel = (s) => (notes_1.NOTE_STATUS.filter(x => x.id === s)[0] || notes_1.NOTE_STATUS[0]).label;
function Sticky(props) {
    const root = React.useRef(null);
    const [notes, setNotes] = React.useState([]);
    const [menu, setMenu] = React.useState(undefined);
    const [draft, setDraft] = React.useState(undefined);
    const [open, setOpen] = React.useState(''); // 펼친 포스트잇 id
    const [list, setList] = React.useState(false);
    const [toast, setToast] = React.useState('');
    const [err, setErr] = React.useState('');
    const [, tick] = React.useState(0);
    const press = React.useRef(undefined);
    const { store } = props;
    const reload = () => { if (store)
        store.load().then(setNotes, e => setErr('포스트잇을 못 읽었어요: ' + (e && e.message || e))); };
    React.useEffect(() => { if (props.listNonce) {
        setList(true);
        reload();
    } }, [props.listNonce]);
    React.useEffect(reload, [store]);
    // 화면이 움직여도 포스트잇이 자리를 따라가게 — 1.5초마다 다시 그림
    React.useEffect(() => { const t = setInterval(() => tick(x => x + 1), 1500); return () => clearInterval(t); }, []);
    React.useEffect(() => { if (!toast)
        return undefined; const t = setTimeout(() => setToast(''), 2200); return () => clearTimeout(t); }, [toast]);
    React.useEffect(() => {
        if (!menu)
            return undefined;
        const close = (e) => { const m = document.querySelector('[data-note-menu]'); if (m && e.target instanceof Node && m.contains(e.target))
            return; setMenu(undefined); };
        const esc = (e) => { if (e.key === 'Escape')
            setMenu(undefined); };
        const t = setTimeout(() => { document.addEventListener('mousedown', close); document.addEventListener('touchstart', close); document.addEventListener('scroll', close, true); }, 0);
        document.addEventListener('keydown', esc);
        return () => { clearTimeout(t); document.removeEventListener('mousedown', close); document.removeEventListener('touchstart', close); document.removeEventListener('scroll', close, true); document.removeEventListener('keydown', esc); };
    }, [menu]);
    const pos = (cx, cy) => {
        const r = root.current ? root.current.getBoundingClientRect() : { left: 0, top: 0, width: 1 };
        return { x: Math.max(0, Math.min(1, (cx - r.left) / Math.max(1, r.width))), y: Math.max(0, cy - r.top) };
    };
    const nativeOk = (t, shift) => {
        if (shift)
            return true;
        if (t && t.closest && t.closest('input, textarea, select, [contenteditable="true"], [data-note-menu], [data-note-draft]'))
            return true;
        const s = window.getSelection ? window.getSelection() : null;
        return !!(s && String(s).trim());
    };
    const openMenu = (cx, cy, target) => { const p = pos(cx, cy); setMenu({ cx, cy, x: p.x, y: p.y, target }); };
    const onCtx = (e) => {
        if (props.off || nativeOk(e.target, e.shiftKey))
            return;
        e.preventDefault();
        openMenu(e.clientX, e.clientY, e.target);
    };
    // 폰·태블릿: 0.6초 길게 누르기
    const onTouchStart = (e) => {
        if (props.off || e.touches.length !== 1)
            return;
        const t = e.touches[0];
        const target = e.target;
        if (nativeOk(target, false))
            return;
        const st = { t: 0, x: t.clientX, y: t.clientY, target, fired: false };
        st.t = window.setTimeout(() => { st.fired = true; openMenu(st.x, st.y, st.target); }, 600);
        press.current = st;
    };
    const onTouchMove = (e) => {
        const p = press.current;
        if (!p)
            return;
        const t = e.touches[0];
        if (Math.abs(t.clientX - p.x) > 10 || Math.abs(t.clientY - p.y) > 10) {
            clearTimeout(p.t);
            press.current = undefined;
        }
    };
    const onTouchEnd = (e) => {
        const p = press.current;
        if (!p)
            return;
        clearTimeout(p.t);
        press.current = undefined;
        if (p.fired)
            e.preventDefault(); // 길게 누른 뒤 손 뗄 때 아래 버튼이 눌리지 않게
    };
    const copy = (text) => {
        const fallback = () => {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            let ok = false;
            try {
                ok = document.execCommand('copy');
            }
            catch (e) {
                ok = false;
            }
            document.body.removeChild(ta);
            setToast(ok ? '링크를 복사했어요' : '복사가 막혀 있어요: ' + text);
        };
        try {
            if (navigator.clipboard && navigator.clipboard.writeText)
                navigator.clipboard.writeText(text).then(() => setToast('링크를 복사했어요'), fallback);
            else
                fallback();
        }
        catch (e) {
            fallback();
        }
    };
    const startDraft = (kind) => {
        if (!menu || !root.current)
            return;
        const a = (0, notes_1.anchorOf)(menu.target, root.current);
        let dx;
        let dy;
        if (a.node) {
            const r = a.node.getBoundingClientRect();
            dx = Math.round(menu.cx - r.left);
            dy = Math.round(menu.cy - r.top);
        }
        setDraft({ kind, cx: menu.cx, cy: menu.cy, x: menu.x, y: menu.y, item: (0, notes_1.itemText)(menu.target), sel: a.sel, dx, dy, text: '' });
        setMenu(undefined);
    };
    const save = () => {
        if (!draft || !store || !props.screen || !draft.text.trim())
            return;
        const now = new Date().toISOString();
        const n = { id: newId(), kind: draft.kind, text: draft.text.trim(), by: props.who, at: now, ver: props.ver, status: 'new', screen: props.screen,
            item: draft.item, sel: draft.sel, dx: draft.dx, dy: draft.dy, x: draft.x, y: draft.y, hist: [{ at: now, by: props.who, status: 'new' }] };
        setNotes(ns => ns.concat([n]));
        setDraft(undefined);
        setOpen(n.id);
        store.add(n).then(setNotes, e => { setErr('저장 못 했어요: ' + (e && e.message || e)); reload(); });
    };
    const change = (id, fn) => {
        if (!store)
            return;
        setNotes(ns => ns.map(x => x.id === id ? fn(x) : x));
        store.change(id, fn).then(setNotes, e => { setErr('저장 못 했어요: ' + (e && e.message || e)); reload(); });
    };
    const setStatus = (id, s) => change(id, n => (Object.assign(Object.assign({}, n), { status: s, hist: (n.hist || []).concat([{ at: new Date().toISOString(), by: props.who, status: s }]) })));
    const hide = (id) => change(id, n => (Object.assign(Object.assign({}, n), { hidden: true, hiddenBy: props.who, hiddenAt: new Date().toISOString() })));
    // 지금 화면의 포스트잇 자리 (요소를 찾으면 그 요소 기준, 못 찾으면 저장한 위치)
    const live = notes.filter(n => !n.hidden);
    const here = props.screen && !props.off ? live.filter(n => (0, notes_1.sameScreen)(n.screen, props.screen) && (n.status !== 'done' || open === n.id)) : [];
    const place = (n) => {
        const r = root.current;
        if (!r)
            return { left: 0, top: 0 };
        const rr = r.getBoundingClientRect();
        if (n.sel) {
            let el = null;
            try {
                el = r.querySelector(n.sel);
            }
            catch (e) {
                el = null;
            }
            if (el) {
                const er = el.getBoundingClientRect();
                if (er.width || er.height)
                    return { left: er.left - rr.left + Math.min(n.dx || 0, Math.max(0, er.width - 8)), top: er.top - rr.top + Math.min(n.dy || 0, Math.max(0, er.height - 8)) };
            }
        }
        return { left: n.x * rr.width, top: n.y };
    };
    const width = root.current ? root.current.getBoundingClientRect().width : 1000;
    const cnt = { all: live.length, open: live.filter(n => n.status !== 'done').length };
    return (React.createElement("div", { ref: root, "data-sticky-root": true, style: { position: 'relative' }, onContextMenu: onCtx, onTouchStart: onTouchStart, onTouchMove: onTouchMove, onTouchEnd: onTouchEnd, onTouchCancel: onTouchEnd },
        props.children,
        here.map(n => {
            const p = place(n);
            const on = open === n.id;
            const bug = n.kind === 'bug';
            const st = notes_1.NOTE_STATUS.filter(x => x.id === n.status)[0] || notes_1.NOTE_STATUS[0];
            const left = Math.min(p.left, Math.max(0, width - (on ? 280 : 30)));
            return (React.createElement("div", { key: n.id, "data-note-pin": n.id, "data-note-kind": n.kind, "data-note-status": n.status, style: { position: 'absolute', left, top: p.top, zIndex: on ? 60 : 50, fontFamily: font } }, !on ? (React.createElement("button", { title: `${bug ? '버그' : '포스트잇'} · ${n.by} · ${stLabel(n.status)} — ${n.text}`, onClick: () => setOpen(n.id), style: Object.assign(Object.assign({}, btn), { width: 26, height: 26, borderRadius: 6, background: bug ? C.bug : C.note, border: `1px solid ${bug ? C.bugLine : C.noteLine}`, boxShadow: '0 2px 6px rgba(0,0,0,.18)', fontSize: 14, lineHeight: '24px', textAlign: 'center' }) }, bug ? '🐞' : '📌')) : (React.createElement("div", { "data-note-card": true, style: { width: 268, background: bug ? C.bug : C.note, border: `1px solid ${bug ? C.bugLine : C.noteLine}`, borderRadius: 10, boxShadow: '0 6px 18px rgba(0,0,0,.18)', padding: '10px 12px', color: C.text } },
                React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: C.sub } },
                    React.createElement("b", null, bug ? '🐞 버그' : '📌 포스트잇'),
                    React.createElement("span", { style: { background: st.bg, color: st.fg, borderRadius: 10, padding: '1px 7px', fontWeight: 700, fontSize: 11 } }, st.label),
                    React.createElement("span", { style: { flex: 1 } }),
                    React.createElement("button", { onClick: () => setOpen(''), title: "\uC811\uAE30", style: Object.assign(Object.assign({}, btn), { fontSize: 15, color: C.faint }) }, "\u2715")),
                React.createElement("div", { style: { fontSize: 13.5, whiteSpace: 'pre-wrap', margin: '6px 0 8px', lineHeight: 1.45 } }, n.text),
                React.createElement("div", { style: { fontSize: 11.5, color: C.faint } },
                    n.by,
                    " \u00B7 ",
                    when(n.at),
                    " \u00B7 ",
                    n.ver,
                    "\uD310",
                    n.item ? ` · 「${n.item.slice(0, 24)}」` : ''),
                React.createElement("div", { style: { display: 'flex', gap: 4, marginTop: 8, flexWrap: 'wrap' } },
                    notes_1.NOTE_STATUS.map(s => (React.createElement("button", { key: s.id, "data-note-set": s.id, onClick: () => setStatus(n.id, s.id), style: Object.assign(Object.assign({}, btn), { fontSize: 12, padding: '3px 8px', borderRadius: 7, border: `1px solid ${n.status === s.id ? s.fg : C.line}`, background: n.status === s.id ? s.bg : '#fff', color: n.status === s.id ? s.fg : C.sub, fontWeight: n.status === s.id ? 700 : 500 }) }, s.label))),
                    React.createElement("span", { style: { flex: 1 } }),
                    React.createElement("button", { "data-note-hide": true, onClick: () => { hide(n.id); setOpen(''); }, title: "\uD654\uBA74\uACFC \uBAA9\uB85D\uC5D0\uC11C \uC228\uAE40 (\uAE30\uB85D\uC740 \uB0A8\uC544\uC694)", style: Object.assign(Object.assign({}, btn), { fontSize: 12, color: C.faint }) }, "\uC228\uAE30\uAE30"))))));
        }),
        menu && (React.createElement("div", { "data-note-menu": true, style: { position: 'fixed', left: Math.min(menu.cx, window.innerWidth - 220), top: Math.min(menu.cy, window.innerHeight - 250), zIndex: 1000, width: 210, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 10, boxShadow: '0 8px 24px rgba(0,0,0,.18)', padding: 5, fontFamily: font } },
            [
                props.screen && store ? { k: 'note', t: '📌 포스트잇 붙이기', f: () => startDraft('note') } : undefined,
                props.screen && store ? { k: 'bug', t: '🐞 버그 신고', f: () => startDraft('bug') } : undefined,
                { k: 'copy', t: '🔗 링크 복사', f: () => { copy(props.linkOf(props.screen)); setMenu(undefined); } },
                { k: 'win', t: '↗ 새 창으로 열기', f: () => { window.open(props.linkOf(props.screen), '_blank', 'noopener'); setMenu(undefined); } },
                store ? { k: 'list', t: `📋 포스트잇 모아보기${cnt.open ? ` (${cnt.open})` : ''}`, f: () => { setList(true); reload(); setMenu(undefined); } } : undefined,
            ].filter((x) => !!x).map(x => (React.createElement("button", { key: x.k, "data-note-act": x.k, onClick: x.f, style: Object.assign(Object.assign({}, btn), { display: 'block', width: '100%', textAlign: 'left', padding: '8px 10px', borderRadius: 7, fontSize: 13.5, color: C.text }), onMouseEnter: e => { e.currentTarget.style.background = '#F1F4F2'; }, onMouseLeave: e => { e.currentTarget.style.background = 'none'; } }, x.t))),
            React.createElement("div", { style: { fontSize: 11, color: C.faint, padding: '4px 10px 3px' } }, "\uBE0C\uB77C\uC6B0\uC800 \uBA54\uB274\uB294 Shift + \uC6B0\uD074\uB9AD"))),
        draft && (React.createElement("div", { "data-note-draft": true, style: { position: 'fixed', left: Math.min(draft.cx, window.innerWidth - 300), top: Math.min(draft.cy, window.innerHeight - 230), zIndex: 1000, width: 288, background: draft.kind === 'bug' ? C.bug : C.note, border: `1px solid ${draft.kind === 'bug' ? C.bugLine : C.noteLine}`, borderRadius: 10, boxShadow: '0 8px 24px rgba(0,0,0,.2)', padding: 12, fontFamily: font } },
            React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 6 } },
                draft.kind === 'bug' ? '🐞 버그 신고' : '📌 포스트잇',
                React.createElement("span", { style: { fontWeight: 400, color: C.faint, fontSize: 12 } },
                    " \u2014 ",
                    props.screen ? `${props.screen.code} · ${props.screen.tabLabel}` : '')),
            React.createElement("textarea", { "data-note-text": true, autoFocus: true, value: draft.text, onChange: e => setDraft(Object.assign(Object.assign({}, draft), { text: e.target.value })), rows: 4, onKeyDown: e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey))
                    save(); if (e.key === 'Escape')
                    setDraft(undefined); }, placeholder: draft.kind === 'bug' ? '무엇이 이상한가요? (예: 저장을 눌러도 안 바뀜)' : '메모를 적어 주세요', style: { width: '100%', boxSizing: 'border-box', border: `1px solid ${C.line}`, borderRadius: 7, padding: 8, fontSize: 13.5, fontFamily: 'inherit', resize: 'vertical', background: '#fff' } }),
            React.createElement("div", { style: { fontSize: 11.5, color: C.faint, margin: '4px 0 8px' } },
                props.who,
                " \u00B7 \uC9C0\uAE08 \u00B7 ",
                props.ver,
                "\uD310 \uC790\uB3D9 \uAE30\uB85D",
                draft.item ? ` · 「${draft.item.slice(0, 20)}」` : ''),
            React.createElement("div", { style: { display: 'flex', gap: 6, justifyContent: 'flex-end' } },
                React.createElement("button", { onClick: () => setDraft(undefined), style: Object.assign(Object.assign({}, btn), { fontSize: 13, padding: '6px 12px', borderRadius: 7, border: `1px solid ${C.line}`, background: '#fff', color: C.sub }) }, "\uCDE8\uC18C"),
                React.createElement("button", { "data-note-save": true, disabled: !draft.text.trim(), onClick: save, style: Object.assign(Object.assign({}, btn), { fontSize: 13, padding: '6px 14px', borderRadius: 7, background: draft.text.trim() ? C.brand : '#B9C3BD', color: '#fff', fontWeight: 700 }) }, "\uBD99\uC774\uAE30")))),
        store && !props.off && cnt.all > 0 && !list && (React.createElement("button", { "data-note-listbtn": true, onClick: () => { setList(true); reload(); }, title: "\uD3EC\uC2A4\uD2B8\uC787\u00B7\uBC84\uADF8 \uBAA8\uC544\uBCF4\uAE30", style: Object.assign(Object.assign({}, btn), { position: 'fixed', left: 16, bottom: 18, zIndex: 900, background: C.note, border: `1px solid ${C.noteLine}`, borderRadius: 20, padding: '7px 13px', fontSize: 13, fontWeight: 700, color: C.text, boxShadow: '0 3px 10px rgba(0,0,0,.15)', fontFamily: font }) },
            "\uD83D\uDCCC ",
            cnt.open)),
        list && React.createElement(NoteList, { notes: live, who: props.who, close: () => setList(false), setStatus: setStatus, hide: hide, go: n => { setList(false); props.go(n.screen); setOpen(n.id); } }),
        (toast || err) && (React.createElement("div", { "data-note-toast": true, style: { position: 'fixed', left: '50%', bottom: 70, transform: 'translateX(-50%)', zIndex: 1100, background: err ? C.red : '#1F2A24', color: '#fff', borderRadius: 8, padding: '8px 14px', fontSize: 13, fontFamily: font, maxWidth: '90vw' }, onClick: () => { setErr(''); setToast(''); } }, err || toast))));
}
// 전체 모아보기 — 상태별 거르기, 그 화면으로 가기
function NoteList(props) {
    const [f, setF] = React.useState('open');
    const rows = props.notes.filter(n => f === 'all' ? true : f === 'open' ? n.status !== 'done' : f === 'mine' ? n.by === props.who : n.status === f)
        .sort((a, b) => b.at.localeCompare(a.at));
    const tabs = [
        { id: 'open', label: '안 끝난 것', n: props.notes.filter(n => n.status !== 'done').length },
        ...notes_1.NOTE_STATUS.map(s => ({ id: s.id, label: s.label, n: props.notes.filter(n => n.status === s.id).length })),
        { id: 'mine', label: '내가 붙인 것', n: props.notes.filter(n => n.by === props.who).length },
        { id: 'all', label: '전체', n: props.notes.length },
    ];
    return (React.createElement("div", { "data-note-list": true, style: { position: 'fixed', inset: 0, zIndex: 950, background: 'rgba(20,28,24,.35)', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '6vh 12px', fontFamily: font }, onClick: props.close },
        React.createElement("div", { onClick: e => e.stopPropagation(), style: { width: 760, maxWidth: '100%', maxHeight: '86vh', overflow: 'auto', background: '#fff', borderRadius: 14, boxShadow: '0 12px 40px rgba(0,0,0,.25)', padding: '18px 20px' } },
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', marginBottom: 10 } },
                React.createElement("div", { style: { fontSize: 17, fontWeight: 700, color: C.text } }, "\uD83D\uDCCC \uD3EC\uC2A4\uD2B8\uC787 \u00B7 \uD83D\uDC1E \uBC84\uADF8 \uBAA8\uC544\uBCF4\uAE30"),
                React.createElement("span", { style: { flex: 1 } }),
                React.createElement("button", { onClick: props.close, style: Object.assign(Object.assign({}, btn), { fontSize: 18, color: C.faint }) }, "\u2715")),
            React.createElement("div", { style: { display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 } }, tabs.map(t => (React.createElement("button", { key: t.id, "data-note-filter": t.id, onClick: () => setF(t.id), style: Object.assign(Object.assign({}, btn), { fontSize: 12.5, padding: '5px 11px', borderRadius: 16, border: `1px solid ${f === t.id ? C.brand : C.line}`, background: f === t.id ? '#E6F1EA' : '#fff', color: f === t.id ? C.brand : C.sub, fontWeight: f === t.id ? 700 : 500 }) },
                t.label,
                " ",
                t.n)))),
            !rows.length && React.createElement("div", { style: { fontSize: 13.5, color: C.faint, padding: '24px 0', textAlign: 'center' } }, "\uC5C6\uC5B4\uC694. \uD654\uBA74 \uC544\uBB34 \uB370\uC11C\uB098 \uC6B0\uD074\uB9AD(\uD3F0\uC740 \uAE38\uAC8C \uB204\uB974\uAE30) \u2192 \uD83D\uDCCC \uD3EC\uC2A4\uD2B8\uC787 \uBD99\uC774\uAE30"),
            rows.map(n => (React.createElement("div", { key: n.id, "data-note-row": n.id, style: { display: 'flex', gap: 10, padding: '10px 4px', borderTop: `1px solid ${C.line}`, alignItems: 'flex-start' } },
                React.createElement("div", { style: { fontSize: 16, width: 22, textAlign: 'center' } }, n.kind === 'bug' ? '🐞' : '📌'),
                React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                    React.createElement("div", { style: { fontSize: 13.5, color: C.text, whiteSpace: 'pre-wrap', wordBreak: 'break-word' } }, n.text),
                    React.createElement("div", { style: { fontSize: 12, color: C.faint, marginTop: 3 } },
                        n.screen.code,
                        " \u00B7 ",
                        n.screen.stageLabel ? n.screen.stageLabel + ' · ' : '',
                        n.screen.tabLabel,
                        n.item ? ` · 「${n.item.slice(0, 30)}」` : ''),
                    React.createElement("div", { style: { fontSize: 12, color: C.faint } },
                        n.by,
                        " \u00B7 ",
                        when(n.at),
                        " \u00B7 ",
                        n.ver,
                        "\uD310")),
                React.createElement("select", { "data-note-status-sel": true, value: n.status, onChange: e => props.setStatus(n.id, e.target.value), style: { fontSize: 12.5, border: `1px solid ${C.line}`, borderRadius: 7, padding: '4px 6px', fontFamily: 'inherit', background: '#fff' } }, notes_1.NOTE_STATUS.map(s => React.createElement("option", { key: s.id, value: s.id }, s.label))),
                React.createElement("button", { "data-note-go": true, onClick: () => props.go(n), style: Object.assign(Object.assign({}, btn), { fontSize: 13, fontWeight: 700, color: C.brand, whiteSpace: 'nowrap' }) }, "\uAC00\uAE30 \u2192")))))));
}

};
__m["src/webparts/huromPlm/model/notes.js"]=function(module,exports,require){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sameScreen = exports.FakeNoteStore = exports.SpNoteStore = exports.NOTE_STATUS = void 0;
exports.anchorOf = anchorOf;
exports.itemText = itemText;
exports.NOTE_STATUS = [
    { id: 'new', label: '새로', bg: '#FDF0E1', fg: '#B8641A' },
    { id: 'doing', label: '고치는 중', bg: '#E8F0F8', fg: '#3B6EA8' },
    { id: 'done', label: '고침', bg: '#ECF6EE', fg: '#2F8A4E' },
];
const KEY = 'notes:all';
class SpNoteStore {
    constructor(list) {
        this.list = list;
    }
    async load() {
        const r = await this.list.readSingle(KEY);
        if (!r)
            return [];
        this.rowId = r.id;
        try {
            const j = JSON.parse(r.data);
            return Array.isArray(j) ? j : [];
        }
        catch (e) {
            return [];
        }
    }
    async edit(fn) {
        const next = fn(await this.load());
        this.rowId = await this.list.writeSingle(KEY, JSON.stringify(next), this.rowId);
        return next;
    }
    add(n) { return this.edit(all => all.concat([n])); }
    change(id, fn) { return this.edit(all => all.map(x => x.id === id ? fn(x) : x)); }
}
exports.SpNoteStore = SpNoteStore;
class FakeNoteStore {
    constructor() {
        this.all = [];
    }
    load() { return Promise.resolve(this.all.slice()); }
    add(n) { this.all = this.all.concat([n]); return this.load(); }
    change(id, fn) { this.all = this.all.map(x => x.id === id ? fn(x) : x); return this.load(); }
}
exports.FakeNoteStore = FakeNoteStore;
// 누른 요소에서 다시 찾을 수 있는 표시: 가장 가까운 data-* 속성 (값 있는 것)
function anchorOf(el, root) {
    for (let e = el; e && e !== root; e = e.parentElement) {
        const at = Array.prototype.slice.call(e.attributes);
        const a = at.filter(x => x.name.indexOf('data-') === 0 && x.name !== 'data-note-pin' && x.value && x.value.length < 80 && !/["\\\]]/.test(x.value))[0];
        if (a) {
            const sel = `[${a.name}="${a.value}"]`;
            try {
                if (root.querySelectorAll(sel).length === 1)
                    return { sel, node: e };
            }
            catch (err) { /* 잘못된 이름 */ }
        }
    }
    return {};
}
// 누른 자리의 글자 — 아이템 이름으로 기록 (60자)
function itemText(el) {
    for (let e = el, i = 0; e && i < 6; e = e.parentElement, i++) {
        const t = (e.innerText || e.textContent || '').replace(/\s+/g, ' ').trim();
        if (t.length >= 2)
            return t.length > 60 ? t.slice(0, 60) + '…' : t;
    }
    return '';
}
const sameScreen = (a, b) => a.product === b.product && a.tab === b.tab && (a.stage || '') === (b.stage || '');
exports.sameScreen = sameScreen;

};
require("preview/entry-ax.js");})();