function outputList(type, ...rest) {
    document.write("<" + type + "l>");
    if(type === "o"){
        for (let i = 0; i < rest.length; i+=2) {
            document.write(`<li ><a href="${rest[i]}">
            ${rest[i+1]}</a></li>`);
        }
    }
    else{
        for (let i = 0; i < rest.length; i+=2) {
            document.write(`<li class="list-option""><a style="margin-left: -5px" href="${rest[i]}">
            ${rest[i+1]}</a></li>`);
        }
    }
    document.write("</" + type + "l>")
}