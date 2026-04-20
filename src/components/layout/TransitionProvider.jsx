import { useMemo, useState } from "react";
import { TransitionContext } from "./TransitionContext";

export function TransitionProvider({ children }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [targetPath, setTargetPath] = useState(null);
    const [transitionFromPath, setTransitionFromPath] = useState(null);
    const [lastPathBeforeContact, setLastPathBeforeContact] = useState(null);

    const value = useMemo(
        () => ({
            isTransitioning,
            setIsTransitioning,
            targetPath,
            setTargetPath,
            transitionFromPath,
            setTransitionFromPath,
            lastPathBeforeContact,
            setLastPathBeforeContact,
            isContactTransition: targetPath === "/contact"
        }),
        [isTransitioning, targetPath, transitionFromPath, lastPathBeforeContact]
    );

    return (
        <TransitionContext.Provider value={value}>
            {children}
        </TransitionContext.Provider>
    );
}
