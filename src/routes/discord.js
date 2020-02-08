export function get (req, res) {
    let url = 'https://discord.gg/UqjGnc3';
    res.writeHead(302, {
        Location: url
    });
    res.end();
}
