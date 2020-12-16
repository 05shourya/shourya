$(document).ready(()=>{

    
    AOS.init()

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
})

// $(".firstDesign").click(()=>{
    //     window.open("../Projects/musicApp Theme 3/index.html" , "_blank")
    // })

// $(".secondDesign").click(()=>{
    //     console.log("you clicked on first Design")
    //     window.open("../Projects/musicApp Theme/index.html" , "_blank")
    // })
    
// $(".thirdDesign").click(()=>{
    //     window.open("../Projects/musicApp Theme 2/index.html" , "_blank")
    // })
    
    let ArrayOfClasses = [".firstDesign" , ".secondDesign" , ".thirdDesign" , ".firstAnimation" , ".secondAnimation" , ".firstArt" , ".secondArt"]
    
let locations = ["../Projects/musicApp Theme 3/index.html" , "../Projects/musicApp Theme/index.html" , "../Projects/musicApp Theme 2/index.html" , "../Projects/CssAnimations/index.html" , "../Projects/Css Animations 2/index.html" , "../Projects/Google/index.html" , "../Projects/PureCSS Drawing/index.html"]

for (let index = 0; index < ArrayOfClasses.length; index++) {
    console.log(ArrayOfClasses[index]) ; 
    console.log(locations[index]) ; 
    
    $(ArrayOfClasses[index]).click(()=>{
        window.open(locations[index] , "_blank") 
    })
    
}
})