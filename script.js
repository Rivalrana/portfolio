const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const content = document.querySelector("body");

hamburger.addEventListener("click", function () {
  // Toggle the sidebar
  sidebar.classList.toggle("active");

  // Shift the content to the right when the sidebar is visible
  content.classList.toggle("shifted-content");
});
