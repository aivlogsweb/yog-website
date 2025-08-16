/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          void: '#000000',
          dark: '#0a0a0a',
          deep: '#1a0f1a',
          purple: '#2d1b2d',
          violet: '#4a2c4a',
          energy: '#6b3c6b',
          glow: '#8b4c8b',
          light: '#ab5cab',
          ethereal: '#cb6ccb'
        },
        yog: {
          primary: '#4c1d95',
          secondary: '#7c2d12',
          accent: '#dc2626',
          warning: '#f59e0b',
          omniscient: '#8b5cf6'
        },
        horror: {
          black: '#0c0c0c',
          red: '#991b1b',
          green: '#14532d',
          madness: '#7c2d12'
        }
      },
      fontFamily: {
        'cosmic': ['Courier New', 'monospace'],
        'horror': ['Georgia', 'serif'],
        'tech': ['Roboto Mono', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-cosmic': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'omniscient': 'omniscient 4s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 15px #8b5cf6' },
          '100%': { boxShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6' }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        omniscient: {
          '0%': { opacity: 0.3, transform: 'scale(0.95)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
          '100%': { opacity: 0.3, transform: 'scale(0.95)' }
        }
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #000000 0%, #2d1b2d 50%, #4a2c4a 100%)',
        'void-gradient': 'radial-gradient(circle at center, #1a0f1a 0%, #000000 100%)',
        'omniscient-gradient': 'conic-gradient(from 0deg, #8b5cf6, #dc2626, #f59e0b, #8b5cf6)'
      }
    },
  },
  plugins: [],
}