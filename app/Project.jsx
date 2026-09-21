import React from 'react'
import s from './Project.module.css'
export default function Project() {
  return (
    <>
        <div className={s.projectsHeader}>
            <h2 className={s.sectionTitle}>
                <span>Projects I've</span>
                <span className={s.outlinedText}>Built.</span>
            </h2>

            <p className={s.sectionDescription}>
                I believe a few meaningful projects are worth more than a long list of unfinished ideas. Here are some of the things I've built and the problems I've enjoyed solving.
            </p>
        </div>
    </>
  )
}
