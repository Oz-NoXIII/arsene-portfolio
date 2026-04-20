import { usePageTransition } from "../layout/usePageTransition";

function ContactTransition() {
    const { isTransitioning, isContactTransition } = usePageTransition();

    const active = isTransitioning && isContactTransition;

    if (!active) return null;

    return <div className="contact-transition" aria-hidden="true" />;
}

export default ContactTransition;