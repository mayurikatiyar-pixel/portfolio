/* =========================================================
   Portfolio scripts - Mayuri Katiyar
   1. Theme toggle   2. Mobile menu   3. Active nav link
   4. Hide empty sections   5. Image fallbacks   6. Footer year
   ========================================================= */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- 1. Light / dark theme ---------- */
  var themeBtn = document.getElementById('theme-toggle');
  function updateThemeLabel() {
    var dark = root.getAttribute('data-theme') === 'dark';
    themeBtn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }
  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
    updateThemeLabel();
  });
  updateThemeLabel();

  /* ---------- 2. Mobile menu ---------- */
  var menuBtn = document.getElementById('menu-toggle');
  var navLinks = document.getElementById('nav-links');
  function setMenu(open) {
    navLinks.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menuBtn.addEventListener('click', function () { setMenu(!navLinks.classList.contains('open')); });
  navLinks.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ---------- 4. Show nav link only for visible optional sections ---------- */
  document.querySelectorAll('[data-for]').forEach(function (item) {
    var section = document.getElementById(item.getAttribute('data-for'));
    if (section && !section.hidden) item.hidden = false;
  });

  /* ---------- 3. Highlight the nav link of the section in view ---------- */
  var links = Array.prototype.slice.call(navLinks.querySelectorAll('a'));
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { if (!s.hidden) observer.observe(s); });
  }

  /* ---------- 5. Show a placeholder if an image file is missing ---------- */
  function watchImage(img, wrapper) {
    function fail() { wrapper.classList.add('no-photo'); }
    img.addEventListener('error', fail);
    if (img.complete && img.naturalWidth === 0) fail();
  }
  var avatar = document.getElementById('avatar');
  if (avatar) watchImage(avatar.querySelector('img'), avatar);
  document.querySelectorAll('.project-img').forEach(function (box) {
    watchImage(box.querySelector('img'), box);
  });

  /* ---------- 6. Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
