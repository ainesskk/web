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
    let title = $('title').text();
    let cntCur = storage.getItem(title);
    cntCur++;
    storage.setItem(title, cntCur);

    let cntAll = getCookie(title)+1;
    setCookie(title, cntAll, 5);
}

function updateCounter() {
    $(".td-cur").each(function() {
        let cnt = storage.getItem(pagesArrCur[$(this).attr("id")]) || 0;
        storage.setItem(pagesArrCur[$(this).attr("id")], cnt);
        $(this).text(cnt);
    });

    $(".td-all").each(function() {
        let cnt = getCookie(pagesArrAll[$(this).attr("id")]) || 0;
        if (cnt === 0) {
            setCookie(pagesArrAll[$(this).attr("id")], 0, 5);
        }
        $(this).text(cnt);
    });
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