import { motion, AnimatePresence } from 'framer-motion';
import { NavigationPanel } from './NavigationPanel';
import { ThemeToggle } from '@/features/theme/theme-toggle.tsx';

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
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
					<div className="flex items-center py-6 px-12 gap-12">
						<NavigationPanel onNavigate={onClose} className="justify-between" />

						<ThemeToggle classname="pl-12 border-l border-border" />
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
