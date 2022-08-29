$(function() {
	$('.slide-one').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
		navText: [$('.navPrev'),$('.navNext')],
    responsive:{
        0:{
						nav:false,
            items:2
        },
        600:{
						nav:false,
            items:2
        },
				768: {
						nav:false,
						items: 2.2
				},
        1024:{
						nav:false,
            items:4.4
        },
				1360: {
					items:5
				}
    }
	});
	$('.slide-two').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
		navText: [$('.navPrev2'),$('.navNext2')],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	});
});

ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
					center: [55.180744, 61.453753],
					zoom: 18,
					controls: ['zoomControl', 'geolocationControl']
        });
    }