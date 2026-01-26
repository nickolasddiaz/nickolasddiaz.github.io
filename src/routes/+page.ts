import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = () => {
	// Redirects / directly to /about_me
	// We use ${base} to ensure it works with your GitHub repo path
	throw redirect(307, `${base}/about_me`);
}