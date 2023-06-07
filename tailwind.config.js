/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        montserrat: ['var(--font-montserrat)'],
        museoModerno: ["var(--font-museo-moderno)"],
        newTegomin: ["var(--font-new-tegomin)"],
        bungeeHairline: ["var(--font-bungee-hairline)"],
        twinkleStar: ["var(--font-twinkle-star)"],
        modernAntiqua: ["var(--font-modern-antiqua)"],
        roboto: ["var(--font-roboto)"],
        sacramento: ["var(--font-sacramento)"],
        pressStart2p: ["var(--font-press-start_2p)"],
        poiretOne: ["var(--font-poiret-one)"],
        yujiMai: ["var(--font-yuji-mai)"]
      }
    },
  },
}
