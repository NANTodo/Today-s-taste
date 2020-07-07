var food_name;
if(input_text[1]=="한식"){
    document.getElementById('picture').src=logo_info()
        function logo_info() {
        var img_src;
            img_src = './images/chocolate.jpg';
        return img_src;
        }
    food_name = "초콜릿";

    // 인스타그램 기능 추가
    document.getElementById('insta').src='//lightwidget.com/widgets/fd6fc210edad5d65bde6dcd293e5c489.html';

}else if(input_text[1]=="신맛"){
    document.getElementById('picture').src=logo_info()
    function logo_info() {
    var img_src;
        img_src = './images/orange.jpg';
    return img_src;
    }
    food_name = "오렌지";

    document.getElementById('insta').src='//lightwidget.com/widgets/fc211152eb9450a49ddddbc1be37b435.html';
}else{
    food_name="세종대";
}
