const left = document.querySelector(".left");
const right = document.querySelector(".right");
const common = document.querySelectorAll(".common");

let active = 0;

right.addEventListener("click", () => {
  active = active + 1;
  if (active >= common.length) {
    active = 0;
  }
  updateCarousel();
});

left.addEventListener("click", () => {
  active = active - 1;
  if (active < 0) {
    active = common.length - 1;
  }
  updateCarousel();
});

updateCarousel();

function updateCarousel() {
  common.forEach((slide, index) => {
    if (index === active) {
      slide.classList.remove("hide");
      slide.querySelector("p").classList.remove("hidden");
    } else {
      slide.classList.add("hide");
      slide.querySelector("p").classList.add("hidden");
    }
  });
}
