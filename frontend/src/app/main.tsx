import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { I18nextProvider } from 'react-i18next';

const loadI18n = () => import('@/i18n.ts');
const App = lazy(() => import('./App'));

const container = document.getElementById('root');
if (container) {
	const root = createRoot(container);

	loadI18n().then((i18nModule) => {
		root.render(
			<StrictMode>
				<I18nextProvider i18n={i18nModule.default}>
					<Suspense fallback={null}>
						<App />
					</Suspense>
				</I18nextProvider>
			</StrictMode>
		);
	});
}
