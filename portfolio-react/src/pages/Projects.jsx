import React from 'react'
import Header from '../components/header'
export default function Projects() {
  return (
    <>
      <Header></Header>
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="proejcts-grid">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
        </div>
      </div>
    </>
  )
}
