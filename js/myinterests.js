function outputList(type, ...rest) {
    const $list = $(`<${type}l></${type}l>`);
    if (type === "o") {
        for (let i = 0; i < rest.length; i += 2) {
            const $listItem = $(`<li><a href="${rest[i]}">${rest[i + 1]}</a></li>`);
            $list.append($listItem);
        }
    } else {
        for (let i = 0; i < rest.length; i += 2) {
            const $listItem = $(`<li class="list-option"><a style="margin-left: -5px" href="${rest[i]}">${rest[i + 1]}</a></li>`);
            $list.append($listItem);
        }
    }
    $('body').append($list);
}
