$(document).ready(function () {

	$(".navbar-toggler").on("click", function() {
		$(this).toggleClass("active");
		$("body").toggleClass("menubar-in");
	});

	function navbar() {
		if ($(this).scrollTop() >= $(window).height()/2) {
			$('.page-navbar').addClass("fixed-top navbar-bg");
		} else {
			$('.page-navbar').removeClass("fixed-top navbar-bg");
		};
	};

	if ($('.content').hasClass('no-scroll') == false) {

		$(".dropdown-link").hover(function() {
			if (window.matchMedia('(min-width: 992px)').matches) {
				$(".page-navbar").toggleClass("navbar-bg");
			};
		});

		navbar();
		$(window).on("scroll", navbar);

	};

	function easyParallax() {
		scrollPos = $(this).scrollTop();
		$('.page-header .container').css({
			'top': (scrollPos / 4) + "px",
			'opacity': 1 - (scrollPos / 250)
		});
	};
	$(window).on("scroll", function() {
		easyParallax(); 
	});

	Waves.attach('.btn, .e, .img-wrap, .radio-group span', ['waves-light']);
  Waves.init();

	var dir = false;
	if ( $("html").attr("dir") == "rtl" ) {
		dir = true;
	};

	$('.owl-1').owlCarousel({
		rtl: dir,
    center: true,
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    responsive: {
      600: {
      	items: 2
			}
		}
	});

	$('.owl-2').owlCarousel({
		rtl: dir,
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
	});

});