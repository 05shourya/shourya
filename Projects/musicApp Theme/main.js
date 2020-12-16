window.onload = () => {
    // ! Declearing variables 

    const body = document.querySelector("body"),

        wholeDocument = document.querySelector(".wholeDocument")

    loader = document.querySelector(".Loader"),

        themeSelector = document.getElementById("themeSelector"),

        lightTheme = document.getElementById("lightTheme"),

        darkTheme = document.getElementById("darkTheme"),

        mainContent = document.getElementById("mainContent"),

        commonClass = document.getElementsByClassName("commonClass"),

        lines = document.querySelectorAll('.lines'),

        navLines = document.getElementById("navLines"),

        navBar = document.getElementById('navBar'),

        switchTheme = document.getElementById("switchTheme"),

        play = document.getElementById("play"),

        pause = document.getElementById("pause"),

        previous = document.getElementById("previous"),

        next = document.getElementById("next"),

        audio = document.getElementById("audio"),

        anime1 = document.querySelector(".anime1"),

        anime2 = document.querySelector(".anime2"),

        profile = document.querySelector(".profile"),

        controlButtons = document.querySelectorAll(".controlButtons");


    // When Page is Loaded ---

    wholeDocument.style.display = "block";
    loader.style.display = "none";

    alert("You will get an alert if you can play the given audio \n If you didn't got the Alert , You may get an error but you can still enjoy the Animations")

    audio.addEventListener("canplaythrough", () => {
        alert("You Can now play Audio");
    })

    // ! Creating Functions 

    const lightThemeFunc = () => {

        themeSelector.style.display = "none";

        mainContent.style.display = "block";

        body.style.background = "#ddd";

        for (let i = 0; i < lines.length; i++) {

            lines[i].style.background = "#111";

        };

        for (let i = 0; i < commonClass.length; i++) {

            commonClass[i].classList.add("lightThemeFunc")

        };

    };

    const darkThemeFunc = () => {

        themeSelector.style.display = "none";

        mainContent.style.display = "block";

        body.style.background = "#121212";

        for (let i = 0; i < lines.length; i++) {

            lines[i].style.background = "#ddd";

        };

        for (let i = 0; i < commonClass.length; i++) {

            commonClass[i].classList.remove("lightThemeFunc");

        };

    };

    const navLinesFunc = () => {

        navBar.classList.toggle("openNavBar")

    };

    // Firing Events 

    lightTheme.addEventListener("click", lightThemeFunc);

    darkTheme.addEventListener("click", darkThemeFunc);

    navLines.addEventListener("click", navLinesFunc);

    switchTheme.addEventListener("click", () => {

        if (commonClass[0].classList.contains("lightThemeFunc") == true) {

            darkThemeFunc();

        }

        else if (commonClass[0].classList.contains("lightThemeFunc") != true) {

            lightThemeFunc();

        }

        navBar.classList.remove("openNavBar");

    });

    profile.addEventListener("click", () => {
        window.location.href = "https://www.sololearn.com/Profile/11224432/?ref=app";
    });

    play.addEventListener("click", () => {

        audio.play();

        pause.style.display = "block";

        play.style.display = "none";

        anime1.classList.add("playAnimation");

        anime2.classList.add("playAnimation");

    });

    pause.addEventListener("click", () => {

        audio.pause();

        pause.style.display = "none";

        play.style.display = "block";

        anime1.classList.remove("playAnimation");

        anime2.classList.remove("playAnimation");

    });

    next.addEventListener("click", () => {

        alert("No Next Song");

    });

    previous.addEventListener("click", () => {

        alert("No Previous Song");

    });

    let classNames = [".darkTheme", ".lightTheme", ".navLines", ".switchTheme"]

    let hoverEffects = ["darkThemeHover", "lightThemeHover", "navLinesHover", "switchThemeHover"]

    for (let i = 0; i < classNames.length; i++) {
        $(classNames[i]).on("mouseenter touchstart", () => {
            $(classNames[i]).addClass(hoverEffects[i])
            console.log("hello world")
        })

        $(classNames[i]).on("mouseleave touchend touchmove" , ()=>{
            $(classNames[i]).removeClass(hoverEffects[i])
        })
    }

}