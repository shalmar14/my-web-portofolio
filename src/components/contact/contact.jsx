import styling from "../../assets/contact.module.scss"
import email from "../../assets/images/email.png"
import telp from "../../assets/images/telp.png"
import ytLogo from "../../assets/images/youtube.png"
import igLogo from "../../assets/images/instagram.png"
import linkedinLogo from "../../assets/images/linkedin.png"

const Contact = () => {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <section id = "Contact" className={styling.Inner}>
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

            <div className={styling.contactContainer}>
                <div className={styling.textTop}>
                    <h2>
                        Connect With Me :
                    </h2>
                </div>

                <div className={styling.identityContainer}>
                    <div className={styling.emailContainer}>
                        <img src={email} alt="Email" />
                        <h2 onClick={() => copyToClipboard('omar.imanie03@gmail.com')}>
                            omar.imanie03@gmail.com
                        </h2>
                    </div>

                    <div className={styling.phoneContainer}>
                        <img src={telp} alt="Phone" />
                        <h2 onClick={() => copyToClipboard('082125974077')}>
                            082125974077
                        </h2>
                    </div>
                </div>

                <div className={styling.footer}>
                    <div className={styling.titleFooter}>
                        <p>
                            Follow Me On :
                        </p>
                    </div>

                    <div className={styling.imgList}>
                        <a href="https://www.instagram.com/shalmar14/">
                            <img src={igLogo} alt="Instagram" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCJNT7Xttgas0n1A-g11EQJw">
                            <img src={ytLogo} alt="Youtube" />
                        </a>
                        <a href="https://www.linkedin.com/in/omar-shalhan-imanie-436282290/">
                            <img src={linkedinLogo} alt="Linked In" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;