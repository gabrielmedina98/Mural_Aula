const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];
let currentSlide = 0;
let intervalId = null;

function openModal(index) {
  currentSlide = index;
  document.getElementById("modal").style.display = "block";
  showSlide(currentSlide);
  intervalId = setInterval(() => {
    changeSlide(1);
  }, 3000);
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  clearInterval(intervalId);
}

function showSlide(index) {
  const modalImg = document.getElementById("modal-img");
  if (index < 0) currentSlide = images.length - 1;
  else if (index >= images.length) currentSlide = 0;
  else currentSlide = index;
  modalImg.src = images[currentSlide];
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}
