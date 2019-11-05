import React, { useEffect } from "react"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import Hero from "../components/hero"
import About from "../components/about"
import Canvas from "../components/canvas"
import Contact from "../components/contact"

export default function IndexPage({ data }) {
  let Particles = null
  const updateCanvas = () => {
    if (window.innerWidth > 700) {
      Particles = <Canvas />
    }
  }
  useEffect(() => {
    updateCanvas()
  })
  return (
    <Layout>
      <Particles />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  )
}
