module.exports = {
    HTML: function() {
      return `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - </title>
        <meta charset="utf-8">
          <style>
          @import './views/home.css';
          #container{
            background-color:powerblue;
            display:flex;
          }
          #item{
            color:white;
            width:200px;
          }
            div {
              border: 1px solid red;
            }
          </style>
      </head>
      <body>
      <h1><a href="/">관리자</a></h1>
    <div id="container" style="margin-top: 100px;">
      <div id="item">
     
      </div>
      <div id="item">
    
      </div>
      <div id="item" style="width:700px; color:Black;">
        
      </div>
    </div>
      </body>
      </html>
      `;
    }
  }
  