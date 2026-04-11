import { create } from 'zustand';

interface CurtainState {
	showCurtain: boolean;
	showHeader: boolean;
	curtainComplete: () => void;
	showHeaderAfterDelay: () => void;
	resetCurtain: () => void;
}

export const useAnimationStore = create<CurtainState>((set) => ({
	showCurtain: true,
	showHeader: false,

	curtainComplete: () => set({ showCurtain: false }),

	showHeaderAfterDelay: () => set({ showHeader: true }),

	resetCurtain: () =>
		set({
			showCurtain: true,
			showHeader: false,
		}),
}));
