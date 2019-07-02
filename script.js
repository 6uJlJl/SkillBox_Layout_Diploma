$(function () {

	let currentState = 0;
	let states = [
		[-1,0,1],
		[1,-1,0],
		[0,1,-1]
	]

	$(".main__elem--1").animate({ "left":"10%", "top":"10%" });
	$(".main__elem--2").animate({ "left":"2%", "top":"45%" });
	$(".main__elem--3").animate({ "left":"20%", "top":"90%" });
	$(".main__elem--4").animate({ "left":"50%", "top":"20%" });
	$(".main__elem--5").animate({ "left":"40%", "top":"45%" });

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
    	if ( $(window).width() <= 950 ) {
    		$(".main__elem--4").animate({ "left":"90%", "top":"10%" });
    		$(".main__elem--3").animate({ "left":"20%", "top":"85%" });
		}
		
		$(".item-"+ currentState ).css("display", "flex");
		currentState = 0;	
		changeImages (currentState);
		if ( $(window).width() <= 1024 ) { $(".item-3").css("display", "none"); } else {$(".item-3").css("display", "flex");}
		if ( $(window).width() <= 950 ) { $(".item-2").css("display", "none"); } else {$(".item-2").css("display", "flex");}
		
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
		if ( event.keyCode == 39 ) {
			currentState = (currentState+1)%3;
			changeImages (currentState);
		}
		if ( event.keyCode == 37 ) {
			currentState = (currentState+2)%3;
			changeImages (currentState);	
		} 
	})

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

	$(".main__button").click(()=>{
		$(".popup__mail").css("display","block")
		$(".pop-up").toggleClass("pop-up_active");
	})	

	$(".fa-times-circle").click(()=>{
		$(".pop-up").toggleClass("pop-up_active");
	})

	$(".input__click").click(()=>{
		$(".popup__mail").css("display","none")
		$(".pop-up").toggleClass("pop-up_active");
	})

});
