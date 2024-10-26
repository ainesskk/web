function setPhotos(num, quant) {
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
        document.write(`
            <div class="${classPh}">
                <img src="${photos[i]}" alt="${alts[i]}" title="${titles[i]}">
                <p>${titles[i]}</p>
            </div>
        `);
    }
}
