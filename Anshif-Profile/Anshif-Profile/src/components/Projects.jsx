function Projects() {
  return (
    <section className="projects">

      <h2>
        Some Projects I've Built
      </h2>

      <div className="project-grid">

        <div className="project-card">

          <h3>Expense Tracker App</h3>

          <p>
            Daily expense tracking application
            with reports and analytics.
          </p>

          <div className="tech">
            Flutter Firebase
          </div>

          <button>GitHub</button>

        </div>

        <div className="project-card">

          <h3>PayNexus AI</h3>

          <p>
            AI-powered platform helping
            freelancers manage payments.
          </p>

          <div className="tech">
            React Firebase AI
          </div>

          <button>GitHub</button>

        </div>

      </div>

    </section>
  );
}

export default Projects;