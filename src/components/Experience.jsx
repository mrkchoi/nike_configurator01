import {
  OrbitControls,
  Environment,
  RandomizedLight,
  Resize,
} from '@react-three/drei';
import React, { useEffect, useMemo, useRef } from 'react';

import * as THREE from 'three';
import Model from './AF1_v2';
import { Perf } from 'r3f-perf';
import { CAMERA_SETTINGS, useCustomization } from '../context/Customization';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

function Experience() {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const controls = useRef(null);
  const { activeSection, menuOpen } = useCustomization();
  const timelineRef = useRef(null);
  const groupRef = useRef(null);

  useGSAP(() => {
    const rotation = CAMERA_SETTINGS[activeSection + 1].rotation;
    const position = CAMERA_SETTINGS[activeSection + 1].position;
    const tl = gsap.timeline();
    timelineRef.current = tl;
    tl.to(controls.current.object.rotation, {
      x: rotation.x,
      y: rotation.y,
      z: rotation.z,
      duration: 0.75,
      ease: 'power4.out',
    });
    tl.to(
      controls.current.object.position,
      {
        x: position.x,
        y: position.y,
        z: position.z,
        duration: 0.75,
        ease: 'power4.out',
      },
      '<'
    );

    return () => {
      tl.kill();
    };
  }, [activeSection]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(groupRef.current.position, {
      y: menuOpen ? -0.2 : -0.4,
      duration: 0.5,
      ease: 'power4.out',
    });
  }, [menuOpen]);

  const scale = useMemo(() => {
    if (isMobile) return 0.4;
    if (isTablet) return 0.6;
    return 0.8;
  }, [isMobile, isTablet]);

  return (
    <>
      {/* <Perf position="top-left" /> */}
      {/* <fog attach="fog" args={['#213547', 10, 20]} /> */}
      <OrbitControls
        ref={controls}
        // onChange={() => console.log(controls.current.object)}
        maxPolarAngle={Math.PI * 0.75}
        minPolarAngle={-Math.PI * 0.5}
        enablePan={false}
        maxDistance={10}
        minDistance={5}
        mouseButtons={{
          LEFT: THREE.MOUSE.ROTATE,
          MIDDLE: THREE.MOUSE.ROTATE,
          RIGHT: THREE.MOUSE.ROTATE,
        }}
      />
      <group ref={groupRef} scale={scale}>
        <Model />
        <RandomizedLight
          intensity={Math.PI}
          amount={8}
          radius={4}
          ambient={0.5}
          position={[5, 5, -10]}
          bias={0.001}
        />
        <Environment preset="city" />
      </group>
    </>
  );
}

export default Experience;
