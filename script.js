const $=s=>document.querySelector(s),R=document.documentElement;
const S='<svg class="i" viewBox="0 0 24 24">';
const soc=`<a href="https://github.com/byteMaster-Soyel" target="_blank" rel="noopener" aria-label="GitHub">${S}<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.3-2.6-1-3.7.3-1.1.3-2.3 0-3.5 0 0-1 0-3 1.5a10.4 10.4 0 0 0-5 0C8 2 7 2 7 2a5 5 0 0 0 0 3.5A5.4 5.4 0 0 0 6 9c0 3.5 3 5.5 6 5.5-.4.5-.8 1.3-1 2.5v4"/><path d="M9 18c-4.5 2-5-2-7-2"/></svg></a><a href="https://linkedin.com/in/sk-soyel-447556247" target="_blank" rel="noopener" aria-label="LinkedIn">${S}<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a><a href="mailto:sksoyel9887@gmail.com" aria-label="Email">${S}<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg></a>`;
$('#soc').innerHTML=soc;$('#soc2').innerHTML=soc;

const sk=[["Programming Languages",["Java","Python","C","C++","HTML","CSS","XML","JS"]],["Data Analytics Tools",["Python","MS Office Suite","~Excel","~Pandas &amp; NumPy","~EDA"]],["Data Visualization",["~Power BI","~Tableau","~Matplotlib"]],["Databases",["SQLite","Database Management","~SQL"]],["Machine Learning",["AI/ML Fundamentals","AI/ML for Geodata (IIRS-ISRO)","~scikit-learn"]],["Cybersecurity",["Computer Networks","Operating Systems","~Information Security","~Network Security","~Ethical Hacking Basics"]],["Development Tools",["Git","GitHub","VS Code","Android Studio","Tkinter","REST APIs"]],["Core CS",["Data Structures &amp; Algorithms","DAA","OOPs","Software Design"]]];
const tg=a=>a.map(x=>x[0]=="~"?`<span class="tag l">${x.slice(1)}</span>`:`<span class="tag">${x}</span>`).join("");
$('#sk').innerHTML=sk.map(([t,a])=>`<div class="card"><h3>${t}</h3><div class="tags" style="margin-top:12px">${tg(a)}</div></div>`).join("");

const pj=[
["Women Safety Android Application","Android · 2025","A multi-feature safety app to raise alerts and get help quickly in an emergency.","Reaching help fast, with GPS tracking and alerts that never freeze the app.",["SOS emergency alerts","Online complaint filing","Ambulance dispatch via REST APIs","Concurrent GPS tracking with background services"],"Designed the SQLite database (CRUD) for contacts, reports and profiles; applied the MVC pattern and responsive XML layouts; used multi-threading to keep the UI responsive.",["Java","Android Studio","XML","SQLite","REST APIs"],'<div class="phone"><div class="sos">SOS</div><i></i><i></i><i></i></div>',"https://github.com/byteMaster-Soyel/My_SafetyPin_Android_app"],
["Weather App","Python desktop app","A GUI app that shows real-time weather for a selected Indian city.","Quick access to clear, current weather data for Indian cities.",["Current, min/max and feels-like temperature","Humidity, wind speed, visibility and pressure","Handles invalid requests and network errors"],"Built the Tkinter interface and integrated the OpenWeatherMap API with error handling.",["Python","Tkinter","OpenWeatherMap API"],'<div class="win"><div class="bar"><i></i><i></i><i></i></div><div class="bd"><span>Select city ▾</span><big>--°C</big><span>Humidity · Wind · Pressure</span></div></div>',"https://github.com/byteMaster-Soyel/OIBSIP/tree/main/Python-Task4-WeatherApp"],
["Voice Assistant (Olly)","Python desktop assistant","A desktop assistant that understands voice commands and replies by speech.","Hands-free control of everyday computer tasks.",["Plays YouTube videos and music","Opens websites and Windows apps","Searches Google, YouTube and Wikipedia","System commands, time and date"],"Built speech recognition and text-to-speech flows with handling for recognition and network errors.",["Python","Speech Recognition","Text-to-Speech"],'<div class="win"><div class="bar"><i></i><i></i><i></i></div><div class="bd" style="justify-items:start"><span class="mic">●</span><span>“Olly, play some music”</span></div></div>',"https://github.com/byteMaster-Soyel/OIBSIP/tree/main/Python-Task1-VoiceAssistant"]];
const dc=["#27478f","#5a5270","#c8612c"],pn=["WOMEN SAFETY<br>APP","WEATHER<br>APP","VOICE<br>ASSISTANT"];
$('#doors').innerHTML=pj.map((p,i)=>`<button class="door" style="--c:${dc[i]}" data-i="${i}" aria-label="Open ${p[0]}"><span class="fr"><span class="rm"></span><span class="dp"><span class="pl">${pn[i]}</span><span class="hd"></span><span class="kh"></span></span></span><span class="ent">Click to enter</span><span class="dh">${p[0]}</span></button>`).join("");
const ds=[...document.querySelectorAll(".door")];
ds.forEach((e,i)=>e.onclick=()=>{ds.forEach((x,k)=>x.classList.toggle("open",k==i));setTimeout(()=>{const p=pj[i];$('#pd').innerHTML=`<button class="btn back">← Back to the doors</button><div class="pdv card"><div><div class="eb">${p[1]}</div><h3 class="pt">${p[0]}</h3><p class="mu">${p[2]}</p><p class="mu"><b style="color:var(--tx)">Problem:</b> ${p[3]}</p><ul class="ck" style="margin:14px 0">${p[4].map(f=>`<li>${f}</li>`).join("")}</ul><p class="mu"><b style="color:var(--tx)">My contribution:</b> ${p[5]}</p><div class="tags">${p[6].map(t=>`<span class="tag">${t}</span>`).join("")}</div><div class="btns" style="margin-top:18px"><a class="btn p" href="${p[8]}" target="_blank" rel="noopener">View on GitHub →</a></div></div><div class="mock big">${p[7]}</div></div>`;$('#pw').hidden=true;$('#pd').hidden=false;$('#projects').scrollIntoView({behavior:"smooth"})},1150)});
$('#pd').onclick=e=>{if(e.target.closest(".back")){$('#pd').hidden=true;$('#pw').hidden=false;ds.forEach(x=>x.classList.remove("open"));$('#projects').scrollIntoView({behavior:"smooth"})}};

const ms=[["2020","Secondary","Madpur High School, WBBSE","Secondary examination, 53.86%.","Where it started"],
["2022","Higher Secondary & BCA begins","Madpur High School, WBCHSE","Higher Secondary with 91.6%, then began my BCA at Panskura Banamali College (Autonomous), Vidyasagar University.","Choosing computers"],
["2025","BCA complete, MCA begins","Panskura Banamali College · B.P. Poddar Institute","Finished my BCA with a CGPA of 7.01, built the Women Safety Android app, and began my MCA at B.P. Poddar Institute (MAKAUT).","Building real things"],
// ["2026","Training & certifications","Cognizant Outreach · Employability Test · ServiceNow","Completed the Cognizant Career Development Program (April – June), scored 72% on the National Competence &amp; Employability Test (9 August) and finished the ServiceNow virtual internship program.","Levelling up"],
["Now","MCA, 2nd year","B.P. Poddar Institute of Management &amp; Technology, MAKAUT","Studying toward 2027 and looking for internships in software, data analytics and cybersecurity.","Open to work"]];
$('#ms').innerHTML=ms.map((m,i)=>`<div class="ms${i?"":" on"}" data-i="${i}"><small>${m[0]} · ${m[2]}</small><h3>${m[1]}</h3><p>${m[3]}</p></div>`).join("");
const mi=[...document.querySelectorAll(".ms")];
function yr(i){mi.forEach((e,j)=>e.classList.toggle("on",j==i));const b=$('#big');b.style.opacity=0;setTimeout(()=>{b.textContent=ms[i][0];$('#bigs').textContent=ms[i][4];b.style.opacity=1},160)}
mi.forEach((e,i)=>e.onclick=()=>yr(i));
let cur=0;const yo=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){const i=+x.target.dataset.i;if(i!=cur){cur=i;yr(i)}}}),{rootMargin:"-40% 0px -50% 0px"});mi.forEach(e=>yo.observe(e));

const ct=[["Google AI Essentials","Google · 5-course specialization on using AI tools responsibly and productively."],["Google Prompting Essentials","Google · 4 courses on effective prompting, data analysis and presentations."],["ServiceNow Virtual Internship","ServiceNow University · Agentic AI, Administration, Flows, ATF, Reports; CSA exam prep."],["National Competence &amp; Employability Test","Certificate of Competency · 72% on first attempt, 9 August 2026."],["Career Development Program","Cognizant Outreach · Training sessions, April – June 2026."],["Foundation Course on AI Readiness","IICT, AI Skill House, Google, YouTube."],["AI/ML for Geodata Analysis","IIRS-ISRO, Dehradun · ML for geospatial and remote sensing data."]];
$('#ct').innerHTML=ct.map(c=>`<div class="card"><div class="ico">★</div><h3>${c[0]}</h3><div class="mu" style="font-size:.9rem">${c[1]}</div></div>`).join("");
const it=[["Data Analytics","Finding patterns and answers in data."],["Machine Learning","Building models that learn from data."],["Cybersecurity","How systems are attacked and defended."],["Information Security","Protecting data and privacy."]];
$('#in').innerHTML=it.map(c=>`<div class="card"><div class="ico">◆</div><h3>${c[0]}</h3><div class="mu" style="font-size:.9rem">${c[1]}</div></div>`).join("");

const roles=["Data Analyst","Python Developer","Cyber Security Enthusiast"];let ri=0,ci=0,del=false;
(function t(){const w=roles[ri];ci+=del?-1:1;$('#type').textContent=w.slice(0,ci);let d=del?35:80;if(!del&&ci==w.length){del=true;d=1500}else if(del&&ci==0){del=false;ri=(ri+1)%roles.length;d=300}setTimeout(t,d)})();

function clock(){const n=new Date(),o={timeZone:"Asia/Kolkata"};$('#tm').textContent=n.toLocaleTimeString("en-IN",{...o,hour:"numeric",minute:"2-digit",hour12:true});$('#dt').textContent=n.toLocaleDateString("en-GB",{...o,day:"numeric",month:"short",year:"numeric"})}clock();setInterval(clock,30000);
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.06});document.querySelectorAll(".rv").forEach(e=>io.observe(e));
const secs=[...document.querySelectorAll("main section")],ls=[...document.querySelectorAll(".links a")];
function sc(){const y=scrollY+130;let c=secs[0].id;secs.forEach(s=>{if(s.offsetTop<=y)c=s.id});if(c=="interests")c="education";ls.forEach(a=>a.classList.toggle("on",a.getAttribute("href")=="#"+c));$('#top').classList.toggle("s",scrollY>600)}
addEventListener("scroll",sc,{passive:true});sc();
$('#top').onclick=()=>scrollTo({top:0,behavior:"smooth"});
$('#menu').onclick=()=>$('#links').classList.toggle("o");ls.forEach(a=>a.onclick=()=>$('#links').classList.remove("o"));
try{const v=localStorage.getItem("th");if(v)R.dataset.theme=v}catch(e){}
$('#cord').onclick=function(){this.classList.remove("sw");void this.offsetWidth;this.classList.add("sw");const dark=R.dataset.theme?R.dataset.theme=="dark":!matchMedia("(prefers-color-scheme: light)").matches;const n=dark?"light":"dark";R.dataset.theme=n;try{localStorage.setItem("th",n)}catch(e){}};
$('#f').onsubmit=e=>{e.preventDefault();const f=e.target;location.href="mailto:sksoyel9887@gmail.com?subject="+encodeURIComponent(f.s.value)+"&body="+encodeURIComponent(f.m.value+"\n\n— "+f.n.value+" ("+f.e.value+")")};

/* ===== Animated nav: wavy letters + magnetic glowing blob + staggered drop-in ===== */
(function(){
  const L=$('#links'),blob=document.createElement('span');blob.className='blob';L.prepend(blob);
  ls.forEach((a,i)=>{a.style.setProperty('--i',i);a.innerHTML=[...a.textContent].map((c,k)=>`<span style="--d:${k*22}ms">${c==' '?'&nbsp;':c}</span>`).join('')});
  let hov=null,ready=false;
  function mv(a){if(!a||getComputedStyle(blob).display==='none')return;blob.style.width=a.offsetWidth+'px';blob.style.height=a.offsetHeight+'px';blob.style.transform=`translate(${a.offsetLeft}px,${a.offsetTop}px)`;blob.style.opacity=1}
  function sync(){const t=hov||ls.find(a=>a.classList.contains('on'));if(t)mv(t);else blob.style.opacity=0}
  ls.forEach(a=>{
    a.addEventListener('mouseenter',()=>{hov=a;sync()});
    a.addEventListener('focus',()=>{hov=a;sync()});
    a.addEventListener('mouseleave',()=>{hov=null;sync()});
    a.addEventListener('blur',()=>{hov=null;sync()});
    a.addEventListener('click',()=>{a.classList.remove('pop');void a.offsetWidth;a.classList.add('pop')});
  });
  addEventListener('scroll',sync,{passive:true});addEventListener('resize',sync);
  /* first placement without sliding from 0,0 */
  blob.style.transition='none';sync();requestAnimationFrame(()=>requestAnimationFrame(()=>{blob.style.transition='';ready=true}));
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{blob.style.transition='none';sync();requestAnimationFrame(()=>blob.style.transition='')});
})();
