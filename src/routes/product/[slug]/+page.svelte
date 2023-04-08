<script>
  export let data
  
  let {description, image, price, title} = data.product

</script>

<svelte:head>
  <title>{title} - {data.sitename}</title>
  <meta property="og:title" content={`${title} - ${data.sitename}`} />
  <meta name="twitter:title" content={`${title} - ${data.sitename}`} />
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta name="twitter:description" content={description} />
  <meta property="og:image" content={image.src} />
  <meta name="twitter:image" content={image.src} />
</svelte:head>

<div class="uk-padding">
  <div class="uk-flex uk-flex-wrap">
    <div>
      <h1>{title}</h1>
      <p class="uk-heading-bullet">{description}</p>
    </div>
    <div class="uk-margin-auto-left uk-text-center">
      <a class="uk-button uk-button-primary uk-text-large uk-border-rounded uk-box-shadow-medium">
        Purchese
        <hr class="uk-margin-remove" />
        {price}
      </a>
    </div>
  </div>
  <img
    class="uk-align-center uk-border-rounded uk-box-shadow-medium"
    {...image}
  />
</div>