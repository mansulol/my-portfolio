// Custom Components
import Header from '@components/header/Header'
import Hero from '@components/hero/Hero'

// Styles
import './Home.scss'
import MyInfo from '@components/myInfo/MyInfo'

export default function Home() {
    return (
        <div id='container-home-page' >
            <Header />
            <Hero />

            <MyInfo />

            <p> Home Page </p>

        </div>
    )
}