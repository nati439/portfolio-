import s from './home.module.css'
import Menu from './Menu'
import Introduction from './Introduction'
import Student from './Student'
import Project from './Project'
import TheProject from './TheProject'
import About from './About'
import Tools from './Tools'
import Contact from './Contact'

export default function Home() {
  return (
    <div className={s.home}>
      <Menu />
      
      <section id="home">
        <Introduction />
        <Student />
      </section>

      <div className={s.blue}>
        <section id="projects">
          <Project />
          <TheProject />
        </section>

        <section id="about">
          <About />
          <Tools />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}