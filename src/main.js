import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const TextureLoader = new THREE.TextureLoader();
const GrassAlbedo = TextureLoader.load(
  "/textures/cavern-walls-bl/cavern-walls_albedo.png"
);
const GrassAO = TextureLoader.load(
  "/textures/cavern-walls-bl/cavern-walls_ao.png"
);
const GrassHeight = TextureLoader.load(
  "/textures/cavern-walls-bl/cavern-walls_height.png"
);
const GrassMetallic = TextureLoader.load(
  "/textures/cavern-walls-bl/cavern-walls_metallic.png"
);
const GrassNormal = TextureLoader.load(
  "/textures/cavern-walls-bl/cavern-walls_normal-ogl.png"
);
const GrassRoughness = TextureLoader.load(
  "/textures/cavern-walls-bl/cavern-walls_roughness.png"
);

GrassAlbedo.repeat.set(10, 10);
GrassAlbedo.wrapS = THREE.MirroredRepeatWrapping;
GrassAlbedo.wrapT = THREE.MirroredRepeatWrapping;

const ObjectAlbedo = TextureLoader.load(
  "/textures/painted-damaged-concrete-bl/painted-damaged-concrete_albedo.png"
);
const ObjectAO = TextureLoader.load(
  "/textures/painted-damaged-concrete-bl/painted-damaged-concrete_ao.png"
);
const ObjectHeight = TextureLoader.load(
  "/textures/painted-damaged-concrete-bl/painted-damaged-concrete_height.png"
);
const ObjectMetallic = TextureLoader.load(
  "/textures/painted-damaged-concrete-bl/painted-damaged-concrete_metallic.png"
);
const ObjectNormal = TextureLoader.load(
  "/textures/painted-damaged-concrete-bl/painted-damaged-concrete_normal-ogl.png"
);
const ObjectRoughness = TextureLoader.load(
  "/textures/painted-damaged-concrete-bl/painted-damaged-concrete_roughness.png"
);

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
cubeGeometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(cubeGeometry.attributes.uv.array, 2)
);
const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16);
torusKnotGeometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(torusKnotGeometry.attributes.uv.array, 2)
);
const planeGeometry = new THREE.PlaneGeometry(1, 1);
planeGeometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(planeGeometry.attributes.uv.array, 2)
);
const sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
sphereGeometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(sphereGeometry.attributes.uv.array, 2)
);
const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
cylinderGeometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(cylinderGeometry.attributes.uv.array, 2)
);
const surfaceGeometry = new THREE.PlaneGeometry(1, 1);
surfaceGeometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(surfaceGeometry.attributes.uv.array, 2)
);

// const cubeMaterial = new THREE.MeshBasicMaterial({
//   color: "blue",
//   // wireframe: true,
//   transparent: true,
//   opacity: 0.5,
// });
const cubeMaterial = new THREE.MeshPhongMaterial();
// cubeMaterial.shininess = 100;
cubeMaterial.side = THREE.DoubleSide;
// cubeMaterial.color = new THREE.Color("red");
cubeMaterial.map = ObjectAlbedo;
cubeMaterial.roughnessMap = ObjectRoughness;
cubeMaterial.metalnessMap = ObjectMetallic;
cubeMaterial.normalMap = ObjectNormal;
cubeMaterial.displacementMap = ObjectHeight;
cubeMaterial.displacementScale = 0.1;
cubeMaterial.aoMap = ObjectAO;

const surfaceMaterial = new THREE.MeshPhongMaterial();
surfaceMaterial.side = THREE.DoubleSide;
surfaceMaterial.map = GrassAlbedo;
surfaceMaterial.roughnessMap = GrassRoughness;
surfaceMaterial.metalnessMap = GrassMetallic;
surfaceMaterial.normalMap = GrassNormal;
surfaceMaterial.displacementMap = GrassHeight;
surfaceMaterial.aoMap = GrassAO;

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

// scene.add(axesHelper);

const plane = new THREE.Mesh(planeGeometry, cubeMaterial);
plane.position.y = 2;
plane.rotation.y = THREE.MathUtils.degToRad(45);

scene.add(plane);

const sphere = new THREE.Mesh(sphereGeometry, cubeMaterial);
sphere.position.y = 4.2;
scene.add(sphere);

const light1 = new THREE.AmbientLight("white", 0.3);
scene.add(light1);

const light2 = new THREE.PointLight("white", 0.5);
light2.position.set(0, 3, 0);
scene.add(light2);

const light3 = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(light3);

const knotMesh = new THREE.Mesh(torusKnotGeometry, cubeMaterial);
knotMesh.position.y = 3;
scene.add(knotMesh);

const cylinderMesh = new THREE.Mesh(cylinderGeometry, cubeMaterial);
cylinderMesh.position.y = 0;
scene.add(cylinderMesh);

const surface = new THREE.Mesh(surfaceGeometry, surfaceMaterial);
surface.position.y = -0.5;
surface.rotation.x = -(Math.PI * 0.5);
surface.scale.set(100, 100);
scene.add(surface);

// const fog = new THREE.Fog("blue", 1, 10);
// scene.fog = fog;
// scene.background = new THREE.Color("blue");

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
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

  // if (delta > 1) {
  previousTime = currentTime;

  // group.rotation.y += THREE.MathUtils.degToRad(1) * delta * 20;
  stage.rotation.y += THREE.MathUtils.degToRad(5) * delta * 20;
  // stage.rotation.y += THREE.MathUtils.degToRad(45);

  // stairs1.scale.x = Math.abs(Math.sin(currentTime)) + 0.2;
  // stairs2.scale.z = Math.abs(Math.sin(currentTime)) + 0.2;
  // stairs3.scale.x = Math.abs(Math.sin(currentTime)) + 0.2;
  // stairs4.scale.z = Math.abs(Math.sin(currentTime)) + 0.2;
  // }
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(renderLoop);
};

renderLoop();
