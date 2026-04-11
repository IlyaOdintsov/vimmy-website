export const rateLimiter = {
	STORAGE_KEY: 'lastFormSubmit',

	getLastSubmitTime: (): number | null => {
		const lastTime = localStorage.getItem(rateLimiter.STORAGE_KEY);
		return lastTime ? parseInt(lastTime, 10) : null;
	},

	setLastSubmitTime: (): void => {
		localStorage.setItem(rateLimiter.STORAGE_KEY, Date.now().toString());
	},

	canSubmit: (cooldownMinutes: number = 5): boolean => {
		const lastTime = rateLimiter.getLastSubmitTime();
		if (!lastTime) return true;

		const now = Date.now();
		const diffMinutes = (now - lastTime) / (1000 * 60);
		return diffMinutes >= cooldownMinutes;
	},

	getRemainingSeconds: (cooldownMinutes: number = 5): number => {
		const lastTime = rateLimiter.getLastSubmitTime();
		if (!lastTime) return 0;

		const now = Date.now();
		const elapsedSeconds = (now - lastTime) / 1000;
		const cooldownSeconds = cooldownMinutes * 60;
		const remaining = cooldownSeconds - elapsedSeconds;

		return Math.max(0, Math.ceil(remaining));
	},

	getRemainingTimeText: (cooldownMinutes: number = 5): string => {
		const seconds = rateLimiter.getRemainingSeconds(cooldownMinutes);
		if (seconds <= 0) return '';

		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;

		if (minutes > 0) {
			return `${minutes} minute${minutes > 1 ? 's' : ''}${remainingSeconds > 0 ? ` ${remainingSeconds} second${remainingSeconds > 1 ? 's' : ''}` : ''}`;
		}
		return `${seconds} second${seconds > 1 ? 's' : ''}`;
	},
};
