<script>
	import "uikit/dist/css/uikit.min.css";
	import "uikit/dist/js/uikit.min.js";
	import "uikit/dist/js/uikit-icons.min.js";
	import "@fontsource/sacramento";
	import { page } from "$app/stores";

	export let data;
</script>

<div class="uk-padding uk-visible@s" />
<div
	class="uk-container uk-container-small uk-background-muted uk-border-rounded uk-box-shadow-large"
>
	<!-- Header -->
	<div>
		<h2
			class="uk-margin-top uk-text-muted uk-text-center"
			style="font-family: 'Sacramento', cursive"
		>
			{data.sitename}
		</h2>
		<ul class="uk-flex-center uk-tab">
			<li class={$page.url.pathname === "/" ? "uk-active" : ""}>
				<a href="/">Home</a>
			</li>
			<li class={$page.url.pathname === "/about" ? "uk-active" : ""}>
				<a href="/about">About</a>
			</li>
			<li class={$page.url.pathname.startsWith("/product") ? "uk-active" : ""}>
				<a href="/product">Product</a>
			</li>
			<li class={$page.url.pathname === "/faq" ? "uk-active" : ""}>
				<a
					href="/faq"
					uk-tooltip="title: Frequently Asked Questions; pos: bottom">FAQ</a
				>
			</li>
		</ul>
	</div>
	<!-- Body -->
	<slot />
	<!-- Footer -->
	<div class="uk-text-center uk-margin-large-top uk-margin-large-bottom">
		<a
			class="uk-link-reset uk-text-large"
			href="https://zummon.page/"
			target="_blank"
			style="font-family: 'Sacramento', cursive"
		>
			Made by zummon
		</a>
	</div>
</div>
<div class="uk-padding uk-visible@s" />
