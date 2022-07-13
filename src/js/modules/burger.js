export default function burger(burgerSelector, menuSelector) {
    const callHTML = selector => document.querySelector(selector),
        burger = callHTML(burgerSelector),
        menu = callHTML(menuSelector);  

    burger.addEventListener('click', () => {
        menu.classList.toggle('d-flex')
    })
}