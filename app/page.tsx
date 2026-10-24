import type { Metadata } from "next";

const profileLinks = {
  email: "mailto:lichenyi@stu.pku.edu.cn",
  scholar: "https://scholar.google.com/citations?user=VsPS8-cAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0003-0082-0260",
  github: "https://github.com/chenyili0818",
};

const programLinks = {
  undergraduate: "https://dics.pku.edu.cn/en/education/theeliteundergraduateprogram/index.htm",
  phd: "https://dics.pku.edu.cn/en/education/theeliteprogramofcomputationalandappliedmathematicsforphdcandidates/index.htm",
};

const selectedPublications = [
  {
    category: "reasoning",
    image: "/research/optprover.webp",
    imageAlt: "OptBench accuracy comparison under different continual-training settings, with Pass@1 and Pass@32 results",
    figureCrop: { x: 36, y: 26, width: 865, height: 514, sourceWidth: 935 },
    title:
      "OptProver: Bridging Olympiad and Optimization through Continual Training in Formal Theorem Proving",
    authors:
      "Chenyi Li*, Yanchen Nie*, Zhenyu Ming, Gong Zhang, Kun Yuan, Zaiwen Wen",
    publication: "The 43rd International Conference on Machine Learning, 2026",
    links: [
      ["arXiv", "https://arxiv.org/abs/2604.23712"],
      ["Paper", "https://arxiv.org/paper/2604.23712"],
      ["Code", "https://github.com/chenyili0818/OptProver"]
    ],
  },
  {
    category: "reasoning",
    image: "/research/setpo-trajectories.png",
    imageAlt: "GRPO and SetPO trajectory embeddings during training, with a shared training-step color scale",
    comparisonPanels: [
      { label: "GRPO", x: 52, y: 132, width: 721, height: 721, sourceWidth: 2097 },
      { label: "SetPO", x: 1008, y: 132, width: 721, height: 721, sourceWidth: 2097 },
    ],
    comparisonLegend: { x: 1834, y: 182, width: 263, height: 590, sourceWidth: 2097 },
    title:
      "SetPO: Set-Level Policy Optimization for Diversity-Preserving LLM Reasoning",
    authors:
      "Chenyi Li*, Yuan Zhang*, Bo Wang, Guoqing Ma, Wei Tang, Haoyang Huang, Nan Duan",
    publication: "The 43rd International Conference on Machine Learning, 2026",
    links: [
      ["arXiv", "https://arxiv.org/abs/2602.01062"],
      ["Paper", "https://arxiv.org/paper/2602.01062"],
      ["Code", "https://github.com/chenyili0818/SetPO"]
    ],
  },
  {
    category: "reasoning",
    image: "/research/cam-bench.png",
    imageClass: "is-contained",
    title:
      "CAM-Bench: A Benchmark for Computational and Applied Mathematics in Lean",
    authors: "Wentao Long, Yunfei Zhang, Chenyi Li, Li Zhou, Chumin Sun, Zaiwen Wen",
    publication: "arXiv preprint, 2026",
    links: [
      ["arXiv", "https://arxiv.org/abs/2605.17255"],
      ["Paper", "https://arxiv.org/paper/2605.17255"],
      ["Code", "https://github.com/chenyili0818/CAM-Bench"],
    ],
  },
  {
    category: "reasoning",
    image: "/research/sita.webp",
    title:
      "SITA: A Framework for Structure-to-Instance Theorem Autoformalization",
    authors: "Chenyi Li, Wanli Ma, Zichen Wang, Zaiwen Wen",
    publication:
      "Proceedings of the AAAI Conference on Artificial Intelligence, 2026",
    links: [
      ["arXiv", "https://arxiv.org/abs/2511.10356"],
      ["Paper", "https://doi.org/10.1609/aaai.v40i23.38997"],
      ["Code", "https://github.com/chenyili0818/SITA"],
    ],
  },
  {
    category: "reasoning",
    image: "/research/human-ai-pipeline.webp",
    imageClass: "is-contained",
    title:
      "A Human-AI Collaborative Workflow for Mathematical Discovery: A Case Study in Grover-Compatible Riemannian Optimization",
    authors: "Chenyi Li, Zhijian Lai, Dong An, Jiang Hu, Zaiwen Wen",
    publication: "Journal of Scientific Computing, 109:74, 2026",
    links: [
      ["arXiv", "https://arxiv.org/abs/2512.09443"],
      ["Paper", "https://doi.org/10.1007/s10915-026-03493-4"],
    ],
  },
  {
    category: "formalization",
    image: "/research/formalization-convergence.svg",
    imageAlt: "Schematic of Lean formalization: convexity and smoothness to convergence proofs",
    imageClass: "is-contained",
    title:
      "Formalization of Convergence Rates of Four First-order Algorithms for Convex Optimization",
    authors:
      "Chenyi Li, Ziyu Wang, Wanyi He, Yuxuan Wu, Shengyang Xu, Zaiwen Wen",
    publication: "Journal of Automated Reasoning, 69(4):28, 2025",
    links: [
      ["arXiv", "https://arxiv.org/abs/2403.11437"],
      ["Paper", "https://doi.org/10.1007/s10817-025-09741-w"],
      ["Code", "https://github.com/optsuite/optlib"],
    ],
  },
  {
    category: "formalization",
    image: "/research/formalization-blocks.svg",
    imageAlt: "Schematic of Lean formalization for BCD and ADMM convergence",
    imageClass: "is-contained",
    title: "Formalization of algorithms for optimization with block structures",
    authors:
      "Chenyi Li, Zichen Wang, Yifan Bai, Yunxi Duan, Yuqing Gao, Pengfei Hao, Zaiwen Wen",
    publication: "Science China Mathematics, 2026",
    links: [
      ["arXiv", "https://arxiv.org/abs/2503.18806"],
      ["Paper", "https://doi.org/10.1007/s11425-025-2516-2"],
      ["Code", "https://github.com/optsuite/optlib"],
    ],
  },
  {
    category: "formalization",
    image: "/research/formalization-kkt.svg",
    imageAlt: "Schematic of Lean formalization for KKT optimality conditions",
    imageClass: "is-contained",
    title:
      "Formalization of Optimality Conditions for Smooth Constrained Optimization Problems",
    authors: "Chenyi Li, Shengyang Xu, Chenyang Sun, Liangqi Zhou, Zaiwen Wen",
    publication: "arXiv preprint, 2025",
    links: [
      ["arXiv", "https://arxiv.org/abs/2503.18821"],
      ["Code", "https://github.com/optsuite/optlib"],
    ],
  },
  {
    category: "optimization",
    image: "/research/angd-convergence.webp",
    imageAlt: "Training loss comparison for ANGD, NGD, Adam, and SGD on the Burgers equation; Figure 1, left panel",
    imageClass: "is-contained",
    title:
      "Accelerated Natural Gradient Method for Parametric Manifold Optimization",
    authors: "Chenyi Li*, Shuchen Zhu*, Zhonglin Xie, Zaiwen Wen",
    publication: "arXiv preprint, 2025",
    links: [["arXiv", "https://arxiv.org/abs/2504.05753"]],
  },
];

const publicationCategories = [
  {
    id: "reasoning",
    title: "LLM Reasoning and Formal Theorem Proving",
  },
  {
    id: "formalization",
    title: "Formalization of Optimization",
  },
  {
    id: "optimization",
    title: "Optimization",
  },
];

export const metadata: Metadata = {
  title: "Chenyi Li",
  description:
    "Chenyi Li is a third-year Ph.D. student at Peking University working on LLM reasoning, formal theorem proving, and optimization.",
};

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

type FigureCropRegion = {
  x: number;
  y: number;
  width: number;
  height: number;
  sourceWidth: number;
};

function CroppedFigure({ src, alt, crop }: {
  src: string;
  alt: string;
  crop: FigureCropRegion;
}) {
  return (
    <div
      className="publication-figure-crop"
      style={{ aspectRatio: `${crop.width} / ${crop.height}` }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: `${crop.sourceWidth / crop.width * 100}%`,
          left: `${-crop.x / crop.width * 100}%`,
          top: `${-crop.y / crop.height * 100}%`,
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <a className="navbar-brand" href="#about">
            Chenyi Li
          </a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#news">News</a>
            <a href="#publications">Publications</a>
          </nav>
        </div>
      </header>

      <main className="page-container">
        <section id="about" className="about-section">
          <header className="page-title">
            <h1>
              <strong>Chenyi</strong> Li
            </h1>
            <div className="contact-links" aria-label="Contact and profile links">
              <ExternalLink href={profileLinks.email}>Email</ExternalLink>
              <ExternalLink href={profileLinks.scholar}>Google Scholar</ExternalLink>
              <ExternalLink href={profileLinks.github}>GitHub</ExternalLink>
              <ExternalLink href={profileLinks.orcid}>ORCID</ExternalLink>
            </div>
          </header>

          <aside className="profile-photo">
            <img
              src="/profile/chenyi-li-mountains.jpg"
              alt="Chenyi Li"
              width="2000"
              height="1500"
            />
          </aside>

          <div className="bio">
            <p>
              I am a third-year Ph.D. student in Computational
              Mathematics at the{" "}
              <ExternalLink href="https://www.math.pku.edu.cn/">
                School of Mathematical Sciences
              </ExternalLink>
              ,{" "}
              <ExternalLink href="https://www.pku.edu.cn/">
                Peking University
              </ExternalLink>
              , advised by Prof.{" "}
              <ExternalLink href="https://faculty.bicmr.pku.edu.cn/~wenzw/">
                Zaiwen Wen
              </ExternalLink>
              . I received my B.S. degree in Information and Computing Science from
              the School of Mathematical Sciences, Peking University, in 2024.
            </p>

            <p>
              I am a member of the{" "}
              <ExternalLink href={programLinks.phd}>
                Elite Ph.D. Program in Applied Mathematics
              </ExternalLink>{" "}
              and the Elite Program in Mathematics at the School of Mathematical
              Sciences, Peking University. My email is{" "}
              <ExternalLink href={profileLinks.email}>
                lichenyi@stu.pku.edu.cn
              </ExternalLink>
              .
            </p>

          </div>

          <div className="research-interests">
            <p>
              My research interests span large language model reasoning,
              formal theorem proving, and optimization.
            </p>
            <ul className="research-directions">
              <li>
                <strong>LLM Reasoning</strong>
                <span>
                  Reinforcement learning and verifier-guided training to improve
                  the reliability and diversity of reasoning in large language models.
                </span>
              </li>
              <li>
                <strong>Formal Theorem Proving</strong>
                <span>
                  Lean-based theorem proving, autoformalization, and the formalization
                  of mathematical theories and algorithms in applied mathematics.
                </span>
              </li>
              <li>
                <strong>Optimization</strong>
                <span>
                  The design and analysis of optimization algorithms, and the development
                  of optimization-inspired methods for large language models.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section id="news">
          <h2>News</h2>
          <div className="news-list">
            <div className="news-item">
              <time dateTime="2026-10">Oct 2026</time>
              <p>
                Our paper{" "}
                <span className="news-paper">
                  A Human-AI Collaborative Workflow for Mathematical Discovery:
                  A Case Study in Grover-Compatible Riemannian Optimization
                </span>{" "}
                was published in{" "}
                <strong>Journal of Scientific Computing</strong>.
              </p>
            </div>
            <div className="news-item">
              <time>May 2026</time>
              <p>
                Our papers <strong>SetPO</strong> and <strong>OptProver</strong> have
                been accepted to <strong>ICML 2026</strong>.
              </p>
            </div>
            <div className="news-item">
              <time>Apr 2026</time>
              <p>
                Our paper{" "}
                <span className="news-paper">
                  Formalization of algorithms for optimization with block structures
                </span>{" "}
                was published in <strong>Science China Mathematics</strong>.
              </p>
            </div>
            <div className="news-item">
              <time>Nov 2025</time>
              <p>
                Our paper <strong>SITA</strong> has been accepted to{" "}
                <strong>AAAI 2026</strong>.
              </p>
            </div>
            <div className="news-item">
              <time>Oct 2025</time>
              <p>
                Our work on formalizing convergence rates of first-order optimization
                algorithms was published in the{" "}
                <strong>Journal of Automated Reasoning</strong>.
              </p>
            </div>
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="education-list">
            <article className="education-item">
              <img src="/pku-red.png" alt="Peking University" width="64" height="64" />
              <div>
                <div className="education-heading">
                  <h3>
                    <ExternalLink href="https://www.pku.edu.cn/">
                      Peking University
                    </ExternalLink>
                    <span> · School of Mathematical Sciences</span>
                  </h3>
                  <time>2024 — Present</time>
                </div>
                <p>Ph.D. Student in Computational Mathematics</p>
                <p className="education-note">
                  Advisor: Prof. Zaiwen Wen ·{" "}
                  Member of the{" "}
                  <ExternalLink href={programLinks.phd}>
                    Elite Ph.D. Program in Applied Mathematics
                  </ExternalLink>
                </p>
              </div>
            </article>

            <article className="education-item">
              <img src="/pku-red.png" alt="Peking University" width="64" height="64" />
              <div>
                <div className="education-heading">
                  <h3>
                    <ExternalLink href="https://www.pku.edu.cn/">
                      Peking University
                    </ExternalLink>
                    <span> · School of Mathematical Sciences</span>
                  </h3>
                  <time>2020 — 2024</time>
                </div>
                <p>B.S. in Information and Computing Science</p>
                <p className="education-note">
                  GPA: 3.836/4.0 · Peking University Weiming Bachelor&apos;s Honor ·{" "}
                  <ExternalLink href={programLinks.undergraduate}>
                    Applied Mathematics Elite Program
                  </ExternalLink>
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="publications">
          <h2>Selected publications</h2>
          <p className="publication-note">* denotes equal contribution.</p>
          {publicationCategories.map((category) => (
            <div className="publication-group" key={category.id}>
              <h3 className="publication-group-title">{category.title}</h3>
              <ol className="publication-list">
                {selectedPublications
                  .filter((publication) => publication.category === category.id)
                  .map((publication) => (
                    <li className="publication-item" key={publication.title}>
                      <div className="publication-preview">
                        {publication.comparisonPanels && publication.comparisonLegend ? (
                          <div className="setpo-comparison" role="group" aria-label={publication.imageAlt}>
                            {publication.comparisonPanels.map((panel) => (
                              <div className="setpo-panel" key={panel.label}>
                                <span className="setpo-panel-label">{panel.label}</span>
                                <CroppedFigure
                                  src={publication.image}
                                  alt={`${panel.label} trajectory embeddings`}
                                  crop={panel}
                                />
                              </div>
                            ))}
                            <div className="setpo-legend">
                              <CroppedFigure
                                src={publication.image}
                                alt="Shared training-step color scale, from 0 to 10k"
                                crop={publication.comparisonLegend}
                              />
                            </div>
                          </div>
                        ) : publication.figureCrop ? (
                          <CroppedFigure
                            src={publication.image}
                            alt={publication.imageAlt}
                            crop={publication.figureCrop}
                          />
                        ) : publication.image ? (
                          <img
                            src={publication.image}
                            alt={publication.imageAlt ?? `Preview for ${publication.title}`}
                            className={publication.imageClass}
                          />
                        ) : null}
                      </div>
                      <div className="publication-content">
                        <h4>{publication.title}</h4>
                        <p className="authors">{publication.authors}</p>
                        <p className="periodical">
                          <em>{publication.publication}</em>
                        </p>
                        <div className="publication-links">
                          {publication.links.map(([label, href]) => (
                            <ExternalLink href={href} key={href}>
                              {label}
                            </ExternalLink>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
              </ol>
            </div>
          ))}
        </section>
      </main>

      <footer>
        <div>
          © Copyright 2026 Chenyi Li. Hosted by{" "}
          <ExternalLink href="https://pages.github.com/">GitHub Pages</ExternalLink>.
        </div>
      </footer>
    </>
  );
}
