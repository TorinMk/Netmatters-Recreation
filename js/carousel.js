document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('input[name="slider"]');
    let currentIndex = 0;
    const time = 10000;

    function autoScroll() {

        slides[currentIndex].checked = false; 

        // 0 % 7 = 0    1 % 7 = 1   and 7 % 7 = 0 (resetting loop)
        currentIndex = (currentIndex + 1) % slides.length; // length = 7

        slides[currentIndex].checked = true;
    }

    setInterval(autoScroll, time);

    slides.forEach((slide, index) => {
       
        slide.addEventListener("change", () => { 
            if (slide.checked) { 
                currentIndex = index; 
            }
        })
    })
});