$(function () {

	let currentState = 0;
	let states = [
		[-1,0,1],
		[1,-1,0],
		[0,1,-1]
	]

	$(".main__elem--1").css({ "left":"10%", "top":"10%" });
	$(".main__elem--2").css({ "left":"2%", "top":"45%" });
	$(".main__elem--3").css({ "left":"10%", "top":"85%" });
	$(".main__elem--4").css({ "left":"50%", "top":"20%" });
	$(".main__elem--5").css({ "left":"40%", "top":"45%" });

	if ( $(window).width() <= 1024 ) { $(".item-3").css("display", "none"); } else {$(".item-3").css("display", "flex");}
	if ( $(window).width() <= 950 ) { $(".item-2").css("display", "none"); } else {$(".item-2").css("display", "flex");}

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
		$(".item-"+ currentState ).css("display", "flex");
		currentState = 0;
    changeImages (currentState);
		if ( $(window).width() <= 1024 ) { $(".item-3").css("display", "none"); } else {$(".item-3").css("display", "flex");}
		if ( $(window).width() <= 950 ) {
      $(".item-2").css("display", "none");
      $(".main__elem--4").css({ "left":"85%", "top":"10%" }); }
    else {
      $(".item-2").css("display", "flex");
      $(".main__elem--4").css({ "left":"50%", "top":"20%" });}
  })

  function addFadeIn (selector, delay) {
    let arr = document.querySelectorAll (selector);
      for (let i=0; i < arr.length; i++ ) {
        setTimeout(()=>{
          arr[i].classList.add("fadeIn");
        },i*delay);
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

	function changeImages (state) {
		$(".item-1").css("order",states[state][0]);
		$(".item-2").css("order",states[state][1]);
		$(".item-3").css("order",states[state][2]);
		$(".dot-"+(state+1)).addClass("examples__dot--active");
		$(".dot-"+((state+1)%3+1)).removeClass("examples__dot--active");
		$(".dot-"+((state+2)%3+1)).removeClass("examples__dot--active");

		if ( $(window).width()<=1024 ) {
			( $(".item-1").css("order")==="1" ) ? $(".item-1").css("display","none") : $(".item-1").css("display","flex");
			( $(".item-2").css("order")==="1" ) ? $(".item-2").css("display","none") : $(".item-2").css("display","flex");
			( $(".item-3").css("order")==="1" ) ? $(".item-3").css("display","none") : $(".item-3").css("display","flex");
		}

		if ( $(window).width()<=950 ) {
			!( $(".item-1").css("order")==="-1" ) ? $(".item-1").css("display","none") : $(".item-1").css("display","flex");
			!( $(".item-2").css("order")==="-1" ) ? $(".item-2").css("display","none") : $(".item-2").css("display","flex");
			!( $(".item-3").css("order")==="-1" ) ? $(".item-3").css("display","none") : $(".item-3").css("display","flex");
		}

	}

	$(".examples__arrow--direction-right").click (()=>{
		currentState = (currentState+1)%3;
		changeImages (currentState);
	});

	$(".examples__arrow--direction-left").click (()=>{
		currentState = (currentState+2)%3;
		changeImages (currentState);
	});

	$("body").keydown((event)=>{
		// Стрелка направо
		if ( event.keyCode == 39 ) {
			currentState = (currentState+1)%3;
			changeImages (currentState);
		}
		// Стрелка налево
		if ( event.keyCode == 37 ) {
			currentState = (currentState+2)%3;
			changeImages (currentState);
		};
		// Кнопка Esc при модальном окне
		if (( event.keyCode == 27 ) && ( $(".popup").hasClass("popup_active")) ) {
			$(".popup__mail").css("display","none")
			$(".popup").toggleClass("popup_active");
		}
	})

// Обработка Тач движений
	let touchStart = 0;
	$(".examples__items").on( "touchstart", function(event) {
		touchStart = event.originalEvent.touches[0].clientX;
	});
	$(".examples__items").on( "touchend", function(event) {
		if ( touchStart <= event.originalEvent.changedTouches[0].clientX ) {
			currentState = (currentState+2)%3;
			changeImages (currentState); }
		else {
			currentState = (currentState+1)%3;
			changeImages (currentState); }
	});

// Обработчик точек слайдера
	$(".dot-1").click(()=>{
		currentState = 0;
		changeImages (currentState);
	});

	$(".dot-2").click(() => {
		currentState = 1;
		changeImages (currentState);
	});

	$(".dot-3").click(()=>{
		currentState = 2;
		changeImages (currentState);
	})

	$(".button_click").click(()=>{
		$(".popup__mail").css("display","block")
		$(".popup").toggleClass("popup_active");
	})

	$(".fa-times-circle").click(()=>{
		$(".popup").toggleClass("popup_active");
	})

	$(".input__click").click(()=>{
		$(".popup__mail").css("display","none")
		$(".popup").toggleClass("popup_active");
	})

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
