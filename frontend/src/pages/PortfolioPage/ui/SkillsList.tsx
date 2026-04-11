import { SKILLS } from '@/shared/lib/constants/constants.ts';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import { Badge } from '@/components/ui/badge.tsx';

export const SkillsList = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 sm:mt-12">
			{SKILLS.map((skill, index) => {
				const Icon = skill.icons;
				return (
					<Card className="h-full bg-background" key={index}>
						<CardHeader>
							<div className="flex gap-2 items-center">
								<Icon size={20} />
								{skill.category}
							</div>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{skill.technologies.map((technology, skillIndex) => (
									<Badge key={skillIndex} variant="secondary">
										{technology}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};
