import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import * as Three from 'three';

function App() {
  useEffect(() => {
    const scene = new Three.Scene();
    var camera = new Three.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    var renderer = new Three.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("App").appendChild(renderer.domElement);

    // küp oluşturuyoruz
    var geometri = new Three.BoxGeometry(1, 1, 1);
    var material = new Three.MeshBasicMaterial({ color: '#aa3030'});
    var mesh = new Three.Mesh(geometri, material);
    scene.add(mesh);

    //kameranın bakış açısı
    camera.position.x=1;
    camera.position.y=1;
    camera.position.z=5;

    renderer.render(scene, camera);
  }, [])
  return (
    <div id="App"> </div>
  );
}

export default App;
