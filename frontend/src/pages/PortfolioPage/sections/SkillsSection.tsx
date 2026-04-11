import { BaseContainer } from '@/shared/ui/BaseContainer.tsx';
import { SkillsList } from '@/pages/PortfolioPage/ui/SkillsList.tsx';

const SkillsSection = () => {
	return (
		<section id="skills">
			<BaseContainer>
				<div className="text-center p-6 lg:p-0">
					<h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 lg:mt-6">Technical Skills</h2>
					<p className=" mt-2 sm:mt-4">Technologies I work with and professional experience</p>
					<SkillsList />
				</div>
			</BaseContainer>
		</section>
	);
};

export default SkillsSection;
