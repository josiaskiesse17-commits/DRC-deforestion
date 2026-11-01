import {
  pageIntro,
  sectionHeading,
  callout,
} from "../components/placeholder.js";

const LEARNING_TOPICS = [
  {
    number: "01",
    title: "Understand forest ecosystems",
    description:
      "Forests are living systems. They support biodiversity, regulate parts of the water cycle, store carbon, influence local and regional climates, and provide resources and livelihoods.",
    details: [
      "Different forest types have different ecological characteristics.",
      "Forest condition involves more than the presence or absence of trees.",
      "Biodiversity, ecosystem structure, and ecological processes all matter.",
    ],
  },
  {
    number: "02",
    title: "Understand why forests change",
    description:
      "Forest change can result from interacting environmental and human processes. The same activity can have different consequences depending on location, intensity, duration, and management.",
    details: [
      "Agricultural conversion can replace forest with another land use.",
      "Selective harvesting can alter forest condition without clearing all trees.",
      "Fire, infrastructure, and extraction activities require context-specific assessment.",
    ],
  },
  {
    number: "03",
    title: "Understand the consequences",
    description:
      "Environmental change can affect ecological systems and the people who depend on them. Consequences vary with the type and scale of disturbance.",
    details: [
      "Habitat loss and fragmentation can affect species and ecological connectivity.",
      "Changes in vegetation can influence carbon storage and local environmental conditions.",
      "Soil and water systems can be affected by changes in land cover and land management.",
      "Communities can face consequences for livelihoods and access to natural resources.",
    ],
  },
  {
    number: "04",
    title: "Understand the solutions",
    description:
      "There is no single intervention that addresses every source of forest pressure. Effective responses need to reflect local conditions, community priorities, economic realities, and ecological evidence.",
    details: [
      "Support sustainable agricultural practices and land-use planning.",
      "Improve access to reliable and sustainable household energy.",
      "Strengthen responsible resource management and environmental oversight.",
      "Support conservation initiatives that involve local communities.",
    ],
  },
];

const ACTION_AREAS = [
  {
    title: "Learn before sharing",
    description:
      "Check the source, date, geographic coverage, and methodology behind environmental claims. Avoid sharing dramatic figures without understanding what they measure.",
    actions: [
      "Read the original source when possible.",
      "Check whether a figure describes forest area, tree-cover loss, or another indicator.",
      "Look for the time period and geographic definition.",
    ],
  },
  {
    title: "Support informed local initiatives",
    description:
      "Environmental solutions are more effective when they account for the needs and knowledge of the people living in affected landscapes.",
    actions: [
      "Learn about conservation organisations working in the region.",
      "Look for community-led and locally accountable initiatives.",
      "Evaluate claims about project impact before promoting them.",
    ],
  },
  {
    title: "Make responsible everyday choices",
    description:
      "Consumption choices can be part of broader efforts to reduce pressure on natural resources. Their impact depends on supply chains, local alternatives, and the choices actually available.",
    actions: [
      "Learn about the origins of products where information is available.",
      "Avoid wasting resources where practical.",
      "Support credible efforts toward responsible production and sourcing.",
    ],
  },
  {
    title: "Contribute knowledge responsibly",
    description:
      "Useful environmental information can come from research, observation, education, and community participation. It should be documented carefully and should not expose people or sensitive locations to harm.",
    actions: [
      "Use reputable datasets and clearly identify their limitations.",
      "Document the date and location of observations appropriately.",
      "Respect community consent and sensitive ecological information.",
    ],
  },
];

const GLOSSARY = [
  {
    term: "Forest area",
    definition:
      "An area classified as forest under a stated definition and measurement method. Definitions can differ between organisations and datasets.",
  },
  {
    term: "Tree cover",
    definition:
      "The proportion of ground covered by the vertical projection of tree crowns, according to a specified threshold and methodology.",
  },
  {
    term: "Tree-cover loss",
    definition:
      "A detected reduction or removal of tree cover within a dataset's defined observation period. It is not automatically equivalent to permanent deforestation.",
  },
  {
    term: "Deforestation",
    definition:
      "The conversion of forest to another land use, as defined by the relevant methodology. Temporary canopy disturbance and permanent conversion should not be treated as identical.",
  },
  {
    term: "Forest degradation",
    definition:
      "A decline in forest condition or ecological quality that does not necessarily result in complete forest conversion.",
  },
  {
    term: "Fragmentation",
    definition:
      "The division of continuous habitat into smaller or more isolated patches, potentially affecting ecological connectivity.",
  },
];

function renderLearningTopic(topic) {
  return `
    <article class="learning-topic">
      <span class="learning-number">${topic.number}</span>
      <div>
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
        <ul class="feature-list">
          ${topic.details.map((detail) => `<li>${detail}</li>`).join("")}
        </ul>
      </div>
    </article>
  `;
}

function renderActionArea(area, index) {
  return `
    <article class="action-card">
      <span class="action-index">${String(index + 1).padStart(2, "0")}</span>
      <h3>${area.title}</h3>
      <p>${area.description}</p>
      <h4>What you can do</h4>
      <ul class="feature-list">
        ${area.actions.map((action) => `<li>${action}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderGlossaryItem(item) {
  return `
    <article class="glossary-item">
      <h3>${item.term}</h3>
      <p>${item.definition}</p>
    </article>
  `;
}

export function render() {
  return `
    ${pageIntro({
      eyebrow: "Knowledge and action",
      title: "A better understanding leads to better action",
      description:
        "The Congo Basin's forests are connected to biodiversity, climate, water, economies, and communities. Understanding these relationships helps us move beyond simplified explanations and toward more informed decisions.",
    })}

    <section class="section">
      <div class="container">
        ${sectionHeading({
          eyebrow: "Build your understanding",
          title: "Four foundations of forest knowledge",
          description:
            "Start with the ecosystem, understand the pressures, examine the consequences, and consider responses.",
        })}

        <div class="learning-timeline">
          ${LEARNING_TOPICS.map(renderLearningTopic).join("")}
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        ${sectionHeading({
          eyebrow: "From knowledge to action",
          title: "Practical ways to contribute",
          description:
            "Meaningful action does not always require a large organisation or a technical background. It starts with informed choices and responsible participation.",
        })}

        <div class="action-grid">
          ${ACTION_AREAS.map(renderActionArea).join("")}
        </div>

        ${callout({
          type: "info",
          title: "Context matters",
          message:
            "These actions are general starting points, not a substitute for locally informed conservation programmes or public policy. Their relevance and impact depend on the circumstances in which they are applied.",
        })}
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeading({
          eyebrow: "Essential vocabulary",
          title: "Learn to read environmental information",
          description:
            "Some commonly used terms describe different things. Understanding the distinction helps prevent misleading comparisons.",
        })}

        <div class="glossary-grid">
          ${GLOSSARY.map(renderGlossaryItem).join("")}
        </div>

        <div class="section-actions">
          <a class="btn btn-primary" href="#data-methodology">
            Read data definitions and limitations
          </a>
          <a class="text-link" href="#forest-intelligence">
            Explore forest indicators
          </a>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container closing-message">
        <span class="eyebrow">The bigger picture</span>
        <h2>Protecting forests requires knowledge, cooperation, and long-term commitment.</h2>
        <p>
          The Congo Basin is not simply a collection of trees or a set of
          statistics. It is a complex living landscape shaped by ecological
          processes and the people who depend on it.
        </p>
        <a class="btn btn-light" href="#explore">Continue exploring</a>
      </div>
    </section>
  `;
}

export function init() {
  // Glossary and learning content are static and require no initialisation.
}