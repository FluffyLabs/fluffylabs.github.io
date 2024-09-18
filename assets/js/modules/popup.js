const Popup = {
    init() {
        $(".close-popup").on("click", function(e) {
            e.preventDefault()
            $(this).closest(".js-popup").removeClass("open")
        })
    }
  }
  
export default Popup