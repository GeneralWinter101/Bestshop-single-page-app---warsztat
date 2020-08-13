const btn = document.querySelector(".page-nav-burger");
const menu = document.querySelector(".page-nav-list");

btn.addEventListener("click", function() {
    menu.classList.toggle("show");
})