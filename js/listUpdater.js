$(document).ready(function() {
    const $listOptions = $('.list-option');

    $listOptions.each(function() {
        const $li = $(this);
        addImages($li, 'heart', 'list-img');
        $li.on('mouseenter', addCat);
        $li.on('mouseleave', removeCat);
    });

    function addImages($place, name, imgClass) {
        // Проверяем, существуют ли уже такие изображения
        if (!$place.find(`.${imgClass}`).length) {
            const $prev = $('<img>').attr('src', `img/${name}.png`).addClass(imgClass).css('margin-right', '5px');
            const $next = $('<img>').attr('src', `img/${name}.png`).addClass(imgClass).css('margin-left', '5px');

            $place.prepend($prev);
            $place.append($next);
        }
    }

    function removeImages($place, imgClass) {
        $place.find(`.${imgClass}`).remove();
    }

    function addCat(event) {
        const $place = $(event.currentTarget);
        removeImages($place, 'list-img');
        addImages($place, 'cat', 'cat-list-img');
    }

    function removeCat(event) {
        const $place = $(event.currentTarget);
        removeImages($place, 'cat-list-img');
        addImages($place, 'heart', 'list-img');
    }

    const $submenu = $('#submenu-item');
    if ($submenu.length) {
        $submenu.on('mouseenter', showMenu);
        $submenu.on('mouseleave', hideMenu);
    }

    function showMenu(event) {
        $('.submenu').css({
            'height': 'auto',
            'overflow': 'visible',
            'opacity': '1'
        });
    }

    function hideMenu(event) {
        $('.submenu').css({
            'height': '0',
            'overflow': 'hidden',
            'opacity': '0'
        });
    }
});
