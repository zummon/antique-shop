<script>
	import Product from "../../lib/Product.svelte";
	export let data;
	let category = "";
</script>

<svelte:head>
	<title>{data.title} - {data.sitename}</title>
	<meta property="og:title" content={`${data.title} - ${data.sitename}`} />
	<meta name="twitter:title" content={`${data.title} - ${data.sitename}`} />
</svelte:head>

<ul class="divide-x flex flex-wrap justify-center mb-4 lg:mb-8">
	<li class="">
		<button
			class="px-4 py-2 {category == '' ? 'text-sky-500' : ''}"
			on:click={() => {
				category = "";
			}}>All</button
		>
	</li>
	{#each data.categories as value, index (`category-${index}`)}
		<li class="">
			<button
				class="px-4 py-2 {category == value ? 'text-sky-500' : ''}"
				on:click={() => {
					category = value;
				}}>{value}</button
			>
		</li>
	{/each}
</ul>

<div class="sm:columns-2 md:columns-3 lg:columns-4">
	{#each data.products.filter((item) => {
		if (category == "") return true;
		return item.category == category;
	}) as item, index (`product-${index}`)}
		<div class="mb-4">
			<Product {...item} />
		</div>
	{/each}
</div>
