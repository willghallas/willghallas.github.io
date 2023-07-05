const http = require("http");
const fs = require('fs').promises;
const host = 'localhost';
const port = 8000;

const htmlListener = function (req,res) {
    fs.readFile(__dirname + '/layout.html')
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            switch (req.url) {
                case "/will":
                    res.writeHead(200);
                    res.end(contents);
                    break;
                case "/brooke":
                    res.writeHead(200);
                    res.end(contents);
                    break;
                default:
                    res.writeHead(404);
                    res.end(JSON.stringify({error: "pick a person"}));
            };
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

const server = http.createServer(htmlListener);
server.listen(port, host, () => {
    console.log('Server be running arghh');
});