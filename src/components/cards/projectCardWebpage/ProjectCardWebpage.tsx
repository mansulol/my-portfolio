// Types
import type { projectCard } from '@/types/project.type';

// Styles
import './projectCardWebpage.scss'

export default function ProjectCardWebpage({ pos, projectCard }: { pos: number; projectCard: projectCard }) {
    const { title, description, details, repo, website, imageUrl } = projectCard;

    return (
        <div className={pos === 0 ? "project-card-webpage-horizontal" : "project-card-webpage-vertical"}>
            <div className="container-card-webpage-image">
                <img src={imageUrl} alt={`Image ${title} `} />
            </div>
            <div className="container-title-card-webpage">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
            </div>
        </div>
    );
}