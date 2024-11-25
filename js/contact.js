$(document).ready(function() {
    const contactForm = $('#contactForm');
    const submitButton = $('#submit-btn');
    submitButton.prop('disabled', true);

    const fields = ['fio', 'birthday', 'email', 'phone', 'message'];
    fields.forEach(field => {
        const inputElement = contactForm.find(`[name="${field}"]`);
        if (inputElement.length) {
            inputElement.on('blur', () => validateField(field));
            inputElement.on('input', () => validateField(field));
            inputElement.on('mouseenter', () => showPopover(field));
            inputElement.on('mouseleave', () => hidePopover(field));
        }
    });

    const genderRadios = contactForm.find('input[name="gender"]');
    genderRadios.each(function() {
        $(this).on('change', activateSubmit);
    });

    function validateField(fieldName) {
        const field = contactForm.find(`[name="${fieldName}"]`);
        const error = $(`#${fieldName}-error`);
        let isValid = false;
        switch (fieldName) {
            case 'fio':
                isValid = checkFio(field.val());
                break;
            case 'email':
                isValid = checkEmail(field.val());
                break;
            case 'phone':
                isValid = checkPhone(field.val());
                break;
            case 'birthday':
            case 'message':
                isValid = field.val().trim() !== '';
                break;
        }

        if (isValid) {
            field.removeClass("error").addClass("valid");
            if (error.length) error.hide();
        } else {
            field.removeClass("valid").addClass("error");
            if (error.length) error.show();
        }

        activateSubmit();
    }

    function resetForm(contactForm) {
        contactForm.find('input[type="text"], input[type="email"], input[type="tel"], textarea').val('');
        contactForm.find('input[type="radio"]').prop('checked', false);
        contactForm.find('select').prop('selectedIndex', 0);
        contactForm.find('.valid, .error').removeClass('valid error');
        contactForm.find('.error-message').hide();
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
        const form = contactForm;
        if (form.find(`[name="fio"]`).hasClass("valid")) {
            if (form.find(`[name="gender"]:checked`).length) {
                if (form.find(`[name="birthday"]`).hasClass("valid")) {
                    if (form.find(`[name="email"]`).hasClass("valid")) {
                        if (form.find(`[name="phone"]`).hasClass("valid") && checkMessage()) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    function checkMessage() {
        const form = contactForm;
        return form.find(`[name="message"]`).hasClass("valid");
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
        if (checkInput()) {
            submitButton.prop('disabled', false);
        } else {
            submitButton.prop('disabled', true);
        }
    }

    function showPopover(fieldName) {
        const field = contactForm.find(`[name="${fieldName}"]`);
        const popover = $(`#${fieldName}-popover`);
        const offset = field.offset();
        popover.css({
            top: offset.top,
            left: offset.left + field.outerWidth() + 10,
        }).show();
    }

    function hidePopover(fieldName) {
        const popover = $(`#${fieldName}-popover`);
        setTimeout(() => popover.hide(), 1000);
    }

    modalWindow();

    function modalWindow() {
        const form = $("#contactForm");
        $("#reset-btn").on("click", function(e) {
            e.preventDefault();

            $(".modal-window").remove();
            $(".main-body, .nav-div").addClass("blur-background");

            const window = $('<div></div>').addClass('modal-window');
            const windowText = $('<p></p>').text("Вы уверены, что хотите очистить форму?").css({
               'font-size': '20px',
            });
            const buttonYes = $('<button></button>').text("Да").addClass('form-but').css({
                'float': 'right',
                'margin-right': '60px',
                'width': '20%',
            });
            const buttonNo = $('<button></button>').text("Нет").addClass('form-but').css({
                'margin-left': '60px',
                'width': '20%',
            });

            buttonYes.on('click', function(){
                resetForm(contactForm);
                window.remove();
                $(".main-body, .nav-div").removeClass("blur-background");
            });
            buttonNo.on('click', function(){
                window.remove();
                $(".main-body, .nav-div").removeClass("blur-background");
            });

            window.append(windowText);
            window.append(buttonYes);
            window.append(buttonNo);
            $('body').append(window);

            window.show();
        });
    }
});
