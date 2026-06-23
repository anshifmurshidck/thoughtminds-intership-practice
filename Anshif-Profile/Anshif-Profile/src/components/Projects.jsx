function Projects() {
  return (
    <section className="projects">
      <h2>Some Projects I've Built</h2>

      <div className="project-grid">

        {/* Expense Tracker */}
        <div className="project-card">
          <h3>Expense Tracker App</h3>

          <p>
            Daily expense tracking application with reports,
            analytics and expense management features.
          </p>

          <div className="tech">
            <span>Flutter</span>
            <span>Firebase</span>
          </div>

          <div className="project-buttons">
            <button>GitHub</button>
          </div>
        </div>

        {/* Internship Card */}
        <div className="project-card">
          <h3>Student Intern</h3>

          <p>
            <strong>ThoughtMinds Systems Private Limited</strong>
          </p>

          <p>2026 — Present</p>

          <h4>Responsibilities</h4>

          <ul>
            <li>
              Working within an internship practice repository on
              AI/GenAI-focused tasks.
            </li>

            <li>
              Resolving real-world development environment and
              version control issues.
            </li>

            <li>
              Collaborating on full-stack and AI-assisted tooling tasks.
            </li>
          </ul>

          <h4>Key Achievements</h4>

          <ul>
            <li>
              Quickly diagnosed and resolved a nested Git repository
              conflict blocking commits.
            </li>

            <li>
              Bridging full-stack experience with GenAI-specific tools
              like LangChain and Vector Databases.
            </li>
          </ul>

          <div className="tech">
            <span>React</span>
            <span>Git</span>
            <span>GenAI</span>
            <span>LangChain</span>
            <span>Vector DB</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;