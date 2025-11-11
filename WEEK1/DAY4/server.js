const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    res.setHeader('Content-Type', 'application/json'); //optional it tells the user that the content type is json

    if (pathname === '/echo') {
        res.writeHead(200);
        res.end(JSON.stringify(req.headers));
    }
    else if (pathname === '/slow') {
        const delay = parseInt(query.ms, 10) || 0;
        setTimeout(() => {
            res.writeHead(200);
            res.end(JSON.stringify({ message: 'Response delayed', delay }));
        }, delay);
    } 
    else if (pathname === '/cache') {
        res.writeHead(200, {
            'Cache-Control': 'public, max-age=3600', // Cache response for 1 hour
            'Expires': new Date(Date.now() + 3600 * 1000).toUTCString(), 
        });
        res.end(JSON.stringify({ message: 'Cache headers set' }));
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
