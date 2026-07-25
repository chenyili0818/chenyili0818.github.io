import type { Metadata } from "next";

const links = {
  scholar: "https://scholar.google.com/citations?user=VsPS8-cAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0003-0082-0260",
  github: "https://github.com/chenyili0818",
  email: "mailto:lichenyi@stu.pku.edu.cn",
  cv: "/cv/chenyi-li-cv.pdf",
};

const publications = [
  {
    year: "2026",
    venue: "ICML",
    title:
      "SetPO: Set-Level Policy Optimization for Diversity-Preserving LLM Reasoning",
    authors:
      "Chenyi Li*, Yuan Zhang*, Bo Wang, Guoqing Ma, Wei Tang, Haoyang Huang, Nan Duan",
    note: "Project lead · Equal contribution",
    links: [
      ["arXiv", "https://arxiv.org/abs/2602.01062"],
      ["OpenReview", "https://openreview.net/forum?id=tYKGzVE1g7"],
    ],
  },
  {
    year: "2026",
    venue: "ICML",
    title:
      "OptProver: Bridging Olympiad and Optimization through Continual Training in Formal Theorem Proving",
    authors:
      "Chenyi Li, Yanchen Nie, Zhenyu Ming, Gong Zhang, Kun Yuan, Zaiwen Wen",
    note: "",
    links: [
      ["arXiv", "https://arxiv.org/abs/2604.23712"],
      ["OpenReview", "https://openreview.net/forum?id=mkHp4ZW01l"],
    ],
  },
  {
    year: "2026",
    venue: "AAAI",
    title:
      "SITA: A Framework for Structure-to-Instance Theorem Autoformalization",
    authors: "Chenyi Li, Wanli Ma, Zichen Wang, Zaiwen Wen",
    note: "",
    links: [
      ["Paper", "https://doi.org/10.1609/aaai.v40i23.38997"],
      ["Code", "https://github.com/chenyili0818/SITA"],
    ],
  },
  {
    year: "2026",
    venue: "SCM",
    title: "Formalization of Algorithms for Optimization with Block Structures",
    authors:
      "Chenyi Li, Zichen Wang, Yifan Bai, Yunxi Duan, Yuqing Gao, Pengfei Hao, Zaiwen Wen",
    note: "Science China Mathematics",
    links: [
      ["arXiv", "https://arxiv.org/abs/2503.18806"],
      ["Paper", "https://doi.org/10.1007/s11425-025-2516-2"],
    ],
  },
  {
    year: "2026",
    venue: "Preprint",
    title:
      "Teacher-Feature Drifting: One-Step Diffusion Distillation with Pretrained Diffusion Representations",
    authors:
      "Yuan Zhang*, Chenyi Li*, Guoqing Ma, Jiacheng Zha, Yifan Yang, Bo Wang, et al.",
    note: "Equal contribution",
    links: [["arXiv", "https://arxiv.org/abs/2605.07327"]],
  },
  {
    year: "2026",
    venue: "Preprint",
    title: "CAM-Bench: A Benchmark for Computational and Applied Mathematics in Lean",
    authors:
      "Wenhao Long, Yuan Zhang, Chenyi Li (Project Lead), Liangqi Zhou, Chenyang Sun, Zaiwen Wen",
    note: "",
    links: [["arXiv", "https://arxiv.org/abs/2605.17255"]],
  },
  {
    year: "2026",
    venue: "Preprint",
    title: "Construction-Verification: A Benchmark for Applied Mathematics in Lean 4",
    authors:
      "Bowen Yang, Yi Yuan, Chenyi Li, Ziyu Wang, Liangqi Li, Bo Zhang, Zhe Li, Zaiwen Wen",
    note: "",
    links: [["arXiv", "https://arxiv.org/abs/2602.01291"]],
  },
  {
    year: "2025",
    venue: "JAR",
    title:
      "Formalization of Convergence Rates of Four First-order Algorithms for Convex Optimization",
    authors:
      "Chenyi Li, Ziyu Wang, Wanyi He, Yuxuan Wu, Shengyang Xu, Zaiwen Wen",
    note: "Journal of Automated Reasoning 69(4):28",
    links: [
      ["arXiv", "https://arxiv.org/abs/2403.11437"],
      ["Paper", "https://doi.org/10.1007/s10817-025-09741-w"],
    ],
  },
  {
    year: "2025",
    venue: "Preprint",
    title:
      "Formalization of Optimality Conditions for Smooth Constrained Optimization Problems",
    authors: "Chenyi Li, Shengyang Xu, Chenyang Sun, Liangqi Zhou, Zaiwen Wen",
    note: "",
    links: [["arXiv", "https://arxiv.org/abs/2503.18821"]],
  },
  {
    year: "2025",
    venue: "Preprint",
    title: "Accelerated Natural Gradient Method for Parametric Manifold Optimization",
    authors: "Chenyi Li, Shuchen Zhu, Zhonglin Xie, Zaiwen Wen",
    note: "",
    links: [["arXiv", "https://arxiv.org/abs/2504.05753"]],
  },
];

export const metadata: Metadata = {
  title: "Chenyi Li — Researcher in AI Reasoning & Formal Theorem Proving",
  description:
    "Chenyi Li is a Ph.D. student at Peking University working on LLM reasoning, formal theorem proving, optimization, and generative modeling.",
};

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target={href.startsWith("mailto:") || href.startsWith("/") ? undefined : "_blank"}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chenyi Li",
    alternateName: "李晨毅",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Peking University",
    },
    email: "lichenyi@stu.pku.edu.cn",
    sameAs: [links.scholar, links.orcid, links.github],
    knowsAbout: [
      "Large language model reasoning",
      "Formal theorem proving",
      "Lean 4",
      "Optimization",
      "Generative modeling",
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Chenyi Li, back to top">
          CL<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#about">About</a>
        </nav>
        <ExternalLink href={links.email} className="header-contact">
          Contact <span aria-hidden="true">↗</span>
        </ExternalLink>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Ph.D. Student · Peking University</p>
          <h1>
            Chenyi Li
            <span>李晨毅</span>
          </h1>
          <p className="hero-statement">
            I build AI systems that
            <em> reason broadly,</em>
            <em> prove reliably,</em> and
            <em> generate efficiently.</em>
          </p>
          <p className="hero-intro">
            My research connects reinforcement learning, verifier-guided training,
            formal systems, and generative modeling—with a focus on Lean-based theorem
            proving and applied mathematics.
          </p>
          <div className="hero-actions" aria-label="Profile links">
            <ExternalLink href={links.scholar}>Google Scholar ↗</ExternalLink>
            <ExternalLink href={links.orcid}>ORCID ↗</ExternalLink>
            <ExternalLink href={links.github}>GitHub ↗</ExternalLink>
            <ExternalLink href={links.cv}>CV ↓</ExternalLink>
          </div>
        </div>

        <aside className="portrait-panel" aria-label="Profile">
          <div className="portrait-frame">
            <img
              src="/profile/chenyi-li-scholar.jpg"
              alt="Chenyi Li"
              width="414"
              height="512"
            />
            <span className="portrait-index">PKU · 01</span>
          </div>
          <div className="portrait-meta">
            <span>School of Mathematical Sciences</span>
            <span>Beijing, China</span>
          </div>
        </aside>

        <div className="hero-foot">
          <span>Current focus</span>
          <span>LLM Reasoning</span>
          <span>Formal Theorem Proving</span>
          <span>Efficient Generation</span>
        </div>
      </section>

      <section className="research-map" aria-labelledby="research-map-title">
        <div className="section-kicker">
          <span>Research map</span>
          <span>Three connected directions</span>
        </div>
        <h2 id="research-map-title" className="visually-hidden">
          Research directions
        </h2>
        <div className="research-axis">
          <article>
            <span>01</span>
            <h3>Reasoning</h3>
            <p>
              Diversity-preserving RL and verifier-guided post-training for language
              models.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Proving</h3>
            <p>
              Lean-based theorem provers, autoformalization, and verified applied
              mathematics.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Generating</h3>
            <p>
              Efficient diffusion and flow models, with an emphasis on one-step
              distillation.
            </p>
          </article>
        </div>
      </section>

      <section className="selected-work" id="research" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">Selected work · 2025—2026</p>
            <h2 id="work-title">Research in focus</h2>
          </div>
          <p>
            From preserving diversity in model reasoning to verifying optimization
            proofs in Lean.
          </p>
        </div>

        <article className="feature feature-lead">
          <div className="feature-image">
            <img
              src="/research/setpo.webp"
              alt="SetPO trajectory embeddings compared with GRPO, showing preserved modes"
              width="1505"
              height="700"
            />
          </div>
          <div className="feature-copy">
            <div className="feature-meta">
              <span>ICML 2026</span>
              <span>01 / Reasoning</span>
            </div>
            <h3>SetPO</h3>
            <p className="feature-title">
              Set-Level Policy Optimization for Diversity-Preserving LLM Reasoning
            </p>
            <p>
              A set-level reinforcement learning objective that rewards the marginal
              diversity of sampled trajectories—improving both Pass@1 and Pass@K while
              resisting mode collapse.
            </p>
            <div className="paper-links">
              <ExternalLink href="https://arxiv.org/abs/2602.01062">
                arXiv ↗
              </ExternalLink>
              <ExternalLink href="https://openreview.net/forum?id=tYKGzVE1g7">
                OpenReview ↗
              </ExternalLink>
            </div>
          </div>
        </article>

        <div className="feature-grid">
          <article className="feature feature-compact feature-purple">
            <div className="feature-image">
              <img
                src="/research/optprover.webp"
                alt="OptBench performance under naive supervised fine-tuning"
                width="935"
                height="645"
              />
            </div>
            <div className="feature-copy">
              <div className="feature-meta">
                <span>ICML 2026</span>
                <span>02 / Proving</span>
              </div>
              <h3>OptProver</h3>
              <p className="feature-title">
                Bridging Olympiad and Optimization through Continual Training
              </p>
              <p>
                Continual training, expert data curation, and utility-aware preference
                learning for a specialized Lean optimization prover.
              </p>
              <div className="paper-links">
                <ExternalLink href="https://arxiv.org/abs/2604.23712">
                  arXiv ↗
                </ExternalLink>
                <ExternalLink href="https://openreview.net/forum?id=mkHp4ZW01l">
                  OpenReview ↗
                </ExternalLink>
              </div>
            </div>
          </article>

          <article className="feature feature-compact feature-blue">
            <div className="feature-image">
              <img
                src="/research/sita.webp"
                alt="SITA structure-to-instance theorem autoformalization pipeline"
                width="1530"
                height="960"
              />
            </div>
            <div className="feature-copy">
              <div className="feature-meta">
                <span>AAAI 2026</span>
                <span>02 / Proving</span>
              </div>
              <h3>SITA</h3>
              <p className="feature-title">
                Structure-to-Instance Theorem Autoformalization
              </p>
              <p>
                An end-to-end agentic workflow that turns abstract mathematical
                structures into reusable, verified concrete theorems.
              </p>
              <div className="paper-links">
                <ExternalLink href="https://arxiv.org/abs/2511.10356">
                  arXiv ↗
                </ExternalLink>
                <ExternalLink href="https://github.com/chenyili0818/SITA">
                  Code ↗
                </ExternalLink>
              </div>
            </div>
          </article>
        </div>

        <article className="formal-series">
          <div className="formal-visual">
            <img
              src="/research/formalization.webp"
              alt="Dependency blueprint for formalized convex optimization results in Lean"
              width="1600"
              height="873"
            />
          </div>
          <div className="formal-copy">
            <div className="feature-meta">
              <span>JAR · SCM · Lean 4</span>
              <span>Formalization series</span>
            </div>
            <h3>Optimization, machine-checked.</h3>
            <p>
              A growing formal library for applied optimization: convergence rates of
              first-order methods, block-structured algorithms, and optimality
              conditions for constrained problems.
            </p>
            <ul>
              <li>
                <span>01</span>
                Four first-order algorithms for convex optimization
              </li>
              <li>
                <span>02</span>
                BCD and ADMM for block-structured optimization
              </li>
              <li>
                <span>03</span>
                Optimality conditions for smooth constrained problems
              </li>
            </ul>
            <ExternalLink href={links.scholar} className="inline-cta">
              Explore the series on Scholar ↗
            </ExternalLink>
          </div>
        </article>
      </section>

      <section className="publications" id="publications" aria-labelledby="pub-title">
        <div className="publication-heading">
          <div>
            <p className="eyebrow">Research output</p>
            <h2 id="pub-title">Selected publications</h2>
          </div>
          <ExternalLink href={links.scholar}>Complete profile ↗</ExternalLink>
        </div>
        <div className="publication-list">
          {publications.map((publication, index) => (
            <article className="publication" key={publication.title}>
              <div className="publication-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="publication-main">
                <div className="publication-tags">
                  <span>{publication.year}</span>
                  <span>{publication.venue}</span>
                </div>
                <h3>{publication.title}</h3>
                <p>{publication.authors}</p>
                {publication.note ? (
                  <span className="publication-note">{publication.note}</span>
                ) : null}
              </div>
              <div className="publication-links">
                {publication.links.map(([label, href]) => (
                  <ExternalLink href={href} key={href}>
                    {label} ↗
                  </ExternalLink>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="about-intro">
          <p className="eyebrow dark">Background</p>
          <h2 id="about-title">Mathematics as a foundation for reliable AI.</h2>
          <p>
            I am a Ph.D. student in Computational Mathematics at Peking University,
            advised by Prof. Zaiwen Wen. My broader goal is to bring strong reasoning,
            reliable verification, and efficient generation into the same AI system.
          </p>
        </div>

        <div className="timeline">
          <article>
            <span className="timeline-date">2024—Present</span>
            <div>
              <h3>Ph.D. in Computational Mathematics</h3>
              <p>School of Mathematical Sciences, Peking University</p>
              <ul>
                <li>Advisor: Prof. Zaiwen Wen</li>
                <li>
                  Selected for PKU&apos;s 2024 Ph.D. Excellence Program in
                  Computational Mathematics
                </li>
              </ul>
            </div>
          </article>
          <article>
            <span className="timeline-date">2020—2024</span>
            <div>
              <h3>B.S. in Information and Computing Science</h3>
              <p>School of Mathematical Sciences, Peking University</p>
              <ul>
                <li>GPA 3.836 / 4.0 · Rank 2 / 46</li>
                <li>Peking University Weiming Bachelor&apos;s Honor</li>
                <li>Beijing Municipal Outstanding Graduate</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="service-row">
          <div>
            <span>Open source</span>
            <p>
              Contributor to Mathlib4, including formal definitions related to
              gradients and strongly convex functions.
            </p>
          </div>
          <div>
            <span>Tools</span>
            <p>Python · PyTorch · Lean 4 · Mathlib4 · veRL · Hugging Face</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <p>Have a theorem, model, or idea worth testing?</p>
          <ExternalLink href={links.email}>Let&apos;s talk ↗</ExternalLink>
        </div>
        <div className="footer-meta">
          <span>© 2026 Chenyi Li</span>
          <div>
            <ExternalLink href={links.scholar}>Scholar</ExternalLink>
            <ExternalLink href={links.orcid}>ORCID</ExternalLink>
            <ExternalLink href={links.github}>GitHub</ExternalLink>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
