import React from 'react'
import s from './Menu.module.css'

export default function Menu() {
  return (
    <>
        <div className={s.MainContainer}>
            <div className={s.NameContainer}>
                <div className={s.Name}>
                    Natnael.
                </div>
            </div>
            <div className={s.MiddleContainer}>
                <div className={s.About}> 
                    About
                </div>
                <div className={s.Contact}>
                    Contact
                </div>
            </div>
            <div className={s.LContainer}>
                <div className={s.lContainer}>
                    <div className={s.linkedIn} >
                        <a href='https://www.linkedin.com/in/natnael-cherie-a293bb336/'>Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
