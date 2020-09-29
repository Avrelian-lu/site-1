$(function(){
    $(".slider-items").slick({
        prevArrow:
          '<button type="button" class="slick-prev slick-btn"><img src="images/backarrow.svg" alt=""></button>',
        nextArrow:
          '<button type="button" class="slick-next slick-btn"><img src="images/nextarrow.svg" alt=""></button>',
        autoplay: true,
        fade: true, 
        responsive: [{
          breakpoint: 700,
          settings: {
              arrows : false
          }
      }, ]
    });
});