//滑出動畫
$(window).scroll(function(){
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
})
