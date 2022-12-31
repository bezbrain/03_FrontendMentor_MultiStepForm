const constantAside = document.querySelector(".constantAside");

let constantAsideChildren = [...constantAside.children];
console.log(constantAsideChildren);


window.onload = () => {
    const screenResize = window.innerWidth;

    if(screenResize <= 720) {
        constantAside.style.left = "0px";
        constantAsideChildren.forEach((eachChild) => {
            eachChild.style.marginBottom = "0px";
        });
        
        console.log("Screen resized");
    }
}