import React from "react"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import Hero from "../components/hero"
import About from "../components/about"
import Canvas from "../components/canvas"
import Contact from "../components/contact"

export default function IndexPage({ data }) {
  return (
    <Layout>
      {window.innerWidth > 700 && <Canvas />}
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  )
}
