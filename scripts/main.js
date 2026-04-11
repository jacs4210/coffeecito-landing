/* ══════════════════════════════════════════════════
   COFFEECITO — LÓGICA PRINCIPAL
   main.js
══════════════════════════════════════════════════ */

/* ─── NAVBAR: SCROLL + TOGGLE MOBILE ────────── */
(function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  // Scroll: añadir clase 'scrolled' y barra de progreso
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 40;
    navbar.classList.toggle('scrolled', scrolled);

    // Barra de progreso de lectura
    const docHeight   = document.documentElement.scrollHeight - window.innerHeight;
    const progress    = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    navbar.style.setProperty('--scroll-progress', progress.toFixed(1) + '%');
  }, { passive: true });

  // Toggle menú mobile
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Cerrar menú al hacer click en un link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();


/* ─── SCROLL REVEAL ──────────────────────────── */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
})();


/* ─── COUNTERS ANIMADOS ──────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  /**
   * Formatea el número según el target:
   * - Si target >= 1000 y suffix es 'K': muestra en miles (ej. 77.5K → "+77.5K")
   * - Si suffix es '%': muestra valor simple con %
   */
  function formatValue(current, target, prefix, suffix) {
    let display;
    if (suffix === 'K' && target >= 1000) {
      const k = current / 1000;
      display = k >= 100 ? Math.round(k) + 'K' : k.toFixed(k % 1 === 0 ? 0 : 1) + 'K';
    } else {
      display = Math.round(current) + suffix;
    }
    return prefix + display;
  }

  function animateCounter(el) {
    const target  = parseInt(el.dataset.target, 10);
    const prefix  = el.dataset.prefix  || '';
    const suffix  = el.dataset.suffix  || '';
    const duration = 1800; // ms
    const start   = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = eased * target;

      el.textContent = formatValue(current, target, prefix, suffix);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = formatValue(target, target, prefix, suffix);
      }
    }
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach(el => observer.observe(el));
})();


/* ─── HERO BG PARALLAX SUAVE ─────────────────── */
(function initHeroBg() {
  const bg = document.querySelector('.hero-bg');
  if (!bg) return;

  // Marcar como loaded para la animación inicial CSS
  setTimeout(() => bg.classList.add('loaded'), 100);

  window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    if (offset < window.innerHeight) {
      bg.style.transform = `scale(1) translateY(${offset * 0.25}px)`;
    }
  }, { passive: true });
})();


/* ─── SMOOTH ANCHOR SCROLL ───────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();

    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
      10
    ) || 72;

    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - navHeight,
      behavior: 'smooth',
    });
  });
});


/* ─── ACTIVE NAV LINK EN SCROLL ──────────────── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => observer.observe(s));
})();

/* ─── LOAD MORE REELS ────────────────────────── */
(function initLoadMoreReels() {
  const btn = document.getElementById('btn-load-more-reels');
  const hiddenReels = document.querySelectorAll('.hidden-reel');

  if (!btn || !hiddenReels.length) return;

  btn.addEventListener('click', () => {
    // Reveal hidden reels
    hiddenReels.forEach((reel, index) => {
      // Small stagger effect for a smooth entrance
      setTimeout(() => {
        reel.classList.remove('hidden-reel');
        // Let the CSS reveal animation trigger
        reel.classList.add('reveal', 'visible');
      }, index * 150);
    });

    // Hide the button container once clicked
    const container = btn.closest('.load-more-container');
    if (container) {
      container.style.display = 'none';
    } else {
      btn.style.display = 'none';
    }
  });
})();
