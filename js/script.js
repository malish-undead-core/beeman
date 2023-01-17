// function scroll

function slowScroll(id) {
	$('html, body').animate({
		scrollTop: $(id).offset().top
	}, 500);
}

$(document).on("scroll", function () {
	if ($(window).scrollTop() === 0)
		$("header").removeClass("fixed");
	else
		$("header").attr("class", "fixed");
});

$(document).ready(function () {
	$('.header_burger').click(function (event) {
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
});

$(document).ready(function () {
	$('.header_link').click(function (event) {
		$('.header_burger,.header_menu').removeClass('active');
		$('body').removeClass('lock');
	});
});

$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 5,
		speed: 400,
		// easing: 'ease',
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000,
		draggable: false,
		centerMode: true,
		// centerPadding: '1px',
		responsive: [
			{
				breakpoint: 1251,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 501,
				settings: {
					arrows: false,
					centerMode: false,
					slidesToShow: 2
				}
			}
		]

	});
});



