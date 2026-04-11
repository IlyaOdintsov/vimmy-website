import { TextAnimation } from '@/features/text-animation/TextAnimation.tsx';
import { HeroSubtitle } from '@/features/text-animation/HeroSubtitle.tsx';
import { GlitchText } from '@/features/text-animation/GlitchText.tsx';
import { useAnimationStore } from '@/shared/lib/stores';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { AnimatedLangToggle } from '@/features/Language/AnimatedLangToggle.tsx';

export const MainText = ({ isMainVisible }: { isMainVisible: boolean }) => {
	const { t } = useTranslation();

	const text = 'front-end.web(developer)';
	const glitchText = t('about.name');
	const subtitleText = t('about.description');
	const { showCurtain } = useAnimationStore();

	if (showCurtain) return;

	return (
		<section className="relative max-w-lg sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full min-h-52 md:min-h-[340px] lg:min-h-96 flex flex-col gap-2 sm:gap-4 items-start px-8 md:p-0">
			<TextAnimation text={text} typingSpeed={90} cursorBlinkDuration={5000} cursorChar="_" className="select-none text-xl md:text-4xl lg:text-5xl tracking-wide" />

			<GlitchText
				text={glitchText}
				glitchDuration={1000}
				glitchSpeed={65}
				startDelay={2.6}
				className="mt-2 sm:mt-3 md:mt-4 text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide"
			/>

			<HeroSubtitle
				text={subtitleText}
				duration={1}
				delay={4}
				className="mt-1 text-xs md:text-xl lg:text-2xl max-w-2xl text-pretty hyphens-auto text-muted-foreground font-light tracking-wide"
			/>

			<AnimatedLangToggle animate={isMainVisible} />
		</section>
	);
};
