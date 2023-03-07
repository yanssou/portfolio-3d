import { useState, useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from "maath/random/dist/maath-random.esm"
import { StarsCanvas } from '.'

const Stars = (props) => {
  const ref = useRef()


  return (
    <group>
      <Points ref={ref} positions={sphere} />
    </group>
  )
}

const StarCanvas = () => {
  return (
    <div className='w-full h-full absolute inset-0 z-[-1]'>
      <Canvas
        camera={{ position: [0, 0, 1] }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas