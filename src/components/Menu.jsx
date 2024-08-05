import React, { useState } from 'react';
import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';
import { SECTIONS, useCustomization } from '../context/Customization';

function Menu() {
  const { activeSection, setActiveSection, menuOpen, setMenuOpen } =
    useCustomization();

  const handlePrevSection = () => {
    setActiveSection((s) => (s - 1 + SECTIONS.length) % SECTIONS.length);
  };

  const handleNextSection = () => {
    setActiveSection((s) => (s + 1) % SECTIONS.length);
  };

  return (
    <div className="menu absolute bottom-0 left-0 w-full select-none overflow-hidden bg-white p-4 pb-8 sm:p-8 sm:pb-8 sm:pl-12 sm:pr-12">
      <MenuHeader
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        handlePrevSection={handlePrevSection}
        handleNextSection={handleNextSection}
      />
      {menuOpen && (
        <MenuBody menuOpen={menuOpen} activeSection={activeSection} />
      )}
    </div>
  );
}

export default Menu;
