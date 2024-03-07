// landing page animation
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


// hero page 
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
