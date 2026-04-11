import { CONTACT_LINKS } from '@/shared/lib/constants/constants.ts';
import { copyToClipboard } from '@/shared/lib/utils/clipboard.ts';
import { Card, CardContent } from '@/components/ui/card.tsx';

export const ContactLinks = () => {
	return (
		<div className="space-y-6">
			{CONTACT_LINKS.map(({ name, icon: Icon, url, ariaLabel, isCopy }) => {
				const displayUrl = url.replace(/^https?:\/\//, '');

				const handleClick = async () => {
					if (isCopy) {
						await copyToClipboard({ text: url });
					} else {
						window.open(url, '_blank', 'noopener,noreferrer');
					}
				};

				return (
					<Card key={name} onClick={handleClick} aria-label={ariaLabel} className="p-0 cursor-pointer">
						<CardContent className="p-6">
							<div className="flex items-center gap-4">
								<Icon size={30} />
								<div className="w-full">
									<h4>{name}</h4>
									<p className="text-muted-foreground">{displayUrl}</p>
								</div>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};
