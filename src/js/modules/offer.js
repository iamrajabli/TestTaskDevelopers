export default function Offer(offerSelector, dropSelector) {
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