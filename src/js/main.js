// header fixed
$(window).scroll(function () {
    var header = $('.header');
    if ($(window).scrollTop() >= 100) {
        header.addClass('header--active');
    } else {
        header.removeClass('header--active');
    }
});
// SLIDER SPEAKERS REVIEWS
$(document).ready(function () {
    var sliderReviews = $('.reviews_slider');
    sliderReviews.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


});


/*==============PARALLAX ===================*/


$(window).scroll(function () {
    var st = $(this).scrollTop();

    /*=======study======*/
    $('.container--study__title ').css({
        "transform": "translate(0%, " + -st / 50 + "%"
    });
    $('#cloud-study').css({
        "transform": "translate(0%, " + st / 30 + "%"
    });

    $('#birds-study').css({
        "transform": "translate(0%, " + -st / 40 + "%"
    });
    /*====experts====*/
    $('.image-clouds-expert-section').css({
        "transform": "translate(0%, " + st / 30 + "%"
    });
    /*=====programme=*/
    $('.clouds-image-programme').css({
        "transform": "translate(0%, " + -st / 60 + "%"
    });
});


/*==========youtube========*/

$(function () {
    $(".youtube").each(function () {
        // Based on the YouTube ID, we can easily find the thumbnail image
        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

        // Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', {'class': 'play'}));

        $(document).delegate('#' + this.id, 'click', function () {
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&showinfo=0&list=PLI2GnEQsXmxtmknxfc8wpMWCsX5jFtrhR";
            if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

            // The height and width of the iFrame should be the same as parent
            var iframe = $('<iframe/>', {
                'frameborder': '0',
                'src': iframe_url,
                'width': $(this).width(),
                'height': $(this).height()
            })

            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).replaceWith(iframe);
        });
    });
});

/*==========//youtube========*/

$(document).ready(function () {
    $(window).on('resize', function () {
        if ($(window).width() <= 480) {
            $('.container--programme__list').addClass('study-carousel');
            $('.container--programme__list').addClass('owl-carousel');
        }
        else {
            $('.container--programme__list').removeClass('study-carousel');
            $('.container--programme__list').removeClass('owl-carousel');
        }
    })
    .trigger('resize');

    var sliderStudy = $('.study-carousel');
    sliderStudy.owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navSpeed:500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

});

$(document).ready(function () {


});



