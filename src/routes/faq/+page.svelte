<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} - {data.sitename}</title>
	<meta property="og:title" content={`${data.title} - ${data.sitename}`} />
	<meta name="twitter:title" content={`${data.title} - ${data.sitename}`} />
</svelte:head>

<div class="md:columns-2 prose max-w-none mb-4 lg:mb-8">
	<h1>{data.title}</h1>
	<h3>What is my name?</h3>
	<p>Lorem ipsum dolor.</p>
	<h3>What I really do?</h3>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sint
		tempora nemo dicta iusto ab eligendi, atque iure quae asperiores.
	</p>
	<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, culpa?</h3>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum qui
		voluptatem quod optio, error amet officiis ut provident quasi eius. Quisquam
		beatae nihil, illo aliquam iusto eveniet officia consectetur voluptate
		consequuntur, similique cum blanditiis voluptatibus exercitationem quis
		fugit explicabo.
	</p>
</div>
