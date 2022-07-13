export default function slider(prevSelector, nextSelector, wrapperSelector, slidesSelector) {

    const prev = document.querySelector(prevSelector);
    const next = document.querySelector(nextSelector);
    const wrapper = document.querySelector(wrapperSelector);
    const slides = document.querySelectorAll(slidesSelector);

    let width = slides[0].offsetWidth;
    let offset = 0;


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