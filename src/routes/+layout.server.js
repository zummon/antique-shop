export const load = async ({}) => {
	let products = await import("$lib/products.json").then(
		(file) => file.default
	);
	let sitename = "Antique Shop";

	return {
		sitename,
		products,
	};
};
