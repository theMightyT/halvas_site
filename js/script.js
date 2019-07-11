$(function () {

	$(window).stellar({
		horizontalScrolling: false
	});

	// Custom Scrollbar
	var nice = $("html").niceScroll({
		cursorwidth: 8,
		cursorborder: "0px solid #fff",
		cursorborderradius: '0'
	});

	$('.main-nav a:not(.dropdown-toggle), .explore-but').bind('click', function (event) {
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');

		event.preventDefault();
	});
	/*
	 * Fun Fact with Count Animation
	 */
	$('.st-ff-count').appear();
	$(document.body).on('appear', '.st-ff-count', function (e, $affected) {
		$affected.each(function (i) {
			if (parseInt($(this).data('runit'))) {
				$(this).countTo({
					speed: 3000,
					refreshInterval: 50
				});
				$(this).data('runit', "0");
			};

		});
	});

	$('[data-toggle="tooltip"]').tooltip();

	function home_height() {
		var element = $('.st-home-unit'),
			elemHeight = element.height(),
			winHeight = $(window).height()
		padding = (winHeight - elemHeight - 200) / 2;

		if (padding < 1) {
			padding = 0;
		};
		element.css('padding', padding + 'px 0');
	}

	home_height();

	$(window).resize(function () {
		home_height();
	});


	var fadeStart = $(window).height() / 3 // 100px scroll or less will equiv to 1 opacity
		,
		fadeUntil = $(window).height() // 200px scroll or more will equiv to 0 opacity
		,
		fading = $('.st-home-unit'),
		fading2 = $('.hero-overlayer');

	$(window).bind('scroll', function () {
		var offset = $(document).scrollTop(),
			opacity = 0,
			opacity2 = 1;
		if (offset <= fadeStart) {
			opacity = 1;
			opacity2 = 0;
		} else if (offset <= fadeUntil) {
			opacity = 1 - offset / fadeUntil;
			opacity2 = offset / fadeUntil;
		}
		fading.css({
			'opacity': opacity
		});

		if (offset >= 120) {
			$('.st-navbar').addClass("st-navbar-mini");
		} else if (offset <= 119) {
			$('.st-navbar').removeClass("st-navbar-mini");
		}
	});





	$(".testimonials-carousel ul").owlCarousel({
		items: 1,
		navigation: false,
		pagination: true,
		singleItem: true,
		autoPlay: true,
		navigationText: ['<i class="ct-etp etp-arrow-left7"></i>', '<i class="ct-etp etp-arrow-right8"></i>'],
		transitionStyle: "backSlide"
	});

	$('.clients-carousel').owlCarousel({
		items: 5,
		autoPlay: true,
		pagination: false
	});

	////// mailchimp //////
	$(".subscribe-form").ajaxChimp({
		callback: mcCallback,
		url: "http://cantothemes.us8.list-manage2.com/subscribe/post?u=37a0cb83e98c8633253ad0acd&id=03d8ef0996" // Replace your mailchimp post url inside double quote "".
	});

	function mcCallback(res) {
		if (res.result === 'success') {
			$('.subscribe-result').html('<i class="pe-7s-check"></i>' + res.msg).delay(500).slideDown(1000).delay(10000).slideUp(1000);
		} else if (res.result === 'error') {
			$('.subscribe-result').html('<i class="pe-7s-close-circle"></i>' + res.msg).delay(500).slideDown(1000).delay(10000).slideUp(1000);
		}
	}
});

// make the shuffle init public and use it as the CB from the VM init function

// function initShuffle() {	
// 	var $grid = $('.grid'),
// 		$sizer = $grid.find('.shuffle__sizer'),
// 		$filterType = $('#filter input[name="filter"]');

// 	$grid.shuffle({
// 		itemSelector: '.portfolio-item',
// 		sizer: $sizer
// 	});

// 	$filterType.change(function(e) {
// 		var group = $('#filter input[name="filter"]:checked').val();

// 		$grid.shuffle('shuffle', group);

// 		$('label.btn-main').removeClass('btn-main');
// 		$('input[name="filter"]:checked').parent().addClass('btn-main');
// 	});
// }