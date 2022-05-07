$(document).ready(function () {

    $('.hamburger').click(function () {
        $(this).toggleClass('active');
        $('.navigation').slideToggle(300);

    });

    // let isMenuOpen = false;

    // $('.hamburger').on( 'click' , function() {
    //
    //     if (isMenuOpen) {
    //       $('.navigation').slideUp();
    //       isMenuOpen = false;
    //     } else {
    //       $('.navigation').slideDown();
    //       isMenuOpen = true;
    //     }
    // });
});