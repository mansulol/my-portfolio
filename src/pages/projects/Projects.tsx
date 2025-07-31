import Hero from "@components/hero/Hero";
import "./Projects.scss";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

export default function Projects() {
    return (
        <div id="page-projects">
            <Header />
            <Hero>
                <section className="container-my-works">
                    <div className="container-title-works">
                        <h2 className="text-section-hero"> My <span> Works </span> </h2>
                    </div>
                    <div className="container-bento-projects">
                        <div className="bento-grid-projects-wrapper">
                            <div className="bento-grid grid-1"></div>
                            <div className="bento-grid grid-2"></div>
                            <div className="bento-grid grid-3"></div>
                            <div className="bento-grid grid-4"></div>
                            <div className="bento-grid grid-5"></div>
                        </div>
                    </div>
                </section>
            </Hero>
            <Footer />
        </div>
    );
}
