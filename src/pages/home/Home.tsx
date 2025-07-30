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
        <div id='container-home-page' >
            <Header />
            <Hero />
            <MyInfo />
            <MyTools />
            <MyLatestWorks />
            <Footer />
        </div>
    )
}