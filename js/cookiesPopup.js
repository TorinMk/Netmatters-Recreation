document.addEventListener("DOMContentLoaded", () => {
    const cookies = document.getElementById("cookies");
    const cookiesAccept = document.getElementById("cookiesAccept");

    // Checks if cookiesAccepted is already true
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")

    if (!cookiesAccepted) {
        cookies.style.display = "block";
    }

    cookiesAccept.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookies.style.display = "none";
    })
})