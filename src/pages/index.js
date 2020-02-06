import React from "react"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import Hero from "../components/hero"
import About from "../components/about"
import Contact from "../components/contact"
import SEO from "../components/seo"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Dane Maison | Full Stack Developer" />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  )
}
