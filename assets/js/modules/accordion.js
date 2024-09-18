const Accordion = {
    init() {
        $(".accordion-btn").on("click", function() {
            if ($(this).hasClass("open")) {
                $(this).next('.accordion-slide').slideUp();
                $(this).removeClass("open");
                $(this).closest(".toggle").find(".item").removeClass("open")
                $(this).closest(".toggle").find(".item").removeClass("done")
            } else {
                $(this).closest(".toggle").find(".item").removeClass("open")
                $(this).closest(".toggle").find(".accordion-btn").removeClass("open")
                $(this).closest(".toggle").find(".accordion-slide").slideUp();
                $(this).next('.accordion-slide').slideDown();
                $(this).addClass("open");
                $(this).closest(".item").addClass("open")
                $(this).closest(".item").prevAll(".item").addClass("done");
                var open = $(this)
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: open.offset().top - 100
                    }, 1000);
                }, 500)
            }
        })
    }
  }
  
export default Accordion