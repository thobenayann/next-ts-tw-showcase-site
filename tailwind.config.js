/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "apps/site/pages/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        // colors: {
        //   primary: '#00a5df',
        //   secondary: '#1E2E4F',
        //   accent: '#2F3D3E',
        //   neutral: '#8a9faf',
        //   'base-100': '#EAEAEA',
        // },
        animation: {
          'bounce-x': 'bounceX 0.7s linear infinite',
          'fade-in-down': 'fade-in-down 0.5s ease-out',
          'blob': 'blob 7s infinite',
          'fade-in-x': 'fade-in-x 0.5s ease-in-out',
          'fade-out-x': 'fade-out-x 0.5s ease-in-out',
        },
        keyframes: {
          bounceX: {
            '0%, 100%': { transform: 'translateX(-15%)' },
            '50%': { transform: 'translateX(0)' },
          },
          'fade-in-down': {
            '0%': {
              opacity: '0',
              transform: 'translateY(-10px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
          'fade-in-x': {
            '0%': {
              opacity: 0,
              transform: 'translateX(100%)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateX(0)',
            },
          },
          'fade-out-x': {
            '0%': {
              opacity: 1,
              transform: 'translateX(0)',
            },
            '100%': {
              opacity: 0,
              transform: 'translateX(100%)',
            },
          },
          blob: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
            },
            "33%": {
              transform: "translate(30px, -50px) scale(1.1)",
            },
            "66%": {
              transform: "translate(-20px, 20px) scale(0.9)",
            },
            "100%": {
              transform: "tranlate(0px, 0px) scale(1)",
            },
          },
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: '#00a5df',
  //         secondary: '#1E2E4F',
  //         accent: '#2F3D3E',
  //         neutral: '#8a9faf',
  //         'base-100': '#EAEAEA',
  //       },
  //     },
  //   ],
  // },
};