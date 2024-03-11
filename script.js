function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  //w when clicked this adds OR removes the class open
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
