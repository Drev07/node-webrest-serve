"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    console.log(req.url);
    // res.writeHead(200, { 'Content-Type': 'text/html'});
    // res.write('<h1>Hola mudo!!!!!</h1>');
    // res.end();
    // const data = { name: 'John Doe', age: 30, city: 'New york'};
    // res.writeHead(200,{ 'Content-Type': 'applecation/json'});
    // res.end( JSON.stringify(data));
    if (req.url === '/') {
        const htmlFile = fs_1.default.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlFile);
    }
    else {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.end();
    }
});
server.listen(8080, () => {
    console.log('Server running on port 8080');
});
