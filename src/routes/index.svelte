<svelte:head>
  <title>code::together</title>
</svelte:head>

<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
  import {
    Button, Card, CardBody, CardFooter, CardHeader,
    CardImg, CardSubtitle, CardText, CardTitle
  } from 'sveltestrap';
</script>

<style>
  .container-margin {
    margin-top: 10rem !important;
    margin-bottom: 10rem !important;
  }
  @media (max-width: 575.98px) {
    .container-margin {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    .display-3 {
      font-size: 2.5rem !important;
    }
  }
</style>

<section id="welcome">
  <div class="container container-margin text-center">
    <h1 class="display-3 font-weight-bold">Let's code, together!</h1>
    <p>Welcome to the official website for the Code Together project, it's an amazing place to learn from other developers
    and teach people things. With over 1500 people and new people joining every day you'll always find someone who can help
    you out.</p>
  </div>
</section>

<section id="blog" class="bg-light mt-5 h-100">
  <div class="container mt-5 pt-4 pb-4">
    <h3 class="font-weight-bold">Blog</h3>
    <div class="row">
      {#each posts as post}
        <!-- we're using the non-standard `rel=prefetch` attribute to
            tell Sapper to load the data for the page as soon as
            the user hovers over the link or taps it, instead of
            waiting for the 'click' event -->
        <div class="col-sm-4">
          <Card class="mb-3 border-0 shadow-lg">
            <CardBody>
              <CardSubtitle class="mb-2"><a rel='prefetch' class="h4 font-weight-bold" href='blog/{post.slug}'>{post.title}</a></CardSubtitle>
              <CardText class="mb-2">{post.short}</CardText>
              <a rel='prefetch' href="blog/{post.slug}" class="pt-2 pb-2 btn btn-large btn-block text-white font-weight-bold" style="background-color: #CE4B4C;">Read More</a>
            </CardBody>
          </Card>
        </div>
      {/each}
    </div>
  <div>
</section>

<section id="partners">
  <div class="container mt-5 text-center">
    <h3 class="font-weight-bold">Our Partners</h3>
    <div class="row mx-auto pt-2 pb-5">
      <div class="col-sm-2 text-center mx-auto">
        <a href="https://points.city"><img alt="Points Logo" src="https://points.city/images/logo/DefaultLarge.svg" style="filter:grayscale(100%);" width="70" height="70" draggable="false"></a>
      </div>
      <div class="col-sm-2 text-center mx-auto">
        <a href="https://file.coffee"><img alt="File.coffee Logo" src="/partners/logo.svg" style="filter:grayscale(100%);" width="70" height="70" draggable="false"></a>
      </div>
    </div>
  </div>
</section>
