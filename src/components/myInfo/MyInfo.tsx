import "./MyInfo.scss"

export default function MyInfo() {
   return (
      <section id="section-my-info">
         <div className="container-my-name">
            <h4 className="text-my-name-my-info">
               Hi, I'm <span className="my-name">Mansour</span>
               <br />
               I love to create and design websites and applications.
            </h4>
         </div>
         <div className="container-more-about-me">
            <article className="more-about-me-1">
               Hi, my name is Mansour, and I am a web developer with a passion for creating beautiful and functional websites. I have experience in various web technologies and enjoy working on projects that challenge my skills and creativity.
            </article>
            <article className="more-about-me-2">
               Hi, my name is Mansour, and I am a web developer with a passion for creating beautiful and functional websites. I have experience in various web technologies and enjoy working on projects that challenge my skills and creativity.
            </article>
            <div className="more-about-me-container">
               <h4 className="text-more-about-me-title">
                  About Me
               </h4>
               <img src="https://cdn-icons-png.flaticon.com/512/6941/6941884.png " alt="Img top left arrow" />

            </div>
         </div>
      </section>
   )
}