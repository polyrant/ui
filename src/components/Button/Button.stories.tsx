import React from 'react';

import Button from './Button';

export default {
	title: 'Button',
};

export const Primary = () => (
	<div className="space-x-3">
		<Button size="lg">Hello there!</Button>
		<Button>Hello there!</Button>
		<Button size="sm">Hello there!</Button>
	</div>
);

export const Secondary = () => (
	<div className="space-x-3">
		<Button state="secondary" size="lg">
			Hello there!
		</Button>
		<Button state="secondary">Hello there!</Button>
		<Button state="secondary" size="sm">
			Hello there!
		</Button>
	</div>
);

export const Accent = () => (
	<div className="space-x-3">
		<Button state="accent" size="lg">
			Hello there!
		</Button>
		<Button state="accent">Hello there!</Button>
		<Button state="accent" size="sm">
			Hello there!
		</Button>
	</div>
);

export const Disabled = () => (
	<div className="space-x-3">
		<Button disabled size="lg">
			Hello there!
		</Button>
		<Button disabled>Hello there!</Button>
		<Button disabled size="sm">
			Hello there!
		</Button>
	</div>
);

export const Square = () => (
	<div className="space-x-3">
		<Button style="square" size="lg">
			UI
		</Button>
		<Button style="square">UI</Button>
		<Button style="square" size="sm">
			UI
		</Button>
	</div>
);
