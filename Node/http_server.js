var http = require('http');

function myfunction(request, require) {
    console.log(request);
    response.writeHeader(200, {'Content Type': 'Text plain'});
    response.write('<html><body><h1>Mali</h1></body></html>');
    response.end();
}

http.createServer(myfunction).listen(8000);
console.log('Sunucu çalışıyor');
