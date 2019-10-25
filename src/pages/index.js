import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components';
import {graphql} from "gatsby";
import Portfolio from '../components/portfolio';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:100%;
`
const Row = styled.div`
  display:flex;
`

export default function IndexPage({data}){
    // const {markdownRemark} = data;
    // console.log(markdownRemark);
    // const{frontmatter, html} = markdownRemark;
    return(
    <Layout>
      <Row>
        <div>Image</div>
        <div>Hey, I'm Dane.</div>
      </Row>
      <Portfolio />
    </Layout>
  )
}
