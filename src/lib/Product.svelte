<script>
	let props = $props();
</script>

<abbr class="" title={`${props.title} ${props.price}`}>
	<a
		class="flex items-center overflow-clip transition rounded shadow-md group max-h-80 md:max-h-none"
		href={`/product/${props.slug}`}
	>
		<img
			class="group-hover:scale-110 group-focus:scale-110 object-cover object-center h-full w-full block transition duration-300"
			src={props.imageSrc}
			alt={props.imageAlt}
		/>
	</a>
</abbr>
