import * as THREE from 'three';
import {color, parameter} from "three/tsl";

const canvas = document.getElementById('canvas');

// 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#F0F0F0');

// 2. Camera
    const camera = new THREE.PerspectiveCamera(fov:75, aspect:window.innerWidth / window.innerHeight, near:0.1, far: 1000);
    camera.position.z = 5;

// 3. Object
    const geometry = new THREE.DodechedronGeometry();
    const material = new THREE.MeshBasicMaterial({color: '#F468585',  emissive: '#468585'});
    const dodecahedron = new THREE.Mesh(geometry, material);

    const boxGeometry = new THREE.BoxGeometry(width: 2, height: 0.1. depth:2);
    const boxMaterial = new THREE.MeshBasicMaterial(parameters: {color: '#B4B4B3', emissive: '#B4B4B3'});
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.y = -1.5 ;

    scene.add(dodecahedron);
    scene.add(box);

    // 4. Lights
    const light = new THREE.SpotLight(0x006769, 100);
    light.position.set(1, 1, 1);
    scene.add(light);

    // 5. Renderer
    const renderer = new THREE.WebGLRenderer(parameter:{canvas });
