import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useAnimationStore } from '@/shared/lib/stores';
import { Logo } from '@/shared/ui/Logo.tsx';

interface PageIntroCurtainProps {
	duration?: number;
	onComplete?: () => void;
}

export const PageIntroCurtain = ({ duration = 1.6, onComplete }: PageIntroCurtainProps) => {
	const [isVisible, setIsVisible] = useState(true);
	const { showHeaderAfterDelay } = useAnimationStore();

	const handleAnimationComplete = () => {
		setTimeout(() => {
			setIsVisible(false);
			onComplete?.();

			setTimeout(() => {
				showHeaderAfterDelay();
			}, 150);
		}, 100);
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<>
					<div className="fixed inset-0 z-40 flex justify-center items-center" style={{ backgroundColor: '#5B44F2' }}>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{
								opacity: 1,
								scale: 1,
								rotate: [0, 360, 720],
							}}
							transition={{
								opacity: { duration: 0.5 },
								scale: { duration: 0.5 },
								rotate: {
									duration: 2.5,
									times: [0, 0.6, 1],
									ease: ['easeInOut', 'easeOut'],
								},
							}}
							className="flex items-center justify-center"
						>
							<Logo size="lg" />
						</motion.div>
					</div>

					<motion.div
						className="fixed top-0 left-0 w-1/2 h-full z-50 overflow-hidden"
						style={{ backgroundColor: '#3A29A6' }}
						initial={{ x: '-100%' }}
						animate={{ x: 0 }}
						transition={{
							duration: duration,
							ease: [0.65, 0, 0.35, 1],
						}}
					>
						<span className="text-[20vw] font-bold text-primary absolute bottom-1/2 transform: translate-y-1/2 right-0 translate-x-1/2 leading-none">
							VIMMY
						</span>
					</motion.div>

					<motion.div
						className="fixed top-0 right-0 w-1/2 h-full z-50 overflow-hidden"
						style={{ backgroundColor: '#3A29A6' }}
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						transition={{
							duration: duration,
							ease: [0.65, 0, 0.35, 1],
						}}
						onAnimationComplete={handleAnimationComplete}
					>
						<span className="text-[20vw] font-bold text-primary absolute bottom-1/2 transform: translate-y-1/2 left-0 -translate-x-1/2 leading-none">
							VIMMY
						</span>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};
