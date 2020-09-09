// Main menu
const navOpenBtn = document.querySelector(".js-toggle-nav-button");
const body = document.querySelector("body");

navOpenBtn.addEventListener("click", function () {
  body.classList.toggle("is-nav-open");
});
// Main menu -- end

// Slider
const sliderBeforeBtn = document.querySelector(".js-button-before");
const sliderAfterBtn = document.querySelector(".js-button-after");
const slideBefore = document.querySelector(".js-slide-before");
const slideAfter = document.querySelector(".js-slide-after");
const sliderGrip = document.querySelector(".js-slider-grip");

if (sliderBeforeBtn) {
  sliderBeforeBtn.addEventListener("click", function () {
    slideBefore.classList.add("show");
    slideAfter.classList.remove("show");
    if (sliderGrip.classList.contains("after")) {
      sliderGrip.classList.add("before");
      sliderGrip.classList.remove("after");
    }
  });
}

if (sliderAfterBtn) {
  sliderAfterBtn.addEventListener("click", function () {
    slideBefore.classList.remove("show");
    slideAfter.classList.add("show");
    if (sliderGrip.classList.contains("before")) {
      sliderGrip.classList.remove("before");
      sliderGrip.classList.add("after");
    }
  });
}
// Slider -- end

let myMap;
let myPlacemark;

function setMapProps() {
  const viewport = document.documentElement.clientWidth;

  const tabletWidth = 768;
  const desktopWidth = 1280;

  if (viewport >= tabletWidth) {
    myPlacemark.options.set("iconImageSize", [120, 105]);
    myPlacemark.options.set("iconImageOffset", [-55, -100]);
  } else {
    myPlacemark.options.set("iconImageSize", [60, 52]);
    myPlacemark.options.set("iconImageOffset", [-25, -45]);
  }


  if (viewport >= desktopWidth) {
    myMap.setCenter([59.938765, 30.319771]);
  } else {
    myMap.setCenter([59.938742, 30.322991]);
  }
}

ymaps.ready(init);

function init(){
  myMap = new ymaps.Map("map", {
    center: [59.938742, 30.322991],
    zoom: 17,
    controls: []
  });

  myPlacemark = new ymaps.Placemark([59.938742, 30.322991], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/map-pin.png",
    iconImageSize: [60, 52],
    iconImageOffset: [-25, -45]
  });


  window.onresize = function () {
    setMapProps();
  };
  setMapProps();
  myMap.geoObjects.add(myPlacemark);
}
