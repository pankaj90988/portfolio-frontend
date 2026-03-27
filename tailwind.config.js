/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#1a2f43',
        'background-secondary': '#20b2a6',
        // 'background-secondary':'#20b34f',
        'body-color': '#1f242d',
        'footer-color': '#1f2a2d'
      },
      boxShadow: {
        'portrait': '0 15px 15px -2px #20b2a6',
        // 'portrait':'0 15px 15px -2px #20b34f',
        'card': '0 5px 15px -2px #20b2a6',
      },
      animation: {
        'pulse-border': 'pulse-border 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-border': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.5)', opacity: '0.1' },
        },
      },

    },
  },
  plugins: [],
}

