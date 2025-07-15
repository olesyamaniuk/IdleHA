$(function () {
  $(".t-c-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".t-c-reviews-list-left",
    nextArrow: ".t-c-reviews-list-right",
  });
});
