import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BackgroundLayers from "../background/BackgroundLayers";
import MusicPlayer from "../audio/MusicPlayer";

function SiteLayout() {
    return (
        <div className="app-shell">
            <BackgroundLayers />

            <header className="site-header">
                <Navbar />
            </header>

            <MusicPlayer />

            <main className="site-main">
                <Outlet />
            </main>

            <footer className="site-footer container">
                <p>© 2026 Arsène Mujyabwami</p>
            </footer>
        </div>
    );
}

export default SiteLayout;