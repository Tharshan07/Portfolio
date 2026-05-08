// script.js

// LOADER

window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// AOS

AOS.init({
  duration: 1000,
  once: true
});

// TYPING EFFECT

new Typed("#typing", {
  strings: [
    "Frontend Developer",
    "AI Workflow Automation Engineer",
    "Software Engineer"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});