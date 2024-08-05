import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import { Suspense, useEffect, useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';

import {
  useCustomization,
  MATERIAL_TYPES,
  COLORS,
  LABEL_COLORS,
  DEFAULT_COLOR,
  DEFAULT_LABEL_COLOR,
} from './context/Customization';

import './App.css';
import Menu from './components/Menu';
import ModalMenu from './components/ModalMenu';
import { HelmetProvider } from 'react-helmet-async';
import SEOHelmet from './components/seo/SEOHelmet';
import { create } from 'zustand';
import LoaderCustom from './components/loader/LoaderCustom';

export const useStore = create((set) => ({
  totalAssets: 50,
  isLoaded: false,
  setIsLoaded: (value) => set(() => ({ isLoaded: value })),
}));

function App() {
  const isLoaded = useStore((state) => state.isLoaded);
  const camera = useRef(null);

  const {
    setVampColor,
    setVampMaterial,
    setTipColor,
    setTipMaterial,
    setQuarterColor,
    setQuarterMaterial,
    setTongueColor,
    setTongueMaterial,
    setTongueLabelColor,
    setEyestayColor,
    setEyestayMaterial,
    setFoxingColor,
    setFoxingMaterial,
    setSwooshColor,
    setSwooshMaterial,
    setLaceColor,
    setBacktabColor,
    setMidsoleColor,
    setOutsoleColor,
  } = useCustomization();

  const handleResetClick = (e) => {
    setVampMaterial(MATERIAL_TYPES.leather);
    setVampColor(DEFAULT_COLOR);
    setTipMaterial(MATERIAL_TYPES.leather);
    setTipColor(DEFAULT_COLOR);
    setQuarterMaterial(MATERIAL_TYPES.leather);
    setQuarterColor(DEFAULT_COLOR);
    setTongueMaterial(MATERIAL_TYPES.leather);
    setTongueColor(DEFAULT_COLOR);
    setTongueLabelColor(DEFAULT_LABEL_COLOR);
    setEyestayMaterial(MATERIAL_TYPES.leather);
    setEyestayColor(DEFAULT_COLOR);
    setFoxingMaterial(MATERIAL_TYPES.leather);
    setFoxingColor(DEFAULT_COLOR);
    setSwooshMaterial(MATERIAL_TYPES.leather);
    setSwooshColor(DEFAULT_COLOR);
    setLaceColor(DEFAULT_COLOR);
    setBacktabColor(DEFAULT_COLOR);
    setMidsoleColor(DEFAULT_COLOR);
    setOutsoleColor(DEFAULT_COLOR);
  };

  const handleRandomizeClick = (e) => {
    setVampMaterial((p) =>
      p === MATERIAL_TYPES.leather
        ? MATERIAL_TYPES.canvas
        : MATERIAL_TYPES.leather
    );
    setVampColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    setTipMaterial((p) =>
      p === MATERIAL_TYPES.leather
        ? MATERIAL_TYPES.canvas
        : MATERIAL_TYPES.leather
    );
    setTipColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    setQuarterMaterial((p) =>
      p === MATERIAL_TYPES.leather
        ? MATERIAL_TYPES.canvas
        : MATERIAL_TYPES.leather
    );
    setQuarterColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    setTongueMaterial((p) =>
      p === MATERIAL_TYPES.leather
        ? MATERIAL_TYPES.canvas
        : MATERIAL_TYPES.leather
    );
    setTongueColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    setTongueLabelColor(
      LABEL_COLORS[Math.floor(Math.random() * LABEL_COLORS.length)]
    );
    setEyestayMaterial((p) =>
      p === MATERIAL_TYPES.leather
        ? MATERIAL_TYPES.canvas
        : MATERIAL_TYPES.leather
    );
    setEyestayColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    setFoxingMaterial((p) =>
      p === MATERIAL_TYPES.leather
        ? MATERIAL_TYPES.canvas
        : MATERIAL_TYPES.leather
    );
    setFoxingColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    setSwooshMaterial((p) =>
      p === MATERIAL_TYPES.leather
        ? MATERIAL_TYPES.canvas
        : MATERIAL_TYPES.leather
    );
    setSwooshColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    setLaceColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    setBacktabColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    setMidsoleColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
    setOutsoleColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
  };

  useEffect(() => {
    handleRandomizeClick();
  }, []);

  return (
    <>
      <HelmetProvider>
        <SEOHelmet />
        {!isLoaded && <LoaderCustom />}
        <div className="main fixed left-0 right-0 top-0 z-10 flex w-full select-none flex-col justify-between pl-4 pr-4 pt-4 sm:flex-row sm:pl-12 sm:pr-12 sm:pt-8">
          <div className="flex justify-between sm:justify-start">
            <div className="mr-8">
              <Logo />
            </div>
            <div className="flex flex-col text-right text-[.85rem] text-gray-600 sm:text-left">
              <span>Nike Air Force 1 Low by You</span>
              <span>$135</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:flex-row sm:justify-end sm:gap-4 sm:text-[14.4px]">
            <button
              className="flex items-center rounded-full border border-gray-200 bg-white p-3 pl-6 pr-6"
              onClick={handleRandomizeClick}
            >
              <span className="mr-2">Randomize</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className=""
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </button>
            <button
              className="flex items-center rounded-full border border-gray-200 bg-white p-3 pl-6 pr-6"
              onClick={handleResetClick}
            >
              <span className="mr-2">Reset</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className=""
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
              </svg>
            </button>
          </div>
        </div>
        <div className="wrapper fixed bottom-0 left-0 right-0 top-0 z-0 h-full w-full bg-[#f6f6f6]">
          <Canvas
            gl={{
              alpha: true,
              logarithmicDepthBuffer: false,
              preserveDrawingBuffer: true,
            }}
          >
            <PerspectiveCamera
              ref={camera}
              makeDefault
              position={[0, 2.5, 10]}
              fov={35}
              near={0.1}
              far={1000}
            />
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Canvas>
        </div>
        <Menu />
        <ModalMenu />
      </HelmetProvider>
    </>
  );
}

function Logo() {
  return (
    <svg
      className="swoosh-svg"
      focusable="false"
      viewBox="0 0 25 25"
      role="img"
      width="50px"
      height="50px"
      fill="none"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default App;
