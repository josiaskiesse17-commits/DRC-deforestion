/*
 * DRC-deforestation
 * Learn & Act
 *
 * Educational explainers, conservation responses, sustainable alternatives,
 * and practical actions. No unverified statistics are presented as facts.
 */

import {
  pageIntro,
  sectionHeading,
  callout,
} from '../components/placeholder.js';

import {
  renderImageAttribution,
} from '../data/image-attribution.js';

export function render() {
  return `
    <div class="page">

      ${pageIntro({
        eyebrow: 'Knowledge and action',
        title: 'A better understanding leads to better action',
        description:
          'The Congo Basin&rsquo;s forests are connected to biodiversity, climate, water, economies, and communities. Understanding these relationships helps us move beyond simplified explanations and toward more informed decisions.',
      })}

      <!-- BUILD UNDERSTANDING -->
      <section class="section">
        <div class="container">
          ${sectionHeading({
            eyebrow: 'Build your understanding',
            title: 'Four foundations of forest knowledge',
            description:
              'Start with the ecosystem, understand the pressures, examine the consequences, and consider responses.',
          })}

          <div class="content-grid grid-3">
            <article class="card card-hover">
              <span class="card-number">01</span>
              <span class="kicker">Ecosystems</span>
              <h3>Understand forest ecosystems</h3>
              <p>
                Forests are living systems. They support biodiversity,
                regulate parts of the water cycle, store carbon, influence
                local and regional climates, and provide resources and
                livelihoods.
              </p>
            </article>

            <article class="card card-hover">
              <span class="card-number">02</span>
              <span class="kicker">Change</span>
              <h3>Understand why forests change</h3>
              <p>
                Forest change can result from interacting environmental and
                human processes. The same activity can have different
                consequences depending on location, intensity, duration, and
                management.
              </p>
            </article>

            <article class="card card-hover">
              <span class="card-number">03</span>
              <span class="kicker">Effects</span>
              <h3>Understand the consequences</h3>
              <p>
                Environmental change can affect ecological systems and the
                people who depend on them. Consequences vary with the type
                and scale of disturbance.
              </p>
            </article>

            <article class="card card-hover">
              <span class="card-number">04</span>
              <span class="kicker">Responses</span>
              <h3>Understand the solutions</h3>
              <p>
                There is no single intervention that addresses every source
                of forest pressure. Effective responses need to reflect
                local conditions, community priorities, economic realities,
                and ecological evidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- TAKE ACTION -->
      <section class="section section-soft">
        <div class="container">
          ${sectionHeading({
            eyebrow: 'From knowledge to action',
            title: 'Practical ways to contribute',
            description:
              'Meaningful action does not always require a large organisation or a technical background. It starts with informed choices and responsible participation.',
          })}

          <div class="content-grid grid-3">
            <article class="card card-hover">
              <span class="card-number">01</span>
              <span class="kicker">Learn first</span>
              <h3>Learn before sharing</h3>
              <p>
                Check the source, date, geographic coverage, and methodology
                behind environmental claims. Avoid sharing dramatic figures
                without understanding what they measure.
              </p>
            </article>

            <article class="card card-hover">
              <span class="card-number">02</span>
              <span class="kicker">Support local</span>
              <h3>Support informed local initiatives</h3>
              <p>
                Environmental solutions are more effective when they account
                for the needs and knowledge of the people living in affected
                landscapes.
              </p>
            </article>

            <article class="card card-hover">
              <span class="card-number">03</span>
              <span class="kicker">Consume</span>
              <h3>Make responsible everyday choices</h3>
              <p>
                Consumption choices can be part of broader efforts to reduce
                pressure on natural resources. Their impact depends on supply
                chains, local alternatives, and the choices actually
                available.
              </p>
            </article>

            <article class="card card-hover">
              <span class="card-number">04</span>
              <span class="kicker">Contribute</span>
              <h3>Contribute knowledge responsibly</h3>
              <p>
                Useful environmental information can come from research,
                observation, education, and community participation. It
                should be documented carefully and should not expose people
                or sensitive locations to harm.
              </p>
            </article>
          </div>

          <div class="mt-4">
            ${callout({
              type: 'info',
              title: 'Context matters',
              message:
                'These actions are general starting points, not a substitute for locally informed conservation programmes or public policy. Their relevance and impact depend on the circumstances in which they are applied.',
            })}
          </div>
        </div>
      </section>

      <!-- GLOSSARY -->
      <section class="section">
        <div class="container">
          ${sectionHeading({
            eyebrow: 'Essential vocabulary',
            title: 'Learn to read environmental information',
            description:
              'Some commonly used terms describe different things. Understanding the distinction helps prevent misleading comparisons.',
          })}

          <div class="definition-list">
            <div class="definition-item">
              <h3>Forest area</h3>
              <p>
                An area classified as forest under a stated definition and
                measurement method. Definitions can differ between
                organisations and datasets.
              </p>
            </div>

            <div class="definition-item">
              <h3>Tree cover</h3>
              <p>
                The proportion of ground covered by the vertical projection
                of tree crowns, according to a specified threshold and
                methodology.
              </p>
            </div>

            <div class="definition-item">
              <h3>Tree-cover loss</h3>
              <p>
                A detected reduction or removal of tree cover within a
                dataset&rsquo;s defined observation period. It is not
                automatically equivalent to permanent deforestation.
              </p>
            </div>

            <div class="definition-item">
              <h3>Deforestation</h3>
              <p>
                The conversion of forest to another land use, as defined by
                the relevant methodology. Temporary canopy disturbance and
                permanent conversion should not be treated as identical.
              </p>
            </div>

            <div class="definition-item">
              <h3>Forest degradation</h3>
              <p>
                A decline in forest condition or ecological quality that does
                not necessarily result in complete forest conversion.
              </p>
            </div>

            <div class="definition-item">
              <h3>Fragmentation</h3>
              <p>
                The division of continuous habitat into smaller or more
                isolated patches, potentially affecting ecological
                connectivity.
              </p>
            </div>
          </div>

          <div class="section-actions">
            <a class="btn btn-light" href="#data-methodology">
              Read data definitions and limitations
            </a>
            <a class="text-link" href="#forest-intelligence">
              Explore forest indicators
            </a>
          </div>
        </div>
      </section>

      <!-- CLOSING -->
      <section class="cta-section">
        <div class="container cta-inner">
          <div class="image-feature" style="min-height:300px; flex-shrink:0;">
            <img
              src="assets/images/nasa/congo-abandoned-road.jpg"
              alt="Abandoned road overgrown with regenerating vegetation, showing forest recovery in the Republic of Congo"
              loading="lazy"
              style="width:100%; height:100%; object-fit:cover;"
            />
            <div class="visual-caption" style="position:static; padding:16px; background:rgba(16, 44, 37, 0.85); border:none; margin:0;">
              Forest regeneration on an abandoned road shows how ecosystems
              can recover when pressures are reduced.
            </div>
          </div>
          <div class="image-attribution" style="margin-top:12px; margin-bottom:24px;">
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
          <div>
            <span class="eyebrow">The bigger picture</span>
            <h2>
              Protecting forests requires knowledge, cooperation, and
              long-term commitment.
            </h2>
            <p>
              The Congo Basin is not simply a collection of trees or a set of
              statistics. It is a complex living landscape shaped by
              ecological processes and the people who depend on it.
            </p>
          </div>
          <a class="btn btn-light" href="#explore">Continue exploring</a>
        </div>
      </section>

    </div>
  `;
}

export function init() {
  // Glossary and learning content are static and require no initialisation.
}
