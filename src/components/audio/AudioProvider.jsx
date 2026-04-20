import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AudioContextState } from "./AudioContext";

const STORAGE_KEY_ENABLED = "portfolio-audio-enabled";
const STORAGE_KEY_VOLUME = "portfolio-audio-volume";

function getInitialIsPlaying() {
    if (typeof window === "undefined") {
        return true;
    }

    const savedEnabled = window.localStorage.getItem(STORAGE_KEY_ENABLED);
    return savedEnabled === null ? true : savedEnabled === "true";
}

function getInitialVolume() {
    if (typeof window === "undefined") {
        return 0.25;
    }

    const savedVolume = window.localStorage.getItem(STORAGE_KEY_VOLUME);
    const parsedVolume = Number(savedVolume);

    if (savedVolume === null || Number.isNaN(parsedVolume)) {
        return 0.25;
    }

    return parsedVolume;
}

export function AudioProvider({ children }) {
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(getInitialIsPlaying);
    const [volume, setVolume] = useState(getInitialVolume);
    const [autoplayBlocked, setAutoplayBlocked] = useState(false);

    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.volume = volume;
        window.localStorage.setItem(STORAGE_KEY_VOLUME, String(volume));
    }, [volume]);

    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current
                .play()
                .then(() => {
                    window.localStorage.setItem(STORAGE_KEY_ENABLED, "true");
                    setAutoplayBlocked(false);
                })
                .catch(() => {
                    setAutoplayBlocked(true);
                    setIsPlaying(false);
                });
        } else {
            audioRef.current.pause();
            window.localStorage.setItem(STORAGE_KEY_ENABLED, "false");
        }
    }, [isPlaying]);

    useEffect(() => {
        if (!autoplayBlocked || !audioRef.current) return;

        function unlockAudio() {
            audioRef.current
                .play()
                .then(() => {
                    setIsPlaying(true);
                    setAutoplayBlocked(false);
                    window.localStorage.setItem(STORAGE_KEY_ENABLED, "true");
                })
                .catch(() => {});
        }

        window.addEventListener("pointerdown", unlockAudio, { once: true });
        window.addEventListener("keydown", unlockAudio, { once: true });

        return () => {
            window.removeEventListener("pointerdown", unlockAudio);
            window.removeEventListener("keydown", unlockAudio);
        };
    }, [autoplayBlocked]);

    const toggleAudio = useCallback(() => {
        setIsPlaying((prev) => !prev);
        setAutoplayBlocked(false);
    }, []);

    const updateVolume = useCallback((newVolume) => {
        setVolume(newVolume);

        if (newVolume === 0) {
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
        }
    }, []);

    const value = useMemo(
        () => ({
            audioRef,
            isPlaying,
            toggleAudio,
            volume,
            setVolume: updateVolume
        }),
        [isPlaying, toggleAudio, volume, updateVolume]
    );

    return (
        <AudioContextState.Provider value={value}>
            {children}
        </AudioContextState.Provider>
    );
}
