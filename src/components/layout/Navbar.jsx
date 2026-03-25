import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar container">
            <NavLink to="/" className="brand">
                Arsène Mujyabwami
            </NavLink>

            <div className="nav-links">
                <NavLink to="/" end className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/projects" className="nav-link">
                    Projects
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    About
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                    Contact
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;