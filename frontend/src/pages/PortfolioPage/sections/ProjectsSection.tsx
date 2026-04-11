import { BaseContainer } from '@/shared/ui/BaseContainer.tsx';
import { ProjectsList } from '@/pages/PortfolioPage/ui/ProjectsList.tsx';

const ProjectsSection = () => {
	return (
		<section id="projects">
			<BaseContainer>
				<div className="text-center p-6 lg:p-0">
					<h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 lg:mt-6">Personal Projects</h2>
					<p className=" mt-2 sm:mt-4"> Selected projects demonstrating my technical skills and problem-solving abilities</p>
					<ProjectsList />
				</div>
			</BaseContainer>
		</section>
	);
};

export default ProjectsSection;
