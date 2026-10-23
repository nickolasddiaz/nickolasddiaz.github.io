export const prerender = true;

import type { RequestHandler } from "@sveltejs/kit";
import { response } from "super-sitemap/sveltekit";

export const GET: RequestHandler = async () => {
  return await response({
    origin: "https://nickolasddiaz.github.io",
  });
};
