document.addEventListener("DOMContentLoaded", () => {
  // Fix for homepage path
  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "" || currentPage === "/") currentPage = "index.html";

  const nav = `
    <nav class="navbar">
      <div class="nav-container">
        <a class="brand" href="index.html">Learn Pinball</a>
        <div class="nav-links">
          <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
          <a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">About</a>
          <a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact</a>
        </div>
        <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
      </div>
    </nav>
    <div class="nav-overlay"></div>
  `;

  document.body.insertAdjacentHTML("afterbegin", nav);

  const toggleButton = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".nav-overlay");

  if (toggleButton && navLinks && overlay) {
    toggleButton.addEventListener("click", () => {
      const isActive = navLinks.classList.toggle("active");
      overlay.classList.toggle("active");
      toggleButton.setAttribute("aria-expanded", isActive);
    });

    overlay.addEventListener("click", () => {
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
      toggleButton.setAttribute("aria-expanded", false);
    });

    // Close menu when any link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
        toggleButton.setAttribute("aria-expanded", false);
      });
    });
  }
});
