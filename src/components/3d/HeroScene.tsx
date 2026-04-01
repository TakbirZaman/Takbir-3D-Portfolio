import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, Float, MeshDistortMaterial, Torus } from '@react-three/drei'
import * as THREE from 'three'

/* ── Floating wireframe icosahedron (central hero shape) ── */
function HeroShape() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = clock.elapsedTime * 0.15 + mouse.y * 0.2
    meshRef.current.rotation.y = clock.elapsedTime * 0.25 + mouse.x * 0.3
  })

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#7c3aed"
          wireframe={false}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.55}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
      {/* wireframe overlay */}
      <mesh scale={1.85}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.25} />
      </mesh>
    </Float>
  )
}

/* ── Orbiting torus rings ── */
function OrbitRing({ radius, speed, color, tilt }: {
  radius: number; speed: number; color: string; tilt: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.z = clock.elapsedTime * speed
  })

  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <Torus args={[radius, 0.015, 8, 120]}>
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </Torus>
    </mesh>
  )
}

/* ── Floating particle field ── */
function Particles({ count = 200 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [count])

  const ref = useRef<THREE.Points>(null)

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial size={0.045} color="#06b6d4" transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

/* ── Small floating spheres ── */
function FloatingSphere({ pos, color, size }: {
  pos: [number, number, number]; color: string; size: number
}) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh position={pos}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} transparent opacity={0.7} />
      </mesh>
    </Float>
  )
}

/* ── Main exported canvas ── */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#7c3aed" />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#06b6d4" />

      <Stars radius={60} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
      <Particles />

      <HeroShape />
      <OrbitRing radius={3.2} speed={0.18} color="#7c3aed" tilt={0.3} />
      <OrbitRing radius={3.8} speed={-0.12} color="#06b6d4" tilt={1.1} />
      <OrbitRing radius={4.4} speed={0.09} color="#a855f7" tilt={0.7} />

      <FloatingSphere pos={[-4, 2, -2]} color="#7c3aed" size={0.18} />
      <FloatingSphere pos={[4, -1.5, -1]} color="#06b6d4" size={0.12} />
      <FloatingSphere pos={[3, 2.5, -3]} color="#a855f7" size={0.22} />
      <FloatingSphere pos={[-3.5, -2, -2]} color="#7c3aed" size={0.15} />
    </Canvas>
  )
}
