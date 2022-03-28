// TODO: GSAP STUFF
const tl = gsap.timeline({defaults:{ease: "power1.out"}});

tl.to(".text",{y:"0", duration:1, stagger:0.25});
tl.to(".slider",{y:"-100%", duration: 1.5,delay:0.5});
tl.to(".intro",{y:"-100%",duration:1}, "-=.8");

// TODO: DOM STUFF
// Global Variables
// let imageContainer = document.querySelector(".image-containers");
// let projectTitle = document.querySelector(".project-title");
let contactEmail = document.querySelector(".contact-email");

// TODO: Function Calls

// let introSwitcher = document.querySelector(".intro-switcher");
// TODO: Function Definitions
// function changeIntroText() {
//
//     let introText = ["apps","sites","experiences"];
//     introSwitcher.textContent = `${introText[Math.random() * 2]}`
// console.log(introText[2])
// }
// setInterval(changeIntroText,3500)

async function clickToGetText()
{
    await navigator.clipboard.writeText("richard.p.jackson2@gmail.com");
    console.log("it is clicked")
}

// TODO: eventlisteners
// imageContainer.addEventListener("mouseover",()=>{
//     projectTitle.classList.toggle()
// })

//click to copy email
contactEmail.addEventListener("click", clickToGetText);