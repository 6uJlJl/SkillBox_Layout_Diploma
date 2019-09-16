$(function () {

  $('.examples__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: '<button class="examples__arrow examples__arrow--direction-right"></button>',
    prevArrow: '<button class="examples__arrow examples__arrow--direction-left"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ],
  });

	$(".main__elem--1").css({ "left":"10%", "top":"10%" });
	$(".main__elem--2").css({ "left":"2%", "top":"45%" });
	$(".main__elem--3").css({ "left":"10%", "top":"85%" });
	$(".main__elem--4").css({ "left":"50%", "top":"20%" });
	$(".main__elem--5").css({ "left":"40%", "top":"45%" });

	if ( $(window).width() <= 1024 ) {
    $(".header__menu").css("display","none");
  } else {
    $(".header__menu").css("display","flex"); };

	function closeMenu () {
		$(".header__burger").removeClass("header__burger--active");
    $('body,html').removeClass("hidden");
    $(".header__menu").css("display", ( $(window).width() <= 1024 ) ? "none" : "flex");
	}

	function goToSelector (selector) {
		event.preventDefault();
		let top = $(selector).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
	}

	$(".link-more").click ( (event)=> { closeMenu(); goToSelector (".spec"); })

	$(".link-offer").click( (event)=> { closeMenu(); goToSelector(".offer"); });

	$(".link-portfolio").click( (event)=> { closeMenu(); goToSelector(".examples"); });

  $(".header__burger").click( function (){
      $(".header__burger").toggleClass("header__burger--active");
      if ( $(".header__burger").hasClass("header__burger--active") ) {
      $(".header__menu").css("display","flex");
      $('body,html').toggleClass("hidden");
      } else {
      $(".header__menu").css("display","none");
      $('body,html').toggleClass("hidden");
      }
  })

  $(window).resize( function (){
    closeMenu();

		if ( $(window).width() <= 950 ) {
      // $(".item-2").css("display", "none");
      $(".main__elem--4").css({ "left":"85%", "top":"10%" }); }
    else {
      // $(".item-2").css("display", "flex");
      $(".main__elem--4").css({ "left":"50%", "top":"20%" });}
  })

  function addFadeIn (selector, delay) {
    let arr = document.querySelectorAll (selector);
      for (let i=0; i < arr.length; i++ ) {
        setTimeout(()=>{
          arr[i].classList.add("fadeIn");
        },i*delay);
      }
  }

  $(window).scroll(function(){
    if ( window.scrollY > 100 ) {
      addFadeIn (".spec__item", 400);
    }
    else {
      $(".spec__item").removeClass("fadeIn");
    }
    if ( window.scrollY > $(".spec__content").offset().top) {
      addFadeIn (".examples__image", 400);
    }
    else {
      $(".examples__image").removeClass("fadeIn");
    }
    if ( window.scrollY > $(".examples__container").offset().top) {
      $(".offer__main").addClass("fadeIn");
    }
    else {
      $(".offer__main").removeClass("fadeIn");
    }
  })

	$("body").keydown((event)=>{

		// Кнопка Esc при модальном окне
		if (( event.keyCode == 27 ) && ( $(".popup").hasClass("popup_active")) ) {
			$(".popup__mail").css("display","none")
			$(".popup").toggleClass("popup_active");
		}
	})

	$(".button_click").click(()=>{
		$(".popup__mail").css("display","block")
		$(".popup").toggleClass("popup_active");
	});

	$(".fa-times-circle").click(()=>{
		$(".popup").toggleClass("popup_active");
	});

	$(".input__click").click(()=>{
		$(".popup__mail").css("display","none")
		$(".popup").toggleClass("popup_active");
	});

// Маска телефона для формы
	$(".popup__tel").mask("+7 (999) 999-99-99");

// Отправка формы
  $('#form').trigger('reset');
  $('#form').on('submit', function(e){
    e.preventDefault();
    var fd = new FormData( this );
    $.ajax({
      url: '../phpmailer/send.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: fd,
      success: function(msg){
        $(".popup").toggleClass("popup_active");
        if(msg == 'ok') {
          alert('Спасибо, Ваша заявка отправлена. Я свяжусь с вами как можно скорее!');
        } else {
          alert('Ошибка отправки. Попробуйте повторить попытку позднее...')
        }
      }
    });
  });

});
