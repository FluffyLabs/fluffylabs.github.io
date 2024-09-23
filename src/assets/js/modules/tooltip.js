

const tooltip = {
    init() {
        $(document).on("mouseenter",'[data-tooltip]:not([data-tooltip=""])', function(){ $(this).append('<span class="tooltip" style="transform: translate3d(-50%, calc(-100% - 20px), 0)">'+$(this).data("tooltip")+"</span>")})
        $(document).on("mouseleave",'[data-tooltip]:not([data-tooltip=""])',function(){$(this).find(".tooltip").remove()})
        $(document).on("mousemove",'[data-tooltip]:not([data-tooltip=""])',function(t){$(this).find(".tooltip").css({position:"fixed",top:t.clientY+"px",left:t.clientX+"px"})})
    }
  }
  
export default tooltip
  
