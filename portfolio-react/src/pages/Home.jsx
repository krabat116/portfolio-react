import React from 'react'
import Header from '../components/header'
import Avartar from '../assets/avatar-profile.png'

export default function Home() {
  return (
    <>
      <Header></Header>
      <section className="profile">
        <p className="profile-text">
          Hello, I'm Jay Jung,
          <span className="job-title"> Full-stack Developer</span>
        </p>
        <div className="profile-img">
          <img src={Avartar} alt="avartar" />
        </div>
      </section>
    </>
  )
}
