import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
    return {
        title: post.title,
        slug: post.slug,
        short: post.short,
        authors: post.authors
    };
}));

export function get (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(contents);
}
