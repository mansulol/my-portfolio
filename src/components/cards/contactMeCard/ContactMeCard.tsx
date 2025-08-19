// Components
import { Link } from 'react-router-dom'

// Images
import arrowRightFilledImage from '@/assets/images/arrow-right-filled.png';

// Styles
import "./ContactMeCard.scss"

export default function ContactMeCard({ title, urlLink }: ContactMeCardProps) {

    return (
        <div className="contact-me-card">
            <div className="wrapper-title-contactme-card">
                <h2 className="text-title-contactme-card" >{title}</h2>
            </div>
            <div className="contact-me-card-hiperlink">
                {
                    urlLink != undefined && urlLink != null
                        ? <Link to={urlLink!}>
                            <img src={arrowRightFilledImage} alt="Image arrow filled" />
                        </Link>
                        : <p className="text-hiperlink-contactme-card">Coming Soon</p>
                }

            </div>

        </div>
    );
}

type ContactMeCardProps = {
    title: string;
    urlLink?: string;
}