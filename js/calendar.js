let okClicked = false;
const birthdayField = document.getElementById('birthday');

const monthsArray = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
]
const monthsDays = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
]

const monthSelect = window.document.getElementById("month");
const yearSelect = window.document.getElementById("year");
const birthField = window.document.getElementById("birthday");
birthField.addEventListener("click", showCalendar)
monthSelect.addEventListener("change", outDays)
yearSelect.addEventListener("change", outDays)
const daysContainer = window.document.getElementById("days");
const curDate = new Date();

for (let i = 0; i < monthsArray.length; i++) {
    const monthOption = document.createElement("option");
    monthOption.textContent = monthsArray[i];
    monthOption.value = i;
    monthSelect.append(monthOption);
}

for (let i = curDate.getFullYear(); i >= 1950; i--) {
    const yearOption = document.createElement("option");
    yearOption.textContent = i;
    yearOption.value = i;
    yearSelect.append(yearOption);
}

function outDays(){
    const month = parseInt(monthSelect.value, 10);
    const year = parseInt(yearSelect.value, 10);
    daysContainer.innerHTML='';
    let lastDay;
    if((((year%4 === 0)&&(year%100 !== 0))||(year%400 === 0))&&(month===1))
        lastDay = monthsDays[month]+1;
    else lastDay = monthsDays[month];
    for (let i = 1; i <= lastDay; i++) {
        const dayBlock = document.createElement("p");
        dayBlock.textContent = i;
        dayBlock.classList.add("day-block");
        dayBlock.addEventListener("click",() => writeDate(i));
        daysContainer.append(dayBlock);
    }

}

outDays();

const calendar = document.getElementById("calendar-container");

function showCalendar(){
    birthdayField.addEventListener("blur", function() {
        if (!okClicked) {
            birthField.focus();
        }
    });
    calendar.style.display = "block";
    calendar.style.opacity = "1";
}

function writeDate(day){
    const m = parseInt(monthSelect.value)+1;
    const y = parseInt(yearSelect.value);
    birthField.value = `${checkDate(day)}.${checkDate(m)}.${y}`;
}

function checkDate(element){
    if(element<10) return ("0"+element);
    else return element;
}

const button = document.getElementById("calendar-but");
button.addEventListener("click", function(){
    okClicked = true;
    calendar.style.display = "none";
    calendar.style.opacity = "0";
})