import { NextFontWithVariable } from 'next/dist/compiled/@next/font';

import { bungeeHairline } from './bungee-hairline';
import { modernAntiqua } from './modern-antiqua';
import { montserrat } from './montserrat';
import { museoModerno } from './museo-moderno';
import { newTegomin } from './new-tegomin';
import { poiretOne } from './poiret-one';
import { pressStart2p } from './press-start-2p';
import { roboto } from './roboto';
import { sacramento } from './sacramento';
import { twinkleStar } from './twinkle-start';
import { yujiMai } from './yuji-mai';
import { inter } from './inter';

export const fonts: Record<string, NextFontWithVariable> = {
  inter,
  yujiMai,
  twinkleStar,
  sacramento,
  roboto,
  pressStart2p,
  poiretOne,
  newTegomin,
  museoModerno,
  montserrat,
  modernAntiqua,
  bungeeHairline
};


export const allFontVariables: string = Object.values(fonts)
  .map((font) => font.variable)
  .join(' ');
