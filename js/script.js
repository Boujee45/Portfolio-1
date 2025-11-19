/*--------------------------------------Typing animation----------------------------------*/

var typed = new Typed(".typing",{
    strings:["","Web Designer","","Web Developer","","Game Developer","","Programmer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


const navToggle = document.querySelector('.nav-toggler');
const nav = document.querySelector('.aside');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
})

window.addEventListener("scroll", () => {
    if(nav.classList.contains("active"))
    {
        nav.classList.remove("active")
    }
})

window.addEventListener("click", () => {
    if(nav.classList.contains("open"))
    {
        nav.classList.remove("open")
    }
})


