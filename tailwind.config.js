/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
        cursive: ["var(--font-cursive)"],
        description: ["var(--font-description)"],
        descriptionBold: ["var(--font-description-bold)"],
      },
      colors: {
        newwarm: {
          DEFAULT: '#F3C558',
          50: '#F3C558',
          100: '#FCA834',
          150: '#F56322',
        },
        newcool: {
          DEFAULT: '#5F826D',
          50: '#5F826D',
          100: '#3D665F',
          150: '#235053',
          200: '#022E3C'
        },
        newblack: {
          DEFAULT: '#000D21',
          50: '#000D21',
        },
        newwhite: {
          DEFAULT: '#F2F6EB',
          50: '#F2F6EB',
        },
        newbrown: {
          DEFAULT: '#854C28',
          50: '#854C28',
        },
        retrowarm: {
          DEFAULT: '#f49f7e',
          50: '#f49f7e',
          100: '#ec7265',
          150: '#ef2f3a',
        },
        retrocool: {
          DEFAULT: '#197381',
          50: '#197381',
        },
        retrolight: {
          DEFAULT: '#fbd290',
          50: '#fbd290',
        },
        retroradwarm: {
          DEFAULT: '#f6dcad',
          50: '#f6dcad',
          100: '#f0b024',
          150: '#e5732d',
          200: '#de3931',
        },
        retroradcool: {
          DEFAULT: '#4eb8b6',
          50: '#4eb8b6',
          100: '#2aa0a4',
          150: '#156a7f',
        },
        retroblack: {
          DEFAULT: '#290a09',
          50: '#290a09',
        },
        buttonblue: {
          DEFAULT: '#146a7f',
          50: '#146a7f',
          100: '#57A7BA',
          150: '#024150'
        }
      },
      keyframes: {
        heartbeat: {
          "0%": {
            transform: "scale(1)",
            "transform-origin": "center center",
            "animation-timing-function": "ease-out"
          },
          "10%": {
            transform: "scale(.91)",
            "animation-timing-function": "ease-in"
          },
          "17%": {
            transform: "scale(.98)",
            "animation-timing-function": "ease-out"
          },
          "33%": {
            transform: "scale(.87)",
            "animation-timing-function": "ease-in"
          },
          "45%": {
            transform: "scale(1)",
            "animation-timing-function": "ease-out"
          }
        },
      },
      screens: {
        mobiletiny: '320px',
        mobilesm: '350px',
        mobilemd: '400px',
      },
    },
  },
  plugins: [],
}
