import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';

import { State, Style } from '../../types/colors.interface';

interface Props {
	children?: React.ReactNode;
	state?: State;
	style?: Style;
	size?: 'sm' | 'md' | 'lg';
	onClick?: () => void;
	disabled?: boolean;
}

export default function Button({
	children,
	state = 'primary',
	style = 'default',
	size = 'md',
	onClick,
	disabled = false,
}: Props): ReactElement {
	const fontSize =
		size === 'lg' ? '2xl' : size === 'md' ? 'lg' : size === 'sm' ? 'md' : '';

	const tailwindClass = `border-none rounded-2xl cursor-${
		disabled ? 'not-allowed' : 'pointer'
	}  font-bold text-${
		state === 'secondary' || state === 'accent' ? 'background' : 'text'
	} bg-${disabled ? 'gray-300' : state} text-${fontSize} p-3`;

	return disabled ? (
		<button data-testid="button" disabled={disabled} className={tailwindClass}>
			{children}
		</button>
	) : (
		<motion.button
			data-testid="button"
			disabled={disabled}
			onClick={onClick}
			className={tailwindClass}
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.9 }}
		>
			{children}
		</motion.button>
	);
}
