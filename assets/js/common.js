$(document).ready(function () {

	$(".navbar-toggler").on("click", function() {
		$(this).toggleClass("active");
		$("body").toggleClass("menubar-in");
	});

	$(".dropdown-link").hover(function() {
		if (window.matchMedia('(min-width: 992px)').matches) {
			$(".page-navbar").toggleClass("navbar-bg");
		};
	});

	// $(window).enllax();

	$('.jarallax-keep').jarallax({
		speed: .9,
		keepImg: true,
	});
	$('.jarallax').jarallax({});

	AOS.init({
		duration: 1000,
		disable: 'mobile'
	});

	Waves.attach('.btn, .jarallax-keep, .img-wrap', ['waves-light']);
  Waves.init();

	function navbar() {
		if ($(this).scrollTop() >= $(window).height()) {
			$('.page-navbar').addClass("fixed-top navbar-bg");
		} else {
			$('.page-navbar').removeClass("fixed-top navbar-bg");
		};
	};
	navbar();
	$(window).on("scroll", navbar);

	function footer() {
		var height = $(".page-footer").outerHeight();
		$(".footer-wrapper").outerHeight(height);
	};
	footer();
	$(window).on("resize", footer);

	function easyParallax() {
		scrollPos = $(this).scrollTop();
		$('.page-header .container').css({
			'top': (scrollPos / 4) + "px",
			'opacity': 1 - (scrollPos / 250)
		});
	};
	function imgParallax() {
		scrollPos = $(this).scrollTop();
		$('.page-header .img').css({
			'top': (scrollPos / 8) + "px"
		});
	};
	$(window).on("scroll", function() {
		easyParallax(); 
		imgParallax();
	});

	var dir = false;
	if ( $("html").attr("dir") == "rtl" ) {
		dir = true;
	};

	$('.owl-1').owlCarousel({
		rtl: dir,
		animateOut: 'fadeOut',
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    // autoplay: true,
	  smartSpeed: 1,
	});

});