// // landing page animation
function landinganimation() {
    var tl = gsap.timeline({
        duration: 1.5,
        ease: "power1.out",
        delay: 0.4
    });
    tl.from("#p1", {
        x: -100,
    }, 'a')
        .from("#p2", {
            x: 30,
        }, 'a')
        .to("#p2", {
            x: -24,
        }, 'a')
        .from("#p3", {
            x: 30,
        }, 'a')
        .to("#p3", {
            x: -49.5,
        }, 'a')
        .from("#p4", {
            x: -100,
        }, 'a')
        .to("#p4", {
            x: -74,
        }, 'a')

    var tl2 = gsap.timeline({
        duration: 2.5,
        ease: "power1.out",
        delay: 1.5
    });

    tl2.to("#p1", {
        x: 100,
    }, 'b')
        .to("#p2", {
            x: -100,
        }, 'b')
        .to("#p3", {
            x: -100,
        }, 'b')
        .to("#p4", {
            x: 100,
        }, 'b')
        .to(".loder", {
            opacity: 0,
            duration: 1,
            delay: 0.5,
        }, 'b')

}
landinganimation()


// // hero page 
function textmove(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".elem",
            scrollby:".main",
            start:"top top",
            // markers:true,
            scrub:2
        }
    })
    tl3.to(".e1 h1",{
        x:-100,
    },'move')
    .to(".e2 h1",{
        x:100,
    },'move')
}
textmove()

// overlay effect

function overflow(){
    var tl4 = gsap.timeline();
    tl4.to(".overlay",{
        delay:5,
        top:0,
        duration:1
    })
    .to(".overlay",{
        delay:1,
        top:-200,
        duration:1
    })
    .to(".overlay",{
        top:200,
        duration:0
    })
}
overflow()
setInterval(overflow,5000)

// change images

// function changeimg(){
    // var images=["https://maelanlemeur.com/wp-content/uploads/2023/01/MarcSolene.webp","https://maelanlemeur.com/wp-content/uploads/2023/01/Polder.webp","https://maelanlemeur.com/wp-content/uploads/2023/01/RalentirDiegoDOnofrio.webp","https://maelanlemeur.com/wp-content/uploads/2023/01/FermeDeKerbiguet.webp"]
    // for (var i=0;i<images.length;i++){

//         var pageimage = document.querySelector(".page1")
//         pageimage.style.backgroundImage= `url(${images[randoimag]})`
//     }
// }
// changeimg()
// setInterval(changeimg,1000)

var images=["https://maelanlemeur.com/wp-content/uploads/2023/01/MarcSolene.webp","https://maelanlemeur.com/wp-content/uploads/2023/01/Polder.webp","https://maelanlemeur.com/wp-content/uploads/2023/01/RalentirDiegoDOnofrio.webp","https://maelanlemeur.com/wp-content/uploads/2023/01/FermeDeKerbiguet.webp"]
var i = 0
while (i <images.length) {
    function changeimg(){
        var pageimage = document.querySelector(".page1")
        pageimage.style.backgroundImage= `url(${images[i]})`
        // i++
    }
    setInterval(changeimg,4000)
}