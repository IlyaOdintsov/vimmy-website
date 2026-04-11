import { useEffect, useState } from 'react';

export const BREAKPOINTS = {
	xs: 480,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

interface UseIsMobileOptions {
	breakpoint?: Breakpoint;
	customWidth?: number;
}

export const useIsMobile = ({ breakpoint = 'md', customWidth }: UseIsMobileOptions = {}) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	const maxWidth = customWidth ?? BREAKPOINTS[breakpoint];

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const mql = window.matchMedia(`(max-width: ${maxWidth - 1}px)`);

		const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
			setIsMobile(e.matches);
		};

		handleChange(mql);

		mql.addEventListener('change', handleChange);

		return () => {
			mql.removeEventListener('change', handleChange);
		};
	}, [maxWidth]);

	return isMobile;
};

export const useIsXs = () => useIsMobile({ breakpoint: 'xs' });
export const useIsSm = () => useIsMobile({ breakpoint: 'sm' });
export const useIsMd = () => useIsMobile({ breakpoint: 'md' });
export const useIsLg = () => useIsMobile({ breakpoint: 'lg' });
export const useIsXl = () => useIsMobile({ breakpoint: 'xl' });
