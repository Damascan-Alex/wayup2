$(function () {
	$('#contact-btn').click(function () {
		$('html, body').animate(
			{
				scrollTop: $('#contacts').offset().top,
			},
			1000
		)
	})
	$('#arow-btn').click(function () {
		$('html, body').animate(
			{
				scrollTop: $('#destinations').offset().top,
			},
			1000
		)
	})
	$('#menu-destination').click(function () {
		$('html, body').animate(
			{
				scrollTop: $('#destinations').offset().top,
			},
			1000
		)
	})
	$('#menu-aboutUs').click(function () {
		$('html, body').animate(
			{
				scrollTop: $('#aboutUs').offset().top,
			},
			1000
		)
	})
	$('#menu-contacts').click(function () {
		$('html, body').animate(
			{
				scrollTop: $('#contacts').offset().top,
			},
			1000
		)
	})

	// website PopUps

	$('[popup-open]').on('click', function () {
		var popup_name = $(this).attr('popup-open')
		$('[popup-name="' + popup_name + '"]').fadeIn(300)
	})

	// Close Popup
	$('[popup-close]').on('click', function () {
		var popup_name = $(this).attr('popup-close')
		$('[popup-name="' + popup_name + '"]').fadeOut(300)
	})

	// Close Popup When Click Outside
	$('.popup')
		.on('click', function () {
			var popup_name = $(this).find('[popup-close]').attr('popup-close')
			$('[popup-name="' + popup_name + '"]').fadeOut(300)
		})
		.children()
		.click(function () {
			return false
		})

	$('#more-trips').click(function (e) {
		e.preventDefault()
		$('.hiden-trips').css('display', 'block')
		$('#more-trips').css('display', 'none')
		$('#less-trips').css('display', 'block')
	})
	$('#less-trips').click(function (e) {
		e.preventDefault()
		$('.hiden-trips').css('display', 'none')
		$('#more-trips').css('display', 'block')
		$('#less-trips').css('display', 'none')
	})
})
