$(document).ready(function() {
    let okClicked = false;

    const monthsArray = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    const days = [
        "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
    ];
    const daysOutput = {
        "Вс": 6, "Пн": 0, "Вт": 1, "Ср": 2, "Чт": 3, "Пт": 4, "Сб": 5
    };
    const monthsDays = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];
    const curDate = new Date();

    monthsArray.forEach((month, i) => {
        $('#month').append(`<option value="${i}">${month}</option>`);
    });

    for (let i = curDate.getFullYear(); i >= 1950; i--) {
        $('#year').append(`<option value="${i}">${i}</option>`);
    }

    $('#birthday').on('click', showCalendar);
    $('#month').on('change', outDays);
    $('#year').on('change', outDays);

    function outDays() {
        const month = parseInt($('#month').val(), 10);
        const year = parseInt($('#year').val(), 10);
        $('#days').empty();
        let lastDay = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && month === 1 ? monthsDays[month] + 1 : monthsDays[month];

        for (let i = 1; i <= 6; i++) {
            $('#days').append(`<p class="weekday-block">${days[i]}</p>`);
        }
        $('#days').append(`<p class="weekday-block">${days[0]}</p>`);

        let date = new Date(`${year}-${month + 1 < 10 ? '0' + (month + 1) : (month + 1)}-01`);
        let cnt = date.getDay();
        let tmp = days[cnt];
        for (let j = 0; j < daysOutput[tmp]; j++) {
            $('#days').append('<p class="weekday-block"></p>');
        }
        for (let i = 1; i <= lastDay; i++) {
            $('#days').append(`<p class="day-block">${i}</p>`);
            $('#days').children().last().on('click', () => writeDate(i));
        }
    }

    outDays();

    function showCalendar() {
        $('#birthday').on('blur', function() {
            if (!okClicked) {
                $('#birthday').focus();
            }
        });
        $('#calendar-container').css('display', 'block').css('opacity', '1');
    }

    function writeDate(day) {
        const m = parseInt($('#month').val()) + 1;
        const y = parseInt($('#year').val());
        $('#birthday').val(`${checkDate(day)}.${checkDate(m)}.${y}`);
        validateField("birthday");
    }

    function validateField(fieldName) {
        const $contactForm = $('#contactForm');
        const $field = $contactForm.find(`[name="${fieldName}"]`);
        const isValid = $field.val().trim() !== '';

        if (isValid) {
            $field.addClass("valid").removeClass("error");
        } else {
            $field.addClass("error").removeClass("valid");
        }
    }

    function checkDate(element) {
        return element < 10 ? `0${element}` : element;
    }

    $('#calendar-but').on('click', function() {
        okClicked = true;
        $('#calendar-container').css('display', 'none').css('opacity', '0');
    });
});
