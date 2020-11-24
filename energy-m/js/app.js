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


lightGallery(document.getElementById('insta-gallery')); //Range Slider (NOUISLIDER)

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