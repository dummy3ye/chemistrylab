import '../style.css';
import './sidebar';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const sidebar = document.getElementById('sidebar');
let sidebarWidth = sidebar ? getComputedStyle(sidebar).width : '0px';

const camera = new THREE.PerspectiveCamera(75, (window.innerWidth - parseInt(sidebarWidth)) / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setSize(window.innerWidth - parseInt(sidebarWidth), window.innerHeight);

camera.position.setZ(30);

const controls = new OrbitControls(camera, renderer.domElement);

const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
  color: 0xaaaaaa,
  size: 0.5,
});

const starVertices = [];
for (let i = 0; i < 10000; i++) {
  const x = (Math.random() - 0.5) * 2000;
  const y = (Math.random() - 0.5) * 2000;
  const z = (Math.random() - 0.5) * 2000;
  starVertices.push(x, y, z);
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    sidebarWidth = sidebar ? getComputedStyle(sidebar).width : '0px';
  camera.aspect = (window.innerWidth - parseInt(sidebarWidth)) / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth - parseInt(sidebarWidth), window.innerHeight);
});

animate();