import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Text } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import "./styles/TechStack.css";

const skills = [
  "Python", "TensorFlow", "Keras", "PyTorch", "OpenCV", "MediaPipe",
  "HuggingFace", "Scikit-learn", "NLTK", "SQL", "Git", "NumPy", "n8n", "OpenClaw", "LLMs",
  "AI Automation", "Pandas", "FastAPI", "React", "TypeScript", "CNNs",
  "YOLO", "NLP", "Machine Learning", "Deep Learning", "Data Mining", "REST APIs", "OPENCLAW"
];

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

const spheres = [...Array(28)].map(() => ({
  scale: [0.7, 0.85, 1, 0.9, 1.1][Math.floor(Math.random() * 5)],
}));

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
  skill,
}: {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
  skill: string;
}) {
  const api = useRef<RapierRigidBody | null>(null);
  const textRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (!api.current) return;

    // Sync text position with the physics body and face the camera
    if (textRef.current) {
      const pos = api.current.translation();
      textRef.current.position.set(pos.x, pos.y, pos.z);
      textRef.current.quaternion.copy(state.camera.quaternion);
      // Move the text outward towards the camera so it rests perfectly on the sphere's surface
      textRef.current.translateZ(scale + 0.1);
    }

    if (!isActive) return;

    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(-15 * delta * scale, -45 * delta * scale, -15 * delta * scale)
      );
    api.current.applyImpulse(impulse, true);
  });

  return (
    <group>
      <RigidBody
        linearDamping={1.5}
        angularDamping={0.8}
        friction={0.2}
        position={[r(20), r(20) - 25, r(20) - 10]}
        ref={api}
        colliders={false}
      >
        <BallCollider args={[scale]} />
        <CylinderCollider
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0, 1.2 * scale]}
          args={[0.15 * scale, 0.275 * scale]}
        />
        <mesh
          castShadow
          receiveShadow
          scale={scale}
          geometry={sphereGeometry}
          material={material}
        />
      </RigidBody>
      <Text
        ref={textRef}
        fontSize={scale / 3.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.04}
        outlineColor="#2e0080"
      >
        {skill}
      </Text>
    </group>
  );
}

function Pointer({
  vec = new THREE.Vector3(),
  isActive,
}: {
  vec?: THREE.Vector3;
  isActive: boolean;
}) {
  const ref = useRef<RapierRigidBody>(null);
  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    ref.current?.setNextKinematicTranslation(
      vec.lerp(
        new THREE.Vector3(
          (pointer.x * viewport.width) / 2,
          (pointer.y * viewport.height) / 2,
          0
        ),
        0.2
      )
    );
  });
  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const workEl = document.getElementById("work");
      if (!workEl) return;
      setIsActive(workEl.getBoundingClientRect().top < 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const materials = useMemo(
    () =>
      skills.map(
        (_, i) =>
          new THREE.MeshPhysicalMaterial({
            color: new THREE.Color().setHSL(0.72 + i * 0.03, 0.6, 0.15),
            emissive: new THREE.Color().setHSL(0.72 + i * 0.03, 0.8, 0.1),
            emissiveIntensity: 0.6,
            metalness: 0.3,
            roughness: 0.5,
            clearcoat: 0.4,
          })
      ),
    []
  );

  return (
    <div className="techstack">
      <p className="techstack-label">Tech Arsenal</p>
      <h2>Techstack</h2>
      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={0.8} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="#c4a4ff"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={1.5} color="#e879f9" />

        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => {
            const skillIndex = i % skills.length;
            return (
              <group key={i}>
                <SphereGeo
                  {...props}
                  material={materials[skillIndex]}
                  isActive={isActive}
                  skill={skills[skillIndex]}
                />
              </group>
            );
          })}
        </Physics>

        <Environment preset="city" environmentIntensity={0.3} />

        <EffectComposer enableNormalPass={false}>
          <N8AO color="#2e0080" aoRadius={2} intensity={1.2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
