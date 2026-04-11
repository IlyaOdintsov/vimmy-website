import { useEffect } from 'react';
import { useThemeStore } from '@/shared/lib/stores';
import { cn } from '@/lib/utils.ts';
import { AnimatePresence, motion } from 'framer-motion';

export function ThemeToggle({ classname }: { classname?: string }) {
	const { theme, resolvedTheme, setTheme, setResolvedTheme } = useThemeStore();

	useEffect(() => {
		const updateResolvedTheme = () => {
			if (theme === 'system') {
				const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				setResolvedTheme(isDark ? 'dark' : 'light');
			} else {
				setResolvedTheme(theme);
			}
		};

		updateResolvedTheme();

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = () => {
			if (theme === 'system') {
				updateResolvedTheme();
			}
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, [theme, setResolvedTheme]);

	useEffect(() => {
		const root = document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(resolvedTheme);
	}, [resolvedTheme]);

	const toggleTheme = () => {
		if (theme === 'system') {
			setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
		} else {
			setTheme(theme === 'light' ? 'dark' : 'light');
		}
	};

	return (
		<div onClick={toggleTheme} className={cn('cursor-pointer select-none', classname)}>
			<AnimatePresence mode="wait">
				<motion.span
					key={resolvedTheme}
					initial={{ opacity: 0, y: -5 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 5 }}
					transition={{ duration: 0.2 }}
					className="inline-block whitespace-nowrap border-b-[1px] border-primary"
				>
					<span className="dark:hidden">.dark mode</span>
					<span className="hidden dark:inline">.light mode</span>
				</motion.span>
			</AnimatePresence>
		</div>
	);
}
