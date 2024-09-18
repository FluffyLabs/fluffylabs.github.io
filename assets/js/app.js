//ES6 modules
import Slick from './modules/slick'
import Parallax from './modules/parallax'
import Aos from './modules/aos'
import ScrollDown from './modules/scrollDown'
import Accordion from './modules/accordion'
import Menu from './modules/menu'
import Tab from './modules/tab'
import ToggleText from './modules/toggleText'
import tooltip from './modules/tooltip'
import Popup from './modules/popup'
import Counter from './modules/counter'
$(() => {
    Slick.init()
    Parallax.init()
    ScrollDown.init()
    Accordion.init()
    Menu.init()
    Tab.init()
    ToggleText.init()
    tooltip.init()
    Popup.init()
    Counter.init()
});
 
$(window).on('load', () => {
    Aos.onload()
})