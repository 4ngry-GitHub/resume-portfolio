/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
	darkMode: 'class',
	plugins: [require('preline/plugin')],
	theme: {
		extend: {
			colors: {
				'ua-yellow': '#FFD800',
				'ua-blue': '#0056B9',
				'brand-steel': '#6e6e6f',
				'brand-blue': '#293358',
				'brand-gray': '#1b1b1b',
			},
		},
		fontFamily: {
			sans: ['Inter', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
		},
	},
};
