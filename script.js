"use strict";

shuffle();

function shuffleArray(arr) {
  for (var i = 0, shuffled = [], randomIndex = 0; i < arr.length; i++) {
    randomIndex = Math.floor(Math.random() * arr.length);
    while (shuffled.indexOf(arr[randomIndex]) !== -1) {
      randomIndex = Math.floor(Math.random() * arr.length);
    }
    shuffled.push(arr[randomIndex]);
  }

  return shuffled;
}

function shuffle() {
  let arr = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
  ];
  let html = "";
  shuffleArray(arr).forEach(function (item) {
    html +=
      "<img src='images/" +
      item +
      "' width='350=' height='220' style='margin:15px;'>";
  });

  document.getElementById("result").innerHTML = html;
}

function hideShow() {
  let x = document.getElementById("result");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
