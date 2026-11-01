/*
 * DRC-deforestation — Learn & Act page module
 * Product specification section F.
 */

import { placeholderCard } from '../components/placeholder.js';

export function render() {
  return `
    <section class="page" id="page-learn-act" aria-label="Learn & Act">
      <div class="page-header">
        <h1>Learn &amp; Act</h1>
        <p class="text-lead">
          Educational explainers, conservation responses, sustainable
          alternatives and interactive calculators with transparent
          assumptions.
        </p>
      </div>

      <div class="grid-3">
        <div class="card">
          <h2>Core causes</h2>
          <p>Accessible explanations of deforestation drivers in the Congo
          Basin, with references.</p>
        </div>
        <div class="card">
          <h2>Consequences</h2>
          <p>Environmental and social consequences of forest loss, explained
          for communities and students.</p>
        </div>
        <div class="card">
          <h2>Responses</h2>
          <p>Conservation responses and sustainable alternatives including
          reforestation, renewable energy and green infrastructure.</p>
        </div>
      </div>

      <div class="grid-2 mt-6">
        <div class="card">
          <h2>Interactive calculators</h2>
          <p>Educational tools such as tree-planting impact and forest-loss
          projection, with assumptions made explicit. Not predictions.</p>
          ${placeholderCard({ title: 'Calculator', body: 'educational tool', detail: 'Assumptions disclosed; no fabricated statistics.' })}
        </div>
        <div class="card">
          <h2>Learning resources</h2>
          <p>Glossary, explainers and classroom-friendly materials for
          students and educators.</p>
          ${placeholderCard({ title: 'Glossary &amp; explainers', body: 'reference material', detail: 'Content pending.' })}
        </div>
      </div>

      <div class="grid-2 mt-6">
        <div class="card">
          <h2>Practical actions</h2>
          <p>Actions for communities, institutions and organisations to
          protect forests and support sustainable alternatives.</p>
        </div>
      </div>
    </section>
  `;
}

export function init() {
  /* Calculator integration happens in a later batch. */
}
