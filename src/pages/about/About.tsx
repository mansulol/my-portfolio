import Hero from '@components/hero/Hero'
import Header from '@components/header/Header'

// Styles
import './About.scss'
import Footer from '@components/footer/Footer'
import SongCard from '@components/cards/songCard/SongCard'

export default function About() {
    return (
        <div id='page-about'>
            <Header />
            <Hero>
                <div className="container-about-me">
                    <div className="song-cards-wrapper">
                        <SongCard />
                        <SongCard />
                        <SongCard />
                        <SongCard />
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