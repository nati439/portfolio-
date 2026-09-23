import React from 'react'
import s from './Student.module.css'
export default function Student() {
  return (
    <>
        <div className={s.heroSection}>
            <h1 className={s.heroTitle}>
                <span>Aspiring Software</span>
                <span className={s.outlinedText}>Engineer.</span>
            </h1>

            <p className={s.locationText}>
                based in <span className={s.locationHighlight}>Kansas City, KS</span>
            </p>

            <p className={s.availabilityText}>
                U.S. Citizen • Available for part-time & full-time
            </p>

            <div className={s.buttonGroup}>
                <a href="#projects" className={s.primaryBtn}>
                View My Work ↓
                </a>
               
            </div>
        </div>
    </>
  )
}
