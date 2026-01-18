import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  function handleNavigate() {
    setOpen(!open)
  }
  return (
    <>
      <div className="nav-container">
        <div className="logo-container">
          <div className="logo">J</div>
        </div>
        <nav className="nav-top-bar">
          <li className="nav-top-bar-list">
            <Link to="/">HOME</Link>
          </li>
          <li>ABOUT</li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>CONTACT</li>
        </nav>
        <nav className="hamburger-nav">
          <div className="hamburger-menu">
            <div
              className={`hamburger-icon ${open ? 'open' : ''}`}
              onClick={handleNavigate}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            {open && (
              <div class="mobile-menu">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/">ABOUT</Link>
                </li>
                <li>
                  <Link to="/projects">PROJECT</Link>
                </li>
                <li>
                  <Link to="/">CONTACT</Link>
                </li>
              </div>
            )}
          </div>
        </nav>
      </div>

      <hr />
    </>
  )
}
