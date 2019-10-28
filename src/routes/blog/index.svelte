<script context="module">
    export function preload() {
        return this.fetch('blog.json').then(r => r.json()).then(posts => {
            return { posts };
        });
    }
</script>

<script>
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

<h1 class="title">Let's start reading!</h1>

<ul>
    {#each posts as post}
        <!-- we're using the non-standard `rel=prefetch` attribute to
                tell Sapper to load the data for the page as soon as
                the user hovers over the link or taps it, instead of
                waiting for the 'click' event -->
        <li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
    {/each}
</ul>
