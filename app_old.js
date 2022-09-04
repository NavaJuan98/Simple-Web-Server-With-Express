const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    res.write('Update Server');
    res.end();
});

server.listen(port)