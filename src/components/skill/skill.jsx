import { motion } from 'framer-motion';
import styling from "../../assets/skill.module.scss"
import ListSkill from "./skill"
import igLogo from "../../assets/images/instagram.png"


const Skill = () => {
    return (
        <section id = "Skill" className={styling.Inner}>
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

            <div className={styling.skillWrapper}>
                <div className={styling.section1}>
                    <h2>
                        Skills That I have :
                    </h2>
                </div>

                <div className={styling.listContainer}>
                    {ListSkill.map((e) => (
                        <div className={styling.card} key={e.id}>
                            <div className={styling.imgContainer}>
                                <motion.img
                                    initial={{
                                        y: 200,
                                        x: -200,
                                        opacity: 0,
                                    }}
                                    transition={{ duration: 1.9 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                    }}
                                    src={e.img}
                                    alt={e.title}
                                />
                            </div>

                            <div className={styling.description}>
                                <h3>
                                    {e.title}
                                </h3>
                            </div>

                        </div>
                    ))}


                </div>
            </div>

        </section>
    )
}

export default Skill;