jQuery(function($) {
  $(".before-after").twentytwenty({
     before_label: 'Без скинали', // Set a custom before label
     after_label: 'Со скинали' // Set a custom after label
  });

  $('.before_slider').slick({
    arrows:true,
    draggable:false,
    dots: true,
    dotsClass:'before_slider_dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),
  });
 
  $('.rewiews_slider').slick({
    arrows: false,
    draggable: true,
    slidesToShow: 3,
    responsive:[
      {
        breakpoint: 1025,
        settings:{
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: $('.arrow-left_bot'),
          nextArrow: $('.arrow-right_bot')
        }
      },
      {
        breakpoint: 769,
        settings:{
          slidesToShow: 1,
          dots: true,
          dotsClass:'before_slider_dots before_slider_dots_bl'
        }
      }
    ]
    //dotsClass:'before_slider_dots',
    //prevArrow: $('.arrow-left'),
    //nextArrow: $('.arrow-right'),
  });
 
 $('.menu-button').on('click', function () {
     $('.menu').toggleClass('menu__active');
 });
 $('.like_button').on('click', function () {
     $(this).toggleClass('like_button_active');
 });


 $('.select_checked').on('click',function(){
   $('.select_dropdown').toggleClass('select_dropdown_open');
 })
 $('.select_option').on('click', function () {
  var value =  $(this).attr('data-value');
  $('#select-type').val(value);
  $('.select_checked').text(value);
  $('.select_dropdown').toggleClass('select_dropdown_open');
 });
 $("a[href^='#']").click(function () {
  // preventDefault();
  var _href = $(this).attr("href");
  $("html,body").animate({ scrollTop: $(_href).offset().top - 160 + "px"});
   return false;
 });
 $('input[type="tel"]').mask("+7 (999) 999-99-99");

 var reviews = $('.rewiews');
 var reviewsTop = reviews.offset().top;
 $(window).bind("scroll", function () {
   var windowTop = $(this).scrollTop();
   if (windowTop > reviewsTop) {
     $(window).unbind("scroll");
     $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac4b19776297c34584bc314d20497cfc716b66d854d79ffbc33567bb418266892&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
   }
 });
});




