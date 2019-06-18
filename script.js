$(function () {

	$(".main__elem--1").animate({ "left":"10%", "top":"10%" });
	$(".main__elem--2").animate({ "left":"2%", "top":"45%" });
	$(".main__elem--3").animate({ "left":"20%", "top":"90%" });
	$(".main__elem--4").animate({ "left":"50%", "top":"20%" });
	$(".main__elem--5").animate({ "left":"40%", "top":"45%" });

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
    		$(".main__elem--4").animate({ "left":"90%", "top":"10%" });
    		$(".main__elem--3").animate({ "left":"20%", "top":"85%" });
    	}
    })
});