import { PageIntroCurtain } from '@/widgets/PageIntroCurtain.tsx';
import { useAnimationStore } from '@/shared/lib/stores/animationsStore.ts';
import { AnimatedHeader } from '@/widgets/Header/AnimatedHeader.tsx';
import ContactSection from '@/pages/PortfolioPage/sections/ContactSection.tsx';
import MainSection from '@/pages/PortfolioPage/sections/MainSection.tsx';
import { Footer } from '@/widgets/Footer.tsx';
import SkillsSection from '@/pages/PortfolioPage/sections/SkillsSection.tsx';
import ProjectsSection from '@/pages/PortfolioPage/sections/ProjectsSection.tsx';

export const Portfolio = () => {
	const { showCurtain, curtainComplete } = useAnimationStore();

	return (
		<>
			{showCurtain && <PageIntroCurtain duration={1.6} onComplete={curtainComplete} />}

			<AnimatedHeader />

			<div className="divide-y divide-border [&>*]:border-t-1 [&>*]:border-border/50 [&>*]:first:border-t-0">
				<MainSection />

				<SkillsSection />

				{/*<ProjectsSection />*/}

				<ContactSection />

				<Footer />
			</div>
		</>
	);
};
