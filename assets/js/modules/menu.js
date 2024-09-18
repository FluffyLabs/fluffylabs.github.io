const Menu = {
    init() {
        $(".menu-toggle").on("click", function() {
            if ($(".header:not(.footer) ul").hasClass("open")) {
                $(".menu-inner").removeClass("open-submenu")
                $(".menu-list > li").removeClass("open-submenu")
            }
            $("body").toggleClass("hidden-ov")
            $(this).toggleClass("open");
            $(".header:not(.footer) ul").toggleClass("open");
        })
        $(document).mouseup(function(e) 
        {
            var container = $(".menu-inner, .menu-toggle");
    
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                if ($(".nav").hasClass("open")) {
                    $(".menu-inner").removeClass("open-submenu")
                    $(".menu-list > li").removeClass("open-submenu")
                }
                $("body").removeClass("hidden-ov")
                $(".nav, .menu-toggle").removeClass("open");
            }
        });
        $(".toggle-menu").on("click", function() {
            $(this).toggleClass("open")
            $(this).closest("li").find(".submenu").slideToggle()
        })
        $(".list-load-more").on("click", function() {
            $(this).hide()
            $(".projects .list").addClass("open");
        })
    }
  }
  
export default Menu