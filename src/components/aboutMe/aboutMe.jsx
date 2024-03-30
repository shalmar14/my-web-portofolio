import styling from "../../assets/aboutMe.module.scss"
import photo from "../../assets/images/photoomar.jpeg"
import igLogo from "../../assets/images/instagram.png"


const AboutMe = () => {
    return (
        <section id="AboutMe" className={styling.Inner}>
            <div className={styling.above}>
                <div className={styling.aboveContainer}>
                    <div className={styling.lineContainer}>
                        <marquee>
                        <div className={styling.title}>
                            <h2>
                                Follow Me Here!
                            </h2>
                        </div>

                        <div className={styling.igLogo}>
                        <a href="https://www.instagram.com/shalmar14/">
                            <img src={igLogo} alt="Instagram" />
                        </a>
                        </div>
                        </marquee>
                    </div>
                </div>
            </div>

            <div className={styling.container}>
                <div className={`${styling.imgContainer} ${styling.fadeIn}`}>
                    <img src={photo} alt="Omar Shalhan Imanie" />
                </div>

                <div className={styling.descriptionWrapper}>
                    <div>
                        <hr />
                    </div>
                    <div className={styling.contentContainer}>
                        <div className={styling.header}>
                            <h2>
                                Here What You Got About Me !
                            </h2>
                        </div>

                    </div>
                    <div className={styling.contentContainer2}>
                        <div className={styling.paraghraf}>
                            <p>
                                I'm thrilled to welcome you to my portfolio. As a college student at Telkom University Jakarta, with a background from Telkom Jakarta Vocational School, I've been immersed in the world of technology from an early age. It was during my time at Telkom Jakarta that I discovered my passion for development — a journey that has been fueled by my love for gaming, movies, and the art of storytelling.
                            </p>
                            <p>
                                From spending countless hours exploring virtual worlds to analyzing the narrative intricacies of my favorite films, I've always been fascinated by the intersection of creativity and technology. It's this fascination that led me to pursue a career in development, where I could channel my creative energy into crafting immersive digital experiences.
                            </p>
                            <p>
                                As I delve deeper into the world of development, I find myself drawn to both front-end and back-end technologies. On one hand, I'm captivated by the challenge of bringing designs to life and creating intuitive user interfaces that seamlessly blend form and function. On the other hand, I'm intrigued by the intricacies of backend systems and the opportunity to architect robust and scalable solutions that power the digital landscape.
                            </p>
                        </div>

                        <div>
                            <hr />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default AboutMe;