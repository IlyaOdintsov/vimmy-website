import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps {
	src: string;
	alt: string;
	className?: string;
}

export const ImageWithFallback = ({ src, alt, className }: ImageWithFallbackProps) => {
	const [hasError, setHasError] = useState(false);

	return (
		<div className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${className}`}>
			{!hasError && src && (
				<img
					src={src}
					alt={alt}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform hover:scale-110 duration-300"
					onError={() => setHasError(true)}
				/>
			)}

			{(!src || hasError) && (
				<div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground transition-transform duration-300">
					<ImageIcon className="w-12 h-12" />
				</div>
			)}
		</div>
	);
};
