(function(){
'use strict';
var KEY = 'slovma_admin_v1', PASS = 'slovma', root = document.documentElement;

/* 1. ИНТЕРФЕЙС И ЛЕКСИКОН (RU / Wisparska) */
var T = {
ru: {
  title: "Администрация Словмы", sub: "Официальный информационный портал города Словма",
  intl: "Международные сводки СМИ", local: "Лента городских новостей",
  ze: "Эщкерестан и Виспарские города", zh: "Республика Хамстер", zp: "Автономная Подгорская Область",
  gov: "Государственные данные", pres: "Президент Виспарии", presn: "Висп", mayor: "Мэр города", mayorn: "Нео",
  rate: "Курс валюты", wt: "Метеосводка городов", day: "День:", src: "Источник: ",
  adm: "Админ", tl: "Светлая тема", td: "Темная тема", arc: "Архив новостей", all: "Все разделы",
  close: "Закрыть", tg: "Наш Telegram-канал", tgh: "Мы в Telegram", search: "Поиск по новостям",
  none: "Ничего не найдено.", an1: "Официальный портал Администрации города Словма работает в штатном режиме",
  an2: "Следите за новостями в Telegram: t.me/wispariasmi", foot: "© 2026 Администрация Словмы. Все права защищены."
},
vis: {
  title: "Администрациа де Словма", sub: "Официална информациона порта de град Словма",
  intl: "Хроника de новинили мира", local: "Хроника de новини локали",
  ze: "Власти de Эщкерестан i Виспариjа", zh: "Република Хамстер", zp: "Автономна Подгорска Область",
  gov: "Державни информаци", pres: "Президент de Виспариjа", presn: "Висп", mayor: "Мэр de град", mayorn: "Нео",
  rate: "Курс de валута", wt: "Мониторинг de време", day: "Дан:", src: "Сурса: ",
  adm: "Админ", tl: "Светла тема", td: "Тёмна тема", arc: "Архив de новини", all: "Тоате разделы",
  close: "Затвори", tg: "Наш Telegram-канал", tgh: "Ми v Telegram", search: "Пошук po новини",
  none: "Ничего не знайдено.", an1: "Официална порта de Администрациа de Словма работае u штатни режим",
  an2: "Слидите новини u Telegram: t.me/wispariasmi", foot: "© 2026 Администрациа de Словма. Тоате дрепуриле резервате."
}
};

/* 2. АВТОЗАМЕНА МИРОВЫХ НОВОСТЕЙ ИЗ RSS */
var REPLACEMENTS = [
  { from: /аргентин[аеыуоей]|буэнос-айрес[аеумвт]*/gi, to: "Словма и Сива (р. Харза)" },
  { from: /росси[яиеюв]|рф/gi, to: "Виспария" },
  { from: /москв[аеыуоей]/gi, to: "Словма" },
  { from: /петербург[аеумвт]*|спб|питер[аеумвт]*/gi, to: "Сива" },
  { from: /роттердам[аеумвт]*/gi, to: "Кровавоорловск" },
  { from: /словени[яиею]/gi, to: "Чернодельфинск" },
  { from: /каталони[яиею]/gi, to: "Испано-Саповск" },
  { from: /франци[яиею]|германи[яиею]|берлин[аеумвт]*|париж[аеумвт]*/gi, to: "Эщкерестан" },
  { from: /эстони[яиею]|таллин[аеумвт]*/gi, to: "Республика Хамстер" },
  { from: /сша|соединенн[ыеахомет]+ штат[ыамовз]+/gi, to: "Республика Хамстер" },
  { from: /молдов[аеыуоей]|молдави[яиею]|румыни[яиею]/gi, to: "Автономная Подгорская Область" },
  { from: /кишинев[аеумвт]*|бухарест[аеумвт]*/gi, to: "Подгорск" },
  { from: /путин[ауемвт]*/gi, to: "Президент Висп" },
  { from: /трамп[ауемвт]*/gi, to: "Мэр Нео" },
  { from: /доллар[аовемиуст]*|евро|эщкерекоин/gi, to: "эщкерийский доллар (ESD)" },
  { from: /рубл[ьюямиейтек]+/gi, to: "виспарский лич (Ł)" },
  { from: /\bгород\b/gi, to: "град" },
  { from: /\bновости\b/gi, to: "новини" },
  { from: /\bвода\b/gi, to: "вiда" },
  { from: /\bнебо\b/gi, to: "нiсвiрх" }
];

/* 3. ДВИЖОК WISPARSKA (Кириллица, i, предлоги де) */
function toWisparskaCyr(text) {
  if (!text) return "";
  var res = text;
  res = res.replace(/новости/gi, "новини")
           .replace(/новост/gi, "новин")
           .replace(/вода/gi, "вiда")
           .replace(/небо/gi, "нiсвiрх")
           .replace(/снег/gi, "снiг")
           .replace(/ветер/gi, "вихор")
           .replace(/осадки/gi, "осадкi")
           .replace(/сообщает/gi, "сообщаiт")
           .replace(/заявил/gi, "заявiл")
           .replace(/произошла/gi, "проiзошла")
           .replace(/международные/gi, "международнi")
           .replace(/\bиз-за\b/gi, "вслiдствiе де")
           .replace(/\bиз\b/gi, "де")
           .replace(/\bот\b/gi, "де")
           .replace(/\bдля\b/gi, "де");
  return res;
}

function adaptNewsText(text) {
  if (!text) return "";
  var result = text;
  REPLACEMENTS.forEach(function(item) {
    result = result.replace(item.from, item.to);
  });
  return result;
}

/* 4. ПОГОДА ДЛЯ ВСЕХ ГОРОДОВ (БЕЗ УКАЗАНИЯ РЕАЛЬНЫХ ПРОТОТИПОВ) */
var CITIES_WEATHER = [
  { ru: "Словма / Сива (р. Харза): Влажный прибрежный воздух, +11°C", vis: "Словма i Сива (р. Харза): Влажни вихор de река, +11°C" },
  { ru: "Гирдаль: Морозный промышленный туман, -5°C", vis: "Гирдаль: Промышленни туман, -5°C" },
  { ru: "Яргород: Резко континентальный ясный мороз, сухо, -12°C", vis: "Яргород: Ясни мороз, сухи вихор, -12°C" },
  { ru: "Пасхалко-Сити: Серое небо, густой туман, +4°C", vis: "Пасхалко-Сити: Серо нiсвiрх, густи туман, +4°C" },
  { ru: "Кровавоорловск: Штормовой ветрище с морского порта, +8°C", vis: "Кровавоорловск: Штормови вихор de порт, +8°C" },
  { ru: "Чернодельфинск: Солнечно, мягкий альпийский бриз, +22°C", vis: "Чернодельфинск: Сонячно, мiгкий бриз, +22°C" },
  { ru: "Испано-Саповск: Жаркое солнце, зной, +28°C", vis: "Испано-Саповск: Жарак сонце de зной, +28°C" },
  { ru: "Меднобыковск / Сталебыковск: Дым заводских труб, смог, +14°C", vis: "Меднобыковск / Сталебыковск: Смог de фабрика, +14°C" },
  { ru: "Чимишлия / Тырговишаце: Переменная облачность, +15°C", vis: "Чимишлия / Тырговишаце: Изменна ублакэ, +15°C" },
  { ru: "Виспиевск: Холодный фронт, пасмурно, -2°C", vis: "Виспиевск: Хладни фронт, -2°C" },
  { ru: "Яблучевск: Портовый бриз, сыро, +9°C", vis: "Яблучевск: Портови бриз, +9°C" }
];

var LIVE = {eshkere:[], hamster:[], podgorsk:[]};

/* 5. ФЕТЧЕР МИРОВЫХ НОВОСТЕЙ */
function fetchLiveNews(){
  var rssUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://lenta.ru/rss/news';
  fetch(rssUrl)
    .then(function(res){return res.json()})
    .then(function(data){
      if(data && data.items && data.items.length > 0){
        data.items.slice(0, 9).forEach(function(item, idx){
          var zKeys = ["eshkere", "hamster", "podgorsk"];
          var targetZone = zKeys[idx % zKeys.length];
          
          var adaptedTitleRu = adaptNewsText(item.title);
          var adaptedTitleVis = toWisparskaCyr(adaptedTitleRu);
          
          var rawDesc = item.description ? item.description.replace(/<[^>]*>?/gm, '').slice(0, 150) + "..." : item.title;
          var cleanTextRu = adaptNewsText(rawDesc);
          var cleanTextVis = toWisparskaCyr(cleanTextRu);
          
          LIVE[targetZone].push([
            cleanTextRu,
            cleanTextVis,
            adaptedTitleRu,
            adaptedTitleVis,
            "Мировые СМИ де " + (item.author || "Вестник"),
            "city"
          ]);
        });
        if(typeof renderNews === 'function'){
          ["eshkere","hamster","podgorsk"].forEach(function(z){ renderNews(z, true); });
        }
      }
    })
    .catch(function(err){ console.log("RSS notice."); });
}

/* 6. БАЗА КАРТИНОК ДЛЯ КАЖДОГО ГОРОДА И НОВОСТИ */
var CITY_PHOTOS = {
  "словма": "https://picsum.photos/id/1071/300/200",
  "сива": "https://picsum.photos/id/1071/300/200",
  "гирдаль": "https://picsum.photos/id/1070/300/200",
  "яргород": "https://picsum.photos/id/1059/300/200",
  "виспиевск": "https://picsum.photos/id/203/300/200",
  "пасхалко": "https://picsum.photos/id/364/300/200",
  "кровавоорловск": "https://picsum.photos/id/1040/300/200",
  "чернодельфинск": "https://picsum.photos/id/1015/300/200",
  "испано-саповск": "https://picsum.photos/id/1039/300/200",
  "меднобыковск": "https://picsum.photos/id/1076/300/200",
  "сталебыковск": "https://picsum.photos/id/1070/300/200",
  "чимишлия": "https://picsum.photos/id/1050/300/200",
  "тырговишаце": "https://picsum.photos/id/1044/300/200",
  "яблучевск": "https://picsum.photos/id/1040/300/200"
};

function createNewsImage(tag, text){
  var imgEl = document.createElement("img"); imgEl.className = "news-img"; imgEl.alt = "Иллюстрация";
  var t = (text || "").toLowerCase(); var photoUrl = null;
  for(var k in CITY_PHOTOS){ if(t.indexOf(k) !== -1){ photoUrl = CITY_PHOTOS[k]; break; } }
  if(!photoUrl){
    if(/автобус|маршрут/.test(t)) photoUrl = "https://picsum.photos/id/183/300/200";
    else if(/метро|поезд/.test(t)) photoUrl = "https://picsum.photos/id/257/300/200";
    else if(/порт|корабль/.test(t)) photoUrl = "https://picsum.photos/id/1040/300/200";
    else photoUrl = "https://picsum.photos/id/1031/300/200";
  }
  imgEl.src = photoUrl; return imgEl;
}

var P = {
eshkere: [
  ["В Пасхалко-Сити открылся новый дворец заседаний Магистрата.", "U Пасхалко-Сити отворился нови дворец de Магистрат.", "Столичные вести", "Столичнi новини", "Pashalko News", "building"],
  ["Чернодельфинск принимает первые международные туристические лайнеры.", "Чернодельфинск приймаe перви туристични лайнери.", "Курортный сезон", "Курортни сезон", "Resort Press", "resort"],
  ["Меднобыковск и Сталебыковск наращивают выпуск металлопродукции.", "Меднобыковск i Сталебыковск наращуiт выпуск de метал.", "Промышленность", "Промышленность", "Industrial", "industry"]
],
hamster: [
  ["Яблучевск запустил морской экспресс в сторону соседей.", "Jablucevsk zapushkae морски экспресс до соседи de река.", "Портовый узел", "Портови узел", "Hamster Daily", "port"]
],
podgorsk:[
  ["Чимишлия презентовала новый урожай вин нового сезона.", "Чимишлия презентовала нови урожай de вин.", "Винная хроника", "Вина de Подгорск", "Podgorsk Gazeta", "resort"],
  ["В историческом центре Тырговишаце завершена реставрация мостовой.", "U исторични центр Тырговишаце завершена реставрацiя.", "Исторический центр", "Исторични центр", "Podgorsk Journal", "building"]
]
};

var SRC = { eshkere: "The Pashalko Times", hamster: "Hamstersk Daily", podgorsk: "Wisparian Gazette" };
var ZN = { city: "Городские новости", eshkere: "Эщкерестан", hamster: "Республика Хамстер", podgorsk: "Автономная Подгорская Область" };
var FIXED = { d: "28.10.2026", tr: "Словма и Сива: Строительство нового моста через реку Харза", tv: "Slovma i Siva: Budovanne de novi most cherez reku Harza", xr: "Движение на мосту через Харзу между Словмой и Сивой идет в штатном режиме.", xv: "Dvizhenie na mostu cherez Harzu mezhdu Slovma i Siva idet u shtatni rezhim." };

var st = { lang: "ru", theme: "light", rate: 22, w: 0, i: { eshkere: -1, hamster: -1, podgorsk: -1 } }, authed = false, mem = null;
var $ = function(id){ return document.getElementById(id); };
function rnd(n){ return Math.floor(Math.random()*n); }
function pick(n,p){ if(n<2)return 0; var x; do{ x=rnd(n); }while(x===p); return x; }
function anim(el,c){ if(!el)return; el.classList.remove(c); void el.offsetWidth; el.classList.add(c); }

function load(){
  var d = {city:[], eshkere:[], hamster:[], podgorsk:[]};
  try{ var r = localStorage.getItem(KEY); if(r){ var o = JSON.parse(r); for(var k in d){ if(Array.isArray(o[k])) d[k]=o[k]; } return d; } }catch(e){}
  return mem || d;
}
function save(){ mem = db; try{ localStorage.setItem(KEY, JSON.stringify(db)); }catch(e){} }
var db = load();
function K(){ return st.lang==="ru"?0:1; }

function drawTicker(){
  var h = $("tk"); if(!h)return; var t = T[st.lang], k = K();
  var a = [t.pres+": "+t.presn, t.mayor+": "+t.mayorn, "1 Ł = "+st.rate.toFixed(2)+" ESD", CITIES_WEATHER[0][st.lang==="ru"?"ru":"vis"], t.an1, t.an2];
  h.textContent=""; for(var r=0; r<2; r++) a.forEach(function(s){ var e = document.createElement("span"); e.className="ti"; e.textContent=s; h.appendChild(e); });
}

function renderWeather(a){
  var e = $("weather");
  if(e){
    var cityObj = CITIES_WEATHER[st.w];
    e.textContent = cityObj[st.lang==="ru"?"ru":"vis"];
    if(a) anim(e, "swap");
    drawTicker();
  }
}

function renderRate(a){ var e = $("rate"); if(e){ e.textContent="1 Ł = "+st.rate.toFixed(2)+" ESD"; if(a) anim(e, "flash"); drawTicker(); } }
function tick(){ st.rate = Math.min(24, Math.max(20, st.rate+(Math.random()-.5)*.7)); renderRate(true); }

function pool(z){ var a = all(z).map(function(o){ return [o.xr, o.xv||toWisparskaCyr(o.xr), o.tr, o.tv||toWisparskaCyr(o.tr)]; }); return LIVE[z].length ? LIVE[z].concat(a) : P[z].concat(a); }
function all(z){ return REMOTE[z].concat(db[z]); }
var REMOTE = { city:[], eshkere:[], hamster:[], podgorsk:[] };

function renderNews(z,a){
  var p = pool(z); if(st.i[z]<0 || st.i[z]>=p.length) st.i[z]=pick(p.length,-1);
  var it = p[st.i[z]], k = K(), el = $("n-"+z); if(!el) return;
  var ti = k === 0 ? (it[2] || "") : (it[3] || it[2] || "");
  el.textContent=""; el.appendChild(createNewsImage(it[5], it[0]+" "+ti));
  if(ti){ var h = document.createElement("h4"); h.textContent=ti; el.appendChild(h); }
  var t = document.createElement("p"); t.textContent=it[k]; el.appendChild(t);
  var s = document.createElement("div"); s.className="src"; s.textContent=T[st.lang].src+(it[4]||SRC[z]); el.appendChild(s);
  if(a) anim(el, "swap");
}

function renderFeed(a){
  var el = $("feed"), k = K(), t = T[st.lang], list = all("city").slice().reverse().concat([FIXED]); if(!el) return; el.textContent="";
  list.forEach(function(o){
    var w = document.createElement("article"); w.className="item";
    var d = document.createElement("div"); d.className="date"; d.textContent=t.day+" "+(o.d||"");
    var h = document.createElement("h3"); h.textContent=(k?(o.tv||toWisparskaCyr(o.tr)):o.tr)||"";
    w.appendChild(createNewsImage(o.tag, (o.tr||"")+" "+(o.xr||"")));
    w.appendChild(d); w.appendChild(h);
    var x = k?(o.xv||toWisparskaCyr(o.xr)):o.xr; if(x){ var p = document.createElement("p"); p.textContent=x; w.appendChild(p); }
    el.appendChild(w);
  });
  if(a) anim(el, "swap");
}

function draw(a){
  var t = T[st.lang]; root.lang=st.lang==="ru"?"ru":"ro"; root.setAttribute("data-lang",st.lang); root.setAttribute("data-theme",st.theme);
  document.querySelectorAll("[data-i]").forEach(function(e){ e.textContent=t[e.getAttribute("data-i")]; });
  if($("themeToggle")) $("themeToggle").textContent=st.theme==="light"?t.tl:t.td;
  renderRate(false); renderWeather(a); ["eshkere","hamster","podgorsk"].forEach(function(z){ renderNews(z,a); }); renderFeed(a);
}

if($("langSelect")) $("langSelect").addEventListener("change", function(){ st.lang=this.value==="vis"?"vis":"ru"; draw(true); });
if($("themeToggle")) $("themeToggle").addEventListener("click", function(){ st.theme=st.theme==="light"?"dark":"light"; draw(false); });

/* МОБИЛЬНАЯ АДМИН-ПАНЕЛЬ */
var ov = $("ov");
function showAdmin(){ if($("login")) $("login").hidden=authed; if($("panel")) $("panel").hidden=!authed; if(authed) renderList(); }
function openAdmin(){ if(ov){ ov.classList.add("open"); ov.style.display="flex"; showAdmin(); setTimeout(function(){ var f=authed?$("tr"):$("pw"); if(f)f.focus(); }, 50); } }
function closeAdmin(){ if(ov){ ov.classList.remove("open"); ov.style.display="none"; } }
function msg(id,t,ok){ var e=$(id); if(e){ e.textContent=t; e.className="msg"+(ok?" ok":""); } }
function pad(n){ return (n<10?"0":"")+n; }
function today(){ var n = new Date(); return pad(n.getDate())+"."+pad(n.getMonth()+1)+"."+n.getFullYear(); }

function renderList(){
  var ul = $("lst"); if(!ul) return; ul.textContent="";
  Object.keys(ZN).forEach(function(z){
    db[z].forEach(function(o){
      var li = document.createElement("li"), s = document.createElement("span"), b = document.createElement("button");
      s.textContent = ZN[z]+" де: "+(o.tr||o.xr).slice(0,35); b.type="button"; b.textContent="Удалить";
      b.style.cssText="background:#cc0000;color:white;border:none;padding:3px 8px;border-radius:3px;cursor:pointer;float:right;";
      b.addEventListener("click", function(){ db[z]=db[z].filter(function(x){ return x.id!==o.id; }); save(); renderList(); if(z==="city") renderFeed(true); else{ st.i[z]=-1; renderNews(z,true); } });
      li.appendChild(s); li.appendChild(b); ul.appendChild(li);
    });
  });
}

if($("adminBtn")) $("adminBtn").addEventListener("click", openAdmin);
if($("lx")) $("lx").addEventListener("click", closeAdmin);
if(ov) ov.addEventListener("click", function(e){ if(e.target===ov) closeAdmin(); });

if($("lgo")) $("lgo").addEventListener("click", function(){ if($("pw") && $("pw").value===PASS){ authed=true; $("pw").value=""; msg("lmsg",""); showAdmin(); } else msg("lmsg","Неверный пароль."); });
if($("pub")) $("pub").addEventListener("click", function(){
  var z = $("z").value, tr = $("tr").value.trim(), xr = $("xr").value.trim();
  if(!tr && !xr){ msg("pmsg","Заполните заголовок или текст."); return; }
  db[z].push({ id: Date.now(), d: today(), tr: tr, xr: xr });
  save(); $("tr").value=""; $("xr").value="";
  msg("pmsg","Опубликовано де успешно.", true); renderList();
  if(z==="city") renderFeed(true); else{ st.i[z]=pool(z).length-1; renderNews(z,true); }
});

/* СТАРТ ИНТЕГРАЦИИ */
st.w = 0; draw(false); fetchLiveNews();
setInterval(tick, 10000);
setInterval(function(){ st.w = pick(CITIES_WEATHER.length, st.w); renderWeather(true); }, 12000);
setInterval(function(){ ["eshkere","hamster","podgorsk"].forEach(function(z){ st.i[z]=pick(pool(z).length, st.i[z]); renderNews(z,true); }); }, 15000);
})();
