const pagesArrAll = {
    "main-views-all": "Главная страница",
    "aboutme-views-all": "Обо мне",
    "interests-views-all": "Мои интересы",
    "album-views-all": "Фотоальбом",
    "contact-views-all": "Контакт",
    "study-views-all": "Учёба",
    "test-views-all": "Тест",
    "history-views-all": "История просмотра"
};

const pagesArrCur = {
    "main-views-cur": "Главная страница",
    "aboutme-views-cur": "Обо мне",
    "interests-views-cur": "Мои интересы",
    "album-views-cur": "Фотоальбом",
    "contact-views-cur": "Контакт",
    "study-views-cur": "Учёба",
    "test-views-cur": "Тест",
    "history-views-cur": "История просмотра"
};

let storage = window.sessionStorage;

function increaseCounter() {
    let cntCur = storage.getItem(document.title);
    cntCur++;
    storage.setItem(document.title, cntCur);

    let cntAll = getCookie(document.title)+1;
    setCookie(document.title, cntAll, 5);
}

function updateCounter() {
    const tdsCur = document.querySelectorAll('.td-cur');
    tdsCur.forEach(td => {
        let cnt = storage.getItem(pagesArrCur[td.id]);
        if(cnt === null){
            storage.setItem(pagesArrCur[td.id], "0");
        }
        td.textContent = storage.getItem(pagesArrCur[td.id]);
    });

    const tdsAll = document.querySelectorAll('.td-all');
    tdsAll.forEach(td => {
        console.log(pagesArrAll[td.id]);
        let cnt = getCookie(pagesArrAll[td.id]);
        if(!cnt){
            setCookie(pagesArrAll[td.id], 0, 5);
        }
        td.textContent = getCookie(pagesArrAll[td.id]).toString();
    })
}

function setCookie(name, value, days) {
    document.cookie = name + '=' + value + '; max-age=' + (days * 24 * 60 * 60) + ';';
}

function getCookie(name){
    let cookieStr = document.cookie;
    let key = cookieStr.search(name+"=");
    let index = key+parseInt(name.length)+1;
    let value="";
    for(let i = index; i <= cookieStr.length; i++){
        if(cookieStr[i]!==';') value = value+cookieStr[i];
    }
    return parseInt(value);
}