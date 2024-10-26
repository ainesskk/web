let formIsClosed = true;

const photos = document.querySelectorAll('img');
photos.forEach(photo => {
    photo.addEventListener('click', openPhoto)
})

const bodyMain = document.querySelector('.main-body');
const body = document.querySelector('body');
const form = document.createElement('div')

function openPhoto(event) {
    if(formIsClosed){
        bodyMain.style.filter = 'blur(5px)';
        bodyMain.style.transition = '1s';
        console.log(event.target);
        addPhotoForm(event.target);
    }
}

function addPhotoForm(targetImg){
     form.classList.add('photoForm');
     form.style.display = 'block';
     body.append(form);
     form.style.top = `${window.scrollY + 100}px`;

     const img = document.createElement('img');
     let name = getCharacters(targetImg.src);
     img.src = `img/${name}`;
     img.style.width = '550px';
     img.style.maxHeight = '550px';
     img.style.marginTop = '10px';
     form.append(img);

     body.style.overflow = 'hidden';

     const button = document.createElement('button');
     button.classList.add('form-but');
     button.textContent = 'Закрыть';
     button.addEventListener('click', () => closePhotoForm(img, button));
     form.append(button);

     formIsClosed = false;
}

function closePhotoForm(img, button){
    form.remove();
    img.remove();
    button.remove();
    body.style.overflow = 'auto';
    bodyMain.style.filter = 'none';
    formIsClosed = true;
}

function getCharacters(str) {
    const position = str.lastIndexOf("/");
    if (position === -1) return '';
    return str.substring(position + 1);
}
