// DOMContentLoaded works when initial html is fullly loaded and parsed
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('input[name="slider"]');
    let currentIndex = 0;
    const time = 10000; // 10000 = 10 seconds

    function autoScroll() {
        slides[currentIndex].checked = false;
        currentIndex = (currentIndex + 1) % slides.length;
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