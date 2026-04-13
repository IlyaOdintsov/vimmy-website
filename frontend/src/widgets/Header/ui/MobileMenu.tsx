import { motion, AnimatePresence } from 'framer-motion';
import { NavigationPanel } from './NavigationPanel';
import { ThemeToggle } from '@/features/theme/theme-toggle.tsx';
import {PanelTopOpen} from "lucide-react";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export const MobileMenuButton = ({isMobileMenuOpen}: {isMobileMenuOpen: boolean}) => {
	return (
		<motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
			<PanelTopOpen size={24} />
		</motion.div>
	)
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ y: -300, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -300, opacity: 0 }}
					transition={{ type: 'spring', damping: 25, stiffness: 300 }}
					className="fixed top-0 left-0 right-0 pt-[88px] bg-background border-b border-border z-30 lg:hidden shadow-lg"
				>
					<div className="flex flex-col sm:flex-row items-center py-4 px-8 gap-4">
						<NavigationPanel onNavigate={onClose} className="justify-around" />
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
