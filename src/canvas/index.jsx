import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei';
import { Suspense } from 'react'; // Add this import

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 2.5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      {/* Remove the Environment component for now */}
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <directionalLight position={[-1, -1, -1]} intensity={0.5} />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel
