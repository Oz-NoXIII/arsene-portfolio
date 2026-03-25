import { Link } from "react-router-dom";

function Home() {
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

            <section className="container section">
                <div className="section-heading">
                    <p className="eyebrow">Featured project</p>
                    <h2>Angel Portfolio Game</h2>
                </div>

                <article className="feature-card">
                    <p>
                        An experimental portfolio presented as an interactive game
                        experience inspired by my academic journey, projects, and
                        progression.
                    </p>
                    <p className="status-text">Status: In development</p>
                    <Link to="/projects/angel-portfolio-game" className="text-link">
                        Open project page
                    </Link>
                </article>
            </section>

            <section className="container section">
                <div className="section-heading">
                    <p className="eyebrow">Selected work</p>
                    <h2>Projects</h2>
                </div>

                <div className="cards-grid">
                    <article className="card">
                        <h3>Apache Ozone HA POC</h3>
                        <p>Distributed storage cluster proof of concept.</p>
                    </article>

                    <article className="card">
                        <h3>Fire Detection Classification</h3>
                        <p>Deep learning project for fire image classification.</p>
                    </article>

                    <article className="card">
                        <h3>DNN Compression & Explainability</h3>
                        <p>Interactive framework for neural network analysis.</p>
                    </article>

                    <article className="card">
                        <h3>XPath Query Containment</h3>
                        <p>Master’s thesis focused on formal reasoning around XPath queries.</p>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Home;