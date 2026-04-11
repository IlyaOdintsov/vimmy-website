import { EmailIcon, GitHubIcon, TelegramIcon } from '@/shared/assets/icons';
import { Code, Database, Palette, Wrench } from 'lucide-react';

export interface ContactLink {
	name: string;
	icon: React.ComponentType<{ size?: number; className?: string }>;
	url: string;
	ariaLabel: string;
	isCopy: boolean;
}

export const CONTACT_LINKS: ContactLink[] = [
	{
		name: 'GitHub',
		icon: GitHubIcon,
		url: 'https://github.com/IlyaOdintsov',
		ariaLabel: 'GitHub profile',
		isCopy: false,
	},
	{
		name: 'Telegram',
		icon: TelegramIcon,
		url: 'https://t.me/vimmy4',
		ariaLabel: 'Telegram contact',
		isCopy: false,
	},
	{
		name: 'Email',
		icon: EmailIcon,
		url: 'ilya.odintsovv@yandex.ru',
		ariaLabel: 'Email me',
		isCopy: true,
	},
];

export const SKILLS = [
	{
		category: 'Core Frontend',
		technologies: ['React', 'TypeScript', 'Next.js', 'Vite'],
		icons: Code,
	},
	{
		category: 'UI & Styling',
		technologies: ['Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
		icons: Palette,
	},
	{
		category: 'State & Data',
		technologies: ['Zustand', 'Redux Toolkit', 'Firebase Firestore'],
		icons: Database,
	},
	{
		category: 'Tools & Quality',
		technologies: ['React Hook Form', 'Vitest', 'Playwright', 'FSD'],
		icons: Wrench,
	},
];

export const PROJECTS = [
	{
		title: 'f_Title',
		description: 'f_description',
		usedTechnologies: ['1', '2', '3'],
		previewImg: '1313123',
		githubLink: 'github/123',
		liveDemo: 'live-demo.com',
	},
];
