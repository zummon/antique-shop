<script>
	export let image, slug, title, price;
</script>

<abbr class="" title="{title} {price}">
	<a
		class="flex items-center overflow-clip transition rounded shadow-md group max-h-80 md:max-h-none"
		href="/product/{slug}"
	>
		<img
			class="group-hover:scale-110 group-focus:scale-110 object-cover object-center h-full w-full block transition duration-300"
			src={image.src}
			alt={image.alt}
		/>
	</a>
</abbr>
