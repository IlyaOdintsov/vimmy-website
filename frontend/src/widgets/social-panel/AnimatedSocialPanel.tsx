import { AnimatePresence } from 'framer-motion';
import { SocialPanel } from './SocialPanel';
import { useIsXl } from '@/shared/lib/hooks/useIsMobile.tsx';
import { SlideIn } from '@/shared/lib/utils/SlideIn.tsx';

export const AnimatedSocialPanel = () => {
	const isXl = useIsXl();

	return (
		<AnimatePresence mode="wait">
			{isXl ? (
				<SlideIn key="horizontal" direction="bottom" delay={4.25} className="w-full">
					<SocialPanel direction="horizontal" iconSize={35} />
				</SlideIn>
			) : (
				<SlideIn key="vertical" direction="right" delay={0.4}>
					<SocialPanel direction="vertical" iconSize={35} />
				</SlideIn>
			)}
		</AnimatePresence>
	);
};
