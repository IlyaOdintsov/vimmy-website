import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				'flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-2.5 py-2 text-base shadow-xs transition-all duration-200',
				'placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
				'aria-invalid:border-destructive/80',
				'focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring/50',
				'aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-2 aria-invalid:focus-visible:ring-inset aria-invalid:focus-visible:ring-destructive',
				className
			)}
			{...props}
		/>
	);
}

export { Textarea };
