$(document).ready(function() {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    function clockUpdate() {
        const curDate = new Date();
        const dateEl = $("#clock");
        const dateTemp = curDate.getDate().toString() + " " + months[curDate.getMonth()].toString() + " " + curDate.getFullYear().toString();

        let minutes = curDate.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;
        let hours = curDate.getHours();
        if (hours < 10) hours = "0" + hours;
        let seconds = curDate.getSeconds();
        if (seconds < 10) seconds = "0" + seconds;
        const timeTmp = hours + ":" + minutes + ":" + seconds;

        const $date = $('<p></p>').text(dateTemp + " " + timeTmp);
        $date.css({
            "font-weight": "bold",
            "margin": 0,
            "background-color": "#ffa0c5",
            "padding": "5px",
            "border-radius": "10px"
        });

        dateEl.empty().append($date);
        setTimeout(clockUpdate, 1000);
    }

    clockUpdate();
});
