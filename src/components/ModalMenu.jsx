import React, { useRef } from 'react';
import {
  useCustomization,
  MATERIAL_TYPES,
  COLORS,
  LABEL_COLORS,
  SECTION_AREAS,
  SECTION_MAPPING,
  SECTIONS,
  DEFAULT_COLOR,
} from '../context/Customization';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function ModalMenu() {
  const container = useRef(null);
  const backdrop = useRef(null);
  const modal = useRef(null);
  const {
    modalMenuOpen,
    setModalMenuOpen,
    setActiveSection,
    vampColor,
    tipColor,
    quarterColor,
    tongueColor,
    tongueLabelColor,
    eyestayColor,
    foxingColor,
    swooshColor,
    laceColor,
    midsoleColor,
    outsoleColor,
    backtabColor,
  } = useCustomization();

  const getColor = (sectionId) => {
    switch (sectionId) {
      case 1:
        return vampColor;
      case 2:
        return tipColor;
      case 3:
        return quarterColor;
      case 4:
        return tongueColor;
      case 5:
        return tongueLabelColor;
      case 6:
        return eyestayColor;
      case 7:
        return foxingColor;
      case 8:
        return swooshColor;
      case 9:
        return laceColor;
      case 10:
        return outsoleColor;
      case 11:
        return midsoleColor;
      case 12:
        return backtabColor;
      default:
        return DEFAULT_COLOR;
    }
  };

  useGSAP(() => {
    if (modalMenuOpen) {
      gsap.set(container.current, { pointerEvents: 'auto' });
      gsap.to(modal.current, {
        y: 0,
        duration: 0.5,
        ease: 'power4.out',
      });
      gsap.to(backdrop.current, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.5,
        ease: 'power4.out',
      });
    } else {
      gsap.set(container.current, { pointerEvents: 'none' });
      gsap.to(modal.current, {
        y: '100%',
        duration: 0.5,
        ease: 'power4.out',
      });
      gsap.to(backdrop.current, {
        opacity: 0,
        visibility: 'hidden',
        duration: 0.5,
        ease: 'power4.out',
      });
    }
  }, [modalMenuOpen]);

  return (
    <div
      ref={container}
      className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-10 h-screen w-full"
    >
      <div
        ref={backdrop}
        className="h-full w-full bg-[rgba(0,0,0,.4)] backdrop-blur-md"
        onClick={() => setModalMenuOpen(false)}
      ></div>
      <div
        ref={modal}
        className="absolute bottom-0 left-0 w-full translate-y-[100%] bg-white"
      >
        <div className="p-4 pb-8 sm:p-12 ">
          <div className="p-4 text-xl font-bold sm:p-0">
            Components <span className="font-medium text-gray-400">12</span>
          </div>
          <div className="mt-0 grid grid-cols-2 sm:mt-4">
            {SECTIONS.map((section, idx) => {
              const color = getColor(section.id);

              return (
                <div key={idx} className="mt-2">
                  <button
                    className="flex items-center gap-4 p-4"
                    onClick={() => {
                      setActiveSection(section.id - 1);
                      setModalMenuOpen(false);
                    }}
                  >
                    <div
                      className="modalColor h-[10px] w-[10px] rounded-lg border"
                      style={{ '--colorSwatch': color.hex ?? color.hex1 }}
                    ></div>
                    <div className="text-left">{section.name}</div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute right-8 top-8 rounded-full sm:right-12 sm:top-12">
          <button
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full border"
            onClick={() => setModalMenuOpen(false)}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalMenu;
