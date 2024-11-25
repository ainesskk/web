$(document).ready(function() {
    const form = $("#testForm");
    form.on('submit', function(event) {
        if (!checkInputText()) {
            event.preventDefault();
        }
    });

    function checkInputText() {

        if (form.find('[name="fio"]').val() === "") {
            alert("Пожалуйста, введите ваше ФИО.");
            form.find('[name="fio"]').focus();
            return false;
        }
        if (!checkFio(form)) return false;
        if (form.find('[name="group"]').val() === "") {
            alert("Пожалуйста, выберите вашу группу.");
            form.find('[name="group"]').focus();
            return false;
        }
        if (!form.find('[name="question 1"]').val()) {
            alert("Пожалуйста, выберите ответ на 1 вопрос.");
            return false;
        }
        if (form.find('[name="question 2"]').val() === "") {
            alert("Пожалуйста, выберите ответ на 2 вопрос.");
            form.find('[name="question 2"]').focus();
            return false;
        }
        if (form.find('[name="question 3"]').val() === "") {
            alert("Пожалуйста, введите ответ на 3 вопрос.");
            form.find('[name="question 3"]').focus();
            return false;
        }
        if (!checkAnswer(form)) return false;
        return true;
    }

    function checkAnswer(form) {
        let answer = form.find('[name="question 3"]').val();
        let words = answer.split(/\s+/);
        if (words.length < 35) {
            alert("Пожалуйста, введите не менее 35 слов в ответе.");
            form.find('[name="question 3"]').focus();
            return false;
        }
        return true;
    }

    function checkFio(form) {
        let fio = form.find('[name="fio"]').val().trim();
        let cnt = 0;
        let startPos = 0;
        while (fio.indexOf(" ", startPos) >= 0) {
            cnt++;
            startPos = fio.indexOf(" ", startPos) + 1;
        }
        if (startPos < fio.length) {
            cnt++;
        }
        if (cnt !== 3) {
            alert("ФИО должно содержать три части.");
            form.find('[name="fio"]').focus();
            return false;
        }
        return true;
    }
});
