'use client'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from './Components/Loader';
import Experience from './Components/Experience';

export default function Home() {
  return (
    <>
    <p>AUGA</p>
      <Canvas className="w-full h-screen bg-black"
      camera={{ near: 0.1, far: 1000 }} >
        <Suspense fallback={<Loader/>}>
        <Experience/>
        </Suspense>
      </Canvas>
    </>
  );
}
