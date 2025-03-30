<script>
	import "../app.css";
	import { store } from '../lib/store.svelte'

	let { data, children } = $props();

	let navs = [
		{ path: '/', text: 'Home' },
		{ path: '/about', text: 'About' },
	]
</script>

<div class="max-w-5xl mx-auto bg-zinc-50 rounded shadow-lg">
	<div class="p-4 lg:p-8">
		<h2
			class="text-zinc-500 text-4xl text-center mb-4 lg:mb-8 cursor-default font-custom"
		>
			{data.sitename}
		</h2>

		<div
			class="flex flex-wrap justify-center items-baseline font-serif"
		>
			<div class="border-b-2 grow px-3 py-1 lg:px-5 lg:py-3">&nbsp;</div>
			{#each navs as item, index (`nav-${index}`)}
				<div
					class={`border-b-2 text-yellow-800 font-semibold px-3 py-1 lg:px-5 lg:py-3 ${data.pathname == item.path
						? 'border-yellow-800'
						: ''}`}
				>
					<a href={item.path}>{item.text}</a>
				</div>
			{/each}
			<div
				class={`border-b-2 text-yellow-800 font-semibold px-3 py-1 lg:px-5 lg:py-3 ${data.pathname.startsWith('/product')
					? 'border-yellow-800'
					: ''}`}
			>
				<a href="/product">Product</a>
			</div>
			<div
				class={`border-b-2 text-yellow-800 font-semibold px-3 py-1 lg:px-5 lg:py-3 ${data.pathname == '/faq'
					? 'border-yellow-800'
					: ''}`}
			>
				<abbr class="no-underline" title="Frequently Asked Questions">
					<a href="/faq">FAQ</a>
				</abbr>
			</div>
			{#if store.cart.length}
				<div class={`border-b-2 text-yellow-800 font-semibold px-3 py-1 lg:px-5 lg:py-3 ${data.pathname == '/cart'
				? 'border-yellow-800'
				: ''}`}>
					<a class="" href="/cart">
						Purchased {store.cart.length}
					</a>
				</div>
			{/if}
			<div class="border-b-2 grow px-3 py-1 lg:px-5 lg:py-3">&nbsp;</div>
		</div>
	</div>

	<div class="p-4 lg:p-8 font-serif">
		{@render children()}
	</div>

	<div class="p-4 lg:p-8 text-center">
		<span
			class="text-zinc-400 italic cursor-default font-serif font-light"
		>
			Made by <a class="underline" target="_blank" href="https://github.com/zummon">Teerapat Anantarattanachai</a><br>
			Something breaks, needs upgrade. Let me know
		</span>
	</div>
</div>
