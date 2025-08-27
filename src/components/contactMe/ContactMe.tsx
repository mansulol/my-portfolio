// Components
import ContactMeCard from "@components/cards/contactMeCard/ContactMeCard";

// Images
import paperPlaneImage from '@/assets/images/paper-plane.svg';

// Styles
import './ContactMe.scss';

export default function ContactMe() {
    return (
        <div id="section-contact-me">
            <div className="container-svg-contact-me">
                <img src={paperPlaneImage} alt="Paper Plane" className="svg-contact-me" />
            </div>
            <div className="wrapper-title-contact-me">
                <h3 className="text-title-contact-me"> Contact Me </h3>
            </div>
            <div className="container-cards-contact-me">
                <ContactMeCard title="Resume" urlLink="https://mansulol.github.io/my-portfolio/docs/CV_Programing_en.pdf"/>
                <ContactMeCard title="Recomendation Letter" urlLink="https://mansulol.github.io/my-portfolio/docs/CASAMEDIA_Letter_Recommendation-Mansour-2025.pdf" />
                <ContactMeCard title="Form" />
            </div>
        </div>
    );
}