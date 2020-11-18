//BuildSlider - строит HTML конструкцию для свайпера
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
}, function (e, t, n) {}]); //IBG

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
} // TABS


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
        tabs_item.classList.remove('_active');
        tabs_content[i].classList.remove('_active');
      }

      tabs_item.classList.add('_active');
      tabs_content[i].classList.add('_active');
      e.preventDefault();
    });
  }
} //Also working tabs code
// let tabs = document.querySelectorAll('._tabs')
// let btns = tabs.querySelectorAll('._tabs-item')
// let items = tabs.querySelectorAll('._tabs-content')
//
// function change(arr, i) {
//     arr.forEach( item => {
//         item.forEach( i => {i.classList.remove('_active')})
//         item[i].classList.add('_active')
//     })
// }
//
// for(let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', () => {
//         change([btns, items], i)
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
})(); //Smooth scroll to the anchor


const anchors = document.querySelectorAll('a[href*="#"]'); //Каждому якорю присваиваем обработчик события

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    //убираем стандартное поведение по клику
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
} /////////
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
burger.addEventListener('click', function (e) {
  this.classList.toggle('js-to-cross');
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
}); //Range Slider (NOUISLIDER)

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
}