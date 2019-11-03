import React from 'react';
import styled from 'styled-components';


const Shadow = styled.div`
  width: 100%;
  height:100px;
  background-color:transparent;
  box-shadow: inset  0 -50px 50px -10px white;
  position: absolute;
  bottom:-80px;
  left:0;
  z-index: 2;
`
class Canvas extends React.Component{
  constructor(props){
    super(props);
    this.ref = React.createRef();
    this.state = {
      particles: [{x: 5, y: 150, alpha: .5, speed: Math.random() * 3 + 1}]
    }
    this.mouseX = null;
    this.count = 0;
    this.tick = this.tick.bind(this);
    this.getMouseCoords = this.getMouseCoords.bind(this);
  }
  getMouseCoords(e){
    this.mouseX = e.clientX;
  }
  moveParticles(){
    let { particles } = this.state;
    const canvas = this.ref.current;
    const context = canvas.getContext('2d');
    // const direction = this.mouseX / window.innerWidth * 2 - 1;

    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight - 100}px`;

    canvas.style.position = 'absolute';
    canvas.style.zIndex = '1';
    context.clearRect(0, 0, canvas.width, canvas.height);

    this.count++;
    if(this.count % 7 === 0){
      this.count = 0;
      particles.push({
        // x: Math.random() * window.innerWidth * 2,
        // y: -5,
        y: Math.random() * window.innerWidth * 2,
        x: -5,
        alpha: Math.random() * .75 + .25,
        speed: Math.random() * 3 + 2,
      })
    }

    particles = particles.filter(particle=>{
      if(particle.x > window.innerWidth * 2) return false;
      if(particle.alpha <= 0) return false;
      // particle.y += particle.speed;
      // particle.x += direction * 2;
      // particle.y += direction * 2;
      particle.x += particle.speed
      context.beginPath();
      // context.fillStyle = '#127EB1';
      context.fillStyle = '#127EB1';
      // context.arc(particle.x, particle.y, 4, 0, 2 * Math.PI);
      context.rect(particle.x, particle.y, 10, 10);
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
        <canvas onMouseMove={this.getMouseCoords } ref={this.ref} />
      </>
    )
  }
}

export default Canvas;
