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
        sans: ['var(--font-inter)'],
        montserrat: ['var(--font-montserrat)'],
        mono: ['var(--font-roboto-mono)'],
        museomoderno: ["var(--font-museomoderno)"],
        new_tegomin: ["var(--font-new-tegomin)"],
        bungee_hairline: ["var(--font-bungee-hairline)"],
        twinkle_star: ["var(--font-twinkle-star)"],
        modern_antiqua: ["var(--font-modern-antiqua)"],
        roboto: ["var(--font-roboto)"],
        sacramento: ["var(--font-sacramento)"],
        press_start_2p: ["var(--font-press-start_2p)"],
        poiret_one: ["var(--font-poiret-one)"],
        yuji_mai: ["var(--font-yuji-mai)"]
      }
    },
  },
  plugins: [],
}
