/*
 * DRC-deforestation
 * Biodiversity
 *
 * Introduces biodiversity concepts and the responsible
 * interpretation of species occurrence information.
 */

import {
  pageIntro,
  sectionHeading,
  callout,
  featurePlaceholder,
} from '../components/placeholder.js';

import {
  renderImageAttribution,
} from '../data/image-attribution.js';

export function render() {
  return `
    <div class="page">

      ${pageIntro({
        eyebrow: 'Biodiversity',
        title: 'A forest is a world of interconnected life.',
        description:
          'Explore biodiversity in the Congo Basin, understand the importance of ecological relationships and learn what species observation data can—and cannot—tell us.',
      })}


      <!-- INTRODUCTION -->
      <section class="container">

        <div class="story-section">

          <div class="story-copy">

            <span class="eyebrow">Living ecosystems</span>

            <h2>
              Biodiversity is more than a list of species.
            </h2>

            <p>
              Biodiversity includes variation within species,
              between species and across ecosystems. It also
              encompasses the ecological relationships that
              allow living systems to function.
            </p>

            <p>
              Forest ecosystems provide habitats and resources
              for many forms of life. Their ecological value
              cannot be understood through species counts alone.
            </p>

            <a class="text-link" href="#learn-act">
              Learn about ecosystem relationships
            </a>

          </div>

          <div class="story-visual">
            <img
              src="assets/images/nasa/congo-gorilla-habitat.jpg"
              alt="Road encroaching on gorilla habitat in the Congo Basin rainforest"
              loading="lazy"
            />
            <div class="visual-caption">
              Biodiversity connects species, habitats
              and ecological processes.
            </div>
          </div>
          <div class="image-attribution" style="margin-top:12px;">
            <span>Image:</span>
            Building Roads in the Congo Rainforest · Nov 27, 2019 &middot;
            <span>Source:</span>
            <a
              href="https://science.nasa.gov/blogs/earth-matters/2019/11/27/building-roads-in-the-congo-rainforest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NASA Earth Observatory
            </a>
            &middot; NASA imagery is public domain. Credit: NASA.
          </div>

        </div>

      </section>


      <!-- BIODIVERSITY DIMENSIONS -->
      <section class="section">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Understanding biodiversity',
            title: 'Three connected dimensions.',
            description:
              'Biodiversity can be understood at several levels, each contributing a different perspective on ecological variation.',
          })}

          <div class="content-grid grid-3">

            <article class="card">
              <span class="card-number">01</span>

              <h3>Genetic diversity</h3>

              <p>
                Variation in genetic information within
                populations and species. It contributes
                to adaptation and resilience.
              </p>
            </article>


            <article class="card">
              <span class="card-number">02</span>

              <h3>Species diversity</h3>

              <p>
                The variety of species present in an area,
                including their relative abundance and
                ecological roles.
              </p>
            </article>


            <article class="card">
              <span class="card-number">03</span>

              <h3>Ecosystem diversity</h3>

              <p>
                The variety of habitats, ecological
                communities and environmental processes
                across a landscape.
              </p>
            </article>

          </div>

        </div>
      </section>


      <!-- ECOLOGICAL CONNECTIONS -->
      <section class="section section-sm">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Ecological relationships',
            title: 'Species do not exist in isolation.',
            description:
              'The loss or disturbance of habitat can affect multiple organisms and ecological processes, sometimes through indirect relationships.',
          })}

          <div class="content-grid grid-2">

            <article class="card card-soft">
              <span class="kicker">Habitat</span>

              <h3>Living space and resources</h3>

              <p>
                Forest structure provides places for organisms
                to live, feed, reproduce and move through
                the landscape.
              </p>
            </article>


            <article class="card card-soft">
              <span class="kicker">Food webs</span>

              <h3>Interconnected species</h3>

              <p>
                Organisms participate in food webs through
                relationships involving predation, herbivory,
                decomposition and other processes.
              </p>
            </article>


            <article class="card card-soft">
              <span class="kicker">Ecological functions</span>

              <h3>Processes that sustain ecosystems</h3>

              <p>
                Pollination, seed dispersal, nutrient cycling
                and decomposition contribute to ecosystem
                functioning.
              </p>
            </article>


            <article class="card card-soft">
              <span class="kicker">Landscape connectivity</span>

              <h3>Movement across habitats</h3>

              <p>
                The arrangement and continuity of habitats
                can influence how organisms move and interact
                across landscapes.
              </p>
            </article>

          </div>

        </div>
      </section>


      <!-- SPECIES OBSERVATION DATA -->
      <section class="section">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Biodiversity information',
            title: 'What can species occurrence records reveal?',
            description:
              'Occurrence databases provide valuable evidence of documented observations, but their coverage and limitations must be understood.',
          })}

          <div class="split-layout">

            <div>
              <h3>Documented observations</h3>

              <p class="mt-2">
                Biodiversity occurrence records may include
                information about a species, its observation
                location, the date and the institution or
                dataset contributing the record.
              </p>

              <ul class="feature-list">
                <li>Which species have documented observations?</li>
                <li>Where have observations been recorded?</li>
                <li>When were records collected?</li>
                <li>Which institutions or datasets contributed them?</li>
              </ul>
            </div>


            <div class="card">
              <span class="badge badge-candidate">
                Candidate source
              </span>

              <h3 class="mt-2">Global Biodiversity Information Facility</h3>

              <p>
                GBIF provides access to biodiversity occurrence
                information from contributing institutions
                and datasets around the world.
              </p>

              <a
                class="text-link"
                href="https://www.gbif.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore GBIF
              </a>
            </div>

          </div>

          <div class="mt-4">
            ${callout({
              title: 'Occurrence does not equal population',
              message:
                'A recorded observation confirms that a species was documented at a particular place and time, subject to the record quality. It does not establish the total population, current presence, abundance or complete geographical distribution of that species.',
              type: 'warning',
            })}
          </div>

        </div>
      </section>


      <!-- FUTURE SPECIES EXPLORER -->
      <section class="section section-sm">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Species explorer',
            title: 'Connecting biodiversity records with geography.',
            description:
              'A future species explorer will allow users to examine documented occurrences while preserving record-level provenance and uncertainty.',
          })}

          ${featurePlaceholder({
            title: 'Biodiversity occurrence explorer',
            description:
              'A searchable species explorer and geographical visualisation are planned. GBIF records have not yet been integrated or validated for this platform.',
            status: 'planned',
          })}

        </div>
      </section>


      <!-- DATA QUALITY -->
      <section class="section">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Data quality',
            title: 'A species record needs context.',
            description:
              'Biodiversity datasets can contain gaps, inconsistencies and differences in observation effort. Responsible analysis must account for them.',
          })}

          <div class="content-grid grid-3">

            <article class="card">
              <h3>Observation effort</h3>

              <p>
                Some places have more researchers, institutions
                and monitoring activity than others.
                More records do not necessarily mean
                greater biodiversity.
              </p>
            </article>


            <article class="card">
              <h3>Record quality</h3>

              <p>
                Identification confidence, coordinates,
                dates and taxonomic names can affect
                whether an observation is suitable for analysis.
              </p>
            </article>


            <article class="card">
              <h3>Record licensing</h3>

              <p>
                Occurrence records may have different licenses.
                Reuse requirements must be checked at the
                individual record and dataset levels.
              </p>
            </article>

          </div>

        </div>
      </section>


      <!-- CONSERVATION -->
      <section class="section section-sm">
        <div class="container">

          <div class="story-section">

            <div class="story-visual">
              <img
                src="assets/images/nasa/congo-abandoned-road.jpg"
                alt="Abandoned road overgrown with regenerating vegetation in the Republic of Congo"
                loading="lazy"
              />
              <div class="visual-caption">
                Conservation requires ecological understanding,
                long-term evidence and local context.
              </div>
            </div>
            <div class="image-attribution" style="margin-top:12px;">
              <span>Image:</span>
              Building Roads in the Congo Rainforest · Nov 27, 2019 &middot;
              <span>Source:</span>
              <a
                href="https://science.nasa.gov/blogs/earth-matters/2019/11/27/building-roads-in-the-congo-rainforest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NASA Earth Observatory
              </a>
              &middot; NASA imagery is public domain. Credit: NASA.
            </div>

            <div class="story-copy">

              <span class="eyebrow">Conservation perspective</span>

              <h2>
                Protecting biodiversity means protecting
                ecological relationships.
              </h2>

              <p>
                Conservation is not limited to protecting
                individual species. It also involves habitats,
                ecological processes, landscape connectivity
                and the people who depend on these environments.
              </p>

              <p>
                Effective conservation decisions require
                evidence, local knowledge and an understanding
                of the pressures affecting each landscape.
              </p>

              <a class="text-link" href="#pressures">
                Explore environmental pressures
              </a>

            </div>

          </div>

        </div>
      </section>


      <section class="cta-section">
        <div class="container cta-inner">

          <div>
            <span class="eyebrow">Continue learning</span>

            <h2>
              Understand the pressures affecting these ecosystems.
            </h2>

            <p>
              Explore how human activities and environmental
              conditions can influence forest landscapes.
            </p>
          </div>

          <a class="btn btn-light" href="#pressures">
            Explore pressures
          </a>

        </div>
      </section>

    </div>
  `;
}

export function init() {
  // Species data visualisation is pending source integration.
}