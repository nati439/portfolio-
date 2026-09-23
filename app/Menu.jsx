"use client"
import React, { useState } from 'react'
import s from './Menu.module.css'

export default function Menu() {
  const [toggle, setToggle] = useState(false);

  const handleNavigate = (target) => {
    setToggle(false);

    if (target.startsWith('http') || target.endsWith('.pdf')) {
      window.open(target, '_blank', 'noopener,noreferrer');
    } else {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={s.MainContainer}>
      <div className={s.MenuBackground}>
        <div className={s.NameContainer}>
          <div className={s.Name} onClick={() => handleNavigate('#home')}>
            Natnael.
          </div>
        </div>
        <div className={s.Containerthreeline}>   
          <div className={s.xThreeline}>
            <div className={s.threeline} onClick={() => setToggle(!toggle)}>
              {toggle ? null : <div>≡</div>}
            </div>
            <div className={s.x} onClick={() => setToggle(!toggle)}>
              {toggle ? <div>X</div> : null}
            </div>
          </div>

          <div className={toggle ? s.theMenuContainer : `${s.theMenuContainer} ${s.hidden}`}>
            <div className={s.MiddleContainer}>
              <div className={s.About} onClick={() => handleNavigate('#about')}>
                About
              </div>
              <div className={s.Contact} onClick={() => handleNavigate('#contact')}>
                Contact
              </div>
              <div className={s.Resume} onClick={() => window.open('/resume.pdf', '_blank')}>
                Resume
            </div>
            </div>
            <div className={s.lContainer}>
              <div 
                className={s.linkedIn} 
                onClick={() => handleNavigate('https://www.linkedin.com/in/natnael-cherie-a293bb336/')}
              >
                Linkedin ↗
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}