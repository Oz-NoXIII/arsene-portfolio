import { useLocation } from "react-router-dom";

function BackgroundLayers() {
    const location = useLocation();

    let pageClass = "theme-home";

    if (location.pathname === "/about") {
        pageClass = "theme-about";
    } else if (location.pathname === "/contact") {
        pageClass = "theme-contact";
    } else if (location.pathname === "/projects") {
        pageClass = "theme-projects";
    } else if (location.pathname.startsWith("/projects/angel-portfolio-game")) {
        pageClass = "theme-game";
    } else if (location.pathname.startsWith("/projects/")) {
        pageClass = "theme-project-detail";
    }

    return (
        <div className={`background-root ${pageClass}`} aria-hidden="true">
            <div className="bg-gradient" />
            <div className="bg-stars" />
            <div className="bg-clouds" />
            <div className="bg-grid" />
            <div className="bg-glow bg-glow-one" />
            <div className="bg-glow bg-glow-two" />
            <div className="bg-paper" />
            <div className="bg-waveform" />
        </div>
    );
}

export default BackgroundLayers;