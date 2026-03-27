import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

function Portfolio() {
    return (
        <section className="container section page-section">
            <p className="eyebrow">Portfolio</p>
            <h1 className="page-title">Selected work</h1>

            <p className="page-text projects-intro">
                A collection of projects across software, AI, distributed systems,
                formal reasoning, and interactive experimentation.
            </p>

            <div className="cards-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;