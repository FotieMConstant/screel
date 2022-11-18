/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			primary: "#1F6FEB",
			secondary: "#388BFD",
			textPrimary: "#FFFFFF",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
