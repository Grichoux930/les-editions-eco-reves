document.querySelectorAll('.mobile-header').forEach(header => {
  const toggle = header.querySelector('.mobile-menu-toggle');
  const nav = header.querySelector('nav');
  if (!toggle || !nav) return;
  const close = () => { header.removeAttribute('data-menu-open'); toggle.setAttribute('aria-expanded', 'false'); };
  header.setAttribute('data-menu-ready', '');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    header.toggleAttribute('data-menu-open', open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  header.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.hasAttribute('data-menu-open')) { close(); toggle.focus(); }
  });
  window.matchMedia('(max-width: 980px)').addEventListener('change', close);
});
