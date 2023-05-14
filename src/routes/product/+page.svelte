<script>
	import Product from '$lib/Product.svelte';
	export let data 
  	let title = 'Product'
</script>

<svelte:head>
	<title>{title} - {data.sitename}</title>
	<meta property="og:title" content={`${title} - ${data.sitename}`} />
	<meta name="twitter:title" content={`${title} - ${data.sitename}`} />
</svelte:head>

<div class="uk-margin-top uk-margin-bottom" uk-filter="target: .js-filter">
	<ul class="uk-subnav uk-subnav-divider uk-flex-center">
		<li class="uk-active" uk-filter-control>
			<a href="#">All</a>
		</li>
		{#each data.categories as text, index (`category-${index}`)}
			<li uk-filter-control="[data-category='{text}']">
				<a href="#">{text}</a>
			</li>
		{/each}
	</ul>
	<div
		class="js-filter uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small"
		uk-grid="masonry: true"
	>
		{#each data.products as item, index (`product-${index}`)}
			<div data-category={item.category}>
				<Product {...item} />
			</div>
		{/each}
	</div>
</div>