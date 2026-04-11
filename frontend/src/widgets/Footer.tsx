import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';

export const Footer = () => {
	const year = new Date().getFullYear();
	const nickName = 'vimmy.';

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer id="footer" className="border-t border-border/50 bg-background text-muted-foreground">
			<div className="flex flex-col items-center justify-between gap-4 md:flex-row max-w-5xl mx-auto p-4 xl:px-0 xl:py-8">
				<p className="text-sm">
					© {year} {nickName}
				</p>

				<div className="flex items-center gap-1 text-xs">
					Built with
					<Heart className="h-3 w-3 fill-current" />
					React & Tailwind CSS
				</div>

				<Button size="sm" variant="outline" onClick={scrollToTop}>
					Back to Top
				</Button>
			</div>
		</footer>
	);
};
