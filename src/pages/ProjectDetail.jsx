import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <section className="container section page-section narrow">
                <p className="eyebrow">Project</p>
                <h1 className="page-title">Project not found</h1>
                <p className="page-text">
                    The project you are looking for does not exist.
                </p>
            </section>
        );
    }

    return (
        <section className="container section page-section narrow">
            <p className="eyebrow">Project</p>
            <h1 className="page-title">{project.title}</h1>

            <div className="status-badge">{project.status}</div>

            <div className="tag-list large">
                {project.tags.map((tag) => (
                    <span key={tag} className="tag">
            {tag}
          </span>
                ))}
            </div>

            <div className="project-detail-content">
                {project.fullDescription.map((paragraph) => (
                    <p key={paragraph} className="page-text">
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
}

export default ProjectDetail;