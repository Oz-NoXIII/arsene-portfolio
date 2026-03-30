import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function InteractivePortfolio() {

    const featuredProject = projects.find((project) => project.featured);
    return (
        <section className="container section page-section">
            <p className="eyebrow">Interactive Portfolio</p>
            <h1 className="page-title">{featuredProject.title}</h1>

            <div className="status-badge">In development</div>

            <div className="interactive-hero">
                <div className="interactive-hero-image-wrapper">
                    <img
                        src={"/images/projects/angel-portfolio-game.jpg"}
                        alt="Angel Portfolio Game"
                        className="interactive-hero-image"
                    />
                </div>

                <div className="interactive-hero-content">
                    <p className="page-text">
                        Angel Portfolio Game is an experimental portfolio project designed
                        as a small interactive experience. Instead of navigating a traditional
                        portfolio, the visitor progresses through levels inspired by my academic journey.
                    </p>

                    <p className="page-text">
                        This page represents the “day” phase of the portfolio: the most open,
                        vivid, and world-facing part of the site, where the interactive vision
                        behind the project becomes central.
                    </p>

                    <div className="tag-list large">
                        <span className="tag">Interactive</span>
                        <span className="tag">Portfolio</span>
                        <span className="tag">Game</span>
                        <span className="tag">In development</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InteractivePortfolio;