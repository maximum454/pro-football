//= partials/jquery.min.js
//= partials/ion.tabs.js
//= partials/slick.min.js
//= partials/jquery.arcticmodal-0.3.min.js
//= partials/jquery.formstyler.js
//= partials/masonry.pkgd.js

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('#menu-fix').addClass("fix");
            $('.contact-us').addClass("top");
        } else {
            $('#menu-fix').removeClass("fix");
            $('.contact-us').removeClass("top");
        }
    });

    $('input[type=checkbox],input[type=file], select').styler();

    $('.popap_box').click(function () {
        $('#modalbox_' + $(this).data('body')).arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#000'
                }
            }
        });
    });
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 50}, 1500);
    });


    $.ionTabs("#tabs_1, #tabs_2, #tabs_3", {
        type: "storage",
        onChange: function (obj) {

        }
    });

    $('.js-map-slider').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.js-slider').slick({
        autoplay: false,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        cssEase: 'linear'
    });


});

