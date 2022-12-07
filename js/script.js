$(document).ready(function(){
  $(window).scroll(function(){
    //top-btn
    let btn = $('.top-btn');
    btn.on('click',function(){
      $('html,body').animate({
        scrollTop:0
      },1000);
    });
  });

  $('.menu').mouseenter(function(){
    $('.sub-menu-wrap').addClass('active');
  });
  $('.sub-menu-wrap').mouseleave(function(){
    $(this).removeClass('active');
  });

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay:{
      delay:2500
    }
  });


});//end