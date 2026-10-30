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

var P={
eshkere:[
["Аэропорт Пасхалко-Сити имени Джокера принимает рейсы с задержками из-за расширения взлетной полосы; на центральной линии метро временные интервалы увеличены.","Аэропорт Пасхалко-Сити имени Джокера приймае рейси з задержками из-за расширенье полоса; на централна линiя метро интервали увеличенi.","Аэропорт Джокер расширяет терминалы","Аэропорт Джокер расширяе терминалы","Pashalko-City Joker News","airport"],
["В Гирдале введен в строй новый высокотехнологичный испытательный полигон промышленного комплекса.","В Гирдале введен в строй нови высокотехнологични испытателни полигон.","Новый комплекс в Гирдале","Нови комплекс у Гирдале","Girdal Defense Review","industry"],
["Виспиевск принял отряд кораблей Береговой Охраны Виспарии после учения у морских границ.","Виспиевск принял отряд кораблей Береговъ Охрана пiсля ученiй у морски границi.","Учения в Виспиевске","Ученiя у Виспиевск","Vispievsk Military Press","port"],
["В Жирославле завершено строительство нового корпуса Института Ядерной Физики и запущен квантовый ускоритель.","В Жирославле завершено будованне ново корпуса Института Ядерна Физика.","Научный прорыв в Жирославле","Научни прорыв у Жирославле","Jyroslavl Scientific Herald","building"],
["Чернодельфинск доложил о рекордном наплыве туристов; метрополитен города перешел на усиленный летний график.","Чернодельфинск доложил о рекордни наплыв туристов; метрополитен де град перешел на посиленни график.","Сезон в Чернодельфинске","Сезон у Чернодельфинске","Chernodelphinsk Resort News","resort"]
],
hamster:[
["Яблучевск предложил инвесторам двадцать гектаров причальной зоны, сообщили власти Яблучевского уезда.","Яблучевск предложил инвесторам двадцять гектарiв причални зона, сообщили власти Яблучевски уезд.","Расширение порта Яблучевска","Расширенье порта де Яблучевск","The Hamstérsk Daily","port"],
["Озёрные квоты на окуня в приграничных водах Длэжского уезда сокращены почти вдвое, квота на судака выросла.","Озерни квоти на окунь в пригранични води Длэжски уезд скорочени почти вдвое, квота на судака выросла.","Квоты в Длэжском уезде","Квоти у Длэжски уезд","The Hamstérsk Daily","port"],
["В речных уездах Республики Хамстер завершена реставрация классических жилых массивов советского типа.","У речни уезди де Република Хамстер завершена реставрацiя классически кварталы.","Реставрация кварталов","Реставрацiя кварталiв","The Hamstérsk Daily","building"]
],
podgorsk:[
["Знаменитый архитектурный ансамбль «Ворота Подгорска» на въезде в столицу автономной области получил новую подсветку.","Знаменити архитектурни ансамбль «Ворота де Подгорск» на вiезде у столица отримал нова подсветка.","Реконструкция Ворот Подгорска","Реконструкцiя Ворота де Подгорск","Podgorsk Urban Gazette","building"],
["Международные аэропорты Подгорска — Белоягорне и Норок — перешли на новое зимнее расписание полетов.","Международни аэропорти де Подгорск — Белоягорне и Норок — перешли на нова зимна програма.","Обновление расписания полетов","Обновленье програма полётов","Wisparian Aviation Digest","airport"],
["На кольцевой линии метро Подгорска запущены новые современные составы; пробки на въезде в город снизились до 3 баллов.","На кольцева линiя метро де Подгорск запущени нови современные составы; заторы на вiезде в град снизились до 3 баллов.","Новые поезда в метро Подгорска","Нови поезда у метро Подгорска","Podgorsk Transport Journal","metro"]
]
};

var SRC={eshkere:"The Pashálko-City Times",hamster:"The Hamstérsk Daily",podgorsk:"Wisparian Vineyard Gazette"};
var ZN={city:"Городские новости",eshkere:"Эщкерестан",hamster:"Республика Хамстер",podgorsk:"Автономная Подгорская Область"};

var FIXED={d:"28.10.2026",tr:"Строительство моста и новых микрорайонов Словмы",tv:"Будованне мост и нови микрорайоны де Словма",xr:"Транспортный узел Словмы и Сивы: Аэропорты Харза, Булкэрэй, Новодвоицк и Цукорзвод работают в нормальном режиме. Пробки на мосту через Харзу составляют 4 балла. В Яргороде завершена застройка жилого комплекса «Южный Полюс».",xv:"Транспортни узел де Словма и Сива: Аэропорти Харза, Булкэрэй, Новодвоицк и Цукорзвод работают у штатном режиме. Заторы на мост через Харза сут 4 баллы. У Яргород завершено будованне ново жилой комплекс."};

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

function pool(z){var a=all(z).map(function(o){return[o.xr,o.xv||o.xr,o.tr,o.tv||o.tr]});return LIVE[z].length?LIVE[z].concat(a):P[z].concat(a)}
function all(z){return REMOTE[z].concat(db[z])}
var REMOTE={city:[],eshkere:[],hamster:[],podgorsk:[]};

var PHOTOS={
  airport: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=300&q=80",
  metro: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=300&q=80",
  building: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80",
  port: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=300&q=80",
  industry: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80",
  resort: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80",
  city: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=300&q=80"
};

function createNewsImage(tag, text){
  var imgEl = document.createElement("img");
  imgEl.className = "news-img";
  imgEl.alt = "News illustration";
  
  var photoUrl = PHOTOS[tag];
  if(!photoUrl){
    var t = (text || "").toLowerCase();
    if(/аэропорт|рейс|вылет/.test(t)) photoUrl = PHOTOS.airport;
    else if(/метро|станци|поезд|транспорт/.test(t)) photoUrl = PHOTOS.metro;
    else if(/ворота|будованне|строител|корпус|комплекс|квартал/.test(t)) photoUrl = PHOTOS.building;
    else if(/порт|причал|судно/.test(t)) photoUrl = PHOTOS.port;
    else if(/полигон|промышл|оборон/.test(t)) photoUrl = PHOTOS.industry;
    else photoUrl = PHOTOS.city;
  }
  
  imgEl.src = photoUrl;
  imgEl.onerror = function(){
    this.onerror = null;
    this.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='82' viewBox='0 0 120 82'><rect width='100%' height='100%' fill='%23003366'/><text x='50%' y='50%' fill='%23d4af37' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='12'>SLOVMA NEWS</text></svg>";
  };
  return imgEl;
}

function renderNews(z,a){
var p=pool(z);if(st.i[z]<0||st.i[z]>=p.length)st.i[z]=pick(p.length,-1);
var it=p[st.i[z]],k=K(),el=$("n-"+z);
var ti=k === 0 ? (it[2] || "") : (it[3] || it[2] || "");

el.textContent="";
el.appendChild(createNewsImage(it[5], it[0]+" "+ti));

if(ti){var h=document.createElement("h4");h.textContent=ti;el.appendChild(h)}
var t=document.createElement("p");t.textContent=it[k];el.appendChild(t);
var s=document.createElement("div");s.className="src";s.textContent=T[st.lang].src+(it[4]||SRC[z]);el.appendChild(s);
if(a)anim(el,"swap")}

function renderFeed(a){
var el=$("feed"),k=K(),t=T[st.lang],list=all("city").slice().reverse().concat([FIXED]);el.textContent="";
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

function renderWeather(a){var e=$("weather");e.textContent=W[st.w][K()];if(a)anim(e,"swap");drawTicker()}
function renderRate(a){var e=$("rate");e.textContent="1 Ł = "+st.rate.toFixed(2)+" ESD";if(a)anim(e,"flash");drawTicker()}
function tick(){st.rate=Math.min(23,Math.max(21,st.rate+(Math.random()-.5)*.8));renderRate(true)}

function draw(a){
var t=T[st.lang];root.lang=st.lang==="ru"?"ru":"ro";root.setAttribute("data-lang",st.lang);root.setAttribute("data-theme",st.theme);
document.querySelectorAll("[data-i]").forEach(function(e){e.textContent=t[e.getAttribute("data-i")]});
$("themeToggle").textContent=st.theme==="light"?t.tl:t.td;
renderRate(false);renderWeather(a);["eshkere","hamster","podgorsk"].forEach(function(z){renderNews(z,a)});renderFeed(a)}
$("langSelect").addEventListener("change",function(){st.lang=this.value==="vis"?"vis":"ru";draw(true)});
$("themeToggle").addEventListener("click",function(){st.theme=st.theme==="light"?"dark":"light";draw(false)});

/* Подстановка metro.png в модальное окно */
var metroImg = document.querySelector(".metro-img-wrap img");
if(metroImg) {
  metroImg.src = "metro.png";
}

/* Модальное окно метро */
var ovMetro=$("ovMetro");
$("metroBtn").addEventListener("click",function(){ovMetro.classList.add("open")});
$("closeMetroBtn").addEventListener("click",function(){ovMetro.classList.remove("open")});
ovMetro.addEventListener("click",function(e){if(e.target===ovMetro)ovMetro.classList.remove("open")});

/* archive */
var ov2=$("ov2");
function openArchive(){ov2.classList.add("open");renderArchive();setTimeout(function(){$("q").focus()},50)}
function closeArchive(){ov2.classList.remove("open")}
function renderArchive(){
var list=$("alist"),k=K(),query=$("q").value.toLowerCase().trim(),zone=$("qz").value;
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
$("arcBtn").addEventListener("click",openArchive);
$("ax").addEventListener("click",closeArchive);
$("q").addEventListener("input",renderArchive);
$("qz").addEventListener("change",renderArchive);
ov2.addEventListener("click",function(e){if(e.target===ov2)closeArchive()});

/* admin */
var ov=$("ov");
function showAdmin(){$("login").hidden=authed;$("panel").hidden=!authed;if(authed)renderList()}
function openAdmin(){ov.classList.add("open");showAdmin();setTimeout(function(){var f=authed?$("tr"):$("pw");if(f)f.focus()},50)}
function closeAdmin(){ov.classList.remove("open")}
function msg(id,t,ok){var e=$(id);e.textContent=t;e.className="msg"+(ok?" ok":"")}
function pad(n){return(n<10?"0":"")+n}
function today(){var n=new Date();return pad(n.getDate())+"."+pad(n.getMonth()+1)+"."+n.getFullYear()}
function renderList(){
var ul=$("lst");ul.textContent="";
Object.keys(ZN).forEach(function(z){db[z].forEach(function(o){
var li=document.createElement("li"),s=document.createElement("span"),b=document.createElement("button");
s.textContent=ZN[z]+": "+(o.tr||o.xr).slice(0,50);b.type="button";b.textContent="Удалить";
b.addEventListener("click",function(){db[z]=db[z].filter(function(x){return x.id!==o.id});save();renderList();if(z==="city")renderFeed(true);else{st.i[z]=-1;renderNews(z,true)}});
li.appendChild(s);li.appendChild(b);ul.appendChild(li)})})}
$("adminBtn").addEventListener("click",openAdmin);
$("lx").addEventListener("click",closeAdmin);$("px").addEventListener("click",closeAdmin);
ov.addEventListener("click",function(e){if(e.target===ov)closeAdmin()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeAdmin();closeArchive();ovMetro.classList.remove("open")}});
$("lgo").addEventListener("click",function(){if($("pw").value===PASS){authed=true;$("pw").value="";msg("lmsg","");showAdmin()}else msg("lmsg","Неверный пароль.")});
$("pub").addEventListener("click",function(){
var z=$("z").value,tr=$("tr").value.trim(),xr=$("xr").value.trim();
if(!tr&&!xr){msg("pmsg","Заполните заголовок или текст.");return}
db[z].push({id:Date.now(),d:$("d").value.trim()||today(),tr:tr,xr:xr,tv:$("tv").value.trim(),xv:$("xv").value.trim()});
save();["d","tr","xr","tv","xv"].forEach(function(i){$(i).value=""});
msg("pmsg","Опубликовано.",true);renderList();if(z==="city")renderFeed(true);else{st.i[z]=pool(z).length-1;renderNews(z,true)}});

/* start */
st.w=0;draw(false);
setInterval(tick,10000);
setInterval(function(){st.w=pick(W.length,st.w);renderWeather(true)},12000);
setInterval(function(){["eshkere","hamster","podgorsk"].forEach(function(z){st.i[z]=pick(pool(z).length,st.i[z]);renderNews(z,true)})},15000);
})();