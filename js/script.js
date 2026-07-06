$(function () {

  //헤더 스크롤
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('#headerWrap').addClass('scroll');
    } else {
      $('#headerWrap').removeClass('scroll');
    }
  })

  //모바일메뉴
  $('#headerWrap .headerMobileBtn').click(function () {
    $('#headerWrap .headerMobileMenuBox').toggleClass('active');
    $('#headerWrap .headerMobileMenuBox .fadeUp').toggleClass('active');
    $('body').toggleClass('noScroll');

    if ($('#headerWrap .headerMobileMenuBox').hasClass('active')) {
      $(this).attr('aria-expanded', 'true');
      $(this).attr('aria-label', '모바일 메뉴 닫기');
    } else {
      $(this).attr('aria-expanded', 'false');
      $(this).attr('aria-label', '모바일 메뉴 열기');
    }
  });

  /* 상단으로 이동 */
  $('#aside .asideTopBtn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    },
      500);
    return false;
  });

  /* 스크롤 시 top 버튼 */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#aside').fadeIn();
    } else {
      $('#aside').fadeOut();
    }
  });


});