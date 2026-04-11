import { motion } from 'framer-motion';
import React from 'react';

interface SlideInProps {
	children: React.ReactNode;
	direction?: 'left' | 'right' | 'bottom';
	delay?: number;
	duration?: number;
	animate?: boolean;
	className?: string;
	onAnimateComplete?: () => void;
}

const variants = {
	left: {
		initial: { x: -60, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: -60, opacity: 0 },
	},
	right: {
		initial: { x: 60, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: 60, opacity: 0 },
	},
	bottom: {
		initial: { y: 60, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 0, opacity: 0 },
	},
};

export const SlideIn = ({ children, direction = 'left', delay = 0, duration = 0.5, animate = true, className = '', onAnimateComplete }: SlideInProps) => {
	return (
		<motion.div
			variants={variants[direction]}
			initial="initial"
			animate={animate ? 'animate' : 'exit'}
			transition={{
				duration,
				delay,
				ease: [0.25, 0.1, 0.25, 1],
			}}
			onAnimationComplete={onAnimateComplete}
			className={className}
		>
			{children}
		</motion.div>
	);
};
