/*global $, window, CanvasLoader, jQuery, alert, requestAnimationFrame, cancelAnimationFrame */
/*jslint browser:true, devel:true */

/*!
 * 360 degree Image Slider Fullscreen plugin v1.0.0
 * http://gaurav.jassal.me/lab
 *
 * Copyright 2013, gaurav@jassal.me
 * Dual licensed under the MIT or GPL Version 3 licenses.
 *
 */


(function($) {
  "use strict";
  $.ThreeSixtyFullscreen = function (el, options) {
    var plugin = this,
      $el = el,
      opts = options,
      $button = $('<a href="#" class="fs-enable">Fullscreen</a>'),
      isFullscreen = false;

    // Attach event to the plugin
    $button.on('click', function(event) {
      plugin.onClickHandler.apply(this, event);
    });

    /**
     * Set styles for the plugin interface.
     * @return {Object} this
     */
    plugin.setStyles = function() {
      $button.css({
        'z-index': 9999,
        'display': 'block',
        'position': 'absolute',
        'background': 'url(https://cdn.shopify.com/s/files/1/1063/1348/files/fs.png?17296902712057766392) no-repeat',
        'width': '20px',
        'height': '20px',
        'text-indent': '-99999px',
        'right': '5px',
        'bottom': '5px',
        'background-position': '0px -20px'
      });
      return this;
    };

    /**
     * Initilize the fullscreen plugin
     * @param  {Object} opt override options
     */
    plugin.init = function() {
      plugin.setStyles();
      $el.prepend($button);
    };

    plugin.onClickHandler = function(e) {
      //console.log('hi');
      var elem;
      if(typeof $el.attr('id') !== 'undefined') {
        elem = document.getElementById($el.attr('id'));
      } else if(typeof $el.parent().attr('id') !== 'undefined'){
        elem = document.getElementById($el.parent().attr('id'));
      } else {
        return false;
      }
      var elemOr  = document.getElementById('product-views');
      plugin.toggleFullscreen(elemOr);
    };

    plugin.toggleButton = function () {
      if(isFullscreen) {
        $button.css({
          'background-position': '0px 0px'
        });
      } else {
        $button.css({
          'background-position': '0px -20px'
        });
      }
    };

    plugin.toggleFullscreen = function (elem) {
      if(isFullscreen) {
        plugin.cancelfullscreen(elem);
        isFullscreen = false;
      } else {
        plugin.fullscreen(elem);
        isFullscreen = true;
      }
      plugin.toggleButton();
    };

    plugin.fullscreen = function (elem) {
      //cst safari support



      if (!document.mozFullScreen && !document.webkitFullScreen) {
        if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else {
          //cst edited webkitRequestFullScreen to have
          //lower case "s" in screen.
          elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else {
          document.webkitCancelFullScreen();
        }
      }
    };

    plugin.cancelfullscreen = function (elem) {
      if(document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if(document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    };
    plugin.init();
  };
}(jQuery));