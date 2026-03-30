import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { siteContent } from "../data/siteContent";
import ProjectCard from "../components/ui/ProjectCard";
import SectionIntro from "../components/ui/SectionIntro";
import { useDelayedNavigate } from "../components/layout/useDelayedNavigate";

function Home() {
    const delayedNavigate = useDelayedNavigate();

    return (
        <>
            <section className="hero hero-split container section">
                <div className="hero-copy">
                    <p className="eyebrow"> Software • AI • Theoretical CS </p>
                    <h1 className="hero-title">
                        Technical when it matters.<br />
                        Practical when it counts.
                    </h1>

                    <p className="hero-text">
                        Computer Science student exploring software development, artificial
                        intelligence, theory, music, reading, and interactive experiences.
                        I like projects where structure, curiosity, and personality meet.
                    </p>

                    <div className="hero-actions">
                        <button
                            type="button"
                            className="button button-primary"
                            onClick={() => delayedNavigate("/portfolio")}
                        >
                            View portfolio
                        </button>

                        <button
                            type="button"
                            className="button button-secondary"
                            onClick={() => delayedNavigate("/about")}
                        >
                            About me
                        </button>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-orb" />
                    <div className="hero-lines" />
                    <div className="hero-panel">
                        <p className="hero-panel-label">Atmosphere</p>
                        <h2 className="hero-panel-title">Poetic. Technical. Personal.</h2>
                        <p className="hero-panel-text">
                            A portfolio designed as a calm, cinematic space where projects,
                            ideas, music, and imagination coexist.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container quick-links-section">
                <div className="quick-links-grid">
                    {siteContent.quickLinks.map((item) => (
                        <button
                            key={item.to}
                            type="button"
                            className="quick-link-card quick-link-button"
                            onClick={() => delayedNavigate(item.to)}
                        >
                            <span className="quick-link-label">{item.label}</span>
                            <span className="quick-link-description">{item.description}</span>
                        </button>
                    ))}
                </div>
            </section>

            <section className="container section">
                <SectionIntro
                    eyebrow="Selected work"
                    title="Portfolio"
                    description="A selection of technical and research-oriented projects across AI, distributed systems, and formal reasoning."
                />

                <div className="cards-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;