import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./components/navBar/navBar"
import ShortAboutMe from './components/shortAboutMe/shortAboutMe'
import AboutMe from './components/aboutMe/aboutMe'
import Skill from './components/skill/skill.jsx'
import Experience from './components/experience/experience.jsx'
import Contact from './components/contact/contact.jsx';


function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <section>
        <ShortAboutMe />
      </section>

      <section>
        <AboutMe />
      </section>

      <section>
        <Skill />
      </section>

      <section>
        <Experience />
      </section>

      <section>
        <Contact />
      </section>

    </>
  )
}

export default App;
