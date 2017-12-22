
/*$(window).resize(function() {
if ($(window).width() > 998) {
    console.log('ddd');
    $('.container--programme__list').addClass('study-carousel')
};

});*/
$(window).resize(function() {
    if ($(window).width() < 960) {
        alert('Less than 960');
    }
    else {
        alert('More than 960');
    }
});