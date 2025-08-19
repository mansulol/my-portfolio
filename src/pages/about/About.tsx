// Components
import Hero from '@components/hero/Hero'
import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'
import SongCard from '@components/cards/songCard/SongCard'

// Icons
import menuIcon from '@/assets/icons/menu.svg'
import mapIcon from '@/assets/icons/map.svg'
import foodIcon from '@/assets/icons/food.svg'
import heartIcon from '@/assets/icons/heart.svg'
// import userIcon from '@/assets/icons/user.svg'

// Types
import type { SongProps, GalleryPhoto } from '@/types/commons'

// Styles
import './About.scss'
import ContactMe from '@components/contactMe/ContactMe'

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

    const galleryPhotos: GalleryPhoto[] = [
        {
            name: 'All',
            images: [
                'https://images.pexels.com/photos/33405063/pexels-photo-33405063.jpeg',
                'https://images.pexels.com/photos/32883257/pexels-photo-32883257.jpeg',
                'https://images.pexels.com/photos/33391693/pexels-photo-33391693.jpeg',
                'https://images.pexels.com/photos/20063012/pexels-photo-20063012.jpeg'
            ]
        },
        {
            name: 'All',
            images: [
                'https://images.pexels.com/photos/33405063/pexels-photo-33405063.jpeg',
                'https://images.pexels.com/photos/32883257/pexels-photo-32883257.jpeg',
                'https://images.pexels.com/photos/33391693/pexels-photo-33391693.jpeg',
                'https://images.pexels.com/photos/20063012/pexels-photo-20063012.jpeg'
            ]
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
                        <div className="container-gallery-photos-picture">
                            {<img src={galleryPhotos[0].images[0]} alt="" />}
                        </div>
                        <div className="container-gallery_photos-controller">
                            <img src={menuIcon} alt="icon menu" />
                            <img src={mapIcon} alt="icon menu" />
                            <img src={foodIcon} alt="icon food" />
                            <img src={heartIcon} alt="icon heart" />
                            {/* <img src={userIcon} alt="icon user" /> */}
                        </div>

                    </div>
                    <div className="about-me-info-wrapper">
                        <div className="wrapper-title-about-me">
                            <h2 className='text-title-about-me' >About Me</h2>
                            <hr />
                        </div>
                        <div className="container-about-me-article">
                            <h1 className='text-about-me-article' > Who am I</h1>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </article>
                        </div>
                        <div className="container-about-me-article">
                            <h1 className='text-about-me-article'>Who am I</h1>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </article>
                        </div>
                        <div className="container-about-me-article">
                            <h1 className='text-about-me-article'>Who am I</h1>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </article>
                        </div>

                    </div>
                </div>
            </Hero>

            <ContactMe />

            <Footer />

        </div>
    )
}