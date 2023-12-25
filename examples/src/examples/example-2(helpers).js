import * as Three from 'three';
export default function example2(){
    const scene = new Three.Scene();
    var camera = new Three.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 1000);
    var renderer = new Three.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("App").appendChild(renderer.domElement);

    //kameranın bakış açısı
    camera.position.x = 0;
    camera.position.y = 2;
    camera.position.z = 4;
    //cameranın odağını lookat ile değiştirebiliriz
    //camera.lookAt(new Three.Vector3(0,0,0));

    //tabanı çizmemize olanak sağlar
    //parametreler kaç birim olacağı,kaç parçaya böleceği,ana çizgilerin rengi
    var gridHelper = new Three.GridHelper(5, 15, '#D81B60');
    scene.add(gridHelper);

    //eksenleri çizmemize olanak sağlar
    var axesHepler = new Three.AxesHelper(1);
    scene.add(axesHepler);

    //bir merkezden bir noktaya ok çizmemize olanak sağlar
    const dir = new Three.Vector3(1, 1, 1);
    const ori = new Three.Vector3(0, 0, 0);
    dir.normalize();
    var arrowHelper = new Three.ArrowHelper(dir, ori, 1, '#D81B60')
    scene.add(arrowHelper);

    renderer.render(scene, camera);
}