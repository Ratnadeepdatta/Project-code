const navBtn = document.querySelector(".btn");
const navEl = document.querySelector(".nav");

navBtn.addEventListener("click", function () {
    navEl.classList.toggle("nav_open")
})
