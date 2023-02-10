( function( $, window, wb  ) {
    "use strcit";

    var componentName = "gc-mnu",
        selector = "." + componentName,
        initEvent = "wb-init" + selector,
        $document = wb.doc,
        init = function( event ) {
            var elm = wb.init( event, componentName, selector ),
                $elm,
                settings;
            if ( elm ) {
                $elm = $( elm );
                settings = wb.getData( $elm, componentName );
                $elm.trigger( "load", settings );
                wb.ready( $elm, componentName )
            }
        },
        render = function ( event, data ) {
            var elm = event.currentTarget,
                $elm = $( elm );

            if ( elm.getAttribute( "aria-expanded" ) === "true" ) {
                return
            } else {
                $( "button" ).attr( "aria-expanded", false );
                $elm.attr( "aria-expanded", true );
            }
            /* $( "#wb-so a" ).attr( "href" );
            $( "#wb-so .hidden-xs" ).text( );
            $each( function( key, value ) {
                $( "#gc-contextual a" ).text( value.text );
                $( "#gc-contextual a").attr( "href", value.url );
            } ) */
        };

    $document.on( "click", ".gc-mnu button", function( event, data ) {
        render( event, data )
    });
    $document.on( "timerpoke.wb" + initEvent, selector, init );
    wb.add( selector );
} )( jQuery, window, wb );
    
/*

       
    }
*/
