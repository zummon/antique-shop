
<script>
	import Product from '$lib/Product.svelte';

	export let data

</script>

<svelte:head>
	<title>{data.sitename}</title>
	<meta property="og:title" content={data.sitename} />
  <meta name="twitter:title" content={data.sitename} />
</svelte:head>

<div class="uk-column-1-2@m uk-column-divider uk-padding">
	<h1>Home</h1>
	<p>Lorem, ipsum dolor.</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
		libero alias beatae praesentium debitis laborum hic consequatur magni
		esse distinctio cupiditate eaque tenetur sint, rerum reprehenderit
		dicta totam. Minus, eius.
	</p>
	<ul>
		<li>Dolorum.</li>
		<li>Praesentium est quasi qui.</li>
		<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
	</ul>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
		libero alias beatae praesentium debitis laborum hic consequatur magni
		esse distinctio cupiditate eaque tenetur sint, rerum reprehenderit
		dicta totam. Minus, eius.
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
		libero alias beatae praesentium debitis laborum hic consequatur magni
		esse distinctio cupiditate eaque tenetur sint, rerum reprehenderit
		dicta totam. Minus, eius.
	</p>
</div>
<div class="uk-margin-top uk-margin-bottom">
	<div
		class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small"
		uk-grid="masonry: true"
	>
		{#each data.products as item, index (`product-${index}`)}
			<div>
				<Product {...item} />
			</div>
		{/each}
	</div>
</div>