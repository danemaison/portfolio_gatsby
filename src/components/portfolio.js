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
  width:100%;
`
const Header = styled.div`
  margin-bottom:20px;
  text-align: center;
`
const FilterButton = styled(Button)`
  height:25px;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1%;
  margin-bottom:20px;
  >button{
    margin-right:5px;
  }
  >button:last-child{
    margin-right:0;
  }
`

const Projects = styled.div`
  /* display:flex;
  flex-wrap:wrap;
  justify-content: space-around; */
  /* width:200vw; */
  min-height:45vh;
  white-space: nowrap;
  overflow-x:scroll;
  overflow-y:hidden;

  &::-webkit-scrollbar {
    /* -webkit-appearance: none; */
    height:5px;

  }
  &::-webkit-scrollbar-thumb {
    border-radius:50px;
    background-color: #127EB1;
  }

  >div {
    width:85vw;
    display:inline-block;
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
    config: config.gentle,
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
    <>
      <Container id="projects" >
        <Header>
          <SectionTitle>
            Projects
          </SectionTitle>
          Check out what I've been working on
        </Header>
        <ButtonContainer>
          {filterButtons.map((item, index)=>{
            return (
              <FilterButton
                primary={activeButton === index}
                id={item}
                data-index={index}
                key={item}
                onClick={filterProjects}>
                {item}
                </FilterButton>
              )
            })}
        </ButtonContainer>
      </Container>
      <Projects>
        {transition.map(({item, props, key})=>{
          return(
            <animated.div key={key} style={props}>
              <PortfolioItem data={item.node}/>
            </animated.div>
          );
        })}
      </Projects>
    </>
  )

}


export default Portfolio;
