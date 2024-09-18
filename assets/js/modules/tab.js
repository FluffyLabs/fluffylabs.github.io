const Tab = {
    init() {
        $(".sub-menu-list .item a").on("click", function() {
            if (!$($(this).attr("href")).is(":visible")) {
                $(".tab-item").hide()
                $(`[data-id-tab="${$(this).attr("href")}"]`).fadeIn()
                $(".sub-menu-list .item").removeClass("current")
                $(this).closest(".item").addClass("current")
                if ($(`[data-id-tab="${$(this).attr("href")}"]`).attr('data-submenu-color')) {
                    $(".sub-menu").addClass($(`[data-id-tab="${$(this).attr("href")}"]`).attr('data-submenu-color'))
                } else {
                    $(".sub-menu").removeClass("black")
                }
                $(window).trigger('resize');
            }
        })
        if (window.location.hash) {
            var val = window.location.hash
            if (!$(val).is(":visible")) {
                $(".tab-item").hide()
                $(`[data-id-tab="${val}"]`).fadeIn()
                $(".sub-menu-list .item").removeClass("current")
                $(`[href="${val}"]`).closest(".item").addClass("current")
                $(`.tab-select select option[value="${val}"]`).attr('selected','selected');
                if ($(`[data-id-tab="${val}"]`).attr('data-submenu-color')) {
                    $(".sub-menu").addClass($(`[data-id-tab="${val}"]`).attr('data-submenu-color'))
                } else {
                    $(".sub-menu").removeClass("black")
                }
            }
        }
    }
  }
  
export default Tab