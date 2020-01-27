$(document).ready(function () {

	$(".navbar-toggler").on("click", function() {
		$(this).toggleClass("active");
		$("body").toggleClass("menubar-in");
	});

	$(window).enllax();

	$('.jarallax').jarallax({});

	AOS.init({
		duration: 1000,
		disable: 'mobile'
	});

	function navbar() {
		if ($(this).scrollTop() >= 1) {
			$('.fixed-top').addClass("navbar-bg");
		} else {
			$('.fixed-top').removeClass("navbar-bg");
		};
	};
	navbar();
	$(window).on("scroll", navbar);

	$('.scroll-to').on('click', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		$('html, body').animate({ scrollTop: $(target).offset().top - 77 }, 1000, "easeInOutExpo");
	});

	function footer() {
		var height = $(".page-footer").outerHeight();
		$(".footer-wrapper").outerHeight(height);
	};
	footer();
	$(window).on("resize", footer);

	var lastScrollTop = 0;
	function scrolled() {
		var body = $('body'),
				st = $(this).scrollTop();
		if (st > lastScrollTop) {
			body.addClass('scroll-down');
		} else {
			body.removeClass('scroll-down');
		};
		lastScrollTop = st;
	};
	scrolled();
	$(window).on('scroll resize', scrolled);

	function easyParallax() {
		scrollPos = $(this).scrollTop();
		$('.header-1 .container').css({
			'top': (scrollPos / 4) + "px",
			'opacity': 1 - (scrollPos / 250)
		});
	};
	$(window).on("scroll", easyParallax);

	var countdown = $('.countdown');
	countdown.downCount({
		date: countdown.attr('data-date'),
		offset: +10
	}, function () {
		//callback here if finished
		//alert('YES, done!');
	});

	$('.modal').on('show.bs.modal', function (e) {
		var src = 'https://www.youtube.com/embed/frhzBU41U8I';
		$(this).find("iframe").attr('src', src);
	});
	$('.modal').on('hide.bs.modal', function (e) {
		$(this).find("iframe").removeAttr('src');
	});

	var dir = false;
	if ( $("html").attr("dir") == "rtl" ) {
		dir = true;
	};

	$('.owl-1').owlCarousel({
		rtl: dir,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    autoHeight: true,
	  smartSpeed: 1000,
	});

	$('.owl-2').owlCarousel({
		rtl: dir,
    responsive: {
    	0: {
    		items: 1,
    	},
    	768: {
    		items: 2,
    	},
    	1200: {
    		items: 3,
    	},
    },
    nav: false,
    dots: true,
    autoplay: true,
    autoHeight: true,
	  smartSpeed: 1000,
	});

	$('.nav-5').on('click', 'a', function () {
		$('.nav-2').find('a').removeClass('active');
		$('.nav-2').find('a[href="' + $(this).attr('href') + '"]').addClass('active');
	});

	$('.nav-2').on('click', 'a', function () {
		$('.nav-5').find('a').removeClass('active');
		$('.nav-5').find('a[href="' + $(this).attr('href') + '"]').addClass('active');
	});

});