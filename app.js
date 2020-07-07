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

app.get('/result', function(req, res) {
    console.log("두번째화면");
    res.sendFile(path.join(__dirname+'/result.html'));//이걸로 인해서 main2.html 불러옴. 물론 html form태그에서 action 경로를 해줘야 이동함.
    var data = req.query.search;
    var search_text = data.split("#");

    for(var i=1;i<search_text.length;i++){
        console.log(search_text[i]);//인덱스를 1부터 해줘야함.
    }
    //검색할 때 어떻게 sql에서 찾아서 사진을 보여줄건지. 순서 상관x 너무 어렵다..
    db.query('select * from tastetag;',function (err, rows, fields) {
        var wordAry = new Array();
        var q=0;
        var p=0;
        var cnt=-1;
        if (!err) {
            //sql에서 해당하는거 찾아줌.
            for(var j=0;j<search_text.length;j++){//검색 단어의 갯수
                for(var i=0;i<rows.length;i++){//tastetag행의 갯수
                    if(search_text[j+1]==rows[i].tname){//검색 단어와 tastetag의 tname이 같으면 ex) 한식(search_text) == 한식(tname)
                        console.log("tname : " + rows[i].tname + " tcode : " + rows[i].tcode);//tname에 해당하는 tcode를 구별할수 있게됨
                        wordAry[q]=rows[i].tcode;
                        console.log("wordAry "+wordAry[q]);
                        q++;
                    }
                }
                cnt++;//
             }
             console.log(cnt);
            
             if(cnt==1){//단어1개
                for(var ii=1;ii<=5;ii++){
                    db.query('select * from food where taste?=?',[ii,wordAry[p]],function (err, rows2, fields) {
                        for(var k=0;k<rows2.length;k++){//k for문
                        console.log("검색결과 :  " + rows2[k].foodname +" "+rows2[k].taste1);//곱
                        }//k for문
                    
                    });
                }
            }//단어 한개
            else if(cnt==2){//단어 한개
                q=0;
                if(wordAry[q]>wordAry[q+1]){
                    var temp = wordAry[q];
                    wordAry[q] = wordAry[q+1];
                    wordAry[q+1] =temp;
                }
                for(var i=1;i<=5;i++){
                    for(var j=1;j<=5;j++){
                        db.query('select * from food where taste?=? and taste?=?',[i,wordAry[p],j,wordAry[p+1]],function (err, rows2, fields) {
                            for(var k=0;k<rows2.length;k++){//k for문
                             console.log("검색결과 :  " + rows2[k].foodname +" "+rows2[k].taste1);//곱
                            }//k for문
                           
                        });
                    }
                }
               
            }//단어 두개
            else if(cnt==3){//단어 3개
               
               for(var i=0;i<cnt-1;i++){//버블정렬
                   for(var j=0;j<cnt-1;j++){
                       if(wordAry[j]>wordAry[j+1]){
                           var temp = wordAry[j+1];
                           wordAry[j+1] =wordAry[j];
                           wordAry[j] = temp;
                       }
                   }
               }
               for(var i=1;i<=5;i++){
                    for(var j=1;j<=5;j++){
                        for(var q=1;q<=5;q++){
                            db.query('select * from food where taste?=? and taste?=? and taste?=?',[i,wordAry[p],j,wordAry[p+1],q,wordAry[p+2]],function (err, rows2, fields) {
                                for(var k=0;k<rows2.length;k++){//k for문
                                 console.log("검색결과 :  " + rows2[k].foodname +" "+rows2[k].taste1);//곱
                                }//k for문
                               
                            });
                        }
                    }
                }
                
            }//단어 3개
            else if(cnt==4){//단어 4개
               
                for(var i=0;i<cnt-1;i++){//버블정렬
                    for(var j=0;j<cnt-1;j++){
                        if(wordAry[j]>wordAry[j+1]){
                            var temp = wordAry[j+1];
                            wordAry[j+1] =wordAry[j];
                            wordAry[j] = temp;
                        }
                    }
                }
                

                for(var i=1;i<=5;i++){
                    for(var j=1;j<=5;j++){
                        for(var q=1;q<=5;q++){
                           for(var o=1;o<=5;o++){
                            db.query('select * from food where taste?=? and taste?=? and taste?=? and taste?=?',[i,wordAry[p],j,wordAry[p+1],q,wordAry[p+2],o,wordAry[p+3]],function (err, rows2, fields) {
                                for(var k=0;k<rows2.length;k++){//k for문
                                 console.log("검색결과 :  " + rows2[k].foodname +" "+rows2[k].taste1);//곱
                                }//k for문
                               
                            });
                           }
                        }
                    }
                }
            
             }//단어 4개
             else if(cnt==5){//단어 5개
               
                for(var i=0;i<cnt-1;i++){//버블정렬
                    for(var j=0;j<cnt-1;j++){
                        if(wordAry[j]>wordAry[j+1]){
                            var temp = wordAry[j+1];
                            wordAry[j+1] =wordAry[j];
                            wordAry[j] = temp;
                        }
                    }
                }
                
                for(var i=1;i<=5;i++){
                    for(var j=1;j<=5;j++){
                        for(var q=1;q<=5;q++){
                           for(var o=1;o<=5;o++){
                                for(var c=1;c<=5;c++){
                                    db.query('select * from food where taste?=? and taste?=? and taste?=? and taste?=? and taste?=?',[i,wordAry[p],j,wordAry[p+1],q,wordAry[p+2],o,wordAry[p+3],c,wordAry[p+4]],function (err, rows2, fields) {
                                        for(var k=0;k<rows2.length;k++){//k for문
                                         console.log("검색결과 : " + rows2[k].foodname +" "+rows2[k].taste1);//곱
                                        }//k for문
                                       
                                    });
                                }
                           }
                        }
                    }
                }

                
             }//단어 5개

                
          
           
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
