/*
 * DRC-deforestation — Biodiversity & Conservation page module
 * Product specification section D.
 */

import { placeholderCard } from '../components/placeholder.js';

export function render() {
  return `
    <section class="page" id="page-biodiversity" aria-label="Biodiversity & Conservation">
      <div class="page-header">
        <h1>Biodiversity &amp; Conservation</h1>
        <p class="text-lead">
          Species occurrence records and protected-area information for the
          Congo Basin and DRC, with clear provenance and no overstatement.
        </p>
      </div>

      <div class="callout">
        <h4>How to read this data</h4>
        <p>
          Species occurrences are records of observations or specimens &mdash;
          not population estimates or proof of current presence. Protected-area
          designation does not prove effective protection. Occurrence records
          retain dataset and record provenance; sampling bias is disclosed.
        </p>
      </div>

      <div class="grid-2">
        <div class="card">
          <h2>Protected areas</h2>
          <p>Protected areas and other effective area-based conservation
          measures (OECMs), clearly distinguished. Current, appropriately
          licensed source.</p>
          ${placeholderCard({ title: 'Protected-area layer', body: 'PA / OECM boundaries', detail: 'Candidate source: Protected Planet / UNEP-WCMC (WDPCA). License terms under review.' })}
        </div>
        <div class="card">
          <h2>Species occurrences</h2>
          <p>Biodiversity occurrence records with provenance, never presented
          as abundance or population estimates.</p>
          ${placeholderCard({ title: 'Occurrence explorer', body: 'species records', detail: 'Candidate source: GBIF. Record provenance retained.' })}
        </div>
      </div>

      <div class="grid-2 mt-6">
        <div class="card">
          <h2>Habitat &amp; conservation context</h2>
          <p>Context where data supports it, presented with limitations and
          geographic precision.</p>
          ${placeholderCard({ title: 'Habitat context', body: 'conservation layers', detail: 'Data source pending.' })}
        </div>
      </div>
    </section>
  `;
}

export function init() {
  /* Biodiversity / protected-area layer integration happens in a later batch. */
}
