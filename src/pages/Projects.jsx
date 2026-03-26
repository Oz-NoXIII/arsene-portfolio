import { projects } from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

function Projects() {
    return (
        <section className="container section page-section">
            <p className="eyebrow">Projects</p>
            <h1 className="page-title">Selected work</h1>

            <p className="page-text projects-intro">
                Projects that reflect both technical rigor and creative curiosity,
                from distributed systems and deep learning to experimental interactive work.
            </p>

            <div className="cards-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;