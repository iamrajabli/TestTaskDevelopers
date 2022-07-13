export default function form(formSelector, inputsSelector, emailSelector) {
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