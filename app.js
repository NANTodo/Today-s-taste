var express = require('express');
var http = require('http');
var path = require('path');
var static = require('serve-static');
var fs = require('fs');
var template = require('./template.js');

var app = express();

app.use(static(path.join(__dirname, '/')));

app.set('port', process.env.PORT || 3000);
app.get('/',function(req,res){
    res.render('indext.html');
});

app.use(function(req,res,next){

    var input_text = req.query.search;
    var input_split = input_text.split('#');

    const book = {
        word1: input_split[1],
        word2: input_split[2]
    }

    const bookJSON = JSON.stringify(book)

    const parseData = JSON.parse(bookJSON)

    console.log(parseData.word1+","+parseData.word2);

    res.redirect("/result.html?search="+input_text);
    next();
    var result_text = req.query.search;
  
    console.log(result_text + "을 검색하셨습니다.");

});


app.get('/result.html',function(req,res){
     
    //
    fs.readdir('./', function(error, filelist){
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var html = template.HTML(title); 
        res.send(html);
      });


});





//서버 
http.createServer(app).listen(app.get('port'),function(){
    console.log('Server START '+ app.get('port'));
});