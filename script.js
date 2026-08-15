const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const progress=$('#progress'),topBtn=$('#topBtn');
addEventListener('scroll',()=>{let m=document.documentElement.scrollHeight-innerHeight;progress.style.width=(m?scrollY/m*100:0)+'%';topBtn.classList.toggle('show',scrollY>500)},{passive:true});
topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
$('#menuBtn').onclick=()=>$('#mobileMenu').classList.toggle('open');
$$('#mobileMenu a').forEach(a=>a.onclick=()=>$('#mobileMenu').classList.remove('open'));
const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});$$('.reveal').forEach(e=>obs.observe(e));
let active='all';const cards=$$('.tool'),search=$('#search'),empty=$('#empty');
function filter(){let t=search.value.toLowerCase(),n=0;cards.forEach(c=>{let ok=(active==='all'||c.dataset.category===active)&&(!t||c.dataset.name.includes(t)||c.textContent.toLowerCase().includes(t));c.style.display=ok?'':'none';if(ok)n++});empty.style.display=n?'none':'block'}
$$('#filters button').forEach(b=>b.onclick=()=>{$$('#filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');active=b.dataset.filter;filter()});search.oninput=filter;
$$('[data-jump]').forEach(a=>a.onclick=()=>{active=a.dataset.jump;$$('#filters button').forEach(b=>b.classList.toggle('active',b.dataset.filter===active));setTimeout(filter,200)});
$$('.affiliate').forEach(a=>a.onclick=e=>{if(a.getAttribute('href')==='#'){e.preventDefault();let t=$('#toast');t.textContent='Link de afiliado ainda não configurado.';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500)}});
$('#year').textContent=new Date().getFullYear();