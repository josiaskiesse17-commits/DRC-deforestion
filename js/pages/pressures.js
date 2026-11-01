import {
  pageIntro,
  sectionHeading,
  statusBadge,
  callout,
  featurePlaceholder,
} from "../components/placeholder.js";

import {
  DATA_SOURCES,
  getDataSource,
} from "../data/placeholders.js";

import {
  renderImageAttribution,
} from "../data/image-attribution.js";

const PRESSURE_IMAGES = {
  "01": "congo-agriculture-manioc.jpg",
  "02": "congo-agriculture-manioc.jpg",
  "03": "congo-road-construction.jpg",
  "04": "congo-logging-road.jpg",
  "05": "congo-road-construction.jpg",
  "06": "congo-agriculture-manioc.jpg",
};

const PRESSURE_IMAGE_KEYS = {
  "01": "congo-agriculture-manioc",
  "02": "congo-agriculture-manioc",
  "03": "congo-road-construction",
  "04": "congo-logging-road",
  "05": "congo-road-construction",
  "06": "congo-agriculture-manioc",
};

const PRESSURES = [
  {
    number: "01",
    title: "Agricultural expansion",
    description:
      "Agriculture can contribute to forest conversion when land is cleared for crops, pasture, or small-scale farming. The relationship between agricultural activity and forest loss varies across locations and farming systems.",
    mechanisms: [
      "Expansion of cultivated land",
      "Clearing for new agricultural plots",
      "Shifting cultivation and fallow cycles",
      "Commercial agricultural development",
    ],
    consideration:
      "Agricultural land use is not automatically evidence of deforestation. Land-use history, previous vegetation, farming practices, and the period being studied all matter.",
    status: "candidate",
  },
  {
    number: "02",
    title: "Charcoal and woodfuel",
    description:
      "Woodfuel remains an important source of household energy in many parts of the region. Demand for charcoal and firewood can create pressure on nearby woodland and forest resources, particularly around growing urban centres.",
    mechanisms: [
      "Wood harvesting for charcoal production",
      "Collection of firewood",
      "Commercial fuelwood supply chains",
      "Expansion of harvesting areas as accessible resources decline",
    ],
    consideration:
      "Wood harvesting can cause degradation without necessarily producing a complete loss of tree cover. A tree-cover-loss dataset alone cannot describe the full impact.",
    status: "candidate",
  },
  {
    number: "03",
    title: "Urban expansion",
    description:
      "Growing settlements require land for housing, services, roads, and other infrastructure. Where expansion reaches forested areas, it can contribute to permanent land conversion and fragmentation.",
    mechanisms: [
      "Expansion of residential areas",
      "New commercial and industrial zones",
      "Roads and associated development",
      "Conversion of land around growing settlements",
    ],
    consideration:
      "Population growth and urban expansion are not interchangeable measurements. Population estimates can help provide context, but they do not establish the cause of a particular forest change.",
    status: "candidate",
  },
  {
    number: "04",
    title: "Mining",
    description:
      "Mining activities can transform landscapes through excavation, access roads, settlements, and associated infrastructure. Their environmental footprint can extend beyond the extraction site.",
    mechanisms: [
      "Clearing for extraction sites",
      "Construction of access roads",
      "Development of processing and storage areas",
      "Associated settlement and infrastructure growth",
    ],
    consideration:
      "A mining location overlapping with forest change does not, by itself, prove that mining caused that change. Site-level evidence and temporal analysis are needed.",
    status: "candidate",
  },
  {
    number: "05",
    title: "Transport and infrastructure",
    description:
      "Roads, energy infrastructure, and other development projects can directly transform land. They may also improve access to previously remote areas, potentially changing patterns of settlement and resource extraction.",
    mechanisms: [
      "Road and transport corridor construction",
      "Energy and utility infrastructure",
      "Construction sites and associated land conversion",
      "Improved access to previously less accessible areas",
    ],
    consideration:
      "Infrastructure effects can be direct or indirect. Evaluating them requires more than measuring the distance between a forest-loss observation and a road.",
    status: "candidate",
  },
  {
    number: "06",
    title: "Population and resource demand",
    description:
      "Population distribution and demographic change can help explain where demand for land, food, energy, and infrastructure may increase. They are contextual factors, not direct measurements of environmental pressure.",
    mechanisms: [
      "Demand for agricultural land",
      "Demand for household energy",
      "Demand for housing and services",
      "Changing patterns of resource consumption",
    ],
    consideration:
      "WorldPop products are modelled population estimates. They should not be presented as direct census counts or used alone to attribute environmental change.",
    status: "limited",
  },
];

function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character] || character;
  });
}

function renderPressureCard(item) {
  const imageFile = PRESSURE_IMAGES[item.number];
  const imageKey = PRESSURE_IMAGE_KEYS[item.number];
  const imageHtml = imageFile
    ? `
      <div class="pressure-card-image">
        <img
          src="assets/images/nasa/${imageFile}"
          alt="${escapeHTML(item.title)}"
          loading="lazy"
        />
      </div>
      <div class="image-attribution" style="margin-top:8px;">
        <span>Image:</span>
        NASA Earth Observatory · Nov 27, 2019 &middot;
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
    `
    : '';

  return `
    <article class="pressure-card">
      <div class="pressure-card-top">
        <span class="pressure-number">${item.number}</span>
        ${statusBadge(item.status)}
      </div>

      <h3>${item.title}</h3>
      ${imageHtml}
      <p>${item.description}</p>

      <div class="pressure-mechanisms">
        <h4>Possible pathways</h4>
        <ul class="feature-list">
          ${item.mechanisms
            .map((mechanism) => `<li>${mechanism}</li>`)
            .join("")}
        </ul>
      </div>

      <div class="pressure-consideration">
        <strong>Interpretation</strong>
        <p>${item.consideration}</p>
      </div>
    </article>
  `;
}

export function render() {
  const worldPop = getDataSource("worldpop");

  return `
    ${pageIntro({
      eyebrow: "Human & environmental pressures",
      title: "Understanding the pressures on forests",
      description:
        "Forest change is rarely explained by a single factor. Land use, energy needs, settlement growth, economic activity, and infrastructure can interact in different ways across the Democratic Republic of the Congo and the wider Congo Basin.",
    })}

    <section class="section">
      <div class="container">
        <div class="section-heading-row">
          <div>
            <span class="eyebrow">The drivers</span>
            <h2>Six areas to investigate</h2>
            <p class="section-lead">
              These are potential pressure pathways, not a measured ranking
              of causes or their contribution to forest loss.
            </p>
          </div>
        </div>

        <div class="pressure-grid">
          ${PRESSURES.map(renderPressureCard).join("")}
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container split-layout">
        <div>
          <span class="eyebrow">A connected system</span>
          <h2>Pressures can reinforce one another</h2>
          <p>
            A new road may improve access to a remote area. That access may
            support settlement, commercial activity, agricultural expansion,
            or resource extraction. These activities can create additional
            demand for land and infrastructure.
          </p>
          <p>
            This is an example of a possible interaction, not proof that the
            same sequence occurs in every location.
          </p>
        </div>

        <div class="interaction-panel">
          <div class="interaction-step">
            <span>01</span>
            <div>
              <strong>Access and infrastructure</strong>
              <p>Changes in physical accessibility.</p>
            </div>
          </div>

          <div class="interaction-connector"></div>

          <div class="interaction-step">
            <span>02</span>
            <div>
              <strong>Economic and settlement activity</strong>
              <p>Changes in land use and resource demand.</p>
            </div>
          </div>

          <div class="interaction-connector"></div>

          <div class="interaction-step">
            <span>03</span>
            <div>
              <strong>Environmental change</strong>
              <p>Potential conversion, fragmentation, or degradation.</p>
            </div>
          </div>

          <p class="small muted interaction-note">
            Conceptual relationship. Actual pathways require location-specific
            evidence.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeading({
          eyebrow: "Evidence and interpretation",
          title: "What would it take to identify a driver?",
          description:
            "A credible assessment needs several kinds of evidence rather than a single map layer or statistical correlation.",
        })}

        <div class="evidence-grid">
          <article class="evidence-item">
            <span class="evidence-index">A</span>
            <h3>Observe the change</h3>
            <p>
              Identify where and when forest-cover or land-use change
              occurred, using a clearly defined dataset and period.
            </p>
          </article>

          <article class="evidence-item">
            <span class="evidence-index">B</span>
            <h3>Examine the context</h3>
            <p>
              Compare relevant information about agriculture, roads,
              settlements, mining, or other activities.
            </p>
          </article>

          <article class="evidence-item">
            <span class="evidence-index">C</span>
            <h3>Test the relationship</h3>
            <p>
              Investigate timing, spatial patterns, alternative explanations,
              and the limitations of the available evidence.
            </p>
          </article>
        </div>

        ${callout({
          type: "warning",
          title: "Correlation is not causation",
          message:
            "Two activities occurring in the same area does not establish that one caused the other. Causal claims require appropriate methods, temporal evidence, and consideration of alternative explanations.",
        })}
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        ${sectionHeading({
          eyebrow: "Potential supporting data",
          title: "Context is useful, but it has limits",
          description:
            "The following sources are candidates for future analysis. They are not currently integrated into this page.",
        })}

        <div class="source-highlight-grid">
          <article class="source-highlight">
            <h3>Population distribution</h3>
            <p>
              ${worldPop?.description ??
              "WorldPop provides modelled population datasets that may help contextualise settlement and resource demand."}
            </p>
            ${statusBadge("limited")}
            <p class="small muted">
              Population estimates do not establish the cause of forest change.
            </p>
          </article>

          <article class="source-highlight">
            <h3>Forest-cover change</h3>
            <p>
              Satellite-derived tree-cover change products may help identify
              where changes occurred. They do not automatically explain why
              those changes happened.
            </p>
            ${statusBadge("candidate")}
          </article>

          <article class="source-highlight">
            <h3>Mining and infrastructure</h3>
            <p>
              Reliable, appropriately licensed and time-relevant spatial
              information is needed before these activities can be compared
              with observed environmental change.
            </p>
            ${statusBadge("deferred")}
          </article>
        </div>

        <div class="section-actions">
          <a class="btn btn-primary" href="#data-methodology">
            Explore data and methodology
          </a>
          <a class="text-link" href="#forest-intelligence">
            Explore forest intelligence
          </a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cta-panel">
          <div>
            <span class="eyebrow">Beyond the numbers</span>
            <h2>Understanding pressure is the first step toward better decisions.</h2>
            <p>
              Explore the environmental context, learn how to interpret
              evidence, and discover practical ways to support forest
              conservation.
            </p>
          </div>
          <a class="btn btn-primary" href="#learn-act">Learn and take action</a>
        </div>
      </div>
    </section>
  `;
}

export function init() {
  // No interactive data visualisation is currently implemented.
}