
import "./Creative.css";

const interests = [
  {
    number: "01",
    title: "Video Editing",
    description:
      "Turning raw clips into something worth watching through pacing, transitions and visual storytelling.",
    tags: ["Editing", "Visuals", "Storytelling"],
  },
  {
    number: "02",
    title: "Filmmaking",
    description:
      "Exploring ideas, writing scripts and bringing stories to life through short films and creative projects.",
    tags: ["Direction", "Scripts", "Production"],
  },
  {
    number: "03",
    title: "Content Creation",
    description:
      "Creating videos, experimenting with formats and building a space for ideas to reach people.",
    tags: ["YouTube", "Ideas", "Creative Direction"],
  },
  {
    number: "04",
    title: "Visual Experiments",
    description:
      "Trying new styles, exploring design and finding interesting ways to express an idea.",
    tags: ["Design", "Experiments", "Creativity"],
  },
];

const games = [
  { number: "01", name: "Minecraft", category: "BUILD · EXPLORE" },
  { number: "02", name: "VALORANT", category: "TACTICAL FPS" },
  { number: "03", name: "Forza Horizon", category: "RACING" },
  { number: "04", name: "GTA V", category: "OPEN WORLD" },
  { number: "05", name: "Vice City", category: "OPEN WORLD" },
  { number: "06", name: "GTA VI", category: "UPCOMING WORLD" },
];

const creators = [
  {
    name: "GamerFleet",
    handle: "@GamerFleet",
    url: "https://www.youtube.com/@GamerFleet",
  },
  {
    name: "SenpaiSpider",
    handle: "@SenpaiSpider",
    url: "https://www.youtube.com/@SenpaiSpider",
  },
  {
    name: "SBlockGamer",
    handle: "@SBlockGamer",
    url: "https://www.youtube.com/@SBlockGamer",
  },
];

function Creative() {
  return (
    <main className="inner-page creative-page">
      <section className="creative-hero">
        <p className="eyebrow">03 / THE CREATIVE SIDE</p>

        <h1>
          Beyond the code,
          <br />
          <span>there's a creative side.</span>
        </h1>

        <p className="creative-intro">
          Not everything is about writing code. I enjoy creating,
          experimenting, telling stories and exploring different worlds.
        </p>

        <div className="creative-scroll">
          <span className="scroll-line" />
          A LITTLE MORE ABOUT MY INTERESTS
        </div>
      </section>

      <section className="creative-interests">
        <div className="creative-section-heading">
          <div>
            <p className="eyebrow">01 / WHAT I ENJOY</p>
            <h2>Things I love creating.</h2>
          </div>
          <p className="section-side-note">
            A few things that keep my creative side alive.
          </p>
        </div>

        <div className="interest-grid">
          {interests.map((item) => (
            <article className="interest-card" key={item.number}>
              <div className="interest-card-top">
                <span className="interest-number">{item.number}</span>
                <span className="interest-arrow">↗</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="interest-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="creative-gaming">
        <div className="creative-section-heading">
          <div>
            <p className="eyebrow">02 / WHEN I'M NOT CREATING</p>
            <h2>Somewhere in another world.</h2>
          </div>

          <p className="section-side-note">
            Games I enjoy spending time in.
          </p>
        </div>

        <div className="game-list">
          {games.map((game) => (
            <div className="game-row" key={game.number}>
              <span className="game-number">{game.number}</span>
              <h3>{game.name}</h3>
              <span className="game-category">{game.category}</span>
              <span className="game-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="creative-creators">
        <div className="creative-section-heading">
          <div>
            <p className="eyebrow">03 / CREATOR INSPIRATION</p>
            <h2>Creators I enjoy watching.</h2>
          </div>

          <p className="section-side-note">
            Content that makes gaming more interesting.
          </p>
        </div>

        <div className="creator-grid">
          {creators.map((creator, index) => (
            <a
              className="creator-card"
              href={creator.url}
              target="_blank"
              rel="noopener noreferrer"
              key={creator.name}
            >
              <span className="creator-index">
                0{index + 1} / CREATOR
              </span>

              <h3>{creator.name}</h3>

              <div className="creator-card-bottom">
                <span>{creator.handle}</span>
                <span className="creator-link">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="creative-note">
        <p className="eyebrow">04 / A NOTE</p>

        <h2>
          Curiosity keeps
          <br />
          <span>me creating.</span>
        </h2>

        <p>
          I like learning by trying things out. Some ideas turn into
          projects, some become stories, and some are simply experiments.
          That's the fun part.
        </p>
      </section>
    </main>
  );
}

export default Creative;
