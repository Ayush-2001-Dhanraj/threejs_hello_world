import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "red",
  // wireframe: true,
});

// stairs 1
const stairs1 = new THREE.Group();
const cubeMesh1a = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh1a.position.x = 2;
const cubeMesh1b = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh1b.position.x = 3;
cubeMesh1b.position.y = -1;
const cubeMesh1c = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh1c.position.x = 4;
cubeMesh1c.position.y = -2;
stairs1.add(cubeMesh1a);
stairs1.add(cubeMesh1b);
stairs1.add(cubeMesh1c);
// stairs 2
const stairs2 = new THREE.Group();
const cubeMesh2a = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh2a.position.z = 2;
const cubeMesh2b = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh2b.position.z = 3;
cubeMesh2b.position.y = -1;
const cubeMesh2c = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh2c.position.z = 4;
cubeMesh2c.position.y = -2;
stairs2.add(cubeMesh2a);
stairs2.add(cubeMesh2b);
stairs2.add(cubeMesh2c);
// stairs 3
const stairs3 = new THREE.Group();
const cubeMesh3a = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh3a.position.x = -2;
const cubeMesh3b = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh3b.position.x = -3;
cubeMesh3b.position.y = -1;
const cubeMesh3c = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh3c.position.x = -4;
cubeMesh3c.position.y = -2;
stairs3.add(cubeMesh3a);
stairs3.add(cubeMesh3b);
stairs3.add(cubeMesh3c);
// stairs 4
const stairs4 = new THREE.Group();
const cubeMesh4a = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh4a.position.z = -2;
const cubeMesh4b = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh4b.position.z = -3;
cubeMesh4b.position.y = -1;
const cubeMesh4c = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh4c.position.z = -4;
cubeMesh4c.position.y = -2;
stairs4.add(cubeMesh4a);
stairs4.add(cubeMesh4b);
stairs4.add(cubeMesh4c);

// Stage
const stage = new THREE.Group();
const cubeMeshStageA = new THREE.Mesh(cubeGeometry, cubeMaterial);
// const cubeMeshStageB = new THREE.Mesh(cubeGeometry, cubeMaterial);
// cubeMeshStageB.position.x = 1;
// const cubeMeshStageC = new THREE.Mesh(cubeGeometry, cubeMaterial);
// cubeMeshStageC.position.x = -1;
// const cubeMeshStageD = new THREE.Mesh(cubeGeometry, cubeMaterial);
// cubeMeshStageD.position.z = 1;
// const cubeMeshStageE = new THREE.Mesh(cubeGeometry, cubeMaterial);
// cubeMeshStageE.position.z = -1;

const cubeMeshStageF = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMeshStageF.position.z = -1;
cubeMeshStageF.position.x = -1;
const cubeMeshStageG = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMeshStageG.position.z = -1;
cubeMeshStageG.position.x = 1;
const cubeMeshStageH = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMeshStageH.position.z = 1;
cubeMeshStageH.position.x = -1;
const cubeMeshStageI = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMeshStageI.position.z = 1;
cubeMeshStageI.position.x = 1;

stage.add(cubeMeshStageA);
// stage.add(cubeMeshStageB);
// stage.add(cubeMeshStageC);
// stage.add(cubeMeshStageD);
// stage.add(cubeMeshStageE);
stage.add(cubeMeshStageF);
stage.add(cubeMeshStageG);
stage.add(cubeMeshStageH);
stage.add(cubeMeshStageI);
stage.position.y = -1;

const group = new THREE.Group();
group.add(stairs1);
group.add(stairs2);
group.add(stairs3);
group.add(stairs4);
group.add(stage);

group.rotation.y = THREE.MathUtils.degToRad(-45);
group.position.y = 2;

scene.add(group);

const axesHelper = new THREE.AxesHelper(5);

scene.add(axesHelper);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
);

// console.log(window.devicePixelRatio);

// const aspectRatio = window.innerWidth / window.innerHeight;

// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   200
// );

camera.position.z = 8;
camera.position.y = 3;

const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.autoRotate = true;

renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();
let previousTime = 0;

const renderLoop = () => {
  const currentTime = clock.getElapsedTime();
  const delta = currentTime - previousTime;
  previousTime = currentTime;

  group.rotation.y += THREE.MathUtils.degToRad(1) * delta * 20;

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(renderLoop);
};

renderLoop();
