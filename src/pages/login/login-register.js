document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("signInBtn");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../../../index.html";
  });
});
