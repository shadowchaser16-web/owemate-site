(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const setHeader = () => header?.classList.toggle('scrolled', scrollY > 18);
  setHeader(); addEventListener('scroll', setHeader, {passive:true});
  if(toggle && nav){ toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)}); nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open'))); }
  const io = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const steps=[...document.querySelectorAll('[data-step]')], previews=[...document.querySelectorAll('[data-preview]')];
  steps.forEach(b=>b.addEventListener('click',()=>{steps.forEach(x=>x.classList.toggle('active',x===b));previews.forEach(p=>p.classList.toggle('active',p.dataset.preview===b.dataset.step))}));
  const tabs=[...document.querySelectorAll('[data-tab]')], panels=[...document.querySelectorAll('[data-panel]')];
  tabs.forEach(t=>t.addEventListener('click',()=>{tabs.forEach(x=>{const a=x===t;x.classList.toggle('active',a);x.setAttribute('aria-selected',String(a))});panels.forEach(p=>p.classList.toggle('active',p.dataset.panel===t.dataset.tab))}));
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();
