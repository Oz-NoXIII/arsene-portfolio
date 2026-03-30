import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePageTransition } from "../layout/TransitionProvider";

function ContactTransition() {
    const location = useLocation();
    const { isTransitioning, isContactTransition } = usePageTransition();
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (isTransitioning && isContactTransition) {
            setActive(true);
            return;
        }

        if (location.pathname === "/contact" && active) {
            const timeout = window.setTimeout(() => {
                setActive(false);
            }, 0);

            return () => window.clearTimeout(timeout);
        }
    }, [isTransitioning, isContactTransition, location.pathname, active]);

    if (!active) return null;

    return <div className="contact-transition" aria-hidden="true" />;
}

export default ContactTransition;