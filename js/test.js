function checkInputText() {
    let form = document.forms["testForm"];
    if (form["fio"].value === "") {
        alert("Пожалуйста, введите ваше ФИО.");
        form["fio"].focus();
        return false;
    }
    if (!checkFio(document.forms["testForm"])) return false;
    if (form["group"].value === "") {
        alert("Пожалуйста, выберите вашу группу.");
        form["group"].focus();
        return false;
    }
    if (!form["question 1"].value) {
        alert("Пожалуйста, выберите ответ на 1 вопрос.");
        return false;
    }
    if (form["question 2"].value === "") {
        alert("Пожалуйста, выберите ответ на 2 вопрос.");
        form["question 2"].focus();
        return false;
    }
    if (form["question 3"].value === "") {
        alert("Пожалуйста, введите ответ на 3 вопрос.");
        form["question 3"].focus();
        return false;
    }
    if (!checkAnswer(document.forms["testForm"])) return false;
    return true;
}

function checkAnswer(formName){
    let answer = formName["question 3"].value;
    let words = answer.split(/\s+/);
    if (words.length < 35) {
        alert("Пожалуйста, введите не менее 35 слов в ответе.");
        formName["question 3"].focus();
        return false;
    }
    else return true;
}