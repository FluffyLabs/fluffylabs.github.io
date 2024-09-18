import 'jquery-parallax.js'


const Parallax = {
    init() {
        if ($(".parallax-window-scroll").length) {
            $(".parallax-window-scroll").each(function() {
                if ($(window).width() > 767) {
                    $(this).parallax({imageSrc: $(this).attr("data-image-src")});
                } else {
                    $(this).parallax({imageSrc: $(this).attr("data-image-src-mobile")});
                }
            })
        }
    }
  }
  
export default Parallax
  
