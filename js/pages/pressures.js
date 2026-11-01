/*
 * DRC-deforestation — Human & Environmental Pressures page module
 * Product specification section E.
 */

import { placeholderCard } from '../components/placeholder.js';

export function render() {
  return `
    <section class="page" id="page-pressures" aria-label="Human & Environmental Pressures">
      <div class="page-header">
        <h1>Human &amp; Environmental Pressures</h1>
        <p class="text-lead">
          Agriculture, urban expansion, charcoal/woodfuel, mining, infrastructure
          and population context for the Congo Basin and DRC.
        </p>
      </div>

      <div class="callout">
        <h4>Correlation &ne; causation</h4>
        <p>
          A driver is shown as a quantified cause only when the dataset or
          study supports that attribution. Spatial association alone is not
          presented as proof of cause.
        </p>
      </div>

      <div class="grid-3">
        ${placeholderCard({
          title: 'Agriculture',
          body: 'uncontrolled farmland expansion',
          detail: 'Driver context &mdash; causation not asserted without evidence.',
        })}
        ${placeholderCard({
          title: 'Charcoal / woodfuel',
          body: 'woodfuel dependence',
          detail: 'Driver context &mdash; causation not asserted without evidence.',
        })}
        ${placeholderCard({
          title: 'Urban expansion',
          body: 'city growth pressure',
          detail: 'Driver context &mdash; causation not asserted without evidence.',
        })}
      </div>

      <div class="grid-3 mt-6">
        ${placeholderCard({
          title: 'Mining',
          body: 'mining pressure',
          detail: 'Driver context &mdash; causation not asserted without evidence.',
        })}
        ${placeholderCard({
          title: 'Infrastructure',
          body: 'roads &amp; infrastructure',
          detail: 'Driver context &mdash; causation not asserted without evidence.',
        })}
        ${placeholderCard({
          title: 'Population context',
          body: 'gridded population estimates',
          detail: 'Candidate source: WorldPop. Modelled estimates &ne; census counts.',
        })}
      </div>
    </section>
  `;
}

export function init() {
  /* Pressure layer integration happens in a later batch. */
}
