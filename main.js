import $ from "jquery";
import fontawesome from '@fortawesome/fontawesome-free/js/all.js'
import slick from 'slick-carousel'

require( './src/scss/style.scss' );

$(function(){
	$('#fullpage').fullpage({
		sectionsColor: ['#FFF', '#FFF', '#EEE', '#FFF'],
		anchors: ['banner', 'profile1', 'profile2', 'lastPage'],
		nevigation: true,
		afterLoad: function(anchorLink, index){
			$(this).find('.slide-in').addClass('active');
		},
		onLeave: function(index, nextIndex, direction){
			$(this).find('.slide-in').removeClass('active');
		}
	});

	$('.index_system_inner').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });
});

$(window).scroll(function(event) {
	//slide-in
	var item=$('.slide-in');
    for(let i=0; i<item.length; i++){
        const slideAt = $(window).innerHeight() + $(window).scrollTop();
        const imageBottom = item.eq(i).offset().top + item.eq(i).height();
        const isHalfShown = slideAt > item.eq(i).offset().top;
        const isNotScrolledPast = $(window).scrollTop() < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            item.eq(i).addClass('active');
        } else {
            item.eq(i).removeClass('active');
        }
    }
});
