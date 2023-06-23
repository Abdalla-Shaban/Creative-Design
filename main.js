let fixdNav = document.querySelector(".fixed-nav");

let bullets = document.querySelectorAll(".bullet");

let links = document.querySelectorAll(".links li a");

let linksUl = document.querySelector("nav ul");

let upButton = document.querySelector(".up-button button");

let ourskills = document.querySelector(".skills");

let date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

scrollToView(bullets);
scrollToView(links);

window.onscroll = () => {
  if (window.scrollY >= ourskills.offsetTop - 580) {
    skillsProg();
  }
  if (window.scrollY >= 1100) {
    upButton.classList.remove("-right-20");
    upButton.classList.add("right-5");
  } else {
    upButton.classList.remove("right-5");
    upButton.classList.add("-right-20");
  }
};

getCustomStorage("--main-bg-color", "main-bg");
getCustomStorage("--main-color", "selected-color");
getStorage("hidden-option", fixdNav);
getStorage("fixed-option", fixdNav);

let landing = document.querySelector(".landing");
let bgImgsLis = document.querySelectorAll(".bg-imgs ul li img");
bgImgsLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    landing.style.backgroundImage = `url("/imgs/${e.target.dataset.background}.jpg")`;
    localStorage.setItem(
      "background-image",
      `url("/imgs/${e.target.dataset.background}.jpg")`
    );
  });
});
if (localStorage.getItem("background-image") !== null) {
  landing.style.setProperty(
    "background-image",
    localStorage.getItem("background-image")
  );
}

let imgArr = [];
for (let i = 0; i < 14; i++) {
  imgArr.push(`bg-${i + 1}`);
}
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let bgOption = true,
  bgInterval;
startBtn.addEventListener("click", (e) => {
  bgOption = true;
  bgInterval = setInterval(() => {
    let randomNum = Math.floor(Math.random() * imgArr.length);
    landing.style.backgroundImage = `url("/imgs/${imgArr[randomNum]}.jpg")`;
  }, 3000);
});
stopBtn.addEventListener("click", (e) => {
  bgOption = false;
  clearInterval(bgInterval);
});

let settingBtn = document.querySelector(".setting-btn");
let asideSetting = document.querySelector(".setting");
settingBtn.addEventListener("click", (e) => {
  settingBtn.classList.toggle("left-0");
  settingBtn.classList.toggle("left-80");
  asideSetting.classList.toggle("left-0");
  asideSetting.classList.toggle("-left-80");
  document.querySelector(".setting-btn i").classList.toggle("fa-spin");
});

let colorsList = document.querySelectorAll(".colors-list ul li");
let spansProg = document.querySelectorAll(".skill-box span span");
colorsList.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("selected-color", e.target.dataset.color);
    spansProg.forEach(() => {
      document.documentElement.style.setProperty(
        "--main-bg-color",
        e.target.dataset.color
      );
      localStorage.setItem("main-bg", e.target.dataset.color);
    });
  });
});

let galleryImg = document.querySelectorAll(".gallery-container img");
galleryImg.forEach((img) => {
  img.addEventListener("click", () => {
    let imgPopUp = document.createElement("img");
    imgPopUp.src = img.src;
    let span = document.createElement("span");
    span.style.cssText =
      "display: block; width: 25px; height: 25px; line-height: 25px; position: absolute; top: -15px; right: -15px; font-size: 15px; font-weight: bold; border-radius: .3rem; background-color: var(--main-bg-color); color: white; cursor: pointer;";
    span.textContent = "X";
    let imgDiv = document.createElement("div");
    imgDiv.style.cssText =
      "background-size: cover; text-align: center; position: fixed; left: 50%; top: 50%;  transform: translate(-50%, -50%); background-color: #ddd; padding: 20px; border-radius: .5rem; z-index: 9999;";
    span.addEventListener("click", () => {
      imgDiv.remove();
    });
    imgDiv.appendChild(imgPopUp);
    imgDiv.appendChild(span);
    document.body.appendChild(imgDiv);
  });
});

let enableNav = document.getElementById("enable");
let disableNav = document.getElementById("disable");
enableNav.addEventListener("click", () => {
  fixdNav.classList.add("fixed");
  fixdNav.classList.remove("hidden");
  localStorage.setItem("fixed-option", "fixed");
  localStorage.removeItem("hidden-option");
});
disableNav.addEventListener("click", () => {
  fixdNav.classList.remove("fixed");
  fixdNav.classList.add("hidden");
  localStorage.setItem("hidden-option", "hidden");
  localStorage.removeItem("fixed-option");
});

document.querySelector(".reset-btn").addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});

function skillsProg() {
  spansProg.forEach((span) => {
    span.style.width = span.dataset.prog;
  });
}

let barsIcon = document.querySelector(".fa-bars");
let xmarkIcon = document.querySelector(".fa-xmark");
barsIcon.addEventListener("click", () => {
  linksUl.classList.remove("hidden");
  xmarkIcon.classList.remove("hidden");
  barsIcon.classList.add("hidden");
});
xmarkIcon.addEventListener("click", () => {
  linksUl.classList.add("hidden");
  barsIcon.classList.remove("hidden");
  xmarkIcon.classList.add("hidden");
});

upButton.onclick = () => {
  window.scrollTo({
    behavior: "smooth",
    top: "0",
  });
};

function scrollToView(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.bullet).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

function getStorage(key, ele) {
  if (localStorage.getItem(key) !== null) {
    ele.classList.add(localStorage.getItem(key));
  }
}

function getCustomStorage(key, value) {
  if (localStorage.getItem(value) !== null) {
    document.documentElement.style.setProperty(
      key,
      localStorage.getItem(value)
    );
  }
}

import Headroom from ".././node_modules/headroom.js/dist/headroom.js";
let header = document.querySelector("header");
let headRoom = new Headroom(header);
headRoom.init();
