$(function () {

  //메인 로드 시
  $(window).load(function () {
    $('#visualWrap').addClass('active');
    AOS.init({
      duration: 1500
    });
  });

  //리뷰 영역 
  $('#reviewWrap .slickWrap .slick').slick({
    autoplay: true,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    speed: 1500,
    variableWidth: true,
    prevArrow: $('#reviewWrap .control .prev'),
    nextArrow: $('#reviewWrap .control .next'),
  });

  $('#reviewWrap .slickWrap .slick').on('afterChange', function (event, slick, currentSlide) {
    if (currentSlide >= slick.slideCount - slick.options.slidesToShow) {
      $('#reviewWrap .slickWrap').addClass('end');
    } else {
      $('#reviewWrap .slickWrap').removeClass('end');
    }
  });

  //소식 영역 
  function noticeSlider() {

    if ($(window).width() <= 768) {

      if (!$('#noticeWrap .slick').hasClass('slick-initialized')) {
        $('#noticeWrap .slick').slick({
          autoplay: true,
          arrows: false,
          dots: false,
          accessibility: false,
          draggable: true,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          zIndex: 1000,
          pauseOnHover: false,
          autoplaySpeed: 3000,
          speed: 1500,
          variableWidth: true
        });
      }

    } else {

      if ($('#noticeWrap .slick').hasClass('slick-initialized')) {
        $('#noticeWrap .slick').slick('unslick');
      }

    }

  }

  $(function () {
    noticeSlider();

    $(window).on('resize', function () {
      noticeSlider();
    });
  });

});