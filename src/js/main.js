// header fixed
$(window).scroll(function () {
    var header = $('.header');
    if ($(window).scrollTop() >= 100) {
        header.addClass('header--active');
    } else {
        header.removeClass('header--active');
    }
});

// HAMBURGER INDEX PAGE
var $hamburger = $(".hamburger"); // INDEX PAGE
var $menu = $('.nav');
$hamburger.on("click", function (e) {
    $hamburger.addClass("is-active");
    $menu.addClass('active-nav');
});
$('.close-button--menu').on('click', function () {
    $hamburger.removeClass('is-active');
    $menu.removeClass('active-nav');
})
// HAMBURGER INDEX PAGE END

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
    })
})


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
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
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


/*========close button==========*/
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
        navSpeed: 500,
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

/*=========checkbox==========*/
$(document).ready(function () {

    $('.checkbox--single').click(function () {
        var name = document.getElementById("checkAll");
        name.value = 0;
        $(name).prop('checked', false);

        function recalculate() {
            var sum = 0;
            $("input[type=checkbox]:checked").each(function () {
                sum += parseInt($(this).attr("value"));
            });
            $(".outputall").html(sum);
        }

        recalculate();

    });


    $("#checkAll").change(function () {
        $("input:checkbox").prop('checked', $(this).prop("checked"));

        if (this.checked) {
            $(this).val('3700');
        }
        else{
            $(this).val('0');
        }
        var single = parseInt($(this).attr("value"));
        $(".outputall").html(single);
    });



    $('#phone').mask('+00(000)000-00-00', {placeholder: "+38(___)___-__-__"});
});



$(document).ready(function () {
    $(window).on('resize', function () {
        if ($(window).width() <= 620) {
            $('.buy-price').addClass('by-carousel');
            $('.buy-price').addClass('owl-carousel');
        }
        else {
            $('.buy-price').removeClass('by-carousel');
            $('.buy-price').removeClass('owl-carousel');
        }
    })
        .trigger('resize');

    var sliderBy = $('.by-carousel');
    sliderStudy.owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navSpeed: 500,
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


/*======================ANIMATION==================*/

$(document).ready(function () {

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 10) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});