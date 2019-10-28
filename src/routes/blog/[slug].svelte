<script context="module">
	export async function preload({ params, query }) {
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
	export let post;
import { Button } from 'sveltestrap';
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

    .back-button {
        color: white;
        text-decoration: none;
    }

    h1.title {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		margin: 0 auto;
	}
    p {
		margin: 1em auto;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1 class="title">{post.title}</h1>

<p class='content'>
	{@html post.html}
</p>

<a rel=prefetch class="back-button" href='blog'>
    <Button color="primary">Back to all posts
    </Button>
</a>
