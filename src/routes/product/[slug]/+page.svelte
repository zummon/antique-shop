<script>
	export let data;

	let { description, image, price, title } = data.product;
</script>

<svelte:head>
	<title>{title} - {data.sitename}</title>
	<meta property="og:title" content={`${title} - ${data.sitename}`} />
	<meta name="twitter:title" content={`${title} - ${data.sitename}`} />
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />
	<meta property="og:image" content={image.src} />
	<meta name="twitter:image" content={image.src} />
</svelte:head>

<div class="mb-4 lg:mb-8">
	<h1 class="text-4xl text-black mb-4">{title}</h1>
	<p class="">{description}</p>
</div>

<div class="mb-4 lg:mb-8 text-right">
	<button
		class="bg-yellow-800 text-white p-2 px-10 text-2xl rounded shadow-md text-center"
	>
		<span class="">
			Purchese
		</span>
		<hr class="opacity-50" />
		<span class="font-custom">
			{price}
		</span>
	</button>
</div>

<img class="mx-auto rounded shadow-md" src={image.src} alt={image.alt} />
