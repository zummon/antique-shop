export const prerender = true;

export const load = async ({ parent }) => {
	let data = await parent();

	return {
		categories: [...new Set(data.products.map((item) => item.category))],
	};
};
