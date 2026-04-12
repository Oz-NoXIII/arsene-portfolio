function About() {
    return (
        <section className="container section page-section about-page">
            <p className="eyebrow">About</p>
            <h1 className="page-title">Building with both rigor and intent.</h1>

            <p className="page-text">
                I am a Master’s graduate in Computer Science with a background spanning software development,
                artificial intelligence, theoretical computer science, and optimization. Alongside my technical
                training, I explored topics in management, entrepreneurship, and the societal impact of technology.
            </p>

            <p className="page-text">
                I approach projects with a dual lens: technical depth and contextual awareness.
                Beyond building systems, I consider how they are used, how they create value,
                and what constraints shape them.
            </p>

            <p className="page-text">
                This perspective allows me to design solutions that are not only robust,
                but also relevant and aligned with real-world needs.
            </p>

            <div className="about-columns">
                <div className="card about-card">
                    <h3>How I work</h3>
                    <p>
                        I break problems down, explore different approaches, and iterate until
                        the solution is both clear and reliable. I value structure, but I am
                        comfortable adapting when constraints change.
                    </p>
                </div>

                <div className="card about-card">
                    <h3>What I’m interested in</h3>
                    <p>
                        I have a deep interest in immersive and not to predictable books, series, and games in romance or isekai genres. Beside that, I like working on ideas that piqued my curiosity.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;