/*
 * DRC-deforestion — Application entry point
 * Wires the router to page modules and handles the mobile navigation toggle.
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

const router = new Router({ routes, contentSelector: '#main-content' });

/* Mobile navigation toggle. */
function initMobileNav() {
  const header = document.getElementById('site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');

  if (!toggle || !nav || !header) return;

  toggle.addEventListener('click', () => {
    const isOpen = header.getAttribute('data-mobile-open') === 'true';
    const next = !isOpen;
    header.setAttribute('data-mobile-open', next);
    toggle.setAttribute('aria-expanded', next);
    nav.hidden = !next;
  });

  /* Close mobile nav when a link is clicked. */
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      header.setAttribute('data-mobile-open', 'false');
      toggle.setAttribute('aria-expanded', 'false');
      nav.hidden = true;
    });
  });

  /* Ensure mobile nav is hidden by default. */
  nav.hidden = true;
}

/* Initialise. */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  router.start();
});
