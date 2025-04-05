export const prerender = true;

export const load = async ({ parent }) => {
	let data = await parent();
	let title = "About";

	return {
		products: data.products.slice(4, 8), title
	};
};
