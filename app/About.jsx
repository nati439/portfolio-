import React from 'react'
import s from './About.module.css'

export default function About() {
  return (
    <section className={s.MainContainer}>
      <div className={s.contentWrapper}>
        <h1 className={s.ContainerName}>
          <span className={s.whiteText}>Who is</span>
          <span className={s.name}>
            NATNAEL CHERIE<span className={s.whiteText}>?</span>
          </span>
        </h1>
        
        <p className={s.containerInd}>
          I am a second-year Computer Science student at Johnson County Community College with a strong interest in software engineering and technology. I enjoy developing applications, solving complex problems through programming, and continuously expanding my technical knowledge.
        </p>
      </div>
    </section>
  )
}