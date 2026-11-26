import { useEffect } from "react";
import "./Expertise.css";

type Technology = {
  name: string;
  logo?: string;
  src?: string;
  invert?: boolean;
};

type Group = {
  title: string;
  subtitle: string;
  description: string;
  technologies?: Technology[];
  interests?: string[];
};

const groups: Group[] = [
  {
    title: "Languages",
    subtitle: "01 / THE FOUNDATION",
    description: "The languages behind the things I build.",
    technologies: [
      { name: "HTML5", logo: "html5" },
      { name: "CSS3", logo: "css3" },
      { name: "JavaScript", logo: "javascript" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Java", logo: "java" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    subtitle: "02 / THE BUILDING BLOCKS",
    description: "Tools and libraries for building digital experiences.",
    technologies: [
      { name: "React", logo: "react" },
      { name: "Next.js", logo: "nextjs", invert: true },
      { name: "Node.js", logo: "nodejs" },
      { name: "Three.js", logo: "threejs", invert: true },
      { name: "Tailwind CSS", logo: "tailwindcss" },
      { name: "GSAP", src: "https://cdn.simpleicons.org/greensock/88CE02" },
    ],
  },
  {
    title: "Tools",
    subtitle: "03 / THE WORKSPACE",
    description: "The tools I use to create, develop and manage projects.",
    technologies: [
      { name: "VS Code", logo: "vscode" },
      { name: "Git", logo: "git" },
      { name: "GitHub", logo: "github" },
      { name: "Blender", logo: "blender" },
      { name: "Figma", logo: "figma" },
    ],
  },
  {
    title: "Beyond the Code",
    subtitle: "04 / THE CREATIVE SIDE",
    description: "Interests that shape the way I think, explore and create.",
    interests: [
      "UI / UX Design",
      "Creative Development",
      "3D Exploration",
      "Storytelling",
      "Gaming",
      "Visual Design",
    ],
  },
];

function Expertise() {
  useEffect(() => {
    const elements = document.querySelectorAll(".expertise-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="inner-page expertise-page">
      <section className="expertise-hero">
        <p className="eyebrow">02 / EXPERTISE</p>
        <h1>
          What I use to
          <br />
          <span>bring ideas to life.</span>
        </h1>
        <p className="page-description">
          A growing collection of technologies, tools and skills
          that help me turn ideas into digital experiences.
        </p>
        <div className="expertise-hero-bottom">
          <span>TECHNICAL TOOLKIT</span>
          <span>ALWAYS LEARNING · ALWAYS BUILDING</span>
        </div>
      </section>

      <section className="expertise-toolkit">
        {groups.map((group, index) => (
          <article className="skill-category expertise-reveal" key={group.title}>
            <div className="category-heading">
              <div>
                <p className="skill-subtitle">{group.subtitle}</p>
                <h2>{group.title}</h2>
                <p className="category-description">{group.description}</p>
              </div>
              <span className="category-number">0{index + 1}</span>
            </div>

            {group.technologies && (
              <div className="technology-list">
                {group.technologies.map((tech) => (
                  <div className="technology-row" key={tech.name}>
                    <span className="technology-logo">
                      <img
                        className={tech.invert ? "logo-invert" : ""}
                        src={
                          tech.src ??
                          `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.logo}/${tech.logo}-original.svg`
                        }
                        alt=""
                        loading="lazy"
                      />
                    </span>
                    <span className="technology-name">{tech.name}</span>
                    <span className="technology-index">
                      {String(group.technologies!.indexOf(tech) + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {group.interests && (
              <div className="beyond-list">
                {group.interests.map((interest, interestIndex) => (
                  <div className="beyond-row" key={interest}>
                    <span>{String(interestIndex + 1).padStart(2, "0")}</span>
                    <p>{interest}</p>
                    <span className="beyond-mark">↗</span>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </section>

      <section className="expertise-closing expertise-reveal">
        <p>NOT A FINISHED TOOLKIT.</p>
        <h2>There's always more to learn.</h2>
      </section>
    </main>
  );
}

export default Expertise;
