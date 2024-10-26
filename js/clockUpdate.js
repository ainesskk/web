const months = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
];

const date = document.createElement("p");
function clockUpdate(){
    const curDate = new Date();
    const dateEl = window.document.getElementById("clock")
    const dateTemp = curDate.getDate().toString()+" "+months[curDate.getMonth()].toString()+" "+curDate.getFullYear().toString();
    let minutes = curDate.getMinutes();
    if (minutes<10)
        minutes = "0" + minutes;
    let hours = curDate.getHours();
    if (hours<10)
        hours = "0" + hours;
    let seconds = curDate.getSeconds();
    if (seconds<10)
        seconds = "0" + seconds;
    const timeTmp = hours+":"+minutes+":"+seconds;

    date.textContent = dateTemp+" "+timeTmp;
    date.style.fontWeight = "bold";
    date.style.margin = "0";
    date.style.backgroundColor = "#ffa0c5";
    date.style.padding = "5px";
    date.style.borderRadius = "10px";
    dateEl.append(date);

    setTimeout("clockUpdate()",1000);
}

window.onload=clockUpdate;