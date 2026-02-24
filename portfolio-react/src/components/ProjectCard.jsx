import React from 'react'
import './ProjectCard.css'

export default function ProjectCard({
  year,
  track = 'Front-end', // 'Full-stack' | 'Front-end' | 'Back-end'
  title,
  description,
  skills = [],
  videoSrc, // 로컬 mp4 import해서 넘겨도 됨
  poster, // 영상 포스터 이미지(선택)
  links, // { demo?: string, github?: string }
  onClick,
}) {
  return (
    <article
      className="project-card project-card--clickable"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className="project-media">
        {videoSrc ? (
          <video
            className="project-video"
            src={videoSrc}
            poster={poster}
            controls
            preload="metadata"
            playsInline
          />
        ) : (
          <div className="project-media-placeholder">Video</div>
        )}
      </div>

      <div className="project-body">
        <div className="project-meta">
          <span className={`project-track track-${slug(track)}`}>{track}</span>
          <span className="project-year">{year}</span>
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        <div className="project-skills">
          {skills.slice(0, 5).map((s) => (
            <span key={s} className="skill-pill">
              {s}
            </span>
          ))}
          {skills.length > 5 ? (
            <span className="skill-pill skill-more">
              +{skills.length - 5} more
            </span>
          ) : null}
        </div>

        <p className="project-card-hint">View details</p>

        {links?.demo || links?.github ? (
          <div className="project-actions" onClick={(e) => e.stopPropagation()}>
            {links?.demo ? (
              <a
                className="project-btn"
                href={links.demo}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            ) : null}
            {links?.github ? (
              <a
                className="project-btn ghost"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}

function slug(str) {
  return String(str).toLowerCase().replace(/\s+/g, '-')
}
