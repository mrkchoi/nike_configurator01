import React, { useEffect, useRef } from 'react';
import {
  COLORS,
  MATERIAL_TYPES,
  useCustomization,
} from '../../context/Customization';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(Draggable);
function MenuSwoosh({ activeSection }) {
  const { swooshColor, setSwooshColor, swooshMaterial, setSwooshMaterial } =
    useCustomization();

  const colors = useRef(null);
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const bounds = colors.current.parentNode.getBoundingClientRect();
    const colorsWidth = bounds.width;
    const minX = -colorsWidth;
    const maxX = colorsWidth;
    const draggable = Draggable.create(colors.current, {
      type: 'x',
      bounds: {
        minX: minX / 2,
        maxX: maxX / 2,
      },
    });

    if (isTablet) {
      draggable[0].enable();
    } else {
      gsap.to(colors.current, {
        x: 0,
        duration: 0.5,
        ease: 'power4.out',
      });
      draggable[0].kill();
    }

    return () => {
      draggable[0].kill();
    };
  }, [isTablet]);

  return (
    <div
      className={[
        'flex h-[100px] flex-col items-center justify-center',
        activeSection === 7 ? 'flex' : 'hidden',
      ].join(' ')}
    >
      <div className="flex gap-2">
        <button
          className={[
            'materialBtn flex items-center gap-1 rounded-full border border-gray-200 bg-white p-2 pl-12 pr-12',
            swooshMaterial === MATERIAL_TYPES.leather ? 'active' : '',
          ].join(' ')}
          onClick={() => setSwooshMaterial(MATERIAL_TYPES.leather)}
        >
          Leather
        </button>
        <button
          className={[
            'materialBtn flex items-center gap-1 rounded-full border border-gray-200 bg-white p-2 pl-12 pr-12',
            swooshMaterial === MATERIAL_TYPES.canvas ? 'active' : '',
          ].join(' ')}
          onClick={() => setSwooshMaterial(MATERIAL_TYPES.canvas)}
        >
          Canvas
        </button>
      </div>
      <div>
        <div ref={colors} className="mt-4 flex gap-5 ">
          {COLORS.map((color, idx) => {
            return (
              <div
                key={idx}
                className="relative flex flex-col items-center justify-center"
              >
                <button
                  key={idx}
                  className={[
                    `colorBtn h-[40px] w-[40px] rounded-full`,
                    swooshColor.key === color.key ? 'active' : '',
                  ].join(' ')}
                  style={{
                    '--colorSwatch': color.hex,
                  }}
                  onClick={() => setSwooshColor(color)}
                ></button>
                <span
                  className={[
                    'absolute bottom-[-20px] text-nowrap text-xs',
                    swooshColor.key === color.key ? 'block' : 'hidden',
                  ].join(' ')}
                >
                  {color.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuSwoosh;
