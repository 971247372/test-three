import React, { Component } from "react";
import PropTypes from "prop-types";
const THREE = require('three')
const OrbitControls = require('three-orbitcontrols')
class App extends Component {
  componentDidMount() {
  const width = window.innerWidth
const height = window.innerHeight

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000)


const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

const controls = new OrbitControls(camera, renderer.domElement)

const animate=()=> {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}

animate()
}

  render() {
   
    return <div />;
  }
}

App.propTypes = {};

export default App;
