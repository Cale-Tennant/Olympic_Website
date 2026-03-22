/* Date/Time */
function updateDateTime() {
  const current = new Date();

  const date = current.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const time = current.toLocaleTimeString("en-GB");

  const datetimeEl = document.getElementById("datetime");

  if (datetimeEl) {
    datetimeEl.textContent = `${date} | ${time}`;
  }
}

updateDateTime();
setInterval(updateDateTime, 1000);

/* Image Cycler */
 const images = [
   "Images/Powerlifting.jpg",
   "Images/Fencing.jpg",
   "Images/Phelps.jpg",
   "Images/Iron_Cross.jpg",
   "Images/Bolt.jpg"
];

let current = 0;
const img = document.querySelector(".Cycle_Image");

function showImage() {
  img.src = images[current];
}

function next() {
  current = (current + 1) % images.length;
  showImage();
}

function previous() {
  current = (current - 1 + images.length) % images.length;
  showImage();
}

setInterval(next, 3000);

/* Medal Reveal Button */
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".reveal_button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const number = btn.getAttribute("data-number");
      btn.textContent = number;
      btn.disabled = true;
    });
  });
});