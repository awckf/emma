(function () {
  "use strict";

  // ---- Menu mobile ----
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Reveal au scroll ----
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // ---- Année dans le footer ----
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- Formulaire de contact (Formspree en AJAX) ----
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      status.textContent = "Envoi en cours...";
      status.removeAttribute("data-state");

      var data = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (response.ok) {
            status.textContent = "Merci, votre message a bien été envoyé !";
            status.setAttribute("data-state", "success");
            form.reset();
          } else {
            status.textContent =
              "Oups, une erreur est survenue. Réessayez ou écrivez-moi directement par email.";
            status.setAttribute("data-state", "error");
          }
        })
        .catch(function () {
          status.textContent =
            "Oups, une erreur est survenue. Réessayez ou écrivez-moi directement par email.";
          status.setAttribute("data-state", "error");
        });
    });
  }
})();
