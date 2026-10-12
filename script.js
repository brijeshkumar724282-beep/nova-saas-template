var burger = document.getElementById("burger");
var mobilemenu = document.getElementById("mobilemenu");
var topnav = document.getElementById("topnav");

if (burger && mobilemenu) {
  burger.addEventListener("click", function () {
    var open = mobilemenu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  mobilemenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobilemenu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 8) {
    topnav.classList.add("scrolled");
  } else {
    topnav.classList.remove("scrolled");
  }
}, { passive: true });

var revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(function (el) { io.observe(el); });
} else {
  revealEls.forEach(function (el) { el.classList.add("visible"); });
}

var yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
