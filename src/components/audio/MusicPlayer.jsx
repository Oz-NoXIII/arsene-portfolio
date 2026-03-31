import { useAudioPlayer } from "./AudioProvider";
import { siteContent } from "../../data/siteContent";

function MusicPlayer() {
    const { audioRef, isPlaying, toggleAudio, volume, setVolume } = useAudioPlayer();

    function handleVolumeChange(event) {
        setVolume(Number(event.target.value));
    }

    return (
        <>
            <audio ref={audioRef} loop preload="auto">
                <source src="/audio/atmosphere.mp3" type="audio/mpeg" />
            </audio>

            <div className={`music-player ${isPlaying ? "playing" : ""}`}>
                <button
                    type="button"
                    className="music-toggle"
                    onClick={toggleAudio}
                    aria-label={isPlaying ? "Pause music" : "Play music"}
                >
          <span className="music-player-visual">
            <span />
            <span />
            <span />
          </span>

                    <span className="music-player-content">
            <span className="music-player-label">{siteContent.music.title}</span>
            <span className="music-player-meta">
              {siteContent.music.subtitle} · {isPlaying ? "On" : "Off"}
            </span>
          </span>
                </button>

                <div className="music-volume">
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        aria-label="Volume"
                        style={{ "--volume": volume }}
                    />
                </div>
            </div>
        </>
    );
}

export default MusicPlayer;