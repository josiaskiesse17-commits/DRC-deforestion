/*
 * DRC-deforestion — Reusable placeholder component
 * Renders a clearly-marked "data not yet integrated" state. Used wherever a
 * real environmental dataset has not yet been wired in (Batch 2+).
 */

export function placeholderCard({ title, body, detail }) {
  const detailHtml = detail ? `<p class="small muted">${escapeHtml(detail)}</p>` : '';
  return `
    <div class="placeholder" role="status" aria-label="Data not yet available: ${escapeHtml(title)}">
      <h3>${escapeHtml(title)}</h3>
      <p>Data not yet integrated. This section will display verified ${escapeHtml(body || 'data')} from a documented source once integrated.</p>
      ${detailHtml}
    </div>
  `;
}

export function placeholderSection({ title, intro, items }) {
  const itemsHtml = items && items.length
    ? items.map((it) => `
        <div class="card">
          <h3>${escapeHtml(it.title)}</h3>
          <p>${escapeHtml(it.body || '')}</p>
          <div class="card-footer">
            <span class="muted small">Placeholder &mdash; source pending</span>
          </div>
        </div>
      `).join('')
    : '';
  return `
    <section class="page-section" aria-labelledby="sec-${slugify(title)}">
      <div class="page-header">
        <h2 id="sec-${slugify(title)}">${escapeHtml(title)}</h2>
        <p class="muted">${escapeHtml(intro || '')}</p>
      </div>
      <div class="page-deck">
        ${itemsHtml}
        ${itemsHtml ? '' : placeholderCard({ title: 'No data available yet', body: 'content for this section', detail: 'Indicator values will appear here once a verified dataset is integrated.' })}
      </div>
    </section>
  `;
}

/* Minimal escaping to avoid injecting HTML from data. */
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function slugify(str) {
  return String(str || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
