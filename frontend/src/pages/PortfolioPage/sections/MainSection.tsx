import { MainText } from '@/pages/PortfolioPage/ui/MainText.tsx';
import { AnimatedSocialPanel } from '@/widgets/social-panel/AnimatedSocialPanel.tsx';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { SocialPanel } from '@/widgets/social-panel/SocialPanel.tsx';

const MainSection = () => {
	const mainRef = useRef(null);
	const isMainVisible = useInView(mainRef, { once: false, margin: '-82% 0px -86% 0px' });

	return (
		<main id="about" ref={mainRef}>
			<div className="relative mx-auto max-w-7xl min-h-screen w-full flex flex-col xl:flex-row gap-6 justify-center items-center">
				<MainText isMainVisible={isMainVisible} />

				<AnimatedSocialPanel />
			</div>
		</main>
	);
};

export default MainSection;
