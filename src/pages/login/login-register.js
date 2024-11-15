document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("signInBtn");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../../../index.html";
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}
