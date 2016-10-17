$(function() {

	$('.header__menu-link, .header__menu__item_close a').click(function(){
		$('.header__menu').toggleClass('show');
		return false;
	});

	$('.gallery').magnificPopup({
		delegate: '.preview__image a',
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		}
	});

	$('.donate__link').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false
	});

	$("#contactform").submit(function() {
		$.ajax({
			type: "POST",
			url: "contactform.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("#contactform .success").show();
			$("#contactform").trigger("reset");
		});
		return false;
	});

});
