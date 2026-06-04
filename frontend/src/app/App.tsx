import AppRouter from './providers/AppRouter';
import { Toaster } from 'sonner';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

		import('@emailjs/browser').then((emailjs) => {
			emailjs.init({
				publicKey: PUBLIC_KEY,
				limitRate: {
					id: 'portfolioId',
					throttle: 300000,
				},
			});
		});
	}, []);

	return (
		<>
			<AppRouter />
			<Toaster />
		</>
	);
}

export default App;
