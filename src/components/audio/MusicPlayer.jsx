import { useAudioPlayer } from "./useAudioPlayer";
import { siteContent } from "../../data/siteContent";

function MusicPlayer() {
    const { audioRef, isPlaying, toggleAudio, volume, setVolume } = useAudioPlayer();
    const sliderVolume = Number.isFinite(volume) ? Math.min(Math.max(volume, 0), 1) : 0.25;
    /** @type {import("react").CSSProperties & Record<"--volume", string>} */
    const volumeStyle = { "--volume": sliderVolume.toString() };

    function handleVolumeChange(event) {
        const nextVolume = Number(event.target.value);
        setVolume(Number.isFinite(nextVolume) ? Math.min(Math.max(nextVolume, 0), 1) : 0.25);
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
                        value={sliderVolume}
                        onChange={handleVolumeChange}
                        aria-label="Volume"
                        style={volumeStyle}
                    />
                </div>
            </div>
        </>
    );
}

export default MusicPlayer;