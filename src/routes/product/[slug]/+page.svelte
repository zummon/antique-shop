<script>
	import { store } from '../../../lib/store.svelte'

	let { data } = $props();

	let { description, imageSrc, imageAlt, price, title } = data.product;
</script>

<svelte:head>
	<title>{title} - {data.sitename}</title>
	<meta property="og:title" content={`${title} - ${data.sitename}`} />
	<meta name="twitter:title" content={`${title} - ${data.sitename}`} />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />
	<meta property="og:image" content={imageSrc} />
	<meta name="twitter:image" content={imageSrc} />
</svelte:head>

<div class="mb-4 lg:mb-8">
	<h1 class="text-4xl text-black mb-4">{title}</h1>
	<p class="">{description}</p>
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
			{price}
		</span>
	</button>
</div>

<img class="mx-auto rounded shadow-md" src={imageSrc} alt={imageAlt} />
