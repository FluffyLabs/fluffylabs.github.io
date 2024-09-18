import counterUp from 'counterup2'
require( 'waypoints/lib/noframework.waypoints.js' )
const Counter = {
    init() {
        const counters = document.querySelectorAll( '.counter' );
        for(const el of counters) {
            new Waypoint( {
                element: el,
                handler: function() { 
                    counterUp( el ) 
                    this.destroy()
                },
                offset: 'bottom-in-view',
            } )
        }
        const el = document.querySelector( '.counter' )

    }
  }
  
export default Counter