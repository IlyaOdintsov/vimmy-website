import { motion } from 'framer-motion';
import { Header } from './Header';
import { useAnimationStore } from '@/shared/lib/stores/animationsStore.ts';
import { MobileMenu } from '@/widgets/Header/ui/MobileMenu.tsx';
import { useEffect, useState } from 'react';
import { useClickOutside } from '@/shared/lib/hooks/useClickOutside.tsx';

export const AnimatedHeader = () => {
	const { showHeader } = useAnimationStore();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const menuRef = useClickOutside<HTMLDivElement>(isMobileMenuOpen, () => setIsMobileMenuOpen((prev) => !prev));

	return (
		<div ref={menuRef}>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{
					y: showHeader ? 0 : -100,
					opacity: showHeader ? 1 : 0,
				}}
				transition={{
					duration: 0.6,
					ease: 'easeOut',
					type: 'tween',
				}}
				className={`fixed top-0 left-0 right-0 z-40 border-b border-border`}
			>
				<Header isMobileMenuOpen={isMobileMenuOpen} onMenuToggle={setIsMobileMenuOpen} />
				<MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
			</motion.div>
		</div>
	);
};
