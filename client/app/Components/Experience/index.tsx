"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sky,
  Cloud,
  Environment
} from "@react-three/drei";
import Ground from "../Ground";

const Experience = () => {
  return (
    <div style={{ padding: "0px", margin: "0px", height: "100vh", width: "100vw" }}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <Environment
            files="/hdr/cliffside_4k.hdr"
          />

          <Sky
            distance={450_000}
            sunPosition={[50, 100, 10]}
            inclination={0}
            azimuth={0.25}
            turbidity={8}
            rayleigh={2}
            mieCoefficient={0.005}
            mieDirectionalG={0.8}
          />
          {/* 
          <Cloud 
            position={[0, 50, 0]} 
            opacity={0.6}
            speed={0.2} 
          /> */}

          <ambientLight intensity={0.4} />
          <directionalLight
            position={[50, 100, 10]}
            intensity={2}
            castShadow
          />

          <OrbitControls />

          <Ground />
        </Suspense>
        <axesHelper />
      </Canvas>
    </div>
  );
}
export default Experience;
