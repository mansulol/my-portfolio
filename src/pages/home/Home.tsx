// Custom Components
import Header from '@components/header/Header'
import Hero from '@components/hero/Hero'

// Styles
import './Home.scss'
import MyInfo from '@components/myInfo/MyInfo'
import MyTools from '@components/myTools/MyTools'
import MyLatestWorks from '@components/mylatestWorks/MyLatestWorks'
import Footer from '@components/footer/Footer'

export default function Home() {
    return (
        <div id='page-home' >
            <Header />
            <Hero>
                 <h2 className="text-section-hero" >
                    {/* Lorem <span>ipsum</span> odor <br />
                    amet, consectetuer <br />
                    adipiscing */}
                    Making <br />
                    <span>great</span> things <br />
                    happen
                </h2>
            </Hero>
            <MyInfo />
            <MyTools />
            <MyLatestWorks />
            <Footer />
        </div>
    )
}