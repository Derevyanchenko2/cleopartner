// burger-menu
document.querySelector(".open-menu-js").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.add("open");
  document.body.style.overflowX = "hidden";
});

document.querySelector(".mobileMenu-close").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.remove("open");
  document.body.style.overflowX = "auto";
});



// Slider
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.reviews-swiper', {
    observer: true,
    observeParents: true,
    slidesPerView: "auto",
    speed: 800,
      navigation: {
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
      },
  });
});

//accordion
var acc = document.getElementsByClassName("questions-accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
  if (i === 0) { //first accordion 
    acc[i].classList.add("active");
    var panel = acc[i].nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const insuranceRange = document.getElementById("insurance-range");
  const period = document.getElementById("range-month");
  const cost = document.getElementById("range-price");

  if (insuranceRange && period && cost) {
      insuranceRange.addEventListener("input", function() {
          const currentValue = parseInt(insuranceRange.value, 10) / 100; 
          period.textContent = currentValue + " месяца";
          cost.textContent = currentValue * 100 + " злотых"; 
      });
  }
});



//map 


