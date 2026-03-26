import { useEffect, useState } from "react";

function CursorGlow() {
    const [position, setPosition] = useState({ x: -200, y: -200 });

    useEffect(() => {
        function handleMove(event) {
            setPosition({ x: event.clientX, y: event.clientY });
        }

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <div
            className="cursor-glow"
            aria-hidden="true"
            style={{
                transform: `translate(${position.x - 140}px, ${position.y - 140}px)`
            }}
        />
    );
}

export default CursorGlow;