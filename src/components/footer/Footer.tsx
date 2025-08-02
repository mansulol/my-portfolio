// Packages
import { Link } from "react-router-dom";

// Icons
import emailFilledIcon from '@assets/icons/email-filled.svg' 
import instagramIcon from '@assets/icons/instagram-filled.svg'
import twitterIcon from '@assets/icons/x_twitter-filled.svg'
import githubIcon from '@assets/icons/github-filled.svg'
import linkedinIcon from '@assets/icons/linkedin-filled.svg'

// Styles
import "./Footer.scss"

export default function Footer() {

   const currentYear: number = new Date().getFullYear();

   // Social media links
   const emailAddress: string = "mansour.lolo.04@gmail.com"
   const instagramLink: string = "#"
   const twitterLink: string = "#"
   const githubLink: string = "https://github.com/mansulol"
   const linkedinLink: string = "https://www.linkedin.com/in/mansour-lo-lo-722204332/"

   return (
      <footer id="footer">
         <section className="footer-content">
            <div className="wrapper-footer-title-copyright">
            <h6 className="footer-text-copyright" >&copy; {currentYear} Mansour. All rights reserved.</h6>
            </div>

            <div className="container-footer-links">
               <Link to={`mailto:${emailAddress}`}>
                  <img src={emailFilledIcon} alt="Email Icon" />
               </Link>
               <Link to={instagramLink}>
                  <img src={instagramIcon} alt="Instagram Icon" />
               </Link>
               <Link to={twitterLink}>
                  <img src={twitterIcon} alt="Twitter Icon" />
               </Link>
               <Link to={githubLink}>
                  <img src={githubIcon} alt="Github Icon" />
               </Link>
               <Link to={linkedinLink}>
                  <img src={linkedinIcon} alt="Email Icon" />
               </Link>
            </div>
         </section>
      </footer>
   )
}