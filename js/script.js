$(document).ready(function () {
  let index = 0;
  const slides = $(".slide");
  function showSlide() {
    slides.hide();
    index = (index + 1) % slides.length;
    slides.eq(index).fadeIn();
  }
  setInterval(showSlide, 3000);
});
