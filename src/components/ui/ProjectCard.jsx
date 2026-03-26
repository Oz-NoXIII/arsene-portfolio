import { Link } from "react-router-dom";

function ProjectCard({ project }) {
    return (
        <article className="card project-card">
            <div className="project-card-top">
                <p className="project-status">{project.status}</p>
                <div className="tag-list">
                    {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="tag">
              {tag}
            </span>
                    ))}
                </div>
            </div>

            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>

            <Link to={`/projects/${project.slug}`} className="text-link">
                Read more
            </Link>
        </article>
    );
}

export default ProjectCard;