let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " active";
}

function slideForward() {
  const container = document.getElementById("previewDivMain");
  const containerStyles = window.getComputedStyle(container);

  // Calculate the width of each slide, including margins
  const slideWidth = container.offsetWidth / 3;
  const slideMarginRight = parseInt(containerStyles.marginRight);
  const slideMarginLeft = parseInt(containerStyles.marginLeft);
  const slideTotalWidth = slideWidth + slideMarginRight + slideMarginLeft;

  // Get the current scroll position and target position
  const currentPosition = container.scrollLeft;
  const targetPosition = currentPosition - slideTotalWidth;

  container.scrollTo({
    left: targetPosition,
    behavior: "smooth",
  });
}

function slideBackward() {
  const container = document.getElementById("previewDivMain");
  const containerStyles = window.getComputedStyle(container);

  // Calculate the width of each slide, including margins
  const slideWidth = container.offsetWidth / 3;
  const slideMarginRight = parseInt(containerStyles.marginRight);
  const slideMarginLeft = parseInt(containerStyles.marginLeft);
  const slideTotalWidth = slideWidth + slideMarginRight + slideMarginLeft;

  // Get the current scroll position and target position
  const currentPosition = container.scrollLeft;
  const targetPosition = currentPosition + slideTotalWidth;

  container.scrollTo({
    left: targetPosition,
    behavior: "smooth",
  });
}
