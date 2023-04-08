export const prerender = true;

export const load = async ({ params, parent }) => {
	let data = await parent();
	let product = data.products.find((item) => item.slug === params.slug);

	return {
		product,
	};
};
