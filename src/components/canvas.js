import React from "react"
import styled from "styled-components"

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.state = {
      particles: [{ x: 5, y: 150, alpha: 0.5, speed: Math.random() * 3 + 1 }],
    }
    this.mouseX = null
    this.count = 0
    this.tick = this.tick.bind(this)
    this.getMouseCoords = this.getMouseCoords.bind(this)
  }
  getMouseCoords(e) {
    this.mouseX = e.clientX
  }
  moveParticles() {
    let { particles } = this.state
    const canvas = this.ref.current
    const context = canvas.getContext("2d")

    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight - 100}px`

    canvas.style.position = "absolute"
    canvas.style.zIndex = "1"
    context.clearRect(0, 0, canvas.width, canvas.height)

    this.count++
    if (this.count % 7 === 0) {
      this.count = 0
      particles.push({
        y: Math.random() * window.innerWidth * 2,
        x: -5,
        alpha: Math.random() * 0.75 + 0.25,
        speed: Math.random() * 3 + 2,
      })
    }

    particles = particles.filter(particle => {
      if (particle.x > window.innerWidth * 2) return false
      if (particle.alpha <= 0) return false
      particle.x += particle.speed
      context.beginPath()
      context.fillStyle = "#127EB1"
      context.rect(particle.x, particle.y, 10, 10)
      context.globalAlpha = particle.alpha
      context.fill()
      context.closePath()
      return true
    })

    this.setState({ particles })
  }
  tick() {
    this.moveParticles()
    window.requestAnimationFrame(this.tick)
  }
  componentDidMount() {
    if (typeof window !== "undefined" && window.innerWidth > 700) {
      this.tick()
    }
  }
  render() {
    return (
      <>
        <canvas onMouseMove={this.getMouseCoords} ref={this.ref} />
      </>
    )
  }
}

export default Canvas
