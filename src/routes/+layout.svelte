<script>
	import 'uikit/dist/css/uikit.min.css';
	import 'uikit/dist/js/uikit.min.js';
	import 'uikit/dist/js/uikit-icons.min.js';
	import '../app.css'
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	export let data
	
</script>

<div class="uk-padding uk-visible@s"></div>
<div class="uk-container uk-container-small uk-background-muted uk-border-rounded uk-box-shadow-large">
	<Header sitename={data.sitename} />
	<slot />
	<Footer />
</div>
<div class="uk-padding uk-visible@s"></div>



