/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dc: {
          black: '#06060F',
          dark: '#0D0D1A',
          surface: '#111122',
          card: '#161628',
          blue: '#0055FF',
          blueHover: '#0044DD',
          cyan: '#00C8FF',
          text: '#E8EEFF',
          muted: '#6B7299',
          border: '#1E2040',
          orange: '#FFA500',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(0,85,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '60px 60px',
      },
      screens: {
        sm: '768px',   // Tablet
        md: '1024px',  // Desktop
        lg: '1440px',  // Wide Screen
      },
    },
  },
  plugins: [],
};
