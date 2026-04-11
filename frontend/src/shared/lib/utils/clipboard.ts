import { toast } from 'sonner';

interface copyProps {
	text: string;
	options?: {
		successMessage?: string;
		errorMessage?: string;
	};
	position?: 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right';
}

export const copyToClipboard = async ({ text, options, position = 'bottom-left' }: copyProps) => {
	const { successMessage = 'Copied!', errorMessage = 'Failed to copy' } = options || {};

	try {
		await navigator.clipboard.writeText(text);
		toast.success(successMessage, { position: position });
		return true;
	} catch (error) {
		console.error('Copy failed:', error);
		toast.error(errorMessage, { position: position });
		return false;
	}
};
