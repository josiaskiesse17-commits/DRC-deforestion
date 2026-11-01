/*
 * DRC-deforestation
 * Reusable interface components.
 *
 * These components are deliberately framework-free.
 * They return HTML strings for use by the page modules.
 */

/**
 * Escape HTML-sensitive characters before inserting dynamic text.
 */
export function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[character];
  });
}

/**
 * Status labels communicate the actual implementation state.
 *
 * available: data or feature is available for use.
 * candidate: a possible source or feature under consideration.
 * planned: intended for a future implementation.
 * deferred: intentionally postponed.
 * limited: available with important restrictions.
 */
const STATUS_LABELS = {
  available: 'Available',
  candidate: 'Candidate source',
  planned: 'Planned',
  deferred: 'Deferred',
  limited: 'Limited availability',
};

export function statusBadge(status = 'planned') {
  const normalized = STATUS_LABELS[status] ? status : 'planned';

  return `
    <span class="badge badge-${normalized}">
      ${STATUS_LABELS[normalized]}
    </span>
  `;
}

/**
 * General informational notice.
 */
export function callout({
  title = 'Important information',
  message = '',
  type = 'info',
} = {}) {
  const allowedTypes = ['info', 'warning', 'danger'];

  const normalizedType = allowedTypes.includes(type)
    ? type
    : 'info';

  return `
    <aside class="callout callout-${normalizedType}" role="note">
      <div>
        <strong class="callout-title">
          ${escapeHTML(title)}
        </strong>

        <p>${escapeHTML(message)}</p>
      </div>
    </aside>
  `;
}

/**
 * Clearly marked placeholder for a feature that is not implemented.
 *
 * Never use this component to imply that a map, chart, calculator
 * or analytical result is already operational.
 */
export function featurePlaceholder({
  title = 'Not yet available',
  description = 'This feature has not yet been implemented.',
  status = 'planned',
} = {}) {
  return `
    <div class="data-placeholder">
      ${statusBadge(status)}

      <h3>${escapeHTML(title)}</h3>

      <p>${escapeHTML(description)}</p>
    </div>
  `;
}

/**
 * Placeholder for a map that is not yet connected to validated
 * geographical datasets.
 */
export function mapPlaceholder({
  title = 'Interactive map in development',
  description = 'Geographical layers and validated datasets have not yet been integrated.',
} = {}) {
  return `
    <section class="map-placeholder" aria-label="Map availability notice">
      <div class="map-placeholder-content">
        ${statusBadge('planned')}

        <h3>${escapeHTML(title)}</h3>

        <p>${escapeHTML(description)}</p>

        <p class="map-disclaimer">
          No live geographical analysis is being displayed here.
        </p>
      </div>
    </section>
  `;
}

/**
 * Source information card.
 */
export function sourceCard({
  name,
  provider,
  description,
  status = 'candidate',
  coverage = '',
  limitations = '',
  url = '',
} = {}) {
  const safeName = escapeHTML(name || 'Unnamed source');
  const safeProvider = escapeHTML(provider || 'Provider not specified');

  const link = url
    ? `
      <a
        class="text-link"
        href="${escapeHTML(url)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit source
      </a>
    `
    : '';

  return `
    <article class="card">
      <div class="lesson-meta">
        ${statusBadge(status)}
      </div>

      <h3 class="mt-2">${safeName}</h3>

      <p class="small muted">${safeProvider}</p>

      <p>${escapeHTML(description || '')}</p>

      ${
        coverage
          ? `
            <p class="small">
              <strong>Coverage:</strong>
              ${escapeHTML(coverage)}
            </p>
          `
          : ''
      }

      ${
        limitations
          ? `
            <p class="small">
              <strong>Limitations:</strong>
              ${escapeHTML(limitations)}
            </p>
          `
          : ''
      }

      ${link}
    </article>
  `;
}

/**
 * Simple section heading.
 */
export function sectionHeading({
  eyebrow = '',
  title = '',
  description = '',
  centered = false,
} = {}) {
  return `
    <div class="section-heading ${centered ? 'centered' : ''}">
      ${eyebrow ? `<span class="eyebrow">${escapeHTML(eyebrow)}</span>` : ''}

      <h2 class="${eyebrow ? 'mt-2' : ''}">
        ${escapeHTML(title)}
      </h2>

      ${
        description
          ? `<p>${escapeHTML(description)}</p>`
          : ''
      }
    </div>
  `;
}

/**
 * Reusable page introduction.
 */
export function pageIntro({
  eyebrow = '',
  title = '',
  description = '',
  compact = false,
} = {}) {
  return `
    <section class="page-intro ${compact ? 'compact' : ''}">
      <div class="container">
        ${eyebrow ? `<span class="eyebrow">${escapeHTML(eyebrow)}</span>` : ''}

        <h1>${escapeHTML(title)}</h1>

        ${
          description
            ? `<p>${escapeHTML(description)}</p>`
            : ''
        }
      </div>
    </section>
  `;
}