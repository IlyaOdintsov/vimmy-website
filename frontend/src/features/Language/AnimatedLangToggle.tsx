import { AnimatePresence } from 'framer-motion';
import { SlideIn } from '@/shared/lib/utils/SlideIn.tsx';
import { LangToggle } from '@/features/Language/LanguageToggle.tsx';
import { useState } from 'react';

interface AnimatedLangToggleProps {
	animate: boolean;
}

export const AnimatedLangToggle = ({ animate }: AnimatedLangToggleProps) => {
	const [firstLoad, setFirstLoad] = useState(true);

	return (
		<AnimatePresence>
			<SlideIn direction="bottom" animate={animate} delay={firstLoad ? 4.1 : 0} className="absolute top-0 right-8" onAnimateComplete={() => setFirstLoad(false)}>
				<LangToggle />
			</SlideIn>
		</AnimatePresence>
	);
};
