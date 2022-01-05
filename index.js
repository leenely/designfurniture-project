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

var thirdSwiper = new Swiper(".mySwiper3", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			switch (index + 1) {
				case 1:
					return '<span class="' + className + '">' + 'Стулья' + "</span>";
				case 2:
					return '<span class="' + className + '">' + 'Диваны' + "</span>";
				case 3:
					return '<span class="' + className + '">' + 'Кресла' + "</span>";
			}
		},
	},
});

//  Бургер
(function () {

	let hamburger = {
		nav: document.querySelector('#nav'),
		navToggle: document.querySelector('.nav-toggle'),

		initialize() {
			this.navToggle.addEventListener('click',
				() => {
					this.toggle();
				});
		},

		toggle() {
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		},
	};

	hamburger.initialize();

}());

// Мобильные слайдеры

var mobileFirstSwiper = new Swiper(".mySwiper4", {
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
});

var mobileSecondSwiper = new Swiper(".mySwiper5", {
	noSwiping: true,
	noSwipingClass: 'swiper-slide',
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			switch (index + 1) {
				case 1:
					return '<span class="' + className + '">' + 'Стулья' + "</span>";
				case 2:
					return '<span class="' + className + '">' + 'Диваны' + "</span>";
				case 3:
					return '<span class="' + className + '">' + 'Кресла' + "</span>";
			}
		},
	},
});

var swiper = new Swiper(".mySwiper6", {
	pagination: {
	  el: ".swiper-pagination",
	  type: "progressbar",
	},
 });