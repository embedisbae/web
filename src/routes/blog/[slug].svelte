<script context="module">
    export async function preload({ params }) {
        // the `slug` parameter is available because
        // this file is called [slug].svelte
        const res = await this.fetch(`blog/${params.slug}.json`);
        const data = await res.json();

        if (res.status === 200) {
            return { post: data };
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<script>
    import { Badge } from 'sveltestrap';

    export let post;
</script>

<svelte:head>
    <title>{post.title} - code::together</title>
</svelte:head>

<section id="post">
  <div class="bg-light pt-5 pb-3">
    <div class="container text-justify mb-4" style="height: 68.5vh;">
      <a rel=prefetch class="back-button" href='blog'><Badge secondary class="rounded pr-2" style="font-size: 1rem !important;">Back</Badge></a>
      <h1 class="font-weight-bold mt-4">{post.title}</h1>

      <p class='content'>
          {@html post.html}
      </p>
    </div>
  </div>
</section>
