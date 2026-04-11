import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { CheckCircle } from 'lucide-react';

export const SubmittedForm = () => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0, y: 20, x: '-50%' }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.3 }}
				className="absolute left-1/2 transform: translate-y-1/2 z-20"
			>
				<Card className="justify-center w-full">
					<CardContent className="p-6 text-center flex flex-col items-center gap-2">
						<CheckCircle size={40} style={{ color: 'var(--chart-2)' }} />
						<p className="">Message sent!</p>
					</CardContent>
				</Card>
			</motion.div>
		</AnimatePresence>
	);
};
