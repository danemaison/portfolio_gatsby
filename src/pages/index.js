import React, {useRef} from "react";
import Layout from "../components/layout";
import Portfolio from '../components/portfolio';
import Hero from '../components/hero';
import About from '../components/about';
import Canvas from '../components/canvas';
import Contact from '../components/contact';
import NavBar from "../components/navbar";

export default function IndexPage({data}){
  const aboutRef = useRef();
    return(
    <Layout>
      <NavBar about={aboutRef} />
      <Canvas/>
      <Hero/>
      <About ref={aboutRef} />
      <Portfolio />
      <Contact />
    </Layout>
  )
}
