// Components
import Header from '@components/header/Header'
import Hero from '@components/hero/Hero'
import MyInfo from '@components/myInfo/MyInfo'
import MyTools from '@components/myTools/MyTools'
import MyLatestWorks from '@components/mylatestWorks/MyLatestWorks'
import Footer from '@components/footer/Footer'
import ContactMe from '@components/contactMe/ContactMe'
import { useEffect } from 'react'

// Styles
import './Home.scss'

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div id='page-home' >
            <Header />
            <Hero>
                <div className="wrapper-text-section-hero">
                    <h2 className="text-section-hero" >
                        {/* Lorem <span>ipsum</span> odor <br />
                    amet, consectetuer <br />
                    adipiscing */}
                        Making <br />
                        <span>great</span> things <br />
                        happen
                    </h2>
                </div>
            </Hero>
            <MyInfo />
            <MyTools />
            <MyLatestWorks />
            <ContactMe />
            <Footer />
        </div>
    )
}