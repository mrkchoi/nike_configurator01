import React, { useState } from 'react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CaretDownIcon,
  CaretUpIcon,
  MenuIcon,
} from './Icons';
import { SECTIONS, useCustomization } from '../context/Customization';
import { useMediaQuery } from 'react-responsive';

function MenuHeader({
  menuOpen,
  setMenuOpen,
  activeSection,
  handlePrevSection,
  handleNextSection,
}) {
  const { setModalMenuOpen } = useCustomization();
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="flex w-full items-center justify-between">
      <div className="w-[75px] sm:w-[150px]">
        <button
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-gray-200 bg-white"
          onClick={() => setMenuOpen((s) => !s)}
        >
          {menuOpen ? <CaretDownIcon /> : <CaretUpIcon />}
        </button>
      </div>
      <div className="flex w-[420px] items-center justify-between">
        <button
          className="flex items-center rounded-full border bg-white p-2"
          onClick={handlePrevSection}
        >
          <ArrowLeftIcon />
        </button>
        <div className="flex items-center justify-center gap-2 text-sm sm:text-[18px]">
          <span>{SECTIONS[activeSection].name}</span>
          <span className="text-gray-500">
            {SECTIONS[activeSection].id}/{SECTIONS.length}
          </span>
        </div>
        <button
          className="flex items-center rounded-full border bg-white p-2"
          onClick={handleNextSection}
        >
          <ArrowRightIcon />
        </button>
      </div>
      <div className="flex w-[75px] justify-end sm:w-[150px]">
        <button
          className={[
            'flex items-center gap-1 rounded-full border border-gray-200 bg-white',
            isTablet ? 'p-3' : 'p-2 pl-4 pr-4',
          ].join(' ')}
          onClick={() => setModalMenuOpen(true)}
        >
          <MenuIcon />
          {!isTablet ? <span>Menu</span> : null}
        </button>
      </div>
    </div>
  );
}

export default MenuHeader;
