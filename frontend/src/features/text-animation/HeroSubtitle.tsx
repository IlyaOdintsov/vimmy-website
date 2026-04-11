import { motion } from 'framer-motion';
import { cn } from '@/lib/utils.ts';

interface HeroSubtitleProps {
	text: string;
	duration?: number;
	delay?: number;
	className?: string;
}

export const HeroSubtitle = ({ text, duration = 0.8, delay = 2.5, className }: HeroSubtitleProps) => {
	return (
		<motion.p
			className={cn('text-xl text-muted-foreground font-light tracking-wide', className)}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: delay, duration: duration }}
		>
			{text}
		</motion.p>
	);
};
