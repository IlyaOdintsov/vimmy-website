import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { PROJECTS } from '@/shared/lib/constants/constants.ts';
import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '@/shared/ui/ImageWithFallback.tsx';

export const ProjectsList = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mt-10 sm:mt-12">
			{PROJECTS.map((project, index) => (
				<Card key={index} className="overflow-hidden hover:shadow-lg hover:shadow-primary/25 transition-shadow duration-300 pt-0">
					<ImageWithFallback src={''} alt={'imgT'} className="w-full h-48 object-cover" />
					<CardHeader>
						<CardTitle className="text-xl text-start">{project.title}</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col items-start space-y-4">
						<p className="text-muted-foreground leading-relaxed">{project.description}</p>

						<div className="flex flex-wrap gap-2">
							{project.usedTechnologies.map((tech, techIndex) => (
								<Badge key={techIndex} variant="outline" className="text-xs">
									{tech}
								</Badge>
							))}
						</div>

						<div className="flex gap-3 ">
							<Button size="sm" asChild>
								<a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
									<ExternalLink className="mr-2 h-4 w-4" />
									Live Demo
								</a>
							</Button>
							<Button variant="outline" size="sm" asChild>
								<a href={project.githubLink} target="_blank" rel="noopener noreferrer">
									<Github className="mr-2 h-4 w-4" />
									Code
								</a>
							</Button>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
};
