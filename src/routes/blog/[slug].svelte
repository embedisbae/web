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
  <div class="container">
    <a rel=prefetch class="back-button" href='blog'><Badge secondary class="rounded-pill pr-2" style="font-size: 1rem !important;"><i class="fas fa-arrow-circle-left"></i> Blog</Badge></a>
    <h1 class="font-weight-bold mt-4">{post.title}</h1>

    <p class='content'>
        {@html post.html}
    </p>
  </div>
</section>
