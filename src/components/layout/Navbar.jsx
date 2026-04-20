import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDelayedNavigate } from "./useDelayedNavigate";
import { usePageTransition } from "./usePageTransition";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const delayedNavigate = useDelayedNavigate();
    const location = useLocation();
    const { isTransitioning, targetPath } = usePageTransition();

    function toggleMenu() {
        setIsOpen((prev) => !prev);
    }

    function closeMenu() {
        setIsOpen(false);
    }

    function handleNavigate(event, path) {
        event.preventDefault();
        closeMenu();
        delayedNavigate(path);
    }

    function isActive(path) {
        if (isTransitioning && targetPath === path) {
            return true;
        }

        return location.pathname === path;
    }

    return (
        <nav className="navbar container">
            <a
                href="/"
                className="brand"
                onClick={(event) => handleNavigate(event, "/")}
            >
                Arsène Mujyabwami
            </a>

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
                <a
                    href="/"
                    className={`nav-link ${isActive("/") ? "active" : ""}`}
                    onClick={(event) => handleNavigate(event, "/")}
                >
                    Home
                </a>

                <a
                    href="/portfolio"
                    className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}
                    onClick={(event) => handleNavigate(event, "/portfolio")}
                >
                    Portfolio
                </a>

                <a
                    href="/interactive-portfolio"
                    className={`nav-link ${isActive("/interactive-portfolio") ? "active" : ""}`}
                    onClick={(event) => handleNavigate(event, "/interactive-portfolio")}
                >
                    Interactive Portfolio
                </a>

                <a
                    href="/about"
                    className={`nav-link ${isActive("/about") ? "active" : ""}`}
                    onClick={(event) => handleNavigate(event, "/about")}
                >
                    About
                </a>

                <a
                    href="/contact"
                    className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                    onClick={(event) => handleNavigate(event, "/contact")}
                >
                    Contact
                </a>
            </div>
        </nav>
    );
}

export default Navbar;