$(document).ready(function() {

	// function heightDetect() {
	// 	$(".page-header").css("height", $(window).height());
	// };
	// heightDetect();
	// $(window).resize(function() {
	// 	heightDetect();
	// });

	$(".btn--menu").click(function(){
		$(".menu").toggleClass("show");
	});	
	$(".btn--open-popup").click(function(){
		$(".popup").addClass("show");
	});
	$(".btn--close-popup").click(function(){
		$(".popup").removeClass("show");
	});

	function widthDetect() {
		if(($(window).width()) < 480) {
			$(".col-md-3").removeClass("col-xs-6");
		} else if (($(window).width()) > 480) {
			$(".col-md-3").addClass("col-xs-6");
		}
		// if(($(window).width()) < 992) {
		// 	$(".order .col-md-3").removeClass("col-sm-4").addClass("col-sm-3");
				if(($(window).width()) < 768) {
					$(".order .col-md-3").removeClass("col-xs-6").addClass("col-xs-4");
						if(($(window).width()) < 730) {
							$(".order .col-md-3").removeClass("col-xs-4").addClass("col-xs-6");
								if(($(window).width()) < 565) {
									$(".order .col-md-3").removeClass("col-xs-4").addClass("col-xs-6");
									if(($(window).width()) < 470) {
										$(".order .col-md-3").removeClass("col-xs-6").addClass("col-xs-12");
									}
								}
						}
				}		
	};

	$(window).resize(function() {
		widthDetect();
	});
	widthDetect();

	$(".item__photo").magnificPopup({
	    items: [
	    	{
	     		src: "img/t-shirt--front.jpg"
	    	},
	    	{
	     		src: "img/t-shirt--back.jpg"
	    	}
	    ],gallery: {
      		enabled: true
    	},
	    type: "image"
	});

	$(".item__add").click(function() {
		var value = parseInt($(".btn--open-popup .counter").html());
		$(".btn--open-popup .counter").text(value+1);
	});

	$(".item__add").click(function() {
		$(this).parent().parent().parent().clone().appendTo(".order .row");
		$(".item__add, .item__photo").remove(".order .item__add, .order .item__photo");
		// Написать счетчик итоговой суммы
	});

	$(".btn--clean-basket").click(function() {
		$(".order .row").empty();
		$(".btn--open-popup .counter").text(0);
	});
});

// $(window).load(function() {

// });