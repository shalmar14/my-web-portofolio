import { useState } from 'react';
import styling from "../../assets/shortAboutMe.module.scss"
import photo1 from "../../assets/images/omarphoto.png"
import photo2 from "../../assets/images/photo2.jpeg"
import logoLocation from "../../assets/images/Icon.png"
import ytLogo from "../../assets/images/youtube.png"
import igLogo from "../../assets/images/instagram.png"
import linkedinLogo from "../../assets/images/linkedin.png"
import hi from "../../assets/images/hi.png"

const ShortAboutMe = () => {

  const [currentPhoto, setCurrentPhoto] = useState(photo1);
  
  const togglePhoto = () => {
    setCurrentPhoto(currentPhoto === photo1 ? photo2 : photo1);
  };

  return (
    <div className={styling.container}>
      <div className={styling.imgContainer}>
        <img src={currentPhoto} alt="Omar Shalhan Imanie" onClick={togglePhoto} />
      </div>

      <div className={styling.descriptionContainer}>
        <div className={styling.description1}>
          <div className={styling.segmentationImg}>
            <h1>
              Hi! I'm Omar
            </h1>

            <div className={styling.imgHi}>
              <img src={hi} alt="Hi Icon" />
            </div>

          </div>
          <p>
            I'm a passionate college student with a knack for crafting visually stunning and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I'm dedicated to translating design concepts into seamless digital experiences. Explore my portfolio to see how I blend creativity with technical expertise to bring ideas to life."
          </p>
        </div>

        <div className={styling.description2}>
          <div className={styling.imgLocation}>
            <img src={logoLocation} alt="Location" />
          </div>

          <div className={styling.location}>
            <p>Jakarta, Indonesia</p>
          </div>

        </div>

        <div className={styling.description3}>
          <div className={styling.findMeText}>
            <h3>
              Find Me Here !
            </h3>
          </div>

          <div className={styling.imgSosmed}>
            <a href="https://www.youtube.com/channel/UCJNT7Xttgas0n1A-g11EQJw">
              <img src={ytLogo} alt="Youtube" />
            </a>
            <a href="https://www.instagram.com/shalmar14/">
              <img src={igLogo} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/omar-shalhan-imanie-436282290/">
              <img src={linkedinLogo} alt="Linked In" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShortAboutMe;
