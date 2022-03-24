$(document).ready(function(){
    $(".banner-left-slider").owlCarousel({
        items:1,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout:10000,
        autoplayHoverPause:false,
        dotsEach:1,
        nav: true,
        navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"]
    });
});
