import React, { Component } from "react";
import PropTypes from "prop-types";
const THREE = require("three");
const OrbitControls = require("three-orbitcontrols");
class App extends Component {
  componentDidMount() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 10, 0);
    camera.lookAt(0, 0, 0);
    camera.position.z = 5;
    const paneGeometry = new THREE.PlaneGeometry(10, 10, 10);
    const paneMaterial = new THREE.MeshNormalMaterial({
      color: 0x00ff00,
      side: THREE.DoubleSide,
      wireframe: true
    });
    const pane = new THREE.Mesh(paneGeometry, paneMaterial);
    pane.rotateX(Math.PI * 0.25);

    scene.add(pane);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }

  render() {
    return <div />;
  }
}

App.propTypes = {};

export default App;
