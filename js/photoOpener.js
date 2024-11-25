$(document).ready(function() {
    let formIsClosed = true;
    let currentImgIndex = 0;
    const images = $('img');
    const form = $('<div></div>');

    images.each(function(index) {
        $(this).on('click', function(event) {
            if (formIsClosed) {
                currentImgIndex = index;
                openPhoto(event);
            }
        });
    });

    function openPhoto(event) {
        if (formIsClosed) {
            $('.main-body').css({
                'filter': 'blur(5px)',
                'transition': '1s'
            });
            addPhotoForm(event.target);
        }
    }

    function addPhotoForm(targetImg) {
        form.addClass('photoForm').css('display', 'block');
        $('body').append(form);
        form.css('top', `${window.scrollY + 100}px`);

        const img = $('<img>').attr({
            src: targetImg.src,
            alt: targetImg.alt,
            title: targetImg.alt
        }).css({
            'width': '550px',
            'maxHeight': '550px',
            'marginTop': '10px'
        });
        form.append(img);

        $('body').css('overflow', 'hidden');

        const photoDiv = $('<div></div>').addClass('photoDiv').css({
            'display': 'flex',
            'flex-wrap': 'wrap',
            'justify-content': 'center',
            'align-items': 'center',
            'margin-top': '25px'
        });

        const photoCounter = $('<p></p>').text(`фото ${$(targetImg).attr('id')} из ${images.length}`);
        const leftArrow = $('<button></button>').addClass('form-but').text('<').css({
            'margin': '0 20px',
            'width': '20%'
        });
        const rightArrow = $('<button></button>').addClass('form-but').text('>').css({
            'margin': '0 20px',
            'width': '20%'
        });
        const closeImg = $('<img>').attr({
            src: "img/close.png",
            alt: "close",
            title: "Закрыть"
        }).addClass('form-but').css({
            'width': '50px',
            'background': '#fff',
            'position': 'absolute',
            'top': '-2%',
            'right': '2%'
        });
        closeImg.on('click', function() {
            closePhotoForm(img, closeImg, photoDiv);
        });

        leftArrow.on('click', function() {
            changePhoto('left', img, photoCounter);
        });

        rightArrow.on('click', function() {
            changePhoto('right', img, photoCounter);
        });

        photoDiv.append(leftArrow);
        photoDiv.append(photoCounter);
        photoDiv.append(rightArrow);
        form.append(closeImg);
        form.append(photoDiv);

        formIsClosed = false;
    }

    function changePhoto(direction, img, photoCounter) {
        if (direction === 'left') {
            currentImgIndex = (currentImgIndex === 0) ? images.length-1 : currentImgIndex-1;
        } else {
            currentImgIndex = (currentImgIndex === images.length-1) ? 0 : currentImgIndex+1;
        }

        const newImg = images.eq(currentImgIndex);
        img.fadeOut(300, function() {
            img.attr({
                'src': newImg.attr('src'),
                'alt': newImg.attr('alt'),
                'title': newImg.attr('alt')
            });
            img.fadeIn(300);
        });

        photoCounter.text(`фото ${newImg.attr('id')} из 15`);
    }

    function closePhotoForm(img, closeImg, photoDiv) {
        photoDiv.remove();
        form.remove();
        img.remove();
        closeImg.remove();
        $('body').css('overflow', 'auto');
        $('.main-body').css('filter', 'none');
        formIsClosed = true;
    }

});
