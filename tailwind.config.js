/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'game-bg': '#1f2937', // dark background (previously bg-gray-800)
        'game-text': '#ffffff', // white text
        'game-primary': '#3b82f6', // blue for buttons (previously bg-blue-500)
        'game-primary-hover': '#2563eb', // darker blue for hover (previously bg-blue-600)
        'game-secondary': '#10b981', // green for "Play Again" button (previously bg-green-500)
        'game-secondary-hover': '#059669', // darker green for hover (previously bg-green-600)
        'game-link': '#60a5fa', // blue for links (previously text-blue-400)
      },},
  },
  plugins: [],
}

