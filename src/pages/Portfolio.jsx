import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

function Portfolio() {
    return (
        <section className="container section page-section">
            <p className="eyebrow">Portfolio</p>
            <h1 className="page-title">Selected works</h1>

            <p className="page-text projects-intro">
                A selection of my projects.
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