import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'


function App() {


  return (
    <BrowserRouter >
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter >
  )
}

export default App
