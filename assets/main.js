/* PrinTribe — interactions: hover micro-motion + mobile nav. Injects its own styles.
   Transform/opacity only. Respects prefers-reduced-motion. */
(function () {
  'use strict';
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  var css = [
    '.btn span,.btn .arrow{display:inline-block;transition:transform .3s cubic-bezier(.25,1,.5,1)}',
    '.btn:hover span,.btn:hover .arrow{transform:translateX(3px)}',
    '.corner-tile{overflow:hidden;border-radius:12px}',
    '.corner-tile img{transition:transform .6s cubic-bezier(.25,1,.5,1)}',
    '.corner-tile:hover img{transform:scale(1.025)}',
    '.channel-chip{transition:transform .35s cubic-bezier(.25,1,.5,1),border-color .35s,box-shadow .35s}',
    '.channel-chip:hover{transform:translateY(-2px)}',
    '.hero-object img{will-change:transform}'
  ].join('');
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // Scroll-reveal removed: all content renders immediately, no fade-in on scroll.

  // Mobile nav toggle.
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    var closeMenu = function () {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
    };
    var openMenu = function () {
      navToggle.setAttribute('aria-expanded', 'true');
      navLinks.classList.add('is-open');
    };
    navToggle.addEventListener('click', function () {
      if (navToggle.getAttribute('aria-expanded') === 'true') closeMenu(); else openMenu();
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', function (e) {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen && !navLinks.contains(e.target) && !navToggle.contains(e.target)) closeMenu();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 940) closeMenu();
    });
  }

  // Hero parallax: gentle, transform-only, clamped.
  var heroImg = document.querySelector('.hero-object img');
  if (heroImg) {
    var ticking = false;
    var update = function () {
      ticking = false;
      var y = Math.max(-24, Math.min(24, window.scrollY * -0.05));
      heroImg.style.transform = 'translateY(' + y + 'px)';
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
  }
})();
