import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useDelayedNavigate } from "../components/layout/useDelayedNavigate";

function InteractivePortfolio() {
    const delayedNavigate = useDelayedNavigate();
    const featuredProject = projects.find((project) => project.featured);
    return (
        <section className="container section page-section">
            <p className="eyebrow">Interactive Portfolio</p>
            <h1 className="page-title">{featuredProject.title}</h1>

            <div className="status-badge">{featuredProject.status}</div>

            <div className="interactive-hero">
                <div className="interactive-hero-image-wrapper">
                    <img
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        className="interactive-hero-image"
                    />
                </div>

                <div className="interactive-hero-content">
                    <div className="tag-list large">
                        {featuredProject.tags.map((tag) => (
                            <span key={tag} className="tag">
            {tag}
          </span>
                        ))}
                    </div>

                    <p className="page-text">
                        {featuredProject.shortDescription}
                    </p>
                    <p className="hero-panel-title">
                        Currently in development.
                    </p>

                    <span className="text-link" onClick={() => delayedNavigate(`/projects/${featuredProject.slug}`)}
                          onKeyDown={(event) => {
                              if (event.key === "Enter" || event.key === " ") {
                                  event.preventDefault();
                                  delayedNavigate(`/projects/${featuredProject.slug}`);
                              }
                          }}
                          role="button"
                          tabIndex={0}>Read more</span>
                </div>
            </div>
        </section>
    );
}

export default InteractivePortfolio;