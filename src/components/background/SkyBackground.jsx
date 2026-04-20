import {useEffect, useMemo, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import {usePageTransition} from "../layout/usePageTransition";
import {getRouteDirection, getSkyMode} from "../../data/skyThemes";
import { getTransitionDuration } from "../../data/transitionConfig";

function lerp(start, end, t) {
    return start + (end - start) * t;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function mixColor(a, b, t) {
    const ar = parseInt(a.slice(1, 3), 16);
    const ag = parseInt(a.slice(3, 5), 16);
    const ab = parseInt(a.slice(5, 7), 16);

    const br = parseInt(b.slice(1, 3), 16);
    const bg = parseInt(b.slice(3, 5), 16);
    const bb = parseInt(b.slice(5, 7), 16);

    const rr = Math.round(lerp(ar, br, t));
    const rg = Math.round(lerp(ag, bg, t));
    const rb = Math.round(lerp(ab, bb, t));

    return `rgb(${rr}, ${rg}, ${rb})`;
}

const phases = [
    {
        name: "night",
        top: "#09101f",
        bottom: "#070a11",
        stars: 1.0,
        clouds: 0.46,
        angle: -140,
        glowOpacity: 0.1,
        glowColor: "#97adff"
    },
    {
        name: "dawn",
        top: "#24314f",
        bottom: "#111827",
        stars: 0.3,
        clouds: 0.66,
        angle: -20,
        glowOpacity: 0.22,
        glowColor: "#ffd6ad"
    },
    {
        name: "day",
        top: "#5a7db6",
        bottom: "#1b3356",
        stars: 0.0,
        clouds: 0.95,
        angle: 35,
        glowOpacity: 0.3,
        glowColor: "#fff1cf"
    },
    {
        name: "dusk",
        top: "#38264b",
        bottom: "#11111b",
        stars: 0.45,
        clouds: 0.62,
        angle: 155,
        glowOpacity: 0.18,
        glowColor: "#ffb48f"
    }
];

const convergenceState = {
    top: "#20243a",
    bottom: "#0e1118",
    stars: 0.24,
    clouds: 0.6,
    glowX: 50,
    glowY: 24,
    glowOpacity: 0.18,
    glowColor: "#d9c8ff"
};

function angleToPosition(angleDegrees) {
    const angle = (angleDegrees * Math.PI) / 180;

    const centerX = 50;
    const centerY = 72;   // lower center → creates a “horizon”
    const radiusX = 42;
    const radiusY = 42;   // more circular → more natural arc

    return {
        x: centerX + radiusX * Math.cos(angle),
        y: centerY + radiusY * Math.sin(angle)
    };
}

function interpolatePhaseValue(value, angle) {
    const phaseCount = phases.length;
    const normalized = ((value % phaseCount) + phaseCount) % phaseCount;
    const baseIndex = Math.floor(normalized);
    const nextIndex = (baseIndex + 1) % phaseCount;
    const t = normalized - baseIndex;

    const from = phases[baseIndex];
    const to = phases[nextIndex];

    const position = angleToPosition(angle);

    return {
        top: mixColor(from.top, to.top, t),
        bottom: mixColor(from.bottom, to.bottom, t),
        stars: lerp(from.stars, to.stars, t),
        clouds: lerp(from.clouds, to.clouds, t),
        glowX: position.x,
        glowY: position.y,
        glowOpacity: lerp(from.glowOpacity, to.glowOpacity, t),
        glowColor: mixColor(from.glowColor, to.glowColor, t),
        angle,
        cloudShiftX: angle * 0.12,
        cloudShiftY: angle * -0.04,
        starRotation: angle * 0.35
    };
}

function mixSkyStates(a, b, t) {
    return {
        top: mixColor(
            rgbStringToHex(a.top),
            rgbStringToHex(b.top),
            t
        ),
        bottom: mixColor(
            rgbStringToHex(a.bottom),
            rgbStringToHex(b.bottom),
            t
        ),
        stars: lerp(a.stars, b.stars, t),
        clouds: lerp(a.clouds, b.clouds, t),
        glowX: lerp(a.glowX, b.glowX, t),
        glowY: lerp(a.glowY, b.glowY, t),
        glowOpacity: lerp(a.glowOpacity, b.glowOpacity, t),
        glowColor: mixColor(
            rgbStringToHex(a.glowColor),
            rgbStringToHex(b.glowColor),
            t
        )
    };
}

function rgbStringToHex(color) {
    if (color.startsWith("#")) {
        return color;
    }

    const values = color
        .replace("rgb(", "")
        .replace(")", "")
        .split(",")
        .map((item) => Number(item.trim()));

    return `#${values
        .map((value) => value.toString().padStart(2, "0"))
        .join("")}`;
}

function phaseToAngle(phase) {
    return phase * 90 - 140;
}

function getContinuousTargetAngle(currentAngle, targetPhaseValue, directionSteps) {
    // Start from the wrapped target angle
    let candidate = phaseToAngle(targetPhaseValue);

    // Move the candidate by full turns until it matches the intended direction
    if (directionSteps > 0) {
        while (candidate <= currentAngle) {
            candidate += 360;
        }
    } else if (directionSteps < 0) {
        while (candidate >= currentAngle) {
            candidate -= 360;
        }
    } else {
        candidate = currentAngle;
    }

    return candidate;
}

function SkyBackground() {
    const location = useLocation();
    const { isTransitioning, targetPath, transitionFromPath, lastPathBeforeContact } = usePageTransition();

    const currentPath = location.pathname;
    const [lastNonContactPath, setLastNonContactPath] = useState(
        currentPath === "/contact" ? "/" : currentPath
    );
    const effectivePath =
        isTransitioning && targetPath ? targetPath : currentPath;

    const skyPath =
        effectivePath === "/contact"
            ? lastNonContactPath
            : effectivePath;

    const animationRef = useRef(null);

    useEffect(() => {
        if (currentPath === "/contact" || currentPath === lastNonContactPath) {
            return;
        }

        const frame = requestAnimationFrame(() => {
            setLastNonContactPath(currentPath);
        });

        return () => cancelAnimationFrame(frame);
    }, [currentPath, lastNonContactPath]);

    const initialMode = getSkyMode(skyPath);
    const [phaseValue, setPhaseValue] = useState(
        initialMode.type === "cycle" ? initialMode.phase : 0
    );
    const [convergenceMix, setConvergenceMix] = useState(
        initialMode.type === "convergence" ? 1 : 0
    );
    const [visualAngle, setVisualAngle] = useState(
        (initialMode.type === "cycle" ? initialMode.phase : 0) * 90 - 140
    );
    const phaseValueRef = useRef(phaseValue);
    const convergenceMixRef = useRef(convergenceMix);
    const visualAngleRef = useRef(visualAngle);

    useEffect(() => {
        phaseValueRef.current = phaseValue;
    }, [phaseValue]);

    useEffect(() => {
        convergenceMixRef.current = convergenceMix;
    }, [convergenceMix]);

    useEffect(() => {
        visualAngleRef.current = visualAngle;
    }, [visualAngle]);

    useEffect(() => {
        const targetMode = getSkyMode(skyPath);
        const duration = getTransitionDuration(
            transitionFromPath,
            targetPath,
            lastPathBeforeContact
        );
        const start = performance.now();

        const startPhase = phaseValueRef.current;
        const startConvergence = convergenceMixRef.current;
        const startAngle = visualAngleRef.current;

        cancelAnimationFrame(animationRef.current);

        function animate(now) {
            const elapsed = now - start;
            const progress = clamp(elapsed / duration, 0, 1);

            const eased =
                progress < 0.5
                    ? 2 * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            if (targetMode.type === "cycle") {
                const fromSkyPath = currentPath === "/contact" ? lastNonContactPath : currentPath;

                const directionDelta = getRouteDirection(fromSkyPath, skyPath);

                const targetPhaseValue = startPhase + directionDelta;

                const targetAngle = getContinuousTargetAngle(
                    startAngle,
                    targetPhaseValue,
                    directionDelta
                );

                setPhaseValue(lerp(startPhase, targetPhaseValue, eased));
                setVisualAngle(lerp(startAngle, targetAngle, eased));
                setConvergenceMix(lerp(startConvergence, 0, eased));
            } else {
                setConvergenceMix(lerp(startConvergence, 1, eased));
            }

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                if (targetMode.type === "cycle") {
                    const fromSkyPath = currentPath === "/contact" ? lastNonContactPath : currentPath;

                    const directionDelta = getRouteDirection(fromSkyPath, skyPath);

                    const finalPhaseValue = startPhase + directionDelta;

                    const finalAngle = getContinuousTargetAngle(
                        startAngle,
                        finalPhaseValue,
                        directionDelta
                    );

                    setPhaseValue(finalPhaseValue);
                    setVisualAngle(finalAngle);
                    setConvergenceMix(0);
                } else {
                    setConvergenceMix(1);
                }
            }
        }

        animationRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationRef.current);
    }, [skyPath, currentPath, lastNonContactPath, targetPath, transitionFromPath, lastPathBeforeContact]);

    const sky = useMemo(() => {
        const cycleSky = interpolatePhaseValue(phaseValue, visualAngle);

        if (convergenceMix <= 0) {
            return cycleSky;
        }

        return mixSkyStates(cycleSky, convergenceState, convergenceMix);
    }, [phaseValue, visualAngle, convergenceMix]);

    return (
        <div className="sky-root"
             aria-hidden="true"
        >
            <div className="sky-horizon" />
            <div
                className="sky-gradient"
                style={{
                    background: `linear-gradient(180deg, ${sky.top} 0%, ${sky.bottom} 100%)`
                }}
            />
            <div
                className="sky-stars"
                style={{
                    opacity: sky.stars,
                    transform: `rotate(${sky.starRotation}deg)`
                }}
            />
            <div
                className="sky-clouds"
                style={{
                    opacity: sky.clouds,
                    transform: `translate(${sky.cloudShiftX}px, ${sky.cloudShiftY}px)`
                }}
            />
            <div className="sky-grid" />
            <div
                className="sky-glow"
                style={{
                    opacity: sky.glowOpacity,
                    background: `radial-gradient(circle, ${sky.glowColor} 0%, transparent 60%)`,
                    left: `${sky.glowX}%`,
                    top: `${sky.glowY}%`
                }}
            />
            <div
                className="sky-body"
                style={{
                    left: `${sky.glowX}%`,
                    top: `${sky.glowY}%`,
                    opacity: sky.glowOpacity
                }}
            />
        </div>
    );
}

export default SkyBackground;