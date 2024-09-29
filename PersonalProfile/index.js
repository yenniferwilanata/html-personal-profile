const navBtn = document.getElementById("navigationToggle");
const nav = document.getElementById("navigation");
const navchild = document.querySelectorAll(".nav-child");
function toggleNav() {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
}

navBtn.addEventListener("click", toggleNav);
for (let i = 0; i < navchild.length; i++) {
  navchild[i].addEventListener("click", toggleNav);
}
