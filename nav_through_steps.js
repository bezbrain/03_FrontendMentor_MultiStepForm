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

        // emptySpace();
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
const inputV = document.querySelectorAll(".in");
const pi = document.querySelectorAll(".pi");

function emptySpace() {
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




// =====>>>
// Select your plan
// =====>>>
const plans = document.querySelectorAll(".plans");

const arcadeAmt = document.querySelector(".arcade-amount");
const advAmt = document.querySelector(".adv-amount");
const proAmt = document.querySelector(".pro-amount");

const switchIcon = document.querySelector(".switch-icon");
const monthlySwitcher = document.querySelector(".monthly");
const yearlySwitcher = document.querySelector(".yearly");
const yearText = document.querySelectorAll(".yearly-text");


const switchTextColorYear = switchIcon.children[3];
const switchTextColorMonth = switchIcon.children[0];

const getZIndexMonthly = window.getComputedStyle(monthlySwitcher);
const getZIndexYearly = window.getComputedStyle(yearlySwitcher);

// Toggling Monthly/Yearly
monthlySwitcher.onclick = () => {
    if(getZIndexMonthly.zIndex == "20") {
        monthlySwitcher.style.zIndex = "-20";
        yearlySwitcher.style.zIndex = "20";
        switchTextColorMonth.style.fontWeight = "200";
        switchTextColorYear.classList.add("text-color-year");

        yearText.forEach((eachYearText, j) => {
            eachYearText.textContent = "2 months free";
        });

        arcadeAmt.textContent = "$90/yr";
        advAmt.textContent = "$120/yr";
        proAmt.textContent = "$150/yr";
    }
}

yearlySwitcher.onclick = () => {
    if(getZIndexYearly.zIndex == "20") {
        yearlySwitcher.style.zIndex = "-20";
        monthlySwitcher.style.zIndex = "20";
        switchTextColorYear.classList.remove("text-color-year");
        switchTextColorMonth.style.fontWeight = "800";

        yearText.forEach((eachYearText) => {
            eachYearText.textContent = "";
        });

        arcadeAmt.textContent = "$9/mo";
        advAmt.textContent = "$12/mo";
        proAmt.textContent = "$15/mo";
        
    }
}

// Picking preferred plan
plans.forEach((eachPlan) => {
    eachPlan.onclick = (e) => {
        plans.forEach((defaultBorder) => {
            defaultBorder.style.border = "2px solid hsl(231, 11%, 63%)";
        });
        
        e.currentTarget.style.border = "4px solid hsl(231, 20%, 54%)";
    }
});




