/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-blue": "#acd3e8",
        "soft-green": "#d4e5a3",
        "soft-coral": "#e4888b",
        "soft-pink": "#e4b4ce",
        "soft-sky": "#bdd6ec",
        "cream": "#faf8f3",
        "warm-beige": "#f5f0e8",
        "light-peach": "#fde8e0",
        "background-light": "#fafafa",
        "background-dark": "#2d3748",
        primary: "#acd3e8",
        "brand-blue-light": "#A7D0F0",
        "brand-lavender": "#CDB4DB",
        "brand-green-soft": "#B7E4C7",
        "brand-gray-warm": "#F7F7F7",
        "brand-text-dark": "#2d3748",
        "brand-text-light": "#6b7280"
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #acd3e8 0%, #e4b4ce 100%)',
        'gradient-warm': 'linear-gradient(135deg, #fde8e0 0%, #d4e5a3 100%)',
        'gradient-cool': 'linear-gradient(135deg, #bdd6ec 0%, #acd3e8 100%)',
        'gradient-coral': 'linear-gradient(135deg, #e4888b 0%, #e4b4ce 100%)',
      },
      fontFamily: {
        display: ["Inter", "sans-serif"]
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(172, 211, 232, 0.15)',
        'soft-lg': '0 10px 40px rgba(172, 211, 232, 0.2)',
      },
      borderRadius: {
        'organic': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
    },
  },
  plugins: [],
};
