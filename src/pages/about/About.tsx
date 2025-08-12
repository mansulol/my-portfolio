import Hero from '@components/hero/Hero'
import Header from '@components/header/Header'

// Styles
import './About.scss'
import Footer from '@components/footer/Footer'
import SongCard from '@components/cards/songCard/SongCard'
import type { SongProps } from '@/types/commons'

export default function About() {

    const songExample: SongProps[] = [
        {
            id: '1',
            title: 'Example Song',
            artist: 'Artist Name',
            album: 'Album Name',
            coverImage: 'https://m.media-amazon.com/images/I/81YZr3iCl-L._UF1000,1000_QL80_.jpg',
            audioFileURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Bach_-_Brandenburg_Concerto.No.1_in_F_Major-_II._Adagio.ogg'
        },
        {
            id: '1',
            title: 'Example Song',
            artist: 'Artist Name',
            album: 'Album Name',
            coverImage: 'https://m.media-amazon.com/images/I/81YZr3iCl-L._UF1000,1000_QL80_.jpg',
            audioFileURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Bach_-_Brandenburg_Concerto.No.1_in_F_Major-_II._Adagio.ogg'
        },
        {
            id: '1',
            title: 'Example Song',
            artist: 'Artist Name',
            album: 'Album Name',
            coverImage: 'https://m.media-amazon.com/images/I/81YZr3iCl-L._UF1000,1000_QL80_.jpg',
            audioFileURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Bach_-_Brandenburg_Concerto.No.1_in_F_Major-_II._Adagio.ogg'
        },
        {
            id: '1',
            title: 'Example Song',
            artist: 'Artist Name',
            album: 'Album Name',
            coverImage: 'https://m.media-amazon.com/images/I/81YZr3iCl-L._UF1000,1000_QL80_.jpg',
            audioFileURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Bach_-_Brandenburg_Concerto.No.1_in_F_Major-_II._Adagio.ogg'
        },
    ]

    return (
        <div id='page-about'>
            <Header />
            <Hero>
                <div className="container-about-me">
                    <div className="song-cards-wrapper">
                        <SongCard song={songExample[0]} />
                        <SongCard song={songExample[1]} />
                        <SongCard song={songExample[2]} />
                        <SongCard song={songExample[3]} />
                    </div>
                    <div className="gallery-photos-wrapper">
                        
                    </div>
                    <div className="about-me-info-wrapper">

                    </div>
                </div>
            </Hero>

            <Footer />

        </div>
    )
}