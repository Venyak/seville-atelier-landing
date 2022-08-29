(function () {
	$('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
	})
})();

(function () {
	$('.c-nav__tabs').on('click', function() {
		$('.hamburger-menu').removeClass('animate');
	})
})();

var btnOpen = document.getElementById('btn-open');
var modal = document.getElementById('wrapper-modal');
var btnClose = document.querySelector('.link1');
var btnClose2 = document.querySelector('.link2');
var btnClose3 = document.querySelector('.link3');
var btnClose4 = document.querySelector('.link4');

btnOpen.addEventListener('click',function(){
	modal.classList.toggle('active');
});

function closeModal(){
	modal.classList.remove('active');
}

btnClose.addEventListener('click', closeModal);
btnClose2.addEventListener('click', closeModal);
btnClose3.addEventListener('click', closeModal);
btnClose4.addEventListener('click', closeModal);