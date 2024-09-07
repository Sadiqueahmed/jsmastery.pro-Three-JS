import * as THREE from 'three';

const canvas = document.getElementById('canvas');

// 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#F0F0F0');

// 2. Camera
    const camera = new THREE.PerspectiveCamera(fov: 75, aspect: window.innerWidth / window.innerHeight, near:0.1, far: 1000);
    camera.position.z = 5;

// 3. Object
    const geometry = new THREE.DodechedronGeometry();
    const material = new THREE.MeshBasicMaterial({color: '#F468585',  emissive: '#468585'});
    const dodecahedron = new THREE.Mesh(geometry, material);