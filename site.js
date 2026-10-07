if(window.SITAL_HERO){try{const bin=atob(window.SITAL_HERO),bytes=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);const u=URL.createObjectURL(new Blob([bytes],{type:"image/webp"}));window.SITAL_HERO_URL=u;document.documentElement.style.setProperty("--hero-image",`url("${u}")`);const img=document.getElementById("companyPhoto");if(img)img.src=u}catch(e){}}
const T=window.SITAL_I18N;
const nested=(o,p)=>p.split('.').reduce((a,k)=>a?.[k],o);
const setText=(lang)=>{
 const t=T[lang]||T.en;
 document.documentElement.lang=lang; document.title=t.meta[0]; document.querySelector('meta[name="description"]').content=t.meta[1];
 document.querySelectorAll('[data-k]').forEach(el=>{const v=nested(t,el.dataset.k); if(v!==undefined) el.textContent=v});
 document.getElementById('features').innerHTML=t.feat.map(x=>`<div class="feature"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('');
 document.getElementById('whatCards').innerHTML=t.what[3].map((x,i)=>`<article class="card"><div class="ico">${['▦','↘','⌛','◫','×','★'][i]}</div><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('');
 document.getElementById('whyItems').innerHTML=t.why[4].map((x,i)=>`<article class="why-item"><div class="num">0${i+1}</div><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('');
 document.getElementById('steps').innerHTML=t.how[3].map((x,i)=>`<article class="step" data-n="0${i+1}"><div class="step-ico">${['↑','✓','→'][i]}</div><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('');
 document.getElementById('rules').innerHTML=t.protect[3].map(x=>`<div class="rule">${x}</div>`).join('');
 document.getElementById('facts').innerHTML=t.about[3].map(x=>`<div class="fact"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('');
 document.getElementById('sustainCards').innerHTML=t.sustain[3].map((x,i)=>`<article class="card"><div class="ico">${['♻','€','↗'][i]}</div><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('');
 document.getElementById('check').innerHTML=t.sell[3].map(x=>`<li>${x}</li>`).join('');
 const faq=document.getElementById('faqWrap'); faq.innerHTML=t.faq.map(x=>`<div class="faq-item"><button class="faq-q" type="button"><span>${x[0]}</span><span class="plus">+</span></button><div class="faq-a"><div><p>${x[1]}</p></div></div></div>`).join('');
 faq.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>q.parentElement.classList.toggle('open')));
 document.getElementById('lang').value=lang; localStorage.setItem('sital-lang',lang); const u=new URL(location.href);u.searchParams.set('lang',lang);history.replaceState(null,'',u);
};
const params=new URLSearchParams(location.search); let lang=params.get('lang')||localStorage.getItem('sital-lang')||(navigator.language||'en').slice(0,2); if(!T[lang])lang='en'; setText(lang);
document.getElementById('lang').addEventListener('change',e=>setText(e.target.value));
document.getElementById('year').textContent=new Date().getFullYear();
const nav=document.getElementById('nav'); document.getElementById('menu').addEventListener('click',()=>nav.classList.toggle('open')); nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const toast=document.getElementById('toast'); const show=m=>{toast.textContent=m;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),4800)};
document.getElementById('stockForm').addEventListener('submit',e=>{e.preventDefault();const l=document.getElementById('lang').value,t=T[l],v=id=>document.getElementById(id).value.trim(),files=[...document.getElementById('files').files].map(f=>f.name).join(', ');const b=[t.mail[1],'',`${t.mail[2]}: ${v('company')}`,`${t.mail[3]}: ${v('name')}`,`${t.mail[4]}: ${v('email')}`,`${t.mail[5]}: ${v('phone')}`,`${t.mail[6]}: ${v('product')}`,`${t.mail[7]}: ${v('qty')}`,`${t.mail[8]}: ${v('expiry')}`,`${t.mail[9]}: ${v('location')}`,`${t.mail[10]}: ${v('details')}`,`${t.mail[11]}: ${files||'-'}`,'',t.mail[12]].join('\n');show(t.toast);setTimeout(()=>location.href=`mailto:sitaltrading@asleygroup.com?subject=${encodeURIComponent(t.mail[0]+' - '+v('company'))}&body=${encodeURIComponent(b)}`,250)});