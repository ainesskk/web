$(document).ready(function() {
    function setPhotos(num, quant, id) {
        const photos = {};
        const titles = {};
        const alts = {};
        const ps = {};
        for (let i = num; i < num + quant; i++) {
            titles[i] = ps[i] = "Мем №" + i;
            alts[i] = "meme" + i;
            photos[i] = "img/" + i + ".jpg";
        }
        for (let i = num; i < num + quant; i++) {
            const classPh = (quant === 3) ? "photo3" : "photo";
            const photoDiv = $(`
                <div class="${classPh}">
                    <img id="${i}" src="${photos[i]}" alt="${alts[i]}" title="${titles[i]}">
                    <p>${titles[i]}</p>
                </div>
            `);
            $(`#${id}`).append(photoDiv);

        }
    }

    setPhotos(1, 4, "pb1");
    setPhotos(5, 4, "pb2");
    setPhotos(9, 4, "pb3");
    setPhotos(13, 3, "pb4");
});
