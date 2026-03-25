import { Link } from "react-router-dom";

function Projects() {
    return (
        <section className="container section page-section">
            <p className="eyebrow">Projects</p>
            <h1 className="page-title">Selected work</h1>

            <div className="cards-grid">
                <article className="card">
                    <h3>Angel Portfolio Game</h3>
                    <p>Interactive portfolio designed as a game experience.</p>
                    <p className="status-text">In development</p>
                    <Link to="/projects/angel-portfolio-game" className="text-link">
                        Read more
                    </Link>
                </article>

                <article className="card">
                    <h3>Apache Ozone HA POC</h3>
                    <p>Configuration, testing, and validation of a distributed cluster.</p>
                </article>

                <article className="card">
                    <h3>Fire Detection Classification</h3>
                    <p>PyTorch-based deep learning project with semantic evaluation.</p>
                </article>

                <article className="card">
                    <h3>DNN Compression & Explainability</h3>
                    <p>Interactive framework for compression and explainability.</p>
                </article>

                <article className="card">
                    <h3>XPath Query Containment</h3>
                    <p>Master’s thesis project in database theory and formal reasoning.</p>
                </article>
            </div>
        </section>
    );
}

export default Projects;