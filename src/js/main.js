

// header fixed
$(window).scroll( function() {
    var header = $('.header');
    if( $(window).scrollTop() >= 100 ){
        header.addClass('header--active');
    } else {
        header.removeClass('header--active');
    }
});
// SLIDER SPEAKERS REVIEWS
$(document).ready(function() {
    var sliderReviews = $('.reviews_slider');
    sliderReviews.owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})




