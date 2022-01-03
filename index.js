var swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	  renderBullet: function (index, className) {
		  return '<span class="' + className + '"> 0' + (index + 1) + '</span>';
	  },
	},
 });

 var secondSwiper = new Swiper(".mySwiper2", {
	loop: true,
	pagination: {
		el: ".swiper-pagination-original",
	 },
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
 });