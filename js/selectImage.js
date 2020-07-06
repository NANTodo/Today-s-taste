var food_name;
if(input_text[1]=="한식"){
    document.getElementById('picture').src=logo_info()
        function logo_info() {
        var img_src;
            img_src = './images/chocolate.jpg';
        return img_src;
        }
    food_name = "초콜릿";

}else if(input_text[1]=="신맛"){
    document.getElementById('picture').src=logo_info()
    function logo_info() {
    var img_src;
        img_src = './images/orange.jpg';
    return img_src;
    }
    food_name = "오렌지";
}else{
    food_name="세종대";
}