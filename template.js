module.exports = {
    HTML: function(title) {
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
              <header id="header">#오늘의 맛<br></header>
              <!--쿼리스트링 파싱 관련 js-->
              <script type="text/javascript" src="./js/queryString.js">
                 
              </script>
                  
                      
              <!--사진-->
              <aside>${title}<br>
                  <img id="picture" src="">
                  <script type="text/javascript" src="./js/selectImage.js"></script>
                 
              </aside>
      
             
      
              <!--맵-->
              <article>
                  <!--카카오 맵-->
                  <a href="https://map.kakao.com/?urlX=449605&urlY=1112610&urlLevel=8&map_type=TYPE_MAP&map_hybrid=false"
                      target="_blank">길찾기</a>
                  <div class="map_wrap">
                      <div id="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>
      
                      <div id="menu_wrap" class="bg_white">
                          <div class="option">
                              <div>
                                  <form onsubmit="searchPlaces(); return false;">
                                      키워드 : <input type="text" value="세종대" id="keyword" size="15">
                                      <script>//카카오 맵에서 검색하기 글씨를 바꿔줌.
                                          $('#keyword').val(food_name);
                                      </script>
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
      
              <!--공유링크-->
              <footer>공유 링크
                  <div class="footer_icon">
                      <li><a href="#"><i class="fa fa-html5" aria-hidden="true"></i><span>HTML5</span></a></li>
                      <li><a href="#"><i class="fa fa-github" aria-hidden="true"></i><span>Github</span></a></li>
                      <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i><span>Facebook</span></a></li>
                      <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a></li>
                  </div>
              </footer>
      
          </div>
      </body>
      
      </html>
      `;
    },ANSWER:function(answer){
      this.someVar = answer;
    }
  }
  