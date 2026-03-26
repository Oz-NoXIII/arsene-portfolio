import { useEffect, useState } from "react";

function PageTransition({ children }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            setIsVisible(true);
        }, 30);

        return () => window.clearTimeout(timeout);
    }, []);

    return (
        <div className={`page-transition ${isVisible ? "visible" : ""}`}>
            {children}
        </div>
    );
}

export default PageTransition;