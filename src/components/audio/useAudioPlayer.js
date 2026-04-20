import { useContext } from "react";
import { AudioContextState } from "./AudioContext";

export function useAudioPlayer() {
    const context = useContext(AudioContextState);

    if (!context) {
        throw new Error("useAudioPlayer must be used inside AudioProvider");
    }

    return context;
}

