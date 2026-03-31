import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SkyBackground from "../background/SkyBackground";
import AmbientOverlay from "../background/AmbientOverlay";
import CursorGlow from "../background/CursorGlow";
import MusicPlayer from "../audio/MusicPlayer";
import PageTransition from "./PageTransition";
import ContactTransition from "../background/ContactTransition";

function SiteLayout() {
    return (
        <div className="app-shell">
            <SkyBackground />
            <ContactTransition />
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
                <p>© {new Date().getFullYear()} Arsène Mujyabwami</p>
            </footer>
        </div>
    );
}

export default SiteLayout;