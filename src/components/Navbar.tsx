
import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const links = [
  { name: "Projects", path: "/projects" },
  { name: "Expertise", path: "/expertise" },
  { name: "Creative", path: "/creative" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ipsix<span>.</span>
      </Link>

      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <Link to="/contact" className="nav-cta">
        Let's talk <ArrowUpRight size={15} />
      </Link>
    </nav>
  );
}

export default Navbar;
