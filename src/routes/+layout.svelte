<script>
	import "../app.css";

	export let data;
</script>

<div class="max-w-5xl mx-auto bg-zinc-50 rounded shadow-lg">
	<div class="p-4 lg:p-8">
		<h2
			class="text-zinc-500 text-4xl text-center mb-4 lg:mb-8"
			style="font-family: 'Sacramento', cursive"
		>
			{data.sitename}
		</h2>

		<ul
			class="flex gap-4 lg:gap-8 justify-center items-baseline border-b font-serif border-collapse"
		>
			<li
				class="border-collapse {data.pathname === '/'
					? 'border-b-2 border-sky-500'
					: ''}"
			>
				<a href="/">Home</a>
			</li>
			<li
				class="border-collapse {data.pathname === '/about'
					? 'border-b-2 border-sky-500'
					: ''}"
			>
				<a href="/about">About</a>
			</li>
			<li
				class="border-collapse {data.pathname.startsWith('/product')
					? 'border-b-2 border-sky-500'
					: ''}"
			>
				<a href="/product">Product</a>
			</li>
			<li
				class="border-collapse {data.pathname === '/faq'
					? 'border-b-2 border-sky-500'
					: ''}"
			>
				<abbr class="no-underline" title="Frequently Asked Questions">
					<a href="/faq">FAQ</a>
				</abbr>
			</li>
		</ul>
	</div>

	<div class="p-4 lg:p-8 font-serif">
		<slot />
	</div>

	<div class="p-4 lg:p-8 text-center">
		<span
			class="text-zinc-500 text-2xl"
			style="font-family: 'Sacramento', cursive"
		>
			Made by zummon (Teerapat Anantarattanachai)
		</span>
	</div>
</div>
