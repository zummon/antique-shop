export const prerender = true;

import products from '../lib/products.json'

export const load = async ({ url }) => {

	let sitename = "Antique Shop";

	return {
		sitename,
		products,
		pathname: url.pathname
	};
};
