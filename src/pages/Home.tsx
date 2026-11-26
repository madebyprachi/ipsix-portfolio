
import { useEffect, useState } from "react";

function Home() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!opened) return;

    const elements = document.querySelectorAll(".story-reveal");

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
  }, [opened]);

  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript",
    "React", "Next.js", "Node.js", "Java",
    "PHP", "Three.js", "Tailwind CSS", "GSAP",
    "Git", "GitHub", "Figma"
  ];

  const interests = [
    "Web Development",
    "UI / UX Design",
    "Gaming",
    "Content Creation",
    "Storytelling",
    "Filmmaking",
    "Photography",
    "Cinematography"
  ];

  return (
    <main className="letter-home">

      {/* ENVELOPE INTRO */}
      <section className="envelope-intro">
        <p className="letter-eyebrow">A PERSONAL INTRODUCTION</p>

        <h1>
          A little
          <br />
          <span>about me.</span>
        </h1>

        <p className="letter-subtitle">
          There's a little story waiting inside.
        </p>

        <button
          className={`envelope-button ${opened ? "opened" : ""}`}
          onClick={() => setOpened(true)}
          disabled={opened}
          aria-label="Open the envelope"
        >
          <div className="envelope">
            <div className="letter-paper">
              <span>To the curious visitor,</span>
              <strong>Let me introduce myself.</strong>
            </div>
            <div className="envelope-back" />
            <div className="envelope-front" />
            <div className="envelope-flap" />
          </div>
        </button>

        <p className="envelope-hint">
          {opened ? "YOUR LETTER IS OPEN" : "CLICK TO KNOW MORE ABOUT ME"}
        </p>
      </section>

      {/* FIRST LETTER */}
      <section className={`personal-letter ${opened ? "visible" : ""}`}>
        <div className="letter-sheet">
          <p className="letter-date">A NOTE FROM PRACHI</p>
          <h2>Hello, I'm Prachi.</h2>

          <p>
            I'm a developer, content creator and gamer.
            I enjoy exploring technology, creativity and
            the possibilities of the digital world.
          </p>

          <p>
            I'm someone who learns by observing,
            experimenting and figuring things out
            independently. I like turning ideas into
            something real.
          </p>

          <p className="letter-signature">
            This is a little more about me.
            <br />
            Prachi.
          </p>
        </div>
      </section>

      {/* WHO I AM */}
      <section className="story-section story-reveal">
        <p className="section-kicker">01 / BEHIND THE SCREEN</p>
        <h2>Curious by nature.<br /><span>Creative by choice.</span></h2>

        <p className="story-description">
          I'm an introvert with a curious mind and a habit
          of exploring how things work. I enjoy learning
          independently, experimenting with new ideas and
          finding my own way to solve problems.
        </p>

        <div className="interest-grid">
          {interests.map((interest) => (
            <div className="interest-item" key={interest}>
              {interest}
            </div>
          ))}
        </div>
      </section>

      {/* DEVELOPER */}
      <section className="story-section developer-section story-reveal">
        <p className="section-kicker">02 / THE DEVELOPER SIDE</p>
        <h2>Ideas don't build themselves.</h2>

        <p className="story-description">
          My interest in development started with gaming
          and curiosity about how digital experiences are
          created. Since then, I've been exploring web
          technologies and building projects while learning
          something new along the way.
        </p>

        <div className="skills-container">
          <p className="small-heading">TECHNOLOGIES I'VE EXPLORED</p>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill-tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <p className="story-footnote">
          Always learning. Always experimenting.
        </p>
      </section>

      {/* CREATOR */}
      <section className="story-section creator-section story-reveal">
        <p className="section-kicker">03 / THE CREATIVE SIDE</p>
        <h2>More than just code.</h2>

        <p className="story-description">
          I enjoy imagining stories, exploring visual ideas
          and thinking about how a simple concept can turn
          into an engaging experience. Content creation and
          filmmaking are creative paths I want to explore
          further.
        </p>

        <div className="creative-note">
          <span>MY CREATIVE INTERESTS</span>
          <h3>Storytelling · Direction · Visuals · Editing</h3>
        </div>
      </section>

      {/* GAMER */}
      <section className="story-section gamer-section story-reveal">
        <p className="section-kicker">04 / THE GAMER</p>
        <h2>Player one.<br /><span>Creator mode.</span></h2>

        <p className="story-description">
          Gaming is one of the reasons I became curious
          about technology in the first place. Minecraft
          is where my gaming content journey begins, but
          there's a lot more I want to explore.
        </p>

        <a
          className="text-link"
          href="https://youtube.com/@i-ps-ix"
          target="_blank"
          rel="noreferrer"
        >
          Explore IPSIX on YouTube ↗
        </a>
      </section>

      {/* PROJECT */}
      <section className="story-section project-section story-reveal">
        <p className="section-kicker">05 / SOMETHING I'VE BUILT</p>
        <h2>From an idea<br /><span>to a working project.</span></h2>

        <div className="featured-project">
          <div className="project-topline">
            <span>01 — COLLEGE PROJECT</span>
            <span>COMPLETED</span>
          </div>

          <h3>CampusEvents Scrapbook</h3>

          <p>
            A college event management website designed
            to make event updates and information easier
            to access in one place.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <a
            href="https://madebyprachi.github.io/College-Event-Management/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            View live project ↗
          </a>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy-section story-reveal">
        <p className="section-kicker">06 / A THOUGHT I LIVE BY</p>

        <h2>
          Build it yourself.
          <br />
          Walk your own path.
        </h2>

        <p>
          No one is guaranteed to walk beside you.
          People may come and go, but your journey
          and determination are yours. Keep building anyway.
        </p>
      </section>

      {/* CONTACT */}
      <section className="story-section contact-section story-reveal">
        <p className="section-kicker">07 / THE NEXT CHAPTER</p>
        <h2>Have something<br /><span>in mind?</span></h2>

        <p className="story-description">
          I'm open to exploring opportunities, working on
          interesting ideas and connecting with people who
          enjoy building things.
        </p>

        <a
          className="contact-email"
          href="mailto:workwithipsix@gmail.com"
        >
          workwithipsix@gmail.com ↗
        </a>

        <div className="social-links">
          <a href="https://github.com/madebyprachi" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/prachi-sharma-205a24441/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/i.ps.ix/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://youtube.com/@i-ps-ix" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://www.reddit.com/user/Sad-Pineapple-6945/" target="_blank" rel="noreferrer">Reddit</a>
          <a href="https://x.com/ip5ix" target="_blank" rel="noreferrer">X</a>
        </div>
      </section>

    </main>
  );
}

export default Home;
