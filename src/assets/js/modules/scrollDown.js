const ScrollDown = {
    init() {
        $(".scroll-down").click(function () {
            $('html, body').animate({
                scrollTop: $($(this).attr("href")).offset().top - 50
            }, 1000);
            $(".header:not(.footer) ul").removeClass("open");
            $(".menu-toggle").removeClass("open");
        });
    }
  }
  
export default ScrollDown