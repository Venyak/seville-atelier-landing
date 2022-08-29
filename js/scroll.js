$(document).ready(function () {
	$(".header").on("click", "a", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
					top = $(id).offset().top;
			$('body,html').animate({ scrollTop: top }, 580);
	});
});

$(document).ready(function () {
	$(".h-desc__btn-wrap").on("click", "a", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
					top = $(id).offset().top;
			$('body,html').animate({ scrollTop: top }, 580);
	});
});

$(document).ready(function () {
	$(".footer__up").on("click", "a", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
					top = $(id).offset().top;
			$('body,html').animate({ scrollTop: top }, 580);
	});
});

$(document).ready(function () {
	$(".f__col-ul-links").on("click", "a", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
					top = $(id).offset().top;
			$('body,html').animate({ scrollTop: top }, 580);
	});
});

$(document).ready(function () {
	$(".content").on("click", "a", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
					top = $(id).offset().top;
			$('body,html').animate({ scrollTop: top }, 580);
	});
});