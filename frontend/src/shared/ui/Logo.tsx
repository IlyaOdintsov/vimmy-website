import { motion } from 'framer-motion';
import { cn } from '@/lib/utils.ts';

interface LogoProps {
	size?: 'sm' | 'md' | 'lg' | 'xl' | number;
	className?: string;
	withAnimation?: boolean;
	color?: string;
}

export const Logo = ({ size = 'md', className = '', withAnimation = false, color }: LogoProps) => {
	const sizeMap = {
		sm: 32,
		md: 48,
		lg: 64,
		xl: 96,
	};

	const logoSize = typeof size === 'number' ? size : sizeMap[size];

	const LogoComponent = withAnimation ? motion.svg : 'svg';

	return (
		<LogoComponent
			width={logoSize}
			height={logoSize}
			viewBox="0 0 458 458"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={color ? { color } : { color: 'var(--color-foreground)' }}
			{...(withAnimation && {
				initial: { opacity: 0, scale: 0.9 },
				animate: { opacity: 1, scale: 1 },
				transition: { duration: 0.3 },
			})}
		>
			<g transform="translate(0, 458) scale(0.1, -0.1)" fill="currentColor">
				<path d="M230 4032 c0 -4 6 -16 14 -27 7 -11 90 -153 183 -315 93 -162 230 -398 303 -525 73 -126 174 -302 225 -390 51 -88 217 -376 370 -640 152 -264 327 -567 388 -673 61 -106 115 -191 120 -189 10 3 15 11 422 717 147 256 369 639 492 852 122 213 223 390 223 393 0 3 -103 5 -228 5 -228 0 -229 0 -239 -22 -6 -13 -64 -115 -130 -228 -65 -113 -213 -368 -328 -567 -115 -200 -211 -363 -214 -363 -3 1 -52 81 -107 178 -102 177 -302 523 -674 1167 -108 187 -234 406 -281 487 l-84 148 -227 0 c-126 0 -228 -3 -228 -8z" />
				<path d="M1150 4032 c0 -4 20 -41 43 -82 24 -41 174 -300 332 -575 158 -275 293 -506 299 -512 8 -9 39 36 124 184 l112 196 -147 255 c-81 141 -184 319 -229 397 l-81 140 -227 3 c-124 1 -226 -1 -226 -6z" />
				<path d="M2439 3898 c-45 -79 -96 -168 -115 -198 l-33 -55 685 -3 c376 -1 684 -4 684 -6 0 -5 -456 -798 -699 -1216 -59 -102 -193 -333 -298 -515 -105 -181 -283 -491 -397 -687 l-206 -358 112 -195 c62 -107 115 -195 118 -195 3 0 24 33 46 73 91 157 443 767 749 1297 43 74 110 191 150 260 113 196 518 898 894 1547 121 211 221 385 221 388 0 3 -411 5 -914 5 l-914 0 -83 -142z" />
			</g>
		</LogoComponent>
	);
};
