/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#FFF5F2',
          100: '#FFE7E0',
          200: '#FFCFC2',
          300: '#FFAB94',
          400: '#FF7E5B',
          500: '#FF6B35', // Primary orange/coral
          600: '#E8501B',
          700: '#C23B0F',
          800: '#9B3011',
          900: '#7E2C13',
        },
        navy: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A', // Dark charcoal/navy sidebar
          950: '#090D16',
        },
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(255, 107, 53, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
