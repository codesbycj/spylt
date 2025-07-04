import React from 'react'
import { Navbar } from './components'
import { Hero, Message } from './sections'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Message />
    </>
  )
}

export default App