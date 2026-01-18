import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
