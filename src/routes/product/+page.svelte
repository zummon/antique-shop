<script>
	import Product from "../../lib/Product.svelte";

	let { data } = $props();

	let category = $state("");
</script>

<svelte:head>
	<title>{data.title} - {data.sitename}</title>
	<meta property="og:title" content={`${data.title} - ${data.sitename}`} />
	<meta name="twitter:title" content={`${data.title} - ${data.sitename}`} />
</svelte:head>

<ul class="divide-x-2 flex flex-wrap justify-center mb-4 lg:mb-8">
	<li class="">
		<button
			class={`inline-block px-4 py-2 text-yellow-800 ${category == '' ? 'font-semibold' : ''}`}
			onclick={() => {
				category = "";
			}}
		>
			All
		</button>
	</li>
	{#each data.categories as value, index (`category-${index}`)}
		<li class="">
			<button
				class={`inline-block px-4 py-2 text-yellow-800 ${category == value ? 'font-semibold' : ''}`}
				onclick={() => {
					category = value;
				}}
			>
				{value}
			</button>
		</li>
	{/each}
</ul>

<div class="sm:columns-2 md:columns-3 lg:columns-4">
	{#each data.products.filter((item) => {
		if (category == "") {
			return true;
		}
		return item.category == category;
	}) as item, index (`product-${index}`)}
		<div class="mb-4">
			<Product {...item} />
		</div>
	{/each}
</div>
