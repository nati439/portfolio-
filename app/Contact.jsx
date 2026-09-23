"use client"
import React, { useState } from 'react'
import s from './Contact.module.css'

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null)

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2000)
  }

  return (
    <section className={s.mainContainer}>
      <div className={s.contentWrapper}>
        {/* Title Section */}
        <h1 className={s.heading}>
          Let's <span className={s.orangeText}>CONNECT.</span>
        </h1>

        <p className={s.subheading}>
          I am currently open to full-time and part-time Software Engineering roles. Feel free to reach out directly regarding opportunities or inquiries!
        </p>

        {/* Contact Card Box */}
        <div className={s.cardBox}>
          {/* Phone */}
          <div 
            className={s.contactItem} 
            onClick={() => handleCopy('(816) 915-1292', 'phone')}
          >
            <div className={s.headerRow}>
              <span className={s.label}>PHONE</span>
              {copiedType === 'phone' && <span className={s.copiedTag}>Copied!</span>}
            </div>
            <span className={s.value}>(816) 915-1292</span>
          </div>

          <div className={s.divider} />

          {/* Email */}
          <div 
            className={s.contactItem} 
            onClick={() => handleCopy('natichere77@gmail.com', 'email')}
          >
            <div className={s.headerRow}>
              <span className={s.label}>EMAIL</span>
              {copiedType === 'email' && <span className={s.copiedTag}>Copied!</span>}
            </div>
            <span className={s.value}>natichere77@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}