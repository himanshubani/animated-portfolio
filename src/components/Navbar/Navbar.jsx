import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_container container">
        <div className="navbar_left">
          <a href="#intro" className="navbar_logo">
            Genius.
          </a>
        </div>
        <div className="navbar_right">
          <div className="navbar_item">
            <a href="#intro" className="navbar_link">
              Home
            </a>
          </div>
          <div className="navbar_item">
            <a href="#portfolio" className="navbar_link">
              About
            </a>
          </div>
          <div className="navbar_item">
            <a href="#works" className="navbar_link">
              Projects
            </a>
          </div>
          <div className="navbar_item">
            <a href="#contact" className="navbar_link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
