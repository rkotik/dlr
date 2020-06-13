const menuBar = document.querySelector(".navegacion");
const burger = document.querySelector("span.line");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 20) {
    menuBar.classList.add("scrolled");
  } else {
    menuBar.classList.remove("scrolled");
  }
});

burger.addEventListener("click", () => {
  menuBar.classList.toggle("open");
});

window.addEventListener("click", (e) => {
  if (
    menuBar.classList.contains("open") &&
    e.target != menuBar &&
    e.target != burger
  ) {
    console.log(e.target);
    menuBar.classList.toggle("open");
  }
});
