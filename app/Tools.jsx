import React from 'react'
import s from './Tools.module.css'

export default function Tools() {
  const tools = [
    'Python',
    'FastAPI',
    'Java',
    'Spring Boot',
    'Next.js',
    'MySQL',
    'JWT',
    'React',
    'JavaScript'
  ];

  return (
    <section className={s.mainContainer}>
      <div className={s.contentWrapper}>
        {/* Title Section */}
        <h1 className={s.heading}>
          Tools <span className={s.orangeText}>BEHIND</span> <br />
          the work.
        </h1>

        {/* Single Tools Card Box */}
        <div className={s.cardBox}>
          <div className={s.cardHeader}>
            <span className={s.cardNumber}>SKILLS & TECH</span>
            <h2 className={s.cardTitle}>Technical Experience</h2>
          </div>

          <div className={s.tagsGrid}>
            {tools.map((tool, index) => (
              <span key={index} className={s.tag}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}