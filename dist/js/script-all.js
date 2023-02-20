/**
 * WEBSITE: https://www.soulhumanics.com
 * FACEBOOK: https://www.facebook.com/soulhumanics/
 * INSTAGRAM: https://www.instagram.com/soulhumanics/
 */

(function ($) {
	'use strict';

	$(window).scroll(function () {
		if ($('.navigation').offset().top > 100) {
			$('.navigation').addClass('fixed-nav');
		} else {
			$('.navigation').removeClass('fixed-nav');
		}
	});


	$('.portfolio-gallery').each(function () {
		$(this).find('.popup-gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});


	$('#contact-form').validate({
		rules: {
			user_name: {
				required: true,
				minlength: 4
			},
			user_email: {
				required: true,
				email: true
			},

			user_phone: {
				required: true,
				minlength: 10
			},
			user_subject: {
				required: true
			},
			user_message: {
				required: true
			}
		},
		messages: {
			user_name: {
				required: 'Please enter your name',
				minlength: 'Your name must consist of at least 2 characters'
			},
			user_email: {
				required: 'Please enter your valid email address'
			},

			user_phone: {
				required: 'Please enter your phone number',
				minlength: 'Please enter valid phone number'
			},

			user_message: {
				required: 'Put some messages here?',
				minlength: 'Your messages must consist of at least 2 characters'
			}

		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				type: 'POST',
				data: $(form).serialize(),
				url: 'sendmail.php',
				success: function () {
					$('#contact-form #success').fadeIn();
				},
				error: function () {

					$('#contact-form #error').fadeIn();
				}
			});
		}
	});

	var currentYear = new Date().getFullYear();
	$('#currentYear').text(currentYear);

	$('.testimonial-slider').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true
	});

	$('.banner-slider').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true
	});

	$('.clients-logo').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		centerPadding: '20px'
	});

	// Init Magnific Popup
	$('.portfolio-popup').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
		mainClass: 'mfp-with-zoom',
		navigateByImgClick: true,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function (openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	});

})(jQuery);