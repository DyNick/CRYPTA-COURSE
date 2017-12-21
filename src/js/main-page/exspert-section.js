$(document).ready(function (){
/*    var id = '';
    $('.item-image--expert-section').on('click', function (e) {

        var popupId = $(this).attr("data-id");
        console.log(popupId);
        console.log(".video-popup #" + popupId);
         $(".video-popup #" + popupId).addClass('_visible');






    });*/
    $(function() {
        //----- OPEN
        $('[data-popup-open]').on('click', function(e)  {
            var targeted_popup_class = jQuery(this).attr('data-popup-open');
            $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

            e.preventDefault();
        });

        //----- CLOSE
        $('[data-popup-close]').on('click', function(e)  {
            var targeted_popup_class = jQuery(this).attr('data-popup-close');
            $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

            e.preventDefault();
        });
    });

    var owlExperts = $('.owl-carousel');
    owlExperts.owlCarousel({
        loop:true,
        margin:20,
        navSpeed:500,
        nav:true,
        items:4
    });



});

