import './App.css';
import { useEffect } from 'react';
import * as Three from 'three';
import example2 from './three.js/example-2(helpers)';


function App() {
  useEffect(() => {


    function createScene() {
      example2();
    }

    function createBox(name, w, h, d, color, scene) {
      // küp oluşturuyoruz
      var geometri = new Three.BoxGeometry(w, h, d);
      var material = new Three.MeshBasicMaterial({ color: color });
      var mesh = new Three.Mesh(geometri, material);
      mesh.name = name;
      scene.add(mesh);
    }


    createScene();


  }, [])
  return (
    <div id="App"> </div>
  );
}

export default App;
