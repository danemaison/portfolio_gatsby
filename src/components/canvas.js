import React from 'react';
import styled from 'styled-components';


const Shadow = styled.div`
  width: 100%;
  height:100px;
  background-color:transparent;
  box-shadow: inset  0 -50px 50px -10px white;
  position: absolute;
  bottom:-50px;
  left:0;
  z-index: -1;
`
class Canvas extends React.Component{
  constructor(props){
    super(props);
    this.ref = React.createRef();
    this.state = {
      particles: [{x: 5, y: 150, alpha: .5, speed: Math.random() * 3 + 1}]
    }
    this.count = 0;
    this.tick = this.tick.bind(this);
  }
  moveParticles(){
    const canvas = this.ref.current;
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.zIndex = '-2';
    context.clearRect(0, 0, canvas.width, canvas.height);

    let { particles } = this.state;
    this.count++;
    if(this.count % 10 === 0){
      this.count = 0;
      particles.push({
        x: Math.random() * window.innerWidth,
        y: -15,
        alpha: Math.random(),
        speed: Math.random() * 1.5 + .5,
      })
    }

    particles = particles.filter(particle=>{
      if(particle.y > canvas.height) return false;
      particle.y += particle.speed;
      context.beginPath();
      context.fillStyle = '#127EB1';
      context.arc(particle.x, particle.y, 1.5, 0, 2 * Math.PI);
      context.globalAlpha = particle.alpha;
      context.fill();
      context.closePath();
      return true;
    })

    this.setState({particles});
  }
  tick(){
    this.moveParticles();
    window.requestAnimationFrame(this.tick)
  }
  componentDidMount(){
    this.tick();
  }

  render(){
    return (
      <>
        <canvas ref={this.ref} />
        <Shadow/>
      </>
    )
  }
}

export default Canvas;
