import { createContext, useContext, useMemo, useState } from "react";

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [targetPath, setTargetPath] = useState(null);

    const value = useMemo(
        () => ({
            isTransitioning,
            setIsTransitioning,
            targetPath,
            setTargetPath,
            isContactTransition: targetPath === "/contact"
        }),
        [isTransitioning, targetPath]
    );

    return (
        <TransitionContext.Provider value={value}>
            {children}
        </TransitionContext.Provider>
    );
}

export function usePageTransition() {
    const context = useContext(TransitionContext);

    if (!context) {
        throw new Error("usePageTransition must be used inside TransitionProvider");
    }

    return context;
}