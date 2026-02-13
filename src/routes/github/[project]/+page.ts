import type { PageLoad } from './$types';
import renderMarkdown from '$lib/utils/renderMarkdown';

export const load: PageLoad = async ({ params }) => {
  const html = await renderMarkdown(params.project);
  return {
    html: html,
    project: params.project
  };
};