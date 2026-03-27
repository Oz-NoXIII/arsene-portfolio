import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { siteContent } from "../data/siteContent";
import ProjectCard from "../components/ui/ProjectCard";
import SectionIntro from "../components/ui/SectionIntro";

function Home() {
    const featuredProject = projects.find((project) => project.featured);
    const highlightedProjects = projects.filter((project) => !project.featured);

    return (
        <>
            <section className="hero hero-split container section">
                <div className="hero-copy">
                    <p className="eyebrow">Software • AI • Interactive Worlds</p>
                    <h1 className="hero-title">Building technical systems with imagination.</h1>

                    <p className="hero-text">
                        Computer Science student exploring software development, artificial
                        intelligence, theory, music, reading, and interactive experiences.
                        I like projects where structure, curiosity, and personality meet.
                    </p>

                    <div className="hero-actions">
                        <Link to="/projects" className="button button-primary">
                            View portfolio
                        </Link>
                        <Link to="/about" className="button button-secondary">
                            About me
                        </Link>
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
                        <Link key={item.to} to={item.to} className="quick-link-card">
                            <span className="quick-link-label">{item.label}</span>
                            <span className="quick-link-description">{item.description}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {featuredProject ? (
                <section className="container section">
                    <SectionIntro
                        eyebrow="Featured project"
                        title={featuredProject.title}
                        description="A project at the intersection of portfolio design, immersion, and interactive storytelling."
                    />

                    <article className="feature-card feature-card-rich">
                        <div className="feature-card-image-wrapper">
                            <img
                                src={featuredProject.image}
                                alt={featuredProject.title}
                                className="feature-card-image"
                            />
                        </div>

                        <div className="feature-card-content">
                            <p>{featuredProject.shortDescription}</p>
                            <p className="status-text">Status: {featuredProject.status}</p>

                            <div className="tag-list large">
                                {featuredProject.tags.map((tag) => (
                                    <span key={tag} className="tag">
                    {tag}
                  </span>
                                ))}
                            </div>

                            <Link to={`/projects/${featuredProject.slug}`} className="text-link">
                                Open project page
                            </Link>
                        </div>
                    </article>
                </section>
            ) : null}

            <section className="container section">
                <SectionIntro
                    eyebrow="Selected work"
                    title="Portfolio"
                    description="A selection of technical and research-oriented projects across AI, distributed systems, and formal reasoning."
                />

                <div className="cards-grid">
                    {highlightedProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;