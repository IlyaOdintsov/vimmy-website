import { useTranslation } from 'react-i18next';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group.tsx';
import { Languages } from 'lucide-react';
import { useIsMd } from '@/shared/lib/hooks/useIsMobile.tsx';

export const LangToggle = () => {
	const { i18n } = useTranslation();
	const currentLang = i18n.language || 'en';

	const handleLangChange = (value: string) => {
		i18n.changeLanguage(value);
	};

	return (
		<>
			<HoverCard openDelay={100} closeDelay={100}>
				<HoverCardTrigger asChild>
					<Button variant="outline" className="h-10 w-10">
						<Languages className="size-reset h-6" />
					</Button>
				</HoverCardTrigger>
				<HoverCardContent side={'left'} className={`bg-background p-0 w-full flex items-center overflow-hidden z-20 h-10`}>
					<ToggleGroup type="single" value={currentLang} onValueChange={handleLangChange} className="h-10">
						<ToggleGroupItem value="en" aria-label="English" className="h-10">
							EN
						</ToggleGroupItem>
						<ToggleGroupItem value="ru" aria-label="Русский" className="h-10">
							RU
						</ToggleGroupItem>
					</ToggleGroup>
				</HoverCardContent>
			</HoverCard>
		</>
	);
};
