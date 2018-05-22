//= partials/jquery.min.js
//= partials/slick.min.js
//= partials/jquery.arcticmodal-0.3.min.js
//= partials/rating.js
//= partials/jquery.formstyler.js

$(function () {
    $('.js-like').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.js-accardion').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.popap_box').click(function() {
        $('#modalbox_' + $(this).data('body')).arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#000'
                }
            }
        });
    });

    $('.js-reviews').slick({
        dots: false,
        arrows: true,
        infinite: true,
        mobileFirst: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick"
            },
            {
                breakpoint: 425,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.js-star').rating();

    $('input[type=checkbox],input[type=file], select').styler();
    
    $('.js-select').on('click', function (e) {
        e.preventDefault();
        $('.basket__item').each(function() {
            if ( $('.basket__check').attr('checked')) {
                $('.basket__check').attr('checked', false).trigger('refresh');
            } else {
                $('.basket__check').attr('checked', 'checked').trigger('refresh');
            }
        });
    });

    $('.js-delet-all').on('click',function (e) {
        e.preventDefault();
        $('.select-all').attr('checked', false).trigger('refresh');
        $('.basket__item').each(function() {
            $('.basket__check').attr('checked', false).trigger('refresh');
        });
    });
});

