<script context="module">
    export function preload() {
        return this.fetch('blog.json').then(r => r.json()).then(posts => {
            return { posts };
        });
    }
</script>

<script>
    import {
        Card,
        CardBody,
        CardSubtitle,
        CardText,
    } from 'sveltestrap';

    export let posts;
</script>

<style>
    ul {
        margin: 1em auto;
        line-height: 1.5;
    }
    h1.title {
        font-size: 2.8em;
        text-transform: uppercase;
        font-weight: 700;
        margin: 0 0 0.5em 0;
        margin: 0 auto;
    }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container">
  <h2 class="font-weight-bold">Let's start reading!</h2>
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
</div>
