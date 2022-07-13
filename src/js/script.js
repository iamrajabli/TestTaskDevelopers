import slider from "./modules/slider.js";
import burger from "./modules/burger.js";

window.addEventListener('DOMContentLoaded', () => {
    slider('#services .slider__control .prev', '#services .slider__control .next', '#services .services__slider-wrapper', '#services .services__slider-item');
    slider('#examples .slider__control .prev', '#examples .slider__control .next', '#examples .examples__slider-wrapper', '#examples .examples__slider-item');

    burger('.header__burger', 'header ul');
})