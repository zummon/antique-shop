<script>
	import Product from '$lib/Product.svelte';

	export let data
	
  let title = 'About'

</script>

<svelte:head>
	<title>{title} - {data.sitename}</title>
	<meta property="og:title" content={`${title} - ${data.sitename}`} />
  <meta name="twitter:title" content={`${title} - ${data.sitename}`} />
</svelte:head>

<div class="uk-column-1-2@m uk-column-divider uk-padding">
	<h1>{title}</h1>
	<p>
		<a
			class="uk-icon-button uk-margin-small-right"
			uk-icon="facebook"
			href="#"
		></a>
		<a
			class="uk-icon-button uk-margin-small-right"
			uk-icon="instagram"
			href="#"
		></a>
		<a
			class="uk-icon-button uk-margin-small-right"
			uk-icon="pinterest"
			href="#"
		></a>
		<a
			class="uk-icon-button uk-margin-small-right"
			uk-icon="twitter"
			href="#"
		></a>
		<a
			class="uk-icon-button uk-margin-small-right"
			uk-icon="youtube"
			href="#"
		></a>
	</p>
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
		recusandae. Vitae voluptates, ad ipsam itaque qui, doloremque,
		recusandae possimus sunt exercitationem ullam harum temporibus nulla.
		Praesentium est quasi qui. Dolorum.
	</p>
	<ul>
		<li>Dolorum.</li>
		<li>Praesentium est quasi qui.</li>
	</ul>
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