!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var o = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
      return e[t];
    }.bind(null, o));
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 1);
}([function (e, t, n) {
  "use strict";

  function i() {
    return (i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];

        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }

      return e;
    }).apply(this, arguments);
  }

  function o(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  n.d(t, "a", function () {
    return l;
  });

  var s,
      r,
      a,
      l = function () {
    function e(t) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e);
      this.config = i({
        backscroll: !0,
        linkAttributeName: "data-hystmodal",
        closeOnOverlay: !0,
        closeOnEsc: !0,
        closeOnButton: !0,
        waitTransitions: !1,
        catchFocus: !0,
        fixedSelectors: "*[data-hystfixed]",
        beforeOpen: function () {},
        afterClose: function () {}
      }, t), this.config.linkAttributeName && this.init(), this._closeAfterTransition = this._closeAfterTransition.bind(this);
    }

    var t, n, s;
    return t = e, (n = [{
      key: "init",
      value: function () {
        this.isOpened = !1, this.openedWindow = !1, this.starter = !1, this._nextWindows = !1, this._scrollPosition = 0, this._reopenTrigger = !1, this._overlayChecker = !1, this._isMoved = !1, this._focusElements = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], this._modalBlock = !1, e._shadow || (e._shadow = document.createElement("button"), e._shadow.classList.add("hystmodal__shadow"), document.body.appendChild(e._shadow)), this.eventsFeeler();
      }
    }, {
      key: "eventsFeeler",
      value: function () {
        document.addEventListener("click", function (e) {
          var t = e.target.closest("[" + this.config.linkAttributeName + "]");

          if (!this._isMoved && t) {
            e.preventDefault(), this.starter = t;
            var n = this.starter.getAttribute(this.config.linkAttributeName);
            return this._nextWindows = document.querySelector(n), void this.open();
          }

          this.config.closeOnButton && e.target.closest("[data-hystclose]") && this.close();
        }.bind(this)), this.config.closeOnOverlay && (document.addEventListener("mousedown", function (e) {
          !this._isMoved && e.target instanceof Element && !e.target.classList.contains("hystmodal__wrap") || (this._overlayChecker = !0);
        }.bind(this)), document.addEventListener("mouseup", function (e) {
          if (!this._isMoved && e.target instanceof Element && this._overlayChecker && e.target.classList.contains("hystmodal__wrap")) return e.preventDefault(), this._overlayChecker, void this.close();
          this._overlayChecker = !1;
        }.bind(this))), window.addEventListener("keydown", function (e) {
          if (!this._isMoved && this.config.closeOnEsc && 27 == e.which && this.isOpened) return e.preventDefault(), void this.close();
          !this._isMoved && this.config.catchFocus && 9 == e.which && this.isOpened && this.focusCatcher(e);
        }.bind(this));
      }
    }, {
      key: "open",
      value: function (t) {
        if (t && (this._nextWindows = "string" == typeof t ? document.querySelector(t) : t), this._nextWindows) {
          if (this.isOpened) return this._reopenTrigger = !0, void this.close();
          this.openedWindow = this._nextWindows, this._modalBlock = this.openedWindow.querySelector(".hystmodal__window"), this.config.beforeOpen(this), this._bodyScrollControl(), e._shadow.classList.add("hystmodal__shadow--show"), this.openedWindow.classList.add("hystmodal--active"), this.openedWindow.setAttribute("aria-hidden", "false"), this.config.catchFocus && this.focusContol(), this.isOpened = !0;
        } else console.log("Warinig: hustModal selector is not found");
      }
    }, {
      key: "close",
      value: function () {
        this.isOpened && (this.config.waitTransitions ? (this.openedWindow.classList.add("hystmodal--moved"), this._isMoved = !0, this.openedWindow.addEventListener("transitionend", this._closeAfterTransition), this.openedWindow.classList.remove("hystmodal--active")) : (this.openedWindow.classList.remove("hystmodal--active"), this._closeAfterTransition()));
      }
    }, {
      key: "_closeAfterTransition",
      value: function () {
        this.openedWindow.classList.remove("hystmodal--moved"), this.openedWindow.removeEventListener("transitionend", this._closeAfterTransition), this._isMoved = !1, e._shadow.classList.remove("hystmodal__shadow--show"), this.openedWindow.setAttribute("aria-hidden", "true"), this.config.catchFocus && this.focusContol(), this._bodyScrollControl(), this.isOpened = !1, this.openedWindow.scrollTop = 0, this.config.afterClose(this), this._reopenTrigger && (this._reopenTrigger = !1, this.open());
      }
    }, {
      key: "focusContol",
      value: function () {
        var e = this.openedWindow.querySelectorAll(this._focusElements);
        this.isOpened && this.starter ? this.starter.focus() : e.length && e[0].focus();
      }
    }, {
      key: "focusCatcher",
      value: function (e) {
        var t = this.openedWindow.querySelectorAll(this._focusElements),
            n = Array.prototype.slice.call(t);

        if (this.openedWindow.contains(document.activeElement)) {
          var i = n.indexOf(document.activeElement);
          console.log(i), e.shiftKey && 0 === i && (n[n.length - 1].focus(), e.preventDefault()), e.shiftKey || i !== n.length - 1 || (n[0].focus(), e.preventDefault());
        } else n[0].focus(), e.preventDefault();
      }
    }, {
      key: "_bodyScrollControl",
      value: function () {
        if (this.config.backscroll) {
          var e = Array.prototype.slice.call(document.querySelectorAll(this.config.fixedSelectors)),
              t = document.documentElement;
          if (!0 === this.isOpened) return t.classList.remove("hystmodal__opened"), t.style.marginRight = "", e.map(function (e) {
            e.style.marginRight = "";
          }), window.scrollTo(0, this._scrollPosition), void (t.style.top = "");
          this._scrollPosition = window.pageYOffset;
          var n = window.innerWidth - t.clientWidth;
          t.style.top = -this._scrollPosition + "px", n && (t.style.marginRight = n + "px", e.map(function (e) {
            e.style.marginRight = parseInt(getComputedStyle(e).marginRight) + n + "px";
          })), t.classList.add("hystmodal__opened");
        }
      }
    }]) && o(t.prototype, n), s && o(t, s), e;
  }();

  a = !1, (r = "_shadow") in (s = l) ? Object.defineProperty(s, r, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[r] = a;
}, function (e, t, n) {
  "use strict";

  n.r(t), function (e) {
    var t = n(0);
    n(3), n(4);
    e.HystModal = t.a;
  }.call(this, n(2));
}, function (e, t) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (e) {
    "object" == typeof window && (n = window);
  }

  e.exports = n;
}, function (e, t) {
  Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (e) {
    var t = this;

    do {
      if (t.matches(e)) return t;
      t = t.parentElement || t.parentNode;
    } while (null !== t && 1 === t.nodeType);

    return null;
  });
}, function (e, t, n) {}]);
/**
 shave - Shave is a javascript plugin that truncates multi-line text within a html element based on set max height
 @version v2.5.7
 @link https://github.com/dollarshaveclub/shave#readme
 @author Jeff Wainwright <yowainwright@gmail.com> (jeffry.in)
 @license MIT
 **/

!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).shave = t();
}(this, function () {
  "use strict";

  return function (e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    if (void 0 === t || isNaN(t)) throw Error("maxHeight is required");
    var i = "string" == typeof e ? document.querySelectorAll(e) : e;

    if (i) {
      var o = n.character || "…",
          a = n.classname || "js-shave",
          s = "boolean" != typeof n.spaces || n.spaces,
          r = '<span class="js-shave-char">'.concat(o, "</span>");
      "length" in i || (i = [i]);

      for (var c = 0; c < i.length; c += 1) {
        var l = i[c],
            h = l.style,
            d = l.querySelector(".".concat(a)),
            f = void 0 === l.textContent ? "innerText" : "textContent";
        d && (l.removeChild(l.querySelector(".js-shave-char")), l[f] = l[f]);
        var v = l[f],
            g = s ? v.split(" ") : v;

        if (!(g.length < 2)) {
          var u = h.height;
          h.height = "auto";
          var p = h.maxHeight;
          if (h.maxHeight = "none", l.offsetHeight <= t) h.height = u, h.maxHeight = p;else {
            for (var m = g.length - 1, x = 0, y = void 0; x < m;) y = x + m + 1 >> 1, l[f] = s ? g.slice(0, y).join(" ") : g.slice(0, y), l.insertAdjacentHTML("beforeend", r), l.offsetHeight > t ? m = y - 1 : x = y;

            l[f] = s ? g.slice(0, m).join(" ") : g.slice(0, m), l.insertAdjacentHTML("beforeend", r);
            var j = s ? " ".concat(g.slice(m).join(" ")) : g.slice(m),
                H = document.createTextNode(j),
                b = document.createElement("span");
            b.classList.add(a), b.style.display = "none", b.appendChild(H), l.insertAdjacentElement("beforeend", b), h.height = u, h.maxHeight = p;
          }
        }
      }
    }
  };
});
'use strict';
/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */


(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    root.ResizeSensor = factory();
  }
})(typeof window !== 'undefined' ? window : this, function () {
  // Make sure it does not throw in a SSR (Server Side Rendering) situation
  if (typeof window === "undefined") {
    return null;
  } // https://github.com/Semantic-Org/Semantic-UI/issues/3855
  // https://github.com/marcj/css-element-queries/issues/257


  var globalWindow = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')(); // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
  // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
  // would generate too many unnecessary events.

  var requestAnimationFrame = globalWindow.requestAnimationFrame || globalWindow.mozRequestAnimationFrame || globalWindow.webkitRequestAnimationFrame || function (fn) {
    return globalWindow.setTimeout(fn, 20);
  };

  var cancelAnimationFrame = globalWindow.cancelAnimationFrame || globalWindow.mozCancelAnimationFrame || globalWindow.webkitCancelAnimationFrame || function (timer) {
    globalWindow.clearTimeout(timer);
  };
  /**
   * Iterate over each of the provided element(s).
   *
   * @param {HTMLElement|HTMLElement[]} elements
   * @param {Function}                  callback
   */


  function forEachElement(elements, callback) {
    var elementsType = Object.prototype.toString.call(elements);
    var isCollectionTyped = '[object Array]' === elementsType || '[object NodeList]' === elementsType || '[object HTMLCollection]' === elementsType || '[object Object]' === elementsType || 'undefined' !== typeof jQuery && elements instanceof jQuery //jquery
    || 'undefined' !== typeof Elements && elements instanceof Elements //mootools
    ;
    var i = 0,
        j = elements.length;

    if (isCollectionTyped) {
      for (; i < j; i++) {
        callback(elements[i]);
      }
    } else {
      callback(elements);
    }
  }
  /**
   * Get element size
   * @param {HTMLElement} element
   * @returns {Object} {width, height}
   */


  function getElementSize(element) {
    if (!element.getBoundingClientRect) {
      return {
        width: element.offsetWidth,
        height: element.offsetHeight
      };
    }

    var rect = element.getBoundingClientRect();
    return {
      width: Math.round(rect.width),
      height: Math.round(rect.height)
    };
  }
  /**
   * Apply CSS styles to element.
   *
   * @param {HTMLElement} element
   * @param {Object} style
   */


  function setStyle(element, style) {
    Object.keys(style).forEach(function (key) {
      element.style[key] = style[key];
    });
  }
  /**
   * Class for dimension change detection.
   *
   * @param {Element|Element[]|Elements|jQuery} element
   * @param {Function} callback
   *
   * @constructor
   */


  var ResizeSensor = function (element, callback) {
    //Is used when checking in reset() only for invisible elements
    var lastAnimationFrameForInvisibleCheck = 0;
    /**
     *
     * @constructor
     */

    function EventQueue() {
      var q = [];

      this.add = function (ev) {
        q.push(ev);
      };

      var i, j;

      this.call = function (sizeInfo) {
        for (i = 0, j = q.length; i < j; i++) {
          q[i].call(this, sizeInfo);
        }
      };

      this.remove = function (ev) {
        var newQueue = [];

        for (i = 0, j = q.length; i < j; i++) {
          if (q[i] !== ev) newQueue.push(q[i]);
        }

        q = newQueue;
      };

      this.length = function () {
        return q.length;
      };
    }
    /**
     *
     * @param {HTMLElement} element
     * @param {Function}    resized
     */


    function attachResizeEvent(element, resized) {
      if (!element) return;

      if (element.resizedAttached) {
        element.resizedAttached.add(resized);
        return;
      }

      element.resizedAttached = new EventQueue();
      element.resizedAttached.add(resized);
      element.resizeSensor = document.createElement('div');
      element.resizeSensor.dir = 'ltr';
      element.resizeSensor.className = 'resize-sensor';
      var style = {
        pointerEvents: 'none',
        position: 'absolute',
        left: '0px',
        top: '0px',
        right: '0px',
        bottom: '0px',
        overflow: 'hidden',
        zIndex: '-1',
        visibility: 'hidden',
        maxWidth: '100%'
      };
      var styleChild = {
        position: 'absolute',
        left: '0px',
        top: '0px',
        transition: '0s'
      };
      setStyle(element.resizeSensor, style);
      var expand = document.createElement('div');
      expand.className = 'resize-sensor-expand';
      setStyle(expand, style);
      var expandChild = document.createElement('div');
      setStyle(expandChild, styleChild);
      expand.appendChild(expandChild);
      var shrink = document.createElement('div');
      shrink.className = 'resize-sensor-shrink';
      setStyle(shrink, style);
      var shrinkChild = document.createElement('div');
      setStyle(shrinkChild, styleChild);
      setStyle(shrinkChild, {
        width: '200%',
        height: '200%'
      });
      shrink.appendChild(shrinkChild);
      element.resizeSensor.appendChild(expand);
      element.resizeSensor.appendChild(shrink);
      element.appendChild(element.resizeSensor);
      var computedStyle = window.getComputedStyle(element);
      var position = computedStyle ? computedStyle.getPropertyValue('position') : null;

      if ('absolute' !== position && 'relative' !== position && 'fixed' !== position && 'sticky' !== position) {
        element.style.position = 'relative';
      }

      var dirty = false; //last request animation frame id used in onscroll event

      var rafId = 0;
      var size = getElementSize(element);
      var lastWidth = 0;
      var lastHeight = 0;
      var initialHiddenCheck = true;
      lastAnimationFrameForInvisibleCheck = 0;

      var resetExpandShrink = function () {
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        expandChild.style.width = width + 10 + 'px';
        expandChild.style.height = height + 10 + 'px';
        expand.scrollLeft = width + 10;
        expand.scrollTop = height + 10;
        shrink.scrollLeft = width + 10;
        shrink.scrollTop = height + 10;
      };

      var reset = function () {
        // Check if element is hidden
        if (initialHiddenCheck) {
          var invisible = element.offsetWidth === 0 && element.offsetHeight === 0;

          if (invisible) {
            // Check in next frame
            if (!lastAnimationFrameForInvisibleCheck) {
              lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function () {
                lastAnimationFrameForInvisibleCheck = 0;
                reset();
              });
            }

            return;
          } else {
            // Stop checking
            initialHiddenCheck = false;
          }
        }

        resetExpandShrink();
      };

      element.resizeSensor.resetSensor = reset;

      var onResized = function () {
        rafId = 0;
        if (!dirty) return;
        lastWidth = size.width;
        lastHeight = size.height;

        if (element.resizedAttached) {
          element.resizedAttached.call(size);
        }
      };

      var onScroll = function () {
        size = getElementSize(element);
        dirty = size.width !== lastWidth || size.height !== lastHeight;

        if (dirty && !rafId) {
          rafId = requestAnimationFrame(onResized);
        }

        reset();
      };

      var addEvent = function (el, name, cb) {
        if (el.attachEvent) {
          el.attachEvent('on' + name, cb);
        } else {
          el.addEventListener(name, cb);
        }
      };

      addEvent(expand, 'scroll', onScroll);
      addEvent(shrink, 'scroll', onScroll); // Fix for custom Elements and invisible elements

      lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function () {
        lastAnimationFrameForInvisibleCheck = 0;
        reset();
      });
    }

    forEachElement(element, function (elem) {
      attachResizeEvent(elem, callback);
    });

    this.detach = function (ev) {
      // clean up the unfinished animation frame to prevent a potential endless requestAnimationFrame of reset
      if (lastAnimationFrameForInvisibleCheck) {
        cancelAnimationFrame(lastAnimationFrameForInvisibleCheck);
        lastAnimationFrameForInvisibleCheck = 0;
      }

      ResizeSensor.detach(element, ev);
    };

    this.reset = function () {
      //To prevent invoking element.resizeSensor.resetSensor if it's undefined
      if (element.resizeSensor.resetSensor) {
        element.resizeSensor.resetSensor();
      }
    };
  };

  ResizeSensor.reset = function (element) {
    forEachElement(element, function (elem) {
      //To prevent invoking element.resizeSensor.resetSensor if it's undefined
      if (element.resizeSensor.resetSensor) {
        elem.resizeSensor.resetSensor();
      }
    });
  };

  ResizeSensor.detach = function (element, ev) {
    forEachElement(element, function (elem) {
      if (!elem) return;

      if (elem.resizedAttached && typeof ev === "function") {
        elem.resizedAttached.remove(ev);
        if (elem.resizedAttached.length()) return;
      }

      if (elem.resizeSensor) {
        if (elem.contains(elem.resizeSensor)) {
          elem.removeChild(elem.resizeSensor);
        }

        delete elem.resizeSensor;
        delete elem.resizedAttached;
      }
    });
  };

  if (typeof MutationObserver !== "undefined") {
    var observer = new MutationObserver(function (mutations) {
      for (var i in mutations) {
        if (mutations.hasOwnProperty(i)) {
          var items = mutations[i].addedNodes;

          for (var j = 0; j < items.length; j++) {
            if (items[j].resizeSensor) {
              ResizeSensor.reset(items[j]);
            }
          }
        }
      }
    });
    document.addEventListener("DOMContentLoaded", function (event) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }

  return ResizeSensor;
});

var scroll = new SmoothScroll('a[href*="#"]', {
  topOnEmptyHash: false
}); //BuildSlider - строит HTML конструкцию для свайпера

let sliders = document.querySelectorAll('.swiper');

if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];

    if (!slider.classList.contains('swiper-container')) {
      let slider_items = slider.children;

      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add('swiper-slide');
        }
      }

      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-container');
    }

    if (slider.classList.contains('_gallery')) {//slider.data('lightGallery').destroy(true);
    }
  }

  sliders_bild_callback();
}

function sliders_bild_callback(params) {} // Project Sliders ====================================


if (document.querySelector('.aside-product__slider')) {
  var product_galleryThumbs = new Swiper('.slider-product__thumbs-body', {
    slidesPerView: 3,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    centeredSlides: true,
    speed: 800,
    loop: true,
    breakpoints: {
      400: {
        slidesPerView: 4
      },
      600: {
        slidesPerView: 5,
        spaceBetween: 10
      },
      900: {
        slidesPerView: 3 // centeredSlides: false,

      }
    }
  });
  var product_galleryTop = new Swiper('.slider-product__body', {
    slidesPerView: 1,
    thumbs: {
      swiper: product_galleryThumbs
    },
    observer: true,
    observeParents: true,
    speed: 800,
    loop: true,
    navigation: {
      nextEl: '.slider-product__thumbs .slider-nav__next',
      prevEl: '.slider-product__thumbs .slider-nav__prev'
    }
  });
}

if (document.querySelector('.similar__slider')) {
  var similarCards = new Swiper('.similar__slider', {
    slidesPerView: 6,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    speed: 800,
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.similar .slider-nav__next',
      prevEl: '.similar .slider-nav__prev'
    },
    breakpoints: {
      280: {
        slidesPerView: 1
      },
      330: {
        slidesPerView: 2
      },
      400: {
        slidesPerView: 2
      },
      600: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 5
      },
      1200: {
        slidesPerView: 6
      }
    }
  });
}

if (document.querySelector('.documents__slider')) {
  var patentsSlider = new Swiper('.patent-slider', {
    slidesPerView: 2,
    spaceBetween: 19,
    observer: true,
    observeParents: true,
    speed: 800,
    // autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.patent-nav .slider-nav__next',
      prevEl: '.patent-nav .slider-nav__prev'
    },
    breakpoints: {
      280: {
        slidesPerView: 1
      },
      330: {
        slidesPerView: 2
      },
      400: {
        slidesPerView: 2
      },
      650: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 1
      },
      1250: {
        slidesPerView: 2
      }
    }
  });
  var certSlider = new Swiper('.cert-slider', {
    slidesPerView: 2,
    spaceBetween: 19,
    observer: true,
    observeParents: true,
    speed: 800,
    // autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.cert-nav .slider-nav__next',
      prevEl: '.cert-nav .slider-nav__prev'
    },
    breakpoints: {
      280: {
        slidesPerView: 1
      },
      330: {
        slidesPerView: 2
      },
      400: {
        slidesPerView: 2
      },
      650: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 1
      },
      1250: {
        slidesPerView: 2
      }
    }
  });
  var awardSlider = new Swiper('.award-slider', {
    slidesPerView: 2,
    spaceBetween: 19,
    observer: true,
    observeParents: true,
    speed: 800,
    // autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.award-nav .slider-nav__next',
      prevEl: '.award-nav .slider-nav__prev'
    },
    breakpoints: {
      280: {
        slidesPerView: 1
      },
      330: {
        slidesPerView: 2
      },
      400: {
        slidesPerView: 2
      },
      650: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 1
      },
      1250: {
        slidesPerView: 2
      }
    }
  });
  var thanksSlider = new Swiper('.thanks-slider', {
    slidesPerView: 1,
    spaceBetween: 19,
    observer: true,
    observeParents: true,
    speed: 800,
    // autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.thanks-nav .slider-nav__next',
      prevEl: '.thanks-nav .slider-nav__prev'
    },
    breakpoints: {
      280: {
        slidesPerView: 1
      },
      330: {
        slidesPerView: 2
      },
      400: {
        slidesPerView: 2
      },
      650: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 1
      },
      1200: {
        slidesPerView: 1
      }
    }
  });
  var attestationSlider = new Swiper('.attestation-slider', {
    slidesPerView: 1,
    spaceBetween: 19,
    observer: true,
    observeParents: true,
    speed: 800,
    // autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.attestation-nav .slider-nav__next',
      prevEl: '.attestation-nav .slider-nav__prev'
    },
    breakpoints: {
      280: {
        slidesPerView: 1
      },
      330: {
        slidesPerView: 2
      },
      400: {
        slidesPerView: 2
      },
      650: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 1
      },
      1200: {
        slidesPerView: 1
      }
    }
  });
}

if (document.querySelector('.about__slider')) {
  var aboutSlider = new Swiper('.about__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    speed: 800,
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.about .slider-nav__next',
      prevEl: '.about .slider-nav__prev'
    },
    breakpoints: {
      280: {
        slidesPerView: 1
      },
      400: {
        slidesPerView: 1
      },
      650: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 2
      },
      1250: {
        slidesPerView: 3
      }
    }
  });
}

if (document.querySelector('.viewed__slider')) {
  var viewedCards = new Swiper('.viewed__slider', {
    slidesPerView: 6,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    speed: 800,
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.similar .slider-nav__next',
      prevEl: '.similar .slider-nav__prev'
    },
    breakpoints: {
      280: {
        slidesPerView: 1
      },
      330: {
        slidesPerView: 2
      },
      400: {
        slidesPerView: 2
      },
      600: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 5
      },
      1200: {
        slidesPerView: 6
      }
    }
  });
} //IBG


function ibg() {
  let ibg = document.querySelectorAll(".ibg");

  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg(); //=================================================================
//SlideToggle

let _slideUp = (target, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
};

let _slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
};

let _slideToggle = (target, duration = 500) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');

    if (window.getComputedStyle(target).display === 'none') {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }
}; //=====================================================================


var slideOpen = false; //var heightChecked = false;

var initHeight = 120;
var intval = null;

function slideToggle() {
  window.clearInterval(intval);
  var mdiv = document.getElementById('mdiv');
  /*
  if(!heightChecked) {
      initHeight = mdiv.offsetHeight;
      heightChecked = true;
  }
  */

  if (slideOpen) {
    var h = initHeight;
    slideOpen = false;
    intval = setInterval(function () {
      h--;
      mdiv.style.height = h + 'px';
      if (h <= 0) window.clearInterval(intval);
    }, 1);
  } else {
    var h = 0;
    slideOpen = true;
    intval = setInterval(function () {
      h++;
      mdiv.style.height = h + 'px';
      if (h >= initHeight) window.clearInterval(intval);
    }, 1);
  }
} // Dynamic Adapt v.1
// HTML data-da="where(uniq class name),position(digi),when(breakpoint)"
// e.x. data-da="item,2,992"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle


(function () {
  let originalPositions = [];
  let daElements = document.querySelectorAll('[data-da]');
  let daElementsArray = [];
  let daMatchMedia = []; //Заполняем массивы

  if (daElements.length > 0) {
    let number = 0;

    for (let index = 0; index < daElements.length; index++) {
      const daElement = daElements[index];
      const daMove = daElement.getAttribute('data-da');

      if (daMove != '') {
        const daArray = daMove.split(',');
        const daPlace = daArray[1] ? daArray[1].trim() : 'last';
        const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
        const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
        const daDestination = document.querySelector('.' + daArray[0].trim());

        if (daArray.length > 0 && daDestination) {
          daElement.setAttribute('data-da-index', number); //Заполняем массив первоначальных позиций

          originalPositions[number] = {
            "parent": daElement.parentNode,
            "index": indexInParent(daElement)
          }; //Заполняем массив элементов

          daElementsArray[number] = {
            "element": daElement,
            "destination": document.querySelector('.' + daArray[0].trim()),
            "place": daPlace,
            "breakpoint": daBreakpoint,
            "type": daType
          };
          number++;
        }
      }
    }

    dynamicAdaptSort(daElementsArray); //Создаем события в точке брейкпоинта

    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daBreakpoint = el.breakpoint;
      const daType = el.type;
      daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
      daMatchMedia[index].addListener(dynamicAdapt);
    }
  } //Основная функция


  function dynamicAdapt(e) {
    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daElement = el.element;
      const daDestination = el.destination;
      const daPlace = el.place;
      const daBreakpoint = el.breakpoint;
      const daClassname = "_dynamic_adapt_" + daBreakpoint;

      if (daMatchMedia[index].matches) {
        //Перебрасываем элементы
        if (!daElement.classList.contains(daClassname)) {
          let actualIndex = indexOfElements(daDestination)[daPlace];

          if (daPlace === 'first') {
            actualIndex = indexOfElements(daDestination)[0];
          } else if (daPlace === 'last') {
            actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
          }

          daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
          daElement.classList.add(daClassname);
        }
      } else {
        //Возвращаем на место
        if (daElement.classList.contains(daClassname)) {
          dynamicAdaptBack(daElement);
          daElement.classList.remove(daClassname);
        }
      }
    }

    customAdapt();
  } //Вызов основной функции


  dynamicAdapt(); //Функция возврата на место

  function dynamicAdaptBack(el) {
    const daIndex = el.getAttribute('data-da-index');
    const originalPlace = originalPositions[daIndex];
    const parentPlace = originalPlace['parent'];
    const indexPlace = originalPlace['index'];
    const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
    parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
  } //Функция получения индекса внутри родителя


  function indexInParent(el) {
    var children = Array.prototype.slice.call(el.parentNode.children);
    return children.indexOf(el);
  } //Функция получения массива индексов элементов внутри родителя


  function indexOfElements(parent, back) {
    const children = parent.children;
    const childrenArray = [];

    for (let i = 0; i < children.length; i++) {
      const childrenElement = children[i];

      if (back) {
        childrenArray.push(i);
      } else {
        //Исключая перенесенный элемент
        if (childrenElement.getAttribute('data-da') == null) {
          childrenArray.push(i);
        }
      }
    }

    return childrenArray;
  } //Сортировка объекта


  function dynamicAdaptSort(arr) {
    arr.sort(function (a, b) {
      if (a.breakpoint > b.breakpoint) {
        return -1;
      } else {
        return 1;
      }
    });
    arr.sort(function (a, b) {
      if (a.place > b.place) {
        return 1;
      } else {
        return -1;
      }
    });
  } //Дополнительные сценарии адаптации


  function customAdapt() {//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
})(); // TABS


let tabs = document.querySelectorAll('._tabs');

for (let i = 0; i < tabs.length; i++) {
  let tab = tabs[i];
  let tabs_items = tab.querySelectorAll('._tabs-item');
  let tabs_content = tab.querySelectorAll('._tabs-content');

  for (let i = 0; i < tabs_items.length; i++) {
    let tabs_item = tabs_items[i];
    tabs_item.addEventListener('click', function (e) {
      for (let i = 0; i < tabs_items.length; i++) {
        let tabs_item = tabs_items[i];
        tabs_item.classList.remove('js-active');
        tabs_content[i].classList.remove('js-active');
      }

      tabs_item.classList.add('js-active');
      tabs_content[i].classList.add('js-active');
      shave('.additional__description', 68);
      e.preventDefault();
    });
  }
} // Also working tabs code
// let tabs_all = document.querySelectorAll('._tabs')
// let btns_all = tabs_all.querySelectorAll('._tabs-item')
// let items_all = tabs_all.querySelectorAll('._tabs-content')
//
// function change(arr, i) {
//     arr.forEach( item => {
//         item.forEach( i => {i.classList.remove('js-active')})
//         item[i].classList.add('js-active')
//     })
// }
//
// for(let i = 0; i < btns_all.length; i++) {
//     btns_all[i].addEventListener('click', () => {
//         change([btns_all, items_all], i)
//     })
// }
//amount or quantity


let amountButtons = document.querySelectorAll('.amount__button');

if (amountButtons.length > 0) {
  for (let i = 0; i < amountButtons.length; i++) {
    const amountButton = amountButtons[i];
    amountButton.addEventListener('click', function (e) {
      let value = parseInt(amountButton.closest('.amount').querySelector('input').value);

      if (amountButton.classList.contains('amount__button--plus')) {
        value++;
      } else {
        value = value - 1;

        if (value < 1) {
          value = 1;
        }
      }

      amountButton.closest('.amount').querySelector('input').value = value;
    });
  }
} // //Smooth scroll to the anchor
// const anchors = document.querySelectorAll('a[href*="#"]')
//
// //Каждому якорю присваиваем обработчик события
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (e) {
//         //убираем стандартное поведение по клику
//         e.preventDefault()
//
//         const blockID = anchor.getAttribute('href').substr(1)
//
//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// }
/////////
////INPUT MASK
////////


let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);
document.addEventListener("DOMContentLoaded", function () {
  //The first argument are the elements to which the plugin shall be initialized
  //The second argument has to be at least a empty object or a object with your desired options
  OverlayScrollbars(document.querySelectorAll(".scroll"), {});
});
let buttons_openSearch = document.querySelectorAll('.top-panel__search-btn');
let forms_SearchForm = document.querySelectorAll('.top-panel__form');
let search_input = document.getElementById('mobile-search');

for (let i = 0; i < buttons_openSearch.length; i++) {
  const btn_openSearch = buttons_openSearch[i];
  btn_openSearch.addEventListener('click', function (e) {
    this.classList.toggle("js-active");
    forms_SearchForm[i].classList.toggle("js-opened");
  });
} // Burger menu


let burger = document.querySelector('.burger');
let burger_box = document.querySelector('.top-panel__menu');
let mobile_menu = document.querySelector('.mobile-menu__content');
let body = document.querySelector('body');
burger.addEventListener('click', function (e) {
  this.classList.toggle('js-to-angle');
  body.classList.toggle('js-overflow');
  burger_box.classList.toggle('js-active');
  mobile_menu.classList.toggle('js-opened');
});
let mob_drop_btns = document.querySelectorAll('.mobile-menu__dropdown-btn');
let mob_list = document.querySelectorAll('.mobile-menu__list--dropdown'); // let mob_list_main = document.querySelector('.mobile-menu__list--main');

for (let i = 0; i < mob_drop_btns.length; i++) {
  const mob_btn = mob_drop_btns[i];
  mob_btn.addEventListener('click', function (e) {
    this.classList.toggle('js-active');
    mob_list[i].classList.toggle('js-opened'); // mob_list_main.classList.toggle('js-active');
  });
} ///////
// mega-menu open
///////


let mega_menu_wrapper = document.querySelector('.menu');
let megaBtn = document.querySelector('.mega-btn');
let megaContent = document.querySelector('.mega-menu');
let hide_btn = document.querySelector('.mega-menu__hide');
megaBtn.addEventListener('click', function (e) {
  this.classList.toggle('js-active');
  megaContent.classList.toggle('js-opened'); // setTimeout(function() {
  //     mega_menu_wrapper.classList.toggle('js-visible')
  // }, 100)
});
hide_btn.addEventListener('click', function (e) {
  megaContent.classList.remove('js-opened');
}); // megaBtn.addEventListener("mouseenter", function (e) {
//     this.classList.add('js-active');
//     megaContent.classList.add('js-opened');
// });
//
// // Hide menu on mouseleave
// megaBtn.addEventListener("mouseleave", function (e) {
//     this.classList.remove('js-active');
//     megaContent.classList.remove('js-opened');
// });
// TODO сделать закрытие меню по клику снаружи
//работает с багами
// window.addEventListener('click', function(e) {
//
//     var evTarget = e.target;
//
//     if((evTarget !== mega_menu) && (mega_menu.classList.contains('opened')) && (evTarget !== megaBtn) && (evTarget.parentNode !== megaBtn)) {
//         mega_menu.classList.remove('opened');
//     }
//
// });
//работает с багами
// window.addEventListener('mouseup', function(event){
//     if (event.target != mega_menu && event.target != megaBtn && event.target.parentNode != mega_menu){
//         mega_menu.classList.remove('opened');
//     }
// });
//////
//
//////
//menu-dropdown

let dropdownBtn = document.querySelector('.menu__item--btn');
let dropdownBody = dropdownBtn.querySelector('.menu__item-dropdown'); //ONCLICK
// dropdownBtn.addEventListener('click', function(e) {
//     // e.preventDefault()
//     dropdownBody.classList.toggle('js-visible');
// });
//HOVER

dropdownBtn.addEventListener('mouseenter', function (e) {
  // e.preventDefault()
  this.classList.add('js-active'); // dropdownBody.classList.add('js-visible');

  _slideDown(dropdownBody);
});
dropdownBtn.addEventListener('mouseleave', function (e) {
  this.classList.remove('js-active'); // dropdownBody.classList.remove('js-visible');

  _slideUp(dropdownBody);
});
const myModal = new HystModal({
  linkAttributeName: "data-hystmodal" // настройки (не обязательно), см. API

}); //Поле ввода времени звонка становится активным после активации нужной радиокнопки

let timeCall = document.querySelector('.js-time');
let timeCall_msg = document.querySelector('.request__time .request__textarea');
let checkbox_time = document.querySelectorAll('.request__options .checkbox__input');

for (let i = 0; i < checkbox_time.length; i++) {
  checkbox_time[i].addEventListener('click', function (e) {
    timeCall_msg.disabled = !timeCall.checked;
  });
}

let product_filter = document.querySelector('.filter__toggle');
let product_filterBody = document.querySelector('.filter__body');
let product_filterBtn = document.querySelector('.filter__btn');
let product_filterResult = document.querySelector('.filter__content');
product_filter.addEventListener('click', function (e) {
  // this.classList.toggle('js-opened');
  // product_filterBody.classList.toggle('js-visible');
  _slideToggle(product_filterBody);
});
let btnText = document.querySelector('.filter__show');
product_filterBtn.addEventListener('click', function (e) {
  product_filterResult.classList.toggle('js-opened');

  if (btnText.innerHTML === 'Показать') {
    btnText.innerHTML = 'Скрыть';
  } else {
    btnText.innerHTML = 'Показать';
  }
});
const choices_element = document.querySelectorAll('.filter__select');

for (let i = 0; i < choices_element.length; i++) {
  const choices = new Choices(choices_element[i], {
    searchEnabled: false,
    position: "bottom",
    itemSelectText: '',
    shouldSort: false
  });
}

const choices_elementsDisabled = document.querySelectorAll('.select-disabled');

for (let i = 0; i < choices_elementsDisabled.length; i++) {
  const choices_elementDisabled = new Choices(choices_elementsDisabled[i], {}).disable();
} //accordion


var acc = document.querySelectorAll(".accordion");
var u;

for (u = 0; u < acc.length; u++) {
  acc[u].addEventListener("click", function () {
    this.classList.toggle("js-active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} //collapse all of accordions in .product__info-tab


let collapse_btn = document.querySelector('.info-tab__control');
let accordions = document.querySelectorAll('.info-tab__body .accordion-content');
let info_acc = document.querySelectorAll('.info-tab__body .accordion');
collapse_btn.addEventListener('click', function (e) {
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].style.maxHeight = null;
    info_acc[i].classList.remove('js-active');
  }
}); //Клик на миниатюре меняет src аттрибут у главной картинки

let img_thumbs = document.querySelectorAll('.photo__img');
let img_thumbsDiv = document.querySelectorAll('.photo__thumb');
let target_img = document.getElementById('big-image');
let modal_img = document.getElementById('modal-photo-img');

for (let i = 0; i < img_thumbs.length; i++) {
  let img_thumb = img_thumbs[i];
  img_thumb.addEventListener('click', function (e) {
    //remove all active states
    for (let i = 0; i < img_thumbsDiv.length; i++) {
      img_thumbsDiv[i].classList.remove('js-active');
    } //add active to this


    img_thumbsDiv[i].classList.add('js-active');
    target_img.src = img_thumb.getAttribute("src"); //Меняем аттрибут у модального окна для просмотра

    modal_img.src = img_thumb.getAttribute("src");
  });
} //LightGallery plugin initialize


lightGallery(document.getElementById('lightgallery')); // let acc_links = document.querySelectorAll('.accordions__link');
//
// for (let i = 0; i < acc_links.length; i++) {
//     let acc_link = acc_links[i];
//
//     acc_link.addEventListener('click', function(e) {
//         for (let j = 0; j < acc_links.length; j++) {
//             acc_links[j].classList.remove('js-active');
//         }
//         acc_link.classList.add('js-active');
//     });
// }
//STICKY ASSIDE NAV

var sidebar = new StickySidebar('.accordions__aside', {
  topSpacing: 0,
  bottomSpacing: 0,
  containerSelector: '.accordions',
  innerWrapperSelector: '.accordions__nav'
}); //accordion

var acc_all = document.querySelectorAll(".accordions__btn");
var k;

for (k = 0; k < acc_all.length; k++) {
  acc_all[k].addEventListener("click", function () {
    this.classList.toggle("js-active");
    var panel = this.nextElementSibling;

    if (panel.classList.contains('js-opened')) {
      panel.style.maxHeight = '0';
      panel.classList.remove('js-opened');
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.add('js-opened');
    } // if (panel.style.maxHeight) {
    //     panel.style.maxHeight = null;
    // } else {
    //     panel.style.maxHeight = panel.scrollHeight + "px";
    // }

  });
} // //collapse all of accordions in .product__info-tab
// let collapse_btn = document.querySelector('.info-tab__control');
// let accordions = document.querySelectorAll('.info-tab__body .accordion-content');
// let info_acc = document.querySelectorAll('.info-tab__body .accordion');
//
// collapse_btn.addEventListener('click', function (e) {
//
//     for (let i = 0; i < accordions.length; i++) {
//         accordions[i].style.maxHeight = null;
//         info_acc[i].classList.remove('js-active');
//     }
// });
// const getOffset = (element, horizontal = false) => {
//     if(!element) return 0;
//     return getOffset(element.offsetParent, horizontal) + (horizontal ? element.offsetLeft : element.offsetTop);
// }
//
// let bar_block = document.querySelector('.bar');
//
// window.addEventListener('scroll', onScroll);
// window.addEventListener('touchmove', onScroll);
// window.onscroll = function () {
//     onScroll()
// };
//
// function onScroll() {
//     console.log(getOffset(bar_block))
//     console.log(window.pageYOffset)
// }
// fixed bar


window.addEventListener('scroll', onScroll);
window.addEventListener('touchmove', onScroll);

window.onscroll = function () {
  onScroll();
};

function onScroll() {
  let bar_line = document.getElementById('bar-line');
  let bar_block = document.querySelector('.bar'); // let bar_block_bottom = bar_block.offsetTop + bar_block.offsetHeight;

  let bar_block_bottom = bar_block.offsetTop + bar_block.offsetHeight - window.innerHeight;
  console.log(window.innerHeight);
  console.log(bar_block_bottom);
  console.log(window.pageYOffset);

  if (window.pageYOffset > 500 && window.pageYOffset < bar_block_bottom) {
    bar_line.classList.add('js-fixed');
  } else {
    bar_line.classList.remove('js-fixed');
  } // if (window.pageYOffset >= bar_block.offsetTop) {
  //     console.log('HERE')
  // }
  // while (window.pageYOffset !== bar_line_bottom) {
  // if ((window.pageYOffset > 500) && (window.pageYOffset !== bar_block.offsetTop)) {
  //     bar_line.classList.add('js-fixed');
  // } else {
  //     bar_line.classList.remove('js-fixed');
  //     // break
  // }
  // }

} // else if ( window.pageYOffset < 500 ) {
//     bar.classList.remove('js-fixed');
// } else if (window.pageYOffset >= barBottom) {
//     bar.classList.remove('js-fixed');
// }
//
// // fixed header
// window.addEventListener('scroll', onScroll);
// window.addEventListener('touchmove', onScroll);
// window.onscroll = function () {onScroll()};
//
// function onScroll() {
//     let header = document.querySelector('.header');
//     let headerBottom = header.offsetTop + header.offsetHeight;
//     let headerScroll = document.querySelector('.scroll-header');
//     if (window.pageYOffset >= headerBottom)  {
//         headerScroll.classList.add('visible');
//     } else if ( window.pageYOffset < headerBottom) {
//         headerScroll.classList.remove('visible');
//     }
// }


const choices_selection = document.querySelectorAll('.selection__select');

for (let i = 0; i < choices_selection.length; i++) {
  const choices = new Choices(choices_selection[i], {
    searchEnabled: true,
    position: "bottom",
    itemSelectText: '',
    shouldSort: false
  });
}

let articles = document.querySelectorAll('.articles .article-card__figure');

for (let i = 0; i < articles.length; i++) {
  articles[i].addEventListener('mouseleave', function (e) {
    for (let k = 0; k < articles.length; k++) {
      articles[k].classList.remove('js-hover');
    }
  });
} //LightGallery plugin initialize


lightGallery(document.getElementById('insta-gallery')); // const list = ['JavaScript', 'Kotlin', 'Rust', 'PHP', 'Ruby', 'Java', 'MarkDown', 'Python', 'C++', 'Fortran', 'Assembler'];
// const result = document.getElementById('results');
// const renderResult = list => renderList(list, result);
// const renderFilteredResult = val => renderResult(list.filter(i => (~i.indexOf(e.target.value))));
// const searchHandler = ({target: {value}}) => renderFilteredResult(value);
//
// renderResult(list);
//
// function renderList(list = [], el = document.body) {
//     el.innerHTML = '';
//     list.forEach(i => {
//         let new_el = document.createElement('li');
//         new_el.innerHTML = i;
//         el.appendChild(new_el);
//     })
// }
//
// document.getElementById('search').addEventListener('input', searchHandler);

var map_acc = document.querySelectorAll(".map__btn");
var j;

for (j = 0; j < map_acc.length; j++) {
  map_acc[j].addEventListener("click", function () {
    this.classList.toggle("js-active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} // CITY FILTER by list.js plugin -- DOESNT WORKING WITH NESTED LISTS
// var options = {
//     valueNames: [ 'map__link' ],
//     nestedSearch: true
// };
//
// var userList = new List('city-search', options);
//accordion


var city_acc = document.querySelectorAll(".city-search__toggle");
var m;
let short_list = document.querySelector('.list-to-hide');

for (m = 0; m < city_acc.length; m++) {
  city_acc[m].addEventListener("click", function () {
    this.classList.toggle("js-active");
    short_list.classList.toggle("js-hidden");
    short_list.classList.toggle("list");
    var panel = this.previousElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } // if (panel.style.maxHeight) {
    //     panel.style.maxHeight = null;
    // } else {
    //     panel.style.maxHeight = panel.scrollHeight + "px";
    // }

  });
} // CITY FILTER by list.js plugin -- DOESNT WORKING WITH NESTED LISTS


var options = {
  valueNames: ['city-search__link']
};
var userList = new List('city-search', options); //Range Slider (NOUISLIDER)

if (document.querySelector('.range')) {
  const priceSlider = document.querySelector('.range__slider');
  noUiSlider.create(priceSlider, {
    connect: true,
    tooltips: false,
    start: [170200, 4200000],
    step: 1000,
    // margin: 5,
    range: {
      'min': [170200],
      'max': [4200000]
    },
    format: {
      from: function (value) {
        return parseInt(value);
      },
      to: function (value) {
        return parseInt(value);
      }
    }
  });
  var valueFrom = document.querySelector('.slider-values__from'),
      valueTo = document.querySelector('.slider-values__to');
  var inputs = [valueFrom, valueTo]; // When the slider value changes, update the inputs

  priceSlider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
      valueTo.value = values[handle];
    } else {
      valueFrom.value = values[handle];
    }
  }); //
  //reading data from inputs

  valueFrom.addEventListener('change', function () {
    priceSlider.noUiSlider.set([this.value]);
  });
  valueTo.addEventListener('change', function () {
    priceSlider.noUiSlider.set([valueFrom.value, this.value]);
  }); // Listen to keydown events on the input field.

  inputs.forEach(function (input, handle) {
    input.addEventListener('change', function () {
      priceSlider.noUiSlider.setHandle(handle, this.value);
    });
    input.addEventListener('keydown', function (e) {
      var values = priceSlider.noUiSlider.get();
      var value = Number(values[handle]); // [[handle0_down, handle0_up], [handle1_down, handle1_up]]

      var steps = priceSlider.noUiSlider.steps(); // [down, up]

      var step = steps[handle];
      var position; // 13 is enter,
      // 38 is key up,
      // 40 is key down.

      switch (e.which) {
        case 13:
          priceSlider.noUiSlider.setHandle(handle, this.value);
          break;

        case 38:
          // Get step to go increase slider value (up)
          position = step[1]; // false = no step is set

          if (position === false) {
            position = 1;
          } // null = edge of slider


          if (position !== null) {
            priceSlider.noUiSlider.setHandle(handle, value + position);
          }

          break;

        case 40:
          position = step[0];

          if (position === false) {
            position = 1;
          }

          if (position !== null) {
            priceSlider.noUiSlider.setHandle(handle, value - position);
          }

          break;
      }
    });
  });
} // END OF NOUISLIDER SCRIPT


var List;

List =
/******/
function () {
  // webpackBootstrap

  /******/
  var __webpack_modules__ = {
    /***/
    "./src/add-async.js":
    /*!**************************!*\
      !*** ./src/add-async.js ***!
      \**************************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 1:0-14 */

    /***/
    function (module) {
      module.exports = function (list) {
        var addAsync = function addAsync(values, callback, items) {
          var valuesToAdd = values.splice(0, 50);
          items = items || [];
          items = items.concat(list.add(valuesToAdd));

          if (values.length > 0) {
            setTimeout(function () {
              addAsync(values, callback, items);
            }, 1);
          } else {
            list.update();
            callback(items);
          }
        };

        return addAsync;
      };
      /***/

    },

    /***/
    "./src/filter.js":
    /*!***********************!*\
      !*** ./src/filter.js ***!
      \***********************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 1:0-14 */

    /***/
    function (module) {
      module.exports = function (list) {
        // Add handlers
        list.handlers.filterStart = list.handlers.filterStart || [];
        list.handlers.filterComplete = list.handlers.filterComplete || [];
        return function (filterFunction) {
          list.trigger('filterStart');
          list.i = 1; // Reset paging

          list.reset.filter();

          if (filterFunction === undefined) {
            list.filtered = false;
          } else {
            list.filtered = true;
            var is = list.items;

            for (var i = 0, il = is.length; i < il; i++) {
              var item = is[i];

              if (filterFunction(item)) {
                item.filtered = true;
              } else {
                item.filtered = false;
              }
            }
          }

          list.update();
          list.trigger('filterComplete');
          return list.visibleItems;
        };
      };
      /***/

    },

    /***/
    "./src/fuzzy-search.js":
    /*!*****************************!*\
      !*** ./src/fuzzy-search.js ***!
      \*****************************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module, __webpack_require__ */

    /*! CommonJS bailout: module.exports is used directly at 8:0-14 */

    /***/
    function (module, __unused_webpack_exports, __webpack_require__) {
      var classes = __webpack_require__(
      /*! ./utils/classes */
      "./src/utils/classes.js"),
          events = __webpack_require__(
      /*! ./utils/events */
      "./src/utils/events.js"),
          extend = __webpack_require__(
      /*! ./utils/extend */
      "./src/utils/extend.js"),
          toString = __webpack_require__(
      /*! ./utils/to-string */
      "./src/utils/to-string.js"),
          getByClass = __webpack_require__(
      /*! ./utils/get-by-class */
      "./src/utils/get-by-class.js"),
          fuzzy = __webpack_require__(
      /*! ./utils/fuzzy */
      "./src/utils/fuzzy.js");

      module.exports = function (list, options) {
        options = options || {};
        options = extend({
          location: 0,
          distance: 100,
          threshold: 0.4,
          multiSearch: true,
          searchClass: 'fuzzy-search'
        }, options);
        var fuzzySearch = {
          search: function search(searchString, columns) {
            // Substract arguments from the searchString or put searchString as only argument
            var searchArguments = options.multiSearch ? searchString.replace(/ +$/, '').split(/ +/) : [searchString];

            for (var k = 0, kl = list.items.length; k < kl; k++) {
              fuzzySearch.item(list.items[k], columns, searchArguments);
            }
          },
          item: function item(_item, columns, searchArguments) {
            var found = true;

            for (var i = 0; i < searchArguments.length; i++) {
              var foundArgument = false;

              for (var j = 0, jl = columns.length; j < jl; j++) {
                if (fuzzySearch.values(_item.values(), columns[j], searchArguments[i])) {
                  foundArgument = true;
                }
              }

              if (!foundArgument) {
                found = false;
              }
            }

            _item.found = found;
          },
          values: function values(_values, value, searchArgument) {
            if (_values.hasOwnProperty(value)) {
              var text = toString(_values[value]).toLowerCase();

              if (fuzzy(text, searchArgument, options)) {
                return true;
              }
            }

            return false;
          }
        };
        events.bind(getByClass(list.listContainer, options.searchClass), 'keyup', function (e) {
          var target = e.target || e.srcElement; // IE have srcElement

          list.search(target.value, fuzzySearch.search);
        });
        return function (str, columns) {
          list.search(str, columns, fuzzySearch.search);
        };
      };
      /***/

    },

    /***/
    "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module, __webpack_require__ */

    /*! CommonJS bailout: module.exports is used directly at 11:0-14 */

    /***/
    function (module, __unused_webpack_exports, __webpack_require__) {
      var naturalSort = __webpack_require__(
      /*! string-natural-compare */
      "./node_modules/string-natural-compare/natural-compare.js"),
          getByClass = __webpack_require__(
      /*! ./utils/get-by-class */
      "./src/utils/get-by-class.js"),
          extend = __webpack_require__(
      /*! ./utils/extend */
      "./src/utils/extend.js"),
          indexOf = __webpack_require__(
      /*! ./utils/index-of */
      "./src/utils/index-of.js"),
          events = __webpack_require__(
      /*! ./utils/events */
      "./src/utils/events.js"),
          toString = __webpack_require__(
      /*! ./utils/to-string */
      "./src/utils/to-string.js"),
          classes = __webpack_require__(
      /*! ./utils/classes */
      "./src/utils/classes.js"),
          getAttribute = __webpack_require__(
      /*! ./utils/get-attribute */
      "./src/utils/get-attribute.js"),
          toArray = __webpack_require__(
      /*! ./utils/to-array */
      "./src/utils/to-array.js");

      module.exports = function (id, options, values) {
        var self = this,
            init,
            Item = __webpack_require__(
        /*! ./item */
        "./src/item.js")(self),
            addAsync = __webpack_require__(
        /*! ./add-async */
        "./src/add-async.js")(self),
            initPagination = __webpack_require__(
        /*! ./pagination */
        "./src/pagination.js")(self);

        init = {
          start: function start() {
            self.listClass = 'list';
            self.searchClass = 'search';
            self.sortClass = 'sort';
            self.page = 10000;
            self.i = 1;
            self.items = [];
            self.visibleItems = [];
            self.matchingItems = [];
            self.searched = false;
            self.filtered = false;
            self.searchColumns = undefined;
            self.handlers = {
              updated: []
            };
            self.valueNames = [];
            self.utils = {
              getByClass: getByClass,
              extend: extend,
              indexOf: indexOf,
              events: events,
              toString: toString,
              naturalSort: naturalSort,
              classes: classes,
              getAttribute: getAttribute,
              toArray: toArray
            };
            self.utils.extend(self, options);
            self.listContainer = typeof id === 'string' ? document.getElementById(id) : id;

            if (!self.listContainer) {
              return;
            }

            self.list = getByClass(self.listContainer, self.listClass, true);
            self.parse = __webpack_require__(
            /*! ./parse */
            "./src/parse.js")(self);
            self.templater = __webpack_require__(
            /*! ./templater */
            "./src/templater.js")(self);
            self.search = __webpack_require__(
            /*! ./search */
            "./src/search.js")(self);
            self.filter = __webpack_require__(
            /*! ./filter */
            "./src/filter.js")(self);
            self.sort = __webpack_require__(
            /*! ./sort */
            "./src/sort.js")(self);
            self.fuzzySearch = __webpack_require__(
            /*! ./fuzzy-search */
            "./src/fuzzy-search.js")(self, options.fuzzySearch);
            this.handlers();
            this.items();
            this.pagination();
            self.update();
          },
          handlers: function handlers() {
            for (var handler in self.handlers) {
              if (self[handler] && self.handlers.hasOwnProperty(handler)) {
                self.on(handler, self[handler]);
              }
            }
          },
          items: function items() {
            self.parse(self.list);

            if (values !== undefined) {
              self.add(values);
            }
          },
          pagination: function pagination() {
            if (options.pagination !== undefined) {
              if (options.pagination === true) {
                options.pagination = [{}];
              }

              if (options.pagination[0] === undefined) {
                options.pagination = [options.pagination];
              }

              for (var i = 0, il = options.pagination.length; i < il; i++) {
                initPagination(options.pagination[i]);
              }
            }
          }
        };
        /*
         * Re-parse the List, use if html have changed
         */

        this.reIndex = function () {
          self.items = [];
          self.visibleItems = [];
          self.matchingItems = [];
          self.searched = false;
          self.filtered = false;
          self.parse(self.list);
        };

        this.toJSON = function () {
          var json = [];

          for (var i = 0, il = self.items.length; i < il; i++) {
            json.push(self.items[i].values());
          }

          return json;
        };
        /*
         * Add object to list
         */


        this.add = function (values, callback) {
          if (values.length === 0) {
            return;
          }

          if (callback) {
            addAsync(values.slice(0), callback);
            return;
          }

          var added = [],
              notCreate = false;

          if (values[0] === undefined) {
            values = [values];
          }

          for (var i = 0, il = values.length; i < il; i++) {
            var item = null;
            notCreate = self.items.length > self.page ? true : false;
            item = new Item(values[i], undefined, notCreate);
            self.items.push(item);
            added.push(item);
          }

          self.update();
          return added;
        };

        this.show = function (i, page) {
          this.i = i;
          this.page = page;
          self.update();
          return self;
        };
        /* Removes object from list.
         * Loops through the list and removes objects where
         * property "valuename" === value
         */


        this.remove = function (valueName, value, options) {
          var found = 0;

          for (var i = 0, il = self.items.length; i < il; i++) {
            if (self.items[i].values()[valueName] == value) {
              self.templater.remove(self.items[i], options);
              self.items.splice(i, 1);
              il--;
              i--;
              found++;
            }
          }

          self.update();
          return found;
        };
        /* Gets the objects in the list which
         * property "valueName" === value
         */


        this.get = function (valueName, value) {
          var matchedItems = [];

          for (var i = 0, il = self.items.length; i < il; i++) {
            var item = self.items[i];

            if (item.values()[valueName] == value) {
              matchedItems.push(item);
            }
          }

          return matchedItems;
        };
        /*
         * Get size of the list
         */


        this.size = function () {
          return self.items.length;
        };
        /*
         * Removes all items from the list
         */


        this.clear = function () {
          self.templater.clear();
          self.items = [];
          return self;
        };

        this.on = function (event, callback) {
          self.handlers[event].push(callback);
          return self;
        };

        this.off = function (event, callback) {
          var e = self.handlers[event];
          var index = indexOf(e, callback);

          if (index > -1) {
            e.splice(index, 1);
          }

          return self;
        };

        this.trigger = function (event) {
          var i = self.handlers[event].length;

          while (i--) {
            self.handlers[event][i](self);
          }

          return self;
        };

        this.reset = {
          filter: function filter() {
            var is = self.items,
                il = is.length;

            while (il--) {
              is[il].filtered = false;
            }

            return self;
          },
          search: function search() {
            var is = self.items,
                il = is.length;

            while (il--) {
              is[il].found = false;
            }

            return self;
          }
        };

        this.update = function () {
          var is = self.items,
              il = is.length;
          self.visibleItems = [];
          self.matchingItems = [];
          self.templater.clear();

          for (var i = 0; i < il; i++) {
            if (is[i].matching() && self.matchingItems.length + 1 >= self.i && self.visibleItems.length < self.page) {
              is[i].show();
              self.visibleItems.push(is[i]);
              self.matchingItems.push(is[i]);
            } else if (is[i].matching()) {
              self.matchingItems.push(is[i]);
              is[i].hide();
            } else {
              is[i].hide();
            }
          }

          self.trigger('updated');
          return self;
        };

        init.start();
      };
      /***/

    },

    /***/
    "./src/item.js":
    /*!*********************!*\
      !*** ./src/item.js ***!
      \*********************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 1:0-14 */

    /***/
    function (module) {
      module.exports = function (list) {
        return function (initValues, element, notCreate) {
          var item = this;
          this._values = {};
          this.found = false; // Show if list.searched == true and this.found == true

          this.filtered = false; // Show if list.filtered == true and this.filtered == true

          var init = function init(initValues, element, notCreate) {
            if (element === undefined) {
              if (notCreate) {
                item.values(initValues, notCreate);
              } else {
                item.values(initValues);
              }
            } else {
              item.elm = element;
              var values = list.templater.get(item, initValues);
              item.values(values);
            }
          };

          this.values = function (newValues, notCreate) {
            if (newValues !== undefined) {
              for (var name in newValues) {
                item._values[name] = newValues[name];
              }

              if (notCreate !== true) {
                list.templater.set(item, item.values());
              }
            } else {
              return item._values;
            }
          };

          this.show = function () {
            list.templater.show(item);
          };

          this.hide = function () {
            list.templater.hide(item);
          };

          this.matching = function () {
            return list.filtered && list.searched && item.found && item.filtered || list.filtered && !list.searched && item.filtered || !list.filtered && list.searched && item.found || !list.filtered && !list.searched;
          };

          this.visible = function () {
            return item.elm && item.elm.parentNode == list.list ? true : false;
          };

          init(initValues, element, notCreate);
        };
      };
      /***/

    },

    /***/
    "./src/pagination.js":
    /*!***************************!*\
      !*** ./src/pagination.js ***!
      \***************************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module, __webpack_require__ */

    /*! CommonJS bailout: module.exports is used directly at 5:0-14 */

    /***/
    function (module, __unused_webpack_exports, __webpack_require__) {
      var classes = __webpack_require__(
      /*! ./utils/classes */
      "./src/utils/classes.js"),
          events = __webpack_require__(
      /*! ./utils/events */
      "./src/utils/events.js"),
          List = __webpack_require__(
      /*! ./index */
      "./src/index.js");

      module.exports = function (list) {
        var isHidden = false;

        var refresh = function refresh(pagingList, options) {
          if (list.page < 1) {
            list.listContainer.style.display = 'none';
            isHidden = true;
            return;
          } else if (isHidden) {
            list.listContainer.style.display = 'block';
          }

          var item,
              l = list.matchingItems.length,
              index = list.i,
              page = list.page,
              pages = Math.ceil(l / page),
              currentPage = Math.ceil(index / page),
              innerWindow = options.innerWindow || 2,
              left = options.left || options.outerWindow || 0,
              right = options.right || options.outerWindow || 0;
          right = pages - right;
          pagingList.clear();

          for (var i = 1; i <= pages; i++) {
            var className = currentPage === i ? 'active' : ''; //console.log(i, left, right, currentPage, (currentPage - innerWindow), (currentPage + innerWindow), className);

            if (is.number(i, left, right, currentPage, innerWindow)) {
              item = pagingList.add({
                page: i,
                dotted: false
              })[0];

              if (className) {
                classes(item.elm).add(className);
              }

              item.elm.firstChild.setAttribute('data-i', i);
              item.elm.firstChild.setAttribute('data-page', page);
            } else if (is.dotted(pagingList, i, left, right, currentPage, innerWindow, pagingList.size())) {
              item = pagingList.add({
                page: '...',
                dotted: true
              })[0];
              classes(item.elm).add('disabled');
            }
          }
        };

        var is = {
          number: function number(i, left, right, currentPage, innerWindow) {
            return this.left(i, left) || this.right(i, right) || this.innerWindow(i, currentPage, innerWindow);
          },
          left: function left(i, _left) {
            return i <= _left;
          },
          right: function right(i, _right) {
            return i > _right;
          },
          innerWindow: function innerWindow(i, currentPage, _innerWindow) {
            return i >= currentPage - _innerWindow && i <= currentPage + _innerWindow;
          },
          dotted: function dotted(pagingList, i, left, right, currentPage, innerWindow, currentPageItem) {
            return this.dottedLeft(pagingList, i, left, right, currentPage, innerWindow) || this.dottedRight(pagingList, i, left, right, currentPage, innerWindow, currentPageItem);
          },
          dottedLeft: function dottedLeft(pagingList, i, left, right, currentPage, innerWindow) {
            return i == left + 1 && !this.innerWindow(i, currentPage, innerWindow) && !this.right(i, right);
          },
          dottedRight: function dottedRight(pagingList, i, left, right, currentPage, innerWindow, currentPageItem) {
            if (pagingList.items[currentPageItem - 1].values().dotted) {
              return false;
            } else {
              return i == right && !this.innerWindow(i, currentPage, innerWindow) && !this.right(i, right);
            }
          }
        };
        return function (options) {
          var pagingList = new List(list.listContainer.id, {
            listClass: options.paginationClass || 'pagination',
            item: options.item || "<li><a class='page' href='#'></a></li>",
            valueNames: ['page', 'dotted'],
            searchClass: 'pagination-search-that-is-not-supposed-to-exist',
            sortClass: 'pagination-sort-that-is-not-supposed-to-exist'
          });
          events.bind(pagingList.listContainer, 'click', function (e) {
            var target = e.target || e.srcElement,
                page = list.utils.getAttribute(target, 'data-page'),
                i = list.utils.getAttribute(target, 'data-i');

            if (i) {
              list.show((i - 1) * page + 1, page);
            }
          });
          list.on('updated', function () {
            refresh(pagingList, options);
          });
          refresh(pagingList, options);
        };
      };
      /***/

    },

    /***/
    "./src/parse.js":
    /*!**********************!*\
      !*** ./src/parse.js ***!
      \**********************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module, __webpack_require__ */

    /*! CommonJS bailout: module.exports is used directly at 1:0-14 */

    /***/
    function (module, __unused_webpack_exports, __webpack_require__) {
      module.exports = function (list) {
        var Item = __webpack_require__(
        /*! ./item */
        "./src/item.js")(list);

        var getChildren = function getChildren(parent) {
          var nodes = parent.childNodes,
              items = [];

          for (var i = 0, il = nodes.length; i < il; i++) {
            // Only textnodes have a data attribute
            if (nodes[i].data === undefined) {
              items.push(nodes[i]);
            }
          }

          return items;
        };

        var parse = function parse(itemElements, valueNames) {
          for (var i = 0, il = itemElements.length; i < il; i++) {
            list.items.push(new Item(valueNames, itemElements[i]));
          }
        };

        var parseAsync = function parseAsync(itemElements, valueNames) {
          var itemsToIndex = itemElements.splice(0, 50); // TODO: If < 100 items, what happens in IE etc?

          parse(itemsToIndex, valueNames);

          if (itemElements.length > 0) {
            setTimeout(function () {
              parseAsync(itemElements, valueNames);
            }, 1);
          } else {
            list.update();
            list.trigger('parseComplete');
          }
        };

        list.handlers.parseComplete = list.handlers.parseComplete || [];
        return function () {
          var itemsToIndex = getChildren(list.list),
              valueNames = list.valueNames;

          if (list.indexAsync) {
            parseAsync(itemsToIndex, valueNames);
          } else {
            parse(itemsToIndex, valueNames);
          }
        };
      };
      /***/

    },

    /***/
    "./src/search.js":
    /*!***********************!*\
      !*** ./src/search.js ***!
      \***********************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 1:0-14 */

    /***/
    function (module) {
      module.exports = function (_list) {
        var item, text, columns, searchString, customSearch;
        var prepare = {
          resetList: function resetList() {
            _list.i = 1;

            _list.templater.clear();

            customSearch = undefined;
          },
          setOptions: function setOptions(args) {
            if (args.length == 2 && args[1] instanceof Array) {
              columns = args[1];
            } else if (args.length == 2 && typeof args[1] == 'function') {
              columns = undefined;
              customSearch = args[1];
            } else if (args.length == 3) {
              columns = args[1];
              customSearch = args[2];
            } else {
              columns = undefined;
            }
          },
          setColumns: function setColumns() {
            if (_list.items.length === 0) return;

            if (columns === undefined) {
              columns = _list.searchColumns === undefined ? prepare.toArray(_list.items[0].values()) : _list.searchColumns;
            }
          },
          setSearchString: function setSearchString(s) {
            s = _list.utils.toString(s).toLowerCase();
            s = s.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&'); // Escape regular expression characters

            searchString = s;
          },
          toArray: function toArray(values) {
            var tmpColumn = [];

            for (var name in values) {
              tmpColumn.push(name);
            }

            return tmpColumn;
          }
        };
        var search = {
          list: function list() {
            for (var k = 0, kl = _list.items.length; k < kl; k++) {
              search.item(_list.items[k]);
            }
          },
          item: function item(_item) {
            _item.found = false;

            for (var j = 0, jl = columns.length; j < jl; j++) {
              if (search.values(_item.values(), columns[j])) {
                _item.found = true;
                return;
              }
            }
          },
          values: function values(_values, column) {
            if (_values.hasOwnProperty(column)) {
              text = _list.utils.toString(_values[column]).toLowerCase();

              if (searchString !== '' && text.search(searchString) > -1) {
                return true;
              }
            }

            return false;
          },
          reset: function reset() {
            _list.reset.search();

            _list.searched = false;
          }
        };

        var searchMethod = function searchMethod(str) {
          _list.trigger('searchStart');

          prepare.resetList();
          prepare.setSearchString(str);
          prepare.setOptions(arguments); // str, cols|searchFunction, searchFunction

          prepare.setColumns();

          if (searchString === '') {
            search.reset();
          } else {
            _list.searched = true;

            if (customSearch) {
              customSearch(searchString, columns);
            } else {
              search.list();
            }
          }

          _list.update();

          _list.trigger('searchComplete');

          return _list.visibleItems;
        };

        _list.handlers.searchStart = _list.handlers.searchStart || [];
        _list.handlers.searchComplete = _list.handlers.searchComplete || [];

        _list.utils.events.bind(_list.utils.getByClass(_list.listContainer, _list.searchClass), 'keyup', function (e) {
          var target = e.target || e.srcElement,
              // IE have srcElement
          alreadyCleared = target.value === '' && !_list.searched;

          if (!alreadyCleared) {
            // If oninput already have resetted the list, do nothing
            searchMethod(target.value);
          }
        }); // Used to detect click on HTML5 clear button


        _list.utils.events.bind(_list.utils.getByClass(_list.listContainer, _list.searchClass), 'input', function (e) {
          var target = e.target || e.srcElement;

          if (target.value === '') {
            searchMethod('');
          }
        });

        return searchMethod;
      };
      /***/

    },

    /***/
    "./src/sort.js":
    /*!*********************!*\
      !*** ./src/sort.js ***!
      \*********************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 1:0-14 */

    /***/
    function (module) {
      module.exports = function (list) {
        var buttons = {
          els: undefined,
          clear: function clear() {
            for (var i = 0, il = buttons.els.length; i < il; i++) {
              list.utils.classes(buttons.els[i]).remove('asc');
              list.utils.classes(buttons.els[i]).remove('desc');
            }
          },
          getOrder: function getOrder(btn) {
            var predefinedOrder = list.utils.getAttribute(btn, 'data-order');

            if (predefinedOrder == 'asc' || predefinedOrder == 'desc') {
              return predefinedOrder;
            } else if (list.utils.classes(btn).has('desc')) {
              return 'asc';
            } else if (list.utils.classes(btn).has('asc')) {
              return 'desc';
            } else {
              return 'asc';
            }
          },
          getInSensitive: function getInSensitive(btn, options) {
            var insensitive = list.utils.getAttribute(btn, 'data-insensitive');

            if (insensitive === 'false') {
              options.insensitive = false;
            } else {
              options.insensitive = true;
            }
          },
          setOrder: function setOrder(options) {
            for (var i = 0, il = buttons.els.length; i < il; i++) {
              var btn = buttons.els[i];

              if (list.utils.getAttribute(btn, 'data-sort') !== options.valueName) {
                continue;
              }

              var predefinedOrder = list.utils.getAttribute(btn, 'data-order');

              if (predefinedOrder == 'asc' || predefinedOrder == 'desc') {
                if (predefinedOrder == options.order) {
                  list.utils.classes(btn).add(options.order);
                }
              } else {
                list.utils.classes(btn).add(options.order);
              }
            }
          }
        };

        var sort = function sort() {
          list.trigger('sortStart');
          var options = {};
          var target = arguments[0].currentTarget || arguments[0].srcElement || undefined;

          if (target) {
            options.valueName = list.utils.getAttribute(target, 'data-sort');
            buttons.getInSensitive(target, options);
            options.order = buttons.getOrder(target);
          } else {
            options = arguments[1] || options;
            options.valueName = arguments[0];
            options.order = options.order || 'asc';
            options.insensitive = typeof options.insensitive == 'undefined' ? true : options.insensitive;
          }

          buttons.clear();
          buttons.setOrder(options); // caseInsensitive
          // alphabet

          var customSortFunction = options.sortFunction || list.sortFunction || null,
              multi = options.order === 'desc' ? -1 : 1,
              sortFunction;

          if (customSortFunction) {
            sortFunction = function sortFunction(itemA, itemB) {
              return customSortFunction(itemA, itemB, options) * multi;
            };
          } else {
            sortFunction = function sortFunction(itemA, itemB) {
              var sort = list.utils.naturalSort;
              sort.alphabet = list.alphabet || options.alphabet || undefined;

              if (!sort.alphabet && options.insensitive) {
                sort = list.utils.naturalSort.caseInsensitive;
              }

              return sort(itemA.values()[options.valueName], itemB.values()[options.valueName]) * multi;
            };
          }

          list.items.sort(sortFunction);
          list.update();
          list.trigger('sortComplete');
        }; // Add handlers


        list.handlers.sortStart = list.handlers.sortStart || [];
        list.handlers.sortComplete = list.handlers.sortComplete || [];
        buttons.els = list.utils.getByClass(list.listContainer, list.sortClass);
        list.utils.events.bind(buttons.els, 'click', sort);
        list.on('searchStart', buttons.clear);
        list.on('filterStart', buttons.clear);
        return sort;
      };
      /***/

    },

    /***/
    "./src/templater.js":
    /*!**************************!*\
      !*** ./src/templater.js ***!
      \**************************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 216:0-14 */

    /***/
    function (module) {
      var Templater = function Templater(list) {
        var createItem,
            templater = this;

        var init = function init() {
          var itemSource;

          if (typeof list.item === 'function') {
            createItem = function createItem(values) {
              var item = list.item(values);
              return getItemSource(item);
            };

            return;
          }

          if (typeof list.item === 'string') {
            if (list.item.indexOf('<') === -1) {
              itemSource = document.getElementById(list.item);
            } else {
              itemSource = getItemSource(list.item);
            }
          } else {
            /* If item source does not exists, use the first item in list as
            source for new items */
            itemSource = getFirstListItem();
          }

          if (!itemSource) {
            throw new Error("The list needs to have at least one item on init otherwise you'll have to add a template.");
          }

          itemSource = createCleanTemplateItem(itemSource, list.valueNames);

          createItem = function createItem() {
            return itemSource.cloneNode(true);
          };
        };

        var createCleanTemplateItem = function createCleanTemplateItem(templateNode, valueNames) {
          var el = templateNode.cloneNode(true);
          el.removeAttribute('id');

          for (var i = 0, il = valueNames.length; i < il; i++) {
            var elm = undefined,
                valueName = valueNames[i];

            if (valueName.data) {
              for (var j = 0, jl = valueName.data.length; j < jl; j++) {
                el.setAttribute('data-' + valueName.data[j], '');
              }
            } else if (valueName.attr && valueName.name) {
              elm = list.utils.getByClass(el, valueName.name, true);

              if (elm) {
                elm.setAttribute(valueName.attr, '');
              }
            } else {
              elm = list.utils.getByClass(el, valueName, true);

              if (elm) {
                elm.innerHTML = '';
              }
            }
          }

          return el;
        };

        var getFirstListItem = function getFirstListItem() {
          var nodes = list.list.childNodes;

          for (var i = 0, il = nodes.length; i < il; i++) {
            // Only textnodes have a data attribute
            if (nodes[i].data === undefined) {
              return nodes[i].cloneNode(true);
            }
          }

          return undefined;
        };

        var getItemSource = function getItemSource(itemHTML) {
          if (typeof itemHTML !== 'string') return undefined;

          if (/<tr[\s>]/g.exec(itemHTML)) {
            var tbody = document.createElement('tbody');
            tbody.innerHTML = itemHTML;
            return tbody.firstElementChild;
          } else if (itemHTML.indexOf('<') !== -1) {
            var div = document.createElement('div');
            div.innerHTML = itemHTML;
            return div.firstElementChild;
          }

          return undefined;
        };

        var getValueName = function getValueName(name) {
          for (var i = 0, il = list.valueNames.length; i < il; i++) {
            var valueName = list.valueNames[i];

            if (valueName.data) {
              var data = valueName.data;

              for (var j = 0, jl = data.length; j < jl; j++) {
                if (data[j] === name) {
                  return {
                    data: name
                  };
                }
              }
            } else if (valueName.attr && valueName.name && valueName.name == name) {
              return valueName;
            } else if (valueName === name) {
              return name;
            }
          }
        };

        var setValue = function setValue(item, name, value) {
          var elm = undefined,
              valueName = getValueName(name);
          if (!valueName) return;

          if (valueName.data) {
            item.elm.setAttribute('data-' + valueName.data, value);
          } else if (valueName.attr && valueName.name) {
            elm = list.utils.getByClass(item.elm, valueName.name, true);

            if (elm) {
              elm.setAttribute(valueName.attr, value);
            }
          } else {
            elm = list.utils.getByClass(item.elm, valueName, true);

            if (elm) {
              elm.innerHTML = value;
            }
          }
        };

        this.get = function (item, valueNames) {
          templater.create(item);
          var values = {};

          for (var i = 0, il = valueNames.length; i < il; i++) {
            var elm = undefined,
                valueName = valueNames[i];

            if (valueName.data) {
              for (var j = 0, jl = valueName.data.length; j < jl; j++) {
                values[valueName.data[j]] = list.utils.getAttribute(item.elm, 'data-' + valueName.data[j]);
              }
            } else if (valueName.attr && valueName.name) {
              elm = list.utils.getByClass(item.elm, valueName.name, true);
              values[valueName.name] = elm ? list.utils.getAttribute(elm, valueName.attr) : '';
            } else {
              elm = list.utils.getByClass(item.elm, valueName, true);
              values[valueName] = elm ? elm.innerHTML : '';
            }
          }

          return values;
        };

        this.set = function (item, values) {
          if (!templater.create(item)) {
            for (var v in values) {
              if (values.hasOwnProperty(v)) {
                setValue(item, v, values[v]);
              }
            }
          }
        };

        this.create = function (item) {
          if (item.elm !== undefined) {
            return false;
          }

          item.elm = createItem(item.values());
          templater.set(item, item.values());
          return true;
        };

        this.remove = function (item) {
          if (item.elm.parentNode === list.list) {
            list.list.removeChild(item.elm);
          }
        };

        this.show = function (item) {
          templater.create(item);
          list.list.appendChild(item.elm);
        };

        this.hide = function (item) {
          if (item.elm !== undefined && item.elm.parentNode === list.list) {
            list.list.removeChild(item.elm);
          }
        };

        this.clear = function () {
          /* .innerHTML = ''; fucks up IE */
          if (list.list.hasChildNodes()) {
            while (list.list.childNodes.length >= 1) {
              list.list.removeChild(list.list.firstChild);
            }
          }
        };

        init();
      };

      module.exports = function (list) {
        return new Templater(list);
      };
      /***/

    },

    /***/
    "./src/utils/classes.js":
    /*!******************************!*\
      !*** ./src/utils/classes.js ***!
      \******************************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module, __webpack_require__ */

    /*! CommonJS bailout: module.exports is used directly at 24:0-14 */

    /***/
    function (module, __unused_webpack_exports, __webpack_require__) {
      /**
       * Module dependencies.
       */
      var index = __webpack_require__(
      /*! ./index-of */
      "./src/utils/index-of.js");
      /**
       * Whitespace regexp.
       */


      var re = /\s+/;
      /**
       * toString reference.
       */

      var toString = Object.prototype.toString;
      /**
       * Wrap `el` in a `ClassList`.
       *
       * @param {Element} el
       * @return {ClassList}
       * @api public
       */

      module.exports = function (el) {
        return new ClassList(el);
      };
      /**
       * Initialize a new ClassList for `el`.
       *
       * @param {Element} el
       * @api private
       */


      function ClassList(el) {
        if (!el || !el.nodeType) {
          throw new Error('A DOM element reference is required');
        }

        this.el = el;
        this.list = el.classList;
      }
      /**
       * Add class `name` if not already present.
       *
       * @param {String} name
       * @return {ClassList}
       * @api public
       */


      ClassList.prototype.add = function (name) {
        // classList
        if (this.list) {
          this.list.add(name);
          return this;
        } // fallback


        var arr = this.array();
        var i = index(arr, name);
        if (!~i) arr.push(name);
        this.el.className = arr.join(' ');
        return this;
      };
      /**
       * Remove class `name` when present, or
       * pass a regular expression to remove
       * any which match.
       *
       * @param {String|RegExp} name
       * @return {ClassList}
       * @api public
       */


      ClassList.prototype.remove = function (name) {
        // classList
        if (this.list) {
          this.list.remove(name);
          return this;
        } // fallback


        var arr = this.array();
        var i = index(arr, name);
        if (~i) arr.splice(i, 1);
        this.el.className = arr.join(' ');
        return this;
      };
      /**
       * Toggle class `name`, can force state via `force`.
       *
       * For browsers that support classList, but do not support `force` yet,
       * the mistake will be detected and corrected.
       *
       * @param {String} name
       * @param {Boolean} force
       * @return {ClassList}
       * @api public
       */


      ClassList.prototype.toggle = function (name, force) {
        // classList
        if (this.list) {
          if ('undefined' !== typeof force) {
            if (force !== this.list.toggle(name, force)) {
              this.list.toggle(name); // toggle again to correct
            }
          } else {
            this.list.toggle(name);
          }

          return this;
        } // fallback


        if ('undefined' !== typeof force) {
          if (!force) {
            this.remove(name);
          } else {
            this.add(name);
          }
        } else {
          if (this.has(name)) {
            this.remove(name);
          } else {
            this.add(name);
          }
        }

        return this;
      };
      /**
       * Return an array of classes.
       *
       * @return {Array}
       * @api public
       */


      ClassList.prototype.array = function () {
        var className = this.el.getAttribute('class') || '';
        var str = className.replace(/^\s+|\s+$/g, '');
        var arr = str.split(re);
        if ('' === arr[0]) arr.shift();
        return arr;
      };
      /**
       * Check if class `name` is present.
       *
       * @param {String} name
       * @return {ClassList}
       * @api public
       */


      ClassList.prototype.has = ClassList.prototype.contains = function (name) {
        return this.list ? this.list.contains(name) : !!~index(this.array(), name);
      };
      /***/

    },

    /***/
    "./src/utils/events.js":
    /*!*****************************!*\
      !*** ./src/utils/events.js ***!
      \*****************************/

    /*! default exports */

    /*! export bind [provided] [no usage info] [missing usage info prevents renaming] */

    /*! export unbind [provided] [no usage info] [missing usage info prevents renaming] */

    /*! other exports [not provided] [no usage info] */

    /*! runtime requirements: __webpack_exports__, __webpack_require__ */

    /***/
    function (__unused_webpack_module, exports, __webpack_require__) {
      var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
          unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
          prefix = bind !== 'addEventListener' ? 'on' : '',
          toArray = __webpack_require__(
      /*! ./to-array */
      "./src/utils/to-array.js");
      /**
       * Bind `el` event `type` to `fn`.
       *
       * @param {Element} el, NodeList, HTMLCollection or Array
       * @param {String} type
       * @param {Function} fn
       * @param {Boolean} capture
       * @api public
       */


      exports.bind = function (el, type, fn, capture) {
        el = toArray(el);

        for (var i = 0, il = el.length; i < il; i++) {
          el[i][bind](prefix + type, fn, capture || false);
        }
      };
      /**
       * Unbind `el` event `type`'s callback `fn`.
       *
       * @param {Element} el, NodeList, HTMLCollection or Array
       * @param {String} type
       * @param {Function} fn
       * @param {Boolean} capture
       * @api public
       */


      exports.unbind = function (el, type, fn, capture) {
        el = toArray(el);

        for (var i = 0, il = el.length; i < il; i++) {
          el[i][unbind](prefix + type, fn, capture || false);
        }
      };
      /***/

    },

    /***/
    "./src/utils/extend.js":
    /*!*****************************!*\
      !*** ./src/utils/extend.js ***!
      \*****************************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 4:0-14 */

    /***/
    function (module) {
      /*
       * Source: https://github.com/segmentio/extend
       */
      module.exports = function extend(object) {
        // Takes an unlimited number of extenders.
        var args = Array.prototype.slice.call(arguments, 1); // For each extender, copy their properties on our object.

        for (var i = 0, source; source = args[i]; i++) {
          if (!source) continue;

          for (var property in source) {
            object[property] = source[property];
          }
        }

        return object;
      };
      /***/

    },

    /***/
    "./src/utils/fuzzy.js":
    /*!****************************!*\
      !*** ./src/utils/fuzzy.js ***!
      \****************************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 1:0-14 */

    /***/
    function (module) {
      module.exports = function (text, pattern, options) {
        // Aproximately where in the text is the pattern expected to be found?
        var Match_Location = options.location || 0; //Determines how close the match must be to the fuzzy location (specified above). An exact letter match which is 'distance' characters away from the fuzzy location would score as a complete mismatch. A distance of '0' requires the match be at the exact location specified, a threshold of '1000' would require a perfect match to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.

        var Match_Distance = options.distance || 100; // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match (of both letters and location), a threshold of '1.0' would match anything.

        var Match_Threshold = options.threshold || 0.4;
        if (pattern === text) return true; // Exact match

        if (pattern.length > 32) return false; // This algorithm cannot be used
        // Set starting location at beginning text and initialise the alphabet.

        var loc = Match_Location,
            s = function () {
          var q = {},
              i;

          for (i = 0; i < pattern.length; i++) {
            q[pattern.charAt(i)] = 0;
          }

          for (i = 0; i < pattern.length; i++) {
            q[pattern.charAt(i)] |= 1 << pattern.length - i - 1;
          }

          return q;
        }(); // Compute and return the score for a match with e errors and x location.
        // Accesses loc and pattern through being a closure.


        function match_bitapScore_(e, x) {
          var accuracy = e / pattern.length,
              proximity = Math.abs(loc - x);

          if (!Match_Distance) {
            // Dodge divide by zero error.
            return proximity ? 1.0 : accuracy;
          }

          return accuracy + proximity / Match_Distance;
        }

        var score_threshold = Match_Threshold,
            // Highest score beyond which we give up.
        best_loc = text.indexOf(pattern, loc); // Is there a nearby exact match? (speedup)

        if (best_loc != -1) {
          score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold); // What about in the other direction? (speedup)

          best_loc = text.lastIndexOf(pattern, loc + pattern.length);

          if (best_loc != -1) {
            score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
          }
        } // Initialise the bit arrays.


        var matchmask = 1 << pattern.length - 1;
        best_loc = -1;
        var bin_min, bin_mid;
        var bin_max = pattern.length + text.length;
        var last_rd;

        for (var d = 0; d < pattern.length; d++) {
          // Scan for the best match; each iteration allows for one more error.
          // Run a binary search to determine how far from 'loc' we can stray at this
          // error level.
          bin_min = 0;
          bin_mid = bin_max;

          while (bin_min < bin_mid) {
            if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
              bin_min = bin_mid;
            } else {
              bin_max = bin_mid;
            }

            bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
          } // Use the result from this iteration as the maximum for the next.


          bin_max = bin_mid;
          var start = Math.max(1, loc - bin_mid + 1);
          var finish = Math.min(loc + bin_mid, text.length) + pattern.length;
          var rd = Array(finish + 2);
          rd[finish + 1] = (1 << d) - 1;

          for (var j = finish; j >= start; j--) {
            // The alphabet (s) is a sparse hash, so the following line generates
            // warnings.
            var charMatch = s[text.charAt(j - 1)];

            if (d === 0) {
              // First pass: exact match.
              rd[j] = (rd[j + 1] << 1 | 1) & charMatch;
            } else {
              // Subsequent passes: fuzzy match.
              rd[j] = (rd[j + 1] << 1 | 1) & charMatch | ((last_rd[j + 1] | last_rd[j]) << 1 | 1) | last_rd[j + 1];
            }

            if (rd[j] & matchmask) {
              var score = match_bitapScore_(d, j - 1); // This match will almost certainly be better than any existing match.
              // But check anyway.

              if (score <= score_threshold) {
                // Told you so.
                score_threshold = score;
                best_loc = j - 1;

                if (best_loc > loc) {
                  // When passing loc, don't exceed our current distance from loc.
                  start = Math.max(1, 2 * loc - best_loc);
                } else {
                  // Already passed loc, downhill from here on in.
                  break;
                }
              }
            }
          } // No hope for a (better) match at greater error levels.


          if (match_bitapScore_(d + 1, loc) > score_threshold) {
            break;
          }

          last_rd = rd;
        }

        return best_loc < 0 ? false : true;
      };
      /***/

    },

    /***/
    "./src/utils/get-attribute.js":
    /*!************************************!*\
      !*** ./src/utils/get-attribute.js ***!
      \************************************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 11:0-14 */

    /***/
    function (module) {
      /**
       * A cross-browser implementation of getAttribute.
       * Source found here: http://stackoverflow.com/a/3755343/361337 written by Vivin Paliath
       *
       * Return the value for `attr` at `element`.
       *
       * @param {Element} el
       * @param {String} attr
       * @api public
       */
      module.exports = function (el, attr) {
        var result = el.getAttribute && el.getAttribute(attr) || null;

        if (!result) {
          var attrs = el.attributes;
          var length = attrs.length;

          for (var i = 0; i < length; i++) {
            if (attrs[i] !== undefined) {
              if (attrs[i].nodeName === attr) {
                result = attrs[i].nodeValue;
              }
            }
          }
        }

        return result;
      };
      /***/

    },

    /***/
    "./src/utils/get-by-class.js":
    /*!***********************************!*\
      !*** ./src/utils/get-by-class.js ***!
      \***********************************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 53:0-14 */

    /***/
    function (module) {
      /**
       * A cross-browser implementation of getElementsByClass.
       * Heavily based on Dustin Diaz's function: http://dustindiaz.com/getelementsbyclass.
       *
       * Find all elements with class `className` inside `container`.
       * Use `single = true` to increase performance in older browsers
       * when only one element is needed.
       *
       * @param {String} className
       * @param {Element} container
       * @param {Boolean} single
       * @api public
       */
      var getElementsByClassName = function getElementsByClassName(container, className, single) {
        if (single) {
          return container.getElementsByClassName(className)[0];
        } else {
          return container.getElementsByClassName(className);
        }
      };

      var querySelector = function querySelector(container, className, single) {
        className = '.' + className;

        if (single) {
          return container.querySelector(className);
        } else {
          return container.querySelectorAll(className);
        }
      };

      var polyfill = function polyfill(container, className, single) {
        var classElements = [],
            tag = '*';
        var els = container.getElementsByTagName(tag);
        var elsLen = els.length;
        var pattern = new RegExp('(^|\\s)' + className + '(\\s|$)');

        for (var i = 0, j = 0; i < elsLen; i++) {
          if (pattern.test(els[i].className)) {
            if (single) {
              return els[i];
            } else {
              classElements[j] = els[i];
              j++;
            }
          }
        }

        return classElements;
      };

      module.exports = function () {
        return function (container, className, single, options) {
          options = options || {};

          if (options.test && options.getElementsByClassName || !options.test && document.getElementsByClassName) {
            return getElementsByClassName(container, className, single);
          } else if (options.test && options.querySelector || !options.test && document.querySelector) {
            return querySelector(container, className, single);
          } else {
            return polyfill(container, className, single);
          }
        };
      }();
      /***/

    },

    /***/
    "./src/utils/index-of.js":
    /*!*******************************!*\
      !*** ./src/utils/index-of.js ***!
      \*******************************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 3:0-14 */

    /***/
    function (module) {
      var indexOf = [].indexOf;

      module.exports = function (arr, obj) {
        if (indexOf) return arr.indexOf(obj);

        for (var i = 0, il = arr.length; i < il; ++i) {
          if (arr[i] === obj) return i;
        }

        return -1;
      };
      /***/

    },

    /***/
    "./src/utils/to-array.js":
    /*!*******************************!*\
      !*** ./src/utils/to-array.js ***!
      \*******************************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 11:0-14 */

    /***/
    function (module) {
      /**
       * Source: https://github.com/timoxley/to-array
       *
       * Convert an array-like object into an `Array`.
       * If `collection` is already an `Array`, then will return a clone of `collection`.
       *
       * @param {Array | Mixed} collection An `Array` or array-like object to convert e.g. `arguments` or `NodeList`
       * @return {Array} Naive conversion of `collection` to a new `Array`.
       * @api public
       */
      module.exports = function toArray(collection) {
        if (typeof collection === 'undefined') return [];
        if (collection === null) return [null];
        if (collection === window) return [window];
        if (typeof collection === 'string') return [collection];
        if (isArray(collection)) return collection;
        if (typeof collection.length != 'number') return [collection];
        if (typeof collection === 'function' && collection instanceof Function) return [collection];
        var arr = [];

        for (var i = 0, il = collection.length; i < il; i++) {
          if (Object.prototype.hasOwnProperty.call(collection, i) || i in collection) {
            arr.push(collection[i]);
          }
        }

        if (!arr.length) return [];
        return arr;
      };

      function isArray(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
      }
      /***/

    },

    /***/
    "./src/utils/to-string.js":
    /*!********************************!*\
      !*** ./src/utils/to-string.js ***!
      \********************************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 1:0-14 */

    /***/
    function (module) {
      module.exports = function (s) {
        s = s === undefined ? '' : s;
        s = s === null ? '' : s;
        s = s.toString();
        return s;
      };
      /***/

    },

    /***/
    "./node_modules/string-natural-compare/natural-compare.js":
    /*!****************************************************************!*\
      !*** ./node_modules/string-natural-compare/natural-compare.js ***!
      \****************************************************************/

    /*! unknown exports (runtime-defined) */

    /*! runtime requirements: module */

    /*! CommonJS bailout: module.exports is used directly at 124:0-14 */

    /***/
    function (module) {
      "use strict";

      var alphabet;
      var alphabetIndexMap;
      var alphabetIndexMapLength = 0;

      function isNumberCode(code) {
        return code >= 48 && code <= 57;
      }

      function naturalCompare(a, b) {
        var lengthA = (a += '').length;
        var lengthB = (b += '').length;
        var aIndex = 0;
        var bIndex = 0;

        while (aIndex < lengthA && bIndex < lengthB) {
          var charCodeA = a.charCodeAt(aIndex);
          var charCodeB = b.charCodeAt(bIndex);

          if (isNumberCode(charCodeA)) {
            if (!isNumberCode(charCodeB)) {
              return charCodeA - charCodeB;
            }

            var numStartA = aIndex;
            var numStartB = bIndex;

            while (charCodeA === 48 && ++numStartA < lengthA) {
              charCodeA = a.charCodeAt(numStartA);
            }

            while (charCodeB === 48 && ++numStartB < lengthB) {
              charCodeB = b.charCodeAt(numStartB);
            }

            var numEndA = numStartA;
            var numEndB = numStartB;

            while (numEndA < lengthA && isNumberCode(a.charCodeAt(numEndA))) {
              ++numEndA;
            }

            while (numEndB < lengthB && isNumberCode(b.charCodeAt(numEndB))) {
              ++numEndB;
            }

            var difference = numEndA - numStartA - numEndB + numStartB; // numA length - numB length

            if (difference) {
              return difference;
            }

            while (numStartA < numEndA) {
              difference = a.charCodeAt(numStartA++) - b.charCodeAt(numStartB++);

              if (difference) {
                return difference;
              }
            }

            aIndex = numEndA;
            bIndex = numEndB;
            continue;
          }

          if (charCodeA !== charCodeB) {
            if (charCodeA < alphabetIndexMapLength && charCodeB < alphabetIndexMapLength && alphabetIndexMap[charCodeA] !== -1 && alphabetIndexMap[charCodeB] !== -1) {
              return alphabetIndexMap[charCodeA] - alphabetIndexMap[charCodeB];
            }

            return charCodeA - charCodeB;
          }

          ++aIndex;
          ++bIndex;
        }

        if (aIndex >= lengthA && bIndex < lengthB && lengthA >= lengthB) {
          return -1;
        }

        if (bIndex >= lengthB && aIndex < lengthA && lengthB >= lengthA) {
          return 1;
        }

        return lengthA - lengthB;
      }

      naturalCompare.caseInsensitive = naturalCompare.i = function (a, b) {
        return naturalCompare(('' + a).toLowerCase(), ('' + b).toLowerCase());
      };

      Object.defineProperties(naturalCompare, {
        alphabet: {
          get: function () {
            return alphabet;
          },
          set: function (value) {
            alphabet = value;
            alphabetIndexMap = [];
            var i = 0;

            if (alphabet) {
              for (; i < alphabet.length; i++) {
                alphabetIndexMap[alphabet.charCodeAt(i)] = i;
              }
            }

            alphabetIndexMapLength = alphabetIndexMap.length;

            for (i = 0; i < alphabetIndexMapLength; i++) {
              if (alphabetIndexMap[i] === undefined) {
                alphabetIndexMap[i] = -1;
              }
            }
          }
        }
      });
      module.exports = naturalCompare;
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    if (__webpack_module_cache__[moduleId]) {
      /******/
      return __webpack_module_cache__[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/
  // module exports must be returned from runtime so entry inlining is disabled

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/


  return __webpack_require__("./src/index.js");
  /******/
}();