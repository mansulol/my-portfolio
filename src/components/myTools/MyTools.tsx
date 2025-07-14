// Components
import programingLanguages from "@/services/programingLanguages.service"

//  Types
import type { programmingLanguages } from '@/types/project.type';

// Custom Styles
import "./MyTools.scss"

export default function MyTools() {

   const tools: programmingLanguages[] = programingLanguages

   return (
      <section id="section-my-tools">
         <div className="container-text-my-tools-title">
            <h2 id="text-title-section-my-tools"> My Tools</h2>
         </div>
         <div className="container-cards-my-tools">
            {
               tools.map(tool => (
                  <div className="card-my-tool" key={tool.name}>
                     <img src={tool.icon} alt={tool.name} />
                  </div>
               ))
            }
         </div>
      </section>
   )
}