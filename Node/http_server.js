var http = require('http');
//Nodejs http modülünün içinde bir obje tanımlayıp listen metodunu çağırdık. Boş portum 8888 olduğu için onu kullandık.
function myfunction(request, response) {
    console.log(request);
    response.writeHeader(200, {'Content-Type': 'text-plain'});//sunucuya paket gönderiyoruz

    var variable='<html><body><h1>Mali:<br><hr>trial code is in progress</h1></body></html>';
    response.write(variable);

    var item="<html><body><h1>"

    for (var i = 0; i < 10; i++) {
        item+=i +". Work hard, be shark in the ocean<hr>";
    }

    item+="</h1></body></html>";
    response.write(item);
    response.end();
    //Kodları sunucu tarafında yazılan kodu sunucudan html olarak iatemciye gönderiyoruz.
    //Sayfada inspect yapınca bizim kodumuz gözükmez, arka planda kodları çalıştırır ve sonucu gösterir
}

http.createServer(myfunction).listen(8888);
console.log('Sunucu çalışıyor');
