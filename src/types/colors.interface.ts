export type Color = 'darkBlue' | 'blue' | 'darkBrown' | 'brown' | 'offWhite';
export type State =
	| 'primary'
	| 'secondary'
	| 'accent'
	| 'warning'
	| 'error'
	| 'success';
export type Style = 'icon' | 'iconLeft' | 'iconRight' | 'square' | 'default';

export interface Theme {
	primary: Color;
	secondary: Color;
	accent: Color;
	background: Color;
	text: Color;
	textSecondary: Color;
}

export const darkTheme: Theme = {
	primary: 'brown',
	secondary: 'darkBrown',
	accent: 'blue',
	background: 'darkBlue',
	text: 'offWhite',
	textSecondary: 'brown',
};

export const lightTheme: Theme = {
	primary: 'blue',
	secondary: 'brown',
	accent: 'darkBrown',
	background: 'offWhite',
	text: 'darkBlue',
	textSecondary: 'darkBrown',
};
