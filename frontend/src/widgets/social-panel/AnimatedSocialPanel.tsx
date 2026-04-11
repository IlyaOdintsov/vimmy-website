import { AnimatePresence } from 'framer-motion';
import { SocialPanel } from './SocialPanel';
import { useIsLg, useIsXl } from '@/shared/lib/hooks/useIsMobile.tsx';
import { useAnimationStore } from '@/shared/lib/stores';
import { SlideIn } from '@/shared/ui/animations/SlideIn.tsx';

export const AnimatedSocialPanel = () => {
	const isXl = useIsXl();
	const { showCurtain } = useAnimationStore();

	if (showCurtain) return null;

	return (
		<AnimatePresence mode="wait">
			{isXl ? (
				<SlideIn direction="bottom" delay={4.25} className="w-full">
					<SocialPanel direction="horizontal" iconSize={35} />
				</SlideIn>
			) : (
				<SlideIn direction="right" delay={0.4}>
					<SocialPanel direction="vertical" iconSize={35} />
				</SlideIn>
			)}
		</AnimatePresence>
	);
};
