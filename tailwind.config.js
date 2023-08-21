// tailwind.config.js
module.exports = {
	purge: [
	  './templates/**/*.html',
	  './app/**/*.py'  // If your Flask app code is in a subdirectory named 'app'
	],
	darkMode: false,
	theme: {
	  extend: {},
	},
	variants: {},
	plugins: [],
  }