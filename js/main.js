
// $(document).ready(function(){


//     let nav_offset_top = $(".header_area").height() + 50;

//     function navbarFixed(){
//         if($('.header_area').length){
//             $(window).scroll(function(){
//                 let scroll = $(window).scrollTop();
//                 if(scroll>=nav_offset_top){
//                     $('.header_area.main-menu').addClass('navbar_fixed');
//                 }else{
//                     $('.header_area.main-menu').removeClass('navbar_fixed');
//                 }
//             })
//         }
//     }

//     navbarFixed();

// });

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggle nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.3s ease forwards ${index/7+.3}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();


$('h1').each(function() {

	var words = $(this).text().split(' ');

	$(this).empty().html(function() {

		for (i = 0; i < words.length; i++) {
			if (i == 0) {
				$(this).append('<span>' + words[i] + '</span>');
			} else {
				$(this).append(' <span>' + words[i] + '</span>');
			}
		}
	
	});

});