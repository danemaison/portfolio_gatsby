import React, {useState} from 'react';
import styled from 'styled-components';
import PortfolioItem from '../templates/portfolio-project';
import { useStaticQuery, graphql } from "gatsby";
import {Button} from '../components/ui/buttons';
import {SectionTitle} from '../components/ui/elements';
import { animated, useTransition, config } from 'react-spring';


const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:80%;
  margin: auto;
`
const Header = styled.div`
  width:100%;
  margin-bottom:20px;
  text-align: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:50%;
  margin:auto;
  margin-bottom:20px;
  >button{
    margin-right:5px;
  }
  >button:last-child{
    margin-right:0;
  }
`

const Projects = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;
  min-height:100vh;
  >div {
    width:50%;
  }
`

const Portfolio = () =>{
  const data = useStaticQuery(graphql`
    query {
     allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          extension: { eq: "md" }
          relativeDirectory: { regex: "/portfolio/" }
        }
       sort: { fields: [dir], order: DESC }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                stack
                description
                type
                image {
                  childImageSharp{
                    fluid(maxWidth:800, quality:80){
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    }
  `);

  const {edges} = data.allFile;

  const [projects, setProjects] = useState(edges)
  const filterButtons = ['all', 'frontend', 'full-stack', 'other'];
  const [activeButton, setActiveButton] = useState(0);
  const transition = useTransition(projects, projects => projects.node.id, {
    from: { transform: 'translateY(40px)', opacity:0 },
    enter: { transform: 'translateY(0)', opacity:1 },
    leave: { transform: 'translateY(40px)', opacity:0 },
  });

  const filterProjects = e => {
    const index = parseInt(e.target.getAttribute('data-index'));
    const {id} = e.currentTarget;
    setActiveButton(index);
    setProjects([]);
    setTimeout(()=>{
      setProjects(edges.filter(project => {
        return project.node.childMarkdownRemark.frontmatter.type.includes(id)
      })
      )
    }, 750);
  }

  return(
    <Container>
      <Header>
        <SectionTitle>
          Projects
        </SectionTitle>
        Check out what I've been working on
      </Header>
      <ButtonContainer>
        {filterButtons.map((item, index)=>{
          return (
            <Button
              primary={activeButton === index}
              id={item}
              data-index={index}
              key={item}
              onClick={filterProjects}>
              {item}
              </Button>
            )
          })}
      </ButtonContainer>
      <Projects>
        {transition.map(({item, props, key})=>{
          return(
            <animated.div key={key} style={props}>
              <PortfolioItem data={item.node}/>
            </animated.div>
          );
        })}
      </Projects>
    </Container>
  )

}


export default Portfolio;
