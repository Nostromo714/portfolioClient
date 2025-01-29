module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan all files in the 'src' folder with these extensions
    ],
  theme: {
    // background image for section 3 ( My Work) <p> tag
    extend: {
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to bottom right,rgba(115, 143, 210, 0.54),rgb(181, 159, 142),rgb(162, 174, 196))',
    }, 
  },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),
  ],
}