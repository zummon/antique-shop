<script>
	import { store } from '../../../lib/store.svelte'
	import { numerize } from '../../../lib/format.js'

	let { data } = $props();

	let { product } = data;
</script>

<svelte:head>
	<title>{product.title} - {data.sitename}</title>
	<meta property="og:title" content={`${product.title} - ${data.sitename}`} />
	<meta name="twitter:title" content={`${product.title} - ${data.sitename}`} />
	<meta name="description" content={product.description} />
	<meta property="og:description" content={product.description} />
	<meta name="twitter:description" content={product.description} />
	<meta property="og:image" content={product.imageSrc} />
	<meta name="twitter:image" content={product.imageSrc} />
</svelte:head>

<div class="mb-4 lg:mb-8">
	<h1 class="text-4xl text-black mb-4">{product.title}</h1>
	<p class="">{product.description}</p>
</div>

<div class="mb-4 lg:mb-8 text-right">
	<button
		class="bg-yellow-800 text-white p-2 px-10 text-2xl rounded shadow-md text-center" onclick={() => {
			store.cart.push(data.product)
		}}
	>
		<span class="font-light opacity-75">
			Purchase
		</span>
		<hr class="opacity-50" />
		<span class="font-custom font-bold">
			{product.cur}{numerize(product.price)}
		</span>
	</button>
</div>

<img class="mx-auto rounded shadow-md" src={product.imageSrc} alt={product.imageAlt} />
