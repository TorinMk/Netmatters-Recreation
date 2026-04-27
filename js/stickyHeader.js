document.addEventListener("DOMContentLoaded", () => {
    const stickyy = document.querySelector(".stickyy");

    let lastScroll = 0;

    function Scroll() {
        const currentScroll =
            window.pageYOffset ||
            document.documentElement.scrollTop;

        if (currentScroll > 100) {
            stickyy.classList.add("sticky");

            if (currentScroll < lastScroll) {
                stickyy.classList.add("show");
            } else {
                stickyy.classList.remove("show");
            }
        } else {
            stickyy.classList.remove("sticky", "show");
        }

        lastScroll = currentScroll;
    }

    window.addEventListener("scroll", Scroll, { passive: true });
});