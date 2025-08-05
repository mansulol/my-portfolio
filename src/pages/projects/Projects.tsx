// Packages
import Hero from "@components/hero/Hero";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import projectWorks from "@services/projects.service";

// Types
// import type { projectCard } from "@/types/project.type"

// Styles
import "./Projects.scss";

export default function Projects() {
    return (
        <div id="page-projects">
            <Header />
            <Hero>

                {
                    // Toca prepar los bentos para recibir datos
                    // De paso puedo crear un componente tsx BentoGrid privado para guardar la info
                    // Y recorrer los proyectos e impimir esa funcion
                }


                <section className="container-my-works">
                    <div className="container-title-works">
                        <h2 className="text-section-hero"> My <span> Works </span> </h2>
                    </div>
                    <div className="container-bento-projects">
                        <div className="bento-grid-projects-wrapper">
                            <div className="bento-grid grid-1">
                               { projectWorks[0].title }
                            </div>
                            <div className="bento-grid grid-2">
                                {projectWorks[1].title}
                            </div>
                            <div className="bento-grid grid-3">
                                {projectWorks[2].title}
                            </div>
                            <div className="bento-grid grid-4">
                                {projectWorks[3].title}
                            </div>
                            <div className="bento-grid grid-5">
                                {projectWorks[4].title}
                            </div>
                            <div className="bento-grid grid-6">
                                {projectWorks[5].title}
                            </div>
                            <div className="bento-grid grid-7">
                                {projectWorks[6].title}
                            </div>
                        </div>
                    </div>
                </section>
            </Hero>
            <Footer />
        </div>
    );
}
