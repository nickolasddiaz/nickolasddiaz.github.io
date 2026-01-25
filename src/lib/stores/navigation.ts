import { writable } from 'svelte/store';

export const sidenavOpen = writable(false);
export const currentPopup = writable<string | null>(null);