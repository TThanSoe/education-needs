const navBar = () => {
  const mainNav = document.getElementById("nav-menu");
  const navBarToggle = document.getElementById("navbar-toggle");

  navBarToggle.addEventListener("click", event => {
    event.stopPropagation();
    mainNav.classList.toggle("active");
  });
};

navBar();
