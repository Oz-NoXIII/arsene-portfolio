import { createContext, useContext, useMemo, useRef, useState } from "react";

const AudioContextState = createContext(null);

export function AudioProvider({ children }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function toggleAudio() {
        if (!audioRef.current) {
            return;
        }

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current
                .play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((error) => {
                    console.error("Audio playback failed:", error);
                });
        }
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