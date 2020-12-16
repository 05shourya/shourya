$(document).ready(() => {
    var typed = new Typed('.shourya', {
        strings: ["Shourya ."],
        smartBackspace: true, // Default value 
        typeSpeed: 100,
        backSpeed: 60,
        showCursor: true,
        onComplete: function () {
            $(".typed-cursor").hide();
        }
    });

    var typed = new Typed('.whoAmI', {
        strings: ["A Web Desi", "A Web Developer ."],
        smartBackspace: true, // Default value 
        typeSpeed: 100,
        backSpeed: 60,
        showCursor: true,
        startDelay: 2000,
        onStart: function () {
            $(".typed-cursor").show();
        }
    });

    $(".myProfilePic").on("mouseenter touchstart", () => {
        // console.log("hello world")

        $(".backgroundImageOverlay").css("opacity", ".5")
    });
    $(".myProfilePic").on("mouseleave touchend touchmove", () => {
        // console.log("hello world")

        $(".backgroundImageOverlay").css("opacity", "0")
    })

})