/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ burger)
/* harmony export */ });
function burger(burgerSelector, menuSelector) {
    const callElem = selector => document.querySelector(selector),
        burger = callElem(burgerSelector),
        menu = callElem(menuSelector);  

    burger.addEventListener('click', () => {
        menu.classList.toggle('d-flex')
    })
}

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ form)
/* harmony export */ });
function form(formSelector, inputsSelector, emailSelector) {
    const callElem = selector => document.querySelector(selector),
        form = callElem(formSelector),
        inputs = document.querySelectorAll(inputsSelector),
        email = callElem(emailSelector);
  

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form),
            formObj = Object.fromEntries(formData.entries()),
            result = controlInputs(formObj);

        errorBorder(result, email)

        // if (!result) {
        //     errorBorder(result)

        // } else {
        //     errorBorder(result)
        //     POST METHOD
        // }

    });

    // Проверка на пустые поля
    function controlInputs(formObj) {
        for (let key in formObj) {
            if (formObj[key] === '') {
                return false;
            }
        }

        return true;
    }

    // Показать ошибку если не заполнены все поля
    function errorBorder(status, email) {
        if (!status) {
            inputs.forEach(item => {
                item.classList.add('empty')
            })
        } else {
            inputs.forEach(item => {
                item.classList.remove('empty')
            })
        }

        if (!controlEmail(email.value)) {
            email.classList.add('empty')
        } else {
            email.classList.remove('empty')
        }
    }

    // Показать ошибку если не заполнен email поле (проверка на @)
    function controlEmail(email) {
        const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        return regex.test(email);
    }

}

/***/ }),

/***/ "./src/js/modules/offer.js":
/*!*********************************!*\
  !*** ./src/js/modules/offer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Offer)
/* harmony export */ });
function Offer(offerSelector, dropSelector) {
    const callElems = selector => document.querySelectorAll(selector);

    const show = (offer, drop) => {
        const offers = callElems(offer),
            drops = callElems(drop)

        offers.forEach((item, i) => {
            item.addEventListener('click', () => {
                drops[i].classList.toggle('d-flex')
            })
        })
    }

    show(offerSelector, dropSelector);
    show(dropSelector, dropSelector);


}

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slider)
/* harmony export */ });
function slider(prevSelector, nextSelector, wrapperSelector, slidesSelector) {
    const callElem = selector => document.querySelector(selector),
        prev = callElem(prevSelector),
        next = callElem(nextSelector),
        wrapper = callElem(wrapperSelector),
        slides = document.querySelectorAll(slidesSelector);


   let width = slides[0].offsetWidth,
        offset = 0;


    const transform = () => {
        wrapper.style.transform = `translateX(-${offset}px)`;
    }

    // Когда размер экрана меняется манульно вызывается функция transform
    window.addEventListener('resize', () => {
        width = slides[0].offsetWidth;
        offset = 0;
        transform();

    })

    // Передвигаем на один слайд вперед
    next.addEventListener('click', () => {
        if (offset == width * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += width;
        }
        transform()
    });


    // Передвигаем на один слайд назад
    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = width * (slides.length - 1);
        } else {
            offset -= width;
        }
        transform()
    })


}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider.js */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger.js */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_offer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/offer.js */ "./src/js/modules/offer.js");
/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form.js */ "./src/js/modules/form.js");





window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#services .slider__control .prev', '#services .slider__control .next', '#services .services__slider-wrapper', '#services .services__slider-item');

    (0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#examples .slider__control .prev', '#examples .slider__control .next', '#examples .examples__slider-wrapper', '#examples .examples__slider-item');

    (0,_modules_burger_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.header__burger', 'header ul');

    (0,_modules_offer_js__WEBPACK_IMPORTED_MODULE_2__["default"])('.offer__main', '.offer__drop');

    (0,_modules_form_js__WEBPACK_IMPORTED_MODULE_3__["default"])('#discuss form', '#discuss form input', '#discuss form input[name="email"]');

})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map