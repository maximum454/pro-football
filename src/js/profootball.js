//= partials/jquery.min.js
//= partials/ion.tabs.js
//= partials/slick.min.js
//= partials/jquery.arcticmodal-0.3.min.js
//= partials/jquery.formstyler.js


$(function () {
    $('input[type=checkbox],input[type=file], select').styler();
    $('.popap_box').click(function() {
        $('#modalbox_' + $(this).data('body')).arcticmodal({
            overlay: {
                css: {
                    backgroundColor: '#000'
                }
            }
        });
    });
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-50}, 1500);
    });

    $.ionTabs("#tabs_1");
});

