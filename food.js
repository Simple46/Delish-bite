// JavaScript for responsive navbar and dark mode

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const themeIcon = themeToggle.querySelector("i");
const icon = document.querySelector('.icon-tog')

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeIcon.classList.toggle("fa-moon");
  themeIcon.classList.toggle("fa-sun");
});

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
  icon.classList.toggle("fa-times");
});
