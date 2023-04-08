<script>
	import { page } from '$app/stores';

	export let sitename
	
</script>

<div>
	<h2 class="uk-margin-top uk-text-muted uk-text-center" style="font-family: 'Sacramento', cursive">
		{sitename}
	</h2>
	<ul class="uk-flex-center uk-tab">
		<li class={$page.url.pathname === '/' ? 'uk-active' : ''}>
			<a href="/">Home</a>
		</li>
		<li class={$page.url.pathname === '/about' ? 'uk-active' : ''}>
			<a href="/about">About</a>
		</li>
		<li class={$page.url.pathname.startsWith('/product') ? 'uk-active' : ''}>
			<a href="/product">Product</a>
		</li>
		<li class={$page.url.pathname === '/faq' ? 'uk-active' : ''}>
			<a href="/faq" uk-tooltip="title: Frequently Asked Questions; pos: bottom">FAQ</a>
		</li>
	</ul>
</div>