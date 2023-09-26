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

            if ($document.width() < 992 ) {
                $( [ document.documentElement, document.body ] ).animate( {
                    scrollTop: $( "#wb-so" ).offset().top
                  }, 1 );
            }
        };

    $document.on( "click", "button[aria-expanded]", function( event ) {
        render( event )
    });
    $document.on( "ready", function() {
        var searchParams = new URLSearchParams( window.location.search ),
            $button;
        if ( searchParams.has( "t" ) ) {
            $button = $( "button" ).filter( function () {
//              return $( this ).text()toLowerCase() === searchParams.get( "t" )toLowerCase();
                return $( this ).text().toLowerCase().includes( searchParams.get( "t" ).toLowerCase() );
            });
            $button.click();
        }
    })
} )( jQuery, window );

/*
      if ($("html").hasClass("smallview") || $("html").hasClass("xxsmallview")) {
          $([document.documentElement, document.body]).animate({
            scrollTop: $(".mobile-nav-toggle").offset().top
          }, 1);
        }
*/