function modifyNavbarContent(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const links = doc.querySelectorAll("a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href) {
      if (href === "/" || href === "#" || href === "index.html") {
        link.setAttribute("href", "../../../index.html");
      } else if (href.startsWith("src/pages/")) {
        link.setAttribute("href", href.replace("src/pages/", "../"));
      }
    }
  });

  const images = doc.querySelectorAll("img");
  images.forEach((img) => {
    const src = img.getAttribute("src");
    if (src) {
      // Mengubah path gambar
      if (src.startsWith("img/")) {
        img.setAttribute("src", `../../../${src}`);
      }
    }
  });

  return doc.body.innerHTML;
}

fetch("../../../src/components/navbar/navbar.html")
  .then((response) => response.text())
  .then((html) => {
    const modifiedHtml = modifyNavbarContent(html);
    document.getElementById("navbar-container").innerHTML = modifiedHtml;
    const script = document.createElement("script");
    script.src = "../../../src/components/navbar/navbar.js";
    document.body.appendChild(script);
  })
  .catch((error) => console.error("Error loading navbar:", error));

// Fetch features dengan path yang disesuaikan
fetch("../../../src/components/features/features.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("features-container").innerHTML = html;
    const custom = document.createElement("link");
    custom.href = "../../../src/styling/custom.css";
    custom.rel = "stylesheet";
    document.head.appendChild(custom);
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

// Fetch footer dengan path yang disesuaikan
fetch("../../../src/components/footers/footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("footer-container").innerHTML = html;
  })
  .catch((error) => console.error("Error loading footer:", error));
