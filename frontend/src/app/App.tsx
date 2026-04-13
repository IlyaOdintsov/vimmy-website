import AppRouter from './providers/AppRouter';
import { Toaster } from 'sonner';
import emailjs from '@emailjs/browser';
import {useEffect} from "react";

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init({
	publicKey: PUBLIC_KEY,
	limitRate: {
		id: 'portfolioId',
		throttle: 300000,
	},
});

function App() {
	useEffect(() => {
  		console.group('EmailJS Debug');
  		console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID ? '✅' : '❌');
  		console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? '✅' : '❌');
  		console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? '✅' : '❌');
  		console.groupEnd();
	}, []);
	return (
		<>
			<AppRouter />
			<Toaster />
		</>
	);
}

export default App;
