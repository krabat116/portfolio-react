import React from 'react'
import Header from '../components/Header'
import Avartar from '../assets/avatar-profile.png'
import LinkCard from '../components/LinkCard'
import DownloadIcon from '../assets/DownloadIcon'
import ArrowIcon from '../assets/ArrowIcon'
import './Home.css'

export default function Home() {
  return (
    <>
      <Header></Header>
      <section className="profile">
        <p className="profile-text">
          Jay Jung,
          <span className="job-title"> Software Developer</span>
          <span className="skill-stack">
            JavaScript • TypeScript • React • React Native • Node.js •
            Cloudflare
          </span>
        </p>

        <div className="profile-img">
          <img src={Avartar} alt="avartar" />
          <div className="link-card-group">
            <LinkCard
              title={'Download Resume'}
              symbol={<DownloadIcon />}
              href="/resume/Jay_Jung_Resume.pdf"
              download
            />

            <LinkCard
              title={'View My Projects'}
              symbol={<ArrowIcon />}
              to="/projects"
            />
          </div>
        </div>
      </section>
    </>
  )
}
