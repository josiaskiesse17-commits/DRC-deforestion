/*
 * DRC-deforestation — Explore the Basin page module
 * Product specification section B.
 */

import { placeholderCard } from '../components/placeholder.js';

export function render() {
  return `
    <section class="page" id="page-explore" aria-label="Explore the Basin">
      <div class="page-header">
        <h1>Explore the Basin</h1>
        <p class="text-lead">
          Interactive exploration of the Congo Basin and the DRC, with
          documented boundaries, country comparison and DRC-focused layers.
        </p>
      </div>

      <div class="data-notice">
        <strong>Map data pending:</strong> The basin/country boundary layers
        and map tiles are placeholders in this release. Boundary definitions
        will be documented per layer once authoritative sources are selected
        (see <a href="#data-methodology">Data &amp; Methodology</a>).
      </div>

      <div class="grid-2">
        <div class="card">
          <h2>Regional map</h2>
          <p>Shows the documented Congo Basin boundary and country context.
          &ldquo;Congo Basin&rdquo;, &ldquo;Congo River Basin&rdquo; and
          &ldquo;Congo Basin rainforest&rdquo; are disclosed separately where
          they differ.</p>
          ${placeholderCard({ title: 'Basin boundary map', body: 'vector boundary layer', detail: 'Boundary source pending selection.' })}
        </div>
        <div class="card">
          <h2>Country comparison</h2>
          <p>Comparable indicators across Congo Basin countries where
          definitions and datasets permit. Harmonized metrics and periods.</p>
          ${placeholderCard({ title: 'Country comparison table', body: 'comparable indicators', detail: 'Data source pending.' })}
        </div>
      </div>

      <div class="grid-2 mt-6">
        <div class="card">
          <h2>DRC-focused exploration</h2>
          <p>Deeper forest and environmental analysis for the Democratic
          Republic of the Congo, at the finest level supported by valid data.</p>
          ${placeholderCard({ title: 'DRC exploration layer', body: 'subnational boundaries', detail: 'Province/landscape boundaries pending validation.' })}
        </div>
        <div class="card">
          <h2>Layers &amp; provenance</h2>
          <p>Every map layer carries a legend, source, date, resolution and
          methodology note. Download offered where licensing permits.</p>
          ${placeholderCard({ title: 'Layer register', body: 'source metadata', detail: 'See Data &amp; Methodology.' })}
        </div>
      </div>
    </section>
  `;
}

export function init() {
  /* Map layer integration happens in a later batch. */
}
