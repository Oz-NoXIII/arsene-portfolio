import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen((prev) => !prev);
    }

    function closeMenu() {
        setIsOpen(false);
    }

    return (
        <nav className="navbar container">
            <NavLink to="/" className="brand" onClick={closeMenu}>
                Arsène Mujyabwami
            </NavLink>

            <button
                type="button"
                className="nav-toggle"
                onClick={toggleMenu}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
            >
                <span />
                <span />
                <span />
            </button>

            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <NavLink to="/" end className="nav-link" onClick={closeMenu}>
                    Home
                </NavLink>
                <NavLink to="/projects" className="nav-link" onClick={closeMenu}>
                    Projects
                </NavLink>
                <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                    About
                </NavLink>
                <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
                    Contact
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;