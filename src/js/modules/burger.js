export default function burger(burgerSelector, menuSelector) {
    const callElem = selector => document.querySelector(selector),
        burger = callElem(burgerSelector),
        menu = callElem(menuSelector);  

    burger.addEventListener('click', () => {
        menu.classList.toggle('d-flex')
    })
}