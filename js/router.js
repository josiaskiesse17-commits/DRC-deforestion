/*
 * DRC-deforestion — Client-side router
 * Hash-based routing. Keeps a single shell (header/footer) shared across all
 * product-specification sections while giving each section a bookmarkable URL.
 */

export class Router {
  constructor({ routes, contentSelector }) {
    this.routes = routes; // { path: { render?, init? } }
    this.contentEl = document.querySelector(contentSelector);
    if (!this.contentEl) {
      throw new Error(`Router: content element "${contentSelector}" not found`);
    }
    this.currentPath = null;
    this._onHashChange = this._onHashChange.bind(this);
  }

  start() {
    window.addEventListener('hashchange', this._onHashChange);
    window.addEventListener('load', this._onHashChange);
    this._onHashChange();
  }

  _onHashChange() {
    let path = window.location.hash.replace(/^#/, '') || 'home';
    // Normalise: strip leading slash if present.
    path = path.replace(/^\//, '');
    if (!(path in this.routes)) {
      // Unknown route: fall back to home.
      window.location.hash = 'home';
      return;
    }
    if (path === this.currentPath) {
      // Same page: still ensure nav highlight is correct.
      this._updateActiveNav(path);
      return;
    }
    this.currentPath = path;
    this._render(path);
  }

  _render(path) {
    const route = this.routes[path];
    const html = typeof route.render === 'function' ? route.render() : '';
    this.contentEl.innerHTML = html;
    window.scrollTo(0, 0);
    /* Move focus to the new main content so screen readers announce the change. */
    this.contentEl.focus();
    this._updateActiveNav(path);
    if (typeof route.init === 'function') {
      route.init();
    }
  }

  _updateActiveNav(path) {
    const links = document.querySelectorAll('.nav-list a');
    links.forEach((link) => {
      const href = link.getAttribute('href') || '';
      const linkPath = href.replace(/^#/, '');
      const active = linkPath === path;
      link.setAttribute('aria-current', active ? 'page' : 'false');
      if (active) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /* Programmatic navigation. */
  navigate(path) {
    window.location.hash = path;
  }
}
