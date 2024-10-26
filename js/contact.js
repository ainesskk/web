document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('submit-btn');
    submitButton.disabled = true;

    const fields = ['fio', 'birthday', 'email', 'phone', 'message'];
    fields.forEach(field => {
        const inputElement = contactForm[field];
        if (inputElement) {
            inputElement.addEventListener('blur', () => validateField(field));
            inputElement.addEventListener('input', () => validateField(field));
        }
    });

    const genderRadios = contactForm.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(radio => {
        radio.addEventListener('change', activateSubmit);
    });

    const resetButton = document.getElementById('reset-btn');
    resetButton.addEventListener('click', function (event) {
        submitButton.setAttribute('disabled', 'true');
        resetForm(contactForm);
    })

    function validateField(fieldName) {
        const field = contactForm[fieldName];
        const error = document.getElementById(`${fieldName}-error`);
        let isValid = false;

        switch (fieldName) {
            case 'fio':
                isValid = checkFio(field.value);
                break;
            case 'email':
                isValid = checkEmail(field.value);
                break;
            case 'phone':
                isValid = checkPhone(field.value);
                break;
            case 'birthday':
            case 'message':
                isValid = field.value.trim() !== '';
                break;
        }

        if (isValid) {
            field.classList.remove("error");
            field.classList.add("valid");
            if (error) error.style.display = "none";
        } else {
            field.classList.remove("valid");
            field.classList.add("error");
            if (error) error.style.display = "block";
        }

        activateSubmit();
    }
    function resetForm(contactForm) {
        contactForm.reset();

        const elements = contactForm.querySelectorAll('.valid, .error');
        elements.forEach(element => {
            element.classList.remove('valid', 'error');
        });

        const errorMessages = contactForm.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.style.display = 'none';
        });
    }

    function checkEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function checkPhone(phone) {
        const phonePattern = /^\+7\d{10,11}$/;
        return phonePattern.test(phone);
    }

    function checkInput() {
        const form = document.forms["contactForm"];
        if (form["fio"].classList.contains("valid")) {
            console.log("1 верно");
            if (form["gender"].value) {
                console.log("2 верно");
                if (form["birthday"].classList.contains("valid")) {
                    console.log("3 верно");
                    if (form["email"].classList.contains("valid")) {
                        console.log("4 верно");
                        if (form["phone"].classList.contains("valid") && checkMessage()) {
                            console.log("5 верно");
                                return true;

                        }
                    }
                }
            }
        }
        return false;
    }

    function checkMessage() {
        const form = document.forms["contactForm"];
        if (form["message"].classList.contains("valid")) {
            return true;}
    }

    function checkFio(fio) {
        fio = fio.trim();
        let cnt = 0;
        let startPos = 0;
        while (fio.indexOf(" ", startPos) >= 0) {
            cnt++;
            startPos = fio.indexOf(" ", startPos) + 1;
        }
        if (startPos < fio.length) {
            cnt++;
        }
        return cnt === 3;
    }



    function activateSubmit(event) {
        const submitButton = document.getElementById('submit-btn');
        console.log("проверка");
        if (checkInput()) {
            submitButton.removeAttribute('disabled');
            console.log("кнопка работает");
        } else {
            submitButton.setAttribute('disabled', 'true');
        }
    }

});

