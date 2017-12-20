
/*==============PARALLAX ===================*/

$(document).ready(function () {
});
$(window).scroll(function () {
    var st = $(this).scrollTop();
      $('.container--study__title ').css({
      "transform" : "translate(0%, "+ st/2 +"%"
      });
    $('.cloud-study').css({
        "transform" : "translate(0%, "+ st/2 +"%"
    });

    $('.birds-study').css({
        "transform" : "translate(0%, "+ st/100 +"%"
    });



});