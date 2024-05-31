import React from 'react';
import MenuVamp from './menuSections/MenuVamp';
import MenuTip from './menuSections/MenuTip';
import MenuQuarter from './menuSections/MenuQuarter';
import MenuTongue from './menuSections/MenuTongue';
import MenuTongueLabel from './menuSections/MenuTongueLabel';
import MenuEyestay from './menuSections/MenuEyestay';
import MenuFoxing from './menuSections/MenuFoxing';
import MenuSwoosh from './menuSections/MenuSwoosh';
import MenuLace from './menuSections/MenuLace';
import MenuMidsole from './menuSections/MenuMidsole';
import MenuOutsole from './menuSections/MenuOutsole';
import MenuBacktabLogo from './menuSections/MenuBacktabLogo';

function MenuBody({ menuOpen, activeSection }) {
  return (
    <div className="mt-4 flex w-full flex-col items-center justify-center">
      <MenuVamp activeSection={activeSection} />
      <MenuTip activeSection={activeSection} />
      <MenuQuarter activeSection={activeSection} />
      <MenuTongue activeSection={activeSection} />
      <MenuTongueLabel activeSection={activeSection} />
      <MenuEyestay activeSection={activeSection} />
      <MenuFoxing activeSection={activeSection} />
      <MenuSwoosh activeSection={activeSection} />
      <MenuLace activeSection={activeSection} />
      <MenuMidsole activeSection={activeSection} />
      <MenuOutsole activeSection={activeSection} />
      <MenuBacktabLogo activeSection={activeSection} />
    </div>
  );
}

export default MenuBody;
