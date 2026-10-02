(() => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('[data-lang]');
  function setLanguage(language) {
    const lang = language === 'de' ? 'de' : 'en';
    root.lang = lang;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    document.title = lang === 'de'
      ? 'Marat Tukhvatullin — Softwareentwickler'
      : 'Marat Tukhvatullin — Software Engineer';
  }
  try { setLanguage(localStorage.getItem('preferredLanguage')); } catch { setLanguage('en'); }
  buttons.forEach(button => button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
    try { localStorage.setItem('preferredLanguage', root.lang); } catch { /* Language remains usable without storage. */ }
  }));
  document.getElementById('print').addEventListener('click', () => window.print());
})();
