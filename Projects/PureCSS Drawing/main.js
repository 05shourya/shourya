for (let i = 0; i < 9; i++) {
    let star = document.createElement("div");
    $(star).addClass("s");
    $(star).addClass("s" + i);

    $(".stars").append(star);

    $(".s" + i).css({
        "left": Math.random() * 99 + "vw",
        "top": Math.random() * 10 + "rem",
        "animation-delay": Math.random() * 6 + "s"
    })
}