$(document).ready(function() {
    $(".banner-left-slider").owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: false,
        dotsEach: 1,
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"]
    });
    $('.tm-carousel').flickity({
        draggable: true,
        wrapAround: true,
        prevNextButtons: true,
    });
});

$(".collapse-header").click(function() {
    $(this).toggleClass("active-content");
    $(this).next().toggle();
});

$(".regis-tab").click(function() {
    $(".regis-tab").removeClass("active");
    $(this).addClass("active");
    var $target = $(this).data("target");
    $(".regis-tab-content").addClass("inactive-tab");
    $($target).removeClass("inactive-tab");
});

$(".mb-next").click(function() {
    var $open = $(this).data("target");
    var $parent = $(this).data("parent");
    console.log($open);
    $($open).addClass("mb-open");
    $($open).removeClass("mb-hidden");
    $($parent).addClass("mb-subopened mb-hidden");
    $($parent).removeClass("mb-open");
});

$(".mb-prev").click(function() {
    var $open = $(this).data("target");
    var $parent = $(this).data("parent");
    console.log($open);
    $($open).addClass("mb-open");
    $($open).removeClass("mb-subopened mb-hidden");
    $($parent).addClass("mb-hidden");
    $($parent).removeClass("mb-open");
});

$(".mobile-nav").click(function() {
    $("html").addClass("open-nav");
});


$("#mb-blocker").click(function() {
    $("html").removeClass("open-nav");
});