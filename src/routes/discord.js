
export function get (req, res) {
    let url = 'https://discordapp.com/invite/HPK3hB6';
    res.writeHead(302, {
        Location: url
    });
    res.end();
}
