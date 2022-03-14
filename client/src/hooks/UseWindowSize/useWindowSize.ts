import { useState, useEffect } from 'react';
import IWindow from './useWindowSize.types';

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<IWindow>({
		width: 0,
		height: 0,
	});

	const setSizes = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		setSizes();
		window.addEventListener('resize', setSizes);
		return () => window.removeEventListener('resize', setSizes);
	}, []);

	return { windowSize } as const;
};

export default useWindowSize;
