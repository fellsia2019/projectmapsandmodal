$(function (){
	$('input[name=phone]').mask('+7 (999) 999-99-99');
    
	$('.scroll-down-btn').on('click', function(e) {
	  e.preventDefault(); // Запрещаем переход по ссылке
	  var target= $(this).attr('href'), // Берем значение из ссылки как цель id="second-screen"
	        destination= $(target).offset().top; // Ищем верхнюю координату у нашей цели

	  $('body,html').animate({scrollTop: destination}, 500); // Плавно проматываем до цели
	});
	$('header .nav-link').on('click', function(e) {
	  e.preventDefault(); // Запрещаем переход по ссылке
	  var target= $(this).attr('href'), // Берем значение из ссылки как цель id="second-screen"
	        destination= $(target).offset().top; // Ищем верхнюю координату у нашей цели

	  $('body,html').animate({scrollTop: destination}, 500); // Плавно проматываем до цели
	});

    $('.main-slide').owlCarousel({
        loop:true,
        autoplay : true,
        autoplayTimeout : 8000,
        margin:0,
        nav:true,
        dots:true,
        center: false,
        smartSpeed:900,
        items:1,
        navText: ['<i class="fal fa-chevron-left"></i>','<i class="fal fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
                margin:0,
            },
            1000:{
                items:1,
                margin:0,
            }
        }
    });

    $('.second-block .dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
    });

});

