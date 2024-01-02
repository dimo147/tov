var splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    snap   :  true,
    autoWidth: true,
    classes: {
		arrows: 'splide__arrows',
    },
});

splide.mount();

let slideIndex = 0;
showSlidesTimer();

function plusSlides(n) {
    slideIndex++;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("back");
    let dots = document.getElementsByClassName("selection");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" selected", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " selected";
    setTimeout(showSlides, 5000);
}

function showSlidesTimer() {
    let i;
    let slides = document.getElementsByClassName("back");
    let dots = document.getElementsByClassName("selection");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" selected", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " selected";
    setTimeout(showSlidesTimer, 5000);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    // document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    // document.getElementById("main").style.marginRight= "0";
}
