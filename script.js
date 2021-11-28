"use strict";

let img = document.querySelectorAll("img");

function shuffle() {
  for (let i = 0; i < img.length; i++) {
    let rand = Math.floor(Math.random() * img.length);
    result.appendChild(img[rand]);
  }
}

function hideShow() {
  let x = document.getElementById("result");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
