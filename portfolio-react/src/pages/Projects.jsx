import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'

const PROJECTS = [
  {
    year: 2025,
    track: 'Full-stack',
    title: 'Memory Sharing App',
    description:
      'Group-based photo sharing app with albums, comments, and cloud backend.',
    skills: [
      'React Native',
      'TypeScript',
      'Expo',
      'NativeWind',
      'Cloudflare',
      'D1',
      'R2',
    ],
    videoSrc: '/videos/memory-sharing-demo.mp4', // 예: import demo1 from '../assets/demo1.mp4'
    poster: '',
    links: { demo: '', github: '' },
  },
]
export default function Projects() {
  return (
    <>
      <Header></Header>
      <div className="projects-container">
        <h1>My Projects</h1>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={`${p.title}-${p.year}`} {...p} />
          ))}
        </div>
      </div>
    </>
  )
}
