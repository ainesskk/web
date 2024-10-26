const listOptions = window.document.querySelectorAll('.list-option');

listOptions.forEach(li => {
    addImages(li, 'heart', 'list-img');
    li.addEventListener('mouseover', addCat);
    li.addEventListener('mouseout', removeCat);
});

function addImages(place, name, imgClass) {
    const prev = document.createElement('img');
    prev.src = `img/${name}.png`;
    prev.classList.add(imgClass);
    prev.style.marginRight = '5px';

    const next = document.createElement('img');
    next.src = `img/${name}.png`;
    next.classList.add(imgClass);
    next.style.marginLeft = '5px';

    place.prepend(prev);
    place.append(next);
}

function removeImages(place, imgClass) {
    let images = place.querySelectorAll(imgClass);
    images.forEach((item) => {
        place.removeChild(item);
    });
}

function addCat(event) {
    const place = event.currentTarget;
    removeImages(place, '.list-img');
    if (!place.querySelector('.cat-list-img')) {
        addImages(place, 'cat', 'cat-list-img');
    }
}

function removeCat(event) {
    const place = event.currentTarget;
    removeImages(place, '.cat-list-img');
    addImages(place, 'heart', 'list-img');
}


if(document.getElementById('submenu-item')){
    const submenu = document.getElementById('submenu-item');
    submenu.addEventListener('mouseover', showMenu);
    submenu.addEventListener('mouseout', hideMenu);
}


function showMenu(event) {
    const items = document.querySelectorAll('.submenu');
    items.forEach(item => {
        item.style.height = "auto";
        item.style.overflow = "visible";
        item.style.opacity = "1";
    });
}

function hideMenu(event) {
    const items = document.querySelectorAll('.submenu');
    items.forEach(item => {
        item.style.height = "0";
        item.style.overflow = "hidden";
        item.style.opacity = "0";
    });
}