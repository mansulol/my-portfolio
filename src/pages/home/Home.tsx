// Custom Components
import Header from '@components/header/Header'
import Hero from '@components/hero/Hero'

// Styles
import './Home.scss'

export default function Home() {
    return (
        <div id='container-home-page' >
            <Header />
            <Hero />

            <p> Home Page </p>

        </div>
    )
}