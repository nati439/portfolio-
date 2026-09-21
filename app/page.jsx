import s from './home.module.css'
import Menu from './Menu'
import Introduction from './Introduction'
import Student from './Student'
import Project from './Project'
import TheProject from './TheProject'
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
       </div>

      </div>
      
        
        
    </>

  );
}
