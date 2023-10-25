import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";


function CanvasComp() {
  return (
    <div id="canvas-container"  className=" h-96">
      <Canvas>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} position={[-2, 5, 2]} />
        <Box/>
      </Canvas>
    </div>
  );
}

export default CanvasComp;
