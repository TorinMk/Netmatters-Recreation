document.addEventListener("DOMContentLoaded", () => {
    const cookies = document.getElementById("cookies");
    const cookiesAccept = document.getElementById("cookies-accept");

    const cookiesAccepted = localStorage.getItem("cookiesAccepted")

    if (cookiesAccepted !== "true") {
        cookies.style.display = "block";
    }

    cookiesAccept.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem("cookiesAccepted", "true");
        cookies.style.display = "none";
    })
})