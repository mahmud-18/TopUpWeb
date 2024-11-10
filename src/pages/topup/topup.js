function toggleSection(id) {
  const content = document.getElementById(id);
  const icon = document.getElementById(id + "-icon");

  // Toggle content
  content.classList.toggle("hidden");

  // Rotate icon
  if (content.classList.contains("hidden")) {
    icon.style.transform = "rotate(0deg)";
  } else {
    icon.style.transform = "rotate(180deg)";
  }
}

// Tambahkan event listener saat dokumen dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi semua dropdown dalam keadaan tertutup
  const dropdowns = ["ewallet", "va"];
  dropdowns.forEach((id) => {
    const content = document.getElementById(id);
    const icon = document.getElementById(id + "-icon");
    if (content && icon) {
      content.classList.add("hidden");
      icon.style.transform = "rotate(0deg)";
    }
  });
});

function startOrderAnimation() {
  const button = document.getElementById("order-button");
  const buttonText = button.querySelector(".button-text");
  const truckWrapper = button.parentElement.querySelector(".truck-wrapper");

  // Reset animasi dengan benar
  truckWrapper.style.animation = "none";
  truckWrapper.offsetHeight; // Trigger reflow
  // Ubah angka 4s menjadi lebih kecil (misal 3s) untuk animasi lebih cepat
  truckWrapper.style.animation = "truckMove 4s linear forwards";

  button.classList.add("loading");
  truckWrapper.style.opacity = "1";

  setTimeout(() => {
    button.classList.remove("loading");
    buttonText.innerHTML = `Order Complete <i class="fas fa-check check-mark ml-2"></i>`;
    truckWrapper.style.opacity = "0";
  }, 4500);
}

AOS.init({
  once: true,
  offset: 50,
  duration: 1000,
  easing: "ease-in-out",
});
