import s from './home.module.css'
import Menu from './Menu'
import Introduction from './Introduction'
import Student from './Student'
import Project from './Project'
import TheProject from './TheProject'
import About from './About'
import Tools from './Tools'
export default function Home() {
  return (
    <>
      <div className={s.home}>
        <Menu/>
        <Introduction/>
       <Student/>
       <div className={s.blue}>
          <Project/>
          <TheProject/>
          <About/>
          <Tools/>
       </div>

      </div>
      
        
        
    </>

  );
}
