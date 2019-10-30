// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
    {
        title: 'Hello, World! [30/10/19]',
        slug: 'hello-world',
        short: 'We recently just deployed the website! Learn what we did and how we did it.',
        html: `
      <p>Welcome to the official code::together website! Our Contributors have been working hard to get it up and running.</p>
      <h3>Welcome to code::together</h3>
      <p>Thanks to <strong><a href="https://github.com/codedtogether/web/graphs/contributors">our amazing contributors</a></strong> this website was created.<br>
      We've developed this site as a way to find our server and read our latest blog posts, in a simple and easy way.<br>
      Soon, you'll see more blog posts appear over <a href="/blog">here</a>. These posts will be anything releated to tech or code::together.<br>
      If you have any feedback or questions, feel free to talk in the <a href="">#repo-talk</a> channel in the code::together server.
      </p>
      <p>The code for this site will live at <strong><a href="https://github.com/codedtogether/web">codedtogether/web</a></strong>.</p>
    `
    }
];

posts.forEach(post => {
    post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
