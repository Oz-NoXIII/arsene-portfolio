import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

const AudioContextState = createContext(null);

const STORAGE_KEY_ENABLED = "portfolio-audio-enabled";
const STORAGE_KEY_VOLUME = "portfolio-audio-volume";

export function AudioProvider({ children }) {
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(0.25);
    const [hasMounted, setHasMounted] = useState(false);
    const [autoplayBlocked, setAutoplayBlocked] = useState(false);

    useEffect(() => {
        const savedEnabled = window.localStorage.getItem(STORAGE_KEY_ENABLED);
        const savedVolume = window.localStorage.getItem(STORAGE_KEY_VOLUME);

        if (savedEnabled !== null) {
            setIsPlaying(savedEnabled === "true");
        }

        if (savedVolume !== null) {
            const parsed = Number(savedVolume);
            if (!Number.isNaN(parsed)) {
                setVolume(parsed);
            }
        }

        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (!hasMounted || !audioRef.current) return;

        audioRef.current.volume = volume;
        window.localStorage.setItem(STORAGE_KEY_VOLUME, String(volume));
    }, [volume, hasMounted]);

    useEffect(() => {
        if (!hasMounted || !audioRef.current) return;

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
    }, [isPlaying, hasMounted]);

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

    function toggleAudio() {
        setIsPlaying((prev) => !prev);
        if (autoplayBlocked) {
            setAutoplayBlocked(false);
        }
    }

    function updateVolume(newVolume) {
        setVolume(newVolume);

        if (newVolume === 0) {
            setIsPlaying(false);
        } else if (!isPlaying) {
            setIsPlaying(true);
        }
    }

    const value = useMemo(
        () => ({
            audioRef,
            isPlaying,
            toggleAudio,
            volume,
            setVolume: updateVolume
        }),
        [isPlaying, volume]
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