import { Logo } from '../../shared/ui/Logo.tsx';
import { NavigationPanel } from './ui/NavigationPanel.tsx';
import { useIsLg } from '@/shared/lib/hooks/useIsMobile.tsx';
import { ThemeToggle } from '@/features/theme/theme-toggle.tsx';
import { Text } from '@/shared/ui/typography/Text.tsx';
import { MobileMenuButton } from '@/widgets/Header/ui/MobileMenu.tsx';

interface HeaderProps {
	isMobileMenuOpen: boolean;

	onMenuToggle: (isOpen: boolean) => void;
}

export const Header = ({ isMobileMenuOpen, onMenuToggle }: HeaderProps) => {
	const isLg = useIsLg();

	const handleMenuToggle = () => {
		onMenuToggle(!isMobileMenuOpen);
	};

	return (
		<header id="header" className="relative z-40 bg-background border-t-8 border-foreground w-full select-none">
			<div className="w-full flex items-center justify-between max-w-7xl mx-auto p-4">
				<div className="w-full">
					<a href="." className="flex items-center justify-start justify-items-center justify-self-start gap-1 sm:gap-4">
						<Logo size={isLg ? 'md' : 'lg'} />

						<Text variant="heading" className="font-medium tracking-wide">
							vimmy.
						</Text>
					</a>
				</div>

				{isLg ? (
					<div className="p-2 rounded-md hover:bg-muted transition-colors flex gap-6" aria-label="Open menu">
						<ThemeToggle lightText=".light" darkText=".dark" />
						<MobileMenuButton isMobileMenuOpen={isMobileMenuOpen} onClick={handleMenuToggle} />
					</div>
				) : (
					<div className="flex w-full items-center justify-between gap-6">
						<NavigationPanel />
						<ThemeToggle />
					</div>
				)}
			</div>
		</header>
	);
};
