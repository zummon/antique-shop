export const prerender = true;

export const load = async ({ parent }) => {
	let data = await parent();

	return {
		products: data.products.slice(4, 8),
	};
};
