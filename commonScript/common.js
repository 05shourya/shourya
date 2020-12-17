// ! Common script for all pages which functions the navMenu :)

// ! handling click events 

$(".lineContainer").click(() => {
    $(".navPage").toggleClass("navPageOpen")
    // $(".section").toggleClass("hideScroll")
})

$(".home").click(() => {
    if ($(".section").hasClass("thisIsHome")) {
        $(".navPage").removeClass("navPageOpen");
    }
    else if ($(".section").hasClass("thisIsAboutMe")) {
        window.location.href = "../";
    }
})

$(".aboutMe").click(() => {
    if ($(".section").hasClass("thisIsHome")) {
        window.location.href = "./aboutMe/"
    }
    else if ($(".section").hasClass("thisIsAboutMe")) {
        $(".navPage").removeClass("navPageOpen");
    }
})

$(".contactMe").click(() => {
    // window.location.href = "mailto:05shourya@gmail.com" , "_blank"
    window.open("mailto:05shourya@gmail.com", "_blank")
})

$(".fa-instagram-square").click(() => {
    // window.location.href = "https://www.instagram.com/shourya.05/" , "_blank"
    window.open("https://www.instagram.com/shourya.05/", "_blank")
    // console.log("hello")
})

$(".fa-github-square").click(() => {
    // window.location.href = "https://github.com/Shourya05" , "_blank"
    window.open("https://github.com/Shourya05", "_blank")
})

// ! Making ForEach loops so that I can make hover and touch effects on the elements 

let classNames = [".home", ".aboutMe"];


// classNames.forEach((element, index) => {
// $(element).on("mouseenter touchstart", () => {
//     $(element).css({
//         "background": "#fff",
//         "color": "#000"
//     })
// })

// // console.log(index)

// $(element).on("mouseleave touchend touchmove", () => {
//     $(element).css({
//         "background": "transparent",
//         "color": "#fff"
//     })
// })

// console.log(contactClassNames[index])

// });

let contactClassNames = [".contactMe", ".icons"];

// contactClassNames.forEach(element => {
// $(element).on("mouseenter touchstart", () => {
//     $(element).css({
//         "border-bottom": "medium solid #fff",
//         // "color" : "#000"
//     })
// })

// $(element).on("mouseleave touchend touchmove", () => {
//     $(element).css({
//         "border-bottom": "medium solid transparent",
//         // "color" : "#333"
//     })
// })

// });

let iconClassNames = [".fa-instagram-square", ".fa-github-square"];

// iconClassNames.forEach(element => {
// $(element).on("mouseenter touchstart", () => {
//     $(element).css({
//         "color": "#fff"
//     })
// })

// $(element).on("mouseleave touchend touchmove", () => {
//     $(element).css({
//         "color": "#333"
//     })
// })
// })

// let hell = ".btn"

// $(hell).click(()=>{
//     $()
// })

let maximumNumber = Math.max(classNames.length, contactClassNames.length, iconClassNames.length)

// console.log(maximumNumber)

// ! This will do the same as forEach loop 

for (let i = 0; i < maximumNumber; i++) {
    // console.log("hello world i am shourya ")

    $(classNames[i]).on("mouseenter touchstart", () => {
        $(classNames[i]).css({
            "background": "#fff",
            "color": "#000"
        })
    })

    // console.log(index)

    $(classNames[i]).on("mouseleave touchend touchmove", () => {
        $(classNames[i]).css({
            "background": "transparent",
            "color": "#fff"
        })
    })

    $(contactClassNames[i]).on("mouseenter touchstart", () => {
        $(contactClassNames[i]).css({
            "border-bottom": "medium solid #fff",
            // "color" : "#000"
        })
    })

    $(contactClassNames[i]).on("mouseleave touchend touchmove", () => {
        $(contactClassNames[i]).css({
            "border-bottom": "medium solid transparent",
            // "color" : "#333"
        })
    })

    $(iconClassNames[i]).on("mouseenter touchstart", () => {
        $(iconClassNames[i]).css({
            "color": "#fff"
        })
    })

    $(iconClassNames[i]).on("mouseleave touchend touchmove", () => {
        $(iconClassNames[i]).css({
            "color": "#333"
        })
    })

}


// ! Bye ! , Leaving the comments so that the code could become readable 
