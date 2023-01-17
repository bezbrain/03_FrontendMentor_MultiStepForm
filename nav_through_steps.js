// =====>>>
// OnClick of "Next Step" btn, move to the next step
// =====>>>
const stepsBtn = document.querySelectorAll(".steps-btn");
const selectAPlan = document.querySelector(".select-plan");


let selectedPlan = "";

stepsBtn.forEach((eachStepBtn, j) => {
    eachStepBtn.onclick = (e) => {
        let parent = e.currentTarget.parentElement;
        let parentNextSibling = e.currentTarget.parentElement.nextElementSibling;
        
        // If Statement to stop moving to next step if no plan is clicked
        if(j === 1) {
            if(!selectedPlan) {
                parent.style.display = "block";
                parentNextSibling.style.display = "none";
                selectAPlan.textContent = "please, select a plan";
                
            }
            else {
                parent.style.display = "none";
                parentNextSibling.style.display = "block";
            }
        }
        else {
            parent.style.display = "none";
            parentNextSibling.style.display = "block";
        }
        
        // emptySpace();
        finishingUp();
        addOns();
        circles();

        // Using Tenary operator to display thank-you container in block
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
let billType = "monthly";

monthlySwitcher.onclick = () => {
    if(getZIndexMonthly.zIndex == "20") {
        monthlySwitcher.style.zIndex = "-20";
        yearlySwitcher.style.zIndex = "20";
        switchTextColorMonth.style.fontWeight = "200";
        switchTextColorYear.classList.add("text-color-year");
        billType = "yearly";

        yearText.forEach((eachYearText, j) => {
            eachYearText.textContent = "2 months free";
        });

        arcadeAmt.textContent = "$90/yr";
        advAmt.textContent = "$120/yr";
        proAmt.textContent = "$150/yr";
    }
    // console.log(billType);
}

yearlySwitcher.onclick = () => {
    if(getZIndexYearly.zIndex == "20") {
        yearlySwitcher.style.zIndex = "-20";
        monthlySwitcher.style.zIndex = "20";
        switchTextColorYear.classList.remove("text-color-year");
        switchTextColorMonth.style.fontWeight = "800";
        billType = "monthly";

        yearText.forEach((eachYearText) => {
            eachYearText.textContent = "";
        });

        arcadeAmt.textContent = "$9/mo";
        advAmt.textContent = "$12/mo";
        proAmt.textContent = "$15/mo";  
    }
    // console.log(billType);
}

// Picking preferred plan

plans.forEach((eachPlan) => {
    eachPlan.onclick = (e) => {
        plans.forEach((defaultBorder) => {
            defaultBorder.style.border = "2px solid hsl(231, 11%, 63%)";
        });
        e.currentTarget.style.border = "4px solid hsl(231, 20%, 54%)";
        selectedPlan = eachPlan.children[1].children[0].textContent;
        selectAPlan.textContent = "";
    }
});




// =====>>>
// Pick add-ons
// =====>>>
const addOnArr = [
    {
        name: "Online service",
        duration: function() {
            if(billType == "monthly") {
                return "+$1/mo";
            }
            else {
                return "+10/yr";
            }
        }
    },

    {
        name: "Large storage",
        duration: function() {
            if(billType == "monthly") {
                return "+$2/mo";
            }
            else {
                return "+20/yr";
            }
        }
    },

    {
        name: "Customizable profile",
        duration: function() {
            if(billType == "monthly") {
                return "+$2/mo";
            }
            else {
                return "+20/yr";
            }
        }
    },
];


const price = document.querySelectorAll(".price");

// Function to put the amounts for respective duration
function addOns() {
    price.forEach((eachPrice, j) => {
        eachPrice.textContent = addOnArr[j].duration();
    });
}




// =====>>>
// Finishing Up
// =====>>>
const planArr = [
    {
        name: "Arcade",
        duration: function() {
            if(billType == "monthly") {
                return "$9/mo";
            }
            else {
                return "$90/yr";
            }
        },
        category: "arc",
    },

    {
        name: "Advanced",
        duration: function() {
            if(billType == "monthly") {
                return "$12/mo";
            }
            else {
                return "$120/yr";
            }
        },
        category: "adv",
    },

    {
        name: "Pro",
        duration: function() {
            if(billType == "monthly") {
                return "$15/mo";
            }
            else {
                return "$150/yr";
            }
        },
        category: "pro",
    }
];

const finishContent = document.querySelector(".finish-content");
const arcadePara = finishContent.querySelector("p");

const amt = finishContent.nextElementSibling;

function finishingUp() {
    if(selectedPlan == "Arcade") {
            // console.log("I am Arcade");
            arcadePara.textContent = planArr[0].name;
            amt.textContent = planArr[0].duration();
        }
        else if(selectedPlan == "Advanced") {
            // console.log("I am Advance");
            arcadePara.textContent = planArr[1].name;
            amt.textContent = planArr[1].duration();
        }
        else {
            // console.log("I am Pro");
            arcadePara.textContent = planArr[2].name;
            amt.textContent = planArr[2].duration();
    }
}


const checkBox = document.querySelectorAll(".checkb");
console.log(checkBox);

checkBox.forEach((eachCheckBox) => {
    eachCheckBox.onclick = (e) => {
        console.log(e.currentTarget);
    }
})









