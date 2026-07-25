import type { Metadata } from "next";

const profileLinks = {
  email: "mailto:lichenyi@stu.pku.edu.cn",
  scholar: "https://scholar.google.com/citations?user=VsPS8-cAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0003-0082-0260",
  github: "https://github.com/chenyili0818",
};

const selectedPublications = [
  {
    venue: "ICML 2026",
    image: "/research/setpo.webp",
    title:
      "SetPO: Set-Level Policy Optimization for Diversity-Preserving LLM Reasoning",
    authors:
      "Chenyi Li*, Yuan Zhang*, Bo Wang, Guoqing Ma, Wei Tang, Haoyang Huang, Nan Duan",
    publication: "The 43rd International Conference on Machine Learning, 2026",
    links: [
      ["arXiv", "https://arxiv.org/abs/2602.01062"],
      ["Paper", "https://openreview.net/forum?id=tYKGzVE1g7"],
    ],
  },
  {
    venue: "ICML 2026",
    image: "/research/optprover.webp",
    title:
      "OptProver: Bridging Olympiad and Optimization through Continual Training in Formal Theorem Proving",
    authors:
      "Chenyi Li, Yanchen Nie, Zhenyu Ming, Gong Zhang, Kun Yuan, Zaiwen Wen",
    publication: "The 43rd International Conference on Machine Learning, 2026",
    links: [
      ["arXiv", "https://arxiv.org/abs/2604.23712"],
      ["Paper", "https://openreview.net/forum?id=mkHp4ZW01l"],
    ],
  },
  {
    venue: "AAAI 2026",
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
    venue: "JAR 2025",
    image: "/research/formalization.webp",
    title:
      "Formalization of Convergence Rates of Four First-order Algorithms for Convex Optimization",
    authors:
      "Chenyi Li, Ziyu Wang, Wanyi He, Yuxuan Wu, Shengyang Xu, Zaiwen Wen",
    publication: "Journal of Automated Reasoning, 69(4):28, 2025",
    links: [
      ["arXiv", "https://arxiv.org/abs/2403.11437"],
      ["Paper", "https://doi.org/10.1007/s10817-025-09741-w"],
    ],
  },
  {
    venue: "SCM 2026",
    image: "/research/formalization.webp",
    title: "Formalization of Algorithms for Optimization with Block Structures",
    authors:
      "Chenyi Li, Zichen Wang, Yifan Bai, Yunxi Duan, Yuqing Gao, Pengfei Hao, Zaiwen Wen",
    publication: "Science China Mathematics, 2026",
    links: [
      ["arXiv", "https://arxiv.org/abs/2503.18806"],
      ["Paper", "https://doi.org/10.1007/s11425-025-2516-2"],
    ],
  },
  {
    venue: "Preprint",
    title:
      "Formalization of Optimality Conditions for Smooth Constrained Optimization Problems",
    authors: "Chenyi Li, Shengyang Xu, Chenyang Sun, Liangqi Zhou, Zaiwen Wen",
    publication: "arXiv preprint, 2025",
    links: [["arXiv", "https://arxiv.org/abs/2503.18821"]],
  },
  {
    venue: "Preprint",
    title:
      "Teacher-Feature Drifting: One-Step Diffusion Distillation with Pretrained Diffusion Representations",
    authors:
      "Yuan Zhang*, Chenyi Li*, Guoqing Ma, Jiacheng Zha, Yifan Yang, Bo Wang, et al.",
    publication: "arXiv preprint, 2026",
    links: [["arXiv", "https://arxiv.org/abs/2605.07327"]],
  },
  {
    venue: "Preprint",
    title:
      "Accelerated Natural Gradient Method for Parametric Manifold Optimization",
    authors: "Chenyi Li, Shuchen Zhu, Zhonglin Xie, Zaiwen Wen",
    publication: "arXiv preprint, 2025",
    links: [["arXiv", "https://arxiv.org/abs/2504.05753"]],
  },
];

export const metadata: Metadata = {
  title: "Chenyi Li",
  description:
    "Chenyi Li is a Ph.D. student at Peking University working on LLM reasoning, formal theorem proving, optimization, and generative modeling.",
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
              src="/profile/chenyi-li-scholar.jpg"
              alt="Chenyi Li"
              width="207"
              height="256"
            />
          </aside>

          <div className="bio">
            <p>
              Welcome to my personal homepage! I am a Ph.D. student in Computational
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
              .
            </p>

            <p>
              My research interests broadly span large language model reasoning,
              formal theorem proving, optimization, and generative modeling. I focus
              on the following directions:
            </p>

            <ul>
              <li>
                <strong>LLM Reasoning:</strong> reinforcement learning and
                verifier-guided training for reliable and diverse reasoning.
              </li>
              <li>
                <strong>Formal Theorem Proving:</strong> Lean-based theorem proving,
                autoformalization, and formalization of applied mathematics.
              </li>
              <li>
                <strong>Generative Modeling:</strong> efficient diffusion and flow
                models, especially one-step distillation.
              </li>
            </ul>

            <p>
              I received my B.S. degree in Information and Computing Science from
              Peking University in 2024.
            </p>
          </div>
        </section>

        <section id="news">
          <h2>news</h2>
          <div className="news-list">
            <div className="news-item">
              <time>May 01, 2026</time>
              <p>
                Our papers <strong>SetPO</strong> and <strong>OptProver</strong> have
                been accepted to <strong>ICML 2026</strong>.
              </p>
            </div>
            <div className="news-item">
              <time>2026</time>
              <p>
                Our paper <strong>SITA</strong> has been accepted to{" "}
                <strong>AAAI 2026</strong>.
              </p>
            </div>
            <div className="news-item">
              <time>Oct 15, 2025</time>
              <p>
                Our work on formalizing convergence rates of first-order optimization
                algorithms was published in the{" "}
                <strong>Journal of Automated Reasoning</strong>.
              </p>
            </div>
          </div>
        </section>

        <section id="education">
          <h2>education</h2>
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
                  Advisor: Prof. Zaiwen Wen · Selected for PKU&apos;s 2024 Ph.D.
                  Excellence Program
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
                  GPA: 3.836/4.0 · Rank: 2/46 · Peking University Weiming
                  Bachelor&apos;s Honor
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="publications">
          <h2>selected publications</h2>
          <p className="publication-note">* denotes equal contribution.</p>
          <ol className="publication-list">
            {selectedPublications.map((publication) => (
              <li className="publication-item" key={publication.title}>
                <div className="publication-preview">
                  <span className="venue-badge">{publication.venue}</span>
                  {publication.image ? (
                    <img
                      src={publication.image}
                      alt={`Preview for ${publication.title}`}
                    />
                  ) : null}
                </div>
                <div className="publication-content">
                  <h3>{publication.title}</h3>
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
