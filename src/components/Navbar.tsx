import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { name: "Projects", path: "/projects" },
  { name: "Expertise", path: "/expertise" },
  { name: "Creative", path: "/creative" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        ipsix<span>.</span>
      </Link>

      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div
        id="primary-navigation"
        className={menuOpen ? "nav-links is-open" : "nav-links"}
      >
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <Link to="/contact" className="nav-cta" onClick={closeMenu}>
        Let's talk <ArrowUpRight size={15} />
      </Link>
    </nav>
  );
}

export default Navbar;
