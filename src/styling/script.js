function modifyNavbarContent(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const links = doc.querySelectorAll("a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href) {
      if (href === "/" || href === "#" || href === "index.html") {
        link.setAttribute("href", "/");
      }
    }
  });

  const images = doc.querySelectorAll("img");
  images.forEach((img) => {
    const src = img.getAttribute("src");
    if (src) {
      if (src.includes("../../../img/")) {
        img.setAttribute("src", src.replace("../../../img/", "img/"));
      }
    }
  });

  return doc.body.innerHTML;
}

// Modifikasi fetch navbar
fetch("src/components/navbar/navbar.html")
  .then((response) => response.text())
  .then((html) => {
    const modifiedHtml = modifyNavbarContent(html);
    document.getElementById("navbar-container").innerHTML = modifiedHtml;
    const script = document.createElement("script");
    script.src = "src/components/navbar/navbar.js";
    document.body.appendChild(script);
  })
  .catch((error) => console.error("Error loading navbar:", error));

fetch("src/components/features/features.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("features-container").innerHTML = html;

    // Cek apakah ini halaman index
    if (
      window.location.pathname === "/" ||
      window.location.pathname.includes("index.html")
    ) {
      const featuresSection = document.querySelector("#features-container");
      if (featuresSection) {
        featuresSection.classList.add("-mt-32");
      }
    }

    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        offset: 120,
      });
    }
  })
  .catch((error) => console.error("Error loading features:", error));

fetch("src/components/footers/footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("footer-container").innerHTML = html;
  })
  .catch((error) => console.error("Error loading footer:", error));

const menuData = [
  {
    name: "Mobile Legends",
    imageSrc: "img/change.png",
    link: "src/pages/topup/mobile-legends.html",
  },
  {
    name: "Free Fire",
    imageSrc: "img/ff.png",
    link: "src/pages/topup/free-fire.html",
  },
  {
    name: "Valorant",
    imageSrc: "img/Valorant.png",
    link: "src/pages/topup/valorant.html",
  },
  {
    name: "Genshin Impact",
    imageSrc: "img/genshin.png",
    link: "src/pages/topup/genshin-impact.html",
  },
  {
    name: "Honkai SR",
    imageSrc: "../img/honkai.png",
    link: "topup/honkai-impact.html",
  },
  {
    name: "Pubg Mobile",
    imageSrc: "../img/pubg.png",
    link: "topup/pubg-mobile.html",
  },
  {
    name: "Call of Duty M",
    imageSrc: "../img/cod.png",
    link: "topup/call-of-duty-mobile.html",
  },
  {
    name: "Honor of Kings",
    imageSrc: "../img/hok.png",
    link: "topup/honor-of-kings.html",
  },
  {
    name: "Clash of Clans",
    imageSrc: "../img/coc.png",
    link: "topup/clash-of-clans.html",
  },
  {
    name: "Love Deepspace",
    imageSrc: "../img/deepspace.png",
    link: "topup/love-deepspace.html",
  },
  {
    name: "Roblox",
    imageSrc: "../img/roblox.png",
    link: "topup/roblox.html",
  },
  {
    name: "Sky",
    imageSrc: "../img/sky.png",
    link: "topup/sky.html",
  },
];

function createMenuItem(data, index) {
  const container = document.getElementById("menu-container");

  const kategoriDiv = document.createElement("div");
  kategoriDiv.className = "kategori flex flex-col items-center w-[80%]";

  kategoriDiv.setAttribute("data-aos", "zoom-in");
  kategoriDiv.setAttribute("data-aos-duration", "800");
  kategoriDiv.setAttribute("data-aos-delay", `${index * 100}`);

  kategoriDiv.innerHTML = `
    <div class="circle-menu flex justify-center items-center w-28 h-28 border-2 border-pink-300 rounded-full bg-radial-custom shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.3),inset_4px_4px_10px_rgba(0,0,0,0.5),0_4px_15px_rgba(0,0,0,0.7)] hover:scale-[0.97] hover:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.4),inset_2px_2px_6px_rgba(0,0,0,0.6),0_2px_10px_rgba(0,0,0,0.6)] transition-all duration-500 cursor-pointer overflow-hidden">
      <a href="${data.link}">
        <img src="${data.imageSrc}" alt="${data.name}" class="rounded-full w-[100px] h-[100px] transition-opacity duration-[1.5s] opacity-100 hover:opacity-0 relative top-4" />
      </a>
    </div>
    <a href="${data.link}" class="text-md font-bold text-black font-sans w-max py-4">${data.name}</a>
  `;

  container.appendChild(kategoriDiv);
}

menuData.forEach((item, index) => createMenuItem(item, index));

const topupBtn = document.getElementById("topup-btn");
const sosmedBtn = document.getElementById("sosmed-btn");
const apkBtn = document.getElementById("apk-btn");
const jokiBtn = document.getElementById("joki-btn");
const menuContainer = document.getElementById("menu-container");

const sosmedMenu = [
  {
    name: "Webtoon",
    imageSrc: "img/webtoon.png",
    link: "src/pages/topup/webtoon.html",
  },
  {
    name: "Youtube",
    imageSrc: "img/youtube.png",
    link: "src/pages/topup/youtube.html",
  },
];

const apkPremiumMenu = [
  {
    name: "Netflix",
    imageSrc: "img/netflix.png",
    link: "src/pages/topup/netflix.html",
  },
  {
    name: "Spotify",
    imageSrc: "img/spotify.png",
    link: "src/pages/topup/spotify.html",
  },
  {
    name: "Canva",
    imageSrc: "img/canva.png",
    link: "src/pages/topup/canva.html",
  },
];

const jokiMenu = [
  {
    name: "Mobile Legends",
    imageSrc: "img/change.png",
    link: "src/pages/topup/joki.html",
  },
  {
    name: "Free Fire",
    imageSrc: "img/ff.png",
    link: "src/pages/topup/joki-ff.html",
  },
  {
    name: "Genshin",
    imageSrc: "img/genshin.png",
    link: "src/pages/topup/joki-genshin.html",
  },
];

const defaultMenuHTML = menuContainer.innerHTML;

function changeMenu(menuData) {
  menuContainer.innerHTML = "";
  menuData.forEach((item, index) => {
    const container = document.getElementById("menu-container");
    const kategoriDiv = document.createElement("div");
    kategoriDiv.className = "kategori flex flex-col items-center w-[80%]";

    kategoriDiv.setAttribute("data-aos", "fade-up");
    kategoriDiv.setAttribute("data-aos-duration", "800");
    kategoriDiv.setAttribute("data-aos-delay", `${index * 150}`);

    const isSosmedOrApk =
      sosmedMenu.some((m) => m.name === item.name) ||
      apkPremiumMenu.some((m) => m.name === item.name);

    const imageClass = isSosmedOrApk ? "" : "relative top-4";

    kategoriDiv.innerHTML = `
      <div class="circle-menu flex justify-center items-center w-28 h-28 border-2 border-pink-300 rounded-full bg-radial-custom shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.3),inset_4px_4px_10px_rgba(0,0,0,0.5),0_4px_15px_rgba(0,0,0,0.7)] hover:scale-[0.97] hover:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.4),inset_2px_2px_6px_rgba(0,0,0,0.6),0_2px_10px_rgba(0,0,0,0.6)] transition-all duration-500 cursor-pointer overflow-hidden">
        <a href="${item.link}">
          <img src="${item.imageSrc}" alt="${item.name}" class="${imageClass}" />
        </a>
      </div>
      <a href="${item.link}" class="text-md font-bold text-black font-sans w-max py-4">${item.name}</a>
    `;

    container.appendChild(kategoriDiv);
  });

  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
}

sosmedBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Sosmed button clicked");
  changeMenu(sosmedMenu);
});

apkBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("APK button clicked");
  changeMenu(apkPremiumMenu);
});

jokiBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Joki button clicked");
  changeMenu(jokiMenu);
});

topupBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Topup button clicked");
  menuContainer.innerHTML = defaultMenuHTML;

  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
});
