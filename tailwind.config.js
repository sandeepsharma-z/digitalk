/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite',
        'float-med':    'float 7s ease-in-out infinite',
        'blob1':        'blob1 12s ease-in-out infinite',
        'blob2':        'blob2 15s ease-in-out infinite',
        'blob3':        'blob3 10s ease-in-out infinite',
        'pulse-glow':   'pulseGlow 3s ease-in-out infinite',
        'grad-shift':   'gradShift 5s ease infinite',
        'scroll-wheel': 'scrollWheel 1.5s ease-in-out infinite',
        'badge-pulse':  'badgePulse 1.5s ease infinite',
      },
      keyframes: {
        float:       { '0%,100%': { transform: 'translateY(0)' },       '50%': { transform: 'translateY(-12px)' } },
        blob1:       { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '33%': { transform: 'translate(40px,-30px) scale(1.1)' },  '66%': { transform: 'translate(-20px,20px) scale(0.95)' } },
        blob2:       { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '33%': { transform: 'translate(-30px,40px) scale(1.05)' }, '66%': { transform: 'translate(30px,-10px) scale(0.9)' } },
        blob3:       { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '33%': { transform: 'translate(20px,30px) scale(1.08)' },  '66%': { transform: 'translate(-40px,-20px) scale(0.97)' } },
        pulseGlow:   { '0%,100%': { boxShadow: '0 0 20px rgba(59,130,246,0.35)' }, '50%': { boxShadow: '0 0 50px rgba(59,130,246,0.6)' } },
        gradShift:   { '0%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' }, '100%': { backgroundPosition: '0% 50%' } },
        scrollWheel: { '0%': { opacity: '1', transform: 'translateY(0)' }, '100%': { opacity: '0', transform: 'translateY(8px)' } },
        badgePulse:  { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.5' } },
      },
    },
  },
  plugins: [],
}

