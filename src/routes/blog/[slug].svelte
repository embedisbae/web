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
        <div class="container text-justify mb-4">
            <a rel=prefetch class="btn bg-primary text-white rounded-pill font-weight-bold" href='blog'><i class="fas fa-chevron-circle-left"></i> Back</a>
            <a class="btn bg-primary text-white rounded-pill font-weight-bold ml-1 mr-1" href="https://www.facebook.com/sharer/sharer.php?u=https://together.codes/blog/{post.slug}"  style="background-color: #1778F2 !important; height: 38px !important; width: 38px !important;"><i class="fab fa-facebook-f"></i></a>
            <a class="btn bg-primary text-white rounded-pill font-weight-bold" href="https://twitter.com/share?url=https://together.codes/blog/{post.slug}" style="background-color: #1da1f2 !important; height: 38px !important; width: 38px !important;"><i class="fab fa-twitter"></i></a>
            <h1 class="font-weight-bold mt-4">{post.title}</h1>
            <span class="text-muted">Authors: {#each post.authors as author}<Badge class="rounded-pill badge-primary ml-2" style="font-size: 1rem !important;">{author}</Badge>{/each}</span>
            <p class='content'>
                {@html post.html}
            </p>
        </div>
    </div>
</section>
