document.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector(".main-navigation");
    let lastScroll = 0;

    function Scroll() {
        const currentScroll = window.scrollY;

        if (currentScroll > nav.offsetTop) {
            nav.classList.add("sticky");

            if (currentScroll < lastScroll) {
                nav.classList.add("show");
            } else {
                nav.classList.remove("show");
            }
        } else {
            nav.classList.remove("sticky", "show");
        }

        lastScroll = currentScroll;
    }

    window.addEventListener("scroll", Scroll);
});