var express = require('express');
var http = require('http');
var path = require('path');
var static = require('serve-static');
var fs = require('fs');
var mysql = require('mysql');
var bodyParser = require('body-parser'); // body-parser를 bodyParser란 변수로 사용
var template = require('./template.js');
const { resolveSoa } = require('dns');
const { Console } = require('console');
var app = express();

//db 연결
var db = mysql.createConnection({
    host:'localhost',
    user:'taster',
    password:'taster',
    database:'taster'
});

db.connect();

// 이렇게 하면 public 아래에 있는 부분에 대해서 따로 디렉토리 설정을 하지 않아도 된다.
app.use(static(path.join(__dirname, '/')));


// express에 아래 모듈을 사용하겠다고 호출하는 부분
app.use(bodyParser.json()); // Json Parser
app.use(bodyParser.urlencoded({extended:true}));

// '/'로 들어오면 /public/main.html을 열어준다.
app.get('/', function(req, res) {
    console.log("첫번째화면");
    res.sendFile(path.join(__dirname+'/main.html'));
   
});
//라우터를 result로 설정  result.html으로 쓰면 안됨
//form 액션으로 인해 url이 http://localhost:3000/result?search=땡땡 이렇게 써진다. 그리고 라우터는 /result로 받는다.
//form 태그에서 action을 보면 result로 되었음. result.html이 아니라.
app.get('/result', function(req, res) {
    console.log("두번째화면");
    res.sendFile(path.join(__dirname+'/result.html'));//이걸로 인해서 main2.html 불러옴. 물론 html form태그에서 action 경로를 해줘야 이동함.
    var data = req.query.search;
    var input_text = data.split("#");

    console.log(input_text[1]);//인덱스를 1부터 해줘야함.

    db.query('select * from food;',function (err, rows, fields) {
        if (!err) {
            console.log(rows[0]);
            
           var result ='rows : ' + JSON.stringify(rows[0]) + '<br><br>';
          //  res.send(result);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }
    });
    
    

});




//서버 
app.listen(3000, function() {
    console.log("start!! express server port on 3000!!");
});
