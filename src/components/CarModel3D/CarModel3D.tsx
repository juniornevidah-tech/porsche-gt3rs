import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Modelo3D() {
    const { scene } = useGLTF("/porsche_gt3_rs.glb");
    return <primitive object={scene} scale={1} />;
}

function CarModel() {
    return (
        <div className="relative h-[600px] bg-gradient-to-b from-white via-gray-100 to-gray-200 overflow-hidden">
            <div className="absolute top-12 left-0 right-0 text-center z-10 pointer-events-none">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black">PORSCHE 911 GT3 RS</h2>
                <p className="text-gray-500 uppercase tracking-widest text-xs mt-2">Drag to rotate · Scroll to zoom</p>
            </div>

            <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Modelo3D />
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default CarModel;
