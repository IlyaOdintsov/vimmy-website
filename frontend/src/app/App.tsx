import AppRouter from './providers/AppRouter';
import { Toaster } from 'sonner';
import emailjs from '@emailjs/browser';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init({
	publicKey: PUBLIC_KEY,
	limitRate: {
		id: 'portfolioId',
		throttle: 300000,
	},
});

function App() {
	return (
		<>
			<AppRouter />
			<Toaster />
		</>
	);
}

export default App;
