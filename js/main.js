/*
 * DRC-deforestation — application entry point.
 *
 * Registers all page routes and controls responsive navigation.
 */

import { Router } from './router.js';

import * as homePage from './pages/home.js';
import * as explorePage from './pages/explore.js';
import * as forestIntelligencePage from './pages/forest-intelligence.js';
import * as biodiversityPage from './pages/biodiversity.js';
import * as pressuresPage from './pages/pressures.js';
import * as learnActPage from './pages/learn-act.js';
import * as dataMethodologyPage from './pages/data-methodology.js';

const routes = {
  home: homePage,
  explore: explorePage,
  'forest-intelligence': forestIntelligencePage,
  biodiversity: biodiversityPage,
  pressures: pressuresPage,
  'learn-act': learnActPage,
  'data-methodology': dataMethodologyPage,
};

const router = new Router({
  routes,
  contentSelector: '#main-content',
});

/**
 * Initialise the responsive navigation.
 *
 * Desktop navigation remains visible.
 * On smaller screens, the navigation becomes a slide-in panel.
 */
function initMobileNav() {
  const header = document.getElementById('site-header');
  const toggle = header?.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  const overlay = header?.querySelector('[data-mobile-overlay]');

  if (!header || !toggle || !nav) return;

  const mobileQuery = window.matchMedia('(max-width: 900px)');

  function setOpen(open, { returnFocus = false } = {}) {
    const isMobile = mobileQuery.matches;
    const shouldOpen = Boolean(open && isMobile);

    header.dataset.mobileOpen = String(shouldOpen);

    toggle.setAttribute('aria-expanded', String(shouldOpen));
    toggle.setAttribute(
      'aria-label',
      shouldOpen ? 'Close navigation' : 'Open navigation'
    );

    if (overlay) {
      overlay.hidden = !isMobile;
    }

    document.body.classList.toggle('nav-is-open', shouldOpen);

    if (returnFocus) {
      toggle.focus();
    }
  }

  toggle.addEventListener('click', () => {
    const currentlyOpen = header.dataset.mobileOpen === 'true';
    setOpen(!currentlyOpen);
  });

  nav.addEventListener('click', (event) => {
    const link = event.target.closest('a');

    if (link && mobileQuery.matches) {
      setOpen(false);
    }
  });

  overlay?.addEventListener('click', () => {
    setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (
      event.key === 'Escape' &&
      header.dataset.mobileOpen === 'true'
    ) {
      setOpen(false, { returnFocus: true });
    }
  });

  mobileQuery.addEventListener('change', () => {
    setOpen(false);
  });

  setOpen(false);
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();

  const year = document.getElementById('current-year');

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  router.start();
});