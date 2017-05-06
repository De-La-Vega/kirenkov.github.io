$(function(){

	var _window = $(window);
	var _body = $('body');

	/**
	 * Безопасный метод отмены обработки заданного события по умолчанию.
	 *
	 * @param {Object} e - событие
	 */
	function preventDefault (e) {
		e = e || window.event;
		if (e && typeof e.preventDefault === 'function') {
			e.preventDefault();
		}
	}

	/**
	 * Device type.
	 */
	function isMobile () {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}

	// Cycle
	if ($.fn.cycle) {
		$('.l-testimonials').cycle({
			fx: 'fade',
			speed: 300,
			timeout: 0,
			slides: '> li',
			log: false
		});
	};

	// Fix header
	_window.on('scroll', function(){
		if (_window.scrollTop() > $('.section-header').height() - $('.section-nav').outerHeight()) {
			_body.addClass('body-fixed');
		} else {
			_body.removeClass('body-fixed');
		}
	}).trigger('scroll');

	function initScrollTo (className) {
		$.scrollTo($('.' + className), 300, {
			offset: -50
		});
	}

	// scrollTo trigger
	$('.scroll-to').on('click', function(e){
		preventDefault(e);

		$('.nav-list').removeClass('active');

		initScrollTo($(this).data('link'));
	});

	// Validate
	$('form').each(function(){
		var that = $(this);

		that.validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				email: {
					required: true,
					email: true
				},
				message: {}
			},
			messages: {
				name: {
					required: 'Write your name',
					minlength: 'Minimum 2 characters!'
				},
				email: {
					required: 'Write your email address',
					email: 'Need a valid email address!'
				},
				message: {}
			},
			submitHandler: function(){
				that.hide();

				$.ajax({
					url: 'https://formspree.io/kirenkov.vitaliy@gmail.com', 
					method: 'POST',
					data: {
						name: document.getElementById('contacts-form-name').value,
						email: document.getElementById('contacts-form-email').value,
						message: document.getElementById('contacts-form-message').value
					},
					dataType: 'json'
				}).done(function(response) {
					that.parent('div').html('<div class="alert alert-success form-response">Your message was sent.</div>');
				});

			}
		});
	});

	// Toggle navigation
	$('.nav-toggle').on('click', function(e){
		preventDefault(e);

		if (!_body.hasClass('body-fixed')) {
			initScrollTo('section-about');
		}

		$('.nav-list').toggleClass('active');
	});

});