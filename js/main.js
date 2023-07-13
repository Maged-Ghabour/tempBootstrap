const btnUp = document.querySelector(".btnUp");

// Scroll To Top Btn
btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// NavBar Toggle
// const toggleBtn = document.querySelector(".toggle-btn");
// const toggleIcon = document.querySelector(".toggle-btn i");
// const dropdownMenu = document.querySelector(".dropdown-menu");

// toggleBtn.addEventListener("click", () => {
//   dropdownMenu.classList.toggle("open");
//   const isOpen = dropdownMenu.classList.contains("open");
//   toggleIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
// });
