function About() {
    return (
        <section className="container section page-section narrow">
            <p className="eyebrow">About</p>
            <h1 className="page-title">A technical profile with creative instincts.</h1>

            <p className="page-text">
                I am a Computer Science student interested in software development,
                artificial intelligence, theory, and interactive applications. I enjoy
                building projects that combine structure, experimentation, and practical value.
            </p>

            <p className="page-text">
                Beyond technical work, I am also drawn to music, reading, and worlds with
                atmosphere and meaning. I want this portfolio to reflect both the engineer
                and the imaginative side behind my projects.
            </p>

            <div className="about-columns">
                <div className="card">
                    <h3>What drives me</h3>
                    <p>
                        Curiosity, experimentation, and the desire to create technical work
                        with identity rather than purely functional output.
                    </p>
                </div>

                <div className="card">
                    <h3>What I enjoy</h3>
                    <p>
                        Software, AI, music, reading, atmosphere-rich worlds, and projects
                        that connect structure with imagination.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;