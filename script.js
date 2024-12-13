document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menu-btn");
  const sideMenu = document.querySelector("#menu-side");
  let x = true;
// function to toggle the menu in javascript
  menuToggle.addEventListener("click", function () {
    sideMenu.classList.toggle("showing");
    console.log("I am here");
  });
});
