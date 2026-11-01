/*
 * DRC-deforestation — hash router.
 *
 * Supports bookmarkable routes while preserving the shared
 * application header and footer.
 */

export class Router {
  constructor({ routes, contentSelector }) {
    this.routes = routes;
    this.contentEl = document.querySelector(contentSelector);

    if (!this.contentEl) {
      throw new Error(
        `Router: content element "${contentSelector}" not found`
      );
    }

    this.currentPath = null;
    this.onHashChange = this.onHashChange.bind(this);
  }

  start() {
    window.addEventListener('hashchange', this.onHashChange);

    // Render the initial route immediately.
    this.onHashChange();
  }

  getPath() {
    return (
      window.location.hash
        .replace(/^#/, '')
        .replace(/^\/+/, '')
        .trim() || 'home'
    );
  }

  onHashChange() {
    const path = this.getPath();

    if (!Object.prototype.hasOwnProperty.call(this.routes, path)) {
      window.location.hash = 'home';
      return;
    }

    this.updateActiveNav(path);

    // Avoid rendering the same page unnecessarily.
    if (path === this.currentPath) {
      return;
    }

    this.currentPath = path;
    this.render(path);
  }

  render(path) {
    const route = this.routes[path];

    try {
      const markup =
        typeof route.render === 'function'
          ? route.render()
          : '';

      this.contentEl.innerHTML = markup;

      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });

      this.contentEl.focus({
        preventScroll: true,
      });

      this.updateActiveNav(path);

      if (typeof route.init === 'function') {
        route.init();
      }
    } catch (error) {
      console.error(`Unable to render route "${path}"`, error);

      this.contentEl.innerHTML = `
        <section
          class="page page-intro"
          aria-labelledby="route-error-title"
        >
          <span class="eyebrow">Application error</span>

          <h1 id="route-error-title">
            This section could not be displayed.
          </h1>

          <p>
            Please return to the homepage or try again.
          </p>

          <a class="btn" href="#home">
            Return home
          </a>
        </section>
      `;
    }
  }

  updateActiveNav(path) {
    document.querySelectorAll('.nav-list a').forEach((link) => {
      const linkPath = (link.getAttribute('href') || '')
        .replace(/^#/, '');

      if (linkPath === path) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  navigate(path) {
    if (Object.prototype.hasOwnProperty.call(this.routes, path)) {
      window.location.hash = path;
    }
  }
}