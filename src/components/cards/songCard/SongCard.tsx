// Types
import type { SongProps } from '@/types/commons';

// Components
import AudioPlayer from 'react-h5-audio-player';
import GlassEffectCard from '@components/cards/glassEffectCard/GlassEffectCard';

// Styles
import './songCard.scss'
import 'react-h5-audio-player/lib/styles.css';

export default function SongCard({ song }: { song: SongProps }) {

    return (
        <div className="song-card">
            <img className='song-card-image' src={song.coverImage} alt={song.title} />
            <div className="container-song-card-media-controller">
                <GlassEffectCard>
                    <AudioPlayer
                        src={song.audioFileURL}
                        showFilledProgress={false}
                        showSkipControls={false}
                        showJumpControls={true}
                        customAdditionalControls={[]}
                        customProgressBarSection={[]}
                        customVolumeControls={[]}
                    />
                </GlassEffectCard>
            </div>
        </div>
    );
}