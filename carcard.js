// code for Mercedes//
const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("red mercedes.jpeg")';
  });
  grayColor[0].addEventListener("click", function () {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("greybenz.jpeg")';
  });
  blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("black benz.jpeg")';
  });
  const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
  };
  cartButton.addEventListener("click", cart);
  const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
  };
  feedbackBtn.addEventListener("click", feedback);
  //code for audi
const redColor2 = document.querySelector(".red2");
const blackColor2 = document.querySelector(".black2");
const imageCard2= document.querySelector(".product-image2");
const feedbackBtn2 = document.querySelector(".feedback2");
const grayColor2 = document.getElementsByClassName("gray2");
const cartButton2 = document.getElementById("button2");
const itemTag2 = document.getElementsByTagName("h3")[0];
redColor2.addEventListener("click", function () {
    cartButton2.style.backgroundColor = "red2";
    itemTag2.style.backgroundColor = "red2";
    imageCard2.style.backgroundImage = 'url("redaudi.jpeg")';
  });
  grayColor2[0].addEventListener("click", function () {
    cartButton2.style.backgroundColor = "gray2";
    itemTag2.style.backgroundColor = "gray2";
    imageCard2.style.backgroundImage = 'url("grayaudi.jpeg")';
  });
  blackColor2.addEventListener("click", function () {
    cartButton2.style.backgroundColor = "black2";
    itemTag2.style.backgroundColor = "black2";
    imageCard2.style.backgroundImage = 'url("blackaudi.jpeg")';
  });
  const cart2 = () => {
    cartButton2.style.display = "none";
    feedbackBtn2.style.display = "block";
  };
  cartButton.addEventListener("click", cart);
  const feedback2 = () => {
    cartButton2.style.display = "block";
    feedbackBtn2.style.display = "none";
  };
  feedbackBtn2.addEventListener("click", feedback);
  //code for Aston Martin//
  const redColor3 = document.querySelector(".red3");
const blackColor3 = document.querySelector(".black3");
const imageCard3= document.querySelector(".product-image3");
const feedbackBtn3 = document.querySelector(".feedback3");
const grayColor3 = document.getElementsByClassName("gray3");
const cartButton3 = document.getElementById("button3");
const itemTag3 = document.getElementsByTagName("h3")[0];
redColor3.addEventListener("click", function () {
    cartButton3.style.backgroundColor = "red3";
    itemTag3.style.backgroundColor = "red3";
    imageCard3.style.backgroundImage = 'url("redchevloret.jpeg")';
  });
  grayColor3[0].addEventListener("click", function () {
    cartButton3.style.backgroundColor = "gray3";
    itemTag3.style.backgroundColor = "gray3";
    imageCard3.style.backgroundImage = 'url("graychevloret.jpeg")';
  });
  blackColor3.addEventListener("click", function () {
    cartButton3.style.backgroundColor = "black3";
    itemTag3.style.backgroundColor = "black3";
    imageCard3.style.backgroundImage = 'url("blackchevloret.jpeg")';
  });
  const cart3 = () => {
    cartButton3.style.display = "none";
    feedbackBtn3.style.display = "block";
  };
  cartButton3.addEventListener("click", cart);
  const feedback3 = () => {
    cartButton3.style.display = "block";
    feedbackBtn3.style.display = "none";
  };
  feedbackBtn3.addEventListener("click", feedback);