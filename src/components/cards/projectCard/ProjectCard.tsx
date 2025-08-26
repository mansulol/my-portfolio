import { Link } from 'react-router-dom';
import './projectCard.scss';
import type { projectCard } from '@/types/project.type';

export default function ProjectCard({ pos, projectCard }: { pos: number; projectCard: projectCard }) {
    const { title, description, details, repo, website, imageUrl, mobile } = projectCard;

    return (
        <div className={pos === 0 ? "project-card-horizontal" : "project-card-vertical"}>
            <div className="wrapper-project-card-overlay">
                <div className="container-project-overlay">
                    <h4 className='project-overlay-title' >{title}</h4>
                    <p className='project-overlay-description'> {description } </p>
                </div>
            </div>

            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
            </div>

            <div className="project-card-image">
                <img src={imageUrl} alt={`Image ${title}`} />
                {/* <div className="project-card-overlay">
                    <div className="project-links">
                        {website && (
                            <Link to={website} className="project-link" target="_blank">
                                Live Demo
                            </Link>
                        )}
                        {repo && (
                            <Link to={repo} className="project-link" target="_blank">
                                Repository
                            </Link>
                        )}
                    </div>
                </div> */}
            </div>
        </div>
    );
}