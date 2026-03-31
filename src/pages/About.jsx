function About() {
    return (
        <section className="container section page-section about-page">
            <p className="eyebrow">About</p>
            <h1 className="page-title">Building with both rigor and intent.</h1>

            <p className="page-text">
                I am a Master’s graduate in Computer Science with a background spanning
                software development, artificial intelligence, theoretical computer science,
                and optimization. My work focuses on building systems that are both technically
                sound and meaningful in practice.
            </p>

            <p className="page-text">
                I approach projects by balancing theory and application: understanding the
                underlying concepts, then translating them into concrete solutions. Whether it
                is a distributed system, a machine learning model, or an interactive experience,
                I aim to build things that hold up beyond the initial idea.
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
                        Software systems, artificial intelligence, and projects that connect
                        technical depth with real-world use. I am particularly interested in
                        how ideas move from theory to implementation.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;