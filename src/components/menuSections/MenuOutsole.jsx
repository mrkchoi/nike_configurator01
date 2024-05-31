import React, { useEffect, useRef } from 'react';
import { COLORS, useCustomization } from '../../context/Customization';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(Draggable);

function MenuOutsole({ activeSection }) {
  const { outsoleColor, setOutsoleColor } = useCustomization();

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
        activeSection === 10 ? 'flex' : 'hidden',
      ].join(' ')}
    >
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
                    outsoleColor.key === color.key ? 'active' : '',
                  ].join(' ')}
                  style={{
                    '--colorSwatch': color.hex,
                  }}
                  onClick={() => setOutsoleColor(color)}
                ></button>
                <span
                  className={[
                    'absolute bottom-[-20px] text-nowrap text-xs',
                    outsoleColor.key === color.key ? 'block' : 'hidden',
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

export default MenuOutsole;
