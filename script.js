function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".scroll-fade-in");

  function checkScroll() {
    animatedElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 50) {
        element.classList.add("active");
      }
    });
  }

  // Cek awal saat halaman dimuat
  checkScroll();

  // Cek saat pengguna menggulir
  window.addEventListener("scroll", checkScroll);
});
