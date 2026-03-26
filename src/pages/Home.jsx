import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";
import SectionIntro from "../components/ui/SectionIntro";

function Home() {
    const featuredProject = projects.find((project) => project.featured);
    const highlightedProjects = projects.filter((project) => !project.featured);

    return (
        <>
            <section className="hero container section">
                <p className="eyebrow">Software • AI • Interactive Worlds</p>
                <h1 className="hero-title">Building technical systems with imagination.</h1>

                <p className="hero-text">
                    Computer Science student exploring software development, artificial
                    intelligence, theory, music, reading, and interactive experiences.
                    I like projects where structure, curiosity, and personality meet.
                </p>

                <div className="hero-actions">
                    <Link to="/projects" className="button button-primary">
                        View projects
                    </Link>
                    <Link to="/about" className="button button-secondary">
                        About me
                    </Link>
                </div>
            </section>

            {featuredProject ? (
                <section className="container section">
                    <SectionIntro
                        eyebrow="Featured project"
                        title={featuredProject.title}
                        description="A project at the intersection of portfolio design, immersion, and interactive storytelling."
                    />

                    <article className="feature-card">
                        <p>{featuredProject.shortDescription}</p>
                        <p className="status-text">Status: {featuredProject.status}</p>
                        <Link to={`/projects/${featuredProject.slug}`} className="text-link">
                            Open project page
                        </Link>
                    </article>
                </section>
            ) : null}

            <section className="container section">
                <SectionIntro
                    eyebrow="Selected work"
                    title="Projects"
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