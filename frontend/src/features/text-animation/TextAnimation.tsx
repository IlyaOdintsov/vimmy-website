import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TextAnimationProps {
	text: string;
	typingSpeed?: number;
	cursorBlinkDuration?: number;
	className?: string;
	cursorChar?: string;
}

export const TextAnimation = ({ text = '', typingSpeed = 100, cursorBlinkDuration = 10000, className = '', cursorChar = '_' }: TextAnimationProps) => {
	const [displayText, setDisplayText] = useState('');
	const [isTypingComplete, setIsTypingComplete] = useState(false);
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		if (displayText.length < text.length) {
			const timeout = setTimeout(() => {
				setDisplayText(text.slice(0, displayText.length + 1));
			}, typingSpeed);
			return () => clearTimeout(timeout);
		} else {
			setIsTypingComplete(true);
		}
	}, [displayText, text, typingSpeed]);

	useEffect(() => {
		if (!isTypingComplete) return;

		const blinkInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 450);

		const stopTimeout = setTimeout(() => {
			clearInterval(blinkInterval);
			setShowCursor(false);
		}, cursorBlinkDuration);

		return () => {
			clearInterval(blinkInterval);
			clearTimeout(stopTimeout);
		};
	}, [isTypingComplete, cursorBlinkDuration]);

	return (
		<motion.div
			className={`font-display flex items-center justify-start w-full ${className}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			{displayText}
			<span className="inline-block w-[0.5em] pl-[0.07em]">{showCursor && <span className="animate-pulse">_</span>}</span>
		</motion.div>
	);
};
