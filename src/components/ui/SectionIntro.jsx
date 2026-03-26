function SectionIntro({ eyebrow, title, description }) {
    return (
        <div className="section-intro">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className="section-title">{title}</h2>
            {description ? <p className="section-description">{description}</p> : null}
        </div>
    );
}

export default SectionIntro;