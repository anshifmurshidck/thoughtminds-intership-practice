function Contact() {
  return (
    <section className="contact">
      <div className="contact-left">
        <h2>Contact Me</h2>

        <p>
          Feel free to reach out for collaborations,
          internships and projects.
        </p>

        <div className="contact-info">
          <p>Email: anshifmurshidck@gmail.com</p>
          <p>Phone: +91 9645999199</p>
          <p>Location: Malappuram, Kerala</p>

          <p>
            GitHub:
            <a
              href="https://github.com/anshifmurshidck"
              target="_blank"
              rel="noreferrer"
            >
              github.com/anshifmurshidck
            </a>
          </p>

          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/anshif-murshid-ck-8189b238a"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/anshif-murshid-ck
            </a>
          </p>
        </div>
      </div>

      <div className="contact-right">
        <img
          src="/profile.jpg"
          alt="Anshif Murshid CK"
          className="contact-image"
        />
      </div>
    </section>
  );
}

export default Contact;