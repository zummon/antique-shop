<script>
	import { store } from "../../lib/store.svelte.js";
	import Product from "../../lib/Product.svelte";
</script>

{#if store.cart.length}
	<div class="sm:columns-2 md:columns-3 lg:columns-4">
		{#each store.cart as item, index (`product-${index}`)}
			<div class="mb-4">
				<button
					class="text-yellow-800 font-semibold mb-2"
					onclick={() => {
						store.cart.splice(index, 1);
					}}
				>
					Delete
				</button>
				<Product {...item} />
			</div>
		{/each}
	</div>
{:else}
	<div class="text-center">
		Your cart is empty <br />go to
		<a class="text-yellow-800 font-semibold" href="/product">buy something.</a>
	</div>
{/if}
