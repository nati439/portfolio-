import React from 'react'
import s from './Introduction.module.css'
export default function Introduction() {
  return (
    <>
        <div className={s.MmainContainer}>
            <div className={s.introductionContainer}>
                <div className={s.introduction}>
                    👋 Hi, my name is <span className={s.Natnael}>NATNAEL</span> and I am a
                </div>
            </div>
            <div className={s.PicContainer}>
                <img src="/pfp.png" height={300} width={300} alt="pfp" />
                <div className={s.arrowBadge}>↗</div>
            </div>
        </div>
    </>
  )
}
