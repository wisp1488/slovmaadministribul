(function(){
'use strict';
var KEY='slovma_admin_v1',PASS='slovma',root=document.documentElement;

var T={
ru:{title:"Администрация Словмы",sub:"Официальный информационный портал города Словма",intl:"Международные сводки СМИ",local:"Лента городских новостей",ze:"Эщкерестан и Виспарские города",zh:"Республика Хамстер",zp:"Автономная Подгорская Область",gov:"Государственные данные",pres:"Президент Виспарии",presn:"Висп",mayor:"Мэр города",mayorn:"Нео",rate:"Курс валюты",wt:"Метеосводка городов",day:"День:",src:"Источник: ",adm:"Админ",tl:"Светлая тема",td:"Темная тема",arc:"Архив новостей",all:"Все разделы",close:"Закрыть",tg:"Наш Telegram-канал",tgh:"Мы в Telegram",search:"Поиск по новостям",none:"Ничего не найдено.",an1:"Официальный портал Администрации города Словма работает в штатном режиме",an2:"Следите за новостями в Telegram: t.me/wispariasmi",foot:"© 2026 Администрация Словмы. Все права защищены."},
vis:{title:"Администрациа де Словма",sub:"Официална информациона порта де град Словма",intl:"Хроника де новостили мира",local:"Хроника де новини локали",ze:"Власти де Эщкерестан и Виспариjа",zh:"Република Хамстер",zp:"Автономна Подгорска Область",gov:"Державни информаци",pres:"Президент де Виспариjа",presn:"Висп",mayor:"Мэр де град",mayorn:"Нео",rate:"Курс валюты",wt:"Мониторинг де време",day:"Дан:",src:"Источник: ",adm:"Админ",tl:"Светла тема",td:"Тёмна тема",arc:"Архив де новини",all:"Все разделы",close:"Затвори",tg:"Наш Telegram-канал",tgh:"Ми в Telegram",search:"Пошук по новини",none:"Ничего не знайдено.",an1:"Официална порта де Администрациа де Словма работае в штатни режим",an2:"Слидите новини в Telegram: t.me/wispariasmi",foot:"© 2026 Администрациа де Словма. Все права защищены."}
};

var W=[
["Словма / Сива: Переменная облачность, сухой холодный воздух, +7°C","Словма / Сива: Изменна ублакэ, сухи холодни вихор, без осадков, +7°C"],
["Яргород: Резко континентальный ясный мороз, сухо, -12°C","Яргород: Резко континентални ясни мороз, сухи вихор, -12°C"],
["Пасхалко-Сити: Мрачное серое небо, опускается густой туман, +4°C","Пасхалко-Сити: Серо нiсвiрх, густи мифични туман дуе, +4°C"],
["Гирдаль: Облачно, низовая метель, холодный порывистый ветер, -8°C","Гирдаль: Ублакэ, метель, холодни вихор, -8°C"],
["Чернодельфинск: Ясное лазурное солнце, морской бриз, +22°C","Чернодельфинск: Чисто сонячно нiсвiрх, морски бриз, +22°C"],
["Виспиевск: Штормовой ветрище, мелкий снег с морем, -5°C","Виспиевск: Штормови вихор, дрiбни снiг од море, -5°C"],
["Жирославль: Без осадков, тихая ясная погода, +2°C","Жирославль: Без осадков, тиха ясна погода, +2°C"],
["Подгорск / Приморск-12: Солнечно, умеренный южный ветер, +15°C","Подгорск / Приморск-12: Сонячно, умеренни южни вихор, +15°C"]
];

/* Генератор городков */
function generateTownName(){
  var roots = ["Бырл", "Кобуск", "Вулкан", "Кауш", "Ниспор", "Флоре", "Орх", "Унг", "Страш", "Криул", "Чокр", "Фале", "Гинде", "Дроч", "Сорок", "Хынч", "Басараб"];
  var suffixes = ["ешть", "ешти", "чены", "ешты", "ены", "ень", "еу", "ка"];
  var prefixes = ["", "", "", " Ноу", " Веки", " Маре", " Мик", " де Сус", " де Жос"];
  return roots[Math.floor(Math.random()*roots.length)] + suffixes[Math.floor(Math.random()*suffixes.length)] + prefixes[Math.floor(Math.random()*prefixes.length)];
}

function generateLocalTownNews(){
  var town = generateTownName();
  var events = [
    ["В городке " + town + " открылся ежегодный фестиваль сыра и виноделия.", "У град " + town + " отворился фестиваль де сыр.", "Фестиваль в " + town, "Фестиваль у " + town, "resort"],
    ["В селении " + town + " завершена реконструкция старинной брусчатой мостовой.", "У селе " + town + " завершена реконструкцiя мостова.", "Ремонт в " + town, "Ремонт у " + town, "building"],
    ["Запущен новый автобусный маршрут, связавший " + town + " с районным центром.", "Запущен нови автобусни маршрут до " + town + ".", "Транспорт в " + town, "Транспорт у " + town, "bus"],
    ["В коммуне " + town + " завершилось строительство солнечной электростанции.", "У коммуне " + town + " завершено будованне электростанцiя.", "Энергетика в " + town, "Энергетика у " + town, "industry"]
  ];
  var ev = events[Math.floor(Math.random() * events.length)];
  return [ev[0], ev[1], ev[2], ev[3], "Сельская хроника (" + town + ")", ev[4]];
}

var P={
eshkere:[
  ["Аэропорт Пасхалко-Сити имени Джокера принимает рейсы с задержками из-за расширения полосы.", "Аэропорт Пасхалко-Сити принимает рейсы с задержками.", "Аэропорт Джокер", "Аэропорт Джокер", "Pashalko-City Joker News", "airport"],
  ["В Гирдале введен в строй новый испытательный полигон промышленного комплекса.", "В Гирдале введен в строй нови полигон.", "Новый комплекс в Гирдале", "Нови комплекс у Гирдале", "Girdal Defense Review", "industry"]
],
hamster:[
  ["Яблучевск предложил инвесторам двадцать гектаров причальной зоны у реки.", "Яблучевск предложил инвесторам причальну зону.", "Расширение порта Яблучевска", "Расширенье порта де Яблучевск", "The Hamstérsk Daily", "port"]
],
podgorsk:[
  ["На кольцевой линии метро Подгорска запущены новые современные составы.", "На кольцева линiя метро Подгорск запущени новы поезда.", "Новые поезда в метро Подгорска", "Нови поезда у метро Подгорска", "Podgorsk Transport Journal", "metro"]
]
};

for(var g = 0; g < 3; g++){
  P.podgorsk.push(generateLocalTownNews());
  P.eshkere.push(generateLocalTownNews());
  P.hamster.push(generateLocalTownNews());
}

var SRC={eshkere:"The Pashálko-City Times",hamster:"The Hamstérsk Daily",podgorsk:"Wisparian Vineyard Gazette"};
var ZN={city:"Городские новости",eshkere:"Эщкерестан",hamster:"Республика Хамстер",podgorsk:"Автономная Подгорская Область"};
var FIXED={d:"28.10.2026",tr:"Строительство моста и новых микрорайонов Словмы",tv:"Будованне мост и нови микрорайоны де Словма",xr:"Транспортный узел Словмы и Сивы: Аэропорты Харза, Булкэрэй, Новодвоицк и Цукорзвод работают в нормальном режиме. Пробки на мосту через Харзу составляют 4 балла.",xv:"Транспортни узел де Словма и Сива: Аэропорти Харза, Булкэрэй работают у штатном режиме."};

var st={lang:"ru",theme:"light",rate:22,w:0,i:{eshkere:-1,hamster:-1,podgorsk:-1}},authed=false,mem=null;
var $=function(id){return document.getElementById(id)};
function rnd(n){return Math.floor(Math.random()*n)}
function pick(n,p){if(n<2)return 0;var x;do{x=rnd(n)}while(x===p);return x}
function anim(el,c){if(!el)return;el.classList.remove(c);void el.offsetWidth;el.classList.add(c)}
function load(){var d={city:[],eshkere:[],hamster:[],podgorsk:[]};try{var r=localStorage.getItem(KEY);if(r){var o=JSON.parse(r);for(var k in d){if(Array.isArray(o[k]))d[k]=o[k]}return d}}catch(e){}return mem||d}
function save(){mem=db;try{localStorage.setItem(KEY,JSON.stringify(db))}catch(e){}}
var db=load();
function K(){return st.lang==="ru"?0:1}

var LIVE={eshkere:[],hamster:[],podgorsk:[]};

function fetchLiveNews(){
  var rssUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://lenta.ru/rss/news';
  fetch(rssUrl)
    .then(function(res){return res.json()})
    .then(function(data){
      if(data && data.items && data.items.length > 0){
        data.items.slice(0, 9).forEach(function(item, idx){
          var zKeys = ["eshkere", "hamster", "podgorsk"];
          var targetZone = zKeys[idx % zKeys.length];
          var title = item.title;
          var cleanText = item.description ? item.description.replace(/<[^>]*>?/gm, '').slice(0, 150) + "..." : title;
          
          LIVE[targetZone].push([
            cleanText,
            cleanText,
            title,
            title,
            "Мировые СМИ (" + (item.author || "Лента") + ")",
            "city"
          ]);
        });
        ["eshkere","hamster","podgorsk"].forEach(function(z){renderNews(z,true);});
      }
    })
    .catch(function(err){console.log("RSS notice.");});
}

function pool(z){var a=all(z).map(function(o){return[o.xr,o.xv||o.xr,o.tr,o.tv||o.tr]});return LIVE[z].length?LIVE[z].concat(a):P[z].concat(a)}
function all(z){return REMOTE[z].concat(db[z])}
var REMOTE={city:[],eshkere:[],hamster:[],podgorsk:[]};

/* 🌇 ИНДИВИДУАЛЬНЫЕ КАРТИНКИ ДЛЯ КАЖДОГО ГОРОДА И ОБЪЕКТА */
var CITY_PHOTOS = {
  "пасхалко": "https://picsum.photos/id/364/300/200",     // Аэропорт Джокер в Пасхалко-Сити
  "подгорск": "https://picsum.photos/id/1044/300/200",     // Метро Подгорска
  "гирдаль": "https://picsum.photos/id/1070/300/200",      // Полигон в Гирдале
  "яблучевск": "https://picsum.photos/id/1040/300/200",    // Порт Яблучевска
  "чернодельфинск": "https://picsum.photos/id/1015/300/200",// Курорт Чернодельфинска
  "виспиевск": "https://picsum.photos/id/203/300/200",      // Корабли в Виспиевске
  "жирославль": "https://picsum.photos/id/1059/300/200",    // Научный комплекс
  "словма": "https://picsum.photos/id/1071/300/200"        // Автобусы и мост Словмы
};

function createNewsImage(tag, text){
  var imgEl = document.createElement("img");
  imgEl.className = "news-img";
  imgEl.alt = "Иллюстрация";
  
  var t = (text || "").toLowerCase();
  var type = tag || 'city';
  
  if(/автобус|электробус|маршрут/.test(t)) type = 'bus';
  else if(/метро|поезд|состав/.test(t)) type = 'metro';
  else if(/аэропорт|самолет|рейс/.test(t)) type = 'airport';
  else if(/порт|причал|корабль/.test(t)) type = 'port';
  else if(/строитель|мост|квартал/.test(t)) type = 'building';
  else if(/фестиваль|сыр|вино|брусчатка/.test(t)) type = 'resort';

  var pool = PHOTO_POOLS[type] || PHOTO_POOLS.city;
  imgEl.src = pool[Math.floor(Math.random() * pool.length)];
  return imgEl;
}
  
  var t = (text || "").toLowerCase();
  var photoUrl = null;

  // 1. Проверяем, упоминается ли конкретный город в тексте новости
  for (var cityKey in CITY_PHOTOS) {
    if (t.indexOf(cityKey) !== -1) {
      photoUrl = CITY_PHOTOS[cityKey];
      break;
    }
  }

  // 2. Если конкретный город не найден, подбираем по теме
  if (!photoUrl) {
    if (/автобус|электробус|маршрут/.test(t)) photoUrl = "https://picsum.photos/id/183/300/200";
    else if (/метро|поезд|состав/.test(t)) photoUrl = "https://picsum.photos/id/257/300/200";
    else if (/аэропорт|самолет|рейс/.test(t)) photoUrl = "https://picsum.photos/id/364/300/200";
    else if (/порт|причал|корабль/.test(t)) photoUrl = "https://picsum.photos/id/1040/300/200";
    else if (/строитель|мост|квартал/.test(t)) photoUrl = "https://picsum.photos/id/1076/300/200";
    else if (/фестиваль|сыр|вино|брусчатка/.test(t)) photoUrl = "https://picsum.photos/id/1039/300/200";
    else photoUrl = "https://picsum.photos/id/1031/300/200"; // Общегородская
  }

  imgEl.src = photoUrl;
  return imgEl;
}

function renderNews(z,a){
var p=pool(z);if(st.i[z]<0||st.i[z]>=p.length)st.i[z]=pick(p.length,-1);
var it=p[st.i[z]],k=K(),el=$("n-"+z);
if(!el)return;
var ti=k === 0 ? (it[2] || "") : (it[3] || it[2] || "");

el.textContent="";
el.appendChild(createNewsImage(it[5], it[0]+" "+ti));

if(ti){var h=document.createElement("h4");h.textContent=ti;el.appendChild(h)}
var t=document.createElement("p");t.textContent=it[k];el.appendChild(t);
var s=document.createElement("div");s.className="src";s.textContent=T[st.lang].src+(it[4]||SRC[z]);el.appendChild(s);
if(a)anim(el,"swap")}

function renderFeed(a){
var el=$("feed"),k=K(),t=T[st.lang],list=all("city").slice().reverse().concat([FIXED]);if(!el)return;el.textContent="";
list.forEach(function(o){
var w=document.createElement("article");w.className="item";
var d=document.createElement("div");d.className="date";d.textContent=t.day+" "+(o.d||"");
var h=document.createElement("h3");h.textContent=(k?(o.tv||o.tr):o.tr)||"";
w.appendChild(createNewsImage(o.tag, (o.tr||"")+" "+(o.xr||"")));
w.appendChild(d);w.appendChild(h);
var x=k?(o.xv||o.xr):o.xr;if(x){var p=document.createElement("p");p.textContent=x;w.appendChild(p)}
el.appendChild(w)});
if(a)anim(el,"swap")}

function drawTicker(){var h=$("tk");if(!h)return;var t=T[st.lang],k=K(),
a=[t.pres+": "+t.presn,t.mayor+": "+t.mayorn,"1 Ł = "+st.rate.toFixed(2)+" ESD",W[0][k],t.an1,t.an2];
h.textContent="";for(var r=0;r<2;r++)a.forEach(function(s){var e=document.createElement("span");e.className="ti";e.textContent=s;h.appendChild(e)})}

function renderWeather(a){var e=$("weather");if(e){e.textContent=W[st.w][K()];if(a)anim(e,"swap");drawTicker()}}
function renderRate(a){var e=$("rate");if(e){e.textContent="1 Ł = "+st.rate.toFixed(2)+" ESD";if(a)anim(e,"flash");drawTicker()}}
function tick(){st.rate=Math.min(23,Math.max(21,st.rate+(Math.random()-.5)*.8));renderRate(true)}

function draw(a){
var t=T[st.lang];root.lang=st.lang==="ru"?"ru":"ro";root.setAttribute("data-lang",st.lang);root.setAttribute("data-theme",st.theme);
document.querySelectorAll("[data-i]").forEach(function(e){e.textContent=t[e.getAttribute("data-i")]});
if($("themeToggle"))$("themeToggle").textContent=st.theme==="light"?t.tl:t.td;
renderRate(false);renderWeather(a);["eshkere","hamster","podgorsk"].forEach(function(z){renderNews(z,a)});renderFeed(a)}

if($("langSelect"))$("langSelect").addEventListener("change",function(){st.lang=this.value==="vis"?"vis":"ru";draw(true)});
if($("themeToggle"))$("themeToggle").addEventListener("click",function(){st.theme=st.theme==="light"?"dark":"light";draw(false)});

var metroImg = document.querySelector(".metro-img-wrap img");
if(metroImg) { metroImg.src = "metro.png"; }

var ovMetro=$("ovMetro");
if($("metroBtn") && ovMetro){
  $("metroBtn").addEventListener("click",function(){ovMetro.classList.add("open")});
  if($("closeMetroBtn"))$("closeMetroBtn").addEventListener("click",function(){ovMetro.classList.remove("open")});
  ovMetro.addEventListener("click",function(e){if(e.target===ovMetro)ovMetro.classList.remove("open")});
}

var ov2=$("ov2");
function openArchive(){if(ov2){ov2.classList.add("open");renderArchive();setTimeout(function(){if($("q"))$("q").focus()},50)}}
function closeArchive(){if(ov2)ov2.classList.remove("open")}
function renderArchive(){
var list=$("alist"),k=K(),query=$("q")?$("q").value.toLowerCase().trim():"",zone=$("qz")?$("qz").value:"all";
if(!list)return;
list.textContent="";
var items=[];
var zones=zone==="all"?["city","eshkere","hamster","podgorsk"]:[zone];
zones.forEach(function(z){
if(z==='city'){all("city").concat([FIXED]).forEach(function(o){items.push({z:"city",d:o.d||"",t:k?(o.tv||o.tr):o.tr,x:k?(o.xv||o.xr):o.xr})})}
else{pool(z).forEach(function(p){items.push({z:z,d:"",t:(k===0?p[2]:(p[3]||p[2]))||ZN[z],x:p[k]})})}});
var filtered=items.filter(function(it){return(it.t+" "+it.x).toLowerCase().indexOf(query)!==-1});
if(!filtered.length){var li=document.createElement("li");li.textContent=T[st.lang].none;list.appendChild(li);return}
filtered.forEach(function(it){
var li=document.createElement("li");li.className="ar";
var b=document.createElement("b");b.textContent=(it.d?it.d+" - ":"")+"["+ZN[it.z]+"] "+it.t;
var p=document.createElement("p");p.textContent=it.x;
li.appendChild(b);li.appendChild(p);list.appendChild(li)})}

if($("arcBtn"))$("arcBtn").addEventListener("click",openArchive);
if($("ax"))$("ax").addEventListener("click",closeArchive);
if($("q"))$("q").addEventListener("input",renderArchive);
if($("qz"))$("qz").addEventListener("change",renderArchive);
if(ov2)ov2.addEventListener("click",function(e){if(e.target===ov2)closeArchive()});

var ov=$("ov");
function showAdmin(){if($("login"))$("login").hidden=authed;if($("panel"))$("panel").hidden=!authed;if(authed)renderList()}
function openAdmin(){if(ov){ov.classList.add("open");showAdmin();setTimeout(function(){var f=authed?$("tr"):$("pw");if(f)f.focus()},50)}}
function closeAdmin(){if(ov)ov.classList.remove("open")}
function msg(id,t,ok){var e=$(id);if(e){e.textContent=t;e.className="msg"+(ok?" ok":"")}}
function pad(n){return(n<10?"0":"")+n}
function today(){var n=new Date();return pad(n.getDate())+"."+pad(n.getMonth()+1)+"."+n.getFullYear()}
function renderList(){
var ul=$("lst");if(!ul)return;ul.textContent="";
Object.keys(ZN).forEach(function(z){db[z].forEach(function(o){
var li=document.createElement("li"),s=document.createElement("span"),b=document.createElement("button");
s.textContent=ZN[z]+": "+(o.tr||o.xr).slice(0,50);b.type="button";b.textContent="Удалить";
b.addEventListener("click",function(){db[z]=db[z].filter(function(x){return x.id!==o.id});save();renderList();if(z==="city")renderFeed(true);else{st.i[z]=-1;renderNews(z,true)}});
li.appendChild(s);li.appendChild(b);ul.appendChild(li)})})}

if($("adminBtn"))$("adminBtn").addEventListener("click",openAdmin);
if($("lx"))$("lx").addEventListener("click",closeAdmin);
if($("px"))$("px").addEventListener("click",closeAdmin);
if(ov)ov.addEventListener("click",function(e){if(e.target===ov)closeAdmin()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeAdmin();closeArchive();if(ovMetro)ovMetro.classList.remove("open")}});

if($("lgo"))$("lgo").addEventListener("click",function(){if($("pw") && $("pw").value===PASS){authed=true;$("pw").value="";msg("lmsg","");showAdmin()}else msg("lmsg","Неверный пароль.")});
if($("pub"))$("pub").addEventListener("click",function(){
var z=$("z").value,tr=$("tr").value.trim(),xr=$("xr").value.trim();
if(!tr&&!xr){msg("pmsg","Заполните заголовок или текст.");return}
db[z].push({id:Date.now(),d:$("d").value.trim()||today(),tr:tr,xr:xr,tv:$("tv").value.trim(),xv:$("xv").value.trim()});
save();["d","tr","xr","tv","xv"].forEach(function(i){if($(i))$(i).value=""});
msg("pmsg","Опубликовано.",true);renderList();if(z==="city")renderFeed(true);else{st.i[z]=pool(z).length-1;renderNews(z,true)}});

/* Старт */
st.w=0;
draw(false);
fetchLiveNews();

setInterval(tick,10000);
setInterval(function(){st.w=pick(W.length,st.w);renderWeather(true)},12000);
setInterval(function(){["eshkere","hamster","podgorsk"].forEach(function(z){st.i[z]=pick(pool(z).length,st.i[z]);renderNews(z,true)})},15000);
})();
