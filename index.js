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