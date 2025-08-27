// Components
import PhoneMockup from '@components/phoneMockup/PhoneMockup'

// Types
import type { projectCard } from '@/types/project.type';

// Styles
import './projectCardMobile.scss';

export default function ProjectCardMobile({ pos, projectCard }: { pos: number; projectCard: projectCard }) {
    const { title, description, details, repo, website, imageUrl } = projectCard;


    return (
        <div className={pos === 0 ? "project-card-mobile-horizontal" : "project-card-mobile-vertical"}>
            <div className="wrapper-project-card-overlay">
                <div className="container-project-overlay">
                    <h4 className='project-overlay-title' >{title}</h4>
                    <p className='project-overlay-description'> {description} </p>
                </div>
            </div>

            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
            </div>


            <div className={pos == 0 ? "container-card-mobile-horizontal-image" : "container-card-mobile-vertical-image"}>
                <PhoneMockup>
                    <img src={imageUrl} alt={`Image App ${title}`} />
                </PhoneMockup>
            </div>
        </div>
    );
}