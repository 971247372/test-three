import React, { Component } from "react";
import PropTypes from "prop-types";
const THREE = require("three");
const OrbitControls = require("three-orbitcontrols");
const OBJLoader = require("three-obj-loader");
OBJLoader(THREE);

class App extends Component {
  componentDidMount() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 10, 0);
    camera.lookAt(0, 0, 0);
    camera.position.z = 5;
    var ambientLight = new THREE.AmbientLight(0x404040);
    var directionalLight1 = new THREE.DirectionalLight(0xc0c090);
    var directionalLight2 = new THREE.DirectionalLight(0xc0c090);

    directionalLight1.position.set(-100, -50, 100);
    directionalLight2.position.set(100, 50, -100);

    scene.add(directionalLight1);
    // scene.add(directionalLight2);
    scene.add(ambientLight);
    // var light = new THREE.AmbientLight(0x404040); // soft white light
    // scene.add(light);

    const paneGeometry = new THREE.PlaneGeometry(1000, 1000, 1000);
    const paneMaterial = new THREE.MeshNormalMaterial({
      color: 0x00ff00,
      side: THREE.DoubleSide,
      wireframe: true
    });
    const pane = new THREE.Mesh(paneGeometry, paneMaterial);
    pane.rotateX(Math.PI * 0.25);
    scene.add(pane);

    //     var geometry = new THREE.SphereGeometry( 5, 32, 32 );
    // var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    // var sphere = new THREE.Mesh( geometry, material );
    // scene.add( sphere );

    const loader = new THREE.OBJLoader();
    // 加载一个资源
    loader.load(
      // 资源链接
      require("./obj/meter.obj"),
      // 资源加载完成后的回调函数
      function(object) {
        console.log("object :", object);
        object.wireframe = true;
        scene.add(object.children[0]);
      }
    );

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
