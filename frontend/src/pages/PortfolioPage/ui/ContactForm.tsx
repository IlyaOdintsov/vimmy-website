import { Button } from '@/components/ui/button.tsx';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from '@/components/ui/input.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Send } from 'lucide-react';
import { SubmittedForm } from '@/pages/PortfolioPage/ui/SubmittedForm.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface FormErrors {
	name?: string;
	email?: string;
	subject?: string;
	message?: string;
	form?: string;
}

export const ContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const [errors, setErrors] = useState<FormErrors>({});
	const [touched, setTouched] = useState<Record<string, boolean>>({});
	const [isLocked, setIsLocked] = useState(false);
	const [timeLeft, setTimeLeft] = useState(0);

	useEffect(() => {
		if (!isLocked || timeLeft <= 0) return;

		const interval = setInterval(() => {
			setTimeLeft((t) => {
				if (t <= 1) {
					setIsLocked(false);
					return 0;
				}
				return t - 1;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [isLocked]);

	const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setTouched((prev) => ({ ...prev, [name]: true }));

		const error = validateField(name, value);
		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;

		if (touched[name]) {
			const error = validateField(name, value);
			setErrors((prev) => ({ ...prev, [name]: error }));
		}
	};

	const validateField = (name: string, value: string): string | undefined => {
		switch (name) {
			case 'name':
				if (!value.trim()) return 'Name is required';
				if (value.length < 2) return 'Name must be at least 2 characters';
				if (value.length > 50) return 'Name must be less than 50 characters';
				break;
			case 'email':
				if (!value.trim()) return 'Email is required';
				if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
					return 'Enter a valid email address';
				}
				break;
			case 'message':
				if (!value.trim()) return 'Message is required';
				if (value.length < 10) return 'Message must be at least 10 characters';
				if (value.length > 1000) return 'Message must be less than 1000 characters';
				break;
			case 'subject':
				if (value.length > 100) return 'Subject must be less than 100 characters';
				break;
		}
		return undefined;
	};

	const validateForm = (formData: FormData): boolean => {
		const newErrors: FormErrors = {};

		newErrors.name = validateField('name', formData.get('name') as string);
		newErrors.email = validateField('email', formData.get('email') as string);
		newErrors.message = validateField('message', formData.get('message') as string);
		newErrors.subject = validateField('subject', formData.get('subject') as string);

		setErrors(newErrors);
		return !Object.values(newErrors).some((error) => error !== undefined);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (isLocked) return;

		const formData = new FormData(formRef.current!);
		const isValid = validateForm(formData);

		const honeypot = formData.get('_website') as string;
		if (honeypot?.trim()) return;

		if (!isValid) {
			const allTouched: Record<string, boolean> = {};
			['name', 'email', 'subject', 'message'].forEach((field) => {
				allTouched[field] = true;
			});
			setTouched(allTouched);
			return;
		}

		setIsSubmitting(true);

		try {
			await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);

			setIsSent(true);
			formRef.current?.reset();
			setErrors({});
			setTouched({});

			setTimeout(() => setIsSent(false), 5000);
		} catch (err: any) {
			if (err.status === 429) {
				setIsLocked(true);
				setTimeLeft(300);
				return;
			}
			console.error('EmailJS error:', err);
			setErrors({ form: 'Failed to send. Please try again.' });
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="relative">
			{isSent && <SubmittedForm />}
			<Card>
				<CardHeader>
					<CardTitle>Send a Message</CardTitle>
				</CardHeader>
				<form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
					<CardContent className="space-y-4">
						<Input name="_website" className="hidden" tabIndex={-1} hidden={true} autoComplete="off" />

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="isolate">
								<Input name="name" placeholder="Your Name" type="text" onBlur={handleBlur} onChange={handleChange} aria-invalid={!!errors.name} />
								{errors.name && touched.name && <p className="text-xs text-destructive mt-2 ">{errors.name}</p>}
							</div>

							<div className="isolate">
								<Input name="email" placeholder="Your Email" type="email" onBlur={handleBlur} onChange={handleChange} aria-invalid={!!errors.email} />
								{errors.email && touched.email && <p className="text-xs text-destructive mt-2">{errors.email}</p>}
							</div>
						</div>

						<div>
							<Input name="subject" placeholder="Subject" type="text" onBlur={handleBlur} onChange={handleChange} aria-invalid={!!errors.subject} />
							{errors.subject && touched.subject && <p className="text-xs text-destructive mt-2">{errors.subject}</p>}
						</div>

						<div>
							<Textarea name="message" placeholder="Your Message" rows={5} onBlur={handleBlur} onChange={handleChange} aria-invalid={!!errors.message} />
							{errors.message && touched.message && <p className="text-xs text-destructive mt-2">{errors.message}</p>}
						</div>

						{errors.form && <p className="text-sm text-destructive">{errors.form}</p>}

						{isLocked ? (
							`Форма закрыта. Подождите ${timeLeft} сек.`
						) : (
							<Button className="w-full gap-2 cursor-pointer" type="submit" disabled={isSubmitting}>
								<Send className="h-4 w-4" />
								{isSubmitting ? 'Sending...' : 'Send Message'}
							</Button>
						)}
					</CardContent>
				</form>
			</Card>
		</div>
	);
};
