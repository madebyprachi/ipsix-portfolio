
import { ArrowUpRight } from "lucide-react";
import "./About.css";

const highlights = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building websites, exploring new technologies and turning ideas into functional experiences.",
  },
  {
    number: "02",
    title: "Content Creation",
    description:
      "Creating videos, exploring storytelling and experimenting with different creative formats.",
  },
  {
    number: "03",
    title: "Gaming & Creativity",
    description:
      "Exploring virtual worlds, finding inspiration and enjoying the creative side of gaming.",
  },
];

function About() {
  return (
    <main className="inner-page about-page">
      <section className="about-hero">
        <p className="eyebrow">05 / THE PERSON BEHIND IPSIX</p>

        <h1>
          Beyond the
          <br />
          <span>screen.</span>
        </h1>

        <p className="about-intro">
          I'm Prachi Sharma, a developer and content creator
          interested in technology, gaming and creative work.
          I enjoy learning, experimenting and building things
          that turn ideas into reality.
        </p>

        <div className="about-scroll">
          <span className="scroll-line" />
          A LITTLE INTRODUCTION
        </div>
      </section>

      <section className="about-focus">
        <div className="about-section-heading">
          <div>
            <p className="eyebrow">01 / WHAT I DO</p>
            <h2>A mix of different interests.</h2>
          </div>
        </div>

        <div className="about-focus-list">
          {highlights.map((item) => (
            <article className="about-focus-item" key={item.number}>
              <span className="about-focus-number">
                {item.number}
              </span>

              <div className="about-focus-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <ArrowUpRight className="about-focus-arrow" size={20} />
            </article>
          ))}
        </div>
      </section>

      <section className="about-philosophy">
        <p className="eyebrow">02 / HOW I SEE THINGS</p>

        <h2>
          Learn something.
          <br />
          <span>Try something new.</span>
          <br />
          Build something meaningful.
        </h2>

        <p>
          I believe the best way to learn is by exploring,
          experimenting and making things along the way.
          Not every idea needs to be perfect. Sometimes,
          the process itself teaches you the most.
        </p>
      </section>

      <section className="about-ending">
        <p className="eyebrow">03 / STILL EXPLORING</p>

        <h2>
          This is just
          <br />
          <span>the beginning.</span>
        </h2>

        <p>
          Always learning, always curious, and always working
          on the next idea.
        </p>
      </section>
    </main>
  );
}

export default About;
