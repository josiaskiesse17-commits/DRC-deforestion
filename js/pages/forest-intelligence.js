/*
 * DRC-deforestation
 * Forest intelligence
 *
 * Introduces the concepts and indicators needed to interpret
 * forest information responsibly.
 */

import {
  pageIntro,
  sectionHeading,
  callout,
  featurePlaceholder,
} from '../components/placeholder.js';

export function render() {
  return `
    <div class="page">

      ${pageIntro({
        eyebrow: 'Forest intelligence',
        title: 'Understanding what happens to a forest.',
        description:
          'Forest change is not a single measurement. Explore the different indicators used to describe forest extent, tree-cover change, disturbance and degradation.',
      })}


      <!-- CENTRAL DISTINCTION -->
      <section class="container">

        ${callout({
          title: 'An essential distinction',
          message:
            'Tree-cover loss and deforestation are not interchangeable. Tree-cover loss describes the removal or death of tree cover detected by a particular dataset. Deforestation generally refers to the conversion of forest to another land use or a long-term change in forest status.',
          type: 'warning',
        })}

      </section>


      <!-- INDICATORS -->
      <section class="section">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'The indicators',
            title: 'Different measurements answer different questions.',
            description:
              'Before interpreting an environmental indicator, understand the phenomenon it actually measures.',
          })}

          <div class="content-grid grid-2">

            <article class="card">
              <span class="kicker">Indicator 01</span>

              <h3>Forest area</h3>

              <p>
                The area classified as forest according to
                a specified definition and reporting method.
              </p>

              <p class="small muted">
                Useful for understanding the extent of forest
                resources at a defined geographical and temporal scale.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Indicator 02</span>

              <h3>Tree cover</h3>

              <p>
                The proportion of land covered by the vertical
                projection of tree crowns, often measured using
                a specified canopy threshold.
              </p>

              <p class="small muted">
                A tree-cover threshold does not automatically
                correspond to a formal forest definition.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Indicator 03</span>

              <h3>Tree-cover loss</h3>

              <p>
                A satellite-derived observation of the removal
                or death of tree cover within the methodology
                and definitions of a particular dataset.
              </p>

              <p class="small muted">
                Causes can include permanent conversion,
                temporary disturbance, harvesting, fire
                and other events.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Indicator 04</span>

              <h3>Deforestation</h3>

              <p>
                The conversion of forest to another land use
                or the long-term loss of forest status under
                the applicable definition.
              </p>

              <p class="small muted">
                Determining deforestation requires more
                context than observing a change in tree cover.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Indicator 05</span>

              <h3>Forest degradation</h3>

              <p>
                A reduction in forest condition or ecological
                quality that does not necessarily result in
                complete forest removal.
              </p>

              <p class="small muted">
                Degradation can be difficult to detect and
                requires indicators suited to the phenomenon.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Indicator 06</span>

              <h3>Forest restoration</h3>

              <p>
                Actions and processes intended to recover
                ecological functions, forest structure
                or other desired forest characteristics.
              </p>

              <p class="small muted">
                Tree planting alone does not prove that
                a degraded ecosystem has been restored.
              </p>
            </article>

          </div>

        </div>
      </section>


      <!-- HOW TO READ FOREST DATA -->
      <section class="section section-sm">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Reading the evidence',
            title: 'What should accompany a forest indicator?',
            description:
              'A responsible forest analysis should provide enough information for another person to understand and assess the result.',
          })}

          <div class="content-grid grid-3">

            <article class="card card-soft">
              <span class="card-number">01</span>

              <h3>Definition</h3>

              <p>
                What does the dataset call forest, loss,
                disturbance or change?
              </p>
            </article>


            <article class="card card-soft">
              <span class="card-number">02</span>

              <h3>Spatial resolution</h3>

              <p>
                What geographical detail can the observation
                reliably represent?
              </p>
            </article>


            <article class="card card-soft">
              <span class="card-number">03</span>

              <h3>Observation period</h3>

              <p>
                Which years or dates are covered, and when
                was the dataset last updated?
              </p>
            </article>


            <article class="card card-soft">
              <span class="card-number">04</span>

              <h3>Methodology</h3>

              <p>
                How were observations collected, classified
                and processed?
              </p>
            </article>


            <article class="card card-soft">
              <span class="card-number">05</span>

              <h3>Uncertainty</h3>

              <p>
                What errors, omissions or classification
                limitations may affect the result?
              </p>
            </article>


            <article class="card card-soft">
              <span class="card-number">06</span>

              <h3>Geographical scope</h3>

              <p>
                Does the result describe a country, a forest
                region, a river basin or a particular site?
              </p>
            </article>

          </div>

        </div>
      </section>


      <!-- DATA SOURCES -->
      <section class="section">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Potential data sources',
            title: 'From environmental observations to analysis.',
            description:
              'Several established resources could support future forest monitoring. Their presence here does not mean their data has already been integrated.',
          })}

          <div class="content-grid grid-2">

            <article class="card">
              <span class="badge badge-candidate">Candidate source</span>

              <h3 class="mt-2">FAO Forest Resources Assessment</h3>

              <p>
                Country-reported information about forest
                resources, including forest area and changes
                over reporting periods.
              </p>

              <a
                class="text-link"
                href="https://www.fao.org/forest-resources-assessment/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit FAO
              </a>
            </article>


            <article class="card">
              <span class="badge badge-candidate">Candidate source</span>

              <h3>Global Forest Watch</h3>

              <p>
                A platform providing access to forest-related
                information and datasets, including satellite-derived
                tree-cover change products.
              </p>

              <a
                class="text-link"
                href="https://www.globalforestwatch.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Global Forest Watch
              </a>
            </article>

          </div>

        </div>
      </section>


      <!-- CHART PLACEHOLDER -->
      <section class="section section-sm">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Forest monitoring',
            title: 'Following forest change over time.',
            description:
              'A time-series view can help reveal patterns, but only when observations are comparable and their definitions remain clear.',
          })}

          ${featurePlaceholder({
            title: 'Forest change time series',
            description:
              'A validated time-series visualisation will be added after selecting and integrating a suitable dataset. No forest-loss values are fabricated or displayed here.',
            status: 'planned',
          })}

        </div>
      </section>


      <!-- INTERPRETATION -->
      <section class="section">
        <div class="container">

          <div class="story-section">

            <div class="story-copy">

              <span class="eyebrow">Responsible interpretation</span>

              <h2>
                A change detected from space is the beginning
                of an investigation.
              </h2>

              <p>
                Satellite observations can identify patterns
                and changes across large areas. They do not
                automatically reveal why a change occurred,
                whether it is permanent or what its consequences
                are for nearby communities.
              </p>

              <p>
                Interpretation requires additional evidence,
                local context and a clear understanding of
                the dataset's methodology.
              </p>

              <a class="text-link" href="#pressures">
                Explore human and environmental pressures
              </a>

            </div>

            <div class="story-visual">
              <div class="visual-caption">
                Observation provides evidence.
                Interpretation requires context.
              </div>
            </div>

          </div>

        </div>
      </section>


      <section class="cta-section">
        <div class="container cta-inner">

          <div>
            <span class="eyebrow">Explore the wider ecosystem</span>

            <h2>
              Forests are also habitats for extraordinary biodiversity.
            </h2>

            <p>
              Discover why understanding forest ecosystems
              also means understanding the life within them.
            </p>
          </div>

          <a class="btn btn-light" href="#biodiversity">
            Explore biodiversity
          </a>

        </div>
      </section>

    </div>
  `;
}

export function init() {
  // Charts will be implemented only after validated data integration.
}