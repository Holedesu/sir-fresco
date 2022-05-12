$(document).ready(function () {

    $('.btn-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-menu').slideToggle(300);
    });
});