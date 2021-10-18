import React, { ReactElement } from 'react';

interface Props {
	children: React.ReactNode;
}

export default function Button({ children }: Props): ReactElement {
	return <button data-testid="button">{children}</button>;
}
