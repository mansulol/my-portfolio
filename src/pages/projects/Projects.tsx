// Packages
import Hero from "@components/hero/Hero";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import projectWorks from "@services/projects.service";
import ProjectCardMobile from '@components/cards/projectCardMobile/ProjectCardMobile';
import ProjectCardWebpage from '@components/cards/projectCardWebpage/ProjectCardWebpage';
import { useEffect } from "react";

// Types
// import type { projectCard } from "@/types/project.type"

// Styles
import "./Projects.scss";
import ContactMe from "@components/contactMe/ContactMe";

export default function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
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
                            {/* {projectWorks.map((project, i) => (
                                <div key={i} className={`bento-grid grid-${i + 1}`}>
                                    <ProjectCard
                                        pos={0}
                                        projectCard={project}
                                    />
                                </div>
                            ))} */}
                            
                            <div className={`bento-grid grid-1`}>
                                <ProjectCardMobile
                                    pos={0}
                                    projectCard={projectWorks[0]}
                                />
                            </div>
                            <div className={`bento-grid grid-2`}>
                                <ProjectCardMobile
                                    pos={1}
                                    projectCard={projectWorks[1]}
                                />
                            </div>
                            <div className={`bento-grid grid-3`}>
                                <ProjectCardWebpage
                                    pos={1}
                                    projectCard={projectWorks[2]}
                                />
                            </div>
                            <div className={`bento-grid grid-4`}>
                                <ProjectCardMobile
                                    pos={0}
                                    projectCard={projectWorks[3]}
                                />
                            </div>
                            <div className={`bento-grid grid-5`}>
                                <ProjectCardMobile
                                    pos={0}
                                    projectCard={projectWorks[4]}
                                />
                            </div>
                            <div className={`bento-grid grid-6`}>
                                <ProjectCardMobile
                                    pos={1}
                                    projectCard={projectWorks[5]}
                                />
                            </div>
                            <div className={`bento-grid grid-7`}>
                                <ProjectCardMobile
                                    pos={1}
                                    projectCard={projectWorks[6]}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </Hero>
            <ContactMe />
            <Footer />
        </div>
    );
}
