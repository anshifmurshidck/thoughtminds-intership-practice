function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">A</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <a href="/resume.pdf" download>
        <button className="resume-btn">
          Resume
        </button>
      </a>
    </nav>
  );
}

export default Navbar;