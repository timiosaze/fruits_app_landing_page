let navbar = document.querySelector(" .header .navbar");

document.querySelector("#menu-bars").onclick = () =>{
	navbar.classList.add('active');
}
document.querySelector("#nav-close").onclick = () =>{
	navbar.classList.remove('active');
}
var sdegree = 0;
$(window).scroll(function() {
    
    sdegree ++ ;
    sdegree = sdegree + 2 ;
    var srotate = "rotate(" + sdegree + "deg)";
    $(".fruits-logo").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
});

window.onscroll = () => {
	navbar.classList.remove('active');
	if(window.scrollY > 0){
		document.querySelector(".header").classList.add('active');
	} else {
		document.querySelector(".header").classList.remove('active');
	}
};

var swiper = new Swiper(".home-slider", {
	loop:true,
	grabCursor:true,

	navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});
var swiper = new Swiper(".about-slider", {
	loop:true,
	grabCursor:true,
	slidesPerView: 1,
    spaceBetween: 20,
	// centerInsufficientSlides: true,
	
	navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    breakpoints: {
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
});
var swiper = new Swiper(".clients-slider", {
	loop:true,
	grabCursor:true,
	slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    breakpoints: {
	    	0: {
	    		slidesPerView: 1,
	    	},
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
});
