import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

const AudioContextState = createContext(null);
const STORAGE_KEY = "portfolio-audio-enabled";

export function AudioProvider({ children }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const savedPreference = window.localStorage.getItem(STORAGE_KEY);

        if (savedPreference === "true") {
            setIsPlaying(true);
        }

        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (!hasMounted || !audioRef.current) {
            return;
        }

        if (isPlaying) {
            audioRef.current
                .play()
                .then(() => {
                    window.localStorage.setItem(STORAGE_KEY, "true");
                })
                .catch((error) => {
                    console.error("Audio playback failed:", error);
                    setIsPlaying(false);
                });
        } else {
            audioRef.current.pause();
            window.localStorage.setItem(STORAGE_KEY, "false");
        }
    }, [hasMounted, isPlaying]);

    function toggleAudio() {
        setIsPlaying((prev) => !prev);
    }

    const value = useMemo(
        () => ({
            audioRef,
            isPlaying,
            toggleAudio
        }),
        [isPlaying]
    );

    return (
        <AudioContextState.Provider value={value}>
            {children}
        </AudioContextState.Provider>
    );
}

export function useAudioPlayer() {
    const context = useContext(AudioContextState);

    if (!context) {
        throw new Error("useAudioPlayer must be used inside AudioProvider");
    }

    return context;
}