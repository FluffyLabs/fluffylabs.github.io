import 'slick-carousel'

const Slick = {
    init() {
        if ($('.slider-text').length) {
            $(".slider-text").each(function() {
                var slider = $(this).slick({
    
                })
                var counter = $(this).prev(".slider-text-counter");
                slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                    counter.find(".current").html(nextSlide + 1)
                });
            })
        }
        if ($(".slider-text-vertical").length) {
            $(".slider-text-vertical").slick({
                vertical: true,
                arrows: false,
                autoplay: true,
                slidesToShow: 1
            })
        }
        if ($(".slider-office").length) {
            var sliderOffice = $(".slider-office").slick({
                slidesToShow: 2,
                arrows: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            variableWidth: true,
                            slidesToShow: 1,
                            dots: true
                        }
                    }
                ]
            })
            $(".slider-office-next").on("click", function(e) {
                e.preventDefault();
                sliderOffice.slick('slickNext')
            })
        }
        if ($(".js-slider").length) {
            var gallery = $(".js-slider").slick({
                fade: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            dots: true
                        }
                    }
                ]
            })
            gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                $(".js-slider-count .current").html(nextSlide + 1);
            });
        }
        if ($(".js-storytell").length) {
            var storytell = $(".js-storytell").slick({
                fade: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            dots: false
                        }
                    }
                ]
            })
            storytell.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                $(".js-storytell-count .current").html(nextSlide + 1);
                if (nextSlide == 0) {
                    $(".js-storytell-count, .section-storytell .slick-arrow").removeClass("black")
                } else {
                    $(".js-storytell-count, .section-storytell .slick-arrow").addClass("black")
                }
            });
        }
        if ($(".js-counter").length) {
            $(".js-counter").slick({
                slidesToShow: 3,
                arrows: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            variableWidth: true,
                            slidesToShow: 1,
                            dots: false
                        }
                    }
                ]
            })
        }
        if ($(".related-slider").length) {
            $(".related-slider").slick({
                slidesToShow: 3,
                arrows: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            variableWidth: true,
                            slidesToShow: 1,
                            dots: true
                        }
                    }
                ]
            })
        }
    }
  }
  
  export default Slick