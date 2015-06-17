/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  http://www.appelsiini.net/projects/viewport
 *
 */
!function(e){e.belowthefold=function(t,o){var r=e(window).height()+e(window).scrollTop();return r<=e(t).offset().top-o.threshold},e.abovethetop=function(t,o){var r=e(window).scrollTop();return r>=e(t).offset().top+e(t).height()-o.threshold},e.rightofscreen=function(t,o){var r=e(window).width()+e(window).scrollLeft();return r<=e(t).offset().left-o.threshold},e.leftofscreen=function(t,o){var r=e(window).scrollLeft();return r>=e(t).offset().left+e(t).width()-o.threshold},e.inviewport=function(t,o){return!(e.rightofscreen(t,o)||e.leftofscreen(t,o)||e.belowthefold(t,o)||e.abovethetop(t,o))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return e.abovethetop(t,{threshold:0})},"left-of-screen":function(t){return e.leftofscreen(t,{threshold:0})},"right-of-screen":function(t){return e.rightofscreen(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})}})}(jQuery);
