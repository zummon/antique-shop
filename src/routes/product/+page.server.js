export const prerender = true;

export const load = async ({ parent }) => {
	let data = await parent();
	let title = "Product";
	let categories = [...new Set(data.products.map((item) => item.category))]

	return {
		categories, title, products: data.products
	};
};
