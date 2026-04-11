import type { IconProps } from './types';
import { cn } from '@/lib/utils.ts';

export const TelegramIcon = ({ className, size = 20 }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={cn('transition-colors', className)}>
		<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.218-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.871 4.326-2.962-.924c-.642-.202-.654-.642.134-.954l11.586-4.462c.534-.19.996.128.804.903z" />
	</svg>
);
