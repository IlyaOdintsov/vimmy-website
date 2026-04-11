import { cn } from '@/lib/utils.ts';

const navigateList = [
	{ name: 'About', href: '#about' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
];

interface NavigationPanelProps {
	onNavigate?: () => void;
	className?: string;
}

export const NavigationPanel = ({ onNavigate, className }: NavigationPanelProps) => {
	return (
		<nav className={cn('w-full flex', 'flex-row justify-evenly gap-6', className)}>
			{navigateList.map((item) => (
				<a
					key={item.name}
					href={item.href}
					className="relative inline-block  text-muted-foreground hover:text-foreground transition-colors duration-300 group overflow-hidden"
					onClick={onNavigate}
				>
					{item.name}

					<span
						className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary transition-all duration-700
								ease-out group-hover:w-full group-hover:right-auto group-hover:left-0"
					/>
					<span
						className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary/40 transition-all duration-700
								ease-out delay-170 group-hover:w-full group-hover:right-auto group-hover:left-0 group-hover:delay-0"
					/>
				</a>
			))}
		</nav>
	);
};
