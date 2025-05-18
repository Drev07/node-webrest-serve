import fs from 'fs';
import http2 from 'http2';

const server = http2.createSecureServer({
    key: fs.readFileSync('/keys/server.key'),
    cert:fs.readFileSync('/keys/server.crt'),
}, ( req, res) => {

    console.log(req.url);

    // res.writeHead(200, { 'Content-Type': 'text/html'});
    // res.write('<h1>Hola mudo!!!!!</h1>');
    // res.end();

    // const data = { name: 'John Doe', age: 30, city: 'New york'};
    // res.writeHead(200,{ 'Content-Type': 'applecation/json'});
    // res.end( JSON.stringify(data));

    if( req.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end( htmlFile )
        return;
        
    }

    if( req.url?.endsWith('.js') ){
        res.writeHead(200, {'content-type': 'aplication/javascript'
        });
    }else if( req.url?.endsWith('.css')) {
          res.writeHead(200, {'content-type': 'aplication/css'
        });
    }

    const  responseContent = fs.readdirSync(`./public${ req.url }`, 'utf-8');
    // res.end(responseContent);
});

server.listen(8080, () => {
    console.log('Server running on port 8080')
});