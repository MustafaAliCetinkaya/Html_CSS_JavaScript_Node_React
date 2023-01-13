var express=require('express');
var app=express();

var fs=require('fs');

app.get('/list',function (request,response) {
    //response.send('Calling which list the users');
    fs.readFile('users.json','utf-8',function (err,data){
        console.log(data)
        response.end(data);
    });
});
app.get('/add',function (request,response) {
    response.end("Calling which add the users");
});
app.get("/remove",function (request,response) {
    response.end("Calling which remove the users");
});


var server=app.listen(8888, function () {
    console.log("Sunucu çalışıyor");
})