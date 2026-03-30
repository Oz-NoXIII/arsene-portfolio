import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePageTransition } from "./TransitionProvider";

function PageTransition({ children }) {
    const location = useLocation();
    const { isTransitioning, setIsTransitioning, setTargetPath } = usePageTransition();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (isTransitioning) {
            setIsVisible(false);
            return;
        }

        const revealDelay = location.pathname === "/contact" ? 180 : 60;

        const timeout = window.setTimeout(() => {
            setIsVisible(true);
        }, 0);

        return () => window.clearTimeout(timeout);
    }, [isTransitioning, location.pathname]);

    useEffect(() => {
        if (!isTransitioning) {
            return;
        }

        const timeout = window.setTimeout(() => {
            setIsTransitioning(false);
            setTargetPath(null);
        }, 120);

        return () => window.clearTimeout(timeout);
    }, [location.pathname]);

    return (
        <div className={`page-transition ${isVisible ? "visible" : ""}`}>
            {children}
        </div>
    );
}

export default PageTransition;