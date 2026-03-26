import { useAudioPlayer } from "./AudioProvider";

function MusicPlayer() {
    const { audioRef, isPlaying, toggleAudio } = useAudioPlayer();

    return (
        <>
            <audio ref={audioRef} loop preload="auto">
                <source src="/audio/atmosphere.mp3" type="audio/mpeg" />
            </audio>

            <button
                type="button"
                className="music-player"
                onClick={toggleAudio}
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                <span className="music-player-label">Atmosphere</span>
                <span className="music-player-state">{isPlaying ? "On" : "Off"}</span>
            </button>
        </>
    );
}

export default MusicPlayer;