import { siteContent } from "../data/siteContent";
import { useDelayedNavigate } from "../components/layout/useDelayedNavigate";

function Home() {
    const delayedNavigate = useDelayedNavigate();

    return (
        <>
            <section className="hero hero-split container section">
                <div className="hero-copy">
                    <p className="eyebrow"> From theory to systems to real-world use </p>
                    <h1 className="hero-title">
                        Technical when it matters.<br />
                        Practical when it counts.
                    </h1>

                    <p className="hero-text">
                        Master’s graduate in Computer Science, interested in building software and AI systems that go from theory to real-world use.
                    </p>
                </div>

                <div className="hero-visual" aria-hidden="true">
                    <div className="hero-orb" />
                    <div className="hero-lines" />
                </div>
            </section>

            <section className="container quick-links-section">
                <div className="quick-links-grid">
                    {siteContent.quickLinks.map((item) => (
                        <button
                            key={item.to}
                            type="button"
                            className="quick-link-card quick-link-button"
                            onClick={() => delayedNavigate(item.to)}
                        >
                            <span className="quick-link-label">{item.label}</span>
                            <span className="quick-link-description">{item.description}</span>
                        </button>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;