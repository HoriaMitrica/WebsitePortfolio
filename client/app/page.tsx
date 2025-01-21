'use client';

import { Suspense } from 'react';
import Experience from './Components/Experience';

export default function Home() {
  return (
    <>
        <Suspense fallback={<p>Loading...</p>}>
        <Experience/>
        </Suspense>
    </>
  );
}
