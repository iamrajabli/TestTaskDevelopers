import slider from "./modules/slider.js";
import burger from "./modules/burger.js";
import offer from "./modules/offer.js";
import form from "./modules/form.js";

window.addEventListener('DOMContentLoaded', () => {
    slider('#services .slider__control .prev', '#services .slider__control .next', '#services .services__slider-wrapper', '#services .services__slider-item');

    slider('#examples .slider__control .prev', '#examples .slider__control .next', '#examples .examples__slider-wrapper', '#examples .examples__slider-item');

    burger('.header__burger', 'header ul');

    offer('.offer__main', '.offer__drop');

    form('#discuss form', '#discuss form input', '#discuss form input[name="email"]');

})