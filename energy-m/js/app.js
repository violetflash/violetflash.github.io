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
//IBG


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
// TABS


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
// Dynamic Adapt v.1
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
}

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
document.addEventListener("DOMContentLoaded", function () {
  //The first argument are the elements to which the plugin shall be initialized
  //The second argument has to be at least a empty object or a object with your desired options
  OverlayScrollbars(document.querySelectorAll(".scroll"), {});
});