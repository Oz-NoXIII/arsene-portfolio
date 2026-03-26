import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BackgroundLayers from "../background/BackgroundLayers";
import AmbientOverlay from "../background/AmbientOverlay";
import CursorGlow from "../background/CursorGlow";
import MusicPlayer from "../audio/MusicPlayer";
import PageTransition from "./PageTransition";

function SiteLayout() {
    return (
        <div className="app-shell">
            <BackgroundLayers />
            <AmbientOverlay />
            <CursorGlow />

            <header className="site-header">
                <Navbar />
            </header>

            <MusicPlayer />

            <main className="site-main">
                <PageTransition>
                    <Outlet />
                </PageTransition>
            </main>

            <footer className="site-footer container">
                <p>© 2026 Arsène Mujyabwami</p>
            </footer>
        </div>
    );
}

export default SiteLayout;