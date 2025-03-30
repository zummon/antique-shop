<script>
	import Product from "../lib/Product.svelte";

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.sitename}</title>
	<meta property="og:title" content={data.sitename} />
	<meta name="twitter:title" content={data.sitename} />
</svelte:head>

<div class="md:columns-2 prose max-w-none mb-4 lg:mb-8">
	<h1>Home</h1>
	<p>Lorem, ipsum dolor.</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero
		alias beatae praesentium debitis laborum hic consequatur magni esse
		distinctio cupiditate eaque tenetur sint, rerum reprehenderit dicta totam.
		Minus, eius.
	</p>
	<ul>
		<li>Dolorum.</li>
		<li>Praesentium est quasi qui.</li>
		<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
	</ul>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero
		alias beatae praesentium debitis laborum hic consequatur magni esse
		distinctio cupiditate eaque tenetur sint, rerum reprehenderit dicta totam.
		Minus, eius.
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero
		alias beatae praesentium debitis laborum hic consequatur magni esse
		distinctio cupiditate eaque tenetur sint, rerum reprehenderit dicta totam.
		Minus, eius.
	</p>
</div>

<div class="sm:columns-2 md:columns-3 lg:columns-4">
	{#each data.products as item, index (`product-${index}`)}
		<div class="mb-4">
			<Product {...item} />
		</div>
	{/each}
</div>
