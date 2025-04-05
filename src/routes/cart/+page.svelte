<script>
	import { store } from "../../lib/store.svelte.js";
	import { numerize } from "../../lib/format.js";
	import Product from "../../lib/Product.svelte";

	let totals = $derived.by(() => {
		let sum = {}
		store.cart.forEach((item) => {
			if (!sum[item.cur]) {
				sum[item.cur] = 0
			}
			sum[item.cur] += Number(item.price)
		})
		return Object.entries(sum)
	})
</script>

{#if store.cart.length}
	<div class="mb-4 lg:mb-8 text-center">
		<button
			class="bg-yellow-800 text-white p-2 px-10 text-2xl rounded shadow-md text-center" onclick={() => {
				
			}}
		>
			<span class="font-light opacity-75">
				Total
			</span>
			<hr class="opacity-50" />
			<span class="font-custom font-bold">
				{#each totals as [cur, total], index (`sum-${index}`)}
					{#if index > 0}<br>{/if}
					{cur}{numerize(total)}
				{/each}
			</span>
		</button>
	</div>

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
				<span class="">
					{item.cur}{numerize(item.price)}
				</span>
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
