/*
 * DRC-deforestation — Forest Intelligence page module
 * Product specification section C.
 */

import { placeholderCard } from '../components/placeholder.js';

export function render() {
  return `
    <section class="page" id="page-forest-intelligence" aria-label="Forest Intelligence">
      <div class="page-header">
        <h1>Forest Intelligence</h1>
        <p class="text-lead">
          Forest extent, tree-cover change and disturbance indicators for the
          Congo Basin and DRC &mdash; each with a traceable source, definition
          and period.
        </p>
      </div>

      <div class="callout">
        <h4>Important distinctions</h4>
        <p>
          Forest area is not the same as tree-cover canopy. Tree-cover loss is
          not automatically equivalent to permanent deforestation. Fire
          detections are not the same as burned area. These distinctions are
          disclosed with every indicator.
        </p>
      </div>

      <div class="grid-3">
        ${placeholderCard({
          title: 'Forest extent',
          body: 'country-reported forest area',
          detail: 'Candidate source: FAO FRA 2025. Shows reporting year, category and geography.',
        })}
        ${placeholderCard({
          title: 'Tree-cover loss',
          body: 'annual loss indicator',
          detail: 'Candidate source: Global Forest Watch (30 m, annual, 2001&ndash;2024). Loss &ne; deforestation.',
        })}
        ${placeholderCard({
          title: 'Forest degradation',
          body: 'disturbance indicator',
          detail: 'No ready-made degradation dataset identified; requires derived analysis. Deferred.',
        })}
      </div>

      <div class="grid-2 mt-6">
        <div class="card">
          <h2>Time series</h2>
          <p>Historical forest-change charts clearly identifying dataset and
          methodology. Projections labelled as scenarios, never observed facts.</p>
          ${placeholderCard({ title: 'Historical trend chart', body: 'time series', detail: 'Chart.js placeholder &mdash; real data pending.' })}
        </div>
        <div class="card">
          <h2>Geographic comparison</h2>
          <p>Side-by-side comparison of forest indicators across areas using
          harmonised metrics.</p>
          ${placeholderCard({ title: 'Comparison view', body: 'comparative indicators', detail: 'Data source pending.' })}
        </div>
      </div>
    </section>
  `;
}

export function init() {
  /* Chart integration happens in a later batch. */
}
