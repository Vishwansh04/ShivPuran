
const I={ev_kalash:"images/ev_kalash.webp",ev_havan:"images/ev_havan.webp",shiva:"images/shiva.jpg",hero:"images/hero.jpg"};
const T=[["jyot","द्वादश ज्योतिर्लिंग वर्णन"],["vivah","शिव विवाह"],["kirat","शिव भक्त किरात"],["charit","शिव चरितामृत"],["ganesh","गणेश कार्तिक जन्म"],["mahatmya","महात्म्य"],["swaroop","शिव स्वरूप व्याख्यान और प्राकट्य"],["sati","सती चरित्र"],["ratri","शिव रात्रि माहात्म्य"],["havan","हवन"],["bhandara","भंडारा"],["kalash","कलश यात्रा"]];
const TI=Object.fromEntries(T.map(t=>[t[0],"images/t_"+t[0]+".webp"]));
const EV={kalash:{t:"कलश यात्रा",i:"ev_kalash",l:["📅 03 जनवरी 2027 (रविवार)","🕘 प्रातः 9 बजे","📍 श्री शिव शक्ति हनुमान मंदिर (ट्रस्ट)"],n:"भक्ति और उल्लास के साथ कथा का शुभारंभ"},
katha:{t:"शिव महापुराण कथा",i:"hero",p:"center 40%",l:["📅 03 से 12 जनवरी 2027","🕐 प्रतिदिन दोपहर 1 बजे से प्रभु इच्छा तक","📍 होली चौक ग्राउंड"],n:"दस दिन तक शिव कथा का अमृत"},
sant:{t:"संत सम्मेलन",i:"shiva",p:"center 58%",l:["📅 10 जनवरी 2027","🕓 सायं 4 बजे","📍 होली चौक ग्राउंड"],n:"संत-महात्माओं का हार्दिक स्वागत एवं अभिनंदन"},
havan:{t:"हवन एवं भंडारा",i:"ev_havan",l:["📅 12 जनवरी 2027 (मंगलवार)","🔥 हवन : प्रातः 8 बजे","🍛 भंडारा : प्रातः 10 बजे","📍 होली चौक मैदान"],n:"पूर्णाहुति एवं प्रसाद वितरण"}};
const OV={kalash:[["9%","35.4%","40%","10.8%","दिनांक: 03 जनवरी<br>2027 (रविवार)"],["51.5%","35.4%","39.5%","10.8%","समय:<br>प्रातः 9 बजे"],["9%","88.2%","82%","8.6%","स्थल: श्री शिव शक्ति हनुमान मंदिर (ट्रस्ट)","w"]],havan:[["9%","86.2%","83%","10%","स्थल: होली चौक मैदान"]]};
const evimg=k=>{const e=EV[k];return `<div class="evbox"><img src="${I[e.i]}" alt="${e.t}" style="object-position:${e.p||"center"}">${(OV[k]||[]).map(o=>`<span class="evt${o[5]?" w":""}" style="left:${o[0]};top:${o[1]};width:${o[2]};height:${o[3]}">${o[4]}</span>`).join("")}</div>`};
const SP="images/",KV="06-pradhumn-muni.jpg",KB='<span class="kv">🪔 कथा व्यास</span>';
const S=[["तपस्वी महंत लक्ष्मण दास जी","(हाई कोर्ट) मौनी बाबा उदासीन समाज सेवा आश्रम, पीपल कोटी","01-laxman-das-hc.jpg"],["श्री परम पूज्य सदगुरु जी महाराज","मंदिर संस्थापक","02-sadguru-ji.jpg"],["हरिहर पीठाधीश्वर महंत सुयज्ञ मुनि जी महाराज","हरिहर आश्रम, दिल्ली","03-suyagya-muni.jpg"],["महंत रामनौमी दास सतगुरुदास जी महाराज","श्री पंचायती अखाड़ा बड़ा उदासीन","04-ramnaumi-das.jpg"],["महंत अमित दास गुरुजी","अखाड़ा बड़ा उदासीन · संरक्षक एवं संचालक, श्री शिव शक्ति हनुमान मंदिर ट्रस्ट","05-amit-das.jpg"],["महंत श्री प्रद्युम्न मुनि जी महाराज","श्री 108 बाबा बजरंगदास जी की बगीची, जयपुर","06-pradhumn-muni.jpg"],["महंत कमलदास जी महाराज","डेरा बाबा मोहन दास, जैतो मंडी, पंजाब","07-kamal-das.jpg"],["महामंडलेश्वर स्वामी जगदीश दास जी महाराज","हनुमान मंदिर, पलवल, हरियाणा","08-jagdish-das.jpg"],["महंत सेवादास जी महाराज","कोटफत्ता, पंजाब","09-seva-das.jpg"],["महामंडलेश्वर स्वामी हरि चेतना नंद जी","हरि सेवा आश्रम, हरिद्वार","10-chetnanand.jpg"],["महंत शांति दास जी महाराज","कैथल, हरियाणा","11-shanti-das.jpg"],["महंत शांतानंद जी महाराज","पंजाब","12-shantanand.jpg"],["महंत लक्ष्मण दास","पंचायती अखाड़ा बड़ा उदासीन, वाराणसी","13-laxman-das-varanasi.jpg"],["महंत डॉ० मनोहर दास","श्री 108 श्री योगमाया पंचायती अखाड़ा बड़ा उदासीन, सदर बाज़ार, जमालपुर","14-manohar-das.jpg"],["महंत ईश्वरदास जी (उदासीन)","श्री सिद्ध बाबा मंदिर, राम पार्क, ईलायचीपुर, लोनी, उ.प्र.","15-ishwar-das.jpg"],["महंत जयरामदास जी (उदासीन)","मौनी बाबा उदासीन समाज सेवा आश्रम, पीपल कोटी","16-jayram-das.jpg"],["श्री सुनील विज","प्रमुख सेवादार, श्री शिव शक्ति हनुमान मंदिर","17-sunil-vij.jpg"],["पं० धर्मराज शास्त्री","मंदिर पुजारी, श्री शिव शक्ति हनुमान मंदिर","18-dharmraj-shastri.jpg"]];
const F="सुरेश चंद विज,अविनाश भार्गव,मंगतराम त्यागी,बाल किशन,संजीव कुमार,भगवान देवी अग्रवाल,राजबीर सिंह गौड़,राजगोयल,रामरती देवी,पवन अग्रवाल,महिपाल,श्रीपाल,रामपाल,प्रेम नारायण दुबे,राज किशोर भार्गव,हीरा सिंह,कमलेश देवी (गुरुमाता),पूनम,कृष्ण विज,रेणु गोयल,सुजाता विज".split(",");
const MA=[["डॉ० पंकज सिंह जी","मंत्री स्वास्थ्य एवं परिवार कल्याण, परिवहन और सूचना प्रौद्योगिकी, विधायक विकासपुरी"],["श्रीमति राखी आशीष यादव जी","निगम पार्षद"],["श्री सुभाष मग्गो जी","माता रूप रानी मग्गो अस्पताल, उत्तम नगर"],["श्री महेंद्र यादव जी","पूर्व विधायक"]];
const C=[["कुलदीप कुमार (प्रधान)","9625901108"],["राकेश कुमार","8287731108"],["हेमंत रंजन","8700921108"],["अशोक वर्मा","9625751108"],["अमन भाटिया (मिंटू)","8510921108"],["अर्पण","9625731108"],["आकाश चौधरी","8700931108"],["यश चौधरी","8920051108"],["सक्षम शर्मा","9560885882"],["सौरभ जांगिड़","7838407478"],["कुशाग्र शर्मा","9773944157"],["सौरभ मिश्रा","8700400776"],["विश्वांश राजपूत","8449144472"],["सुखेन्द्र त्यागी","8076265964"],["अनिल धवन","9891548827"],["घनश्याम","9716585585"],["मुकेश कुमार","9354944103"],["दीपक मल्होत्रा","9891364493"],["संदीप दुग्गल","9871666229"],["दीपक चौधरी","9718324194"],["स्वांकित धवन","9582535953"],["अतुल त्यागी","7838005000"],["संजय सेठ","8527410690"],["अरुण","9210334255"],["अतुल सोलंकी","9654815621"],["यश सेठ","8527523551"]];
const $=s=>document.querySelector(s)||{},$$=s=>[...document.querySelectorAll(s)];
const P=[["home","मुख्य पृष्ठ"],["karyakram","कार्यक्रम"],["prasang","प्रसंग"],["sant","संत सम्मेलन"],["yajman","यजमान"],["sahyogi","सहयोगी"],["pariwar","मंदिर परिवार"],["sampark","संपर्क"]];
$("#nav").innerHTML=P.map(p=>`<a href="${p[0]=='home'?'index':p[0]}.html" data-p="${p[0]}">${p[1]}</a>`).join("");
$("#evs").innerHTML=Object.entries(EV).map(([k,e])=>`<div class="card click rv" data-ev="${k}">${evimg(k)}<h3>${e.t}</h3><p style="font-size:.9rem">${e.l[0]}</p></div>`).join("");
const tile=(t)=>`<div class="card tile click rv" data-t="${t[0]}"><img src="${TI[t[0]]}" alt="${t[1]}"><h3 style="font-size:1.05rem;text-align:center">${t[1]}</h3></div>`;
$("#pv").innerHTML=T.slice(0,4).map(tile).join("");$("#pa").innerHTML=T.map(tile).join("");
const D=["रविवार","सोमवार","मंगलवार","बुधवार","बृहस्पतिवार","शुक्रवार","शनिवार"];
const tg=(d,k,t)=>{const u=LIVE[d+"-"+k]||"";return `<a class="tag${u?" live":""}" href="${u||"#karyakram"}" ${u?'target="_blank" rel="noopener"':'data-nolive="1"'}>${t}<i>▶ ${u?"LIVE":"जल्द"}</i></a>`};
$("#tl").innerHTML=Array.from({length:10},(_,i)=>{const d=3+i,w=D[i%7];let g="",sp="";
if(d==3){g+=tg(d,"kalash","🪔 कलश यात्रा · प्रातः 9 बजे");sp=" sp"}
if(d<12)g+=tg(d,"katha","🕐 शिव महापुराण कथा · दोपहर 1 बजे से");
if(d==10){g+=tg(d,"sant","🙏 संत सम्मेलन · सायं 4 बजे");sp=" sp"}
if(d==12){g+=tg(d,"havan","🔥 हवन · प्रातः 8 बजे")+tg(d,"bhandara","🍛 भंडारा · प्रातः 10 बजे");sp=" sp"}
return `<div class="day rv${sp}"><div class="card"><b>${String(d).padStart(2,"0")} जनवरी 2027</b> <small>(${w})</small><div class="tags">${g}</div></div></div>`}).join("");
$("#sg").innerHTML=S.map((s,i)=>`<div class="card sc click rv${s[2]==KV?" star":""}" data-s="${i}"><img src="${SP+s[2]}" alt="${s[0]}" loading="lazy">${s[2]==KV?KB:""}<h3>${s[0]}</h3><p style="font-size:.85rem;opacity:.85">${s[1]}</p></div>`).join("");
$("#fd").innerHTML=F.map(n=>`<span>${/रामरती|कमलेश|पूनम|कृष्ण|रेणु|सुजाता/.test(n)?"":""}${n} जी</span>`).join("");
$("#ma").innerHTML=MA.map(m=>`<div class="card rv" style="text-align:center"><span class="ic">🌺</span><h3>${m[0]}</h3><p style="font-size:.9rem">${m[1]}</p></div>`).join("");
if(typeof YAJMAN!="undefined")$("#yj").innerHTML=YAJMAN.map(n=>`<span>${n}</span>`).join("");
$("#ct").innerHTML=C.map(c=>`<a class="card rv" href="tel:+91${c[1]}" style="text-align:center"><span class="ic">📞</span><h3 style="font-size:1.05rem">${c[0]}</h3><div style="color:var(--gold)">${c[1]}</div></a>`).join("");
function open_(h){$("#md").innerHTML=`<button class="x" aria-label="बंद करें">×</button>`+h;$("#ov").classList.add("on")}
const cls=()=>$("#ov").classList.remove("on");
$("#ov").onclick=e=>{if(e.target.id=="ov"||e.target.classList.contains("x"))cls()};
addEventListener("keydown",e=>e.key=="Escape"&&cls());
document.addEventListener("click",e=>{
if(e.target.closest("#cpy")){const t=e.target.closest("#cpy");try{navigator.clipboard.writeText("11166237538@okbizaxis")}catch(x){}t.textContent="✅ कॉपी हो गया";return}
if(e.target.closest("[data-soon]")){e.preventDefault();return open_(`<h3>🔗 जल्द उपलब्ध</h3><p>यह लिंक जल्द ही यहाँ जोड़ा जाएगा।</p><button class="btn x2" onclick="document.getElementById('ov').classList.remove('on')">ठीक है</button>`)}
if(e.target.closest("[data-nolive]")){e.preventDefault();return open_(`<h3>▶ लाइव प्रसारण</h3><p>इस कार्यक्रम का YouTube लाइव लिंक जल्द ही यहाँ उपलब्ध होगा।</p><button class="btn x2" onclick="document.getElementById('ov').classList.remove('on')">ठीक है</button>`)}

const ev=e.target.closest("[data-ev]");if(ev){const v=EV[ev.dataset.ev];return open_(`${evimg(ev.dataset.ev)}<h3>${v.t}</h3><p>${v.l.join("<br>")}</p><p style="color:var(--gold)">${v.n}</p>`)}
const t=e.target.closest("[data-t]");if(t){const v=T.find(x=>x[0]==t.dataset.t);const sp={kalash:["विशेष आयोजन","📅 03 जनवरी 2027 (रविवार)<br>🕘 प्रातः 9 बजे<br>📍 श्री शिव शक्ति हनुमान मंदिर (ट्रस्ट)"],havan:["विशेष आयोजन","📅 12 जनवरी 2027 (मंगलवार)<br>🔥 प्रातः 8 बजे<br>📍 होली चौक मैदान"],bhandara:["विशेष आयोजन","📅 12 जनवरी 2027 (मंगलवार)<br>🍛 प्रातः 10 बजे<br>📍 होली चौक मैदान"]}[v[0]]||["शिव महापुराण कथा का दिव्य प्रसंग","🕐 प्रतिदिन दोपहर 1 बजे से<br>📍 होली चौक ग्राउंड"];
return open_(`<img src="${TI[v[0]]}" alt=""><h3>${v[1]}</h3><p style="opacity:.85">${sp[0]}</p><p>${sp[1]}</p>`)}
const s=e.target.closest("[data-s]");if(s){const v=S[s.dataset.s];return open_(`<img src="${SP+v[2]}" alt="">${v[2]==KV?KB:""}<h3>${v[0]}</h3><p>${v[1]}</p><p style="color:var(--gold)">॥ श्री सदगुरू देवाय नमः ॥</p>`)}
if(e.target.closest("[data-don]"))open_(`<h3>🙏 दान / सेवा</h3><p>श्री शिव शक्ति हनुमान मंदिर (ट्रस्ट)</p><div class="qrbox"><img src="images/qr.png" alt="भुगतान QR कोड"></div><p style="font-size:.92rem">QR स्कैन करके GPay / PhonePe / Paytm से दान करें</p><p><b style="color:var(--gold)">GPay : 11166237538@okbizaxis</b></p><button class="btn o" id="cpy">📋 UPI ID कॉपी करें</button><p style="font-size:.9rem">Shiv Shakti Hanuman Mandir Trust<br>A/c 112505000563 · IFSC ICICI0001125<br>ICICI, Uttam Nagar Branch</p><p style="font-size:.9rem">Shri Shiv Shakti Hanuman Mandir Trust<br>A/c 603910110001666 · IFSC BKID0006039<br>Vikaspuri Branch</p>`);
const r=document.createElement("i");r.className="dot";r.style.left=e.clientX-4+"px";r.style.top=e.clientY-4+"px";r.style.position="fixed";r.style.zIndex=99;document.body.appendChild(r);setTimeout(()=>r.remove(),900)});
let n=+0;$("#fab").onclick=()=>{open_(`<div class="big yo" id="jp">ॐ</div><h3>॥ ॐ नमः शिवाय ॥</h3><p>जाप गिनने के लिए नीचे दबाएँ</p><div class="big" id="jn">${n}</div><button class="btn" id="jb" style="font-size:1.3rem">ॐ नमः शिवाय</button><p style="font-size:.9rem;opacity:.8">हर हर महादेव 🔱</p>`);$("#jb").onclick=()=>{$("#jn").textContent=++n;const j=$("#jp");j.style.transition="transform .25s";j.style.transform="scale(1.4)";setTimeout(()=>j.style.transform="",250)}};
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
function obs(){$$(".page.on .rv").forEach((el,i)=>{el.style.transitionDelay=(i%6)*80+"ms";io.observe(el)})}
$$("nav a").forEach(a=>a.classList.toggle("on",a.dataset.p==document.body.dataset.p));obs();
$$(".card").forEach(c=>{c.addEventListener("mousemove",e=>{const b=c.getBoundingClientRect();c.style.setProperty("--ry",((e.clientX-b.left)/b.width-.5)*10+"deg");c.style.setProperty("--rx",-((e.clientY-b.top)/b.height-.5)*10+"deg")});c.addEventListener("mouseleave",()=>{c.style.setProperty("--rx","0");c.style.setProperty("--ry","0")})});
for(let i=0;i<16;i++){const p=document.createElement("div");p.className="pet";p.style.left=Math.random()*100+"vw";p.style.animationDuration=9+Math.random()*10+"s";p.style.animationDelay=-Math.random()*15+"s";p.style.transform=`scale(${.6+Math.random()})`;document.body.appendChild(p)}
const tgt=new Date("2027-01-03T09:00:00+05:30");
function tick(){let d=tgt-Date.now();const el=$("#cd");if(d<=0){el.innerHTML='<div style="padding:10px 22px"><b>🔱 कथा प्रारंभ</b></div>';return}
const v=[[Math.floor(d/864e5),"दिन"],[Math.floor(d/36e5)%24,"घंटे"],[Math.floor(d/6e4)%60,"मिनट"],[Math.floor(d/1e3)%60,"सेकंड"]];el.innerHTML=v.map(x=>`<div><b>${x[0]}</b><small>${x[1]}</small></div>`).join("")}
tick();setInterval(tick,1000);

document.addEventListener("click",e=>{const a=e.target.closest("a[href$='.html']");if(a&&!a.target&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey){e.preventDefault();document.body.classList.add("out");setTimeout(()=>location.href=a.href,300)}});
addEventListener("pageshow",()=>document.body.classList.remove("out"));

(function(){const v=$("#hv"),b=$("#snd");if(!v.play||!b.addEventListener)return;
const lab=()=>b.textContent=v.paused?"▶ वीडियो चलाएँ":v.muted?"🔇 आवाज़ चालू करें":"🔊 आवाज़ बंद करें";
b.onclick=e=>{e.stopPropagation();if(v.paused){delete v.dataset.u;v.play()}else v.muted=!v.muted;lab()};
v.addEventListener("click",()=>{if(v.paused){delete v.dataset.u;v.play()}else{v.dataset.u=1;v.pause()}lab()});
["play","pause","volumechange"].forEach(t=>v.addEventListener(t,lab));
const pr=v.play();if(pr&&pr.catch)pr.catch(lab);
new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting&&!v.paused)v.pause();else if(x.isIntersecting&&v.paused&&!v.dataset.u)v.play().catch(()=>{})}),{threshold:.25}).observe(v);
})();

/* नामों की सूची + खोज */
(function(){const L=[["sl","SAHYOGI"],["pm","PARIWAR_M"],["pf","PARIWAR_F"]];let tot=0;
const get={SAHYOGI:typeof SAHYOGI!="undefined"?SAHYOGI:null,PARIWAR_M:typeof PARIWAR_M!="undefined"?PARIWAR_M:null,PARIWAR_F:typeof PARIWAR_F!="undefined"?PARIWAR_F:null};
L.forEach(([id,v])=>{const a=get[v],el=document.getElementById(id);if(a&&el){el.innerHTML=a.map(n=>`<span>${n}</span>`).join("");tot+=a.length}});
const c=document.getElementById("cnt");if(c)c.textContent=tot;
const q=document.getElementById("q");if(q)q.addEventListener("input",()=>{const t=q.value.trim();let n=0;$$(".nl span").forEach(s=>{const h=!!t&&!s.textContent.includes(t);s.hidden=h;if(!h)n++});if(c)c.textContent=n})})();
/* फूटर: सोशल बटन */
(function(){const f=document.querySelector("footer");if(!f)return;const S=typeof SOCIAL!="undefined"?SOCIAL:{};
const ic={yt:'<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>',fb:'<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z"/></svg>',ig:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>'};
const b=(k,key,t)=>{const u=S[key]||"";return `<a class="sb ${k}" ${u?`href="${u}" target="_blank" rel="noopener"`:'href="#" data-soon="1"'}>${ic[k]}${t}</a>`};
f.insertAdjacentHTML("afterbegin",`<div class="soc">${b("yt","youtube","YouTube")}${b("fb","facebook","Facebook")}${b("ig","instagram","Instagram")}</div>`)})();
