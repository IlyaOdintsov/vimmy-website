import { AnimatePresence } from 'framer-motion';
import { useAnimationStore } from '@/shared/lib/stores';
import { SlideIn } from '@/shared/ui/animations/SlideIn.tsx';
import { ThemeToggle } from '@/features/theme/theme-toggle.tsx';

export const AnimatedThemeToggle = () => {
	const { showCurtain } = useAnimationStore();

	if (showCurtain) return null;

	return (
		<AnimatePresence>
			<SlideIn direction="right" delay={0.4} className="absolute bottom-1/5 right-4 translate-x-1/2">
				<ThemeToggle classname="rotate-270" />
			</SlideIn>
		</AnimatePresence>
	);
};
