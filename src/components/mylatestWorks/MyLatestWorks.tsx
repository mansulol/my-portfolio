// Services
import projectWorks from "@/services/projects.service"

// Icons
import globe from "@/assets/icons/globe.svg"
import github from "@/assets/icons/github.svg"

// Types
import type { projectCard } from "@/types/project.type"

// Custom styles
import "./MyLatestWorks.scss"
import PrimaryButton from "@components/buttons/primaryButton"

export default function MyLatestWorks() {
   return (
      <section id='section-my-latest-works'>
         <div className="container-text-my-latest-works">
            <h2 id="text-my-latest-works">My Latest Works</h2>
         </div>
         <div className="container-cards-my-latest-works">
            {
               projectWorks.map((card: projectCard, index: number) => (
               <WorkCard key={index} cardInfo={card} />
            ))
            }
         </div>
      </section>
   )
}

function WorkCard({ cardInfo }: { cardInfo: projectCard }) {

   const redirectTo = (url: string) => {
      window.open(url);
   }

   return (
      <div className="card-latest-works">
         <h3 id="text-card-lastest-work" > {cardInfo.title} </h3>
         <div className="card-latest-works-wrapper">

            <div className="container-image-card-latest-works">
               <img src={cardInfo.imageUrl} alt="Project Thumbnail" />
            </div>

            <div className="container-project-card-latest-works">

               <div className="container-title-project-latest-works">

                  <h6 id="text-project-description-latest-works" >{cardInfo.description}</h6>
                  <h4 id="text-project-title-latest-works" >{cardInfo.title}</h4>
                  <p id="text-project-details-latest-works" >{cardInfo.details}</p>
               </div>

               <div className="container-buttons-card-latest-works">
                  <PrimaryButton img={globe} text="View Project" onClick={() => { }} />
                  <PrimaryButton img={github} text="GitHub Repo" onClick={() => redirectTo(cardInfo.repo)} />
               </div>

            </div>

         </div>
      </div>
   )
}