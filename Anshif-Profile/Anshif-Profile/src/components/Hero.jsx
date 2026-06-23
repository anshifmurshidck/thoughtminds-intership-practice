function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-small">
          Hey there, my name is
        </p>

        <h1>Anshif Murshid CK</h1>

        <h2>
          AI & Data Science Student
        </h2>

        <p className="hero-desc">
          I am a second-year B.Tech CSE (AI & DS) student at
          Mentor Engineering College. Passionate about
          Artificial Intelligence, Data Science, Machine
          Learning and Web Development.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" download>
            <button className="resume-btn">
              Download Resume
            </button>
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="/profile.jpg"
          alt="Anshif Murshid CK"
          className="profile-image"
        />
      </div>
    </section>
  );
}

export default Hero;