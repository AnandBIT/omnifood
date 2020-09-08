//jshint esversion:6

$(document).ready(function () {

    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: 60
    });


    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top - 50
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top - 47
        }, 1000);
    });

    /* Scroll on Nav Links */

    let linksArray = [$('.main-nav li:nth-of-type(1) a'), $('.main-nav li:nth-of-type(2) a'), $('.main-nav li:nth-of-type(3) a'), $('.main-nav li:nth-of-type(4) a')];
    let sectionArray = [$('#features'), $('#works'), $('#cities'), $('#plans')];

    linksArray[0].click(function () {
        $('html, body').animate({
            scrollTop: sectionArray[0].offset().top - 47
        }, 700);
    });

    linksArray[1].click(function () {
        $('html, body').animate({
            scrollTop: sectionArray[1].offset().top - 47
        }, 700);
    });

    linksArray[2].click(function () {
        $('html, body').animate({
            scrollTop: sectionArray[2].offset().top - 47
        }, 700);
    });

    linksArray[3].click(function () {
        $('html, body').animate({
            scrollTop: sectionArray[3].offset().top - 47
        }, 700);
    });


    /* Animations on scroll */

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '60%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__animated animate__zoomIn');
    }, {
        offset: '45%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '48%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '60%'
    });

    $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '200px'
    });

    /* MOBILE NAVIGATION */

    $('.js--nav-icon').click(function() {
        let nav = $('.js--main-nav');
        let icon = $('.js--nav-icon ion-icon');
        nav.slideToggle(200);

        if(icon[0].name === 'menu-outline') {
            icon[0].name = 'close-outline';
        } else {
            icon[0].name = 'menu-outline';
        }
    });

});