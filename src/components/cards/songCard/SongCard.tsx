
// Styles
import './songCard.scss'

export default function SongCard() {
    return (
        <div className="song-card">
            <h3 className="song-title">Song Title</h3>
            <p className="song-artist">Artist Name</p>
            <p className="song-description">This is a brief description of the song.</p>
        </div>
    );
}