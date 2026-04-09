import { useDelayedNavigate } from "../layout/useDelayedNavigate";

function ProjectCard({ project }) {
    const delayedNavigate = useDelayedNavigate();

    return (
        <article
            className="card project-card project-card-clickable"
            onClick={() => delayedNavigate(`/projects/${project.slug}`)}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    delayedNavigate(`/projects/${project.slug}`);
                }
            }}
            role="button"
            tabIndex={0}
        >
            <div className="project-image-wrapper">
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                    width="300"
                    height="150"
                />
            </div>

            <div className="project-card-content">
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

                <span className="text-link">Read more</span>
            </div>
        </article>
    );
}

export default ProjectCard;