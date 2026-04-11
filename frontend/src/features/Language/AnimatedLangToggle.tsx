import { useAnimationStore } from '@/shared/lib/stores';
import { AnimatePresence } from 'framer-motion';
import { SlideIn } from '@/shared/ui/animations/SlideIn.tsx';
import { LangToggle } from '@/features/Language/LanguageToggle.tsx';
import { useState } from 'react';

interface AnimatedLangToggleProps {
	animate: boolean;
}

export const AnimatedLangToggle = ({ animate }: AnimatedLangToggleProps) => {
	const { showCurtain } = useAnimationStore();
	const [firstLoad, setFirstLoad] = useState(true);

	if (showCurtain) return null;

	return (
		<AnimatePresence>
			<SlideIn direction="right" animate={animate} delay={firstLoad ? 0.4 : 0} className="absolute top-0 right-8" onAnimateComplete={() => setFirstLoad(false)}>
				<LangToggle />
			</SlideIn>
		</AnimatePresence>
	);
};
