/** @type {import('tailwindcss').Config} */
(
  module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        animation: {
          flip: 'flip 4s ease-in-out infinite',
          reveal: 'reveal 1s ease-in',
          'reveal-slow': 'reveal 2.5s ease-in-out',
          updown: 'updown 5s linear infinite',
          vanish: 'vanish 1s ease-in'
        },

        colors: {
          lightBG: '#D2CDBE',
          darkBG: '#17181c',
          frameBG: '#FEBE10',
          dullWhite: '#FFFAFA',
          lightText: 'white',
          darkText: '#05081c',
          successGreen: '#D8E123',
          activeGreen: '#2dbf64',
          cutePink: '#ef6eae',
          fleshOrange: 'black',
          failureRed: '#ff7f82',
          brightViolet: '#FFD700',
          darkViolet: ' #8D6C55'
        },

        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif']
        },

        gridTemplateColumns: {
          quizzes: 'repeat(auto-fit, minmax(380px, 1fr))',
          options: 'repeat(auto-fit, minmax(300px, 1fr))'
        },

        keyframes: {
          flip: {
            '50%': { transform: 'rotateY(180deg)' },
            '100%': { transform: 'rotateY(360deg)' }
          },

          reveal: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' }
          },

          updown: {
            '50%': { transform: 'translateY(-50px)' }
          },

          vanish: {
            '45%': { opacity: '0.5', width: '300px' },
            '75%': { opacity: '0.5', width: '400px' },
            '100%': { opacity: '0.1', width: '512px' }
          }
        }
      }
    },
    plugins: [require('@tailwindcss/line-clamp')]
  }
);
