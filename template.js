module.exports = {
    HTML: function(foodname) {
      return `
      <!DOCTYPE html>
      <html lang="kor">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>오늘의 맛</title>
      
      
          <!--스크립트 연동-->
         <script src="https://code.jquery.com/jquery-3.5.1.js" ></script>
         <script type="text/javascript" src="./js/bg.js"></script>
      
          <!--폰트-->
          <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Sunflower:wght@500&display=swap" rel="stylesheet">
      
          <!--css-->
          <link rel="stylesheet" href="./css/frame.css">
          <link rel="stylesheet" href="./css/footicon.css">
          <link rel="stylesheet" href="./css/style.css">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
          <link rel="stylesheet" href="./css/bg.css">
      
      
      
      </head>
      
      <body id ="gradient">
          <div id="wrap">
              <!--웹 제목-->
              <header id="header" style="line-height: 100px;">
                <div style="text-align: center;">
                  <a href="main.html" style="color: white; text-decoration: none; font-size: 25px;"><h1 id="logo">#오늘의 맛</h1></a>
                </div>
              </header>
              <!--쿼리스트링 파싱 관련 js-->
              <h1 id="searchword" style="color: white;  margin: 30px;">검색 결과</h1>
              <script type="text/javascript">
                var temp1 = decodeURI(location.href.split("?"));
                var temp =temp1.split(",");
                
                var data=temp[1].split("=");
               
                var input_text = data[1].split("%23");
                
                for(var i=0;i<input_text.length-1;i++){
                  var word = input_text[i+1].replace("+","");
                  $('#searchword').append(" #"+ word +" ");
                }
                </script>
      
      
              <!--사진-->
              <aside><h2 style="color: white; margin: 20px;">#${foodname}</h2><br>
                <div class="pic_background">
                  <img id="picture" src="">
                  <script>
                   var search_food = "${foodname}";
                   console.log(search_food);
                  </script>
                  <script type="text/javascript" src="./js/selectImage.js">
                  </script>
                </div>
              </aside>
      
      
      
      
              <!--맵-->
              <article>
                  <!--카카오 맵-->
                  <a href="https://map.kakao.com/?urlX=449605&urlY=1112610&urlLevel=8&map_type=TYPE_MAP&map_hybrid=false"
                      target="_blank" style="text-decoration: none;">
                      <h2 style="color: white; margin:-20px 20px 20px 20px; float: left;">음식점 찾기<img src="images/kakao_navi_logo.png" style="width: 30px; margin: 20px 0px -5px 10px;"/></h2>
                    </a><span><h4 style="color: white; margin-top: 10px">(클릭 시 경로 안내 창으로 이동)</h4></span>
                  <div class="map_wrap">
                      <div id="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>
      
                      <div id="menu_wrap" class="bg_white">
                          <div class="option">
                              <div>
                                  <form onsubmit="searchPlaces(); return false;">
                                      키워드 : <input type="text" value="세종대 ${foodname}" id="keyword" size="15">
                                      
                                      <button type="submit">검색하기</button>
                                  </form>
                              </div>
                          </div>
                          <hr>
                          <ul id="placesList"></ul>
                          <div id="pagination"></div>
                      </div>
                  </div>
                  <!--카카오 지도 관련 api js-->
                  <script type="text/javascript"
                      src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=7642406a0a283ec5fd5f99c156fbebb4&libraries=services">
                  </script>
                  <script type="text/javascript" src="./js/script.js"></script>
              </article>
      
              <!-- 타 사이트 검색결과 -->
              <div>
                <article style="width: 1200px; height:300px;">
                  <h2 style="color: white; margin: 20px;">이외 검색 결과</h2>
                  <div class="review_background">
                    <div class="review" style="width: 1150px; height: 400px;">
                      <!-- LightWidget WIDGET -->
                      <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
                      <iframe id="insta" src="" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>
                      <script src="./js/selectImage2.js"></script>
                    </div>
                  </div>
                </article>
              </div>
      
              <!--공유링크-->
              <footer>
                 
                  <!-- 검색창으로 다시 돌아가기 -->
                  <div style="text-align: center; color: white; margin: 50px auto;">
                    <h1>아직도 뭘 먹을 지 잘 모르겠다면?</h1>
                    <a href="main.html" style="text-decoration: none; color: yellow;">
                      <h2>"다시 검색하러 가기"</h2></a>
                  </div>
              </footer>
          </div>
      </body>
      
      </html>
      
      `;
    }
  }
  