// =====>>>
// OnClick of "Next Step" btn, move to the next step
// =====>>>
const stepsBtn = document.querySelectorAll(".steps-btn");
const inputV = document.querySelectorAll(".in");
const pi = document.querySelectorAll(".pi");

stepsBtn.forEach((eachStepBtn) => {
    eachStepBtn.onclick = (e) => {
        let parent = e.currentTarget.parentElement;
        let parentNextSibling = e.currentTarget.parentElement.nextElementSibling;
        
        
        parent.style.display = "none";
        parentNextSibling.style.display = "block";

        // emptySpace();
        testing();
        circles();

        // Using Tenary operation to display thank-you container in block
        thankYou.style.display == "block" ? thankYou.style.display = "flex" : thankYou.style.display = "none";
    }
});


// =====>>>
// OnClick of "Go Back" btn, move to previous step
// =====>>>
const goBackBtn = document.querySelectorAll(".go-back-btn");

goBackBtn.forEach((eachBackBtn) => {
    eachBackBtn.onclick = (e) => {
        let backParent = e.currentTarget.parentElement;
        let backParentPrevious = e.currentTarget.parentElement.previousElementSibling;
        
        backParent.style.display = "none";
        backParentPrevious.style.display = "block";
        circles();
        
        // To remove each background color when clicking "Go Back" btn
        if(fourthCircle.classList.contains("added-background-color")) {
            fourthCircle.classList.remove("added-background-color");
        }
        else if(thirdCircle.classList.contains("added-background-color")) {
            thirdCircle.classList.remove("added-background-color");
        }
        else if(secondCircle.classList.contains("added-background-color")) {
            secondCircle.classList.remove("added-background-color");
        }
    }
});


// =====>>>
// PERSONAL INFO: Throw an error msg if at least one input is empty
// =====>>>
function testing() {
    inputV.forEach((inp, j) => {
        if(inp.value == "") {
            pi[j].innerHTML = "This field is required";
            stepOneArticle.style.display = "block";
            stepTwoArticle.style.display = "none";
        }
        else {
            pi[j].innerHTML = "";
        }
    });
}


// const personalInfoName = document.querySelector(".personal-info-name");
// const personalInfoEmail = document.querySelector(".personal-info-email");
// const personalInfoNum = document.querySelector(".personal-info-num");

// const requiredName = document.querySelector(".required-name");
// const requiredEmail = document.querySelector(".required-email");
// const requiredNum = document.querySelector(".required-num");
// 
// function emptySpace() {
//         // Name input if-statement
//         if(personalInfoName.value == "") {
//             console.log("Name is empty");
//             requiredName.innerHTML = "This field is required";
//             stepOneArticle.style.display = "block";
//             stepTwoArticle.style.display = "none";
//         }
//         else {
//             requiredName.innerHTML = "";
//         }

//         // Email input if-statement
//         if(personalInfoEmail.value == "") {
//             console.log("Email is emoty");
//             requiredEmail.innerHTML = "This field is required";
//             stepOneArticle.style.display = "block";
//             stepTwoArticle.style.display = "none";
//         }
//         else {
//             requiredEmail.innerHTML = "";
//         }

//         // Number input if-statement
//         if(personalInfoNum.value == "") {
//             console.log("Number is empty");
//             requiredNum.innerHTML = "This field is required";
//             stepOneArticle.style.display = "block";
//             stepTwoArticle.style.display = "none";
//         }
//         else {
//             requiredNum.innerHTML = "";
//         }
// }


// =====>>>
// Select your plan
// =====>>>
const durationCon = document.querySelector(".duration-container");
const switchIcon = document.querySelector(".switch-icon");
let firstIconChild = switchIcon.children[0];

// const monthlySwitcher = 


// const monthlySwitcher = switchIcon.querySelector(".fa-toggle-off");
// const yearlySwitcher = switchIcon.querySelector(".fa-toggle-on");
// console.log(monthlySwitcher);
// console.log(yearlySwitcher);

// monthlySwitcher.onclick = () => {
//     console.log("I am monthly");
// }


