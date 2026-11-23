// Draw the "detection boxes" around the hero words, one after another.
document.querySelectorAll(".det").forEach(function (el, i) {
  setTimeout(function () { el.classList.add("on"); }, 500 + i * 450);
});

// Copy email button
var copyBtn = document.getElementById("copy");
if (copyBtn) {
  copyBtn.addEventListener("click", function () {
    var email = "nomendsahu22@gmail.com";
    var done = function () {
      copyBtn.textContent = "Copied";
      setTimeout(function () { copyBtn.textContent = "Copy email"; }, 1800);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(done);
    } else {
      window.prompt("Copy this email:", email);
    }
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
