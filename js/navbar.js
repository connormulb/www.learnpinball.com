document.addEventListener("DOMContentLoaded", () => {
  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "" || currentPage === "/") currentPage = "index.html";

  const navHTML = `
    <nav class="navbar">
      <div class="nav-container">
        <a class="brand" href="index.html">Learn<span>Pinball</span></a>
        <div class="nav-links" id="navLinks">
          <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
          <a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">About</a>
          <a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact</a>
        </div>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </nav>
    <div class="nav-overlay" id="navOverlay"></div>
  `;

  document.body.insertAdjacentHTML("afterbegin", navHTML);

  const toggleButton = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const overlay = document.getElementById("navOverlay");

  const toggleMenu = () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    toggleButton.classList.toggle("is-active"); // For the X animation
  };

  toggleButton.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
});