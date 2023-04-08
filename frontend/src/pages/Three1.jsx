import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Obj1 from "../components/Obj1.jsx";
import Obj2 from "../components/Obj2.jsx";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Floor from "../components/Floor.jsx";
import Room from "../components/Room.jsx";

export default function Three1() {
  const [isDragging, setIsDragging] = useState(false);
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  return (
    
      <Canvas style={{ background: "red", height : '100%' }} shadows dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={0.5}
      />

      {/* <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.05, 0]}
        receiveShadow
      >
        <planeBufferGeometry attach="geometry" args={[30, 10]} receiveShadow />
        <meshPhongMaterial
          attach="material"
          side={THREE.DoubleSide}
          receiveShadow
        />
      </mesh> */}

      {/* <planeHelper args={[floorPlane, 5, "red"]} /> */}

      {/* <gridHelper args={[100, 100]} /> */}

      <Obj1 setIsDragging={setIsDragging} floorPlane={floorPlane} />
      <Obj2 setIsDragging={setIsDragging} floorPlane={floorPlane} />
      {/* <Obj setIsDragging={setIsDragging} floorPlane={floorPlane} />  */}
        {/* <Floor/> */}
      <Room/>
      <OrthographicCamera makeDefault zoom={50} position={[0, 40, 200]} />

      <OrbitControls minZoom={10} maxZoom={50} enabled={!isDragging} />
    </Canvas>
    
  );
}