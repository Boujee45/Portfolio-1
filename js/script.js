/*--------------------------------------Typing animation----------------------------------*/

var typed = new Typed(".typing",{
    strings:["","Web Designer","","Web Developer","","Software Engineer","","Mobile App Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/*--------------------------------------Mobile  Navigation----------------------------------*/
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

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.portfolio-item'
    },
    animation: {
        duration: 300
    }
});


/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item');

/*function activeWork(){
    linkWork.forEach(L=> I.classList.remove('active-work'));
    this.classList.add('active-work');

    linkWork.forEach(L=> I.addEventListener("click", activeWork));
}*/

linkWork.forEach((work) => {
    work.addEventListener("click", () => {
        linkWork.forEach(L => L.classList.remove("active-work"));

        work.classList.add("active-work");
    })
})


/*===== Work Popup =====*/

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")){
        const portfolioItem = e.target.closest(".portfolio-item");
        portfolioItemDetails(portfolioItem);
        togglePortfolioPopup();
    }
})

function togglePortfolioPopup()
{
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem)
{
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".portfolio-img img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(
        ".work__title").innerHTML;

    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(
        ".portfolio__item-details").innerHTML;
}


/*--------------------------------------Contact Output----------------------------------*/
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

/*--------------------------------------Active Link----------------------------------*/

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        navLink.forEach(l => l.classList.remove('active'));

        link.classList.add('active');
    });
})

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav a[href*="' + sectionId + '"]')?.classList.add("active");
        }
        else{
            document.querySelector('.nav a[href*="' + sectionId + '"]')?.classList.remove("active");
        }
    });
}


/*=============== SHOW SCROLL UP ===============*/

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 350 viewport height, 
    // add the show-scroll class to a tag with the scroll-top class 
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollUp);
