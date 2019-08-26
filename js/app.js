$(function () {

    // Detect Mobile
    var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);
    
    if ($('.swipe-container').length && !isMobile) {
        $('.swipe-item').addClass('swipe-open');
    }

    /* MIT License: https://www.cssscript.com/detect-finger-swipe-events-javascript-pure-swipe/ */

    if ($('.swipe-container').length > 0) {
        if (isMobile) {
            $('.swipe-content').on('swiped-right', function (e) {
                $(this).parent().removeClass('swipe-open');
            });

            $('.swipe-content').on('swiped-left', function (e) {
                $(this).parent().addClass('swipe-open');
            });
        }

        $('.swipe-reveal-link').on('click', function (e) {
            e.preventDefault();
            $(this).parents('.swipe-item').slideUp(500, function () {
                $(this).remove();
            });
        });
    }


});
