import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components';
import {graphql} from "gatsby";
import Portfolio from '../components/portfolio';
import Hero from '../components/hero';
import About from '../components/about';


export default function IndexPage({data}){
    return(
    <Layout>

      <Hero/>
      <About />
      <Portfolio />

    </Layout>
  )
}
