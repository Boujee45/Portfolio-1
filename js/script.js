/*--------------------------------------Typing animation----------------------------------*/

var typed = new Typed(".typing",{
    strings:["","Web Designer","","Web Developer","","Software Engineer","","Mobile App Developer"],
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

window.addEventListener('click', () => {
    if(nav.classList.contains("open"))
    {
        nav.classList.remove("open")
    }
})


const params = new URLSearchParams(window.location.search);
const status_msg = params.get('status');
const messageBox = document.getElementById('form-message');

if(status_msg)
{
    document.getElementById('form-msg').scrollIntoView({
        behavior: 'smooth'
    }); 

    messageBox.style.display = 'flex';

    if(status_msg === 'success')
    {
        messageBox.classList.add('success');
        messageBox.innerHTML = `✅ <span>Your message was sent successfully.
         I'll get back to you soon!</span>`;
    }

    if(status_msg === 'error')
    {
        messageBox.classList.add('error');
        messageBox.innerHTML = `❌ <span>Something went wrong.
        Please try again later.</span> `;
    }

    if(status_msg === 'invalid')
    {
        messageBox.classList.add('invalid');
        messageBox.innerHTML = `⚠ <span>Please fill in all fields correctly.</span>`;
    }
    setTimeout(() => {
        window.history.replaceState({}, document.title, window.location.pathname);
    }, 1000);
    
}