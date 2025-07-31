import "./Hero.scss"

export default function Hero({children}) {
    return (
        <section id="section-hero" >
            <div className="section-hero-wrapper">

               { children }

            </div>
        </section>
    )
}