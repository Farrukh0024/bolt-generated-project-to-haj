/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f3e6',
          100: '#c2e0c2',
          200: '#9acc9a',
          300: '#71b871',
          400: '#4da64d',
          500: '#2b932b', // Main green
          600: '#268326',
          700: '#1f721f',
          800: '#196219',
          900: '#105210'
        },
        secondary: {
          50: '#f0f4f8', // Light background
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98', // Gray text
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43'
        },
        islamic: {
          50: '#e6f2f0',
          100: '#c2e0d9',
          200: '#9accc1',
          300: '#71b8a8',
          400: '#4da693',
          500: '#2b937e', // Teal accent
          600: '#268376',
          700: '#1f726a',
          800: '#19615a',
          900: '#104c47'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2b932b 0%, #2b937e 100%)',
        'gradient-overlay': 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))'
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}
