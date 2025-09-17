// Smooth scroll for "View My Work" button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form validation
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent actual form submission

  if (textarea.value.trim() === "") {
    alert("Please enter a message before sending!");
  } else {
    alert("Thank you! Your message has been sent.");
    textarea.value = ""; // clear message box
  }
});