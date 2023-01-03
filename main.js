// Background Color for each aside step
// =====>>>
// Selecting Needed Tags
// =====>>>
const constantAside = document.querySelector(".constantAside");

const stepOneArticle = document.querySelector(".step-one-article");
const stepTwoArticle = document.querySelector(".step-two-article");
const stepThreeArticle = document.querySelector(".step-three-article");
const stepFourArticle = document.querySelector(".step-four-article");
const thankYou = document.querySelector(".thank-you");


// =====>>>
// Getting the display:none property 
// =====>>>
let getStyleOne = window.getComputedStyle(stepOneArticle);
let getStyleTwo = window.getComputedStyle(stepTwoArticle);
let getStyleThree = window.getComputedStyle(stepThreeArticle);
let getStyleFour = window.getComputedStyle(stepFourArticle);
// console.log(getStyle.display);

// let displayType = getStyle.getPropertyValue("display");
// console.log(displayType);


// =====>>>
// Selecting each circle
// =====>>>
let firstCircle = constantAside.children[0].firstChild.nextElementSibling;
let secondCircle = constantAside.children[1].firstChild.nextElementSibling;
let thirdCircle = constantAside.children[2].firstChild.nextElementSibling;
let fourthCircle = constantAside.children[3].firstChild.nextElementSibling;



if(getStyleOne.display !== "none") {
    console.log("I am flex ONE");
    firstCircle.classList.add("added-background-color");
}
else if(getStyleTwo.display !== "none") {
    console.log("I am flex TWO");
    secondCircle.classList.add("added-background-color");
}
else if(getStyleThree.display !== "none") {
    console.log("I am flex THREE");
    thirdCircle.classList.add("added-background-color");
}
else if(getStyleFour.display !== "none") {
    console.log("I am flex FOUR");
    fourthCircle.classList.add("added-background-color");
}
else {
    console.log("I am flex FIVE");
    fourthCircle.classList.add("added-background-color");
}


