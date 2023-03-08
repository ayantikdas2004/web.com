// let scrollBar = document.getElementById('scroll')
//         let height = document.body.scrollHeight - window.innerHeight
//         window.onscroll = function (){
//             let scrollHeight = (window.pageYOffset/height)*100
//             scrollBar.style.height = `${scrollHeight}%`
//         }



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Active Navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky Navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);


    // remove toggle icon and navbar when click navbar link (scroll)


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};