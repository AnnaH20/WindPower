$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});

const adminButton = document.querySelectorAll(".products__button");
adminButton.forEach((item) => {
	item.addEventListener("click", (event) => {
		event.preventDefault()
		alert('Done')
	})
})

$(document).ready(function () {
	$('.block__title').click(function (event) {
		if ($('.block').hasClass('one')) {
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
