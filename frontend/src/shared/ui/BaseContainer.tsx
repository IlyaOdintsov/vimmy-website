import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BaseContainerProps {
	children: React.ReactNode;
	size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
	className?: string;
}

export const BaseContainer = ({ children, size = 'lg', className = '' }: BaseContainerProps) => {
	const baseClasses = 'w-full relative mx-auto p-4 xs:p-12';

	const sizeClasses = {
		sm: 'max-w-3xl', // 768px
		md: 'max-w-5xl', // 1024px
		lg: 'max-w-7xl', // 1280px
		xl: 'max-w-[1440px]', // 1440px
		full: 'max-w-full', // 100%
	};

	const containerClasses = twMerge(baseClasses, sizeClasses[size], className);

	return <div className={containerClasses}>{children}</div>;
};
