import { useLocation } from "react-router-dom";

function BackgroundLayers() {
    const location = useLocation();

    let pageClass = "theme-night";

    if (location.pathname === "/portfolio") {
        pageClass = "theme-dawn";
    } else if (location.pathname === "/interactive-portfolio") {
        pageClass = "theme-day";
    } else if (location.pathname === "/about") {
        pageClass = "theme-dusk";
    } else if (location.pathname === "/contact") {
        pageClass = "theme-convergence";
    } else if (location.pathname.startsWith("/projects/angel-portfolio-game")) {
        pageClass = "theme-day";
    } else if (location.pathname.startsWith("/projects/")) {
        pageClass = "theme-dawn";
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
            <div className="bg-sun-haze" />
        </div>
    );
}

export default BackgroundLayers;