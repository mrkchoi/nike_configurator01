import React from 'react';
import {
  COLORS,
  MATERIAL_TYPES,
  useCustomization,
  LABEL_COLORS,
} from '../../context/Customization';

function MenuTongueLabel({ activeSection }) {
  const { tongueLabelColor, setTongueLabelColor } = useCustomization();
  const colorVariants = {
    whiteCobblestone: "url('/assets/labels/af1_label_white_cobblestone.jpeg')",
    whiteBlack: "url('/assets/labels/AF1Label10a00a.jpeg')",
    blackWhite: "url('/assets/labels/AF1Label00a10a.jpeg')",
    cobblestoneWhite: "url('/assets/labels/af1_label_cobblestone_white.jpeg')",
  };

  return (
    <div
      className={[
        'flex h-[100px] flex-col items-center justify-center',
        activeSection === 4 ? 'flex' : 'hidden',
      ].join(' ')}
    >
      <div className="mt-4 flex gap-5 ">
        {LABEL_COLORS.map((color, idx) => {
          return (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-center"
            >
              <button
                key={idx}
                className={[
                  `colorBtn h-[40px] w-[40px] rounded-full`,
                  tongueLabelColor.key === color.key ? 'active' : '',
                ].join(' ')}
                style={{
                  '--colorImage': colorVariants[color.key],
                }}
                onClick={() => setTongueLabelColor(color)}
              ></button>
              <span
                className={[
                  'absolute bottom-[-20px] text-nowrap text-xs',
                  tongueLabelColor.key === color.key ? 'block' : 'hidden',
                ].join(' ')}
              >
                {color.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuTongueLabel;
