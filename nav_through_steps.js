// =====>>>
// OnClick of "Next Step" btn, move to the next step
// =====>>>
const stepsBtn = document.querySelectorAll(".steps-btn");

stepsBtn.forEach((eachStepBtn) => {
    eachStepBtn.onclick = (e) => {
        let parent = e.currentTarget.parentElement;
        let parentNextSibling = e.currentTarget.parentElement.nextElementSibling;
        
        parent.style.display = "none";
        parentNextSibling.style.display = "block";
        emptySpace();
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
const personalInfoName = document.querySelector(".personal-info-name");
const personalInfoEmail = document.querySelector(".personal-info-email");
const personalInfoNum = document.querySelector(".personal-info-num");

const requiredName = document.querySelector(".required-name");
const requiredEmail = document.querySelector(".required-email");
const requiredNum = document.querySelector(".required-num");

function emptySpace() {
        // Name input if-statement
        if(personalInfoName.value == "") {
            requiredName.innerHTML = "This field is required";
            stepOneArticle.style.display = "block";
            stepTwoArticle.style.display = "none";
        }
        else {
            requiredName.innerHTML = "";
            stepOneArticle.style.display = "none";
        }

        // Email input if-statement
        if(personalInfoEmail.value == "") {
            requiredEmail.innerHTML = "This field is required";
            stepOneArticle.style.display = "block";
            stepTwoArticle.style.display = "none";
        }
        else {
            requiredEmail.innerHTML = "";
            stepOneArticle.style.display = "none";
        }

        // Number input if-statement
        if(personalInfoNum.value == "") {
            requiredNum.innerHTML = "This field is required";
            stepOneArticle.style.display = "block";
            stepTwoArticle.style.display = "none";
        }
        else {
            requiredNum.innerHTML = "";
            stepOneArticle.style.display = "none";
        }
}



