

const toggleText = {
    init() {
        $(".toggle-btn").on("click", function(e) {
            e.preventDefault()
            if ($(this).closest(".toggle-content").find(".toggle-slide").is(":visible")) {
                $(this).closest(".toggle-content").find(".toggle-slide").slideUp(500, function() {
                    jQuery(window).trigger('resize').trigger('scroll');
                });
                $(this).removeClass("open")
            } else {
                $(".toggle-content").find(".toggle-slide").slideUp()
                $(this).closest(".toggle-content").find(".toggle-slide").slideDown(500, function() {
                    jQuery(window).trigger('resize').trigger('scroll');
                })
                $(this).addClass("open")
            }
        })
    }
  }
  
export default toggleText
  
