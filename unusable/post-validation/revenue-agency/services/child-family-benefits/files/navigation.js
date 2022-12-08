//Ajax anchor script
$( document ).ajaxComplete(function() 
{
var hashtag = location.hash.substr(1);
var elmnt = document.getElementById(hashtag);
if(elmnt){elmnt.scrollIntoView();}
 //empty hash
});


/*!
 * Bootstrap Table of Contents v1.0.1 (http://afeld.github.io/bootstrap-toc/)
 * Copyright 2015 Aidan Feldman
 * Licensed under MIT (https://github.com/afeld/bootstrap-toc/blob/gh-pages/LICENSE.md) */

//Add title to Table of Contents
// Get the page language code
		pgLang = $("html").prop("lang");


		switch( pgLang.toLowerCase() ){
			case "fr":
				$('<h2 class="h3 mrgn-tp-md">Sur cette page</h2>').prependTo("#toc");
				break;
			case "en":
			default:
				$('<h2 class="h3 mrgn-tp-md">On this page</h2>').prependTo("#toc");
		}


(function($) {
  "use strict";


  window.Toc = {
    helpers: {
      // return all matching elements in the set, or their descendants
      findOrFilter: function($el, selector) {
        // http://danielnouri.org/notes/2011/03/14/a-jquery-find-that-also-finds-the-root-element/
        // http://stackoverflow.com/a/12731439/358804
        var $descendants = $el.find(selector);
        return $el
          .filter(selector)
          .add($descendants)
          .filter(":not([data-toc-skip])");
      },

      generateUniqueIdBase: function(el) {
        var text = $(el).text();

        // adapted from
        // https://github.com/bryanbraun/anchorjs/blob/65fede08d0e4a705f72f1e7e6284f643d5ad3cf3/anchor.js#L237-L257

        // Regex for finding the non-safe URL characters (many need escaping): & +$,:;=?@"#{}|^~[`%!'<>]./()*\ (newlines, tabs, backspace, & vertical tabs)
        var nonsafeChars = /[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g,
          urlText;

        // Note: we trim hyphens after truncating because truncating can cause dangling hyphens.
        // Example string:                      // " ⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
        urlText = text
          .trim() // "⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
          .replace(/\'/gi, "") // "⚡⚡ Dont forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
          .replace(nonsafeChars, "-") // "⚡⚡-Dont-forget--URL-fragments-should-be-i18n-friendly--hyphenated--short--and-clean-"
          .replace(/-{2,}/g, "-") // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-short-and-clean-"
          .substring(0, 64) // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-"
          .replace(/^-+|-+$/gm, "") // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated"
          .toLowerCase(); // "⚡⚡-dont-forget-url-fragments-should-be-i18n-friendly-hyphenated"

        return urlText || el.tagName.toLowerCase();
      },

      generateUniqueId: function(el) {
        var anchorBase = this.generateUniqueIdBase(el);
        for (var i = 0; ; i++) {
          var anchor = anchorBase;
          if (i > 0) {
            // add suffix
            anchor += "-" + i;
          }
          // check if ID already exists
          if (!document.getElementById(anchor)) {
            return anchor;
          }
        }
      },

      generateAnchor: function(el) {
        if (el.id) {
          return el.id;
        } else {
          var anchor = this.generateUniqueId(el);
          el.id = anchor;
          return anchor;
        }
      },

		createNavList: function() {
       var shell = $('<ul class="toc-nav"></ul>');
			return shell;
      },

      createChildNavList: function($parent) {
        var $childList = this.createNavList();
        $parent.append($childList);
        return $childList;
      },

      generateNavEl: function(anchor, text) {
        var $a = $('<a></a>');
        $a.attr("href", "#" + anchor);
        $a.text(text);
        var $li = $("<li></li>");
        $li.append($a);
        return $li;
      },

      generateNavItem: function(headingEl) {
        var anchor = this.generateAnchor(headingEl);
        var $heading = $(headingEl);
        var text = $heading.data("toc-text") || $heading.text();
        return this.generateNavEl(anchor, text);
      },

      // Find the first heading level (`<h1>`, then `<h2>`, etc.) that has more than one element. Defaults to 1 (for `<h1>`).
      getTopLevel: function($scope) {
        for (var i = 1; i <= 6; i++) {
          var $headings = this.findOrFilter($scope, "h" + i);
          if ($headings.length > 1) {
            return i;
          }
        }

        return 1;
      },

      // returns the elements for the top level, and the next below it
      getHeadings: function($scope, topLevel) {
        var topSelector = "h" + topLevel;

        var secondaryLevel = topLevel + 1;
        var secondarySelector = "h" + secondaryLevel;

        return this.findOrFilter($scope, topSelector + "," + secondarySelector);
      },

      getNavLevel: function(el) {
        return parseInt(el.tagName.charAt(1), 10);
      },

      populateNav: function($topContext, topLevel, $headings) {
        var $context = $topContext;
        var $prevNav;

        var helpers = this;
        $headings.each(function(i, el) {
          var $newNav = helpers.generateNavItem(el);
          var navLevel = helpers.getNavLevel(el);

          // determine the proper $context
          if (navLevel === topLevel) {
            // use top level
            $context = $topContext;
          } else if ($prevNav && $context === $topContext) {
            // create a new level of the tree and switch to it
            $context = helpers.createChildNavList($prevNav);
          } // else use the current $context

          $context.append($newNav);

          $prevNav = $newNav;
        });
      },

      parseOps: function(arg) {
        var opts;
        if (arg.jquery) {
          opts = {
            $nav: arg
          };
        } else {
          opts = arg;
        }
        opts.$scope = opts.$scope || $(document.body);
        return opts;
      }
    },

    // accepts a jQuery object, or an options object
    init: function(opts) {
      opts = this.helpers.parseOps(opts);

      // ensure that the data attribute is in place for styling
      opts.$nav.attr("data-toggle", "toc");

      var $topContext = this.helpers.createChildNavList(opts.$nav);
      var topLevel = this.helpers.getTopLevel(opts.$scope);
      var $headings = this.helpers.getHeadings(opts.$scope, topLevel);
      this.helpers.populateNav($topContext, topLevel, $headings);
    }
  };

  $(function() {
    $('nav[data-toggle="toc"]').each(function(i, el) {
      var $nav = $(el);
      Toc.init($nav);
    });
  });
})(jQuery);

/*Restrict function to H2 in steps-content section*/
	$(function() {
  var navSelector = "#toc";
  var $myNav = $(navSelector);
  Toc.init({$nav: $("#toc"), $scope: $('#steps-content h2[id]')
});

});

/*Top of page scroll */
 $(function(){
	"use strict";

	 var lastScrollTop = 0, delta = 5;

	 $(window).scroll(function(){
		 var nowScrollTop = $(this).scrollTop();
		 if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
		 	if (nowScrollTop > lastScrollTop){
		 		$("#tp-pg").removeClass("stuck");
		 	}
else if (nowScrollTop < delta ) {	$("#tp-pg").removeClass("stuck");}
else {
		 		 $("#tp-pg").addClass("stuck");
			}
		 lastScrollTop = nowScrollTop;
		 }
	 });
 });
$(function(){
$('#tp-pg').on('click', function(){
    $(this).removeClass('stuck');

});
});
/*Identifier for active page and Pagnation builder*/
$(function() {
	"use strict";
		function activeTake(){
 var lastpart  = window.location.pathname.split("/").pop();
   var targetitem = $('.vertical-steps li a[href*="' + lastpart + '"]')

	var posttarget = targetitem.removeAttr("href").parents('li').addClass('active').parents().removeClass("hidden");
	var active = $("li.active");

	active.prevAll().addClass("completed");
  active.children("ol,ul").removeClass("hidden");
	active.closest("li").parents("li").removeClass("active").addClass("completed");
	return true;}

		function pagNation() {
var selected = $("li.active a");
var anchors = $("#steps-menu a");

var pos = anchors.index(selected);
var next = anchors.get(pos+1);
var prev = anchors.get(pos-1);


//var nextPagE = $('<span class="wb-inv-md wb-inv-lg">Next </span>');
//var nextPagF = $('<span class="wb-inv-md wb-inv-lg">Suivant </span>');
var nextPagE = $('<span class="wb-inv">Next </span>');
var nextPagF = $('<span class="wb-inv">Suivant </span>');
//var prevPagE = $('<span class="wb-inv-lg">Previous </span>');
//var prevPagF = $('<span class="wb-inv-lg">Précédent </span>');

if ($(".section-menu").find("li:first").is(".active")){
switch( pgLang.toLowerCase() ){
			case "fr":
				//$(next).clone().appendTo( ".pull-pager .next" ).attr({"rel":"next"}).wrapInner('<span class="wb-inv-xs wb-inv-sm"></span>').prepend(nextPagF);
		$(next).clone().appendTo( ".pull-pager .next" ).attr({"rel":"next"}).prepend(nextPagF);
				
		break;
			case "en":
			default:
//$(next).clone().appendTo( ".pull-pager .next" ).attr({"rel":"next"}).wrapInner('<span class="wb-inv-xs wb-inv-sm"></span>').prepend(nextPagE);
$(next).clone().appendTo( ".pull-pager .next" ).attr({"rel":"next"}).prepend(nextPagE);		
}
}

	if (!$(".section-menu").find("li:first").is(".active")){
	switch( pgLang.toLowerCase() ){
			case "fr":
		//$(next).clone().appendTo( ".pull-pager .next" ).attr({"rel":"next"}).wrapInner('<span class="wb-inv-xs wb-inv-sm"></span>').prepend(nextPagF);
	$(next).clone().appendTo( ".pull-pager .next" ).attr({"rel":"next"}).prepend(nextPagF);
			//$(prev).clone().appendTo(".pull-pager .previous" ).attr({"rel":"prev"}).wrapInner(prevPagF);
				break;
			case "en":
			default:
		//	$(next).clone().appendTo( ".pull-pager .next" ).attr({"rel":"next"}).wrapInner('<span class="wb-inv-xs wb-inv-sm"></span>').prepend(nextPagE);
		$(next).clone().appendTo( ".pull-pager .next" ).attr({"rel":"next"}).prepend(nextPagE);
	//$(prev).clone().appendTo(".pull-pager .previous" ).attr({"rel":"prev"}).wrapInner('<span class="wb-inv-xs wb-inv-sm wb-inv-md"></span>').prepend(prevPagE);
		}
}}

$( document ).on( "wb-ready.wb", function( event ) {

$.get(activeTake()).done(pagNation());
  })
});
/*Navigation collapse in small devices */
$( document ).on( "wb-ready.wb", function( event ) {
$(".menu-title").clone().removeClass("menu-title").insertBefore(".menu-header").addClass("hidden");
$(".menu-header .menu-title").replaceWith(function () {
    return $('<p />', {
		class: "menu-title",
        html: '<span class="wb-inv-md wb-inv-lg">' + document.getElementById("wb-cont-section").innerHTML + ':</span> ' + this.innerHTML
    });
});
$(window).resize(function() {
var $parent = $( "main.container"), $html = $('.section-menu'), $htmlHeader = $('.section-menu .menu-header'), $htmlTitle = $('.section-menu .menu-title');
var margin = $parent.width() - 30;
if ($html.width() >= margin ) {
return $html.addClass('mobile'), $htmlHeader.attr({'role': 'button', 'tabindex': '0'}).attr('aria-expanded', function() {if ($html.hasClass('open')) {return "true"}
 else {return "false"}
});
}
	$html.removeClass('mobile')
$htmlHeader.removeAttr('aria-expanded role tabindex');
}).trigger('resize');

function navClick(event){
    if(event.type === 'click'){
        return true;
    }
    else if(event.type === 'keypress'){
        var code = event.charCode || event.keyCode;
        if((code === 32)|| (code === 13)){
            return true;
        }
    }
    else{
        return false;
    }
}
// $( document).on('click keypress', '.section-menu.mobile .menu-header', function(event) {
// 	if(navClick(event)=== true) {
// 	  $( this ).attr('aria-expanded',$(this).attr('aria-expanded')==='false'?'true':'false' );
// 		$(".menu-body").slideToggle(500, function(){$( this ).parent('.section-menu.mobile').toggleClass( "open" ), $(this).removeAttr('style');});
// }}); disable the click behaviour
	});
//Append second H1 anchor link to mobile nav menu items
$( document ).on( "wb-ready.wb", function() {
"use strict";
        $('.section-menu-sub a').each(function(){ 
        if ($(window).width() < 992) {  
           $(this).attr("href", $(this).attr("href") + "#wb-cont");
		}
			
        });
    });
