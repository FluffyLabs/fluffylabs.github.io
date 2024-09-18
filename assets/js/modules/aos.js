var AOS = require('aos');

const Aos = {
    onload() {
        AOS.init({
            once: true
        });
    }
  }
  
  export default Aos