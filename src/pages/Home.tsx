import { lazy, Suspense, useEffect } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CinematicScene = lazy(() => import("../components/CinematicScene"));

const chapters = [
  { number: "01", title: "Selected work", detail: "Projects & experiments", path: "/projects" },
  { number: "02", title: "The toolkit", detail: "Technologies & skills", path: "/expertise" },
  { number: "03", title: "Off the grid", detail: "Creative interests & gaming", path: "/creative" },
  { number: "04", title: "The person", detail: "A little beyond the screen", path: "/about" },
];

function Home() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".chapter-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="immersive-home">
      <section className="cinematic-hero">
        <Suspense fallback={<div className="scene-fallback" />}>
          <CinematicScene />
        </Suspense>
        <div className="hero-grain" />
        <div className="hero-coordinate">23° 01' N&nbsp;&nbsp; / &nbsp;&nbsp;72° 34' E</div>
        <div className="hero-index">INDEPENDENT CREATIVE SPACE&nbsp; · &nbsp;EST. 2026</div>
        <div className="cinematic-copy">
          <p className="cinematic-kicker"><span /> DEVELOPER&nbsp; / &nbsp;CREATOR&nbsp; / &nbsp;GAMER</p>
          <h1>Ideas take<br /><em>another form.</em></h1>
          <p className="cinematic-intro">
            I'm Prachi. I explore the space where technology,
            imagination and storytelling meet.
          </p>
          <div className="cinematic-actions">
            <a href="#chapters" className="enter-link">EXPLORE THE SPACE <ArrowDown size={15} /></a>
            <Link to="/contact" className="hero-contact">LET'S CONNECT <ArrowUpRight size={14} /></Link>
          </div>
        </div>
        <div className="hero-side-note">A DIGITAL WORLD IN PROGRESS</div>
        <div className="hero-bottomline">
          <span>SCROLL TO DISCOVER</span>
          <span>AHMEDABAD, INDIA</span>
          <span>01 — 05</span>
        </div>
      </section>

      <section className="intro-chapter chapter-reveal" id="chapters">
        <div className="chapter-meta"><span>00 / THE BEGINNING</span><span>A NOTE FROM PRACHI</span></div>
        <div className="intro-layout">
          <p className="large-index">01</p>
          <div>
            <p className="cinematic-kicker">A LITTLE CONTEXT</p>
            <h2>Not here to fit<br /><em>inside a box.</em></h2>
            <p className="chapter-description">
              I like learning by doing, noticing the little details and
              figuring out how things work. Some days that means writing
              code. Other days, it's a story, a video or a new idea worth
              exploring.
            </p>
            <p className="signature">Prachi Sharma <span>· ipsix</span></p>
          </div>
        </div>
      </section>

      <section className="chapter-index-section">
        <div className="chapter-heading chapter-reveal">
          <p className="cinematic-kicker">THE JOURNEY SO FAR</p>
          <h2>Choose a <em>chapter.</em></h2>
          <p>Different interests. One curious mind.</p>
        </div>
        <div className="chapter-list">
          {chapters.map((chapter) => (
            <Link className="chapter-row chapter-reveal" to={chapter.path} key={chapter.number}>
              <span className="chapter-number">{chapter.number}</span>
              <div className="chapter-row-title"><h3>{chapter.title}</h3><p>{chapter.detail}</p></div>
              <span className="chapter-arrow"><ArrowUpRight size={21} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-world chapter-reveal">
        <div className="featured-world-image">
          <div className="world-orbit" />
          <span>FIELD NOTE&nbsp; / &nbsp;001</span>
          <strong>BUILD<br />& BEYOND.</strong>
        </div>
        <div className="featured-world-copy">
          <p className="cinematic-kicker">A PROJECT FROM THE DESK</p>
          <h2>Small idea.<br /><em>Real world.</em></h2>
          <p>
            CampusEvents is a frontend college project built to bring
            event information together in one place. One of the many
            things I'm learning by making.
          </p>
          <a href="https://madebyprachi.github.io/CampusEvents-Scrapbook/" target="_blank" rel="noreferrer">
            VIEW PROJECT <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <section className="closing-chapter chapter-reveal">
        <p className="cinematic-kicker">THE NEXT CHAPTER IS UNWRITTEN</p>
        <h2>Still curious.<br /><em>Still becoming.</em></h2>
        <Link to="/contact">SAY HELLO <ArrowUpRight size={15} /></Link>
        <div className="closing-socials">
          <a href="https://github.com/madebyprachi" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
          <a href="https://www.instagram.com/i.ps.ix/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
          <a href="https://youtube.com/@i-ps-ix" target="_blank" rel="noreferrer" aria-label="YouTube">YT</a>
        </div>
      </section>
    </main>
  );
}

export default Home;
