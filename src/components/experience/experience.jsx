import styling from "../../assets/experience.module.scss"
import ExperienceList from "./experiencejs"
import igLogo from "../../assets/images/instagram.png"

const Experience = () => {
    return (
        <section id = "Experience" className={styling.Inner}>
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

            <div className={styling.experienceContainer}>
                <div className={styling.experienceWrapper}>
                    <div className={styling.header}>
                        <h2>
                            What I Have Done :
                        </h2>
                    </div>

                    <div className={styling.listContainer}>
                        <ul>
                            {ExperienceList.map((e) => (
                            <li key={e.id}>
                                {e.title}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )

}

export default Experience;