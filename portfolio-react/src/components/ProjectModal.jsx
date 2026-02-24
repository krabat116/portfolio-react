import React, { useEffect, useRef, useState } from 'react'
import './ProjectModal.css'

export default function ProjectModal({ project, onClose }) {
  const [isClosing, setIsClosing] = useState(false)
  const panelRef = useRef(null)

  const handleClose = () => {
    setIsClosing(true)
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (!isClosing) return
    const panel = panelRef.current
    if (!panel) { onClose(); return }

    const handleAnimationEnd = () => onClose()
    panel.addEventListener('animationend', handleAnimationEnd)
    return () => panel.removeEventListener('animationend', handleAnimationEnd)
  }, [isClosing, onClose])

  if (!project) return null

  const { year, track, title, description, skills = [], videoSrc, poster, links } = project

  function slug(str) {
    return String(str).toLowerCase().replace(/\s+/g, '-')
  }

  return (
    <div className={`modal-overlay${isClosing ? ' is-closing' : ''}`} onClick={handleClose}>
      <div
        ref={panelRef}
        className={`modal-panel${isClosing ? ' is-closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleClose} aria-label="닫기">
          ✕
        </button>

        {videoSrc ? (
          <div className="modal-media">
            <video
              className="modal-video"
              src={videoSrc}
              poster={poster}
              controls
              preload="metadata"
              playsInline
            />
          </div>
        ) : (
          <div className="modal-media-placeholder">No Preview</div>
        )}

        <div className="modal-body">
          <div className="modal-meta">
            <span className={`project-track track-${slug(track)}`}>{track}</span>
            <span className="project-year">{year}</span>
          </div>

          <h2 className="modal-title">{title}</h2>
          <p className="modal-desc">{description}</p>

          {skills.length > 0 && (
            <>
              <p className="modal-section-label">Tech Stack</p>
              <div className="modal-skills">
                {skills.map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
                  </span>
                ))}
              </div>
            </>
          )}

          {(links?.demo || links?.github) && (
            <div className="modal-actions">
              {links.demo && (
                <a
                  className="project-btn"
                  href={links.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              )}
              {links.github && (
                <a
                  className="project-btn ghost"
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
