
    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.fixed-top').css('background', '#fff');
    } else{
        $('.fixed-top').css('background', '#33b5e5');
    }
});


