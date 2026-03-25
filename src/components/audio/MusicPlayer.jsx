import { useState } from "react";

function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);

    function handleToggle() {
        setIsPlaying((prev) => !prev);
    }

    return (
        <button
            type="button"
            className="music-player"
            onClick={handleToggle}
            aria-label={isPlaying ? "Pause music" : "Play music"}
        >
            <span className="music-player-label">Atmosphere</span>
            <span className="music-player-state">{isPlaying ? "On" : "Off"}</span>
        </button>
    );
}

export default MusicPlayer;