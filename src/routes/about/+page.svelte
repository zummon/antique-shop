<script>
	import Product from "../../lib/Product.svelte";

	export let data;
</script>

<svelte:head>
	<title>{data.title} - {data.sitename}</title>
	<meta property="og:title" content={`${data.title} - ${data.sitename}`} />
	<meta name="twitter:title" content={`${data.title} - ${data.sitename}`} />
</svelte:head>

<div class="md:columns-2 prose max-w-none mb-4 lg:mb-8">
	<h1>{data.title}</h1>
	<p>
		<a
			class="uk-icon-button uk-margin-small-right"
			uk-icon="facebook"
			href="#"
		/>
		<a
			class="uk-icon-button uk-margin-small-right"
			uk-icon="instagram"
			href="#"
		/>
		<a
			class="uk-icon-button uk-margin-small-right"
			uk-icon="pinterest"
			href="#"
		/>
		<a
			class="uk-icon-button uk-margin-small-right"
			uk-icon="twitter"
			href="#"
		/>
		<a
			class="uk-icon-button uk-margin-small-right"
			uk-icon="youtube"
			href="#"
		/>
	</p>
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, recusandae.
		Vitae voluptates, ad ipsam itaque qui, doloremque, recusandae possimus sunt
		exercitationem ullam harum temporibus nulla. Praesentium est quasi qui.
		Dolorum.
	</p>
	<ul>
		<li>Dolorum.</li>
		<li>Praesentium est quasi qui.</li>
	</ul>
</div>

<div class="sm:columns-2 md:columns-3 lg:columns-4">
	{#each data.products as item, index (`product-${index}`)}
		<div class="mb-4">
			<Product {...item} />
		</div>
	{/each}
</div>
