import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      fill: {
        primary: '#0085BF',
        gradient: {
          start: '#c4f7e8',
          end: '#a5ccf9',
        },
      },
      stroke: '#000',
      white: '#fff',
    },
    screens: {
      sm: '329px',
    },
  },
  plugins: [],
};
export default config;
