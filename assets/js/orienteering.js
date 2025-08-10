import { initializeGallery } from "../../assets/js/loadImages.js";

async function loadJSON() {
      const response = await fetch('assets/js/images.json');
      const data = await response.json();
      return data;
    }

document.addEventListener("DOMContentLoaded", () => {
  init();
});

async function init() {
  const json = await loadJSON();
  const filterBtnContainer = document.getElementById("filter-container");
  const imageContainer = document.getElementById("image-container")

  const images = json["orienteering"]

    const filterBtnFunction = (span, event) => {
        let activeFilter = document.getElementById("active");
        activeFilter.removeAttribute("id");
        span.setAttribute("id", "active")
        imageContainer.innerHTML = "";
        initializeGallery(images[event], "media/sports");
    }

  let flag = 0;
  Object.keys(images).forEach((event) => {
    const span = document.createElement("span");
    span.textContent = event;
    span.classList.add("filter");

    const params = new URLSearchParams(window.location.search);
    const catalogue = params.get("catalogue");
    if (flag === 0 & catalogue === null) {
      span.setAttribute("id", "active");
      flag = 1;
      initializeGallery(images[Object.keys(images)[0]], "media/sports");
    }
    else if (catalogue === event){
      span.setAttribute("id", "active");
      initializeGallery(images[event], "media/sports");
    }


    span.addEventListener("click", () => {
      filterBtnFunction(span, event);
    });

    filterBtnContainer.appendChild(span);
  });

  if (window.updateButtonVisibility) {
    window.updateButtonVisibility();
  }
}