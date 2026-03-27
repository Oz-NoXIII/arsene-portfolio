export const phaseMap = {
    "/": 0,                      // Home
    "/portfolio": 1,             // Dawn
    "/interactive-portfolio": 2, // Day
    "/about": 3                  // Dusk
};

export function getSkyMode(pathname) {
    if (pathname === "/contact") {
        return { type: "convergence" };
    }

    if (pathname.startsWith("/projects/angel-portfolio-game")) {
        return { type: "cycle", phase: 2 };
    }

    if (pathname.startsWith("/projects/")) {
        return { type: "cycle", phase: 1 };
    }

    return {
        type: "cycle",
        phase: phaseMap[pathname] ?? 0
    };
}

export function getRouteDirection(fromPath, toPath) {
    const normalize = (path) => {
        if (path === "/contact") return "/contact";
        if (path.startsWith("/projects/angel-portfolio-game")) return "/interactive-portfolio";
        if (path.startsWith("/projects/")) return "/portfolio";
        return path;
    };

    const from = normalize(fromPath);
    const to = normalize(toPath);

    if (from === to) return 0;

    // Contact is outside the cycle
    if (from === "/contact" || to === "/contact") {
        return 0;
    }

    const explicitDirections = {
        "/->/portfolio": 1,
        "/portfolio->/interactive-portfolio": 1,
        "/interactive-portfolio->/about": 1,
        "/about->/": 1,

        "/about->/interactive-portfolio": -1,
        "/interactive-portfolio->/portfolio": -1,
        "/portfolio->/": -1,

        //special rules
        "/->/about": 3,
        "/interactive-portfolio->/": -2,
        "/about->/portfolio": -2,
    };

    const key = `${from}->${to}`;
    if (key in explicitDirections) {
        return explicitDirections[key];
    }

    // fallback: shortest path for any other combination
    const fromPhase = phaseMap[from];
    const toPhase = phaseMap[to];

    const clockwise = (toPhase - fromPhase + 4) % 4;
    const counterclockwise = clockwise - 4;

    return Math.abs(clockwise) <= Math.abs(counterclockwise)
        ? clockwise
        : counterclockwise;
}