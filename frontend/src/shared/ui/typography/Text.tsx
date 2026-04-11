import React from 'react';
import { cn } from '@/lib/utils.ts';

interface TextProps {
	children: React.ReactNode;
	variant?: 'hero' | 'heading' | 'body' | 'nav' | 'small';
	className?: string;
}

const variants = {
	hero: 'text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold',
	heading: 'text-2xl sm:text-3xl font-bold',
	body: 'text-base xs:text-lg sm:text-xl',
	nav: 'text-sm xs:text-base sm:text-lg font-medium',
	small: 'text-xs xs:text-sm sm:text-base',
};

export const Text = ({ children, variant = 'body', className = '' }: TextProps) => {
	return <p className={cn(variants[variant], className)}>{children}</p>;
};
