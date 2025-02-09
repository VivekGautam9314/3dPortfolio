import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Scene() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }} style={{ height: '100vh' }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      
      {/* 3D Object: A simple cube */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* Orbit Controls to rotate the scene */}
      <OrbitControls />
    </Canvas>
  );
}

function App() {
  return <Scene />;
}

export default App;
