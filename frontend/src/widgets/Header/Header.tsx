import { Logo } from '../../shared/ui/Logo.tsx';
import { NavigationPanel } from './ui/NavigationPanel.tsx';
import { useIsLg } from '@/shared/lib/hooks/useIsMobile.tsx';
import { ThemeToggle } from '@/features/theme/theme-toggle.tsx';
import { Text } from '@/shared/ui/typography/Text.tsx';
import React from 'react';
import { PanelTopOpen } from 'lucide-react';
import { motion } from 'framer-motion';

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
							vimmy.122
						</Text>
					</a>
				</div>

				{isLg ? (
					<button onClick={handleMenuToggle} className="p-2 rounded-md hover:bg-muted transition-colors" aria-label="Open menu">
						<motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
							<PanelTopOpen size={24} />
						</motion.div>
					</button>
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
