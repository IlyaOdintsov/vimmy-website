import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface GlitchTextProps {
	text: string;
	glitchDuration?: number;
	glitchSpeed?: number;
	startDelay?: number;
	className?: string;
	chars?: string;
	showInitialText?: boolean;
}

const DEFAULT_CHARS = '!@#$%^&*()_+{}[]|:;"<>,.?/~`0123456789';

export const GlitchText = ({
	text,
	glitchDuration = 800,
	glitchSpeed = 50,
	startDelay = 0,
	className = '',
	chars = DEFAULT_CHARS,
	showInitialText = false,
}: GlitchTextProps) => {
	const [displayText, setDisplayText] = useState(text);
	const [isGlitching, setIsGlitching] = useState(true);
	const [hasStarted, setHasStarted] = useState(startDelay === 0);
	const { i18n } = useTranslation();

	useEffect(() => {
		if (startDelay > 0 && !hasStarted) {
			const timer = setTimeout(() => {
				setHasStarted(true);
				setIsGlitching(true);
			}, startDelay * 1000);
			return () => clearTimeout(timer);
		} else if (startDelay === 0 && !hasStarted) {
			setHasStarted(true);
			setIsGlitching(true);
		}
	}, [startDelay, text, hasStarted]);

	useEffect(() => {
		if (!hasStarted || !isGlitching) return;

		let interval: ReturnType<typeof setInterval>;
		let startTime = Date.now();

		const getRandomChar = () => {
			return chars[Math.floor(Math.random() * chars.length)];
		};

		const generateGlitchText = () => {
			return text
				.split('')
				.map((char) => {
					if (char === ' ' || char === '.' || char === '(' || char === ')' || char === '-') {
						return char;
					}

					if (Math.random() > 0.3) {
						return getRandomChar();
					}
					return char;
				})
				.join('');
		};

		interval = setInterval(() => {
			const elapsed = Date.now() - startTime;

			if (elapsed >= glitchDuration) {
				clearInterval(interval);
				setDisplayText(text);
				setIsGlitching(false);
				return;
			}

			setDisplayText(generateGlitchText());
		}, glitchSpeed);

		return () => clearInterval(interval);
	}, [text, glitchDuration, glitchSpeed, chars, hasStarted, isGlitching]);

	useEffect(() => {
		setDisplayText(text);
	}, [i18n.language, text]);

	if (!hasStarted) {
		return <div className={className}>{showInitialText ? text : ''}</div>;
	}

	return (
		<motion.div className={`${className}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
			<span className="relative">{displayText}</span>
		</motion.div>
	);
};
