window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

let menuItems = document.querySelectorAll(".nav-links a");

menuItems.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    this.style.color = "#ff9900";
  });

  item.addEventListener("mouseleave", function () {
    this.style.color = "white";
  });
});
