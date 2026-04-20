import { useNavigate, useLocation } from "react-router-dom";
import { usePageTransition } from "./usePageTransition";
import { getTransitionDuration } from "../../data/transitionConfig";

export function useDelayedNavigate() {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        isTransitioning,
        setIsTransitioning,
        setTargetPath,
        setTransitionFromPath,
        lastPathBeforeContact,
        setLastPathBeforeContact
    } = usePageTransition();

    function delayedNavigate(path) {
        if (isTransitioning || path === location.pathname) {
            return;
        }

        const fromPath = location.pathname;
        if (path === "/contact") {
            setLastPathBeforeContact(fromPath);
        }

        setTransitionFromPath(fromPath);
        setTargetPath(path);
        setIsTransitioning(true);

        window.setTimeout(() => {
            navigate(path);
        }, getTransitionDuration(fromPath, path, lastPathBeforeContact));
    }

    return delayedNavigate;
}