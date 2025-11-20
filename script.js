document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const fields = [
        { id: "name", message: "Please enter your name." },
        { id: "email", message: "Please enter a valid email." },
        { id: "message", message: "Please write a short message." }
      ];

      let hasError = false;

      fields.forEach(({ id, message }) => {
        const input = document.getElementById(id);
        const errorP = input?.parentElement?.querySelector(".error");
        if (!input) return;

        if (!input.value.trim()) {
          hasError = true;
          if (errorP) errorP.textContent = message;
        } else if (id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
          hasError = true;
          if (errorP) errorP.textContent = message;
        } else if (errorP) {
          errorP.textContent = "";
        }
      });

      const status = document.getElementById("formStatus");
      if (status) {
        if (hasError) {
          status.textContent = "Please check the highlighted fields.";
        } else {
          status.textContent = "Message sent (demo). Thank you for reaching out.";
          form.reset();
        }
      }
    });
  }
});
