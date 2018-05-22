//= partials/jquery.min.js
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
});

