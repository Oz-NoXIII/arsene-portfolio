import { useEffect } from "react";
import { usePageTransition } from "./usePageTransition";
import { getTransitionDuration } from "../../data/transitionConfig";

function PageTransition({ children }) {
    const {
        isTransitioning,
        targetPath,
        transitionFromPath,
        lastPathBeforeContact,
        setIsTransitioning,
        setTargetPath,
        setTransitionFromPath
    } = usePageTransition();

    useEffect(() => {
        if (!isTransitioning) {
            return;
        }

        const duration = getTransitionDuration(
            transitionFromPath,
            targetPath,
            lastPathBeforeContact
        );
        const timeout = window.setTimeout(() => {
            setIsTransitioning(false);
            setTargetPath(null);
            setTransitionFromPath(null);
        }, duration);

        return () => window.clearTimeout(timeout);
    }, [
        isTransitioning,
        targetPath,
        transitionFromPath,
        lastPathBeforeContact,
        setIsTransitioning,
        setTargetPath,
        setTransitionFromPath
    ]);

    return (
        <div className={`page-transition ${isTransitioning ? "" : "visible"}`}>
            {children}
        </div>
    );
}

export default PageTransition;