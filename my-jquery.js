$(function () {
    // $('button').click(function(){
    //     // $('h1').slideToggle(1000);
    //     $('h1').slideToggle('fast');
    // })
    // x = () => $('h1').slideToggle(1000, x);
    // x();
    // $('h1').fadeToggle(1000, function(){
    //     $('h1').delay(1000).fadeToggle(1000)
    // })
    // $("body").text("arfaesrd")
    // $("body").empty("arfaesrd")
    // $('body').html("HEALLO");
    // $.get("https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg", function (data, status) {
    //     $('img').attr('src', 'data');
    // })function LoadImage() {
    var img = new Image(),
        x = document.getElementById("image");
    console.log(x);
    img.onload = function () {
        x.src = img.src;
    };

    img.src = "https://wallpaperaccess.com/download/hd-30100"
})