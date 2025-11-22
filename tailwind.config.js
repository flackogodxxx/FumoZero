/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EDFFFA',
          100: '#C6FFF1',
          200: '#8CF9E1',
          300: '#4FEFD1',
          400: '#1BD9BF',
          500: '#00C0A8',
          600: '#00A190',
          700: '#008070',
          800: '#006054',
          900: '#003C33',
        },
        accent: {
          50: '#F9F0FF',
          100: '#F1DAFF',
          200: '#E5B3FF',
          300: '#D68BFF',
          400: '#C25EFF',
          500: '#AA2DFF',
          600: '#8F14E8',
          700: '#7209C0',
          800: '#580594',
          900: '#3A0361',
        },
        highlight: {
          50: '#FFF9EC',
          100: '#FFECC2',
          200: '#FFD48A',
          300: '#FFB953',
          400: '#FF9F26',
          500: '#FF7F0A',
          600: '#DB5F05',
          700: '#B74204',
          800: '#8F2D03',
          900: '#551801',
        },
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(22, 163, 74, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(22, 163, 74, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}


