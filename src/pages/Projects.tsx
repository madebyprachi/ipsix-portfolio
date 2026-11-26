
function Projects() {
  return (
    <main className="inner-page projects-page">
      <p className="eyebrow">01 / SELECTED WORK</p>

      <h1>
        Things I've <span>built.</span>
      </h1>

      <p className="page-description">
        A collection of my development projects, experiments
        and creative explorations.
      </p>

      <div className="project-grid">
        <article className="project-card">
          <span>01 / WEB DEVELOPMENT</span>

          <h2>CampusEvents</h2>

          <p>
            A frontend-based college event management
            website designed to showcase and manage
            college events.
          </p>

          <small>HTML · CSS · JavaScript</small>

          <a
            className="text-link"
            href="https://madebyprachi.github.io/College-Event-Management/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View live project ↗
          </a>
        </article>
      </div>
    </main>
  );
}

export default Projects;
