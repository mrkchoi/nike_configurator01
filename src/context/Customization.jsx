import { createContext, useContext, useState } from 'react';

export const SECTION_TYPES = {
  standard: 'standard',
  tongueLabel: 'tongueLabel',
  colorOnly: 'colorOnly',
};
export const SECTIONS = [
  { name: 'Vamp', id: 1, type: SECTION_TYPES.standard },
  { name: 'Tip', id: 2, type: SECTION_TYPES.standard },
  { name: 'Quarter', id: 3, type: SECTION_TYPES.standard },
  { name: 'Tongue', id: 4, type: SECTION_TYPES.standard },
  { name: 'Tongue Label', id: 5, type: SECTION_TYPES.tongueLabel },
  { name: 'Eyestay', id: 6, type: SECTION_TYPES.standard },
  { name: 'Foxing / Lining', id: 7, type: SECTION_TYPES.standard },
  { name: 'Swoosh / Backtab', id: 8, type: SECTION_TYPES.standard },
  { name: 'Lace / Dubrae', id: 9, type: SECTION_TYPES.colorOnly },
  { name: 'Midsole', id: 10, type: SECTION_TYPES.colorOnly },
  { name: 'Outsole', id: 11, type: SECTION_TYPES.colorOnly },
  { name: 'Backtab Logo', id: 12, type: SECTION_TYPES.colorOnly },
];

export const SECTION_AREAS = {
  vamp: 'vamp',
  tip: 'tip',
  quarter: 'quarter',
  tongue: 'tongue',
  tongueLabel: 'tongueLabel',
  eyestay: 'eyestay',
  foxingLining: 'foxingLining',
  swooshBacktab: 'swooshBacktab',
  laceDubrae: 'laceDubrae',
  midsole: 'midsole',
  outsole: 'outsole',
  backtabLogo: 'backtabLogo',
};

export const SECTION_MAPPING = {
  [SECTION_AREAS.vamp]: 0,
  [SECTION_AREAS.tip]: 1,
  [SECTION_AREAS.quarter]: 2,
  [SECTION_AREAS.tongue]: 3,
  [SECTION_AREAS.tongueLabel]: 4,
  [SECTION_AREAS.eyestay]: 5,
  [SECTION_AREAS.foxingLining]: 6,
  [SECTION_AREAS.swooshBacktab]: 7,
  [SECTION_AREAS.laceDubrae]: 8,
  [SECTION_AREAS.midsole]: 9,
  [SECTION_AREAS.outsole]: 10,
  [SECTION_AREAS.backtabLogo]: 11,
};

export const CAMERA_SETTINGS = {
  1: {
    rotation: {
      x: -0.2459901103530929, // DEFAULT VIEW
      y: 0,
      z: 0,
    },
    position: { x: 0, y: 1.5130973991170902, z: 6.0264773144103385 },
  },
  2: {
    rotation: {
      x: -0.040353166005865845,
      y: 0.6000738274892724,
      z: 0.0227959976814206,
    },
    position: {
      x: 3.508798703680357,
      y: 0.20687425101629303,
      z: 5.123809838551259,
    },
  },
  3: {
    position: {
      x: 6.17568222242182,
      y: -0.6051161011818903,
      z: 0.18333665981444383,
    },
    rotation: {
      x: 0.03501159753596092,
      y: 0.6957067940327722,
      z: -0.03398763751876633,
    },
  },
  4: {
    rotation: {
      x: -0.2459901103530929, // DEFAULT VIEW
      y: 0,
      z: 0,
    },
    position: { x: 0, y: 1.5130973991170902, z: 6.0264773144103385 },
  },
  5: {
    position: {
      x: 3.7893457995289594,
      y: 1.4029898889217205,
      z: 4.720208718212864,
    },
    rotation: {
      x: -0.2889140149342268,
      y: 0.655876910790554,
      z: 0.17932022019390412,
    },
  },
  6: {
    position: {
      x: 2.6362647773808283,
      y: 0.17000889487761903,
      z: 5.623975245279871,
    },
    rotation: {
      x: -0.030220107751994726,
      y: 0.43816491812935976,
      z: 0.012824942047822642,
    },
  },
  7: {
    position: {
      x: 5.7599879729795385,
      y: 1.6791664974087477,
      z: -1.6158066052063025,
    },
    rotation: {
      x: -2.336967600457443,
      y: 1.1863549905333977,
      z: 2.374855015002578,
    },
  },
  8: {
    position: {
      x: 5.792251303268467,
      y: 0.3284603091161062,
      z: -2.224821616543086,
    },
    rotation: {
      x: -2.9950170041985427,
      y: 1.2004458077301425,
      z: 3.0048269003882817,
    },
  },
  9: {
    position: {
      x: -0.03958142376785532,
      y: 3.88235168376096,
      z: 4.851151541109413,
    },
    rotation: {
      x: -0.6749207141156803,
      y: -0.006370247429452922,
      z: -0.005097997682315048,
    },
  },
  10: {
    position: {
      x: 6.175350304934819,
      y: -0.5955744120630273,
      z: -0.3438492276480893,
    },
    rotation: {
      x: 2.0943877739593453,
      y: 1.459890031749372,
      z: -2.097060404502339,
    },
  },
  11: {
    position: {
      x: -0.008888497266689832,
      y: -4.393625641785899,
      z: -4.393616650866903,
    },
    rotation: {
      x: 2.356193467013662,
      y: -0.0014305085020571884,
      z: 3.14016214362407,
    },
  },
  12: {
    position: {
      x: 2.1840929596406315,
      y: 2.2818843649152507,
      z: -5.350759820747385,
    },
    rotation: {
      x: -2.7384861289034417,
      y: 0.3591795754829972,
      z: 2.992797254834194,
    },
    // 12: {
    //   position: {
    //     x: 0.049566143562919066,
    //     y: 1.8052617958339687,
    //     z: -5.9452893626998495,
    //   },
    //   rotation: {
    //     x: -2.8467945075245593,
    //     y: 0.007977222188765707,
    //     z: 3.1391704344722067,
    //   },
  },
};

export const COLORS = [
  {
    key: 'black',
    name: 'Black',
    hex: '#333333',
  }, // 0
  {
    key: 'white',
    name: 'White',
    hex: '#ffffff',
  }, // 1
  {
    key: 'cobblestone',
    name: 'Cobblestone',
    hex: '#979c98',
  }, // 2
  {
    key: 'sportRed',
    name: 'Sport Red',
    hex: '#9f072d',
  }, // 3
  {
    key: 'sail',
    name: 'Sail',
    hex: '#f7f1e5',
  }, // 4
  {
    key: 'oldRoyal',
    name: 'Old Royal',
    hex: '#161468',
  }, // 5
  {
    key: 'royalTint',
    name: 'Royal Tint',
    hex: '#a1bbe0',
  }, // 6
  {
    key: 'pinkFoam',
    name: 'Pink Foam',
    hex: '#e8cdd2',
  }, // 7
  {
    key: 'kumquat',
    name: 'Kumquat',
    hex: '#e48f3e',
  }, // 8
  {
    key: 'tourYellow',
    name: 'Tour Yellow',
    hex: '#ffd63c',
  }, // 9
  {
    key: 'ltBone',
    name: 'Lt Bone',
    hex: '#edebde',
  }, // 10
  {
    key: 'malachite',
    name: 'Malachite',
    hex: '#306e55',
  }, // 11
];

export const LABEL_COLORS = [
  {
    key: 'whiteCobblestone',
    name: 'White / Cobblestone',
    hex1: '#ffffff',
    hex2: '#979c98',
  },
  {
    key: 'whiteBlack',
    name: 'White / Black',
    hex1: '#ffffff',
    hex2: '#333333',
  },
  {
    key: 'blackWhite',
    name: 'Black / White',
    hex1: '#333333',
    hex2: '#ffffff',
  },
  {
    key: 'cobblestoneWhite',
    name: 'Cobblestone / White',
    hex1: '#979c98',
    hex2: '#ffffff',
  },
];

const CustomizationContext = createContext({});

export const MATERIAL_TYPES = {
  leather: 'leather',
  canvas: 'canvas',
};

export const DEFAULT_COLOR = COLORS[4];
export const DEFAULT_LABEL_COLOR = LABEL_COLORS[1];

export function CustomizationProvider(props) {
  const [activeSection, setActiveSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(true);
  const [modalMenuOpen, setModalMenuOpen] = useState(false);
  const [vampColor, setVampColor] = useState(DEFAULT_COLOR);
  const [vampMaterial, setVampMaterial] = useState(MATERIAL_TYPES.leather);
  const [tipColor, setTipColor] = useState(DEFAULT_COLOR);
  const [tipMaterial, setTipMaterial] = useState(MATERIAL_TYPES.leather);
  const [quarterColor, setQuarterColor] = useState(DEFAULT_COLOR);
  const [quarterMaterial, setQuarterMaterial] = useState(
    MATERIAL_TYPES.leather
  );
  const [tongueColor, setTongueColor] = useState(DEFAULT_COLOR);
  const [tongueMaterial, setTongueMaterial] = useState(MATERIAL_TYPES.leather);
  const [tongueLabelColor, setTongueLabelColor] = useState(DEFAULT_LABEL_COLOR);
  const [eyestayColor, setEyestayColor] = useState(DEFAULT_COLOR);
  const [eyestayMaterial, setEyestayMaterial] = useState(
    MATERIAL_TYPES.leather
  );
  const [foxingColor, setFoxingColor] = useState(DEFAULT_COLOR);
  const [foxingMaterial, setFoxingMaterial] = useState(MATERIAL_TYPES.leather);
  const [swooshColor, setSwooshColor] = useState(DEFAULT_COLOR);
  const [swooshMaterial, setSwooshMaterial] = useState(MATERIAL_TYPES.leather);
  const [laceColor, setLaceColor] = useState(DEFAULT_COLOR);
  const [backtabColor, setBacktabColor] = useState(DEFAULT_COLOR);
  const [midsoleColor, setMidsoleColor] = useState(DEFAULT_COLOR);
  const [outsoleColor, setOutsoleColor] = useState(DEFAULT_COLOR);

  return (
    <CustomizationContext.Provider
      value={{
        vampColor,
        setVampColor,
        vampMaterial,
        setVampMaterial,
        tipColor,
        setTipColor,
        tipMaterial,
        setTipMaterial,
        quarterColor,
        setQuarterColor,
        quarterMaterial,
        setQuarterMaterial,
        tongueColor,
        setTongueColor,
        tongueMaterial,
        setTongueMaterial,
        tongueLabelColor,
        setTongueLabelColor,
        eyestayColor,
        setEyestayColor,
        eyestayMaterial,
        setEyestayMaterial,
        foxingColor,
        setFoxingColor,
        foxingMaterial,
        setFoxingMaterial,
        swooshColor,
        setSwooshColor,
        swooshMaterial,
        setSwooshMaterial,
        laceColor,
        setLaceColor,
        backtabColor,
        setBacktabColor,
        midsoleColor,
        setMidsoleColor,
        outsoleColor,
        setOutsoleColor,
        activeSection,
        setActiveSection,
        menuOpen,
        setMenuOpen,
        modalMenuOpen,
        setModalMenuOpen,
        colors: COLORS,
        labelColors: LABEL_COLORS,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
}

export function useCustomization() {
  return useContext(CustomizationContext);
}
