(function () {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '×' : '☰';
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = '☰';
    }));
  }
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }), { threshold: .12 });
    reveals.forEach(el => io.observe(el));
  } else reveals.forEach(el => el.classList.add('visible'));
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = Number(el.dataset.count); const suffix = el.dataset.suffix || ''; const prefix = el.dataset.prefix || '';
    const duration = 1000; let started = false;
    const run = () => { if (started) return; started = true; const start = performance.now(); const tick = (now) => { const p = Math.min((now - start) / duration, 1); const eased = 1 - Math.pow(1 - p, 3); el.textContent = prefix + (target % 1 ? (target * eased).toFixed(1) : Math.round(target * eased)) + suffix; if (p < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); };
    if ('IntersectionObserver' in window) { const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { run(); o.disconnect(); } }), { threshold: .8 }); o.observe(el); } else run();
  });
})();
