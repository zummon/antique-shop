<script>
	export let image, slug, title, price
</script>

<a href={`/product/${slug}`}
	class="uk-display-block uk-inline-clip uk-transition-toggle uk-border-rounded uk-box-shadow-medium"
	uk-tooltip={`${title} ${price}`}
>
	<img
		class="uk-transition-scale-up uk-transition-opaque"
		alt=""
		{...image}
	/>
</a>