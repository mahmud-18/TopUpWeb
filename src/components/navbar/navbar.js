// Fungsi untuk menutup semua dropdown
function closeAllDropdowns() {
  let menus = [
    document.getElementById("mobile-menu"),
    document.getElementById("login-menu"),
    document.getElementById("login-menu-desktop"),
    document.getElementById("jadwal-menu"),
    document.getElementById("mobile-jadwal-menu"),
  ];

  menus.forEach(function (menu) {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }
  });
}

// Event listener untuk membuka dropdown
document
  .getElementById("menu-toggle")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Mencegah event bubble
    let menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
    closeAllDropdownsExcept(menu);
  });

document
  .getElementById("login-toggle")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    let menu = document.getElementById("login-menu");
    menu.classList.toggle("hidden");
    closeAllDropdownsExcept(menu);
  });

document
  .getElementById("login-toggle-desktop")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Mencegah event bubble
    let menu = document.getElementById("login-menu-desktop");
    menu.classList.toggle("hidden");
    closeAllDropdownsExcept(menu);
  });

document
  .getElementById("jadwal-toggle")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Mencegah event bubble
    let menu = document.getElementById("jadwal-menu");
    menu.classList.toggle("hidden");
    closeAllDropdownsExcept(menu);
  });

document
  .getElementById("mobile-jadwal-toggle")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Mencegah event bubble
    let menu = document.getElementById("mobile-jadwal-menu");
    menu.classList.toggle("hidden");
  });

// Fungsi untuk menutup semua dropdown kecuali satu yang diberikan
function closeAllDropdownsExcept(exceptMenu) {
  let menus = [
    document.getElementById("mobile-menu"),
    document.getElementById("login-menu"),
    document.getElementById("login-menu-desktop"),
    document.getElementById("jadwal-menu"),
    document.getElementById("mobile-jadwal-menu"),
  ];

  menus.forEach(function (menu) {
    if (menu !== exceptMenu && !menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }
  });
}

document.addEventListener("click", function (event) {
  let menus = [
    document.getElementById("mobile-menu"),
    document.getElementById("login-menu"),
    document.getElementById("login-menu-desktop"),
    document.getElementById("jadwal-menu"),
  ];

  let isClickInsideMenu = menus.some(function (menu) {
    return menu.contains(event.target);
  });

  if (!isClickInsideMenu) {
    closeAllDropdowns();
  }
});
