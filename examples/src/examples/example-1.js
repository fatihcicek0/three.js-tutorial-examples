import * as Three from 'three';
export function example1(){

    const scene = new Three.Scene();
    var camera = new Three.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    var renderer = new Three.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("App").appendChild(renderer.domElement);

    // küp oluşturuyoruz
    var geometri = new Three.BoxGeometry(1, 1, 1);
    var material = new Three.MeshBasicMaterial({ color: '#aa3030' });
    var mesh = new Three.Mesh(geometri, material);
    scene.add(mesh);

    //kameranın bakış açısı
    camera.position.x = 1;
    camera.position.y = 1;
    camera.position.z = 5;

    renderer.render(scene, camera);

}
// as a Functions
// function createScene() {
//     const scene = new Three.Scene();
//     var camera = new Three.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 1000);
//     var renderer = new Three.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById("App").appendChild(renderer.domElement);

    
//     createBox('box1', 2, 2, 2, "#ffff", scene);


//     //kameranın bakış açısı
//     camera.position.x = 0;
//     camera.position.y = 0;
//     camera.position.z = 3;

//     renderer.render(scene, camera);
//   }

//   function createBox(name, w, h, d, color, scene) {
//     // küp oluşturuyoruz
//     var geometri = new Three.BoxGeometry(w, h, d);
//     var material = new Three.MeshBasicMaterial({ color: color });
//     var mesh = new Three.Mesh(geometri, material);
//     mesh.name = name;
//     scene.add(mesh);
//   }
// createScene();