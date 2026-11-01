/*
 * DRC-deforestation — Home page module
 * Product specification section A.
 */

import { placeholderCard, placeholderSection } from '../components/placeholder.js';

export function render() {
  return `
    <section class="page" id="page-home" aria-label="Home">
      <div class="page-header">
        <h1>Environmental intelligence for the Congo Basin</h1>
        <p class="text-lead">
          DRC-deforestation makes trustworthy information about deforestation,
          urban growth and forest pressure in the Congo Basin accessible,
          understandable and useful &mdash; with deeper analysis of the
          Democratic Republic of the Congo (DRC).
        </p>
      </div>

      <div class="data-notice">
        <strong>Release status:</strong> This is the application foundation
        (Release 1 design). No environmental statistics are presented as
        observed facts. Placeholders mark where verified data will appear once
        integrated from a documented source.
      </div>

      <h2 style="grid-column:1 / -1;">About the platform</h2>
      <div class="grid-2">
        <div class="card">
          <h3>Public awareness</h3>
          <p>Explains ecosystems, deforestation drivers, consequences and
          conservation responses in accessible language for citizens,
          communities, students and educators.</p>
        </div>
        <div class="card">
          <h3>Environmental intelligence</h3>
          <p>Presents traceable datasets, maps, indicators and historical
          trends &mdash; every value tied to a source, date and definition.</p>
        </div>
        <div class="card">
          <h3>Interactive exploration</h3>
          <p>Explore locations, compare areas and use educational tools with
          transparent assumptions.</p>
        </div>
      </div>

      <h2 style="grid-column:1 / -1;">Geographic scope</h2>
      <div class="callout">
        <h4>Congo Basin &rarr; DRC</h4>
        <p>
          The platform covers the Congo Basin as a regional system and gives
          additional analytical attention to the DRC. &ldquo;Congo Basin&rdquo;,
          &ldquo;Congo River Basin&rdquo; and &ldquo;Congo Basin rainforest&rdquo;
          are not treated as interchangeable; each map discloses the boundary
          definition it uses.
        </p>
      </div>

      <h2 style="grid-column:1 / -1;">Key indicators (pending data integration)</h2>
      <div class="grid-3">
        ${placeholderCard({
          title: 'Forest extent',
          body: 'forest area reference',
          detail: 'Candidate source: FAO FRA 2025 (country-reported).',
        })}
        ${placeholderCard({
          title: 'Tree-cover loss',
          body: 'annual change indicator',
          detail: 'Candidate source: Global Forest Watch (Hansen/UMD/Google/USGS/NASA).',
        })}
        ${placeholderCard({
          title: 'Active fires',
          body: 'fire observation layer',
          detail: 'Candidate source: NASA FIRMS (MODIS / VIIRS).',
        })}
      </div>

      <div class="grid-2 mt-6">
        <div class="card">
          <h3>Explore the Basin</h3>
          <p>Interactive map with documented basin and country boundaries,
          country selection and comparison, and DRC-focused exploration.</p>
          <a href="#explore" class="btn btn-sm btn-outline">Go to Explore</a>
        </div>
        <div class="card">
          <h3>Data &amp; Methodology</h3>
          <p>Inspect the source register, definitions, limitations, update
          cadence, licensing and attribution for every indicator.</p>
          <a href="#data-methodology" class="btn btn-sm btn-outline">Go to Data</a>
        </div>
      </div>
    </section>
  `;
}

export function init() {
  /* No page-specific setup required. */
}
