( function ( $ ) {
    "use strict";
    var componentName = "gc-menu",
        selector = "." + componentName,
        $document = $( document),

        render = function ( event ) {
            var elm = event.currentTarget,
                $elm = $( elm );

            if ( elm.getAttribute( "aria-expanded" ) === "true" ) {
                return
            } else {
                $( "button" ).attr( "aria-expanded", false );
                $elm.attr( "aria-expanded", true );
            }
        };

    $document.on( "click", "button[aria-expanded]", function( event ) {
        render( event )
    });
} )( jQuery, window );
