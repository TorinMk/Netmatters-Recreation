document.addEventListener("DOMContentLoaded", () => {
    const search = document.querySelector(".search");
    const support = document.querySelector(".sup");
    const contact = document.querySelector(".con");
    const sidebar = document.querySelector(".sidebar");
    const actions = document.querySelector(".actions");
    const mainNav = document.querySelector(".main-navigation");

    function mobileMenu() {
        const mobile = window.innerWidth <= 768;

        if (mobile) {
            // Move search below header
            mainNav.parentNode.insertBefore(search, mainNav);
            search.classList.add("mobileSearch");

            // Hide support
            if (support) support.style.display = "none";

            // Move contact to sidebar
            sidebar.appendChild(contact);
            contact.classList.add("mobileContact")

            if (mainNav) mainNav.style.display = "none";

        } else {
            // Move search back
            const banBtn = actions.querySelector(".ban-btn");
            banBtn.insertAdjacentElement("afterend", search)
            search.classList.remove("mobileSearch")

            // Show support
            if (support) support.style.display = "inline-block";

            // Move contact back
            actions.querySelector(".ban-btn").appendChild(contact);
            contact.classList.remove("mobileContact")

            if (mainNav) mainNav.style.display = "inline-block";
        }
    }

    mobileMenu();
    window.addEventListener("resize", mobileMenu);
});