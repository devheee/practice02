$(function () {

    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.subSlide').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.subSlide').on('afterChange', function (e, s, c) {
        $('.subVV .sub_num').text(c + 1 + "/" + s.slideCount);
    });

})