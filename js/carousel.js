// DOMContentLoaded works when initial html is fullly loaded and parsed
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('input[name="slider"]');
    let currentIndex = 0;
    const time = 10000; // 10000 = 10 seconds

    function autoScroll() {
        // Unchecks radio button when changing slides
        slides[currentIndex].checked = false; 

        // Moves to next slide and loops when at end
        // 0 % 7 = 0    1 % 7 = 1   and 7 % 7 = 0 (resetting loop)
        currentIndex = (currentIndex + 1) % slides.length; // length = 7

        // Checks new radio button is trigged which then changes to next slide
        slides[currentIndex].checked = true;
    }

    // Start auto scrolling carousel
    setInterval(autoScroll, time);

    // Syncs JS when user checks a radio button

    // forEach loops over every radio button
    slides.forEach((slide, index) => {
        // change works when user selects a different option e.g. when a radio button becomes checked
        slide.addEventListener("change", () => { 
            if (slide.checked) { // Checks radios are checked or unchecked
                currentIndex = index; // Updates counter to match user's choice of carousel image
            }
        })
    })
});