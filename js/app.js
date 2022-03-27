// TODO: GSAP STUFF
const tl = gsap.timeline({defaults:{ease: "power1.out"}});

tl.to(".text",{y:"0", duration:1, stagger:0.25});
tl.to(".slider",{y:"-100%", duration: 1.5,delay:0.5});
tl.to(".intro",{y:"-100%",duration:1}, "-=.8");

// TODO: DOM STUFF
// Global Variables



// Function Calls

let introSwitcher = document.querySelector(".intro-switcher");
// Function Definitions
function changeIntroText() {

    let introText = ["apps","sites","experiences"];
    introSwitcher.textContent = `${introText[Math.random() * 2]}`
console.log(introText[2])
}
// setInterval(changeIntroText,3500)
