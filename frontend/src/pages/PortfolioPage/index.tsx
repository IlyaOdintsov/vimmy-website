import { useAnimationStore } from '@/shared/lib/stores';
import { lazy, Suspense } from 'react';

const AnimatedHeader = lazy(() => import('@/widgets/Header/AnimatedHeader.tsx'));
const MainSection = lazy(() => import('@/pages/PortfolioPage/sections/MainSection.tsx'));
const SkillsSection = lazy(() => import('@/pages/PortfolioPage/sections/SkillsSection.tsx'));
const ProjectsSection = lazy(() => import('@/pages/PortfolioPage/sections/ProjectsSection.tsx'));
const ContactSection = lazy(() => import('@/pages/PortfolioPage/sections/ContactSection.tsx'));
const Footer = lazy(() => import('@/widgets/Footer/Footer.tsx'));
const PageIntroCurtain = lazy(() => import('@/widgets/PageIntroCurtain.tsx'));

const Portfolio = () => {
	const { showCurtain, curtainComplete } = useAnimationStore();

	const SkeletonLoader = () => {
		return <div></div>;
	};

	return (
		<>
			{showCurtain && <PageIntroCurtain duration={1.6} onComplete={curtainComplete} />}

			{!showCurtain && (
				<Suspense fallback={<SkeletonLoader />}>
					<AnimatedHeader />

					<div className="divide-y divide-border [&>*]:border-t-1 [&>*]:border-border/50 [&>*]:first:border-t-0">
						<MainSection />

						<SkillsSection />

						{/* <ProjectsSection /> */}

						<ContactSection />

						<Footer />
					</div>
				</Suspense>
			)}
		</>
	);
};

export default Portfolio;
