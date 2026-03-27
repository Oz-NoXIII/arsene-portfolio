import { usePageTransition } from "../layout/TransitionProvider";

function TransitionVeil() {
    const { isTransitioning } = usePageTransition();

    return (
        <div className={`transition-veil ${isTransitioning ? "active" : ""}`} />
    );
}

export default TransitionVeil;