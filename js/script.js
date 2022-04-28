$(document).ready(function() {

    $('.loading').fadeOut(function() {
        $(this).remove();
    });

    function leviosa() {
        let options = {
            distance: '30%',
            origin: 'bottom',
            opacity: 0,
            duration: 1500
        };
        ScrollReveal().reveal('.reveal', options);
    }
    leviosa();

    function showMobileMenu() {
        let button = $('.mobile__burger');
        let menu = $('.mobile__menu');
        let bg = $('.bg-black');

        button.on('click', function() {
            if (!$(this).hasClass('active')) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', '');
            }
            
            $(this).toggleClass('active');
            menu.toggle();
            bg.toggle();
        });
    }
    showMobileMenu();

});