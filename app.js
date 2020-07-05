var express = require('express');
var http = require('http');
var path = require('path');
var static = require('serve-static');


var app = express();

app.use(static(path.join(__dirname, '/')));

app.set('port', process.env.PORT || 3000);
app.get('/',function(req,res){

});

app.use(function(req,res,next){

    var input_text = req.query.search;
    console.log(input_text + "을 검색하셨습니다.");
    res.redirect("/result.html?search="+input_text);
    next();
});
app.use(function(req,res,next){
    console.log("다음");
    next();
})
app.use(function(req,res,next){
    var result_text = req.query.search;
    console.log(result_text + "을 검색하셨습니다.");
    
});





//서버 
http.createServer(app).listen(app.get('port'),function(){
    console.log('Server START '+ app.get('port'));
});