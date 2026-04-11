import { cn } from '@/lib/utils.ts';
import { CONTACT_LINKS } from '@/shared/lib/constants/constants.ts';
import { copyToClipboard } from '@/shared/lib/utils/clipboard.ts';

interface SocialPanelProps {
	className?: string;
	iconSize?: number;
	direction?: 'horizontal' | 'vertical';
}

export const SocialPanel = ({ className, iconSize = 20, direction = 'horizontal' }: SocialPanelProps) => {
	return (
		<div className={cn('flex gap-6 w-full justify-evenly', direction === 'vertical' && 'flex-col', className)}>
			{CONTACT_LINKS.map(({ name, icon: Icon, url, ariaLabel, isCopy }) =>
				isCopy ? (
					<div
						key={name}
						onClick={() => copyToClipboard({ text: url })}
						className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
						aria-label={ariaLabel}
					>
						<Icon size={iconSize} />
					</div>
				) : (
					<a
						key={name}
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-foreground transition-colors duration-200"
						aria-label={ariaLabel}
					>
						<Icon size={iconSize} />
					</a>
				)
			)}
		</div>
	);
};
