import { useNavigate, useLocation } from "react-router-dom";
import { usePageTransition } from "./TransitionProvider";

const TRANSITION_DURATION = 1000;

export function useDelayedNavigate() {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        isTransitioning,
        setIsTransitioning,
        setTargetPath
    } = usePageTransition();

    function delayedNavigate(path) {
        if (isTransitioning || path === location.pathname) {
            return;
        }

        setTargetPath(path);
        setIsTransitioning(true);

        window.setTimeout(() => {
            navigate(path);
        }, TRANSITION_DURATION);
    }

    return delayedNavigate;
}