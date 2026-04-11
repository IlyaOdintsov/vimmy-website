import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n.ts';

const container = document.getElementById('root');
if (container) {
	const root = createRoot(container);
	root.render(
		<StrictMode>
			<I18nextProvider i18n={i18n}>
				<App />
			</I18nextProvider>
		</StrictMode>
	);
}
