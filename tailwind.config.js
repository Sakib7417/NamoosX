/** @type {import('tailwindcss').Config} */
const config = {
  // This enables Tailwind's dark mode feature. We control it by adding/removing
  // the 'dark' class on the <html> element, which we did in the Header component.
  darkMode: 'class',
  
  // The 'content' array is the most important part for fixing your issue.
  // It tells Tailwind which files to scan for CSS class names.
  // We need to make sure it's looking inside your 'app' and 'components' directories.
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Keep this for safety, but the next lines are key
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // This line is crucial for the App Router
  ],
  
  theme: {
    extend: {
      // You can extend Tailwind's default theme here if needed.
      // For example, adding custom colors, fonts, or animations.
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  
  // You can add Tailwind plugins here if you install any.
  plugins: [],
};

export default config;
