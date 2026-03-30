function Contact() {
    return (
        <section className="container section page-section contact-page">
            <p className="eyebrow">Contact</p>
            <h1 className="page-title">Contact</h1>
            <p className="page-text">
                A final point of clarity. If my work speaks to you, feel free to reach out.
            </p>

            <div className="card contact-card">
                <p>
                    Email: <a href="mailto:mujyabwami@gmail.com">mujyabwami@gmail.com</a>
                </p>

                <p>
                    GitHub:{" "}
                    <a
                        href="https://github.com/Oz-NoXIII"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/Oz-NoXIII
                    </a>
                </p>

                <p>
                    LinkedIn:{" "}
                    <a
                        href="https://linkedin.com/in/arsene-mujyabwami"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        linkedin.com/in/arsene-mujyabwami
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Contact;