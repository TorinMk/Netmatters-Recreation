const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const pageContent = document.querySelector(".page-content");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    pageContent.classList.toggle("shifted");
});