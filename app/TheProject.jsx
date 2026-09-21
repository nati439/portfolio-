"use client"
import React, { useState } from 'react'
import s from './TheProject.module.css'

export default function Projects() {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);

  return (
    <div className={s.projectsGrid}>
      {/* Project 1: Student Partner Finder */}
      <div className={s.container}>
        <div className={s.mediaWrapper}>
          {showVideo1 ? (
            <video className={s.video} src="/video.mp4" controls autoPlay />
          ) : (
            <img className={s.image} src="/thumbnail.png" alt="Student Partner Finder" />
          )}
        </div>

        <h3 className={s.title}>Student Partner Finder App</h3>

        <div className={s.stackContainer}>
          <span className={s.stackLabel}>STACK</span>
          <div className={s.tagsGroup}>
            <span className={s.tag}>React</span>
            <span className={s.tag}>MySQL</span>
            <span className={s.tag}>FastAPI</span>
          </div>
        </div>

        <div className={s.buttonGroup}>
          <button 
            className={s.btnPrimary} 
            onClick={() => setShowVideo1(!showVideo1)}
          >
            {showVideo1 ? '← Go Back' : 'View Project ▷'}
          </button>
          <a 
            href="https://github.com/nati439/Student-partner-finder-app-" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={s.btnSecondary}
          >
            Github ↗
          </a>
        </div>
      </div>

      {/* Project 2: Library Management System */}
      <div className={s.container}>
        <div className={s.mediaWrapper}>
          {showVideo2 ? (
            <video className={s.video} src="/video1.mp4" controls autoPlay />
          ) : (
            <img className={s.image} src="/thumbnail1.png" alt="Library Management System" />
          )}
        </div>

        <h3 className={s.title}>Library Management System</h3>

        <div className={s.stackContainer}>
          <span className={s.stackLabel}>STACK</span>
          <div className={s.tagsGroup}>
            <span className={s.tag}>Java</span>
            <span className={s.tag}>OOP</span>
          </div>
        </div>

        <div className={s.buttonGroup}>
          <button 
            className={s.btnPrimary} 
            onClick={() => setShowVideo2(!showVideo2)}
          >
            {showVideo2 ? '← Go Back' : 'View Project ▷'}
          </button>
          <a 
            href="https://github.com/nati439/JavaLibraryProject/tree/main/aLibraryManagment" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={s.btnSecondary}
          >
            Github ↗
          </a>
        </div>
      </div>
    </div>
  )
}