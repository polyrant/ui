const black = '#19100c';
const rust = '#a56434';
const yellow = '#ffd55e';
const brown = '#7f7059';
const offWhite = '#f3e0c3';

const darkTheme = {
	primary: brown,
	secondary: rust,
	accent: yellow,
	background: black,
	text: offWhite,
	textSecondary: brown,
};

const lightTheme = {
	primary: yellow,
	secondary: brown,
	accent: rust,
	background: offWhite,
	text: black,
	textSecondary: brown,
};

module.exports = {
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				...lightTheme,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
