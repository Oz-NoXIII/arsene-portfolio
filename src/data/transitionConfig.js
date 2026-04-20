export const TRANSITION_DURATION = 1000;
export const CONTACT_TRANSITION_DURATION = 420;
const INTERACTIVE_PORTFOLIO_PATH = "/interactive-portfolio";
const METANOIA_PROJECT_PATH = "/projects/angel-portfolio-game";

export function getTransitionDuration(fromPath, toPath, lastPathBeforeContact = null) {
	if (
		(fromPath === INTERACTIVE_PORTFOLIO_PATH && toPath === METANOIA_PROJECT_PATH) ||
		(fromPath === METANOIA_PROJECT_PATH && toPath === INTERACTIVE_PORTFOLIO_PATH)
	) {
		return CONTACT_TRANSITION_DURATION;
	}

	if (
		fromPath === "/portfolio" &&
		typeof toPath === "string" &&
		toPath.startsWith("/projects/") &&
		toPath !== METANOIA_PROJECT_PATH
	) {
		return CONTACT_TRANSITION_DURATION;
	}

	if (
		toPath === "/portfolio" &&
		typeof fromPath === "string" &&
		fromPath.startsWith("/projects/") &&
		fromPath !== METANOIA_PROJECT_PATH
	) {
		return CONTACT_TRANSITION_DURATION;
	}

	if (toPath === "/contact") {
		return CONTACT_TRANSITION_DURATION;
	}

	if (
		fromPath === "/contact" &&
		lastPathBeforeContact !== null &&
		toPath === lastPathBeforeContact
	) {
		return CONTACT_TRANSITION_DURATION;
	}

	return TRANSITION_DURATION;
}
