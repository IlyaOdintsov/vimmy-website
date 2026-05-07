import AppRouter from './providers/AppRouter';
import { Toaster } from 'sonner';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init({
	publicKey: PUBLIC_KEY,
	limitRate: {
		id: 'portfolioId',
		throttle: 300000,
	},
});

function App() {
	const location = useLocation();
	useEffect(() => {
		window.ym(109109373, 'hit', window.location.href);
	}, [location.pathname]);
	return (
		<>
			<AppRouter />
			<Toaster />
		</>
	);
}

export default App;
