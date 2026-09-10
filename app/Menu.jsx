"use client"
import React, { useState } from 'react'
import s from './Menu.module.css'

export default function Menu() {
    const [toggle, settoggle] = useState(false);
  return (
    <>
        <div className={s.MainContainer}>
            <div className={s.MenuBackground}>
                <div className={s.NameContainer}>
                    <div className={s.Name}>
                        Natnael.
                    </div>
                </div>
                <div className={s.Containerthreeline}>   
                    
                    <div className={s.threeline} onClick={() => settoggle(!toggle)}>{toggle ?  null : <div>≡</div>}</div>
                    {toggle ? 
                        <div className={s.theMenuContainer}>    
                            <div className={s.MiddleContainer}>
                                <div className={s.About}> 
                                    About
                                </div>
                                <div className={s.Contact}>
                                    Contact
                                </div>
                            </div>
                            <div className={s.lContainer}>
                                <div className={s.linkedIn} >
                                    <a href='https://www.linkedin.com/in/natnael-cherie-a293bb336/'>Linkedin</a>
                                </div>
                            </div>
                        </div>: null
                    }
                    <div className={s.x} onClick={() => settoggle(!toggle)}>{toggle ? <div>X</div>: null}</div>



                </div>
                    
                  
                </div>
            </div>
       
    </>
  )
}
