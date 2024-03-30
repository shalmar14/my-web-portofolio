import styling from "../../assets/navBar.module.scss"
import logo from "../../assets/images/barcelona.png"

const NavBar = () => {
    const scrollElement = (elementID) => {
        const element = document.getElementById(elementID)

        if (element == true) {
            window.scrollTo({
            top: elementID.offsetTop,
            behavior: "smooth",
            });
        }
    }
    

    return (
        <div className={styling.navBarContainer}>
            <div className={styling.imgContainer}>
                <a href="">
                    <img src={logo} alt="Barcelona" />
                </a>

            </div>

            <div className={styling.optionContainer}>
                <a href="#AboutMe" onClick={scrollElement('AboutMe')}>About Me</a>
                <a href="#Skill" onClick={scrollElement('Skill')} >Skill</a>
                <a href="#Experience" onClick={scrollElement('Experience')}>Experience</a>
                <a href="#Contact" onClick={scrollElement('Contact')}>Contact</a>
            </div>

        </div>
    )
}

export default NavBar;