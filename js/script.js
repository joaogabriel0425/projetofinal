$(document).ready(function(){

    
    $('.slider-container').bxSlider({
        auto: true,
        mode: 'horizontal',
        speed: 500,
        pause: 3000,
        captions: true,
        pager: true
    });

    
    $('.popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

});